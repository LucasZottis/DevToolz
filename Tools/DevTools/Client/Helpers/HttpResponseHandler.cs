using System.Net;
using Tools.Client.Exceptions;
using Tools.Client.Services;

namespace Tools.Client.Helpers;

public static class HttpResponseHandler
{
    private static async Task HandleBadRequest( HttpResponseMessage httpResponseMessage )
    {
        var responseContent = await httpResponseMessage.Content.ReadAsStringAsync();
        var parseService = new JsonService( responseContent );
        var invalidations = parseService.ParseToInvalidationModel();

        throw new BadRequestException( invalidations );
    }

    private static async Task HandleInternalServerError( HttpResponseMessage httpResponseMessage )
    {
        var responseContent = await httpResponseMessage.Content.ReadAsStringAsync();
        throw new InternalErrorServerException( responseContent );
    }

    private static async Task HandleNotFound( HttpResponseMessage httpResponseMessage )
    {
        var responseContent = await httpResponseMessage.Content.ReadAsStringAsync();
        Console.WriteLine( responseContent );
        //throw new NotFoundException( responseContent );
    }

    public static async Task HandleResponse( HttpResponseMessage httpResponseMessage )
    {
        switch ( httpResponseMessage.StatusCode )
        {
            case HttpStatusCode.OK:
            case HttpStatusCode.NoContent:
            case HttpStatusCode.Created:
                break;
            case HttpStatusCode.BadRequest:
                await HandleBadRequest( httpResponseMessage );
                break;
            case HttpStatusCode.Unauthorized:
            //throw new UnauthorizedException();
            case HttpStatusCode.Forbidden:
            //throw new Exception( "Forbidden" );
            case HttpStatusCode.NotFound:
                await HandleNotFound( httpResponseMessage );
                break;
            case HttpStatusCode.InternalServerError:
                await HandleInternalServerError( httpResponseMessage );
                break;
            default:
                throw new Exception( "Unknown Error" );
        }
    }
}