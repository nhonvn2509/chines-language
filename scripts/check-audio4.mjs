async function hit(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(7000) })
    const buf = await res.arrayBuffer()
    return `${res.status} ${res.headers.get("content-type")} ${buf.byteLength}B`
  } catch (e) {
    return `ERR ${e.message}`
  }
}

const tests = ["口", "银行", "阿拉伯语", "玛丽", "词典"]
const results = await Promise.all(
  tests.map(async (t) => {
    const url = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(t)}&type=2`
    return [t, await hit(url)]
  }),
)
for (const [t, r] of results) console.log(`${t} -> ${r}`)
