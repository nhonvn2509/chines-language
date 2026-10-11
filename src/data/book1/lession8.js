const lession8 = {
  id: 8,
  title: "苹果一斤多少钱",
  pinyin: "Píngguǒ yī jīn duōshǎo qián",
  titleVi: "Một cân táo bao nhiêu tiền?",
  vocabulary: [
    { han: "水果", pinyin: "shuǐguǒ", loai: "DANH TỪ", nghia: "hoa quả" },
    { han: "果", pinyin: "guǒ", loai: "DANH TỪ", nghia: "quả" },
    { han: "买", pinyin: "mǎi", loai: "ĐỘNG TỪ", nghia: "mua" },
    { han: "卖", pinyin: "mài", loai: "ĐỘNG TỪ", nghia: "bán" },
    { han: "苹果", pinyin: "píngguǒ", loai: "DANH TỪ", nghia: "táo" },
    { han: "斤", pinyin: "jīn", loai: "LƯỢNG TỪ", nghia: "cân (Trung Quốc, 1 cân = 0,5 kg)" },
    { han: "公斤", pinyin: "gōngjīn", loai: "LƯỢNG TỪ", nghia: "ki-lô-gam (1 kg = 2 cân TQ)" },
    { han: "多少", pinyin: "duōshǎo", loai: "ĐẠI TỪ NGHI VẤN", nghia: "bao nhiêu" },
    { han: "多", pinyin: "duō", loai: "TÍNH TỪ / ĐẠI TỪ", nghia: "nhiều" },
    { han: "少", pinyin: "shǎo", loai: "TÍNH TỪ / ĐẠI TỪ", nghia: "ít" },
    { han: "块", pinyin: "kuài", loai: "LƯỢNG TỪ (TIỀN)", nghia: "đồng (tệ)" },
    { han: "元", pinyin: "yuán", loai: "LƯỢNG TỪ (TIỀN)", nghia: "tệ (nguyên)" },
    { han: "毛", pinyin: "máo", loai: "LƯỢNG TỪ (TIỀN)", nghia: "hào (0,1 tệ)" },
    { han: "角", pinyin: "jiǎo", loai: "LƯỢNG TỪ (TIỀN)", nghia: "hào (0,1 tệ)" },
    { han: "分", pinyin: "fēn", loai: "LƯỢNG TỪ (TIỀN)", nghia: "phân (0,01 tệ)" },
    { han: "贵", pinyin: "guì", loai: "TÍNH TỪ", nghia: "đắt" },
    { han: "便宜", pinyin: "piányi", loai: "TÍNH TỪ", nghia: "rẻ" },
    { han: "了", pinyin: "le", loai: "TRỢ TỪ NGỮ KHÍ", nghia: "rồi, đã (chỉ hoàn thành hoặc thay đổi)" },
    { han: "吧", pinyin: "ba", loai: "TRỢ TỪ NGỮ KHÍ", nghia: "nhé, đi (cuối câu yêu cầu, thương lượng)" },
    { han: "给", pinyin: "gěi", loai: "ĐỘNG TỪ / GIỚI TỪ", nghia: "cho, lấy cho" },
    { han: "一共", pinyin: "yígòng", loai: "PHÓ TỪ", nghia: "tất cả, tổng cộng" },
    { han: "找", pinyin: "zhǎo", loai: "ĐỘNG TỪ", nghia: "tìm; trả lại (tiền lẻ)" },
    { han: "半", pinyin: "bàn", loai: "SỐ TỪ", nghia: "một nửa" },
  ],
  grammar: [
    {
      point: "Trợ từ ngữ khí 吧",
      cauTruc: "Câu + 吧",
      viDu: [
        "太贵了，三块五吧 Tài guì le, sān kuài wǔ ba – Đắt quá, 3 đồng rưỡi nhé",
        "你给三块吧 Nǐ gěi sān kuài ba – Bạn đưa 3 đồng đi",
      ],
      giaiThich: "吧 đặt cuối câu để biểu thị ngữ khí yêu cầu, thương lượng, đề nghị.",
    },
    {
      point: "Số 2 đi với lượng từ dùng 两",
      cauTruc: "两 + lượng từ + danh từ",
      viDu: [
        "两个馒头 Liǎng gè mántou – Hai cái bánh bao chay",
        "两个人 Liǎng gè rén – Hai người",
      ],
      giaiThich: "Khi số 2 đi với lượng từ, dùng 两, KHÔNG dùng 二 (không nói 二个馒头).",
    },
    {
      point: "Mẫu câu hỏi giá",
      cauTruc: "4 cách hỏi giá",
      viDu: [
        "苹果一斤多少钱？Píngguǒ yī jīn duōshǎo qián? – Táo bao nhiêu tiền một cân?",
        "一斤苹果多少钱？Yī jīn píngguǒ duōshǎo qián? – Một cân táo bao nhiêu tiền?",
        "多少钱一斤苹果？Duōshǎo qián yī jīn píngguǒ? – Bao nhiêu tiền một cân táo?",
        "苹果多少钱一斤？Píngguǒ duōshǎo qián yī jīn? – Táo bao nhiêu tiền một cân?",
      ],
      giaiThich: "Có thể hoán đổi vị trí tên đồ vật, đơn vị và 多少钱. Cách đơn giản nhất: 这个多少？Zhège duōshǎo? – Cái này bao nhiêu?",
    },
    {
      point: "Cách mặc cả giá (讨价还价)",
      cauTruc: "Mẫu câu mặc cả",
      viDu: [
        "太贵了，便宜一点儿吧 Tài guì le, piányí yīdiǎnr ba – Đắt quá, rẻ chút đi",
        "能不能便宜一点儿？Néng bùnéng piányi yīdiǎnr? – Có thể giảm giá không?",
        "三块？太贵了，两块五吧 Sān kuài? Tài guì le, liǎng kuài wǔ ba – 3 đồng? Đắt quá, 2 đồng rưỡi đi",
      ],
      giaiThich: "Dùng 太贵了 (đắt quá) + 便宜一点儿 (rẻ chút) để mặc cả.",
    },
    {
      point: "Mẫu câu với động từ 给 (cho)",
      cauTruc: "Chủ ngữ 1 + 给 + chủ ngữ 2 + tân ngữ",
      viDu: [
        "我妈妈给我钱 Wǒ māmā gěi wǒ qián – Mẹ tôi cho tôi tiền",
        "给你 Gěi nǐ – Cho bạn",
        "给你钱 Gěi nǐ qián – Đưa bạn tiền",
      ],
      giaiThich: "给 nghĩa là 'cho', cấu trúc: người cho + 给 + người nhận + vật.",
    },
  ],
}

export default lession8
