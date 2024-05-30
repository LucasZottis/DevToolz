using System.Runtime.Serialization;

namespace ConPro.Client.Exceptions;

public class ConProException : Exception
{
    public ConProException() : base( "Não foi possível executar a operação." )
    {

    }

    public ConProException( string? message ) : base( message )
    {

    }

    public ConProException( string? message, Exception? innerException ) : base( message, innerException )
    {
    }

    protected ConProException( SerializationInfo info, StreamingContext context ) : base( info, context )
    {
    }
}
