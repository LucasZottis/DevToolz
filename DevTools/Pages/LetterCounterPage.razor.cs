using BibliotecaPublica.Core.Extensions;

namespace DevTools.Pages;

public partial class LetterCounterPage : ComponentBase
{
    private string _text;
    private int _letterAmount;

    private async Task OnClickButton()
    {
        if ( _text.TemConteudo() )
            _letterAmount = _text.Length;
    }
}