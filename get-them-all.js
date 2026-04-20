import { people } from "./get-them-all.data.js";
export const getArchitects = () => [
  [...document.querySelectorAll("a")],
  [...document.querySelectorAll("span")],
];

export const getClassical = () => [
  [...document.querySelectorAll("a.classical")],
  [...document.querySelectorAll("a:not(.classical)")],
];

export const getActive = () => [
  [...document.querySelectorAll('a.classical.active')],
  [...document.querySelectorAll('a.classical:not(.active)')],
];

export const getBonannoPisano = () => [
  document.querySelector('#BonannoPisano'),
  [...document.querySelectorAll('a.classical.active:not(#BonannoPisano)')],
];
