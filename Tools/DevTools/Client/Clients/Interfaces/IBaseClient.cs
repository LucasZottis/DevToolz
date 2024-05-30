namespace Tools.Client.Clients.Interfaces;

public interface IBaseClient : IDisposable
{
    public HttpClient Client { get; }
}