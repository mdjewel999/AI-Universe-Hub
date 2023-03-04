/* ***************************loadUniverse start******** */

let singalData = {};
const loadUniverse = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  displayUniverse(data.data.tools);
  // console.log(data.data.tools)
};

const displayUniverse = (universes) => {
  // console.log(universes);
  const universeContainer = document.getElementById("universe_container");

  const showAll = document.getElementById("show-all");
  if (universes.length > 6) {
    // universes = universes.slice(0, 6);
    showAll.classList.remove("d-none");
  } else {
    showAll.classList.add("d-none");
  }
  document
    .getElementById("btn-show-all")
    .addEventListener("click", function () {});


    
  universes.forEach((universe) => {
    const universeDiv = document.createElement("div");
    universeDiv.classList.add("col");
    universeDiv.innerHTML = `
  <div class="card h-100">
      <img src="${universe.image}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${
            universe.description ? universe.description : "No data Found "
          }</h5>
          <p class="card-text">1. ${universe.features[0]}</p>
          <p class="card-text">2. ${universe.features[1]}</p>
          <p class="card-text">3. ${universe.features[2]}</p>
          <hr>
          <div class="d-flex justify-content-between align-items-center">
              <div>
                  <h3 class="card-text mt-2">${universe.name}</h3>
                  <div class="d-flex align-items-center gap-2">
                      <i class="fa-solid fa-calendar-days"></i>
                      <p class="card-text">${universe.published_in}</p>
                  </div>


              </div>
              <div class="bg-danger bg-opacity-10 text-danger rounded-circle">
             <span onclick="loadUniverse2(${
               universe.id
             })" role="button" data-bs-toggle="modal" data-bs-target="#uneverselMoodalDetails"><i id="btn_click" class="fas fa-arrow-right p-3"></i></span>
  
                </div>
               </div>
      </div>
  </div>
  
  `;
    universeContainer.appendChild(universeDiv);
  });
};
/* ***************************************** */
/* document.getElementById("shortingByBtn").addEventListener("click", function () {
  const arrayOfObj = eachData;
  let sixOnj = [];
  for (let i = 0; i < 6; i++) {
    const index = arrayOfObj[i];
    sixOnj.push(index);
  }
  const easy = sixOnj.sort(function (a, b) {
    const convertNum = a.universe;
    const convertNum2 = b.universe;

    const num = parseInt(convertNum);
    const num2 = parseInt(convertNum2);

    return num - num2;
  });
  console.log(easy);
}); */

/* ***************************loadUniverse end******** */

/* ***************************loader spinner******** */

window.addEventListener("load", function () {
  const loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.classList.add("d-none");
  }, 1000);
});

/* ************** loader spinner end ******************** */

/* ************** loadUniverse2 start ******************** */

const loadUniverse2 = async (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/0${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayUniverse2(data.data);
};

const displayUniverse2 = (universes2) => {
  console.log(universes2);
  document.getElementById("model_title").innerText = universes2.description
    ? universes2.description
    : "No data Found ";
  document.getElementById(
    "btn_basic"
  ).innerHTML = `<span> ${universes2.pricing[0].price}<br/>${universes2.pricing[0].plan}</span>`;
  document.getElementById(
    "btn_pro"
  ).innerHTML = `<span>${universes2.pricing[1].price}<br/>${universes2.pricing[0].plan}</span>`;

  document.getElementById(
    "btn_enterprise"
  ).innerHTML = `<span>${universes2.pricing[2].price}<br/>${universes2.pricing[0].plan}</span>`;

  document.getElementById("btn_features").innerText =
    universes2.features[1].feature_name;

  document.getElementById("btn_multilingual").innerText =
    universes2.features[2].feature_name;

  document.getElementById("btn_seamless").innerText =
    universes2.features[3].feature_name;

  document.getElementById("btn_fb").innerText = universes2.integrations[0];
  document.getElementById("btn_slack").innerText = universes2.integrations[1];
  document.getElementById("btn_telegram").innerText =
    universes2.integrations[2];

  document.getElementById("btn_image").src = universes2.image_link[0];

  document.getElementById("image-title").innerText =
    universes2.input_output_examples[1].input;
  document.getElementById("image-text").innerText =
    universes2.input_output_examples[0].output;
};

/* ************** loadUniverse2 end ******************** */

loadUniverse();

/* ********************************** */
