// Function expression to select elements
const selectElement = (s) => document.querySelector(s);
// Open the menu on click
selectElement(".open").addEventListener("click", () => {
  selectElement(".nav-list").classList.add("active");
});
// Close the menu on click
selectElement(".close").addEventListener("click", () => {
  selectElement(".nav-list").classList.remove("active");
});

var nasaSrc = "";
var apiKey = "hsYdUGRtQz3x0B0XakFpPAnYGRI3mnVIOaB2UIEK";
("https://api.nasa.gov/planetary/apod?&date=2021-03-14&api_key=hsYdUGRtQz3x0B0XakFpPAnYGRI3mnVIOaB2UIEK");
("https://api.nasa.gov/planetary/apod?api_key=");

const getData = () => {
  fetch("https://api.nasa.gov/planetary/apod?api_key=" + apiKey)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("date").innerHTML = data.date + " | Today's News";
      document.getElementById("target-header").innerHTML = data.title;
      document.getElementById("copyright").innerHTML = "By: " + data.copyright;
      var results = data.explanation.match(/.+?\.|.+/g);
      console.log(results);
      results.map((result) => {
        document.getElementById("target").innerHTML += "<p>" + result + "</p>";
      });
      let imgContainer = document.getElementById("img-container");
      if (!data.url.includes("youtube")) {
        imgContainer.innerHTML =
          "<img src='" +
          data.url +
          "' alt='" +
          data.title +
          "' class='api-media' />";
      } else {
        imgContainer.innerHTML =
          "<iframe src='" +
          data.url +
          "' title='" +
          data.title +
          "' class='api-media'></iframe>";
      }
      //console.log(document.getElementById("image").src);
    });
};

getData();
