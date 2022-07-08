using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DinoShop.Migrations
{
    public partial class InnitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Class",
                table: "Dinosaurs",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Class",
                table: "Dinosaurs");
        }
    }
}
