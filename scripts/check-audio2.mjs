const browserUA = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
  Referer: "https://nhonvn2509.github.io/",
}

async function hit(label, url) {
  try {
    const res = await fetch(url, { headers: browserUA, signal: AbortSignal.timeout(8000) })
    const buf = await res.arrayBuffer()
    console.log(`${label} -> ${res.status} ${res.headers.get("content-type")} ${buf.byteLength}B`)
  } catch (e) {
    console.log(`${label} -> ERR ${e.message}`)
  }
}

for (const w of ["你好", "银行", "图书馆", "下午", "下"]) {
  const e = encodeURIComponent(w)
  await hit(`yd-t1 ${w}`, `https://dict.youdao.com/dictvoice?audio=${e}&type=1`)
  await hit(`yd-t2 ${w}`, `https://dict.youdao.com/dictvoice?audio=${e}&type=2`)
}
