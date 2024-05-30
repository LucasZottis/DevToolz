namespace ConPro.Client.Interfaces;

public interface IBaseClient : IDisposable
{
    public HttpClient Client { get; }
}