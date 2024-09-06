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
        if ( string.IsNullOrWhiteSpace( sql ) )
        {
            return BadRequest( "SQL is required." );
        }

        var formattedSql = sql.Replace( " ", string.Empty );

        return Ok( new { formattedSql } );
    }
}