export function build(num) {
  const body = document.body
  let i = 1;
  const id = setInterval(() => {
    if (i > num) {
      clearInterval(id);
      return;
    }
    const ele = document.createElement("div");
    ele.id = `brick-${i}`;
    if (i % 3 === 2) {
      ele.dataset.foundation = "true";
    }
    body.append(ele);
    i++;
  }, 100);
}

export function repair(...ids) {
  console.log(ids)
  for (const id of ids) {
    const ele = document.querySelector(`#${id}`)
    if (!ele) {
      continue
    }
    if (ele.hasAttribute('data-foundation')) {
      ele.dataset.repaired = 'in progress'
    } else {
      ele.dataset.repaired = 'true'
    }
  }
}

export function destroy() {
  const divs = document.querySelectorAll("body > div")
  const last = divs[divs.length - 1]
  last.remove()
}
