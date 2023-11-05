namespace DevTools.Pages;

public partial class PasswordGenerator : ComponentBase
{
    private bool _includeCapitalLetters;
    private bool _includeLowerCase;
    private bool _includeNumbers;
    private bool _includeEspecialCharacters;

    private int _passwordLength = 10;

    private string _password = string.Empty;

    private async Task GeneratePassword()
    {

    }

    private async Task OnClickButtonPassword()
    {
        //_password = PasswordBuilder.CaracteresEspeciais
    }
}
