using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCoreDemo.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        //string[] arr = [ "a" ];
        [HttpGet]
        public IEnumerable<string> LoadProducts() {
            return new string[]{ "a", "b" };
        }
    }
}
