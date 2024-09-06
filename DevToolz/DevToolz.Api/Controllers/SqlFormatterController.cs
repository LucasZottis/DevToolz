using DevToolz.Api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DevToolz.Api.Controllers;

[Route( "api/sql-formatter" )]
[ApiController]
public class SqlFormatterController : ControllerBase
{
    [HttpGet( "format" )]
    public IActionResult Format( [FromBody] SqlFormatterModel model )
    {
		try
		{
            return Ok( SqlFormatter.Formatter.Format( model.Sql ) );
        }
		catch ( Exception ex )
		{
            return StatusCode( StatusCodes.Status500InternalServerError, ex.Message );
        }
    }
}