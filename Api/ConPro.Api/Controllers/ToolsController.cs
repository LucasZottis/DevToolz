using BibliotecaPublica.Core.Helpers;
using DevTools.Core.Domain.Models.Tools;

namespace DevTools.Api.Controllers;

[Route( "api/[controller]" )]
[ApiController]
public class ToolsController : ControllerBase
{
    [HttpPut( nameof( Encrypt ) )]
    public async Task<IActionResult> Encrypt( [FromBody] CryptModel cryptModel )
    {
        try
        {
            var result = await Task.Run( () => CryptHelper.Encrypt( cryptModel.Text, cryptModel.Key, cryptModel.Provider ) );
            return Ok( result );
        }
        catch ( Exception ex )
        {
            return StatusCode( 500, ex.Message );
        }
    }

    [HttpPut( nameof( Decrypt ) )]
    public async Task<IActionResult> Decrypt( [FromBody] CryptModel cryptModel )
    {
        try
        {
            var result = await Task.Run( () => CryptHelper.Decrypt( cryptModel.Text, cryptModel.Key, cryptModel.Provider ) );
            return Ok( result );
        }
        catch ( Exception ex )
        {
            return StatusCode( 500, ex.Message );
        }
    }
}