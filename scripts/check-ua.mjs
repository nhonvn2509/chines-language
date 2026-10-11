const urls = [
  "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=%E4%BD%A0%E5%A5%BD&tl=zh-CN",
  "https://fanyi.baidu.com/gettts?lan=zh&text=%E4%BD%A0%E5%A5%BD&spd=5&source=web",
]

async function hit(url, headers) {
  try {
    const res = await fetch(url, { headers, signal: AbortSignal.timeout(8000) })
    const buf = await res.arrayBuffer()
    return `${res.status} ${res.headers.get("content-type")} ${buf.byteLength}B`
  } catch (e) {
    return `ERR ${e.message}`
  }
}

const browserUA = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
  Referer: "https://translate.google.com/",
}

for (const url of urls) {
  console.log("no-UA     :", url.slice(0, 60), "->", await hit(url, {}))
  console.log("browser-UA:", url.slice(0, 60), "->", await hit(url, browserUA))
}
