using Newtonsoft.Json;
using System.Text;
using Tools.Client.Builders;
using Tools.Client.Clients.Interfaces;
using Tools.Client.Helpers;
using Tools.Client.Services;

namespace Tools.Client.Clients;

public class BaseClient : IBaseClient, IDisposable
{
    public HttpClient Client { get; private set; }

    public BaseClient()
    {
        Client = HttpClientBuilder.Build();
    }

    private async Task<StringContent> GetContent<TModel>( TModel model )
    {
        var json = string.Empty;

        if ( model != null )
            json = JsonConvert.SerializeObject( model );

        Console.WriteLine( json );

        return new StringContent( json, Encoding.UTF8, @"application/json" );
    }

    protected async Task<string?> GetAsync( string endPoint )
    {
        var response = await Client.GetAsync( endPoint );

        await HttpResponseHandler.HandleResponse( response );

        var responseContent = await response.Content.ReadAsStringAsync();

        return responseContent;
    }

    protected async Task<TReturn> GetAsync<TReturn>( string endPoint )
    {
        var response = await Client.GetAsync( endPoint );

        await HttpResponseHandler.HandleResponse( response );

        var responseContent = await response.Content.ReadAsStringAsync();

        return JsonConvert.DeserializeObject<TReturn>( responseContent );
    }

    protected async Task<string?> Patch( string endPoint )
    {
        var response = await Client.PatchAsync( endPoint, null );

        await HttpResponseHandler.HandleResponse( response );
        return await response.Content.ReadAsStringAsync();

    }

    protected async Task<string?> PostAsync<TModel>( string endPoint, TModel model )
    {
        var content = await GetContent( model );
        var response = await Client.PostAsync( endPoint, content );

        await HttpResponseHandler.HandleResponse( response );

        return await response.Content.ReadAsStringAsync();
    }

    protected async Task<string?> PostAsync( string endPoint )
    {
        var response = await Client.PostAsync( endPoint, null );

        await HttpResponseHandler.HandleResponse( response );

        return await response.Content.ReadAsStringAsync();
    }

    protected async Task<string?> PutAsync<TModel>( string endPoint, TModel model )
    {
        var content = await GetContent( model );
        var response = await Client.PutAsync( endPoint, content );

        await HttpResponseHandler.HandleResponse( response );

        return await response.Content.ReadAsStringAsync();
    }

    protected async Task<bool> DeleteAsync( string endPoint )
    {
        var response = await Client.DeleteAsync( endPoint );

        await HttpResponseHandler.HandleResponse( response );

        return response.IsSuccessStatusCode;
    }

    public async Task<bool> HealthCheckAsync()
        => await HealthChecker.CheckAsync( Client );

    public void Dispose()
        => Client?.Dispose();
}