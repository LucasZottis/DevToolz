using DevToolz.Api.Models;
using Microsoft.AspNetCore.Mvc;
using SqlFormatter;

namespace DevToolz.Api.Controllers;

[Route( "api/sql-formatter" )]
[ApiController]
public class SqlFormatterController : ControllerBase
{
    [HttpPost( "format" )]
    public IActionResult Format( [FromBody] SqlFormatterModel model )
    {
		try
		{
            var newModel = new SqlFormatterModel { Sql = Formatter.Format( model.Sql ) };
            return Ok( newModel );
        }
		catch ( Exception ex )
		{
            return StatusCode( StatusCodes.Status500InternalServerError, ex.Message );
        }
    }
}