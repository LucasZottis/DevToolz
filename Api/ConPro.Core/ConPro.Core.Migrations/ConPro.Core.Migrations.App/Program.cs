using BibliotecaPublica.Core.Models;

namespace DevTools.Core.Migrations.App;

public static class Program
{
    private static WebApplicationOptions BuildWebApplicationOptions( string[] args )
    {
        return new WebApplicationOptions()
        {
            ApplicationName = "ConPro.Core.Migrations.App",
            ContentRootPath = AppContext.BaseDirectory,
            Args = args,
        };
    }

    private static WebApplication BuildWebApplication( this WebApplicationOptions options )
    {
        var builder = WebApplication.CreateBuilder( options );

        builder.Configuration.InjectConfiguration();
        //builder.Services.InjectContext<ConProContext>();

        return builder.Build();
    }

    public static void Main( string[] args )
    {
        BuildWebApplicationOptions( args ).BuildWebApplication();
    }
}