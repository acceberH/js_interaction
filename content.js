const generateBtn = document.querySelector("#generate-btn");
const output = document.querySelector("#output");

const generate = (name) => {
  const fortunes = [
    `${name}, you will find true love soon.`,
    `Don't worry ${name}, good things are coming your way.`,
    `${name}, today is a lucky day for you!`,
    `You will be successful in your career, ${name}.`,
    `${name}, your dreams will come true if you believe in them.`,
  ];

  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

  output.innerText = randomFortune;
};

const restyle = () => {
  const properties = [
    "color",
    "font-size",
    "background-color",
    "border-radius",
    "border",
  ];

  properties.forEach((property) => {
    const randomValue = Math.floor(Math.random() * 256);
    output.style[property] = `rgb(${randomValue}, ${randomValue}, ${randomValue})`;
  });
};

generateBtn.addEventListener("click", () => {
  const name = document.querySelector("#name").value;
  generate(name);
  restyle();
});
