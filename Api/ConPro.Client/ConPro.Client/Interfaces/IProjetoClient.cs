using ConPro.Client.Models.ProjetoModelos;

namespace ConPro.Client.Interfaces;

public interface IProjetoClient : IBaseClient
{
    void Sincronizar( string tokenGitHub );
    ProjetoSimplificado IniciarNovoProjeto( NovoProjeto projeto, string tokenGitHub = "" );
    ProjetoSimplificado EditarDadosProjeto( ProjetoAlterado projeto, string tokenGitHub = "" );
    IEnumerable<ProjetoSimplificado> BuscarTudo();
    IEnumerable<ProjetoSimplificado> BuscarProjetosSemProduto();
    IEnumerable<ProjetoSimplificado> BuscarProjetosPorProduto( Guid produtoGuid );
    bool ExcluirProjeto( Guid guid, string tokenGitHub = "" );
}