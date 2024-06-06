using BibliotecaPublica.Core.Interfaces;
using DevTools.Core.Domain.Models.ConPro.Configuration;

namespace DevTools.Core.Service.Interfaces;

public interface IConfigurarionService : IService
{
    Task<Guid> Add( NewConfigurarionModel model);
    Task Update( UpdatedConfigurarionModel model);

    Task<IEnumerable<ConfigurationReadOnlyModel>> GetAll();
}