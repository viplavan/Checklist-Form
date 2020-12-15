window.addEventListener("load", function () {
   console.log("Hello World")

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      return response.json();
   })
      .then(function (json) {
         console.log(json);
      })
});

