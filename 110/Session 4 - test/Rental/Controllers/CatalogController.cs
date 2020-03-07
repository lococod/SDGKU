using Microsoft.AspNetCore.Mvc;
using Rental.Models;
using System.Collections.Generic;
using System.Linq;

namespace Rental.Controllers
{
    public class CatalogController : Controller
    {
        private DataContext dbContext;
        public CatalogController(DataContext context)
        {
            this.dbContext = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public IActionResult SaveCar([FromBody] Car theCar){
            Console.WriteLine("User is saving the car");
            Console.Writeline(theCar.Make);
            dbContext.Cars.Add(theCar);
            dbContext.SaveChanges();
            return Json(theCar);
        }
        [HttpGet]
        public IActionResult GetCatalog()
        {
            // Car c1 = new Car();
            // c1.Make = "Dodge";
            // c1.Model = "Charger";
            // c1.Year = 2014;
            // c1.Cyls = 8;
            // c1.Description = "Hellcat, 'nuff said";
            // c1.DailyPrice = 132m;
            // c1.ImageURL = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fst.motortrend.com%2Fuploads%2Fsites%2F5%2F2014%2F12%2F2015-Dodge-Charger-SRT-Hellcat-front-three-quarter-view-in-motion-13.jpg&f=1&nofb=1";

            // Car c2 = new Car();
            // c2.Make = "Dodge";
            // c2.Model = "Durango";
            // c2.Year = 2018;
            // c2.Cyls = 8;
            // c2.Description = "SRT, carry your family in style";
            // c2.DailyPrice = 74m;
            // c2.ImageURL = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.PZB6p0CObQBW03oKlejLfAHaE8%26pid%3DApi&f=1";

            // List<Car> list = new List<Car>();
            // list.Add(c1);
            // list.Add(c2);

            var list = dbContext.Cars.ToList();
            return Json(list);
        }
    }
}