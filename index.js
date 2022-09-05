//
const card = document.querySelector(".header");

const fetchData = async function () {
  const res = await fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem"
  );
  const data = await res.json();

  const output = data.data;
  console.log(output);

  output.map((el) => {
    const demo = document.createElement("div");

    demo.innerHTML = `  <div class="container">
    <div class="row ">
      <div class="col-3">
        <div class="card" >
          <img src=${el.album.cover} alt="..." />
          <div class="card-body">
            <h5 class="card-title">${el.album.title}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary button">Go somewhere</a>
          </div>
        </div>
      </div>
     
    </div>
  </div>`;
    return card.appendChild(demo);
  });
};

fetchData();
