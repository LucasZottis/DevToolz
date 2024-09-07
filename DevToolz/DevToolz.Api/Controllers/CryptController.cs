using BibliotecaPublica.Core.Enums;
using BibliotecaPublica.Core.Helpers;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;
using System.Text;

namespace DevToolz.Api.Controllers;

[Route( "api/crypt" )]
[ApiController]
public class CryptController : ControllerBase
{
    private static byte[] GetIV( CryptProvider cryptProvider )
    {
        if ( cryptProvider != 0 )
        {
            return new byte[ 8 ] { 15, 111, 19, 46, 53, 194, 205, 249 };
        }

        return new byte[ 16 ]
        {
            15, 111, 19, 46, 53, 194, 205, 249, 5, 70,
            156, 234, 168, 75, 115, 204
        };
    }

    private static SymmetricAlgorithm GetAlgorithm( CryptProvider cryptProvider )
    {
        SymmetricAlgorithm symmetricAlgorithm = null;
        switch ( cryptProvider )
        {
            case CryptProvider.Rijndael:
                symmetricAlgorithm = new RijndaelManaged();
                break;
            case CryptProvider.RC2:
                symmetricAlgorithm = new RC2CryptoServiceProvider();
                break;
            case CryptProvider.DES:
                symmetricAlgorithm = new DESCryptoServiceProvider();
                break;
            case CryptProvider.TripleDES:
                symmetricAlgorithm = new TripleDESCryptoServiceProvider();
                break;
        }

        symmetricAlgorithm.Mode = CipherMode.CBC;
        return symmetricAlgorithm;
    }

    private static byte[] GetKeyBytes( SymmetricAlgorithm algorithm, string textKey )
    {
        string empty = string.Empty;
        if ( algorithm.LegalKeySizes.Length != 0 )
        {
            int num = textKey.Length * 8;
            int minSize = algorithm.LegalKeySizes[ 0 ].MinSize;
            int maxSize = algorithm.LegalKeySizes[ 0 ].MaxSize;
            int skipSize = algorithm.LegalKeySizes[ 0 ].SkipSize;
            if ( num > maxSize )
            {
                textKey = textKey.Substring( 0, maxSize / 8 );
            }
            else if ( num < maxSize )
            {
                int num2 = ( ( num <= minSize ) ? minSize : ( num - num % skipSize + skipSize ) );
                if ( num < num2 )
                {
                    textKey = textKey.PadRight( num2 / 8, '*' );
                }
            }
        }

        return new PasswordDeriveBytes( textKey, Encoding.ASCII.GetBytes( empty ) ).GetBytes( textKey.Length );
    }

    private async Task<string> PrivateEncrypt( string text, string key, CryptProvider cryptProvider )
    {
        SymmetricAlgorithm algorithm = GetAlgorithm( cryptProvider );
        byte[] bytes = Encoding.UTF8.GetBytes( text );
        byte[] keyBytes = GetKeyBytes( algorithm, key );
        algorithm.Key = keyBytes;
        algorithm.IV = GetIV( cryptProvider );
        ICryptoTransform transform = algorithm.CreateEncryptor();
        MemoryStream memoryStream = new MemoryStream();
        CryptoStream cryptoStream = new CryptoStream( memoryStream, transform, CryptoStreamMode.Write );
        cryptoStream.Write( bytes, 0, bytes.Length );
        cryptoStream.FlushFinalBlock();
        byte[] array = memoryStream.ToArray();
        var response = Convert.ToBase64String( array, 0, array.GetLength( 0 ) );

        return response;
    }

    private async Task<string> PrivateDecrypt( string text, string key, CryptProvider cryptProvider )
    {
        SymmetricAlgorithm algorithm = GetAlgorithm( cryptProvider );
        byte[] array = Convert.FromBase64String( text );
        byte[] keyBytes = GetKeyBytes( algorithm, key );
        algorithm.Key = keyBytes;
        algorithm.IV = GetIV( cryptProvider );
        ICryptoTransform transform = algorithm.CreateDecryptor();

        var response = new StreamReader( new CryptoStream( new MemoryStream( array, 0, array.Length ), transform, CryptoStreamMode.Read ) ).ReadToEnd();

        return response;
    }

    [HttpGet( "encrypt" )]
    public async Task<IActionResult> Encrypt( [FromQuery] string text, [FromQuery] string key, [FromQuery] CryptProvider cryptProvider )
    {
        try
        {
            var response = await PrivateEncrypt( text, key, cryptProvider );

            //if ( response != await PrivateDecrypt( response, key, cryptProvider ) )
            //    return BadRequest( "Não foi possível criptografar" );

            return Content( response, "text/plain", Encoding.UTF8 );
        }
        catch ( Exception ex )
        {
            return StatusCode( StatusCodes.Status500InternalServerError, ex.Message );
        }
    }

    [HttpGet( "decrypt" )]
    public async Task<IActionResult> Decrypt( [FromQuery] string text, [FromQuery] string key, [FromQuery] CryptProvider cryptProvider )
    {
        try
        {
            var response = await PrivateDecrypt( text, key, cryptProvider );

            //if ( response != await PrivateEncrypt( response, key, cryptProvider ) )
            //    return BadRequest( "Não foi possível descriptografar" );

            return Content( response, "text/plain", Encoding.UTF8 );
        }
        catch ( Exception ex )
        {
            return StatusCode( StatusCodes.Status500InternalServerError, ex.Message );
        }
    }
}