using BibliotecaPublica.Core.Extensions;
using BibliotecaPublica.Utils.Validators;
using Microsoft.AspNetCore.Components;

namespace DevTools.Pages;

public partial class CnpjCpfValidator : ComponentBase
{
    private bool _isCpf = false;
    private bool? _isValidate;
    private string _textBoxLabel = string.Empty;
    private string _docValue = string.Empty;
    private string _validateDoc = string.Empty;
    private string _mask = string.Empty;

    private async Task InitializeCpfPage()
    {
        _textBoxLabel = "CPF";
        _mask = "***.***.***-**";
    }

    private async Task InitializeCnpjPage()
    {
        _textBoxLabel = "CNPJ";
        _mask = "**.***.***/****-**";
    }

    private async Task InitializeProperties()
    {
        if ( _isCpf )
            await InitializeCpfPage();
        else
            await InitializeCnpjPage();
    }

    private async Task OnClickValidateButton()
    {
        if ( _docValue.EstaVazio() )
            return;

        _validateDoc = _docValue;

        if ( _isCpf )
            _isValidate = CpfValidator.Validate( _docValue );
        else
            _isValidate = CnpjValidator.Validate( _docValue );
    }

    protected override async Task OnInitializedAsync()
    {
        _navigationManager.LocationChanged += async ( sender, e ) =>
        {
            _isCpf = _navigationManager.Uri.Contains( "cpf" );
            await InitializeProperties();
            await InvokeAsync( StateHasChanged );
        };

        if ( _textBoxLabel.EstaVazio() )
        {
            _isCpf = _navigationManager.Uri.Contains( "cpf" );
            await InitializeProperties();
        }

        await base.OnInitializedAsync();
    }
}