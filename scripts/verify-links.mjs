const { chars } = await import("../src/data/book1/chars.js")
const { wordStories } = await import("../src/data/book1/words.js")

async function head(url) {
  try {
    const res = await fetch(url, { method: "GET", signal: AbortSignal.timeout(8000) })
    const type = res.headers.get("content-type") || ""
    const buf = await res.arrayBuffer()
    return { status: res.status, type, size: buf.byteLength }
  } catch (e) {
    return { status: 0, type: e.message, size: 0 }
  }
}

// lấy mẫu ngẫu nhiên 12 chữ + 6 từ ghép
const keys = Object.keys(chars)
const sampleChars = keys.filter((_, i) => i % Math.ceil(keys.length / 12) === 0).slice(0, 12)
const sampleWords = Object.keys(wordStories).filter((_, i) => i % 28 === 0).slice(0, 6)

const results = await Promise.all([
  ...sampleChars.map(async (c) => {
    const r = await head(
      `https://cdn.jsdelivr.net/gh/nmarley/chinese-char-animations@master/images-large/${c.codePointAt(0).toString(16)}-large.gif`,
    )
    return `GIF  ${c}  ${r.status} ${r.type} ${r.size}B`
  }),
  ...sampleChars.map(async (c) => {
    const r = await head(
      `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=${encodeURIComponent(c)}&tl=zh-CN`,
    )
    return `AUD  ${c}  ${r.status} ${r.type} ${r.size}B`
  }),
  ...sampleWords.map(async (w) => {
    const clean = (w.match(/[\u4e00-\u9fff]/g) || []).join("")
    const r = await head(
      `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=${encodeURIComponent(clean)}&tl=zh-CN`,
    )
    return `AUD  ${w}  ${r.status} ${r.type} ${r.size}B`
  }),
])

for (const line of results) console.log(line)
const bad = results.filter((l) => !/ 200 /.test(l))
console.log(bad.length ? `\nFAIL: ${bad.length}` : "\nALL OK")
