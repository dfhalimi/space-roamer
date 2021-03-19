require([
  "esri/config",
  "esri/WebMap",
  "esri/views/MapView",
  "esri/widgets/ScaleBar",
  "esri/widgets/Legend",
], function (esriConfig, WebMap, MapView, ScaleBar, Legend) {
  esriConfig.apiKey =
    "AAPK45fa6c8f8f3449828c5eb10b304eb786PNi__dug1-d0ofkd91gM70edg86AcwqPGBew5VsSrBtAsY_4hgHlZHdmxYPUa3r0";

  const webmap = new WebMap({
    portalItem: {
      id: "b164957a19544f55a8d6a001c952a590",
    },
  });

  const view = new MapView({
    container: "container",
    map: webmap,
  });

  const scalebar = new ScaleBar({
    view: view,
  });

  view.ui.add(scalebar, "bottom-left");

  const legend = new Legend({
    view: view,
  });
  view.ui.add(legend, "top-right");
});
