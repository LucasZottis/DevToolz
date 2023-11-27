namespace DevTools.Pages.Generators;

public partial class PasswordGenerator : BasePage
{
    private bool _includeCapitalLetters;
    private bool _includeLowerCase;
    private bool _includeNumbers;
    private bool _includeEspecialCharacters;

    private int _passwordLength = 10;

    private string _password = string.Empty;

    public PasswordGenerator()
    {
        TitlePage = "Gerador de Senhas";
    }

    private async Task GeneratePassword()
    {

    }

    private async Task OnClickButtonPassword()
    {
        //_password = PasswordBuilder.CaracteresEspeciais
    }
}
