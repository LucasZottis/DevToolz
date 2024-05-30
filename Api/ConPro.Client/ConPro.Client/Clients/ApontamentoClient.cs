using ConPro.Client.Interfaces;
using ConPro.Client.Models.ApontamentoModelos;
using Newtonsoft.Json;

namespace ConPro.Client.Clients
{
    public class ApontamentoClient : BaseClient, IApontamentoClient
    {
        public ApontamentoClient( HttpClient client ) 
            : base( client ) { }

        public IEnumerable<ApontamentoSimplificado> BuscarApontamentoPorProjeto( Guid projetoGuid )
        {
            var endPoint = $@"/api/Apontamento/GetApontamentoByGuidProjeto?projetoGuid={projetoGuid}";
            var resposta = Client.GetAsync( endPoint )
                .Sync();

            if ( !resposta.IsSuccessStatusCode )
                return null;

            return JsonConvert.DeserializeObject<IEnumerable<ApontamentoSimplificado>>( resposta.Content
                .ReadAsStringAsync().Sync() );
        }

        public IEnumerable<ApontamentoSimplificado> BuscarTudo()
        {
            var resposta = Client.GetAsync( @"/api/Apontamento/GetAllApontamentos" ).Sync();

            if ( !resposta.IsSuccessStatusCode )
                return null;

            return JsonConvert.DeserializeObject<IEnumerable<ApontamentoSimplificado>>( resposta.Content
                .ReadAsStringAsync().Sync() );
        }

        public IEnumerable<ApontamentoSimplificado> BuscarApontamentosPorListaProjetos( Guid[] projetosList )
        {
            var rota = @"/api/Apontamento/GetApontamentosByProjetoList";

            for ( int i = 0; i < projetosList.Length; i++ )
            {
                if ( i == 0 )
                    rota += "?";

                rota += $"projetoList={projetosList[ i ]}";

                if ( i <= projetosList.Length - 1 )
                    rota += "&";
            }

            var resposta = Client.GetAsync( rota ).Sync();

            if ( !resposta.IsSuccessStatusCode )
                return null;

            return JsonConvert.DeserializeObject<IEnumerable<ApontamentoSimplificado>>( resposta.Content
                .ReadAsStringAsync().Sync() );
        }

        public ApontamentoSimplificado IniciarApontamento( Guid projetoGuid )
        {
            var endPoint = $@"/api/Apontamento/InitiateNewApontamento?projetoGuid={projetoGuid}";
            var resposta = Client.PostAsync( endPoint, null )
                .Sync();

            if ( !resposta.IsSuccessStatusCode )
                return null;

            return JsonConvert.DeserializeObject<ApontamentoSimplificado>( resposta.Content
                .ReadAsStringAsync().Sync() );
        }

        public ApontamentoSimplificado FinalizarApontamento( Guid guid )
        {
            var endPoint = $@"/api/Apontamento/FinishApontamento?guid={guid}";
            var resposta = Client.PutAsync( endPoint, null )
                .Sync();

            if ( !resposta.IsSuccessStatusCode )
                return null;

            return JsonConvert.DeserializeObject<ApontamentoSimplificado>( resposta.Content
                .ReadAsStringAsync().Sync() );
        }
    }
}