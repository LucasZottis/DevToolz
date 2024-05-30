using Microsoft.JSInterop;
using SqlFormatter;

namespace Tools.Pages.Utilities;

public partial class SqlFormatterPage : BasePage
{
    private string _sql = string.Empty;
    private string _formattedSql = string.Empty;

    public SqlFormatterPage()
    {
        TitlePage = "Indentador de Script SQL";
    }

    private void OnClickFormatButton()
    {
        if ( _sql.IsNotEmpty() )
            _formattedSql = Formatter.Format( _sql );
    }

    private void OnClickClearButton()
    {
        _sql = string.Empty;
        _formattedSql = string.Empty;
    }

    private async Task OnClickCopyButton()
    {
        await JSRuntime.InvokeVoidAsync( "navigator.clipboard.writeText", _formattedSql );
    }
}