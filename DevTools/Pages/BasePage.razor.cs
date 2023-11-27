using Microsoft.JSInterop;

namespace DevTools.Pages;

public partial class BasePage : ComponentBase
{
    private readonly string _baseTitle = "Calculadora Dev";
    private string _title = string.Empty;

    [Parameter]
    public string TitlePage
    {
        get
        {
            if (_title.EstaVazio())
                return _baseTitle;

            return $"{_title} - {_baseTitle}";
        }

        set => _title = value;
    }

    [Inject]
    public NavigationManager NavigationManager { get; set; }

    [Inject]
    public IJSRuntime JSRuntime { get; set; }
}