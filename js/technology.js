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
  const techImgPortrait = document.querySelector(".potrait");
  const techImglanscape = document.querySelector(".landscape");
  const title = document.querySelector(".tech-name");
  const description = document.querySelector(".tech-info");
  const navElements = document.querySelectorAll(".nav-btn");

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].technology.length; j++) {
      let planetIndex = j;

      navElements.forEach((nav, index) => {
        nav.addEventListener("click", () => {
          navElements.forEach((nav) => {
            nav.classList.remove("active-nav");
          });
          nav.classList.add("active-nav");

          if (planetIndex === index) {
            techImglanscape.src =
              data[i].technology[planetIndex].images.landscape;
            techImgPortrait.src =
              data[i].technology[planetIndex].images.portrait;
            title.textContent = data[i].technology[planetIndex].name;
            description.textContent =
              data[i].technology[planetIndex].description;
          }
        });
      });
    }
  }
}
