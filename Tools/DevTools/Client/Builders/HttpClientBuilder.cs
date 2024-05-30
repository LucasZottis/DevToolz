using BibliotecaPublica.Core.Models;

namespace Tools.Client.Builders;

public static class HttpClientBuilder
{
    public static HttpClient Build()
    {
        return new HttpClient()
        {
            BaseAddress = new Uri( AppSettings.GeneralSettings.ApiPath ),
        };
    }
}