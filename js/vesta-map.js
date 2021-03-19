require([
  "esri/config",
  "esri/WebMap",
  "esri/views/MapView",
  "esri/widgets/ScaleBar",
  "esri/widgets/Legend",
], function (esriConfig, WebMap, MapView, ScaleBar) {
  esriConfig.apiKey =
    "AAPK45fa6c8f8f3449828c5eb10b304eb786PNi__dug1-d0ofkd91gM70edg86AcwqPGBew5VsSrBtAsY_4hgHlZHdmxYPUa3r0";

  const webmap = new WebMap({
    portalItem: {
      id: "247a3ef432ff4297ac2afd92654f1ebc",
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
});
