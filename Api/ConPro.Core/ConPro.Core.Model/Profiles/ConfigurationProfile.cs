using AutoMapper;
using DevTools.Core.Domain.Entities;
using DevTools.Core.Domain.Models.ConPro.Configuration;

namespace DevTools.Core.Domain.Profiles;

public class ConfigurationProfile : Profile
{
    public ConfigurationProfile()
    {
        MapToEntity();
        MapToModel();
    }

    private void MapToEntity()
    {
        CreateMap<NewConfigurarionModel, Configuration>();
    }

    private void MapToModel()
    {
        CreateMap<Configuration, ConfigurationReadOnlyModel>();
    }
}