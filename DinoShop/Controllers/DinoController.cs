using DinoShop.Models.DB;
using DinoShop.Models.Request;
using DinoShop.Models.Response;
using Microsoft.AspNetCore.Mvc;

namespace DinoShop.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class DinoController : ControllerBase
    {
        private DinoDBContext _dbContext;
        public IConfiguration Configuration { get; }

        public DinoController(DinoDBContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            Configuration = configuration;
        }

        [HttpGet]
        public ActionResult<List<DinoResponse>> GetAll()
        {
            var dinos = _dbContext.Dinosaurs.Select(x => new DinoResponse()
            {
                Id = x.Id,
                Title = x.Title,
                Description = x.Description,
                Price = x.Price,
                ImgPath = x.ImgPath,
                Class = x.Class
            }).ToList();

            return Ok(dinos);
        }

        [HttpPost]
        public ActionResult Add(DinoAddRequest request)
        {
            Dino newDino = new Dino
            {
                Title = request.Title,
                Description = request.Description,
                Price = request.Price,
                ImgPath = request.ImgPath,
                Class = request.Class
            };

            _dbContext.Dinosaurs.Add(newDino);
            _dbContext.SaveChanges();
            return Ok();
        }

    }
}
