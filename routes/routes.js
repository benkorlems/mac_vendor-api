var oui = require("oui");

var appRouter = function(app) {
  app.get("/", function(req, res) {
    res.status(200).send({ message: "Welcome to our restful API" });
  });

  app.get("/get_vendor", function(req, res) {
    let mac = req.query.mac;
    let result = oui(mac);
    if (result == null) {
      res.json({ vendor: "Unknown" });
      console.log("vendor is unknown");
      return;
    }
    let vendor_detail_arr = oui(mac).split("\n");
    let vendor = vendor_detail_arr[0];
    //return the vendor
    res.json({ vendor });
  });
};

module.exports = appRouter;
