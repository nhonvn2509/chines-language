import { useState } from "react"
import book1 from "./data/book1"
import "./App.css"

function App() {
  const [openLesson, setOpenLesson] = useState(null)

  return (
    <div className="app">
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
                      <th>Loại từ</th>
                      <th>Nghĩa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lesson.vocabulary.map((word, i) => (
                      <tr key={i}>
                        <td className="han">{word.han}</td>
                        <td>{word.pinyin}</td>
                        <td>{word.loai}</td>
                        <td>{word.nghia}</td>
                      </tr>
                    ))}
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
