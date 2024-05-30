namespace ConPro.Client.Models.ApontamentoModelos;

public class ApontamentoSimplificado : Entity
{
    public Guid Guid { get; set; }
    public Guid GuidProjeto { get; set; }
    public TimeSpan Tempo
    {
        get
        {
            if ( !DeactivationDate.HasValue )
                return new TimeSpan();

            return DeactivationDate.Value - RegistrationDate;
        }
    }  
}