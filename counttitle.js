const button = document.querySelector(".button");

button.addEventListener("click", function () {
  const fetchData = async function () {
    const res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem"
    );
    const data = await res.json();

    const output = data.data;

    const arrayUniqueByKey = [
      ...new Set(output.map((item) => item.album.title)),
    ];

    console.log(output);

    console.log(arrayUniqueByKey);
  };
  fetchData();
});
