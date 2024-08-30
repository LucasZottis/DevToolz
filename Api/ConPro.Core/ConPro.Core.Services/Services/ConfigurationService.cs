using AutoMapper;
using BibliotecaPublica.Core.Interfaces;
using DevTools.Core.Domain.Entities;
using DevTools.Core.Domain.Models.ConPro.Configuration;
using DevTools.Core.Repository.Interfaces.Repositories;
using DevTools.Core.Service.Interfaces;

namespace DevTools.Core.Service.Services;

public class ConfigurationService : BibliotecaPublica.NegocioPack.Service, IConfigurarionService
{
    private readonly IMapper _mapper;
    private readonly IConfigurarionRepository _configurarionRepository;

    public ConfigurationService( IBaseNotificationService notificador, IMapper mapper, IConfigurarionRepository configurarionRepository ) : base( notificador )
    {
        _mapper = mapper;
        _configurarionRepository = configurarionRepository;
    }

    public async Task<Guid> Add( NewConfigurarionModel model )
    {
        var entity = _mapper.Map<Configuration>( model );

        await _configurarionRepository.AddAsync( entity );

        _configurarionRepository.Commit();

        return entity.Guid;
    }

    public async Task<IEnumerable<ConfigurationReadOnlyModel>> GetAll()
    {
        var list = await _configurarionRepository.GetAllAsync();
        return _mapper.Map<IEnumerable<ConfigurationReadOnlyModel>>( list );
    }

    public async Task Update( UpdatedConfigurarionModel model )
    {
        var entity  = await _configurarionRepository.GetByGuidAsync( model.Guid );

        if ( entity == null )
        {
            throw new Exception( "Configuration not found" );
        }

        entity = _mapper.Map( model, entity );

        await _configurarionRepository.UpdateAsync( entity );

        _configurarionRepository.Commit();
    }
}