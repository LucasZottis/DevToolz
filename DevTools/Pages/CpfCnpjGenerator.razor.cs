using BibliotecaPublica.Utils.Builders;
using Microsoft.JSInterop;

namespace DevTools.Pages;

public partial class CpfCnpjGenerator : ComponentBase
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
    }

    private async Task InitializeCnpjPage()
    {
        _textLabel = "CNPJ";
        _mask = "**.***.***/****-**";
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
        _navigationManager.LocationChanged += async ( sender, e ) =>
        {
            _isCpf = _navigationManager.Uri.Contains( "cpf" );
            await InitializeProperties();
            await InvokeAsync( StateHasChanged );
        };

        if ( _textLabel.EstaVazio() )
        {
            _isCpf = _navigationManager.Uri.Contains( "cpf" );
            await InitializeProperties();
        }

        await base.OnInitializedAsync();
    }
}