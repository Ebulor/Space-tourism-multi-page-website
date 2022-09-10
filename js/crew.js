fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    slider(data);
  })
  .catch(function (err) {
    console.log(err);
  });

function slider(data) {
  const role = document.querySelector(".role");
  const crewName = document.querySelector(".crew-name");
  const crewImg = document.querySelector(".crew-img");
  const bio = document.querySelector(".crew-bio");
  const slideBtns = document.querySelectorAll(".btn");

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].crew.length; j++) {
      let planetIndex = j;
      slideBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
          slideBtns.forEach((btn) => {
            btn.classList.remove("clicked");
          });
          btn.classList.add("clicked");

          if (planetIndex === index) {
            bio.textContent = data[i].crew[planetIndex].bio;
            crewName.textContent = data[i].crew[planetIndex].name;
            crewImg.src = data[i].crew[planetIndex].images.png;
            role.textContent = data[i].crew[planetIndex].role;
          }
        });
      });
    }
  }
}
