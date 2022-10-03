let textToTranslate = document.querySelector("input");
let titulo = document.querySelector("h1");
let boton = document.querySelector("#button-translate");
let translatedText = document.querySelector("#translated");
let containerAudio = document.querySelector("#container-audio");
let btnAudio = document.querySelector("#boton-audio");
let messageLetters = document.querySelector("#message-letters");

let objeto = {
  a: "· −",
  b: "− · · ·",
  c: "− · − · ",
  d: "− · ·",
  e: "· ",
  f: "· · − · ",
  g: "− − · ",
  h: "· · · · ",
  i: "· · ",
  j: "· − − −  ",
  k: "− · − ",
  l: "· − · · ",
  m: "− − ",
  n: "− · ",
  o: "− − − ",
  p: "· − − · ",
  q: "− − · − ",
  r: "· − · ",
  s: "· · · ",
  t: "−",
  u: "· · − ",
  v: "· · · − ",
  w: "· − −  ",
  x: "− · · − ",
  y: "− · − − ",
  z: "− − · ·  ",
  " ": "/",
};

boton.addEventListener("click", function () {
  containerAudio.innerHTML = " ";
  let wordLetters = textToTranslate.value.split("");
  let arrayAudios = [];
  let translatedArray = wordLetters.map(function (element) {
    return `<p>${objeto[element]}</p>`;
  });

  for (element of wordLetters) {
    console.log(element + " element");
    var sonido = document.createElement("AUDIO");
    if (element === " ") {
      sonido.setAttribute("src", "./audio/" + 0 + "_morse_code.ogg");
      continue;
    } else {
      sonido.setAttribute("src", "./audio/" + element + "_morse_code.ogg");
    }
    sonido.setAttribute("controls", "controls");
    arrayAudios.push(sonido);
    containerAudio.appendChild(sonido);
  }
  console.log(arrayAudios);
  translatedText.innerHTML = translatedArray.join(" ");

  btnAudio.addEventListener("click", function () {
    for (let i = 0; i < arrayAudios.length; i++) {
      setTimeout(function timer() {
        arrayAudios[i].play();
      }, i * 1750);
    }
    for (let i = 0; i < wordLetters.length; i++) {
      setTimeout(function timer() {
        console.log("imprimeindo ahi " + translatedArray[i]);
        messageLetters.innerHTML = translatedArray[i];
      }, i * 1750);
    }
  });
});
