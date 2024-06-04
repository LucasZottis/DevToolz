using Microsoft.JSInterop;
using Radzen;

namespace Tools.Pages;

public partial class BasePage : ComponentBase
{
    private readonly string _baseTitle = "Calculadora Dev";
    private string _title = string.Empty;

    [Parameter]
    public string TitlePage
    {
        get
        {
            if ( _title.IsEmpty() )
                return _baseTitle;

            return $"{_title} - {_baseTitle}";
        }

        set => _title = value;
    }

    [Inject]
    public NavigationManager NavigationManager { get; set; }

    [Inject]
    public IJSRuntime JSRuntime { get; set; }

    [Inject]
    public DialogService Dialog { get; set; }

    [Inject]
    public NotificationService Notification { get; set; }
}