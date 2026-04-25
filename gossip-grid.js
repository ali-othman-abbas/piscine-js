import { gossips } from "./gossip-grid.data.js";
export function grid() {
  buildUI();
  addEvents();
}

function buildRanges() {
  const sliders = document.createElement("div");
  sliders.classList.add("ranges");

  const widthSlider = document.createElement("input");
  const fontSizeSlider = document.createElement("input");
  const backgroundSlider = document.createElement("input");

  widthSlider.type = "range";
  fontSizeSlider.type = "range";
  backgroundSlider.type = "range";

  widthSlider.id = "width";
  fontSizeSlider.id = "fontSize";
  backgroundSlider.id = "background";

  widthSlider.classList.add("range");
  fontSizeSlider.classList.add("range");
  backgroundSlider.classList.add("range");

  widthSlider.min = "200";
  widthSlider.max = "800";
  fontSizeSlider.min = "20";
  fontSizeSlider.max = "40";
  backgroundSlider.min = "20";
  backgroundSlider.max = "75";

  /**
   * @type {NodeListOf<HTMLElement>}
   */
  const allGossips = document.querySelectorAll(`div.gossip`);
  const style = getComputedStyle(allGossips[0]);
  widthSlider.value = `${parseInt(style.width)}`;
  fontSizeSlider.value = `${parseInt(style.fontSize)}`;
  backgroundSlider.value = `50`;

  sliders.append(widthSlider, fontSizeSlider, backgroundSlider);
  return sliders;
}

function buildUI() {
  const body = document.body;
  const grid = buildGrid();
  body.append(grid);
  const ranges = buildRanges();

  body.prepend(ranges);
}

function buildForm() {
  const form = document.createElement("form");
  form.classList.add('gossip')
  const textArea = document.createElement("textarea");
  const button = document.createElement("button");
  button.textContent = "Share gossip!";
  button.type = "submit";
  form.append(textArea, button);
  return form;
}
function buildGrid() {
  const grid = document.createElement("div");
  grid.classList.add("gossip-grid");
  for (const g of gossips) {
    const div = document.createElement("div");
    div.classList.add("gossip");
    div.textContent = g;
    grid.append(div);
  }

  const form = buildForm();
  grid.prepend(form);

  return grid;
}

function addEvents() {
  const form = document.querySelector("form.gossip");
  const button = form.querySelector("button");
  const textArea = form.querySelector("textarea");
  /** @type {HTMLInputElement} */
  const widthSlider = document.querySelector("#width");
  /** @type {HTMLInputElement}*/
  const fontSizeSlider = document.querySelector("#fontSize");
  /** @type {HTMLInputElement}*/
  const backgroundSlider = document.querySelector("#background");
  /** @type {NodeListOf<HTMLElement>}*/
  let allGossips = document.querySelectorAll(".gossip");

  const widthSliderFn = () =>
    allGossips.forEach((ele) => (ele.style.width = `${widthSlider.value}px`));
  const fontSizeSliderFn = () =>
    allGossips.forEach(
      (ele) => (ele.style.fontSize = `${fontSizeSlider.value}px`),
    );
  const backgroundSliderFn = () =>
    allGossips.forEach(
      (ele) =>
        (ele.style.backgroundColor = `hsl(280, 50%, ${backgroundSlider.value}%)`),
    );
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const div = document.createElement("div");
    div.textContent = textArea.value;
    div.classList.add("gossip");
    form.insertAdjacentElement("afterend", div);
    textArea.value = "";
    allGossips = document.querySelectorAll(".gossip");
    widthSliderFn();
    fontSizeSliderFn();
    backgroundSliderFn();
  });
  widthSlider.addEventListener("input", (_) => widthSliderFn());
  fontSizeSlider.addEventListener("input", (_) => fontSizeSliderFn());
  backgroundSlider.addEventListener("input", (_) => backgroundSliderFn());
}
