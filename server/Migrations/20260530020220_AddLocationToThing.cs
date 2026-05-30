using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MediaWiki.Migrations
{
    /// <inheritdoc />
    public partial class AddLocationToThing : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "LocationId",
                table: "Things",
                type: "integer",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Things",
                keyColumn: "ThingId",
                keyValue: 1,
                column: "LocationId",
                value: null);

            migrationBuilder.CreateIndex(
                name: "IX_Things_LocationId",
                table: "Things",
                column: "LocationId");

            migrationBuilder.AddForeignKey(
                name: "FK_Things_Things_LocationId",
                table: "Things",
                column: "LocationId",
                principalTable: "Things",
                principalColumn: "ThingId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Things_Things_LocationId",
                table: "Things");

            migrationBuilder.DropIndex(
                name: "IX_Things_LocationId",
                table: "Things");

            migrationBuilder.DropColumn(
                name: "LocationId",
                table: "Things");
        }
    }
}
