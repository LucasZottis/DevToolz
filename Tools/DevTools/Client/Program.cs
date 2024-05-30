using BibliotecaPublica.Core.Models;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Radzen;
using Tools.Client.Clients;
using Tools.Client.Clients.Interfaces;

namespace Tools.Client;

public class Program
{
    public static async Task Main( string[] args )
    {
        var builder = WebAssemblyHostBuilder.CreateDefault( args );
        builder.RootComponents.Add<App>( "#app" );
        builder.RootComponents.Add<HeadOutlet>( "head::after" );

        builder.Configuration.InjectConfiguration();

        builder.Services
            //.InjectClients()
            .AddScoped<IToolsClient, ToolsClient>()
            .AddRadzenComponents();

        var app = builder.Build();

        await app.RunAsync();
    }
}