namespace Tools.Client.Clients.Interfaces;

public interface IBaseClient : IDisposable
{
    HttpClient Client { get; }
}