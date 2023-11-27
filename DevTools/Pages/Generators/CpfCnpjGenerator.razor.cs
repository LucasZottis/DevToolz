using Microsoft.JSInterop;

namespace DevTools.Pages.Generators;

public partial class CpfCnpjGenerator : BasePage
{
    private bool _isCpf = false;
    private string _textLabel = string.Empty;
    private string _value = string.Empty;
    private string _mask = string.Empty;

    private void OnClickButtonGenerate()
    {
        if ( _isCpf )
            _value = CpfBuilder.Gerar();
        else
            _value = CnpjBuilder.Build();
    }

    private async Task OnClickButtonCopy()
    {
        await JSRuntime.InvokeVoidAsync( "navigator.clipboard.writeText", _value );
    }

    private async Task InitializeCpfPage()
    {
        _textLabel = "CPF";
        _mask = "***.***.***-**";
        TitlePage = "Gerador de CPF";
    }

    private async Task InitializeCnpjPage()
    {
        _textLabel = "CNPJ";
        _mask = "**.***.***/****-**";
        TitlePage = "Gerador de CNPJ";
    }

    private async Task InitializeProperties()
    {
        if ( _isCpf )
            await InitializeCpfPage();
        else
            await InitializeCnpjPage();
    }

    protected override async Task OnInitializedAsync()
    {
        NavigationManager.LocationChanged += async ( sender, e ) =>
        {
            _isCpf = NavigationManager.Uri.Contains( "cpf" );
            await InitializeProperties();
            await InvokeAsync( StateHasChanged );
        };

        if ( _textLabel.EstaVazio() )
        {
            _isCpf = NavigationManager.Uri.Contains( "cpf" );
            await InitializeProperties();
        }

        await base.OnInitializedAsync();
    }
}