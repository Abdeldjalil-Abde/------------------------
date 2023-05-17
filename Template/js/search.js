const search = document.querySelector("header>ul li a .fa-search");
const tabSearch = document.querySelector("header>ul >.search");
const retuenSearch = document.querySelector("header>ul >.search  div .arrow-to-right img");
search.addEventListener("click", () => {
  tabSearch.style.display = "flex";
});
retuenSearch.addEventListener("click", () => {
  tabSearch.style.display = "none";
});