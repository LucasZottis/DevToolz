namespace DevTools.Core.Domain.Models.ConPro.Configuration;

public class UpdatedConfigurarionModel
{
    public Guid Guid { get; set; }
    public string Description { get; set; }
    public string Value { get; set; }
    public ConfigurationType Type { get; set; }
}