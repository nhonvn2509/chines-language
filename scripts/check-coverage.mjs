import fs from "node:fs"

let words = []
for (let i = 1; i <= 15; i++) {
  const s = fs.readFileSync(`src/data/book1/lession${i}.js`, "utf8")
  const re = /han:\s*"([^"]+)"/g
  let m
  while ((m = re.exec(s))) words.push(m[1])
}
const needed = new Set()
for (const w of words) for (const c of w) if (/[\u4e00-\u9fff]/.test(c)) needed.add(c)

const { chars } = await import(`../src/data/book1/chars.js?t=${Date.now()}`)
const { wordStories } = await import(`../src/data/book1/words.js?t=${Date.now()}`)

const missingChars = [...needed].filter((c) => !chars[c])
console.log(`chars: needed=${needed.size} have=${Object.keys(chars).length} missing=${missingChars.join("") || "none"}`)

// chars thiếu trường
const badFields = Object.entries(chars).filter(
  ([, v]) => !v.py || !v.hv || !v.p || !v.w,
)
console.log("chars missing fields:", badFields.map(([c]) => c).join("") || "none")

// từ ghép thiếu câu "Cả từ"
const uniqWords = [...new Set(words)]
const multi = uniqWords.filter((w) => (w.match(/[\u4e00-\u9fff]/g) || []).length > 1)
const missingStories = multi.filter((w) => !wordStories[w])
const extraStories = Object.keys(wordStories).filter((w) => !uniqWords.includes(w))
console.log(`multi-char words=${multi.length} stories=${Object.keys(wordStories).length}`)
console.log("missing stories:", missingStories.join(" | ") || "none")
console.log("extra stories:", extraStories.join(" | ") || "none")

// render thử vài từ
const { memoryLines, wordHanViet, audioUrl, strokeGifUrl } = await import(
  `../src/data/book1/enrich.js?t=${Date.now()}`
)
for (const [han, py, nghia] of [
  ["下午", "xiàwǔ", "buổi chiều"],
  ["你好", "nǐ hǎo", "xin chào"],
  ["图书馆", "túshūguǎn", "thư viện"],
  ["谢", "xiè", "cảm ơn"],
]) {
  console.log("\n--- " + han + " | Hán Việt: " + wordHanViet(han) + " ---")
  for (const line of memoryLines(han, py, nghia)) console.log(line)
  console.log("audio:", audioUrl(han))
  console.log("gif:", strokeGifUrl(han[0]))
}

