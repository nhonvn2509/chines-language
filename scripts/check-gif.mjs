import fs from "node:fs"

const BASE = process.argv[2] || "https://cdn.jsdelivr.net/gh/nmarley/chinese-char-animations@master/images-large"

let words = []
for (let i = 1; i <= 15; i++) {
  const s = fs.readFileSync(`src/data/book1/lession${i}.js`, "utf8")
  const re = /han:\s*"([^"]+)"/g
  let m
  while ((m = re.exec(s))) words.push(m[1])
}
const chars = new Set()
for (const w of words) for (const c of w) if (/[\u4e00-\u9fff]/.test(c)) chars.add(c)

const missing = []
const ok = []
const list = [...chars]
const CONC = 40
let i = 0
async function worker() {
  while (i < list.length) {
    const c = list[i++]
    const code = c.codePointAt(0).toString(16)
    const url = `${BASE}/${code}-large.gif`
    try {
      const res = await fetch(url, { method: "HEAD" })
      if (res.ok) ok.push(c)
      else missing.push(`${c} (${code}) -> ${res.status}`)
    } catch (e) {
      missing.push(`${c} (${code}) -> ERR ${e.message}`)
    }
  }
}
await Promise.all(Array.from({ length: CONC }, worker))
const report = `OK: ${ok.length}, MISSING: ${missing.length}\n` + missing.join("\n")
fs.writeFileSync("scripts/gif-report.txt", report)
console.log(report)
