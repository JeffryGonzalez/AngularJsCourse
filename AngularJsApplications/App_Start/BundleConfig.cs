using System.Web;
using System.Web.Optimization;

namespace AngularJsApplications
{
	public class BundleConfig
	{
		// For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
		public static void RegisterBundles(BundleCollection bundles)
		{
			// use this as the example.
			MakeAppScriptBundle(bundles, "blank");
		}

		private static void MakeAppScriptBundle(BundleCollection bundles, string appName)
		{
			bundles.Add(new ScriptBundle("~/bundles/" + appName)
				.Include(string.Format("~/apps/{0}/src/app.js", appName))
				.Include(string.Format("~/apps/{0}/src/config.js", appName))
				.Include(string.Format("~/apps/{0}/src/constants.js", appName))
				.IncludeDirectory(string.Format("~/apps/{0}/src/controllers/", appName), "*.js")
				.IncludeDirectory(string.Format("~/apps/{0}/src/services/", appName), "*.js")
				.IncludeDirectory(string.Format("~/apps/{0}/src/directives/", appName), "*.js")
				);
		}
	}
}