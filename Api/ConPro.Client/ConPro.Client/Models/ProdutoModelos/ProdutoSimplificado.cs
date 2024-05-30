namespace ConPro.Client.Models.ProdutoModelos;

public class ProdutoSimplificado : Entity
{
    public Guid Guid { get; set; }
    public string Nome { get; set; }
    public string Descricao { get; set; }
}