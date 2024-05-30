using ConPro.Client.Exceptions;
using ConPro.Client.Interfaces;
using ConPro.Client.Models.ProjetoModelos;
using System.Net;
using System.Text;
using System.Text.Json;

namespace ConPro.Client.Clients;

internal class ProjetoClient : BaseClient, IProjetoClient
{
    public ProjetoClient( HttpClient client )
        : base( client ) { }

    public IEnumerable<ProjetoSimplificado> BuscarTudo()
    {
        var resposta = Client.GetAsync( @"/api/Projeto/GetAllProjetos" )
            .Sync();

        if ( !resposta.IsSuccessStatusCode )
            return null;

        return JsonSerializer.Deserialize<IEnumerable<ProjetoSimplificado>>( resposta.Content
            .ReadAsStringAsync()
            .Sync(),
            new JsonSerializerOptions( JsonSerializerDefaults.Web ) );
    }

    public IEnumerable<ProjetoSimplificado> BuscarProjetosSemProduto()
    {
        var resposta = Client.GetAsync( @"/api/Projeto/GetProjetosWithoutProdutos" )
            .Sync();

        if ( !resposta.IsSuccessStatusCode )
            return null;

        return JsonSerializer.Deserialize<IEnumerable<ProjetoSimplificado>>( resposta.Content
            .ReadAsStringAsync()
            .Sync(),
            new JsonSerializerOptions( JsonSerializerDefaults.Web ) );
    }

    public IEnumerable<ProjetoSimplificado> BuscarProjetosPorProduto( Guid produtoGuid )
    {
        var resposta = Client.GetAsync( $@"/api/Projeto/GetProjetosByProduto?produtoGuid={produtoGuid}" ).Sync();

        if ( !resposta.IsSuccessStatusCode )
            return null;

        return JsonSerializer.Deserialize<IEnumerable<ProjetoSimplificado>>( resposta.Content
            .ReadAsStringAsync()
            .Sync(),
            new JsonSerializerOptions( JsonSerializerDefaults.Web ) );
    }

    public ProjetoSimplificado EditarDadosProjeto( ProjetoAlterado projeto, string tokenGitHub = "" )
    {
        string rota = @"/api/Projeto/UpdateDataProjeto";

        if ( tokenGitHub.TemConteudo() )
            rota += $"?tokenGiHub={tokenGitHub}";

        var resposta = Client.PutAsync( rota, new StringContent( JsonSerializer.Serialize( projeto,
            new JsonSerializerOptions( JsonSerializerDefaults.Web ) ), Encoding.UTF8, @"application/json" ) )
            .Sync();

        if ( !resposta.IsSuccessStatusCode )
            return null;

        return JsonSerializer.Deserialize<ProjetoSimplificado>( resposta.Content
            .ReadAsStringAsync()
            .Sync(),
            new JsonSerializerOptions( JsonSerializerDefaults.Web ) );
    }

    public bool ExcluirProjeto( Guid guid, string tokenGitHub )
    {
        var endPoint = $@"/api/Projeto/DeleteProjeto?guid={guid}";

        if ( tokenGitHub.TemConteudo() )
            endPoint += $"&tokenGitHub={tokenGitHub}";

        var resposta = Client.DeleteAsync( endPoint )
            .Sync();

        return resposta.IsSuccessStatusCode;
    }

    public ProjetoSimplificado IniciarNovoProjeto( NovoProjeto projeto, string tokenGitHub = "" )
    {
        string rota = @"/api/Projeto/RegisterNewProjeto";

        if ( tokenGitHub.TemConteudo() )
            rota += $"?tokenGiHub={tokenGitHub}";

        var resposta = Client.PostAsync( rota, new StringContent( JsonSerializer.Serialize( projeto,
            new JsonSerializerOptions( JsonSerializerDefaults.Web ) ), Encoding.UTF8, @"application/json" ) )
            .Sync();

        if ( !resposta.IsSuccessStatusCode )
            return null;

        return JsonSerializer.Deserialize<ProjetoSimplificado>( resposta.Content.ReadAsStringAsync()
            .Sync(), new JsonSerializerOptions( JsonSerializerDefaults.Web ) );
    }

    public void Sincronizar( string tokenGitHub )
    {
        var resposta = Client.PostAsync( $@"/api/Projeto/ConProGitHubSync?tokenGitHub={tokenGitHub}", null )
            .Sync();

        if ( resposta.StatusCode == HttpStatusCode.BadRequest )
            return;
        else if ( !resposta.IsSuccessStatusCode )
            throw new ConProException( Task.Run( () => resposta.Content.ReadAsStringAsync() ).Result );
    }
}