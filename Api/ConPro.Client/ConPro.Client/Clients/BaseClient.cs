using ConPro.Client;
using ConPro.Client.Interfaces;
using Newtonsoft.Json;
using System.Text;

namespace ConPro.Client.Clients;

public class BaseClient : IBaseClient
{
    public HttpClient Client { get; private set; }

    public BaseClient( HttpClient client )
    {
        Client = client;
    }

    private async Task<StringContent> GetContent<TModel>( TModel model )
    {
        var json = string.Empty;

        if ( model != null )
            json = JsonConvert.SerializeObject( model );

        return new StringContent( json, Encoding.UTF8, @"application/json" );
    }

    protected async Task<string?> GetAsync( string endPoint )
    {
        var response = await Client.GetAsync( endPoint );

        if ( !response.IsSuccessStatusCode )
            return null;

        var responseContent = await response.Content.ReadAsStringAsync();

        return responseContent;
    }

    protected async Task<TReturn> GetAsync<TReturn>( string endPoint )
    {
        var response = await Client.GetAsync( endPoint );

        if ( !response.IsSuccessStatusCode )
            return default;

        var responseContent = await response.Content.ReadAsStringAsync();

        return JsonConvert.DeserializeObject<TReturn>( responseContent );
    }

    protected async Task<string?> PostAsync<TModel>( string endPoint, TModel model )
    {
        var content = await GetContent( model );
        var response = await Client.PostAsync( endPoint, content );

        if ( !response.IsSuccessStatusCode )
            return null;

        return await response.Content.ReadAsStringAsync();
    }

    protected async Task<string?> PostAsync( string endPoint )
    {
        var response = await Client.PostAsync( endPoint, null );

        if ( !response.IsSuccessStatusCode )
            return null;

        return await response.Content.ReadAsStringAsync();
    }

    protected async Task<string?> PutAsync<TModel>( string endPoint, TModel model )
    {
        var content = await GetContent( model );
        var response = await Client.PutAsync( endPoint, content );

        if ( !response.IsSuccessStatusCode )
            return null;

        return await response.Content.ReadAsStringAsync();
    }

    protected async Task<bool> DeleteAsync<TModel>( string endPoint, TModel model )
    {
        var content = await GetContent( model );
        var response = await Client.DeleteAsync( endPoint );
        return response.IsSuccessStatusCode;
    }

    protected async Task<bool> DeleteAsync( string endPoint )
    {
        var response = await Client.DeleteAsync( endPoint );
        return response.IsSuccessStatusCode;
    }

    public bool HealthCheck()
        => HealthChecker.Check( Client );

    public async Task<bool> HealthCheckAsync()
        => await HealthChecker.CheckAsync( Client );

    public void Dispose()
        => Client?.Dispose();
}