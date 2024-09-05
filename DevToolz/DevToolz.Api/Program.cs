
using Microsoft.AspNetCore.HttpLogging;

namespace DevToolz.Api
{
    public class Program
    {
        public static void Main( string[] args )
        {
            var builder = WebApplication.CreateBuilder( args );

            // Add services to the container.

            builder.Services.AddHttpLogging( log =>
            {
                log.LoggingFields = HttpLoggingFields.RequestBody;
                log.RequestBodyLogLimit = 4096;
            } );

            builder.Services.AddCors( options =>
            {
                options.AddPolicy( "AllowAllOrigins",
                    builder =>
                    {
                        builder.AllowAnyOrigin()
                               .AllowAnyMethod()
                               .AllowAnyHeader();
                    } );
            } );

            builder.Services.AddControllers();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            /* API */
            // Configure the HTTP request pipeline.
            if ( app.Environment.IsDevelopment() )
            {
                app.UseSwagger();
                app.UseSwaggerUI();
                app.UseDeveloperExceptionPage( new DeveloperExceptionPageOptions() );
            }
            else
            {
                app.UseExceptionHandler( "/error" );
                app.UseSwagger();
                app.UseSwaggerUI( options =>
                {
                    options.SwaggerEndpoint( "/swagger/v1/swagger.json", app.Environment.ApplicationName );
                    options.InjectStylesheet( "/swagger/custom.css" );
                } );

            }

            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseRouting();
            app.UseCors( "AllowAllOrigins" );
            //app.UseHttpsRedirection();
            app.UseAuthorization();
            app.UseHttpLogging();
            app.MapControllers();
            app.Run();
        }
    }
}
