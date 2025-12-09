# TOEIC Learning App 🎓

Ứng dụng học TOEIC toàn diện, giúp người học đạt mục tiêu 800 điểm TOEIC thông qua lộ trình học có cấu trúc rõ ràng.

## ✨ Tính năng chính

### 📚 Lộ trình học 3 cấp độ
- **Sơ cấp (0-300 điểm)**: Nền tảng cơ bản - 2-3 tháng
- **Trung cấp (300-600 điểm)**: Phát triển kỹ năng - 3-4 tháng  
- **Cao cấp (600-800 điểm)**: Thành thạo - 4-6 tháng

### 📖 Nội dung học tập phong phú

#### 1. Từ vựng (Vocabulary)
- **1500+ từ vựng** chia theo cấp độ
- Phân loại theo chủ đề: Office & Work, Business, Finance, Marketing...
- Flashcard tương tác với phát âm
- Hệ thống đánh dấu từ đã thuộc
- Ví dụ câu thực tế với bản dịch

#### 2. Ngữ pháp (Grammar)
- Bài học ngữ pháp chi tiết cho từng cấp độ
- Công thức, cách dùng, dấu hiệu nhận biết
- Ví dụ minh họa rõ ràng
- Bài tập thực hành có giải thích

#### 3. Luyện tập (Practice)
- Bài tập theo format TOEIC thực tế
- 7 Parts: Listening (1-4) và Reading (5-7)
- Feedback chi tiết

#### 4. Kiểm tra (Test)
- Bài thi thử TOEIC đầy đủ
- 200 câu hỏi (100 Listening + 100 Reading)
- Chấm điểm tự động
- Phân tích kết quả chi tiết

### 📊 Theo dõi tiến độ
- Dashboard tổng quan
- Thống kê từ vựng đã học
- Lịch sử bài kiểm tra
- Biểu đồ hoạt động hàng tuần
- Streak học liên tục

## 🎯 Mục tiêu

Ứng dụng được thiết kế để đưa người học từ **0 điểm lên 800 điểm TOEIC** thông qua:

1. **Nền tảng vững chắc** - 200 từ vựng cơ bản + ngữ pháp nền tảng
2. **Phát triển kỹ năng** - 500 từ trung cấp + cấu trúc phức tạp hơn
3. **Thành thạo** - 800 từ chuyên sâu + ngữ pháp nâng cao
4. **Luyện tập thường xuyên** - Hàng trăm bài tập thực tế
5. **Đánh giá định kỳ** - Bài thi thử để đo lường tiến bộ

## 🚀 Cài đặt

### Yêu cầu
- Node.js 18+ 
- npm hoặc yarn

### Cài đặt dependencies

```bash
npm install
```

### Chạy ứng dụng ở môi trường development

```bash
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:5173`

### Build cho production

```bash
npm run build
```

### Preview bản build

```bash
npm run preview
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 + TypeScript
- **Routing**: React Router v6
- **State Management**: Zustand với persist middleware
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **Build Tool**: Vite

## 📁 Cấu trúc dự án

```
eic/
├── src/
│   ├── components/         # React components
│   │   └── Layout.tsx     # Layout chính với navigation
│   ├── pages/             # Các trang chính
│   │   ├── Dashboard.tsx  # Trang tổng quan
│   │   ├── LearningPath.tsx # Lộ trình học
│   │   ├── Vocabulary.tsx # Học từ vựng
│   │   ├── Grammar.tsx    # Học ngữ pháp
│   │   ├── Practice.tsx   # Luyện tập
│   │   ├── Test.tsx       # Kiểm tra
│   │   └── Progress.tsx   # Theo dõi tiến độ
│   ├── data/
│   │   └── content.ts     # Database từ vựng & ngữ pháp
│   ├── store/
│   │   └── useAppStore.ts # Zustand store
│   ├── types/
│   │   └── index.ts       # TypeScript types
│   ├── App.tsx            # App component chính
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 📚 Nội dung học tập

### Từ vựng theo cấp độ

#### Sơ cấp (Beginner - 0-300 điểm)
- 200 từ vựng cơ bản nhất
- Chủ đề: Office, Business, Daily Life
- Ví dụ: office, meeting, document, company, customer...

#### Trung cấp (Intermediate - 300-600 điểm)
- 500 từ vựng mở rộng
- Chủ đề: Business Events, Marketing, HR, Finance
- Ví dụ: conference, negotiate, proposal, implement...

#### Cao cấp (Advanced - 600-800 điểm)
- 800 từ vựng chuyên sâu
- Chủ đề: Corporate, Legal, Strategy, International Business
- Ví dụ: subsidiary, merger, stakeholder, compliance...

### Ngữ pháp theo cấp độ

#### Sơ cấp
- Present Simple / Continuous
- Past Simple / Continuous
- Future Simple
- Modal verbs cơ bản

#### Trung cấp
- Present Perfect / Past Perfect
- Passive Voice
- Conditional Sentences
- Relative Clauses

#### Cao cấp
- Subjunctive Mood
- Inversion
- Advanced Conditionals
- Reported Speech nâng cao

## 💡 Hướng dẫn sử dụng

### 1. Bắt đầu học
- Vào trang **Dashboard** để xem tổng quan
- Chọn cấp độ phù hợp với trình độ hiện tại
- Xem **Lộ trình học** để hiểu các bước cần thực hiện

### 2. Học từ vựng
- Vào mục **Từ vựng**, chọn cấp độ
- Lọc theo chủ đề nếu muốn
- Xem từ, phát âm, nghĩa, ví dụ
- Đánh dấu "Đã thuộc" khi thuộc từ

### 3. Học ngữ pháp
- Vào mục **Ngữ pháp**, chọn bài học
- Đọc lý thuyết, công thức, ví dụ
- Làm bài tập thực hành
- Xem giải thích chi tiết

### 4. Luyện tập
- Làm bài tập theo từng Part
- Kiểm tra đáp án và giải thích
- Ôn lại phần làm sai

### 5. Kiểm tra
- Làm bài thi thử đầy đủ
- Xem kết quả và phân tích
- Xác định điểm mạnh/yếu

### 6. Theo dõi tiến độ
- Xem thống kê học tập
- Duy trì streak học hàng ngày
- Theo dõi biểu đồ cải thiện

## 🎯 Tips học tập hiệu quả

1. **Học đều đặn**: Dành ít nhất 30 phút mỗi ngày
2. **Ôn tập thường xuyên**: Review từ cũ để ghi nhớ lâu dài
3. **Làm bài test**: Kiểm tra định kỳ để đánh giá tiến bộ
4. **Tập trung điểm yếu**: Luyện tập nhiều hơn ở phần còn yếu
5. **Học theo lộ trình**: Hoàn thành từng cấp độ trước khi chuyển sang cấp cao hơn

## 🔮 Tính năng sắp tới

- [ ] Audio cho Listening Practice (Parts 1-4)
- [ ] Hình ảnh cho Part 1 (Photographs)
- [ ] Đề thi thử TOEIC đầy đủ 200 câu
- [ ] Chế độ học theo flashcard spacing repetition
- [ ] Thi đấu với bạn bè
- [ ] Thống kê chi tiết theo từng Part
- [ ] Export tiến độ học
- [ ] Dark mode

## 📝 License

MIT

## 👥 Đóng góp

Mọi đóng góp đều được chào đón! Hãy tạo issue hoặc pull request.

---

**Chúc bạn học tập hiệu quả và đạt 800 điểm TOEIC! 🎉**
