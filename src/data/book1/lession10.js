const lession10 = {
  id: 10,
  title: "他住哪儿",
  pinyin: "Tā zhù nǎr",
  titleVi: "Ông ấy sống ở đâu?",
  vocabulary: [
    { han: "办公室", pinyin: "bàngōngshì", loai: "DANH TỪ", nghia: "văn phòng" },
    { han: "办公", pinyin: "bàngōng", loai: "ĐỘNG TỪ", nghia: "làm việc, xử lý công việc" },
    { han: "职员", pinyin: "zhíyuán", loai: "DANH TỪ", nghia: "nhân viên" },
    { han: "找", pinyin: "zhǎo", loai: "ĐỘNG TỪ", nghia: "tìm, tìm kiếm" },
    { han: "在", pinyin: "zài", loai: "GIỚI TỪ / ĐỘNG TỪ", nghia: "ở, tại; đang" },
    { han: "家", pinyin: "jiā", loai: "DANH TỪ", nghia: "nhà, gia đình" },
    { han: "呢", pinyin: "ne", loai: "TRỢ TỪ NGỮ KHÍ", nghia: "nhỉ, đấy (cuối câu trần thuật)" },
    { han: "住", pinyin: "zhù", loai: "ĐỘNG TỪ", nghia: "ở, trọ, sống" },
    { han: "楼", pinyin: "lóu", loai: "DANH TỪ", nghia: "tầng, lầu, tòa nhà" },
    { han: "门", pinyin: "mén", loai: "DANH TỪ", nghia: "cửa, cổng" },
    { han: "房间", pinyin: "fángjiān", loai: "DANH TỪ", nghia: "phòng, căn phòng" },
    { han: "号", pinyin: "hào", loai: "DANH TỪ", nghia: "số (nhà), số (điện thoại)" },
    { han: "知道", pinyin: "zhīdào", loai: "ĐỘNG TỪ", nghia: "biết" },
    { han: "电话", pinyin: "diànhuà", loai: "DANH TỪ / ĐỘNG TỪ", nghia: "điện thoại" },
    { han: "电", pinyin: "diàn", loai: "DANH TỪ", nghia: "điện" },
    { han: "话", pinyin: "huà", loai: "DANH TỪ", nghia: "lời, lời nói" },
    { han: "号码", pinyin: "hàomǎ", loai: "DANH TỪ", nghia: "số (điện thoại, số hiệu)" },
    { han: "零", pinyin: "líng", loai: "SỐ TỪ", nghia: "số 0 (không)" },
    { han: "手机", pinyin: "shǒujī", loai: "DANH TỪ", nghia: "điện thoại di động" },
    { han: "手", pinyin: "shǒu", loai: "DANH TỪ", nghia: "tay" },
    { han: "李昌浩", pinyin: "Lǐ Chānghào", loai: "DANH TỪ RIÊNG", nghia: "Lý Xương Hạo (tên người)" },
  ],
  grammar: [
    {
      point: "Câu vị ngữ động từ",
      cauTruc: "Chủ ngữ + vị ngữ (động từ) + tân ngữ",
      viDu: [
        "我学习汉语 Wǒ xuéxí Hànyǔ – Tôi học tiếng Hán",
        "他吃米饭 Tā chī mǐfàn – Anh ấy ăn cơm",
        "我不去图书馆 Wǒ bù qù túshūguǎn – Tôi không đi thư viện",
      ],
      giaiThich: "Câu tiếng Hán gồm 6 thành phần: chủ ngữ, vị ngữ, tân ngữ, định ngữ, trạng ngữ, bổ ngữ. Trật tự cơ bản: Chủ ngữ + vị ngữ + tân ngữ.",
    },
    {
      point: "Cách đọc các con số (số hiệu)",
      cauTruc: "Đọc từng chữ một",
      viDu: [
        "0989543912 đọc: líng jiǔ bā jiǔ wǔ sì sān jiǔ yào èr",
        "181 đọc: yāo bā yāo (số 1 trong số hiệu đọc là yāo)",
        "242 đọc: èr sì èr (số 2 trong số hiệu đọc là èr)",
      ],
      giaiThich: "Số trong số hiệu (điện thoại, số nhà) đọc từng chữ; số 1 đọc yāo, số 2 đọc èr.",
    },
    {
      point: "Mẫu câu hỏi với 在, 住, 住在",
      cauTruc: "Chủ ngữ + 住 / 住在 + 哪儿？",
      viDu: [
        "他住哪儿？Tā zhù nǎr? – Anh ấy sống ở đâu?",
        "他住在哪儿？Tā zhù zài nǎr? – Anh ấy sống ở đâu?",
        "他在哪儿？Tā zài nǎr? – Anh ấy đang ở đâu?",
      ],
      giaiThich: "住 nhấn mạnh nơi cư trú; 在 nhấn mạnh vị trí hiện tại.",
    },
    {
      point: "Cách đọc địa chỉ nhà",
      cauTruc: "Từ lớn đến nhỏ",
      viDu: [
        "河内市 河东郡 光中坊 吴权路 8巷 6号",
        "Hénèi shì, Hédōng jùn, Guāngzhōng fāng, Wúquán lù 8 xiàng 6 hào",
        "= Số 6, ngõ 8, đường Ngô Quyền, phường Quang Trung, quận Hà Đông, TP Hà Nội",
      ],
      giaiThich: "Trật tự đọc địa chỉ: tỉnh/thành → quận/huyện → phường/xã → đường → số nhà → tầng → phòng (ngược tiếng Việt).",
    },
    {
      point: "Trợ từ ngữ khí 呢",
      cauTruc: "Câu trần thuật + 呢",
      viDu: [
        "外面有人叫你呢 Wàimiàn yǒurén jiào nǐ ne – Bên ngoài có người gọi bạn đấy",
        "这次收获不小呢 Zhè cì shōuhuò bù xiǎo ne – Đợt này thu hoạch không nhỏ đâu nhé",
      ],
      giaiThich: "呢 dùng cuối câu trần thuật, mang ngữ khí khẳng định để xác nhận một sự thật (nhỉ, đấy, nhé).",
    },
  ],
}

export default lession10
