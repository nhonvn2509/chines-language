const chars = ["下", "你", "好", "妈", "谢", "银", "馆", "写", "一", "马", "女", "没", "重", "长", "都", "行", "会", "角"]
const urls = chars.map((c) => [
  c,
  `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=${encodeURIComponent(c)}&tl=zh-CN`,
])

async function hit(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(6000) })
    const buf = await res.arrayBuffer()
    return `${res.status} ${res.headers.get("content-type")} ${buf.byteLength}B`
  } catch (e) {
    return `ERR ${e.message}`
  }
}

const results = await Promise.all(
  urls.map(async ([tag, url]) => [tag, await hit(url)]),
)
for (const [tag, r] of results) {
  console.log(`${tag.padEnd(16)} -> ${r}`)
}

