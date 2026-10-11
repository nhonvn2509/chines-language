import { chars } from "./chars.js"
import { wordStories } from "./words.js"

const HANZI_RE = /[\u4e00-\u9fff]/g

/** Link phát âm (Youdao type=2 – đã kiểm tra trả audio/mpeg cho từ ghép và chữ đơn) */
export function audioUrl(text) {
  return `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&type=2`
}

/** Link GIF viết chữ (kho 5258 ký tự trên jsDelivr – đã kiểm tra 310/310 chữ trong sách trả image/gif) */
export function strokeGifUrl(char) {
  const code = char.codePointAt(0).toString(16)
  return `https://cdn.jsdelivr.net/gh/nmarley/chinese-char-animations@master/images-large/${code}-large.gif`
}

/** Các chữ Hán trong từ (giữ thứ tự, loại bỏ ký tự không phải Hán tự) */
export function hanChars(word) {
  return [...(word.match(HANZI_RE) || [])]
}

/** Các chữ Hán duy nhất (dùng cho link âm + link GIF của từng chữ) */
export function uniqueHanChars(word) {
  return [...new Set(hanChars(word))]
}

/** Hán Việt của từ: ghép Hán Việt từng chữ (vd 你好 = nhĩ hảo) */
export function wordHanViet(word) {
  return hanChars(word)
    .map((c) => (chars[c] ? chars[c].hv : ""))
    .filter(Boolean)
    .join(" ")
}

function sentence(s) {
  const t = s.replace(/[.\s]+$/, "")
  return /[.!?]$/.test(t) ? t : `${t}.`
}

/**
 * Dựng khối "Cách nhớ" theo mẫu:
 *   下午 (xiàwǔ) – Buổi chiều
 *   下 (xià): ... .
 *   Cả từ: ...
 *   Viết: ...
 */
export function memoryLines(word, pinyin, nghia) {
  const list = hanChars(word)
  const lines = [`${word} (${pinyin}) – ${nghia}`]

  const seen = new Set()
  for (const c of list) {
    if (seen.has(c)) continue
    seen.add(c)
    const info = chars[c]
    if (info) lines.push(sentence(`${c} (${info.py}): ${info.p}`))
  }

  const story = wordStories[word]
  if (story) lines.push(sentence(`Cả từ: ${story}`))

  const writeParts = []
  const seenW = new Set()
  for (const c of list) {
    if (seenW.has(c)) continue
    seenW.add(c)
    if (chars[c]) writeParts.push(`${c} (${chars[c].w})`)
  }
  if (writeParts.length) lines.push(sentence(`Viết: ${writeParts.join(" → ")}`))

  return lines
}
