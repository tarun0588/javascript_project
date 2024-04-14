const textarea = document.getElementById("content");
const add = document.getElementById("btn");
const container = document.getElementById("display");
const colorInput = document.getElementById("colorInput");
const title = document.getElementById("title");

colorInput.addEventListener("change", () => {
  let val = colorInput.value;
  textarea.style.backgroundColor = val;
});

add.addEventListener("click", () => {
  let text = textarea.value;

  createElement(text, colorInput.value);

  textarea.value = "";
});

const createElement = (text, color) => {
  let div = document.createElement("div");
  div.innerHTML = `
  <div>
    <span id="del">X</span>
  </div>

  You typed: ${text}
  `;

  div.classList.add("internalDivs");
  div.style.backgroundColor = color;
  console.log(div);
  container.append(div);
};
container.addEventListener("click", (e) => {
    if (e.target.innerHTML === " ") {
      e.target.parentElement.parentElement.remove();
      // e.target.parentElement.parentElement.style.display = "none";
    }
  });
  
  