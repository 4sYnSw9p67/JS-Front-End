function create(words) {
   let wordArray = words;
   let container = document.querySelector("#content");

   for (let i = 0; i < wordArray.length; i++) {
      let text = wordArray[i];
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.textContent = text;
      p.style.display = "none";
      div.appendChild(p);
      div.addEventListener("click", showText);
      container.appendChild(div);
   }

   function showText() {
      this.firstChild.style.display = "block";
   }
}