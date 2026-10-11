import { Fragment, useEffect, useState } from "react"
import book1 from "./data/book1"
import { chars } from "./data/book1/chars"
import {
  audioUrl,
  hanChars,
  memoryLines,
  strokeGifUrl,
  uniqueHanChars,
  wordHanViet,
} from "./data/book1/enrich"
import "./App.css"

/** Phát âm ngay trong trang bằng giọng tiếng Trung có sẵn của máy.
 * Luôn thử giọng hệ thống trước (chuẩn thanh điệu, không cần mạng),
 * nếu máy chưa cài giọng Hoa thì mới tải file mp3 của Youdao. */
function speak(text, zhVoice) {
  if (!text) return
  try {
    if ("speechSynthesis" in window && zhVoice) {
      window.speechSynthesis.cancel()
      const utter = new SpeechSynthesisUtterance(text)
      utter.lang = "zh-CN"
      utter.voice = zhVoice
      utter.rate = 0.85
      window.speechSynthesis.speak(utter)
      return
    }
  } catch {
    // bỏ qua, chuyển sang mp3
  }
  try {
    new Audio(audioUrl(text)).play().catch(() => {
      window.open(audioUrl(text), "_blank", "noreferrer")
    })
  } catch {
    window.open(audioUrl(text), "_blank", "noreferrer")
  }
}

/** Ảnh GIF viết chữ, nếu tải lỗi thì hiện link dự phòng */
function GifImage({ char }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <a href={strokeGifUrl(char)} target="_blank" rel="noreferrer">
        ✍️ Mở GIF chữ {char}
      </a>
    )
  }
  return (
    <img
      src={strokeGifUrl(char)}
      alt={`GIF cách viết chữ ${char}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

function App() {
  const [openLesson, setOpenLesson] = useState(null)
  const [openWord, setOpenWord] = useState(null)
  const [zhVoice, setZhVoice] = useState(null)

  // Nạp giọng tiếng Trung của máy ngay khi mở app (Chrome tải danh sách giọng bất đồng bộ)
  useEffect(() => {
    const pickVoice = () => {
      try {
        const voices =
          typeof window !== "undefined" && "speechSynthesis" in window
            ? window.speechSynthesis.getVoices()
            : []
        const best =
          voices.find((v) => /zh[-_](CN|Hans)/i.test(v.lang)) ||
          voices.find((v) => /^zh/i.test(v.lang)) ||
          voices.find((v) => /chinese/i.test(v.name)) ||
          null
        setZhVoice(best)
      } catch {
        setZhVoice(null)
      }
    }
    pickVoice()
    try {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.onvoiceschanged = pickVoice
      }
    } catch {
      // bỏ qua
    }
    return () => {
      try {
        if ("speechSynthesis" in window) {
          window.speechSynthesis.onvoiceschanged = null
        }
      } catch {
        // bỏ qua
      }
    }
  }, [])

  const say = (text) => speak(text, zhVoice)

  return (
    <div className="app">
      {/* Homepage Section */}
      <section className="homepage min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Luyện viết chữ Hán & tiếng Trung
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Trực quan, không cần cài app, luyện mỗi ngày để nhớ lâu. Bắt đầu với chữ hôm nay hoặc chọn bộ từ vựng.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              className="bg-accent text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
              onClick={() => alert("Mở Từ điển")}
            >
              Mở Từ điển
            </Button>
            <Button
              className="bg-white text-gray-800 px-6 py-3 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
              onClick={() => alert("Bút thuận")}
            >
              Bút thuận
            </Button>
          </div>
        </div>
      </section>

<div className="mx-auto px-4 py-6">
        <Separator />
        <h3 className="text-xl font-medium text-gray-900 mb-4 text-center">Công cụ học tập</h3>
        <p className="text-sm text-gray-500 mb-6 text-center">Chọn một công cụ để bắt đầu ngay</p>
        
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
          {[
            { label: "Từ điển", desc: "Tra nghĩa, pinyin, ví dụ" },
            { label: "Bút thuận", desc: "Xem thứ tự nét, luyện viết" },
            { label: "Lộ trình", desc: "Học theo cấp HSK" },
            { label: "Trò chơi", desc: "Ghép từ, tìm chữ" },
            { label: "Tạo vở tập", desc: "In PDF ô li" },
            { label: "Flashcard", desc: "In thẻ hai mặt" },
            { label: "Luyện nghe", desc: "Nghe rồi gõ lại" },
            { label: "Luyện nói", desc: "Chấm phát âm" },
          ].map((tool) => (
            <div key={tool.label} className="p-4 text-left hover:shadow-lg transition-shadow cursor-pointer border border-gray-100">
              <div className="w-6 h-6 mx-auto mb-3 flex items-center justify-center rounded-md bg-gray-100">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M{M.icon === 'Search' ? 'M21 21l-4.3-4.3' : 'M12 2v2M12 20v2M16 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM5 9h14l1-3H5l1 3zm0 8h14l1-3H5l1 3z' : 'M12 2v2M12 20v2M16 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM5 9h14l1-3H5l1 3zm0 8h14l1-3H5l1 3z'}" />
                </svg>
              </div>
              <h4 className="text-sm font-medium text-gray-800 mb-1">{tool.label}</h4>
              <p className="text-xs text-gray-500">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <header className="app-header">
        <h1>{book1.name}</h1>
        <p className="subtitle">{book1.nameCn}</p>
        <p className="meta">
          {book1.author} | {book1.publisher} | {book1.edition}
        </p>
        <p className="meta">
          Tổng cộng {book1.totalLessons} bài — từ vựng &amp; ngữ pháp đầy đủ
        </p>
      </header>

      <main>
        {book1.lessons.map((lesson) => (
          <section key={lesson.id} className="lesson">
            <button
              type="button"
              className="lesson-header"
              onClick={() =>
                setOpenLesson(openLesson === lesson.id ? null : lesson.id)
              }
            >
              <span className="lesson-title">
                Bài {lesson.id}: {lesson.title}
              </span>
              <span className="lesson-pinyin">{lesson.pinyin}</span>
              <span className="lesson-titlevi">{lesson.titleVi}</span>
            </button>

            {openLesson === lesson.id && (
              <div className="lesson-body">
                <h3>Từ vựng ({lesson.vocabulary.length} từ)</h3>
                <table className="vocab-table">
                  <thead>
                    <tr>
                      <th>Hán tự</th>
                      <th>Pinyin</th>
                      <th>Hán Việt</th>
                      <th>Loại từ</th>
                      <th>Nghĩa</th>
                      <th>Link</th>
                      <th>Cách nhớ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lesson.vocabulary.map((word, i) => {
                      const key = `${lesson.id}-${i}`
                      const isOpen = openWord === key
                      const charsOfWord = hanChars(word.han)
                      const uniqueChars = uniqueHanChars(word.han)

                      return (
                        <Fragment key={key}>
                          <tr className={isOpen ? "vocab-row is-open" : "vocab-row"}>
                            <td className="han">{word.han}</td>
                            <td>{word.pinyin}</td>
                            <td className="hanviet">{wordHanViet(word.han)}</td>
                            <td>{word.loai}</td>
                            <td>{word.nghia}</td>
                            <td className="links-cell">
                              <button
                                type="button"
                                onClick={() => say(charsOfWord.join(""))}
                                title={`Nghe phát âm từ "${word.han}"`}
                              >
                                🔊 từ
                              </button>
                              {uniqueChars.map((c) => (
                                <button
                                  key={c}
                                  type="button"
                                  onClick={() => say(c)}
                                  title={`Nghe chữ ${c}`}
                                >
                                  🔈{c}
                                </button>
                              ))}
                            </td>
                            <td className="toggle-cell">
                              <button
                                type="button"
                                className="memory-toggle"
                                onClick={() => setOpenWord(isOpen ? null : key)}
                              >
                                {isOpen ? "Ẩn ▴" : "Xem ▾"}
                              </button>
                            </td>
                          </tr>
                          {isOpen && (
                            <tr className="memory-row">
                              <td colSpan={7}>
                                <div className="memory-box">
                                  {memoryLines(word.han, word.pinyin, word.nghia).map(
                                    (line, j) => (
                                      <p key={j} className="memory-line">
                                        {line}
                                      </p>
                                    ),
                                  )}
                                  <div className="memory-gifs">
                                    {uniqueChars.map((c) => (
                                      <figure key={c} className="gif-card">
                                        <GifImage char={c} />
                                        <figcaption>
                                          {c}
                                          {chars[c] ? ` (${chars[c].py})` : ""}
                                          <button
                                            type="button"
                                            className="mini-play"
                                            onClick={() => say(c)}
                                          >
                                            🔊
                                          </button>
                                        </figcaption>
                                      </figure>
                                    ))}
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </Fragment>
                      )
                    })}
                  </tbody>
                </table>

                <h3>Ngữ pháp ({lesson.grammar.length} điểm)</h3>
                <div className="grammar-list">
                  {lesson.grammar.map((g, i) => (
                    <div key={i} className="grammar-item">
                      <h4>
                        {i + 1}. {g.point}
                      </h4>
                      <p className="cautruc">
                        <strong>Cấu trúc:</strong> {g.cauTruc}
                      </p>
                      <ul>
                        {g.viDu.map((v, j) => (
                          <li key={j}>{v}</li>
                        ))}
                      </ul>
                      <p className="giaithich">{g.giaiThich}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        ))}
      </main>
    </div>
  )
}

export default App
