using BibliotecaPublica.Core.Models;

namespace DevTools.Core.Repository.Repositories;

public class RepositoryBase<TEntity> : Repository<TEntity>, IRepositoryBase<TEntity> where TEntity : Entity
{
    public RepositoryBase( ContextBase context ) : base( context )
    {
    }

    public void Commit()
    {
        Context.SaveChanges();
    }
}