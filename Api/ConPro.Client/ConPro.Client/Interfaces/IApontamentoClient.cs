using ConPro.Client.Models.ApontamentoModelos;

namespace ConPro.Client.Interfaces;

public interface IApontamentoClient : IBaseClient
{
    ApontamentoSimplificado IniciarApontamento( Guid projetoGuid );
    ApontamentoSimplificado FinalizarApontamento( Guid guid );
    IEnumerable<ApontamentoSimplificado> BuscarApontamentoPorProjeto( Guid projetoGuid );
    IEnumerable<ApontamentoSimplificado> BuscarApontamentosPorListaProjetos( Guid[] projetoList );
    IEnumerable<ApontamentoSimplificado> BuscarTudo();
}