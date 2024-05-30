using BibliotecaPublica.Core.Validators;

namespace Tools.Pages.Validators;

public partial class CnpjCpfValidator : BasePage
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
        TitlePage = "Validador de CPF";
    }

    private async Task InitializeCnpjPage()
    {
        _textBoxLabel = "CNPJ";
        _mask = "**.***.***/****-**";
        TitlePage = "Validador de CNPJ";
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
        if ( _docValue.IsEmpty() )
            return;

        _validateDoc = _docValue;

        if ( _isCpf )
            _isValidate = CpfValidator.Validate( _docValue );
        else
            _isValidate = CnpjValidator.Validate( _docValue );
    }

    protected override async Task OnInitializedAsync()
    {
        NavigationManager.LocationChanged += async ( sender, e ) =>
        {
            _isCpf = NavigationManager.Uri.Contains( "cpf" );
            await InitializeProperties();
            await InvokeAsync( StateHasChanged );
        };

        if ( _textBoxLabel.IsEmpty() )
        {
            _isCpf = NavigationManager.Uri.Contains( "cpf" );
            await InitializeProperties();
        }

        await base.OnInitializedAsync();
    }
}