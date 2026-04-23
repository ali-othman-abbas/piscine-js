const ref = [0]
const fn = () => fn()
ref.forEach((_, i) => {
  if (i <= 30) {
    ref.push(0)
  }
})

fn()