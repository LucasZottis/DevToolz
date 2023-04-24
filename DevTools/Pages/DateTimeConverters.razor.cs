using BibliotecaPublica.Core.Extensions;

namespace DevTools.Pages;

public partial class DateTimeConverters
{
    private int _hours;
    private int _minutes;
    private int _seconds;

    private decimal _decimalTimeSpan;
    private TimeSpan _timeSpan = new TimeSpan();

    private async Task OnLeaveTimeSpan()
    {
        _timeSpan = new TimeSpan( _hours, _minutes, _seconds );
        _decimalTimeSpan = ToDecimal( _timeSpan );
    }

    private async Task OnLeaveDecimal()
    {
        _timeSpan = ToTimeSpan( _decimalTimeSpan );
        _hours = _timeSpan.Hours;
        _minutes = _timeSpan.Minutes;
        _seconds = _timeSpan.Seconds;
    }

    public TimeSpan ToTimeSpan( decimal value )
    {
        var decimalMinutes = value - value.ParaInt();
        var minutes = decimalMinutes * 60;
        var decimalSeconds = minutes - minutes.ParaInt();
        var seconds = Math.Round( decimalSeconds * 60, 0 );

        return new TimeSpan( value.ParaInt(), minutes.ParaInt(), seconds.ParaInt() );
    }

    public decimal ToDecimal( TimeSpan value )
    {
        decimal minutes = value.Minutes / 60.ParaDecimal();
        decimal seconds = value.Seconds / 3600.ParaDecimal();
        var hours = ( value.Days * 24 ) + value.Hours;

        return hours + minutes + seconds;
    }
}