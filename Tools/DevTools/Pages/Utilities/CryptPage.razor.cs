using Microsoft.JSInterop;
using Tools.Client.Clients;
using Tools.Client.Models;

namespace Tools.Pages.Utilities;

public partial class CryptPage : ComponentBase
{
    private CryptModel _model = new CryptModel();
    private string _plainText;
    private string _encryptedText;

    [Inject]
    public ToolsClient ToolsClient { get; set; }

    private async Task OnClickEncryptButton()
    {
        _model.Text = _plainText;
        _encryptedText = await ToolsClient.Encrypt( _model );
    }

    private async Task OnClickDecryptButton()
    {
        _model.Text = _encryptedText;
        _plainText = await ToolsClient.Decrypt( _model );
    }
}