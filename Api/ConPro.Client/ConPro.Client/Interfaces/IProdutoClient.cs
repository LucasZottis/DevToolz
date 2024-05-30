using ConPro.Client.Models.ProdutoModelos;

namespace ConPro.Client.Interfaces;

public interface IProdutoClient : IBaseClient
{
    ProdutoSimplificado CriarProduto( NovoProduto produto );
    ProdutoSimplificado EditarDadosProduto( ProdutoAlterado produto );

    IEnumerable<ProdutoSimplificado> BuscarTudo();
}