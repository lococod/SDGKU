using System;
using Microsoft.AspNetCore.Mvc;

namespace Rental.Controllers
{
    public class CAtalogController : Controllers{
        public IAactionResult Index()
        {
            return View();
        }

        public IAactionResult Register()
        {
            return View();
        }
        [HttpGet]
        public IActionResult GetCatalog(){
            return ContextBoundObject("Hello Get!");
        }
    }
}