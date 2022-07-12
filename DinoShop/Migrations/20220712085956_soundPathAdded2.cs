using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DinoShop.Migrations
{
    public partial class soundPathAdded2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "SoundPath",
                table: "Dinosaurs",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SoundPath",
                table: "Dinosaurs");
        }
    }
}
