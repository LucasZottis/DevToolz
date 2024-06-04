using Tools.Client.Models;

namespace Tools.Pages.Utilities;

public partial class CryptPage : BasePage
{
    private CryptModel _model = new CryptModel();
    private string _plainText;
    private string _encryptedText;

    [Inject]
    public IServiceProvider Provider { get; set; }

    private async Task OnClickEncryptButton()
    {
        if ( _plainText.IsEmpty() )
        {
            Notification.Notify( NotificationSeverity.Error, "Informe o texto a ser encriptado." );
            return;
        }

        var client = Provider.GetRequiredService<IToolsClient>();
        _model.Text = _plainText;
        _encryptedText = await client.Encrypt( _model );
    }

    private async Task OnClickDecryptButton()
    {
        if ( _encryptedText.IsEmpty() )
        {
            Notification.Notify( NotificationSeverity.Error, "Informe o texto a ser decriptado." );
            return;
        }

        var client = Provider.GetRequiredService<IToolsClient>();
        _model.Text = _encryptedText;
        _plainText = await client.Decrypt( _model );
    }
}