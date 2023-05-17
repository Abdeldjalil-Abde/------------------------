const text = document.querySelectorAll("header>ul li a");
const search = document.querySelector("header>ul li a .fa-search");
const logo = document.querySelector("header>ul .logo .text h1");
const header = document.querySelector("header>ul");
const tabSearch = document.querySelector("header>ul >.search");
const retuenSearch = document.querySelector("header>ul >.search  div .arrow-to-right img");
for (let i = 0; i < text.length; i++) {
  text[i].style.color = `#fff`;
}
document.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.style.background = "rgb(245,245,245)";
    logo.style.color = "#000"; 
    for (let i = 0; i < text.length; i++) {
        text[i].style.color = `#000`;
    }
  } else {
    for (let i = 0; i < text.length; i++) {
      text[i].style.color = `#fff`;
    }
    header.removeAttribute('style');
    logo.removeAttribute('style');
  }
});
search.addEventListener("click", () => {
  tabSearch.style.display = "flex";
});
retuenSearch.addEventListener("click", () => {
  tabSearch.style.display = "none";
});
text.forEach((obj)=>{
    obj.addEventListener('mouseover', () => {
        obj.style.color = '#767474';
      }, false);
      
    obj.addEventListener('mouseleave', () => {
      if(window.scrollY > 40) {
        obj.style.color = '#000';
      } else {
        obj.style.color = '#fff';

      }
      }, false);     
});
