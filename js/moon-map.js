require([
  "esri/views/SceneView",
  "esri/WebScene",
  "esri/widgets/Legend",
  "esri/webscene/Slide",
], function (SceneView, WebScene, Legend, Slide) {
  /*********************************************************************
   * Create a new WebScene referencing a WebScene ID from ArcGIS Online
   * or an on-premise portal.
   *********************************************************************/
  var scene = new WebScene({
    portalItem: {
      // autocasts as new PortalItem()
      id: "4a83ac002c0549c5a953906e6389945b",
    },
  });

  /*********************************************************************
   * Reference the WebScene in a SceneView instance.
   *********************************************************************/
  var view = new SceneView({
    map: scene,
    container: "viewDiv",
  });

  view.ui.add(["slidesDiv"], "bottom-left");

  const legend = new Legend({
    view: view,
    style: "card",
  });

  view.ui.add(legend, "top-right");

  /*********************************************************************
   * Function to create the UI for a slide by creating DOM nodes and
   * adding them to the slidesDiv container.
   *********************************************************************/
  function createSlideUI(slide, placement) {
    /*********************************************************************
     * Create a new <div> element which contains all the slide information.
     * Store a reference to the created DOM node so we can use it to place
     * other DOM nodes and connect events.
     *********************************************************************/
    var slideElement = document.createElement("div");
    // Assign the ID of the slide to the <span> element
    slideElement.id = slide.id;
    slideElement.classList.add("slide");

    /*********************************************************************
     * Place the newly created DOM node cat the beginning of the slidesDiv
     *********************************************************************/
    var slidesDiv = document.getElementById("slidesDiv");
    if (placement === "first") {
      slidesDiv.insertBefore(slideElement, slidesDiv.firstChild);
    } else {
      slidesDiv.appendChild(slideElement);
    }

    /*********************************************************************
     * Create a <div> element to contain the slide title text
     *********************************************************************/
    var title = document.createElement("div");
    title.innerText = slide.title.text;
    // Place the title of the slide in the <div> element
    slideElement.appendChild(title);

    /*********************************************************************
     * Create a new <img> element and place it inside the newly created slide
     * element. This will reference the thumbnail from the slide.
     *********************************************************************/
    var img = new Image();
    // Set the src URL of the image to the thumbnail URL of the slide
    img.src = slide.thumbnail.url;
    // Set the title property of the image to the title of the slide
    img.title = slide.title.text;
    // Place the image inside the new <div> element
    slideElement.appendChild(img);

    /*********************************************************************
     * Set up a click event handler on the newly created slide. When clicked,
     * the code defined below will execute.
     *********************************************************************/
    slideElement.addEventListener("click", function () {
      /*******************************************************************
       * Remove the "active" class from all elements with the .slide class
       *******************************************************************/
      var slides = document.querySelectorAll(".slide");
      Array.from(slides).forEach(function (node) {
        node.classList.remove("active");
      });

      /*******************************************************************
       * Add the "active" class on the current element being selected
       *******************************************************************/
      slideElement.classList.add("active");

      /******************************************************************
       * Applies a slide's settings to the SceneView.
       *
       * Each slide has a viewpoint and visibleLayers property that define
       * the point of view or camera for the slide and the layers that should
       * be visible to the user when the slide is selected. This method
       * allows the user to animate to the given slide's viewpoint and turn
       * on its visible layers and basemap layers in the view.
       ******************************************************************/
      slide.applyTo(view);
    });
  }

  view.when(function () {
    /*********************************************************************
     * The slides will be placed in the 'slidesDiv' <div> element.
     *********************************************************************/
    document.getElementById("slidesDiv").style.visibility = "visible";

    /*********************************************************************
     * The slides are a collection inside the presentation property of
     * the WebScene.
     *********************************************************************/
    var slides = scene.presentation.slides;

    /*********************************************************************
     * Loop through each slide in the collection and render the slide
     *********************************************************************/
    slides.forEach(createSlideUI);

    /*********************************************************************
     * Create a new slide using Slide.createFrom after clicking on the
     * create slide button, using the text from the title input for the
     * title of the slide.
     *********************************************************************/
  });
});
