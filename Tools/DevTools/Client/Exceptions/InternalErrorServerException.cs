namespace Tools.Client.Exceptions;

public class InternalErrorServerException : Exception
{
    public InternalErrorServerException( string response ) : base( "Internal Server Error" )
    {
        Console.WriteLine( response );
    }
}