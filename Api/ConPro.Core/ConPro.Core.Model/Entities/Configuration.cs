namespace DevTools.Core.Domain.Entities;

public class Configuration : Entity
{
    public string Description { get; set; }
    public string Value { get; set; }
    public ConfigurationType Type { get; set; }
}