using BibliotecaPublica.Core.Helpers;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DevTools.Core.Repository.ModelMappers;

internal class ConfigurationModelMapper : EntityModelMapper<Configuration>
{
    public ConfigurationModelMapper( EntityTypeBuilder<Configuration> entityTypeBuilder, bool executeInternalMap )
        : base( entityTypeBuilder, false ) { }

    public override void Map()
    {
        Property( c => c.Description )
            .HasColumnName( TransformName( nameof( Configuration.Description ) ) )
            .HasColumnType( ColumnTypeHelper.GetColumnType( "ShortText" ) )
            .HasMaxLength( 100 )
            .IsRequired();

        Property( c => c.Value )
            .HasColumnName( TransformName( nameof( Configuration.Value ) ) )
            .HasColumnType( ColumnTypeHelper.GetColumnType( "ShortText" ) )
            .HasMaxLength( 512 )
            .IsRequired( false );

        Property( c => c.Type )
            .HasColumnName( TransformName( nameof( Configuration.Type ) ) )
            .HasColumnType( "int" )
            .IsRequired();
    }
}