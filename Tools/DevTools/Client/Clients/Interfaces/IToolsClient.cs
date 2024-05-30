using Tools.Client.Models;

namespace Tools.Client.Clients.Interfaces;

public interface IToolsClient : IBaseClient
{
    Task<string> Encrypt(CryptModel model);
    Task<string> Decrypt(CryptModel model);
}