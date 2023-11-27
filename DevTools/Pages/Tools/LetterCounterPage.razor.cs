using System.Globalization;

namespace DevTools.Pages.Tools;

public partial class LetterCounterPage : BasePage
{
    private int _charactersAmount;
    private int _charactersWithoutSpaceAmount;
    private int _spacesAmaount;
    private int _vowelsAmount;
    private int _numberAmount;
    private int _wordAmount;
    private int _phraseAmount;
    private int _lineAmount;
    private int _especialCharacterAmount;

    private string _inputTextArea = string.Empty;
    private string _especialValue = string.Empty;

    public LetterCounterPage()
    {
        TitlePage = "Contador de Caracteres";
    }

    private async Task<int> GetAmount(string text, char separator, bool clearText = true)
    {
        var array = text.Split(separator);
        var amount = 0;

        array.ForEach<string>(p =>
        {
            if (clearText)
            {
                var count = p.Trim()
                    .Replace(",", "")
                    .Replace("!", "")
                    .Replace("@", "")
                    .Replace("$", "")
                    .Replace("%", "")
                    .Replace("¨", "")
                    .Replace("&", "")
                    .Replace("*", "")
                    .Replace("(", "")
                    .Replace(")", "")
                    .Replace("_", "")
                    .Replace("-", "")
                    .Replace("=", "")
                    .Replace("+", "")
                    .Replace("/", "")
                    .Replace(";", "")
                    .Replace(":", "")
                    .Replace(">", "")
                    .Replace("<", "")
                    .Replace("{", "")
                    .Replace("}", "")
                    .Replace("[", "")
                    .Replace("]", "")
                    .Replace("´", "")
                    .Replace("`", "")
                    .Replace("^", "")
                    .Replace("~", "")
                    .Replace("|", "")
                    .Replace("\\", "")
                    .Replace(@"""", "")
                    .Replace(@"'", "")
                    .TemConteudo();

                if (count)
                    amount += 1;
            }
            else
                amount += 1;
        });

        return amount;
    }

    private async Task<string> Normalize(string text)
    {
        var array = text.Normalize(System.Text.NormalizationForm.FormD)
            .Where(c => char.GetUnicodeCategory(c) != UnicodeCategory.NonSpacingMark);

        return new string(array.ToArray());
    }

    private async Task Count(string text)
    {
        var words = await GetAmount(text, ' ');
        var phrases = await GetAmount(text, '.');
        var lines = await GetAmount(text, '\n', false);

        _charactersAmount = text.Length;
        _charactersWithoutSpaceAmount = text.Replace(" ", "").Length;
        _spacesAmaount = text.Count(i => i.ApenasEspaco());
        _vowelsAmount = text.ToLower().Count(i => i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u');
        _numberAmount = text.Count(i => i.Numero());
        _wordAmount = words;
        _phraseAmount = phrases;
        _lineAmount = lines;
    }

    private async Task<int> CountEspecialCharacter(string text, string especialCharacter)
    {
        var amount = 0;

        if (especialCharacter.TemConteudo())
            amount = text.Count(c => c == especialCharacter[0]);

        return amount;
    }

    private async Task OnInputTextArea(ChangeEventArgs args)
    {
        _inputTextArea = args.Value.ToString();

        await Count(await Normalize(_inputTextArea));
        _especialCharacterAmount = await CountEspecialCharacter(_inputTextArea, _especialValue);
    }

    private async Task OnInputEspecialCharacter(ChangeEventArgs args)
    {
        _especialValue = args.Value.ToString();
        _especialCharacterAmount = await CountEspecialCharacter(_inputTextArea, _especialValue);
    }
}