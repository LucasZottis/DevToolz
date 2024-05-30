using ConPro.Client.Interfaces;
using ConPro.Client.Models.ProdutoModelos;
using Newtonsoft.Json;
using System.Text;

namespace ConPro.Client.Clients;

internal class ProdutoClient : BaseClient, IProdutoClient
{
    public ProdutoClient( HttpClient client )
        : base( client ) { }

    public IEnumerable<ProdutoSimplificado> BuscarTudo()
    {
        var resposta = Client.GetAsync( @"/api/Produto/GetAllProdutos" )
            .Sync();

        if ( !resposta.IsSuccessStatusCode )
            return null;

        var responseContent = resposta.Content
            .ReadAsStringAsync()
            .Sync();

        return JsonConvert.DeserializeObject<IEnumerable<ProdutoSimplificado>>( responseContent );
    }

    public ProdutoSimplificado CriarProduto( NovoProduto produto )
    {
        var resposta = Client.PostAsync( "/api/Produto/CreateProduto",
            new StringContent( JsonConvert.SerializeObject( produto ), Encoding.UTF8, @"application/json" ) )
            .Sync();

        if ( !resposta.IsSuccessStatusCode )
            return null;

        var responseContent = resposta.Content
            .ReadAsStringAsync()
            .Sync();

        return JsonConvert.DeserializeObject<ProdutoSimplificado>( responseContent );
    }

    public ProdutoSimplificado EditarDadosProduto( ProdutoAlterado produto )
    {
        var resposta = Client.PutAsync( "/api/Produto/UpdateProduto",
            new StringContent( JsonConvert.SerializeObject( produto ), Encoding.UTF8, @"application/json" ) )
            .Sync();

        if ( !resposta.IsSuccessStatusCode )
            return null;

        var responseContent = resposta.Content
            .ReadAsStringAsync()
            .Sync();

        return JsonConvert.DeserializeObject<ProdutoSimplificado>( responseContent );
    }
}