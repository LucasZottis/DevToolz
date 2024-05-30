using BibliotecaPublica.Core.Models;
using System.Runtime.Serialization;
using Tools.Client.Models;

namespace Tools.Client.Exceptions;

public class BadRequestException : Exception
{
    public InvalidationModel Invalidation { get; private set; }

    public BadRequestException() { }

    public BadRequestException( InvalidationModel invalidation )
    {
        Invalidation = invalidation;
    }

    public BadRequestException( List<Notification> errors )
    {
        Invalidation = new InvalidationModel( "Contém uma ou mais invalidações:", errors );
    }

    public BadRequestException( string? message )
        : base( message )
    {
        Invalidation = new InvalidationModel( message );
    }

    public BadRequestException( string? message, Exception? innerException )
        : base( message, innerException ) { }

    protected BadRequestException( SerializationInfo info, StreamingContext context )
        : base( info, context ) { }
}
