using BibliotecaPublica.Core.Enums;

namespace Tools.Client.Models;

public class CryptModel
{
    public string Key { get; set; }
    public string Text { get; set; }
    public CryptProvider Provider { get; set; }
}