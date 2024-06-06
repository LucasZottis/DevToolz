namespace DevTools.Core.Domain.Models.ConPro.Configuration;

public class ConfigurationReadOnlyModel
{
    public Guid Guid { get; set; }
    public string Description { get; set; }
    public string Value { get; set; }
    public ConfigurationType Type { get; set; }
}