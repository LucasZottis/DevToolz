namespace DevTools.Pages;

public partial class DateTimeConverters : BasePage
{
    private int? _hours;
    private int? _minutes;
    private int? _seconds;

    private decimal? _decimalTimeSpan;
    private TimeSpan _timeSpan = new TimeSpan();

    public DateTimeConverters()
    {
        TitlePage = "Conversor de Tempo";
    }

    private void CalculateTimeSpan()
    {
        _timeSpan = new TimeSpan( _hours ?? 0, _minutes ?? 0, _seconds ?? 0 );
        _decimalTimeSpan = _timeSpan.ToDecimal();
    }

    private void CalculateDecimal()
    {
        _timeSpan = ( _decimalTimeSpan ?? 0 ).ToTimeSpan();
        _hours = _timeSpan.Hours;
        _minutes = _timeSpan.Minutes;
        _seconds = _timeSpan.Seconds;
    }

    private async Task OnLeaveHours( int? value )
    {
        _hours = value;
        CalculateTimeSpan();
    }

    private async Task OnLeaveMinutes( int? value )
    {
        _minutes = value;
        CalculateTimeSpan();
    }

    private async Task OnLeaveSeconds( int? value )
    {
        _seconds = value;
        CalculateTimeSpan();
    }

    private async Task OnLeaveDecimal( decimal? value )
    {
        _decimalTimeSpan = value;
        CalculateDecimal();
    }
}