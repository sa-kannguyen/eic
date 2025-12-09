import { LevelInfo, VocabularyItem, GrammarLesson, Part1Question } from '@/types';

export const LEVELS: LevelInfo[] = [
  {
    id: 'beginner',
    name: 'Sơ cấp',
    scoreRange: '0-300 điểm',
    description: 'Nền tảng cơ bản cho người mới bắt đầu',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    targetScore: 300,
    duration: '2-3 tháng',
  },
  {
    id: 'intermediate',
    name: 'Trung cấp',
    scoreRange: '300-600 điểm',
    description: 'Phát triển kỹ năng giao tiếp cơ bản',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    targetScore: 600,
    duration: '3-4 tháng',
  },
  {
    id: 'advanced',
    name: 'Cao cấp',
    scoreRange: '600-800 điểm',
    description: 'Thành thạo và tự tin trong môi trường làm việc',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    targetScore: 800,
    duration: '4-6 tháng',
  },
];

// VOCABULARY DATABASE - Từ vựng theo chủ đề và cấp độ
export const VOCABULARY_DATABASE: VocabularyItem[] = [
  // === BEGINNER LEVEL (0-300) - 200 từ cơ bản ===
  // Office & Work
  {
    id: 'v001',
    word: 'office',
    pronunciation: '/ˈɒfɪs/',
    partOfSpeech: 'noun',
    meaning: 'văn phòng',
    example: 'I work in an office downtown.',
    exampleTranslation: 'Tôi làm việc ở một văn phòng trung tâm thành phố.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v002',
    word: 'meeting',
    pronunciation: '/ˈmiːtɪŋ/',
    partOfSpeech: 'noun',
    meaning: 'cuộc họp',
    example: 'We have a meeting at 2 PM.',
    exampleTranslation: 'Chúng ta có cuộc họp lúc 2 giờ chiều.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v003',
    word: 'schedule',
    pronunciation: '/ˈʃedjuːl/',
    partOfSpeech: 'noun',
    meaning: 'lịch trình',
    example: 'Please check your schedule for next week.',
    exampleTranslation: 'Vui lòng kiểm tra lịch trình tuần sau của bạn.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v004',
    word: 'document',
    pronunciation: '/ˈdɒkjʊmənt/',
    partOfSpeech: 'noun',
    meaning: 'tài liệu',
    example: 'Please sign this document.',
    exampleTranslation: 'Vui lòng ký vào tài liệu này.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v005',
    word: 'employee',
    pronunciation: '/ɪmˈplɔɪiː/',
    partOfSpeech: 'noun',
    meaning: 'nhân viên',
    example: 'She is a new employee.',
    exampleTranslation: 'Cô ấy là một nhân viên mới.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v006',
    word: 'manager',
    pronunciation: '/ˈmænɪdʒə(r)/',
    partOfSpeech: 'noun',
    meaning: 'quản lý',
    example: 'The manager will review your work.',
    exampleTranslation: 'Người quản lý sẽ xem xét công việc của bạn.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v007',
    word: 'deadline',
    pronunciation: '/ˈdedlaɪn/',
    partOfSpeech: 'noun',
    meaning: 'hạn chót',
    example: 'The deadline is next Friday.',
    exampleTranslation: 'Hạn chót là thứ Sáu tới.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v008',
    word: 'report',
    pronunciation: '/rɪˈpɔːt/',
    partOfSpeech: 'noun',
    meaning: 'báo cáo',
    example: 'I need to finish this report today.',
    exampleTranslation: 'Tôi cần hoàn thành báo cáo này hôm nay.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  
  // Business & Finance
  {
    id: 'v009',
    word: 'company',
    pronunciation: '/ˈkʌmpəni/',
    partOfSpeech: 'noun',
    meaning: 'công ty',
    example: 'Our company has 500 employees.',
    exampleTranslation: 'Công ty chúng tôi có 500 nhân viên.',
    level: 'beginner',
    topic: 'Business',
  },
  {
    id: 'v010',
    word: 'customer',
    pronunciation: '/ˈkʌstəmə(r)/',
    partOfSpeech: 'noun',
    meaning: 'khách hàng',
    example: 'We value our customers.',
    exampleTranslation: 'Chúng tôi trân trọng khách hàng của mình.',
    level: 'beginner',
    topic: 'Business',
  },
  {
    id: 'v011',
    word: 'product',
    pronunciation: '/ˈprɒdʌkt/',
    partOfSpeech: 'noun',
    meaning: 'sản phẩm',
    example: 'This product is very popular.',
    exampleTranslation: 'Sản phẩm này rất phổ biến.',
    level: 'beginner',
    topic: 'Business',
  },
  {
    id: 'v012',
    word: 'service',
    pronunciation: '/ˈsɜːvɪs/',
    partOfSpeech: 'noun',
    meaning: 'dịch vụ',
    example: 'We provide excellent service.',
    exampleTranslation: 'Chúng tôi cung cấp dịch vụ tuyệt vời.',
    level: 'beginner',
    topic: 'Business',
  },
  {
    id: 'v013',
    word: 'price',
    pronunciation: '/praɪs/',
    partOfSpeech: 'noun',
    meaning: 'giá cả',
    example: 'The price is reasonable.',
    exampleTranslation: 'Giá cả hợp lý.',
    level: 'beginner',
    topic: 'Business',
  },
  {
    id: 'v014',
    word: 'payment',
    pronunciation: '/ˈpeɪmənt/',
    partOfSpeech: 'noun',
    meaning: 'thanh toán',
    example: 'Payment is due next month.',
    exampleTranslation: 'Thanh toán đến hạn vào tháng sau.',
    level: 'beginner',
    topic: 'Business',
  },
  {
    id: 'v015',
    word: 'order',
    pronunciation: '/ˈɔːdə(r)/',
    partOfSpeech: 'noun/verb',
    meaning: 'đơn hàng / đặt hàng',
    example: 'Your order will arrive tomorrow.',
    exampleTranslation: 'Đơn hàng của bạn sẽ đến vào ngày mai.',
    level: 'beginner',
    topic: 'Business',
  },
  {
    id: 'v016',
    word: 'email',
    pronunciation: '/ˈiːmeɪl/',
    partOfSpeech: 'noun/verb',
    meaning: 'thư điện tử / gửi email',
    example: 'Please send me an email with the details.',
    exampleTranslation: 'Vui lòng gửi email cho tôi với thông tin chi tiết.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v017',
    word: 'call',
    pronunciation: '/kɔːl/',
    partOfSpeech: 'verb/noun',
    meaning: 'gọi điện / cuộc gọi',
    example: 'I will call you later.',
    exampleTranslation: 'Tôi sẽ gọi lại cho bạn sau.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v018',
    word: 'appointment',
    pronunciation: '/əˈpɔɪntmənt/',
    partOfSpeech: 'noun',
    meaning: 'cuộc hẹn',
    example: 'I have an appointment at 3 PM.',
    exampleTranslation: 'Tôi có cuộc hẹn lúc 3 giờ chiều.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v019',
    word: 'project',
    pronunciation: '/ˈprɒdʒekt/',
    partOfSpeech: 'noun',
    meaning: 'dự án',
    example: 'We are working on a new project.',
    exampleTranslation: 'Chúng tôi đang làm việc trên một dự án mới.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v020',
    word: 'task',
    pronunciation: '/tɑːsk/',
    partOfSpeech: 'noun',
    meaning: 'nhiệm vụ',
    example: 'This task must be completed today.',
    exampleTranslation: 'Nhiệm vụ này phải hoàn thành hôm nay.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v021',
    word: 'file',
    pronunciation: '/faɪl/',
    partOfSpeech: 'noun/verb',
    meaning: 'tập tin / lưu trữ',
    example: 'Please file these documents.',
    exampleTranslation: 'Vui lòng lưu trữ những tài liệu này.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v022',
    word: 'desk',
    pronunciation: '/desk/',
    partOfSpeech: 'noun',
    meaning: 'bàn làm việc',
    example: 'The keys are on my desk.',
    exampleTranslation: 'Chìa khóa ở trên bàn làm việc của tôi.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v023',
    word: 'chair',
    pronunciation: '/tʃeə(r)/',
    partOfSpeech: 'noun',
    meaning: 'ghế',
    example: 'This chair is very comfortable.',
    exampleTranslation: 'Chiếc ghế này rất thoải mái.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v024',
    word: 'computer',
    pronunciation: '/kəmˈpjuːtə(r)/',
    partOfSpeech: 'noun',
    meaning: 'máy tính',
    example: 'I need a new computer.',
    exampleTranslation: 'Tôi cần một máy tính mới.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v025',
    word: 'printer',
    pronunciation: '/ˈprɪntə(r)/',
    partOfSpeech: 'noun',
    meaning: 'máy in',
    example: 'The printer is not working.',
    exampleTranslation: 'Máy in không hoạt động.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v026',
    word: 'phone',
    pronunciation: '/fəʊn/',
    partOfSpeech: 'noun',
    meaning: 'điện thoại',
    example: 'Please answer the phone.',
    exampleTranslation: 'Vui lòng trả lời điện thoại.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v027',
    word: 'contract',
    pronunciation: '/ˈkɒntrækt/',
    partOfSpeech: 'noun',
    meaning: 'hợp đồng',
    example: 'Please read the contract carefully.',
    exampleTranslation: 'Vui lòng đọc hợp đồng một cách cẩn thận.',
    level: 'beginner',
    topic: 'Business',
  },
  {
    id: 'v028',
    word: 'sale',
    pronunciation: '/seɪl/',
    partOfSpeech: 'noun',
    meaning: 'bán hàng / giảm giá',
    example: 'There is a big sale this weekend.',
    exampleTranslation: 'Có đợt giảm giá lớn cuối tuần này.',
    level: 'beginner',
    topic: 'Business',
  },
  {
    id: 'v029',
    word: 'buy',
    pronunciation: '/baɪ/',
    partOfSpeech: 'verb',
    meaning: 'mua',
    example: 'I want to buy a new laptop.',
    exampleTranslation: 'Tôi muốn mua một laptop mới.',
    level: 'beginner',
    topic: 'Business',
  },
  {
    id: 'v030',
    word: 'sell',
    pronunciation: '/sel/',
    partOfSpeech: 'verb',
    meaning: 'bán',
    example: 'We sell office supplies.',
    exampleTranslation: 'Chúng tôi bán đồ dùng văn phòng.',
    level: 'beginner',
    topic: 'Business',
  },
  {
    id: 'v031',
    word: 'money',
    pronunciation: '/ˈmʌni/',
    partOfSpeech: 'noun',
    meaning: 'tiền',
    example: 'How much money do you need?',
    exampleTranslation: 'Bạn cần bao nhiêu tiền?',
    level: 'beginner',
    topic: 'Business',
  },
  {
    id: 'v032',
    word: 'cost',
    pronunciation: '/kɒst/',
    partOfSpeech: 'noun/verb',
    meaning: 'chi phí / có giá',
    example: 'How much does it cost?',
    exampleTranslation: 'Nó có giá bao nhiêu?',
    level: 'beginner',
    topic: 'Business',
  },
  {
    id: 'v033',
    word: 'discount',
    pronunciation: '/ˈdɪskaʊnt/',
    partOfSpeech: 'noun',
    meaning: 'giảm giá',
    example: 'We offer a 20% discount.',
    exampleTranslation: 'Chúng tôi giảm giá 20%.',
    level: 'beginner',
    topic: 'Business',
  },
  {
    id: 'v034',
    word: 'receipt',
    pronunciation: '/rɪˈsiːt/',
    partOfSpeech: 'noun',
    meaning: 'hóa đơn',
    example: 'Keep your receipt.',
    exampleTranslation: 'Giữ lại hóa đơn của bạn.',
    level: 'beginner',
    topic: 'Business',
  },
  {
    id: 'v035',
    word: 'invoice',
    pronunciation: '/ˈɪnvɔɪs/',
    partOfSpeech: 'noun',
    meaning: 'hóa đơn (doanh nghiệp)',
    example: 'Please send me the invoice.',
    exampleTranslation: 'Vui lòng gửi hóa đơn cho tôi.',
    level: 'beginner',
    topic: 'Business',
  },
  {
    id: 'v036',
    word: 'department',
    pronunciation: '/dɪˈpɑːtmənt/',
    partOfSpeech: 'noun',
    meaning: 'phòng ban',
    example: 'Which department do you work in?',
    exampleTranslation: 'Bạn làm việc ở phòng ban nào?',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v037',
    word: 'team',
    pronunciation: '/tiːm/',
    partOfSpeech: 'noun',
    meaning: 'nhóm / đội',
    example: 'Our team works well together.',
    exampleTranslation: 'Nhóm của chúng tôi làm việc tốt cùng nhau.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v038',
    word: 'boss',
    pronunciation: '/bɒs/',
    partOfSpeech: 'noun',
    meaning: 'sếp',
    example: 'My boss is very nice.',
    exampleTranslation: 'Sếp của tôi rất tốt.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v039',
    word: 'colleague',
    pronunciation: '/ˈkɒliːɡ/',
    partOfSpeech: 'noun',
    meaning: 'đồng nghiệp',
    example: 'She is my colleague.',
    exampleTranslation: 'Cô ấy là đồng nghiệp của tôi.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v040',
    word: 'work',
    pronunciation: '/wɜːk/',
    partOfSpeech: 'verb/noun',
    meaning: 'làm việc / công việc',
    example: 'I work from 9 to 5.',
    exampleTranslation: 'Tôi làm việc từ 9 giờ đến 5 giờ.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v041',
    word: 'job',
    pronunciation: '/dʒɒb/',
    partOfSpeech: 'noun',
    meaning: 'công việc / nghề nghiệp',
    example: 'I love my job.',
    exampleTranslation: 'Tôi yêu công việc của mình.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v042',
    word: 'career',
    pronunciation: '/kəˈrɪə(r)/',
    partOfSpeech: 'noun',
    meaning: 'sự nghiệp',
    example: 'She has a successful career.',
    exampleTranslation: 'Cô ấy có một sự nghiệp thành công.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v043',
    word: 'salary',
    pronunciation: '/ˈsæləri/',
    partOfSpeech: 'noun',
    meaning: 'lương',
    example: 'The salary is good.',
    exampleTranslation: 'Mức lương tốt.',
    level: 'beginner',
    topic: 'Business',
  },
  {
    id: 'v044',
    word: 'vacation',
    pronunciation: '/veɪˈkeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'kỳ nghỉ',
    example: 'I need a vacation.',
    exampleTranslation: 'Tôi cần một kỳ nghỉ.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v045',
    word: 'break',
    pronunciation: '/breɪk/',
    partOfSpeech: 'noun',
    meaning: 'giờ nghỉ',
    example: "Let's take a break.",
    exampleTranslation: 'Hãy nghỉ giải lao.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v046',
    word: 'lunch',
    pronunciation: '/lʌntʃ/',
    partOfSpeech: 'noun',
    meaning: 'bữa trưa',
    example: 'Lunch is at noon.',
    exampleTranslation: 'Bữa trưa lúc 12 giờ trưa.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v047',
    word: 'train',
    pronunciation: '/treɪn/',
    partOfSpeech: 'verb/noun',
    meaning: 'đào tạo / tàu hỏa',
    example: 'We train new employees.',
    exampleTranslation: 'Chúng tôi đào tạo nhân viên mới.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v048',
    word: 'skill',
    pronunciation: '/skɪl/',
    partOfSpeech: 'noun',
    meaning: 'kỹ năng',
    example: 'You need good computer skills.',
    exampleTranslation: 'Bạn cần kỹ năng máy tính tốt.',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v049',
    word: 'experience',
    pronunciation: '/ɪkˈspɪəriəns/',
    partOfSpeech: 'noun',
    meaning: 'kinh nghiệm',
    example: 'Do you have any experience?',
    exampleTranslation: 'Bạn có kinh nghiệm nào không?',
    level: 'beginner',
    topic: 'Office & Work',
  },
  {
    id: 'v050',
    word: 'hire',
    pronunciation: '/ˈhaɪə(r)/',
    partOfSpeech: 'verb',
    meaning: 'thuê / tuyển dụng',
    example: 'We need to hire more staff.',
    exampleTranslation: 'Chúng tôi cần tuyển thêm nhân viên.',
    level: 'beginner',
    topic: 'Business',
  },
  // Communication
  {
    id: 'v051',
    word: 'message',
    pronunciation: '/ˈmesɪdʒ/',
    partOfSpeech: 'noun',
    meaning: 'tin nhắn / thông điệp',
    example: 'Please leave a message after the beep.',
    exampleTranslation: 'Vui lòng để lại tin nhắn sau tiếng bíp.',
    level: 'beginner',
    topic: 'Communication',
  },
  {
    id: 'v052',
    word: 'reply',
    pronunciation: '/rɪˈplaɪ/',
    partOfSpeech: 'verb/noun',
    meaning: 'trả lời',
    example: 'Please reply to this email.',
    exampleTranslation: 'Vui lòng trả lời email này.',
    level: 'beginner',
    topic: 'Communication',
  },
  {
    id: 'v053',
    word: 'send',
    pronunciation: '/send/',
    partOfSpeech: 'verb',
    meaning: 'gửi',
    example: 'I will send you the file.',
    exampleTranslation: 'Tôi sẽ gửi file cho bạn.',
    level: 'beginner',
    topic: 'Communication',
  },
  {
    id: 'v054',
    word: 'receive',
    pronunciation: '/rɪˈsiːv/',
    partOfSpeech: 'verb',
    meaning: 'nhận',
    example: 'Did you receive my email?',
    exampleTranslation: 'Bạn đã nhận email của tôi chưa?',
    level: 'beginner',
    topic: 'Communication',
  },
  {
    id: 'v055',
    word: 'information',
    pronunciation: '/ˌɪnfəˈmeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'thông tin',
    example: 'I need more information.',
    exampleTranslation: 'Tôi cần thêm thông tin.',
    level: 'beginner',
    topic: 'Communication',
  },
  {
    id: 'v056',
    word: 'question',
    pronunciation: '/ˈkwestʃən/',
    partOfSpeech: 'noun',
    meaning: 'câu hỏi',
    example: 'Do you have any questions?',
    exampleTranslation: 'Bạn có câu hỏi nào không?',
    level: 'beginner',
    topic: 'Communication',
  },
  {
    id: 'v057',
    word: 'answer',
    pronunciation: '/ˈɑːnsə(r)/',
    partOfSpeech: 'noun/verb',
    meaning: 'câu trả lời / trả lời',
    example: 'Please answer the question.',
    exampleTranslation: 'Vui lòng trả lời câu hỏi.',
    level: 'beginner',
    topic: 'Communication',
  },
  {
    id: 'v058',
    word: 'talk',
    pronunciation: '/tɔːk/',
    partOfSpeech: 'verb/noun',
    meaning: 'nói chuyện',
    example: 'We need to talk about this.',
    exampleTranslation: 'Chúng ta cần nói về vấn đề này.',
    level: 'beginner',
    topic: 'Communication',
  },
  {
    id: 'v059',
    word: 'discuss',
    pronunciation: '/dɪˈskʌs/',
    partOfSpeech: 'verb',
    meaning: 'thảo luận',
    example: 'Let\'s discuss the plan.',
    exampleTranslation: 'Hãy thảo luận về kế hoạch.',
    level: 'beginner',
    topic: 'Communication',
  },
  {
    id: 'v060',
    word: 'presentation',
    pronunciation: '/ˌpreznˈteɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'bài thuyết trình',
    example: 'The presentation starts at 2 PM.',
    exampleTranslation: 'Bài thuyết trình bắt đầu lúc 2 giờ chiều.',
    level: 'beginner',
    topic: 'Communication',
  },
  // Travel & Transportation
  {
    id: 'v061',
    word: 'trip',
    pronunciation: '/trɪp/',
    partOfSpeech: 'noun',
    meaning: 'chuyến đi',
    example: 'I have a business trip next week.',
    exampleTranslation: 'Tôi có chuyến công tác tuần sau.',
    level: 'beginner',
    topic: 'Travel',
  },
  {
    id: 'v062',
    word: 'flight',
    pronunciation: '/flaɪt/',
    partOfSpeech: 'noun',
    meaning: 'chuyến bay',
    example: 'My flight is at 9 AM.',
    exampleTranslation: 'Chuyến bay của tôi lúc 9 giờ sáng.',
    level: 'beginner',
    topic: 'Travel',
  },
  {
    id: 'v063',
    word: 'hotel',
    pronunciation: '/həʊˈtel/',
    partOfSpeech: 'noun',
    meaning: 'khách sạn',
    example: 'I booked a hotel room.',
    exampleTranslation: 'Tôi đã đặt phòng khách sạn.',
    level: 'beginner',
    topic: 'Travel',
  },
  {
    id: 'v064',
    word: 'reservation',
    pronunciation: '/ˌrezəˈveɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'đặt chỗ',
    example: 'Do you have a reservation?',
    exampleTranslation: 'Bạn có đặt chỗ không?',
    level: 'beginner',
    topic: 'Travel',
  },
  {
    id: 'v065',
    word: 'airport',
    pronunciation: '/ˈeəpɔːt/',
    partOfSpeech: 'noun',
    meaning: 'sân bay',
    example: 'I will meet you at the airport.',
    exampleTranslation: 'Tôi sẽ gặp bạn ở sân bay.',
    level: 'beginner',
    topic: 'Travel',
  },
  {
    id: 'v066',
    word: 'taxi',
    pronunciation: '/ˈtæksi/',
    partOfSpeech: 'noun',
    meaning: 'taxi',
    example: 'Let\'s take a taxi.',
    exampleTranslation: 'Hãy đi taxi.',
    level: 'beginner',
    topic: 'Travel',
  },
  {
    id: 'v067',
    word: 'ticket',
    pronunciation: '/ˈtɪkɪt/',
    partOfSpeech: 'noun',
    meaning: 'vé',
    example: 'I bought a plane ticket.',
    exampleTranslation: 'Tôi đã mua vé máy bay.',
    level: 'beginner',
    topic: 'Travel',
  },
  {
    id: 'v068',
    word: 'passport',
    pronunciation: '/ˈpɑːspɔːt/',
    partOfSpeech: 'noun',
    meaning: 'hộ chiếu',
    example: 'Don\'t forget your passport.',
    exampleTranslation: 'Đừng quên hộ chiếu.',
    level: 'beginner',
    topic: 'Travel',
  },
  {
    id: 'v069',
    word: 'luggage',
    pronunciation: '/ˈlʌɡɪdʒ/',
    partOfSpeech: 'noun',
    meaning: 'hành lý',
    example: 'Where is my luggage?',
    exampleTranslation: 'Hành lý của tôi đâu?',
    level: 'beginner',
    topic: 'Travel',
  },
  {
    id: 'v070',
    word: 'arrive',
    pronunciation: '/əˈraɪv/',
    partOfSpeech: 'verb',
    meaning: 'đến / tới nơi',
    example: 'What time will you arrive?',
    exampleTranslation: 'Bạn sẽ đến lúc mấy giờ?',
    level: 'beginner',
    topic: 'Travel',
  },
  // Restaurant & Food
  {
    id: 'v071',
    word: 'restaurant',
    pronunciation: '/ˈrestrɒnt/',
    partOfSpeech: 'noun',
    meaning: 'nhà hàng',
    example: 'Let\'s go to a restaurant.',
    exampleTranslation: 'Hãy đi nhà hàng.',
    level: 'beginner',
    topic: 'Restaurant',
  },
  {
    id: 'v072',
    word: 'menu',
    pronunciation: '/ˈmenjuː/',
    partOfSpeech: 'noun',
    meaning: 'thực đơn',
    example: 'Can I see the menu?',
    exampleTranslation: 'Tôi có thể xem thực đơn không?',
    level: 'beginner',
    topic: 'Restaurant',
  },
  {
    id: 'v073',
    word: 'waiter',
    pronunciation: '/ˈweɪtə(r)/',
    partOfSpeech: 'noun',
    meaning: 'bồi bàn',
    example: 'The waiter is very friendly.',
    exampleTranslation: 'Người bồi bàn rất thân thiện.',
    level: 'beginner',
    topic: 'Restaurant',
  },
  {
    id: 'v074',
    word: 'bill',
    pronunciation: '/bɪl/',
    partOfSpeech: 'noun',
    meaning: 'hóa đơn',
    example: 'Can I have the bill, please?',
    exampleTranslation: 'Cho tôi xin hóa đơn.',
    level: 'beginner',
    topic: 'Restaurant',
  },
  {
    id: 'v075',
    word: 'tip',
    pronunciation: '/tɪp/',
    partOfSpeech: 'noun',
    meaning: 'tiền boa',
    example: 'We should leave a tip.',
    exampleTranslation: 'Chúng ta nên để lại tiền boa.',
    level: 'beginner',
    topic: 'Restaurant',
  },
  // Daily Activities
  {
    id: 'v076',
    word: 'start',
    pronunciation: '/stɑːt/',
    partOfSpeech: 'verb',
    meaning: 'bắt đầu',
    example: 'We start work at 9 AM.',
    exampleTranslation: 'Chúng tôi bắt đầu làm việc lúc 9 giờ sáng.',
    level: 'beginner',
    topic: 'Daily Activities',
  },
  {
    id: 'v077',
    word: 'finish',
    pronunciation: '/ˈfɪnɪʃ/',
    partOfSpeech: 'verb',
    meaning: 'kết thúc / hoàn thành',
    example: 'I will finish this today.',
    exampleTranslation: 'Tôi sẽ hoàn thành việc này hôm nay.',
    level: 'beginner',
    topic: 'Daily Activities',
  },
  {
    id: 'v078',
    word: 'prepare',
    pronunciation: '/prɪˈpeə(r)/',
    partOfSpeech: 'verb',
    meaning: 'chuẩn bị',
    example: 'We need to prepare for the meeting.',
    exampleTranslation: 'Chúng ta cần chuẩn bị cho cuộc họp.',
    level: 'beginner',
    topic: 'Daily Activities',
  },
  {
    id: 'v079',
    word: 'check',
    pronunciation: '/tʃek/',
    partOfSpeech: 'verb',
    meaning: 'kiểm tra',
    example: 'Please check your email.',
    exampleTranslation: 'Vui lòng kiểm tra email.',
    level: 'beginner',
    topic: 'Daily Activities',
  },
  {
    id: 'v080',
    word: 'wait',
    pronunciation: '/weɪt/',
    partOfSpeech: 'verb',
    meaning: 'chờ đợi',
    example: 'Please wait here.',
    exampleTranslation: 'Vui lòng đợi ở đây.',
    level: 'beginner',
    topic: 'Daily Activities',
  },
  {
    id: 'v081',
    word: 'arrive',
    pronunciation: '/əˈraɪv/',
    partOfSpeech: 'verb',
    meaning: 'đến',
    example: 'The package will arrive tomorrow.',
    exampleTranslation: 'Gói hàng sẽ đến vào ngày mai.',
    level: 'beginner',
    topic: 'Daily Activities',
  },
  {
    id: 'v082',
    word: 'leave',
    pronunciation: '/liːv/',
    partOfSpeech: 'verb',
    meaning: 'rời đi',
    example: 'I leave work at 6 PM.',
    exampleTranslation: 'Tôi rời văn phòng lúc 6 giờ chiều.',
    level: 'beginner',
    topic: 'Daily Activities',
  },
  {
    id: 'v083',
    word: 'help',
    pronunciation: '/help/',
    partOfSpeech: 'verb/noun',
    meaning: 'giúp đỡ',
    example: 'Can you help me?',
    exampleTranslation: 'Bạn có thể giúp tôi không?',
    level: 'beginner',
    topic: 'Daily Activities',
  },
  {
    id: 'v084',
    word: 'need',
    pronunciation: '/niːd/',
    partOfSpeech: 'verb',
    meaning: 'cần',
    example: 'I need your help.',
    exampleTranslation: 'Tôi cần sự giúp đỡ của bạn.',
    level: 'beginner',
    topic: 'Daily Activities',
  },
  {
    id: 'v085',
    word: 'want',
    pronunciation: '/wɒnt/',
    partOfSpeech: 'verb',
    meaning: 'muốn',
    example: 'What do you want?',
    exampleTranslation: 'Bạn muốn gì?',
    level: 'beginner',
    topic: 'Daily Activities',
  },
  // Time & Schedule
  {
    id: 'v086',
    word: 'time',
    pronunciation: '/taɪm/',
    partOfSpeech: 'noun',
    meaning: 'thời gian',
    example: 'What time is it?',
    exampleTranslation: 'Mấy giờ rồi?',
    level: 'beginner',
    topic: 'Time',
  },
  {
    id: 'v087',
    word: 'hour',
    pronunciation: '/ˈaʊə(r)/',
    partOfSpeech: 'noun',
    meaning: 'giờ',
    example: 'The meeting lasted two hours.',
    exampleTranslation: 'Cuộc họp kéo dài hai giờ.',
    level: 'beginner',
    topic: 'Time',
  },
  {
    id: 'v088',
    word: 'minute',
    pronunciation: '/ˈmɪnɪt/',
    partOfSpeech: 'noun',
    meaning: 'phút',
    example: 'Wait a minute, please.',
    exampleTranslation: 'Xin chờ một phút.',
    level: 'beginner',
    topic: 'Time',
  },
  {
    id: 'v089',
    word: 'late',
    pronunciation: '/leɪt/',
    partOfSpeech: 'adjective',
    meaning: 'muộn / trễ',
    example: 'Sorry, I am late.',
    exampleTranslation: 'Xin lỗi, tôi đến muộn.',
    level: 'beginner',
    topic: 'Time',
  },
  {
    id: 'v090',
    word: 'early',
    pronunciation: '/ˈɜːli/',
    partOfSpeech: 'adjective/adverb',
    meaning: 'sớm',
    example: 'I arrived early.',
    exampleTranslation: 'Tôi đến sớm.',
    level: 'beginner',
    topic: 'Time',
  },
  {
    id: 'v091',
    word: 'today',
    pronunciation: '/təˈdeɪ/',
    partOfSpeech: 'noun/adverb',
    meaning: 'hôm nay',
    example: 'What are you doing today?',
    exampleTranslation: 'Hôm nay bạn làm gì?',
    level: 'beginner',
    topic: 'Time',
  },
  {
    id: 'v092',
    word: 'tomorrow',
    pronunciation: '/təˈmɒrəʊ/',
    partOfSpeech: 'noun/adverb',
    meaning: 'ngày mai',
    example: 'See you tomorrow.',
    exampleTranslation: 'Hẹn gặp lại ngày mai.',
    level: 'beginner',
    topic: 'Time',
  },
  {
    id: 'v093',
    word: 'yesterday',
    pronunciation: '/ˈjestədeɪ/',
    partOfSpeech: 'noun/adverb',
    meaning: 'hôm qua',
    example: 'I saw her yesterday.',
    exampleTranslation: 'Tôi đã gặp cô ấy hôm qua.',
    level: 'beginner',
    topic: 'Time',
  },
  {
    id: 'v094',
    word: 'week',
    pronunciation: '/wiːk/',
    partOfSpeech: 'noun',
    meaning: 'tuần',
    example: 'I work five days a week.',
    exampleTranslation: 'Tôi làm việc 5 ngày một tuần.',
    level: 'beginner',
    topic: 'Time',
  },
  {
    id: 'v095',
    word: 'month',
    pronunciation: '/mʌnθ/',
    partOfSpeech: 'noun',
    meaning: 'tháng',
    example: 'The project takes one month.',
    exampleTranslation: 'Dự án mất một tháng.',
    level: 'beginner',
    topic: 'Time',
  },
  {
    id: 'v096',
    word: 'year',
    pronunciation: '/jɪə(r)/',
    partOfSpeech: 'noun',
    meaning: 'năm',
    example: 'Happy New Year!',
    exampleTranslation: 'Chúc mừng năm mới!',
    level: 'beginner',
    topic: 'Time',
  },
  {
    id: 'v097',
    word: 'day',
    pronunciation: '/deɪ/',
    partOfSpeech: 'noun',
    meaning: 'ngày',
    example: 'Have a nice day!',
    exampleTranslation: 'Chúc bạn một ngày tốt lành!',
    level: 'beginner',
    topic: 'Time',
  },
  {
    id: 'v098',
    word: 'morning',
    pronunciation: '/ˈmɔːnɪŋ/',
    partOfSpeech: 'noun',
    meaning: 'buổi sáng',
    example: 'Good morning!',
    exampleTranslation: 'Chào buổi sáng!',
    level: 'beginner',
    topic: 'Time',
  },
  {
    id: 'v099',
    word: 'afternoon',
    pronunciation: '/ˌɑːftəˈnuːn/',
    partOfSpeech: 'noun',
    meaning: 'buổi chiều',
    example: 'Good afternoon!',
    exampleTranslation: 'Chào buổi chiều!',
    level: 'beginner',
    topic: 'Time',
  },
  {
    id: 'v100',
    word: 'evening',
    pronunciation: '/ˈiːvnɪŋ/',
    partOfSpeech: 'noun',
    meaning: 'buổi tối',
    example: 'Good evening!',
    exampleTranslation: 'Chào buổi tối!',
    level: 'beginner',
    topic: 'Time',
  },
  // Technology & Equipment
  {
    id: 'v101b',
    word: 'internet',
    pronunciation: '/ˈɪntənet/',
    partOfSpeech: 'noun',
    meaning: 'internet',
    example: 'The internet is not working.',
    exampleTranslation: 'Internet không hoạt động.',
    level: 'beginner',
    topic: 'Technology',
  },
  {
    id: 'v102b',
    word: 'website',
    pronunciation: '/ˈwebsaɪt/',
    partOfSpeech: 'noun',
    meaning: 'trang web',
    example: 'Visit our website for more information.',
    exampleTranslation: 'Truy cập trang web của chúng tôi để biết thêm thông tin.',
    level: 'beginner',
    topic: 'Technology',
  },
  {
    id: 'v103b',
    word: 'password',
    pronunciation: '/ˈpɑːswɜːd/',
    partOfSpeech: 'noun',
    meaning: 'mật khẩu',
    example: 'Please enter your password.',
    exampleTranslation: 'Vui lòng nhập mật khẩu.',
    level: 'beginner',
    topic: 'Technology',
  },
  {
    id: 'v104b',
    word: 'download',
    pronunciation: '/ˌdaʊnˈləʊd/',
    partOfSpeech: 'verb/noun',
    meaning: 'tải xuống',
    example: 'You can download the file here.',
    exampleTranslation: 'Bạn có thể tải xuống file ở đây.',
    level: 'beginner',
    topic: 'Technology',
  },
  {
    id: 'v105b',
    word: 'upload',
    pronunciation: '/ˌʌpˈləʊd/',
    partOfSpeech: 'verb/noun',
    meaning: 'tải lên',
    example: 'Please upload your documents.',
    exampleTranslation: 'Vui lòng tải lên tài liệu của bạn.',
    level: 'beginner',
    topic: 'Technology',
  },
  {
    id: 'v106b',
    word: 'software',
    pronunciation: '/ˈsɒftweə(r)/',
    partOfSpeech: 'noun',
    meaning: 'phần mềm',
    example: 'We need new software.',
    exampleTranslation: 'Chúng ta cần phần mềm mới.',
    level: 'beginner',
    topic: 'Technology',
  },
  {
    id: 'v107b',
    word: 'application',
    pronunciation: '/ˌæplɪˈkeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'ứng dụng',
    example: 'Download the application.',
    exampleTranslation: 'Tải xuống ứng dụng.',
    level: 'beginner',
    topic: 'Technology',
  },
  {
    id: 'v108b',
    word: 'screen',
    pronunciation: '/skriːn/',
    partOfSpeech: 'noun',
    meaning: 'màn hình',
    example: 'The screen is too bright.',
    exampleTranslation: 'Màn hình quá sáng.',
    level: 'beginner',
    topic: 'Technology',
  },
  {
    id: 'v109b',
    word: 'keyboard',
    pronunciation: '/ˈkiːbɔːd/',
    partOfSpeech: 'noun',
    meaning: 'bàn phím',
    example: 'My keyboard is broken.',
    exampleTranslation: 'Bàn phím của tôi bị hỏng.',
    level: 'beginner',
    topic: 'Technology',
  },
  {
    id: 'v110b',
    word: 'mouse',
    pronunciation: '/maʊs/',
    partOfSpeech: 'noun',
    meaning: 'chuột máy tính',
    example: 'The mouse is not working.',
    exampleTranslation: 'Chuột không hoạt động.',
    level: 'beginner',
    topic: 'Technology',
  },
  // Shopping & Money
  {
    id: 'v111b',
    word: 'shop',
    pronunciation: '/ʃɒp/',
    partOfSpeech: 'noun/verb',
    meaning: 'cửa hàng / mua sắm',
    example: 'I need to go shopping.',
    exampleTranslation: 'Tôi cần đi mua sắm.',
    level: 'beginner',
    topic: 'Shopping',
  },
  {
    id: 'v112b',
    word: 'store',
    pronunciation: '/stɔː(r)/',
    partOfSpeech: 'noun',
    meaning: 'cửa hàng',
    example: 'The store opens at 9 AM.',
    exampleTranslation: 'Cửa hàng mở cửa lúc 9 giờ sáng.',
    level: 'beginner',
    topic: 'Shopping',
  },
  {
    id: 'v113b',
    word: 'cash',
    pronunciation: '/kæʃ/',
    partOfSpeech: 'noun',
    meaning: 'tiền mặt',
    example: 'Do you accept cash?',
    exampleTranslation: 'Bạn nhận tiền mặt không?',
    level: 'beginner',
    topic: 'Shopping',
  },
  {
    id: 'v114b',
    word: 'card',
    pronunciation: '/kɑːd/',
    partOfSpeech: 'noun',
    meaning: 'thẻ',
    example: 'Can I pay by card?',
    exampleTranslation: 'Tôi có thể thanh toán bằng thẻ không?',
    level: 'beginner',
    topic: 'Shopping',
  },
  {
    id: 'v115b',
    word: 'change',
    pronunciation: '/tʃeɪndʒ/',
    partOfSpeech: 'noun/verb',
    meaning: 'tiền lẻ / thay đổi',
    example: 'Here is your change.',
    exampleTranslation: 'Đây là tiền thối của bạn.',
    level: 'beginner',
    topic: 'Shopping',
  },
  {
    id: 'v116b',
    word: 'total',
    pronunciation: '/ˈtəʊtl/',
    partOfSpeech: 'noun/adjective',
    meaning: 'tổng cộng',
    example: 'The total is $50.',
    exampleTranslation: 'Tổng cộng là 50 đô la.',
    level: 'beginner',
    topic: 'Shopping',
  },
  {
    id: 'v117b',
    word: 'free',
    pronunciation: '/friː/',
    partOfSpeech: 'adjective',
    meaning: 'miễn phí / rảnh',
    example: 'This service is free.',
    exampleTranslation: 'Dịch vụ này miễn phí.',
    level: 'beginner',
    topic: 'Shopping',
  },
  {
    id: 'v118b',
    word: 'expensive',
    pronunciation: '/ɪkˈspensɪv/',
    partOfSpeech: 'adjective',
    meaning: 'đắt',
    example: 'This is too expensive.',
    exampleTranslation: 'Cái này quá đắt.',
    level: 'beginner',
    topic: 'Shopping',
  },
  {
    id: 'v119b',
    word: 'cheap',
    pronunciation: '/tʃiːp/',
    partOfSpeech: 'adjective',
    meaning: 'rẻ',
    example: 'I found a cheap hotel.',
    exampleTranslation: 'Tôi tìm được khách sạn rẻ.',
    level: 'beginner',
    topic: 'Shopping',
  },
  {
    id: 'v120b',
    word: 'available',
    pronunciation: '/əˈveɪləbl/',
    partOfSpeech: 'adjective',
    meaning: 'có sẵn',
    example: 'Is this item available?',
    exampleTranslation: 'Món hàng này còn không?',
    level: 'beginner',
    topic: 'Shopping',
  },
  // Location & Place
  {
    id: 'v121b',
    word: 'place',
    pronunciation: '/pleɪs/',
    partOfSpeech: 'noun',
    meaning: 'nơi',
    example: 'This is a nice place.',
    exampleTranslation: 'Đây là một nơi đẹp.',
    level: 'beginner',
    topic: 'Location',
  },
  {
    id: 'v122b',
    word: 'address',
    pronunciation: '/əˈdres/',
    partOfSpeech: 'noun',
    meaning: 'địa chỉ',
    example: 'What is your address?',
    exampleTranslation: 'Địa chỉ của bạn là gì?',
    level: 'beginner',
    topic: 'Location',
  },
  {
    id: 'v123b',
    word: 'city',
    pronunciation: '/ˈsɪti/',
    partOfSpeech: 'noun',
    meaning: 'thành phố',
    example: 'I live in the city.',
    exampleTranslation: 'Tôi sống ở thành phố.',
    level: 'beginner',
    topic: 'Location',
  },
  {
    id: 'v124b',
    word: 'country',
    pronunciation: '/ˈkʌntri/',
    partOfSpeech: 'noun',
    meaning: 'quốc gia / nông thôn',
    example: 'Which country are you from?',
    exampleTranslation: 'Bạn đến từ quốc gia nào?',
    level: 'beginner',
    topic: 'Location',
  },
  {
    id: 'v125b',
    word: 'street',
    pronunciation: '/striːt/',
    partOfSpeech: 'noun',
    meaning: 'đường phố',
    example: 'The office is on Main Street.',
    exampleTranslation: 'Văn phòng ở đường Main.',
    level: 'beginner',
    topic: 'Location',
  },
  {
    id: 'v126b',
    word: 'building',
    pronunciation: '/ˈbɪldɪŋ/',
    partOfSpeech: 'noun',
    meaning: 'tòa nhà',
    example: 'This is a tall building.',
    exampleTranslation: 'Đây là một tòa nhà cao.',
    level: 'beginner',
    topic: 'Location',
  },
  {
    id: 'v127b',
    word: 'floor',
    pronunciation: '/flɔː(r)/',
    partOfSpeech: 'noun',
    meaning: 'tầng / sàn',
    example: 'The office is on the 5th floor.',
    exampleTranslation: 'Văn phòng ở tầng 5.',
    level: 'beginner',
    topic: 'Location',
  },
  {
    id: 'v128b',
    word: 'room',
    pronunciation: '/ruːm/',
    partOfSpeech: 'noun',
    meaning: 'phòng',
    example: 'This is the meeting room.',
    exampleTranslation: 'Đây là phòng họp.',
    level: 'beginner',
    topic: 'Location',
  },
  {
    id: 'v129b',
    word: 'entrance',
    pronunciation: '/ˈentrəns/',
    partOfSpeech: 'noun',
    meaning: 'lối vào',
    example: 'The entrance is on the left.',
    exampleTranslation: 'Lối vào ở bên trái.',
    level: 'beginner',
    topic: 'Location',
  },
  {
    id: 'v130b',
    word: 'exit',
    pronunciation: '/ˈeksɪt/',
    partOfSpeech: 'noun',
    meaning: 'lối ra',
    example: 'Where is the exit?',
    exampleTranslation: 'Lối ra ở đâu?',
    level: 'beginner',
    topic: 'Location',
  },
  // Description & Quality
  {
    id: 'v131b',
    word: 'good',
    pronunciation: '/ɡʊd/',
    partOfSpeech: 'adjective',
    meaning: 'tốt',
    example: 'This is good quality.',
    exampleTranslation: 'Đây là chất lượng tốt.',
    level: 'beginner',
    topic: 'Description',
  },
  {
    id: 'v132b',
    word: 'bad',
    pronunciation: '/bæd/',
    partOfSpeech: 'adjective',
    meaning: 'xấu / tồi',
    example: 'The weather is bad today.',
    exampleTranslation: 'Thời tiết hôm nay tồi.',
    level: 'beginner',
    topic: 'Description',
  },
  {
    id: 'v133b',
    word: 'new',
    pronunciation: '/njuː/',
    partOfSpeech: 'adjective',
    meaning: 'mới',
    example: 'I have a new job.',
    exampleTranslation: 'Tôi có công việc mới.',
    level: 'beginner',
    topic: 'Description',
  },
  {
    id: 'v134b',
    word: 'old',
    pronunciation: '/əʊld/',
    partOfSpeech: 'adjective',
    meaning: 'cũ / già',
    example: 'This is an old building.',
    exampleTranslation: 'Đây là tòa nhà cũ.',
    level: 'beginner',
    topic: 'Description',
  },
  {
    id: 'v135b',
    word: 'big',
    pronunciation: '/bɪɡ/',
    partOfSpeech: 'adjective',
    meaning: 'to / lớn',
    example: 'This is a big company.',
    exampleTranslation: 'Đây là một công ty lớn.',
    level: 'beginner',
    topic: 'Description',
  },
  {
    id: 'v136b',
    word: 'small',
    pronunciation: '/smɔːl/',
    partOfSpeech: 'adjective',
    meaning: 'nhỏ',
    example: 'I work for a small company.',
    exampleTranslation: 'Tôi làm cho một công ty nhỏ.',
    level: 'beginner',
    topic: 'Description',
  },
  {
    id: 'v137b',
    word: 'important',
    pronunciation: '/ɪmˈpɔːtnt/',
    partOfSpeech: 'adjective',
    meaning: 'quan trọng',
    example: 'This is very important.',
    exampleTranslation: 'Điều này rất quan trọng.',
    level: 'beginner',
    topic: 'Description',
  },
  {
    id: 'v138b',
    word: 'easy',
    pronunciation: '/ˈiːzi/',
    partOfSpeech: 'adjective',
    meaning: 'dễ',
    example: 'This task is easy.',
    exampleTranslation: 'Nhiệm vụ này dễ.',
    level: 'beginner',
    topic: 'Description',
  },
  {
    id: 'v139b',
    word: 'difficult',
    pronunciation: '/ˈdɪfɪkəlt/',
    partOfSpeech: 'adjective',
    meaning: 'khó',
    example: 'This is a difficult problem.',
    exampleTranslation: 'Đây là vấn đề khó.',
    level: 'beginner',
    topic: 'Description',
  },
  {
    id: 'v140b',
    word: 'fast',
    pronunciation: '/fɑːst/',
    partOfSpeech: 'adjective/adverb',
    meaning: 'nhanh',
    example: 'We need a fast solution.',
    exampleTranslation: 'Chúng ta cần giải pháp nhanh.',
    level: 'beginner',
    topic: 'Description',
  },
  {
    id: 'v141b',
    word: 'slow',
    pronunciation: '/sləʊ/',
    partOfSpeech: 'adjective',
    meaning: 'chậm',
    example: 'The internet is slow.',
    exampleTranslation: 'Internet chậm.',
    level: 'beginner',
    topic: 'Description',
  },
  {
    id: 'v142b',
    word: 'busy',
    pronunciation: '/ˈbɪzi/',
    partOfSpeech: 'adjective',
    meaning: 'bận rộn',
    example: 'I am very busy today.',
    exampleTranslation: 'Hôm nay tôi rất bận.',
    level: 'beginner',
    topic: 'Description',
  },
  {
    id: 'v143b',
    word: 'ready',
    pronunciation: '/ˈredi/',
    partOfSpeech: 'adjective',
    meaning: 'sẵn sàng',
    example: 'Are you ready?',
    exampleTranslation: 'Bạn sẵn sàng chưa?',
    level: 'beginner',
    topic: 'Description',
  },
  {
    id: 'v144b',
    word: 'sure',
    pronunciation: '/ʃʊə(r)/',
    partOfSpeech: 'adjective',
    meaning: 'chắc chắn',
    example: 'Are you sure?',
    exampleTranslation: 'Bạn chắc chắn chứ?',
    level: 'beginner',
    topic: 'Description',
  },
  {
    id: 'v145b',
    word: 'clear',
    pronunciation: '/klɪə(r)/',
    partOfSpeech: 'adjective',
    meaning: 'rõ ràng',
    example: 'Is that clear?',
    exampleTranslation: 'Rõ ràng chứ?',
    level: 'beginner',
    topic: 'Description',
  },
  // Common Verbs
  {
    id: 'v146b',
    word: 'make',
    pronunciation: '/meɪk/',
    partOfSpeech: 'verb',
    meaning: 'làm / tạo ra',
    example: 'Let\'s make a decision.',
    exampleTranslation: 'Hãy đưa ra quyết định.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v147b',
    word: 'take',
    pronunciation: '/teɪk/',
    partOfSpeech: 'verb',
    meaning: 'lấy / mang',
    example: 'Please take a seat.',
    exampleTranslation: 'Vui lòng ngồi xuống.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v148b',
    word: 'give',
    pronunciation: '/ɡɪv/',
    partOfSpeech: 'verb',
    meaning: 'cho / trao',
    example: 'Give me the file, please.',
    exampleTranslation: 'Cho tôi file đi.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v149b',
    word: 'get',
    pronunciation: '/ɡet/',
    partOfSpeech: 'verb',
    meaning: 'lấy / nhận / có',
    example: 'I need to get more information.',
    exampleTranslation: 'Tôi cần lấy thêm thông tin.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v150b',
    word: 'have',
    pronunciation: '/hæv/',
    partOfSpeech: 'verb',
    meaning: 'có',
    example: 'Do you have a pen?',
    exampleTranslation: 'Bạn có bút không?',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v151b',
    word: 'know',
    pronunciation: '/nəʊ/',
    partOfSpeech: 'verb',
    meaning: 'biết',
    example: 'I don\'t know the answer.',
    exampleTranslation: 'Tôi không biết câu trả lời.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v152b',
    word: 'think',
    pronunciation: '/θɪŋk/',
    partOfSpeech: 'verb',
    meaning: 'nghĩ',
    example: 'What do you think?',
    exampleTranslation: 'Bạn nghĩ sao?',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v153b',
    word: 'say',
    pronunciation: '/seɪ/',
    partOfSpeech: 'verb',
    meaning: 'nói',
    example: 'What did you say?',
    exampleTranslation: 'Bạn nói gì?',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v154b',
    word: 'tell',
    pronunciation: '/tel/',
    partOfSpeech: 'verb',
    meaning: 'kể / bảo',
    example: 'Tell me about your job.',
    exampleTranslation: 'Kể cho tôi nghe về công việc của bạn.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v155b',
    word: 'ask',
    pronunciation: '/ɑːsk/',
    partOfSpeech: 'verb',
    meaning: 'hỏi / yêu cầu',
    example: 'Can I ask a question?',
    exampleTranslation: 'Tôi có thể hỏi một câu không?',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v156b',
    word: 'find',
    pronunciation: '/faɪnd/',
    partOfSpeech: 'verb',
    meaning: 'tìm',
    example: 'I can\'t find my keys.',
    exampleTranslation: 'Tôi không tìm thấy chìa khóa.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v157b',
    word: 'use',
    pronunciation: '/juːz/',
    partOfSpeech: 'verb',
    meaning: 'sử dụng',
    example: 'Can I use your phone?',
    exampleTranslation: 'Tôi có thể dùng điện thoại của bạn không?',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v158b',
    word: 'open',
    pronunciation: '/ˈəʊpən/',
    partOfSpeech: 'verb/adjective',
    meaning: 'mở',
    example: 'Please open the door.',
    exampleTranslation: 'Vui lòng mở cửa.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v159b',
    word: 'close',
    pronunciation: '/kləʊz/',
    partOfSpeech: 'verb/adjective',
    meaning: 'đóng',
    example: 'Please close the window.',
    exampleTranslation: 'Vui lòng đóng cửa sổ.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v160b',
    word: 'understand',
    pronunciation: '/ˌʌndəˈstænd/',
    partOfSpeech: 'verb',
    meaning: 'hiểu',
    example: 'Do you understand?',
    exampleTranslation: 'Bạn hiểu không?',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v161b',
    word: 'agree',
    pronunciation: '/əˈɡriː/',
    partOfSpeech: 'verb',
    meaning: 'đồng ý',
    example: 'I agree with you.',
    exampleTranslation: 'Tôi đồng ý với bạn.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v162b',
    word: 'become',
    pronunciation: '/bɪˈkʌm/',
    partOfSpeech: 'verb',
    meaning: 'trở nên / trở thành',
    example: 'She became a manager.',
    exampleTranslation: 'Cô ấy trở thành quản lý.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v163b',
    word: 'change',
    pronunciation: '/tʃeɪndʒ/',
    partOfSpeech: 'verb',
    meaning: 'thay đổi',
    example: 'We need to change the plan.',
    exampleTranslation: 'Chúng ta cần thay đổi kế hoạch.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v164b',
    word: 'improve',
    pronunciation: '/ɪmˈpruːv/',
    partOfSpeech: 'verb',
    meaning: 'cải thiện',
    example: 'We need to improve our service.',
    exampleTranslation: 'Chúng ta cần cải thiện dịch vụ.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v165b',
    word: 'increase',
    pronunciation: '/ɪnˈkriːs/',
    partOfSpeech: 'verb',
    meaning: 'tăng',
    example: 'Sales increased this month.',
    exampleTranslation: 'Doanh số tăng tháng này.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v166b',
    word: 'decrease',
    pronunciation: '/dɪˈkriːs/',
    partOfSpeech: 'verb',
    meaning: 'giảm',
    example: 'Costs decreased last year.',
    exampleTranslation: 'Chi phí giảm năm ngoái.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v167b',
    word: 'provide',
    pronunciation: '/prəˈvaɪd/',
    partOfSpeech: 'verb',
    meaning: 'cung cấp',
    example: 'We provide training for new employees.',
    exampleTranslation: 'Chúng tôi cung cấp đào tạo cho nhân viên mới.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v168b',
    word: 'offer',
    pronunciation: '/ˈɒfə(r)/',
    partOfSpeech: 'verb/noun',
    meaning: 'đề nghị / cung cấp',
    example: 'We offer competitive salaries.',
    exampleTranslation: 'Chúng tôi cung cấp mức lương cạnh tranh.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v169b',
    word: 'choose',
    pronunciation: '/tʃuːz/',
    partOfSpeech: 'verb',
    meaning: 'chọn',
    example: 'Please choose one option.',
    exampleTranslation: 'Vui lòng chọn một lựa chọn.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v170b',
    word: 'decide',
    pronunciation: '/dɪˈsaɪd/',
    partOfSpeech: 'verb',
    meaning: 'quyết định',
    example: 'We need to decide soon.',
    exampleTranslation: 'Chúng ta cần quyết định sớm.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v171b',
    word: 'plan',
    pronunciation: '/plæn/',
    partOfSpeech: 'verb/noun',
    meaning: 'lên kế hoạch / kế hoạch',
    example: 'We are planning a new project.',
    exampleTranslation: 'Chúng tôi đang lên kế hoạch cho dự án mới.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v172b',
    word: 'remember',
    pronunciation: '/rɪˈmembə(r)/',
    partOfSpeech: 'verb',
    meaning: 'nhớ',
    example: 'Do you remember the meeting?',
    exampleTranslation: 'Bạn có nhớ cuộc họp không?',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v173b',
    word: 'forget',
    pronunciation: '/fəˈɡet/',
    partOfSpeech: 'verb',
    meaning: 'quên',
    example: 'Don\'t forget the deadline.',
    exampleTranslation: 'Đừng quên hạn chót.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v174b',
    word: 'try',
    pronunciation: '/traɪ/',
    partOfSpeech: 'verb',
    meaning: 'cố gắng / thử',
    example: 'Please try again.',
    exampleTranslation: 'Vui lòng thử lại.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v175b',
    word: 'keep',
    pronunciation: '/kiːp/',
    partOfSpeech: 'verb',
    meaning: 'giữ',
    example: 'Please keep the receipt.',
    exampleTranslation: 'Vui lòng giữ hóa đơn.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v176b',
    word: 'put',
    pronunciation: '/pʊt/',
    partOfSpeech: 'verb',
    meaning: 'đặt / để',
    example: 'Put the files on my desk.',
    exampleTranslation: 'Đặt file lên bàn tôi.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v177b',
    word: 'show',
    pronunciation: '/ʃəʊ/',
    partOfSpeech: 'verb',
    meaning: 'chỉ / cho xem',
    example: 'Can you show me the report?',
    exampleTranslation: 'Bạn có thể cho tôi xem báo cáo không?',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v178b',
    word: 'bring',
    pronunciation: '/brɪŋ/',
    partOfSpeech: 'verb',
    meaning: 'mang đến',
    example: 'Please bring the documents.',
    exampleTranslation: 'Vui lòng mang tài liệu đến.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v179b',
    word: 'see',
    pronunciation: '/siː/',
    partOfSpeech: 'verb',
    meaning: 'nhìn / gặp',
    example: 'See you later.',
    exampleTranslation: 'Hẹn gặp lại.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  {
    id: 'v180b',
    word: 'meet',
    pronunciation: '/miːt/',
    partOfSpeech: 'verb',
    meaning: 'gặp / họp',
    example: 'Let\'s meet tomorrow.',
    exampleTranslation: 'Hãy gặp nhau ngày mai.',
    level: 'beginner',
    topic: 'Common Verbs',
  },
  // Numbers & Quantity
  {
    id: 'v181b',
    word: 'number',
    pronunciation: '/ˈnʌmbə(r)/',
    partOfSpeech: 'noun',
    meaning: 'số',
    example: 'What is your phone number?',
    exampleTranslation: 'Số điện thoại của bạn là gì?',
    level: 'beginner',
    topic: 'Numbers',
  },
  {
    id: 'v182b',
    word: 'many',
    pronunciation: '/ˈmeni/',
    partOfSpeech: 'determiner',
    meaning: 'nhiều',
    example: 'How many people?',
    exampleTranslation: 'Bao nhiêu người?',
    level: 'beginner',
    topic: 'Numbers',
  },
  {
    id: 'v183b',
    word: 'much',
    pronunciation: '/mʌtʃ/',
    partOfSpeech: 'determiner',
    meaning: 'nhiều',
    example: 'How much does it cost?',
    exampleTranslation: 'Nó có giá bao nhiêu?',
    level: 'beginner',
    topic: 'Numbers',
  },
  {
    id: 'v184b',
    word: 'some',
    pronunciation: '/sʌm/',
    partOfSpeech: 'determiner',
    meaning: 'một vài',
    example: 'I need some help.',
    exampleTranslation: 'Tôi cần một chút giúp đỡ.',
    level: 'beginner',
    topic: 'Numbers',
  },
  {
    id: 'v185b',
    word: 'any',
    pronunciation: '/ˈeni/',
    partOfSpeech: 'determiner',
    meaning: 'bất kỳ',
    example: 'Do you have any questions?',
    exampleTranslation: 'Bạn có câu hỏi nào không?',
    level: 'beginner',
    topic: 'Numbers',
  },
  {
    id: 'v186b',
    word: 'few',
    pronunciation: '/fjuː/',
    partOfSpeech: 'determiner',
    meaning: 'một vài (ít)',
    example: 'I have a few ideas.',
    exampleTranslation: 'Tôi có một vài ý tưởng.',
    level: 'beginner',
    topic: 'Numbers',
  },
  {
    id: 'v187b',
    word: 'little',
    pronunciation: '/ˈlɪtl/',
    partOfSpeech: 'determiner/adjective',
    meaning: 'một chút (ít)',
    example: 'I have a little time.',
    exampleTranslation: 'Tôi có một chút thời gian.',
    level: 'beginner',
    topic: 'Numbers',
  },
  {
    id: 'v188b',
    word: 'all',
    pronunciation: '/ɔːl/',
    partOfSpeech: 'determiner',
    meaning: 'tất cả',
    example: 'All employees must attend.',
    exampleTranslation: 'Tất cả nhân viên phải tham dự.',
    level: 'beginner',
    topic: 'Numbers',
  },
  {
    id: 'v189b',
    word: 'both',
    pronunciation: '/bəʊθ/',
    partOfSpeech: 'determiner',
    meaning: 'cả hai',
    example: 'Both options are good.',
    exampleTranslation: 'Cả hai lựa chọn đều tốt.',
    level: 'beginner',
    topic: 'Numbers',
  },
  {
    id: 'v190b',
    word: 'each',
    pronunciation: '/iːtʃ/',
    partOfSpeech: 'determiner',
    meaning: 'mỗi',
    example: 'Each person gets a copy.',
    exampleTranslation: 'Mỗi người nhận một bản sao.',
    level: 'beginner',
    topic: 'Numbers',
  },
  {
    id: 'v191b',
    word: 'every',
    pronunciation: '/ˈevri/',
    partOfSpeech: 'determiner',
    meaning: 'mọi',
    example: 'Every employee is important.',
    exampleTranslation: 'Mọi nhân viên đều quan trọng.',
    level: 'beginner',
    topic: 'Numbers',
  },
  {
    id: 'v192b',
    word: 'other',
    pronunciation: '/ˈʌðə(r)/',
    partOfSpeech: 'determiner/pronoun',
    meaning: 'khác',
    example: 'Do you have other questions?',
    exampleTranslation: 'Bạn có câu hỏi nào khác không?',
    level: 'beginner',
    topic: 'Numbers',
  },
  {
    id: 'v193b',
    word: 'another',
    pronunciation: '/əˈnʌðə(r)/',
    partOfSpeech: 'determiner/pronoun',
    meaning: 'một cái khác',
    example: 'Can I have another chance?',
    exampleTranslation: 'Tôi có thể có cơ hội khác không?',
    level: 'beginner',
    topic: 'Numbers',
  },
  {
    id: 'v194b',
    word: 'more',
    pronunciation: '/mɔː(r)/',
    partOfSpeech: 'determiner',
    meaning: 'nhiều hơn',
    example: 'I need more time.',
    exampleTranslation: 'Tôi cần nhiều thời gian hơn.',
    level: 'beginner',
    topic: 'Numbers',
  },
  {
    id: 'v195b',
    word: 'less',
    pronunciation: '/les/',
    partOfSpeech: 'determiner',
    meaning: 'ít hơn',
    example: 'We have less time now.',
    exampleTranslation: 'Bây giờ chúng ta có ít thời gian hơn.',
    level: 'beginner',
    topic: 'Numbers',
  },
  {
    id: 'v196b',
    word: 'most',
    pronunciation: '/məʊst/',
    partOfSpeech: 'determiner',
    meaning: 'hầu hết / nhất',
    example: 'Most people agree.',
    exampleTranslation: 'Hầu hết mọi người đồng ý.',
    level: 'beginner',
    topic: 'Numbers',
  },
  {
    id: 'v197b',
    word: 'enough',
    pronunciation: '/ɪˈnʌf/',
    partOfSpeech: 'determiner/adverb',
    meaning: 'đủ',
    example: 'Do we have enough time?',
    exampleTranslation: 'Chúng ta có đủ thời gian không?',
    level: 'beginner',
    topic: 'Numbers',
  },
  {
    id: 'v198b',
    word: 'several',
    pronunciation: '/ˈsevrəl/',
    partOfSpeech: 'determiner',
    meaning: 'vài / một số',
    example: 'I have several questions.',
    exampleTranslation: 'Tôi có vài câu hỏi.',
    level: 'beginner',
    topic: 'Numbers',
  },
  {
    id: 'v199b',
    word: 'whole',
    pronunciation: '/həʊl/',
    partOfSpeech: 'adjective',
    meaning: 'toàn bộ',
    example: 'The whole team is here.',
    exampleTranslation: 'Toàn bộ nhóm đều ở đây.',
    level: 'beginner',
    topic: 'Numbers',
  },
  {
    id: 'v200b',
    word: 'half',
    pronunciation: '/hɑːf/',
    partOfSpeech: 'noun/determiner',
    meaning: 'một nửa',
    example: 'Half of the staff are on vacation.',
    exampleTranslation: 'Một nửa nhân viên đang nghỉ phép.',
    level: 'beginner',
    topic: 'Numbers',
  },

  // === INTERMEDIATE LEVEL (300-600) ===
  {
    id: 'v101',
    word: 'conference',
    pronunciation: '/ˈkɒnfərəns/',
    partOfSpeech: 'noun',
    meaning: 'hội nghị',
    example: 'The conference will be held next month.',
    exampleTranslation: 'Hội nghị sẽ được tổ chức vào tháng sau.',
    level: 'intermediate',
    topic: 'Business Events',
  },
  {
    id: 'v102',
    word: 'negotiate',
    pronunciation: '/nɪˈɡəʊʃieɪt/',
    partOfSpeech: 'verb',
    meaning: 'đàm phán',
    example: 'We need to negotiate the contract terms.',
    exampleTranslation: 'Chúng ta cần đàm phán các điều khoản hợp đồng.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v103',
    word: 'proposal',
    pronunciation: '/prəˈpəʊzl/',
    partOfSpeech: 'noun',
    meaning: 'đề xuất',
    example: 'Please review the proposal carefully.',
    exampleTranslation: 'Vui lòng xem xét đề xuất một cách cẩn thận.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v104',
    word: 'agreement',
    pronunciation: '/əˈɡriːmənt/',
    partOfSpeech: 'noun',
    meaning: 'thỏa thuận',
    example: 'We reached an agreement yesterday.',
    exampleTranslation: 'Chúng tôi đã đạt được thỏa thuận hôm qua.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v105',
    word: 'implement',
    pronunciation: '/ˈɪmplɪment/',
    partOfSpeech: 'verb',
    meaning: 'thực hiện',
    example: 'We will implement the new system next week.',
    exampleTranslation: 'Chúng tôi sẽ triển khai hệ thống mới vào tuần sau.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v106',
    word: 'budget',
    pronunciation: '/ˈbʌdʒɪt/',
    partOfSpeech: 'noun',
    meaning: 'ngân sách',
    example: 'We need to stay within the budget.',
    exampleTranslation: 'Chúng ta cần ở trong phạm vi ngân sách.',
    level: 'intermediate',
    topic: 'Finance',
  },
  {
    id: 'v107',
    word: 'profit',
    pronunciation: '/ˈprɒfɪt/',
    partOfSpeech: 'noun',
    meaning: 'lợi nhuận',
    example: 'The company made a large profit this year.',
    exampleTranslation: 'Công ty đã có lợi nhuận lớn năm nay.',
    level: 'intermediate',
    topic: 'Finance',
  },
  {
    id: 'v108',
    word: 'revenue',
    pronunciation: '/ˈrevənjuː/',
    partOfSpeech: 'noun',
    meaning: 'doanh thu',
    example: 'Our revenue increased by 20%.',
    exampleTranslation: 'Doanh thu của chúng tôi tăng 20%.',
    level: 'intermediate',
    topic: 'Finance',
  },
  {
    id: 'v109',
    word: 'expense',
    pronunciation: '/ɪkˈspens/',
    partOfSpeech: 'noun',
    meaning: 'chi phí',
    example: 'We need to reduce expenses.',
    exampleTranslation: 'Chúng ta cần giảm chi phí.',
    level: 'intermediate',
    topic: 'Finance',
  },
  {
    id: 'v110',
    word: 'investment',
    pronunciation: '/ɪnˈvestmənt/',
    partOfSpeech: 'noun',
    meaning: 'đầu tư',
    example: 'This is a good investment opportunity.',
    exampleTranslation: 'Đây là cơ hội đầu tư tốt.',
    level: 'intermediate',
    topic: 'Finance',
  },
  {
    id: 'v111',
    word: 'strategy',
    pronunciation: '/ˈstrætədʒi/',
    partOfSpeech: 'noun',
    meaning: 'chiến lược',
    example: 'We need a new marketing strategy.',
    exampleTranslation: 'Chúng ta cần một chiến lược marketing mới.',
    level: 'intermediate',
    topic: 'Business Strategy',
  },
  {
    id: 'v112',
    word: 'objective',
    pronunciation: '/əbˈdʒektɪv/',
    partOfSpeech: 'noun',
    meaning: 'mục tiêu',
    example: 'Our main objective is customer satisfaction.',
    exampleTranslation: 'Mục tiêu chính của chúng tôi là sự hài lòng của khách hàng.',
    level: 'intermediate',
    topic: 'Business Strategy',
  },
  {
    id: 'v113',
    word: 'priority',
    pronunciation: '/praɪˈɒrəti/',
    partOfSpeech: 'noun',
    meaning: 'ưu tiên',
    example: 'Quality is our top priority.',
    exampleTranslation: 'Chất lượng là ưu tiên hàng đầu của chúng tôi.',
    level: 'intermediate',
    topic: 'Business Strategy',
  },
  {
    id: 'v114',
    word: 'deadline',
    pronunciation: '/ˈdedlaɪn/',
    partOfSpeech: 'noun',
    meaning: 'hạn cuối',
    example: 'Can we meet the deadline?',
    exampleTranslation: 'Chúng ta có thể đáp ứng hạn cuối không?',
    level: 'intermediate',
    topic: 'Project Management',
  },
  {
    id: 'v115',
    word: 'milestone',
    pronunciation: '/ˈmaɪlstəʊn/',
    partOfSpeech: 'noun',
    meaning: 'cột mốc',
    example: 'We reached an important milestone.',
    exampleTranslation: 'Chúng tôi đã đạt được một cột mốc quan trọng.',
    level: 'intermediate',
    topic: 'Project Management',
  },
  {
    id: 'v116',
    word: 'requirement',
    pronunciation: '/rɪˈkwaɪəmənt/',
    partOfSpeech: 'noun',
    meaning: 'yêu cầu',
    example: 'What are the requirements for this position?',
    exampleTranslation: 'Yêu cầu cho vị trí này là gì?',
    level: 'intermediate',
    topic: 'HR',
  },
  {
    id: 'v117',
    word: 'qualification',
    pronunciation: '/ˌkwɒlɪfɪˈkeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'bằng cấp / năng lực',
    example: 'She has the right qualifications.',
    exampleTranslation: 'Cô ấy có bằng cấp phù hợp.',
    level: 'intermediate',
    topic: 'HR',
  },
  {
    id: 'v118',
    word: 'recruitment',
    pronunciation: '/rɪˈkruːtmənt/',
    partOfSpeech: 'noun',
    meaning: 'tuyển dụng',
    example: 'The recruitment process takes three weeks.',
    exampleTranslation: 'Quy trình tuyển dụng mất ba tuần.',
    level: 'intermediate',
    topic: 'HR',
  },
  {
    id: 'v119',
    word: 'promotion',
    pronunciation: '/prəˈməʊʃn/',
    partOfSpeech: 'noun',
    meaning: 'thăng tiến / khuyến mãi',
    example: 'She got a promotion last month.',
    exampleTranslation: 'Cô ấy được thăng chức tháng trước.',
    level: 'intermediate',
    topic: 'HR',
  },
  {
    id: 'v120',
    word: 'performance',
    pronunciation: '/pəˈfɔːməns/',
    partOfSpeech: 'noun',
    meaning: 'hiệu suất / thành tích',
    example: 'Your performance has been excellent.',
    exampleTranslation: 'Hiệu suất làm việc của bạn rất xuất sắc.',
    level: 'intermediate',
    topic: 'HR',
  },
  {
    id: 'v121',
    word: 'evaluation',
    pronunciation: '/ɪˌvæljuˈeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'đánh giá',
    example: 'Annual evaluation is next week.',
    exampleTranslation: 'Đánh giá hàng năm là tuần sau.',
    level: 'intermediate',
    topic: 'HR',
  },
  {
    id: 'v122',
    word: 'benefit',
    pronunciation: '/ˈbenɪfɪt/',
    partOfSpeech: 'noun',
    meaning: 'lợi ích / phúc lợi',
    example: 'The company offers great benefits.',
    exampleTranslation: 'Công ty cung cấp phúc lợi tuyệt vời.',
    level: 'intermediate',
    topic: 'HR',
  },
  {
    id: 'v123',
    word: 'collaborate',
    pronunciation: '/kəˈlæbəreɪt/',
    partOfSpeech: 'verb',
    meaning: 'hợp tác',
    example: 'We need to collaborate with other teams.',
    exampleTranslation: 'Chúng ta cần hợp tác với các nhóm khác.',
    level: 'intermediate',
    topic: 'Teamwork',
  },
  {
    id: 'v124',
    word: 'coordinate',
    pronunciation: '/kəʊˈɔːdɪneɪt/',
    partOfSpeech: 'verb',
    meaning: 'phối hợp',
    example: 'Please coordinate with the marketing team.',
    exampleTranslation: 'Vui lòng phối hợp với nhóm marketing.',
    level: 'intermediate',
    topic: 'Teamwork',
  },
  {
    id: 'v125',
    word: 'facilitate',
    pronunciation: '/fəˈsɪlɪteɪt/',
    partOfSpeech: 'verb',
    meaning: 'tạo điều kiện',
    example: 'We need to facilitate communication.',
    exampleTranslation: 'Chúng ta cần tạo điều kiện cho giao tiếp.',
    level: 'intermediate',
    topic: 'Management',
  },
  {
    id: 'v126',
    word: 'efficiency',
    pronunciation: '/ɪˈfɪʃnsi/',
    partOfSpeech: 'noun',
    meaning: 'hiệu quả',
    example: 'We need to improve efficiency.',
    exampleTranslation: 'Chúng ta cần cải thiện hiệu quả.',
    level: 'intermediate',
    topic: 'Management',
  },
  {
    id: 'v127',
    word: 'productivity',
    pronunciation: '/ˌprɒdʌkˈtɪvəti/',
    partOfSpeech: 'noun',
    meaning: 'năng suất',
    example: 'Productivity has increased this quarter.',
    exampleTranslation: 'Năng suất đã tăng trong quý này.',
    level: 'intermediate',
    topic: 'Management',
  },
  {
    id: 'v128',
    word: 'quality',
    pronunciation: '/ˈkwɒləti/',
    partOfSpeech: 'noun',
    meaning: 'chất lượng',
    example: 'Quality control is very important.',
    exampleTranslation: 'Kiểm soát chất lượng rất quan trọng.',
    level: 'intermediate',
    topic: 'Management',
  },
  {
    id: 'v129',
    word: 'competitive',
    pronunciation: '/kəmˈpetətɪv/',
    partOfSpeech: 'adjective',
    meaning: 'cạnh tranh',
    example: 'We offer competitive prices.',
    exampleTranslation: 'Chúng tôi cung cấp giá cả cạnh tranh.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v130',
    word: 'advantage',
    pronunciation: '/ədˈvɑːntɪdʒ/',
    partOfSpeech: 'noun',
    meaning: 'lợi thế',
    example: 'What is our competitive advantage?',
    exampleTranslation: 'Lợi thế cạnh tranh của chúng ta là gì?',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v131',
    word: 'market',
    pronunciation: '/ˈmɑːkɪt/',
    partOfSpeech: 'noun',
    meaning: 'thị trường',
    example: 'We are expanding into new markets.',
    exampleTranslation: 'Chúng tôi đang mở rộng vào thị trường mới.',
    level: 'intermediate',
    topic: 'Marketing',
  },
  {
    id: 'v132',
    word: 'customer',
    pronunciation: '/ˈkʌstəmə(r)/',
    partOfSpeech: 'noun',
    meaning: 'khách hàng',
    example: 'Customer satisfaction is our goal.',
    exampleTranslation: 'Sự hài lòng của khách hàng là mục tiêu của chúng tôi.',
    level: 'intermediate',
    topic: 'Customer Service',
  },
  {
    id: 'v133',
    word: 'feedback',
    pronunciation: '/ˈfiːdbæk/',
    partOfSpeech: 'noun',
    meaning: 'phản hồi',
    example: 'We welcome customer feedback.',
    exampleTranslation: 'Chúng tôi hoan nghênh phản hồi từ khách hàng.',
    level: 'intermediate',
    topic: 'Customer Service',
  },
  {
    id: 'v134',
    word: 'survey',
    pronunciation: '/ˈsɜːveɪ/',
    partOfSpeech: 'noun',
    meaning: 'khảo sát',
    example: 'Please complete this survey.',
    exampleTranslation: 'Vui lòng hoàn thành bản khảo sát này.',
    level: 'intermediate',
    topic: 'Marketing',
  },
  {
    id: 'v135',
    word: 'analysis',
    pronunciation: '/əˈnæləsɪs/',
    partOfSpeech: 'noun',
    meaning: 'phân tích',
    example: 'We need a detailed analysis.',
    exampleTranslation: 'Chúng ta cần một phân tích chi tiết.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v136',
    word: 'deadline',
    pronunciation: '/ˈdedlaɪn/',
    partOfSpeech: 'noun',
    meaning: 'hạn chót',
    example: 'We must meet the deadline.',
    exampleTranslation: 'Chúng ta phải đáp ứng hạn chót.',
    level: 'intermediate',
    topic: 'Project Management',
  },
  {
    id: 'v137',
    word: 'milestone',
    pronunciation: '/ˈmaɪlstəʊn/',
    partOfSpeech: 'noun',
    meaning: 'mốc quan trọng',
    example: 'Reaching 1000 customers is a major milestone.',
    exampleTranslation: 'Đạt 1000 khách hàng là mốc quan trọng.',
    level: 'intermediate',
    topic: 'Project Management',
  },
  {
    id: 'v138',
    word: 'objective',
    pronunciation: '/əbˈdʒektɪv/',
    partOfSpeech: 'noun/adjective',
    meaning: 'mục tiêu / khách quan',
    example: 'What are your main objectives?',
    exampleTranslation: 'Mục tiêu chính của bạn là gì?',
    level: 'intermediate',
    topic: 'Project Management',
  },
  {
    id: 'v139',
    word: 'priority',
    pronunciation: '/praɪˈɒrəti/',
    partOfSpeech: 'noun',
    meaning: 'ưu tiên',
    example: 'Quality is our top priority.',
    exampleTranslation: 'Chất lượng là ưu tiên hàng đầu.',
    level: 'intermediate',
    topic: 'Project Management',
  },
  {
    id: 'v140',
    word: 'requirement',
    pronunciation: '/rɪˈkwaɪəmənt/',
    partOfSpeech: 'noun',
    meaning: 'yêu cầu',
    example: 'Please check the job requirements.',
    exampleTranslation: 'Vui lòng kiểm tra yêu cầu công việc.',
    level: 'intermediate',
    topic: 'Project Management',
  },
  {
    id: 'v141',
    word: 'scope',
    pronunciation: '/skəʊp/',
    partOfSpeech: 'noun',
    meaning: 'phạm vi',
    example: 'The scope of the project is too large.',
    exampleTranslation: 'Phạm vi dự án quá lớn.',
    level: 'intermediate',
    topic: 'Project Management',
  },
  {
    id: 'v142',
    word: 'resource',
    pronunciation: '/rɪˈsɔːs/',
    partOfSpeech: 'noun',
    meaning: 'nguồn lực',
    example: 'We need more resources for this project.',
    exampleTranslation: 'Chúng ta cần thêm nguồn lực cho dự án này.',
    level: 'intermediate',
    topic: 'Project Management',
  },
  {
    id: 'v143',
    word: 'timeline',
    pronunciation: '/ˈtaɪmlaɪn/',
    partOfSpeech: 'noun',
    meaning: 'tiến độ thời gian',
    example: 'Can you share the project timeline?',
    exampleTranslation: 'Bạn có thể chia sẻ tiến độ dự án không?',
    level: 'intermediate',
    topic: 'Project Management',
  },
  {
    id: 'v144',
    word: 'deliverable',
    pronunciation: '/dɪˈlɪvərəbl/',
    partOfSpeech: 'noun',
    meaning: 'sản phẩm bàn giao',
    example: 'What are the key deliverables?',
    exampleTranslation: 'Những sản phẩm bàn giao chính là gì?',
    level: 'intermediate',
    topic: 'Project Management',
  },
  {
    id: 'v145',
    word: 'stakeholder',
    pronunciation: '/ˈsteɪkhəʊldə(r)/',
    partOfSpeech: 'noun',
    meaning: 'bên liên quan',
    example: 'We need approval from all stakeholders.',
    exampleTranslation: 'Chúng ta cần sự chấp thuận từ tất cả bên liên quan.',
    level: 'intermediate',
    topic: 'Project Management',
  },
  {
    id: 'v146',
    word: 'complaint',
    pronunciation: '/kəmˈpleɪnt/',
    partOfSpeech: 'noun',
    meaning: 'khiếu nại',
    example: 'We received a customer complaint.',
    exampleTranslation: 'Chúng tôi nhận được khiếu nại từ khách hàng.',
    level: 'intermediate',
    topic: 'Customer Service',
  },
  {
    id: 'v147',
    word: 'feedback',
    pronunciation: '/ˈfiːdbæk/',
    partOfSpeech: 'noun',
    meaning: 'phản hồi',
    example: 'Customer feedback is very important.',
    exampleTranslation: 'Phản hồi của khách hàng rất quan trọng.',
    level: 'intermediate',
    topic: 'Customer Service',
  },
  {
    id: 'v148',
    word: 'inquiry',
    pronunciation: '/ɪnˈkwaɪəri/',
    partOfSpeech: 'noun',
    meaning: 'yêu cầu thông tin',
    example: 'Thank you for your inquiry.',
    exampleTranslation: 'Cảm ơn yêu cầu thông tin của bạn.',
    level: 'intermediate',
    topic: 'Customer Service',
  },
  {
    id: 'v149',
    word: 'satisfaction',
    pronunciation: '/ˌsætɪsˈfækʃn/',
    partOfSpeech: 'noun',
    meaning: 'sự hài lòng',
    example: 'Customer satisfaction is our goal.',
    exampleTranslation: 'Sự hài lòng của khách hàng là mục tiêu.',
    level: 'intermediate',
    topic: 'Customer Service',
  },
  {
    id: 'v150',
    word: 'refund',
    pronunciation: '/ˈriːfʌnd/',
    partOfSpeech: 'noun/verb',
    meaning: 'hoàn tiền',
    example: 'You can request a refund within 30 days.',
    exampleTranslation: 'Bạn có thể yêu cầu hoàn tiền trong 30 ngày.',
    level: 'intermediate',
    topic: 'Customer Service',
  },
  {
    id: 'v151',
    word: 'warranty',
    pronunciation: '/ˈwɒrənti/',
    partOfSpeech: 'noun',
    meaning: 'bảo hành',
    example: 'This product comes with a 2-year warranty.',
    exampleTranslation: 'Sản phẩm này có bảo hành 2 năm.',
    level: 'intermediate',
    topic: 'Customer Service',
  },
  {
    id: 'v152',
    word: 'replacement',
    pronunciation: '/rɪˈpleɪsmənt/',
    partOfSpeech: 'noun',
    meaning: 'thay thế',
    example: 'We will send a replacement immediately.',
    exampleTranslation: 'Chúng tôi sẽ gửi sản phẩm thay thế ngay lập tức.',
    level: 'intermediate',
    topic: 'Customer Service',
  },
  {
    id: 'v153',
    word: 'assistance',
    pronunciation: '/əˈsɪstəns/',
    partOfSpeech: 'noun',
    meaning: 'sự hỗ trợ',
    example: 'Can I offer you any assistance?',
    exampleTranslation: 'Tôi có thể hỗ trợ gì cho bạn?',
    level: 'intermediate',
    topic: 'Customer Service',
  },
  {
    id: 'v154',
    word: 'resolution',
    pronunciation: '/ˌrezəˈluːʃn/',
    partOfSpeech: 'noun',
    meaning: 'giải pháp',
    example: 'We found a quick resolution to the problem.',
    exampleTranslation: 'Chúng tôi tìm được giải pháp nhanh cho vấn đề.',
    level: 'intermediate',
    topic: 'Customer Service',
  },
  {
    id: 'v155',
    word: 'follow-up',
    pronunciation: '/ˈfɒləʊ ʌp/',
    partOfSpeech: 'noun/verb',
    meaning: 'theo dõi tiếp',
    example: 'I will follow up with you next week.',
    exampleTranslation: 'Tôi sẽ theo dõi với bạn tuần sau.',
    level: 'intermediate',
    topic: 'Customer Service',
  },
  {
    id: 'v156',
    word: 'database',
    pronunciation: '/ˈdeɪtəbeɪs/',
    partOfSpeech: 'noun',
    meaning: 'cơ sở dữ liệu',
    example: 'The database needs to be updated.',
    exampleTranslation: 'Cơ sở dữ liệu cần được cập nhật.',
    level: 'intermediate',
    topic: 'Technology',
  },
  {
    id: 'v157',
    word: 'network',
    pronunciation: '/ˈnetwɜːk/',
    partOfSpeech: 'noun/verb',
    meaning: 'mạng lưới',
    example: 'The network is down.',
    exampleTranslation: 'Mạng bị gián đoạn.',
    level: 'intermediate',
    topic: 'Technology',
  },
  {
    id: 'v158',
    word: 'server',
    pronunciation: '/ˈsɜːvə(r)/',
    partOfSpeech: 'noun',
    meaning: 'máy chủ',
    example: 'The server crashed this morning.',
    exampleTranslation: 'Máy chủ bị sập sáng nay.',
    level: 'intermediate',
    topic: 'Technology',
  },
  {
    id: 'v159',
    word: 'backup',
    pronunciation: '/ˈbækʌp/',
    partOfSpeech: 'noun/verb',
    meaning: 'sao lưu',
    example: 'Don\'t forget to backup your files.',
    exampleTranslation: 'Đừng quên sao lưu file của bạn.',
    level: 'intermediate',
    topic: 'Technology',
  },
  {
    id: 'v160',
    word: 'security',
    pronunciation: '/sɪˈkjʊərəti/',
    partOfSpeech: 'noun',
    meaning: 'bảo mật',
    example: 'We need to improve our security system.',
    exampleTranslation: 'Chúng ta cần cải thiện hệ thống bảo mật.',
    level: 'intermediate',
    topic: 'Technology',
  },
  {
    id: 'v161',
    word: 'update',
    pronunciation: '/ˌʌpˈdeɪt/',
    partOfSpeech: 'noun/verb',
    meaning: 'cập nhật',
    example: 'Please install the latest update.',
    exampleTranslation: 'Vui lòng cài đặt bản cập nhật mới nhất.',
    level: 'intermediate',
    topic: 'Technology',
  },
  {
    id: 'v162',
    word: 'interface',
    pronunciation: '/ˈɪntəfeɪs/',
    partOfSpeech: 'noun',
    meaning: 'giao diện',
    example: 'The user interface is very intuitive.',
    exampleTranslation: 'Giao diện người dùng rất trực quan.',
    level: 'intermediate',
    topic: 'Technology',
  },
  {
    id: 'v163',
    word: 'platform',
    pronunciation: '/ˈplætfɔːm/',
    partOfSpeech: 'noun',
    meaning: 'nền tảng',
    example: 'We use a cloud-based platform.',
    exampleTranslation: 'Chúng tôi sử dụng nền tảng đám mây.',
    level: 'intermediate',
    topic: 'Technology',
  },
  {
    id: 'v164',
    word: 'implementation',
    pronunciation: '/ˌɪmplɪmenˈteɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'triển khai',
    example: 'The implementation phase will take 3 months.',
    exampleTranslation: 'Giai đoạn triển khai sẽ mất 3 tháng.',
    level: 'intermediate',
    topic: 'Technology',
  },
  {
    id: 'v165',
    word: 'integration',
    pronunciation: '/ˌɪntɪˈɡreɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'tích hợp',
    example: 'The system integration is complete.',
    exampleTranslation: 'Việc tích hợp hệ thống đã hoàn tất.',
    level: 'intermediate',
    topic: 'Technology',
  },
  {
    id: 'v166',
    word: 'target',
    pronunciation: '/ˈtɑːɡɪt/',
    partOfSpeech: 'noun/verb',
    meaning: 'mục tiêu / nhắm vào',
    example: 'We exceeded our sales target.',
    exampleTranslation: 'Chúng tôi vượt mục tiêu bán hàng.',
    level: 'intermediate',
    topic: 'Sales',
  },
  {
    id: 'v167',
    word: 'discount',
    pronunciation: '/ˈdɪskaʊnt/',
    partOfSpeech: 'noun/verb',
    meaning: 'giảm giá',
    example: 'We offer a 10% discount for bulk orders.',
    exampleTranslation: 'Chúng tôi giảm giá 10% cho đơn hàng số lượng lớn.',
    level: 'intermediate',
    topic: 'Sales',
  },
  {
    id: 'v168',
    word: 'quote',
    pronunciation: '/kwəʊt/',
    partOfSpeech: 'noun/verb',
    meaning: 'báo giá',
    example: 'Can you send me a quote?',
    exampleTranslation: 'Bạn có thể gửi cho tôi báo giá không?',
    level: 'intermediate',
    topic: 'Sales',
  },
  {
    id: 'v169',
    word: 'negotiation',
    pronunciation: '/nɪˌɡəʊʃiˈeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'đàm phán',
    example: 'The negotiation was successful.',
    exampleTranslation: 'Cuộc đàm phán thành công.',
    level: 'intermediate',
    topic: 'Sales',
  },
  {
    id: 'v170',
    word: 'competitor',
    pronunciation: '/kəmˈpetɪtə(r)/',
    partOfSpeech: 'noun',
    meaning: 'đối thủ cạnh tranh',
    example: 'We need to analyze our competitors.',
    exampleTranslation: 'Chúng ta cần phân tích đối thủ cạnh tranh.',
    level: 'intermediate',
    topic: 'Sales',
  },
  {
    id: 'v171',
    word: 'advantage',
    pronunciation: '/ədˈvɑːntɪdʒ/',
    partOfSpeech: 'noun',
    meaning: 'lợi thế',
    example: 'What is our competitive advantage?',
    exampleTranslation: 'Lợi thế cạnh tranh của chúng ta là gì?',
    level: 'intermediate',
    topic: 'Sales',
  },
  {
    id: 'v172',
    word: 'invoice',
    pronunciation: '/ˈɪnvɔɪs/',
    partOfSpeech: 'noun/verb',
    meaning: 'hóa đơn',
    example: 'I sent the invoice yesterday.',
    exampleTranslation: 'Tôi đã gửi hóa đơn hôm qua.',
    level: 'intermediate',
    topic: 'Finance',
  },
  {
    id: 'v173',
    word: 'receipt',
    pronunciation: '/rɪˈsiːt/',
    partOfSpeech: 'noun',
    meaning: 'biên lai',
    example: 'Do you need a receipt?',
    exampleTranslation: 'Bạn có cần biên lai không?',
    level: 'intermediate',
    topic: 'Finance',
  },
  {
    id: 'v174',
    word: 'payment',
    pronunciation: '/ˈpeɪmənt/',
    partOfSpeech: 'noun',
    meaning: 'thanh toán',
    example: 'Payment is due on the 15th.',
    exampleTranslation: 'Thanh toán đến hạn ngày 15.',
    level: 'intermediate',
    topic: 'Finance',
  },
  {
    id: 'v175',
    word: 'transaction',
    pronunciation: '/trænˈzækʃn/',
    partOfSpeech: 'noun',
    meaning: 'giao dịch',
    example: 'The transaction was completed successfully.',
    exampleTranslation: 'Giao dịch hoàn tất thành công.',
    level: 'intermediate',
    topic: 'Finance',
  },
  {
    id: 'v176',
    word: 'balance',
    pronunciation: '/ˈbæləns/',
    partOfSpeech: 'noun/verb',
    meaning: 'số dư / cân bằng',
    example: 'Please check your account balance.',
    exampleTranslation: 'Vui lòng kiểm tra số dư tài khoản.',
    level: 'intermediate',
    topic: 'Finance',
  },
  {
    id: 'v177',
    word: 'transfer',
    pronunciation: '/trænsˈfɜː(r)/',
    partOfSpeech: 'noun/verb',
    meaning: 'chuyển khoản',
    example: 'I will transfer the money today.',
    exampleTranslation: 'Tôi sẽ chuyển tiền hôm nay.',
    level: 'intermediate',
    topic: 'Finance',
  },
  {
    id: 'v178',
    word: 'deposit',
    pronunciation: '/dɪˈpɒzɪt/',
    partOfSpeech: 'noun/verb',
    meaning: 'đặt cọc / tiền gửi',
    example: 'You need to pay a 20% deposit.',
    exampleTranslation: 'Bạn cần đặt cọc 20%.',
    level: 'intermediate',
    topic: 'Finance',
  },
  {
    id: 'v179',
    word: 'withdrawal',
    pronunciation: '/wɪðˈdrɔːəl/',
    partOfSpeech: 'noun',
    meaning: 'rút tiền',
    example: 'Cash withdrawals are limited to $500.',
    exampleTranslation: 'Rút tiền mặt giới hạn 500 đô la.',
    level: 'intermediate',
    topic: 'Finance',
  },
  {
    id: 'v180',
    word: 'interest',
    pronunciation: '/ˈɪntrəst/',
    partOfSpeech: 'noun',
    meaning: 'lãi suất / sự quan tâm',
    example: 'The interest rate is 5% per year.',
    exampleTranslation: 'Lãi suất là 5% mỗi năm.',
    level: 'intermediate',
    topic: 'Finance',
  },
  {
    id: 'v181',
    word: 'clause',
    pronunciation: '/klɔːz/',
    partOfSpeech: 'noun',
    meaning: 'điều khoản',
    example: 'Please read the confidentiality clause.',
    exampleTranslation: 'Vui lòng đọc điều khoản bảo mật.',
    level: 'intermediate',
    topic: 'Legal',
  },
  {
    id: 'v182',
    word: 'obligation',
    pronunciation: '/ˌɒblɪˈɡeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'nghĩa vụ',
    example: 'Both parties have certain obligations.',
    exampleTranslation: 'Cả hai bên đều có nghĩa vụ nhất định.',
    level: 'intermediate',
    topic: 'Legal',
  },
  {
    id: 'v183',
    word: 'liability',
    pronunciation: '/ˌlaɪəˈbɪləti/',
    partOfSpeech: 'noun',
    meaning: 'trách nhiệm pháp lý',
    example: 'The company accepts no liability.',
    exampleTranslation: 'Công ty không chấp nhận trách nhiệm pháp lý.',
    level: 'intermediate',
    topic: 'Legal',
  },
  {
    id: 'v184',
    word: 'regulation',
    pronunciation: '/ˌreɡjuˈleɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'quy định',
    example: 'We must follow industry regulations.',
    exampleTranslation: 'Chúng ta phải tuân theo quy định ngành.',
    level: 'intermediate',
    topic: 'Legal',
  },
  {
    id: 'v185',
    word: 'confidential',
    pronunciation: '/ˌkɒnfɪˈdenʃl/',
    partOfSpeech: 'adjective',
    meaning: 'bí mật',
    example: 'This information is strictly confidential.',
    exampleTranslation: 'Thông tin này hoàn toàn bí mật.',
    level: 'intermediate',
    topic: 'Legal',
  },
  {
    id: 'v186',
    word: 'terminate',
    pronunciation: '/ˈtɜːmɪneɪt/',
    partOfSpeech: 'verb',
    meaning: 'chấm dứt',
    example: 'We decided to terminate the contract.',
    exampleTranslation: 'Chúng tôi quyết định chấm dứt hợp đồng.',
    level: 'intermediate',
    topic: 'Legal',
  },
  {
    id: 'v187',
    word: 'dispute',
    pronunciation: '/dɪˈspjuːt/',
    partOfSpeech: 'noun/verb',
    meaning: 'tranh chấp',
    example: 'We need to resolve this dispute.',
    exampleTranslation: 'Chúng ta cần giải quyết tranh chấp này.',
    level: 'intermediate',
    topic: 'Legal',
  },
  {
    id: 'v188',
    word: 'shipment',
    pronunciation: '/ˈʃɪpmənt/',
    partOfSpeech: 'noun',
    meaning: 'lô hàng',
    example: 'The shipment will arrive tomorrow.',
    exampleTranslation: 'Lô hàng sẽ đến vào ngày mai.',
    level: 'intermediate',
    topic: 'Logistics',
  },
  {
    id: 'v189',
    word: 'delivery',
    pronunciation: '/dɪˈlɪvəri/',
    partOfSpeech: 'noun',
    meaning: 'giao hàng',
    example: 'Delivery takes 3-5 business days.',
    exampleTranslation: 'Giao hàng mất 3-5 ngày làm việc.',
    level: 'intermediate',
    topic: 'Logistics',
  },
  {
    id: 'v190',
    word: 'inventory',
    pronunciation: '/ˈɪnvəntri/',
    partOfSpeech: 'noun',
    meaning: 'hàng tồn kho',
    example: 'We need to check the inventory.',
    exampleTranslation: 'Chúng ta cần kiểm tra hàng tồn kho.',
    level: 'intermediate',
    topic: 'Logistics',
  },
  {
    id: 'v191',
    word: 'warehouse',
    pronunciation: '/ˈweəhaʊs/',
    partOfSpeech: 'noun',
    meaning: 'kho hàng',
    example: 'The warehouse is located in the suburbs.',
    exampleTranslation: 'Kho hàng nằm ở ngoại ô.',
    level: 'intermediate',
    topic: 'Logistics',
  },
  {
    id: 'v192',
    word: 'supply chain',
    pronunciation: '/səˈplaɪ tʃeɪn/',
    partOfSpeech: 'noun',
    meaning: 'chuỗi cung ứng',
    example: 'We need to optimize our supply chain.',
    exampleTranslation: 'Chúng ta cần tối ưu hóa chuỗi cung ứng.',
    level: 'intermediate',
    topic: 'Logistics',
  },
  {
    id: 'v193',
    word: 'distribution',
    pronunciation: '/ˌdɪstrɪˈbjuːʃn/',
    partOfSpeech: 'noun',
    meaning: 'phân phối',
    example: 'Our distribution network covers Asia.',
    exampleTranslation: 'Mạng lưới phân phối của chúng tôi bao phủ châu Á.',
    level: 'intermediate',
    topic: 'Logistics',
  },
  {
    id: 'v194',
    word: 'procurement',
    pronunciation: '/prəˈkjʊəmənt/',
    partOfSpeech: 'noun',
    meaning: 'thu mua',
    example: 'The procurement process is underway.',
    exampleTranslation: 'Quy trình thu mua đang được tiến hành.',
    level: 'intermediate',
    topic: 'Logistics',
  },
  {
    id: 'v195',
    word: 'vendor',
    pronunciation: '/ˈvendə(r)/',
    partOfSpeech: 'noun',
    meaning: 'nhà cung cấp',
    example: 'We work with multiple vendors.',
    exampleTranslation: 'Chúng tôi làm việc với nhiều nhà cung cấp.',
    level: 'intermediate',
    topic: 'Logistics',
  },
  {
    id: 'v196',
    word: 'supplier',
    pronunciation: '/səˈplaɪə(r)/',
    partOfSpeech: 'noun',
    meaning: 'nhà cung ứng',
    example: 'Our main supplier is based in China.',
    exampleTranslation: 'Nhà cung ứng chính của chúng tôi có trụ sở tại Trung Quốc.',
    level: 'intermediate',
    topic: 'Logistics',
  },
  {
    id: 'v197',
    word: 'forecast',
    pronunciation: '/ˈfɔːkɑːst/',
    partOfSpeech: 'noun/verb',
    meaning: 'dự báo',
    example: 'The sales forecast looks promising.',
    exampleTranslation: 'Dự báo doanh số trông đầy hứa hẹn.',
    level: 'intermediate',
    topic: 'Logistics',
  },
  {
    id: 'v198',
    word: 'performance',
    pronunciation: '/pəˈfɔːməns/',
    partOfSpeech: 'noun',
    meaning: 'hiệu suất',
    example: 'Your performance has been excellent.',
    exampleTranslation: 'Hiệu suất của bạn rất xuất sắc.',
    level: 'intermediate',
    topic: 'Performance',
  },
  {
    id: 'v199',
    word: 'evaluation',
    pronunciation: '/ɪˌvæljuˈeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'đánh giá',
    example: 'Annual performance evaluations are in May.',
    exampleTranslation: 'Đánh giá hiệu suất hàng năm vào tháng 5.',
    level: 'intermediate',
    topic: 'Performance',
  },
  {
    id: 'v200',
    word: 'productivity',
    pronunciation: '/ˌprɒdʌkˈtɪvəti/',
    partOfSpeech: 'noun',
    meaning: 'năng suất',
    example: 'We need to increase productivity.',
    exampleTranslation: 'Chúng ta cần tăng năng suất.',
    level: 'intermediate',
    topic: 'Performance',
  },
  {
    id: 'v201i',
    word: 'efficiency',
    pronunciation: '/ɪˈfɪʃnsi/',
    partOfSpeech: 'noun',
    meaning: 'hiệu quả',
    example: 'The new system improves efficiency.',
    exampleTranslation: 'Hệ thống mới cải thiện hiệu quả.',
    level: 'intermediate',
    topic: 'Performance',
  },
  {
    id: 'v202i',
    word: 'achievement',
    pronunciation: '/əˈtʃiːvmənt/',
    partOfSpeech: 'noun',
    meaning: 'thành tích',
    example: 'List your major achievements.',
    exampleTranslation: 'Liệt kê các thành tích chính của bạn.',
    level: 'intermediate',
    topic: 'Performance',
  },
  {
    id: 'v203i',
    word: 'benchmark',
    pronunciation: '/ˈbentʃmɑːk/',
    partOfSpeech: 'noun/verb',
    meaning: 'chuẩn mực',
    example: 'We benchmark against industry leaders.',
    exampleTranslation: 'Chúng tôi so sánh với các công ty hàng đầu ngành.',
    level: 'intermediate',
    topic: 'Performance',
  },
  {
    id: 'v204i',
    word: 'metric',
    pronunciation: '/ˈmetrɪk/',
    partOfSpeech: 'noun',
    meaning: 'chỉ số đo lường',
    example: 'Track key performance metrics.',
    exampleTranslation: 'Theo dõi các chỉ số hiệu suất chính.',
    level: 'intermediate',
    topic: 'Performance',
  },
  {
    id: 'v205i',
    word: 'indicator',
    pronunciation: '/ˈɪndɪkeɪtə(r)/',
    partOfSpeech: 'noun',
    meaning: 'chỉ báo',
    example: 'These are key performance indicators.',
    exampleTranslation: 'Đây là các chỉ báo hiệu suất chính.',
    level: 'intermediate',
    topic: 'Performance',
  },
  {
    id: 'v206i',
    word: 'outcome',
    pronunciation: '/ˈaʊtkʌm/',
    partOfSpeech: 'noun',
    meaning: 'kết quả',
    example: 'What was the outcome of the meeting?',
    exampleTranslation: 'Kết quả của cuộc họp là gì?',
    level: 'intermediate',
    topic: 'Performance',
  },
  {
    id: 'v207i',
    word: 'impact',
    pronunciation: '/ˈɪmpækt/',
    partOfSpeech: 'noun/verb',
    meaning: 'tác động',
    example: 'This decision will have a major impact.',
    exampleTranslation: 'Quyết định này sẽ có tác động lớn.',
    level: 'intermediate',
    topic: 'Performance',
  },
  // HR & Training
  {
    id: 'v208i',
    word: 'qualification',
    pronunciation: '/ˌkwɒlɪfɪˈkeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'bằng cấp / trình độ',
    example: 'What are your qualifications?',
    exampleTranslation: 'Bằng cấp của bạn là gì?',
    level: 'intermediate',
    topic: 'HR',
  },
  {
    id: 'v209i',
    word: 'certification',
    pronunciation: '/ˌsɜːtɪfɪˈkeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'chứng chỉ',
    example: 'She has a project management certification.',
    exampleTranslation: 'Cô ấy có chứng chỉ quản lý dự án.',
    level: 'intermediate',
    topic: 'HR',
  },
  {
    id: 'v210i',
    word: 'apprentice',
    pronunciation: '/əˈprentɪs/',
    partOfSpeech: 'noun',
    meaning: 'học việc',
    example: 'He started as an apprentice.',
    exampleTranslation: 'Anh ấy bắt đầu là người học việc.',
    level: 'intermediate',
    topic: 'HR',
  },
  {
    id: 'v211i',
    word: 'probation',
    pronunciation: '/prəˈbeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'thử việc',
    example: 'The probation period is 3 months.',
    exampleTranslation: 'Thời gian thử việc là 3 tháng.',
    level: 'intermediate',
    topic: 'HR',
  },
  {
    id: 'v212i',
    word: 'termination',
    pronunciation: '/ˌtɜːmɪˈneɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'sa thải',
    example: 'The termination was effective immediately.',
    exampleTranslation: 'Việc sa thải có hiệu lực ngay lập tức.',
    level: 'intermediate',
    topic: 'HR',
  },
  {
    id: 'v213i',
    word: 'redundancy',
    pronunciation: '/rɪˈdʌndənsi/',
    partOfSpeech: 'noun',
    meaning: 'cắt giảm nhân sự',
    example: 'The company announced redundancies.',
    exampleTranslation: 'Công ty thông báo cắt giảm nhân sự.',
    level: 'intermediate',
    topic: 'HR',
  },
  {
    id: 'v214i',
    word: 'resignation',
    pronunciation: '/ˌrezɪɡˈneɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'từ chức',
    example: 'She submitted her resignation yesterday.',
    exampleTranslation: 'Cô ấy nộp đơn từ chức hôm qua.',
    level: 'intermediate',
    topic: 'HR',
  },
  {
    id: 'v215i',
    word: 'orientation',
    pronunciation: '/ˌɔːriənˈteɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'định hướng',
    example: 'New employee orientation is on Monday.',
    exampleTranslation: 'Định hướng nhân viên mới vào thứ Hai.',
    level: 'intermediate',
    topic: 'HR',
  },
  {
    id: 'v216i',
    word: 'mentorship',
    pronunciation: '/ˈmentɔːʃɪp/',
    partOfSpeech: 'noun',
    meaning: 'cố vấn',
    example: 'The mentorship program is very helpful.',
    exampleTranslation: 'Chương trình cố vấn rất hữu ích.',
    level: 'intermediate',
    topic: 'HR',
  },
  {
    id: 'v217i',
    word: 'workforce',
    pronunciation: '/ˈwɜːkfɔːs/',
    partOfSpeech: 'noun',
    meaning: 'lực lượng lao động',
    example: 'We have a diverse workforce.',
    exampleTranslation: 'Chúng tôi có lực lượng lao động đa dạng.',
    level: 'intermediate',
    topic: 'HR',
  },
  // Communication & Meetings
  {
    id: 'v218i',
    word: 'agenda',
    pronunciation: '/əˈdʒendə/',
    partOfSpeech: 'noun',
    meaning: 'chương trình nghị sự',
    example: 'Please review the meeting agenda.',
    exampleTranslation: 'Vui lòng xem lại chương trình họp.',
    level: 'intermediate',
    topic: 'Meetings',
  },
  {
    id: 'v219i',
    word: 'minutes',
    pronunciation: '/ˈmɪnɪts/',
    partOfSpeech: 'noun',
    meaning: 'biên bản họp',
    example: 'Who will take the minutes?',
    exampleTranslation: 'Ai sẽ ghi biên bản?',
    level: 'intermediate',
    topic: 'Meetings',
  },
  {
    id: 'v220i',
    word: 'attendee',
    pronunciation: '/əˌtenˈdiː/',
    partOfSpeech: 'noun',
    meaning: 'người tham dự',
    example: 'All attendees must register.',
    exampleTranslation: 'Tất cả người tham dự phải đăng ký.',
    level: 'intermediate',
    topic: 'Meetings',
  },
  {
    id: 'v221i',
    word: 'postpone',
    pronunciation: '/pəˈspəʊn/',
    partOfSpeech: 'verb',
    meaning: 'hoãn lại',
    example: 'We need to postpone the meeting.',
    exampleTranslation: 'Chúng ta cần hoãn cuộc họp.',
    level: 'intermediate',
    topic: 'Meetings',
  },
  {
    id: 'v222i',
    word: 'reschedule',
    pronunciation: '/ˌriːˈʃedjuːl/',
    partOfSpeech: 'verb',
    meaning: 'đổi lịch',
    example: 'Can we reschedule for next week?',
    exampleTranslation: 'Chúng ta có thể đổi lịch sang tuần sau không?',
    level: 'intermediate',
    topic: 'Meetings',
  },
  {
    id: 'v223i',
    word: 'clarify',
    pronunciation: '/ˈklærəfaɪ/',
    partOfSpeech: 'verb',
    meaning: 'làm rõ',
    example: 'Could you clarify that point?',
    exampleTranslation: 'Bạn có thể làm rõ điểm đó không?',
    level: 'intermediate',
    topic: 'Communication',
  },
  {
    id: 'v224i',
    word: 'elaborate',
    pronunciation: '/ɪˈlæbəreɪt/',
    partOfSpeech: 'verb',
    meaning: 'trình bày chi tiết',
    example: 'Please elaborate on your idea.',
    exampleTranslation: 'Vui lòng trình bày chi tiết ý tưởng của bạn.',
    level: 'intermediate',
    topic: 'Communication',
  },
  {
    id: 'v225i',
    word: 'summarize',
    pronunciation: '/ˈsʌməraɪz/',
    partOfSpeech: 'verb',
    meaning: 'tóm tắt',
    example: 'Can you summarize the main points?',
    exampleTranslation: 'Bạn có thể tóm tắt các điểm chính không?',
    level: 'intermediate',
    topic: 'Communication',
  },
  {
    id: 'v226i',
    word: 'emphasize',
    pronunciation: '/ˈemfəsaɪz/',
    partOfSpeech: 'verb',
    meaning: 'nhấn mạnh',
    example: 'I want to emphasize the importance of this.',
    exampleTranslation: 'Tôi muốn nhấn mạnh tầm quan trọng của điều này.',
    level: 'intermediate',
    topic: 'Communication',
  },
  {
    id: 'v227i',
    word: 'notify',
    pronunciation: '/ˈnəʊtɪfaɪ/',
    partOfSpeech: 'verb',
    meaning: 'thông báo',
    example: 'Please notify me of any changes.',
    exampleTranslation: 'Vui lòng thông báo cho tôi về bất kỳ thay đổi nào.',
    level: 'intermediate',
    topic: 'Communication',
  },
  // Quality & Standards
  {
    id: 'v228i',
    word: 'standard',
    pronunciation: '/ˈstændəd/',
    partOfSpeech: 'noun',
    meaning: 'tiêu chuẩn',
    example: 'We maintain high quality standards.',
    exampleTranslation: 'Chúng tôi duy trì tiêu chuẩn chất lượng cao.',
    level: 'intermediate',
    topic: 'Quality',
  },
  {
    id: 'v229i',
    word: 'specification',
    pronunciation: '/ˌspesɪfɪˈkeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'thông số kỹ thuật',
    example: 'Please check the product specifications.',
    exampleTranslation: 'Vui lòng kiểm tra thông số sản phẩm.',
    level: 'intermediate',
    topic: 'Quality',
  },
  {
    id: 'v230i',
    word: 'inspection',
    pronunciation: '/ɪnˈspekʃn/',
    partOfSpeech: 'noun',
    meaning: 'kiểm tra',
    example: 'The inspection will take place tomorrow.',
    exampleTranslation: 'Việc kiểm tra sẽ diễn ra vào ngày mai.',
    level: 'intermediate',
    topic: 'Quality',
  },
  {
    id: 'v231i',
    word: 'defect',
    pronunciation: '/ˈdiːfekt/',
    partOfSpeech: 'noun',
    meaning: 'khuyết tật',
    example: 'We found several defects in the product.',
    exampleTranslation: 'Chúng tôi phát hiện vài khuyết tật trong sản phẩm.',
    level: 'intermediate',
    topic: 'Quality',
  },
  {
    id: 'v232i',
    word: 'compliance',
    pronunciation: '/kəmˈplaɪəns/',
    partOfSpeech: 'noun',
    meaning: 'tuân thủ',
    example: 'Ensure compliance with safety regulations.',
    exampleTranslation: 'Đảm bảo tuân thủ các quy định an toàn.',
    level: 'intermediate',
    topic: 'Quality',
  },
  {
    id: 'v233i',
    word: 'verify',
    pronunciation: '/ˈverɪfaɪ/',
    partOfSpeech: 'verb',
    meaning: 'xác minh',
    example: 'Please verify the information.',
    exampleTranslation: 'Vui lòng xác minh thông tin.',
    level: 'intermediate',
    topic: 'Quality',
  },
  {
    id: 'v234i',
    word: 'validate',
    pronunciation: '/ˈvælɪdeɪt/',
    partOfSpeech: 'verb',
    meaning: 'xác thực',
    example: 'We need to validate the results.',
    exampleTranslation: 'Chúng ta cần xác thực kết quả.',
    level: 'intermediate',
    topic: 'Quality',
  },
  {
    id: 'v235i',
    word: 'warranty',
    pronunciation: '/ˈwɒrənti/',
    partOfSpeech: 'noun',
    meaning: 'bảo hành',
    example: 'The warranty covers 2 years.',
    exampleTranslation: 'Bảo hành trong 2 năm.',
    level: 'intermediate',
    topic: 'Quality',
  },
  {
    id: 'v236i',
    word: 'guarantee',
    pronunciation: '/ˌɡærənˈtiː/',
    partOfSpeech: 'noun/verb',
    meaning: 'đảm bảo',
    example: 'We guarantee customer satisfaction.',
    exampleTranslation: 'Chúng tôi đảm bảo sự hài lòng của khách hàng.',
    level: 'intermediate',
    topic: 'Quality',
  },
  {
    id: 'v237i',
    word: 'reliability',
    pronunciation: '/rɪˌlaɪəˈbɪləti/',
    partOfSpeech: 'noun',
    meaning: 'độ tin cậy',
    example: 'The product has excellent reliability.',
    exampleTranslation: 'Sản phẩm có độ tin cậy xuất sắc.',
    level: 'intermediate',
    topic: 'Quality',
  },
  // Business Strategy
  {
    id: 'v238i',
    word: 'strategy',
    pronunciation: '/ˈstrætədʒi/',
    partOfSpeech: 'noun',
    meaning: 'chiến lược',
    example: 'We need a new marketing strategy.',
    exampleTranslation: 'Chúng ta cần chiến lược marketing mới.',
    level: 'intermediate',
    topic: 'Strategy',
  },
  {
    id: 'v239i',
    word: 'initiative',
    pronunciation: '/ɪˈnɪʃətɪv/',
    partOfSpeech: 'noun',
    meaning: 'sáng kiến',
    example: 'The green initiative is very successful.',
    exampleTranslation: 'Sáng kiến xanh rất thành công.',
    level: 'intermediate',
    topic: 'Strategy',
  },
  {
    id: 'v240i',
    word: 'expansion',
    pronunciation: '/ɪkˈspænʃn/',
    partOfSpeech: 'noun',
    meaning: 'mở rộng',
    example: 'We are planning international expansion.',
    exampleTranslation: 'Chúng tôi đang lên kế hoạch mở rộng quốc tế.',
    level: 'intermediate',
    topic: 'Strategy',
  },
  {
    id: 'v241i',
    word: 'diversify',
    pronunciation: '/daɪˈvɜːsɪfaɪ/',
    partOfSpeech: 'verb',
    meaning: 'đa dạng hóa',
    example: 'We should diversify our product range.',
    exampleTranslation: 'Chúng ta nên đa dạng hóa dòng sản phẩm.',
    level: 'intermediate',
    topic: 'Strategy',
  },
  {
    id: 'v242i',
    word: 'consolidate',
    pronunciation: '/kənˈsɒlɪdeɪt/',
    partOfSpeech: 'verb',
    meaning: 'hợp nhất',
    example: 'We plan to consolidate our operations.',
    exampleTranslation: 'Chúng tôi dự định hợp nhất hoạt động.',
    level: 'intermediate',
    topic: 'Strategy',
  },
  {
    id: 'v243i',
    word: 'optimize',
    pronunciation: '/ˈɒptɪmaɪz/',
    partOfSpeech: 'verb',
    meaning: 'tối ưu hóa',
    example: 'We need to optimize our processes.',
    exampleTranslation: 'Chúng ta cần tối ưu hóa quy trình.',
    level: 'intermediate',
    topic: 'Strategy',
  },
  {
    id: 'v244i',
    word: 'innovate',
    pronunciation: '/ˈɪnəveɪt/',
    partOfSpeech: 'verb',
    meaning: 'đổi mới',
    example: 'We must continue to innovate.',
    exampleTranslation: 'Chúng ta phải tiếp tục đổi mới.',
    level: 'intermediate',
    topic: 'Strategy',
  },
  {
    id: 'v245i',
    word: 'sustainable',
    pronunciation: '/səˈsteɪnəbl/',
    partOfSpeech: 'adjective',
    meaning: 'bền vững',
    example: 'We focus on sustainable growth.',
    exampleTranslation: 'Chúng tôi tập trung vào tăng trưởng bền vững.',
    level: 'intermediate',
    topic: 'Strategy',
  },
  {
    id: 'v246i',
    word: 'competitive',
    pronunciation: '/kəmˈpetətɪv/',
    partOfSpeech: 'adjective',
    meaning: 'cạnh tranh',
    example: 'We offer competitive prices.',
    exampleTranslation: 'Chúng tôi cung cấp giá cạnh tranh.',
    level: 'intermediate',
    topic: 'Strategy',
  },
  {
    id: 'v247i',
    word: 'collaborative',
    pronunciation: '/kəˈlæbərətɪv/',
    partOfSpeech: 'adjective',
    meaning: 'hợp tác',
    example: 'We have a collaborative work environment.',
    exampleTranslation: 'Chúng tôi có môi trường làm việc hợp tác.',
    level: 'intermediate',
    topic: 'Strategy',
  },
  // Market & Economics
  {
    id: 'v248i',
    word: 'demand',
    pronunciation: '/dɪˈmɑːnd/',
    partOfSpeech: 'noun/verb',
    meaning: 'cầu / nhu cầu',
    example: 'There is high demand for this product.',
    exampleTranslation: 'Có nhu cầu cao cho sản phẩm này.',
    level: 'intermediate',
    topic: 'Market',
  },
  {
    id: 'v249i',
    word: 'supply',
    pronunciation: '/səˈplaɪ/',
    partOfSpeech: 'noun/verb',
    meaning: 'cung / cung cấp',
    example: 'Supply cannot meet demand.',
    exampleTranslation: 'Cung không đáp ứng được cầu.',
    level: 'intermediate',
    topic: 'Market',
  },
  {
    id: 'v250i',
    word: 'consumer',
    pronunciation: '/kənˈsjuːmə(r)/',
    partOfSpeech: 'noun',
    meaning: 'người tiêu dùng',
    example: 'Consumer preferences are changing.',
    exampleTranslation: 'Sở thích người tiêu dùng đang thay đổi.',
    level: 'intermediate',
    topic: 'Market',
  },
  {
    id: 'v251i',
    word: 'market share',
    pronunciation: '/ˈmɑːkɪt ʃeə(r)/',
    partOfSpeech: 'noun',
    meaning: 'thị phần',
    example: 'We have 30% market share.',
    exampleTranslation: 'Chúng tôi có 30% thị phần.',
    level: 'intermediate',
    topic: 'Market',
  },
  {
    id: 'v252i',
    word: 'trend',
    pronunciation: '/trend/',
    partOfSpeech: 'noun',
    meaning: 'xu hướng',
    example: 'What are the current market trends?',
    exampleTranslation: 'Xu hướng thị trường hiện tại là gì?',
    level: 'intermediate',
    topic: 'Market',
  },
  {
    id: 'v253i',
    word: 'fluctuation',
    pronunciation: '/ˌflʌktʃuˈeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'biến động',
    example: 'Price fluctuations are normal.',
    exampleTranslation: 'Biến động giá là bình thường.',
    level: 'intermediate',
    topic: 'Market',
  },
  {
    id: 'v254i',
    word: 'inflation',
    pronunciation: '/ɪnˈfleɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'lạm phát',
    example: 'Inflation is at 3% this year.',
    exampleTranslation: 'Lạm phát ở mức 3% năm nay.',
    level: 'intermediate',
    topic: 'Economics',
  },
  {
    id: 'v255i',
    word: 'recession',
    pronunciation: '/rɪˈseʃn/',
    partOfSpeech: 'noun',
    meaning: 'suy thoái',
    example: 'The economy is in recession.',
    exampleTranslation: 'Nền kinh tế đang suy thoái.',
    level: 'intermediate',
    topic: 'Economics',
  },
  {
    id: 'v256i',
    word: 'investment',
    pronunciation: '/ɪnˈvestmənt/',
    partOfSpeech: 'noun',
    meaning: 'đầu tư',
    example: 'This is a good investment opportunity.',
    exampleTranslation: 'Đây là cơ hội đầu tư tốt.',
    level: 'intermediate',
    topic: 'Finance',
  },
  {
    id: 'v257i',
    word: 'portfolio',
    pronunciation: '/pɔːtˈfəʊliəʊ/',
    partOfSpeech: 'noun',
    meaning: 'danh mục đầu tư',
    example: 'Diversify your investment portfolio.',
    exampleTranslation: 'Đa dạng hóa danh mục đầu tư của bạn.',
    level: 'intermediate',
    topic: 'Finance',
  },
  // Documents & Paperwork
  {
    id: 'v258i',
    word: 'attachment',
    pronunciation: '/əˈtætʃmənt/',
    partOfSpeech: 'noun',
    meaning: 'tệp đính kèm',
    example: 'Please see the attachment.',
    exampleTranslation: 'Vui lòng xem tệp đính kèm.',
    level: 'intermediate',
    topic: 'Documents',
  },
  {
    id: 'v259i',
    word: 'reference',
    pronunciation: '/ˈrefrəns/',
    partOfSpeech: 'noun',
    meaning: 'tham chiếu',
    example: 'Please provide two references.',
    exampleTranslation: 'Vui lòng cung cấp hai tài liệu tham khảo.',
    level: 'intermediate',
    topic: 'Documents',
  },
  {
    id: 'v260i',
    word: 'signature',
    pronunciation: '/ˈsɪɡnətʃə(r)/',
    partOfSpeech: 'noun',
    meaning: 'chữ ký',
    example: 'We need your signature here.',
    exampleTranslation: 'Chúng tôi cần chữ ký của bạn ở đây.',
    level: 'intermediate',
    topic: 'Documents',
  },
  {
    id: 'v261i',
    word: 'amendment',
    pronunciation: '/əˈmendmənt/',
    partOfSpeech: 'noun',
    meaning: 'sửa đổi',
    example: 'We propose an amendment to the policy.',
    exampleTranslation: 'Chúng tôi đề xuất sửa đổi chính sách.',
    level: 'intermediate',
    topic: 'Documents',
  },
  {
    id: 'v262i',
    word: 'documentation',
    pronunciation: '/ˌdɒkjumenˈteɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'tài liệu',
    example: 'Please submit all required documentation.',
    exampleTranslation: 'Vui lòng nộp tất cả tài liệu yêu cầu.',
    level: 'intermediate',
    topic: 'Documents',
  },
  {
    id: 'v263i',
    word: 'archive',
    pronunciation: '/ˈɑːkaɪv/',
    partOfSpeech: 'noun/verb',
    meaning: 'lưu trữ',
    example: 'Old files are stored in the archive.',
    exampleTranslation: 'File cũ được lưu trữ trong kho lưu trữ.',
    level: 'intermediate',
    topic: 'Documents',
  },
  {
    id: 'v264i',
    word: 'confidentiality',
    pronunciation: '/ˌkɒnfɪˌdenʃiˈæləti/',
    partOfSpeech: 'noun',
    meaning: 'tính bảo mật',
    example: 'We ensure complete confidentiality.',
    exampleTranslation: 'Chúng tôi đảm bảo bảo mật hoàn toàn.',
    level: 'intermediate',
    topic: 'Documents',
  },
  {
    id: 'v265i',
    word: 'copyright',
    pronunciation: '/ˈkɒpiraɪt/',
    partOfSpeech: 'noun',
    meaning: 'bản quyền',
    example: 'This material is protected by copyright.',
    exampleTranslation: 'Tài liệu này được bảo vệ bản quyền.',
    level: 'intermediate',
    topic: 'Legal',
  },
  {
    id: 'v266i',
    word: 'trademark',
    pronunciation: '/ˈtreɪdmɑːk/',
    partOfSpeech: 'noun',
    meaning: 'nhãn hiệu',
    example: 'Our logo is a registered trademark.',
    exampleTranslation: 'Logo của chúng tôi là nhãn hiệu đã đăng ký.',
    level: 'intermediate',
    topic: 'Legal',
  },
  {
    id: 'v267i',
    word: 'patent',
    pronunciation: '/ˈpætnt/',
    partOfSpeech: 'noun',
    meaning: 'bằng sáng chế',
    example: 'We filed a patent for the invention.',
    exampleTranslation: 'Chúng tôi đã nộp bằng sáng chế cho phát minh.',
    level: 'intermediate',
    topic: 'Legal',
  },
  // Facilities & Equipment
  {
    id: 'v268i',
    word: 'facility',
    pronunciation: '/fəˈsɪləti/',
    partOfSpeech: 'noun',
    meaning: 'cơ sở vật chất',
    example: 'Our facilities are state-of-the-art.',
    exampleTranslation: 'Cơ sở vật chất của chúng tôi hiện đại.',
    level: 'intermediate',
    topic: 'Facilities',
  },
  {
    id: 'v269i',
    word: 'equipment',
    pronunciation: '/ɪˈkwɪpmənt/',
    partOfSpeech: 'noun',
    meaning: 'thiết bị',
    example: 'We need new office equipment.',
    exampleTranslation: 'Chúng ta cần thiết bị văn phòng mới.',
    level: 'intermediate',
    topic: 'Facilities',
  },
  {
    id: 'v270i',
    word: 'maintenance',
    pronunciation: '/ˈmeɪntənəns/',
    partOfSpeech: 'noun',
    meaning: 'bảo trì',
    example: 'Regular maintenance is essential.',
    exampleTranslation: 'Bảo trì thường xuyên là cần thiết.',
    level: 'intermediate',
    topic: 'Facilities',
  },
  {
    id: 'v271i',
    word: 'renovation',
    pronunciation: '/ˌrenəˈveɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'cải tạo',
    example: 'The office is under renovation.',
    exampleTranslation: 'Văn phòng đang được cải tạo.',
    level: 'intermediate',
    topic: 'Facilities',
  },
  {
    id: 'v272i',
    word: 'installation',
    pronunciation: '/ˌɪnstəˈleɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'lắp đặt',
    example: 'The installation will take 2 days.',
    exampleTranslation: 'Việc lắp đặt sẽ mất 2 ngày.',
    level: 'intermediate',
    topic: 'Facilities',
  },
  {
    id: 'v273i',
    word: 'upgrade',
    pronunciation: '/ˈʌpɡreɪd/',
    partOfSpeech: 'noun/verb',
    meaning: 'nâng cấp',
    example: 'We need to upgrade our systems.',
    exampleTranslation: 'Chúng ta cần nâng cấp hệ thống.',
    level: 'intermediate',
    topic: 'Technology',
  },
  {
    id: 'v274i',
    word: 'malfunction',
    pronunciation: '/ˌmælˈfʌŋkʃn/',
    partOfSpeech: 'noun/verb',
    meaning: 'trục trặc',
    example: 'The printer is malfunctioning.',
    exampleTranslation: 'Máy in bị trục trặc.',
    level: 'intermediate',
    topic: 'Technology',
  },
  {
    id: 'v275i',
    word: 'troubleshoot',
    pronunciation: '/ˈtrʌblʃuːt/',
    partOfSpeech: 'verb',
    meaning: 'khắc phục sự cố',
    example: 'Can you troubleshoot this issue?',
    exampleTranslation: 'Bạn có thể khắc phục sự cố này không?',
    level: 'intermediate',
    topic: 'Technology',
  },
  {
    id: 'v276i',
    word: 'compatible',
    pronunciation: '/kəmˈpætəbl/',
    partOfSpeech: 'adjective',
    meaning: 'tương thích',
    example: 'Is this software compatible with Mac?',
    exampleTranslation: 'Phần mềm này có tương thích với Mac không?',
    level: 'intermediate',
    topic: 'Technology',
  },
  {
    id: 'v277i',
    word: 'configure',
    pronunciation: '/kənˈfɪɡə(r)/',
    partOfSpeech: 'verb',
    meaning: 'cấu hình',
    example: 'We need to configure the settings.',
    exampleTranslation: 'Chúng ta cần cấu hình các thiết lập.',
    level: 'intermediate',
    topic: 'Technology',
  },
  // Miscellaneous Business Terms
  {
    id: 'v278i',
    word: 'circumstance',
    pronunciation: '/ˈsɜːkəmstəns/',
    partOfSpeech: 'noun',
    meaning: 'hoàn cảnh',
    example: 'Under the circumstances, we must act quickly.',
    exampleTranslation: 'Trong hoàn cảnh này, chúng ta phải hành động nhanh.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v279i',
    word: 'alternative',
    pronunciation: '/ɔːlˈtɜːnətɪv/',
    partOfSpeech: 'noun/adjective',
    meaning: 'thay thế',
    example: 'Do we have an alternative solution?',
    exampleTranslation: 'Chúng ta có giải pháp thay thế không?',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v280i',
    word: 'consequence',
    pronunciation: '/ˈkɒnsɪkwəns/',
    partOfSpeech: 'noun',
    meaning: 'hậu quả',
    example: 'Consider the consequences of this decision.',
    exampleTranslation: 'Xem xét hậu quả của quyết định này.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v281i',
    word: 'anticipate',
    pronunciation: '/ænˈtɪsɪpeɪt/',
    partOfSpeech: 'verb',
    meaning: 'dự đoán',
    example: 'We anticipate strong sales this quarter.',
    exampleTranslation: 'Chúng tôi dự đoán doanh số mạnh quý này.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v282i',
    word: 'accommodate',
    pronunciation: '/əˈkɒmədeɪt/',
    partOfSpeech: 'verb',
    meaning: 'điều chỉnh / đáp ứng',
    example: 'We can accommodate your request.',
    exampleTranslation: 'Chúng tôi có thể đáp ứng yêu cầu của bạn.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v283i',
    word: 'coordinate',
    pronunciation: '/kəʊˈɔːdɪneɪt/',
    partOfSpeech: 'verb',
    meaning: 'phối hợp',
    example: 'We need to coordinate our efforts.',
    exampleTranslation: 'Chúng ta cần phối hợp nỗ lực.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v284i',
    word: 'facilitate',
    pronunciation: '/fəˈsɪlɪteɪt/',
    partOfSpeech: 'verb',
    meaning: 'tạo điều kiện',
    example: 'This will facilitate the process.',
    exampleTranslation: 'Điều này sẽ tạo điều kiện cho quy trình.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v285i',
    word: 'participate',
    pronunciation: '/pɑːˈtɪsɪpeɪt/',
    partOfSpeech: 'verb',
    meaning: 'tham gia',
    example: 'Everyone should participate in the discussion.',
    exampleTranslation: 'Mọi người nên tham gia thảo luận.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v286i',
    word: 'contribute',
    pronunciation: '/kənˈtrɪbjuːt/',
    partOfSpeech: 'verb',
    meaning: 'đóng góp',
    example: 'Everyone can contribute ideas.',
    exampleTranslation: 'Mọi người có thể đóng góp ý tưởng.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v287i',
    word: 'acknowledge',
    pronunciation: '/əkˈnɒlɪdʒ/',
    partOfSpeech: 'verb',
    meaning: 'công nhận / xác nhận',
    example: 'Please acknowledge receipt of this email.',
    exampleTranslation: 'Vui lòng xác nhận đã nhận email này.',
    level: 'intermediate',
    topic: 'Communication',
  },
  {
    id: 'v288i',
    word: 'demonstrate',
    pronunciation: '/ˈdemənstreɪt/',
    partOfSpeech: 'verb',
    meaning: 'chứng minh / trình diễn',
    example: 'Let me demonstrate how it works.',
    exampleTranslation: 'Để tôi trình diễn cách nó hoạt động.',
    level: 'intermediate',
    topic: 'Communication',
  },
  {
    id: 'v289i',
    word: 'recommend',
    pronunciation: '/ˌrekəˈmend/',
    partOfSpeech: 'verb',
    meaning: 'đề xuất / giới thiệu',
    example: 'I highly recommend this approach.',
    exampleTranslation: 'Tôi rất khuyến nghị cách tiếp cận này.',
    level: 'intermediate',
    topic: 'Communication',
  },
  {
    id: 'v290i',
    word: 'determine',
    pronunciation: '/dɪˈtɜːmɪn/',
    partOfSpeech: 'verb',
    meaning: 'xác định',
    example: 'We need to determine the cause.',
    exampleTranslation: 'Chúng ta cần xác định nguyên nhân.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v291i',
    word: 'establish',
    pronunciation: '/ɪˈstæblɪʃ/',
    partOfSpeech: 'verb',
    meaning: 'thiết lập',
    example: 'We need to establish clear guidelines.',
    exampleTranslation: 'Chúng ta cần thiết lập hướng dẫn rõ ràng.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v292i',
    word: 'maintain',
    pronunciation: '/meɪnˈteɪn/',
    partOfSpeech: 'verb',
    meaning: 'duy trì',
    example: 'We must maintain quality standards.',
    exampleTranslation: 'Chúng ta phải duy trì tiêu chuẩn chất lượng.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v293i',
    word: 'generate',
    pronunciation: '/ˈdʒenəreɪt/',
    partOfSpeech: 'verb',
    meaning: 'tạo ra',
    example: 'This campaign will generate more leads.',
    exampleTranslation: 'Chiến dịch này sẽ tạo ra nhiều khách hàng tiềm năng hơn.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v294i',
    word: 'exceed',
    pronunciation: '/ɪkˈsiːd/',
    partOfSpeech: 'verb',
    meaning: 'vượt quá',
    example: 'We exceeded our target by 20%.',
    exampleTranslation: 'Chúng tôi vượt mục tiêu 20%.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v295i',
    word: 'sufficient',
    pronunciation: '/səˈfɪʃnt/',
    partOfSpeech: 'adjective',
    meaning: 'đủ',
    example: 'Do we have sufficient resources?',
    exampleTranslation: 'Chúng ta có đủ nguồn lực không?',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v296i',
    word: 'adequate',
    pronunciation: '/ˈædɪkwət/',
    partOfSpeech: 'adjective',
    meaning: 'thỏa đáng',
    example: 'The response was adequate.',
    exampleTranslation: 'Phản hồi là thỏa đáng.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v297i',
    word: 'precise',
    pronunciation: '/prɪˈsaɪs/',
    partOfSpeech: 'adjective',
    meaning: 'chính xác',
    example: 'We need precise measurements.',
    exampleTranslation: 'Chúng ta cần đo lường chính xác.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v298i',
    word: 'thorough',
    pronunciation: '/ˈθʌrə/',
    partOfSpeech: 'adjective',
    meaning: 'kỹ lưỡng',
    example: 'Please conduct a thorough investigation.',
    exampleTranslation: 'Vui lòng tiến hành điều tra kỹ lưỡng.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v299i',
    word: 'comprehensive',
    pronunciation: '/ˌkɒmprɪˈhensɪv/',
    partOfSpeech: 'adjective',
    meaning: 'toàn diện',
    example: 'We offer comprehensive training.',
    exampleTranslation: 'Chúng tôi cung cấp đào tạo toàn diện.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v300i',
    word: 'strategic',
    pronunciation: '/strəˈtiːdʒɪk/',
    partOfSpeech: 'adjective',
    meaning: 'chiến lược',
    example: 'This is a strategic decision.',
    exampleTranslation: 'Đây là quyết định chiến lược.',
    level: 'intermediate',
    topic: 'Strategy',
  },
  // Risk & Safety
  {
    id: 'v301i',
    word: 'hazard',
    pronunciation: '/ˈhæzəd/',
    partOfSpeech: 'noun',
    meaning: 'nguy hiểm',
    example: 'This is a safety hazard.',
    exampleTranslation: 'Đây là mối nguy hiểm an toàn.',
    level: 'intermediate',
    topic: 'Safety',
  },
  {
    id: 'v302i',
    word: 'emergency',
    pronunciation: '/ɪˈmɜːdʒənsi/',
    partOfSpeech: 'noun',
    meaning: 'khẩn cấp',
    example: 'In case of emergency, call 911.',
    exampleTranslation: 'Trong trường hợp khẩn cấp, gọi 911.',
    level: 'intermediate',
    topic: 'Safety',
  },
  {
    id: 'v303i',
    word: 'precaution',
    pronunciation: '/prɪˈkɔːʃn/',
    partOfSpeech: 'noun',
    meaning: 'phòng ngừa',
    example: 'Take all necessary precautions.',
    exampleTranslation: 'Thực hiện tất cả biện pháp phòng ngừa cần thiết.',
    level: 'intermediate',
    topic: 'Safety',
  },
  {
    id: 'v304i',
    word: 'procedure',
    pronunciation: '/prəˈsiːdʒə(r)/',
    partOfSpeech: 'noun',
    meaning: 'quy trình',
    example: 'Follow the safety procedures.',
    exampleTranslation: 'Tuân theo quy trình an toàn.',
    level: 'intermediate',
    topic: 'Safety',
  },
  {
    id: 'v305i',
    word: 'incident',
    pronunciation: '/ˈɪnsɪdənt/',
    partOfSpeech: 'noun',
    meaning: 'sự cố',
    example: 'Please report any incidents immediately.',
    exampleTranslation: 'Vui lòng báo cáo bất kỳ sự cố nào ngay lập tức.',
    level: 'intermediate',
    topic: 'Safety',
  },
  {
    id: 'v306i',
    word: 'evacuate',
    pronunciation: '/ɪˈvækjueɪt/',
    partOfSpeech: 'verb',
    meaning: 'sơ tán',
    example: 'We need to evacuate the building.',
    exampleTranslation: 'Chúng ta cần sơ tán tòa nhà.',
    level: 'intermediate',
    topic: 'Safety',
  },
  {
    id: 'v307i',
    word: 'prevention',
    pronunciation: '/prɪˈvenʃn/',
    partOfSpeech: 'noun',
    meaning: 'phòng ngừa',
    example: 'Prevention is better than cure.',
    exampleTranslation: 'Phòng bệnh hơn chữa bệnh.',
    level: 'intermediate',
    topic: 'Safety',
  },
  {
    id: 'v308i',
    word: 'insurance',
    pronunciation: '/ɪnˈʃʊərəns/',
    partOfSpeech: 'noun',
    meaning: 'bảo hiểm',
    example: 'All employees have health insurance.',
    exampleTranslation: 'Tất cả nhân viên có bảo hiểm y tế.',
    level: 'intermediate',
    topic: 'Benefits',
  },
  {
    id: 'v309i',
    word: 'coverage',
    pronunciation: '/ˈkʌvərɪdʒ/',
    partOfSpeech: 'noun',
    meaning: 'phạm vi bảo hiểm',
    example: 'What does your insurance coverage include?',
    exampleTranslation: 'Bảo hiểm của bạn bao gồm những gì?',
    level: 'intermediate',
    topic: 'Benefits',
  },
  {
    id: 'v310i',
    word: 'liability',
    pronunciation: '/ˌlaɪəˈbɪləti/',
    partOfSpeech: 'noun',
    meaning: 'trách nhiệm pháp lý',
    example: 'The company has limited liability.',
    exampleTranslation: 'Công ty có trách nhiệm hữu hạn.',
    level: 'intermediate',
    topic: 'Legal',
  },
  // Schedules & Planning
  {
    id: 'v311i',
    word: 'itinerary',
    pronunciation: '/aɪˈtɪnərəri/',
    partOfSpeech: 'noun',
    meaning: 'lịch trình',
    example: 'Here is your travel itinerary.',
    exampleTranslation: 'Đây là lịch trình du lịch của bạn.',
    level: 'intermediate',
    topic: 'Travel',
  },
  {
    id: 'v312i',
    word: 'duration',
    pronunciation: '/djuˈreɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'khoảng thời gian',
    example: 'What is the duration of the course?',
    exampleTranslation: 'Thời lượng khóa học là bao lâu?',
    level: 'intermediate',
    topic: 'Time',
  },
  {
    id: 'v313i',
    word: 'extension',
    pronunciation: '/ɪkˈstenʃn/',
    partOfSpeech: 'noun',
    meaning: 'gia hạn',
    example: 'Can we get an extension on the deadline?',
    exampleTranslation: 'Chúng ta có thể gia hạn thời hạn không?',
    level: 'intermediate',
    topic: 'Time',
  },
  {
    id: 'v314i',
    word: 'interval',
    pronunciation: '/ˈɪntəvl/',
    partOfSpeech: 'noun',
    meaning: 'khoảng thời gian ngắn',
    example: 'There will be a 15-minute interval.',
    exampleTranslation: 'Sẽ có giờ nghỉ 15 phút.',
    level: 'intermediate',
    topic: 'Time',
  },
  {
    id: 'v315i',
    word: 'consecutive',
    pronunciation: '/kənˈsekjətɪv/',
    partOfSpeech: 'adjective',
    meaning: 'liên tiếp',
    example: 'We worked for three consecutive days.',
    exampleTranslation: 'Chúng tôi làm việc ba ngày liên tiếp.',
    level: 'intermediate',
    topic: 'Time',
  },
  {
    id: 'v316i',
    word: 'simultaneous',
    pronunciation: '/ˌsɪmlˈteɪniəs/',
    partOfSpeech: 'adjective',
    meaning: 'đồng thời',
    example: 'We need simultaneous translation.',
    exampleTranslation: 'Chúng ta cần phiên dịch đồng thời.',
    level: 'intermediate',
    topic: 'Time',
  },
  {
    id: 'v317i',
    word: 'permanent',
    pronunciation: '/ˈpɜːmənənt/',
    partOfSpeech: 'adjective',
    meaning: 'vĩnh viễn',
    example: 'This is a permanent position.',
    exampleTranslation: 'Đây là vị trí lâu dài.',
    level: 'intermediate',
    topic: 'Employment',
  },
  {
    id: 'v318i',
    word: 'temporary',
    pronunciation: '/ˈtemprəri/',
    partOfSpeech: 'adjective',
    meaning: 'tạm thời',
    example: 'We need temporary staff.',
    exampleTranslation: 'Chúng ta cần nhân viên tạm thời.',
    level: 'intermediate',
    topic: 'Employment',
  },
  {
    id: 'v319i',
    word: 'flexible',
    pronunciation: '/ˈfleksəbl/',
    partOfSpeech: 'adjective',
    meaning: 'linh hoạt',
    example: 'We offer flexible working hours.',
    exampleTranslation: 'Chúng tôi cung cấp giờ làm việc linh hoạt.',
    level: 'intermediate',
    topic: 'Employment',
  },
  {
    id: 'v320i',
    word: 'mandatory',
    pronunciation: '/ˈmændətəri/',
    partOfSpeech: 'adjective',
    meaning: 'bắt buộc',
    example: 'Attendance is mandatory.',
    exampleTranslation: 'Tham dự là bắt buộc.',
    level: 'intermediate',
    topic: 'Business',
  },
  // Professional Development
  {
    id: 'v321i',
    word: 'competence',
    pronunciation: '/ˈkɒmpɪtəns/',
    partOfSpeech: 'noun',
    meaning: 'năng lực',
    example: 'She has demonstrated her competence.',
    exampleTranslation: 'Cô ấy đã chứng minh năng lực của mình.',
    level: 'intermediate',
    topic: 'Professional',
  },
  {
    id: 'v322i',
    word: 'expertise',
    pronunciation: '/ˌekspɜːˈtiːz/',
    partOfSpeech: 'noun',
    meaning: 'chuyên môn',
    example: 'We need someone with technical expertise.',
    exampleTranslation: 'Chúng ta cần người có chuyên môn kỹ thuật.',
    level: 'intermediate',
    topic: 'Professional',
  },
  {
    id: 'v323i',
    word: 'proficiency',
    pronunciation: '/prəˈfɪʃnsi/',
    partOfSpeech: 'noun',
    meaning: 'thành thạo',
    example: 'English proficiency is required.',
    exampleTranslation: 'Yêu cầu thành thạo tiếng Anh.',
    level: 'intermediate',
    topic: 'Professional',
  },
  {
    id: 'v324i',
    word: 'proficient',
    pronunciation: '/prəˈfɪʃnt/',
    partOfSpeech: 'adjective',
    meaning: 'thành thạo',
    example: 'She is proficient in three languages.',
    exampleTranslation: 'Cô ấy thành thạo ba ngôn ngữ.',
    level: 'intermediate',
    topic: 'Professional',
  },
  {
    id: 'v325i',
    word: 'initiative',
    pronunciation: '/ɪˈnɪʃətɪv/',
    partOfSpeech: 'noun',
    meaning: 'chủ động',
    example: 'He shows great initiative.',
    exampleTranslation: 'Anh ấy thể hiện tính chủ động tốt.',
    level: 'intermediate',
    topic: 'Professional',
  },
  {
    id: 'v326i',
    word: 'diligent',
    pronunciation: '/ˈdɪlɪdʒənt/',
    partOfSpeech: 'adjective',
    meaning: 'siêng năng',
    example: 'She is a diligent worker.',
    exampleTranslation: 'Cô ấy là người làm việc siêng năng.',
    level: 'intermediate',
    topic: 'Professional',
  },
  {
    id: 'v327i',
    word: 'meticulous',
    pronunciation: '/məˈtɪkjələs/',
    partOfSpeech: 'adjective',
    meaning: 'tỉ mỉ',
    example: 'He is meticulous about details.',
    exampleTranslation: 'Anh ấy rất tỉ mỉ về chi tiết.',
    level: 'intermediate',
    topic: 'Professional',
  },
  {
    id: 'v328i',
    word: 'punctual',
    pronunciation: '/ˈpʌŋktʃuəl/',
    partOfSpeech: 'adjective',
    meaning: 'đúng giờ',
    example: 'Please be punctual for meetings.',
    exampleTranslation: 'Vui lòng đúng giờ trong các cuộc họp.',
    level: 'intermediate',
    topic: 'Professional',
  },
  {
    id: 'v329i',
    word: 'reliable',
    pronunciation: '/rɪˈlaɪəbl/',
    partOfSpeech: 'adjective',
    meaning: 'đáng tin cậy',
    example: 'He is a reliable employee.',
    exampleTranslation: 'Anh ấy là nhân viên đáng tin cậy.',
    level: 'intermediate',
    topic: 'Professional',
  },
  {
    id: 'v330i',
    word: 'accountable',
    pronunciation: '/əˈkaʊntəbl/',
    partOfSpeech: 'adjective',
    meaning: 'có trách nhiệm giải trình',
    example: 'Managers are accountable for their teams.',
    exampleTranslation: 'Quản lý phải chịu trách nhiệm về đội của mình.',
    level: 'intermediate',
    topic: 'Professional',
  },
  // Problem Solving
  {
    id: 'v331i',
    word: 'challenge',
    pronunciation: '/ˈtʃælɪndʒ/',
    partOfSpeech: 'noun/verb',
    meaning: 'thách thức',
    example: 'This project presents many challenges.',
    exampleTranslation: 'Dự án này có nhiều thách thức.',
    level: 'intermediate',
    topic: 'Problem Solving',
  },
  {
    id: 'v332i',
    word: 'obstacle',
    pronunciation: '/ˈɒbstəkl/',
    partOfSpeech: 'noun',
    meaning: 'trở ngại',
    example: 'We need to overcome these obstacles.',
    exampleTranslation: 'Chúng ta cần vượt qua những trở ngại này.',
    level: 'intermediate',
    topic: 'Problem Solving',
  },
  {
    id: 'v333i',
    word: 'barrier',
    pronunciation: '/ˈbæriə(r)/',
    partOfSpeech: 'noun',
    meaning: 'rào cản',
    example: 'Language can be a barrier.',
    exampleTranslation: 'Ngôn ngữ có thể là rào cản.',
    level: 'intermediate',
    topic: 'Problem Solving',
  },
  {
    id: 'v334i',
    word: 'limitation',
    pronunciation: '/ˌlɪmɪˈteɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'hạn chế',
    example: 'Every system has its limitations.',
    exampleTranslation: 'Mọi hệ thống đều có hạn chế.',
    level: 'intermediate',
    topic: 'Problem Solving',
  },
  {
    id: 'v335i',
    word: 'constraint',
    pronunciation: '/kənˈstreɪnt/',
    partOfSpeech: 'noun',
    meaning: 'ràng buộc',
    example: 'Budget constraints are a concern.',
    exampleTranslation: 'Ràng buộc ngân sách là mối quan tâm.',
    level: 'intermediate',
    topic: 'Problem Solving',
  },
  {
    id: 'v336i',
    word: 'overcome',
    pronunciation: '/ˌəʊvəˈkʌm/',
    partOfSpeech: 'verb',
    meaning: 'vượt qua',
    example: 'We can overcome this difficulty.',
    exampleTranslation: 'Chúng ta có thể vượt qua khó khăn này.',
    level: 'intermediate',
    topic: 'Problem Solving',
  },
  {
    id: 'v337i',
    word: 'resolve',
    pronunciation: '/rɪˈzɒlv/',
    partOfSpeech: 'verb',
    meaning: 'giải quyết',
    example: 'We need to resolve this issue quickly.',
    exampleTranslation: 'Chúng ta cần giải quyết vấn đề này nhanh chóng.',
    level: 'intermediate',
    topic: 'Problem Solving',
  },
  {
    id: 'v338i',
    word: 'address',
    pronunciation: '/əˈdres/',
    partOfSpeech: 'verb',
    meaning: 'giải quyết / đề cập',
    example: 'We must address customer concerns.',
    exampleTranslation: 'Chúng ta phải giải quyết mối quan tâm của khách hàng.',
    level: 'intermediate',
    topic: 'Problem Solving',
  },
  {
    id: 'v339i',
    word: 'tackle',
    pronunciation: '/ˈtækl/',
    partOfSpeech: 'verb',
    meaning: 'giải quyết',
    example: 'Let\'s tackle this problem together.',
    exampleTranslation: 'Hãy cùng giải quyết vấn đề này.',
    level: 'intermediate',
    topic: 'Problem Solving',
  },
  {
    id: 'v340i',
    word: 'investigate',
    pronunciation: '/ɪnˈvestɪɡeɪt/',
    partOfSpeech: 'verb',
    meaning: 'điều tra',
    example: 'We will investigate the complaint.',
    exampleTranslation: 'Chúng tôi sẽ điều tra khiếu nại.',
    level: 'intermediate',
    topic: 'Problem Solving',
  },
  // Data & Analysis
  {
    id: 'v341i',
    word: 'statistics',
    pronunciation: '/stəˈtɪstɪks/',
    partOfSpeech: 'noun',
    meaning: 'thống kê',
    example: 'The statistics show a positive trend.',
    exampleTranslation: 'Thống kê cho thấy xu hướng tích cực.',
    level: 'intermediate',
    topic: 'Data',
  },
  {
    id: 'v342i',
    word: 'data',
    pronunciation: '/ˈdeɪtə/',
    partOfSpeech: 'noun',
    meaning: 'dữ liệu',
    example: 'We need to collect more data.',
    exampleTranslation: 'Chúng ta cần thu thập thêm dữ liệu.',
    level: 'intermediate',
    topic: 'Data',
  },
  {
    id: 'v343i',
    word: 'percentage',
    pronunciation: '/pəˈsentɪdʒ/',
    partOfSpeech: 'noun',
    meaning: 'tỷ lệ phần trăm',
    example: 'What percentage of sales came from online?',
    exampleTranslation: 'Tỷ lệ phần trăm doanh số từ online là bao nhiêu?',
    level: 'intermediate',
    topic: 'Data',
  },
  {
    id: 'v344i',
    word: 'proportion',
    pronunciation: '/prəˈpɔːʃn/',
    partOfSpeech: 'noun',
    meaning: 'tỷ lệ',
    example: 'A large proportion of our budget goes to marketing.',
    exampleTranslation: 'Một tỷ lệ lớn ngân sách của chúng tôi dành cho marketing.',
    level: 'intermediate',
    topic: 'Data',
  },
  {
    id: 'v345i',
    word: 'estimate',
    pronunciation: '/ˈestɪmət/',
    partOfSpeech: 'noun/verb',
    meaning: 'ước tính',
    example: 'Can you estimate the cost?',
    exampleTranslation: 'Bạn có thể ước tính chi phí không?',
    level: 'intermediate',
    topic: 'Data',
  },
  {
    id: 'v346i',
    word: 'calculate',
    pronunciation: '/ˈkælkjuleɪt/',
    partOfSpeech: 'verb',
    meaning: 'tính toán',
    example: 'Calculate the total expenses.',
    exampleTranslation: 'Tính tổng chi phí.',
    level: 'intermediate',
    topic: 'Data',
  },
  {
    id: 'v347i',
    word: 'measure',
    pronunciation: '/ˈmeʒə(r)/',
    partOfSpeech: 'verb/noun',
    meaning: 'đo lường',
    example: 'We measure success by customer satisfaction.',
    exampleTranslation: 'Chúng tôi đo lường thành công bằng sự hài lòng của khách hàng.',
    level: 'intermediate',
    topic: 'Data',
  },
  {
    id: 'v348i',
    word: 'interpret',
    pronunciation: '/ɪnˈtɜːprət/',
    partOfSpeech: 'verb',
    meaning: 'giải thích / phiên dịch',
    example: 'How do you interpret these results?',
    exampleTranslation: 'Bạn giải thích các kết quả này như thế nào?',
    level: 'intermediate',
    topic: 'Data',
  },
  {
    id: 'v349i',
    word: 'compile',
    pronunciation: '/kəmˈpaɪl/',
    partOfSpeech: 'verb',
    meaning: 'biên soạn',
    example: 'Please compile a list of attendees.',
    exampleTranslation: 'Vui lòng biên soạn danh sách người tham dự.',
    level: 'intermediate',
    topic: 'Data',
  },
  {
    id: 'v350i',
    word: 'correspond',
    pronunciation: '/ˌkɒrəˈspɒnd/',
    partOfSpeech: 'verb',
    meaning: 'tương ứng / liên lạc',
    example: 'These figures correspond to last year\'s data.',
    exampleTranslation: 'Những con số này tương ứng với dữ liệu năm ngoái.',
    level: 'intermediate',
    topic: 'Data',
  },
  // Negotiation & Contracts
  {
    id: 'v351i',
    word: 'compromise',
    pronunciation: '/ˈkɒmprəmaɪz/',
    partOfSpeech: 'noun/verb',
    meaning: 'thỏa hiệp',
    example: 'Both sides reached a compromise.',
    exampleTranslation: 'Cả hai bên đạt được thỏa hiệp.',
    level: 'intermediate',
    topic: 'Negotiation',
  },
  {
    id: 'v352i',
    word: 'concession',
    pronunciation: '/kənˈseʃn/',
    partOfSpeech: 'noun',
    meaning: 'nhượng bộ',
    example: 'We made some concessions during negotiation.',
    exampleTranslation: 'Chúng tôi nhượng bộ một số điểm trong đàm phán.',
    level: 'intermediate',
    topic: 'Negotiation',
  },
  {
    id: 'v353i',
    word: 'mutual',
    pronunciation: '/ˈmjuːtʃuəl/',
    partOfSpeech: 'adjective',
    meaning: 'lẫn nhau',
    example: 'This is a mutual agreement.',
    exampleTranslation: 'Đây là thỏa thuận hai bên.',
    level: 'intermediate',
    topic: 'Negotiation',
  },
  {
    id: 'v354i',
    word: 'binding',
    pronunciation: '/ˈbaɪndɪŋ/',
    partOfSpeech: 'adjective',
    meaning: 'ràng buộc',
    example: 'This is a legally binding contract.',
    exampleTranslation: 'Đây là hợp đồng ràng buộc về mặt pháp lý.',
    level: 'intermediate',
    topic: 'Contracts',
  },
  {
    id: 'v355i',
    word: 'enforce',
    pronunciation: '/ɪnˈfɔːs/',
    partOfSpeech: 'verb',
    meaning: 'thực thi',
    example: 'We will enforce the new policy.',
    exampleTranslation: 'Chúng tôi sẽ thực thi chính sách mới.',
    level: 'intermediate',
    topic: 'Contracts',
  },
  {
    id: 'v356i',
    word: 'violate',
    pronunciation: '/ˈvaɪəleɪt/',
    partOfSpeech: 'verb',
    meaning: 'vi phạm',
    example: 'This violates the terms of the contract.',
    exampleTranslation: 'Điều này vi phạm các điều khoản của hợp đồng.',
    level: 'intermediate',
    topic: 'Contracts',
  },
  {
    id: 'v357i',
    word: 'breach',
    pronunciation: '/briːtʃ/',
    partOfSpeech: 'noun/verb',
    meaning: 'vi phạm',
    example: 'This is a breach of contract.',
    exampleTranslation: 'Đây là vi phạm hợp đồng.',
    level: 'intermediate',
    topic: 'Contracts',
  },
  {
    id: 'v358i',
    word: 'renew',
    pronunciation: '/rɪˈnjuː/',
    partOfSpeech: 'verb',
    meaning: 'gia hạn',
    example: 'We need to renew the contract.',
    exampleTranslation: 'Chúng ta cần gia hạn hợp đồng.',
    level: 'intermediate',
    topic: 'Contracts',
  },
  {
    id: 'v359i',
    word: 'expire',
    pronunciation: '/ɪkˈspaɪə(r)/',
    partOfSpeech: 'verb',
    meaning: 'hết hạn',
    example: 'The contract will expire next month.',
    exampleTranslation: 'Hợp đồng sẽ hết hạn tháng sau.',
    level: 'intermediate',
    topic: 'Contracts',
  },
  {
    id: 'v360i',
    word: 'cancellation',
    pronunciation: '/ˌkænsəˈleɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'hủy bỏ',
    example: 'There is a cancellation fee.',
    exampleTranslation: 'Có phí hủy.',
    level: 'intermediate',
    topic: 'Contracts',
  },
  // Communication Skills
  {
    id: 'v361i',
    word: 'articulate',
    pronunciation: '/ɑːˈtɪkjuleɪt/',
    partOfSpeech: 'verb/adjective',
    meaning: 'diễn đạt rõ ràng',
    example: 'She can articulate her ideas well.',
    exampleTranslation: 'Cô ấy có thể diễn đạt ý tưởng rõ ràng.',
    level: 'intermediate',
    topic: 'Communication',
  },
  {
    id: 'v362i',
    word: 'persuade',
    pronunciation: '/pəˈsweɪd/',
    partOfSpeech: 'verb',
    meaning: 'thuyết phục',
    example: 'We need to persuade them to invest.',
    exampleTranslation: 'Chúng ta cần thuyết phục họ đầu tư.',
    level: 'intermediate',
    topic: 'Communication',
  },
  {
    id: 'v363i',
    word: 'convince',
    pronunciation: '/kənˈvɪns/',
    partOfSpeech: 'verb',
    meaning: 'thuyết phục',
    example: 'I am convinced this is the right decision.',
    exampleTranslation: 'Tôi tin chắc đây là quyết định đúng.',
    level: 'intermediate',
    topic: 'Communication',
  },
  {
    id: 'v364i',
    word: 'negotiate',
    pronunciation: '/nɪˈɡəʊʃieɪt/',
    partOfSpeech: 'verb',
    meaning: 'đàm phán',
    example: 'We are negotiating better terms.',
    exampleTranslation: 'Chúng tôi đang đàm phán các điều khoản tốt hơn.',
    level: 'intermediate',
    topic: 'Communication',
  },
  {
    id: 'v365i',
    word: 'consult',
    pronunciation: '/kənˈsʌlt/',
    partOfSpeech: 'verb',
    meaning: 'tư vấn',
    example: 'Please consult with your supervisor.',
    exampleTranslation: 'Vui lòng tham khảo ý kiến giám sát viên.',
    level: 'intermediate',
    topic: 'Communication',
  },
  {
    id: 'v366i',
    word: 'advise',
    pronunciation: '/ədˈvaɪz/',
    partOfSpeech: 'verb',
    meaning: 'khuyên bảo',
    example: 'I would advise against that approach.',
    exampleTranslation: 'Tôi khuyên không nên làm theo cách đó.',
    level: 'intermediate',
    topic: 'Communication',
  },
  {
    id: 'v367i',
    word: 'confirm',
    pronunciation: '/kənˈfɜːm/',
    partOfSpeech: 'verb',
    meaning: 'xác nhận',
    example: 'Please confirm your attendance.',
    exampleTranslation: 'Vui lòng xác nhận sự tham dự.',
    level: 'intermediate',
    topic: 'Communication',
  },
  {
    id: 'v368i',
    word: 'decline',
    pronunciation: '/dɪˈklaɪn/',
    partOfSpeech: 'verb/noun',
    meaning: 'từ chối / suy giảm',
    example: 'I must decline your offer.',
    exampleTranslation: 'Tôi phải từ chối đề nghị của bạn.',
    level: 'intermediate',
    topic: 'Communication',
  },
  {
    id: 'v369i',
    word: 'approve',
    pronunciation: '/əˈpruːv/',
    partOfSpeech: 'verb',
    meaning: 'phê duyệt',
    example: 'The manager approved the budget.',
    exampleTranslation: 'Quản lý đã phê duyệt ngân sách.',
    level: 'intermediate',
    topic: 'Communication',
  },
  {
    id: 'v370i',
    word: 'reject',
    pronunciation: '/rɪˈdʒekt/',
    partOfSpeech: 'verb',
    meaning: 'từ chối',
    example: 'They rejected our proposal.',
    exampleTranslation: 'Họ đã từ chối đề xuất của chúng tôi.',
    level: 'intermediate',
    topic: 'Communication',
  },
  // Innovation & Development
  {
    id: 'v371i',
    word: 'innovation',
    pronunciation: '/ˌɪnəˈveɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'sự đổi mới',
    example: 'Innovation drives our company forward.',
    exampleTranslation: 'Đổi mới thúc đẩy công ty phát triển.',
    level: 'intermediate',
    topic: 'Innovation',
  },
  {
    id: 'v372i',
    word: 'breakthrough',
    pronunciation: '/ˈbreɪkθruː/',
    partOfSpeech: 'noun',
    meaning: 'đột phá',
    example: 'This is a major breakthrough.',
    exampleTranslation: 'Đây là một đột phá lớn.',
    level: 'intermediate',
    topic: 'Innovation',
  },
  {
    id: 'v373i',
    word: 'prototype',
    pronunciation: '/ˈprəʊtətaɪp/',
    partOfSpeech: 'noun',
    meaning: 'nguyên mẫu',
    example: 'We are testing the prototype.',
    exampleTranslation: 'Chúng tôi đang thử nghiệm nguyên mẫu.',
    level: 'intermediate',
    topic: 'Innovation',
  },
  {
    id: 'v374i',
    word: 'patent',
    pronunciation: '/ˈpætnt/',
    partOfSpeech: 'noun/verb',
    meaning: 'bằng sáng chế',
    example: 'We filed for a patent.',
    exampleTranslation: 'Chúng tôi đã nộp đơn xin bằng sáng chế.',
    level: 'intermediate',
    topic: 'Innovation',
  },
  {
    id: 'v375i',
    word: 'experiment',
    pronunciation: '/ɪkˈsperɪmənt/',
    partOfSpeech: 'noun/verb',
    meaning: 'thí nghiệm',
    example: 'We are experimenting with new methods.',
    exampleTranslation: 'Chúng tôi đang thí nghiệm các phương pháp mới.',
    level: 'intermediate',
    topic: 'Innovation',
  },
  {
    id: 'v376i',
    word: 'research',
    pronunciation: '/rɪˈsɜːtʃ/',
    partOfSpeech: 'noun/verb',
    meaning: 'nghiên cứu',
    example: 'Market research is essential.',
    exampleTranslation: 'Nghiên cứu thị trường là cần thiết.',
    level: 'intermediate',
    topic: 'Innovation',
  },
  {
    id: 'v377i',
    word: 'development',
    pronunciation: '/dɪˈveləpmənt/',
    partOfSpeech: 'noun',
    meaning: 'phát triển',
    example: 'Product development takes time.',
    exampleTranslation: 'Phát triển sản phẩm mất thời gian.',
    level: 'intermediate',
    topic: 'Innovation',
  },
  {
    id: 'v378i',
    word: 'methodology',
    pronunciation: '/ˌmeθəˈdɒlədʒi/',
    partOfSpeech: 'noun',
    meaning: 'phương pháp luận',
    example: 'Our methodology is proven effective.',
    exampleTranslation: 'Phương pháp luận của chúng tôi được chứng minh hiệu quả.',
    level: 'intermediate',
    topic: 'Innovation',
  },
  {
    id: 'v379i',
    word: 'framework',
    pronunciation: '/ˈfreɪmwɜːk/',
    partOfSpeech: 'noun',
    meaning: 'khung',
    example: 'We need a regulatory framework.',
    exampleTranslation: 'Chúng ta cần một khung quy định.',
    level: 'intermediate',
    topic: 'Innovation',
  },
  {
    id: 'v380i',
    word: 'approach',
    pronunciation: '/əˈprəʊtʃ/',
    partOfSpeech: 'noun/verb',
    meaning: 'cách tiếp cận',
    example: 'We need a different approach.',
    exampleTranslation: 'Chúng ta cần cách tiếp cận khác.',
    level: 'intermediate',
    topic: 'Strategy',
  },
  // Presentation & Reports
  {
    id: 'v381i',
    word: 'overview',
    pronunciation: '/ˈəʊvəvjuː/',
    partOfSpeech: 'noun',
    meaning: 'tổng quan',
    example: 'Let me give you an overview.',
    exampleTranslation: 'Để tôi cho bạn cái nhìn tổng quan.',
    level: 'intermediate',
    topic: 'Presentation',
  },
  {
    id: 'v382i',
    word: 'highlight',
    pronunciation: '/ˈhaɪlaɪt/',
    partOfSpeech: 'noun/verb',
    meaning: 'điểm nổi bật',
    example: 'I want to highlight these achievements.',
    exampleTranslation: 'Tôi muốn làm nổi bật những thành tích này.',
    level: 'intermediate',
    topic: 'Presentation',
  },
  {
    id: 'v383i',
    word: 'illustrate',
    pronunciation: '/ˈɪləstreɪt/',
    partOfSpeech: 'verb',
    meaning: 'minh họa',
    example: 'This chart illustrates the trend.',
    exampleTranslation: 'Biểu đồ này minh họa xu hướng.',
    level: 'intermediate',
    topic: 'Presentation',
  },
  {
    id: 'v384i',
    word: 'exhibit',
    pronunciation: '/ɪɡˈzɪbɪt/',
    partOfSpeech: 'verb/noun',
    meaning: 'trưng bày / triển lãm',
    example: 'The data exhibits a clear pattern.',
    exampleTranslation: 'Dữ liệu cho thấy một mô hình rõ ràng.',
    level: 'intermediate',
    topic: 'Presentation',
  },
  {
    id: 'v385i',
    word: 'visualize',
    pronunciation: '/ˈvɪʒuəlaɪz/',
    partOfSpeech: 'verb',
    meaning: 'hình dung',
    example: 'Try to visualize the final product.',
    exampleTranslation: 'Cố gắng hình dung sản phẩm cuối cùng.',
    level: 'intermediate',
    topic: 'Presentation',
  },
  {
    id: 'v386i',
    word: 'conclude',
    pronunciation: '/kənˈkluːd/',
    partOfSpeech: 'verb',
    meaning: 'kết luận',
    example: 'I would like to conclude with this point.',
    exampleTranslation: 'Tôi muốn kết luận với điểm này.',
    level: 'intermediate',
    topic: 'Presentation',
  },
  {
    id: 'v387i',
    word: 'imply',
    pronunciation: '/ɪmˈplaɪ/',
    partOfSpeech: 'verb',
    meaning: 'ngụ ý',
    example: 'What are you implying?',
    exampleTranslation: 'Bạn đang ngụ ý điều gì?',
    level: 'intermediate',
    topic: 'Communication',
  },
  {
    id: 'v388i',
    word: 'indicate',
    pronunciation: '/ˈɪndɪkeɪt/',
    partOfSpeech: 'verb',
    meaning: 'chỉ ra',
    example: 'The results indicate success.',
    exampleTranslation: 'Kết quả chỉ ra sự thành công.',
    level: 'intermediate',
    topic: 'Communication',
  },
  {
    id: 'v389i',
    word: 'suggest',
    pronunciation: '/səˈdʒest/',
    partOfSpeech: 'verb',
    meaning: 'đề xuất / gợi ý',
    example: 'I suggest we take a break.',
    exampleTranslation: 'Tôi đề nghị chúng ta nghỉ giải lao.',
    level: 'intermediate',
    topic: 'Communication',
  },
  {
    id: 'v390i',
    word: 'propose',
    pronunciation: '/prəˈpəʊz/',
    partOfSpeech: 'verb',
    meaning: 'đề xuất',
    example: 'I propose a different solution.',
    exampleTranslation: 'Tôi đề xuất giải pháp khác.',
    level: 'intermediate',
    topic: 'Communication',
  },
  // Customer Relations
  {
    id: 'v391i',
    word: 'loyalty',
    pronunciation: '/ˈlɔɪəlti/',
    partOfSpeech: 'noun',
    meaning: 'lòng trung thành',
    example: 'Customer loyalty is important.',
    exampleTranslation: 'Lòng trung thành của khách hàng rất quan trọng.',
    level: 'intermediate',
    topic: 'Customer Relations',
  },
  {
    id: 'v392i',
    word: 'retention',
    pronunciation: '/rɪˈtenʃn/',
    partOfSpeech: 'noun',
    meaning: 'giữ chân',
    example: 'Employee retention is a priority.',
    exampleTranslation: 'Giữ chân nhân viên là ưu tiên.',
    level: 'intermediate',
    topic: 'Customer Relations',
  },
  {
    id: 'v393i',
    word: 'referral',
    pronunciation: '/rɪˈfɜːrəl/',
    partOfSpeech: 'noun',
    meaning: 'giới thiệu',
    example: 'We get many customers through referrals.',
    exampleTranslation: 'Chúng tôi có nhiều khách hàng qua giới thiệu.',
    level: 'intermediate',
    topic: 'Customer Relations',
  },
  {
    id: 'v394i',
    word: 'testimonial',
    pronunciation: '/ˌtestɪˈməʊniəl/',
    partOfSpeech: 'noun',
    meaning: 'lời chứng thực',
    example: 'Read our customer testimonials.',
    exampleTranslation: 'Đọc lời chứng thực của khách hàng.',
    level: 'intermediate',
    topic: 'Customer Relations',
  },
  {
    id: 'v395i',
    word: 'engagement',
    pronunciation: '/ɪnˈɡeɪdʒmənt/',
    partOfSpeech: 'noun',
    meaning: 'sự tham gia',
    example: 'Employee engagement is high.',
    exampleTranslation: 'Sự gắn kết của nhân viên cao.',
    level: 'intermediate',
    topic: 'Customer Relations',
  },
  {
    id: 'v396i',
    word: 'outreach',
    pronunciation: '/ˈaʊtriːtʃ/',
    partOfSpeech: 'noun',
    meaning: 'tiếp cận',
    example: 'Our community outreach program is successful.',
    exampleTranslation: 'Chương trình tiếp cận cộng đồng của chúng tôi thành công.',
    level: 'intermediate',
    topic: 'Customer Relations',
  },
  {
    id: 'v397i',
    word: 'reputation',
    pronunciation: '/ˌrepjuˈteɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'danh tiếng',
    example: 'The company has an excellent reputation.',
    exampleTranslation: 'Công ty có danh tiếng xuất sắc.',
    level: 'intermediate',
    topic: 'Customer Relations',
  },
  {
    id: 'v398i',
    word: 'credibility',
    pronunciation: '/ˌkredəˈbɪləti/',
    partOfSpeech: 'noun',
    meaning: 'uy tín',
    example: 'This enhances our credibility.',
    exampleTranslation: 'Điều này nâng cao uy tín của chúng tôi.',
    level: 'intermediate',
    topic: 'Customer Relations',
  },
  {
    id: 'v399i',
    word: 'rapport',
    pronunciation: '/ræˈpɔː(r)/',
    partOfSpeech: 'noun',
    meaning: 'mối quan hệ tốt',
    example: 'Build rapport with clients.',
    exampleTranslation: 'Xây dựng mối quan hệ tốt với khách hàng.',
    level: 'intermediate',
    topic: 'Customer Relations',
  },
  {
    id: 'v400i',
    word: 'transparency',
    pronunciation: '/trænsˈpærənsi/',
    partOfSpeech: 'noun',
    meaning: 'tính minh bạch',
    example: 'We value transparency in our operations.',
    exampleTranslation: 'Chúng tôi coi trọng tính minh bạch trong hoạt động.',
    level: 'intermediate',
    topic: 'Business',
  },
  // E-commerce & Digital
  {
    id: 'v401i',
    word: 'transaction',
    pronunciation: '/trænˈzækʃn/',
    partOfSpeech: 'noun',
    meaning: 'giao dịch',
    example: 'Online transactions are secure.',
    exampleTranslation: 'Giao dịch trực tuyến an toàn.',
    level: 'intermediate',
    topic: 'E-commerce',
  },
  {
    id: 'v402i',
    word: 'subscription',
    pronunciation: '/səbˈskrɪpʃn/',
    partOfSpeech: 'noun',
    meaning: 'đăng ký',
    example: 'Cancel your subscription anytime.',
    exampleTranslation: 'Hủy đăng ký bất cứ lúc nào.',
    level: 'intermediate',
    topic: 'E-commerce',
  },
  {
    id: 'v403i',
    word: 'checkout',
    pronunciation: '/ˈtʃekaʊt/',
    partOfSpeech: 'noun',
    meaning: 'thanh toán',
    example: 'Proceed to checkout.',
    exampleTranslation: 'Tiến hành thanh toán.',
    level: 'intermediate',
    topic: 'E-commerce',
  },
  {
    id: 'v404i',
    word: 'cart',
    pronunciation: '/kɑːt/',
    partOfSpeech: 'noun',
    meaning: 'giỏ hàng',
    example: 'Add items to your cart.',
    exampleTranslation: 'Thêm sản phẩm vào giỏ hàng.',
    level: 'intermediate',
    topic: 'E-commerce',
  },
  {
    id: 'v405i',
    word: 'wishlist',
    pronunciation: '/ˈwɪʃlɪst/',
    partOfSpeech: 'noun',
    meaning: 'danh sách yêu thích',
    example: 'Save items to your wishlist.',
    exampleTranslation: 'Lưu sản phẩm vào danh sách yêu thích.',
    level: 'intermediate',
    topic: 'E-commerce',
  },
  {
    id: 'v406i',
    word: 'coupon',
    pronunciation: '/ˈkuːpɒn/',
    partOfSpeech: 'noun',
    meaning: 'phiếu giảm giá',
    example: 'Use this coupon for 20% off.',
    exampleTranslation: 'Dùng phiếu này để giảm 20%.',
    level: 'intermediate',
    topic: 'E-commerce',
  },
  {
    id: 'v407i',
    word: 'voucher',
    pronunciation: '/ˈvaʊtʃə(r)/',
    partOfSpeech: 'noun',
    meaning: 'phiếu thưởng',
    example: 'Redeem your voucher here.',
    exampleTranslation: 'Đổi phiếu thưởng ở đây.',
    level: 'intermediate',
    topic: 'E-commerce',
  },
  {
    id: 'v408i',
    word: 'shipping',
    pronunciation: '/ˈʃɪpɪŋ/',
    partOfSpeech: 'noun',
    meaning: 'vận chuyển',
    example: 'Free shipping on orders over $50.',
    exampleTranslation: 'Miễn phí vận chuyển cho đơn hàng trên $50.',
    level: 'intermediate',
    topic: 'E-commerce',
  },
  {
    id: 'v409i',
    word: 'tracking',
    pronunciation: '/ˈtrækɪŋ/',
    partOfSpeech: 'noun',
    meaning: 'theo dõi',
    example: 'Track your order online.',
    exampleTranslation: 'Theo dõi đơn hàng trực tuyến.',
    level: 'intermediate',
    topic: 'E-commerce',
  },
  {
    id: 'v410i',
    word: 'confirmation',
    pronunciation: '/ˌkɒnfəˈmeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'xác nhận',
    example: 'You will receive an order confirmation.',
    exampleTranslation: 'Bạn sẽ nhận được xác nhận đơn hàng.',
    level: 'intermediate',
    topic: 'E-commerce',
  },
  // Banking & Finance
  {
    id: 'v411i',
    word: 'account',
    pronunciation: '/əˈkaʊnt/',
    partOfSpeech: 'noun',
    meaning: 'tài khoản',
    example: 'Open a savings account.',
    exampleTranslation: 'Mở tài khoản tiết kiệm.',
    level: 'intermediate',
    topic: 'Banking',
  },
  {
    id: 'v412i',
    word: 'overdraft',
    pronunciation: '/ˈəʊvədrɑːft/',
    partOfSpeech: 'noun',
    meaning: 'thấu chi',
    example: 'Your account is in overdraft.',
    exampleTranslation: 'Tài khoản của bạn bị thấu chi.',
    level: 'intermediate',
    topic: 'Banking',
  },
  {
    id: 'v413i',
    word: 'statement',
    pronunciation: '/ˈsteɪtmənt/',
    partOfSpeech: 'noun',
    meaning: 'sao kê',
    example: 'Check your bank statement.',
    exampleTranslation: 'Kiểm tra sao kê ngân hàng.',
    level: 'intermediate',
    topic: 'Banking',
  },
  {
    id: 'v414i',
    word: 'mortgage',
    pronunciation: '/ˈmɔːɡɪdʒ/',
    partOfSpeech: 'noun',
    meaning: 'thế chấp',
    example: 'Apply for a mortgage loan.',
    exampleTranslation: 'Đăng ký vay thế chấp.',
    level: 'intermediate',
    topic: 'Banking',
  },
  {
    id: 'v415i',
    word: 'loan',
    pronunciation: '/ləʊn/',
    partOfSpeech: 'noun',
    meaning: 'khoản vay',
    example: 'I need a business loan.',
    exampleTranslation: 'Tôi cần khoản vay kinh doanh.',
    level: 'intermediate',
    topic: 'Banking',
  },
  {
    id: 'v416i',
    word: 'credit',
    pronunciation: '/ˈkredɪt/',
    partOfSpeech: 'noun',
    meaning: 'tín dụng',
    example: 'Your credit score is important.',
    exampleTranslation: 'Điểm tín dụng của bạn rất quan trọng.',
    level: 'intermediate',
    topic: 'Banking',
  },
  {
    id: 'v417i',
    word: 'debit',
    pronunciation: '/ˈdebɪt/',
    partOfSpeech: 'noun',
    meaning: 'ghi nợ',
    example: 'Use your debit card.',
    exampleTranslation: 'Dùng thẻ ghi nợ.',
    level: 'intermediate',
    topic: 'Banking',
  },
  {
    id: 'v418i',
    word: 'installment',
    pronunciation: '/ɪnˈstɔːlmənt/',
    partOfSpeech: 'noun',
    meaning: 'trả góp',
    example: 'Pay in monthly installments.',
    exampleTranslation: 'Trả theo góp hàng tháng.',
    level: 'intermediate',
    topic: 'Banking',
  },
  {
    id: 'v419i',
    word: 'principal',
    pronunciation: '/ˈprɪnsəpl/',
    partOfSpeech: 'noun',
    meaning: 'vốn gốc',
    example: 'The principal amount is $10,000.',
    exampleTranslation: 'Số tiền gốc là $10,000.',
    level: 'intermediate',
    topic: 'Banking',
  },
  {
    id: 'v420i',
    word: 'collateral',
    pronunciation: '/kəˈlætərəl/',
    partOfSpeech: 'noun',
    meaning: 'tài sản thế chấp',
    example: 'You need collateral for the loan.',
    exampleTranslation: 'Bạn cần tài sản thế chấp cho khoản vay.',
    level: 'intermediate',
    topic: 'Banking',
  },
  // Manufacturing & Production
  {
    id: 'v421i',
    word: 'assembly',
    pronunciation: '/əˈsembli/',
    partOfSpeech: 'noun',
    meaning: 'lắp ráp',
    example: 'The assembly line is very efficient.',
    exampleTranslation: 'Dây chuyền lắp ráp rất hiệu quả.',
    level: 'intermediate',
    topic: 'Manufacturing',
  },
  {
    id: 'v422i',
    word: 'component',
    pronunciation: '/kəmˈpəʊnənt/',
    partOfSpeech: 'noun',
    meaning: 'linh kiện',
    example: 'We need to replace this component.',
    exampleTranslation: 'Chúng ta cần thay thế linh kiện này.',
    level: 'intermediate',
    topic: 'Manufacturing',
  },
  {
    id: 'v423i',
    word: 'machinery',
    pronunciation: '/məˈʃiːnəri/',
    partOfSpeech: 'noun',
    meaning: 'máy móc',
    example: 'The machinery needs maintenance.',
    exampleTranslation: 'Máy móc cần bảo trì.',
    level: 'intermediate',
    topic: 'Manufacturing',
  },
  {
    id: 'v424i',
    word: 'output',
    pronunciation: '/ˈaʊtpʊt/',
    partOfSpeech: 'noun',
    meaning: 'sản lượng',
    example: 'We increased output by 15%.',
    exampleTranslation: 'Chúng tôi tăng sản lượng 15%.',
    level: 'intermediate',
    topic: 'Manufacturing',
  },
  {
    id: 'v425i',
    word: 'capacity',
    pronunciation: '/kəˈpæsəti/',
    partOfSpeech: 'noun',
    meaning: 'năng lực sản xuất',
    example: 'The factory is at full capacity.',
    exampleTranslation: 'Nhà máy đang hoạt động hết công suất.',
    level: 'intermediate',
    topic: 'Manufacturing',
  },
  {
    id: 'v426i',
    word: 'yield',
    pronunciation: '/jiːld/',
    partOfSpeech: 'noun/verb',
    meaning: 'năng suất / mang lại',
    example: 'The yield has improved significantly.',
    exampleTranslation: 'Năng suất đã cải thiện đáng kể.',
    level: 'intermediate',
    topic: 'Manufacturing',
  },
  {
    id: 'v427i',
    word: 'batch',
    pronunciation: '/bætʃ/',
    partOfSpeech: 'noun',
    meaning: 'lô sản xuất',
    example: 'This batch passed quality control.',
    exampleTranslation: 'Lô này đã qua kiểm soát chất lượng.',
    level: 'intermediate',
    topic: 'Manufacturing',
  },
  {
    id: 'v428i',
    word: 'prototype',
    pronunciation: '/ˈprəʊtətaɪp/',
    partOfSpeech: 'noun',
    meaning: 'mẫu thử',
    example: 'The prototype is ready for testing.',
    exampleTranslation: 'Mẫu thử đã sẵn sàng để kiểm tra.',
    level: 'intermediate',
    topic: 'Manufacturing',
  },
  {
    id: 'v429i',
    word: 'automation',
    pronunciation: '/ˌɔːtəˈmeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'tự động hóa',
    example: 'Automation reduces costs.',
    exampleTranslation: 'Tự động hóa giảm chi phí.',
    level: 'intermediate',
    topic: 'Manufacturing',
  },
  {
    id: 'v430i',
    word: 'obsolete',
    pronunciation: '/ˈɒbsəliːt/',
    partOfSpeech: 'adjective',
    meaning: 'lỗi thời',
    example: 'This equipment is obsolete.',
    exampleTranslation: 'Thiết bị này đã lỗi thời.',
    level: 'intermediate',
    topic: 'Manufacturing',
  },
  // Environmental & Sustainability
  {
    id: 'v431i',
    word: 'sustainable',
    pronunciation: '/səˈsteɪnəbl/',
    partOfSpeech: 'adjective',
    meaning: 'bền vững',
    example: 'We use sustainable materials.',
    exampleTranslation: 'Chúng tôi sử dụng vật liệu bền vững.',
    level: 'intermediate',
    topic: 'Environment',
  },
  {
    id: 'v432i',
    word: 'renewable',
    pronunciation: '/rɪˈnjuːəbl/',
    partOfSpeech: 'adjective',
    meaning: 'tái tạo',
    example: 'We invest in renewable energy.',
    exampleTranslation: 'Chúng tôi đầu tư vào năng lượng tái tạo.',
    level: 'intermediate',
    topic: 'Environment',
  },
  {
    id: 'v433i',
    word: 'emission',
    pronunciation: '/ɪˈmɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'khí thải',
    example: 'We must reduce carbon emissions.',
    exampleTranslation: 'Chúng ta phải giảm khí thải carbon.',
    level: 'intermediate',
    topic: 'Environment',
  },
  {
    id: 'v434i',
    word: 'recycle',
    pronunciation: '/ˌriːˈsaɪkl/',
    partOfSpeech: 'verb',
    meaning: 'tái chế',
    example: 'Please recycle paper and plastic.',
    exampleTranslation: 'Vui lòng tái chế giấy và nhựa.',
    level: 'intermediate',
    topic: 'Environment',
  },
  {
    id: 'v435i',
    word: 'conserve',
    pronunciation: '/kənˈsɜːv/',
    partOfSpeech: 'verb',
    meaning: 'bảo tồn',
    example: 'We need to conserve energy.',
    exampleTranslation: 'Chúng ta cần tiết kiệm năng lượng.',
    level: 'intermediate',
    topic: 'Environment',
  },
  {
    id: 'v436i',
    word: 'biodegradable',
    pronunciation: '/ˌbaɪəʊdɪˈɡreɪdəbl/',
    partOfSpeech: 'adjective',
    meaning: 'phân hủy sinh học',
    example: 'Use biodegradable packaging.',
    exampleTranslation: 'Sử dụng bao bì phân hủy sinh học.',
    level: 'intermediate',
    topic: 'Environment',
  },
  {
    id: 'v437i',
    word: 'eco-friendly',
    pronunciation: '/ˌiːkəʊ ˈfrendli/',
    partOfSpeech: 'adjective',
    meaning: 'thân thiện môi trường',
    example: 'Our products are eco-friendly.',
    exampleTranslation: 'Sản phẩm của chúng tôi thân thiện môi trường.',
    level: 'intermediate',
    topic: 'Environment',
  },
  {
    id: 'v438i',
    word: 'footprint',
    pronunciation: '/ˈfʊtprɪnt/',
    partOfSpeech: 'noun',
    meaning: 'dấu chân (môi trường)',
    example: 'Reduce your carbon footprint.',
    exampleTranslation: 'Giảm dấu chân carbon của bạn.',
    level: 'intermediate',
    topic: 'Environment',
  },
  {
    id: 'v439i',
    word: 'offset',
    pronunciation: '/ˈɒfset/',
    partOfSpeech: 'verb/noun',
    meaning: 'bù đắp',
    example: 'We offset our carbon emissions.',
    exampleTranslation: 'Chúng tôi bù đắp khí thải carbon.',
    level: 'intermediate',
    topic: 'Environment',
  },
  {
    id: 'v440i',
    word: 'consumption',
    pronunciation: '/kənˈsʌmpʃn/',
    partOfSpeech: 'noun',
    meaning: 'tiêu thụ',
    example: 'Energy consumption is high.',
    exampleTranslation: 'Tiêu thụ năng lượng cao.',
    level: 'intermediate',
    topic: 'Environment',
  },
  // Quality & Improvement
  {
    id: 'v441i',
    word: 'excellence',
    pronunciation: '/ˈeksələns/',
    partOfSpeech: 'noun',
    meaning: 'sự xuất sắc',
    example: 'We strive for excellence.',
    exampleTranslation: 'Chúng tôi phấn đấu cho sự xuất sắc.',
    level: 'intermediate',
    topic: 'Quality',
  },
  {
    id: 'v442i',
    word: 'enhancement',
    pronunciation: '/ɪnˈhɑːnsmənt/',
    partOfSpeech: 'noun',
    meaning: 'cải tiến',
    example: 'Product enhancement is ongoing.',
    exampleTranslation: 'Cải tiến sản phẩm đang được tiến hành.',
    level: 'intermediate',
    topic: 'Quality',
  },
  {
    id: 'v443i',
    word: 'refinement',
    pronunciation: '/rɪˈfaɪnmənt/',
    partOfSpeech: 'noun',
    meaning: 'tinh chỉnh',
    example: 'The design needs further refinement.',
    exampleTranslation: 'Thiết kế cần tinh chỉnh thêm.',
    level: 'intermediate',
    topic: 'Quality',
  },
  {
    id: 'v444i',
    word: 'revision',
    pronunciation: '/rɪˈvɪʒn/',
    partOfSpeech: 'noun',
    meaning: 'sửa đổi',
    example: 'The document needs revision.',
    exampleTranslation: 'Tài liệu cần sửa đổi.',
    level: 'intermediate',
    topic: 'Quality',
  },
  {
    id: 'v445i',
    word: 'modification',
    pronunciation: '/ˌmɒdɪfɪˈkeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'thay đổi',
    example: 'We made some modifications to the plan.',
    exampleTranslation: 'Chúng tôi thực hiện một số thay đổi cho kế hoạch.',
    level: 'intermediate',
    topic: 'Quality',
  },
  {
    id: 'v446i',
    word: 'adjustment',
    pronunciation: '/əˈdʒʌstmənt/',
    partOfSpeech: 'noun',
    meaning: 'điều chỉnh',
    example: 'Minor adjustments are needed.',
    exampleTranslation: 'Cần điều chỉnh nhỏ.',
    level: 'intermediate',
    topic: 'Quality',
  },
  {
    id: 'v447i',
    word: 'customization',
    pronunciation: '/ˌkʌstəmaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'tùy chỉnh',
    example: 'We offer full customization.',
    exampleTranslation: 'Chúng tôi cung cấp tùy chỉnh hoàn toàn.',
    level: 'intermediate',
    topic: 'Quality',
  },
  {
    id: 'v448i',
    word: 'personalization',
    pronunciation: '/ˌpɜːsənəlaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'cá nhân hóa',
    example: 'Personalization improves customer experience.',
    exampleTranslation: 'Cá nhân hóa cải thiện trải nghiệm khách hàng.',
    level: 'intermediate',
    topic: 'Quality',
  },
  {
    id: 'v449i',
    word: 'consistency',
    pronunciation: '/kənˈsɪstənsi/',
    partOfSpeech: 'noun',
    meaning: 'tính nhất quán',
    example: 'Consistency is key to quality.',
    exampleTranslation: 'Tính nhất quán là chìa khóa cho chất lượng.',
    level: 'intermediate',
    topic: 'Quality',
  },
  {
    id: 'v450i',
    word: 'accuracy',
    pronunciation: '/ˈækjərəsi/',
    partOfSpeech: 'noun',
    meaning: 'độ chính xác',
    example: 'We guarantee 100% accuracy.',
    exampleTranslation: 'Chúng tôi đảm bảo 100% chính xác.',
    level: 'intermediate',
    topic: 'Quality',
  },
  // Leadership & Management
  {
    id: 'v451i',
    word: 'authority',
    pronunciation: '/ɔːˈθɒrəti/',
    partOfSpeech: 'noun',
    meaning: 'quyền lực',
    example: 'The manager has full authority.',
    exampleTranslation: 'Quản lý có toàn quyền.',
    level: 'intermediate',
    topic: 'Leadership',
  },
  {
    id: 'v452i',
    word: 'delegate',
    pronunciation: '/ˈdelɪɡeɪt/',
    partOfSpeech: 'verb',
    meaning: 'ủy quyền',
    example: 'Learn to delegate tasks effectively.',
    exampleTranslation: 'Học cách ủy quyền công việc hiệu quả.',
    level: 'intermediate',
    topic: 'Leadership',
  },
  {
    id: 'v453i',
    word: 'supervise',
    pronunciation: '/ˈsuːpəvaɪz/',
    partOfSpeech: 'verb',
    meaning: 'giám sát',
    example: 'She supervises a team of 10.',
    exampleTranslation: 'Cô ấy giám sát một đội 10 người.',
    level: 'intermediate',
    topic: 'Leadership',
  },
  {
    id: 'v454i',
    word: 'motivate',
    pronunciation: '/ˈməʊtɪveɪt/',
    partOfSpeech: 'verb',
    meaning: 'động viên',
    example: 'Good leaders motivate their teams.',
    exampleTranslation: 'Nhà lãnh đạo giỏi động viên đội ngũ.',
    level: 'intermediate',
    topic: 'Leadership',
  },
  {
    id: 'v455i',
    word: 'inspire',
    pronunciation: '/ɪnˈspaɪə(r)/',
    partOfSpeech: 'verb',
    meaning: 'truyền cảm hứng',
    example: 'She inspires confidence in others.',
    exampleTranslation: 'Cô ấy truyền niềm tin cho người khác.',
    level: 'intermediate',
    topic: 'Leadership',
  },
  {
    id: 'v456i',
    word: 'empower',
    pronunciation: '/ɪmˈpaʊə(r)/',
    partOfSpeech: 'verb',
    meaning: 'trao quyền',
    example: 'Empower your employees to make decisions.',
    exampleTranslation: 'Trao quyền cho nhân viên để đưa ra quyết định.',
    level: 'intermediate',
    topic: 'Leadership',
  },
  {
    id: 'v457i',
    word: 'vision',
    pronunciation: '/ˈvɪʒn/',
    partOfSpeech: 'noun',
    meaning: 'tầm nhìn',
    example: 'The CEO shared his vision for the company.',
    exampleTranslation: 'CEO chia sẻ tầm nhìn cho công ty.',
    level: 'intermediate',
    topic: 'Leadership',
  },
  {
    id: 'v458i',
    word: 'mission',
    pronunciation: '/ˈmɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'sứ mệnh',
    example: 'Our mission is to serve customers.',
    exampleTranslation: 'Sứ mệnh của chúng tôi là phục vụ khách hàng.',
    level: 'intermediate',
    topic: 'Leadership',
  },
  {
    id: 'v459i',
    word: 'culture',
    pronunciation: '/ˈkʌltʃə(r)/',
    partOfSpeech: 'noun',
    meaning: 'văn hóa',
    example: 'We have a strong company culture.',
    exampleTranslation: 'Chúng tôi có văn hóa công ty mạnh mẽ.',
    level: 'intermediate',
    topic: 'Leadership',
  },
  {
    id: 'v460i',
    word: 'ethics',
    pronunciation: '/ˈeθɪks/',
    partOfSpeech: 'noun',
    meaning: 'đạo đức',
    example: 'Business ethics are important.',
    exampleTranslation: 'Đạo đức kinh doanh rất quan trọng.',
    level: 'intermediate',
    topic: 'Leadership',
  },
  // Time Management
  {
    id: 'v461i',
    word: 'efficient',
    pronunciation: '/ɪˈfɪʃnt/',
    partOfSpeech: 'adjective',
    meaning: 'hiệu quả',
    example: 'This is a very efficient method.',
    exampleTranslation: 'Đây là phương pháp rất hiệu quả.',
    level: 'intermediate',
    topic: 'Productivity',
  },
  {
    id: 'v462i',
    word: 'effective',
    pronunciation: '/ɪˈfektɪv/',
    partOfSpeech: 'adjective',
    meaning: 'có hiệu lực',
    example: 'The campaign was highly effective.',
    exampleTranslation: 'Chiến dịch rất hiệu quả.',
    level: 'intermediate',
    topic: 'Productivity',
  },
  {
    id: 'v463i',
    word: 'streamline',
    pronunciation: '/ˈstriːmlaɪn/',
    partOfSpeech: 'verb',
    meaning: 'hợp lý hóa',
    example: 'We need to streamline the process.',
    exampleTranslation: 'Chúng ta cần hợp lý hóa quy trình.',
    level: 'intermediate',
    topic: 'Productivity',
  },
  {
    id: 'v464i',
    word: 'prioritize',
    pronunciation: '/praɪˈɒrətaɪz/',
    partOfSpeech: 'verb',
    meaning: 'ưu tiên',
    example: 'Prioritize the most urgent tasks.',
    exampleTranslation: 'Ưu tiên những nhiệm vụ khẩn cấp nhất.',
    level: 'intermediate',
    topic: 'Productivity',
  },
  {
    id: 'v465i',
    word: 'allocate',
    pronunciation: '/ˈæləkeɪt/',
    partOfSpeech: 'verb',
    meaning: 'phân bổ',
    example: 'Allocate resources wisely.',
    exampleTranslation: 'Phân bổ nguồn lực một cách khôn ngoan.',
    level: 'intermediate',
    topic: 'Productivity',
  },
  {
    id: 'v466i',
    word: 'organize',
    pronunciation: '/ˈɔːɡənaɪz/',
    partOfSpeech: 'verb',
    meaning: 'tổ chức',
    example: 'Organize your workspace.',
    exampleTranslation: 'Sắp xếp không gian làm việc.',
    level: 'intermediate',
    topic: 'Productivity',
  },
  {
    id: 'v467i',
    word: 'coordinate',
    pronunciation: '/kəʊˈɔːdɪneɪt/',
    partOfSpeech: 'verb',
    meaning: 'điều phối',
    example: 'Coordinate with other departments.',
    exampleTranslation: 'Điều phối với các phòng ban khác.',
    level: 'intermediate',
    topic: 'Productivity',
  },
  {
    id: 'v468i',
    word: 'schedule',
    pronunciation: '/ˈʃedjuːl/',
    partOfSpeech: 'noun/verb',
    meaning: 'lịch trình',
    example: 'Check your schedule for tomorrow.',
    exampleTranslation: 'Kiểm tra lịch trình ngày mai.',
    level: 'intermediate',
    topic: 'Productivity',
  },
  {
    id: 'v469i',
    word: 'agenda',
    pronunciation: '/əˈdʒendə/',
    partOfSpeech: 'noun',
    meaning: 'chương trình',
    example: 'What\'s on today\'s agenda?',
    exampleTranslation: 'Chương trình hôm nay có gì?',
    level: 'intermediate',
    topic: 'Productivity',
  },
  {
    id: 'v470i',
    word: 'deadline',
    pronunciation: '/ˈdedlaɪn/',
    partOfSpeech: 'noun',
    meaning: 'thời hạn',
    example: 'The deadline is Friday.',
    exampleTranslation: 'Thời hạn là thứ Sáu.',
    level: 'intermediate',
    topic: 'Productivity',
  },
  // International Business
  {
    id: 'v471i',
    word: 'export',
    pronunciation: '/ˈekspɔːt/',
    partOfSpeech: 'noun/verb',
    meaning: 'xuất khẩu',
    example: 'We export to 50 countries.',
    exampleTranslation: 'Chúng tôi xuất khẩu sang 50 quốc gia.',
    level: 'intermediate',
    topic: 'International',
  },
  {
    id: 'v472i',
    word: 'import',
    pronunciation: '/ˈɪmpɔːt/',
    partOfSpeech: 'noun/verb',
    meaning: 'nhập khẩu',
    example: 'We import raw materials.',
    exampleTranslation: 'Chúng tôi nhập khẩu nguyên liệu thô.',
    level: 'intermediate',
    topic: 'International',
  },
  {
    id: 'v473i',
    word: 'tariff',
    pronunciation: '/ˈtærɪf/',
    partOfSpeech: 'noun',
    meaning: 'thuế quan',
    example: 'New tariffs were imposed.',
    exampleTranslation: 'Thuế quan mới được áp dụng.',
    level: 'intermediate',
    topic: 'International',
  },
  {
    id: 'v474i',
    word: 'customs',
    pronunciation: '/ˈkʌstəmz/',
    partOfSpeech: 'noun',
    meaning: 'hải quan',
    example: 'The goods are held at customs.',
    exampleTranslation: 'Hàng hóa bị giữ ở hải quan.',
    level: 'intermediate',
    topic: 'International',
  },
  {
    id: 'v475i',
    word: 'freight',
    pronunciation: '/freɪt/',
    partOfSpeech: 'noun',
    meaning: 'vận chuyển hàng hóa',
    example: 'Freight costs are increasing.',
    exampleTranslation: 'Chi phí vận chuyển đang tăng.',
    level: 'intermediate',
    topic: 'International',
  },
  {
    id: 'v476i',
    word: 'currency',
    pronunciation: '/ˈkʌrənsi/',
    partOfSpeech: 'noun',
    meaning: 'tiền tệ',
    example: 'Exchange currency at the bank.',
    exampleTranslation: 'Đổi tiền ở ngân hàng.',
    level: 'intermediate',
    topic: 'International',
  },
  {
    id: 'v477i',
    word: 'exchange rate',
    pronunciation: '/ɪksˈtʃeɪndʒ reɪt/',
    partOfSpeech: 'noun',
    meaning: 'tỷ giá hối đoái',
    example: 'The exchange rate is favorable.',
    exampleTranslation: 'Tỷ giá hối đoái thuận lợi.',
    level: 'intermediate',
    topic: 'International',
  },
  {
    id: 'v478i',
    word: 'multinational',
    pronunciation: '/ˌmʌltiˈnæʃnəl/',
    partOfSpeech: 'adjective',
    meaning: 'đa quốc gia',
    example: 'We are a multinational corporation.',
    exampleTranslation: 'Chúng tôi là tập đoàn đa quốc gia.',
    level: 'intermediate',
    topic: 'International',
  },
  {
    id: 'v479i',
    word: 'headquarters',
    pronunciation: '/ˌhedˈkwɔːtəz/',
    partOfSpeech: 'noun',
    meaning: 'trụ sở chính',
    example: 'Our headquarters is in New York.',
    exampleTranslation: 'Trụ sở chính của chúng tôi ở New York.',
    level: 'intermediate',
    topic: 'International',
  },
  {
    id: 'v480i',
    word: 'branch',
    pronunciation: '/brɑːntʃ/',
    partOfSpeech: 'noun',
    meaning: 'chi nhánh',
    example: 'We have 20 branches nationwide.',
    exampleTranslation: 'Chúng tôi có 20 chi nhánh trên toàn quốc.',
    level: 'intermediate',
    topic: 'International',
  },
  // Events & Conferences
  {
    id: 'v481i',
    word: 'venue',
    pronunciation: '/ˈvenjuː/',
    partOfSpeech: 'noun',
    meaning: 'địa điểm tổ chức',
    example: 'The venue can hold 500 people.',
    exampleTranslation: 'Địa điểm có thể chứa 500 người.',
    level: 'intermediate',
    topic: 'Events',
  },
  {
    id: 'v482i',
    word: 'keynote',
    pronunciation: '/ˈkiːnəʊt/',
    partOfSpeech: 'noun/adjective',
    meaning: 'bài phát biểu chính',
    example: 'She will deliver the keynote speech.',
    exampleTranslation: 'Cô ấy sẽ có bài phát biểu chính.',
    level: 'intermediate',
    topic: 'Events',
  },
  {
    id: 'v483i',
    word: 'seminar',
    pronunciation: '/ˈsemɪnɑː(r)/',
    partOfSpeech: 'noun',
    meaning: 'hội thảo',
    example: 'Attend our free seminar.',
    exampleTranslation: 'Tham dự hội thảo miễn phí của chúng tôi.',
    level: 'intermediate',
    topic: 'Events',
  },
  {
    id: 'v484i',
    word: 'workshop',
    pronunciation: '/ˈwɜːkʃɒp/',
    partOfSpeech: 'noun',
    meaning: 'hội thảo thực hành',
    example: 'Register for the workshop.',
    exampleTranslation: 'Đăng ký hội thảo thực hành.',
    level: 'intermediate',
    topic: 'Events',
  },
  {
    id: 'v485i',
    word: 'symposium',
    pronunciation: '/sɪmˈpəʊziəm/',
    partOfSpeech: 'noun',
    meaning: 'hội nghị chuyên đề',
    example: 'The symposium will be held in June.',
    exampleTranslation: 'Hội nghị chuyên đề sẽ được tổ chức vào tháng 6.',
    level: 'intermediate',
    topic: 'Events',
  },
  {
    id: 'v486i',
    word: 'exhibition',
    pronunciation: '/ˌeksɪˈbɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'triển lãm',
    example: 'Visit our exhibition booth.',
    exampleTranslation: 'Ghé thăm gian hàng triển lãm của chúng tôi.',
    level: 'intermediate',
    topic: 'Events',
  },
  {
    id: 'v487i',
    word: 'sponsor',
    pronunciation: '/ˈspɒnsə(r)/',
    partOfSpeech: 'noun/verb',
    meaning: 'tài trợ',
    example: 'We are looking for sponsors.',
    exampleTranslation: 'Chúng tôi đang tìm nhà tài trợ.',
    level: 'intermediate',
    topic: 'Events',
  },
  {
    id: 'v488i',
    word: 'participant',
    pronunciation: '/pɑːˈtɪsɪpənt/',
    partOfSpeech: 'noun',
    meaning: 'người tham gia',
    example: 'There were 200 participants.',
    exampleTranslation: 'Có 200 người tham gia.',
    level: 'intermediate',
    topic: 'Events',
  },
  {
    id: 'v489i',
    word: 'registration',
    pronunciation: '/ˌredʒɪˈstreɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'đăng ký',
    example: 'Registration closes tomorrow.',
    exampleTranslation: 'Đăng ký đóng vào ngày mai.',
    level: 'intermediate',
    topic: 'Events',
  },
  {
    id: 'v490i',
    word: 'certificate',
    pronunciation: '/səˈtɪfɪkət/',
    partOfSpeech: 'noun',
    meaning: 'chứng chỉ',
    example: 'You will receive a certificate.',
    exampleTranslation: 'Bạn sẽ nhận được chứng chỉ.',
    level: 'intermediate',
    topic: 'Events',
  },
  // Miscellaneous Business
  {
    id: 'v491i',
    word: 'preliminary',
    pronunciation: '/prɪˈlɪmɪnəri/',
    partOfSpeech: 'adjective',
    meaning: 'sơ bộ',
    example: 'These are preliminary results.',
    exampleTranslation: 'Đây là kết quả sơ bộ.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v492i',
    word: 'subsequent',
    pronunciation: '/ˈsʌbsɪkwənt/',
    partOfSpeech: 'adjective',
    meaning: 'tiếp theo',
    example: 'Subsequent meetings will be scheduled.',
    exampleTranslation: 'Các cuộc họp tiếp theo sẽ được lên lịch.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v493i',
    word: 'respective',
    pronunciation: '/rɪˈspektɪv/',
    partOfSpeech: 'adjective',
    meaning: 'tương ứng',
    example: 'Return to your respective departments.',
    exampleTranslation: 'Trở về các phòng ban tương ứng.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v494i',
    word: 'approximate',
    pronunciation: '/əˈprɒksɪmət/',
    partOfSpeech: 'adjective/verb',
    meaning: 'xấp xỉ',
    example: 'The approximate cost is $5000.',
    exampleTranslation: 'Chi phí xấp xỉ là $5000.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v495i',
    word: 'equivalent',
    pronunciation: '/ɪˈkwɪvələnt/',
    partOfSpeech: 'adjective/noun',
    meaning: 'tương đương',
    example: 'This is equivalent to 100 euros.',
    exampleTranslation: 'Điều này tương đương 100 euro.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v496i',
    word: 'relevant',
    pronunciation: '/ˈreləvənt/',
    partOfSpeech: 'adjective',
    meaning: 'liên quan',
    example: 'Please provide relevant information.',
    exampleTranslation: 'Vui lòng cung cấp thông tin liên quan.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v497i',
    word: 'significant',
    pronunciation: '/sɪɡˈnɪfɪkənt/',
    partOfSpeech: 'adjective',
    meaning: 'đáng kể',
    example: 'There was a significant increase.',
    exampleTranslation: 'Có sự tăng đáng kể.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v498i',
    word: 'substantial',
    pronunciation: '/səbˈstænʃl/',
    partOfSpeech: 'adjective',
    meaning: 'đáng kể',
    example: 'We made substantial progress.',
    exampleTranslation: 'Chúng tôi đạt tiến bộ đáng kể.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v499i',
    word: 'considerable',
    pronunciation: '/kənˈsɪdərəbl/',
    partOfSpeech: 'adjective',
    meaning: 'đáng kể',
    example: 'This requires considerable effort.',
    exampleTranslation: 'Điều này đòi hỏi nỗ lực đáng kể.',
    level: 'intermediate',
    topic: 'Business',
  },
  {
    id: 'v500i',
    word: 'essential',
    pronunciation: '/ɪˈsenʃl/',
    partOfSpeech: 'adjective',
    meaning: 'thiết yếu',
    example: 'Communication is essential.',
    exampleTranslation: 'Giao tiếp là thiết yếu.',
    level: 'intermediate',
    topic: 'Business',
  },

  // === ADVANCED LEVEL (600-800) ===
  {
    id: 'v201',
    word: 'subsidiary',
    pronunciation: '/səbˈsɪdiəri/',
    partOfSpeech: 'noun',
    meaning: 'công ty con',
    example: 'Our subsidiary in Asia is performing well.',
    exampleTranslation: 'Công ty con của chúng tôi ở châu Á đang hoạt động tốt.',
    level: 'advanced',
    topic: 'Corporate',
  },
  {
    id: 'v202',
    word: 'merger',
    pronunciation: '/ˈmɜːdʒə(r)/',
    partOfSpeech: 'noun',
    meaning: 'sáp nhập',
    example: 'The merger was completed last year.',
    exampleTranslation: 'Vụ sáp nhập đã hoàn thành vào năm ngoái.',
    level: 'advanced',
    topic: 'Corporate',
  },
  {
    id: 'v203',
    word: 'stakeholder',
    pronunciation: '/ˈsteɪkhəʊldə(r)/',
    partOfSpeech: 'noun',
    meaning: 'bên liên quan',
    example: 'All stakeholders agreed to the plan.',
    exampleTranslation: 'Tất cả các bên liên quan đều đồng ý với kế hoạch.',
    level: 'advanced',
    topic: 'Corporate',
  },
  {
    id: 'v204',
    word: 'compliance',
    pronunciation: '/kəmˈplaɪəns/',
    partOfSpeech: 'noun',
    meaning: 'tuân thủ',
    example: 'Compliance with regulations is mandatory.',
    exampleTranslation: 'Tuân thủ các quy định là bắt buộc.',
    level: 'advanced',
    topic: 'Legal & Regulation',
  },
  {
    id: 'v205',
    word: 'sustainable',
    pronunciation: '/səˈsteɪnəbl/',
    partOfSpeech: 'adjective',
    meaning: 'bền vững',
    example: 'We focus on sustainable business practices.',
    exampleTranslation: 'Chúng tôi tập trung vào các hoạt động kinh doanh bền vững.',
    level: 'advanced',
    topic: 'Business Strategy',
  },
  {
    id: 'v206',
    word: 'acquisition',
    pronunciation: '/ˌækwɪˈzɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'mua lại / thâu tóm',
    example: 'The acquisition was completed successfully.',
    exampleTranslation: 'Vụ mua lại đã hoàn thành thành công.',
    level: 'advanced',
    topic: 'Corporate',
  },
  {
    id: 'v207',
    word: 'diversification',
    pronunciation: '/daɪˌvɜːsɪfɪˈkeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'đa dạng hóa',
    example: 'Diversification reduces business risk.',
    exampleTranslation: 'Đa dạng hóa giảm rủi ro kinh doanh.',
    level: 'advanced',
    topic: 'Business Strategy',
  },
  {
    id: 'v208',
    word: 'liability',
    pronunciation: '/ˌlaɪəˈbɪləti/',
    partOfSpeech: 'noun',
    meaning: 'nghĩa vụ / trách nhiệm pháp lý',
    example: 'The company has limited liability.',
    exampleTranslation: 'Công ty có trách nhiệm hữu hạn.',
    level: 'advanced',
    topic: 'Legal',
  },
  {
    id: 'v209',
    word: 'litigation',
    pronunciation: '/ˌlɪtɪˈɡeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'kiện tụng',
    example: 'We want to avoid litigation.',
    exampleTranslation: 'Chúng tôi muốn tránh kiện tụng.',
    level: 'advanced',
    topic: 'Legal',
  },
  {
    id: 'v210',
    word: 'jurisdiction',
    pronunciation: '/ˌdʒʊərɪsˈdɪkʃn/',
    partOfSpeech: 'noun',
    meaning: 'thẩm quyền',
    example: 'This falls under their jurisdiction.',
    exampleTranslation: 'Điều này thuộc thẩm quyền của họ.',
    level: 'advanced',
    topic: 'Legal',
  },
  {
    id: 'v211',
    word: 'amendment',
    pronunciation: '/əˈmendmənt/',
    partOfSpeech: 'noun',
    meaning: 'sửa đổi / tu chính',
    example: 'We propose an amendment to the contract.',
    exampleTranslation: 'Chúng tôi đề xuất sửa đổi hợp đồng.',
    level: 'advanced',
    topic: 'Legal',
  },
  {
    id: 'v212',
    word: 'arbitration',
    pronunciation: '/ˌɑːbɪˈtreɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'trọng tài',
    example: 'The dispute will go to arbitration.',
    exampleTranslation: 'Tranh chấp sẽ được đưa ra trọng tài.',
    level: 'advanced',
    topic: 'Legal',
  },
  {
    id: 'v213',
    word: 'intellectual property',
    pronunciation: '/ˌɪntəˈlektʃuəl ˈprɒpəti/',
    partOfSpeech: 'noun',
    meaning: 'sở hữu trí tuệ',
    example: 'We protect our intellectual property rights.',
    exampleTranslation: 'Chúng tôi bảo vệ quyền sở hữu trí tuệ.',
    level: 'advanced',
    topic: 'Legal',
  },
  {
    id: 'v214',
    word: 'auditor',
    pronunciation: '/ˈɔːdɪtə(r)/',
    partOfSpeech: 'noun',
    meaning: 'kiểm toán viên',
    example: 'The auditors will review the accounts.',
    exampleTranslation: 'Các kiểm toán viên sẽ xem xét các tài khoản.',
    level: 'advanced',
    topic: 'Finance',
  },
  {
    id: 'v215',
    word: 'depreciation',
    pronunciation: '/dɪˌpriːʃiˈeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'khấu hao',
    example: 'Equipment depreciation is calculated annually.',
    exampleTranslation: 'Khấu hao thiết bị được tính hàng năm.',
    level: 'advanced',
    topic: 'Finance',
  },
  {
    id: 'v216',
    word: 'equity',
    pronunciation: '/ˈekwəti/',
    partOfSpeech: 'noun',
    meaning: 'vốn chủ sở hữu',
    example: 'The company has strong equity.',
    exampleTranslation: 'Công ty có vốn chủ sở hữu mạnh.',
    level: 'advanced',
    topic: 'Finance',
  },
  {
    id: 'v217',
    word: 'leverage',
    pronunciation: '/ˈliːvərɪdʒ/',
    partOfSpeech: 'noun/verb',
    meaning: 'đòn bẩy / tận dụng',
    example: 'We can leverage our resources.',
    exampleTranslation: 'Chúng ta có thể tận dụng nguồn lực của mình.',
    level: 'advanced',
    topic: 'Finance',
  },
  {
    id: 'v218',
    word: 'portfolio',
    pronunciation: '/pɔːtˈfəʊliəʊ/',
    partOfSpeech: 'noun',
    meaning: 'danh mục đầu tư',
    example: 'Diversify your investment portfolio.',
    exampleTranslation: 'Đa dạng hóa danh mục đầu tư của bạn.',
    level: 'advanced',
    topic: 'Finance',
  },
  {
    id: 'v219',
    word: 'benchmark',
    pronunciation: '/ˈbentʃmɑːk/',
    partOfSpeech: 'noun/verb',
    meaning: 'tiêu chuẩn / so sánh',
    example: 'We benchmark against industry standards.',
    exampleTranslation: 'Chúng tôi so sánh với tiêu chuẩn ngành.',
    level: 'advanced',
    topic: 'Management',
  },
  {
    id: 'v220',
    word: 'incentive',
    pronunciation: '/ɪnˈsentɪv/',
    partOfSpeech: 'noun',
    meaning: 'động lực / khuyến khích',
    example: 'We offer performance incentives.',
    exampleTranslation: 'Chúng tôi cung cấp khuyến khích hiệu suất.',
    level: 'advanced',
    topic: 'HR',
  },
  {
    id: 'v221',
    word: 'retention',
    pronunciation: '/rɪˈtenʃn/',
    partOfSpeech: 'noun',
    meaning: 'giữ chân / duy trì',
    example: 'Employee retention is crucial.',
    exampleTranslation: 'Giữ chân nhân viên là rất quan trọng.',
    level: 'advanced',
    topic: 'HR',
  },
  {
    id: 'v222',
    word: 'succession',
    pronunciation: '/səkˈseʃn/',
    partOfSpeech: 'noun',
    meaning: 'kế nhiệm',
    example: 'We need a succession plan.',
    exampleTranslation: 'Chúng ta cần kế hoạch kế nhiệm.',
    level: 'advanced',
    topic: 'HR',
  },
  {
    id: 'v223',
    word: 'synergy',
    pronunciation: '/ˈsɪnədʒi/',
    partOfSpeech: 'noun',
    meaning: 'sức mạnh tổng hợp',
    example: 'The merger creates synergy.',
    exampleTranslation: 'Việc sáp nhập tạo ra sức mạnh tổng hợp.',
    level: 'advanced',
    topic: 'Corporate',
  },
  {
    id: 'v224',
    word: 'paradigm',
    pronunciation: '/ˈpærədaɪm/',
    partOfSpeech: 'noun',
    meaning: 'mô hình / khuôn mẫu',
    example: 'We need a paradigm shift.',
    exampleTranslation: 'Chúng ta cần thay đổi mô hình.',
    level: 'advanced',
    topic: 'Business Strategy',
  },
  {
    id: 'v225',
    word: 'innovation',
    pronunciation: '/ˌɪnəˈveɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'đổi mới / sáng tạo',
    example: 'Innovation drives our success.',
    exampleTranslation: 'Đổi mới thúc đẩy thành công của chúng tôi.',
    level: 'advanced',
    topic: 'Business Strategy',
  },
  // Advanced Business Strategy & Planning
  {
    id: 'v501a',
    word: 'strategic',
    pronunciation: '/strəˈtiːdʒɪk/',
    partOfSpeech: 'adjective',
    meaning: 'chiến lược',
    example: 'We need strategic thinking for long-term growth.',
    exampleTranslation: 'Chúng ta cần tư duy chiến lược cho tăng trưởng dài hạn.',
    level: 'advanced',
    topic: 'Strategy',
  },
  {
    id: 'v502a',
    word: 'diversification',
    pronunciation: '/daɪˌvɜːsɪfɪˈkeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'đa dạng hóa',
    example: 'Diversification reduces business risk.',
    exampleTranslation: 'Đa dạng hóa giảm rủi ro kinh doanh.',
    level: 'advanced',
    topic: 'Strategy',
  },
  {
    id: 'v503a',
    word: 'consolidation',
    pronunciation: '/kənˌsɒlɪˈdeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'hợp nhất',
    example: 'Market consolidation is inevitable.',
    exampleTranslation: 'Hợp nhất thị trường là điều không thể tránh khỏi.',
    level: 'advanced',
    topic: 'Strategy',
  },
  {
    id: 'v504a',
    word: 'acquisition',
    pronunciation: '/ˌækwɪˈzɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'mua lại / thâu tóm',
    example: 'The acquisition was completed successfully.',
    exampleTranslation: 'Việc mua lại đã hoàn thành thành công.',
    level: 'advanced',
    topic: 'Strategy',
  },
  {
    id: 'v505a',
    word: 'merger',
    pronunciation: '/ˈmɜːdʒə(r)/',
    partOfSpeech: 'noun',
    meaning: 'sáp nhập',
    example: 'The merger created a market leader.',
    exampleTranslation: 'Việc sáp nhập tạo ra một công ty dẫn đầu thị trường.',
    level: 'advanced',
    topic: 'Strategy',
  },
  {
    id: 'v506a',
    word: 'divestiture',
    pronunciation: '/daɪˈvestɪtʃə(r)/',
    partOfSpeech: 'noun',
    meaning: 'thoái vốn',
    example: 'The company announced a divestiture plan.',
    exampleTranslation: 'Công ty công bố kế hoạch thoái vốn.',
    level: 'advanced',
    topic: 'Strategy',
  },
  {
    id: 'v507a',
    word: 'restructuring',
    pronunciation: '/ˌriːˈstrʌktʃərɪŋ/',
    partOfSpeech: 'noun',
    meaning: 'tái cấu trúc',
    example: 'Corporate restructuring will improve efficiency.',
    exampleTranslation: 'Tái cấu trúc doanh nghiệp sẽ cải thiện hiệu quả.',
    level: 'advanced',
    topic: 'Strategy',
  },
  {
    id: 'v508a',
    word: 'portfolio',
    pronunciation: '/pɔːtˈfəʊliəʊ/',
    partOfSpeech: 'noun',
    meaning: 'danh mục đầu tư',
    example: 'Diversify your investment portfolio.',
    exampleTranslation: 'Đa dạng hóa danh mục đầu tư của bạn.',
    level: 'advanced',
    topic: 'Strategy',
  },
  {
    id: 'v509a',
    word: 'leverage',
    pronunciation: '/ˈliːvərɪdʒ/',
    partOfSpeech: 'noun/verb',
    meaning: 'đòn bẩy / tận dụng',
    example: 'We can leverage our market position.',
    exampleTranslation: 'Chúng ta có thể tận dụng vị thế thị trường.',
    level: 'advanced',
    topic: 'Strategy',
  },
  {
    id: 'v510a',
    word: 'scalability',
    pronunciation: '/ˌskeɪləˈbɪləti/',
    partOfSpeech: 'noun',
    meaning: 'khả năng mở rộng',
    example: 'The business model has excellent scalability.',
    exampleTranslation: 'Mô hình kinh doanh có khả năng mở rộng tuyệt vời.',
    level: 'advanced',
    topic: 'Strategy',
  },
  // Advanced Finance & Investment
  {
    id: 'v511a',
    word: 'depreciation',
    pronunciation: '/dɪˌpriːʃiˈeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'khấu hao',
    example: 'Calculate annual depreciation expenses.',
    exampleTranslation: 'Tính chi phí khấu hao hàng năm.',
    level: 'advanced',
    topic: 'Finance',
  },
  {
    id: 'v512a',
    word: 'amortization',
    pronunciation: '/əˌmɔːtaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'phân bổ',
    example: 'Loan amortization schedule is available.',
    exampleTranslation: 'Lịch phân bổ khoản vay đã có.',
    level: 'advanced',
    topic: 'Finance',
  },
  {
    id: 'v513a',
    word: 'liquidity',
    pronunciation: '/lɪˈkwɪdəti/',
    partOfSpeech: 'noun',
    meaning: 'thanh khoản',
    example: 'The company has strong liquidity.',
    exampleTranslation: 'Công ty có thanh khoản mạnh.',
    level: 'advanced',
    topic: 'Finance',
  },
  {
    id: 'v514a',
    word: 'solvency',
    pronunciation: '/ˈsɒlvənsi/',
    partOfSpeech: 'noun',
    meaning: 'khả năng thanh toán',
    example: 'Solvency ratios indicate financial health.',
    exampleTranslation: 'Tỷ lệ khả năng thanh toán cho thấy sức khỏe tài chính.',
    level: 'advanced',
    topic: 'Finance',
  },
  {
    id: 'v515a',
    word: 'equity',
    pronunciation: '/ˈekwəti/',
    partOfSpeech: 'noun',
    meaning: 'vốn chủ sở hữu',
    example: 'Shareholders\' equity increased this quarter.',
    exampleTranslation: 'Vốn chủ sở hữu tăng trong quý này.',
    level: 'advanced',
    topic: 'Finance',
  },
  {
    id: 'v516a',
    word: 'liability',
    pronunciation: '/ˌlaɪəˈbɪləti/',
    partOfSpeech: 'noun',
    meaning: 'nợ phải trả',
    example: 'Total liabilities decreased by 10%.',
    exampleTranslation: 'Tổng nợ phải trả giảm 10%.',
    level: 'advanced',
    topic: 'Finance',
  },
  {
    id: 'v517a',
    word: 'dividend',
    pronunciation: '/ˈdɪvɪdend/',
    partOfSpeech: 'noun',
    meaning: 'cổ tức',
    example: 'The company pays quarterly dividends.',
    exampleTranslation: 'Công ty trả cổ tức hàng quý.',
    level: 'advanced',
    topic: 'Finance',
  },
  {
    id: 'v518a',
    word: 'arbitrage',
    pronunciation: '/ˈɑːbɪtrɑːʒ/',
    partOfSpeech: 'noun',
    meaning: 'kinh doanh chênh lệch giá',
    example: 'Arbitrage opportunities exist in global markets.',
    exampleTranslation: 'Cơ hội kinh doanh chênh lệch giá tồn tại ở thị trường toàn cầu.',
    level: 'advanced',
    topic: 'Finance',
  },
  {
    id: 'v519a',
    word: 'hedge',
    pronunciation: '/hedʒ/',
    partOfSpeech: 'noun/verb',
    meaning: 'phòng ngừa rủi ro',
    example: 'We hedge against currency fluctuations.',
    exampleTranslation: 'Chúng tôi phòng ngừa rủi ro biến động tiền tệ.',
    level: 'advanced',
    topic: 'Finance',
  },
  {
    id: 'v520a',
    word: 'derivative',
    pronunciation: '/dɪˈrɪvətɪv/',
    partOfSpeech: 'noun',
    meaning: 'công cụ phái sinh',
    example: 'Financial derivatives are complex instruments.',
    exampleTranslation: 'Công cụ phái sinh tài chính là những công cụ phức tạp.',
    level: 'advanced',
    topic: 'Finance',
  },
  // Advanced Economics & Market
  {
    id: 'v521a',
    word: 'macroeconomic',
    pronunciation: '/ˌmækrəʊˌiːkəˈnɒmɪk/',
    partOfSpeech: 'adjective',
    meaning: 'kinh tế vĩ mô',
    example: 'Macroeconomic factors affect all businesses.',
    exampleTranslation: 'Các yếu tố kinh tế vĩ mô ảnh hưởng đến tất cả doanh nghiệp.',
    level: 'advanced',
    topic: 'Economics',
  },
  {
    id: 'v522a',
    word: 'microeconomic',
    pronunciation: '/ˌmaɪkrəʊˌiːkəˈnɒmɪk/',
    partOfSpeech: 'adjective',
    meaning: 'kinh tế vi mô',
    example: 'Microeconomic analysis focuses on individual markets.',
    exampleTranslation: 'Phân tích kinh tế vi mô tập trung vào từng thị trường riêng lẻ.',
    level: 'advanced',
    topic: 'Economics',
  },
  {
    id: 'v523a',
    word: 'inflation',
    pronunciation: '/ɪnˈfleɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'lạm phát',
    example: 'Inflation rate reached 5% annually.',
    exampleTranslation: 'Tỷ lệ lạm phát đạt 5% hàng năm.',
    level: 'advanced',
    topic: 'Economics',
  },
  {
    id: 'v524a',
    word: 'deflation',
    pronunciation: '/dɪˈfleɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'giảm phát',
    example: 'Deflation can harm economic growth.',
    exampleTranslation: 'Giảm phát có thể gây hại cho tăng trưởng kinh tế.',
    level: 'advanced',
    topic: 'Economics',
  },
  {
    id: 'v525a',
    word: 'recession',
    pronunciation: '/rɪˈseʃn/',
    partOfSpeech: 'noun',
    meaning: 'suy thoái',
    example: 'The economy is entering a recession.',
    exampleTranslation: 'Nền kinh tế đang bước vào suy thoái.',
    level: 'advanced',
    topic: 'Economics',
  },
  {
    id: 'v526a',
    word: 'prosperity',
    pronunciation: '/prɒˈsperəti/',
    partOfSpeech: 'noun',
    meaning: 'thịnh vượng',
    example: 'The nation enjoys economic prosperity.',
    exampleTranslation: 'Quốc gia tận hưởng sự thịnh vượng kinh tế.',
    level: 'advanced',
    topic: 'Economics',
  },
  {
    id: 'v527a',
    word: 'volatility',
    pronunciation: '/ˌvɒləˈtɪləti/',
    partOfSpeech: 'noun',
    meaning: 'biến động',
    example: 'Market volatility increased significantly.',
    exampleTranslation: 'Biến động thị trường tăng đáng kể.',
    level: 'advanced',
    topic: 'Economics',
  },
  {
    id: 'v528a',
    word: 'monopoly',
    pronunciation: '/məˈnɒpəli/',
    partOfSpeech: 'noun',
    meaning: 'độc quyền',
    example: 'The company holds a monopoly in this sector.',
    exampleTranslation: 'Công ty nắm độc quyền trong lĩnh vực này.',
    level: 'advanced',
    topic: 'Economics',
  },
  {
    id: 'v529a',
    word: 'oligopoly',
    pronunciation: '/ˌɒlɪˈɡɒpəli/',
    partOfSpeech: 'noun',
    meaning: 'độc quyền nhóm',
    example: 'The market is dominated by an oligopoly.',
    exampleTranslation: 'Thị trường bị chi phối bởi độc quyền nhóm.',
    level: 'advanced',
    topic: 'Economics',
  },
  {
    id: 'v530a',
    word: 'antitrust',
    pronunciation: '/ˌæntiˈtrʌst/',
    partOfSpeech: 'adjective',
    meaning: 'chống độc quyền',
    example: 'Antitrust regulations prevent monopolies.',
    exampleTranslation: 'Quy định chống độc quyền ngăn chặn độc quyền.',
    level: 'advanced',
    topic: 'Economics',
  },
  // Advanced Legal & Compliance
  {
    id: 'v531a',
    word: 'litigation',
    pronunciation: '/ˌlɪtɪˈɡeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'kiện tụng',
    example: 'The company is involved in litigation.',
    exampleTranslation: 'Công ty đang tham gia vào vụ kiện tụng.',
    level: 'advanced',
    topic: 'Legal',
  },
  {
    id: 'v532a',
    word: 'arbitration',
    pronunciation: '/ˌɑːbɪˈtreɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'trọng tài',
    example: 'The dispute will go to arbitration.',
    exampleTranslation: 'Tranh chấp sẽ được đưa ra trọng tài.',
    level: 'advanced',
    topic: 'Legal',
  },
  {
    id: 'v533a',
    word: 'jurisdiction',
    pronunciation: '/ˌdʒʊərɪsˈdɪkʃn/',
    partOfSpeech: 'noun',
    meaning: 'quyền tài phán',
    example: 'This falls under federal jurisdiction.',
    exampleTranslation: 'Điều này thuộc thẩm quyền liên bang.',
    level: 'advanced',
    topic: 'Legal',
  },
  {
    id: 'v534a',
    word: 'precedent',
    pronunciation: '/ˈpresɪdənt/',
    partOfSpeech: 'noun',
    meaning: 'tiền lệ',
    example: 'This case sets a legal precedent.',
    exampleTranslation: 'Vụ án này tạo ra tiền lệ pháp lý.',
    level: 'advanced',
    topic: 'Legal',
  },
  {
    id: 'v535a',
    word: 'indemnity',
    pronunciation: '/ɪnˈdemnəti/',
    partOfSpeech: 'noun',
    meaning: 'bồi thường',
    example: 'The contract includes an indemnity clause.',
    exampleTranslation: 'Hợp đồng bao gồm điều khoản bồi thường.',
    level: 'advanced',
    topic: 'Legal',
  },
  {
    id: 'v536a',
    word: 'negligence',
    pronunciation: '/ˈneɡlɪdʒəns/',
    partOfSpeech: 'noun',
    meaning: 'sơ suất',
    example: 'The lawsuit claims negligence.',
    exampleTranslation: 'Vụ kiện cáo buộc sơ suất.',
    level: 'advanced',
    topic: 'Legal',
  },
  {
    id: 'v537a',
    word: 'liability',
    pronunciation: '/ˌlaɪəˈbɪləti/',
    partOfSpeech: 'noun',
    meaning: 'trách nhiệm pháp lý',
    example: 'The company denies any liability.',
    exampleTranslation: 'Công ty phủ nhận mọi trách nhiệm pháp lý.',
    level: 'advanced',
    topic: 'Legal',
  },
  {
    id: 'v538a',
    word: 'breach',
    pronunciation: '/briːtʃ/',
    partOfSpeech: 'noun/verb',
    meaning: 'vi phạm',
    example: 'This constitutes a breach of contract.',
    exampleTranslation: 'Điều này cấu thành vi phạm hợp đồng.',
    level: 'advanced',
    topic: 'Legal',
  },
  {
    id: 'v539a',
    word: 'infringement',
    pronunciation: '/ɪnˈfrɪndʒmənt/',
    partOfSpeech: 'noun',
    meaning: 'xâm phạm',
    example: 'The patent infringement case was settled.',
    exampleTranslation: 'Vụ xâm phạm bằng sáng chế đã được giải quyết.',
    level: 'advanced',
    topic: 'Legal',
  },
  {
    id: 'v540a',
    word: 'statute',
    pronunciation: '/ˈstætʃuːt/',
    partOfSpeech: 'noun',
    meaning: 'đạo luật',
    example: 'The statute of limitations has expired.',
    exampleTranslation: 'Thời hiệu theo luật định đã hết hạn.',
    level: 'advanced',
    topic: 'Legal',
  },
  // Advanced Technology & Digital
  {
    id: 'v541a',
    word: 'algorithm',
    pronunciation: '/ˈælɡərɪðəm/',
    partOfSpeech: 'noun',
    meaning: 'thuật toán',
    example: 'Our algorithm improves search results.',
    exampleTranslation: 'Thuật toán của chúng tôi cải thiện kết quả tìm kiếm.',
    level: 'advanced',
    topic: 'Technology',
  },
  {
    id: 'v542a',
    word: 'encryption',
    pronunciation: '/ɪnˈkrɪpʃn/',
    partOfSpeech: 'noun',
    meaning: 'mã hóa',
    example: 'Data encryption ensures security.',
    exampleTranslation: 'Mã hóa dữ liệu đảm bảo an toàn.',
    level: 'advanced',
    topic: 'Technology',
  },
  {
    id: 'v543a',
    word: 'cybersecurity',
    pronunciation: '/ˌsaɪbəsɪˈkjʊərəti/',
    partOfSpeech: 'noun',
    meaning: 'an ninh mạng',
    example: 'Cybersecurity is a top priority.',
    exampleTranslation: 'An ninh mạng là ưu tiên hàng đầu.',
    level: 'advanced',
    topic: 'Technology',
  },
  {
    id: 'v544a',
    word: 'blockchain',
    pronunciation: '/ˈblɒktʃeɪn/',
    partOfSpeech: 'noun',
    meaning: 'chuỗi khối',
    example: 'Blockchain technology revolutionizes finance.',
    exampleTranslation: 'Công nghệ chuỗi khối cách mạng hóa tài chính.',
    level: 'advanced',
    topic: 'Technology',
  },
  {
    id: 'v545a',
    word: 'artificial intelligence',
    pronunciation: '/ˌɑːtɪfɪʃl ɪnˈtelɪdʒəns/',
    partOfSpeech: 'noun',
    meaning: 'trí tuệ nhân tạo',
    example: 'Artificial intelligence drives innovation.',
    exampleTranslation: 'Trí tuệ nhân tạo thúc đẩy đổi mới.',
    level: 'advanced',
    topic: 'Technology',
  },
  {
    id: 'v546a',
    word: 'machine learning',
    pronunciation: '/məˈʃiːn ˈlɜːnɪŋ/',
    partOfSpeech: 'noun',
    meaning: 'học máy',
    example: 'Machine learning improves predictions.',
    exampleTranslation: 'Học máy cải thiện dự đoán.',
    level: 'advanced',
    topic: 'Technology',
  },
  {
    id: 'v547a',
    word: 'cloud computing',
    pronunciation: '/klaʊd kəmˈpjuːtɪŋ/',
    partOfSpeech: 'noun',
    meaning: 'điện toán đám mây',
    example: 'Cloud computing reduces infrastructure costs.',
    exampleTranslation: 'Điện toán đám mây giảm chi phí hạ tầng.',
    level: 'advanced',
    topic: 'Technology',
  },
  {
    id: 'v548a',
    word: 'virtualization',
    pronunciation: '/ˌvɜːtʃuəlaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'ảo hóa',
    example: 'Virtualization maximizes server efficiency.',
    exampleTranslation: 'Ảo hóa tối đa hóa hiệu suất máy chủ.',
    level: 'advanced',
    topic: 'Technology',
  },
  {
    id: 'v549a',
    word: 'integration',
    pronunciation: '/ˌɪntɪˈɡreɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'tích hợp',
    example: 'System integration is nearly complete.',
    exampleTranslation: 'Tích hợp hệ thống gần hoàn thành.',
    level: 'advanced',
    topic: 'Technology',
  },
  {
    id: 'v550a',
    word: 'interoperability',
    pronunciation: '/ˌɪntərˌɒpərəˈbɪləti/',
    partOfSpeech: 'noun',
    meaning: 'khả năng tương tác',
    example: 'Interoperability between systems is essential.',
    exampleTranslation: 'Khả năng tương tác giữa các hệ thống là thiết yếu.',
    level: 'advanced',
    topic: 'Technology',
  },
  // Advanced Management & Leadership
  {
    id: 'v551a',
    word: 'accountability',
    pronunciation: '/əˌkaʊntəˈbɪləti/',
    partOfSpeech: 'noun',
    meaning: 'trách nhiệm giải trình',
    example: 'Accountability is crucial for good governance.',
    exampleTranslation: 'Trách nhiệm giải trình rất quan trọng cho quản trị tốt.',
    level: 'advanced',
    topic: 'Leadership',
  },
  {
    id: 'v552a',
    word: 'stewardship',
    pronunciation: '/ˈstjuːədʃɪp/',
    partOfSpeech: 'noun',
    meaning: 'quản lý tận tâm',
    example: 'Environmental stewardship is our responsibility.',
    exampleTranslation: 'Quản lý môi trường tận tâm là trách nhiệm của chúng ta.',
    level: 'advanced',
    topic: 'Leadership',
  },
  {
    id: 'v553a',
    word: 'autonomy',
    pronunciation: '/ɔːˈtɒnəmi/',
    partOfSpeech: 'noun',
    meaning: 'quyền tự chủ',
    example: 'Employees value autonomy in their work.',
    exampleTranslation: 'Nhân viên coi trọng quyền tự chủ trong công việc.',
    level: 'advanced',
    topic: 'Leadership',
  },
  {
    id: 'v554a',
    word: 'resilience',
    pronunciation: '/rɪˈzɪliəns/',
    partOfSpeech: 'noun',
    meaning: 'sức bền / khả năng phục hồi',
    example: 'Organizational resilience helps overcome crises.',
    exampleTranslation: 'Khả năng phục hồi của tổ chức giúp vượt qua khủng hoảng.',
    level: 'advanced',
    topic: 'Leadership',
  },
  {
    id: 'v555a',
    word: 'agility',
    pronunciation: '/əˈdʒɪləti/',
    partOfSpeech: 'noun',
    meaning: 'sự nhanh nhẹn',
    example: 'Business agility is key to survival.',
    exampleTranslation: 'Sự nhanh nhẹn trong kinh doanh là chìa khóa để tồn tại.',
    level: 'advanced',
    topic: 'Leadership',
  },
  {
    id: 'v556a',
    word: 'transformation',
    pronunciation: '/ˌtrænsfəˈmeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'chuyển đổi',
    example: 'Digital transformation is underway.',
    exampleTranslation: 'Chuyển đổi số đang được tiến hành.',
    level: 'advanced',
    topic: 'Leadership',
  },
  {
    id: 'v557a',
    word: 'optimization',
    pronunciation: '/ˌɒptɪmaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'tối ưu hóa',
    example: 'Process optimization reduces waste.',
    exampleTranslation: 'Tối ưu hóa quy trình giảm lãng phí.',
    level: 'advanced',
    topic: 'Leadership',
  },
  {
    id: 'v558a',
    word: 'differentiation',
    pronunciation: '/ˌdɪfərenʃiˈeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'sự khác biệt hóa',
    example: 'Product differentiation creates competitive advantage.',
    exampleTranslation: 'Khác biệt hóa sản phẩm tạo lợi thế cạnh tranh.',
    level: 'advanced',
    topic: 'Leadership',
  },
  {
    id: 'v559a',
    word: 'sustainability',
    pronunciation: '/səˌsteɪnəˈbɪləti/',
    partOfSpeech: 'noun',
    meaning: 'tính bền vững',
    example: 'Sustainability is core to our mission.',
    exampleTranslation: 'Tính bền vững là cốt lõi của sứ mệnh chúng tôi.',
    level: 'advanced',
    topic: 'Leadership',
  },
  {
    id: 'v560a',
    word: 'transparency',
    pronunciation: '/trænsˈpærənsi/',
    partOfSpeech: 'noun',
    meaning: 'tính minh bạch',
    example: 'Corporate transparency builds trust.',
    exampleTranslation: 'Tính minh bạch của doanh nghiệp xây dựng niềm tin.',
    level: 'advanced',
    topic: 'Leadership',
  },
  // Advanced Communication & Rhetoric
  {
    id: 'v561a',
    word: 'articulate',
    pronunciation: '/ɑːˈtɪkjuleɪt/',
    partOfSpeech: 'verb/adjective',
    meaning: 'diễn đạt rõ ràng',
    example: 'She can articulate complex ideas clearly.',
    exampleTranslation: 'Cô ấy có thể diễn đạt ý tưởng phức tạp một cách rõ ràng.',
    level: 'advanced',
    topic: 'Communication',
  },
  {
    id: 'v562a',
    word: 'eloquent',
    pronunciation: '/ˈeləkwənt/',
    partOfSpeech: 'adjective',
    meaning: 'hùng hồn / có sức thuyết phục',
    example: 'His eloquent speech moved the audience.',
    exampleTranslation: 'Bài phát biểu hùng hồn của ông đã xúc động khán giả.',
    level: 'advanced',
    topic: 'Communication',
  },
  {
    id: 'v563a',
    word: 'persuasive',
    pronunciation: '/pəˈsweɪsɪv/',
    partOfSpeech: 'adjective',
    meaning: 'có sức thuyết phục',
    example: 'The proposal was highly persuasive.',
    exampleTranslation: 'Đề xuất rất có sức thuyết phục.',
    level: 'advanced',
    topic: 'Communication',
  },
  {
    id: 'v564a',
    word: 'rhetoric',
    pronunciation: '/ˈretərɪk/',
    partOfSpeech: 'noun',
    meaning: 'hùng biện',
    example: 'Political rhetoric often lacks substance.',
    exampleTranslation: 'Hùng biện chính trị thường thiếu nội dung thực chất.',
    level: 'advanced',
    topic: 'Communication',
  },
  {
    id: 'v565a',
    word: 'discourse',
    pronunciation: '/ˈdɪskɔːs/',
    partOfSpeech: 'noun',
    meaning: 'diễn ngôn / thảo luận',
    example: 'Academic discourse promotes critical thinking.',
    exampleTranslation: 'Diễn ngôn học thuật thúc đẩy tư duy phản biện.',
    level: 'advanced',
    topic: 'Communication',
  },
  {
    id: 'v566a',
    word: 'ambiguity',
    pronunciation: '/ˌæmbɪˈɡjuːəti/',
    partOfSpeech: 'noun',
    meaning: 'sự mơ hồ',
    example: 'Avoid ambiguity in legal documents.',
    exampleTranslation: 'Tránh sự mơ hồ trong tài liệu pháp lý.',
    level: 'advanced',
    topic: 'Communication',
  },
  {
    id: 'v567a',
    word: 'ambiguous',
    pronunciation: '/æmˈbɪɡjuəs/',
    partOfSpeech: 'adjective',
    meaning: 'mơ hồ',
    example: 'The statement was deliberately ambiguous.',
    exampleTranslation: 'Tuyên bố có chủ ý mơ hồ.',
    level: 'advanced',
    topic: 'Communication',
  },
  {
    id: 'v568a',
    word: 'coherent',
    pronunciation: '/kəʊˈhɪərənt/',
    partOfSpeech: 'adjective',
    meaning: 'mạch lạc',
    example: 'Present a coherent argument.',
    exampleTranslation: 'Trình bày lập luận mạch lạc.',
    level: 'advanced',
    topic: 'Communication',
  },
  {
    id: 'v569a',
    word: 'concise',
    pronunciation: '/kənˈsaɪs/',
    partOfSpeech: 'adjective',
    meaning: 'súc tích',
    example: 'Keep your message concise and clear.',
    exampleTranslation: 'Giữ thông điệp súc tích và rõ ràng.',
    level: 'advanced',
    topic: 'Communication',
  },
  {
    id: 'v570a',
    word: 'nuance',
    pronunciation: '/ˈnjuːɑːns/',
    partOfSpeech: 'noun',
    meaning: 'sắc thái',
    example: 'Understanding cultural nuances is important.',
    exampleTranslation: 'Hiểu sắc thái văn hóa là quan trọng.',
    level: 'advanced',
    topic: 'Communication',
  },
  // Advanced Analytics & Research
  {
    id: 'v571a',
    word: 'correlation',
    pronunciation: '/ˌkɒrəˈleɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'tương quan',
    example: 'There is a strong correlation between these factors.',
    exampleTranslation: 'Có sự tương quan mạnh giữa các yếu tố này.',
    level: 'advanced',
    topic: 'Analytics',
  },
  {
    id: 'v572a',
    word: 'causation',
    pronunciation: '/kɔːˈzeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'quan hệ nhân quả',
    example: 'Correlation does not imply causation.',
    exampleTranslation: 'Tương quan không hàm ý quan hệ nhân quả.',
    level: 'advanced',
    topic: 'Analytics',
  },
  {
    id: 'v573a',
    word: 'hypothesis',
    pronunciation: '/haɪˈpɒθəsɪs/',
    partOfSpeech: 'noun',
    meaning: 'giả thuyết',
    example: 'We need to test our hypothesis.',
    exampleTranslation: 'Chúng ta cần kiểm tra giả thuyết.',
    level: 'advanced',
    topic: 'Analytics',
  },
  {
    id: 'v574a',
    word: 'methodology',
    pronunciation: '/ˌmeθəˈdɒlədʒi/',
    partOfSpeech: 'noun',
    meaning: 'phương pháp luận',
    example: 'Our research methodology is rigorous.',
    exampleTranslation: 'Phương pháp luận nghiên cứu của chúng tôi rất chặt chẽ.',
    level: 'advanced',
    topic: 'Analytics',
  },
  {
    id: 'v575a',
    word: 'quantitative',
    pronunciation: '/ˈkwɒntɪtətɪv/',
    partOfSpeech: 'adjective',
    meaning: 'định lượng',
    example: 'We use quantitative analysis methods.',
    exampleTranslation: 'Chúng tôi sử dụng phương pháp phân tích định lượng.',
    level: 'advanced',
    topic: 'Analytics',
  },
  {
    id: 'v576a',
    word: 'qualitative',
    pronunciation: '/ˈkwɒlɪtətɪv/',
    partOfSpeech: 'adjective',
    meaning: 'định tính',
    example: 'Qualitative research provides deep insights.',
    exampleTranslation: 'Nghiên cứu định tính cung cấp hiểu biết sâu sắc.',
    level: 'advanced',
    topic: 'Analytics',
  },
  {
    id: 'v577a',
    word: 'empirical',
    pronunciation: '/ɪmˈpɪrɪkl/',
    partOfSpeech: 'adjective',
    meaning: 'thực nghiệm',
    example: 'Empirical evidence supports the theory.',
    exampleTranslation: 'Bằng chứng thực nghiệm hỗ trợ lý thuyết.',
    level: 'advanced',
    topic: 'Analytics',
  },
  {
    id: 'v578a',
    word: 'inference',
    pronunciation: '/ˈɪnfərəns/',
    partOfSpeech: 'noun',
    meaning: 'suy luận',
    example: 'Draw inferences from the data.',
    exampleTranslation: 'Rút ra suy luận từ dữ liệu.',
    level: 'advanced',
    topic: 'Analytics',
  },
  {
    id: 'v579a',
    word: 'extrapolate',
    pronunciation: '/ɪkˈstræpəleɪt/',
    partOfSpeech: 'verb',
    meaning: 'ngoại suy',
    example: 'We can extrapolate future trends from current data.',
    exampleTranslation: 'Chúng ta có thể ngoại suy xu hướng tương lai từ dữ liệu hiện tại.',
    level: 'advanced',
    topic: 'Analytics',
  },
  {
    id: 'v580a',
    word: 'anomaly',
    pronunciation: '/əˈnɒməli/',
    partOfSpeech: 'noun',
    meaning: 'bất thường',
    example: 'The data shows an anomaly in Q3.',
    exampleTranslation: 'Dữ liệu cho thấy sự bất thường trong quý 3.',
    level: 'advanced',
    topic: 'Analytics',
  },
  // Advanced Operations & Processes
  {
    id: 'v581a',
    word: 'procurement',
    pronunciation: '/prəˈkjʊəmənt/',
    partOfSpeech: 'noun',
    meaning: 'mua sắm / thu mua',
    example: 'The procurement process is centralized.',
    exampleTranslation: 'Quy trình mua sắm được tập trung hóa.',
    level: 'advanced',
    topic: 'Operations',
  },
  {
    id: 'v582a',
    word: 'inventory',
    pronunciation: '/ˈɪnvəntri/',
    partOfSpeech: 'noun',
    meaning: 'hàng tồn kho',
    example: 'Inventory turnover has improved.',
    exampleTranslation: 'Vòng quay hàng tồn kho đã được cải thiện.',
    level: 'advanced',
    topic: 'Operations',
  },
  {
    id: 'v583a',
    word: 'throughput',
    pronunciation: '/ˈθruːpʊt/',
    partOfSpeech: 'noun',
    meaning: 'năng suất',
    example: 'System throughput increased by 20%.',
    exampleTranslation: 'Năng suất hệ thống tăng 20%.',
    level: 'advanced',
    topic: 'Operations',
  },
  {
    id: 'v584a',
    word: 'bottleneck',
    pronunciation: '/ˈbɒtlnek/',
    partOfSpeech: 'noun',
    meaning: 'nút thắt',
    example: 'We identified the bottleneck in production.',
    exampleTranslation: 'Chúng tôi đã xác định nút thắt trong sản xuất.',
    level: 'advanced',
    topic: 'Operations',
  },
  {
    id: 'v585a',
    word: 'redundancy',
    pronunciation: '/rɪˈdʌndənsi/',
    partOfSpeech: 'noun',
    meaning: 'dư thừa / dự phòng',
    example: 'System redundancy ensures reliability.',
    exampleTranslation: 'Dự phòng hệ thống đảm bảo độ tin cậy.',
    level: 'advanced',
    topic: 'Operations',
  },
  {
    id: 'v586a',
    word: 'contingency',
    pronunciation: '/kənˈtɪndʒənsi/',
    partOfSpeech: 'noun',
    meaning: 'dự phòng',
    example: 'We have a contingency plan in place.',
    exampleTranslation: 'Chúng tôi có kế hoạch dự phòng sẵn sàng.',
    level: 'advanced',
    topic: 'Operations',
  },
  {
    id: 'v587a',
    word: 'mitigation',
    pronunciation: '/ˌmɪtɪˈɡeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'giảm thiểu',
    example: 'Risk mitigation strategies are essential.',
    exampleTranslation: 'Chiến lược giảm thiểu rủi ro là thiết yếu.',
    level: 'advanced',
    topic: 'Operations',
  },
  {
    id: 'v588a',
    word: 'calibration',
    pronunciation: '/ˌkælɪˈbreɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'hiệu chuẩn',
    example: 'Equipment calibration is scheduled monthly.',
    exampleTranslation: 'Hiệu chuẩn thiết bị được lên lịch hàng tháng.',
    level: 'advanced',
    topic: 'Operations',
  },
  {
    id: 'v589a',
    word: 'synchronization',
    pronunciation: '/ˌsɪŋkrənaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'đồng bộ hóa',
    example: 'Data synchronization occurs in real-time.',
    exampleTranslation: 'Đồng bộ hóa dữ liệu xảy ra theo thời gian thực.',
    level: 'advanced',
    topic: 'Operations',
  },
  {
    id: 'v590a',
    word: 'standardization',
    pronunciation: '/ˌstændədaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'tiêu chuẩn hóa',
    example: 'Standardization improves quality control.',
    exampleTranslation: 'Tiêu chuẩn hóa cải thiện kiểm soát chất lượng.',
    level: 'advanced',
    topic: 'Operations',
  },
  // Advanced Marketing & Branding
  {
    id: 'v591a',
    word: 'segmentation',
    pronunciation: '/ˌseɡmenˈteɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'phân khúc',
    example: 'Market segmentation identifies target groups.',
    exampleTranslation: 'Phân khúc thị trường xác định nhóm mục tiêu.',
    level: 'advanced',
    topic: 'Marketing',
  },
  {
    id: 'v592a',
    word: 'demographic',
    pronunciation: '/ˌdeməˈɡræfɪk/',
    partOfSpeech: 'adjective/noun',
    meaning: 'nhân khẩu học',
    example: 'Analyze demographic data carefully.',
    exampleTranslation: 'Phân tích dữ liệu nhân khẩu học cẩn thận.',
    level: 'advanced',
    topic: 'Marketing',
  },
  {
    id: 'v593a',
    word: 'psychographic',
    pronunciation: '/ˌsaɪkəˈɡræfɪk/',
    partOfSpeech: 'adjective',
    meaning: 'tâm lý học tiêu dùng',
    example: 'Psychographic profiling reveals consumer motivations.',
    exampleTranslation: 'Phân tích tâm lý học tiêu dùng tiết lộ động cơ người tiêu dùng.',
    level: 'advanced',
    topic: 'Marketing',
  },
  {
    id: 'v594a',
    word: 'attribution',
    pronunciation: '/ˌætrɪˈbjuːʃn/',
    partOfSpeech: 'noun',
    meaning: 'gán kết quả',
    example: 'Marketing attribution measures campaign effectiveness.',
    exampleTranslation: 'Gán kết quả marketing đo lường hiệu quả chiến dịch.',
    level: 'advanced',
    topic: 'Marketing',
  },
  {
    id: 'v595a',
    word: 'conversion',
    pronunciation: '/kənˈvɜːʃn/',
    partOfSpeech: 'noun',
    meaning: 'chuyển đổi',
    example: 'Conversion rates improved this quarter.',
    exampleTranslation: 'Tỷ lệ chuyển đổi cải thiện trong quý này.',
    level: 'advanced',
    topic: 'Marketing',
  },
  {
    id: 'v596a',
    word: 'engagement',
    pronunciation: '/ɪnˈɡeɪdʒmənt/',
    partOfSpeech: 'noun',
    meaning: 'sự tương tác',
    example: 'Social media engagement is growing.',
    exampleTranslation: 'Sự tương tác trên mạng xã hội đang tăng.',
    level: 'advanced',
    topic: 'Marketing',
  },
  {
    id: 'v597a',
    word: 'retention',
    pronunciation: '/rɪˈtenʃn/',
    partOfSpeech: 'noun',
    meaning: 'giữ chân',
    example: 'Customer retention is more cost-effective than acquisition.',
    exampleTranslation: 'Giữ chân khách hàng hiệu quả về chi phí hơn là thu hút mới.',
    level: 'advanced',
    topic: 'Marketing',
  },
  {
    id: 'v598a',
    word: 'churn',
    pronunciation: '/tʃɜːn/',
    partOfSpeech: 'noun/verb',
    meaning: 'tỷ lệ rời bỏ',
    example: 'Reduce customer churn with better service.',
    exampleTranslation: 'Giảm tỷ lệ khách hàng rời bỏ bằng dịch vụ tốt hơn.',
    level: 'advanced',
    topic: 'Marketing',
  },
  {
    id: 'v599a',
    word: 'viral',
    pronunciation: '/ˈvaɪrəl/',
    partOfSpeech: 'adjective',
    meaning: 'lan truyền',
    example: 'The campaign went viral on social media.',
    exampleTranslation: 'Chiến dịch lan truyền trên mạng xã hội.',
    level: 'advanced',
    topic: 'Marketing',
  },
  {
    id: 'v600a',
    word: 'influencer',
    pronunciation: '/ˈɪnfluənsə(r)/',
    partOfSpeech: 'noun',
    meaning: 'người có ảnh hưởng',
    example: 'Collaborate with influencers for brand awareness.',
    exampleTranslation: 'Hợp tác với người có ảnh hưởng để nâng cao nhận thức thương hiệu.',
    level: 'advanced',
    topic: 'Marketing',
  },
  // Advanced HR & Organizational Development
  {
    id: 'v601a',
    word: 'competency',
    pronunciation: '/ˈkɒmpɪtənsi/',
    partOfSpeech: 'noun',
    meaning: 'năng lực',
    example: 'Core competencies define our success.',
    exampleTranslation: 'Năng lực cốt lõi xác định thành công của chúng tôi.',
    level: 'advanced',
    topic: 'HR',
  },
  {
    id: 'v602a',
    word: 'proficiency',
    pronunciation: '/prəˈfɪʃnsi/',
    partOfSpeech: 'noun',
    meaning: 'sự thành thạo',
    example: 'Language proficiency is required for this role.',
    exampleTranslation: 'Sự thành thạo ngôn ngữ là yêu cầu cho vị trí này.',
    level: 'advanced',
    topic: 'HR',
  },
  {
    id: 'v603a',
    word: 'aptitude',
    pronunciation: '/ˈæptɪtjuːd/',
    partOfSpeech: 'noun',
    meaning: 'năng khiếu',
    example: 'He has an aptitude for analytical thinking.',
    exampleTranslation: 'Anh ấy có năng khiếu tư duy phân tích.',
    level: 'advanced',
    topic: 'HR',
  },
  {
    id: 'v604a',
    word: 'onboarding',
    pronunciation: '/ˈɒnbɔːdɪŋ/',
    partOfSpeech: 'noun',
    meaning: 'quá trình hòa nhập',
    example: 'Effective onboarding improves retention.',
    exampleTranslation: 'Quá trình hòa nhập hiệu quả cải thiện tỷ lệ giữ chân.',
    level: 'advanced',
    topic: 'HR',
  },
  {
    id: 'v605a',
    word: 'offboarding',
    pronunciation: '/ˈɒfbɔːdɪŋ/',
    partOfSpeech: 'noun',
    meaning: 'quá trình rời công ty',
    example: 'Proper offboarding protects company interests.',
    exampleTranslation: 'Quá trình rời công ty đúng cách bảo vệ quyền lợi công ty.',
    level: 'advanced',
    topic: 'HR',
  },
  {
    id: 'v606a',
    word: 'attrition',
    pronunciation: '/əˈtrɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'sự rời bỏ (nhân viên)',
    example: 'High attrition rates indicate problems.',
    exampleTranslation: 'Tỷ lệ rời bỏ cao cho thấy vấn đề.',
    level: 'advanced',
    topic: 'HR',
  },
  {
    id: 'v607a',
    word: 'compensation',
    pronunciation: '/ˌkɒmpenˈseɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'đền bù / thù lao',
    example: 'Competitive compensation attracts talent.',
    exampleTranslation: 'Thù lao cạnh tranh thu hút nhân tài.',
    level: 'advanced',
    topic: 'HR',
  },
  {
    id: 'v608a',
    word: 'remuneration',
    pronunciation: '/rɪˌmjuːnəˈreɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'thù lao',
    example: 'Remuneration packages include benefits.',
    exampleTranslation: 'Gói thù lao bao gồm phúc lợi.',
    level: 'advanced',
    topic: 'HR',
  },
  {
    id: 'v609a',
    word: 'appraisal',
    pronunciation: '/əˈpreɪzl/',
    partOfSpeech: 'noun',
    meaning: 'đánh giá',
    example: 'Annual appraisals measure performance.',
    exampleTranslation: 'Đánh giá hàng năm đo lường hiệu suất.',
    level: 'advanced',
    topic: 'HR',
  },
  {
    id: 'v610a',
    word: 'mentorship',
    pronunciation: '/ˈmentɔːʃɪp/',
    partOfSpeech: 'noun',
    meaning: 'sự cố vấn',
    example: 'Mentorship programs develop future leaders.',
    exampleTranslation: 'Chương trình cố vấn phát triển nhà lãnh đạo tương lai.',
    level: 'advanced',
    topic: 'HR',
  },
  // Advanced Project Management
  {
    id: 'v611a',
    word: 'deliverable',
    pronunciation: '/dɪˈlɪvərəbl/',
    partOfSpeech: 'noun',
    meaning: 'sản phẩm bàn giao',
    example: 'All project deliverables are on schedule.',
    exampleTranslation: 'Tất cả sản phẩm bàn giao đúng tiến độ.',
    level: 'advanced',
    topic: 'Project Management',
  },
  {
    id: 'v612a',
    word: 'stakeholder',
    pronunciation: '/ˈsteɪkhəʊldə(r)/',
    partOfSpeech: 'noun',
    meaning: 'bên liên quan',
    example: 'Engage stakeholders throughout the project.',
    exampleTranslation: 'Thu hút các bên liên quan trong suốt dự án.',
    level: 'advanced',
    topic: 'Project Management',
  },
  {
    id: 'v613a',
    word: 'milestone',
    pronunciation: '/ˈmaɪlstəʊn/',
    partOfSpeech: 'noun',
    meaning: 'cột mốc',
    example: 'We reached an important milestone today.',
    exampleTranslation: 'Chúng ta đã đạt được cột mốc quan trọng hôm nay.',
    level: 'advanced',
    topic: 'Project Management',
  },
  {
    id: 'v614a',
    word: 'methodology',
    pronunciation: '/ˌmeθəˈdɒlədʒi/',
    partOfSpeech: 'noun',
    meaning: 'phương pháp',
    example: 'We use Agile methodology for development.',
    exampleTranslation: 'Chúng tôi sử dụng phương pháp Agile để phát triển.',
    level: 'advanced',
    topic: 'Project Management',
  },
  {
    id: 'v615a',
    word: 'iteration',
    pronunciation: '/ˌɪtəˈreɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'vòng lặp / lần lặp',
    example: 'Each iteration improves the product.',
    exampleTranslation: 'Mỗi lần lặp cải thiện sản phẩm.',
    level: 'advanced',
    topic: 'Project Management',
  },
  {
    id: 'v616a',
    word: 'retrospective',
    pronunciation: '/ˌretrəˈspektɪv/',
    partOfSpeech: 'noun/adjective',
    meaning: 'hồi cố',
    example: 'Hold a retrospective after each sprint.',
    exampleTranslation: 'Tổ chức buổi hồi cố sau mỗi sprint.',
    level: 'advanced',
    topic: 'Project Management',
  },
  {
    id: 'v617a',
    word: 'sprint',
    pronunciation: '/sprɪnt/',
    partOfSpeech: 'noun',
    meaning: 'chu kỳ phát triển ngắn',
    example: 'The sprint lasts two weeks.',
    exampleTranslation: 'Sprint kéo dài hai tuần.',
    level: 'advanced',
    topic: 'Project Management',
  },
  {
    id: 'v618a',
    word: 'backlog',
    pronunciation: '/ˈbæklɒɡ/',
    partOfSpeech: 'noun',
    meaning: 'tồn đọng công việc',
    example: 'Prioritize items in the product backlog.',
    exampleTranslation: 'Ưu tiên các mục trong backlog sản phẩm.',
    level: 'advanced',
    topic: 'Project Management',
  },
  {
    id: 'v619a',
    word: 'scope',
    pronunciation: '/skəʊp/',
    partOfSpeech: 'noun',
    meaning: 'phạm vi',
    example: 'Define the project scope clearly.',
    exampleTranslation: 'Xác định phạm vi dự án rõ ràng.',
    level: 'advanced',
    topic: 'Project Management',
  },
  {
    id: 'v620a',
    word: 'baseline',
    pronunciation: '/ˈbeɪslaɪn/',
    partOfSpeech: 'noun',
    meaning: 'cơ sở / mốc tham chiếu',
    example: 'Establish a baseline for comparison.',
    exampleTranslation: 'Thiết lập mốc cơ sở để so sánh.',
    level: 'advanced',
    topic: 'Project Management',
  },
  // Advanced Quality & Excellence
  {
    id: 'v621a',
    word: 'meticulous',
    pronunciation: '/məˈtɪkjələs/',
    partOfSpeech: 'adjective',
    meaning: 'tỉ mỉ',
    example: 'She is meticulous in her work.',
    exampleTranslation: 'Cô ấy tỉ mỉ trong công việc.',
    level: 'advanced',
    topic: 'Quality',
  },
  {
    id: 'v622a',
    word: 'rigorous',
    pronunciation: '/ˈrɪɡərəs/',
    partOfSpeech: 'adjective',
    meaning: 'nghiêm ngặt',
    example: 'Rigorous testing ensures quality.',
    exampleTranslation: 'Kiểm tra nghiêm ngặt đảm bảo chất lượng.',
    level: 'advanced',
    topic: 'Quality',
  },
  {
    id: 'v623a',
    word: 'comprehensive',
    pronunciation: '/ˌkɒmprɪˈhensɪv/',
    partOfSpeech: 'adjective',
    meaning: 'toàn diện',
    example: 'We need a comprehensive solution.',
    exampleTranslation: 'Chúng ta cần giải pháp toàn diện.',
    level: 'advanced',
    topic: 'Quality',
  },
  {
    id: 'v624a',
    word: 'exemplary',
    pronunciation: '/ɪɡˈzempləri/',
    partOfSpeech: 'adjective',
    meaning: 'mẫu mực',
    example: 'His performance has been exemplary.',
    exampleTranslation: 'Hiệu suất của anh ấy rất mẫu mực.',
    level: 'advanced',
    topic: 'Quality',
  },
  {
    id: 'v625a',
    word: 'impeccable',
    pronunciation: '/ɪmˈpekəbl/',
    partOfSpeech: 'adjective',
    meaning: 'hoàn hảo / không tì vết',
    example: 'She has impeccable attention to detail.',
    exampleTranslation: 'Cô ấy có sự chú ý đến chi tiết hoàn hảo.',
    level: 'advanced',
    topic: 'Quality',
  },
  {
    id: 'v626a',
    word: 'precision',
    pronunciation: '/prɪˈsɪʒn/',
    partOfSpeech: 'noun',
    meaning: 'độ chính xác',
    example: 'This task requires precision.',
    exampleTranslation: 'Nhiệm vụ này đòi hỏi độ chính xác.',
    level: 'advanced',
    topic: 'Quality',
  },
  {
    id: 'v627a',
    word: 'thoroughness',
    pronunciation: '/ˈθʌrənəs/',
    partOfSpeech: 'noun',
    meaning: 'sự kỹ lưỡng',
    example: 'The audit praised their thoroughness.',
    exampleTranslation: 'Cuộc kiểm toán khen ngợi sự kỹ lưỡng của họ.',
    level: 'advanced',
    topic: 'Quality',
  },
  {
    id: 'v628a',
    word: 'diligence',
    pronunciation: '/ˈdɪlɪdʒəns/',
    partOfSpeech: 'noun',
    meaning: 'sự siêng năng',
    example: 'Due diligence is essential before acquisition.',
    exampleTranslation: 'Thẩm định kỹ lưỡng là thiết yếu trước khi mua lại.',
    level: 'advanced',
    topic: 'Quality',
  },
  {
    id: 'v629a',
    word: 'scrutiny',
    pronunciation: '/ˈskruːtəni/',
    partOfSpeech: 'noun',
    meaning: 'sự xem xét kỹ',
    example: 'The proposal is under scrutiny.',
    exampleTranslation: 'Đề xuất đang được xem xét kỹ.',
    level: 'advanced',
    topic: 'Quality',
  },
  {
    id: 'v630a',
    word: 'benchmark',
    pronunciation: '/ˈbentʃmɑːk/',
    partOfSpeech: 'noun/verb',
    meaning: 'điểm chuẩn',
    example: 'Benchmark against industry leaders.',
    exampleTranslation: 'So sánh với các công ty dẫn đầu ngành.',
    level: 'advanced',
    topic: 'Quality',
  },
  // Advanced Innovation & R&D
  {
    id: 'v631a',
    word: 'pioneering',
    pronunciation: '/ˌpaɪəˈnɪərɪŋ/',
    partOfSpeech: 'adjective',
    meaning: 'tiên phong',
    example: 'Our pioneering research leads the field.',
    exampleTranslation: 'Nghiên cứu tiên phong của chúng tôi dẫn đầu lĩnh vực.',
    level: 'advanced',
    topic: 'Innovation',
  },
  {
    id: 'v632a',
    word: 'disruptive',
    pronunciation: '/dɪsˈrʌptɪv/',
    partOfSpeech: 'adjective',
    meaning: 'gây đột phá',
    example: 'Disruptive technology changes markets.',
    exampleTranslation: 'Công nghệ đột phá thay đổi thị trường.',
    level: 'advanced',
    topic: 'Innovation',
  },
  {
    id: 'v633a',
    word: 'breakthrough',
    pronunciation: '/ˈbreɪkθruː/',
    partOfSpeech: 'noun',
    meaning: 'đột phá',
    example: 'Scientists made a major breakthrough.',
    exampleTranslation: 'Các nhà khoa học đã tạo ra đột phá lớn.',
    level: 'advanced',
    topic: 'Innovation',
  },
  {
    id: 'v634a',
    word: 'patent',
    pronunciation: '/ˈpætnt/',
    partOfSpeech: 'noun/verb',
    meaning: 'bằng sáng chế',
    example: 'We filed for a patent on the invention.',
    exampleTranslation: 'Chúng tôi đã nộp đơn xin bằng sáng chế cho phát minh.',
    level: 'advanced',
    topic: 'Innovation',
  },
  {
    id: 'v635a',
    word: 'proprietary',
    pronunciation: '/prəˈpraɪətri/',
    partOfSpeech: 'adjective',
    meaning: 'độc quyền',
    example: 'This is our proprietary technology.',
    exampleTranslation: 'Đây là công nghệ độc quyền của chúng tôi.',
    level: 'advanced',
    topic: 'Innovation',
  },
  {
    id: 'v636a',
    word: 'incubator',
    pronunciation: '/ˈɪŋkjubeɪtə(r)/',
    partOfSpeech: 'noun',
    meaning: 'vườn ươm',
    example: 'The startup joined our incubator program.',
    exampleTranslation: 'Startup đã tham gia chương trình vườn ươm của chúng tôi.',
    level: 'advanced',
    topic: 'Innovation',
  },
  {
    id: 'v637a',
    word: 'accelerator',
    pronunciation: '/əkˈseləreɪtə(r)/',
    partOfSpeech: 'noun',
    meaning: 'chương trình tăng tốc',
    example: 'The accelerator helps startups grow quickly.',
    exampleTranslation: 'Chương trình tăng tốc giúp startup phát triển nhanh.',
    level: 'advanced',
    topic: 'Innovation',
  },
  {
    id: 'v638a',
    word: 'iteration',
    pronunciation: '/ˌɪtəˈreɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'lần lặp',
    example: 'Multiple iterations improve the design.',
    exampleTranslation: 'Nhiều lần lặp cải thiện thiết kế.',
    level: 'advanced',
    topic: 'Innovation',
  },
  {
    id: 'v639a',
    word: 'prototype',
    pronunciation: '/ˈprəʊtətaɪp/',
    partOfSpeech: 'noun/verb',
    meaning: 'nguyên mẫu',
    example: 'We created a prototype for testing.',
    exampleTranslation: 'Chúng tôi đã tạo nguyên mẫu để thử nghiệm.',
    level: 'advanced',
    topic: 'Innovation',
  },
  {
    id: 'v640a',
    word: 'feasibility',
    pronunciation: '/ˌfiːzəˈbɪləti/',
    partOfSpeech: 'noun',
    meaning: 'tính khả thi',
    example: 'Conduct a feasibility study first.',
    exampleTranslation: 'Tiến hành nghiên cứu tính khả thi trước.',
    level: 'advanced',
    topic: 'Innovation',
  },
  // Advanced Crisis & Risk Management
  {
    id: 'v641a',
    word: 'vulnerability',
    pronunciation: '/ˌvʌlnərəˈbɪləti/',
    partOfSpeech: 'noun',
    meaning: 'lỗ hổng / điểm yếu',
    example: 'Identify vulnerabilities in the system.',
    exampleTranslation: 'Xác định lỗ hổng trong hệ thống.',
    level: 'advanced',
    topic: 'Risk Management',
  },
  {
    id: 'v642a',
    word: 'exposure',
    pronunciation: '/ɪkˈspəʊʒə(r)/',
    partOfSpeech: 'noun',
    meaning: 'rủi ro tiềm ẩn',
    example: 'Minimize financial exposure to risk.',
    exampleTranslation: 'Giảm thiểu rủi ro tài chính tiềm ẩn.',
    level: 'advanced',
    topic: 'Risk Management',
  },
  {
    id: 'v643a',
    word: 'escalation',
    pronunciation: '/ˌeskəˈleɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'leo thang',
    example: 'Prevent conflict escalation.',
    exampleTranslation: 'Ngăn chặn leo thang xung đột.',
    level: 'advanced',
    topic: 'Risk Management',
  },
  {
    id: 'v644a',
    word: 'catastrophic',
    pronunciation: '/ˌkætəˈstrɒfɪk/',
    partOfSpeech: 'adjective',
    meaning: 'thảm khốc',
    example: 'A catastrophic failure could occur.',
    exampleTranslation: 'Sự cố thảm khốc có thể xảy ra.',
    level: 'advanced',
    topic: 'Risk Management',
  },
  {
    id: 'v645a',
    word: 'mitigate',
    pronunciation: '/ˈmɪtɪɡeɪt/',
    partOfSpeech: 'verb',
    meaning: 'giảm thiểu',
    example: 'Take steps to mitigate the risk.',
    exampleTranslation: 'Thực hiện các bước để giảm thiểu rủi ro.',
    level: 'advanced',
    topic: 'Risk Management',
  },
  {
    id: 'v646a',
    word: 'resilient',
    pronunciation: '/rɪˈzɪliənt/',
    partOfSpeech: 'adjective',
    meaning: 'có khả năng phục hồi',
    example: 'Build a resilient supply chain.',
    exampleTranslation: 'Xây dựng chuỗi cung ứng có khả năng phục hồi.',
    level: 'advanced',
    topic: 'Risk Management',
  },
  {
    id: 'v647a',
    word: 'preparedness',
    pronunciation: '/prɪˈpeədnəs/',
    partOfSpeech: 'noun',
    meaning: 'sự chuẩn bị sẵn sàng',
    example: 'Crisis preparedness is essential.',
    exampleTranslation: 'Sự chuẩn bị sẵn sàng cho khủng hoảng là thiết yếu.',
    level: 'advanced',
    topic: 'Risk Management',
  },
  {
    id: 'v648a',
    word: 'adversity',
    pronunciation: '/ədˈvɜːsəti/',
    partOfSpeech: 'noun',
    meaning: 'nghịch cảnh',
    example: 'The team overcame adversity.',
    exampleTranslation: 'Đội đã vượt qua nghịch cảnh.',
    level: 'advanced',
    topic: 'Risk Management',
  },
  {
    id: 'v649a',
    word: 'jeopardize',
    pronunciation: '/ˈdʒepədaɪz/',
    partOfSpeech: 'verb',
    meaning: 'gây nguy hiểm',
    example: 'Don\'t jeopardize the project.',
    exampleTranslation: 'Đừng gây nguy hiểm cho dự án.',
    level: 'advanced',
    topic: 'Risk Management',
  },
  {
    id: 'v650a',
    word: 'imperative',
    pronunciation: '/ɪmˈperətɪv/',
    partOfSpeech: 'adjective/noun',
    meaning: 'cấp bách / bắt buộc',
    example: 'It is imperative to act now.',
    exampleTranslation: 'Bắt buộc phải hành động ngay bây giờ.',
    level: 'advanced',
    topic: 'Risk Management',
  },
  // Advanced Negotiation & Diplomacy
  {
    id: 'v651a',
    word: 'concession',
    pronunciation: '/kənˈseʃn/',
    partOfSpeech: 'noun',
    meaning: 'nh양bộ',
    example: 'Both sides made concessions.',
    exampleTranslation: 'Cả hai bên đều nhượng bộ.',
    level: 'advanced',
    topic: 'Negotiation',
  },
  {
    id: 'v652a',
    word: 'compromise',
    pronunciation: '/ˈkɒmprəmaɪz/',
    partOfSpeech: 'noun/verb',
    meaning: 'thỏa hiệp',
    example: 'We reached a fair compromise.',
    exampleTranslation: 'Chúng tôi đạt được thỏa hiệp công bằng.',
    level: 'advanced',
    topic: 'Negotiation',
  },
  {
    id: 'v653a',
    word: 'leverage',
    pronunciation: '/ˈliːvərɪdʒ/',
    partOfSpeech: 'noun/verb',
    meaning: 'đòn bẩy / lợi thế',
    example: 'Use your leverage in negotiations.',
    exampleTranslation: 'Sử dụng lợi thế của bạn trong đàm phán.',
    level: 'advanced',
    topic: 'Negotiation',
  },
  {
    id: 'v654a',
    word: 'reciprocity',
    pronunciation: '/ˌresɪˈprɒsəti/',
    partOfSpeech: 'noun',
    meaning: 'sự có đi có lại',
    example: 'Negotiations work on reciprocity.',
    exampleTranslation: 'Đàm phán hoạt động dựa trên sự có đi có lại.',
    level: 'advanced',
    topic: 'Negotiation',
  },
  {
    id: 'v655a',
    word: 'impasse',
    pronunciation: '/ˈæmpɑːs/',
    partOfSpeech: 'noun',
    meaning: 'bế tắc',
    example: 'Negotiations reached an impasse.',
    exampleTranslation: 'Đàm phán đi vào bế tắc.',
    level: 'advanced',
    topic: 'Negotiation',
  },
  {
    id: 'v656a',
    word: 'mediation',
    pronunciation: '/ˌmiːdiˈeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'hòa giải',
    example: 'The dispute requires mediation.',
    exampleTranslation: 'Tranh chấp cần hòa giải.',
    level: 'advanced',
    topic: 'Negotiation',
  },
  {
    id: 'v657a',
    word: 'diplomacy',
    pronunciation: '/dɪˈpləʊməsi/',
    partOfSpeech: 'noun',
    meaning: 'ngoại giao',
    example: 'Handle the situation with diplomacy.',
    exampleTranslation: 'Xử lý tình huống bằng ngoại giao.',
    level: 'advanced',
    topic: 'Negotiation',
  },
  {
    id: 'v658a',
    word: 'tactful',
    pronunciation: '/ˈtæktfl/',
    partOfSpeech: 'adjective',
    meaning: 'khéo léo / tế nhị',
    example: 'Be tactful when delivering bad news.',
    exampleTranslation: 'Hãy khéo léo khi báo tin xấu.',
    level: 'advanced',
    topic: 'Negotiation',
  },
  {
    id: 'v659a',
    word: 'amicable',
    pronunciation: '/ˈæmɪkəbl/',
    partOfSpeech: 'adjective',
    meaning: 'hòa nhã / thân thiện',
    example: 'We reached an amicable agreement.',
    exampleTranslation: 'Chúng tôi đạt được thỏa thuận hòa nhã.',
    level: 'advanced',
    topic: 'Negotiation',
  },
  {
    id: 'v660a',
    word: 'adversarial',
    pronunciation: '/ˌædvəˈseəriəl/',
    partOfSpeech: 'adjective',
    meaning: 'đối đầu',
    example: 'Avoid an adversarial approach.',
    exampleTranslation: 'Tránh cách tiếp cận đối đầu.',
    level: 'advanced',
    topic: 'Negotiation',
  },
  // Advanced Corporate Governance
  {
    id: 'v661a',
    word: 'fiduciary',
    pronunciation: '/fɪˈdjuːʃəri/',
    partOfSpeech: 'adjective/noun',
    meaning: 'tín thác',
    example: 'Directors have fiduciary duties.',
    exampleTranslation: 'Giám đốc có trách nhiệm tín thác.',
    level: 'advanced',
    topic: 'Governance',
  },
  {
    id: 'v662a',
    word: 'compliance',
    pronunciation: '/kəmˈplaɪəns/',
    partOfSpeech: 'noun',
    meaning: 'tuân thủ',
    example: 'Ensure regulatory compliance.',
    exampleTranslation: 'Đảm bảo tuân thủ quy định.',
    level: 'advanced',
    topic: 'Governance',
  },
  {
    id: 'v663a',
    word: 'oversight',
    pronunciation: '/ˈəʊvəsaɪt/',
    partOfSpeech: 'noun',
    meaning: 'giám sát',
    example: 'Board oversight is crucial.',
    exampleTranslation: 'Giám sát của hội đồng quản trị rất quan trọng.',
    level: 'advanced',
    topic: 'Governance',
  },
  {
    id: 'v664a',
    word: 'disclosure',
    pronunciation: '/dɪsˈkləʊʒə(r)/',
    partOfSpeech: 'noun',
    meaning: 'công bố thông tin',
    example: 'Full disclosure is required by law.',
    exampleTranslation: 'Công bố đầy đủ thông tin được yêu cầu theo luật.',
    level: 'advanced',
    topic: 'Governance',
  },
  {
    id: 'v665a',
    word: 'whistleblower',
    pronunciation: '/ˈwɪslbləʊə(r)/',
    partOfSpeech: 'noun',
    meaning: 'người tố giác',
    example: 'Protect whistleblowers from retaliation.',
    exampleTranslation: 'Bảo vệ người tố giác khỏi trả thù.',
    level: 'advanced',
    topic: 'Governance',
  },
  {
    id: 'v666a',
    word: 'fraudulent',
    pronunciation: '/ˈfrɔːdjələnt/',
    partOfSpeech: 'adjective',
    meaning: 'gian lận',
    example: 'Fraudulent activities will be prosecuted.',
    exampleTranslation: 'Hoạt động gian lận sẽ bị truy tố.',
    level: 'advanced',
    topic: 'Governance',
  },
  {
    id: 'v667a',
    word: 'embezzlement',
    pronunciation: '/ɪmˈbezlmənt/',
    partOfSpeech: 'noun',
    meaning: 'tham ô',
    example: 'He was charged with embezzlement.',
    exampleTranslation: 'Anh ta bị buộc tội tham ô.',
    level: 'advanced',
    topic: 'Governance',
  },
  {
    id: 'v668a',
    word: 'corruption',
    pronunciation: '/kəˈrʌpʃn/',
    partOfSpeech: 'noun',
    meaning: 'tham nhũng',
    example: 'Fight corruption at all levels.',
    exampleTranslation: 'Chống tham nhũng ở mọi cấp độ.',
    level: 'advanced',
    topic: 'Governance',
  },
  {
    id: 'v669a',
    word: 'integrity',
    pronunciation: '/ɪnˈteɡrəti/',
    partOfSpeech: 'noun',
    meaning: 'liêm chính',
    example: 'Integrity is our core value.',
    exampleTranslation: 'Liêm chính là giá trị cốt lõi của chúng tôi.',
    level: 'advanced',
    topic: 'Governance',
  },
  {
    id: 'v670a',
    word: 'probity',
    pronunciation: '/ˈprəʊbəti/',
    partOfSpeech: 'noun',
    meaning: 'sự chính trực',
    example: 'Financial probity is essential.',
    exampleTranslation: 'Sự chính trực tài chính là thiết yếu.',
    level: 'advanced',
    topic: 'Governance',
  },
  // Advanced Global Business
  {
    id: 'v671a',
    word: 'globalization',
    pronunciation: '/ˌɡləʊbəlaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'toàn cầu hóa',
    example: 'Globalization creates opportunities.',
    exampleTranslation: 'Toàn cầu hóa tạo ra cơ hội.',
    level: 'advanced',
    topic: 'Global Business',
  },
  {
    id: 'v672a',
    word: 'localization',
    pronunciation: '/ˌləʊkəlaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'bản địa hóa',
    example: 'Product localization is necessary.',
    exampleTranslation: 'Bản địa hóa sản phẩm là cần thiết.',
    level: 'advanced',
    topic: 'Global Business',
  },
  {
    id: 'v673a',
    word: 'outsourcing',
    pronunciation: '/ˈaʊtsɔːsɪŋ/',
    partOfSpeech: 'noun',
    meaning: 'thuê ngoài',
    example: 'Outsourcing reduces costs.',
    exampleTranslation: 'Thuê ngoài giảm chi phí.',
    level: 'advanced',
    topic: 'Global Business',
  },
  {
    id: 'v674a',
    word: 'offshoring',
    pronunciation: '/ˈɒfʃɔːrɪŋ/',
    partOfSpeech: 'noun',
    meaning: 'chuyển hoạt động ra nước ngoài',
    example: 'Offshoring manufacturing saves money.',
    exampleTranslation: 'Chuyển sản xuất ra nước ngoài tiết kiệm tiền.',
    level: 'advanced',
    topic: 'Global Business',
  },
  {
    id: 'v675a',
    word: 'expatriate',
    pronunciation: '/eksˈpætriət/',
    partOfSpeech: 'noun',
    meaning: 'người nước ngoài',
    example: 'Manage expatriate assignments carefully.',
    exampleTranslation: 'Quản lý nhiệm vụ của người nước ngoài cẩn thận.',
    level: 'advanced',
    topic: 'Global Business',
  },
  {
    id: 'v676a',
    word: 'repatriation',
    pronunciation: '/ˌriːpætriˈeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'hồi hương',
    example: 'Profit repatriation faces tax issues.',
    exampleTranslation: 'Hồi hương lợi nhuận gặp vấn đề thuế.',
    level: 'advanced',
    topic: 'Global Business',
  },
  {
    id: 'v677a',
    word: 'bilateral',
    pronunciation: '/ˌbaɪˈlætərəl/',
    partOfSpeech: 'adjective',
    meaning: 'song phương',
    example: 'Sign a bilateral trade agreement.',
    exampleTranslation: 'Ký hiệp định thương mại song phương.',
    level: 'advanced',
    topic: 'Global Business',
  },
  {
    id: 'v678a',
    word: 'multilateral',
    pronunciation: '/ˌmʌltiˈlætərəl/',
    partOfSpeech: 'adjective',
    meaning: 'đa phương',
    example: 'Multilateral cooperation is essential.',
    exampleTranslation: 'Hợp tác đa phương là thiết yếu.',
    level: 'advanced',
    topic: 'Global Business',
  },
  {
    id: 'v679a',
    word: 'protectionism',
    pronunciation: '/prəˈtekʃənɪzəm/',
    partOfSpeech: 'noun',
    meaning: 'chủ nghĩa bảo hộ',
    example: 'Protectionism limits free trade.',
    exampleTranslation: 'Chủ nghĩa bảo hộ hạn chế thương mại tự do.',
    level: 'advanced',
    topic: 'Global Business',
  },
  {
    id: 'v680a',
    word: 'liberalization',
    pronunciation: '/ˌlɪbərəlaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'tự do hóa',
    example: 'Trade liberalization benefits consumers.',
    exampleTranslation: 'Tự do hóa thương mại mang lại lợi ích cho người tiêu dùng.',
    level: 'advanced',
    topic: 'Global Business',
  },
  // Advanced Academic & Professional
  {
    id: 'v681a',
    word: 'dissertation',
    pronunciation: '/ˌdɪsəˈteɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'luận án',
    example: 'She defended her dissertation successfully.',
    exampleTranslation: 'Cô ấy đã bảo vệ luận án thành công.',
    level: 'advanced',
    topic: 'Academic',
  },
  {
    id: 'v682a',
    word: 'peer review',
    pronunciation: '/pɪə rɪˈvjuː/',
    partOfSpeech: 'noun',
    meaning: 'đánh giá ngang hàng',
    example: 'The paper underwent peer review.',
    exampleTranslation: 'Bài báo đã trải qua đánh giá ngang hàng.',
    level: 'advanced',
    topic: 'Academic',
  },
  {
    id: 'v683a',
    word: 'symposium',
    pronunciation: '/sɪmˈpəʊziəm/',
    partOfSpeech: 'noun',
    meaning: 'hội thảo',
    example: 'Present findings at the symposium.',
    exampleTranslation: 'Trình bày kết quả tại hội thảo.',
    level: 'advanced',
    topic: 'Academic',
  },
  {
    id: 'v684a',
    word: 'tenure',
    pronunciation: '/ˈtenjə(r)/',
    partOfSpeech: 'noun',
    meaning: 'chức vụ / nhiệm kỳ',
    example: 'She received tenure at the university.',
    exampleTranslation: 'Cô ấy nhận được chức vụ tại đại học.',
    level: 'advanced',
    topic: 'Academic',
  },
  {
    id: 'v685a',
    word: 'accreditation',
    pronunciation: '/əˌkredɪˈteɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'công nhận / chứng nhận',
    example: 'The program has full accreditation.',
    exampleTranslation: 'Chương trình có đầy đủ chứng nhận.',
    level: 'advanced',
    topic: 'Academic',
  },
  {
    id: 'v686a',
    word: 'credential',
    pronunciation: '/krɪˈdenʃl/',
    partOfSpeech: 'noun',
    meaning: 'thông tin xác thực',
    example: 'Verify professional credentials.',
    exampleTranslation: 'Xác minh thông tin xác thực chuyên nghiệp.',
    level: 'advanced',
    topic: 'Academic',
  },
  {
    id: 'v687a',
    word: 'expertise',
    pronunciation: '/ˌekspɜːˈtiːz/',
    partOfSpeech: 'noun',
    meaning: 'chuyên môn',
    example: 'His expertise is widely recognized.',
    exampleTranslation: 'Chuyên môn của anh ấy được công nhận rộng rãi.',
    level: 'advanced',
    topic: 'Academic',
  },
  {
    id: 'v688a',
    word: 'specialization',
    pronunciation: '/ˌspeʃəlaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'chuyên môn hóa',
    example: 'Her specialization is corporate law.',
    exampleTranslation: 'Chuyên môn của cô ấy là luật doanh nghiệp.',
    level: 'advanced',
    topic: 'Academic',
  },
  {
    id: 'v689a',
    word: 'interdisciplinary',
    pronunciation: '/ˌɪntədɪsəˈplɪnəri/',
    partOfSpeech: 'adjective',
    meaning: 'liên ngành',
    example: 'The project requires interdisciplinary collaboration.',
    exampleTranslation: 'Dự án đòi hỏi hợp tác liên ngành.',
    level: 'advanced',
    topic: 'Academic',
  },
  {
    id: 'v690a',
    word: 'paradigm',
    pronunciation: '/ˈpærədaɪm/',
    partOfSpeech: 'noun',
    meaning: 'mô hình / khuôn mẫu',
    example: 'This challenges the existing paradigm.',
    exampleTranslation: 'Điều này thách thức mô hình hiện có.',
    level: 'advanced',
    topic: 'Academic',
  },
  // Advanced Miscellaneous
  {
    id: 'v691a',
    word: 'ubiquitous',
    pronunciation: '/juːˈbɪkwɪtəs/',
    partOfSpeech: 'adjective',
    meaning: 'phổ biến khắp nơi',
    example: 'Smartphones are ubiquitous today.',
    exampleTranslation: 'Điện thoại thông minh phổ biến khắp nơi ngày nay.',
    level: 'advanced',
    topic: 'General',
  },
  {
    id: 'v692a',
    word: 'pervasive',
    pronunciation: '/pəˈveɪsɪv/',
    partOfSpeech: 'adjective',
    meaning: 'lan tỏa / phổ biến',
    example: 'Technology has a pervasive influence.',
    exampleTranslation: 'Công nghệ có ảnh hưởng lan tỏa.',
    level: 'advanced',
    topic: 'General',
  },
  {
    id: 'v693a',
    word: 'unprecedented',
    pronunciation: '/ʌnˈpresɪdentɪd/',
    partOfSpeech: 'adjective',
    meaning: 'chưa từng có',
    example: 'We face unprecedented challenges.',
    exampleTranslation: 'Chúng ta đối mặt với thách thức chưa từng có.',
    level: 'advanced',
    topic: 'General',
  },
  {
    id: 'v694a',
    word: 'intrinsic',
    pronunciation: '/ɪnˈtrɪnsɪk/',
    partOfSpeech: 'adjective',
    meaning: 'nội tại',
    example: 'Quality has intrinsic value.',
    exampleTranslation: 'Chất lượng có giá trị nội tại.',
    level: 'advanced',
    topic: 'General',
  },
  {
    id: 'v695a',
    word: 'extrinsic',
    pronunciation: '/ekˈstrɪnsɪk/',
    partOfSpeech: 'adjective',
    meaning: 'bên ngoài',
    example: 'Motivation can be extrinsic or intrinsic.',
    exampleTranslation: 'Động lực có thể là bên ngoài hoặc nội tại.',
    level: 'advanced',
    topic: 'General',
  },
  {
    id: 'v696a',
    word: 'conducive',
    pronunciation: '/kənˈdjuːsɪv/',
    partOfSpeech: 'adjective',
    meaning: 'có lợi cho',
    example: 'Create an environment conducive to learning.',
    exampleTranslation: 'Tạo môi trường có lợi cho việc học.',
    level: 'advanced',
    topic: 'General',
  },
  {
    id: 'v697a',
    word: 'detrimental',
    pronunciation: '/ˌdetrɪˈmentl/',
    partOfSpeech: 'adjective',
    meaning: 'có hại',
    example: 'Stress is detrimental to health.',
    exampleTranslation: 'Căng thẳng có hại cho sức khỏe.',
    level: 'advanced',
    topic: 'General',
  },
  {
    id: 'v698a',
    word: 'inherent',
    pronunciation: '/ɪnˈhɪərənt/',
    partOfSpeech: 'adjective',
    meaning: 'vốn có',
    example: 'There are inherent risks in business.',
    exampleTranslation: 'Có những rủi ro vốn có trong kinh doanh.',
    level: 'advanced',
    topic: 'General',
  },
  {
    id: 'v699a',
    word: 'plausible',
    pronunciation: '/ˈplɔːzəbl/',
    partOfSpeech: 'adjective',
    meaning: 'hợp lý / có vẻ đúng',
    example: 'That sounds like a plausible explanation.',
    exampleTranslation: 'Nghe có vẻ là lời giải thích hợp lý.',
    level: 'advanced',
    topic: 'General',
  },
  {
    id: 'v700a',
    word: 'viable',
    pronunciation: '/ˈvaɪəbl/',
    partOfSpeech: 'adjective',
    meaning: 'khả thi',
    example: 'Is this a viable business model?',
    exampleTranslation: 'Đây có phải là mô hình kinh doanh khả thi không?',
    level: 'advanced',
    topic: 'General',
  },
  // Advanced Business Analysis
  {
    id: 'v701a',
    word: 'benchmark',
    pronunciation: '/ˈbentʃmɑːk/',
    partOfSpeech: 'noun/verb',
    meaning: 'chuẩn mực / so sánh',
    example: 'We benchmark against industry standards.',
    exampleTranslation: 'Chúng tôi so sánh với tiêu chuẩn ngành.',
    level: 'advanced',
    topic: 'Analysis',
  },
  {
    id: 'v702a',
    word: 'trajectory',
    pronunciation: '/trəˈdʒektəri/',
    partOfSpeech: 'noun',
    meaning: 'quỹ đạo / xu hướng',
    example: 'The company is on an upward trajectory.',
    exampleTranslation: 'Công ty đang trên đà tăng trưởng.',
    level: 'advanced',
    topic: 'Analysis',
  },
  {
    id: 'v703a',
    word: 'exponential',
    pronunciation: '/ˌekspəˈnenʃl/',
    partOfSpeech: 'adjective',
    meaning: 'theo cấp số nhân',
    example: 'We see exponential growth in demand.',
    exampleTranslation: 'Chúng tôi thấy nhu cầu tăng trưởng theo cấp số nhân.',
    level: 'advanced',
    topic: 'Analysis',
  },
  {
    id: 'v704a',
    word: 'incremental',
    pronunciation: '/ˌɪŋkrəˈmentl/',
    partOfSpeech: 'adjective',
    meaning: 'gia tăng dần',
    example: 'Make incremental improvements daily.',
    exampleTranslation: 'Thực hiện cải tiến gia tăng hàng ngày.',
    level: 'advanced',
    topic: 'Analysis',
  },
  {
    id: 'v705a',
    word: 'asymmetric',
    pronunciation: '/ˌeɪsɪˈmetrɪk/',
    partOfSpeech: 'adjective',
    meaning: 'bất đối xứng',
    example: 'Information asymmetry affects markets.',
    exampleTranslation: 'Bất đối xứng thông tin ảnh hưởng đến thị trường.',
    level: 'advanced',
    topic: 'Analysis',
  },
  {
    id: 'v706a',
    word: 'equilibrium',
    pronunciation: '/ˌiːkwɪˈlɪbriəm/',
    partOfSpeech: 'noun',
    meaning: 'cân bằng',
    example: 'Market equilibrium determines prices.',
    exampleTranslation: 'Cân bằng thị trường xác định giá cả.',
    level: 'advanced',
    topic: 'Analysis',
  },
  {
    id: 'v707a',
    word: 'fluctuation',
    pronunciation: '/ˌflʌktʃuˈeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'biến động',
    example: 'Price fluctuations are common.',
    exampleTranslation: 'Biến động giá là phổ biến.',
    level: 'advanced',
    topic: 'Analysis',
  },
  {
    id: 'v708a',
    word: 'disparity',
    pronunciation: '/dɪˈspærəti/',
    partOfSpeech: 'noun',
    meaning: 'chênh lệch',
    example: 'Income disparity is widening.',
    exampleTranslation: 'Chênh lệch thu nhập đang gia tăng.',
    level: 'advanced',
    topic: 'Analysis',
  },
  {
    id: 'v709a',
    word: 'discrepancy',
    pronunciation: '/dɪˈskrepənsi/',
    partOfSpeech: 'noun',
    meaning: 'sự khác biệt / sai lệch',
    example: 'There is a discrepancy in the figures.',
    exampleTranslation: 'Có sự sai lệch trong các con số.',
    level: 'advanced',
    topic: 'Analysis',
  },
  {
    id: 'v710a',
    word: 'variance',
    pronunciation: '/ˈveəriəns/',
    partOfSpeech: 'noun',
    meaning: 'phương sai / sự khác biệt',
    example: 'Analyze the budget variance.',
    exampleTranslation: 'Phân tích sự khác biệt ngân sách.',
    level: 'advanced',
    topic: 'Analysis',
  },
  // Advanced Decision Making
  {
    id: 'v711a',
    word: 'deliberate',
    pronunciation: '/dɪˈlɪbərət/',
    partOfSpeech: 'verb/adjective',
    meaning: 'cân nhắc / có chủ ý',
    example: 'We must deliberate before deciding.',
    exampleTranslation: 'Chúng ta phải cân nhắc trước khi quyết định.',
    level: 'advanced',
    topic: 'Decision Making',
  },
  {
    id: 'v712a',
    word: 'prudent',
    pronunciation: '/ˈpruːdnt/',
    partOfSpeech: 'adjective',
    meaning: 'thận trọng',
    example: 'Make prudent financial decisions.',
    exampleTranslation: 'Đưa ra quyết định tài chính thận trọng.',
    level: 'advanced',
    topic: 'Decision Making',
  },
  {
    id: 'v713a',
    word: 'judicious',
    pronunciation: '/dʒuːˈdɪʃəs/',
    partOfSpeech: 'adjective',
    meaning: 'sáng suốt',
    example: 'Exercise judicious judgment.',
    exampleTranslation: 'Thực hiện đánh giá sáng suốt.',
    level: 'advanced',
    topic: 'Decision Making',
  },
  {
    id: 'v714a',
    word: 'decisive',
    pronunciation: '/dɪˈsaɪsɪv/',
    partOfSpeech: 'adjective',
    meaning: 'quyết đoán',
    example: 'Leaders must be decisive.',
    exampleTranslation: 'Nhà lãnh đạo phải quyết đoán.',
    level: 'advanced',
    topic: 'Decision Making',
  },
  {
    id: 'v715a',
    word: 'rationale',
    pronunciation: '/ˌræʃəˈnɑːl/',
    partOfSpeech: 'noun',
    meaning: 'lý do / căn cứ',
    example: 'Explain the rationale for your decision.',
    exampleTranslation: 'Giải thích lý do cho quyết định của bạn.',
    level: 'advanced',
    topic: 'Decision Making',
  },
  {
    id: 'v716a',
    word: 'justification',
    pronunciation: '/ˌdʒʌstɪfɪˈkeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'sự biện minh',
    example: 'Provide justification for the expense.',
    exampleTranslation: 'Cung cấp biện minh cho chi phí.',
    level: 'advanced',
    topic: 'Decision Making',
  },
  {
    id: 'v717a',
    word: 'ramification',
    pronunciation: '/ˌræmɪfɪˈkeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'hệ quả',
    example: 'Consider all ramifications before acting.',
    exampleTranslation: 'Xem xét tất cả hệ quả trước khi hành động.',
    level: 'advanced',
    topic: 'Decision Making',
  },
  {
    id: 'v718a',
    word: 'implication',
    pronunciation: '/ˌɪmplɪˈkeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'hàm ý / tác động',
    example: 'What are the implications of this policy?',
    exampleTranslation: 'Những tác động của chính sách này là gì?',
    level: 'advanced',
    topic: 'Decision Making',
  },
  {
    id: 'v719a',
    word: 'prerogative',
    pronunciation: '/prɪˈrɒɡətɪv/',
    partOfSpeech: 'noun',
    meaning: 'đặc quyền',
    example: 'That is management\'s prerogative.',
    exampleTranslation: 'Đó là đặc quyền của ban quản lý.',
    level: 'advanced',
    topic: 'Decision Making',
  },
  {
    id: 'v720a',
    word: 'discretion',
    pronunciation: '/dɪˈskreʃn/',
    partOfSpeech: 'noun',
    meaning: 'quyền quyết định / sự kín đáo',
    example: 'Use your discretion in this matter.',
    exampleTranslation: 'Sử dụng quyền quyết định của bạn trong vấn đề này.',
    level: 'advanced',
    topic: 'Decision Making',
  },
  // Advanced Performance & Metrics
  {
    id: 'v721a',
    word: 'profitability',
    pronunciation: '/ˌprɒfɪtəˈbɪləti/',
    partOfSpeech: 'noun',
    meaning: 'khả năng sinh lời',
    example: 'Profitability improved this year.',
    exampleTranslation: 'Khả năng sinh lời cải thiện năm nay.',
    level: 'advanced',
    topic: 'Performance',
  },
  {
    id: 'v722a',
    word: 'sustainability',
    pronunciation: '/səˌsteɪnəˈbɪləti/',
    partOfSpeech: 'noun',
    meaning: 'sự bền vững',
    example: 'Focus on long-term sustainability.',
    exampleTranslation: 'Tập trung vào tính bền vững dài hạn.',
    level: 'advanced',
    topic: 'Performance',
  },
  {
    id: 'v723a',
    word: 'productivity',
    pronunciation: '/ˌprɒdʌkˈtɪvəti/',
    partOfSpeech: 'noun',
    meaning: 'năng suất',
    example: 'Employee productivity has increased.',
    exampleTranslation: 'Năng suất nhân viên đã tăng.',
    level: 'advanced',
    topic: 'Performance',
  },
  {
    id: 'v724a',
    word: 'efficiency',
    pronunciation: '/ɪˈfɪʃnsi/',
    partOfSpeech: 'noun',
    meaning: 'hiệu suất',
    example: 'Improve operational efficiency.',
    exampleTranslation: 'Cải thiện hiệu suất hoạt động.',
    level: 'advanced',
    topic: 'Performance',
  },
  {
    id: 'v725a',
    word: 'effectiveness',
    pronunciation: '/ɪˈfektɪvnəs/',
    partOfSpeech: 'noun',
    meaning: 'hiệu quả',
    example: 'Measure campaign effectiveness.',
    exampleTranslation: 'Đo lường hiệu quả chiến dịch.',
    level: 'advanced',
    topic: 'Performance',
  },
  {
    id: 'v726a',
    word: 'utilization',
    pronunciation: '/ˌjuːtɪlaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'mức độ sử dụng',
    example: 'Asset utilization is at 85%.',
    exampleTranslation: 'Mức độ sử dụng tài sản ở mức 85%.',
    level: 'advanced',
    topic: 'Performance',
  },
  {
    id: 'v727a',
    word: 'penetration',
    pronunciation: '/ˌpenɪˈtreɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'mức thâm nhập',
    example: 'Market penetration reached 30%.',
    exampleTranslation: 'Mức thâm nhập thị trường đạt 30%.',
    level: 'advanced',
    topic: 'Performance',
  },
  {
    id: 'v728a',
    word: 'attrition',
    pronunciation: '/əˈtrɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'sự suy giảm',
    example: 'Customer attrition decreased by 5%.',
    exampleTranslation: 'Sự suy giảm khách hàng giảm 5%.',
    level: 'advanced',
    topic: 'Performance',
  },
  {
    id: 'v729a',
    word: 'aggregation',
    pronunciation: '/ˌæɡrɪˈɡeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'tổng hợp',
    example: 'Data aggregation provides insights.',
    exampleTranslation: 'Tổng hợp dữ liệu cung cấp hiểu biết.',
    level: 'advanced',
    topic: 'Performance',
  },
  {
    id: 'v730a',
    word: 'optimization',
    pronunciation: '/ˌɒptɪmaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'tối ưu hóa',
    example: 'Cost optimization is a priority.',
    exampleTranslation: 'Tối ưu hóa chi phí là ưu tiên.',
    level: 'advanced',
    topic: 'Performance',
  },
  // Advanced Strategic Positioning
  {
    id: 'v731a',
    word: 'competitive advantage',
    pronunciation: '/kəmˌpetɪtɪv ədˈvɑːntɪdʒ/',
    partOfSpeech: 'noun',
    meaning: 'lợi thế cạnh tranh',
    example: 'Innovation creates competitive advantage.',
    exampleTranslation: 'Đổi mới tạo ra lợi thế cạnh tranh.',
    level: 'advanced',
    topic: 'Strategy',
  },
  {
    id: 'v732a',
    word: 'value proposition',
    pronunciation: '/ˈvæljuː ˌprɒpəˈzɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'đề xuất giá trị',
    example: 'Clarify your value proposition.',
    exampleTranslation: 'Làm rõ đề xuất giá trị của bạn.',
    level: 'advanced',
    topic: 'Strategy',
  },
  {
    id: 'v733a',
    word: 'market leader',
    pronunciation: '/ˈmɑːkɪt ˈliːdə(r)/',
    partOfSpeech: 'noun',
    meaning: 'công ty dẫn đầu thị trường',
    example: 'We aim to be the market leader.',
    exampleTranslation: 'Chúng tôi hướng đến việc trở thành công ty dẫn đầu thị trường.',
    level: 'advanced',
    topic: 'Strategy',
  },
  {
    id: 'v734a',
    word: 'first mover',
    pronunciation: '/fɜːst ˈmuːvə(r)/',
    partOfSpeech: 'noun',
    meaning: 'người đi tiên phong',
    example: 'First movers gain advantages.',
    exampleTranslation: 'Người đi tiên phong có được lợi thế.',
    level: 'advanced',
    topic: 'Strategy',
  },
  {
    id: 'v735a',
    word: 'niche market',
    pronunciation: '/niːʃ ˈmɑːkɪt/',
    partOfSpeech: 'noun',
    meaning: 'thị trường ngách',
    example: 'Target a niche market segment.',
    exampleTranslation: 'Nhắm đến một phân khúc thị trường ngách.',
    level: 'advanced',
    topic: 'Strategy',
  },
  {
    id: 'v736a',
    word: 'disintermediation',
    pronunciation: '/ˌdɪsɪntəˌmiːdiˈeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'loại bỏ trung gian',
    example: 'Digital commerce enables disintermediation.',
    exampleTranslation: 'Thương mại điện tử cho phép loại bỏ trung gian.',
    level: 'advanced',
    topic: 'Strategy',
  },
  {
    id: 'v737a',
    word: 'commoditization',
    pronunciation: '/kəˌmɒdɪtaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'hàng hóa hóa',
    example: 'Avoid commoditization through innovation.',
    exampleTranslation: 'Tránh hàng hóa hóa thông qua đổi mới.',
    level: 'advanced',
    topic: 'Strategy',
  },
  {
    id: 'v738a',
    word: 'saturation',
    pronunciation: '/ˌsætʃəˈreɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'bão hòa',
    example: 'The market is reaching saturation.',
    exampleTranslation: 'Thị trường đang đạt đến mức bão hòa.',
    level: 'advanced',
    topic: 'Strategy',
  },
  {
    id: 'v739a',
    word: 'disruption',
    pronunciation: '/dɪsˈrʌpʃn/',
    partOfSpeech: 'noun',
    meaning: 'sự gián đoạn / đột phá',
    example: 'Digital disruption transforms industries.',
    exampleTranslation: 'Đột phá số chuyển đổi các ngành.',
    level: 'advanced',
    topic: 'Strategy',
  },
  {
    id: 'v740a',
    word: 'cannibalization',
    pronunciation: '/ˌkænɪbəlaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'ăn thịt lẫn nhau (sản phẩm)',
    example: 'Avoid product cannibalization.',
    exampleTranslation: 'Tránh tình trạng sản phẩm ăn thịt lẫn nhau.',
    level: 'advanced',
    topic: 'Strategy',
  },
  // Advanced Supply Chain
  {
    id: 'v741a',
    word: 'procurement',
    pronunciation: '/prəˈkjʊəmənt/',
    partOfSpeech: 'noun',
    meaning: 'thu mua',
    example: 'Streamline the procurement process.',
    exampleTranslation: 'Hợp lý hóa quy trình thu mua.',
    level: 'advanced',
    topic: 'Supply Chain',
  },
  {
    id: 'v742a',
    word: 'vendor',
    pronunciation: '/ˈvendə(r)/',
    partOfSpeech: 'noun',
    meaning: 'nhà cung cấp',
    example: 'Evaluate vendor performance regularly.',
    exampleTranslation: 'Đánh giá hiệu suất nhà cung cấp thường xuyên.',
    level: 'advanced',
    topic: 'Supply Chain',
  },
  {
    id: 'v743a',
    word: 'fulfillment',
    pronunciation: '/fʊlˈfɪlmənt/',
    partOfSpeech: 'noun',
    meaning: 'thực hiện đơn hàng',
    example: 'Order fulfillment takes 2-3 days.',
    exampleTranslation: 'Thực hiện đơn hàng mất 2-3 ngày.',
    level: 'advanced',
    topic: 'Supply Chain',
  },
  {
    id: 'v744a',
    word: 'warehousing',
    pronunciation: '/ˈweəhaʊzɪŋ/',
    partOfSpeech: 'noun',
    meaning: 'kho bãi',
    example: 'Warehousing costs are rising.',
    exampleTranslation: 'Chi phí kho bãi đang tăng.',
    level: 'advanced',
    topic: 'Supply Chain',
  },
  {
    id: 'v745a',
    word: 'distribution',
    pronunciation: '/ˌdɪstrɪˈbjuːʃn/',
    partOfSpeech: 'noun',
    meaning: 'phân phối',
    example: 'Optimize distribution networks.',
    exampleTranslation: 'Tối ưu hóa mạng lưới phân phối.',
    level: 'advanced',
    topic: 'Supply Chain',
  },
  {
    id: 'v746a',
    word: 'just-in-time',
    pronunciation: '/dʒʌst ɪn taɪm/',
    partOfSpeech: 'adjective',
    meaning: 'đúng lúc',
    example: 'Implement just-in-time manufacturing.',
    exampleTranslation: 'Triển khai sản xuất đúng lúc.',
    level: 'advanced',
    topic: 'Supply Chain',
  },
  {
    id: 'v747a',
    word: 'lead time',
    pronunciation: '/liːd taɪm/',
    partOfSpeech: 'noun',
    meaning: 'thời gian chuẩn bị',
    example: 'Reduce lead time for delivery.',
    exampleTranslation: 'Giảm thời gian chuẩn bị giao hàng.',
    level: 'advanced',
    topic: 'Supply Chain',
  },
  {
    id: 'v748a',
    word: 'upstream',
    pronunciation: '/ˌʌpˈstriːm/',
    partOfSpeech: 'adjective/adverb',
    meaning: 'thượng nguồn',
    example: 'Manage upstream suppliers effectively.',
    exampleTranslation: 'Quản lý nhà cung cấp thượng nguồn hiệu quả.',
    level: 'advanced',
    topic: 'Supply Chain',
  },
  {
    id: 'v749a',
    word: 'downstream',
    pronunciation: '/ˌdaʊnˈstriːm/',
    partOfSpeech: 'adjective/adverb',
    meaning: 'hạ nguồn',
    example: 'Focus on downstream distribution.',
    exampleTranslation: 'Tập trung vào phân phối hạ nguồn.',
    level: 'advanced',
    topic: 'Supply Chain',
  },
  {
    id: 'v750a',
    word: 'traceability',
    pronunciation: '/ˌtreɪsəˈbɪləti/',
    partOfSpeech: 'noun',
    meaning: 'khả năng truy xuất',
    example: 'Product traceability ensures quality.',
    exampleTranslation: 'Khả năng truy xuất sản phẩm đảm bảo chất lượng.',
    level: 'advanced',
    topic: 'Supply Chain',
  },
  // Advanced Customer Experience
  {
    id: 'v751a',
    word: 'personalization',
    pronunciation: '/ˌpɜːsənəlaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'cá nhân hóa',
    example: 'Personalization enhances customer satisfaction.',
    exampleTranslation: 'Cá nhân hóa nâng cao sự hài lòng của khách hàng.',
    level: 'advanced',
    topic: 'Customer Experience',
  },
  {
    id: 'v752a',
    word: 'touchpoint',
    pronunciation: '/ˈtʌtʃpɔɪnt/',
    partOfSpeech: 'noun',
    meaning: 'điểm tiếp xúc',
    example: 'Map all customer touchpoints.',
    exampleTranslation: 'Lập bản đồ tất cả điểm tiếp xúc khách hàng.',
    level: 'advanced',
    topic: 'Customer Experience',
  },
  {
    id: 'v753a',
    word: 'omnichannel',
    pronunciation: '/ˈɒmnɪtʃænl/',
    partOfSpeech: 'adjective',
    meaning: 'đa kênh tích hợp',
    example: 'Adopt an omnichannel strategy.',
    exampleTranslation: 'Áp dụng chiến lược đa kênh tích hợp.',
    level: 'advanced',
    topic: 'Customer Experience',
  },
  {
    id: 'v754a',
    word: 'seamless',
    pronunciation: '/ˈsiːmləs/',
    partOfSpeech: 'adjective',
    meaning: 'liền mạch',
    example: 'Provide a seamless experience.',
    exampleTranslation: 'Cung cấp trải nghiệm liền mạch.',
    level: 'advanced',
    topic: 'Customer Experience',
  },
  {
    id: 'v755a',
    word: 'advocacy',
    pronunciation: '/ˈædvəkəsi/',
    partOfSpeech: 'noun',
    meaning: 'ủng hộ',
    example: 'Customer advocacy drives referrals.',
    exampleTranslation: 'Sự ủng hộ của khách hàng thúc đẩy giới thiệu.',
    level: 'advanced',
    topic: 'Customer Experience',
  },
  {
    id: 'v756a',
    word: 'sentiment',
    pronunciation: '/ˈsentɪmənt/',
    partOfSpeech: 'noun',
    meaning: 'tâm lý / cảm nhận',
    example: 'Monitor customer sentiment online.',
    exampleTranslation: 'Theo dõi tâm lý khách hàng trực tuyến.',
    level: 'advanced',
    topic: 'Customer Experience',
  },
  {
    id: 'v757a',
    word: 'empathy',
    pronunciation: '/ˈempəθi/',
    partOfSpeech: 'noun',
    meaning: 'sự đồng cảm',
    example: 'Show empathy in customer service.',
    exampleTranslation: 'Thể hiện sự đồng cảm trong dịch vụ khách hàng.',
    level: 'advanced',
    topic: 'Customer Experience',
  },
  {
    id: 'v758a',
    word: 'proactive',
    pronunciation: '/prəʊˈæktɪv/',
    partOfSpeech: 'adjective',
    meaning: 'chủ động',
    example: 'Take a proactive approach to problems.',
    exampleTranslation: 'Có cách tiếp cận chủ động với vấn đề.',
    level: 'advanced',
    topic: 'Customer Experience',
  },
  {
    id: 'v759a',
    word: 'responsive',
    pronunciation: '/rɪˈspɒnsɪv/',
    partOfSpeech: 'adjective',
    meaning: 'phản hồi nhanh',
    example: 'Be responsive to customer needs.',
    exampleTranslation: 'Phản hồi nhanh với nhu cầu khách hàng.',
    level: 'advanced',
    topic: 'Customer Experience',
  },
  {
    id: 'v760a',
    word: 'friction',
    pronunciation: '/ˈfrɪkʃn/',
    partOfSpeech: 'noun',
    meaning: 'ma sát / trở ngại',
    example: 'Reduce friction in the buying process.',
    exampleTranslation: 'Giảm trở ngại trong quá trình mua hàng.',
    level: 'advanced',
    topic: 'Customer Experience',
  },
  // Advanced Digital Transformation
  {
    id: 'v761a',
    word: 'digitization',
    pronunciation: '/ˌdɪdʒɪtaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'số hóa',
    example: 'Digitization of records is complete.',
    exampleTranslation: 'Số hóa hồ sơ đã hoàn thành.',
    level: 'advanced',
    topic: 'Digital',
  },
  {
    id: 'v762a',
    word: 'digitalization',
    pronunciation: '/ˌdɪdʒɪtəlaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'chuyển đổi số',
    example: 'Digitalization transforms business models.',
    exampleTranslation: 'Chuyển đổi số biến đổi mô hình kinh doanh.',
    level: 'advanced',
    topic: 'Digital',
  },
  {
    id: 'v763a',
    word: 'automation',
    pronunciation: '/ˌɔːtəˈmeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'tự động hóa',
    example: 'Automation increases efficiency.',
    exampleTranslation: 'Tự động hóa tăng hiệu suất.',
    level: 'advanced',
    topic: 'Digital',
  },
  {
    id: 'v764a',
    word: 'robotics',
    pronunciation: '/rəʊˈbɒtɪks/',
    partOfSpeech: 'noun',
    meaning: 'robot học',
    example: 'Robotics revolutionizes manufacturing.',
    exampleTranslation: 'Robot học cách mạng hóa sản xuất.',
    level: 'advanced',
    topic: 'Digital',
  },
  {
    id: 'v765a',
    word: 'augmented reality',
    pronunciation: '/ɔːɡˌmentɪd riˈæləti/',
    partOfSpeech: 'noun',
    meaning: 'thực tế tăng cường',
    example: 'Augmented reality enhances shopping.',
    exampleTranslation: 'Thực tế tăng cường nâng cao trải nghiệm mua sắm.',
    level: 'advanced',
    topic: 'Digital',
  },
  {
    id: 'v766a',
    word: 'virtual reality',
    pronunciation: '/ˌvɜːtʃuəl riˈæləti/',
    partOfSpeech: 'noun',
    meaning: 'thực tế ảo',
    example: 'Virtual reality training is effective.',
    exampleTranslation: 'Đào tạo bằng thực tế ảo rất hiệu quả.',
    level: 'advanced',
    topic: 'Digital',
  },
  {
    id: 'v767a',
    word: 'internet of things',
    pronunciation: '/ˈɪntənet əv θɪŋz/',
    partOfSpeech: 'noun',
    meaning: 'internet vạn vật',
    example: 'IoT devices collect valuable data.',
    exampleTranslation: 'Thiết bị IoT thu thập dữ liệu giá trị.',
    level: 'advanced',
    topic: 'Digital',
  },
  {
    id: 'v768a',
    word: 'big data',
    pronunciation: '/bɪɡ ˈdeɪtə/',
    partOfSpeech: 'noun',
    meaning: 'dữ liệu lớn',
    example: 'Big data analytics reveals insights.',
    exampleTranslation: 'Phân tích dữ liệu lớn tiết lộ hiểu biết sâu sắc.',
    level: 'advanced',
    topic: 'Digital',
  },
  {
    id: 'v769a',
    word: 'predictive analytics',
    pronunciation: '/prɪˌdɪktɪv ˌænəˈlɪtɪks/',
    partOfSpeech: 'noun',
    meaning: 'phân tích dự đoán',
    example: 'Use predictive analytics for forecasting.',
    exampleTranslation: 'Sử dụng phân tích dự đoán để dự báo.',
    level: 'advanced',
    topic: 'Digital',
  },
  {
    id: 'v770a',
    word: 'data mining',
    pronunciation: '/ˈdeɪtə ˌmaɪnɪŋ/',
    partOfSpeech: 'noun',
    meaning: 'khai thác dữ liệu',
    example: 'Data mining uncovers patterns.',
    exampleTranslation: 'Khai thác dữ liệu khám phá các mẫu.',
    level: 'advanced',
    topic: 'Digital',
  },
  // Advanced Financial Instruments
  {
    id: 'v771a',
    word: 'securities',
    pronunciation: '/sɪˈkjʊərətiz/',
    partOfSpeech: 'noun',
    meaning: 'chứng khoán',
    example: 'Invest in diversified securities.',
    exampleTranslation: 'Đầu tư vào chứng khoán đa dạng.',
    level: 'advanced',
    topic: 'Finance',
  },
  {
    id: 'v772a',
    word: 'bonds',
    pronunciation: '/bɒndz/',
    partOfSpeech: 'noun',
    meaning: 'trái phiếu',
    example: 'Government bonds are low risk.',
    exampleTranslation: 'Trái phiếu chính phủ có rủi ro thấp.',
    level: 'advanced',
    topic: 'Finance',
  },
  {
    id: 'v773a',
    word: 'debenture',
    pronunciation: '/dɪˈbentʃə(r)/',
    partOfSpeech: 'noun',
    meaning: 'trái phiếu không có tài sản đảm bảo',
    example: 'Issue debentures to raise capital.',
    exampleTranslation: 'Phát hành trái phiếu để huy động vốn.',
    level: 'advanced',
    topic: 'Finance',
  },
  {
    id: 'v774a',
    word: 'futures',
    pronunciation: '/ˈfjuːtʃəz/',
    partOfSpeech: 'noun',
    meaning: 'hợp đồng tương lai',
    example: 'Trade commodity futures.',
    exampleTranslation: 'Giao dịch hợp đồng tương lai hàng hóa.',
    level: 'advanced',
    topic: 'Finance',
  },
  {
    id: 'v775a',
    word: 'options',
    pronunciation: '/ˈɒpʃnz/',
    partOfSpeech: 'noun',
    meaning: 'quyền chọn',
    example: 'Stock options provide flexibility.',
    exampleTranslation: 'Quyền chọn cổ phiếu cung cấp sự linh hoạt.',
    level: 'advanced',
    topic: 'Finance',
  },
  {
    id: 'v776a',
    word: 'swaps',
    pronunciation: '/swɒps/',
    partOfSpeech: 'noun',
    meaning: 'hoán đổi',
    example: 'Interest rate swaps manage risk.',
    exampleTranslation: 'Hoán đổi lãi suất quản lý rủi ro.',
    level: 'advanced',
    topic: 'Finance',
  },
  {
    id: 'v777a',
    word: 'portfolio',
    pronunciation: '/pɔːtˈfəʊliəʊ/',
    partOfSpeech: 'noun',
    meaning: 'danh mục',
    example: 'Rebalance your investment portfolio.',
    exampleTranslation: 'Cân bằng lại danh mục đầu tư.',
    level: 'advanced',
    topic: 'Finance',
  },
  {
    id: 'v778a',
    word: 'yield',
    pronunciation: '/jiːld/',
    partOfSpeech: 'noun',
    meaning: 'lợi suất',
    example: 'Bond yields are rising.',
    exampleTranslation: 'Lợi suất trái phiếu đang tăng.',
    level: 'advanced',
    topic: 'Finance',
  },
  {
    id: 'v779a',
    word: 'maturity',
    pronunciation: '/məˈtʃʊərəti/',
    partOfSpeech: 'noun',
    meaning: 'đáo hạn',
    example: 'The bond reaches maturity next year.',
    exampleTranslation: 'Trái phiếu đáo hạn năm sau.',
    level: 'advanced',
    topic: 'Finance',
  },
  {
    id: 'v780a',
    word: 'capital gains',
    pronunciation: '/ˈkæpɪtl ɡeɪnz/',
    partOfSpeech: 'noun',
    meaning: 'lãi vốn',
    example: 'Pay tax on capital gains.',
    exampleTranslation: 'Nộp thuế lãi vốn.',
    level: 'advanced',
    topic: 'Finance',
  },
  // Advanced Organizational Behavior
  {
    id: 'v781a',
    word: 'morale',
    pronunciation: '/məˈrɑːl/',
    partOfSpeech: 'noun',
    meaning: 'tinh thần',
    example: 'Employee morale is high.',
    exampleTranslation: 'Tinh thần nhân viên cao.',
    level: 'advanced',
    topic: 'Organization',
  },
  {
    id: 'v782a',
    word: 'cohesion',
    pronunciation: '/kəʊˈhiːʒn/',
    partOfSpeech: 'noun',
    meaning: 'sự gắn kết',
    example: 'Team cohesion improves performance.',
    exampleTranslation: 'Sự gắn kết nhóm cải thiện hiệu suất.',
    level: 'advanced',
    topic: 'Organization',
  },
  {
    id: 'v783a',
    word: 'synergy',
    pronunciation: '/ˈsɪnədʒi/',
    partOfSpeech: 'noun',
    meaning: 'hiệp lực',
    example: 'Create synergy between departments.',
    exampleTranslation: 'Tạo hiệp lực giữa các phòng ban.',
    level: 'advanced',
    topic: 'Organization',
  },
  {
    id: 'v784a',
    word: 'bureaucracy',
    pronunciation: '/bjʊəˈrɒkrəsi/',
    partOfSpeech: 'noun',
    meaning: 'bộ máy quan料',
    example: 'Reduce bureaucracy to increase speed.',
    exampleTranslation: 'Giảm bộ máy quan料 để tăng tốc độ.',
    level: 'advanced',
    topic: 'Organization',
  },
  {
    id: 'v785a',
    word: 'hierarchy',
    pronunciation: '/ˈhaɪərɑːki/',
    partOfSpeech: 'noun',
    meaning: 'hệ thống cấp bậc',
    example: 'Flatten the organizational hierarchy.',
    exampleTranslation: 'Làm phẳng hệ thống cấp bậc tổ chức.',
    level: 'advanced',
    topic: 'Organization',
  },
  {
    id: 'v786a',
    word: 'decentralization',
    pronunciation: '/diːˌsentrəlaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'phân quyền',
    example: 'Decentralization empowers local teams.',
    exampleTranslation: 'Phân quyền trao quyền cho các nhóm địa phương.',
    level: 'advanced',
    topic: 'Organization',
  },
  {
    id: 'v787a',
    word: 'centralization',
    pronunciation: '/ˌsentrəlaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'tập trung hóa',
    example: 'Centralization improves control.',
    exampleTranslation: 'Tập trung hóa cải thiện kiểm soát.',
    level: 'advanced',
    topic: 'Organization',
  },
  {
    id: 'v788a',
    word: 'silos',
    pronunciation: '/ˈsaɪləʊz/',
    partOfSpeech: 'noun',
    meaning: 'tình trạng ngăn cách',
    example: 'Break down organizational silos.',
    exampleTranslation: 'Phá bỏ tình trạng ngăn cách trong tổ chức.',
    level: 'advanced',
    topic: 'Organization',
  },
  {
    id: 'v789a',
    word: 'matrix organization',
    pronunciation: '/ˈmeɪtrɪks ˌɔːɡənaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'tổ chức ma trận',
    example: 'Adopt a matrix organization structure.',
    exampleTranslation: 'Áp dụng cấu trúc tổ chức ma trận.',
    level: 'advanced',
    topic: 'Organization',
  },
  {
    id: 'v790a',
    word: 'flat organization',
    pronunciation: '/flæt ˌɔːɡənaɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'tổ chức phẳng',
    example: 'Flat organizations promote collaboration.',
    exampleTranslation: 'Tổ chức phẳng thúc đẩy hợp tác.',
    level: 'advanced',
    topic: 'Organization',
  },
  // Advanced Problem Solving
  {
    id: 'v791a',
    word: 'diagnosis',
    pronunciation: '/ˌdaɪəɡˈnəʊsɪs/',
    partOfSpeech: 'noun',
    meaning: 'chẩn đoán',
    example: 'Accurate diagnosis is essential.',
    exampleTranslation: 'Chẩn đoán chính xác là thiết yếu.',
    level: 'advanced',
    topic: 'Problem Solving',
  },
  {
    id: 'v792a',
    word: 'root cause',
    pronunciation: '/ruːt kɔːz/',
    partOfSpeech: 'noun',
    meaning: 'nguyên nhân gốc rễ',
    example: 'Identify the root cause of the problem.',
    exampleTranslation: 'Xác định nguyên nhân gốc rễ của vấn đề.',
    level: 'advanced',
    topic: 'Problem Solving',
  },
  {
    id: 'v793a',
    word: 'remediation',
    pronunciation: '/rɪˌmiːdiˈeɪʃn/',
    partOfSpeech: 'noun',
    meaning: 'khắc phục',
    example: 'Begin remediation immediately.',
    exampleTranslation: 'Bắt đầu khắc phục ngay lập tức.',
    level: 'advanced',
    topic: 'Problem Solving',
  },
  {
    id: 'v794a',
    word: 'workaround',
    pronunciation: '/ˈwɜːkəraʊnd/',
    partOfSpeech: 'noun',
    meaning: 'giải pháp tạm thời',
    example: 'Implement a workaround for now.',
    exampleTranslation: 'Triển khai giải pháp tạm thời ngay bây giờ.',
    level: 'advanced',
    topic: 'Problem Solving',
  },
  {
    id: 'v795a',
    word: 'brainstorming',
    pronunciation: '/ˈbreɪnstɔːmɪŋ/',
    partOfSpeech: 'noun',
    meaning: 'động não',
    example: 'Conduct a brainstorming session.',
    exampleTranslation: 'Tiến hành buổi động não.',
    level: 'advanced',
    topic: 'Problem Solving',
  },
  {
    id: 'v796a',
    word: 'lateral thinking',
    pronunciation: '/ˈlætərəl ˈθɪŋkɪŋ/',
    partOfSpeech: 'noun',
    meaning: 'tư duy ngang',
    example: 'Use lateral thinking for innovation.',
    exampleTranslation: 'Sử dụng tư duy ngang cho đổi mới.',
    level: 'advanced',
    topic: 'Problem Solving',
  },
  {
    id: 'v797a',
    word: 'critical thinking',
    pronunciation: '/ˈkrɪtɪkl ˈθɪŋkɪŋ/',
    partOfSpeech: 'noun',
    meaning: 'tư duy phản biện',
    example: 'Develop critical thinking skills.',
    exampleTranslation: 'Phát triển kỹ năng tư duy phản biện.',
    level: 'advanced',
    topic: 'Problem Solving',
  },
  {
    id: 'v798a',
    word: 'analytical',
    pronunciation: '/ˌænəˈlɪtɪkl/',
    partOfSpeech: 'adjective',
    meaning: 'phân tích',
    example: 'Take an analytical approach.',
    exampleTranslation: 'Có cách tiếp cận phân tích.',
    level: 'advanced',
    topic: 'Problem Solving',
  },
  {
    id: 'v799a',
    word: 'systematic',
    pronunciation: '/ˌsɪstəˈmætɪk/',
    partOfSpeech: 'adjective',
    meaning: 'có hệ thống',
    example: 'Use a systematic methodology.',
    exampleTranslation: 'Sử dụng phương pháp có hệ thống.',
    level: 'advanced',
    topic: 'Problem Solving',
  },
  {
    id: 'v800a',
    word: 'holistic',
    pronunciation: '/həʊˈlɪstɪk/',
    partOfSpeech: 'adjective',
    meaning: 'toàn diện',
    example: 'Take a holistic view of the situation.',
    exampleTranslation: 'Có cái nhìn toàn diện về tình hình.',
    level: 'advanced',
    topic: 'Problem Solving',
  },
  {
    id: 'v226',
    word: 'disruptive',
    pronunciation: '/dɪsˈrʌptɪv/',
    partOfSpeech: 'adjective',
    meaning: 'đột phá / gây gián đoạn',
    example: 'This is a disruptive technology.',
    exampleTranslation: 'Đây là một công nghệ đột phá.',
    level: 'advanced',
    topic: 'Technology',
  },
  {
    id: 'v227',
    word: 'scalability',
    pronunciation: '/ˌskeɪləˈbɪləti/',
    partOfSpeech: 'noun',
    meaning: 'khả năng mở rộng',
    example: 'The system has good scalability.',
    exampleTranslation: 'Hệ thống có khả năng mở rộng tốt.',
    level: 'advanced',
    topic: 'Technology',
  },
  {
    id: 'v228',
    word: 'transparency',
    pronunciation: '/trænsˈpærənsi/',
    partOfSpeech: 'noun',
    meaning: 'minh bạch',
    example: 'We value transparency in business.',
    exampleTranslation: 'Chúng tôi coi trọng sự minh bạch trong kinh doanh.',
    level: 'advanced',
    topic: 'Corporate Governance',
  },
  {
    id: 'v229',
    word: 'accountability',
    pronunciation: '/əˌkaʊntəˈbɪləti/',
    partOfSpeech: 'noun',
    meaning: 'trách nhiệm giải trình',
    example: 'Managers must demonstrate accountability.',
    exampleTranslation: 'Người quản lý phải thể hiện trách nhiệm giải trình.',
    level: 'advanced',
    topic: 'Corporate Governance',
  },
  {
    id: 'v230',
    word: 'sustainability',
    pronunciation: '/səˌsteɪnəˈbɪləti/',
    partOfSpeech: 'noun',
    meaning: 'tính bền vững',
    example: 'Environmental sustainability is a priority.',
    exampleTranslation: 'Tính bền vững môi trường là ưu tiên.',
    level: 'advanced',
    topic: 'Corporate Social Responsibility',
  },
];

// GRAMMAR LESSONS DATABASE
export const GRAMMAR_DATABASE: GrammarLesson[] = [
  // === BEGINNER GRAMMAR ===
  {
    id: 'g001',
    level: 'beginner',
    title: 'Present Simple Tense',
    description: 'Thì hiện tại đơn - Dùng cho sự thật, thói quen',
    content: `
## Thì Hiện Tại Đơn (Present Simple)

### Công thức:
- **Khẳng định:** S + V(s/es)
- **Phủ định:** S + do/does + not + V
- **Nghi vấn:** Do/Does + S + V?

### Cách dùng:
1. Diễn tả thói quen, hành động lặp đi lặp lại
2. Sự thật hiển nhiên
3. Lịch trình cố định

### Dấu hiệu nhận biết:
- always, usually, often, sometimes, never
- every day/week/month/year
- once/twice a week
    `,
    examples: [
      {
        english: 'She works in an office.',
        vietnamese: 'Cô ấy làm việc ở văn phòng.',
      },
      {
        english: 'They usually have meetings on Monday.',
        vietnamese: 'Họ thường có họp vào thứ Hai.',
      },
      {
        english: 'The store opens at 9 AM every day.',
        vietnamese: 'Cửa hàng mở cửa lúc 9 giờ sáng mỗi ngày.',
      },
    ],
    exercises: [
      {
        id: 'ex001',
        question: 'She _____ to work by bus every day.',
        options: ['go', 'goes', 'going', 'is going'],
        correctAnswer: 1,
        explanation: 'Dùng "goes" vì chủ ngữ là "she" (ngôi thứ 3 số ít) và diễn tả thói quen hàng ngày.',
      },
      {
        id: 'ex002',
        question: 'They _____ work on weekends.',
        options: ["doesn't", "don't", 'not', 'aren\'t'],
        correctAnswer: 1,
        explanation: 'Dùng "don\'t" với chủ ngữ "they" (số nhiều) trong câu phủ định thì hiện tại đơn.',
      },
    ],
  },
  {
    id: 'g002',
    level: 'beginner',
    title: 'Present Continuous Tense',
    description: 'Thì hiện tại tiếp diễn - Hành động đang xảy ra',
    content: `
## Thì Hiện Tại Tiếp Diễn (Present Continuous)

### Công thức:
- **Khẳng định:** S + am/is/are + V-ing
- **Phủ định:** S + am/is/are + not + V-ing
- **Nghi vấn:** Am/Is/Are + S + V-ing?

### Cách dùng:
1. Hành động đang xảy ra tại thời điểm nói
2. Kế hoạch trong tương lai gần
3. Hành động tạm thời

### Dấu hiệu nhận biết:
- now, right now, at the moment
- Look! Listen!
- at present, currently
    `,
    examples: [
      {
        english: 'I am working on a new project.',
        vietnamese: 'Tôi đang làm việc trên một dự án mới.',
      },
      {
        english: 'She is meeting a client at 3 PM.',
        vietnamese: 'Cô ấy sẽ gặp khách hàng lúc 3 giờ chiều.',
      },
    ],
    exercises: [
      {
        id: 'ex003',
        question: 'Look! The manager _____ to our office.',
        options: ['come', 'comes', 'is coming', 'coming'],
        correctAnswer: 2,
        explanation: 'Dùng "is coming" vì có "Look!" và hành động đang xảy ra.',
      },
    ],
  },

  // === BEGINNER GRAMMAR - Thêm các bài học ===
  {
    id: 'g003',
    level: 'beginner',
    title: 'Past Simple Tense',
    description: 'Thì quá khứ đơn - Hành động đã xảy ra và kết thúc trong quá khứ',
    content: `
## Thì Quá Khứ Đơn (Past Simple)

### Công thức:
- **Khẳng định:** S + V-ed / V2
- **Phủ định:** S + did not + V
- **Nghi vấn:** Did + S + V?

### Cách dùng:
1. Hành động đã xảy ra và hoàn thành trong quá khứ
2. Chuỗi hành động trong quá khứ
3. Thói quen trong quá khứ

### Dấu hiệu nhận biết:
- yesterday, last week/month/year
- ago (2 days ago, 3 years ago)
- in + năm trong quá khứ (in 2020)
    `,
    examples: [
      {
        english: 'I worked in that company for 5 years.',
        vietnamese: 'Tôi đã làm việc ở công ty đó trong 5 năm.',
      },
      {
        english: 'She sent the email yesterday.',
        vietnamese: 'Cô ấy đã gửi email hôm qua.',
      },
      {
        english: 'Did you attend the meeting last week?',
        vietnamese: 'Bạn có tham dự cuộc họp tuần trước không?',
      },
    ],
    exercises: [
      {
        id: 'ex004',
        question: 'The company _____ a new product last month.',
        options: ['launch', 'launches', 'launched', 'launching'],
        correctAnswer: 2,
        explanation: 'Dùng "launched" (Past Simple) vì có "last month" - thời gian xác định trong quá khứ.',
      },
      {
        id: 'ex005',
        question: 'We _____ not receive your payment yet.',
        options: ['do', 'did', 'does', 'done'],
        correctAnswer: 1,
        explanation: 'Dùng "did not" cho câu phủ định thì quá khứ đơn.',
      },
    ],
  },
  {
    id: 'g004',
    level: 'beginner',
    title: 'Future Simple - Will',
    description: 'Thì tương lai đơn - Dự đoán, quyết định tức thì',
    content: `
## Thì Tương Lai Đơn (Future Simple - Will)

### Công thức:
- **Khẳng định:** S + will + V
- **Phủ định:** S + will not (won't) + V
- **Nghi vấn:** Will + S + V?

### Cách dùng:
1. Dự đoán về tương lai
2. Quyết định tức thì tại thời điểm nói
3. Lời hứa, đề nghị giúp đỡ

### Dấu hiệu:
- tomorrow, next week/month/year
- in the future
- soon, probably, perhaps
    `,
    examples: [
      {
        english: 'I will call you tomorrow.',
        vietnamese: 'Tôi sẽ gọi cho bạn vào ngày mai.',
      },
      {
        english: 'The meeting will start at 2 PM.',
        vietnamese: 'Cuộc họp sẽ bắt đầu lúc 2 giờ chiều.',
      },
      {
        english: 'Will you attend the conference?',
        vietnamese: 'Bạn sẽ tham dự hội nghị chứ?',
      },
    ],
    exercises: [
      {
        id: 'ex006',
        question: 'The project _____ finish next month.',
        options: ['will', 'is', 'does', 'has'],
        correctAnswer: 0,
        explanation: 'Dùng "will" để diễn tả hành động trong tương lai với "next month".',
      },
    ],
  },
  {
    id: 'g005',
    level: 'beginner',
    title: 'Modal Verbs - Can, Could, Should',
    description: 'Động từ khuyết thiếu - Khả năng, lời khuyên',
    content: `
## Động từ khuyết thiếu (Modal Verbs)

### Công thức:
S + modal verb + V (infinitive)

### Can / Could:
- **Can**: có thể (khả năng hiện tại)
- **Could**: có thể (khả năng quá khứ, lịch sự hơn can)

### Should:
- Nên làm gì (lời khuyên)

### Lưu ý:
- Không thêm "s" với ngôi thứ 3 số ít
- Không dùng "to" sau modal verbs
    `,
    examples: [
      {
        english: 'I can speak English fluently.',
        vietnamese: 'Tôi có thể nói tiếng Anh trôi chảy.',
      },
      {
        english: 'Could you send me the report?',
        vietnamese: 'Bạn có thể gửi báo cáo cho tôi không?',
      },
      {
        english: 'You should check your email regularly.',
        vietnamese: 'Bạn nên kiểm tra email thường xuyên.',
      },
    ],
    exercises: [
      {
        id: 'ex007',
        question: 'Employees _____ wear formal clothes to work.',
        options: ['should', 'can', 'will', 'may'],
        correctAnswer: 0,
        explanation: 'Dùng "should" để đưa ra lời khuyên hoặc quy định nên làm.',
      },
    ],
  },
  {
    id: 'g006',
    level: 'beginner',
    title: 'Prepositions of Time',
    description: 'Giới từ chỉ thời gian - In, On, At',
    content: `
## Giới từ chỉ thời gian (Prepositions of Time)

### IN:
- Tháng: in January, in March
- Năm: in 2024
- Mùa: in summer, in winter
- Buổi: in the morning/afternoon/evening

### ON:
- Thứ: on Monday, on Friday
- Ngày: on May 15th
- Ngày đặc biệt: on Christmas Day

### AT:
- Giờ: at 9 AM, at 3:30 PM
- Thời điểm: at night, at noon
- Dịp: at Christmas, at the weekend
    `,
    examples: [
      {
        english: 'The meeting is at 10 AM on Monday.',
        vietnamese: 'Cuộc họp lúc 10 giờ sáng vào thứ Hai.',
      },
      {
        english: 'We work in the morning and afternoon.',
        vietnamese: 'Chúng tôi làm việc vào buổi sáng và chiều.',
      },
      {
        english: 'The project started in 2023.',
        vietnamese: 'Dự án bắt đầu năm 2023.',
      },
    ],
    exercises: [
      {
        id: 'ex008',
        question: 'The office is closed _____ weekends.',
        options: ['in', 'on', 'at', 'by'],
        correctAnswer: 2,
        explanation: 'Dùng "at" với "weekend" (at the weekend).',
      },
    ],
  },
  {
    id: 'g007',
    level: 'beginner',
    title: 'Nouns and Articles',
    description: 'Danh từ và mạo từ - A, An, The',
    content: `
## Danh từ và Mạo từ (Nouns and Articles)

### A / AN (Mạo từ không xác định):
- **A:** Trước phụ âm (a book, a car)
- **AN:** Trước nguyên âm (an apple, an hour)
- Dùng với danh từ số ít, lần đầu nhắc đến

### THE (Mạo từ xác định):
- Danh từ đã xác định, đã nhắc đến
- Danh từ duy nhất (the sun, the moon)
- Nhạc cụ (play the piano)
- So sánh nhất (the best)

### Không dùng mạo từ:
- Danh từ số nhiều chung chung
- Tên quốc gia, thành phố
- Bữa ăn, môn thể thao
    `,
    examples: [
      {
        english: 'I need a pen. The pen is on the desk.',
        vietnamese: 'Tôi cần một cái bút. Cái bút ở trên bàn.',
      },
      {
        english: 'She is an engineer at a company.',
        vietnamese: 'Cô ấy là kỹ sư tại một công ty.',
      },
      {
        english: 'The manager called a meeting.',
        vietnamese: 'Người quản lý đã triệu tập một cuộc họp.',
      },
    ],
    exercises: [
      {
        id: 'ex009',
        question: 'He works as _____ accountant.',
        options: ['a', 'an', 'the', 'no article'],
        correctAnswer: 1,
        explanation: 'Dùng "an" trước "accountant" vì bắt đầu bằng nguyên âm "a".',
      },
      {
        id: 'ex010',
        question: 'This is _____ best solution we have.',
        options: ['a', 'an', 'the', 'no article'],
        correctAnswer: 2,
        explanation: 'Dùng "the" với so sánh nhất "best".',
      },
    ],
  },
  {
    id: 'g008',
    level: 'beginner',
    title: 'Pronouns',
    description: 'Đại từ - Subject, Object, Possessive',
    content: `
## Đại từ (Pronouns)

### Subject Pronouns (Chủ ngữ):
I, You, He, She, It, We, They

### Object Pronouns (Tân ngữ):
me, you, him, her, it, us, them

### Possessive Adjectives (Tính từ sở hữu):
my, your, his, her, its, our, their

### Possessive Pronouns (Đại từ sở hữu):
mine, yours, his, hers, its, ours, theirs

### Reflexive Pronouns (Đại từ phản thân):
myself, yourself, himself, herself, itself, ourselves, themselves
    `,
    examples: [
      {
        english: 'She gave me her business card.',
        vietnamese: 'Cô ấy đã đưa cho tôi danh thiếp của cô ấy.',
      },
      {
        english: 'This is my office, and that is yours.',
        vietnamese: 'Đây là văn phòng của tôi, và kia là của bạn.',
      },
      {
        english: 'I can do it myself.',
        vietnamese: 'Tôi có thể tự làm điều đó.',
      },
    ],
    exercises: [
      {
        id: 'ex011',
        question: 'Please send _____ the report by email.',
        options: ['I', 'me', 'my', 'mine'],
        correctAnswer: 1,
        explanation: 'Dùng "me" (object pronoun) sau động từ "send".',
      },
      {
        id: 'ex012',
        question: 'The team completed the project by _____.',
        options: ['them', 'their', 'themselves', 'theirs'],
        correctAnswer: 2,
        explanation: 'Dùng "themselves" (reflexive pronoun) để nhấn mạnh "tự họ làm".',
      },
    ],
  },
  {
    id: 'g009',
    level: 'beginner',
    title: 'Adjectives and Adverbs',
    description: 'Tính từ và Trạng từ',
    content: `
## Tính từ và Trạng từ (Adjectives and Adverbs)

### Adjectives (Tính từ):
- Bổ nghĩa cho danh từ
- Vị trí: trước danh từ hoặc sau động từ "to be"
- Ví dụ: good, fast, important, careful

### Adverbs (Trạng từ):
- Bổ nghĩa cho động từ, tính từ, trạng từ khác
- Thường tận cùng -ly
- Ví dụ: quickly, carefully, well, very

### Một số trạng từ đặc biệt:
- good (adj) → well (adv)
- fast (adj) → fast (adv)
- hard (adj) → hard (adv)
- late (adj) → late (adv)
    `,
    examples: [
      {
        english: 'She is a careful worker. She works carefully.',
        vietnamese: 'Cô ấy là người làm việc cẩn thận. Cô ấy làm việc cẩn thận.',
      },
      {
        english: 'The manager spoke very clearly.',
        vietnamese: 'Người quản lý đã nói rất rõ ràng.',
      },
      {
        english: 'This is an important meeting.',
        vietnamese: 'Đây là một cuộc họp quan trọng.',
      },
    ],
    exercises: [
      {
        id: 'ex013',
        question: 'He works very _____.',
        options: ['hard', 'hardly', 'harder', 'hardest'],
        correctAnswer: 0,
        explanation: 'Dùng "hard" (adverb) để bổ nghĩa cho động từ "works".',
      },
      {
        id: 'ex014',
        question: 'She is a _____ speaker.',
        options: ['confidently', 'confident', 'confidence', 'confidential'],
        correctAnswer: 1,
        explanation: 'Dùng "confident" (adjective) để bổ nghĩa cho danh từ "speaker".',
      },
    ],
  },
  {
    id: 'g010',
    level: 'beginner',
    title: 'Question Words',
    description: 'Từ để hỏi - Who, What, When, Where, Why, How',
    content: `
## Từ để hỏi (Question Words - Wh-Questions)

### Who - Ai:
- Hỏi về người
- Who is the manager?

### What - Gì, cái gì:
- Hỏi về vật, sự việc
- What is your job?

### When - Khi nào:
- Hỏi về thời gian
- When is the meeting?

### Where - Ở đâu:
- Hỏi về địa điểm
- Where is the office?

### Why - Tại sao:
- Hỏi về lý do
- Why are you late?

### How - Như thế nào:
- Hỏi về cách thức, phương tiện
- How do you go to work?
- How much/many - Bao nhiêu
    `,
    examples: [
      {
        english: 'What time does the office open?',
        vietnamese: 'Văn phòng mở cửa lúc mấy giờ?',
      },
      {
        english: 'Where can I find the meeting room?',
        vietnamese: 'Tôi có thể tìm phòng họp ở đâu?',
      },
      {
        english: 'How many employees work here?',
        vietnamese: 'Có bao nhiêu nhân viên làm việc ở đây?',
      },
    ],
    exercises: [
      {
        id: 'ex015',
        question: '_____ is the project deadline?',
        options: ['What', 'When', 'Where', 'Who'],
        correctAnswer: 1,
        explanation: 'Dùng "When" để hỏi về thời gian (deadline).',
      },
      {
        id: 'ex016',
        question: '_____ are you calling?',
        options: ['What', 'When', 'Who', 'How'],
        correctAnswer: 2,
        explanation: 'Dùng "Who" để hỏi về người (đang gọi cho ai).',
      },
    ],
  },
  {
    id: 'g011',
    level: 'beginner',
    title: 'Comparative and Superlative',
    description: 'So sánh hơn và so sánh nhất',
    content: `
## So sánh (Comparative and Superlative)

### Tính từ ngắn (1 âm tiết):
- **So sánh hơn:** adj + -er + than
  - tall → taller than
  - fast → faster than
- **So sánh nhất:** the + adj + -est
  - the tallest
  - the fastest

### Tính từ dài (2+ âm tiết):
- **So sánh hơn:** more + adj + than
  - more important than
  - more expensive than
- **So sánh nhất:** the most + adj
  - the most important
  - the most expensive

### Bất quy tắc:
- good → better → the best
- bad → worse → the worst
- many/much → more → the most
    `,
    examples: [
      {
        english: 'This product is cheaper than that one.',
        vietnamese: 'Sản phẩm này rẻ hơn sản phẩm kia.',
      },
      {
        english: 'She is the most experienced candidate.',
        vietnamese: 'Cô ấy là ứng viên có kinh nghiệm nhất.',
      },
      {
        english: 'Our service is better than before.',
        vietnamese: 'Dịch vụ của chúng tôi tốt hơn trước.',
      },
    ],
    exercises: [
      {
        id: 'ex017',
        question: 'This is the _____ office in the building.',
        options: ['large', 'larger', 'largest', 'most large'],
        correctAnswer: 2,
        explanation: 'Dùng "largest" (superlative) với tính từ ngắn "large".',
      },
      {
        id: 'ex018',
        question: 'Quality is _____ important than price.',
        options: ['much', 'more', 'most', 'many'],
        correctAnswer: 1,
        explanation: 'Dùng "more" với tính từ dài "important" trong so sánh hơn.',
      },
    ],
  },
  {
    id: 'g012',
    level: 'beginner',
    title: 'There is / There are',
    description: 'Cấu trúc "có" - There is/are',
    content: `
## There is / There are

### There is (số ít):
- **Khẳng định:** There is + a/an + singular noun
- **Phủ định:** There isn't + a/an + singular noun
- **Nghi vấn:** Is there + a/an + singular noun?

### There are (số nhiều):
- **Khẳng định:** There are + số đếm/some + plural noun
- **Phủ định:** There aren't + any + plural noun
- **Nghi vấn:** Are there + any + plural noun?

### Cách dùng:
- Diễn tả sự tồn tại, có cái gì đó
- Giới thiệu người/vật mới
    `,
    examples: [
      {
        english: 'There is a meeting room on the second floor.',
        vietnamese: 'Có một phòng họp ở tầng hai.',
      },
      {
        english: 'There are three candidates for this position.',
        vietnamese: 'Có ba ứng viên cho vị trí này.',
      },
      {
        english: 'Is there a printer in the office?',
        vietnamese: 'Có máy in trong văn phòng không?',
      },
    ],
    exercises: [
      {
        id: 'ex019',
        question: '_____ a problem with the system.',
        options: ['There is', 'There are', 'It is', 'They are'],
        correctAnswer: 0,
        explanation: 'Dùng "There is" với danh từ số ít "a problem".',
      },
      {
        id: 'ex020',
        question: '_____ any questions?',
        options: ['Is there', 'Are there', 'Do there', 'Does there'],
        correctAnswer: 1,
        explanation: 'Dùng "Are there" với danh từ số nhiều "questions".',
      },
    ],
  },
  {
    id: 'g013',
    level: 'beginner',
    title: 'Can, Could, Should',
    description: 'Động từ khuyết thiếu cơ bản',
    content: `
## Động từ khuyết thiếu (Modal Verbs)

### CAN:
- Khả năng ở hiện tại
- Xin phép (informal)
- I can speak English.

### COULD:
- Khả năng ở quá khứ
- Xin phép (formal hơn can)
- Gợi ý lịch sự
- Could you help me?

### SHOULD:
- Lời khuyên
- Nghĩa vụ đạo đức
- You should arrive on time.

### Cấu trúc:
- S + modal + V (infinitive)
- Không chia theo ngôi
- Không thêm -s/-es
    `,
    examples: [
      {
        english: 'Can you send me the report?',
        vietnamese: 'Bạn có thể gửi cho tôi báo cáo không?',
      },
      {
        english: 'You should check your email regularly.',
        vietnamese: 'Bạn nên kiểm tra email thường xuyên.',
      },
      {
        english: 'Could we schedule a meeting?',
        vietnamese: 'Chúng ta có thể sắp xếp một cuộc họp không?',
      },
    ],
    exercises: [
      {
        id: 'ex021',
        question: 'Employees _____ wear ID badges.',
        options: ['can', 'could', 'should', 'would'],
        correctAnswer: 2,
        explanation: 'Dùng "should" để diễn tả nghĩa vụ hoặc quy định nên làm.',
      },
      {
        id: 'ex022',
        question: '_____ I use your phone?',
        options: ['Should', 'Must', 'Can', 'Need'],
        correctAnswer: 2,
        explanation: 'Dùng "Can" để xin phép một cách thân mật.',
      },
    ],
  },
  {
    id: 'g014',
    level: 'beginner',
    title: 'Prepositions of Place',
    description: 'Giới từ chỉ nơi chốn',
    content: `
## Giới từ chỉ nơi chốn (Prepositions of Place)

### IN:
- Trong một không gian kín
- in the room, in the building, in the city

### ON:
- Trên bề mặt
- on the desk, on the wall, on the floor

### AT:
- Tại một điểm cụ thể
- at the door, at the station, at work

### Khác:
- **between:** giữa hai vật
- **among:** giữa nhiều vật
- **next to/beside:** bên cạnh
- **behind:** phía sau
- **in front of:** phía trước
- **above/below:** trên/dưới (không chạm)
    `,
    examples: [
      {
        english: 'The office is on the third floor.',
        vietnamese: 'Văn phòng ở tầng ba.',
      },
      {
        english: 'She is waiting at the entrance.',
        vietnamese: 'Cô ấy đang đợi ở lối vào.',
      },
      {
        english: 'The files are in the cabinet.',
        vietnamese: 'Các hồ sơ ở trong tủ.',
      },
    ],
    exercises: [
      {
        id: 'ex023',
        question: 'The meeting room is _____ the second floor.',
        options: ['in', 'on', 'at', 'by'],
        correctAnswer: 1,
        explanation: 'Dùng "on" với tầng lầu (on the floor).',
      },
      {
        id: 'ex024',
        question: 'I\'ll meet you _____ the coffee shop.',
        options: ['in', 'on', 'at', 'by'],
        correctAnswer: 2,
        explanation: 'Dùng "at" với địa điểm cụ thể như "coffee shop".',
      },
    ],
  },
  {
    id: 'g015',
    level: 'beginner',
    title: 'Imperatives',
    description: 'Câu mệnh lệnh',
    content: `
## Câu mệnh lệnh (Imperatives)

### Khẳng định:
- V + (object)
- Open the door.
- Please sit down.

### Phủ định:
- Don't + V
- Don't be late.
- Don't forget the meeting.

### Lịch sự hơn:
- Please + V
- Could you + V?
- Would you mind + V-ing?

### Cách dùng:
- Ra lệnh, yêu cầu
- Hướng dẫn
- Đưa ra lời khuyên
- Cảnh báo
    `,
    examples: [
      {
        english: 'Please submit the report by Friday.',
        vietnamese: 'Vui lòng nộp báo cáo trước thứ Sáu.',
      },
      {
        english: 'Don\'t forget to sign the document.',
        vietnamese: 'Đừng quên ký tài liệu.',
      },
      {
        english: 'Turn off the lights when you leave.',
        vietnamese: 'Tắt đèn khi bạn rời đi.',
      },
    ],
    exercises: [
      {
        id: 'ex025',
        question: '_____ arrive before 9 AM.',
        options: ['Please', 'You please', 'Do please', 'Please you'],
        correctAnswer: 0,
        explanation: 'Dùng "Please" ở đầu câu mệnh lệnh để lịch sự.',
      },
      {
        id: 'ex026',
        question: '_____ use your phone during the meeting.',
        options: ['Not', 'Don\'t', 'Doesn\'t', 'Aren\'t'],
        correctAnswer: 1,
        explanation: 'Dùng "Don\'t" để tạo câu mệnh lệnh phủ định.',
      },
    ],
  },

  // === INTERMEDIATE GRAMMAR ===
  {
    id: 'g101',
    level: 'intermediate',
    title: 'Past Perfect Tense',
    description: 'Thì quá khứ hoàn thành - Hành động trước hành động khác trong quá khứ',
    content: `
## Thì Quá Khứ Hoàn Thành (Past Perfect)

### Công thức:
- **Khẳng định:** S + had + V3/ed
- **Phủ định:** S + had not + V3/ed
- **Nghi vấn:** Had + S + V3/ed?

### Cách dùng:
1. Hành động xảy ra trước một hành động khác trong quá khứ
2. Hành động hoàn thành trước một thời điểm trong quá khứ

### Dấu hiệu:
- before, after, by the time, until
- when (kết hợp với Past Simple)
    `,
    examples: [
      {
        english: 'By the time I arrived, the meeting had already started.',
        vietnamese: 'Khi tôi đến, cuộc họp đã bắt đầu rồi.',
      },
      {
        english: 'She had finished the report before the deadline.',
        vietnamese: 'Cô ấy đã hoàn thành báo cáo trước hạn chót.',
      },
    ],
    exercises: [
      {
        id: 'ex101',
        question: 'When I called her, she _____ the office.',
        options: ['already left', 'has already left', 'had already left', 'was already leaving'],
        correctAnswer: 2,
        explanation: 'Dùng Past Perfect "had already left" vì hành động rời văn phòng xảy ra trước hành động gọi điện.',
      },
    ],
  },

  // === INTERMEDIATE GRAMMAR - Thêm các bài học ===
  {
    id: 'g102',
    level: 'intermediate',
    title: 'Present Perfect Tense',
    description: 'Thì hiện tại hoàn thành - Hành động bắt đầu trong quá khứ, liên quan đến hiện tại',
    content: `
## Thì Hiện Tại Hoàn Thành (Present Perfect)

### Công thức:
- **Khẳng định:** S + have/has + V3/ed
- **Phủ định:** S + have/has + not + V3/ed
- **Nghi vấn:** Have/Has + S + V3/ed?

### Cách dùng:
1. Hành động xảy ra trong quá khứ, không rõ thời gian
2. Kinh nghiệm trong đời
3. Hành động bắt đầu trong quá khứ, tiếp tục đến hiện tại

### Dấu hiệu:
- just, already, yet
- ever, never
- since, for
- recently, lately
    `,
    examples: [
      {
        english: 'I have worked here for 5 years.',
        vietnamese: 'Tôi đã làm việc ở đây được 5 năm.',
      },
      {
        english: 'Have you ever visited their office?',
        vietnamese: 'Bạn đã bao giờ đến văn phòng của họ chưa?',
      },
      {
        english: 'She has just finished the presentation.',
        vietnamese: 'Cô ấy vừa mới hoàn thành bài thuyết trình.',
      },
    ],
    exercises: [
      {
        id: 'ex102',
        question: 'We _____ this project since January.',
        options: ['work on', 'worked on', 'have worked on', 'are working on'],
        correctAnswer: 2,
        explanation: 'Dùng Present Perfect "have worked on" với "since January" - hành động bắt đầu từ tháng 1 đến giờ.',
      },
      {
        id: 'ex103',
        question: 'The company _____ its revenue recently.',
        options: ['increased', 'has increased', 'is increasing', 'increases'],
        correctAnswer: 1,
        explanation: 'Dùng "has increased" với "recently" trong thì hiện tại hoàn thành.',
      },
    ],
  },
  {
    id: 'g103',
    level: 'intermediate',
    title: 'Passive Voice',
    description: 'Câu bị động - Nhấn mạnh hành động, không nhấn mạnh người thực hiện',
    content: `
## Câu Bị Động (Passive Voice)

### Công thức:
- **Hiện tại:** S + am/is/are + V3/ed
- **Quá khứ:** S + was/were + V3/ed
- **Tương lai:** S + will be + V3/ed
- **Hiện tại hoàn thành:** S + have/has been + V3/ed

### Khi nào dùng:
1. Không biết ai thực hiện hành động
2. Không quan trọng ai thực hiện
3. Nhấn mạnh hành động, không phải người thực hiện

### By + người thực hiện (nếu cần)
    `,
    examples: [
      {
        english: 'The report was completed yesterday.',
        vietnamese: 'Báo cáo đã được hoàn thành hôm qua.',
      },
      {
        english: 'All employees are required to attend the meeting.',
        vietnamese: 'Tất cả nhân viên được yêu cầu tham dự cuộc họp.',
      },
      {
        english: 'The product has been tested thoroughly.',
        vietnamese: 'Sản phẩm đã được kiểm tra kỹ lưỡng.',
      },
    ],
    exercises: [
      {
        id: 'ex104',
        question: 'The documents _____ to the client tomorrow.',
        options: ['will send', 'will be sent', 'are sending', 'have sent'],
        correctAnswer: 1,
        explanation: 'Dùng "will be sent" - câu bị động thì tương lai.',
      },
    ],
  },
  {
    id: 'g104',
    level: 'intermediate',
    title: 'Conditional Sentences Type 1 & 2',
    description: 'Câu điều kiện loại 1 & 2',
    content: `
## Câu Điều Kiện (Conditional Sentences)

### Loại 1 - Có thể xảy ra ở hiện tại/tương lai:
**If + S + V (hiện tại), S + will + V**

### Loại 2 - Không có thật ở hiện tại:
**If + S + V-ed/V2, S + would + V**

### Lưu ý:
- Type 1: điều kiện có thể xảy ra
- Type 2: điều kiện không có thật hoặc khó xảy ra
    `,
    examples: [
      {
        english: 'If you work hard, you will succeed.',
        vietnamese: 'Nếu bạn làm việc chăm chỉ, bạn sẽ thành công.',
      },
      {
        english: 'If I were the manager, I would change the policy.',
        vietnamese: 'Nếu tôi là quản lý, tôi sẽ thay đổi chính sách.',
      },
      {
        english: 'If we finish early, we can go home.',
        vietnamese: 'Nếu chúng ta hoàn thành sớm, chúng ta có thể về nhà.',
      },
    ],
    exercises: [
      {
        id: 'ex105',
        question: 'If the project _____ on time, we will get a bonus.',
        options: ['finishes', 'will finish', 'finished', 'would finish'],
        correctAnswer: 0,
        explanation: 'Câu điều kiện loại 1: If + hiện tại đơn, will + V.',
      },
    ],
  },
  {
    id: 'g105',
    level: 'intermediate',
    title: 'Relative Clauses',
    description: 'Mệnh đề quan hệ - Who, Which, That',
    content: `
## Mệnh đề Quan Hệ (Relative Clauses)

### Đại từ quan hệ:
- **Who**: người (chủ ngữ/tân ngữ)
- **Which**: vật (chủ ngữ/tân ngữ)
- **That**: người/vật (chủ ngữ/tân ngữ)
- **Whose**: sở hữu
- **Where**: nơi chốn
- **When**: thời gian

### Phân loại:
1. **Defining**: cần thiết để xác định danh từ (không có dấu phẩy)
2. **Non-defining**: bổ sung thông tin (có dấu phẩy)
    `,
    examples: [
      {
        english: 'The employee who works in sales is very talented.',
        vietnamese: 'Nhân viên làm việc trong bộ phận bán hàng rất tài năng.',
      },
      {
        english: 'The report which you requested is ready.',
        vietnamese: 'Báo cáo mà bạn yêu cầu đã sẵn sàng.',
      },
      {
        english: 'This is the office where I work.',
        vietnamese: 'Đây là văn phòng nơi tôi làm việc.',
      },
    ],
    exercises: [
      {
        id: 'ex106',
        question: 'The manager _____ hired you is very experienced.',
        options: ['who', 'which', 'where', 'when'],
        correctAnswer: 0,
        explanation: 'Dùng "who" cho người (the manager).',
      },
    ],
  },
  {
    id: 'g106',
    level: 'intermediate',
    title: 'Gerunds and Infinitives',
    description: 'Danh động từ và Động từ nguyên mẫu',
    content: `
## Gerunds (V-ing) và Infinitives (to V)

### Gerunds (V-ing):
- Sau giới từ: interested in working
- Sau một số động từ: enjoy, finish, mind, avoid, suggest

### Infinitives (to V):
- Sau một số động từ: want, decide, plan, hope, need
- Để chỉ mục đích

### Cả hai được (nghĩa khác nhau):
- stop, remember, forget, try
    `,
    examples: [
      {
        english: 'I enjoy working with this team.',
        vietnamese: 'Tôi thích làm việc với nhóm này.',
      },
      {
        english: 'We plan to expand our business.',
        vietnamese: 'Chúng tôi có kế hoạch mở rộng kinh doanh.',
      },
      {
        english: 'She finished writing the report.',
        vietnamese: 'Cô ấy hoàn thành viết báo cáo.',
      },
    ],
    exercises: [
      {
        id: 'ex107',
        question: 'The company decided _____ a new branch.',
        options: ['opening', 'to open', 'open', 'opened'],
        correctAnswer: 1,
        explanation: 'Sau "decide" dùng "to V" (infinitive).',
      },
    ],
  },
  {
    id: 'g107',
    level: 'intermediate',
    title: 'Relative Clauses',
    description: 'Mệnh đề quan hệ - Bổ nghĩa cho danh từ',
    content: `
## Mệnh đề quan hệ (Relative Clauses)

### Đại từ quan hệ:
- **Who:** cho người (chủ ngữ/tân ngữ)
  - The employee who won the award is Sarah.
- **Which:** cho vật (chủ ngữ/tân ngữ)
  - The report which I wrote was approved.
- **That:** cho người/vật (không dùng sau dấu phẩy)
  - The project that we started is successful.
- **Whose:** chỉ sở hữu
  - The manager whose team performed well got promoted.
- **Where:** chỉ nơi chốn
  - The office where I work is downtown.
- **When:** chỉ thời gian
  - The day when we met was Monday.

### Phân loại:
1. **Defining:** không có dấu phẩy (quan trọng)
   - The candidates who passed the test will be interviewed.
2. **Non-defining:** có dấu phẩy (bổ sung thông tin)
   - Mr. Smith, who is our CEO, will speak today.
    `,
    examples: [
      {
        english: 'The clients who attended the meeting were satisfied.',
        vietnamese: 'Các khách hàng tham dự cuộc họp đều hài lòng.',
      },
      {
        english: 'This is the conference room where we hold our weekly meetings.',
        vietnamese: 'Đây là phòng hội nghị nơi chúng tôi họp hàng tuần.',
      },
      {
        english: 'The document, which was submitted yesterday, needs revision.',
        vietnamese: 'Tài liệu, được nộp ngày hôm qua, cần sửa đổi.',
      },
    ],
    exercises: [
      {
        id: 'ex108',
        question: 'The person _____ designed this website is very talented.',
        options: ['which', 'who', 'where', 'when'],
        correctAnswer: 1,
        explanation: 'Dùng "who" cho người làm chủ ngữ.',
      },
      {
        id: 'ex109',
        question: 'This is the building _____ our company is located.',
        options: ['which', 'who', 'where', 'that'],
        correctAnswer: 2,
        explanation: 'Dùng "where" để chỉ nơi chốn.',
      },
    ],
  },
  {
    id: 'g108',
    level: 'intermediate',
    title: 'Tag Questions',
    description: 'Câu hỏi đuôi - Xác nhận thông tin',
    content: `
## Câu hỏi đuôi (Tag Questions)

### Quy tắc cơ bản:
- **Khẳng định → phủ định:** You work here, don't you?
- **Phủ định → khẳng định:** You don't smoke, do you?

### Với động từ thường:
- Present simple: do/does/don't/doesn't
  - He works late, doesn't he?
- Past simple: did/didn't
  - They arrived yesterday, didn't they?

### Với động từ to be/modal:
- Dùng lại động từ đó
  - She is busy, isn't she?
  - You can help, can't you?
  - He will come, won't he?

### Trường hợp đặc biệt:
- I am → aren't I? (không dùng amn't)
- Let's → shall we?
- Imperative → will you?
- Nothing/Nobody → they
    `,
    examples: [
      {
        english: "The meeting starts at 9, doesn't it?",
        vietnamese: 'Cuộc họp bắt đầu lúc 9 giờ phải không?',
      },
      {
        english: "You haven't finished the report yet, have you?",
        vietnamese: 'Bạn chưa hoàn thành báo cáo phải không?',
      },
      {
        english: "Let's schedule a follow-up meeting, shall we?",
        vietnamese: 'Chúng ta hãy lên lịch cuộc họp tiếp theo nhé?',
      },
    ],
    exercises: [
      {
        id: 'ex110',
        question: 'She can speak French, _____?',
        options: ['can she', "can't she", 'does she', "doesn't she"],
        correctAnswer: 1,
        explanation: 'Khẳng định với "can" → dùng "can\'t she" ở câu hỏi đuôi.',
      },
      {
        id: 'ex111',
        question: "They didn't attend the conference, _____?",
        options: ['did they', "didn't they", 'do they', "don't they"],
        correctAnswer: 0,
        explanation: 'Phủ định với "didn\'t" → dùng "did they" ở câu hỏi đuôi.',
      },
    ],
  },
  {
    id: 'g109',
    level: 'intermediate',
    title: 'Reported Speech',
    description: 'Câu tường thuật - Kể lại lời nói',
    content: `
## Câu tường thuật (Reported Speech)

### Lùi thì (Backshift):
- Present simple → Past simple
- Present continuous → Past continuous
- Present perfect → Past perfect
- Past simple → Past perfect
- Will → Would
- Can → Could
- May → Might

### Thay đổi từ chỉ định:
- this → that
- these → those
- now → then
- today → that day
- tomorrow → the next/following day
- yesterday → the day before/previous day
- here → there

### Cấu trúc:
- **Statement:** S + said (that) + S + V(lùi thì)
- **Question:** S + asked + if/whether + S + V(lùi thì)
- **Wh-question:** S + asked + wh-word + S + V(lùi thì)
- **Command:** S + told/asked + O + (not) to V
    `,
    examples: [
      {
        english: 'Direct: "I am working on the project." → Reported: He said he was working on the project.',
        vietnamese: 'Trực tiếp: "Tôi đang làm dự án." → Gián tiếp: Anh ấy nói rằng anh ấy đang làm dự án.',
      },
      {
        english: 'Direct: "Can you help me?" → Reported: She asked if I could help her.',
        vietnamese: 'Trực tiếp: "Bạn có thể giúp tôi không?" → Gián tiếp: Cô ấy hỏi liệu tôi có thể giúp cô ấy.',
      },
      {
        english: 'Direct: "Please submit the report tomorrow." → Reported: The manager told us to submit the report the next day.',
        vietnamese: 'Trực tiếp: "Hãy nộp báo cáo vào ngày mai." → Gián tiếp: Quản lý bảo chúng tôi nộp báo cáo vào ngày hôm sau.',
      },
    ],
    exercises: [
      {
        id: 'ex112',
        question: 'Direct: "I will attend the meeting." → Reported: She said she _____ attend the meeting.',
        options: ['will', 'would', 'can', 'could'],
        correctAnswer: 1,
        explanation: 'Lùi thì: "will" → "would" trong câu tường thuật.',
      },
      {
        id: 'ex113',
        question: 'Direct: "Where do you work?" → Reported: He asked me where _____.',
        options: ['do I work', 'did I work', 'I work', 'I worked'],
        correctAnswer: 3,
        explanation: 'Trong câu hỏi tường thuật: đảo ngữ về trật tự bình thường và lùi thì.',
      },
    ],
  },
  {
    id: 'g110',
    level: 'intermediate',
    title: 'Wish and If only',
    description: 'Câu ước - Mong muốn điều không có thật',
    content: `
## Câu ước (Wish and If only)

### Ước về hiện tại (trái với hiện tại):
**S + wish + S + V(past simple)**
- I wish I had more time.
  (Tôi ước tôi có nhiều thời gian hơn - nhưng thực tế không có)
- She wishes she could speak Japanese.
  (Cô ấy ước cô ấy có thể nói tiếng Nhật - nhưng không thể)

### Ước về quá khứ (tiếc nuối):
**S + wish + S + had + V3**
- I wish I had attended the conference.
  (Tôi ước tôi đã tham dự hội nghị - nhưng đã không)
- He wishes he hadn't made that mistake.
  (Anh ấy ước anh ấy đã không mắc lỗi đó - nhưng đã mắc)

### Ước về tương lai (mong muốn):
**S + wish + S + would + V**
- I wish the meeting would finish soon.
  (Tôi ước cuộc họp sẽ kết thúc sớm)

### If only:
- Giống "wish" nhưng mạnh mẽ hơn, thể hiện sự tiếc nuối/mong muốn mạnh
- If only I knew the answer! (Giá mà tôi biết câu trả lời!)
    `,
    examples: [
      {
        english: 'I wish I worked in a bigger office.',
        vietnamese: 'Tôi ước tôi làm việc trong văn phòng lớn hơn.',
      },
      {
        english: 'She wishes she had taken the job offer.',
        vietnamese: 'Cô ấy tiếc là đã không nhận lời mời làm việc đó.',
      },
      {
        english: 'If only the client would respond to our email!',
        vietnamese: 'Giá mà khách hàng phản hồi email của chúng ta!',
      },
    ],
    exercises: [
      {
        id: 'ex114',
        question: 'I wish I _____ more about marketing.',
        options: ['know', 'knew', 'known', 'have known'],
        correctAnswer: 1,
        explanation: 'Ước về hiện tại dùng quá khứ đơn: "knew".',
      },
      {
        id: 'ex115',
        question: 'He wishes he _____ the deadline yesterday.',
        options: ['meets', 'met', 'had met', 'would meet'],
        correctAnswer: 2,
        explanation: 'Ước về quá khứ (tiếc nuối) dùng past perfect: "had met".',
      },
    ],
  },
  {
    id: 'g111',
    level: 'intermediate',
    title: 'Causative Verbs (Have/Get)',
    description: 'Động từ sai khiến - Nhờ ai đó làm gì',
    content: `
## Động từ sai khiến (Causative Verbs)

### Have something done:
**S + have + O (vật) + V3 (past participle)**
- Nghĩa: nhờ/thuê ai đó làm gì
- I had my car repaired. (Tôi đã nhờ sửa xe)
- We will have the office cleaned. (Chúng tôi sẽ nhờ dọn văn phòng)

### Get something done:
**S + get + O (vật) + V3 (past participle)**
- Giống "have" nhưng informal hơn
- She got her computer fixed. (Cô ấy đã nhờ sửa máy tính)

### Have someone do something:
**S + have + O (người) + V (infinitive)**
- I had my assistant prepare the report.
  (Tôi nhờ trợ lý chuẩn bị báo cáo)

### Get someone to do something:
**S + get + O (người) + to V**
- She got her colleague to help with the project.
  (Cô ấy nhờ đồng nghiệp giúp dự án)

### Phân biệt:
- Have/Get + O(vật) + V3: Nhờ làm gì (không nói rõ ai làm)
- Have + O(người) + V: Sai/nhờ ai làm
- Get + O(người) + to V: Thuyết phục ai làm
    `,
    examples: [
      {
        english: 'We had the brochures printed last week.',
        vietnamese: 'Chúng tôi đã nhờ in tờ rơi tuần trước.',
      },
      {
        english: 'I need to get my resume updated.',
        vietnamese: 'Tôi cần nhờ cập nhật hồ sơ.',
      },
      {
        english: 'The manager had his team review the proposal.',
        vietnamese: 'Quản lý nhờ nhóm của anh ấy xem xét đề xuất.',
      },
    ],
    exercises: [
      {
        id: 'ex116',
        question: 'I need to have my phone _____.',
        options: ['repair', 'repaired', 'repairing', 'to repair'],
        correctAnswer: 1,
        explanation: 'Cấu trúc "have + O(vật) + V3": "have my phone repaired".',
      },
      {
        id: 'ex117',
        question: 'She got her assistant _____ the documents.',
        options: ['organize', 'to organize', 'organized', 'organizing'],
        correctAnswer: 1,
        explanation: 'Cấu trúc "get + O(người) + to V": "got her assistant to organize".',
      },
    ],
  },
  {
    id: 'g112',
    level: 'intermediate',
    title: 'Emphatic Structures (Cleft Sentences)',
    description: 'Câu chẻ - Nhấn mạnh thông tin',
    content: `
## Câu chẻ (Cleft Sentences)

### It + be + ... + that/who:
- Nhấn mạnh chủ ngữ, tân ngữ, trạng từ
- **Normal:** John designed the logo.
- **Cleft:** It was John who designed the logo.
  (Chính John là người thiết kế logo)
- **Normal:** We need better communication.
- **Cleft:** It is better communication that we need.
  (Điều chúng ta cần là giao tiếp tốt hơn)

### What + S + V + be:
- Nhấn mạnh hành động/điều gì đó
- **Normal:** I want a promotion.
- **Cleft:** What I want is a promotion.
  (Điều tôi muốn là thăng chức)
- **Normal:** She needs more training.
- **Cleft:** What she needs is more training.
  (Điều cô ấy cần là đào tạo thêm)

### The thing/person that:
- The thing that matters most is customer satisfaction.
  (Điều quan trọng nhất là sự hài lòng của khách hàng)
- The person that helped me was the HR manager.
  (Người đã giúp tôi là quản lý nhân sự)

### All + S + V + be:
- All I need is your approval.
  (Tất cả những gì tôi cần là sự chấp thuận của bạn)
    `,
    examples: [
      {
        english: 'It was in 2020 that our company expanded internationally.',
        vietnamese: 'Chính vào năm 2020 công ty chúng tôi mở rộng ra quốc tế.',
      },
      {
        english: 'What we achieved was remarkable growth.',
        vietnamese: 'Điều chúng tôi đạt được là sự tăng trưởng đáng kể.',
      },
      {
        english: 'The thing that impressed me most was their professionalism.',
        vietnamese: 'Điều gây ấn tượng với tôi nhất là sự chuyên nghiệp của họ.',
      },
    ],
    exercises: [
      {
        id: 'ex118',
        question: '_____ was the CEO who made the final decision.',
        options: ['It', 'What', 'That', 'Which'],
        correctAnswer: 0,
        explanation: 'Câu chẻ nhấn mạnh chủ ngữ "CEO" dùng cấu trúc "It was ... who".',
      },
      {
        id: 'ex119',
        question: '_____ I appreciate most is your dedication.',
        options: ['It', 'What', 'That', 'This'],
        correctAnswer: 1,
        explanation: 'Nhấn mạnh tân ngữ "dedication" dùng cấu trúc "What + S + V + be".',
      },
    ],
  },
  {
    id: 'g113',
    level: 'intermediate',
    title: 'Used to vs Would vs Be used to',
    description: 'Thói quen quá khứ và hiện tại',
    content: `
## Used to / Would / Be used to

### Used to + V:
- Thói quen/trạng thái trong quá khứ (bây giờ không còn)
- I used to work in marketing.
  (Tôi từng làm trong marketing - bây giờ không còn)
- She used to commute by train.
  (Cô ấy từng đi làm bằng tàu - bây giờ không)

### Would + V:
- Chỉ thói quen lặp đi lặp lại trong quá khứ
- Không dùng với động từ trạng thái (be, have, know, like...)
- When I was young, I would visit my grandparents every weekend.
  (Khi tôi còn nhỏ, tôi thường đến thăm ông bà mỗi cuối tuần)

### Be/get used to + V-ing/N:
- Quen với điều gì đó (hiện tại)
- I am used to working under pressure.
  (Tôi quen với làm việc dưới áp lực)
- She is getting used to the new system.
  (Cô ấy đang dần quen với hệ thống mới)

### Phân biệt:
| Cấu trúc | Nghĩa | Thời gian |
|----------|-------|-----------|
| used to + V | từng (không còn nữa) | quá khứ |
| would + V | thường (lặp lại) | quá khứ |
| be used to + V-ing | quen với | hiện tại |
    `,
    examples: [
      {
        english: 'I used to be a sales representative.',
        vietnamese: 'Tôi từng là nhân viên bán hàng.',
      },
      {
        english: 'We would have team meetings every Monday.',
        vietnamese: 'Chúng tôi thường có họp nhóm mỗi thứ Hai.',
      },
      {
        english: 'He is used to managing large teams.',
        vietnamese: 'Anh ấy quen với việc quản lý các nhóm lớn.',
      },
    ],
    exercises: [
      {
        id: 'ex120',
        question: 'I _____ work from home, but now I go to the office.',
        options: ['used to', 'would', 'am used to', 'get used to'],
        correctAnswer: 0,
        explanation: 'Dùng "used to" để chỉ thói quen quá khứ không còn nữa.',
      },
      {
        id: 'ex121',
        question: 'She is _____ presenting in front of large audiences.',
        options: ['used to', 'use to', 'using to', 'used'],
        correctAnswer: 0,
        explanation: '"Be used to + V-ing" nghĩa là quen với việc gì đó.',
      },
    ],
  },
  {
    id: 'g114',
    level: 'intermediate',
    title: 'Inversion (Basic)',
    description: 'Đảo ngữ cơ bản - Nhấn mạnh',
    content: `
## Đảo ngữ cơ bản (Inversion)

### Với phó từ phủ định đầu câu:
**Never/Rarely/Seldom/Hardly/Scarcely + auxiliary + S + V**

- Never have I seen such dedication.
  (Tôi chưa bao giờ thấy sự tận tụy như vậy)
- Rarely do we receive such positive feedback.
  (Hiếm khi chúng tôi nhận được phản hồi tích cực như vậy)
- Seldom does he miss a deadline.
  (Hiếm khi anh ấy trễ deadline)

### Với "Only" đầu câu:
**Only + time/when/if + auxiliary + S + V**

- Only then did I understand the problem.
  (Chỉ lúc đó tôi mới hiểu vấn đề)
- Only after the meeting did we realize the mistake.
  (Chỉ sau cuộc họp chúng tôi mới nhận ra lỗi)
- Only when you work hard can you succeed.
  (Chỉ khi bạn làm việc chăm chỉ bạn mới thành công)

### Với "Not only... but also":
**Not only + auxiliary + S + V, but also + S + V**

- Not only did she complete the project, but she also exceeded expectations.
  (Cô ấy không chỉ hoàn thành dự án mà còn vượt mong đợi)

### Với "So/Such" đầu câu:
- So impressed was he that he offered me the job immediately.
  (Anh ấy ấn tượng đến nỗi đề nghị tôi công việc ngay lập tức)
    `,
    examples: [
      {
        english: 'Never before had the company achieved such high sales.',
        vietnamese: 'Chưa bao giờ công ty đạt được doanh số cao như vậy.',
      },
      {
        english: 'Only by improving quality can we compete effectively.',
        vietnamese: 'Chỉ bằng cách cải thiện chất lượng chúng ta mới cạnh tranh hiệu quả.',
      },
      {
        english: 'Not only did he apologize, but he also compensated for the error.',
        vietnamese: 'Anh ấy không chỉ xin lỗi mà còn bồi thường cho lỗi.',
      },
    ],
    exercises: [
      {
        id: 'ex122',
        question: 'Rarely _____ such excellent customer service.',
        options: ['we see', 'do we see', 'we do see', 'see we'],
        correctAnswer: 1,
        explanation: 'Đảo ngữ với "Rarely": Rarely + do/does/did + S + V.',
      },
      {
        id: 'ex123',
        question: 'Only after reviewing the data _____ the error.',
        options: ['we discovered', 'did we discover', 'we did discover', 'discovered we'],
        correctAnswer: 1,
        explanation: 'Đảo ngữ với "Only": Only + time + did + S + V.',
      },
    ],
  },
  {
    id: 'g115',
    level: 'intermediate',
    title: 'Conditionals (All Types)',
    description: 'Câu điều kiện - Tất cả các loại',
    content: `
## Câu điều kiện (Conditionals)

### Type 0 (Sự thật hiển nhiên):
**If + present simple, present simple**
- If you heat water to 100°C, it boils.
  (Nếu bạn đun nước đến 100°C, nó sôi)
- If employees work overtime, they receive extra pay.
  (Nếu nhân viên làm thêm giờ, họ nhận thêm lương)

### Type 1 (Có thể xảy ra ở hiện tại/tương lai):
**If + present simple, will + V**
- If we launch the product next month, we will meet our target.
  (Nếu chúng ta ra mắt sản phẩm tháng sau, chúng ta sẽ đạt mục tiêu)
- If you submit the report on time, you won't have any problems.
  (Nếu bạn nộp báo cáo đúng hạn, bạn sẽ không gặp vấn đề gì)

### Type 2 (Không có thật ở hiện tại):
**If + past simple, would + V**
- If I had more experience, I would apply for that position.
  (Nếu tôi có nhiều kinh nghiệm hơn, tôi sẽ ứng tuyển vị trí đó - nhưng không có)
- If the office were bigger, we could hire more staff.
  (Nếu văn phòng lớn hơn, chúng ta có thể tuyển thêm nhân viên - nhưng không lớn)

### Type 3 (Không có thật ở quá khứ):
**If + past perfect, would have + V3**
- If we had invested earlier, we would have made more profit.
  (Nếu chúng ta đầu tư sớm hơn, chúng ta đã kiếm được nhiều lợi nhuận hơn - nhưng không đầu tư)
- If she had attended the training, she would have learned the new system.
  (Nếu cô ấy tham dự đào tạo, cô ấy đã học hệ thống mới - nhưng không tham dự)

### Mixed Conditionals:
- If I had studied harder (past), I would be a manager now (present).
  (Nếu tôi học chăm chỉ hơn, bây giờ tôi đã là quản lý)
    `,
    examples: [
      {
        english: 'If you need assistance, please contact our support team.',
        vietnamese: 'Nếu bạn cần hỗ trợ, vui lòng liên hệ nhóm hỗ trợ.',
      },
      {
        english: 'If we reduced costs, we could increase our profit margin.',
        vietnamese: 'Nếu chúng ta giảm chi phí, chúng ta có thể tăng tỷ suất lợi nhuận.',
      },
      {
        english: 'If they had prepared better, they would have won the contract.',
        vietnamese: 'Nếu họ chuẩn bị tốt hơn, họ đã thắng hợp đồng.',
      },
    ],
    exercises: [
      {
        id: 'ex124',
        question: 'If the economy _____, we will expand our business.',
        options: ['improves', 'improved', 'will improve', 'would improve'],
        correctAnswer: 0,
        explanation: 'Câu điều kiện loại 1: If + present simple, will + V.',
      },
      {
        id: 'ex125',
        question: 'If I _____ the meeting yesterday, I would have known about the changes.',
        options: ['attend', 'attended', 'had attended', 'have attended'],
        correctAnswer: 2,
        explanation: 'Câu điều kiện loại 3: If + past perfect, would have + V3.',
      },
    ],
  },

  // === ADVANCED GRAMMAR ===
  {
    id: 'g201',
    level: 'advanced',
    title: 'Subjunctive Mood',
    description: 'Câu giả định - Diễn tả mong muốn, đề nghị, yêu cầu',
    content: `
## Thức Giả Định (Subjunctive Mood)

### Cấu trúc:
S + suggest/recommend/propose/insist/demand + that + S + (should) + V (infinitive)

### Lưu ý:
- Động từ sau "that" luôn ở dạng nguyên mẫu không "to"
- Không chia theo ngôi, không thêm s/es

### Các động từ thường dùng:
- suggest, recommend, propose
- insist, demand, require
- request, ask, advise
    `,
    examples: [
      {
        english: 'The board suggests that the company invest in new technology.',
        vietnamese: 'Hội đồng quản trị đề xuất công ty đầu tư vào công nghệ mới.',
      },
      {
        english: 'It is essential that all employees attend the training.',
        vietnamese: 'Việc tất cả nhân viên tham dự khóa đào tạo là rất quan trọng.',
      },
    ],
    exercises: [
      {
        id: 'ex201',
        question: 'The manager insists that every employee _____ the new policy.',
        options: ['follows', 'follow', 'following', 'to follow'],
        correctAnswer: 1,
        explanation: 'Sau "insist that" dùng động từ nguyên mẫu "follow" (subjunctive mood).',
      },
    ],
  },
  {
    id: 'g202',
    level: 'advanced',
    title: 'Inversion',
    description: 'Đảo ngữ - Nhấn mạnh trong văn viết chính thức',
    content: `
## Đảo Ngữ (Inversion)

### Với trạng từ phủ định:
Never/Rarely/Seldom/Hardly + auxiliary + S + V

### Với Only:
Only when/after/if + auxiliary + S + V

### Với No sooner/Hardly:
No sooner had + S + V3 + than + S + V-ed
Hardly had + S + V3 + when + S + V-ed

### Mục đích:
- Nhấn mạnh
- Văn viết chính thức
- Tạo phong cách trang trọng
    `,
    examples: [
      {
        english: 'Never have I seen such dedication.',
        vietnamese: 'Chưa bao giờ tôi thấy sự cống hiến như vậy.',
      },
      {
        english: 'Only when the project is complete can we relax.',
        vietnamese: 'Chỉ khi dự án hoàn thành chúng ta mới có thể thư giãn.',
      },
      {
        english: 'Rarely does the CEO attend such meetings.',
        vietnamese: 'Hiếm khi CEO tham dự những cuộc họp như vậy.',
      },
    ],
    exercises: [
      {
        id: 'ex202',
        question: 'Never _____ such a successful product launch.',
        options: ['we have seen', 'have we seen', 'we saw', 'did we saw'],
        correctAnswer: 1,
        explanation: 'Sau "Never" cần đảo trợ động từ lên trước chủ ngữ: Never + have + S + V3.',
      },
    ],
  },
  {
    id: 'g203',
    level: 'advanced',
    title: 'Advanced Conditionals (Type 3 & Mixed)',
    description: 'Câu điều kiện nâng cao - Loại 3 và hỗn hợp',
    content: `
## Câu Điều Kiện Nâng Cao

### Loại 3 - Không có thật trong quá khứ:
**If + S + had + V3, S + would have + V3**

### Mixed Conditionals:
**If + S + had + V3, S + would + V** (quá khứ → hiện tại)
**If + S + V-ed, S + would have + V3** (hiện tại → quá khứ)

### Các biến thể:
- Could have, might have, should have
- Unless = if... not
- Provided that, as long as
    `,
    examples: [
      {
        english: 'If we had invested earlier, we would have made more profit.',
        vietnamese: 'Nếu chúng ta đã đầu tư sớm hơn, chúng ta đã kiếm được nhiều lợi nhuận hơn.',
      },
      {
        english: 'If I had studied harder, I would be the manager now.',
        vietnamese: 'Nếu tôi đã học chăm hơn, bây giờ tôi đã là quản lý.',
      },
      {
        english: 'Provided that you meet the requirements, you can apply.',
        vietnamese: 'Với điều kiện bạn đáp ứng yêu cầu, bạn có thể nộp đơn.',
      },
    ],
    exercises: [
      {
        id: 'ex203',
        question: 'If the company _____ the contract, it would have avoided bankruptcy.',
        options: ['won', 'had won', 'has won', 'wins'],
        correctAnswer: 1,
        explanation: 'Câu điều kiện loại 3: If + S + had V3, S + would have V3.',
      },
    ],
  },
  {
    id: 'g204',
    level: 'advanced',
    title: 'Reported Speech Advanced',
    description: 'Câu tường thuật nâng cao',
    content: `
## Câu Tường Thuật Nâng Cao (Reported Speech)

### Lùi thì:
- Present → Past
- Past → Past Perfect
- Will → Would
- Can → Could

### Thay đổi trạng từ:
- now → then
- today → that day
- tomorrow → the next/following day
- yesterday → the day before/previous day

### Câu hỏi tường thuật:
S + asked + (O) + if/whether + S + V
S + asked + (O) + Wh-word + S + V

### Câu mệnh lệnh:
S + told/asked + O + (not) to V
    `,
    examples: [
      {
        english: 'She said that she would attend the conference.',
        vietnamese: 'Cô ấy nói rằng cô ấy sẽ tham dự hội nghị.',
      },
      {
        english: 'The manager asked if we had finished the project.',
        vietnamese: 'Người quản lý hỏi liệu chúng tôi đã hoàn thành dự án chưa.',
      },
      {
        english: 'He told me to submit the report by Friday.',
        vietnamese: 'Anh ấy bảo tôi nộp báo cáo trước thứ Sáu.',
      },
    ],
    exercises: [
      {
        id: 'ex204',
        question: 'The CEO said that profits _____ by 20% the previous year.',
        options: ['increased', 'had increased', 'have increased', 'increase'],
        correctAnswer: 1,
        explanation: 'Lùi thì Past Simple → Past Perfect trong câu tường thuật.',
      },
    ],
  },
  {
    id: 'g205',
    level: 'advanced',
    title: 'Cleft Sentences',
    description: 'Câu chẻ - Nhấn mạnh thông tin',
    content: `
## Câu Chẻ (Cleft Sentences)

### It is/was... that/who:
**It + is/was + nhấn mạnh + that/who + S + V**

### What... is/was:
**What + S + V + is/was + nhấn mạnh**

### The thing/person/reason that:
**The thing that + S + V + is/was...**

### Mục đích:
- Nhấn mạnh một phần cụ thể của câu
- Tạo trọng tâm thông tin
- Làm rõ nghĩa
    `,
    examples: [
      {
        english: 'It was the marketing strategy that led to success.',
        vietnamese: 'Chính chiến lược marketing đã dẫn đến thành công.',
      },
      {
        english: 'What we need is better communication.',
        vietnamese: 'Điều chúng ta cần là giao tiếp tốt hơn.',
      },
      {
        english: 'It is teamwork that makes the company strong.',
        vietnamese: 'Chính làm việc nhóm làm cho công ty mạnh mẽ.',
      },
    ],
    exercises: [
      {
        id: 'ex205',
        question: 'It _____ the dedication of employees that drives success.',
        options: ['are', 'is', 'was', 'were'],
        correctAnswer: 1,
        explanation: 'Dùng "is" trong cấu trúc It is... that để nhấn mạnh.',
      },
    ],
  },
  {
    id: 'g206',
    level: 'advanced',
    title: 'Participle Clauses',
    description: 'Mệnh đề phân từ - Rút gọn câu',
    content: `
## Mệnh đề Phân Từ (Participle Clauses)

### Present Participle (V-ing):
Dùng khi hai hành động xảy ra đồng thời hoặc hành động chủ động

### Past Participle (V3/ed):
Dùng khi hành động bị động

### Perfect Participle (Having V3):
Dùng khi hành động xảy ra trước hành động khác

### Công dụng:
- Rút gọn câu
- Văn viết chính thức
- Nối các ý liên quan
    `,
    examples: [
      {
        english: 'Working hard, she achieved great success.',
        vietnamese: 'Làm việc chăm chỉ, cô ấy đã đạt được thành công lớn.',
      },
      {
        english: 'Built in 2020, the office building is very modern.',
        vietnamese: 'Được xây dựng năm 2020, tòa nhà văn phòng rất hiện đại.',
      },
      {
        english: 'Having finished the project, we celebrated.',
        vietnamese: 'Sau khi hoàn thành dự án, chúng tôi ăn mừng.',
      },
    ],
    exercises: [
      {
        id: 'ex206',
        question: '_____ the requirements, applicants must submit their CVs.',
        options: ['Meeting', 'Met', 'To meet', 'Meet'],
        correctAnswer: 0,
        explanation: 'Dùng Present Participle "Meeting" để rút gọn mệnh đề điều kiện.',
      },
    ],
  },
  {
    id: 'g207',
    level: 'advanced',
    title: 'Wishes and Regrets',
    description: 'Câu ước và hối tiếc',
    content: `
## Câu Ước và Hối Tiếc (Wishes and Regrets)

### Wish - Hiện tại:
**S + wish + S + V-ed/were**
(ước điều không có thật ở hiện tại)

### Wish - Quá khứ:
**S + wish + S + had + V3**
(hối tiếc về quá khứ)

### Wish - Tương lai:
**S + wish + S + would + V**
(ước điều khó xảy ra trong tương lai)

### If only:
Giống wish nhưng nhấn mạnh hơn
    `,
    examples: [
      {
        english: 'I wish I had more experience in marketing.',
        vietnamese: 'Tôi ước mình có nhiều kinh nghiệm marketing hơn.',
      },
      {
        english: 'She wishes she had accepted the job offer.',
        vietnamese: 'Cô ấy ước gì cô ấy đã chấp nhận lời mời làm việc.',
      },
      {
        english: 'If only the economy would improve.',
        vietnamese: 'Giá mà nền kinh tế được cải thiện.',
      },
    ],
    exercises: [
      {
        id: 'ex207',
        question: 'I wish I _____ more time to complete the project.',
        options: ['have', 'had', 'have had', 'will have'],
        correctAnswer: 1,
        explanation: 'Wish + Past Simple để ước điều không có thật ở hiện tại.',
      },
    ],
  },
  {
    id: 'g208',
    level: 'advanced',
    title: 'Advanced Inversion',
    description: 'Đảo ngữ nâng cao - Nhấn mạnh',
    content: `
## Đảo ngữ nâng cao (Advanced Inversion)

### No sooner... than / Hardly... when:
**No sooner + had + S + V3 + than + S + V2**
**Hardly/Scarcely + had + S + V3 + when + S + V2**
- No sooner had the meeting started than the CEO arrived.
  (Cuộc họp vừa bắt đầu thì CEO đã đến)
- Hardly had we launched the product when orders started pouring in.
  (Chúng tôi vừa ra mắt sản phẩm thì đơn hàng bắt đầu đổ về)

### Not until:
**Not until + time/clause + auxiliary + S + V**
- Not until we analyzed the data did we understand the problem.
  (Mãi cho đến khi phân tích dữ liệu chúng tôi mới hiểu vấn đề)

### Under no circumstances / On no account:
**Under no circumstances + auxiliary + S + V**
- Under no circumstances should you share confidential information.
  (Trong mọi trường hợp bạn không được chia sẻ thông tin mật)

### So/Such... that:
- So competitive is the market that only the best survive.
  (Thị trường cạnh tranh đến mức chỉ những người tốt nhất mới tồn tại)
- Such was the demand that we increased production.
  (Nhu cầu lớn đến mức chúng tôi tăng sản xuất)

### Little did S know:
- Little did we know that this decision would change everything.
  (Chúng tôi không hề biết rằng quyết định này sẽ thay đổi mọi thứ)
    `,
    examples: [
      {
        english: 'No sooner had we finished the presentation than questions began.',
        vietnamese: 'Chúng tôi vừa kết thúc bài thuyết trình thì câu hỏi bắt đầu.',
      },
      {
        english: 'Not until the deadline passed did they realize the mistake.',
        vietnamese: 'Mãi đến khi hết hạn họ mới nhận ra lỗi.',
      },
      {
        english: 'Under no circumstances can we compromise on quality.',
        vietnamese: 'Trong mọi trường hợp chúng ta không thể thỏa hiệp về chất lượng.',
      },
    ],
    exercises: [
      {
        id: 'ex208',
        question: 'No sooner _____ the contract than they started working.',
        options: ['they signed', 'had they signed', 'they had signed', 'signed they'],
        correctAnswer: 1,
        explanation: 'Cấu trúc "No sooner + had + S + V3".',
      },
      {
        id: 'ex209',
        question: 'Under no circumstances _____ client data.',
        options: ['we share', 'do we share', 'we do share', 'share we'],
        correctAnswer: 1,
        explanation: 'Đảo ngữ với "Under no circumstances + do/does/did + S + V".',
      },
    ],
  },
  {
    id: 'g209',
    level: 'advanced',
    title: 'Ellipsis and Substitution',
    description: 'Lược bỏ và thay thế - Tránh lặp từ',
    content: `
## Lược bỏ và Thay thế (Ellipsis and Substitution)

### Ellipsis (Lược bỏ):
Bỏ những từ đã được nhắc đến để tránh lặp

**Auxiliary ellipsis:**
- "Will you attend?" "Yes, I will [attend]."
- "Have you finished?" "No, I haven't [finished]."

**To-infinitive ellipsis:**
- "You should apply for the position." "I'd like to [apply]."

**Noun ellipsis:**
- "Which report?" "The [report] on the desk."

### Substitution (Thay thế):
Dùng từ khác thay cho từ đã nhắc

**Do/Does/Did:**
- She works harder than he does [works].
- We completed the project faster than they did [completed].

**One/Ones:**
- This laptop is better than that one [laptop].
- I prefer the blue ones [products] to the red ones.

**So/Not:**
- "Is the meeting today?" "I think so [it is today]."
- "Will they approve?" "I hope not [they won't approve]."

### So + auxiliary + S:
- "I enjoy working here." "So do I [enjoy working here]."
- "She has completed the training." "So have we [completed]."
    `,
    examples: [
      {
        english: '"Are you ready for the presentation?" "Yes, I am."',
        vietnamese: '"Bạn sẵn sàng cho bài thuyết trình chưa?" "Vâng, tôi sẵn sàng rồi."',
      },
      {
        english: 'Our sales increased this quarter, and our competitors did too.',
        vietnamese: 'Doanh số của chúng tôi tăng quý này, và đối thủ cũng vậy.',
      },
      {
        english: '"The client wants a discount." "I thought so."',
        vietnamese: '"Khách hàng muốn giảm giá." "Tôi đã nghĩ vậy."',
      },
    ],
    exercises: [
      {
        id: 'ex210',
        question: '"I have reviewed the contract." "So _____ I."',
        options: ['do', 'have', 'am', 'did'],
        correctAnswer: 1,
        explanation: 'Dùng "have" để đồng ý với present perfect: "So have I".',
      },
      {
        id: 'ex211',
        question: 'This solution is more effective than that _____.',
        options: ['it', 'one', 'thing', 'does'],
        correctAnswer: 1,
        explanation: 'Dùng "one" để thay thế danh từ đã nhắc (solution).',
      },
    ],
  },
  {
    id: 'g210',
    level: 'advanced',
    title: 'Mixed Conditionals',
    description: 'Câu điều kiện hỗn hợp - Kết hợp các loại',
    content: `
## Câu điều kiện hỗn hợp (Mixed Conditionals)

### Type 1: Past → Present
**If + past perfect, would + V (now)**
Điều kiện ở quá khứ → Kết quả ở hiện tại

- If I had studied business (past), I would be a manager now (present).
  (Nếu tôi đã học kinh doanh, bây giờ tôi đã là quản lý)
- If we had invested earlier (past), we would have more clients today (present).
  (Nếu chúng tôi đã đầu tư sớm hơn, hôm nay chúng tôi có nhiều khách hàng hơn)

### Type 2: Present → Past
**If + past simple, would have + V3 (past)**
Điều kiện ở hiện tại → Kết quả ở quá khứ

- If he were more organized (present), he wouldn't have missed the deadline (past).
  (Nếu anh ấy có tổ chức hơn, anh ấy đã không trễ deadline)
- If our system were better (present), the error wouldn't have occurred (past).
  (Nếu hệ thống của chúng tôi tốt hơn, lỗi đã không xảy ra)

### Type 3: Past → Past (different times)
**If + past perfect, would have + V3**
- If we had hired more staff last year, we would have completed the project on time.
  (Nếu chúng tôi tuyển thêm nhân viên năm ngoái, chúng tôi đã hoàn thành dự án đúng hạn)

### Các biến thể:
- Unless (= if not)
- Provided/Providing that (= if)
- As long as (= if)
    `,
    examples: [
      {
        english: 'If she had accepted the promotion, she would be earning more now.',
        vietnamese: 'Nếu cô ấy đã chấp nhận thăng chức, bây giờ cô ấy đã kiếm được nhiều hơn.',
      },
      {
        english: 'If our budget were larger, we could have hired that consultant.',
        vietnamese: 'Nếu ngân sách của chúng ta lớn hơn, chúng ta đã có thể thuê chuyên gia tư vấn đó.',
      },
      {
        english: 'Provided that you submit on time, your application will be considered.',
        vietnamese: 'Miễn là bạn nộp đúng hạn, đơn của bạn sẽ được xem xét.',
      },
    ],
    exercises: [
      {
        id: 'ex212',
        question: 'If I _____ harder in college, I _____ a better job now.',
        options: ['studied / will have', 'had studied / would have', 'studied / would have', 'had studied / would have had'],
        correctAnswer: 1,
        explanation: 'Mixed conditional (past → present): If + past perfect, would + V.',
      },
      {
        id: 'ex213',
        question: 'If our team _____ larger, we _____ the project last month.',
        options: ['were / would complete', 'were / would have completed', 'had been / would complete', 'is / would have completed'],
        correctAnswer: 1,
        explanation: 'Mixed conditional (present → past): If + past simple, would have + V3.',
      },
    ],
  },
  {
    id: 'g211',
    level: 'advanced',
    title: 'Advanced Linking Words',
    description: 'Liên từ nâng cao - Kết nối ý',
    content: `
## Liên từ nâng cao (Advanced Linking Words)

### Contrast (Tương phản):
- **Nevertheless / Nonetheless:** Tuy nhiên (formal)
  - The market is difficult; nevertheless, we achieved our targets.
- **Notwithstanding:** Mặc dù (very formal)
  - Notwithstanding the challenges, we succeeded.
- **Whereas / While:** Trong khi đó
  - Our sales increased, whereas our competitors declined.
- **On the contrary:** Ngược lại
  - The project wasn't a failure. On the contrary, it was successful.

### Addition (Bổ sung):
- **Moreover / Furthermore:** Hơn nữa
  - The product is affordable. Moreover, it's high quality.
- **In addition / Additionally:** Ngoài ra
  - We offer training. In addition, we provide mentoring.
- **Besides:** Bên cạnh đó
  - Besides experience, we value creativity.

### Result (Kết quả):
- **Consequently / As a consequence:** Kết quả là
  - Sales dropped; consequently, we reduced costs.
- **Therefore / Thus / Hence:** Do đó
  - The market changed; therefore, we adapted our strategy.
- **Accordingly:** Theo đó
  - The policy changed; accordingly, we updated our procedures.

### Purpose (Mục đích):
- **So that / In order that:** Để mà
  - We invested in training so that employees could develop skills.
- **With a view to + V-ing:** Với mục đích
  - We expanded with a view to increasing market share.

### Condition (Điều kiện):
- **Provided that / Providing that:** Miễn là
  - You can work remotely provided that you meet deadlines.
- **Unless:** Trừ khi
  - We won't succeed unless we innovate.
- **In case:** Phòng khi
  - Bring your laptop in case we need to present.
    `,
    examples: [
      {
        english: 'The economy declined; nevertheless, our company remained profitable.',
        vietnamese: 'Nền kinh tế suy giảm; tuy nhiên, công ty chúng tôi vẫn có lợi nhuận.',
      },
      {
        english: 'We implemented new software so that operations would be more efficient.',
        vietnamese: 'Chúng tôi triển khai phần mềm mới để hoạt động hiệu quả hơn.',
      },
      {
        english: 'The product is affordable. Moreover, it comes with a warranty.',
        vietnamese: 'Sản phẩm có giá phải chăng. Hơn nữa, nó đi kèm bảo hành.',
      },
    ],
    exercises: [
      {
        id: 'ex214',
        question: 'Sales decreased; _____, we maintained profitability.',
        options: ['however', 'nevertheless', 'although', 'despite'],
        correctAnswer: 1,
        explanation: '"Nevertheless" (tuy nhiên) phù hợp với câu formal, đứng sau dấu chấm phẩy.',
      },
      {
        id: 'ex215',
        question: 'We offer competitive salaries. _____, we provide excellent benefits.',
        options: ['However', 'Moreover', 'Although', 'Despite'],
        correctAnswer: 1,
        explanation: '"Moreover" (hơn nữa) dùng để bổ sung thông tin tích cực.',
      },
    ],
  },
  {
    id: 'g212',
    level: 'advanced',
    title: 'Nominalization',
    description: 'Danh từ hóa - Chuyển động từ/tính từ thành danh từ',
    content: `
## Danh từ hóa (Nominalization)

### Khái niệm:
Chuyển động từ hoặc tính từ thành danh từ để văn viết formal hơn

### Động từ → Danh từ:
- apply → application (đơn xin)
- develop → development (phát triển)
- improve → improvement (cải thiện)
- analyze → analysis (phân tích)
- produce → production (sản xuất)
- manage → management (quản lý)
- employ → employment (việc làm)
- decide → decision (quyết định)

### Tính từ → Danh từ:
- efficient → efficiency (hiệu quả)
- successful → success (thành công)
- important → importance (tầm quan trọng)
- confident → confidence (sự tự tin)
- responsible → responsibility (trách nhiệm)
- popular → popularity (sự phổ biến)

### Sử dụng:
**Informal:** We decided to expand quickly.
**Formal:** The decision to expand was made quickly.

**Informal:** The company grew significantly.
**Formal:** The company experienced significant growth.

**Informal:** Employees must be responsible.
**Formal:** Employee responsibility is essential.

### Lợi ích:
- Văn viết chuyên nghiệp hơn
- Súc tích hơn
- Phù hợp văn bản kinh doanh
    `,
    examples: [
      {
        english: 'The implementation of the new system improved efficiency.',
        vietnamese: 'Việc triển khai hệ thống mới đã cải thiện hiệu quả.',
      },
      {
        english: 'The development of our products requires significant investment.',
        vietnamese: 'Việc phát triển sản phẩm của chúng tôi đòi hỏi đầu tư đáng kể.',
      },
      {
        english: 'The importance of customer satisfaction cannot be overstated.',
        vietnamese: 'Tầm quan trọng của sự hài lòng khách hàng không thể nói quá.',
      },
    ],
    exercises: [
      {
        id: 'ex216',
        question: 'The _____ of the project took three months.',
        options: ['complete', 'completed', 'completion', 'completing'],
        correctAnswer: 2,
        explanation: '"Completion" là danh từ của động từ "complete".',
      },
      {
        id: 'ex217',
        question: 'The _____ of this strategy is crucial for success.',
        options: ['implement', 'implementation', 'implemented', 'implementing'],
        correctAnswer: 1,
        explanation: '"Implementation" là danh từ của động từ "implement".',
      },
    ],
  },
  {
    id: 'g213',
    level: 'advanced',
    title: 'Fronting and Focus',
    description: 'Đảo vị trí - Nhấn mạnh thông tin',
    content: `
## Đảo vị trí và nhấn mạnh (Fronting and Focus)

### Fronting (Đưa lên đầu câu):
Đưa tân ngữ/trạng từ lên đầu câu để nhấn mạnh

**Normal:** I have never seen such dedication.
**Fronted:** Such dedication I have never seen.

**Normal:** We achieved remarkable results last year.
**Fronted:** Last year, we achieved remarkable results.

### Focus với "What":
**What + S + V + be + N/clause**
- What we need is better communication.
  (Điều chúng ta cần là giao tiếp tốt hơn)
- What impressed me was their professionalism.
  (Điều gây ấn tượng với tôi là sự chuyên nghiệp của họ)

### Focus với "It":
**It + be + N/phrase + that/who + clause**
- It was John who designed the logo.
  (Chính John đã thiết kế logo)
- It is quality that matters most.
  (Chất lượng mới là điều quan trọng nhất)

### Existential "There":
- There remains much work to be done.
  (Vẫn còn nhiều việc phải làm)
- There arose a problem with the supplier.
  (Đã xuất hiện vấn đề với nhà cung cấp)

### Left dislocation:
Nhắc lại chủ ngữ bằng đại từ
- This company, it has excellent values.
  (Công ty này, nó có giá trị tuyệt vời)
    `,
    examples: [
      {
        english: 'Never before have we experienced such growth.',
        vietnamese: 'Chưa bao giờ chúng tôi trải qua sự tăng trưởng như vậy.',
      },
      {
        english: 'What distinguishes our company is innovation.',
        vietnamese: 'Điều phân biệt công ty chúng tôi là sự đổi mới.',
      },
      {
        english: 'It was in 2020 that we launched our first product.',
        vietnamese: 'Chính vào năm 2020 chúng tôi ra mắt sản phẩm đầu tiên.',
      },
    ],
    exercises: [
      {
        id: 'ex218',
        question: '_____ we value most is customer loyalty.',
        options: ['That', 'What', 'Which', 'It'],
        correctAnswer: 1,
        explanation: 'Dùng "What" trong cấu trúc "What + S + V + be" để nhấn mạnh.',
      },
      {
        id: 'ex219',
        question: 'It _____ the marketing team that won the award.',
        options: ['is', 'was', 'has', 'does'],
        correctAnswer: 1,
        explanation: 'Dùng "was" trong cấu trúc "It was... that" (quá khứ).',
      },
    ],
  },
  {
    id: 'g214',
    level: 'advanced',
    title: 'Hedging and Certainty',
    description: 'Diễn đạt dè dặt và chắc chắn',
    content: `
## Diễn đạt dè dặt và chắc chắn (Hedging and Certainty)

### Hedging (Dè dặt, không chắc chắn):
Làm mềm lời nói, tránh khẳng định tuyệt đối

**Modal verbs:**
- may / might / could: có thể
  - This approach might be more effective.
- would / should: nên
  - It would seem that we need to reconsider.

**Adverbs:**
- perhaps, possibly, probably, apparently
  - The results are probably accurate.
- seemingly, arguably
  - This is arguably the best solution.

**Verbs:**
- appear, seem, tend to, suggest
  - The data appears to support this conclusion.
  - Research suggests that quality matters most.

**Phrases:**
- It is possible that...
- It would appear that...
- It seems likely that...
- To some extent...
- In most cases...

### Certainty (Chắc chắn):
Khẳng định mạnh mẽ

**Modal verbs:**
- must, will, cannot
  - This will definitely improve results.
  - This cannot be the correct approach.

**Adverbs:**
- certainly, definitely, clearly, obviously
  - Clearly, we need to change strategy.

**Verbs:**
- prove, demonstrate, confirm
  - The results prove our hypothesis.

**Phrases:**
- It is certain that...
- There is no doubt that...
- It is clear/obvious that...
- Without question...
    `,
    examples: [
      {
        english: 'It would appear that customer satisfaction has improved.',
        vietnamese: 'Có vẻ như sự hài lòng của khách hàng đã được cải thiện.',
      },
      {
        english: 'The data clearly demonstrates the effectiveness of this strategy.',
        vietnamese: 'Dữ liệu rõ ràng chứng minh hiệu quả của chiến lược này.',
      },
      {
        english: 'This approach might be worth considering.',
        vietnamese: 'Cách tiếp cận này có thể đáng xem xét.',
      },
    ],
    exercises: [
      {
        id: 'ex220',
        question: 'The results _____ that our strategy is working.',
        options: ['might', 'could', 'suggest', 'perhaps'],
        correctAnswer: 2,
        explanation: '"Suggest" là động từ hedging phù hợp với câu này.',
      },
      {
        id: 'ex221',
        question: 'It is _____ that we need to increase investment.',
        options: ['possibly', 'probably', 'clear', 'seemingly'],
        correctAnswer: 2,
        explanation: '"Clear" thể hiện sự chắc chắn trong cấu trúc "It is clear that".',
      },
    ],
  },
  {
    id: 'g215',
    level: 'advanced',
    title: 'Cohesion and Coherence',
    description: 'Sự liên kết và mạch lạc trong văn bản',
    content: `
## Sự liên kết và mạch lạc (Cohesion and Coherence)

### Reference (Chiếu):
Dùng đại từ/từ chỉ định để tránh lặp

**Personal pronouns:**
- The company launched a new product. It was successful.

**Demonstratives:**
- We faced challenges. These difficulties were overcome.
  (this, that, these, those)

**Comparative:**
- Sales increased. The former was due to marketing.
  (the former, the latter)

### Substitution (Thay thế):
- Our old system was slow. The new one is much faster.
  (one, ones, do, so)

### Ellipsis (Lược bỏ):
- "Have you finished?" "Yes, I have [finished]."

### Conjunction (Liên từ):
**Addition:** and, furthermore, moreover, in addition
**Contrast:** but, however, nevertheless, on the other hand
**Cause/Effect:** because, therefore, consequently, as a result
**Time:** then, next, finally, meanwhile

### Lexical cohesion (Liên kết từ vựng):
**Repetition:** company → company
**Synonyms:** company → organization → firm
**Related words:** manager → leadership → supervisor

### Coherence (Mạch lạc):
- Logical progression of ideas
- Clear topic sentences
- Supporting details
- Smooth transitions

### Discourse markers:
- Firstly, Secondly, Finally
- In conclusion, To summarize
- For instance, For example
- In other words, That is to say
    `,
    examples: [
      {
        english: 'Our company values innovation. This commitment drives our success. Moreover, it attracts talented employees.',
        vietnamese: 'Công ty chúng tôi coi trọng đổi mới. Cam kết này thúc đẩy thành công của chúng tôi. Hơn nữa, nó thu hút nhân viên tài năng.',
      },
      {
        english: 'We analyzed the market. The results were surprising. Consequently, we adjusted our strategy.',
        vietnamese: 'Chúng tôi phân tích thị trường. Kết quả thật ngạc nhiên. Do đó, chúng tôi điều chỉnh chiến lược.',
      },
      {
        english: 'The project had three phases. The first involved research, the second focused on development, and the third dealt with implementation.',
        vietnamese: 'Dự án có ba giai đoạn. Giai đoạn đầu liên quan đến nghiên cứu, giai đoạn thứ hai tập trung vào phát triển, và giai đoạn thứ ba xử lý triển khai.',
      },
    ],
    exercises: [
      {
        id: 'ex222',
        question: 'We launched two products. _____ was successful, _____ failed.',
        options: ['The first / the second', 'The former / the latter', 'This / that', 'One / another'],
        correctAnswer: 1,
        explanation: '"The former / the latter" dùng để chỉ cái đầu và cái sau trong hai thứ đã nhắc.',
      },
      {
        id: 'ex223',
        question: 'Sales dropped. _____, we reduced our budget.',
        options: ['Moreover', 'However', 'Consequently', 'Furthermore'],
        correctAnswer: 2,
        explanation: '"Consequently" (do đó) thể hiện kết quả của việc doanh số giảm.',
      },
    ],
  },

  // === ADDITIONAL ADVANCED GRAMMAR FOR 800+ SCORE ===
  {
    id: 'g216',
    level: 'advanced',
    title: 'Word Forms - Part of Speech',
    description: 'Từ loại - Kỹ năng quan trọng nhất cho Part 5',
    content: `
## Từ loại (Word Forms / Part of Speech)

### Nhận diện vị trí từ loại trong câu:

**NOUN (Danh từ):**
Vị trí:
- Sau: a/an/the, this/that/these/those, possessive (my/his/our)
- Sau tính từ: good idea, important decision
- Làm chủ ngữ: The manager approved...
- Làm tân ngữ: We need more employees

Đuôi thường gặp: -tion, -sion, -ment, -ness, -ity, -er, -or, -ance, -ence

**VERB (Động từ):**
Vị trí:
- Sau chủ ngữ: The company operates...
- Sau modal verbs: will increase, should consider
- Sau to: to improve, to develop

Dạng: V/V-s/V-ed/V-ing, to-V

**ADJECTIVE (Tính từ):**
Vị trí:
- Trước danh từ: successful project
- Sau be/seem/become: is important, seems reasonable
- Sau very/so/too/quite/extremely

Đuôi: -ful, -less, -ous, -ive, -al, -able, -ible, -ic, -ent, -ant

**ADVERB (Trạng từ):**
Vị trí:
- Bổ nghĩa động từ: work efficiently
- Bổ nghĩa tính từ: extremely important
- Đầu câu: Recently, we launched...
- Giữa câu: We recently launched...

Đuôi: -ly (carefully, quickly, successfully)

### Common Word Families (TOEIC):

**PRODUCE:**
- Noun: production, product, producer, productivity
- Verb: produce
- Adjective: productive, producible
- Adverb: productively

**SUCCEED:**
- Noun: success
- Verb: succeed
- Adjective: successful
- Adverb: successfully

**COMPETE:**
- Noun: competition, competitor, competitiveness
- Verb: compete
- Adjective: competitive
- Adverb: competitively

**EFFECT:**
- Noun: effect
- Verb: affect (ảnh hưởng)
- Adjective: effective, affective
- Adverb: effectively

### Cặp từ dễ nhầm:

**Economic vs. Economical:**
- Economic (adj): relating to economy (thuộc về kinh tế)
  → economic growth, economic policy
- Economical (adj): not wasteful (tiết kiệm)
  → economical car, economical solution

**Effect vs. Affect:**
- Effect (n): result (kết quả)
- Affect (v): to influence (ảnh hưởng)

**Complement vs. Compliment:**
- Complement (v/n): complete (bổ sung hoàn thiện)
- Compliment (v/n): praise (khen ngợi)

**Principal vs. Principle:**
- Principal (adj/n): main, chief (chính, hiệu trưởng)
- Principle (n): rule, belief (nguyên tắc)
    `,
    examples: [
      {
        english: 'The manager made an important announcement about the new policy.',
        vietnamese: 'Người quản lý đã đưa ra một thông báo quan trọng về chính sách mới.',
      },
      {
        english: 'Our company successfully launched three products last year.',
        vietnamese: 'Công ty chúng tôi đã thành công ra mắt ba sản phẩm năm ngoái.',
      },
      {
        english: 'The team worked efficiently to complete the project on time.',
        vietnamese: 'Nhóm đã làm việc hiệu quả để hoàn thành dự án đúng hạn.',
      },
      {
        english: 'Recent developments in technology have greatly improved productivity.',
        vietnamese: 'Các phát triển gần đây trong công nghệ đã cải thiện năng suất rất nhiều.',
      },
    ],
    exercises: [
      {
        id: 'ex224',
        question: 'The new system will improve our _____ significantly.',
        options: ['produce', 'product', 'production', 'productive'],
        correctAnswer: 2,
        explanation: 'Cần danh từ sau "our". "Production" (năng suất sản xuất) là danh từ phù hợp.',
      },
      {
        id: 'ex225',
        question: 'She _____ completed all tasks before the deadline.',
        options: ['success', 'succeed', 'successful', 'successfully'],
        correctAnswer: 3,
        explanation: 'Cần trạng từ bổ nghĩa cho động từ "completed". "Successfully" là trạng từ.',
      },
      {
        id: 'ex226',
        question: 'We need a more _____ approach to solve this problem.',
        options: ['effect', 'effective', 'effectively', 'effectiveness'],
        correctAnswer: 1,
        explanation: 'Cần tính từ trước danh từ "approach". "Effective" (hiệu quả) là tính từ.',
      },
      {
        id: 'ex227',
        question: 'The _____ situation requires immediate action.',
        options: ['economy', 'economic', 'economical', 'economically'],
        correctAnswer: 1,
        explanation: '"Economic situation" (tình hình kinh tế) - "economic" nghĩa là thuộc về kinh tế.',
      },
    ],
  },
  {
    id: 'g217',
    level: 'advanced',
    title: 'Collocations - Fixed Phrases',
    description: 'Cụm từ cố định thường gặp trong TOEIC',
    content: `
## Collocations - Cụm từ cố định

### Verb + Noun Collocations:

**MAKE:**
- make a decision (đưa ra quyết định)
- make a profit (có lợi nhuận)
- make progress (tiến bộ)
- make an appointment (đặt lịch hẹn)
- make a reservation (đặt chỗ)
- make a mistake (phạm lỗi)
- make an effort (nỗ lực)
- make arrangements (sắp xếp)

**DO:**
- do business (làm ăn)
- do research (nghiên cứu)
- do work (làm việc)
- do a favor (giúp đỡ)
- do damage (gây thiệt hại)

**TAKE:**
- take action (hành động)
- take place (diễn ra)
- take responsibility (chịu trách nhiệm)
- take advantage of (tận dụng)
- take into account (xem xét)
- take measures (thực hiện biện pháp)
- take notes (ghi chú)
- take a break (nghỉ giải lao)

**GIVE:**
- give a presentation (thuyết trình)
- give permission (cho phép)
- give priority to (ưu tiên)
- give notice (thông báo)
- give consideration (xem xét)

**REACH:**
- reach an agreement (đạt được thỏa thuận)
- reach a conclusion (đi đến kết luận)
- reach a decision (đạt được quyết định)
- reach a target (đạt mục tiêu)

### Adjective + Noun Collocations:

**BUSINESS:**
- competitive advantage (lợi thế cạnh tranh)
- market research (nghiên cứu thị trường)
- sales figures (số liệu bán hàng)
- profit margin (biên lợi nhuận)
- annual report (báo cáo thường niên)
- business strategy (chiến lược kinh doanh)
- customer satisfaction (sự hài lòng của khách hàng)

**WORK:**
- heavy workload (khối lượng công việc nặng)
- flexible schedule (lịch trình linh hoạt)
- tight deadline (thời hạn gấp)
- job satisfaction (sự hài lòng trong công việc)
- performance review (đánh giá hiệu suất)

### Preposition Collocations:

**AT:**
- at a discount (với giá giảm)
- at no extra cost (không mất phí thêm)
- at short notice (trong thời gian ngắn)
- at present (hiện tại)

**IN:**
- in advance (trước)
- in accordance with (phù hợp với)
- in charge of (phụ trách)
- in response to (để đáp lại)
- in stock (còn hàng)

**ON:**
- on behalf of (thay mặt cho)
- on schedule (đúng lịch)
- on time (đúng giờ)
- on request (theo yêu cầu)

**WITH:**
- in accordance with (phù hợp với)
- in compliance with (tuân thủ)
- deal with (xử lý)
- comply with (tuân theo)

### Fixed Expressions:

- with regard to (liên quan đến)
- with respect to (về vấn đề)
- due to (do, bởi vì)
- owing to (do, bởi vì)
- in terms of (về mặt)
- as a result of (kết quả của)
- for the purpose of (với mục đích)
- in the event of (trong trường hợp)
    `,
    examples: [
      {
        english: 'We need to make a decision by the end of this week.',
        vietnamese: 'Chúng ta cần đưa ra quyết định trước cuối tuần này.',
      },
      {
        english: 'The conference will take place in New York next month.',
        vietnamese: 'Hội nghị sẽ diễn ra ở New York tháng sau.',
      },
      {
        english: 'After extensive research, we reached an agreement with our partners.',
        vietnamese: 'Sau nghiên cứu kỹ lưỡng, chúng tôi đã đạt được thỏa thuận với đối tác.',
      },
      {
        english: 'All employees must comply with the new safety regulations.',
        vietnamese: 'Tất cả nhân viên phải tuân thủ các quy định an toàn mới.',
      },
      {
        english: 'The company gained a competitive advantage through innovation.',
        vietnamese: 'Công ty đã đạt được lợi thế cạnh tranh thông qua đổi mới.',
      },
    ],
    exercises: [
      {
        id: 'ex228',
        question: 'The team needs to _____ a decision about the budget today.',
        options: ['do', 'make', 'take', 'give'],
        correctAnswer: 1,
        explanation: 'Dùng "make a decision" (đưa ra quyết định) - collocation cố định.',
      },
      {
        id: 'ex229',
        question: 'The annual meeting will _____ on March 15th.',
        options: ['happen place', 'take place', 'make place', 'do place'],
        correctAnswer: 1,
        explanation: '"Take place" (diễn ra) là collocation đúng.',
      },
      {
        id: 'ex230',
        question: 'We must _____ into account all customer feedback.',
        options: ['make', 'do', 'take', 'give'],
        correctAnswer: 2,
        explanation: '"Take into account" (xem xét, tính đến) là cụm từ cố định.',
      },
      {
        id: 'ex231',
        question: 'The product is available _____ a 20% discount this week.',
        options: ['in', 'on', 'at', 'with'],
        correctAnswer: 2,
        explanation: '"At a discount" là collocation đúng với giới từ "at".',
      },
    ],
  },
  {
    id: 'g218',
    level: 'advanced',
    title: 'Parallel Structure',
    description: 'Cấu trúc song song - Quan trọng cho TOEIC',
    content: `
## Parallel Structure (Cấu trúc song song)

### Nguyên tắc cơ bản:
Các thành phần trong cùng một cấu trúc phải có dạng ngữ pháp giống nhau.

### Trong danh sách (Lists):

**Đúng:**
- The job requires typing, filing, and answering phones.
  (V-ing + V-ing + V-ing)

**Sai:**
- The job requires typing, filing, and to answer phones.
  (V-ing + V-ing + to-V)

**Đúng:**
- She is intelligent, hardworking, and creative.
  (adj + adj + adj)

### Với conjunctions (liên từ):

**AND, OR, BUT:**
- We need to hire and train new employees.
  (to hire and to train = song song)
- The manager is experienced but inexperienced in marketing.

**BOTH...AND:**
- She is both talented and dedicated.
  (adj + adj)
- The company offers both competitive salaries and excellent benefits.
  (noun phrase + noun phrase)

**EITHER...OR / NEITHER...NOR:**
- You can either call or email us.
  (V + V)
- The project is neither urgent nor important.
  (adj + adj)

**NOT ONLY...BUT ALSO:**
- The new system is not only efficient but also cost-effective.
  (adj + adj)
- We not only increased sales but also improved customer satisfaction.
  (V + V)

### Trong so sánh (Comparisons):

**Đúng:**
- Managing people is harder than managing projects.
  (V-ing + V-ing)

**Sai:**
- Managing people is harder than to manage projects.
  (V-ing + to-V)

**As...as:**
- Marketing is as important as production.
- She works as efficiently as her colleagues.

### Trong cấu trúc parallel với verbs:

**Đúng:**
- The company plans to expand, to diversify, and to innovate.
  (to-V + to-V + to-V)

**Đúng (có thể lược bỏ "to"):**
- The company plans to expand, diversify, and innovate.

### Common errors (Lỗi thường gặp):

**1. Mixing verb forms:**
❌ She enjoys swimming, jogging, and to hike.
✓ She enjoys swimming, jogging, and hiking.

**2. Inconsistent structure:**
❌ The manager wants dedication, hardworking, and to be creative.
✓ The manager wants dedication, hard work, and creativity.

**3. Faulty comparison:**
❌ This phone is better than using a computer.
✓ Using this phone is better than using a computer.

### With prepositions:

**Đúng:**
- We are interested in hiring and training new staff.
- The report focuses on sales, marketing, and production.

**Note:** Không cần lặp lại giới từ nếu cùng một giới từ
- Interested in hiring and in training (redundant)
- Interested in hiring and training (better)
    `,
    examples: [
      {
        english: 'The successful candidate must be organized, motivated, and experienced.',
        vietnamese: 'Ứng viên thành công phải có tổ chức, động lực và kinh nghiệm.',
      },
      {
        english: 'Our goals are to increase revenue, reduce costs, and improve efficiency.',
        vietnamese: 'Mục tiêu của chúng tôi là tăng doanh thu, giảm chi phí và cải thiện hiệu quả.',
      },
      {
        english: 'The new policy will not only save money but also improve morale.',
        vietnamese: 'Chính sách mới không chỉ tiết kiệm tiền mà còn cải thiện tinh thần.',
      },
      {
        english: 'Employees can either work from home or come to the office.',
        vietnamese: 'Nhân viên có thể làm việc tại nhà hoặc đến văn phòng.',
      },
    ],
    exercises: [
      {
        id: 'ex232',
        question: 'The position requires excellent communication skills, attention to detail, and _____.',
        options: ['being flexible', 'flexibility', 'to be flexible', 'flexibly'],
        correctAnswer: 1,
        explanation: 'Cần danh từ "flexibility" để song song với "skills" và "attention".',
      },
      {
        id: 'ex233',
        question: 'We plan to expand our market, _____ our product line, and hire more staff.',
        options: ['diversifying', 'diversify', 'to diversify', 'diversification'],
        correctAnswer: 1,
        explanation: 'Dùng "diversify" (có thể bỏ "to") để song song với "expand" và "hire".',
      },
      {
        id: 'ex234',
        question: 'The training will focus on both technical skills _____ soft skills.',
        options: ['but also', 'and also', 'and', 'or'],
        correctAnswer: 2,
        explanation: '"Both...and" là cấu trúc đúng.',
      },
    ],
  },
  {
    id: 'g219',
    level: 'advanced',
    title: 'Inversion - Đảo ngữ',
    description: 'Cấu trúc đảo ngữ trong tiếng Anh',
    content: `
## Inversion (Đảo ngữ)

### 1. Đảo ngữ với từ phủ định:

**Never, Rarely, Seldom, Hardly, Scarcely:**
- Never have we seen such results.
  (We have never seen...)
- Rarely does the CEO attend meetings.
  (The CEO rarely attends...)
- Seldom do we receive complaints.
  (We seldom receive...)

**Not only...but also:**
- Not only did we meet the target, but we also exceeded it.

**No sooner...than / Hardly...when:**
- No sooner had we launched than competitors copied it.
- Hardly had the meeting started when the fire alarm rang.

**Under no circumstances:**
- Under no circumstances should you share confidential data.

**At no time:**
- At no time did we consider giving up.

### 2. Đảo ngữ với Only:

**Only after/when/if:**
- Only after signing the contract did we begin work.
- Only when approved can we proceed.
- Only by working together can we succeed.

**Only then:**
- Only then did I realize the mistake.

### 3. Đảo ngữ với So/Such:

**So + adj + be + S:**
- So impressive was the presentation that everyone applauded.

**Such + be + N:**
- Such was the demand that we ran out of stock.

### 4. Đảo ngữ trong câu điều kiện:

**Should (If type 1):**
- Should you need assistance, contact us.
  (= If you should need...)

**Were (If type 2):**
- Were I the manager, I would change the policy.
  (= If I were...)

**Had (If type 3):**
- Had we known earlier, we would have acted.
  (= If we had known...)

### 5. Đảo ngữ với Little:

**Little did S know/realize/think:**
- Little did we know that the market would crash.
- Little does he realize the consequences.

### 6. Đảo ngữ với Neither/Nor:

**Neither/Nor + auxiliary + S:**
- I don't like the proposal. Neither does my colleague.
- We can't attend. Nor can our partners.

### 7. Đảo ngữ nhấn mạnh địa điểm:

**Here/There + V + S:**
- Here comes the CEO. (động từ thường)
- There goes our chance. (động từ thường)

**Note:** Không đảo với đại từ:
- Here he comes. (NOT: Here comes he)

### Common patterns in TOEIC:

1. **Not until + time + did + S + V**
   - Not until 2020 did we achieve profitability.

2. **Only by + V-ing + can + S + V**
   - Only by reducing costs can we survive.

3. **Had + S + V3, S + would have + V3**
   - Had we invested earlier, we would have profited.
    `,
    examples: [
      {
        english: 'Never before have we faced such a challenging situation.',
        vietnamese: 'Chưa bao giờ chúng ta đối mặt với tình huống khó khăn như vậy.',
      },
      {
        english: 'Not only did the company increase profits, but it also expanded globally.',
        vietnamese: 'Công ty không chỉ tăng lợi nhuận mà còn mở rộng toàn cầu.',
      },
      {
        english: 'Only through innovation can we stay competitive.',
        vietnamese: 'Chỉ thông qua đổi mới, chúng ta mới có thể duy trì sức cạnh tranh.',
      },
      {
        english: 'Should you require further information, please contact our office.',
        vietnamese: 'Nếu bạn cần thêm thông tin, vui lòng liên hệ văn phòng chúng tôi.',
      },
    ],
    exercises: [
      {
        id: 'ex235',
        question: 'Never _____ such excellent customer service.',
        options: ['we have received', 'have we received', 'we received', 'did we receive'],
        correctAnswer: 1,
        explanation: 'Đảo ngữ với "Never": Never + auxiliary + S + V.',
      },
      {
        id: 'ex236',
        question: 'Only after completing the training _____ to work independently.',
        options: ['you are allowed', 'are you allowed', 'you allowed', 'allowed you'],
        correctAnswer: 1,
        explanation: 'Đảo ngữ với "Only after": Only after + clause + auxiliary + S + V.',
      },
      {
        id: 'ex237',
        question: '_____ you need assistance, contact the help desk.',
        options: ['Should', 'If should', 'Should if', 'If'],
        correctAnswer: 0,
        explanation: '"Should" đứng đầu câu thay cho "If should" trong câu điều kiện đảo ngữ.',
      },
    ],
  },
  {
    id: 'g220',
    level: 'advanced',
    title: 'Reduced Clauses',
    description: 'Mệnh đề rút gọn - Participle Phrases',
    content: `
## Reduced Clauses (Mệnh đề rút gọn)

### 1. Rút gọn mệnh đề quan hệ:

**Active voice → V-ing:**
- The manager who leads the team → The manager leading the team
- Customers who shop online → Customers shopping online
- The report that shows the results → The report showing the results

**Passive voice → V3/V-ed:**
- Products which are made in Japan → Products made in Japan
- The email that was sent yesterday → The email sent yesterday
- Documents that were approved → Documents approved

**Với be + adj/noun:**
- The candidate who is suitable → The candidate suitable for...
- People who are interested → People interested in...

### 2. Rút gọn mệnh đề trạng ngữ:

**Time clauses (khi, trong khi):**
- While I was working, I found an error.
  → While working, I found an error.
  
- When she finished the report, she sent it.
  → Having finished the report, she sent it.

**Reason clauses (vì, do):**
- Because we lack resources, we delayed the project.
  → Lacking resources, we delayed the project.
  
- As I was tired, I went home early.
  → Being tired, I went home early.

**Condition clauses (nếu):**
- If you follow the instructions, you will succeed.
  → Following the instructions, you will succeed.

### 3. Perfect Participle (Having + V3):

Dùng khi hành động trong mệnh đề rút gọn xảy ra TRƯỚC hành động chính:

- Having completed the training, he started work.
  (= After he completed the training, he started work)

- Having received approval, we began implementation.
  (= After we received approval...)

- Not having heard from you, we proceeded with the plan.
  (= Because we had not heard...)

### 4. Reduced clauses với Being:

**Being + adj:**
- Being experienced, she got the promotion.
  (= Because she is experienced...)

**Being + V3 (passive):**
- Being located downtown, the office is convenient.
  (= Because it is located downtown...)

**Note:** "Being" thường được lược bỏ:
- (Being) Located downtown, the office is convenient.
- (Being) Aware of the risks, we proceeded carefully.

### 5. Common patterns trong TOEIC:

**V-ing at the beginning:**
- Working late, the team finished the project.
- Considering the costs, we rejected the proposal.

**V3/V-ed at the beginning:**
- Founded in 1990, the company has grown rapidly.
- Located in the city center, our office is accessible.

**Having V3:**
- Having reviewed the data, we made a decision.
- Having consulted experts, we developed a strategy.

### 6. Position trong câu:

**Đầu câu (nhấn mạnh):**
- Recognizing the opportunity, we invested immediately.

**Sau danh từ (bổ nghĩa):**
- The company, founded in 2000, is now global.
- Employees working overtime receive extra pay.

### Lỗi thường gặp:

❌ Walking to work, the rain started. (sai chủ ngữ)
✓ Walking to work, I got caught in the rain.

❌ Completed the project, we celebrated. (thiếu Having)
✓ Having completed the project, we celebrated.
    `,
    examples: [
      {
        english: 'Having analyzed the market, we decided to expand.',
        vietnamese: 'Sau khi phân tích thị trường, chúng tôi quyết định mở rộng.',
      },
      {
        english: 'Employees working remotely must submit weekly reports.',
        vietnamese: 'Nhân viên làm việc từ xa phải nộp báo cáo hàng tuần.',
      },
      {
        english: 'Founded in 1995, the company now has 500 employees.',
        vietnamese: 'Được thành lập năm 1995, công ty hiện có 500 nhân viên.',
      },
      {
        english: 'Considering the budget constraints, we chose the cheaper option.',
        vietnamese: 'Xét đến giới hạn ngân sách, chúng tôi chọn phương án rẻ hơn.',
      },
    ],
    exercises: [
      {
        id: 'ex238',
        question: '_____ the contract carefully, she signed it.',
        options: ['Read', 'Reading', 'Having read', 'To read'],
        correctAnswer: 2,
        explanation: 'Dùng "Having read" vì hành động đọc xảy ra TRƯỚC hành động ký.',
      },
      {
        id: 'ex239',
        question: 'The documents _____ by the manager are on your desk.',
        options: ['approving', 'approved', 'approve', 'to approve'],
        correctAnswer: 1,
        explanation: 'Dùng "approved" (V3) vì documents được approve (passive).',
      },
      {
        id: 'ex240',
        question: '_____ in the city center, the hotel attracts many tourists.',
        options: ['Locating', 'Located', 'To locate', 'Locate'],
        correctAnswer: 1,
        explanation: '"Located" (V3) vì hotel được locate (passive).',
      },
    ],
  },
  {
    id: 'g221',
    level: 'advanced',
    title: 'Common TOEIC Grammar Traps',
    description: 'Các bẫy ngữ pháp thường gặp trong TOEIC Part 5',
    content: `
## Common TOEIC Grammar Traps

### 1. Subject-Verb Agreement Traps:

**Each/Every + singular noun + singular verb:**
✓ Each employee has a desk.
❌ Each employee have a desk.

**A number of + plural verb / The number of + singular verb:**
✓ A number of employees are absent. (nhiều nhân viên)
✓ The number of employees is 500. (con số)

**Percentage/Fraction + depends on following noun:**
✓ 50% of employees are satisfied. (plural)
✓ 50% of the budget is allocated. (singular)

**Collective nouns (company, team, staff, government):**
- UK: often plural verb
- US: usually singular verb
✓ The company is expanding. (US)
✓ The company are expanding. (UK - less common in TOEIC)

### 2. Confusing Word Pairs:

**Amount vs. Number:**
- Amount + uncountable: amount of money, time, work
- Number + countable: number of employees, products

**Less vs. Fewer:**
- Less + uncountable: less time, less money
- Fewer + countable: fewer employees, fewer products

**Among vs. Between:**
- Between: 2 things/people
- Among: 3+ things/people

**Beside vs. Besides:**
- Beside = next to (bên cạnh)
- Besides = in addition to (ngoài ra)

**Economic vs. Economical:**
- Economic = relating to economy
- Economical = not wasteful, cheap

### 3. Preposition Traps:

**Different FROM (not different than/with):**
✓ This product is different from that one.

**Responsible FOR (not responsible of):**
✓ She is responsible for the project.

**Consist OF (not consist in/with):**
✓ The team consists of 10 members.

**Arrive AT/IN (not arrive to):**
✓ arrive at the office, arrive in New York

**Participate IN (not participate to):**
✓ participate in the meeting

### 4. Verb Form Traps:

**Suggest/Recommend + that + S + (should) + V:**
✓ I suggest (that) we hire more staff.
❌ I suggest us to hire more staff.
❌ I suggest hiring more staff. (OK nhưng khác nghĩa)

**Allow/Enable/Permit + O + to V:**
✓ The policy allows employees to work remotely.
❌ The policy allows that employees work remotely.

**Look forward to + V-ing:**
✓ We look forward to meeting you.
❌ We look forward to meet you.

**Used to + V vs. Be used to + V-ing:**
- Used to + V: past habit
- Be used to + V-ing: be accustomed to

### 5. Article Traps:

**The + superlative:**
✓ the best solution, the most important issue

**No article + plural general:**
✓ Employees need training. (employees in general)
✓ The employees need training. (specific employees)

**The + unique things:**
✓ the internet, the environment, the economy

### 6. Conditional Traps:

**If clause (past), main clause (would):**
✓ If I were you, I would accept.
❌ If I was you... (informal, avoid in TOEIC)

**Unless = if not:**
✓ Unless we act now, we will fail.
= If we don't act now, we will fail.

### 7. Adjective Order:

**Opinion → Size → Age → Shape → Color → Origin → Material → Purpose + Noun**

✓ A beautiful large old round blue Italian glass dining table

In TOEIC (simpler):
✓ a new marketing strategy (age + purpose)
✓ important business decisions (opinion + purpose)

### 8. Double Negatives:

**Avoid:**
❌ We don't need no assistance.
✓ We don't need any assistance.

**Hardly/Barely/Scarcely + positive verb:**
✓ We can hardly wait. (NOT: We can't hardly wait)

### 9. Comparative/Superlative Traps:

**More and more + adj (not more + comparative):**
✓ more and more important
❌ more important and important

**The + comparative, the + comparative:**
✓ The more we work, the more we earn.

### 10. Time Expression Traps:

**By vs. Until:**
- By = deadline (hoàn thành trước)
- Until = continuing up to (tiếp tục đến)

✓ Finish by 5 PM. (complete before 5)
✓ Work until 5 PM. (continue working to 5)

**During vs. For:**
- During + specific time period (trong suốt)
- For + duration (trong khoảng)

✓ during the meeting, during May
✓ for 2 hours, for 3 days
    `,
    examples: [
      {
        english: 'Each of the employees has received training.',
        vietnamese: 'Mỗi nhân viên đều đã nhận được đào tạo.',
      },
      {
        english: 'The number of applicants is increasing every year.',
        vietnamese: 'Số lượng ứng viên đang tăng mỗi năm.',
      },
      {
        english: 'We look forward to hearing from you soon.',
        vietnamese: 'Chúng tôi mong được nghe từ bạn sớm.',
      },
      {
        english: 'Please submit your report by Friday.',
        vietnamese: 'Vui lòng nộp báo cáo trước thứ Sáu.',
      },
    ],
    exercises: [
      {
        id: 'ex241',
        question: 'A number of employees _____ absent today.',
        options: ['is', 'are', 'was', 'be'],
        correctAnswer: 1,
        explanation: '"A number of" + plural verb. Đừng nhầm với "The number of" + singular verb.',
      },
      {
        id: 'ex242',
        question: 'We suggest that the manager _____ the proposal.',
        options: ['approves', 'approve', 'to approve', 'approving'],
        correctAnswer: 1,
        explanation: 'Sau "suggest that" dùng động từ nguyên thể (subjunctive mood).',
      },
      {
        id: 'ex243',
        question: 'This solution is different _____ the previous one.',
        options: ['from', 'than', 'with', 'to'],
        correctAnswer: 0,
        explanation: '"Different from" là cụm đúng. Không dùng "than" hay "with".',
      },
      {
        id: 'ex244',
        question: 'Please complete the task _____ 5 PM today.',
        options: ['until', 'by', 'in', 'at'],
        correctAnswer: 1,
        explanation: '"By" = deadline (hoàn thành trước). "Until" = tiếp tục đến.',
      },
    ],
  },
  {
    id: 'g222',
    level: 'advanced',
    title: 'Advanced Transition Words',
    description: 'Từ nối nâng cao cho Part 6 & 7',
    content: `
## Advanced Transition Words & Phrases

### 1. Addition (Bổ sung thông tin):

**Furthermore / Moreover / Additionally:**
- Our sales increased. Furthermore, customer satisfaction improved.
- The product is affordable. Moreover, it's environmentally friendly.

**In addition (to) / As well as:**
- In addition to increasing revenue, we reduced costs.
- The package includes training as well as support.

**What's more / On top of that (informal):**
- The service is fast. What's more, it's reliable.

**Not to mention:**
- The project is complex, not to mention expensive.

### 2. Contrast (Đối lập):

**However / Nevertheless / Nonetheless:**
- We faced challenges. However, we succeeded.
- The plan was risky. Nevertheless, we proceeded.

**On the other hand / In contrast / Conversely:**
- Online sales grew. On the other hand, retail sales declined.
- Product A is expensive. In contrast, Product B is affordable.

**Although / Even though / Despite / In spite of:**
- Although profits fell, we maintained staff.
- Despite the challenges, we completed the project.

**Whereas / While:**
- Domestic sales rose, whereas international sales fell.

### 3. Cause and Effect (Nguyên nhân - Kết quả):

**Therefore / Thus / Hence / Consequently:**
- Costs increased. Therefore, we raised prices.
- Demand grew. Consequently, we expanded production.

**As a result / As a consequence:**
- Sales dropped. As a result, we laid off staff.

**Due to / Owing to / Because of / On account of:**
- Due to high demand, we increased production.
- Sales fell owing to economic conditions.

**For this reason / That's why:**
- Costs are rising. For this reason, we need efficiency.

### 4. Examples (Ví dụ):

**For example / For instance:**
- Many factors affected sales. For example, the economy slowed.

**Such as / Like:**
- We offer services such as consulting and training.

**Namely / Specifically / In particular:**
- We focus on three areas, namely sales, marketing, and service.
- All regions grew, in particular Asia.

**To illustrate / To demonstrate:**
- To illustrate this point, consider last year's results.

### 5. Emphasis (Nhấn mạnh):

**Indeed / In fact / Actually / As a matter of fact:**
- The project was successful. In fact, it exceeded expectations.
- Sales are strong. Indeed, they're the highest ever.

**Particularly / Especially / Notably:**
- All products sold well, particularly the new model.
- The report is important, especially for investors.

**Above all / Most importantly:**
- We value many qualities. Above all, we value integrity.

### 6. Sequence (Trình tự):

**First(ly) / Second(ly) / Third(ly) / Finally:**
- First, we analyze the market. Second, we develop strategy.

**To begin with / To start with:**
- To begin with, let's review last quarter's results.

**Subsequently / Thereafter / Following this:**
- We launched the product. Subsequently, we expanded marketing.

**Meanwhile / In the meantime:**
- Production continues. Meanwhile, we're developing new products.

### 7. Comparison (So sánh):

**Similarly / Likewise / In the same way:**
- Sales grew in Q1. Similarly, they increased in Q2.
- Product A succeeded. Likewise, Product B performed well.

**Compared to / In comparison with:**
- Compared to last year, sales are up 20%.

**Just as / As with:**
- Just as in previous years, we exceeded targets.

### 8. Summary/Conclusion (Tóm tắt):

**In conclusion / To conclude / In summary:**
- In conclusion, the project was successful.

**To sum up / In short / In brief:**
- To sum up, we achieved all objectives.

**Overall / All in all / On the whole:**
- Overall, the results were positive.

**In essence / Essentially:**
- In essence, we need to improve efficiency.

### 9. Clarification (Làm rõ):

**In other words / That is (to say) / Namely:**
- We need efficiency. In other words, we must reduce waste.
- The deadline is firm, that is, it cannot change.

**To put it another way / To clarify:**
- To clarify, the policy applies to all employees.

### 10. Condition (Điều kiện):

**Otherwise / If not:**
- Submit reports on time. Otherwise, face penalties.

**In that case / Under these circumstances:**
- If sales fall, in that case, we'll reduce costs.

**Provided (that) / As long as:**
- You can work remotely provided you meet deadlines.

### Usage Tips for TOEIC:

1. **Position flexibility:**
   - Beginning: However, sales increased.
   - Middle: Sales, however, increased.
   - End: Sales increased, however.

2. **Punctuation:**
   - Start of sentence: However, ...
   - Middle: Sales, however, increased.
   - Between sentences: ... ; however, ...

3. **Formality levels:**
   - Formal: Furthermore, Moreover, Nevertheless
   - Less formal: Also, Plus, But, So

4. **Part 6 strategies:**
   - Look for logical connections between sentences
   - Check what comes before and after the blank
   - Match the transition to the relationship between ideas
    `,
    examples: [
      {
        english: 'The market is competitive. Nevertheless, we maintain our leading position.',
        vietnamese: 'Thị trường cạnh tranh. Tuy nhiên, chúng tôi vẫn duy trì vị trí dẫn đầu.',
      },
      {
        english: 'Sales exceeded targets. Consequently, all employees received bonuses.',
        vietnamese: 'Doanh số vượt mục tiêu. Do đó, tất cả nhân viên đều nhận được thưởng.',
      },
      {
        english: 'We offer various services, such as consulting, training, and support.',
        vietnamese: 'Chúng tôi cung cấp nhiều dịch vụ, chẳng hạn như tư vấn, đào tạo và hỗ trợ.',
      },
      {
        english: 'In addition to expanding domestically, we entered new international markets.',
        vietnamese: 'Ngoài việc mở rộng trong nước, chúng tôi còn thâm nhập thị trường quốc tế mới.',
      },
    ],
    exercises: [
      {
        id: 'ex245',
        question: 'Our product quality is excellent. _____, our prices are competitive.',
        options: ['Therefore', 'However', 'Moreover', 'Otherwise'],
        correctAnswer: 2,
        explanation: '"Moreover" (hơn nữa) thêm thông tin tích cực. "However" dùng cho đối lập.',
      },
      {
        id: 'ex246',
        question: 'The economy slowed. _____, we reduced our expansion plans.',
        options: ['Similarly', 'Consequently', 'Furthermore', 'Likewise'],
        correctAnswer: 1,
        explanation: '"Consequently" (do đó) thể hiện kết quả của việc kinh tế chậm lại.',
      },
      {
        id: 'ex247',
        question: 'Submit your application by Friday. _____, it will not be considered.',
        options: ['Furthermore', 'Moreover', 'Otherwise', 'Similarly'],
        correctAnswer: 2,
        explanation: '"Otherwise" (nếu không thì) chỉ hậu quả nếu không làm theo.',
      },
    ],
  },
  {
    id: 'g223',
    level: 'advanced',
    title: 'Emphatic Structures',
    description: 'Cấu trúc nhấn mạnh trong tiếng Anh',
    content: `
## Emphatic Structures (Cấu trúc nhấn mạnh)

### 1. It is/was...that/who (Cleft sentences):

**Nhấn mạnh chủ ngữ:**
- John signed the contract.
  → It was John who/that signed the contract.

**Nhấn mạnh tân ngữ:**
- We need better communication.
  → It is better communication that we need.

**Nhấn mạnh trạng ngữ:**
- We launched the product in March.
  → It was in March that we launched the product.

**Công thức:**
It + is/was + thành phần nhấn mạnh + that/who + phần còn lại

### 2. What...is/was (Pseudo-cleft):

**Nhấn mạnh tân ngữ:**
- We need investment.
  → What we need is investment.

**Nhấn mạnh hành động:**
- He improved the process.
  → What he did was improve the process.

**All (that):**
- All (that) we want is success.
- All (that) I did was follow instructions.

### 3. Do/Does/Did + động từ (Nhấn mạnh động từ):

**Present:**
- I do appreciate your help. (Tôi thực sự đánh giá cao)
- She does understand the problem. (Cô ấy quả thật hiểu)

**Past:**
- We did complete the project on time. (Chúng tôi đã thực sự hoàn thành)
- He did submit the report. (Anh ấy đã nộp báo cáo rồi)

**Imperative:**
- Do come to the meeting! (Hãy đến họp đi!)
- Do be careful! (Hãy cẩn thận!)

### 4. The very + noun (Nhấn mạnh danh từ):

- That's the very reason we succeeded.
  (Đó chính xác là lý do chúng tôi thành công)
- This is the very solution we need.
  (Đây chính xác là giải pháp chúng ta cần)

### 5. Indeed / In fact (Nhấn mạnh):

- The project was successful. Indeed, it exceeded all expectations.
- Sales are strong. In fact, they're the highest ever.

### 6. Not...at all (Phủ định hoàn toàn):

- I don't agree at all. (Tôi hoàn toàn không đồng ý)
- This is not acceptable at all. (Điều này hoàn toàn không chấp nhận được)

### 7. Absolutely / Definitely / Certainly (Phó từ nhấn mạnh):

- This is absolutely necessary.
- We definitely need more staff.
- The deadline is certainly firm.

### 8. So + adj + that:

- The results were so impressive that we got promoted.
- The demand is so high that we can't meet it.

### 9. Such (a/an) + adj + noun + that:

- It was such a successful project that we replicated it.
- They're such dedicated employees that we promoted them.

### 10. Never/Ever (với Perfect tense):

- Never have we seen such results.
- This is the best product we have ever developed.

### Sử dụng trong TOEIC:

**Part 5 - Grammar:**
- It ____ the CEO who made the decision.
  → was

**Part 6 - Text completion:**
- What we need ____ more training.
  → is

**Part 7 - Reading:**
- Understanding emphatic structures helps comprehend:
  * Author's main points
  * Important information
  * Contrasts and comparisons

### Common TOEIC patterns:

1. **It is...that:**
   - It is quality that matters most.
   - It was last year that we expanded.

2. **What...is:**
   - What matters is customer satisfaction.
   - What we offer is excellent service.

3. **Do/Does/Did emphasis:**
   - We do value your feedback.
   - The company did meet its targets.

### Punctuation notes:

- Cleft sentences: No special punctuation
  * It was John who signed it.

- Pseudo-cleft: Comma possible but not required
  * What we need is investment.
  * What we need, is investment. (less common)
    `,
    examples: [
      {
        english: 'It was the marketing team that developed this successful campaign.',
        vietnamese: 'Chính nhóm marketing đã phát triển chiến dịch thành công này.',
      },
      {
        english: 'What we need most is effective leadership.',
        vietnamese: 'Điều chúng ta cần nhất là sự lãnh đạo hiệu quả.',
      },
      {
        english: 'We do appreciate your continued support and loyalty.',
        vietnamese: 'Chúng tôi thực sự đánh giá cao sự ủng hộ và trung thành của bạn.',
      },
      {
        english: 'The results were so exceptional that the board extended our budget.',
        vietnamese: 'Kết quả xuất sắc đến mức hội đồng quản trị đã mở rộng ngân sách cho chúng tôi.',
      },
    ],
    exercises: [
      {
        id: 'ex248',
        question: 'It _____ innovation that drives our success.',
        options: ['was', 'is', 'are', 'were'],
        correctAnswer: 1,
        explanation: 'Dùng "is" vì "innovation" là danh từ số ít và câu ở hiện tại.',
      },
      {
        id: 'ex249',
        question: 'What we need _____ more efficient processes.',
        options: ['is', 'are', 'was', 'were'],
        correctAnswer: 1,
        explanation: 'Dùng "are" vì "processes" là số nhiều.',
      },
      {
        id: 'ex250',
        question: 'We _____ complete the project on time despite challenges.',
        options: ['do', 'did', 'does', 'done'],
        correctAnswer: 1,
        explanation: 'Dùng "did" để nhấn mạnh động từ trong quá khứ.',
      },
    ],
  },
];

// === PART 5 PRACTICE (Incomplete Sentences) ===
export interface Part5Question {
  id: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string; // Grammar type: verb tense, preposition, vocabulary, etc.
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const PART5_DATABASE: Part5Question[] = [
  // === BEGINNER LEVEL (40 questions) ===
  {
    id: 'p5_b001',
    level: 'beginner',
    category: 'Verb Tense - Present Simple',
    question: 'Our company _____ high-quality products.',
    options: ['produce', 'produces', 'producing', 'produced'],
    correctAnswer: 1,
    explanation: 'Chủ ngữ "company" là số ít, dùng "produces" (thì hiện tại đơn).',
  },
  {
    id: 'p5_b002',
    level: 'beginner',
    category: 'Preposition',
    question: 'The meeting will start _____ 9 a.m.',
    options: ['in', 'on', 'at', 'to'],
    correctAnswer: 2,
    explanation: 'Dùng "at" trước giờ cụ thể.',
  },
  {
    id: 'p5_b003',
    level: 'beginner',
    category: 'Article',
    question: 'She is _____ experienced manager.',
    options: ['a', 'an', 'the', '-'],
    correctAnswer: 1,
    explanation: 'Dùng "an" trước từ bắt đầu bằng nguyên âm (experienced).',
  },
  {
    id: 'p5_b004',
    level: 'beginner',
    category: 'Verb Tense - Present Continuous',
    question: 'We _____ a new marketing campaign right now.',
    options: ['develop', 'develops', 'are developing', 'developed'],
    correctAnswer: 2,
    explanation: '"right now" chỉ hành động đang xảy ra, dùng present continuous.',
  },
  {
    id: 'p5_b005',
    level: 'beginner',
    category: 'Pronoun',
    question: 'Please send the report to _____ by Friday.',
    options: ['I', 'me', 'my', 'mine'],
    correctAnswer: 1,
    explanation: 'Sau giới từ "to" dùng tân ngữ "me".',
  },
  {
    id: 'p5_b006',
    level: 'beginner',
    category: 'Adjective',
    question: 'The new office is very _____.',
    options: ['space', 'spacious', 'spaciously', 'spacing'],
    correctAnswer: 1,
    explanation: 'Sau "very" cần tính từ "spacious" (rộng rãi).',
  },
  {
    id: 'p5_b007',
    level: 'beginner',
    category: 'Modal Verb',
    question: 'Employees _____ wear ID badges at all times.',
    options: ['can', 'must', 'may', 'might'],
    correctAnswer: 1,
    explanation: '"must" diễn tả sự bắt buộc.',
  },
  {
    id: 'p5_b008',
    level: 'beginner',
    category: 'Preposition',
    question: 'The conference will be held _____ Monday.',
    options: ['in', 'on', 'at', 'for'],
    correctAnswer: 1,
    explanation: 'Dùng "on" trước thứ trong tuần.',
  },
  {
    id: 'p5_b009',
    level: 'beginner',
    category: 'Vocabulary - Noun',
    question: 'Please submit your _____ before the deadline.',
    options: ['apply', 'application', 'applying', 'applied'],
    correctAnswer: 1,
    explanation: 'Cần danh từ "application" (đơn xin) làm tân ngữ.',
  },
  {
    id: 'p5_b010',
    level: 'beginner',
    category: 'Verb Tense - Past Simple',
    question: 'The company _____ its sales target last quarter.',
    options: ['achieve', 'achieves', 'achieved', 'achieving'],
    correctAnswer: 2,
    explanation: '"last quarter" chỉ quá khứ, dùng past simple.',
  },
  {
    id: 'p5_b011',
    level: 'beginner',
    category: 'Conjunction',
    question: 'The product is affordable _____ high quality.',
    options: ['and', 'but', 'or', 'so'],
    correctAnswer: 0,
    explanation: 'Dùng "and" để nối hai ý tích cực.',
  },
  {
    id: 'p5_b012',
    level: 'beginner',
    category: 'Quantifier',
    question: 'We have _____ employees in our department.',
    options: ['much', 'many', 'a lot', 'few'],
    correctAnswer: 1,
    explanation: '"many" dùng với danh từ đếm được số nhiều.',
  },
  {
    id: 'p5_b013',
    level: 'beginner',
    category: 'Adverb',
    question: 'She works very _____.',
    options: ['efficient', 'efficiently', 'efficiency', 'efficiencies'],
    correctAnswer: 1,
    explanation: 'Trạng từ "efficiently" bổ nghĩa cho động từ "works".',
  },
  {
    id: 'p5_b014',
    level: 'beginner',
    category: 'Comparative',
    question: 'This solution is _____ than the previous one.',
    options: ['good', 'better', 'best', 'well'],
    correctAnswer: 1,
    explanation: '"better" là dạng so sánh hơn của "good".',
  },
  {
    id: 'p5_b015',
    level: 'beginner',
    category: 'Verb Tense - Future',
    question: 'We _____ the project next month.',
    options: ['start', 'starts', 'will start', 'started'],
    correctAnswer: 2,
    explanation: '"next month" chỉ tương lai, dùng "will".',
  },
  {
    id: 'p5_b016',
    level: 'beginner',
    category: 'Preposition of Place',
    question: 'The printer is _____ the desk.',
    options: ['in', 'on', 'at', 'by'],
    correctAnswer: 1,
    explanation: 'Dùng "on" để chỉ vị trí trên bề mặt.',
  },
  {
    id: 'p5_b017',
    level: 'beginner',
    category: 'Possessive',
    question: 'This is _____ responsibility.',
    options: ['you', 'your', 'yours', 'yourself'],
    correctAnswer: 1,
    explanation: 'Dùng tính từ sở hữu "your" trước danh từ.',
  },
  {
    id: 'p5_b018',
    level: 'beginner',
    category: 'Question Word',
    question: '_____ is the project manager? - Mr. Smith.',
    options: ['What', 'When', 'Who', 'Where'],
    correctAnswer: 2,
    explanation: 'Dùng "Who" để hỏi về người.',
  },
  {
    id: 'p5_b019',
    level: 'beginner',
    category: 'Vocabulary - Adjective',
    question: 'Our team is very _____.',
    options: ['profession', 'professional', 'professionally', 'professionalism'],
    correctAnswer: 1,
    explanation: 'Tính từ "professional" (chuyên nghiệp) sau "very".',
  },
  {
    id: 'p5_b020',
    level: 'beginner',
    category: 'Verb Form',
    question: 'Please _____ the door when you leave.',
    options: ['close', 'closes', 'closing', 'closed'],
    correctAnswer: 0,
    explanation: 'Sau "Please" dùng động từ nguyên mẫu.',
  },
  {
    id: 'p5_b021',
    level: 'beginner',
    category: 'There is/are',
    question: 'There _____ many opportunities in this field.',
    options: ['is', 'are', 'be', 'been'],
    correctAnswer: 1,
    explanation: '"opportunities" là số nhiều, dùng "are".',
  },
  {
    id: 'p5_b022',
    level: 'beginner',
    category: 'Preposition',
    question: 'We will finish the project _____ December.',
    options: ['in', 'on', 'at', 'by'],
    correctAnswer: 3,
    explanation: '"by" nghĩa là "trước, chậm nhất là".',
  },
  {
    id: 'p5_b023',
    level: 'beginner',
    category: 'Superlative',
    question: 'This is the _____ solution we have.',
    options: ['good', 'better', 'best', 'well'],
    correctAnswer: 2,
    explanation: 'So sánh nhất của "good" là "best".',
  },
  {
    id: 'p5_b024',
    level: 'beginner',
    category: 'Modal Verb',
    question: 'You _____ submit the form online.',
    options: ['can', 'must', 'should', 'would'],
    correctAnswer: 0,
    explanation: '"can" diễn tả khả năng, sự cho phép.',
  },
  {
    id: 'p5_b025',
    level: 'beginner',
    category: 'Verb Tense - Present Perfect',
    question: 'She _____ for this company since 2020.',
    options: ['work', 'works', 'has worked', 'worked'],
    correctAnswer: 2,
    explanation: '"since 2020" dùng với present perfect.',
  },
  {
    id: 'p5_b026',
    level: 'beginner',
    category: 'Word Choice',
    question: 'We need to _____ customer satisfaction.',
    options: ['improve', 'improved', 'improving', 'improvement'],
    correctAnswer: 0,
    explanation: 'Sau "need to" dùng động từ nguyên mẫu.',
  },
  {
    id: 'p5_b027',
    level: 'beginner',
    category: 'Conjunction',
    question: 'The meeting was postponed _____ the manager was sick.',
    options: ['and', 'but', 'because', 'so'],
    correctAnswer: 2,
    explanation: '"because" chỉ lý do.',
  },
  {
    id: 'p5_b028',
    level: 'beginner',
    category: 'Vocabulary',
    question: 'Please _____ to the email as soon as possible.',
    options: ['respond', 'response', 'responsive', 'responding'],
    correctAnswer: 0,
    explanation: 'Sau "Please" cần động từ "respond".',
  },
  {
    id: 'p5_b029',
    level: 'beginner',
    category: 'Demonstrative',
    question: '_____ documents need to be signed.',
    options: ['This', 'These', 'That', 'Those'],
    correctAnswer: 1,
    explanation: '"documents" số nhiều, dùng "These" (gần).',
  },
  {
    id: 'p5_b030',
    level: 'beginner',
    category: 'Preposition',
    question: 'The office is located _____ the city center.',
    options: ['in', 'on', 'at', 'to'],
    correctAnswer: 0,
    explanation: 'Dùng "in" cho khu vực rộng.',
  },
  {
    id: 'p5_b031',
    level: 'beginner',
    category: 'Verb Form - Infinitive',
    question: 'We plan _____ a new branch next year.',
    options: ['open', 'to open', 'opening', 'opened'],
    correctAnswer: 1,
    explanation: 'Sau "plan" dùng "to + V".',
  },
  {
    id: 'p5_b032',
    level: 'beginner',
    category: 'Frequency Adverb',
    question: 'She _____ arrives on time.',
    options: ['always', 'every', 'much', 'very'],
    correctAnswer: 0,
    explanation: '"always" là trạng từ tần suất.',
  },
  {
    id: 'p5_b033',
    level: 'beginner',
    category: 'Noun Form',
    question: 'The _____ was very successful.',
    options: ['present', 'presentation', 'presented', 'presenting'],
    correctAnswer: 1,
    explanation: 'Cần danh từ "presentation" làm chủ ngữ.',
  },
  {
    id: 'p5_b034',
    level: 'beginner',
    category: 'Verb Tense',
    question: 'They _____ the contract tomorrow.',
    options: ['sign', 'signed', 'will sign', 'signing'],
    correctAnswer: 2,
    explanation: '"tomorrow" chỉ tương lai.',
  },
  {
    id: 'p5_b035',
    level: 'beginner',
    category: 'Word Choice',
    question: 'The training was very _____.',
    options: ['help', 'helpful', 'helpfully', 'helping'],
    correctAnswer: 1,
    explanation: 'Tính từ "helpful" sau "very".',
  },
  {
    id: 'p5_b036',
    level: 'beginner',
    category: 'Preposition',
    question: 'Please call me _____ your convenience.',
    options: ['at', 'on', 'in', 'for'],
    correctAnswer: 0,
    explanation: 'Cụm "at your convenience" = khi bạn tiện.',
  },
  {
    id: 'p5_b037',
    level: 'beginner',
    category: 'Quantifier',
    question: 'There is _____ information on the website.',
    options: ['many', 'much', 'few', 'a few'],
    correctAnswer: 1,
    explanation: '"information" không đếm được, dùng "much".',
  },
  {
    id: 'p5_b038',
    level: 'beginner',
    category: 'Verb Form',
    question: 'The manager wants _____ the meeting.',
    options: ['attend', 'to attend', 'attending', 'attended'],
    correctAnswer: 1,
    explanation: 'Sau "want" dùng "to + V".',
  },
  {
    id: 'p5_b039',
    level: 'beginner',
    category: 'Conjunction',
    question: 'Work hard _____ you will succeed.',
    options: ['and', 'but', 'or', 'so'],
    correctAnswer: 0,
    explanation: '"and" nối hai mệnh đề có quan hệ nguyên nhân - kết quả.',
  },
  {
    id: 'p5_b040',
    level: 'beginner',
    category: 'Vocabulary',
    question: 'We received positive _____ from customers.',
    options: ['feed', 'feedback', 'feeding', 'feeder'],
    correctAnswer: 1,
    explanation: '"feedback" là danh từ nghĩa phản hồi.',
  },

  // === INTERMEDIATE LEVEL (40 questions) ===
  {
    id: 'p5_i001',
    level: 'intermediate',
    category: 'Relative Clause',
    question: 'The candidate _____ impressed us most got the job.',
    options: ['which', 'who', 'whom', 'whose'],
    correctAnswer: 1,
    explanation: '"who" chỉ người làm chủ ngữ trong mệnh đề quan hệ.',
  },
  {
    id: 'p5_i002',
    level: 'intermediate',
    category: 'Passive Voice',
    question: 'The report _____ by the end of the week.',
    options: ['completes', 'will complete', 'will be completed', 'completing'],
    correctAnswer: 2,
    explanation: 'Bị động với "will be + V3".',
  },
  {
    id: 'p5_i003',
    level: 'intermediate',
    category: 'Gerund vs Infinitive',
    question: 'The company decided _____ its operations.',
    options: ['expanding', 'to expand', 'expand', 'expanded'],
    correctAnswer: 1,
    explanation: 'Sau "decide" dùng "to + V".',
  },
  {
    id: 'p5_i004',
    level: 'intermediate',
    category: 'Past Perfect',
    question: 'By the time we arrived, the meeting _____ already _____.',
    options: ['has / started', 'had / started', 'was / starting', 'is / started'],
    correctAnswer: 1,
    explanation: 'Past perfect cho hành động xảy ra trước hành động khác trong quá khứ.',
  },
  {
    id: 'p5_i005',
    level: 'intermediate',
    category: 'Conditional Type 2',
    question: 'If we _____ more staff, we could finish earlier.',
    options: ['have', 'had', 'will have', 'would have'],
    correctAnswer: 1,
    explanation: 'Câu điều kiện loại 2: If + past simple, would + V.',
  },
  {
    id: 'p5_i006',
    level: 'intermediate',
    category: 'Reported Speech',
    question: 'She said that she _____ the project the following week.',
    options: ['will finish', 'would finish', 'finishes', 'finished'],
    correctAnswer: 1,
    explanation: 'Lùi thì: "will" → "would" trong reported speech.',
  },
  {
    id: 'p5_i007',
    level: 'intermediate',
    category: 'Linking Word',
    question: 'Sales increased; _____, profits remained stable.',
    options: ['however', 'therefore', 'moreover', 'furthermore'],
    correctAnswer: 0,
    explanation: '"however" chỉ sự tương phản.',
  },
  {
    id: 'p5_i008',
    level: 'intermediate',
    category: 'Modal Perfect',
    question: 'You _____ informed me about the change.',
    options: ['should', 'should have', 'should be', 'should been'],
    correctAnswer: 1,
    explanation: '"should have + V3" chỉ điều lẽ ra nên làm trong quá khứ.',
  },
  {
    id: 'p5_i009',
    level: 'intermediate',
    category: 'Causative',
    question: 'We had the brochures _____ last week.',
    options: ['print', 'printed', 'printing', 'to print'],
    correctAnswer: 1,
    explanation: 'Cấu trúc "have something done" (nhờ làm gì).',
  },
  {
    id: 'p5_i010',
    level: 'intermediate',
    category: 'Present Perfect Continuous',
    question: 'They _____ on this project for three months.',
    options: ['work', 'worked', 'have worked', 'have been working'],
    correctAnswer: 3,
    explanation: 'Present perfect continuous nhấn mạnh tính liên tục.',
  },
  {
    id: 'p5_i011',
    level: 'intermediate',
    category: 'Preposition + Gerund',
    question: 'We are interested _____ with your company.',
    options: ['in collaborate', 'in collaborating', 'to collaborate', 'collaborate'],
    correctAnswer: 1,
    explanation: 'Sau giới từ "in" dùng V-ing.',
  },
  {
    id: 'p5_i012',
    level: 'intermediate',
    category: 'Word Form - Adverb',
    question: 'The team worked _____ to meet the deadline.',
    options: ['diligent', 'diligently', 'diligence', 'diligences'],
    correctAnswer: 1,
    explanation: 'Trạng từ "diligently" bổ nghĩa cho động từ.',
  },
  {
    id: 'p5_i013',
    level: 'intermediate',
    category: 'Conditional Type 3',
    question: 'If we _____ earlier, we _____ the contract.',
    options: ['applied / would win', 'had applied / would have won', 'apply / will win', 'applied / won'],
    correctAnswer: 1,
    explanation: 'Câu điều kiện loại 3: If + past perfect, would have + V3.',
  },
  {
    id: 'p5_i014',
    level: 'intermediate',
    category: 'Participle',
    question: '_____ the requirements, applicants should submit their CVs.',
    options: ['Meet', 'Meeting', 'Met', 'To meet'],
    correctAnswer: 1,
    explanation: 'Present participle rút gọn mệnh đề.',
  },
  {
    id: 'p5_i015',
    level: 'intermediate',
    category: 'Vocabulary - Collocation',
    question: 'We need to _____ attention to customer feedback.',
    options: ['give', 'pay', 'make', 'take'],
    correctAnswer: 1,
    explanation: 'Cụm "pay attention to" = chú ý đến.',
  },
  {
    id: 'p5_i016',
    level: 'intermediate',
    category: 'Relative Clause',
    question: 'The office _____ we work is very modern.',
    options: ['which', 'where', 'that', 'when'],
    correctAnswer: 1,
    explanation: '"where" chỉ nơi chốn trong mệnh đề quan hệ.',
  },
  {
    id: 'p5_i017',
    level: 'intermediate',
    category: 'Future Perfect',
    question: 'By next year, we _____ this project.',
    options: ['complete', 'will complete', 'will have completed', 'are completing'],
    correctAnswer: 2,
    explanation: 'Future perfect: will have + V3.',
  },
  {
    id: 'p5_i018',
    level: 'intermediate',
    category: 'Passive - Modal',
    question: 'The issue _____ immediately.',
    options: ['should address', 'should be addressed', 'should addressing', 'should addressed'],
    correctAnswer: 1,
    explanation: 'Passive với modal: should be + V3.',
  },
  {
    id: 'p5_i019',
    level: 'intermediate',
    category: 'Linking Word',
    question: 'The product is expensive. _____, it is very popular.',
    options: ['Therefore', 'However', 'Moreover', 'Furthermore'],
    correctAnswer: 1,
    explanation: '"However" chỉ sự tương phản.',
  },
  {
    id: 'p5_i020',
    level: 'intermediate',
    category: 'Wish',
    question: 'I wish I _____ more experience in this field.',
    options: ['have', 'had', 'have had', 'will have'],
    correctAnswer: 1,
    explanation: 'Wish + past simple cho điều ước ở hiện tại.',
  },
  {
    id: 'p5_i021',
    level: 'intermediate',
    category: 'Tag Question',
    question: "The meeting starts at 9, _____?",
    options: ['does it', "doesn't it", 'is it', "isn't it"],
    correctAnswer: 1,
    explanation: 'Câu khẳng định với "starts" → "doesn\'t it".',
  },
  {
    id: 'p5_i022',
    level: 'intermediate',
    category: 'Word Form',
    question: 'The _____ of the new system will take two weeks.',
    options: ['implement', 'implementation', 'implemented', 'implementing'],
    correctAnswer: 1,
    explanation: 'Cần danh từ "implementation" làm chủ ngữ.',
  },
  {
    id: 'p5_i023',
    level: 'intermediate',
    category: 'Gerund',
    question: 'She enjoys _____ with international clients.',
    options: ['work', 'to work', 'working', 'worked'],
    correctAnswer: 2,
    explanation: 'Sau "enjoy" dùng V-ing.',
  },
  {
    id: 'p5_i024',
    level: 'intermediate',
    category: 'Preposition',
    question: 'The success depends _____ teamwork.',
    options: ['in', 'on', 'at', 'with'],
    correctAnswer: 1,
    explanation: 'Cụm "depend on" = phụ thuộc vào.',
  },
  {
    id: 'p5_i025',
    level: 'intermediate',
    category: 'Used to',
    question: 'I _____ work in marketing before I joined this company.',
    options: ['used to', 'use to', 'am used to', 'was used to'],
    correctAnswer: 0,
    explanation: '"used to + V" chỉ thói quen trong quá khứ.',
  },
  {
    id: 'p5_i026',
    level: 'intermediate',
    category: 'Comparison',
    question: 'This approach is _____ effective than the previous one.',
    options: ['more', 'most', 'much', 'many'],
    correctAnswer: 0,
    explanation: 'So sánh hơn với tính từ dài: more + adj.',
  },
  {
    id: 'p5_i027',
    level: 'intermediate',
    category: 'Vocabulary',
    question: 'We need to _____ a strategy for growth.',
    options: ['develop', 'development', 'developing', 'developed'],
    correctAnswer: 0,
    explanation: 'Sau "need to" dùng động từ nguyên mẫu.',
  },
  {
    id: 'p5_i028',
    level: 'intermediate',
    category: 'Cleft Sentence',
    question: '_____ I appreciate most is your dedication.',
    options: ['That', 'What', 'Which', 'It'],
    correctAnswer: 1,
    explanation: 'Câu chẻ với "What" để nhấn mạnh.',
  },
  {
    id: 'p5_i029',
    level: 'intermediate',
    category: 'Modal - Deduction',
    question: 'She _____ be in the office. I just saw her car.',
    options: ['can', 'must', 'may', 'should'],
    correctAnswer: 1,
    explanation: '"must" chỉ sự suy luận chắc chắn.',
  },
  {
    id: 'p5_i030',
    level: 'intermediate',
    category: 'Passive Gerund',
    question: 'The employees appreciate _____ fairly.',
    options: ['treating', 'being treated', 'treat', 'to treat'],
    correctAnswer: 1,
    explanation: 'Passive gerund: being + V3.',
  },
  {
    id: 'p5_i031',
    level: 'intermediate',
    category: 'Linking Word - Addition',
    question: 'The product is affordable. _____, it comes with a warranty.',
    options: ['However', 'Moreover', 'Therefore', 'Although'],
    correctAnswer: 1,
    explanation: '"Moreover" bổ sung thông tin tích cực.',
  },
  {
    id: 'p5_i032',
    level: 'intermediate',
    category: 'Inversion',
    question: 'Never _____ such dedication.',
    options: ['I have seen', 'have I seen', 'I saw', 'did I saw'],
    correctAnswer: 1,
    explanation: 'Đảo ngữ với "Never": Never + have + S + V3.',
  },
  {
    id: 'p5_i033',
    level: 'intermediate',
    category: 'Word Form - Noun',
    question: 'The _____ between the two companies was successful.',
    options: ['negotiate', 'negotiation', 'negotiating', 'negotiated'],
    correctAnswer: 1,
    explanation: 'Danh từ "negotiation" (đàm phán) làm chủ ngữ.',
  },
  {
    id: 'p5_i034',
    level: 'intermediate',
    category: 'Conditional - Unless',
    question: 'We cannot proceed _____ we receive approval.',
    options: ['unless', 'if', 'when', 'because'],
    correctAnswer: 0,
    explanation: '"unless" = if not (trừ khi).',
  },
  {
    id: 'p5_i035',
    level: 'intermediate',
    category: 'Vocabulary - Phrasal Verb',
    question: 'Please _____ the form and submit it.',
    options: ['fill in', 'fill on', 'fill at', 'fill to'],
    correctAnswer: 0,
    explanation: '"fill in" = điền vào (form).',
  },
  {
    id: 'p5_i036',
    level: 'intermediate',
    category: 'So/Such',
    question: 'It was _____ good presentation that everyone applauded.',
    options: ['so', 'such', 'such a', 'so a'],
    correctAnswer: 2,
    explanation: 'Such + a/an + adj + N số ít.',
  },
  {
    id: 'p5_i037',
    level: 'intermediate',
    category: 'Relative Clause - Whose',
    question: 'The manager _____ team won the award was promoted.',
    options: ['who', 'which', 'whose', 'that'],
    correctAnswer: 2,
    explanation: '"whose" chỉ sở hữu.',
  },
  {
    id: 'p5_i038',
    level: 'intermediate',
    category: 'Past Perfect Continuous',
    question: 'They _____ for two hours when the power went out.',
    options: ['worked', 'were working', 'had worked', 'had been working'],
    correctAnswer: 3,
    explanation: 'Past perfect continuous: had been + V-ing.',
  },
  {
    id: 'p5_i039',
    level: 'intermediate',
    category: 'Would rather',
    question: 'I would rather _____ by email.',
    options: ['communicate', 'to communicate', 'communicating', 'communicated'],
    correctAnswer: 0,
    explanation: 'Sau "would rather" dùng V nguyên mẫu.',
  },
  {
    id: 'p5_i040',
    level: 'intermediate',
    category: 'Linking Word - Result',
    question: 'The market changed; _____, we adapted our strategy.',
    options: ['however', 'moreover', 'consequently', 'although'],
    correctAnswer: 2,
    explanation: '"consequently" chỉ kết quả.',
  },

  // === ADVANCED LEVEL (40 questions) ===
  {
    id: 'p5_a001',
    level: 'advanced',
    category: 'Subjunctive',
    question: 'The board recommends that the company _____ in new technology.',
    options: ['invest', 'invests', 'invested', 'investing'],
    correctAnswer: 0,
    explanation: 'Subjunctive: suggest/recommend + that + S + V (nguyên mẫu).',
  },
  {
    id: 'p5_a002',
    level: 'advanced',
    category: 'Inversion - No sooner',
    question: 'No sooner _____ the meeting _____ than the CEO arrived.',
    options: ['did / start', 'had / started', 'has / started', 'was / starting'],
    correctAnswer: 1,
    explanation: 'No sooner + had + S + V3 + than...',
  },
  {
    id: 'p5_a003',
    level: 'advanced',
    category: 'Mixed Conditional',
    question: 'If I _____ harder in college, I _____ a better job now.',
    options: ['studied / would have', 'had studied / would have', 'studied / would have had', 'had studied / would have had'],
    correctAnswer: 1,
    explanation: 'Mixed conditional (past → present): If + past perfect, would + V.',
  },
  {
    id: 'p5_a004',
    level: 'advanced',
    category: 'Nominalization',
    question: 'The _____ of the new system improved efficiency significantly.',
    options: ['implement', 'implementation', 'implementing', 'implemented'],
    correctAnswer: 1,
    explanation: 'Danh từ hóa: "implementation" formal hơn "implementing".',
  },
  {
    id: 'p5_a005',
    level: 'advanced',
    category: 'Advanced Passive',
    question: 'The issue _____ by the time you arrive.',
    options: ['will resolve', 'will be resolved', 'will have resolved', 'will have been resolved'],
    correctAnswer: 3,
    explanation: 'Future perfect passive: will have been + V3.',
  },
  {
    id: 'p5_a006',
    level: 'advanced',
    category: 'Participle Clause',
    question: '_____ in 2020, the building features modern amenities.',
    options: ['Building', 'Built', 'Having built', 'To build'],
    correctAnswer: 1,
    explanation: 'Past participle cho nghĩa bị động (được xây).',
  },
  {
    id: 'p5_a007',
    level: 'advanced',
    category: 'Hedging',
    question: 'The data _____ that our strategy is effective.',
    options: ['proves', 'suggests', 'demonstrates', 'confirms'],
    correctAnswer: 1,
    explanation: '"suggests" là hedging language (dè dặt hơn "proves").',
  },
  {
    id: 'p5_a008',
    level: 'advanced',
    category: 'Ellipsis',
    question: '"Are you attending?" "Yes, I _____."',
    options: ['am', 'do', 'will', 'have'],
    correctAnswer: 0,
    explanation: 'Ellipsis với "am" thay cho "am attending".',
  },
  {
    id: 'p5_a009',
    level: 'advanced',
    category: 'Fronting',
    question: 'Such dedication _____ rarely seen in business.',
    options: ['is', 'are', 'was', 'were'],
    correctAnswer: 0,
    explanation: 'Fronting với "Such" nhấn mạnh, "dedication" số ít.',
  },
  {
    id: 'p5_a010',
    level: 'advanced',
    category: 'Advanced Linking',
    question: 'The economy declined; _____, our company remained profitable.',
    options: ['however', 'nevertheless', 'therefore', 'moreover'],
    correctAnswer: 1,
    explanation: '"nevertheless" formal hơn "however".',
  },
  {
    id: 'p5_a011',
    level: 'advanced',
    category: 'Inversion - Under no circumstances',
    question: 'Under no circumstances _____ confidential information.',
    options: ['you should share', 'should you share', 'you share', 'share you'],
    correctAnswer: 1,
    explanation: 'Đảo ngữ: Under no circumstances + should + S + V.',
  },
  {
    id: 'p5_a012',
    level: 'advanced',
    category: 'Cleft Sentence - It',
    question: 'It _____ in 2020 that we expanded internationally.',
    options: ['is', 'was', 'has been', 'had been'],
    correctAnswer: 1,
    explanation: 'Câu chẻ với "It was ... that" (quá khứ).',
  },
  {
    id: 'p5_a013',
    level: 'advanced',
    category: 'Substitution',
    question: 'Our sales increased, and our competitors\' _____ too.',
    options: ['did', 'do', 'were', 'are'],
    correctAnswer: 0,
    explanation: '"did" thay thế cho "increased" (quá khứ).',
  },
  {
    id: 'p5_a014',
    level: 'advanced',
    category: 'Advanced Modal',
    question: 'The report _____ contain errors. Please review it.',
    options: ['can', 'may', 'must', 'should'],
    correctAnswer: 1,
    explanation: '"may" chỉ khả năng không chắc chắn.',
  },
  {
    id: 'p5_a015',
    level: 'advanced',
    category: 'Provided that',
    question: '_____ you submit on time, your application will be considered.',
    options: ['If', 'Unless', 'Provided that', 'Although'],
    correctAnswer: 2,
    explanation: '"Provided that" = if (formal, điều kiện).',
  },
  {
    id: 'p5_a016',
    level: 'advanced',
    category: 'Perfect Participle',
    question: '_____ the project, we celebrated our success.',
    options: ['Finishing', 'Finished', 'Having finished', 'To finish'],
    correctAnswer: 2,
    explanation: 'Perfect participle cho hành động hoàn thành trước.',
  },
  {
    id: 'p5_a017',
    level: 'advanced',
    category: 'Nominalization',
    question: 'The _____ of customer satisfaction cannot be overstated.',
    options: ['important', 'importance', 'importantly', 'importing'],
    correctAnswer: 1,
    explanation: 'Danh từ "importance" formal hơn.',
  },
  {
    id: 'p5_a018',
    level: 'advanced',
    category: 'Inversion - Not until',
    question: 'Not until we analyzed the data _____ the problem.',
    options: ['we understood', 'did we understand', 'we understand', 'do we understand'],
    correctAnswer: 1,
    explanation: 'Đảo ngữ: Not until + clause + did + S + V.',
  },
  {
    id: 'p5_a019',
    level: 'advanced',
    category: 'So + auxiliary',
    question: '"I have reviewed the contract." "So _____ I."',
    options: ['do', 'have', 'am', 'did'],
    correctAnswer: 1,
    explanation: 'Dùng "have" tương ứng với present perfect.',
  },
  {
    id: 'p5_a020',
    level: 'advanced',
    category: 'Advanced Conditional',
    question: '_____ the budget been larger, we could have hired more staff.',
    options: ['If', 'Had', 'Should', 'Were'],
    correctAnswer: 1,
    explanation: 'Đảo ngữ câu điều kiện loại 3: Had + S + V3.',
  },
  {
    id: 'p5_a021',
    level: 'advanced',
    category: 'Linking - Notwithstanding',
    question: '_____ the challenges, we achieved our targets.',
    options: ['Despite', 'Although', 'Notwithstanding', 'However'],
    correctAnswer: 2,
    explanation: '"Notwithstanding" very formal = despite.',
  },
  {
    id: 'p5_a022',
    level: 'advanced',
    category: 'Wish - Past',
    question: 'I wish we _____ the opportunity.',
    options: ['took', 'had taken', 'take', 'would take'],
    correctAnswer: 1,
    explanation: 'Wish + past perfect cho tiếc nuối về quá khứ.',
  },
  {
    id: 'p5_a023',
    level: 'advanced',
    category: 'Fronting - What',
    question: '_____ distinguishes our company is innovation.',
    options: ['That', 'What', 'Which', 'It'],
    correctAnswer: 1,
    explanation: 'Câu chẻ với "What" để nhấn mạnh.',
  },
  {
    id: 'p5_a024',
    level: 'advanced',
    category: 'Advanced Passive - Get',
    question: 'We need to get the documents _____.',
    options: ['review', 'reviewed', 'reviewing', 'to review'],
    correctAnswer: 1,
    explanation: 'Get + O + V3 (nhờ làm gì).',
  },
  {
    id: 'p5_a025',
    level: 'advanced',
    category: 'Hardly... when',
    question: 'Hardly _____ the product when orders started pouring in.',
    options: ['we launched', 'had we launched', 'we had launched', 'did we launch'],
    correctAnswer: 1,
    explanation: 'Hardly + had + S + V3 + when...',
  },
  {
    id: 'p5_a026',
    level: 'advanced',
    category: 'Vocabulary - Formal',
    question: 'The company will _____ significant changes next quarter.',
    options: ['make', 'do', 'implement', 'create'],
    correctAnswer: 2,
    explanation: '"implement" formal hơn "make" cho changes.',
  },
  {
    id: 'p5_a027',
    level: 'advanced',
    category: 'Cohesion - The former/latter',
    question: 'We have two options. _____ is cheaper, _____ is more effective.',
    options: ['This / that', 'The first / the second', 'The former / the latter', 'One / another'],
    correctAnswer: 2,
    explanation: '"The former / the latter" formal cho hai thứ đã nhắc.',
  },
  {
    id: 'p5_a028',
    level: 'advanced',
    category: 'Advanced Linking - Accordingly',
    question: 'The policy changed; _____, we updated our procedures.',
    options: ['therefore', 'accordingly', 'however', 'moreover'],
    correctAnswer: 1,
    explanation: '"accordingly" formal = therefore.',
  },
  {
    id: 'p5_a029',
    level: 'advanced',
    category: 'Subjunctive - It is essential',
    question: 'It is essential that all employees _____ the training.',
    options: ['attend', 'attends', 'attended', 'attending'],
    correctAnswer: 0,
    explanation: 'Subjunctive: It is essential that + S + V (nguyên mẫu).',
  },
  {
    id: 'p5_a030',
    level: 'advanced',
    category: 'Inversion - Little',
    question: 'Little _____ that this decision would change everything.',
    options: ['we knew', 'did we know', 'we know', 'do we know'],
    correctAnswer: 1,
    explanation: 'Đảo ngữ: Little + did + S + V.',
  },
  {
    id: 'p5_a031',
    level: 'advanced',
    category: 'Participle - Being',
    question: '_____ a new employee, she requires training.',
    options: ['Being', 'Been', 'Be', 'To be'],
    correctAnswer: 0,
    explanation: 'Present participle "Being" rút gọn mệnh đề.',
  },
  {
    id: 'p5_a032',
    level: 'advanced',
    category: 'Advanced Comparison',
    question: 'The solution is _____ complex than we anticipated.',
    options: ['far more', 'more far', 'much more', 'very more'],
    correctAnswer: 0,
    explanation: '"far more" nhấn mạnh so sánh hơn.',
  },
  {
    id: 'p5_a033',
    level: 'advanced',
    category: 'Hedging - Appear',
    question: 'The results _____ to support our hypothesis.',
    options: ['seem', 'appear', 'look', 'show'],
    correctAnswer: 1,
    explanation: '"appear" formal hedging language.',
  },
  {
    id: 'p5_a034',
    level: 'advanced',
    category: 'So + adj + that',
    question: 'So competitive _____ the market that only the best survive.',
    options: ['is', 'are', 'was', 'were'],
    correctAnswer: 0,
    explanation: 'Đảo ngữ: So + adj + be + S + that...',
  },
  {
    id: 'p5_a035',
    level: 'advanced',
    category: 'With a view to',
    question: 'We expanded _____ increasing market share.',
    options: ['with a view to', 'in order to', 'so as to', 'for'],
    correctAnswer: 0,
    explanation: '"with a view to + V-ing" formal expression.',
  },
  {
    id: 'p5_a036',
    level: 'advanced',
    category: 'Advanced Modal - Cannot',
    question: 'This _____ be the correct approach.',
    options: ['can', 'cannot', 'may not', 'might not'],
    correctAnswer: 1,
    explanation: '"cannot" chỉ sự chắc chắn phủ định.',
  },
  {
    id: 'p5_a037',
    level: 'advanced',
    category: 'Linking - Whereas',
    question: 'Our sales increased, _____ our competitors declined.',
    options: ['however', 'whereas', 'therefore', 'moreover'],
    correctAnswer: 1,
    explanation: '"whereas" chỉ sự tương phản trực tiếp.',
  },
  {
    id: 'p5_a038',
    level: 'advanced',
    category: 'Nominalization - Analysis',
    question: 'The _____ revealed significant trends.',
    options: ['analyze', 'analysis', 'analyzing', 'analyzed'],
    correctAnswer: 1,
    explanation: 'Danh từ "analysis" formal hơn "analyzing".',
  },
  {
    id: 'p5_a039',
    level: 'advanced',
    category: 'Inversion - Only by',
    question: 'Only by improving quality _____ compete effectively.',
    options: ['we can', 'can we', 'we could', 'could we'],
    correctAnswer: 1,
    explanation: 'Đảo ngữ: Only by + V-ing + can + S + V.',
  },
  {
    id: 'p5_a040',
    level: 'advanced',
    category: 'Certainty - Clearly',
    question: '_____, we need to change our strategy.',
    options: ['Possibly', 'Perhaps', 'Clearly', 'Maybe'],
    correctAnswer: 2,
    explanation: '"Clearly" thể hiện sự chắc chắn.',
  },
];

// === PART 7 PRACTICE (Reading Comprehension) ===
export interface Part7Passage {
  id: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  type: 'single' | 'double' | 'triple';
  category: string; // email, memo, article, advertisement, etc.
  passages: {
    title?: string;
    content: string;
  }[];
  questions: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }[];
}

export const PART7_DATABASE: Part7Passage[] = [
  // === BEGINNER LEVEL - SINGLE PASSAGES (15 passages) ===
  {
    id: 'p7_b001',
    level: 'beginner',
    type: 'single',
    category: 'Email',
    passages: [
      {
        content: `To: All Staff
From: HR Department
Date: March 15
Subject: Office Relocation

Dear Team Members,

We are pleased to announce that our office will be relocating to a new building on May 1st. The new address is 456 Business Avenue, Downtown.

The new office is larger and features modern meeting rooms, a cafeteria, and free parking for all employees.

Please pack your personal belongings by April 28th. The IT department will handle all equipment.

Best regards,
HR Team`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'When will the office move?',
        options: ['March 15', 'April 28', 'May 1', 'May 15'],
        correctAnswer: 2,
        explanation: 'Email nói "relocating... on May 1st".',
      },
      {
        id: 'q002',
        question: 'What should employees do by April 28th?',
        options: ['Move equipment', 'Pack personal items', 'Visit new office', 'Contact IT'],
        correctAnswer: 1,
        explanation: 'Email yêu cầu "pack your personal belongings by April 28th".',
      },
      {
        id: 'q003',
        question: 'What is NOT mentioned as a feature of the new office?',
        options: ['Meeting rooms', 'Free parking', 'Gym', 'Cafeteria'],
        correctAnswer: 2,
        explanation: 'Gym không được nhắc đến trong email.',
      },
    ],
  },
  {
    id: 'p7_b002',
    level: 'beginner',
    type: 'single',
    category: 'Advertisement',
    passages: [
      {
        content: `SPRING SALE!

ABC Electronics
March 20-27

Save up to 40% on selected items!

• Laptops: 30% off
• Smartphones: 25% off
• Tablets: 40% off
• Accessories: Buy 2, Get 1 Free

Visit our store at 789 Tech Street
Open Monday-Saturday, 9 AM - 8 PM
Sunday, 10 AM - 6 PM

Free delivery on orders over $200`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'What has the biggest discount?',
        options: ['Laptops', 'Smartphones', 'Tablets', 'Accessories'],
        correctAnswer: 2,
        explanation: 'Tablets có giảm giá 40%, cao nhất.',
      },
      {
        id: 'q002',
        question: 'When does the sale end?',
        options: ['March 20', 'March 27', 'Sunday', 'Saturday'],
        correctAnswer: 1,
        explanation: 'Sale từ March 20-27.',
      },
      {
        id: 'q003',
        question: 'What is the minimum order for free delivery?',
        options: ['$40', '$100', '$200', '$250'],
        correctAnswer: 2,
        explanation: '"Free delivery on orders over $200".',
      },
    ],
  },
  {
    id: 'p7_b003',
    level: 'beginner',
    type: 'single',
    category: 'Memo',
    passages: [
      {
        content: `MEMORANDUM

To: All Employees
From: Management
Date: April 5
Re: New Lunch Break Policy

Effective April 15, lunch breaks will be extended from 45 minutes to one hour.

Employees may take their lunch break between 11:30 AM and 2:00 PM.

Please coordinate with your team to ensure adequate coverage during lunch hours.

This change aims to improve work-life balance and employee satisfaction.

Thank you for your cooperation.`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'When will the new policy start?',
        options: ['April 5', 'April 15', '11:30 AM', '2:00 PM'],
        correctAnswer: 1,
        explanation: '"Effective April 15".',
      },
      {
        id: 'q002',
        question: 'How long will the new lunch break be?',
        options: ['30 minutes', '45 minutes', '1 hour', '2 hours'],
        correctAnswer: 2,
        explanation: 'Lunch breaks sẽ là "one hour".',
      },
      {
        id: 'q003',
        question: 'What is the purpose of this change?',
        options: ['Save money', 'Improve work-life balance', 'Reduce hours', 'Hire more staff'],
        correctAnswer: 1,
        explanation: 'Mục đích là "improve work-life balance".',
      },
    ],
  },
  {
    id: 'p7_b004',
    level: 'beginner',
    type: 'single',
    category: 'Notice',
    passages: [
      {
        content: `BUILDING MAINTENANCE NOTICE

Date: June 10

Dear Residents,

The elevator in Building A will be under maintenance on June 15th from 8:00 AM to 5:00 PM.

Please use the stairs during this time. We apologize for any inconvenience.

For assistance, please contact the management office at extension 1234.

Thank you for your understanding.

Building Management`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'What will happen on June 15th?',
        options: ['Building closes', 'Elevator maintenance', 'New elevator', 'Fire drill'],
        correctAnswer: 1,
        explanation: '"The elevator... will be under maintenance on June 15th".',
      },
      {
        id: 'q002',
        question: 'How long will the maintenance last?',
        options: ['All day', '9 hours', '5 hours', '8 hours'],
        correctAnswer: 1,
        explanation: 'Từ 8:00 AM đến 5:00 PM = 9 giờ.',
      },
      {
        id: 'q003',
        question: 'What should residents do during maintenance?',
        options: ['Wait', 'Use stairs', 'Stay home', 'Call management'],
        correctAnswer: 1,
        explanation: '"Please use the stairs during this time".',
      },
    ],
  },
  {
    id: 'p7_b005',
    level: 'beginner',
    type: 'single',
    category: 'Form',
    passages: [
      {
        content: `VACATION REQUEST FORM

Employee Name: ___________________
Department: ___________________
Request Date: ___________________

Vacation Period:
From: ___________________
To: ___________________

Total Days Requested: ___________________

Reason for Leave (optional): ___________________

Emergency Contact:
Name: ___________________
Phone: ___________________

Employee Signature: ___________________
Manager Approval: ___________________

Note: Submit this form at least 2 weeks before your planned vacation.
Check your remaining vacation days before submitting.`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'When should the form be submitted?',
        options: ['Same day', '1 week before', '2 weeks before', '1 month before'],
        correctAnswer: 2,
        explanation: '"Submit this form at least 2 weeks before".',
      },
      {
        id: 'q002',
        question: 'What is NOT required on the form?',
        options: ['Employee name', 'Reason for leave', 'Department', 'Manager approval'],
        correctAnswer: 1,
        explanation: 'Reason for leave có "(optional)".',
      },
      {
        id: 'q003',
        question: 'What should employees check before submitting?',
        options: ['Weather', 'Remaining vacation days', 'Manager schedule', 'Company policy'],
        correctAnswer: 1,
        explanation: '"Check your remaining vacation days before submitting".',
      },
    ],
  },
  {
    id: 'p7_b006',
    level: 'beginner',
    type: 'single',
    category: 'Advertisement',
    passages: [
      {
        content: `GRAND OPENING!

The Coffee House
123 Main Street

Opening Day: July 1st

Special Opening Week Offers:
• Buy 1 coffee, get 1 free (July 1-3)
• 20% off all pastries (all week)
• Free WiFi for customers
• Loyalty cards available

Opening Hours:
Monday-Friday: 6:30 AM - 9:00 PM
Saturday-Sunday: 7:00 AM - 10:00 PM

Follow us on social media @TheCoffeeHouse
for daily specials and events!`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'When is the opening day?',
        options: ['June 30', 'July 1', 'July 3', 'All week'],
        correctAnswer: 1,
        explanation: '"Opening Day: July 1st".',
      },
      {
        id: 'q002',
        question: 'How long does the buy-one-get-one offer last?',
        options: ['1 day', '3 days', '1 week', '1 month'],
        correctAnswer: 1,
        explanation: '"July 1-3" = 3 ngày.',
      },
      {
        id: 'q003',
        question: 'What time does the shop close on Saturday?',
        options: ['9:00 PM', '10:00 PM', '6:30 AM', '7:00 AM'],
        correctAnswer: 1,
        explanation: 'Saturday đóng cửa "10:00 PM".',
      },
    ],
  },
  {
    id: 'p7_b007',
    level: 'beginner',
    type: 'single',
    category: 'Email',
    passages: [
      {
        content: `To: All Team Members
From: Project Manager
Date: August 12
Subject: Team Building Event

Dear Team,

We're organizing a team building event on August 25th at Riverside Park.

Activities:
• 10:00 AM - Welcome & Team Games
• 12:00 PM - BBQ Lunch
• 2:00 PM - Sports Activities
• 4:00 PM - Closing & Prizes

Transportation will be provided. The bus departs from the office at 9:30 AM.

Please RSVP by August 20th and indicate any dietary restrictions.

Looking forward to seeing everyone there!

Best regards,
Sarah`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'What is the purpose of this email?',
        options: ['Announce project', 'Invite to event', 'Request report', 'Cancel meeting'],
        correctAnswer: 1,
        explanation: 'Email mời tham gia "team building event".',
      },
      {
        id: 'q002',
        question: 'When should people reply?',
        options: ['August 12', 'August 20', 'August 25', 'September 1'],
        correctAnswer: 1,
        explanation: '"Please RSVP by August 20th".',
      },
      {
        id: 'q003',
        question: 'What time does the bus leave?',
        options: ['9:30 AM', '10:00 AM', '12:00 PM', '2:00 PM'],
        correctAnswer: 0,
        explanation: '"The bus departs... at 9:30 AM".',
      },
    ],
  },
  {
    id: 'p7_b008',
    level: 'beginner',
    type: 'single',
    category: 'Notice',
    passages: [
      {
        content: `LIBRARY SCHEDULE CHANGE

Effective September 1

New Opening Hours:
Monday-Thursday: 8:00 AM - 10:00 PM
Friday: 8:00 AM - 6:00 PM
Saturday: 9:00 AM - 5:00 PM
Sunday: CLOSED

Study Rooms:
Available for booking online
Maximum 4 people per room
2-hour time limit

Late fees for overdue books:
$0.50 per day

For questions, visit the information desk or email library@university.edu`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'When is the library closed?',
        options: ['Monday', 'Friday', 'Saturday', 'Sunday'],
        correctAnswer: 3,
        explanation: 'Sunday: CLOSED.',
      },
      {
        id: 'q002',
        question: 'What is the late fee per day?',
        options: ['$0.25', '$0.50', '$1.00', '$2.00'],
        correctAnswer: 1,
        explanation: '"$0.50 per day".',
      },
      {
        id: 'q003',
        question: 'How many people can use a study room?',
        options: ['2', '4', '6', '8'],
        correctAnswer: 1,
        explanation: '"Maximum 4 people per room".',
      },
    ],
  },
  {
    id: 'p7_b009',
    level: 'beginner',
    type: 'single',
    category: 'Advertisement',
    passages: [
      {
        content: `FITNESS FIRST GYM

NEW MEMBER SPECIAL!

Join in September and receive:
✓ 50% off registration fee
✓ Free personal training session
✓ Complimentary gym bag
✓ No joining fee

Membership Options:
• Monthly: $45/month
• 6 Months: $240 (Save $30)
• Annual: $450 (Save $90)

Facilities:
- State-of-the-art equipment
- Group fitness classes
- Swimming pool
- Sauna & Steam room
- Free parking

Visit us at 456 Health Avenue
Open 24/7

Call 555-0123 for a free tour!`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'What is the monthly membership cost?',
        options: ['$30', '$45', '$90', '$240'],
        correctAnswer: 1,
        explanation: '"Monthly: $45/month".',
      },
      {
        id: 'q002',
        question: 'How much do you save with an annual membership?',
        options: ['$30', '$45', '$90', '$450'],
        correctAnswer: 2,
        explanation: 'Annual "Save $90".',
      },
      {
        id: 'q003',
        question: 'What is included in the September special?',
        options: ['Free month', 'Free training session', 'Swimming lessons', 'Guest passes'],
        correctAnswer: 1,
        explanation: 'Bao gồm "Free personal training session".',
      },
    ],
  },
  {
    id: 'p7_b010',
    level: 'beginner',
    type: 'single',
    category: 'Email',
    passages: [
      {
        content: `From: IT Department
To: All Staff
Date: October 5
Subject: System Upgrade

Dear Colleagues,

Our email system will be upgraded this weekend.

Upgrade Schedule:
Saturday, October 10: 6:00 PM - Sunday, October 11: 6:00 AM

During this time:
• Email will be unavailable
• Saved emails will not be affected
• Calendar and contacts will remain accessible

Please complete any urgent email tasks before Saturday afternoon.

Download the mobile app for emergency access to contacts.

We apologize for any inconvenience.

IT Support Team
Extension: 5555`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'How long will the upgrade take?',
        options: ['6 hours', '12 hours', '24 hours', '2 days'],
        correctAnswer: 1,
        explanation: 'Từ 6:00 PM Saturday đến 6:00 AM Sunday = 12 giờ.',
      },
      {
        id: 'q002',
        question: 'What will be unavailable during the upgrade?',
        options: ['Calendar', 'Contacts', 'Email', 'Mobile app'],
        correctAnswer: 2,
        explanation: '"Email will be unavailable".',
      },
      {
        id: 'q003',
        question: 'What should staff do before Saturday?',
        options: ['Install app', 'Complete urgent emails', 'Backup contacts', 'Change password'],
        correctAnswer: 1,
        explanation: '"complete any urgent email tasks before Saturday".',
      },
    ],
  },
  {
    id: 'p7_b011',
    level: 'beginner',
    type: 'single',
    category: 'Form',
    passages: [
      {
        content: `CONFERENCE REGISTRATION FORM

Annual Business Summit 2024
November 15-17, Grand Hotel

Attendee Information:
Full Name: ______________________
Company: ______________________
Position: ______________________
Email: ______________________
Phone: ______________________

Registration Type:
☐ Full Conference ($599) - All 3 days
☐ Single Day ($250) - Specify day: _____
☐ Virtual Attendance ($299) - Online access

Workshops (Select up to 2):
☐ Digital Marketing
☐ Leadership Skills
☐ Financial Planning
☐ Project Management

Meal Preferences:
☐ Standard  ☐ Vegetarian  ☐ Vegan

Payment Method:
☐ Credit Card  ☐ Bank Transfer  ☐ Company Invoice

Early Bird Discount: Register by October 15 and save $100!`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'How much is the full conference registration?',
        options: ['$100', '$250', '$299', '$599'],
        correctAnswer: 3,
        explanation: '"Full Conference ($599)".',
      },
      {
        id: 'q002',
        question: 'How many workshops can attendees select?',
        options: ['1', '2', '3', '4'],
        correctAnswer: 1,
        explanation: '"Select up to 2".',
      },
      {
        id: 'q003',
        question: 'When is the early bird deadline?',
        options: ['October 15', 'November 15', 'November 17', 'December 15'],
        correctAnswer: 0,
        explanation: '"Register by October 15".',
      },
    ],
  },
  {
    id: 'p7_b012',
    level: 'beginner',
    type: 'single',
    category: 'Advertisement',
    passages: [
      {
        content: `WINTER CLEARANCE SALE

Clothing World
December 20-31

EVERYTHING MUST GO!

Up to 70% OFF storewide!

Special Discounts:
• Winter Coats: 60% off
• Sweaters: 50% off
• Boots & Shoes: 40% off
• Accessories: Buy 2, Get 1 Free

Additional 10% off for loyalty card members!

Store Hours During Sale:
Mon-Sat: 9:00 AM - 9:00 PM
Sunday: 10:00 AM - 6:00 PM

Returns: Final sale items cannot be returned.
Exchanges within 7 days with receipt.

Visit our store at Central Mall
Free gift wrapping available!`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'What has the biggest discount?',
        options: ['Coats', 'Sweaters', 'Boots', 'Accessories'],
        correctAnswer: 0,
        explanation: 'Winter Coats có "60% off", cao nhất.',
      },
      {
        id: 'q002',
        question: 'What additional discount do loyalty members get?',
        options: ['5%', '10%', '15%', '20%'],
        correctAnswer: 1,
        explanation: '"Additional 10% off for loyalty card members".',
      },
      {
        id: 'q003',
        question: 'What is the return policy for sale items?',
        options: ['30 days', '7 days', 'No returns', 'Exchange only'],
        correctAnswer: 2,
        explanation: '"Final sale items cannot be returned".',
      },
    ],
  },
  {
    id: 'p7_b013',
    level: 'beginner',
    type: 'single',
    category: 'Email',
    passages: [
      {
        content: `To: New Employees
From: HR Department
Date: January 8
Subject: Orientation Schedule

Welcome to Tech Solutions!

Your orientation is scheduled for Monday, January 15, from 9:00 AM to 4:00 PM in the Training Center (Building C, 3rd Floor).

Orientation Agenda:
9:00 AM - Welcome & Company Overview
10:30 AM - Office Tour
12:00 PM - Lunch (provided)
1:00 PM - IT Setup & Systems Training
3:00 PM - Benefits & Policies
4:00 PM - Q&A Session

What to Bring:
• Valid ID
• Completed tax forms
• Bank details for direct deposit
• Signed employment contract

Parking passes will be provided on arrival.

If you have questions, contact us at hr@techsolutions.com

See you soon!
HR Team`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'Where will the orientation take place?',
        options: ['Building A', 'Building B', 'Building C', 'Main Office'],
        correctAnswer: 2,
        explanation: 'Orientation ở "Building C, 3rd Floor".',
      },
      {
        id: 'q002',
        question: 'What time is lunch?',
        options: ['10:30 AM', '12:00 PM', '1:00 PM', '3:00 PM'],
        correctAnswer: 1,
        explanation: 'Lunch lúc "12:00 PM".',
      },
      {
        id: 'q003',
        question: 'What will be provided on arrival?',
        options: ['Lunch', 'ID card', 'Parking pass', 'Laptop'],
        correctAnswer: 2,
        explanation: '"Parking passes will be provided on arrival".',
      },
    ],
  },
  {
    id: 'p7_b014',
    level: 'beginner',
    type: 'single',
    category: 'Notice',
    passages: [
      {
        content: `COMMUNITY CENTER ANNOUNCEMENT

Swimming Pool Renovation

The community swimming pool will be closed for renovation from February 1 to March 15.

Renovation includes:
- New filtration system
- Updated changing rooms
- Pool resurfacing
- Energy-efficient heating

During closure, community members can use the facility at Partner Aquatic Center (15 Oak Street) at no additional charge. Please show your membership card.

Classes Schedule:
- Swimming lessons will resume March 20
- Water aerobics will continue at partner facility

We appreciate your patience and understanding.

For more information: Call 555-7890 or visit www.communitycenter.org

Community Services Department`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'How long will the pool be closed?',
        options: ['1 month', '6 weeks', 'Until March 15', '2 months'],
        correctAnswer: 2,
        explanation: 'Pool đóng cửa "from February 1 to March 15".',
      },
      {
        id: 'q002',
        question: 'What do members need to use the partner facility?',
        options: ['Payment', 'Reservation', 'Membership card', 'ID'],
        correctAnswer: 2,
        explanation: '"show your membership card".',
      },
      {
        id: 'q003',
        question: 'When will swimming lessons restart?',
        options: ['February 1', 'March 15', 'March 20', 'April 1'],
        correctAnswer: 2,
        explanation: '"Swimming lessons will resume March 20".',
      },
    ],
  },
  {
    id: 'p7_b015',
    level: 'beginner',
    type: 'single',
    category: 'Memo',
    passages: [
      {
        content: `INTERNAL MEMORANDUM

To: All Department Heads
From: CEO Office
Date: March 22
Subject: Quarterly Review Meeting

This is to inform you that the Q1 Quarterly Review Meeting will be held on April 5 at 10:00 AM in the Executive Boardroom.

Please prepare:
1. Department performance summary
2. Budget vs. actual spending report
3. Q2 goals and initiatives
4. Staffing updates

Presentations should be 10 minutes maximum, followed by 5 minutes for questions.

Submit your presentation slides to my assistant by April 3, 5:00 PM for compilation.

Light refreshments will be served.

If you cannot attend, please send your deputy and notify my office by March 29.

Thank you,
Robert Chen
Chief Executive Officer`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'When is the meeting?',
        options: ['March 22', 'March 29', 'April 3', 'April 5'],
        correctAnswer: 3,
        explanation: 'Meeting vào "April 5 at 10:00 AM".',
      },
      {
        id: 'q002',
        question: 'How long should each presentation be?',
        options: ['5 minutes', '10 minutes', '15 minutes', '20 minutes'],
        correctAnswer: 1,
        explanation: '"Presentations should be 10 minutes maximum".',
      },
      {
        id: 'q003',
        question: 'When is the deadline to submit slides?',
        options: ['March 29', 'April 3', 'April 5', 'No deadline'],
        correctAnswer: 1,
        explanation: '"Submit... by April 3, 5:00 PM".',
      },
    ],
  },

  // === INTERMEDIATE LEVEL - SINGLE & DOUBLE PASSAGES (10 passages) ===
  {
    id: 'p7_i001',
    level: 'intermediate',
    type: 'single',
    category: 'Business Article',
    passages: [
      {
        content: `Tech Innovations Inc. Reports Strong Q1 Results

SILICON VALLEY - Tech Innovations Inc. announced yesterday that its first-quarter revenue increased by 35% compared to the same period last year, reaching $2.3 billion.

The company's CEO, Sarah Chen, attributed the growth to strong sales of their new CloudPro software suite and expanded services in the Asian market.

"We're particularly pleased with the reception of CloudPro in enterprise markets," Chen stated during the earnings call. "Our investment in AI-powered features has clearly resonated with customers."

The company also announced plans to hire 500 additional employees across its engineering and customer support departments over the next six months.

Analysts predict continued growth for Tech Innovations, with some forecasting annual revenue could reach $10 billion by year-end.`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'What was the revenue increase in Q1?',
        options: ['25%', '30%', '35%', '40%'],
        correctAnswer: 2,
        explanation: 'Revenue tăng 35%.',
      },
      {
        id: 'q002',
        question: 'What contributed to the company\'s growth?',
        options: ['Lower prices', 'New software and Asian market', 'Marketing campaign', 'Stock sales'],
        correctAnswer: 1,
        explanation: 'Growth từ "CloudPro software" và "Asian market".',
      },
      {
        id: 'q003',
        question: 'How many employees will the company hire?',
        options: ['100', '350', '500', '1000'],
        correctAnswer: 2,
        explanation: 'Công ty sẽ tuyển "500 additional employees".',
      },
      {
        id: 'q004',
        question: 'What is the predicted annual revenue?',
        options: ['$2.3 billion', '$5 billion', '$10 billion', '$20 billion'],
        correctAnswer: 2,
        explanation: 'Analysts dự đoán "$10 billion by year-end".',
      },
    ],
  },
  {
    id: 'p7_i002',
    level: 'intermediate',
    type: 'double',
    category: 'Email Chain',
    passages: [
      {
        title: 'Email 1',
        content: `From: John Williams <j.williams@techcorp.com>
To: Marketing Team
Date: May 10, 9:30 AM
Subject: Q2 Marketing Campaign

Team,

I'd like to schedule a meeting to discuss our Q2 marketing campaign. We need to finalize the budget and select the promotional channels.

Please review the attached proposal and come prepared with your suggestions.

Proposed meeting: May 15, 2:00 PM, Conference Room B

John Williams
Marketing Director`
      },
      {
        title: 'Email 2',
        content: `From: Lisa Chen <l.chen@techcorp.com>
To: John Williams
Date: May 10, 10:15 AM
Subject: RE: Q2 Marketing Campaign

Hi John,

I've reviewed the proposal. I think we should allocate more budget to social media advertising, as it showed excellent ROI in Q1.

Also, Conference Room B is booked on May 15. Should we meet in Room A instead, or reschedule?

Best,
Lisa Chen
Senior Marketing Manager`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'What is the main purpose of the meeting?',
        options: ['Review Q1 results', 'Discuss Q2 campaign', 'Announce promotions', 'Train new staff'],
        correctAnswer: 1,
        explanation: 'Meeting để "discuss our Q2 marketing campaign".',
      },
      {
        id: 'q002',
        question: 'What does Lisa suggest?',
        options: ['Cancel the meeting', 'Increase social media budget', 'Hire more staff', 'Change the campaign'],
        correctAnswer: 1,
        explanation: 'Lisa đề xuất "allocate more budget to social media".',
      },
      {
        id: 'q003',
        question: 'What is the problem with the meeting?',
        options: ['Wrong date', 'Room is booked', 'Too many people', 'Budget issues'],
        correctAnswer: 1,
        explanation: '"Conference Room B is booked".',
      },
      {
        id: 'q004',
        question: 'Why does Lisa recommend social media?',
        options: ['Cheaper costs', 'Good ROI in Q1', 'Competitor uses it', 'John suggested it'],
        correctAnswer: 1,
        explanation: 'Social media "showed excellent ROI in Q1".',
      },
    ],
  },
  {
    id: 'p7_i003',
    level: 'intermediate',
    type: 'single',
    category: 'Report',
    passages: [
      {
        content: `ANNUAL CUSTOMER SATISFACTION REPORT 2024

Executive Summary

Our customer satisfaction survey received 8,500 responses from clients across all service categories. Overall satisfaction increased to 87%, up 5% from last year.

Key Findings:

Product Quality: 92% satisfaction
Customer Service: 85% satisfaction
Delivery Times: 79% satisfaction
Value for Money: 81% satisfaction

Positive Trends:
• 94% of customers would recommend our services
• Repeat purchase rate increased to 68%
• Average response time improved by 30%

Areas for Improvement:
• Delivery times remain below target
• Website navigation received mixed feedback
• Premium pricing concerns in competitive segments

Recommendations:
1. Invest in logistics infrastructure to improve delivery
2. Redesign website for better user experience
3. Develop mid-tier product line to address price sensitivity

The customer loyalty program launched in Q3 shows promising results, with 45% enrollment among active customers.

Next Steps: Department heads will receive detailed segmented reports and should develop action plans by month-end.`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'What was the overall satisfaction rate?',
        options: ['79%', '85%', '87%', '92%'],
        correctAnswer: 2,
        explanation: '"Overall satisfaction increased to 87%".',
      },
      {
        id: 'q002',
        question: 'Which area had the lowest satisfaction?',
        options: ['Product Quality', 'Customer Service', 'Delivery Times', 'Value for Money'],
        correctAnswer: 2,
        explanation: 'Delivery Times có 79%, thấp nhất.',
      },
      {
        id: 'q003',
        question: 'What percentage of customers would recommend the service?',
        options: ['68%', '87%', '92%', '94%'],
        correctAnswer: 3,
        explanation: '"94% of customers would recommend".',
      },
      {
        id: 'q004',
        question: 'What is recommended to address price concerns?',
        options: ['Lower prices', 'Better quality', 'Mid-tier products', 'More discounts'],
        correctAnswer: 2,
        explanation: '"Develop mid-tier product line to address price sensitivity".',
      },
      {
        id: 'q005',
        question: 'What is the loyalty program enrollment rate?',
        options: ['30%', '45%', '68%', '94%'],
        correctAnswer: 1,
        explanation: '"45% enrollment among active customers".',
      },
    ],
  },
  {
    id: 'p7_i004',
    level: 'intermediate',
    type: 'double',
    category: 'Job Posting & Cover Letter',
    passages: [
      {
        title: 'Job Advertisement',
        content: `SENIOR MARKETING MANAGER

Digital Dynamics Inc. - San Francisco, CA

We are seeking an experienced Senior Marketing Manager to lead our digital marketing initiatives.

Responsibilities:
• Develop and execute comprehensive marketing strategies
• Manage team of 5 marketing specialists
• Oversee $2M annual marketing budget
• Analyze campaign performance and ROI
• Collaborate with sales and product teams

Requirements:
• 7+ years marketing experience
• Bachelor's degree in Marketing or related field
• Proven track record in digital campaigns
• Strong analytical and leadership skills
• Experience with marketing automation tools

We Offer:
• Competitive salary ($120K-$150K)
• Health, dental, vision insurance
• 401(k) matching
• Flexible work arrangements
• Professional development budget

Application Deadline: January 31
Start Date: March 1

To apply, send resume and cover letter to careers@digitaldynamics.com`
      },
      {
        title: 'Cover Letter',
        content: `January 20

Dear Hiring Manager,

I am writing to express my strong interest in the Senior Marketing Manager position at Digital Dynamics Inc.

With over 9 years of experience in digital marketing, I have successfully led campaigns that increased brand awareness by 150% and generated $5M in revenue growth at my current company, Tech Solutions Ltd.

In my current role as Marketing Team Lead, I manage a team of 8 specialists and a $1.8M budget. I implemented a data-driven approach that improved our marketing ROI by 40% over two years.

I am particularly excited about Digital Dynamics' innovative approach to marketing automation and would welcome the opportunity to contribute to your team's success.

My experience with leading platforms such as HubSpot, Salesforce, and Google Analytics aligns well with your requirements.

I am available for an interview at your convenience and can start on March 1 as indicated.

Thank you for considering my application.

Sincerely,
Amanda Peterson
(555) 123-4567
amanda.peterson@email.com`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'What is the budget for this position?',
        options: ['$1.8M', '$2M', '$5M', '$120K'],
        correctAnswer: 1,
        explanation: 'Budget là "$2M annual marketing budget".',
      },
      {
        id: 'q002',
        question: 'How many years of experience does Amanda have?',
        options: ['5 years', '7 years', '8 years', '9 years'],
        correctAnswer: 3,
        explanation: 'Amanda có "over 9 years of experience".',
      },
      {
        id: 'q003',
        question: 'What improvement did Amanda achieve in her current role?',
        options: ['40% ROI improvement', '150% revenue growth', '200% team expansion', '50% cost reduction'],
        correctAnswer: 0,
        explanation: '"improved our marketing ROI by 40%".',
      },
      {
        id: 'q004',
        question: 'How many people will the new manager supervise?',
        options: ['5', '8', '9', '40'],
        correctAnswer: 0,
        explanation: 'Position sẽ "Manage team of 5 marketing specialists".',
      },
      {
        id: 'q005',
        question: 'When is the application deadline?',
        options: ['January 20', 'January 31', 'March 1', 'Not specified'],
        correctAnswer: 1,
        explanation: '"Application Deadline: January 31".',
      },
    ],
  },
  {
    id: 'p7_i005',
    level: 'intermediate',
    type: 'single',
    category: 'Article',
    passages: [
      {
        content: `Remote Work Transforms Office Real Estate Market

NEW YORK - The commercial real estate industry is undergoing significant transformation as companies adopt hybrid and remote work models, according to a recent industry report.

Office vacancy rates in major cities have reached 18%, the highest level in two decades. Many companies are downsizing their physical footprint, with the average office space per employee decreasing from 250 to 150 square feet.

However, the market is adapting. Developers are converting traditional office buildings into flexible co-working spaces, residential apartments, and mixed-use facilities. These conversions have increased by 35% in the past year.

"The future of office space is about collaboration hubs rather than individual workstations," explains Sarah Mitchell, a commercial real estate consultant. "Companies want inspiring spaces for team meetings and innovation, not rows of desks."

Technology firms are leading this shift, with 70% implementing flexible workplace policies. Many are investing in smaller but higher-quality spaces with premium amenities like fitness centers, outdoor terraces, and advanced video conferencing facilities.

The report predicts that by 2026, hybrid work will be the norm for 60% of office workers, stabilizing demand at a new equilibrium. Landlords who adapt their properties to meet these changing needs are expected to outperform traditional office buildings.

Real estate investment trusts (REITs) focusing on flexible workspace solutions have seen stock prices increase by an average of 22% this year, signaling investor confidence in this emerging model.`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'What is the current office vacancy rate?',
        options: ['15%', '18%', '22%', '35%'],
        correctAnswer: 1,
        explanation: '"Office vacancy rates... have reached 18%".',
      },
      {
        id: 'q002',
        question: 'How much has office space per employee decreased?',
        options: ['50 sq ft', '100 sq ft', '150 sq ft', '250 sq ft'],
        correctAnswer: 1,
        explanation: 'Giảm từ 250 xuống 150 = 100 sq ft.',
      },
      {
        id: 'q003',
        question: 'What percentage of tech firms have flexible policies?',
        options: ['35%', '60%', '70%', '22%'],
        correctAnswer: 2,
        explanation: '"Technology firms... 70% implementing flexible workplace policies".',
      },
      {
        id: 'q004',
        question: 'According to Sarah Mitchell, what is the future of office space?',
        options: ['Individual desks', 'Collaboration hubs', 'Home offices', 'Traditional layout'],
        correctAnswer: 1,
        explanation: '"The future... is about collaboration hubs".',
      },
      {
        id: 'q005',
        question: 'How much have flexible workspace REIT stocks increased?',
        options: ['18%', '22%', '35%', '60%'],
        correctAnswer: 1,
        explanation: '"stock prices increase by an average of 22%".',
      },
    ],
  },
  {
    id: 'p7_i006',
    level: 'intermediate',
    type: 'double',
    category: 'Memo & Schedule',
    passages: [
      {
        title: 'Memo',
        content: `MEMORANDUM

TO: All Department Managers
FROM: Training & Development
DATE: February 15
RE: Leadership Development Program

We are pleased to announce the launch of our new Leadership Development Program starting in April.

This comprehensive 6-month program includes:
• Monthly workshops on leadership skills
• One-on-one executive coaching sessions
• Peer learning groups
• Real-world project assignments

Eligibility: Managers with 2+ years in current role
Participants: Limited to 20 people
Time Commitment: 4 hours per month + project work
Cost: Fully funded by the company

Please nominate qualified candidates from your team by March 1. Selected participants will be notified by March 15.

This program aims to build our internal leadership pipeline and prepare future executives.

For questions, contact Laura Stevens at ext. 3456.`
      },
      {
        title: 'Program Schedule',
        content: `LEADERSHIP DEVELOPMENT PROGRAM SCHEDULE
April - September

April: Foundations of Leadership
Workshop: April 12, 9 AM - 1 PM
Topic: Leadership styles and self-assessment
Coach Assignment: April 15

May: Strategic Thinking
Workshop: May 10, 9 AM - 1 PM
Topic: Vision development and goal setting
Project Brief Released: May 15

June: Team Building & Communication
Workshop: June 14, 9 AM - 1 PM
Topic: Effective communication and motivation
Peer Groups Form: June 20

July: Change Management
Workshop: July 12, 9 AM - 1 PM
Topic: Leading organizational change
Mid-Program Review: July 25

August: Decision Making & Problem Solving
Workshop: August 9, 9 AM - 1 PM
Topic: Data-driven decisions and risk management
Project Presentations: August 22

September: Program Completion
Final Workshop: September 13, 9 AM - 2 PM
Topic: Creating your leadership action plan
Graduation Ceremony: September 20

Note: All workshops held in Executive Training Center
Lunch provided for full-day sessions`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'How long is the program?',
        options: ['3 months', '4 months', '6 months', '9 months'],
        correctAnswer: 2,
        explanation: 'Program là "6-month program".',
      },
      {
        id: 'q002',
        question: 'What is the maximum number of participants?',
        options: ['15', '20', '25', '30'],
        correctAnswer: 1,
        explanation: '"Limited to 20 people".',
      },
      {
        id: 'q003',
        question: 'When is the nomination deadline?',
        options: ['February 15', 'March 1', 'March 15', 'April 12'],
        correctAnswer: 1,
        explanation: '"nominate... by March 1".',
      },
      {
        id: 'q004',
        question: 'When do project presentations take place?',
        options: ['July 25', 'August 9', 'August 22', 'September 13'],
        correctAnswer: 2,
        explanation: '"Project Presentations: August 22".',
      },
      {
        id: 'q005',
        question: 'What is different about the final workshop?',
        options: ['Morning only', 'Longer duration', 'Different location', 'No lunch'],
        correctAnswer: 1,
        explanation: 'Final workshop là "9 AM - 2 PM" (5 giờ), dài hơn các workshop khác (4 giờ).',
      },
    ],
  },
  {
    id: 'p7_i007',
    level: 'intermediate',
    type: 'single',
    category: 'Policy Document',
    passages: [
      {
        content: `EMPLOYEE REMOTE WORK POLICY

Effective Date: March 1, 2024

Eligibility:
Full-time employees who have completed their probationary period and received satisfactory performance reviews are eligible to apply for remote work arrangements.

Work Arrangements:
• Fully Remote: Work from home 5 days per week
• Hybrid: Work from home 2-3 days per week
• Flexible: Vary schedule based on business needs

Application Process:
1. Discuss with direct manager
2. Complete Remote Work Agreement form
3. Submit to HR for approval
4. IT assessment of home office setup

Equipment & Support:
The company will provide:
- Laptop and necessary software
- VPN access and security tools
- $500 annual stipend for home office expenses
- Technical support via helpdesk

Employees must provide:
- Reliable internet connection (minimum 25 Mbps)
- Dedicated workspace
- Professional background for video calls

Performance Standards:
Remote employees must:
• Maintain regular communication with team
• Be available during core hours (10 AM - 3 PM)
• Attend all required meetings (virtual or in-person)
• Meet or exceed performance objectives

Security Requirements:
• Use company-approved devices only
• Follow data protection protocols
• Ensure secure WiFi connection
• Report security incidents immediately

Review & Termination:
Remote work arrangements will be reviewed quarterly. The company reserves the right to modify or terminate arrangements based on business needs or performance issues.

For questions, contact HR at remotework@company.com`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'Who is eligible for remote work?',
        options: ['All employees', 'Managers only', 'Full-time after probation', 'Part-time workers'],
        correctAnswer: 2,
        explanation: '"Full-time employees who have completed their probationary period".',
      },
      {
        id: 'q002',
        question: 'What is the annual home office stipend?',
        options: ['$250', '$500', '$1000', '$2000'],
        correctAnswer: 1,
        explanation: '"$500 annual stipend for home office expenses".',
      },
      {
        id: 'q003',
        question: 'What are the core working hours?',
        options: ['9 AM - 5 PM', '10 AM - 3 PM', '8 AM - 4 PM', 'Flexible'],
        correctAnswer: 1,
        explanation: '"available during core hours (10 AM - 3 PM)".',
      },
      {
        id: 'q004',
        question: 'What internet speed is required?',
        options: ['10 Mbps', '25 Mbps', '50 Mbps', '100 Mbps'],
        correctAnswer: 1,
        explanation: '"minimum 25 Mbps".',
      },
      {
        id: 'q005',
        question: 'How often are arrangements reviewed?',
        options: ['Monthly', 'Quarterly', 'Annually', 'As needed'],
        correctAnswer: 1,
        explanation: '"reviewed quarterly".',
      },
    ],
  },
  {
    id: 'p7_i008',
    level: 'intermediate',
    type: 'double',
    category: 'Invoice & Email',
    passages: [
      {
        title: 'Invoice',
        content: `INVOICE

ABC Office Supplies
789 Business Drive, Suite 200
Chicago, IL 60601
Phone: (312) 555-7890

BILL TO:
TechStart Solutions
456 Innovation Way
Chicago, IL 60602

Invoice Number: INV-2024-0387
Invoice Date: February 20, 2024
Due Date: March 20, 2024
Payment Terms: Net 30 days

ITEMS:
1. Ergonomic Office Chairs (Qty: 15) @ $320 each ... $4,800.00
2. Standing Desks (Qty: 8) @ $650 each ............ $5,200.00
3. Monitor Arms (Qty: 15) @ $85 each .............. $1,275.00
4. Desk Organizers (Qty: 20) @ $45 each ........... $900.00
5. Installation Service .............................. $800.00

Subtotal: ......................................... $12,975.00
Sales Tax (8.5%): ................................. $1,102.88
Shipping: ......................................... $250.00
TOTAL DUE: ........................................ $14,327.88

Payment Methods:
• Check payable to ABC Office Supplies
• Bank Transfer: Account #123-456-789
• Credit Card: Call (312) 555-7890

Thank you for your business!`
      },
      {
        title: 'Email',
        content: `From: David Park <d.park@techstart.com>
To: Accounts Payable <ap@abcoffice.com>
Date: February 25, 2024
Subject: Invoice INV-2024-0387 - Question

Hello,

I received invoice INV-2024-0387 dated February 20. I have a question about the charges.

We ordered 15 chairs and 8 desks, which is correct. However, we only ordered 10 monitor arms, not 15. Could you please review this item?

Also, we were quoted free shipping for orders over $10,000 during our initial consultation. The invoice shows a $250 shipping charge.

Could you send a revised invoice with these corrections?

We process payments on the 15th of each month. If the revised invoice is sent by March 10, we can include it in our March 15 payment run. Otherwise, it will be processed on April 15.

Thanks for your help.

Best regards,
David Park
Finance Manager, TechStart Solutions
Phone: (312) 555-1234`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'What is the total amount due on the invoice?',
        options: ['$12,975.00', '$14,077.88', '$14,327.88', '$14,577.88'],
        correctAnswer: 2,
        explanation: '"TOTAL DUE: $14,327.88".',
      },
      {
        id: 'q002',
        question: 'What is the issue with monitor arms?',
        options: ['Wrong price', 'Wrong quantity', 'Not ordered', 'Damaged'],
        correctAnswer: 1,
        explanation: 'David nói họ chỉ order "10 monitor arms, not 15".',
      },
      {
        id: 'q003',
        question: 'Why does David question the shipping charge?',
        options: ['Too expensive', 'Wrong address', 'Should be free', 'Already paid'],
        correctAnswer: 2,
        explanation: '"quoted free shipping for orders over $10,000".',
      },
      {
        id: 'q004',
        question: 'When does TechStart process payments?',
        options: ['Weekly', 'On the 10th', 'On the 15th', 'On the 20th'],
        correctAnswer: 2,
        explanation: '"We process payments on the 15th of each month".',
      },
      {
        id: 'q005',
        question: 'By when should the revised invoice be sent for March payment?',
        options: ['February 25', 'March 10', 'March 15', 'March 20'],
        correctAnswer: 1,
        explanation: '"If... sent by March 10, we can include it in our March 15 payment".',
      },
    ],
  },
  {
    id: 'p7_i009',
    level: 'intermediate',
    type: 'single',
    category: 'Newsletter',
    passages: [
      {
        content: `EMPLOYEE WELLNESS NEWSLETTER - MARCH 2024

Welcome Spring with Healthy Habits!

Upcoming Wellness Programs:

1. NUTRITION WORKSHOP SERIES (Starting March 15)
Join registered dietitian Karen Lopez for a 4-week series on healthy eating.
• Week 1: Meal Planning Basics
• Week 2: Reading Nutrition Labels
• Week 3: Healthy Snacking
• Week 4: Cooking Demonstrations
Time: Tuesdays, 12:00-1:00 PM (lunch provided)
Register: wellness@company.com by March 10

2. FITNESS CHALLENGE (March 20 - April 20)
Form teams of 4 and compete in our step challenge!
Grand Prize: $500 team gift card
All participants receive fitness tracker
Kickoff meeting: March 18, 3:00 PM, Gym

3. MENTAL HEALTH SUPPORT
Free confidential counseling available
New: Meditation app subscription for all employees
Mindfulness sessions: Every Thursday, 8:00 AM, Conference Room A

Wellness Room Update:
The new wellness room (Building B, 2nd floor) is now open!
Features:
• Comfortable seating
• Dim lighting
• Sound machine
• Yoga mats
• Private space for meditation or nursing mothers

Available: Mon-Fri, 7:00 AM - 7:00 PM
Reserve: Use company booking system (max 30 minutes)

Health Screening Reminder:
Annual health screenings scheduled for April 1-15
On-site nurse available
Includes: Blood pressure, cholesterol, BMI, vision
Book your appointment: health@company.com

Wellness Rewards Program:
Earn points for healthy activities:
- Attend workshop: 50 points
- Complete fitness challenge: 100 points
- Health screening: 75 points
- Refer a colleague: 25 points

Redeem points for rewards:
200 points = $25 gift card
500 points = Extra vacation day
1000 points = Fitness equipment

Questions? Contact Wellness Team at ext. 8888`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'How long is the nutrition workshop series?',
        options: ['2 weeks', '3 weeks', '4 weeks', '5 weeks'],
        correctAnswer: 2,
        explanation: '"4-week series on healthy eating".',
      },
      {
        id: 'q002',
        question: 'What is the prize for the fitness challenge?',
        options: ['Fitness tracker', '$500 gift card', 'Extra vacation day', 'Free membership'],
        correctAnswer: 1,
        explanation: '"Grand Prize: $500 team gift card".',
      },
      {
        id: 'q003',
        question: 'When are mindfulness sessions held?',
        options: ['Tuesday 12 PM', 'Wednesday 3 PM', 'Thursday 8 AM', 'Friday 7 AM'],
        correctAnswer: 2,
        explanation: '"Every Thursday, 8:00 AM".',
      },
      {
        id: 'q004',
        question: 'How long can the wellness room be reserved?',
        options: ['15 minutes', '30 minutes', '1 hour', '2 hours'],
        correctAnswer: 1,
        explanation: '"max 30 minutes".',
      },
      {
        id: 'q005',
        question: 'How many points are needed for an extra vacation day?',
        options: ['200', '500', '1000', '1500'],
        correctAnswer: 1,
        explanation: '"500 points = Extra vacation day".',
      },
    ],
  },
  {
    id: 'p7_i010',
    level: 'intermediate',
    type: 'double',
    category: 'Meeting Minutes & Action Items',
    passages: [
      {
        title: 'Meeting Minutes',
        content: `PRODUCT DEVELOPMENT MEETING MINUTES

Date: March 8, 2024
Time: 2:00 PM - 3:30 PM
Location: Innovation Lab
Attendees: Sarah Kim (Product Manager), Tom Lee (Engineering Lead), Maria Garcia (Design Director), James Chen (Marketing), Alex Wong (QA Manager)

Agenda Items Discussed:

1. Product Launch Timeline
- Target launch date: June 15
- Beta testing phase: April 15 - May 15
- Marketing campaign starts: May 1
- Tom raised concerns about engineering timeline being tight
- Team agreed to add 2 additional developers to accelerate development

2. Feature Prioritization
- Must-have features confirmed for v1.0
- Advanced analytics moved to v1.1 (Q3 release)
- Mobile app development to begin in parallel

3. User Testing Feedback
- Maria presented results from 50 user interviews
- 85% positive feedback on new interface design
- Users requested dark mode (to be included)
- Search functionality needs improvement

4. Budget Review
- Current spending: $450K of $600K budget
- Request for additional $50K for marketing approved
- Remaining budget: $100K for contingencies

5. Next Steps
- Engineering to provide updated timeline by March 15
- Design to finalize dark mode specs by March 20
- Marketing to present campaign strategy March 22
- QA to develop test plan by April 1

Next Meeting: March 22, 2:00 PM`
      },
      {
        title: 'Action Items',
        content: `ACTION ITEMS - Product Development Team

HIGH PRIORITY:

Tom Lee (Engineering)
□ Hire 2 additional developers by March 18
□ Submit revised development timeline by March 15
□ Review and approve dark mode technical requirements by March 22

Maria Garcia (Design)
□ Complete dark mode design specifications by March 20
□ Prepare user testing report for stakeholders by March 15
□ Coordinate with engineering on mobile app design by March 25

James Chen (Marketing)
□ Finalize campaign budget with additional $50K by March 12
□ Present comprehensive campaign strategy March 22
□ Coordinate with PR agency for launch event by April 1

Alex Wong (QA)
□ Develop comprehensive test plan by April 1
□ Recruit beta testers (target: 200 users) by April 10
□ Set up bug tracking system by March 20

Sarah Kim (Product Manager)
□ Update stakeholders on timeline changes by March 10
□ Schedule feature prioritization workshop for v1.1 by March 30
□ Review all action items progress weekly

MEDIUM PRIORITY:

All Team Members
□ Review and comment on shared product roadmap by March 18
□ Submit Q2 resource requirements by March 25

Status Update Meeting: March 15, 10:00 AM (30 minutes)`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'What is the target launch date?',
        options: ['April 15', 'May 1', 'May 15', 'June 15'],
        correctAnswer: 3,
        explanation: '"Target launch date: June 15".',
      },
      {
        id: 'q002',
        question: 'How many user interviews were conducted?',
        options: ['20', '50', '85', '200'],
        correctAnswer: 1,
        explanation: '"results from 50 user interviews".',
      },
      {
        id: 'q003',
        question: 'How much additional marketing budget was approved?',
        options: ['$50K', '$100K', '$450K', '$600K'],
        correctAnswer: 0,
        explanation: '"additional $50K for marketing approved".',
      },
      {
        id: 'q004',
        question: 'When must Tom submit the revised timeline?',
        options: ['March 10', 'March 15', 'March 18', 'March 22'],
        correctAnswer: 1,
        explanation: 'Tom phải "Submit revised development timeline by March 15".',
      },
      {
        id: 'q005',
        question: 'How many beta testers should Alex recruit?',
        options: ['50', '100', '200', '250'],
        correctAnswer: 2,
        explanation: '"Recruit beta testers (target: 200 users)".',
      },
    ],
  },

  // === ADVANCED LEVEL - DOUBLE & TRIPLE PASSAGES (5 passages) ===
  {
    id: 'p7_a001',
    level: 'advanced',
    type: 'triple',
    category: 'Business Documents',
    passages: [
      {
        title: 'Press Release',
        content: `FOR IMMEDIATE RELEASE

GlobalTech Announces Merger with DataCorp

SAN FRANCISCO, June 1 - GlobalTech Solutions today announced it has reached a definitive agreement to acquire DataCorp International for $4.5 billion in an all-stock transaction.

The merger combines GlobalTech's cloud infrastructure expertise with DataCorp's advanced data analytics capabilities, creating a comprehensive technology solutions provider.

"This strategic combination will enable us to deliver unprecedented value to our customers," said Michael Roberts, CEO of GlobalTech. "DataCorp's analytics platform perfectly complements our cloud services."

The transaction is expected to close in Q4, subject to regulatory approval and shareholder votes. Upon completion, DataCorp CEO Jennifer Park will join GlobalTech's board of directors.

The combined company will serve over 50,000 enterprise clients globally and employ approximately 25,000 people.`
      },
      {
        title: 'Internal Memo',
        content: `CONFIDENTIAL MEMORANDUM

To: GlobalTech Employees
From: Michael Roberts, CEO
Date: June 1
Re: DataCorp Acquisition

Dear Colleagues,

As announced today, we are acquiring DataCorp International. This is a transformative opportunity for our company.

Key Points:
• No layoffs are planned as a result of this merger
• DataCorp employees will join our team upon deal closure
• Integration teams will be formed next week
• Your direct managers will provide department-specific updates

We expect the merger to close by December. Until then, both companies will continue operating independently.

I'm excited about our future together.

Michael Roberts`
      },
      {
        title: 'Analyst Report',
        content: `INVESTMENT RESEARCH

GlobalTech-DataCorp Merger Analysis
June 2

Our analysis indicates this merger is strategically sound. The $4.5 billion valuation represents a 25% premium over DataCorp's current market capitalization, which we believe is justified.

Synergy Potential: We estimate $300 million in annual cost savings within two years, primarily from consolidated infrastructure and reduced redundancies.

Revenue Growth: The combined entity could achieve 15-20% annual revenue growth, compared to GlobalTech's standalone 12% projection.

Risks: Integration challenges and potential customer overlap may create short-term headwinds. Additionally, regulatory approval in Europe may be delayed.

Recommendation: We maintain our BUY rating on GlobalTech with a revised price target of $95, up from $82.`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'What is the total value of the acquisition?',
        options: ['$2.5 billion', '$4.5 billion', '$50,000', '$300 million'],
        correctAnswer: 1,
        explanation: 'Acquisition là "$4.5 billion".',
      },
      {
        id: 'q002',
        question: 'When is the merger expected to close?',
        options: ['June', 'September', 'Q4', 'Next year'],
        correctAnswer: 2,
        explanation: 'Merger sẽ close "in Q4".',
      },
      {
        id: 'q003',
        question: 'What will happen to DataCorp employees?',
        options: ['Laid off', 'Join GlobalTech', 'Move to new company', 'Receive bonuses'],
        correctAnswer: 1,
        explanation: '"DataCorp employees will join our team".',
      },
      {
        id: 'q004',
        question: 'According to the analyst, what is a potential risk?',
        options: ['High cost', 'Integration challenges', 'Low revenue', 'CEO departure'],
        correctAnswer: 1,
        explanation: 'Risk bao gồm "Integration challenges".',
      },
      {
        id: 'q005',
        question: 'How much does the acquisition premium represent?',
        options: ['15%', '20%', '25%', '30%'],
        correctAnswer: 2,
        explanation: '"25% premium over DataCorp\'s current market capitalization".',
      },
      {
        id: 'q006',
        question: 'What is the estimated annual cost savings?',
        options: ['$95 million', '$300 million', '$4.5 billion', '$25,000'],
        correctAnswer: 1,
        explanation: '"$300 million in annual cost savings".',
      },
    ],
  },
  {
    id: 'p7_a002',
    level: 'advanced',
    type: 'triple',
    category: 'Contract & Correspondence',
    passages: [
      {
        title: 'Service Agreement',
        content: `PROFESSIONAL SERVICES AGREEMENT

This Agreement entered into on January 10, 2024, between:

CLIENT: Innovation Technologies Ltd. ("Client")
Address: 100 Tech Park, Austin, TX 78701

SERVICE PROVIDER: Strategic Consulting Group Inc. ("Provider")
Address: 500 Business Plaza, Austin, TX 78702

1. SCOPE OF SERVICES
Provider agrees to deliver the following services:
• Market analysis and competitive research
• Strategic planning consultation
• Implementation roadmap development
• Quarterly performance reviews

2. TERM
Contract period: January 15, 2024 - January 14, 2025 (12 months)
Renewable upon mutual written agreement

3. COMPENSATION
Monthly retainer: $15,000
Total annual value: $180,000
Payment due: 5th business day of each month
Additional services: Billed at $250/hour

4. DELIVERABLES
• Initial assessment report: February 15, 2024
• Strategic plan document: March 30, 2024
• Quarterly reviews: April, July, October, January
• Final recommendations: January 10, 2025

5. TERMINATION
Either party may terminate with 60 days written notice
Early termination fee: 25% of remaining contract value

6. CONFIDENTIALITY
All proprietary information must remain confidential for 3 years post-contract

7. LIABILITY
Provider's liability limited to fees paid in preceding 6 months

Signatures:
________________________  ________________________
Robert Chen, CEO           Jennifer Martinez, President
Innovation Technologies    Strategic Consulting Group
Date: January 10, 2024    Date: January 10, 2024`
      },
      {
        title: 'Email Exchange',
        content: `From: Robert Chen <r.chen@innovationtech.com>
To: Jennifer Martinez <j.martinez@strategicgroup.com>
Date: March 25, 2024
Subject: Concerns about Strategic Plan Deliverable

Dear Jennifer,

I wanted to touch base regarding the strategic plan that was due March 30. Our board meeting is scheduled for April 5, and we need the plan for review.

I understand you mentioned your team needed additional data. Can you confirm we'll receive the plan by March 30, or should we expect a delay?

Also, I'd like to add a competitive pricing analysis to our next quarterly review in April. Would this fall under the existing agreement or require additional billing?

Best regards,
Robert Chen

---

From: Jennifer Martinez <j.martinez@strategicgroup.com>
To: Robert Chen <r.chen@innovationtech.com>
Date: March 26, 2024
Subject: RE: Concerns about Strategic Plan Deliverable

Dear Robert,

Thank you for reaching out. I apologize for any confusion.

The strategic plan will be delivered on schedule by March 30. We completed the data collection last week, and our team is finalizing the document. You'll receive it by 5 PM on Friday.

Regarding the competitive pricing analysis for your quarterly review - this would typically be considered an additional service under Section 3 of our agreement, billed at $250/hour. We estimate 20-25 hours for a comprehensive analysis.

However, given our strong partnership, I'd like to propose including a basic pricing comparison as part of the quarterly review at no additional charge. If you need more detailed analysis, we can provide a separate proposal.

I'll call you tomorrow to discuss further.

Best regards,
Jennifer Martinez`
      },
      {
        title: 'Invoice',
        content: `INVOICE

Strategic Consulting Group Inc.
500 Business Plaza, Austin, TX 78702
Tax ID: 76-1234567

BILL TO:
Innovation Technologies Ltd.
100 Tech Park
Austin, TX 78701

Invoice Number: SCG-2024-0412
Invoice Date: April 1, 2024
Payment Due: April 8, 2024 (5th business day)

SERVICES RENDERED - March 2024:

Monthly Retainer Fee ........................... $15,000.00

Additional Services:
Data Analysis Support (8 hours @ $250) ......... $2,000.00
Industry Research Extension (6 hours @ $250) ... $1,500.00

Total Additional Services ...................... $3,500.00

Subtotal ...................................... $18,500.00
Sales Tax (8.25%) ............................. $1,526.25

TOTAL AMOUNT DUE ............................... $20,026.25

Payment Terms: Net 5 business days
Late Payment: 1.5% per month on overdue balance

Payment Methods:
• ACH Transfer: Account #987-654-321
• Check: Payable to Strategic Consulting Group Inc.
• Credit Card: Call (512) 555-0199

Previous Balance: $0.00
Payments Received: $15,000.00 (February invoice)

Questions? Contact: billing@strategicgroup.com

Thank you for your business!`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'What is the monthly retainer fee?',
        options: ['$3,500', '$15,000', '$18,500', '$20,026'],
        correctAnswer: 1,
        explanation: '"Monthly retainer: $15,000".',
      },
      {
        id: 'q002',
        question: 'When is the strategic plan due?',
        options: ['March 25', 'March 26', 'March 30', 'April 5'],
        correctAnswer: 2,
        explanation: 'Plan due "March 30, 2024".',
      },
      {
        id: 'q003',
        question: 'What is the hourly rate for additional services?',
        options: ['$150', '$200', '$250', '$300'],
        correctAnswer: 2,
        explanation: '"Billed at $250/hour".',
      },
      {
        id: 'q004',
        question: 'What does Jennifer offer to include for free?',
        options: ['Strategic plan', 'Basic pricing comparison', 'Full pricing analysis', 'Extra quarterly review'],
        correctAnswer: 1,
        explanation: 'Jennifer đề xuất "basic pricing comparison... at no additional charge".',
      },
      {
        id: 'q005',
        question: 'How many additional service hours were billed in March?',
        options: ['6 hours', '8 hours', '14 hours', '20 hours'],
        correctAnswer: 2,
        explanation: '8 hours + 6 hours = 14 hours.',
      },
      {
        id: 'q006',
        question: 'What is the early termination fee?',
        options: ['15% of remaining value', '25% of remaining value', '50% of remaining value', '100% of remaining value'],
        correctAnswer: 1,
        explanation: '"Early termination fee: 25% of remaining contract value".',
      },
    ],
  },
  {
    id: 'p7_a003',
    level: 'advanced',
    type: 'triple',
    category: 'Business Proposal & Response',
    passages: [
      {
        title: 'Request for Proposal (RFP)',
        content: `REQUEST FOR PROPOSAL
Corporate Training Services

Metro Bank Corporation
HR Department
Issued: February 1, 2024
Response Deadline: February 29, 2024

BACKGROUND:
Metro Bank is seeking a qualified training provider to deliver comprehensive professional development programs for 500 employees across 12 branches.

PROJECT REQUIREMENTS:

1. Leadership Development (Target: 50 managers)
   - Duration: 6 months
   - Topics: Strategic thinking, team management, change leadership
   - Format: Monthly workshops + individual coaching

2. Customer Service Excellence (Target: 300 staff)
   - Duration: 3 months
   - Topics: Communication skills, problem-solving, conflict resolution
   - Format: Interactive training sessions

3. Digital Skills Training (Target: 150 employees)
   - Duration: 4 months
   - Topics: Data analysis, digital tools, cybersecurity basics
   - Format: Hands-on workshops + online modules

DELIVERABLES:
• Customized curriculum for each program
• Training materials and resources
• Pre and post-training assessments
• Quarterly progress reports
• Certificate of completion

BUDGET: $350,000 - $450,000 (total for all programs)

EVALUATION CRITERIA:
• Relevant experience (30%)
• Proposed methodology (25%)
• Qualifications of trainers (20%)
• Cost (15%)
• References (10%)

SUBMISSION REQUIREMENTS:
Proposals must include:
1. Company background and qualifications
2. Detailed program design for each track
3. Trainer profiles and credentials
4. Implementation timeline
5. Itemized budget breakdown
6. Three client references from similar projects

Submit to: procurement@metrobank.com
Contact: Sarah Williams, HR Director
Phone: (555) 789-0123`
      },
      {
        title: 'Training Proposal',
        content: `TRAINING PROPOSAL

TO: Metro Bank Corporation - HR Department
FROM: Excellence Training Institute
DATE: February 25, 2024
RE: Corporate Training Services Proposal

COMPANY OVERVIEW:
Excellence Training Institute has delivered professional development programs to Fortune 500 companies for 15 years. We've trained over 50,000 professionals with 95% client satisfaction rating.

PROPOSED SOLUTION:

Program 1: Leadership Development Academy (50 managers)
Timeline: March - August 2024
Delivery: 
• 6 full-day workshops (one per month)
• Individual coaching (4 sessions per participant)
• Peer learning groups
• Leadership assessment tools
Investment: $125,000 ($2,500 per participant)

Program 2: Customer Service Mastery (300 staff)
Timeline: April - June 2024
Delivery:
• 8 interactive training sessions across all branches
• Role-playing scenarios
• Service quality toolkit
• Post-training support hotline
Investment: $135,000 ($450 per participant)

Program 3: Digital Skills Bootcamp (150 employees)
Timeline: May - August 2024
Delivery:
• 16 hands-on workshops (4 per month)
• Online learning platform access (6 months)
• Practical projects
• Technology certification exam
Investment: $165,000 ($1,100 per participant)

TOTAL INVESTMENT: $425,000

INCLUDED AT NO ADDITIONAL COST:
• Customized training materials
• All assessment tools and certificates
• Learning management system access
• 6-month post-training consultation

OUR TRAINERS:
All trainers hold master's degrees and professional certifications with minimum 10 years industry experience.

Lead Trainers:
• Dr. Michael Chang - Leadership & Management (PhD, 18 years)
• Patricia Rodriguez - Customer Service (Certified Service Professional, 15 years)
• David Kim - Technology Training (MS Computer Science, 12 years)

IMPLEMENTATION PLAN:
Week 1-2: Needs assessment and customization
Week 3-4: Trainer preparation and material development
Week 5+: Program delivery as per timeline

REFERENCES:
1. First National Bank - 600 employees trained (2022-2023)
2. Global Financial Services - Leadership program for 80 managers (2023)
3. Regional Credit Union - Digital transformation training (2023-2024)

Contact details provided in attached reference sheet.

We look forward to partnering with Metro Bank.

Sincerely,
Jennifer Lee, President
Excellence Training Institute
(555) 456-7890
jlee@excellencetraining.com`
      },
      {
        title: 'Evaluation Summary',
        content: `INTERNAL MEMO - CONFIDENTIAL

TO: Executive Committee
FROM: Sarah Williams, HR Director
DATE: March 5, 2024
RE: Training Provider Evaluation Results

We received 6 proposals in response to our RFP. The evaluation committee reviewed all submissions based on established criteria.

TOP THREE FINALISTS:

1. Excellence Training Institute
Score: 88/100
• Experience: 28/30 (extensive banking sector experience)
• Methodology: 23/25 (comprehensive, well-structured)
• Trainer qualifications: 19/20 (impressive credentials)
• Cost: 12/15 ($425,000 - within budget)
• References: 9/10 (strong recommendations, verified)

Strengths: Proven track record with banks, qualified trainers, detailed implementation plan
Concerns: Slightly higher cost than competitors

2. Professional Development Corp
Score: 82/100
• Total cost: $385,000 (lower than Excellence)
• Good methodology but less banking-specific experience
• Trainers have fewer certifications

3. SkillBuild Solutions
Score: 75/100
• Lowest cost: $365,000
• Limited experience with organizations our size
• Generic curriculum requires more customization

COMMITTEE RECOMMENDATION:
Award contract to Excellence Training Institute

Justification:
• Highest overall score (88/100)
• Specialized banking industry experience
• Superior trainer qualifications
• Comprehensive post-training support included
• Strong client references from similar projects
• $425,000 investment represents good value despite not being lowest bid

The $40,000 difference from lowest bidder is offset by:
- 6 months free LMS access ($15,000 value)
- Post-training consultation ($10,000 value)
- Higher likelihood of successful outcomes

NEXT STEPS:
1. Obtain executive approval
2. Negotiate final terms
3. Execute contract by March 15
4. Begin needs assessment week of March 18

Request approval to proceed with Excellence Training Institute.

Attachments:
- Complete scoring matrices
- All proposal documents
- Reference check summaries`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'What is the total budget range for the project?',
        options: ['$350,000-$425,000', '$350,000-$450,000', '$385,000-$450,000', '$365,000-$425,000'],
        correctAnswer: 1,
        explanation: '"BUDGET: $350,000 - $450,000".',
      },
      {
        id: 'q002',
        question: 'How many employees will receive customer service training?',
        options: ['50', '150', '300', '500'],
        correctAnswer: 2,
        explanation: '"Customer Service Excellence (Target: 300 staff)".',
      },
      {
        id: 'q003',
        question: 'What is Excellence Training Institute\'s total proposed cost?',
        options: ['$365,000', '$385,000', '$425,000', '$450,000'],
        correctAnswer: 2,
        explanation: '"TOTAL INVESTMENT: $425,000".',
      },
      {
        id: 'q004',
        question: 'Which criterion has the highest weight in evaluation?',
        options: ['Relevant experience', 'Methodology', 'Qualifications', 'Cost'],
        correctAnswer: 0,
        explanation: '"Relevant experience (30%)" cao nhất.',
      },
      {
        id: 'q005',
        question: 'What is Excellence Training\'s overall score?',
        options: ['75/100', '82/100', '88/100', '95/100'],
        correctAnswer: 2,
        explanation: '"Score: 88/100".',
      },
      {
        id: 'q006',
        question: 'Why does the committee recommend Excellence despite higher cost?',
        options: ['Lowest price', 'Only option available', 'Best value with included services', 'Required by regulations'],
        correctAnswer: 2,
        explanation: 'Committee giải thích "$40,000 difference... is offset by" các dịch vụ kèm theo.',
      },
      {
        id: 'q007',
        question: 'How long is the leadership development program?',
        options: ['3 months', '4 months', '6 months', '12 months'],
        correctAnswer: 2,
        explanation: '"Duration: 6 months" cho leadership program.',
      },
    ],
  },
  {
    id: 'p7_a004',
    level: 'advanced',
    type: 'triple',
    category: 'Research Report & Analysis',
    passages: [
      {
        title: 'Market Research Report',
        content: `MARKET RESEARCH REPORT: ELECTRIC VEHICLE INDUSTRY

Prepared by: Global Market Insights
Date: January 2024

EXECUTIVE SUMMARY:
The global electric vehicle (EV) market is projected to reach $1.3 trillion by 2030, growing at 18.2% CAGR from 2024-2030. This growth is driven by environmental regulations, technological advances, and changing consumer preferences.

MARKET ANALYSIS:

Regional Breakdown (2023):
• Asia-Pacific: 55% market share ($385 billion)
• Europe: 25% market share ($175 billion)
• North America: 15% market share ($105 billion)
• Rest of World: 5% market share ($35 billion)

Consumer Segments:
1. Early Adopters (Current: 25% of buyers)
   - Environmentally conscious
   - Technology enthusiasts
   - Higher income bracket ($100K+)
   - Willing to pay premium prices

2. Mainstream Buyers (Current: 60% of buyers)
   - Value-oriented
   - Concerned about operating costs
   - Seeking $30K-$50K price range
   - Need charging infrastructure confidence

3. Late Majority (Current: 15% of buyers)
   - Price-sensitive
   - Waiting for proven reliability
   - Require extensive charging network
   - Prefer traditional brands entering EV market

KEY TRENDS:

Battery Technology:
• Energy density improving 8% annually
• Cost declining from $140/kWh (2023) to projected $90/kWh (2026)
• New solid-state batteries expected 2027-2028
• Charging time reduced to 15 minutes for 80% charge

Infrastructure Development:
• Public charging stations: 2.5 million globally (2023)
• Projected 12 million stations by 2030
• Investment: $180 billion in charging infrastructure 2024-2030

Government Policies:
• 25 countries announced 2030-2040 ICE vehicle bans
• Tax incentives: Average $7,500 per EV purchase
• Emission standards driving manufacturer investment

COMPETITIVE LANDSCAPE:

Market Leaders (2023 Sales):
1. Tesla: 1.8 million units (20% market share)
2. BYD: 1.6 million units (18% market share)
3. Volkswagen Group: 1.1 million units (12% market share)
4. Others: 4.5 million units (50% market share)

CHALLENGES:
• Raw material supply constraints (lithium, cobalt)
• Grid capacity limitations in emerging markets
• Price parity with ICE vehicles not yet achieved
• Consumer range anxiety persists

OPPORTUNITIES:
• Commercial vehicle electrification (trucks, buses)
• Battery second-life applications
• Vehicle-to-grid technology
• Autonomous EV integration

FORECAST:
Global EV sales projected to reach 45 million units by 2030, representing 50% of new vehicle sales worldwide.`
      },
      {
        title: 'Strategy Memo',
        content: `CONFIDENTIAL MEMORANDUM

TO: Board of Directors
FROM: CEO Strategic Planning Committee
DATE: February 10, 2024
RE: Proposed Electric Vehicle Market Entry Strategy

RECOMMENDATION: 
Enter the electric vehicle market with initial $2.5 billion investment over 3 years, targeting the mainstream buyer segment with vehicles priced $35,000-$45,000.

STRATEGIC RATIONALE:

Market Opportunity:
• Mainstream segment (60% of buyers) currently underserved
• Our brand strength in reliability aligns with segment priorities
• Manufacturing expertise reduces entry barriers
• Existing dealer network provides distribution advantage

Target Launch: Q4 2026 (33 months from approval)

Product Strategy:
• Initial models: Mid-size SUV and sedan
• Range: 300+ miles per charge
• Price positioning: $35,000-$45,000 (after incentives)
• Differentiation: Superior build quality and 10-year warranty

Investment Breakdown:
• R&D and engineering: $800 million
• Manufacturing facility conversion: $1.2 billion
• Charging infrastructure partnership: $200 million
• Marketing and brand building: $300 million

Revenue Projections (Assumes market entry 2027):
• 2027: 25,000 units - $1.0 billion revenue
• 2028: 75,000 units - $2.9 billion revenue
• 2029: 150,000 units - $5.7 billion revenue
• 2030: 225,000 units - $8.5 billion revenue

Break-even: Q3 2029

RISK ASSESSMENT:

High Risks:
• Technology evolution outpacing our development
• Intensifying competition from established EV manufacturers
• Regulatory changes affecting incentives

Medium Risks:
• Supply chain disruptions for batteries
• Consumer adoption slower than projected
• Charging infrastructure development delays

Risk Mitigation:
• Partnership with leading battery supplier (negotiations underway)
• Flexible manufacturing for both EV and ICE (3-year transition)
• Charging network collaboration with major providers
• Modular platform allowing rapid updates

COMPETITIVE ADVANTAGES:
1. Established brand reputation for reliability
2. Existing 2,500 dealer service network
3. Manufacturing scale efficiencies
4. Customer loyalty base of 8 million owners

ALTERNATIVES CONSIDERED:
A. Delayed entry (2028+): Risk of market share loss
B. Premium segment focus: Limited volume potential
C. Partnership/acquisition: High costs, integration challenges

EXECUTIVE COMMITTEE VOTE:
For: 8 members
Against: 1 member
Abstain: 1 member

REQUEST: Board approval to proceed with $2.5B investment program and Q4 2026 target launch date.

Next steps upon approval:
1. Secure battery supply agreements
2. Begin facility conversion (Detroit plant)
3. Recruit EV engineering team (200+ specialists)
4. Initiate consumer research and vehicle design
5. Establish charging infrastructure partnerships

Decision required by: March 1, 2024
Delay beyond this date pushes launch to 2027, reducing competitive position.`
      },
      {
        title: 'Financial Analysis',
        content: `INVESTMENT COMMITTEE REPORT

Subject: EV Market Entry Financial Evaluation
Date: February 15, 2024
Prepared by: CFO Office

FINANCIAL VIABILITY ASSESSMENT:

Investment Summary:
Total Capital Required: $2.5 billion over 36 months
Funding Sources:
• Operating cash flow: $1.5 billion
• Credit facility drawdown: $1.0 billion
• Current cash reserves: $3.2 billion (sufficient)

Impact on Financial Metrics:

Return on Investment (ROI):
• 5-year ROI: 22% (above 18% hurdle rate)
• NPV @ 10% discount rate: $1.8 billion (positive)
• IRR: 24.5% (acceptable)

Profitability Timeline:
• Gross margin Year 1 (2027): -15% (investment phase)
• Gross margin Year 3 (2029): +8% (approaching breakeven)
• Gross margin Year 5 (2031): +18% (target level)
• Operating margin Year 5: +12%

Cash Flow Implications:
2024-2026: -$2.5B cumulative (investment)
2027: -$400M (launch costs exceed revenue)
2028: +$150M (positive cash generation begins)
2029-2030: +$2.1B cumulative

Balance Sheet Impact:
• Debt/Equity ratio increases from 0.4 to 0.65 (within 0.8 limit)
• Interest coverage ratio: 8.5x (healthy)
• Current ratio maintained above 1.5

Scenario Analysis:

Base Case (60% probability):
• Market share: 2.5% by 2030
• Revenue: $8.5B annually by 2030
• 5-year NPV: $1.8B

Optimistic Case (20% probability):
• Market share: 3.5% by 2030
• Revenue: $11.9B annually
• 5-year NPV: $3.2B

Conservative Case (20% probability):
• Market share: 1.5% by 2030
• Revenue: $5.1B annually
• 5-year NPV: $400M

Risk-Adjusted NPV: $1.6B (weighted average)

COMPETITIVE FINANCIAL COMPARISON:

Our Metrics vs. Successful EV Entrants:
• Investment per unit capacity: $11,000 (Industry avg: $12,500) ✓
• Time to breakeven: 33 months (Industry avg: 36 months) ✓
• Marketing spend ratio: 12% (Industry avg: 15%) ✓

SENSITIVITY ANALYSIS:

Key Variables Impact on NPV:
• Battery costs -10%: NPV increases $300M
• Market share -1%: NPV decreases $600M
• Launch delay 6 months: NPV decreases $450M
• Incentive reduction 50%: NPV decreases $500M

FINANCING RECOMMENDATION:

Preferred Structure:
• Year 1: $900M (internal cash + $400M credit line)
• Year 2: $1.0B (operating cash + $350M credit line)
• Year 3: $600M (operating cash + $250M credit line)

This structure:
• Preserves credit rating (projected A- stable)
• Maintains dividend capacity
• Provides strategic flexibility

COMMITTEE ASSESSMENT:

Strengths:
✓ Positive NPV under all scenarios
✓ Acceptable risk-return profile
✓ Manageable financing requirements
✓ Strategic alignment with industry transition

Concerns:
⚠ Concentrated execution risk in 2026-2027
⚠ Dependency on government incentive continuation
⚠ Battery supply cost volatility

RECOMMENDATION: APPROVE with following conditions:
1. Secure fixed-price battery contracts before facility construction
2. Establish quarterly review gates for investment tranches
3. Maintain $1B contingency reserve
4. Develop exit strategy if 2028 targets missed by >30%

VOTE: 6 Approve, 1 Conditional Approval, 0 Reject

The investment meets our strategic and financial criteria. Risk mitigation measures are adequate given potential returns.`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'What is the projected global EV market value by 2030?',
        options: ['$700 billion', '$1.0 trillion', '$1.3 trillion', '$1.8 trillion'],
        correctAnswer: 2,
        explanation: '"reach $1.3 trillion by 2030".',
      },
      {
        id: 'q002',
        question: 'What is the total proposed investment for market entry?',
        options: ['$1.5 billion', '$2.0 billion', '$2.5 billion', '$3.0 billion'],
        correctAnswer: 2,
        explanation: '"$2.5 billion investment over 3 years".',
      },
      {
        id: 'q003',
        question: 'Which market segment is the company targeting?',
        options: ['Early Adopters', 'Mainstream Buyers', 'Late Majority', 'All segments'],
        correctAnswer: 1,
        explanation: '"targeting the mainstream buyer segment".',
      },
      {
        id: 'q004',
        question: 'When is the target launch date?',
        options: ['Q4 2025', 'Q4 2026', 'Q4 2027', 'Q4 2028'],
        correctAnswer: 1,
        explanation: '"Target Launch: Q4 2026".',
      },
      {
        id: 'q005',
        question: 'When does the company expect to break even?',
        options: ['2027', 'Q3 2029', '2030', '2031'],
        correctAnswer: 1,
        explanation: '"Break-even: Q3 2029".',
      },
      {
        id: 'q006',
        question: 'What is the 5-year ROI in the base case?',
        options: ['18%', '22%', '24.5%', '30%'],
        correctAnswer: 1,
        explanation: '"5-year ROI: 22%".',
      },
      {
        id: 'q007',
        question: 'What is the risk-adjusted NPV?',
        options: ['$400M', '$1.6B', '$1.8B', '$3.2B'],
        correctAnswer: 1,
        explanation: '"Risk-Adjusted NPV: $1.6B".',
      },
      {
        id: 'q008',
        question: 'What percentage of the EV market does mainstream buyers represent?',
        options: ['15%', '25%', '60%', '100%'],
        correctAnswer: 2,
        explanation: '"Mainstream Buyers (Current: 60% of buyers)".',
      },
    ],
  },
  {
    id: 'p7_a005',
    level: 'advanced',
    type: 'triple',
    category: 'Crisis Management',
    passages: [
      {
        title: 'Press Release',
        content: `FOR IMMEDIATE RELEASE

FreshFood Markets Initiates Voluntary Product Recall

SEATTLE, WA - March 15, 2024 - FreshFood Markets, Inc. today announced a voluntary recall of its "Garden Fresh" brand salad kits due to potential Listeria contamination discovered during routine testing at our Sacramento facility.

Products Affected:
• Garden Fresh Caesar Salad Kit (12 oz)
• Garden Fresh Southwest Salad Kit (14 oz)
• Garden Fresh Asian Blend Salad Kit (11 oz)

Production Dates: February 25 - March 10, 2024
Affected States: CA, OR, WA, NV, AZ (West Coast distribution)
UPC Codes: Available at www.freshfoodmarkets.com/recall

Consumer Action Required:
Customers who purchased these products should NOT consume them and should:
1. Return products to place of purchase for full refund
2. Dispose of products immediately if return not possible
3. Contact FreshFood customer service: 1-800-555-FOOD

Important: Listeria can cause serious illness, particularly in pregnant women, elderly, and those with weakened immune systems. Symptoms include fever, muscle aches, and gastrointestinal issues.

Scale: Approximately 75,000 units distributed to 450 retail locations

No Illnesses Reported: To date, no confirmed illnesses have been associated with these products. The recall is purely precautionary based on routine testing.

Company Statement:
"Consumer safety is our top priority," said Thomas Anderson, CEO of FreshFood Markets. "We discovered this issue through our rigorous quality control testing before any illnesses were reported. We're working closely with the FDA and taking every precaution."

Production Status:
• Sacramento facility operations suspended pending investigation
• Enhanced testing protocols implemented at all facilities
• Third-party food safety audit initiated

Investigation:
The company is working with FDA and state health departments to determine the contamination source. Preliminary findings suggest an isolated incident in one production line.

Consumer Assistance:
FreshFood has established a dedicated recall hotline (1-800-555-FOOD) staffed 24/7. Customers can also visit www.freshfoodmarkets.com/recall for:
• Product identification tools
• Store locator for returns
• Latest updates
• Health information

Retailer Notification:
All affected retailers have been notified and are removing products from shelves. Point-of-sale systems updated to prevent further sales.

For media inquiries:
Patricia Williams, VP Communications
FreshFood Markets, Inc.
Email: media@freshfoodmarkets.com
Phone: (206) 555-0199

###`
      },
      {
        title: 'Internal Crisis Management Email',
        content: `URGENT - CRISIS RESPONSE TEAM

From: Thomas Anderson, CEO
To: Executive Leadership Team
Date: March 15, 2024, 6:00 AM
Subject: CRISIS ALERT - Product Recall - All Hands Required

Team,

At 4:30 AM today, our Sacramento QC lab confirmed Listeria presence in Garden Fresh salad samples. We are initiating immediate recall protocols.

IMMEDIATE ACTIONS REQUIRED:

Patricia (Communications): 
✓ Press release issued at 5:45 AM (attached)
✓ Media monitoring activated
✓ Hotline staffed and operational
□ Prepare for potential media interviews today
□ Social media response team briefed - monitoring started
□ Coordinate with legal on messaging

Michael (Operations):
✓ Sacramento facility shut down 5:00 AM
✓ Retailer notification in progress (450 stores)
□ Coordinate product pickup from stores by EOD
□ Implement enhanced testing all facilities by March 18
□ Third-party audit scheduled for March 20

Jennifer (Legal):
□ FDA notification completed and confirmed
□ State health department notifications (5 states)
□ Review refund procedures for consistency
□ Monitor for potential litigation
□ Ensure compliance with recall regulations

David (Finance):
□ Estimated financial impact by noon today
□ Reserve establishment for recall costs
□ Insurance claim preparation
□ Investor communication preparation (pre-market open Monday)

Sarah (Customer Service):
✓ Recall hotline activated (24/7 staffing)
✓ Website updated with recall information
□ Email campaign to loyalty program members (2M customers)
□ Monitor social media customer concerns
□ Daily summary reports of customer contacts

Robert (Supply Chain):
□ Stop all shipments of affected products immediately
□ Trace contamination source with QC team
□ Supplier audit of lettuce vendors
□ Alternative sourcing plan if needed

CRISIS RESPONSE SCHEDULE:

Today (March 15):
• 8:00 AM: Full crisis team meeting (Conference Room A)
• 12:00 PM: Financial impact assessment due
• 3:00 PM: Progress update meeting
• 6:00 PM: Evening briefing

Ongoing:
• Daily 8 AM and 6 PM crisis team meetings
• Hourly situation reports from all departments
• FDA liaison updates (Jennifer coordinates)

KEY MESSAGES (Consistent across all communications):
1. No illnesses reported - precautionary recall
2. Discovered through our own testing (demonstrates vigilance)
3. Consumer safety is absolute priority
4. Full cooperation with authorities
5. Enhanced protocols being implemented

MEDIA STRATEGY:
• Proactive, transparent, factual
• CEO available for key media interviews if needed
• No speculation on contamination source until investigation complete
• Emphasize: Strong food safety culture, routine testing success

CRITICAL SUCCESS FACTORS:
• Speed: Complete retail pickup within 48 hours
• Communication: Clear, consistent, accessible
• Transparency: Regular updates even without new information
• Resolution: Identify and eliminate source quickly

FINANCIAL PRELIMINARY ESTIMATES:
• Product recall and destruction: $2.5M
• Facility downtime: $400K per week
• Potential sales impact: TBD (depends on duration)
• Insurance coverage: $5M food safety policy (deductible $500K)

BOARD NOTIFICATION:
Emergency board call scheduled for 4:00 PM today. I'll brief them on situation, actions taken, and go-forward plan.

This is our most serious food safety incident in 15 years. How we handle the next 72 hours will define our reputation. I need everyone fully focused and committed.

Questions or concerns - my cell is on 24/7.

Tom

Thomas Anderson
Chief Executive Officer
FreshFood Markets, Inc.
Direct: (206) 555-0100
Cell: (206) 555-0101`
      },
      {
        title: '48-Hour Status Report',
        content: `CRISIS MANAGEMENT STATUS REPORT

To: Board of Directors
From: Crisis Response Team
Date: March 17, 2024 (48 hours post-announcement)
Subject: Product Recall - Situation Update

EXECUTIVE SUMMARY:
Recall proceeding effectively. No illness reports. Public response generally positive due to proactive approach. Operations resumption expected within 10 days pending investigation completion.

RECALL METRICS (as of 8:00 AM, March 17):

Product Recovery:
• Units recalled: 75,000
• Units recovered: 68,250 (91%)
• Store compliance: 448 of 450 (99.6%)
• Remaining 2 stores: Alaska remote locations (coordinating)

Consumer Response:
• Hotline calls received: 3,247
• Product returns: 1,180 (as of yesterday)
• Website visits (recall page): 127,000
• Email inquiries: 892
• Social media mentions: 8,500 (87% neutral/positive)

Customer Service Performance:
• Average wait time: 45 seconds (target: <60 sec)
• Call resolution rate: 95% first contact
• Customer satisfaction: 4.2/5.0 (given circumstances)
• Common questions: Refund process (45%), symptom concerns (30%), product identification (25%)

INVESTIGATION PROGRESS:

Root Cause Analysis:
• Source identified: Contaminated water line in Line 3, Sacramento facility
• Contributing factor: Maintenance oversight during February facility upgrade
• Isolated incident: No contamination found in other lines or facilities
• Timeline: Contamination occurred Feb 23-24, detected March 14

Corrective Actions Implemented:
✓ Sacramento Line 3 equipment removed and replaced
✓ Enhanced water testing protocols all facilities (daily vs. weekly)
✓ Third-party audit completed March 16 - preliminary findings satisfactory
✓ Employee retraining on sanitation procedures initiated
✓ Maintenance oversight procedures strengthened

FDA Coordination:
• Daily updates provided to FDA
• Inspection scheduled for March 20-22
• Cooperative relationship maintained
• No enforcement action indicated at this time

FINANCIAL IMPACT UPDATE:

Direct Costs (actual):
• Product disposal: $2.1M
• Retailer credits and logistics: $800K
• Consumer refunds (projected): $350K
• Additional testing and audits: $150K
• Overtime and hotline: $75K
Total Direct: $3.475M

Indirect Costs (estimated):
• Facility downtime (10 days): $1.0M
• Sales impact (conservative 2-week reduction): $3.5M
• Brand recovery marketing: $1.5M
Total Indirect: $6.0M

Grand Total Estimated Impact: $9.475M
Insurance Recovery: ($4.5M)
Net Cost: $4.975M

Impact on Q1 Earnings: -$0.08 per share (manageable)

COMMUNICATIONS ASSESSMENT:

Media Coverage Analysis:
• Total articles/broadcasts: 127
• Sentiment: 65% neutral, 25% positive, 10% negative
• Key themes: "Responsible action," "No illnesses," "Precautionary"
• Negative coverage: Limited to food safety advocates calling for industry reform

Positive Indicators:
• CEO interview (local news) viewed 450K times - well received
• Social media: 73% of comments praise proactive approach
• Industry analysts: Positive commentary on crisis management
• Competitor response: None attempting to capitalize

Crisis Communication Success Factors:
• Speed: First to announce before media discovery
• Transparency: Regular updates maintained credibility
• Accessibility: 24/7 hotline and responsive social media
• Tone: Appropriate concern without panic

STAKEHOLDER MANAGEMENT:

Customers:
• Loyalty program: 15% redemption of $5 apology coupons (higher than expected)
• Net Promoter Score impact: -2 points (minimal damage)
• Customer retention: 98.5% (tracking normally)

Retail Partners:
• Strong cooperation from all major chains
• Relationships maintained/strengthened
• No threats of de-listing
• Several expressed appreciation for swift action

Suppliers:
• Lettuce suppliers: Full cooperation with audits
• No supply chain disruptions
• Enhanced vendor standards being negotiated

Employees:
• Sacramento facility: 280 employees on paid leave during shutdown
• Company-wide morale: Supportive, proud of response
• Minimal turnover concerns

Investors:
• Stock price: -3.2% (market open March 15), recovered to -1.1% (March 17)
• Analyst calls: Generally supportive of management response
• No significant institutional selling
• Investor relations: 45 inquiries handled professionally

OPERATIONS RECOVERY PLAN:

Sacramento Facility:
• Target reopening: March 25 (pending FDA inspection clearance)
• Phased restart: Line 1 & 2 first, Line 3 replacement complete by April 1
• Production capacity: 85% by March 30, 100% by April 7
• Enhanced monitoring: Daily testing for 90 days

Product Relaunch:
• Garden Fresh line: Resume production March 26
• Retail restocking: Begin March 28
• Marketing support: "$1 off" coupons, April 1-30
• Quality seal: New "Enhanced Safety Tested" label

Long-term Improvements:
• Capital investment: $3M in advanced testing equipment (all facilities)
• Process upgrade: Automated monitoring systems by Q3
• Certification: Pursuing SQF Level 3 certification (highest food safety standard)

LESSONS LEARNED (Preliminary):

What Worked:
• Routine testing caught issue before illness
• Crisis plan execution: Smooth, coordinated
• Communication: Proactive and transparent
• Team performance: Professional under pressure

Areas for Improvement:
• Maintenance oversight protocols need strengthening
• Earlier detection possible with enhanced monitoring
• Crisis team training: More frequent drills needed
• Retailer communication: Could be faster

NEXT STEPS (72-Hour Plan):

Immediate (March 17-19):
• Complete product recovery (target 95%+)
• FDA inspection preparation
• Employee communications (Sacramento facility)
• Continue customer outreach

Short-term (March 20-26):
• FDA inspection and resolution
• Facility reopening approval
• Production restart
• Retail relationship maintenance

RISK ASSESSMENT:

Remaining Risks:
• FDA inspection findings (LOW - confident in corrective actions)
• Illness reports surface (VERY LOW - 14-day incubation period nearly passed)
• Copycat claims/litigation (MEDIUM - monitoring closely)
• Competitor opportunism (LOW - market response minimal)

Overall Assessment: CRISIS CONTAINED, RECOVERING WELL

BOARD RECOMMENDATION:
Continue current crisis management approach. Maintain transparency. Proceed with facility restart pending FDA clearance. Implement long-term improvements as outlined.

The team has executed exceptionally well. Brand damage appears minimal. Financial impact is within manageable range. We expect full operational recovery by early April.

Respectfully submitted,

Crisis Response Team
FreshFood Markets, Inc.`
      }
    ],
    questions: [
      {
        id: 'q001',
        question: 'How many units were recalled?',
        options: ['45,000', '68,250', '75,000', '127,000'],
        correctAnswer: 2,
        explanation: '"Units recalled: 75,000".',
      },
      {
        id: 'q002',
        question: 'How many states were affected by the recall?',
        options: ['3', '5', '7', '10'],
        correctAnswer: 1,
        explanation: '"Affected States: CA, OR, WA, NV, AZ" = 5 bang.',
      },
      {
        id: 'q003',
        question: 'What was the source of contamination?',
        options: ['Lettuce supplier', 'Contaminated water line', 'Packaging material', 'Employee error'],
        correctAnswer: 1,
        explanation: '"Contaminated water line in Line 3".',
      },
      {
        id: 'q004',
        question: 'What is the total estimated financial impact?',
        options: ['$3.475M', '$4.975M', '$6.0M', '$9.475M'],
        correctAnswer: 3,
        explanation: '"Grand Total Estimated Impact: $9.475M".',
      },
      {
        id: 'q005',
        question: 'What percentage of products were recovered after 48 hours?',
        options: ['85%', '87%', '91%', '95%'],
        correctAnswer: 2,
        explanation: '"Units recovered: 68,250 (91%)".',
      },
      {
        id: 'q006',
        question: 'When is the facility target reopening date?',
        options: ['March 15', 'March 20', 'March 25', 'April 1'],
        correctAnswer: 2,
        explanation: '"Target reopening: March 25".',
      },
      {
        id: 'q007',
        question: 'What was the initial stock price impact?',
        options: ['-1.1%', '-2.0%', '-3.2%', '-5.0%'],
        correctAnswer: 2,
        explanation: '"Stock price: -3.2% (market open March 15)".',
      },
      {
        id: 'q008',
        question: 'How many hotline calls were received in 48 hours?',
        options: ['892', '1,180', '3,247', '8,500'],
        correctAnswer: 2,
        explanation: '"Hotline calls received: 3,247".',
      },
      {
        id: 'q009',
        question: 'What percentage of media coverage was neutral or positive?',
        options: ['65%', '73%', '87%', '90%'],
        correctAnswer: 3,
        explanation: '65% neutral + 25% positive = 90%.',
      },
    ],
  },
];

// === STUDY PLANS ===
export interface StudyPlan {
  id: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  title: string;
  duration: number; // days
  targetScore: string;
  description: string;
  weeks: {
    week: number;
    focus: string;
    days: {
      day: number;
      tasks: string[];
    }[];
  }[];
}

export const STUDY_PLANS: StudyPlan[] = [
  {
    id: 'plan_beginner',
    level: 'beginner',
    title: 'Lộ trình 30 ngày - Mục tiêu 300-400 điểm',
    duration: 30,
    targetScore: '300-400',
    description: 'Phù hợp cho người mới bắt đầu, chưa có kiến thức TOEIC. Tập trung vào từ vựng cơ bản và ngữ pháp nền tảng.',
    weeks: [
      {
        week: 1,
        focus: 'Làm quen với TOEIC & Từ vựng cơ bản',
        days: [
          {
            day: 1,
            tasks: [
              'Tìm hiểu cấu trúc bài thi TOEIC (7 Parts)',
              'Học 20 từ vựng beginner - Business (v001-v020)',
              'Ngữ pháp: Present Simple (g001)',
            ],
          },
          {
            day: 2,
            tasks: [
              'Học 20 từ vựng beginner - Office (v021-v040)',
              'Ôn lại Present Simple với bài tập',
              'Làm 5 câu Part 5 beginner',
            ],
          },
          {
            day: 3,
            tasks: [
              'Học 20 từ vựng beginner - Technology (v041-v060)',
              'Ngữ pháp: Present Continuous (g002)',
              'Đọc 1 bài Part 7 beginner',
            ],
          },
          {
            day: 4,
            tasks: [
              'Học 20 từ vựng beginner - Marketing (v061-v080)',
              'Ôn Present Simple & Present Continuous',
              'Làm 5 câu Part 5 beginner',
            ],
          },
          {
            day: 5,
            tasks: [
              'Ôn lại 80 từ vựng đã học tuần 1',
              'Ngữ pháp: Past Simple (g003)',
              'Làm 10 câu Part 5 beginner',
            ],
          },
          {
            day: 6,
            tasks: [
              'Ôn tất cả ngữ pháp tuần 1',
              'Đọc 2 bài Part 7 beginner',
              'Làm bài tập tổng hợp',
            ],
          },
          {
            day: 7,
            tasks: [
              'Nghỉ ngơi hoặc ôn lại phần yếu',
              'Xem lại các lỗi đã mắc phải',
            ],
          },
        ],
      },
      {
        week: 2,
        focus: 'Mở rộng từ vựng & Thì tương lai',
        days: [
          {
            day: 8,
            tasks: [
              'Học 20 từ vựng beginner - Finance (v081-v100)',
              'Ngữ pháp: Future (will/going to) (g004)',
              'Làm 5 câu Part 5 beginner',
            ],
          },
          {
            day: 9,
            tasks: [
              'Học 20 từ vựng beginner - HR (v101-v120)',
              'Ôn lại các thì đã học',
              'Đọc 1 bài Part 7 beginner',
            ],
          },
          {
            day: 10,
            tasks: [
              'Học 20 từ vựng beginner - Travel (v121-v140)',
              'Ngữ pháp: Present Perfect (g005)',
              'Làm 5 câu Part 5 beginner',
            ],
          },
          {
            day: 11,
            tasks: [
              'Học 20 từ vựng beginner - Sales (v141-v160)',
              'Ngữ pháp: Prepositions of Time (g006)',
              'Làm 10 câu Part 5 beginner',
            ],
          },
          {
            day: 12,
            tasks: [
              'Học 20 từ vựng beginner - Customer Service (v161-v180)',
              'Ngữ pháp: Articles (a/an/the) (g007)',
              'Đọc 1 bài Part 7 beginner',
            ],
          },
          {
            day: 13,
            tasks: [
              'Ôn lại 100 từ vựng tuần 2',
              'Làm bài tập tổng hợp tất cả ngữ pháp',
              'Làm 15 câu Part 5 beginner',
            ],
          },
          {
            day: 14,
            tasks: [
              'Mini test: 20 câu Part 5 + 2 bài Part 7',
              'Xem lại đáp án và giải thích',
            ],
          },
        ],
      },
      {
        week: 3,
        focus: 'Hoàn thiện ngữ pháp cơ bản',
        days: [
          {
            day: 15,
            tasks: [
              'Học 20 từ vựng beginner (v181-v200)',
              'Ngữ pháp: Pronouns (g008)',
              'Làm 5 câu Part 5 beginner',
            ],
          },
          {
            day: 16,
            tasks: [
              'Ôn lại tất cả từ vựng beginner',
              'Ngữ pháp: Adjectives & Adverbs (g009)',
              'Làm 5 câu Part 5 beginner',
            ],
          },
          {
            day: 17,
            tasks: [
              'Ngữ pháp: Question Words (g010)',
              'Ngữ pháp: Comparatives & Superlatives (g011)',
              'Đọc 2 bài Part 7 beginner',
            ],
          },
          {
            day: 18,
            tasks: [
              'Ngữ pháp: There is/are (g012)',
              'Ngữ pháp: Modal Verbs (g013)',
              'Làm 10 câu Part 5 beginner',
            ],
          },
          {
            day: 19,
            tasks: [
              'Ngữ pháp: Prepositions of Place (g014)',
              'Ngữ pháp: Imperatives (g015)',
              'Làm 10 câu Part 5 beginner',
            ],
          },
          {
            day: 20,
            tasks: [
              'Ôn tất cả ngữ pháp beginner (g001-g015)',
              'Làm 20 câu Part 5 beginner',
              'Đọc 2 bài Part 7 beginner',
            ],
          },
          {
            day: 21,
            tasks: [
              'Practice test: 30 câu Part 5 + 3 bài Part 7',
              'Đánh giá tiến độ',
            ],
          },
        ],
      },
      {
        week: 4,
        focus: 'Luyện tập tổng hợp & Ôn tập',
        days: [
          {
            day: 22,
            tasks: [
              'Ôn lại các từ vựng beginner yếu',
              'Làm lại các bài tập Part 5 sai',
              'Đọc 2 bài Part 7 beginner',
            ],
          },
          {
            day: 23,
            tasks: [
              'Ôn tất cả ngữ pháp thì (g001-g005)',
              'Làm 15 câu Part 5 beginner hỗn hợp',
              'Đọc 1 bài Part 7 beginner',
            ],
          },
          {
            day: 24,
            tasks: [
              'Ôn tất cả ngữ pháp khác (g006-g015)',
              'Làm 15 câu Part 5 beginner hỗn hợp',
              'Đọc 1 bài Part 7 beginner',
            ],
          },
          {
            day: 25,
            tasks: [
              'Practice test: 40 câu Part 5 beginner',
              'Xem lại giải thích đáp án',
            ],
          },
          {
            day: 26,
            tasks: [
              'Ôn lại toàn bộ từ vựng beginner (200 từ)',
              'Đọc 3 bài Part 7 beginner',
            ],
          },
          {
            day: 27,
            tasks: [
              'Final review: Ôn tất cả ngữ pháp',
              'Làm 30 câu Part 5 beginner',
              'Đọc 2 bài Part 7 beginner',
            ],
          },
          {
            day: 28,
            tasks: [
              'Mock test: 40 câu Part 5 + 3 bài Part 7 (tính giờ)',
              'Đánh giá kết quả và xác định điểm yếu',
            ],
          },
        ],
      },
      {
        week: 5,
        focus: 'Hoàn thiện và chuẩn bị thi',
        days: [
          {
            day: 29,
            tasks: [
              'Ôn lại các phần yếu từ mock test',
              'Học thêm strategies làm bài',
              'Luyện tốc độ làm bài',
            ],
          },
          {
            day: 30,
            tasks: [
              'Nghỉ ngơi và tự tin',
              'Xem lại tips & strategies',
              'Chuẩn bị tinh thần cho kỳ thi',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'plan_intermediate',
    level: 'intermediate',
    title: 'Lộ trình 60 ngày - Mục tiêu 500-650 điểm',
    duration: 60,
    targetScore: '500-650',
    description: 'Phù hợp cho người đã có nền tảng cơ bản, muốn nâng cao kỹ năng và đạt điểm trung cấp cao.',
    weeks: [
      {
        week: 1,
        focus: 'Review cơ bản & Bắt đầu Intermediate',
        days: [
          {
            day: 1,
            tasks: [
              'Review beginner grammar (g001-g015)',
              'Học 30 từ vựng intermediate - Business (v101-v130)',
              'Làm 10 câu Part 5 intermediate',
            ],
          },
          {
            day: 2,
            tasks: [
              'Học 30 từ vựng intermediate - Technology (v131-v160)',
              'Ngữ pháp: Past Continuous (g101)',
              'Đọc 1 bài Part 7 intermediate',
            ],
          },
          {
            day: 3,
            tasks: [
              'Học 30 từ vựng intermediate - Finance (v161-v190)',
              'Ngữ pháp: Past Perfect (g102)',
              'Làm 10 câu Part 5 intermediate',
            ],
          },
          {
            day: 4,
            tasks: [
              'Học 30 từ vựng intermediate - Marketing (v191-v220)',
              'Ngữ pháp: Present Perfect Continuous (g103)',
              'Đọc 1 bài Part 7 intermediate',
            ],
          },
          {
            day: 5,
            tasks: [
              'Học 30 từ vựng intermediate - HR (v221-v250)',
              'Ngữ pháp: Future Continuous & Future Perfect (g104)',
              'Làm 15 câu Part 5 intermediate',
            ],
          },
          {
            day: 6,
            tasks: [
              'Ôn lại 150 từ vựng đã học',
              'Ôn tất cả ngữ pháp tuần 1',
              'Đọc 2 bài Part 7 intermediate',
            ],
          },
          {
            day: 7,
            tasks: [
              'Practice test tuần 1',
              'Review lỗi sai',
            ],
          },
        ],
      },
      // Weeks 2-8 would follow similar pattern...
      {
        week: 2,
        focus: 'Passive Voice & Gerunds/Infinitives',
        days: [
          {
            day: 8,
            tasks: [
              'Học 30 từ vựng intermediate (v251-v280)',
              'Ngữ pháp: Passive Voice (g105)',
              'Làm 10 câu Part 5 intermediate',
            ],
          },
          {
            day: 9,
            tasks: [
              'Học 30 từ vựng intermediate (v281-v310)',
              'Ngữ pháp: Gerunds vs Infinitives (g106)',
              'Đọc 1 bài Part 7 intermediate',
            ],
          },
          {
            day: 10,
            tasks: [
              'Học 30 từ vựng intermediate (v311-v340)',
              'Ngữ pháp: Relative Clauses (g107)',
              'Làm 15 câu Part 5 intermediate',
            ],
          },
          {
            day: 11,
            tasks: [
              'Học 30 từ vựng intermediate (v341-v370)',
              'Ngữ pháp: Conditional Sentences (g108)',
              'Đọc 1 bài Part 7 intermediate',
            ],
          },
          {
            day: 12,
            tasks: [
              'Học 30 từ vựng intermediate (v371-v400)',
              'Ngữ pháp: Reported Speech (g109)',
              'Làm 20 câu Part 5 intermediate',
            ],
          },
          {
            day: 13,
            tasks: [
              'Ôn lại 150 từ vựng tuần 2',
              'Ôn tất cả ngữ pháp tuần 2',
              'Đọc 2 bài Part 7 intermediate',
            ],
          },
          {
            day: 14,
            tasks: [
              'Practice test tuần 2',
              'Review và phân tích lỗi',
            ],
          },
        ],
      },
      {
        week: 3,
        focus: 'Advanced Vocabulary & Conjunctions',
        days: [
          {
            day: 15,
            tasks: [
              'Học 30 từ vựng intermediate (v401-v430)',
              'Ngữ pháp: Conjunctions (g110)',
              'Làm 10 câu Part 5 intermediate',
            ],
          },
          {
            day: 16,
            tasks: [
              'Học 30 từ vựng intermediate (v431-v460)',
              'Ngữ pháp: Prepositions (g111)',
              'Đọc 1 bài Part 7 intermediate',
            ],
          },
          {
            day: 17,
            tasks: [
              'Học 30 từ vựng intermediate (v461-v490)',
              'Ngữ pháp: Word Forms (g112)',
              'Làm 15 câu Part 5 intermediate',
            ],
          },
          {
            day: 18,
            tasks: [
              'Học 30 từ vựng intermediate (v491-v520)',
              'Ngữ pháp: Parallel Structure (g113)',
              'Đọc 1 bài Part 7 intermediate',
            ],
          },
          {
            day: 19,
            tasks: [
              'Học 30 từ vựng intermediate (v521-v550)',
              'Ngữ pháp: Subject-Verb Agreement (g114)',
              'Làm 20 câu Part 5 intermediate',
            ],
          },
          {
            day: 20,
            tasks: [
              'Ôn lại 150 từ vựng tuần 3',
              'Ôn tất cả ngữ pháp tuần 3',
              'Đọc 2 bài Part 7 intermediate',
            ],
          },
          {
            day: 21,
            tasks: [
              'Practice test tuần 3',
              'Đánh giá tiến độ',
            ],
          },
        ],
      },
      {
        week: 4,
        focus: 'Part 7 Reading Skills',
        days: [
          {
            day: 22,
            tasks: [
              'Học 30 từ vựng intermediate (v551-v580)',
              'Reading strategies: Scanning & Skimming',
              'Đọc 3 bài Part 7 intermediate (single)',
            ],
          },
          {
            day: 23,
            tasks: [
              'Học 30 từ vựng intermediate (v581-v610)',
              'Ngữ pháp: Causative Verbs (g115)',
              'Đọc 2 bài Part 7 intermediate (double)',
            ],
          },
          {
            day: 24,
            tasks: [
              'Học 30 từ vựng intermediate (v611-v640)',
              'Reading: Understanding main ideas',
              'Làm 15 câu Part 5 intermediate',
            ],
          },
          {
            day: 25,
            tasks: [
              'Học 30 từ vựng intermediate (v641-v670)',
              'Reading: Inference questions',
              'Đọc 3 bài Part 7 intermediate',
            ],
          },
          {
            day: 26,
            tasks: [
              'Học 30 từ vựng intermediate (v671-v700)',
              'Làm 20 câu Part 5 intermediate',
              'Đọc 2 bài Part 7 intermediate',
            ],
          },
          {
            day: 27,
            tasks: [
              'Ôn lại 150 từ vựng tuần 4',
              'Practice test: Reading only',
            ],
          },
          {
            day: 28,
            tasks: [
              'Review tuần 4',
              'Nghỉ ngơi',
            ],
          },
        ],
      },
      {
        week: 5,
        focus: 'Intensive Practice - Part 5 & 6',
        days: [
          {
            day: 29,
            tasks: [
              'Ôn lại 200 từ vựng yếu nhất',
              'Làm 30 câu Part 5 intermediate',
              'Làm 2 bài Part 6 intermediate',
            ],
          },
          {
            day: 30,
            tasks: [
              'Học strategies Part 6',
              'Làm 25 câu Part 5 intermediate',
              'Làm 3 bài Part 6 intermediate',
            ],
          },
          {
            day: 31,
            tasks: [
              'Ôn ngữ pháp yếu',
              'Làm 30 câu Part 5 intermediate',
              'Đọc 2 bài Part 7 intermediate',
            ],
          },
          {
            day: 32,
            tasks: [
              'Full practice: Part 5 (30 câu) + Part 6 (4 bài)',
              'Review chi tiết',
            ],
          },
          {
            day: 33,
            tasks: [
              'Làm 25 câu Part 5 intermediate',
              'Đọc 3 bài Part 7 intermediate',
            ],
          },
          {
            day: 34,
            tasks: [
              'Mini mock test: Reading section',
              'Phân tích điểm mạnh/yếu',
            ],
          },
          {
            day: 35,
            tasks: [
              'Review tuần 5',
              'Nghỉ ngơi hoặc ôn lại',
            ],
          },
        ],
      },
      {
        week: 6,
        focus: 'Intensive Practice - Part 7',
        days: [
          {
            day: 36,
            tasks: [
              'Đọc 4 bài Part 7 single passage',
              'Làm 15 câu Part 5',
            ],
          },
          {
            day: 37,
            tasks: [
              'Đọc 3 bài Part 7 double passage',
              'Làm 15 câu Part 5',
            ],
          },
          {
            day: 38,
            tasks: [
              'Đọc 2 bài Part 7 triple passage',
              'Làm 20 câu Part 5',
            ],
          },
          {
            day: 39,
            tasks: [
              'Mixed Part 7 practice (2 single, 1 double, 1 triple)',
              'Làm 2 bài Part 6',
            ],
          },
          {
            day: 40,
            tasks: [
              'Speed reading practice: 5 bài Part 7 (tính giờ)',
              'Review strategies',
            ],
          },
          {
            day: 41,
            tasks: [
              'Full Reading test (75 phút)',
              'Đánh giá kết quả',
            ],
          },
          {
            day: 42,
            tasks: [
              'Review tuần 6',
              'Nghỉ ngơi',
            ],
          },
        ],
      },
      {
        week: 7,
        focus: 'Full Mock Tests',
        days: [
          {
            day: 43,
            tasks: [
              'Mock Test 1: Full Reading (75 phút)',
              'Review chi tiết tất cả câu sai',
            ],
          },
          {
            day: 44,
            tasks: [
              'Ôn lại kiến thức từ Mock Test 1',
              'Làm lại các câu sai',
            ],
          },
          {
            day: 45,
            tasks: [
              'Mock Test 2: Full Reading (75 phút)',
              'So sánh kết quả với Mock Test 1',
            ],
          },
          {
            day: 46,
            tasks: [
              'Ôn lại kiến thức từ Mock Test 2',
              'Tổng hợp các lỗi hay mắc',
            ],
          },
          {
            day: 47,
            tasks: [
              'Mock Test 3: Full Reading (75 phút)',
              'Đánh giá tiến bộ',
            ],
          },
          {
            day: 48,
            tasks: [
              'Review tất cả Mock Tests',
              'Xác định điểm yếu cần cải thiện',
            ],
          },
          {
            day: 49,
            tasks: [
              'Nghỉ ngơi',
              'Review nhẹ nhàng',
            ],
          },
        ],
      },
      {
        week: 8,
        focus: 'Final Review & Preparation',
        days: [
          {
            day: 50,
            tasks: [
              'Ôn lại tất cả từ vựng intermediate (700 từ)',
              'Review các ngữ pháp quan trọng nhất',
            ],
          },
          {
            day: 51,
            tasks: [
              'Làm 30 câu Part 5 mixed difficulty',
              'Đọc 4 bài Part 7 mixed types',
            ],
          },
          {
            day: 52,
            tasks: [
              'Ôn lại strategies cho tất cả Parts',
              'Làm 25 câu Part 5 + 3 bài Part 6',
            ],
          },
          {
            day: 53,
            tasks: [
              'Final Mock Test: Full Reading (75 phút)',
              'Đánh giá cuối cùng',
            ],
          },
          {
            day: 54,
            tasks: [
              'Review lần cuối các điểm yếu',
              'Ôn lại tips & tricks',
            ],
          },
          {
            day: 55,
            tasks: [
              'Làm bài tập nhẹ nhàng (20 câu Part 5)',
              'Đọc 2 bài Part 7',
            ],
          },
          {
            day: 56,
            tasks: [
              'Nghỉ ngơi hoàn toàn',
              'Xem lại một số tips quan trọng',
            ],
          },
        ],
      },
      {
        week: 9,
        focus: 'Tuần cuối - Sẵn sàng thi',
        days: [
          {
            day: 57,
            tasks: [
              'Ôn nhẹ vocabulary thường gặp',
              'Review grammar trọng tâm',
            ],
          },
          {
            day: 58,
            tasks: [
              'Làm 20 câu Part 5 warm-up',
              'Đọc 2 bài Part 7',
            ],
          },
          {
            day: 59,
            tasks: [
              'Xem lại test-taking strategies',
              'Chuẩn bị tinh thần',
            ],
          },
          {
            day: 60,
            tasks: [
              'Nghỉ ngơi đầy đủ',
              'Tự tin bước vào kỳ thi!',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'plan_advanced',
    level: 'advanced',
    title: 'Lộ trình 90 ngày - Mục tiêu 700-850 điểm',
    duration: 90,
    targetScore: '700-850',
    description: 'Phù hợp cho người đã có nền tảng tốt, muốn đạt điểm cao và thành thạo TOEIC.',
    weeks: [
      {
        week: 1,
        focus: 'Review & Advanced Grammar Foundation',
        days: [
          {
            day: 1,
            tasks: [
              'Review intermediate grammar (g101-g115)',
              'Học 40 từ vựng advanced - Business (v501-v540)',
              'Làm 15 câu Part 5 advanced',
            ],
          },
          {
            day: 2,
            tasks: [
              'Học 40 từ vựng advanced - Technology (v541-v580)',
              'Ngữ pháp: Subjunctive Mood (g201)',
              'Đọc 1 bài Part 7 advanced (single)',
            ],
          },
          {
            day: 3,
            tasks: [
              'Học 40 từ vựng advanced - Finance (v581-v620)',
              'Ngữ pháp: Advanced Passive (g202)',
              'Làm 15 câu Part 5 advanced',
            ],
          },
          {
            day: 4,
            tasks: [
              'Học 40 từ vựng advanced - Marketing (v621-v660)',
              'Ngữ pháp: Advanced Modals (g203)',
              'Đọc 1 bài Part 7 advanced (double)',
            ],
          },
          {
            day: 5,
            tasks: [
              'Học 40 từ vựng advanced - Management (v661-v700)',
              'Ngữ pháp: Advanced Tense Review (g204)',
              'Làm 20 câu Part 5 advanced',
            ],
          },
          {
            day: 6,
            tasks: [
              'Ôn lại 200 từ vựng đã học',
              'Ôn tất cả ngữ pháp tuần 1',
              'Đọc 1 bài Part 7 advanced (triple)',
            ],
          },
          {
            day: 7,
            tasks: [
              'Practice test tuần 1',
              'Phân tích chi tiết lỗi sai',
            ],
          },
        ],
      },
      {
        week: 2,
        focus: 'Advanced Structures & Collocations',
        days: [
          {
            day: 8,
            tasks: [
              'Học 40 từ vựng advanced (v701-v740)',
              'Ngữ pháp: Inversion (g205)',
              'Làm 15 câu Part 5 advanced',
            ],
          },
          {
            day: 9,
            tasks: [
              'Học 40 từ vựng advanced (v741-v780)',
              'Ngữ pháp: Cleft Sentences (g206)',
              'Đọc 1 bài Part 7 advanced (single)',
            ],
          },
          {
            day: 10,
            tasks: [
              'Học 40 từ vựng advanced (v781-v820)',
              'Advanced Collocations & Idioms',
              'Làm 20 câu Part 5 advanced',
            ],
          },
          {
            day: 11,
            tasks: [
              'Học 40 từ vựng advanced (v821-v860)',
              'Ngữ pháp: Reduced Clauses (g207)',
              'Đọc 1 bài Part 7 advanced (double)',
            ],
          },
          {
            day: 12,
            tasks: [
              'Học 40 từ vựng advanced (v861-v900)',
              'Ngữ pháp: Advanced Conditionals (g208)',
              'Làm 20 câu Part 5 advanced',
            ],
          },
          {
            day: 13,
            tasks: [
              'Ôn lại 200 từ vựng tuần 2',
              'Ôn tất cả ngữ pháp tuần 2',
              'Đọc 2 bài Part 7 advanced',
            ],
          },
          {
            day: 14,
            tasks: [
              'Practice test tuần 2',
              'Review và phân tích',
            ],
          },
        ],
      },
      {
        week: 3,
        focus: 'Business Vocabulary & Part 6 Mastery',
        days: [
          {
            day: 15,
            tasks: [
              'Học 40 từ vựng advanced (v901-v940)',
              'Business writing conventions',
              'Làm 3 bài Part 6 advanced',
            ],
          },
          {
            day: 16,
            tasks: [
              'Học 40 từ vựng advanced (v941-v980)',
              'Ngữ pháp: Parallelism (g209)',
              'Làm 15 câu Part 5 advanced',
            ],
          },
          {
            day: 17,
            tasks: [
              'Học 40 từ vựng advanced (v981-v1020)',
              'Part 6 strategies: Context clues',
              'Làm 4 bài Part 6 advanced',
            ],
          },
          {
            day: 18,
            tasks: [
              'Học 40 từ vựng advanced (v1021-v1060)',
              'Ngữ pháp: Advanced Word Forms (g210)',
              'Làm 20 câu Part 5 advanced',
            ],
          },
          {
            day: 19,
            tasks: [
              'Học 40 từ vựng advanced (v1061-v1100)',
              'Coherence & cohesion in Part 6',
              'Làm 3 bài Part 6 advanced',
            ],
          },
          {
            day: 20,
            tasks: [
              'Ôn lại 200 từ vựng tuần 3',
              'Full Part 6 practice (4 bài)',
              'Review chi tiết',
            ],
          },
          {
            day: 21,
            tasks: [
              'Practice test tuần 3',
              'Đánh giá tiến độ',
            ],
          },
        ],
      },
      {
        week: 4,
        focus: 'Part 7 Single Passage Mastery',
        days: [
          {
            day: 22,
            tasks: [
              'Học 40 từ vựng advanced (v1101-v1140)',
              'Đọc 5 bài Part 7 single passage',
              'Speed reading practice',
            ],
          },
          {
            day: 23,
            tasks: [
              'Học 40 từ vựng advanced (v1141-v1180)',
              'Inference questions strategies',
              'Đọc 4 bài Part 7 single passage',
            ],
          },
          {
            day: 24,
            tasks: [
              'Học 40 từ vựng advanced (v1181-v1220)',
              'Vocabulary in context questions',
              'Đọc 5 bài Part 7 single passage',
            ],
          },
          {
            day: 25,
            tasks: [
              'Học 40 từ vựng advanced (v1221-v1260)',
              'Main idea & purpose questions',
              'Đọc 4 bài Part 7 single passage',
            ],
          },
          {
            day: 26,
            tasks: [
              'Học 40 từ vựng advanced (v1261-v1300)',
              'Detail questions mastery',
              'Đọc 5 bài Part 7 single passage',
            ],
          },
          {
            day: 27,
            tasks: [
              'Ôn lại 200 từ vựng tuần 4',
              'Timed practice: 10 bài single passage',
            ],
          },
          {
            day: 28,
            tasks: [
              'Review tuần 4',
              'Nghỉ ngơi',
            ],
          },
        ],
      },
      {
        week: 5,
        focus: 'Part 7 Double Passage Excellence',
        days: [
          {
            day: 29,
            tasks: [
              'Học 40 từ vựng advanced (v1301-v1340)',
              'Double passage strategies',
              'Đọc 3 bài Part 7 double passage',
            ],
          },
          {
            day: 30,
            tasks: [
              'Học 40 từ vựng advanced (v1341-v1380)',
              'Cross-referencing techniques',
              'Đọc 3 bài Part 7 double passage',
            ],
          },
          {
            day: 31,
            tasks: [
              'Học 40 từ vựng advanced (v1381-v1420)',
              'Synthesis questions practice',
              'Đọc 4 bài Part 7 double passage',
            ],
          },
          {
            day: 32,
            tasks: [
              'Học 40 từ vựng advanced (v1421-v1460)',
              'Comparison & contrast in doubles',
              'Đọc 3 bài Part 7 double passage',
            ],
          },
          {
            day: 33,
            tasks: [
              'Học 40 từ vựng advanced (v1461-v1500)',
              'Timed practice: 5 double passages',
            ],
          },
          {
            day: 34,
            tasks: [
              'Ôn lại 200 từ vựng tuần 5',
              'Mixed practice: 5 single + 3 double',
            ],
          },
          {
            day: 35,
            tasks: [
              'Practice test tuần 5',
              'Review chi tiết',
            ],
          },
        ],
      },
      {
        week: 6,
        focus: 'Part 7 Triple Passage Domination',
        days: [
          {
            day: 36,
            tasks: [
              'Triple passage strategies overview',
              'Đọc 2 bài Part 7 triple passage',
              'Làm 15 câu Part 5',
            ],
          },
          {
            day: 37,
            tasks: [
              'Multiple document integration skills',
              'Đọc 2 bài Part 7 triple passage',
              'Làm 3 bài Part 6',
            ],
          },
          {
            day: 38,
            tasks: [
              'Complex inference in triples',
              'Đọc 2 bài Part 7 triple passage',
              'Làm 20 câu Part 5',
            ],
          },
          {
            day: 39,
            tasks: [
              'Time management for triples',
              'Timed: 3 triple passages',
              'Review strategies',
            ],
          },
          {
            day: 40,
            tasks: [
              'Full Part 7 practice (mixed types)',
              'Đánh giá tốc độ và độ chính xác',
            ],
          },
          {
            day: 41,
            tasks: [
              'Ôn lại tất cả strategies Part 7',
              'Timed test: Full Part 7',
            ],
          },
          {
            day: 42,
            tasks: [
              'Review tuần 6',
              'Nghỉ ngơi',
            ],
          },
        ],
      },
      {
        week: 7,
        focus: 'Integrated Skills Practice',
        days: [
          {
            day: 43,
            tasks: [
              'Full Reading test (75 phút)',
              'Chi tiết review mọi câu sai',
            ],
          },
          {
            day: 44,
            tasks: [
              'Ôn lại kiến thức từ test ngày 43',
              'Làm lại tất cả câu sai',
              'Phân tích pattern lỗi',
            ],
          },
          {
            day: 45,
            tasks: [
              'Part 5 + 6 intensive (30 + 4 bài)',
              'Focus on speed và accuracy',
            ],
          },
          {
            day: 46,
            tasks: [
              'Part 7 intensive (15 bài mixed)',
              'Focus on inference questions',
            ],
          },
          {
            day: 47,
            tasks: [
              'Full Reading test (75 phút)',
              'So sánh với kết quả ngày 43',
            ],
          },
          {
            day: 48,
            tasks: [
              'Review test ngày 47',
              'Xác định areas cần cải thiện',
            ],
          },
          {
            day: 49,
            tasks: [
              'Nghỉ ngơi',
              'Light review',
            ],
          },
        ],
      },
      {
        week: 8,
        focus: 'Advanced Vocabulary Consolidation',
        days: [
          {
            day: 50,
            tasks: [
              'Ôn lại 500 từ vựng advanced quan trọng nhất',
              'Làm 20 câu Part 5 vocabulary-focused',
            ],
          },
          {
            day: 51,
            tasks: [
              'Collocations & phrasal verbs review',
              'Làm 25 câu Part 5 advanced',
              'Đọc 3 bài Part 7',
            ],
          },
          {
            day: 52,
            tasks: [
              'Business terminology deep dive',
              'Làm 4 bài Part 6',
              'Đọc 2 bài Part 7 double',
            ],
          },
          {
            day: 53,
            tasks: [
              'Academic & technical vocabulary',
              'Làm 30 câu Part 5',
              'Đọc 4 bài Part 7',
            ],
          },
          {
            day: 54,
            tasks: [
              'Synonyms & paraphrasing practice',
              'Đọc 6 bài Part 7 (mixed)',
            ],
          },
          {
            day: 55,
            tasks: [
              'Full vocabulary review test',
              'Đánh giá vocabulary mastery',
            ],
          },
          {
            day: 56,
            tasks: [
              'Review tuần 8',
              'Nghỉ ngơi',
            ],
          },
        ],
      },
      {
        week: 9,
        focus: 'Grammar Perfection',
        days: [
          {
            day: 57,
            tasks: [
              'Ôn tất cả advanced grammar (g201-g210)',
              'Làm 30 câu Part 5 grammar-focused',
            ],
          },
          {
            day: 58,
            tasks: [
              'Tenses & aspects mastery review',
              'Làm 25 câu Part 5 + 3 bài Part 6',
            ],
          },
          {
            day: 59,
            tasks: [
              'Passive voice & complex structures',
              'Làm 30 câu Part 5 advanced',
            ],
          },
          {
            day: 60,
            tasks: [
              'Conditionals & subjunctive mood',
              'Làm 25 câu Part 5 + 3 bài Part 6',
            ],
          },
          {
            day: 61,
            tasks: [
              'Word forms & derivatives',
              'Làm 30 câu Part 5 advanced',
            ],
          },
          {
            day: 62,
            tasks: [
              'Full grammar review test',
              'Identify remaining weak points',
            ],
          },
          {
            day: 63,
            tasks: [
              'Review tuần 9',
              'Nghỉ ngơi',
            ],
          },
        ],
      },
      {
        week: 10,
        focus: 'Mock Test Marathon - Week 1',
        days: [
          {
            day: 64,
            tasks: [
              'Mock Test 1: Full Reading (75 phút)',
              'Detailed review - tất cả 100 câu',
            ],
          },
          {
            day: 65,
            tasks: [
              'Ôn lại kiến thức từ Mock Test 1',
              'Làm lại tất cả câu sai + nghi ngờ',
            ],
          },
          {
            day: 66,
            tasks: [
              'Mock Test 2: Full Reading (75 phút)',
              'Compare với Mock Test 1',
            ],
          },
          {
            day: 67,
            tasks: [
              'Deep dive analysis Mock Test 2',
              'Pattern recognition for mistakes',
            ],
          },
          {
            day: 68,
            tasks: [
              'Targeted practice on weak areas',
              'Làm 30 câu Part 5 + 5 bài Part 7',
            ],
          },
          {
            day: 69,
            tasks: [
              'Mock Test 3: Full Reading (75 phút)',
              'Track improvement trends',
            ],
          },
          {
            day: 70,
            tasks: [
              'Review tuần 10',
              'Nghỉ ngơi đầy đủ',
            ],
          },
        ],
      },
      {
        week: 11,
        focus: 'Mock Test Marathon - Week 2',
        days: [
          {
            day: 71,
            tasks: [
              'Mock Test 4: Full Reading (75 phút)',
              'Focus on time management',
            ],
          },
          {
            day: 72,
            tasks: [
              'Comprehensive review Mock Test 4',
              'Refine strategies based on results',
            ],
          },
          {
            day: 73,
            tasks: [
              'Mock Test 5: Full Reading (75 phút)',
              'Simulate actual test conditions',
            ],
          },
          {
            day: 74,
            tasks: [
              'Analysis of all 5 mock tests',
              'Identify consistent patterns',
            ],
          },
          {
            day: 75,
            tasks: [
              'Targeted practice: Top 3 weak areas',
              'Customized exercises',
            ],
          },
          {
            day: 76,
            tasks: [
              'Mock Test 6: Full Reading (75 phút)',
              'Final assessment before review week',
            ],
          },
          {
            day: 77,
            tasks: [
              'Review tuần 11',
              'Relaxation and mental preparation',
            ],
          },
        ],
      },
      {
        week: 12,
        focus: 'Final Review & Peak Performance',
        days: [
          {
            day: 78,
            tasks: [
              'Ôn lại 1,500 từ vựng (focus on 500 quan trọng nhất)',
              'Light practice: 20 câu Part 5',
            ],
          },
          {
            day: 79,
            tasks: [
              'Review tất cả grammar rules',
              'Focus on frequently tested points',
              'Làm 25 câu Part 5 mixed',
            ],
          },
          {
            day: 80,
            tasks: [
              'Part 7 strategies final review',
              'Đọc 5 bài Part 7 (mixed types)',
              'No time pressure',
            ],
          },
          {
            day: 81,
            tasks: [
              'Final Mock Test: Full Reading (75 phút)',
              'Simulate exact test conditions',
            ],
          },
          {
            day: 82,
            tasks: [
              'Review Final Mock Test',
              'Last-minute notes on weak points',
            ],
          },
          {
            day: 83,
            tasks: [
              'Light practice (15 câu Part 5 + 2 bài Part 7)',
              'Review test-taking strategies',
              'Mental preparation',
            ],
          },
          {
            day: 84,
            tasks: [
              'Ôn lại tips & tricks quan trọng nhất',
              'Visualize success',
              'Early rest',
            ],
          },
        ],
      },
      {
        week: 13,
        focus: 'Tuần cuối - Peak Performance',
        days: [
          {
            day: 85,
            tasks: [
              'Light vocabulary review (200 từ thường gặp)',
              'Làm 10 câu Part 5 warm-up',
            ],
          },
          {
            day: 86,
            tasks: [
              'Review grammar highlights',
              'Đọc 2 bài Part 7 nhẹ nhàng',
              'No pressure',
            ],
          },
          {
            day: 87,
            tasks: [
              'Final strategies review',
              'Time management reminders',
              'Positive mindset building',
            ],
          },
          {
            day: 88,
            tasks: [
              'Very light practice (10 câu Part 5 only)',
              'Review test day checklist',
            ],
          },
          {
            day: 89,
            tasks: [
              'No study - complete rest',
              'Prepare materials for test day',
              'Early sleep',
            ],
          },
          {
            day: 90,
            tasks: [
              'TEST DAY!',
              'Confident và focus',
              'Execute your strategies!',
            ],
          },
        ],
      },
    ],
  },
];

// === PART 1 PRACTICE QUESTIONS ===
export const PART1_QUESTIONS: Part1Question[] = [
  // BEGINNER LEVEL
  {
    id: 'p1_b001',
    level: 'beginner',
    imageDescription: 'A woman is sitting at a desk in an office',
    category: 'person',
    options: [
      { id: 'A', text: 'A woman is standing near a window.' },
      { id: 'B', text: 'A woman is sitting at a desk.' },
      { id: 'C', text: 'A woman is leaving the office.' },
      { id: 'D', text: 'A woman is opening a door.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì trong ảnh có một phụ nữ đang ngồi ở bàn làm việc. Các đáp án khác mô tả hành động không xuất hiện trong ảnh.'
  },
  {
    id: 'p1_b002',
    level: 'beginner',
    imageDescription: 'A man is typing on a computer',
    category: 'action',
    options: [
      { id: 'A', text: 'A man is using a computer.' },
      { id: 'B', text: 'A man is cleaning a desk.' },
      { id: 'C', text: 'A man is writing on paper.' },
      { id: 'D', text: 'A man is talking on the phone.' }
    ],
    correctAnswer: 'A',
    explanation: 'Đáp án A đúng vì người đàn ông đang sử dụng máy tính (typing = using). Options B, C, D mô tả các hành động không có trong ảnh.'
  },
  {
    id: 'p1_b003',
    level: 'beginner',
    imageDescription: 'Books are on a shelf',
    category: 'object',
    options: [
      { id: 'A', text: 'The books are being read.' },
      { id: 'B', text: 'The books are on the floor.' },
      { id: 'C', text: 'The books are arranged on a shelf.' },
      { id: 'D', text: 'The books are being packed.' }
    ],
    correctAnswer: 'C',
    explanation: 'Đáp án C đúng vì sách được sắp xếp trên kệ. "Arranged" (được sắp xếp) là từ thường dùng để mô tả vật được đặt ngay ngắn.'
  },
  {
    id: 'p1_b004',
    level: 'beginner',
    imageDescription: 'A car is parked in front of a building',
    category: 'object',
    options: [
      { id: 'A', text: 'A car is being washed.' },
      { id: 'B', text: 'A car is moving on the street.' },
      { id: 'C', text: 'A car is parked near a building.' },
      { id: 'D', text: 'A car is being repaired.' }
    ],
    correctAnswer: 'C',
    explanation: 'Đáp án C đúng với hiện tại đơn "is parked" mô tả trạng thái xe đang đỗ. Options A, B, D mô tả hành động không xảy ra.'
  },
  {
    id: 'p1_b005',
    level: 'beginner',
    imageDescription: 'People are walking in a park',
    category: 'action',
    options: [
      { id: 'A', text: 'People are sitting on benches.' },
      { id: 'B', text: 'People are walking through the park.' },
      { id: 'C', text: 'People are running in the park.' },
      { id: 'D', text: 'People are having a picnic.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì mọi người đang đi bộ qua công viên. Hiện tại tiếp diễn "are walking" mô tả hành động đang diễn ra.'
  },
  {
    id: 'p1_b006',
    level: 'beginner',
    imageDescription: 'A telephone is on a table',
    category: 'object',
    options: [
      { id: 'A', text: 'A telephone is ringing.' },
      { id: 'B', text: 'A telephone has been placed on a table.' },
      { id: 'C', text: 'A telephone is being used.' },
      { id: 'D', text: 'A telephone is in a drawer.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng với thì hiện tại hoàn thành "has been placed" mô tả kết quả: điện thoại đã được đặt ở đó. Đây là cách mô tả vị trí vật thường gặp trong Part 1.'
  },
  {
    id: 'p1_b007',
    level: 'beginner',
    imageDescription: 'A woman is holding a cup',
    category: 'action',
    options: [
      { id: 'A', text: 'A woman is drinking from a cup.' },
      { id: 'B', text: 'A woman is washing a cup.' },
      { id: 'C', text: 'A woman is holding a cup.' },
      { id: 'D', text: 'A woman is buying a cup.' }
    ],
    correctAnswer: 'C',
    explanation: 'Đáp án C đúng vì chỉ mô tả đúng hành động "holding" (đang cầm). Options A và B thêm hành động không có trong ảnh.'
  },
  {
    id: 'p1_b008',
    level: 'beginner',
    imageDescription: 'A door is closed',
    category: 'object',
    options: [
      { id: 'A', text: 'The door is open.' },
      { id: 'B', text: 'The door is being painted.' },
      { id: 'C', text: 'The door is closed.' },
      { id: 'D', text: 'The door is being installed.' }
    ],
    correctAnswer: 'C',
    explanation: 'Đáp án C đúng, mô tả trạng thái cửa đang đóng. Lưu ý phân biệt "closed" (đóng - trạng thái) và "is closing" (đang đóng - hành động).'
  },
  {
    id: 'p1_b009',
    level: 'beginner',
    imageDescription: 'A man is reading a newspaper',
    category: 'action',
    options: [
      { id: 'A', text: 'A man is folding a newspaper.' },
      { id: 'B', text: 'A man is reading a newspaper.' },
      { id: 'C', text: 'A man is buying a newspaper.' },
      { id: 'D', text: 'A man is delivering newspapers.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì người đàn ông đang đọc báo. Hành động "reading" rõ ràng trong ảnh.'
  },
  {
    id: 'p1_b010',
    level: 'beginner',
    imageDescription: 'Chairs are arranged around a table',
    category: 'object',
    options: [
      { id: 'A', text: 'The chairs are being moved.' },
      { id: 'B', text: 'The chairs are stacked in a corner.' },
      { id: 'C', text: 'The chairs are arranged around a table.' },
      { id: 'D', text: 'The chairs are being cleaned.' }
    ],
    correctAnswer: 'C',
    explanation: 'Đáp án C đúng vì ghế được xếp quanh bàn. "Arranged around" là cụm từ thường dùng mô tả vị trí.'
  },

  // INTERMEDIATE LEVEL
  {
    id: 'p1_i001',
    level: 'intermediate',
    imageDescription: 'A woman is reaching for items on a shelf',
    category: 'action',
    options: [
      { id: 'A', text: 'A woman is stocking shelves.' },
      { id: 'B', text: 'A woman is reaching for something on a shelf.' },
      { id: 'C', text: 'A woman is rearranging products.' },
      { id: 'D', text: 'A woman is cleaning a display.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì "reaching for" (với tay lấy) mô tả chính xác hành động. Options A, C thêm mục đích không rõ trong ảnh.'
  },
  {
    id: 'p1_i002',
    level: 'intermediate',
    imageDescription: 'Documents are spread across a desk',
    category: 'object',
    options: [
      { id: 'A', text: 'Documents are being filed away.' },
      { id: 'B', text: 'Documents have been spread across a desk.' },
      { id: 'C', text: 'Documents are being shredded.' },
      { id: 'D', text: 'Documents are stacked neatly.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng với "have been spread" (đã được trải rộng) mô tả kết quả. Lưu ý "spread" có nghĩa trải rộng, rải rác.'
  },
  {
    id: 'p1_i003',
    level: 'intermediate',
    imageDescription: 'A man is inspecting equipment',
    category: 'action',
    options: [
      { id: 'A', text: 'A man is repairing equipment.' },
      { id: 'B', text: 'A man is inspecting some equipment.' },
      { id: 'C', text: 'A man is installing new machinery.' },
      { id: 'D', text: 'A man is operating machinery.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì "inspecting" (kiểm tra) là hành động nhìn xem xét kỹ. Option A "repairing" (sửa chữa) cần có công cụ rõ ràng.'
  },
  {
    id: 'p1_i004',
    level: 'intermediate',
    imageDescription: 'Boxes are stacked against a wall',
    category: 'object',
    options: [
      { id: 'A', text: 'Boxes are being loaded onto a truck.' },
      { id: 'B', text: 'Boxes have been stacked against a wall.' },
      { id: 'C', text: 'Boxes are being opened.' },
      { id: 'D', text: 'Boxes are scattered on the floor.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì "stacked against" (xếp chồng dựa vào) mô tả vị trí chính xác. Thì hiện tại hoàn thành chỉ kết quả.'
  },
  {
    id: 'p1_i005',
    level: 'intermediate',
    imageDescription: 'A woman is addressing a group of people',
    category: 'action',
    options: [
      { id: 'A', text: 'A woman is taking notes.' },
      { id: 'B', text: 'A woman is distributing handouts.' },
      { id: 'C', text: 'A woman is addressing an audience.' },
      { id: 'D', text: 'A woman is listening to a presentation.' }
    ],
    correctAnswer: 'C',
    explanation: 'Đáp án C đúng vì "addressing" (phát biểu trước) mô tả hành động nói chuyện với nhóm người. "Audience" là thính giả.'
  },
  {
    id: 'p1_i006',
    level: 'intermediate',
    imageDescription: 'A pathway is lined with trees',
    category: 'scene',
    options: [
      { id: 'A', text: 'Trees are being planted along a path.' },
      { id: 'B', text: 'A pathway is lined with trees.' },
      { id: 'C', text: 'Trees have fallen across a pathway.' },
      { id: 'D', text: 'A pathway is being constructed.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì "is lined with" (được viền bởi) mô tả cây nằm dọc hai bên lối đi. Đây là cách diễn đạt thường gặp.'
  },
  {
    id: 'p1_i007',
    level: 'intermediate',
    imageDescription: 'A man is wheeling a cart through a warehouse',
    category: 'action',
    options: [
      { id: 'A', text: 'A man is loading a cart.' },
      { id: 'B', text: 'A man is pushing a cart.' },
      { id: 'C', text: 'A man is unloading boxes.' },
      { id: 'D', text: 'A man is inspecting inventory.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì "pushing" (đẩy) là từ phổ biến cho "wheeling a cart". Lưu ý "wheel" (v) = đẩy xe có bánh.'
  },
  {
    id: 'p1_i008',
    level: 'intermediate',
    imageDescription: 'Clothes are hanging on a rack',
    category: 'object',
    options: [
      { id: 'A', text: 'Clothes are being folded.' },
      { id: 'B', text: 'Clothes are displayed on hangers.' },
      { id: 'C', text: 'Clothes are being tried on.' },
      { id: 'D', text: 'Clothes are packed in boxes.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì "displayed on hangers" (được trưng bày trên móc áo) mô tả quần áo treo. "Hanger" là móc áo, giá treo.'
  },
  {
    id: 'p1_i009',
    level: 'intermediate',
    imageDescription: 'A woman is watering plants',
    category: 'action',
    options: [
      { id: 'A', text: 'A woman is trimming plants.' },
      { id: 'B', text: 'A woman is watering some plants.' },
      { id: 'C', text: 'A woman is planting flowers.' },
      { id: 'D', text: 'A woman is harvesting vegetables.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì "watering" (tưới nước) là hành động chính. Options A, C, D mô tả các hoạt động làm vườn khác.'
  },
  {
    id: 'p1_i010',
    level: 'intermediate',
    imageDescription: 'Vehicles are parked in a row',
    category: 'object',
    options: [
      { id: 'A', text: 'Vehicles are being serviced.' },
      { id: 'B', text: 'Vehicles are lined up in a parking area.' },
      { id: 'C', text: 'Vehicles are being driven away.' },
      { id: 'D', text: 'Vehicles are being washed.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì "lined up" (xếp thành hàng) mô tả xe được đỗ thành hàng. "Parking area" là bãi đỗ xe.'
  },

  // ADVANCED LEVEL
  {
    id: 'p1_a001',
    level: 'advanced',
    imageDescription: 'A technician is calibrating laboratory equipment',
    category: 'action',
    options: [
      { id: 'A', text: 'A technician is dismantling equipment.' },
      { id: 'B', text: 'A technician is making adjustments to equipment.' },
      { id: 'C', text: 'A technician is packaging laboratory supplies.' },
      { id: 'D', text: 'A technician is conducting an experiment.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì "making adjustments" (điều chỉnh) = calibrating. Đây là paraphrase thường gặp ở level cao.'
  },
  {
    id: 'p1_a002',
    level: 'advanced',
    imageDescription: 'Merchandise is being restocked on shelves',
    category: 'action',
    options: [
      { id: 'A', text: 'Merchandise is being removed from display.' },
      { id: 'B', text: 'Merchandise is being inventoried.' },
      { id: 'C', text: 'Merchandise is being replenished.' },
      { id: 'D', text: 'Merchandise is being discounted.' }
    ],
    correctAnswer: 'C',
    explanation: 'Đáp án C đúng vì "replenished" (bổ sung) = restocked. Từ vựng nâng cao thường dùng paraphrase thay vì từ đơn giản.'
  },
  {
    id: 'p1_a003',
    level: 'advanced',
    imageDescription: 'A chef is garnishing a dish',
    category: 'action',
    options: [
      { id: 'A', text: 'A chef is sampling food.' },
      { id: 'B', text: 'A chef is adding finishing touches to a plate.' },
      { id: 'C', text: 'A chef is preparing ingredients.' },
      { id: 'D', text: 'A chef is cleaning cookware.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì "adding finishing touches" (thêm điểm hoàn thiện) = garnishing (trang trí món ăn). Paraphrase nâng cao.'
  },
  {
    id: 'p1_a004',
    level: 'advanced',
    imageDescription: 'Construction materials are scattered across a site',
    category: 'object',
    options: [
      { id: 'A', text: 'Materials have been neatly organized.' },
      { id: 'B', text: 'Materials are being transported.' },
      { id: 'C', text: 'Materials are strewn about the area.' },
      { id: 'D', text: 'Materials are being measured.' }
    ],
    correctAnswer: 'C',
    explanation: 'Đáp án C đúng vì "strewn about" (rải rác) = scattered. Từ vựng nâng cao với nghĩa tương tự nhưng formal hơn.'
  },
  {
    id: 'p1_a005',
    level: 'advanced',
    imageDescription: 'An architect is reviewing blueprints',
    category: 'action',
    options: [
      { id: 'A', text: 'An architect is drafting new designs.' },
      { id: 'B', text: 'An architect is examining plans.' },
      { id: 'C', text: 'An architect is meeting with clients.' },
      { id: 'D', text: 'An architect is measuring dimensions.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì "examining plans" (xem xét bản vẽ) = reviewing blueprints. "Blueprints" là bản thiết kế xây dựng.'
  },
  {
    id: 'p1_a006',
    level: 'advanced',
    imageDescription: 'Pedestrians are traversing a crosswalk',
    category: 'action',
    options: [
      { id: 'A', text: 'Pedestrians are waiting at an intersection.' },
      { id: 'B', text: 'Pedestrians are crossing the street.' },
      { id: 'C', text: 'Pedestrians are boarding a vehicle.' },
      { id: 'D', text: 'Pedestrians are gathering on a sidewalk.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì "crossing the street" = traversing a crosswalk. "Traverse" là từ formal nghĩa đi qua, băng qua.'
  },
  {
    id: 'p1_a007',
    level: 'advanced',
    imageDescription: 'A presenter is gesturing toward a projection screen',
    category: 'action',
    options: [
      { id: 'A', text: 'A presenter is distributing materials.' },
      { id: 'B', text: 'A presenter is indicating something on a screen.' },
      { id: 'C', text: 'A presenter is adjusting equipment.' },
      { id: 'D', text: 'A presenter is answering questions.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì "indicating" (chỉ vào) = gesturing toward. Cả hai đều mô tả việc dùng cử chỉ để chỉ vào cái gì.'
  },
  {
    id: 'p1_a008',
    level: 'advanced',
    imageDescription: 'Furniture is being upholstered in a workshop',
    category: 'action',
    options: [
      { id: 'A', text: 'Furniture is being assembled.' },
      { id: 'B', text: 'Furniture is being refurbished.' },
      { id: 'C', text: 'Furniture is being delivered.' },
      { id: 'D', text: 'Furniture is being stored.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì "refurbished" (tân trang, sửa chữa) bao gồm việc upholster (bọc lại đệm). Từ tổng quát thay cho từ cụ thể.'
  },
  {
    id: 'p1_a009',
    level: 'advanced',
    imageDescription: 'Documents are being collated on a table',
    category: 'action',
    options: [
      { id: 'A', text: 'Documents are being archived.' },
      { id: 'B', text: 'Documents are being sorted and arranged.' },
      { id: 'C', text: 'Documents are being photocopied.' },
      { id: 'D', text: 'Documents are being discarded.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì "sorted and arranged" (phân loại và sắp xếp) = collated. "Collate" nghĩa là thu thập và sắp xếp theo thứ tự.'
  },
  {
    id: 'p1_a010',
    level: 'advanced',
    imageDescription: 'A laboratory is equipped with specialized apparatus',
    category: 'scene',
    options: [
      { id: 'A', text: 'A laboratory is being renovated.' },
      { id: 'B', text: 'A laboratory contains scientific instruments.' },
      { id: 'C', text: 'A laboratory is being cleaned.' },
      { id: 'D', text: 'A laboratory is unoccupied.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì "contains scientific instruments" (chứa các dụng cụ khoa học) = equipped with apparatus. Paraphrase từ technical sang general.'
  },
  {
    id: 'p1_a011',
    level: 'advanced',
    imageDescription: 'A musician is tuning an instrument',
    category: 'action',
    options: [
      { id: 'A', text: 'A musician is performing a piece.' },
      { id: 'B', text: 'A musician is making adjustments to an instrument.' },
      { id: 'C', text: 'A musician is packing equipment.' },
      { id: 'D', text: 'A musician is reading sheet music.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì "making adjustments" = tuning (điều chỉnh dây đàn). Paraphrase thay từ chuyên môn bằng từ thông dụng.'
  },
  {
    id: 'p1_a012',
    level: 'advanced',
    imageDescription: 'Patrons are perusing items in a boutique',
    category: 'action',
    options: [
      { id: 'A', text: 'Patrons are making purchases.' },
      { id: 'B', text: 'Patrons are browsing merchandise.' },
      { id: 'C', text: 'Patrons are requesting assistance.' },
      { id: 'D', text: 'Patrons are exiting the store.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì "browsing" (xem qua) = perusing. Cả hai đều mô tả việc nhìn xem hàng hóa một cách thoải mái.'
  },
  {
    id: 'p1_a013',
    level: 'advanced',
    imageDescription: 'A walkway is adjacent to a waterfront',
    category: 'scene',
    options: [
      { id: 'A', text: 'A walkway extends over water.' },
      { id: 'B', text: 'A walkway runs alongside the water.' },
      { id: 'C', text: 'A walkway is under construction.' },
      { id: 'D', text: 'A walkway is lined with vendors.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì "runs alongside" (chạy dọc bên cạnh) = adjacent to (kế bên). Mô tả vị trí tương đối.'
  },
  {
    id: 'p1_a014',
    level: 'advanced',
    imageDescription: 'An employee is conferring with colleagues',
    category: 'action',
    options: [
      { id: 'A', text: 'An employee is working independently.' },
      { id: 'B', text: 'An employee is discussing something with coworkers.' },
      { id: 'C', text: 'An employee is presenting findings.' },
      { id: 'D', text: 'An employee is leaving the office.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì "discussing with" = conferring with (bàn bạc, trao đổi). "Confer" là động từ formal.'
  },
  {
    id: 'p1_a015',
    level: 'advanced',
    imageDescription: 'Artwork is suspended from the ceiling',
    category: 'object',
    options: [
      { id: 'A', text: 'Artwork is mounted on walls.' },
      { id: 'B', text: 'Artwork is hanging from above.' },
      { id: 'C', text: 'Artwork is being installed.' },
      { id: 'D', text: 'Artwork is displayed on pedestals.' }
    ],
    correctAnswer: 'B',
    explanation: 'Đáp án B đúng vì "hanging from above" (treo từ trên cao) = suspended from ceiling. "Suspend" nghĩa là treo lơ lửng.'
  }
];

// === TIPS & STRATEGIES ===
export interface TipsStrategy {
  id: string;
  category: string;
  title: string;
  content: string[];
}

export const TIPS_STRATEGIES: TipsStrategy[] = [
  {
    id: 'tips_overview',
    category: 'TOEIC Overview',
    title: 'Tổng quan về bài thi TOEIC',
    content: [
      '**Cấu trúc bài thi TOEIC:**',
      'TOEIC gồm 2 phần chính: LISTENING (100 câu, 45 phút) và READING (100 câu, 75 phút).',
      'Tổng thời gian: 120 phút | Điểm tối đa: 990 điểm (mỗi phần 495 điểm).',
      '',
      '**═══════════════════════════════════════════**',
      '**📢 PHẦN 1: LISTENING (45 phút - 100 câu - 495 điểm)**',
      '**═══════════════════════════════════════════**',
      '',
      '**PART 1: PHOTOGRAPHS (Mô tả tranh) - 6 câu**',
      '• Mô tả: Nghe 4 câu mô tả về 1 bức ảnh, chọn câu đúng nhất.',
      '• Thời lượng: ~3 phút',
      '• Nội dung: Người, vật, hành động trong ảnh.',
      '• Kỹ năng: Nghe chi tiết, phân biệt thì (hiện tại tiếp diễn, hiện tại hoàn thành).',
      '• Tips:',
      '  - Nhìn kỹ ảnh trước khi nghe.',
      '  - Chú ý vị trí người/vật (next to, behind, in front of).',
      '  - Phân biệt số ít/số nhiều (a person vs. people).',
      '  - Loại bỏ đáp án sai rõ ràng.',
      '',
      '**PART 2: QUESTION-RESPONSE (Hỏi đáp) - 25 câu**',
      '• Mô tả: Nghe câu hỏi và 3 câu trả lời, chọn câu trả lời phù hợp nhất.',
      '• Thời lượng: ~9 phút',
      '• Dạng câu hỏi: Wh-questions (Who, What, When, Where, Why, How), Yes/No, Choice questions.',
      '• Kỹ năng: Nghe từ khóa, hiểu ý câu hỏi.',
      '• Tips:',
      '  - Tập trung vào từ đầu câu hỏi (Wh-word).',
      '  - Đề phòng câu trả lời gây nhiễu (có từ giống câu hỏi nhưng sai nghĩa).',
      '  - Yes/No questions: Đáp án không nhất thiết có "Yes" hoặc "No".',
      '  - Suggestion/Offer: "Why don\'t we...", "How about...", "Would you like..."',
      '',
      '**PART 3: CONVERSATIONS (Hội thoại) - 39 câu (13 đoạn x 3 câu)**',
      '• Mô tả: Nghe đoạn hội thoại 2-3 người, trả lời 3 câu hỏi.',
      '• Thời lượng: ~17 phút',
      '• Chủ đề: Công việc văn phòng, đặt hàng, dịch vụ, sự kiện, lịch hẹn.',
      '• Kỹ năng: Nghe hiểu tổng quát, chi tiết, suy luận.',
      '• Tips:',
      '  - ĐỌC CÂU HỎI TRƯỚC khi nghe (trong thời gian directions).',
      '  - Chú ý câu đầu (giới thiệu chủ đề).',
      '  - Note lại từ khóa quan trọng.',
      '  - Đề phòng câu hỏi suy luận (What will they do next?).',
      '  - Visual questions: Xem biểu đồ/bảng trong đề.',
      '',
      '**PART 4: TALKS (Bài nói) - 30 câu (10 đoạn x 3 câu)**',
      '• Mô tả: Nghe đoạn độc thoại (1 người nói), trả lời 3 câu hỏi.',
      '• Thời lượng: ~16 phút',
      '• Dạng: Thông báo, quảng cáo, tin nhắn thoại, tour guide, hướng dẫn.',
      '• Kỹ năng: Nghe hiểu ý chính, chi tiết, mục đích người nói.',
      '• Tips:',
      '  - ĐỌC CÂU HỎI TRƯỚC để biết nghe cái gì.',
      '  - Câu đầu thường là ý chính.',
      '  - Chú ý thông tin về thời gian, địa điểm, người.',
      '  - Visual questions: Kết hợp nghe với xem hình/bảng.',
      '',
      '**═══════════════════════════════════════════**',
      '**📖 PHẦN 2: READING (75 phút - 100 câu - 495 điểm)**',
      '**═══════════════════════════════════════════**',
      '',
      '**PART 5: INCOMPLETE SENTENCES (Hoàn thành câu) - 30 câu**',
      '• Mô tả: Chọn từ/cụm từ đúng để điền vào chỗ trống trong câu.',
      '• Thời lượng khuyến nghị: 10-12 phút (20-25 giây/câu)',
      '• Nội dung: Ngữ pháp (70%), từ vựng (30%).',
      '• Dạng câu hỏi:',
      '  - Từ loại (noun, verb, adjective, adverb)',
      '  - Thì động từ (present, past, future, perfect)',
      '  - Giới từ (in, on, at, for, to, with...)',
      '  - Liên từ (and, but, although, because...)',
      '  - Đại từ quan hệ (who, which, that, whose)',
      '  - So sánh (comparative, superlative)',
      '• Tips:',
      '  - Xác định loại từ cần điền (N/V/Adj/Adv).',
      '  - Nhìn vào cấu trúc câu (S-V-O).',
      '  - Chú ý dấu hiệu thì (ago, since, will, have...).',
      '  - Học collocations (make a decision, take place).',
      '',
      '**PART 6: TEXT COMPLETION (Hoàn thành đoạn văn) - 16 câu (4 đoạn x 4 câu)**',
      '• Mô tả: Đọc email/thư/thông báo, chọn từ/câu đúng điền vào 4 chỗ trống.',
      '• Thời lượng khuyến nghị: 8-10 phút (2-2.5 phút/đoạn)',
      '• Dạng câu hỏi:',
      '  - Grammar: Giống Part 5 (từ loại, thì, giới từ)',
      '  - Vocabulary: Từ phù hợp ngữ cảnh',
      '  - Sentence insertion: Chọn câu hoàn chỉnh phù hợp văn cảnh',
      '• Tips:',
      '  - ĐỌC TOÀN BỘ đoạn văn để hiểu ngữ cảnh.',
      '  - Câu trước/sau chỗ trống là manh mối quan trọng.',
      '  - Chú ý từ nối (however, therefore, in addition).',
      '  - Sentence insertion: Xem câu nào hợp lý nhất về ý nghĩa.',
      '',
      '**PART 7: READING COMPREHENSION (Đọc hiểu) - 54 câu**',
      '• Mô tả: Đọc bài (đơn/đôi/ba) và trả lời câu hỏi.',
      '• Thời lượng khuyến nghị: 52-57 phút',
      '• Phân loại:',
      '  - Single passages (29 câu): 10 bài x 2-4 câu',
      '  - Double passages (10 câu): 2 bộ x 5 câu',
      '  - Triple passages (15 câu): 3 bộ x 5 câu',
      '• Dạng bài:',
      '  - Email, Letter (thư điện tử, thư công việc)',
      '  - Advertisement (quảng cáo sản phẩm/dịch vụ)',
      '  - Notice/Announcement (thông báo)',
      '  - Article (bài báo)',
      '  - Text message chain (chuỗi tin nhắn)',
      '  - Invoice/Receipt (hóa đơn)',
      '  - Form/Schedule (biểu mẫu/lịch trình)',
      '  - Report (báo cáo)',
      '• Dạng câu hỏi:',
      '  - Main idea: Ý chính của bài',
      '  - Detail: Chi tiết cụ thể (who, what, when, where)',
      '  - Inference: Suy luận (What is implied? What is suggested?)',
      '  - Vocabulary: Nghĩa của từ trong ngữ cảnh',
      '  - NOT/EXCEPT: Điều gì KHÔNG được đề cập',
      '  - Sentence insertion: Chọn vị trí thích hợp cho câu',
      '• Tips:',
      '  - ĐỌC CÂU HỎI TRƯỚC để biết tìm thông tin gì.',
      '  - Skim: Đọc lướt nắm ý chính.',
      '  - Scan: Quét tìm từ khóa.',
      '  - Gạch chân thông tin quan trọng (số, tên, ngày).',
      '  - Double/Triple: Xác định thông tin ở bài nào.',
      '  - NOT questions: Kiểm tra từng đáp án.',
      '',
      '**═══════════════════════════════════════════**',
      '**🎯 PHÂN BỔ THỜI GIAN READING (QUAN TRỌNG!)**',
      '**═══════════════════════════════════════════**',
      'Part 5: 10-12 phút (20-25 giây/câu)',
      'Part 6: 8-10 phút (2-2.5 phút/đoạn)',
      'Part 7: 52-57 phút',
      '  • Single: 3-4 phút/bài',
      '  • Double: 6-7 phút/bài',
      '  • Triple: 8-10 phút/bài',
      '  • Dự phòng: 2-3 phút kiểm tra',
      '',
      '**⚡ LƯU Ý QUAN TRỌNG:**',
      '• Không được quay lại Part Listening sau khi kết thúc.',
      '• Part Reading TỰ quản lý thời gian - dễ bị thiếu thời gian!',
      '• Đừng mắc kẹt lâu ở 1 câu, đánh dấu và quay lại sau.',
      '• Làm câu dễ trước, câu khó sau.',
      '• Điền đáp án CẨNTHẬN vào answer sheet.',
    ],
  },
  {
    id: 'tips_part5',
    category: 'Part 5 - Incomplete Sentences',
    title: 'Chiến lược làm bài Part 5',
    content: [
      '**1. Đọc câu hỏi hoàn chỉnh:** Đừng chỉ nhìn vào chỗ trống. Đọc cả câu để hiểu ngữ cảnh.',
      '**2. Xác định loại từ cần điền:** Danh từ, động từ, tính từ hay trạng từ?',
      '**3. Loại trừ đáp án sai:** Nhìn vào cấu trúc ngữ pháp để loại bỏ các đáp án không phù hợp.',
      '**4. Chú ý thì của động từ:** Tìm dấu hiệu thời gian (yesterday, next week, since, for...).',
      '**5. Kiểm tra chủ-động từ:** Chủ ngữ số ít/số nhiều phải phù hợp với động từ.',
      '**6. Phân biệt từ loại:** -tion (N), -ly (Adv), -ful/-ive (Adj), -ize (V).',
      '**7. Collocation:** Một số từ thường đi cùng nhau (make a decision, pay attention).',
      '**8. Giới từ:** Học thuộc các cụm giới từ phổ biến (depend on, interested in).',
      '**9. Thời gian:** Dành 20-30 giây cho mỗi câu Part 5.',
      '**10. Đừng suy nghĩ quá lâu:** Nếu không chắc, chọn đáp án có vẻ đúng nhất và tiếp tục.',
    ],
  },
  {
    id: 'tips_part7',
    category: 'Part 7 - Reading Comprehension',
    title: 'Chiến lược làm bài Part 7',
    content: [
      '**1. Đọc câu hỏi trước:** Biết câu hỏi trước khi đọc bài sẽ giúp bạn tìm thông tin nhanh hơn.',
      '**2. Skim bài đọc:** Đọc lướt để nắm ý chính, không cần hiểu từng từ.',
      '**3. Scan tìm thông tin:** Tìm từ khóa trong câu hỏi và quét bài đọc để tìm phần có thông tin.',
      '**4. Chú ý tiêu đề và phần mở đầu:** Thường chứa ý chính của bài.',
      '**5. Underline từ khóa:** Gạch chân các thông tin quan trọng (ngày, số, tên).',
      '**6. Đọc kỹ các con số:** Ngày tháng, giá cả, số lượng thường là đáp án.',
      '**7. Loại trừ đáp án sai:** Tìm bằng chứng trong bài để loại bỏ đáp án không đúng.',
      '**8. NOT/EXCEPT questions:** Đặc biệt cẩn thận với câu hỏi "What is NOT mentioned?"',
      '**9. Double/Triple passages:** Xác định thông tin ở bài nào trước khi tìm đáp án.',
      '**10. Quản lý thời gian:** Single passage: 3-4 phút, Double: 6-7 phút, Triple: 8-10 phút.',
      '**11. Inference questions:** Câu suy luận cần hiểu ý nghĩa ngầm, không chỉ thông tin trực tiếp.',
      '**12. Đọc lại phần liên quan:** Khi chọn đáp án, đọc lại phần bài có thông tin để chắc chắn.',
    ],
  },
  {
    id: 'tips_time_management',
    category: 'Time Management',
    title: 'Quản lý thời gian hiệu quả',
    content: [
      '**LISTENING (45 phút - không kiểm soát được):**',
      '- Part 1: 6 câu (3 phút)',
      '- Part 2: 25 câu (9 phút)',
      '- Part 3: 39 câu (17 phút)',
      '- Part 4: 30 câu (16 phút)',
      '**Chiến lược Listening:** Đọc trước câu hỏi trong thời gian directions.',
      '',
      '**READING (75 phút - cần quản lý):**',
      '- Part 5: 30 câu (10-12 phút) - 20-25 giây/câu',
      '- Part 6: 16 câu (8-10 phút) - 30 giây/câu',
      '- Part 7: 54 câu (52-57 phút):',
      '  + Single passages: 3-4 phút/bài',
      '  + Double passages: 6-7 phút/bài',
      '  + Triple passages: 8-10 phút/bài',
      '',
      '**Phân bổ thời gian Reading:**',
      '1. **Part 5 (10 phút):** Làm nhanh các câu ngữ pháp đơn giản.',
      '2. **Part 6 (10 phút):** Đọc cả đoạn văn để hiểu ngữ cảnh.',
      '3. **Part 7 (55 phút):** Dành thời gian nhiều nhất cho Part 7.',
      '',
      '**Tips quan trọng:**',
      '- Đừng mắc kẹt ở một câu quá lâu.',
      '- Đánh dấu câu khó, quay lại sau.',
      '- Giữ nhịp độ đều: Không làm quá nhanh ở đầu rồi thiếu thời gian cuối.',
      '- Dành 2-3 phút cuối kiểm tra answer sheet.',
      '- Ưu tiên làm câu dễ trước, câu khó sau.',
    ],
  },
  {
    id: 'tips_common_mistakes',
    category: 'Common Mistakes',
    title: 'Lỗi thường gặp cần tránh',
    content: [
      '**1. Không đọc kỹ đề bài:**',
      '- Nhầm NOT/EXCEPT questions (chọn đáp án đúng thay vì sai).',
      '- Bỏ qua từ quan trọng như "NOT", "EXCEPT", "BEST".',
      '',
      '**2. Lỗi ngữ pháp Part 5:**',
      '- Nhầm thì: Không chú ý dấu hiệu thời gian.',
      '- Chủ-động từ không hhợp: "The team ARE" (sai) → "The team IS" (đúng).',
      '- Nhầm từ loại: Điền động từ vào vị trí cần danh từ.',
      '- Quên giới từ: "depend on" không phải "depend in".',
      '',
      '**3. Lỗi đọc hiểu Part 7:**',
      '- Đọc quá kỹ từng từ → mất thời gian.',
      '- Chọn đáp án dựa vào suy đoán thay vì bằng chứng trong bài.',
      '- Nhầm lẫn thông tin giữa các passages (double/triple).',
      '- Không đọc hết bài → bỏ sót thông tin ở cuối.',
      '',
      '**4. Lỗi quản lý thời gian:**',
      '- Dành quá nhiều thời gian cho Part 5, 6 → thiếu thời gian Part 7.',
      '- Mắc kẹt ở một câu khó quá lâu.',
      '- Không kiểm tra answer sheet → tô nhầm.',
      '',
      '**5. Lỗi chiến thuật:**',
      '- Không đọc trước câu hỏi Listening → không biết nghe cái gì.',
      '- Bỏ qua directions time → mất cơ hội đọc trước câu hỏi.',
      '- Để trống câu thay vì đoán (không bị trừ điểm).',
      '- Thay đổi đáp án quá nhiều → tin vào lựa chọn đầu tiên nếu không chắc chắn.',
      '',
      '**6. Lỗi tâm lý:**',
      '- Hoảng sợ khi gặp từ khó → bỏ qua từ khó, tập trung vào ngữ cảnh.',
      '- Mất tập trung sau khi sai câu → tiếp tục tập trung, mỗi câu độc lập.',
      '- Quá căng thẳng → thở sâu, giữ bình tĩnh.',
    ],
  },
  {
    id: 'tips_vocabulary',
    category: 'Vocabulary Learning',
    title: 'Cách học từ vựng hiệu quả',
    content: [
      '**1. Học theo chủ đề:** Business, Technology, Marketing, Finance...',
      '**2. Học từ trong ngữ cảnh:** Đọc câu ví dụ, không học từ đơn lẻ.',
      '**3. Sử dụng flashcards:** Tạo thẻ từ với ví dụ và hình ảnh.',
      '**4. Ôn tập đều đặn:** Spaced repetition - ôn lại sau 1 ngày, 3 ngày, 1 tuần.',
      '**5. Học collocation:** Các từ thường đi cùng nhau (make a decision, take a break).',
      '**6. Học word family:** manage → management → manager → managerial.',
      '**7. Luyện phát âm:** Nghe và lặp lại từ vựng.',
      '**8. Viết câu với từ mới:** Tạo câu riêng để ghi nhớ tốt hơn.',
      '**9. Đọc nhiều:** Đọc email, memo, article bằng tiếng Anh.',
      '**10. Mục tiêu:** 20-30 từ mới mỗi ngày, ôn lại 50-100 từ cũ.',
    ],
  },
  {
    id: 'tips_grammar',
    category: 'Grammar Mastery',
    title: 'Chinh phục ngữ pháp TOEIC',
    content: [
      '**1. Nắm vững các thì cơ bản:**',
      '- Present Simple: Sự thật, thói quen',
      '- Present Continuous: Hành động đang xảy ra',
      '- Past Simple: Hành động đã hoàn thành',
      '- Present Perfect: Kết quả ở hiện tại của hành động quá khứ',
      '- Future (will/going to): Dự định, dự đoán',
      '',
      '**2. Học công thức cụ thể:**',
      '- Passive Voice: be + V3',
      '- Conditional: If + clause, clause',
      '- Reported Speech: Lùi thì',
      '- Gerund/Infinitive: enjoy + V-ing, want + to V',
      '',
      '**3. Luyện tập qua bài tập:**',
      '- Làm từ dễ đến khó',
      '- Đọc giải thích kỹ khi sai',
      '- Ghi chú các lỗi hay mắc phải',
      '',
      '**4. Chú ý điểm dễ nhầm:**',
      '- Subject-Verb Agreement',
      '- Preposition usage',
      '- Article (a/an/the)',
      '- Word form (noun/verb/adj/adv)',
      '',
      '**5. Học qua context:**',
      '- Đọc email, memo để thấy grammar trong thực tế',
      '- Chú ý cấu trúc câu trong TOEIC',
    ],
  },
  {
    id: 'tips_test_day',
    category: 'Test Day Preparation',
    title: 'Chuẩn bị ngày thi',
    content: [
      '**Trước ngày thi (1 tuần):**',
      '- Làm 2-3 đề thi thử hoàn chỉnh',
      '- Ôn lại các điểm yếu',
      '- Không học quá nhiều kiến thức mới',
      '- Giữ tinh thần thoải mái',
      '',
      '**Ngày hôm trước:**',
      '- Ôn nhẹ, không học quá muộn',
      '- Chuẩn bị giấy tờ: CMND/CCCD, confirmation email',
      '- Ngủ đủ 7-8 tiếng',
      '- Xác định địa điểm thi và đường đi',
      '',
      '**Ngày thi:**',
      '- Ăn sáng đủ dinh dưỡng',
      '- Đến sớm 30-45 phút',
      '- Mang theo:',
      '  + CMND/CCCD (bản gốc)',
      '  + Confirmation email (in ra)',
      '  + Bút chì 2B (2-3 cây)',
      '  + Tẩy',
      '  + Đồng hồ đeo tay (không smartwatch)',
      '  + Nước uống',
      '',
      '**Trong phòng thi:**',
      '- Tắt điện thoại, để vào túi',
      '- Nghe kỹ hướng dẫn của giám thị',
      '- Kiểm tra answer sheet: tô đúng, tô đậm',
      '- Giữ bình tĩnh, tập trung',
      '- Đừng để ý người khác',
      '',
      '**Chiến thuật làm bài:**',
      '- Listening: Tập trung 100%, không suy nghĩ câu trước',
      '- Reading: Quản lý thời gian chặt chẽ',
      '- Đánh dấu câu khó, quay lại sau',
      '- 5 phút cuối: Kiểm tra answer sheet',
      '- Đừng bỏ trống câu nào - đoán nếu không biết',
    ],
  },
  {
    id: 'tips_score_guide',
    category: 'Score Guide',
    title: 'Hướng dẫn về điểm số TOEIC',
    content: [
      '**Thang điểm TOEIC:**',
      '- Tổng: 10 - 990 điểm',
      '- Listening: 5 - 495 điểm',
      '- Reading: 5 - 495 điểm',
      '',
      '**Phân loại trình độ:**',
      '- **60-215:** Beginner (Sơ cấp)',
      '  + Hiểu những từ, cụm từ cơ bản',
      '  + Giao tiếp đơn giản trong tình huống quen thuộc',
      '',
      '- **220-465:** Elementary (Sơ trung cấp)',
      '  + Hiểu câu đơn giản, hội thoại chậm',
      '  + Đọc email, memo cơ bản',
      '',
      '- **470-725:** Intermediate (Trung cấp)',
      '  + Hiểu hội thoại thường ngày',
      '  + Đọc hiểu tài liệu công việc',
      '  + Giao tiếp tốt trong công việc',
      '',
      '- **730-855:** Advanced (Cao cấp)',
      '  + Hiểu hầu hết nội dung',
      '  + Làm việc hiệu quả trong môi trường tiếng Anh',
      '',
      '- **860-990:** Expert (Chuyên gia)',
      '  + Thành thạo tiếng Anh',
      '  + Giao tiếp lưu loát mọi tình huống',
      '',
      '**Mục tiêu theo nhu cầu:**',
      '- **400-500:** Du học prep, giao tiếp cơ bản',
      '- **550-650:** Yêu cầu công ty, CV',
      '- **700-800:** Vị trí yêu cầu tiếng Anh cao',
      '- **850+:** Làm việc quốc tế, vị trí quản lý',
      '',
      '**Số câu đúng tương ứng điểm (ước lượng):**',
      '- 450 điểm: ~60-70 câu đúng/200',
      '- 550 điểm: ~90-100 câu đúng/200',
      '- 650 điểm: ~110-120 câu đúng/200',
      '- 750 điểm: ~140-150 câu đúng/200',
      '- 850 điểm: ~170-180 câu đúng/200',
    ],
  },
];


