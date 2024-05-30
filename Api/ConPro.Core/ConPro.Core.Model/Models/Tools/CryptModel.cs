using BibliotecaPublica.Core.Enums;

namespace DevTools.Core.Domain.Models.Tools;

public class CryptModel
{
    public string Key { get; set; }
    public string Text { get; set; }
    public CryptProvider Provider { get; set; }
}