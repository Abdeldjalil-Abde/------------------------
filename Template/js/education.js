const typeModule = document.querySelectorAll(
    "body > section  .Content .GroubeTypeModule > div"
  );
  for(var i=0;i<typeModule.length;i++){
    typeModule[i].querySelector("ul").style.display = "none";
  }
  typeModule.forEach((obj) => {
    obj.querySelector(".typeModule").addEventListener("click", () => {
      if (obj.querySelector("ul").style.display === "none") {
          obj.querySelector("ul").style.display = "block";
      } else {
          obj.querySelector("ul").style.display = "none";
      }
    });
  });
