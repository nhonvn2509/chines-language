const { chars } = await import("../src/data/book1/chars.js")

async function hit(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) })
    const buf = await res.arrayBuffer()
    return `${res.status} ${res.headers.get("content-type")} ${buf.byteLength}B`
  } catch (e) {
    return `ERR ${e.message}`
  }
}

const keys = Object.keys(chars)
const results = await Promise.all(
  keys.map(async (c) => {
    const url = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(c)}&type=2`
    return [c, await hit(url)]
  }),
)
const bad = results.filter(([, r]) => !/^200 audio\/mpeg/.test(r) || / 0B$/.test(r))
console.log(`checked=${results.length} bad=${bad.length}`)
for (const [c, r] of bad.slice(0, 20)) console.log(`BAD ${c} -> ${r}`)

// kiểm tra thêm 20 từ ghép
let words = []
for (let i = 1; i <= 15; i++) {
  const fs = await import("node:fs")
  const s = fs.readFileSync(`src/data/book1/lession${i}.js`, "utf8")
  const re = /han:\s*"([^"]+)"/g
  let m
  while ((m = re.exec(s))) words.push(m[1])
}
const multis = [...new Set(words)]
  .filter((w) => (w.match(/[\u4e00-\u9fff]/g) || []).length > 1)
  .filter((_, i) => i % 8 === 0)
const results2 = await Promise.all(
  multis.map(async (w) => {
    const clean = (w.match(/[\u4e00-\u9fff]/g) || []).join("")
    const url = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(clean)}&type=2`
    return [w, await hit(url)]
  }),
)
const bad2 = results2.filter(([, r]) => !/^200 audio\/mpeg/.test(r))
console.log(`multi checked=${results2.length} bad=${bad2.length}`)
for (const [w, r] of bad2) console.log(`BAD ${w} -> ${r}`)
