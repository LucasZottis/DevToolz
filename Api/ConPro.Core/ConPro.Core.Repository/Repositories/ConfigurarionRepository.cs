namespace DevTools.Core.Repository.Repositories;

public class ConfigurarionRepository : Repository<Configuration>, IConfigurarionRepository
{
    public ConfigurarionRepository( Context context ) : base( context )
    {
    }
}