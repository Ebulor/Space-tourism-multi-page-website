fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    navigation(data);
  })
  .catch(function (err) {
    console.log(err);
  });

function navigation(data) {
  const planetImg = document.querySelector(".planet-img");
  const planetName = document.querySelector(".planet-name");
  const planetInfo = document.querySelector(".planet-info");
  const travelDistance = document.querySelector(".travel-distance");
  const travelTime = document.querySelector(".travel-time");
  const navElements = document.querySelectorAll(".nav-element");

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].destinations.length; j++) {
      let planetIndex = j;

      navElements.forEach((nav, index) => {
        nav.addEventListener("click", () => {
          navElements.forEach((nav) => {
            nav.classList.remove("active-nav");
          });
          nav.classList.add("active-nav");

          if (planetIndex === index) {
            planetImg.src = data[i].destinations[planetIndex].images.png;
            planetName.textContent = data[i].destinations[planetIndex].name;
            planetInfo.textContent =
              data[i].destinations[planetIndex].description;
            travelDistance.textContent =
              data[i].destinations[planetIndex].distance;
            travelTime.textContent = data[i].destinations[planetIndex].travel;
          }
        });
      });
    }
  }
}
