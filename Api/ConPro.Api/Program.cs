using BibliotecaPublica.Core.Extensions;
using BibliotecaPublica.Core.Models;
using DevTools.Core.Repository;
using Microsoft.AspNetCore.HttpLogging;
using Octokit;

namespace DevTools.Api;

public static class Program
{
    private static WebApplicationOptions BuildWebApplicationOptions( string[] args )
    {
        return new WebApplicationOptions()
        {
            ApplicationName = "DevTools.Api",
            ContentRootPath = AppContext.BaseDirectory,
            Args = args,
        };
    }

    private static WebApplicationBuilder ConfigureServicesInjection( this WebApplicationBuilder builder )
    {
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        // Add services to the container.

        // Swagger Services
        builder.Services.AddEndpointsApiExplorer().AddSwaggerGen();

        // Commom Services
        builder.Services
            .InjectContext<Context>()
            .InjectCors()
            //.InjectScoped()
            //.InjectSingleton()
            //.AddScoped<IGitHubClient, GitHubClient>()
            //.AddSingleton( new ProductHeaderValue( "LucasZottis" ) )
            .AddHttpLogging( log =>
            {
                log.LoggingFields = HttpLoggingFields.RequestBody;
                log.RequestBodyLogLimit = 4096;
            } );

        builder.Services.AddHealthChecks();

        // Blazor Services
        if ( builder.Environment.IsProduction() )
        {
            builder.Services.AddRazorPages();
            builder.Services.AddControllersWithViews();
        }
        else
            builder.Services.AddControllers();

        return builder;
    }

    private static void ConfigureWebApplication( this WebApplication app )
    {
        /* API */
        // Configure the HTTP request pipeline.
        if ( app.Environment.IsDevelopment() )
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }
        else
        {
            app.UseSwagger();
            app.UseSwaggerUI( options =>
            {
                options.SwaggerEndpoint( "/swagger/v1/swagger.json", app.Environment.ApplicationName );
                options.InjectStylesheet( "/swagger/custom.css" );
            } );

            //app.UseExceptionHandler( "/Error" );
            app.UseHsts();
        }

        app.UseCors( "HabilitarOrigem" );
        app.UseDeveloperExceptionPage( new DeveloperExceptionPageOptions() );
        app.UseHttpLogging();
        app.UseAuthorization();
        app.MapHealthChecks( "/HealthCheck" );
        app.MapControllers();

        /* Blazor */
        if ( app.Environment.IsProduction() )
        {
            app.UseBlazorFrameworkFiles().UseStaticFiles();
            app.MapRazorPages();
            app.MapFallbackToFile( "index.html" );
        }

        /* Commom */
        app.UseHttpsRedirection();
        app.UseRouting();
    }

    private static WebApplication BuildWebApplication( WebApplicationOptions options )
    {
        var builder = WebApplication.CreateBuilder( options );

        builder.Configuration.InjectConfiguration();
        builder.Host.UseWindowsService( opcao => opcao.ServiceName = AppSettings.GetValue<string>( "GeneralSettings:ServiceName" ) );

        builder.ConfigureServicesInjection();

        return builder.Build();
    }

    public static async Task Main( string[] args )
    {
        var webApplicationOption = BuildWebApplicationOptions( args );
        var app = BuildWebApplication( webApplicationOption );
        app.ConfigureWebApplication();

        await app.RunAsync();
    }
}