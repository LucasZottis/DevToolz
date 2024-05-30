namespace ConPro.Client.Models.ProjetoModelos;

public class ProjetoSimplificado : Entity
{
    public Guid Guid { get; set; }
    public Guid? GuidProduto { get; set; }
    public string Nome { get; set; }
    public string Descricao { get; set; }
    public bool Cobrado { get; set; } = false;
    public bool Finalizado { get; set; } = false;
    public bool Arquivado { get; set; } = false;
    public string UrlRepositorio { get; set; }
    public long? IdRepositorio { get; set; }
}