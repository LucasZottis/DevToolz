using BibliotecaPublica.Core.Interfaces;
using BibliotecaPublica.NegocioPack;
using DevTools.Core.Domain.Models.ConPro.Configuration;
using DevTools.Core.Service.Interfaces;

namespace DevTools.Core.Service.Services;

public class ConfigurationService : BibliotecaPublica.NegocioPack.Service, IConfigurarionService
{
    public ConfigurationService( IBaseNotificationService notificador ) : base( notificador )
    {
    }

    public Task<Guid> Add( NewConfigurarionModel model )
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<ConfigurationReadOnlyModel>> GetAll()
    {
        throw new NotImplementedException();
    }

    public Task Update( UpdatedConfigurarionModel model )
    {
        throw new NotImplementedException();
    }
}