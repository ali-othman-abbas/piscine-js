"use strict";
import { colors } from "./fifty-shades-of-cold.data.js";

export function generateClasses() {
  const result = [];
  for (const color of colors) {
    result.push(`.${color} {`);
    result.push(`  background: ${color};`);
    result.push(`}`);
  }
  const str = result.join("\n");
  const head = document.head;
  const el = document.createElement("style");
  head.append(el);
  el.textContent = str;
}

const coldShades = [
  "aqua",
  "blue",
  "turquoise",
  "green",
  "cyan",
  "navy",
  "purple",
];
export function generateColdShades() {
  const body = document.body;
  for (const color of colors) {
    if (!coldShades.some((shade) => color.includes(shade))) {
      continue;
    }
    const el = document.createElement("div");
    el.classList.add(color);
    el.textContent = color;
    body.append(el);
  }
}

/**
 * @param {string} shade
 */
export function choseShade(shade) {
  const divs = document.querySelectorAll("body > div");
  for (const div of divs) {
    div.classList.replace(div.classList.item(0), shade);
  }
}