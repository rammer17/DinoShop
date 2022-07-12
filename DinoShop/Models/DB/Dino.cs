namespace DinoShop.Models.DB
{
    public class Dino
    {
        public int Id { get; set; } 
        public string Title { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
        public string ImgPath { get; set; }
        public string SoundPath { get; set; }
        public string Class { get; set; }
    }
}
