namespace ConPro.Client.Models.ProjetoModelos;

public class NovoProjeto
{
    public Guid? GuidProduto { get; set; }
    public string Nome { get; set; }
    public string Descricao { get; set; }
    public bool Cobrado { get; set; } = false;
}