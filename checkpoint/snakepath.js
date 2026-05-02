// const fixed = [
//   {
//     input: [
//       [1, 0, 0, 0],
//       [1, 1, 0, 0],
//       [0, 1, 1, 0],
//       [0, 0, 1, 0],
//     ],
//     expected: true,
//   },
//   {
//     input: [
//       [1, 0, 0, 0],
//       [1, 0, 1, 0],
//       [0, 0, 1, 0],
//       [0, 0, 1, 0],
//     ],
//     expected: false,
//   },
//   { input: [[1]], expected: true },
//   {
//     input: [
//       [1, 0],
//       [0, 1],
//     ],
//     expected: false,
//   },
//   { input: [[1, 1, 1, 1]], expected: true },
//   { input: [[1], [1], [1], [1]], expected: true },
//   {
//     input: [
//       [1, 1],
//       [1, 1],
//     ],
//     expected: false,
//   },
//   {
//     input: [
//       [1, 0, 1],
//       [0, 0, 0],
//       [0, 1, 0],
//     ],
//     expected: false,
//   },
//   {
//     input: [
//       [1, 1, 1],
//       [1, 0, 1],
//       [1, 1, 1],
//     ],
//     expected: false,
//   },
// ];

// let passed = 0;
// let failed = 0;

// console.log("=== Fixed Tests ===");
// fixed.forEach(({ input, expected }, i) => {
//   const result = isSnakePath(input);
//   const ok = result === expected;
//   console.log(
//     `Test ${i + 1}: ${ok ? "✅ PASS" : "❌ FAIL"} (expected ${expected}, got ${result})`,
//   );
//   ok ? passed++ : failed++;
// });

// // ─── Random Tests ─────────────────────────────────────────────────────────────

// const dirs = [
//   [1, 0],
//   [-1, 0],
//   [0, 1],
//   [0, -1],
// ];

// function refCheck(grid) {
//   const h = grid.length,
//     w = grid[0]?.length ?? 0;
//   const ones = [];
//   for (let y = 0; y < h; y++)
//     for (let x = 0; x < w; x++) if (grid[y][x] === 1) ones.push([y, x]);
//   if (ones.length === 0) return false;

//   const key = (y, x) => `${y},${x}`;
//   const deg = new Map();
//   for (const [y, x] of ones) {
//     let d = 0;
//     for (const [dy, dx] of dirs) {
//       const yy = y + dy,
//         xx = x + dx;
//       if (yy >= 0 && yy < h && xx >= 0 && xx < w && grid[yy][xx] === 1) d++;
//     }
//     deg.set(key(y, x), d);
//     if (d > 2) return false;
//   }

//   const ends = [...deg.values()].filter((d) => d === 1).length;
//   if (ones.length > 1 && ends !== 2) return false;

//   const seen = new Set();
//   const [sy, sx] = ones[0];
//   const q = [[sy, sx]];
//   seen.add(key(sy, sx));
//   while (q.length) {
//     const [y, x] = q.pop();
//     for (const [dy, dx] of dirs) {
//       const yy = y + dy,
//         xx = x + dx;
//       if (yy >= 0 && yy < h && xx >= 0 && xx < w && grid[yy][xx] === 1) {
//         const k = key(yy, xx);
//         if (!seen.has(k)) {
//           seen.add(k);
//           q.push([yy, xx]);
//         }
//       }
//     }
//   }
//   return seen.size === ones.length;
// }

// function generateRandom() {
//   const H = 4 + Math.floor(Math.random() * 3);
//   const W = 4 + Math.floor(Math.random() * 3);
//   const G = Array.from({ length: H }, () => Array(W).fill(0));

//   const inb = (y, x) => y >= 0 && y < H && x >= 0 && x < W;
//   let sy = Math.floor(Math.random() * H);
//   let sx = Math.floor(Math.random() * W);
//   G[sy][sx] = 1;

//   const targetLen =
//     3 + Math.floor(Math.random() * Math.max(2, Math.floor((H * W) / 2) - 3));
//   const cells = [{ y: sy, x: sx }];

//   for (let step = 1; step < targetLen; step++) {
//     const shuffled = dirs.slice().sort(() => Math.random() - 0.5);
//     let moved = false;
//     for (const [dy, dx] of shuffled) {
//       const ny = cells[cells.length - 1].y + dy;
//       const nx = cells[cells.length - 1].x + dx;
//       if (!inb(ny, nx) || G[ny][nx] === 1) continue;
//       let deg = 0;
//       for (const [ady, adx] of dirs) {
//         const yy = ny + ady,
//           xx = nx + adx;
//         if (inb(yy, xx) && G[yy][xx] === 1) deg++;
//       }
//       if (deg <= 1) {
//         G[ny][nx] = 1;
//         cells.push({ y: ny, x: nx });
//         moved = true;
//         break;
//       }
//     }
//     if (!moved) break;
//   }

//   if (Math.random() < 0.5) {
//     const mode = Math.floor(Math.random() * 3);
//     if (mode === 0) {
//       const mid = cells[Math.floor(cells.length / 2)] || cells[0];
//       const neigh = dirs
//         .map(([dy, dx]) => ({ y: mid.y + dy, x: mid.x + dx }))
//         .filter((p) => inb(p.y, p.x) && G[p.y][p.x] === 0);
//       if (neigh.length) {
//         const p = neigh[Math.floor(Math.random() * neigh.length)];
//         G[p.y][p.x] = 1;
//       }
//     } else if (mode === 1 && cells.length >= 4) {
//       const s = cells[0],
//         e = cells[cells.length - 1];
//       for (const [dy, dx] of dirs) {
//         const y = s.y + dy,
//           x = s.x + dx;
//         if (
//           inb(y, x) &&
//           G[y][x] === 0 &&
//           Math.abs(y - e.y) + Math.abs(x - e.x) === 1
//         ) {
//           G[y][x] = 1;
//           break;
//         }
//       }
//     } else {
//       let tries = 20;
//       while (tries--) {
//         const y = Math.floor(Math.random() * H),
//           x = Math.floor(Math.random() * W);
//         if (G[y][x] === 0) {
//           G[y][x] = 1;
//           break;
//         }
//       }
//     }
//   }

//   return G;
// }

// const RANDOM_RUNS = 200;
// console.log(`\n=== Random Tests (${RANDOM_RUNS} runs) ===`);
// let randomFailed = 0;
// for (let i = 0; i < RANDOM_RUNS; i++) {
//   const grid = generateRandom();
//   const expected = refCheck(grid);
//   const result = isSnakePath(grid);
//   if (result !== expected) {
//     randomFailed++;
//     console.log(
//       `❌ FAIL on grid:\n${grid.map((r) => r.join(" ")).join("\n")}\n  expected ${expected}, got ${result}\n`,
//     );
//   }
// }
// console.log(
//   randomFailed === 0
//     ? `✅ All ${RANDOM_RUNS} random tests passed!`
//     : `❌ ${randomFailed}/${RANDOM_RUNS} random tests failed`,
// );

// console.log(`\n=== Summary ===`);
// console.log(`Fixed: ${passed}/${fixed.length} passed, ${failed} failed`);
// console.log(`Random: ${RANDOM_RUNS - randomFailed}/${RANDOM_RUNS} passed`);
/**
 *
 * @param {number[][]} arr
 */
function isSnakePath(arr) {
  const set = new Set();
  const dir = [
    [1, 0],
    [0, -1],
    [-1, 0],
    [0, 1],
  ];
  arr.forEach((row, i) =>
    row.forEach((el, j) => {
      if (el === 1) {
        set.add([i, j].toString());
      }
    }),
  );
  
  let first = null;
  set.forEach((el) => {
    if (first !== null) {
      return;
    }
    const norm = el.split(",").map((el) => Number(el));
    let nei = 0;
    dir.forEach(([l, r]) => {
      const [lNorm, rNorm] = norm;
      const next = [l + lNorm, r + rNorm];
      if (set.has(next.toString())) {
        nei++;
      }
    });
    if (nei <= 1) {
      first = norm;
    }
  });
  if (first === null) {
    return false;
  }

  let curr = first;
  let hasCycle = false;
  let prev = [-100, -100];
  let visited = 0;
  let visitedSet = new Set();
  arr.flat().forEach(() => {
    if (curr === null) {
      return;
    }
    if (visitedSet.has(curr.toString())) {
      hasCycle = true;
      curr === null;
      return;
    }
    visited++;
    let foundNew = false;
    dir.forEach(([dLeft, dRight]) => {
      if (foundNew) {
        return;
      }
      const [currL, currR] = curr;
      const next = [currL + dLeft, currR + dRight];
      if (prev.toString() !== next.toString() && set.has(next.toString())) {
        foundNew = true;
        visitedSet.add(curr.toString());
        prev = curr;
        curr = next;
      }
    });
    if (!foundNew) {
      curr = null;
    }
  });

  return !hasCycle && set.size === visited;
}
