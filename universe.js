const loadUniverse = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  displayUniverse(data.data.tools);
};

const displayUniverse = universes => {
    // console.log(universes);
  const universeContainer = document.getElementById("universe_container");
  universes.forEach(universe => {
    const universeDiv = document.createElement("div");
    universeDiv.classList.add("col");
    universeDiv.innerHTML = `
    <div class="card h-100">
    <img src="${universe.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${universe.description ? universe.description : " "}</h5>
        <p class="card-text">1. ${universe.features[0]}</p>
        <p class="card-text">2. ${universe.features[1]}</p>
        <p class="card-text">3. ${universe.features[2]}</p>
        <hr>
       <div  class="d-flex justify-content-between align-items-center">
          <div>
             <h3 class="card-text mt-2">${universe.name}</h3>
         <div class="d-flex align-items-center gap-2">
            <i class="fa-solid fa-calendar-days"></i> 
            <p class="card-text">${ universe.published_in}</p>
          </div>
         </div>

         <div class="mt-4">
         <i class="fas fa-arrow-right text-danger" onclick="fetchUniversesDetail()" data-bs-toggle="modal"
         data-bs-target="#exampleModal"></i>
         </div>
       </div>

      </div>
    </div>

    `;
universeContainer.appendChild(universeDiv)
  });
};



/* ******************************** */


const fetchUniversesDetail = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/01`;
    console.log(url)
    const res = await fetch(url);
    const data = await res.json();
    displayUniverse2(data.data.accuracy);
  };
  
  const displayUniverse2 = universes2 => {
      console.log(universes2);
    const universeContainer2 = document.getElementById("universe_container");
    universes2.forEach(universe2 => {
      const universeDiv = document.createElement("div");
      universeDiv.classList.add("col");
      document.getElementById('modal-body').innerHTML = `
      <div class="card h-100">
    <img src="${universe2.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${universe2.description ? universe2.description : " "}</h5>

      
    </div>
  
      `;
  universeContainer2.appendChild(universeDiv)
    });
  };
  fetchUniversesDetail()



  /* ***************** */
loadUniverse();
