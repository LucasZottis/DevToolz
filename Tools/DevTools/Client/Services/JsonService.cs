using BibliotecaPublica.Core.Models;
using Newtonsoft.Json.Linq;
using Tools.Client.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Tools.Client.Services;

public class JsonService
{
    private readonly string _json;

    public JsonService( string json )
    {
        _json = json;
    }

    private Notification ParseToNotification( JToken jToken )
    {
        return new Notification(
            jToken[ "id" ].ToString(),
            jToken[ "propertyName" ].ToString(),
            jToken[ "message" ].ToString()
        );
    }

    public InvalidationModel ParseToInvalidationModel()
    {
        var jsonObjeect = JObject.Parse( _json );
        var invalidationModel = new InvalidationModel();

        invalidationModel.Title = jsonObjeect[ "title" ].ToString();
        invalidationModel.Errors = jsonObjeect[ "errors" ].Select( ParseToNotification ).ToList();

        return invalidationModel;
    }
}