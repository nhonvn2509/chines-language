import fs from "node:fs"

let words = []
for (let i = 1; i <= 15; i++) {
  const s = fs.readFileSync(`src/data/book1/lession${i}.js`, "utf8")
  const re = /han:\s*"([^"]+)"/g
  let m
  while ((m = re.exec(s))) words.push(m[1])
}
const uniq = [...new Set(words)]
const multi = uniq.filter((w) => [...w].filter((c) => /[\u4e00-\u9fff]/.test(c)).length > 1)
console.log(`total=${words.length} uniq=${uniq.length} multi-char=${multi.length}`)
console.log(multi.join(" | "))
