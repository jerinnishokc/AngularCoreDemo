using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularCoreDemo2.Controllers
{
	public class HomeController : Controller
	{
		public string Index() {
			return "This is from the index function.";
		}

        public IActionResult Candy() {
            return View();
        }
	}
}
