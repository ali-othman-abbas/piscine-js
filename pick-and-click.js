const svgNS = "http://www.w3.org/2000/svg";
export function pick() {
  const body = document.body;
  const centerDiv = document.createElement("div");
  centerDiv.classList.add("hsl");

  const hueDiv = document.createElement("div");
  hueDiv.textContent = `Hue`;
  hueDiv.classList.add("hue", "text");

  const luminosityDiv = document.createElement("div");
  luminosityDiv.textContent = `luminosity`;
  luminosityDiv.classList.add("luminosity", "text");
  
  const succ = document.createElement("div");
  succ.classList.add("text");
  succ.style.bottom = "100px";
  succ.style.right = "100px";
  succ.textContent = "copied";
  succ.style.filter = 'invert(100%)'

  body.append(centerDiv);
  body.append(hueDiv);
  body.append(luminosityDiv);
  document.addEventListener("mousemove", (e) => {
    const xN = e.x / window.innerWidth;
    const yN = e.y / window.innerHeight;

    const hue = Math.round(xN * 360);
    const luminosity = Math.round(yN * 100);

    const hslStr = `hsl(${hue}, 50%, ${luminosity}%)`;

    body.style.background = hslStr;
    centerDiv.textContent = hslStr;
    centerDiv.style.color = hslStr;
    hueDiv.style.color = hslStr;
    luminosityDiv.style.color = hslStr;
    succ.style.color = centerDiv.textContent;
  });

  let timeOut = null
  document.addEventListener("click", (e) => {
    const hslStr = centerDiv.textContent;
    copyToClipboard(hslStr);
    if (timeOut !== null) {
      succ.remove()
      clearTimeout(timeOut)
    }

    
    body.append(succ);
    timeOut = setTimeout(() => {
      succ.remove();
      timeOut = null
    }, 3000);
  });

  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", `${window.innerWidth}`);
  svg.setAttribute("height", `${window.innerHeight}`);

  const lineVert = document.createElementNS(svgNS, "line");
  const lineHoriz = document.createElementNS(svgNS, "line");

  svg.appendChild(lineVert);
  svg.appendChild(lineHoriz);
  document.body.appendChild(svg);
  document.addEventListener("mousemove", (e) => {
    lineVert.setAttribute("x1", `${e.x}`);
    lineVert.setAttribute("x2", `${e.x}`);
    lineVert.setAttribute("y1", `0`);
    lineVert.setAttribute("y2", `${window.innerHeight}`);

    lineHoriz.setAttribute("x1", `${0}`);
    lineHoriz.setAttribute("x2", `${window.innerWidth}`);
    lineHoriz.setAttribute("y1", `${e.y}`);
    lineHoriz.setAttribute("y2", `${e.y}`);
  });
}

/**
 *
 * @param {string} text
 */
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Text copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}
