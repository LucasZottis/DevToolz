using BibliotecaPublica.Core.Models;

namespace DevTools.Core.Repository.Interfaces.Repositories;

public interface IRepositoryBase<TEntity> : IRepository<TEntity>
    where TEntity : Entity
{
    void Commit();
}