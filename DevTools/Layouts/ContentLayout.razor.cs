using Microsoft.AspNetCore.Components;

namespace DevTools.Layouts;

public partial class ContentLayout
    : LayoutComponentBase
{
    private string _withSidebarLayout = "col";

    public RenderFragment Sidebar { get; set; }

    protected override async Task OnInitializedAsync()
    {
        if ( Sidebar != null )
            _withSidebarLayout = "ms-2 col-9";

        await base.OnInitializedAsync();
    }
}
