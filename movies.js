import cheerio from "cheerio";

export function getMovies(body) {
  const moviesArray = [];
  const $ = cheerio.load(body);
  $(".item-type-movie").each((i, item) => {
    const $item = $(item);
    const name = $item.find("a strong").text().trim();
    const image = $item.find(".browse-image-container img").attr("src").trim();

    const movie = {
      name,
      image,
    };
    moviesArray.push(movie);
  });
  console.log(moviesArray);
  return moviesArray;
}
