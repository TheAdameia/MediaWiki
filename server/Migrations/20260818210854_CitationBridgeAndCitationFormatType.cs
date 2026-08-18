using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MediaWiki.Migrations
{
    /// <inheritdoc />
    public partial class CitationBridgeAndCitationFormatType : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "FormatType",
                table: "Citations",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Citations",
                keyColumn: "CitationId",
                keyValue: 1,
                column: "FormatType",
                value: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FormatType",
                table: "Citations");
        }
    }
}
