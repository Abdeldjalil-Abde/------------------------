const tools = document.querySelectorAll(
  "section > .tools .subTools .typeTools"
);
// const ul = document.querySelectorAll(
//   "body > section .tools .subTools .typeTools ul"
// );
for(var i=0;i<tools.length;i++){
  tools[i].querySelector("ul").style.display = "none";
}
tools.forEach((obj) => {
  obj.querySelector("samp").addEventListener("click", () => {
    if (obj.querySelector("ul").style.display == "none") {
        obj.querySelector("ul").style.display = "block";
        obj.querySelector("samp").style.setProperty('--x','rotate(-136deg)');

    } else {
        obj.querySelector("ul").style.display = "none";       
         obj.querySelector("samp").style.setProperty('--x','rotate(45deg)');


    }
  });
});
/* ------------------------------------ */

