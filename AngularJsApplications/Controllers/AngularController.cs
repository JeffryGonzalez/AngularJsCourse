using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularJsApplications.Controllers
{
    public class AngularController : Controller
    {
        //
        // GET: /Apps/

        public ActionResult Index(string appName)
        {
            return View(appName);
        }

    }
}
