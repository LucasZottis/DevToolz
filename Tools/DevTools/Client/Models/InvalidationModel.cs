using BibliotecaPublica.Core.Models;

namespace Tools.Client.Models;

public class InvalidationModel
{
    public string Title { get; set; }
    public List<Notification> Errors { get; set; }

    public InvalidationModel() { }

    public InvalidationModel( string title )
    {
        Title = title;
        Errors = new List<Notification>();
    }

    public InvalidationModel( List<Notification> errors )
    {
        Errors = errors;
    }

    public InvalidationModel( string title, List<Notification> errors )
    {
        Title = title;
        Errors = errors;
    }
}
