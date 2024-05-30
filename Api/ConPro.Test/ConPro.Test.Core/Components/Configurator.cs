using BibliotecaPublica.Core.Models;
using Microsoft.Extensions.Configuration;

namespace DevTools.Test.Core.Components
{
    public class Configurator
    {
        public Configurator()
        {
            var configuration = new ConfigurationBuilder()
                .SetBasePath( Environment.CurrentDirectory )
                .AddJsonFile( "appsettings.json" )
                .Build();

            configuration.InjectConfiguration();
        }
    }
}