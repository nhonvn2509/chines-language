import fs from "node:fs"

let words = []
for (let i = 1; i <= 15; i++) {
  const s = fs.readFileSync(`src/data/book1/lession${i}.js`, "utf8")
  const re = /han:\s*"([^"]+)"/g
  let m
  while ((m = re.exec(s))) words.push(m[1])
}
const chars = new Set()
for (const w of words) {
  for (const c of w) {
    if (/[\u4e00-\u9fff]/.test(c)) chars.add(c)
  }
}
console.log("total words:", words.length)
console.log("unique chars:", chars.size)
console.log([...chars].join(""))
