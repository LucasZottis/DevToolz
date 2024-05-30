namespace ConPro.Client.Models.ConfiguracaoProjetoModelos;

public class NovaConfiguracaoProjeto
{
    public string Chave { get; set; } = string.Empty;
    public string Descricao { get; set; } = string.Empty;
    public string Valor { get; set; } = string.Empty;
    public string TipoValor { get; set; } = string.Empty;
    public Guid GuidProjeto { get; set; }
}