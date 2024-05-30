using Tools.Client.Clients.Interfaces;
using Tools.Client.Models;

namespace Tools.Client.Clients;

public class ToolsClient : BaseClient, IToolsClient
{
    public async Task<string> Encrypt( CryptModel model )
    {
        return await PutAsync( @"/api/Tools/Encrypt", model ) ?? "";
    }

    public async Task<string> Decrypt( CryptModel model )
    {
        return await PutAsync( @"/api/Tools/Decrypt", model ) ?? "";
    }
}