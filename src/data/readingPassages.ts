import { ReadingPassage } from '@/types';

export const READING_PASSAGES: ReadingPassage[] = [
  // ===================== BEGINNER =====================
  {
    id: 'r001',
    level: 'beginner',
    topic: 'Daily Standup',
    title: 'The Morning Standup Meeting',
    titleVi: 'Cuộc Họp Standup Buổi Sáng',
    content: `Every morning at 9:00 AM, the development team gathers for a short meeting called a standup. Each team member answers three simple questions: What did I do yesterday? What will I do today? Are there any problems blocking my work?

The standup usually lasts only fifteen minutes. Team members stand up during the meeting to keep it short and focused. If someone has a bigger problem, they discuss it after the standup with only the people involved.

Today, Minh from the backend team says he finished the user login feature yesterday. He will work on the database optimization today. He has no blockers. Nam from the frontend team says he is still working on the dashboard UI. He needs help from the design team to get the new mockups.`,
    translation: `Mỗi sáng lúc 9:00, nhóm phát triển tập hợp để họp ngắn gọi là standup. Mỗi thành viên trả lời ba câu hỏi đơn giản: Hôm qua tôi đã làm gì? Hôm nay tôi sẽ làm gì? Có vấn đề nào đang cản trở công việc của tôi không?

Buổi standup thường chỉ kéo dài mười lăm phút. Các thành viên đứng trong cuộc họp để giữ cho buổi họp ngắn gọn và tập trung. Nếu ai đó có vấn đề lớn hơn, họ sẽ thảo luận sau buổi standup chỉ với những người liên quan.

Hôm nay, Minh từ nhóm backend nói anh ấy đã hoàn thành tính năng đăng nhập người dùng ngày hôm qua. Hôm nay anh ấy sẽ làm việc về tối ưu hóa cơ sở dữ liệu. Anh ấy không có vướng mắc gì. Nam từ nhóm frontend nói anh ấy vẫn đang làm giao diện dashboard. Anh ấy cần sự giúp đỡ từ nhóm thiết kế để lấy các mockup mới.`,
    vocabulary: [
      { word: 'standup', meaning: 'cuộc họp đứng (họp nhanh hàng ngày)' },
      { word: 'blocker', meaning: 'vật cản / vấn đề gây trở ngại' },
      { word: 'backend', meaning: 'phần xử lý phía máy chủ' },
      { word: 'frontend', meaning: 'phần giao diện người dùng' },
      { word: 'mockup', meaning: 'bản thiết kế mẫu' },
      { word: 'optimization', meaning: 'tối ưu hóa' },
      { word: 'feature', meaning: 'tính năng' },
      { word: 'focused', meaning: 'tập trung' },
    ],
    questions: [
      {
        id: 'r001q1',
        question: 'How long does the standup meeting usually last?',
        options: ['5 minutes', '15 minutes', '30 minutes', '1 hour'],
        correctAnswer: 1,
        explanation: 'The passage states "The standup usually lasts only fifteen minutes."',
      },
      {
        id: 'r001q2',
        question: 'Why do team members stand up during the meeting?',
        options: [
          'Because there are no chairs in the room',
          'To keep the meeting short and focused',
          'To show respect to the manager',
          'Because it is a company rule',
        ],
        correctAnswer: 1,
        explanation: '"Team members stand up during the meeting to keep it short and focused."',
      },
      {
        id: 'r001q3',
        question: 'What does Nam need to continue his work?',
        options: [
          'Help from the backend team',
          'A new computer',
          'New mockups from the design team',
          'Access to the database',
        ],
        correctAnswer: 2,
        explanation: '"He needs help from the design team to get the new mockups."',
      },
      {
        id: 'r001q4',
        question: 'What did Minh finish yesterday?',
        options: [
          'The database optimization',
          'The dashboard UI',
          'The user login feature',
          'The standup meeting notes',
        ],
        correctAnswer: 2,
        explanation: '"Minh from the backend team says he finished the user login feature yesterday."',
      },
    ],
  },

  {
    id: 'r002',
    level: 'beginner',
    topic: 'Email Communication',
    title: 'Writing a Professional Email to a Client',
    titleVi: 'Viết Email Chuyên Nghiệp Cho Khách Hàng',
    content: `At an outsourcing company, employees often write emails to clients. A good professional email has a clear subject line, a polite greeting, and a short message. Always use formal language when writing to clients.

Here is an example email: "Dear Mr. Johnson, I hope this email finds you well. I am writing to update you on the progress of your project. Our team has completed the first phase of development. We are now ready for your review and feedback. Please let me know a good time for a call this week. Best regards, Lan Nguyen, Project Manager."

When you receive a reply, always respond within 24 hours. Thank the client for their feedback. If you do not understand something, ask politely for clarification. Good communication helps build a strong relationship with clients.`,
    translation: `Tại một công ty outsource, nhân viên thường viết email cho khách hàng. Một email chuyên nghiệp tốt có dòng tiêu đề rõ ràng, lời chào lịch sự và nội dung ngắn gọn. Luôn sử dụng ngôn ngữ trang trọng khi viết cho khách hàng.

Đây là một email mẫu: "Kính gửi ông Johnson, Tôi hy vọng email này tìm thấy ông khỏe mạnh. Tôi viết để cập nhật cho ông về tiến độ dự án của ông. Nhóm của chúng tôi đã hoàn thành giai đoạn phát triển đầu tiên. Chúng tôi hiện đã sẵn sàng để nhận xét và phản hồi từ ông. Vui lòng cho tôi biết thời gian thuận tiện để gọi điện trong tuần này. Trân trọng, Lan Nguyễn, Quản lý Dự án."

Khi nhận được phản hồi, hãy luôn trả lời trong vòng 24 giờ. Cảm ơn khách hàng vì phản hồi của họ. Nếu bạn không hiểu điều gì, hãy lịch sự yêu cầu làm rõ. Giao tiếp tốt giúp xây dựng mối quan hệ bền chặt với khách hàng.`,
    vocabulary: [
      { word: 'subject line', meaning: 'dòng tiêu đề email' },
      { word: 'formal language', meaning: 'ngôn ngữ trang trọng' },
      { word: 'phase', meaning: 'giai đoạn' },
      { word: 'feedback', meaning: 'phản hồi' },
      { word: 'clarification', meaning: 'sự làm rõ' },
      { word: 'relationship', meaning: 'mối quan hệ' },
      { word: 'polite', meaning: 'lịch sự' },
      { word: 'greeting', meaning: 'lời chào' },
    ],
    questions: [
      {
        id: 'r002q1',
        question: 'What should a good professional email always include?',
        options: [
          'Funny jokes and casual language',
          'A clear subject line, polite greeting, and short message',
          'Long explanations and technical details',
          'Personal information about the writer',
        ],
        correctAnswer: 1,
        explanation: '"A good professional email has a clear subject line, a polite greeting, and a short message."',
      },
      {
        id: 'r002q2',
        question: 'How quickly should you respond to a client\'s reply?',
        options: ['Within 1 hour', 'Within 24 hours', 'Within 3 days', 'Within a week'],
        correctAnswer: 1,
        explanation: '"When you receive a reply, always respond within 24 hours."',
      },
      {
        id: 'r002q3',
        question: 'What is Lan Nguyen\'s job title in the sample email?',
        options: ['Developer', 'Designer', 'Project Manager', 'Sales Manager'],
        correctAnswer: 2,
        explanation: 'The email is signed "Lan Nguyen, Project Manager."',
      },
      {
        id: 'r002q4',
        question: 'What should you do if you don\'t understand something in a client\'s email?',
        options: [
          'Ignore it',
          'Ask a colleague to reply instead',
          'Politely ask for clarification',
          'Wait and see if they send another email',
        ],
        correctAnswer: 2,
        explanation: '"If you do not understand something, ask politely for clarification."',
      },
    ],
  },

  {
    id: 'r003',
    level: 'beginner',
    topic: 'Onboarding',
    title: 'Welcoming a New Team Member',
    titleVi: 'Chào Đón Thành Viên Mới',
    content: `Today is Hoa's first day at TechSoft, an IT outsourcing company. Her manager, Mr. Duc, introduces her to the team. He shows her the office, explains the company rules, and gives her a new laptop. Hoa also gets an employee ID card and an access card for the building.

The HR department gives Hoa an onboarding checklist. She needs to set up her work email, install the required software, and read the company handbook. She also needs to complete an online security training course before she can access the company network.

Her team leader, Linh, helps Hoa understand the current project. The team is building a mobile application for a Japanese client. Linh gives Hoa a document with all the project details and introduces her to the project management tool they use. Everyone is friendly, and Hoa feels excited to start working.`,
    translation: `Hôm nay là ngày đầu tiên của Hoa tại TechSoft, một công ty outsource IT. Quản lý của cô, ông Đức, giới thiệu cô với nhóm. Ông cho cô xem văn phòng, giải thích các quy định của công ty và tặng cô một chiếc laptop mới. Hoa cũng nhận được thẻ nhân viên và thẻ từ vào tòa nhà.

Phòng nhân sự đưa cho Hoa một danh sách kiểm tra onboarding. Cô cần thiết lập email công việc, cài đặt phần mềm cần thiết và đọc sổ tay nhân viên. Cô cũng cần hoàn thành khóa đào tạo bảo mật trực tuyến trước khi có thể truy cập mạng công ty.

Trưởng nhóm của cô, Linh, giúp Hoa hiểu dự án hiện tại. Nhóm đang xây dựng một ứng dụng di động cho một khách hàng Nhật Bản. Linh đưa cho Hoa một tài liệu với tất cả chi tiết dự án và giới thiệu cô với công cụ quản lý dự án mà họ sử dụng. Mọi người đều thân thiện và Hoa cảm thấy hào hứng khi bắt đầu làm việc.`,
    vocabulary: [
      { word: 'onboarding', meaning: 'quy trình hòa nhập nhân viên mới' },
      { word: 'checklist', meaning: 'danh sách kiểm tra' },
      { word: 'handbook', meaning: 'sổ tay (hướng dẫn)' },
      { word: 'access card', meaning: 'thẻ từ (vào cửa)' },
      { word: 'network', meaning: 'mạng nội bộ' },
      { word: 'mobile application', meaning: 'ứng dụng di động' },
      { word: 'project management tool', meaning: 'công cụ quản lý dự án' },
      { word: 'HR department', meaning: 'phòng nhân sự' },
    ],
    questions: [
      {
        id: 'r003q1',
        question: 'What does Hoa need to complete before accessing the company network?',
        options: [
          'A team lunch',
          'An online security training course',
          'A technical skills test',
          'A meeting with the CEO',
        ],
        correctAnswer: 1,
        explanation: '"She also needs to complete an online security training course before she can access the company network."',
      },
      {
        id: 'r003q2',
        question: 'What kind of application is Hoa\'s team building?',
        options: [
          'A web application for an American client',
          'A desktop application for a Korean client',
          'A mobile application for a Japanese client',
          'A banking app for a local client',
        ],
        correctAnswer: 2,
        explanation: '"The team is building a mobile application for a Japanese client."',
      },
      {
        id: 'r003q3',
        question: 'Who gives Hoa the onboarding checklist?',
        options: ['Mr. Duc', 'Linh', 'The HR department', 'The security team'],
        correctAnswer: 2,
        explanation: '"The HR department gives Hoa an onboarding checklist."',
      },
      {
        id: 'r003q4',
        question: 'What does Mr. Duc NOT do on Hoa\'s first day?',
        options: [
          'Show her the office',
          'Give her a new laptop',
          'Teach her how to code',
          'Explain the company rules',
        ],
        correctAnswer: 2,
        explanation: 'The passage mentions showing the office, giving a laptop, and explaining company rules, but not teaching coding.',
      },
    ],
  },

  // ===================== INTERMEDIATE =====================
  {
    id: 'r004',
    level: 'intermediate',
    topic: 'Sprint Planning',
    title: 'Agile Sprint Planning at a Software Outsourcing Company',
    titleVi: 'Lập Kế Hoạch Sprint Agile Tại Công Ty Outsource Phần Mềm',
    content: `At GlobalTech Solutions, a software outsourcing company based in Ho Chi Minh City, the development teams follow the Agile methodology. Every two weeks, each team holds a sprint planning meeting to organize their upcoming work. During this session, the product owner presents the prioritized backlog items to the team, and the developers estimate how much work they can complete within the sprint.

The sprint planning for Team Alpha started at 10:00 AM on Monday. The product owner, Ms. Thanh, explained the top five user stories from the client's backlog. Each story was discussed in detail, and the developers used story points to estimate the effort required. A user story with three story points means it requires a moderate amount of work, while an eight-point story is quite complex and may need to be broken down into smaller tasks.

After reviewing all the stories, Team Alpha committed to completing twenty story points in this sprint. They also identified potential risks, including a dependency on the client's design team to deliver updated wireframes by Wednesday. The scrum master, Khanh, noted this risk and promised to follow up with the client's project manager that afternoon.`,
    translation: `Tại GlobalTech Solutions, một công ty outsource phần mềm có trụ sở tại Thành phố Hồ Chí Minh, các nhóm phát triển tuân theo phương pháp Agile. Cứ hai tuần một lần, mỗi nhóm tổ chức cuộc họp lập kế hoạch sprint để sắp xếp công việc sắp tới. Trong phiên này, chủ sản phẩm trình bày các mục backlog được ưu tiên cho nhóm, và các nhà phát triển ước tính lượng công việc họ có thể hoàn thành trong sprint.

Buổi lập kế hoạch sprint cho Nhóm Alpha bắt đầu lúc 10:00 sáng thứ Hai. Chủ sản phẩm, cô Thanh, giải thích năm user story hàng đầu từ backlog của khách hàng. Mỗi story được thảo luận chi tiết, và các nhà phát triển sử dụng story point để ước tính công sức cần thiết. Một user story với ba story point có nghĩa là nó đòi hỏi một lượng công việc vừa phải, trong khi story tám điểm khá phức tạp và có thể cần được chia thành các nhiệm vụ nhỏ hơn.

Sau khi xem xét tất cả các story, Nhóm Alpha cam kết hoàn thành hai mươi story point trong sprint này. Họ cũng xác định các rủi ro tiềm ẩn, bao gồm sự phụ thuộc vào nhóm thiết kế của khách hàng để giao wireframe cập nhật vào thứ Tư. Scrum master, Khánh, ghi nhận rủi ro này và hứa sẽ theo dõi với quản lý dự án của khách hàng vào chiều hôm đó.`,
    vocabulary: [
      { word: 'Agile methodology', meaning: 'phương pháp Agile (phát triển linh hoạt)' },
      { word: 'sprint', meaning: 'chu kỳ phát triển ngắn (thường 2 tuần)' },
      { word: 'backlog', meaning: 'danh sách công việc tồn đọng' },
      { word: 'product owner', meaning: 'chủ sản phẩm' },
      { word: 'user story', meaning: 'câu chuyện người dùng (yêu cầu tính năng)' },
      { word: 'story points', meaning: 'điểm ước tính công sức' },
      { word: 'scrum master', meaning: 'người điều phối scrum' },
      { word: 'wireframe', meaning: 'khung giao diện thiết kế' },
      { word: 'dependency', meaning: 'sự phụ thuộc' },
      { word: 'committed', meaning: 'cam kết' },
    ],
    questions: [
      {
        id: 'r004q1',
        question: 'How often does Team Alpha hold a sprint planning meeting?',
        options: ['Every day', 'Every week', 'Every two weeks', 'Every month'],
        correctAnswer: 2,
        explanation: '"Every two weeks, each team holds a sprint planning meeting."',
      },
      {
        id: 'r004q2',
        question: 'What does a user story with eight story points suggest?',
        options: [
          'It is a very simple task',
          'It is quite complex and may need to be broken down',
          'It requires exactly eight hours of work',
          'It is already completed',
        ],
        correctAnswer: 1,
        explanation: '"An eight-point story is quite complex and may need to be broken down into smaller tasks."',
      },
      {
        id: 'r004q3',
        question: 'What is the identified risk in this sprint?',
        options: [
          'A team member is on sick leave',
          'The server is down',
          'Dependency on the client\'s design team for wireframes',
          'The sprint is too short',
        ],
        correctAnswer: 2,
        explanation: '"They also identified potential risks, including a dependency on the client\'s design team to deliver updated wireframes by Wednesday."',
      },
      {
        id: 'r004q4',
        question: 'How many story points did Team Alpha commit to for this sprint?',
        options: ['5 story points', '8 story points', '15 story points', '20 story points'],
        correctAnswer: 3,
        explanation: '"Team Alpha committed to completing twenty story points in this sprint."',
      },
    ],
  },

  {
    id: 'r005',
    level: 'intermediate',
    topic: 'Code Review',
    title: 'The Importance of Code Review in Software Development',
    titleVi: 'Tầm Quan Trọng Của Code Review Trong Phát Triển Phần Mềm',
    content: `Code review is a standard practice at most professional software outsourcing companies. Before any code is merged into the main codebase, it must be reviewed by at least one other developer. This process helps catch bugs, improves code quality, and ensures that the code follows the team's coding standards.

At DataBridge Technologies, developers use a platform called GitHub to submit their code changes as "pull requests." When a developer finishes a feature, they open a pull request and assign it to a reviewer. The reviewer then reads through the changes, leaves comments, and either approves the pull request or requests further modifications.

Good code reviews focus not only on finding errors but also on knowledge sharing. When a senior developer reviews a junior developer's code, it is an excellent opportunity for mentoring. The reviewer might suggest a more efficient algorithm, point out a potential security vulnerability, or recommend a cleaner way to structure the code. At DataBridge, the team has a policy that all pull requests must be reviewed within one business day to avoid slowing down the development process.`,
    translation: `Code review là một thực hành tiêu chuẩn tại hầu hết các công ty outsource phần mềm chuyên nghiệp. Trước khi bất kỳ code nào được hợp nhất vào codebase chính, nó phải được xem xét bởi ít nhất một nhà phát triển khác. Quá trình này giúp phát hiện lỗi, cải thiện chất lượng code và đảm bảo rằng code tuân theo các tiêu chuẩn lập trình của nhóm.

Tại DataBridge Technologies, các nhà phát triển sử dụng nền tảng GitHub để gửi các thay đổi code của họ dưới dạng "pull request". Khi một nhà phát triển hoàn thành một tính năng, họ mở một pull request và giao cho người review. Người review sau đó đọc qua các thay đổi, để lại bình luận và chấp thuận pull request hoặc yêu cầu sửa đổi thêm.

Review code tốt không chỉ tập trung vào việc tìm lỗi mà còn vào việc chia sẻ kiến thức. Khi một nhà phát triển cấp cao review code của nhà phát triển cấp thấp, đó là cơ hội tuyệt vời để hướng dẫn. Người review có thể đề xuất một thuật toán hiệu quả hơn, chỉ ra lỗ hổng bảo mật tiềm ẩn, hoặc đề xuất cách cấu trúc code gọn gàng hơn. Tại DataBridge, nhóm có chính sách tất cả pull request phải được review trong vòng một ngày làm việc để tránh làm chậm quá trình phát triển.`,
    vocabulary: [
      { word: 'code review', meaning: 'quá trình xem xét / kiểm tra code' },
      { word: 'codebase', meaning: 'toàn bộ mã nguồn của dự án' },
      { word: 'pull request', meaning: 'yêu cầu hợp nhất code' },
      { word: 'merge', meaning: 'hợp nhất (code)' },
      { word: 'reviewer', meaning: 'người review' },
      { word: 'algorithm', meaning: 'thuật toán' },
      { word: 'security vulnerability', meaning: 'lỗ hổng bảo mật' },
      { word: 'mentoring', meaning: 'hướng dẫn / kèm cặp' },
      { word: 'modification', meaning: 'sự chỉnh sửa' },
      { word: 'coding standards', meaning: 'tiêu chuẩn lập trình' },
    ],
    questions: [
      {
        id: 'r005q1',
        question: 'What platform does DataBridge Technologies use for code reviews?',
        options: ['Jira', 'GitHub', 'Slack', 'Confluence'],
        correctAnswer: 1,
        explanation: '"developers use a platform called GitHub to submit their code changes as \'pull requests.\'"',
      },
      {
        id: 'r005q2',
        question: 'According to the passage, what is an additional benefit of code reviews besides finding bugs?',
        options: [
          'It saves money',
          'It makes the code run faster',
          'Knowledge sharing and mentoring',
          'It replaces testing',
        ],
        correctAnswer: 2,
        explanation: '"Good code reviews focus not only on finding errors but also on knowledge sharing."',
      },
      {
        id: 'r005q3',
        question: 'What is DataBridge\'s policy on pull request review time?',
        options: [
          'Within 30 minutes',
          'Within one business day',
          'Within three days',
          'Within one week',
        ],
        correctAnswer: 1,
        explanation: '"all pull requests must be reviewed within one business day."',
      },
      {
        id: 'r005q4',
        question: 'How many developers must review code before it is merged?',
        options: ['None', 'At least one', 'At least two', 'At least three'],
        correctAnswer: 1,
        explanation: '"it must be reviewed by at least one other developer."',
      },
    ],
  },

  {
    id: 'r006',
    level: 'intermediate',
    topic: 'Work from Home',
    title: 'The Company\'s Remote Work Policy',
    titleVi: 'Chính Sách Làm Việc Từ Xa Của Công Ty',
    content: `Following the global shift in workplace culture, NexGen Software has updated its remote work policy to better support its employees. According to the new policy, all developers, designers, and quality assurance engineers are allowed to work from home up to three days per week. However, employees are required to be in the office on Tuesdays and Thursdays to facilitate team collaboration and in-person meetings.

Employees who choose to work remotely must ensure they have a stable internet connection and a suitable workspace. The company will provide a monthly allowance of 500,000 VND to help cover internet and electricity costs. All remote workers must be available during core working hours from 9:00 AM to 5:00 PM and must respond to messages within 30 minutes during this period.

Project managers are responsible for tracking their team's productivity and ensuring that deadlines are met regardless of the work location. The HR department will review the remote work policy every six months and make adjustments based on employee feedback and business needs. Employees who consistently fail to meet their performance targets while working remotely may be required to return to the office full-time.`,
    translation: `Theo sự thay đổi toàn cầu trong văn hóa nơi làm việc, NexGen Software đã cập nhật chính sách làm việc từ xa để hỗ trợ nhân viên tốt hơn. Theo chính sách mới, tất cả các nhà phát triển, nhà thiết kế và kỹ sư đảm bảo chất lượng được phép làm việc tại nhà tối đa ba ngày mỗi tuần. Tuy nhiên, nhân viên phải có mặt tại văn phòng vào thứ Ba và thứ Năm để tạo điều kiện cho sự hợp tác nhóm và các cuộc họp trực tiếp.

Nhân viên chọn làm việc từ xa phải đảm bảo họ có kết nối internet ổn định và không gian làm việc phù hợp. Công ty sẽ cung cấp khoản phụ cấp hàng tháng là 500.000 VNĐ để giúp trang trải chi phí internet và điện. Tất cả nhân viên làm việc từ xa phải có mặt trong giờ làm việc cốt lõi từ 9:00 sáng đến 5:00 chiều và phải trả lời tin nhắn trong vòng 30 phút trong khoảng thời gian này.

Các quản lý dự án chịu trách nhiệm theo dõi năng suất của nhóm và đảm bảo rằng thời hạn được đáp ứng bất kể vị trí làm việc. Phòng nhân sự sẽ xem xét chính sách làm việc từ xa sáu tháng một lần và điều chỉnh dựa trên phản hồi của nhân viên và nhu cầu kinh doanh. Nhân viên liên tục không đạt mục tiêu hiệu suất khi làm việc từ xa có thể bị yêu cầu quay lại văn phòng toàn thời gian.`,
    vocabulary: [
      { word: 'remote work policy', meaning: 'chính sách làm việc từ xa' },
      { word: 'quality assurance', meaning: 'đảm bảo chất lượng (QA)' },
      { word: 'facilitate', meaning: 'tạo điều kiện / hỗ trợ' },
      { word: 'allowance', meaning: 'phụ cấp' },
      { word: 'core working hours', meaning: 'giờ làm việc cốt lõi' },
      { word: 'productivity', meaning: 'năng suất' },
      { word: 'performance targets', meaning: 'mục tiêu hiệu suất' },
      { word: 'in-person', meaning: 'trực tiếp (không qua mạng)' },
    ],
    questions: [
      {
        id: 'r006q1',
        question: 'How many days per week can employees work from home under the new policy?',
        options: ['One day', 'Two days', 'Up to three days', 'Five days'],
        correctAnswer: 2,
        explanation: '"all developers, designers, and quality assurance engineers are allowed to work from home up to three days per week."',
      },
      {
        id: 'r006q2',
        question: 'On which days must employees be present in the office?',
        options: [
          'Monday and Wednesday',
          'Tuesday and Thursday',
          'Wednesday and Friday',
          'Monday and Friday',
        ],
        correctAnswer: 1,
        explanation: '"employees are required to be in the office on Tuesdays and Thursdays."',
      },
      {
        id: 'r006q3',
        question: 'What is the monthly remote work allowance provided by NexGen Software?',
        options: [
          '200,000 VND',
          '300,000 VND',
          '500,000 VND',
          '1,000,000 VND',
        ],
        correctAnswer: 2,
        explanation: '"The company will provide a monthly allowance of 500,000 VND."',
      },
      {
        id: 'r006q4',
        question: 'How often will the HR department review the remote work policy?',
        options: ['Every month', 'Every three months', 'Every six months', 'Every year'],
        correctAnswer: 2,
        explanation: '"The HR department will review the remote work policy every six months."',
      },
    ],
  },

  {
    id: 'r007',
    level: 'intermediate',
    topic: 'Performance Review',
    title: 'The Annual Performance Review Process',
    titleVi: 'Quy Trình Đánh Giá Hiệu Suất Hàng Năm',
    content: `Every December, CloudSpark, an outsourcing company specializing in cloud solutions, conducts its annual performance review for all employees. The process begins with a self-assessment, where employees evaluate their own achievements and areas for improvement over the past year. This self-assessment is then shared with their direct manager before the formal review meeting.

During the performance review meeting, the manager and employee discuss the results of the year against the goals that were set at the beginning of the year. The manager provides feedback on the employee's strengths and areas that need development. Each employee is given a rating from one to five, where one means "needs improvement" and five means "exceptional performance."

The outcome of the performance review directly influences salary increases and promotions. Employees who receive a rating of four or five are eligible for a salary increase of five to fifteen percent. Those who receive a rating of three may receive a smaller increase, while employees rated one or two are placed on a Performance Improvement Plan (PIP). The PIP outlines specific actions the employee must take to improve their performance within the next three months.`,
    translation: `Mỗi tháng 12, CloudSpark, một công ty outsource chuyên về giải pháp đám mây, tiến hành đánh giá hiệu suất hàng năm cho tất cả nhân viên. Quy trình bắt đầu bằng tự đánh giá, nơi nhân viên đánh giá thành tích của chính mình và các lĩnh vực cần cải thiện trong năm vừa qua. Bản tự đánh giá này sau đó được chia sẻ với quản lý trực tiếp của họ trước cuộc họp đánh giá chính thức.

Trong cuộc họp đánh giá hiệu suất, quản lý và nhân viên thảo luận về kết quả trong năm so với các mục tiêu đã đặt ra vào đầu năm. Quản lý cung cấp phản hồi về điểm mạnh của nhân viên và các lĩnh vực cần phát triển. Mỗi nhân viên được xếp loại từ một đến năm, trong đó một có nghĩa là "cần cải thiện" và năm có nghĩa là "hiệu suất xuất sắc".

Kết quả của đánh giá hiệu suất ảnh hưởng trực tiếp đến tăng lương và thăng chức. Nhân viên nhận xếp loại bốn hoặc năm đủ điều kiện tăng lương từ năm đến mười lăm phần trăm. Những người nhận xếp loại ba có thể nhận được mức tăng nhỏ hơn, trong khi nhân viên được xếp loại một hoặc hai sẽ được đưa vào Kế hoạch Cải thiện Hiệu suất (PIP). PIP phác thảo các hành động cụ thể mà nhân viên phải thực hiện để cải thiện hiệu suất của họ trong ba tháng tiếp theo.`,
    vocabulary: [
      { word: 'performance review', meaning: 'đánh giá hiệu suất' },
      { word: 'self-assessment', meaning: 'tự đánh giá' },
      { word: 'achievements', meaning: 'thành tích' },
      { word: 'strengths', meaning: 'điểm mạnh' },
      { word: 'exceptional performance', meaning: 'hiệu suất xuất sắc' },
      { word: 'promotion', meaning: 'thăng chức' },
      { word: 'Performance Improvement Plan (PIP)', meaning: 'Kế hoạch Cải thiện Hiệu suất' },
      { word: 'eligible', meaning: 'đủ điều kiện' },
    ],
    questions: [
      {
        id: 'r007q1',
        question: 'When does CloudSpark conduct its annual performance review?',
        options: ['March', 'June', 'September', 'December'],
        correctAnswer: 3,
        explanation: '"Every December, CloudSpark...conducts its annual performance review."',
      },
      {
        id: 'r007q2',
        question: 'What rating makes an employee eligible for a 5-15% salary increase?',
        options: ['Rating 1 or 2', 'Rating 2 or 3', 'Rating 3 or 4', 'Rating 4 or 5'],
        correctAnswer: 3,
        explanation: '"Employees who receive a rating of four or five are eligible for a salary increase of five to fifteen percent."',
      },
      {
        id: 'r007q3',
        question: 'What is a Performance Improvement Plan (PIP)?',
        options: [
          'A plan for getting a promotion',
          'A training course for new employees',
          'A plan outlining actions to improve performance within 3 months',
          'A bonus payment plan',
        ],
        correctAnswer: 2,
        explanation: '"The PIP outlines specific actions the employee must take to improve their performance within the next three months."',
      },
      {
        id: 'r007q4',
        question: 'What is the first step in the performance review process?',
        options: [
          'The manager writes a report',
          'The employee writes a self-assessment',
          'HR sends a review form',
          'The team has a group meeting',
        ],
        correctAnswer: 1,
        explanation: '"The process begins with a self-assessment, where employees evaluate their own achievements."',
      },
    ],
  },

  {
    id: 'r008',
    level: 'intermediate',
    topic: 'Client Communication',
    title: 'Handling Client Feedback and Change Requests',
    titleVi: 'Xử Lý Phản Hồi Khách Hàng Và Yêu Cầu Thay Đổi',
    content: `Managing client feedback is one of the most critical skills in software outsourcing. When a client is dissatisfied with a deliverable, the project manager must handle the situation professionally and constructively. At SkyCode Vietnam, all feedback received from clients is documented in a feedback log and assigned a priority level: critical, high, medium, or low.

When a client submits a change request, the development team first conducts an impact analysis to understand how the change will affect the project timeline, budget, and existing features. If the requested change is outside the original project scope, the project manager must negotiate with the client regarding additional costs and timeline extensions. This process is called change management.

Last week, a client from Singapore requested significant changes to the user interface of a web application that was already 80% complete. The project manager, Mr. Long, scheduled a call with the client to discuss the implications. He explained that implementing the changes would require an additional three weeks and a budget increase of 15%. The client agreed to the new terms, and a change order document was signed by both parties before the development team began the revisions.`,
    translation: `Quản lý phản hồi của khách hàng là một trong những kỹ năng quan trọng nhất trong outsource phần mềm. Khi khách hàng không hài lòng với sản phẩm bàn giao, người quản lý dự án phải xử lý tình huống một cách chuyên nghiệp và mang tính xây dựng. Tại SkyCode Vietnam, tất cả phản hồi nhận được từ khách hàng được ghi lại trong nhật ký phản hồi và được gán mức độ ưu tiên: nghiêm trọng, cao, trung bình hoặc thấp.

Khi khách hàng gửi yêu cầu thay đổi, nhóm phát triển trước tiên tiến hành phân tích tác động để hiểu thay đổi sẽ ảnh hưởng như thế nào đến tiến độ dự án, ngân sách và các tính năng hiện có. Nếu thay đổi được yêu cầu nằm ngoài phạm vi dự án ban đầu, người quản lý dự án phải đàm phán với khách hàng về chi phí bổ sung và gia hạn thời gian. Quá trình này được gọi là quản lý thay đổi.

Tuần trước, một khách hàng từ Singapore yêu cầu thay đổi đáng kể giao diện người dùng của một ứng dụng web đã hoàn thành 80%. Người quản lý dự án, ông Long, đã lên lịch gọi điện với khách hàng để thảo luận về các hệ lụy. Ông giải thích rằng việc thực hiện các thay đổi sẽ cần thêm ba tuần và tăng ngân sách 15%. Khách hàng đồng ý với các điều khoản mới, và một tài liệu lệnh thay đổi đã được ký bởi cả hai bên trước khi nhóm phát triển bắt đầu sửa đổi.`,
    vocabulary: [
      { word: 'deliverable', meaning: 'sản phẩm bàn giao' },
      { word: 'feedback log', meaning: 'nhật ký phản hồi' },
      { word: 'change request', meaning: 'yêu cầu thay đổi' },
      { word: 'impact analysis', meaning: 'phân tích tác động' },
      { word: 'project scope', meaning: 'phạm vi dự án' },
      { word: 'change management', meaning: 'quản lý thay đổi' },
      { word: 'change order', meaning: 'lệnh thay đổi (tài liệu)' },
      { word: 'implications', meaning: 'hệ lụy / tác động' },
      { word: 'constructively', meaning: 'mang tính xây dựng' },
      { word: 'negotiate', meaning: 'đàm phán' },
    ],
    questions: [
      {
        id: 'r008q1',
        question: 'What does SkyCode Vietnam do with all client feedback?',
        options: [
          'Ignores low-priority feedback',
          'Documents it in a feedback log with a priority level',
          'Sends it directly to the development team',
          'Emails it back to the client',
        ],
        correctAnswer: 1,
        explanation: '"all feedback received from clients is documented in a feedback log and assigned a priority level."',
      },
      {
        id: 'r008q2',
        question: 'What happens when a change request is outside the original project scope?',
        options: [
          'The team implements it for free',
          'The request is rejected',
          'The project manager negotiates additional costs and timeline',
          'The client is asked to wait',
        ],
        correctAnswer: 2,
        explanation: '"the project manager must negotiate with the client regarding additional costs and timeline extensions."',
      },
      {
        id: 'r008q3',
        question: 'What percentage was the web application already completed when the Singapore client requested changes?',
        options: ['50%', '60%', '80%', '90%'],
        correctAnswer: 2,
        explanation: '"a web application that was already 80% complete."',
      },
      {
        id: 'r008q4',
        question: 'What did both parties sign before the revisions began?',
        options: [
          'A new contract',
          'A non-disclosure agreement',
          'A change order document',
          'A project cancellation form',
        ],
        correctAnswer: 2,
        explanation: '"a change order document was signed by both parties before the development team began the revisions."',
      },
    ],
  },

  {
    id: 'r009',
    level: 'intermediate',
    topic: 'Team Building',
    title: 'Quarterly Team Building Event',
    titleVi: 'Sự Kiện Xây Dựng Đội Nhóm Hàng Quý',
    content: `Twice a year, InnoSoft Vietnam organizes a team building event to strengthen relationships among employees from different departments. This year's summer event was held at a resort in Vung Tau over two days. Approximately 150 employees from the development, design, QA, and business development teams participated in the event.

The first day focused on outdoor activities designed to promote teamwork and communication. Teams of ten employees competed in activities such as beach volleyball, a scavenger hunt, and a cooking competition. Managers were deliberately placed in different groups from their usual team members to encourage cross-department interaction and build new connections across the organization.

On the second day, the company's leadership team held a town hall meeting where they presented the company's achievements for the first half of the year, shared the business strategy for the remaining months, and recognized outstanding employees with awards. The CEO, Ms. Phuong, emphasized the importance of a positive work culture in retaining talented employees in the competitive outsourcing market. The event concluded with a gala dinner and a performance by a local band.`,
    translation: `Hai lần mỗi năm, InnoSoft Vietnam tổ chức sự kiện xây dựng đội nhóm để tăng cường mối quan hệ giữa các nhân viên từ các phòng ban khác nhau. Sự kiện mùa hè năm nay được tổ chức tại một khu nghỉ dưỡng ở Vũng Tàu trong hai ngày. Khoảng 150 nhân viên từ các nhóm phát triển, thiết kế, QA và phát triển kinh doanh đã tham gia sự kiện.

Ngày đầu tiên tập trung vào các hoạt động ngoài trời được thiết kế để thúc đẩy tinh thần đồng đội và giao tiếp. Các nhóm gồm mười nhân viên thi đấu trong các hoạt động như bóng chuyền bãi biển, trò chơi tìm kiếm và thi nấu ăn. Các quản lý được cố tình đặt vào các nhóm khác với các thành viên thường xuyên của họ để khuyến khích tương tác liên phòng ban và xây dựng các mối kết nối mới trong tổ chức.

Vào ngày thứ hai, nhóm lãnh đạo công ty tổ chức cuộc họp toàn thể nơi họ trình bày thành tích của công ty trong nửa đầu năm, chia sẻ chiến lược kinh doanh cho các tháng còn lại, và ghi nhận các nhân viên xuất sắc bằng giải thưởng. Giám đốc điều hành, bà Phương, nhấn mạnh tầm quan trọng của văn hóa làm việc tích cực trong việc giữ chân nhân viên tài năng trong thị trường outsource cạnh tranh. Sự kiện kết thúc với bữa tối gala và màn trình diễn của một ban nhạc địa phương.`,
    vocabulary: [
      { word: 'team building', meaning: 'xây dựng đội nhóm' },
      { word: 'scavenger hunt', meaning: 'trò chơi tìm kiếm đồ vật' },
      { word: 'cross-department interaction', meaning: 'tương tác liên phòng ban' },
      { word: 'town hall meeting', meaning: 'cuộc họp toàn thể công ty' },
      { word: 'business strategy', meaning: 'chiến lược kinh doanh' },
      { word: 'outstanding', meaning: 'xuất sắc' },
      { word: 'retaining', meaning: 'giữ chân (nhân viên)' },
      { word: 'gala dinner', meaning: 'bữa tối lễ hội' },
    ],
    questions: [
      {
        id: 'r009q1',
        question: 'How often does InnoSoft Vietnam organize team building events?',
        options: ['Once a year', 'Twice a year', 'Every quarter', 'Every month'],
        correctAnswer: 1,
        explanation: '"Twice a year, InnoSoft Vietnam organizes a team building event."',
      },
      {
        id: 'r009q2',
        question: 'Why were managers placed in different groups from their usual team members?',
        options: [
          'To make the games fairer',
          'Because there were too many managers',
          'To encourage cross-department interaction',
          'Because the CEO required it',
        ],
        correctAnswer: 2,
        explanation: '"Managers were deliberately placed in different groups...to encourage cross-department interaction."',
      },
      {
        id: 'r009q3',
        question: 'What did the CEO emphasize at the town hall meeting?',
        options: [
          'The importance of working longer hours',
          'The importance of a positive work culture for retaining talent',
          'The plan to hire 200 new employees',
          'The company\'s plan to expand overseas',
        ],
        correctAnswer: 1,
        explanation: '"The CEO emphasized the importance of a positive work culture in retaining talented employees."',
      },
      {
        id: 'r009q4',
        question: 'How many employees participated in the event?',
        options: ['About 50', 'About 100', 'About 150', 'About 200'],
        correctAnswer: 2,
        explanation: '"Approximately 150 employees...participated in the event."',
      },
    ],
  },

  // ===================== ADVANCED =====================
  {
    id: 'r010',
    level: 'advanced',
    topic: 'Contract Negotiation',
    title: 'Negotiating a Software Development Contract',
    titleVi: 'Đàm Phán Hợp Đồng Phát Triển Phần Mềm',
    content: `Securing a long-term contract with a new client is a significant milestone for any outsourcing company. The negotiation process requires not only technical expertise but also strong business acumen and interpersonal skills. When VietCode Solutions received an invitation to bid for a two-year software development project from a German automotive company, the sales director assembled a team comprising the lead architect, a senior project manager, and a legal advisor to prepare the proposal.

The initial proposal outlined the technical approach, team composition, delivery milestones, and pricing structure. The German client's procurement team reviewed the proposal and responded with several concerns, primarily regarding the intellectual property rights, the service level agreement (SLA), and the payment terms. They proposed a milestone-based payment structure, releasing funds only upon successful completion and acceptance of each deliverable. VietCode's management found this arrangement acceptable but insisted on a 30% upfront payment to cover initial infrastructure costs and team onboarding.

After two rounds of negotiations conducted via video conference, both parties reached a consensus on the key terms. The final contract included a clearly defined scope of work, a penalty clause for delays exceeding seven business days without prior written notice, and a confidentiality agreement to protect the client's proprietary information. VietCode's legal team ensured that the arbitration clause stipulated disputes would be resolved under the rules of the Singapore International Arbitration Centre, a neutral jurisdiction acceptable to both parties.`,
    translation: `Việc đảm bảo một hợp đồng dài hạn với khách hàng mới là một cột mốc quan trọng đối với bất kỳ công ty outsource nào. Quá trình đàm phán đòi hỏi không chỉ chuyên môn kỹ thuật mà còn khả năng kinh doanh và kỹ năng giao tiếp tốt. Khi VietCode Solutions nhận được lời mời thầu cho một dự án phát triển phần mềm hai năm từ một công ty ô tô Đức, giám đốc bán hàng đã tập hợp một nhóm gồm kiến trúc sư trưởng, một quản lý dự án cấp cao và cố vấn pháp lý để chuẩn bị đề xuất.

Đề xuất ban đầu phác thảo cách tiếp cận kỹ thuật, thành phần nhóm, các mốc bàn giao và cơ cấu giá. Nhóm mua sắm của khách hàng Đức xem xét đề xuất và phản hồi với một số lo ngại, chủ yếu liên quan đến quyền sở hữu trí tuệ, thỏa thuận mức dịch vụ (SLA) và điều khoản thanh toán. Họ đề xuất cơ cấu thanh toán theo mốc, giải phóng tiền chỉ khi hoàn thành thành công và chấp nhận từng sản phẩm bàn giao. Ban lãnh đạo VietCode thấy thỏa thuận này chấp nhận được nhưng nhấn mạnh cần thanh toán trước 30% để trang trải chi phí cơ sở hạ tầng ban đầu và onboarding nhóm.

Sau hai vòng đàm phán được tiến hành qua hội nghị video, cả hai bên đã đạt được sự đồng thuận về các điều khoản chính. Hợp đồng cuối cùng bao gồm phạm vi công việc được xác định rõ ràng, điều khoản phạt cho sự chậm trễ vượt quá bảy ngày làm việc mà không có thông báo bằng văn bản trước, và thỏa thuận bảo mật để bảo vệ thông tin độc quyền của khách hàng. Nhóm pháp lý của VietCode đảm bảo rằng điều khoản trọng tài quy định các tranh chấp sẽ được giải quyết theo các quy tắc của Trung tâm Trọng tài Quốc tế Singapore, một quyền tài phán trung lập được cả hai bên chấp nhận.`,
    vocabulary: [
      { word: 'business acumen', meaning: 'nhạy bén thương mại / nhạy cảm kinh doanh' },
      { word: 'bid', meaning: 'thầu / đề xuất dự thầu' },
      { word: 'intellectual property rights', meaning: 'quyền sở hữu trí tuệ' },
      { word: 'service level agreement (SLA)', meaning: 'thỏa thuận mức dịch vụ' },
      { word: 'milestone-based payment', meaning: 'thanh toán theo mốc tiến độ' },
      { word: 'upfront payment', meaning: 'thanh toán trước' },
      { word: 'penalty clause', meaning: 'điều khoản phạt' },
      { word: 'confidentiality agreement', meaning: 'thỏa thuận bảo mật' },
      { word: 'arbitration', meaning: 'trọng tài (giải quyết tranh chấp)' },
      { word: 'proprietary information', meaning: 'thông tin độc quyền' },
    ],
    questions: [
      {
        id: 'r010q1',
        question: 'What were the German client\'s primary concerns about the initial proposal?',
        options: [
          'The team size and project timeline',
          'Intellectual property rights, SLA, and payment terms',
          'The technical approach and programming language',
          'The location of the development team',
        ],
        correctAnswer: 1,
        explanation: '"responded with several concerns, primarily regarding the intellectual property rights, the service level agreement (SLA), and the payment terms."',
      },
      {
        id: 'r010q2',
        question: 'What did VietCode insist on regarding payment?',
        options: [
          'Full payment upfront',
          'Monthly installments',
          'A 30% upfront payment',
          'Payment only after full project completion',
        ],
        correctAnswer: 2,
        explanation: '"VietCode\'s management...insisted on a 30% upfront payment to cover initial infrastructure costs and team onboarding."',
      },
      {
        id: 'r010q3',
        question: 'How many rounds of negotiations were conducted before reaching an agreement?',
        options: ['One round', 'Two rounds', 'Three rounds', 'Four rounds'],
        correctAnswer: 1,
        explanation: '"After two rounds of negotiations conducted via video conference, both parties reached a consensus."',
      },
      {
        id: 'r010q4',
        question: 'Where would disputes be resolved according to the final contract?',
        options: [
          'German courts',
          'Vietnamese courts',
          'The Singapore International Arbitration Centre',
          'The International Court of Justice',
        ],
        correctAnswer: 2,
        explanation: '"disputes would be resolved under the rules of the Singapore International Arbitration Centre."',
      },
    ],
  },

  {
    id: 'r011',
    level: 'advanced',
    topic: 'Risk Management',
    title: 'Project Risk Management in Outsourcing',
    titleVi: 'Quản Lý Rủi Ro Dự Án Trong Outsourcing',
    content: `Effective risk management is a cornerstone of successful project delivery in the outsourcing industry. Unlike in-house development teams, outsourcing companies face unique risks stemming from factors such as cultural and time zone differences, communication barriers, rapidly changing client requirements, and the challenge of building trust with geographically distant stakeholders. At ProSoft Asia, risk management is not an afterthought but an integral part of the project initiation phase.

During the project kickoff, the risk management team conducts a formal risk assessment workshop with representatives from all key stakeholder groups. Each identified risk is evaluated based on two dimensions: probability of occurrence and potential impact on the project. The results are plotted on a risk matrix, with high-probability, high-impact risks classified as "critical" and prioritized for immediate mitigation planning. Common risk categories include technical risks (e.g., integration failures, technology obsolescence), operational risks (e.g., key personnel turnover, infrastructure downtime), and contractual risks (e.g., scope creep, payment disputes).

For each critical risk, the team develops a mitigation strategy and a contingency plan. The mitigation strategy aims to reduce the likelihood or impact of the risk occurring, while the contingency plan outlines the actions to be taken if the risk materializes despite mitigation efforts. Risk owners are assigned to monitor each risk throughout the project lifecycle and report their status in bi-weekly risk review meetings. This systematic approach has enabled ProSoft Asia to maintain a project success rate of 94% over the past three years.`,
    translation: `Quản lý rủi ro hiệu quả là nền tảng của việc bàn giao dự án thành công trong ngành outsource. Không giống như các nhóm phát triển nội bộ, các công ty outsource đối mặt với những rủi ro đặc thù xuất phát từ các yếu tố như sự khác biệt về văn hóa và múi giờ, rào cản giao tiếp, yêu cầu của khách hàng thay đổi nhanh chóng và thách thức xây dựng lòng tin với các bên liên quan ở xa về mặt địa lý. Tại ProSoft Asia, quản lý rủi ro không phải là suy nghĩ sau mà là một phần không thể thiếu của giai đoạn khởi động dự án.

Trong buổi khởi động dự án, nhóm quản lý rủi ro tiến hành hội thảo đánh giá rủi ro chính thức với đại diện từ tất cả các nhóm bên liên quan chính. Mỗi rủi ro được xác định được đánh giá dựa trên hai chiều: xác suất xảy ra và tác động tiềm năng đến dự án. Kết quả được vẽ trên ma trận rủi ro, với các rủi ro xác suất cao, tác động cao được phân loại là "nghiêm trọng" và được ưu tiên lập kế hoạch giảm thiểu ngay lập tức. Các loại rủi ro phổ biến bao gồm rủi ro kỹ thuật (ví dụ: lỗi tích hợp, lỗi thời công nghệ), rủi ro vận hành (ví dụ: nhân sự chủ chốt nghỉ việc, ngừng hoạt động cơ sở hạ tầng) và rủi ro hợp đồng (ví dụ: phình to phạm vi, tranh chấp thanh toán).

Đối với mỗi rủi ro nghiêm trọng, nhóm phát triển một chiến lược giảm thiểu và kế hoạch dự phòng. Chiến lược giảm thiểu nhằm mục đích giảm khả năng hoặc tác động của rủi ro xảy ra, trong khi kế hoạch dự phòng phác thảo các hành động cần thực hiện nếu rủi ro xảy ra bất chấp các nỗ lực giảm thiểu. Chủ sở hữu rủi ro được giao để theo dõi từng rủi ro trong suốt vòng đời dự án và báo cáo tình trạng của chúng trong các cuộc họp xem xét rủi ro hai tuần một lần. Cách tiếp cận có hệ thống này đã giúp ProSoft Asia duy trì tỷ lệ thành công dự án 94% trong ba năm qua.`,
    vocabulary: [
      { word: 'risk assessment', meaning: 'đánh giá rủi ro' },
      { word: 'risk matrix', meaning: 'ma trận rủi ro' },
      { word: 'mitigation strategy', meaning: 'chiến lược giảm thiểu' },
      { word: 'contingency plan', meaning: 'kế hoạch dự phòng' },
      { word: 'scope creep', meaning: 'phình to phạm vi (ngoài dự kiến)' },
      { word: 'technology obsolescence', meaning: 'sự lỗi thời của công nghệ' },
      { word: 'stakeholders', meaning: 'các bên liên quan' },
      { word: 'personnel turnover', meaning: 'nhân sự nghỉ việc / luân chuyển' },
      { word: 'probability', meaning: 'xác suất' },
      { word: 'integral', meaning: 'không thể thiếu / cốt lõi' },
    ],
    questions: [
      {
        id: 'r011q1',
        question: 'According to the passage, what makes outsourcing risk management unique compared to in-house teams?',
        options: [
          'Outsourcing projects are always larger',
          'Factors like cultural differences, time zones, and building remote trust',
          'Outsourcing teams have less technical expertise',
          'Outsourcing projects have stricter deadlines',
        ],
        correctAnswer: 1,
        explanation: '"outsourcing companies face unique risks stemming from factors such as cultural and time zone differences, communication barriers..."',
      },
      {
        id: 'r011q2',
        question: 'What two factors are used to evaluate each identified risk?',
        options: [
          'Cost and time',
          'Team size and technology',
          'Probability of occurrence and potential impact',
          'Client importance and project phase',
        ],
        correctAnswer: 2,
        explanation: '"Each identified risk is evaluated based on two dimensions: probability of occurrence and potential impact on the project."',
      },
      {
        id: 'r011q3',
        question: 'What is the difference between a mitigation strategy and a contingency plan?',
        options: [
          'There is no difference; they are the same thing',
          'Mitigation reduces likelihood/impact; contingency responds if the risk occurs',
          'Mitigation is for technical risks; contingency is for financial risks',
          'Mitigation is done before the project; contingency is done after',
        ],
        correctAnswer: 1,
        explanation: '"The mitigation strategy aims to reduce the likelihood or impact... while the contingency plan outlines the actions to be taken if the risk materializes."',
      },
      {
        id: 'r011q4',
        question: 'What is ProSoft Asia\'s project success rate over the past three years?',
        options: ['84%', '89%', '94%', '98%'],
        correctAnswer: 2,
        explanation: '"ProSoft Asia to maintain a project success rate of 94% over the past three years."',
      },
    ],
  },

  {
    id: 'r012',
    level: 'advanced',
    topic: 'Business Strategy',
    title: 'Quarterly Business Review and Growth Strategy',
    titleVi: 'Đánh Giá Kinh Doanh Hàng Quý Và Chiến Lược Tăng Trưởng',
    content: `The third quarter business review at Vertex Digital Services revealed both promising opportunities and significant challenges for the company. Revenue for Q3 reached $4.2 million, representing a 12% year-over-year growth, but fell short of the $4.8 million target by approximately 12.5%. The shortfall was primarily attributed to delayed project starts from two large clients in the financial services sector, who postponed their digital transformation initiatives due to regulatory uncertainties in their respective markets.

Despite the revenue miss, the company's management team highlighted several positive indicators. Client retention rate improved to 91%, up from 87% in the previous year, reflecting the strengthened account management practices implemented following last year's strategic review. Additionally, the average contract value increased by 18%, suggesting that the company's repositioning towards higher-value, complex projects was gaining traction in the market.

Looking ahead to Q4 and the following fiscal year, the CEO outlined a three-pronged growth strategy. First, the company would aggressively pursue enterprise clients in the healthcare and logistics sectors, which had demonstrated resilience to economic downturns. Second, Vertex planned to establish a Center of Excellence for artificial intelligence and machine learning, positioning the company as a premium provider in the rapidly growing AI outsourcing market. Third, the company announced plans to open a new delivery center in Da Nang to access a broader talent pool and reduce operational costs, which had been escalating in Ho Chi Minh City due to fierce competition for skilled developers.`,
    translation: `Đánh giá kinh doanh quý ba tại Vertex Digital Services cho thấy cả cơ hội đầy hứa hẹn và những thách thức đáng kể cho công ty. Doanh thu quý 3 đạt 4,2 triệu đô la, tăng trưởng 12% so với năm trước, nhưng thấp hơn mục tiêu 4,8 triệu đô la khoảng 12,5%. Sự thiếu hụt chủ yếu được quy cho việc chậm khởi động dự án từ hai khách hàng lớn trong lĩnh vực dịch vụ tài chính, những người đã trì hoãn các sáng kiến chuyển đổi kỹ thuật số của họ do sự không chắc chắn về quy định trong các thị trường tương ứng của họ.

Bất chấp việc bỏ lỡ doanh thu, nhóm quản lý của công ty nhấn mạnh một số chỉ số tích cực. Tỷ lệ giữ chân khách hàng cải thiện lên 91%, tăng từ 87% trong năm trước, phản ánh các thực hành quản lý tài khoản được tăng cường thực hiện sau đánh giá chiến lược năm ngoái. Ngoài ra, giá trị hợp đồng trung bình tăng 18%, gợi ý rằng việc tái định vị của công ty hướng tới các dự án phức tạp có giá trị cao hơn đang dần được thị trường chấp nhận.

Nhìn về phía trước Q4 và năm tài chính tiếp theo, CEO đã phác thảo chiến lược tăng trưởng ba hướng. Đầu tiên, công ty sẽ tích cực theo đuổi các khách hàng doanh nghiệp trong lĩnh vực chăm sóc sức khỏe và logistics, những lĩnh vực đã thể hiện khả năng phục hồi trước suy thoái kinh tế. Thứ hai, Vertex có kế hoạch thành lập Trung tâm Xuất sắc về trí tuệ nhân tạo và học máy, định vị công ty như một nhà cung cấp cao cấp trong thị trường outsource AI đang tăng trưởng nhanh chóng. Thứ ba, công ty thông báo kế hoạch mở trung tâm bàn giao mới tại Đà Nẵng để tiếp cận nguồn nhân tài rộng hơn và giảm chi phí vận hành, đã leo thang tại Thành phố Hồ Chí Minh do sự cạnh tranh khốc liệt để thu hút các nhà phát triển có tay nghề.`,
    vocabulary: [
      { word: 'year-over-year growth', meaning: 'tăng trưởng so với cùng kỳ năm trước' },
      { word: 'client retention rate', meaning: 'tỷ lệ giữ chân khách hàng' },
      { word: 'digital transformation', meaning: 'chuyển đổi kỹ thuật số' },
      { word: 'gaining traction', meaning: 'dần được chấp nhận / tiến triển' },
      { word: 'three-pronged strategy', meaning: 'chiến lược ba hướng' },
      { word: 'Center of Excellence', meaning: 'Trung tâm Xuất sắc' },
      { word: 'resilience', meaning: 'khả năng phục hồi' },
      { word: 'economic downturn', meaning: 'suy thoái kinh tế' },
      { word: 'fiscal year', meaning: 'năm tài chính' },
      { word: 'talent pool', meaning: 'nguồn nhân tài' },
    ],
    questions: [
      {
        id: 'r012q1',
        question: 'Why did Vertex Digital Services fall short of its Q3 revenue target?',
        options: [
          'Key employees resigned',
          'Two large clients delayed project starts due to regulatory uncertainties',
          'The company lost several existing clients',
          'Operating costs were too high',
        ],
        correctAnswer: 1,
        explanation: '"The shortfall was primarily attributed to delayed project starts from two large clients...who postponed...due to regulatory uncertainties."',
      },
      {
        id: 'r012q2',
        question: 'What does the improvement in client retention rate from 87% to 91% suggest?',
        options: [
          'The company reduced its prices',
          'Strengthened account management practices were effective',
          'The company got many new clients',
          'Clients had no other options',
        ],
        correctAnswer: 1,
        explanation: '"reflecting the strengthened account management practices implemented following last year\'s strategic review."',
      },
      {
        id: 'r012q3',
        question: 'Why does Vertex plan to open a delivery center in Da Nang?',
        options: [
          'Because the government required it',
          'To serve clients in Central Vietnam',
          'To access a broader talent pool and reduce escalating operational costs',
          'Because the CEO is from Da Nang',
        ],
        correctAnswer: 2,
        explanation: '"to access a broader talent pool and reduce operational costs, which had been escalating in Ho Chi Minh City."',
      },
      {
        id: 'r012q4',
        question: 'By how much did the average contract value increase?',
        options: ['8%', '12%', '15%', '18%'],
        correctAnswer: 3,
        explanation: '"the average contract value increased by 18%."',
      },
    ],
  },

  {
    id: 'r013',
    level: 'intermediate',
    topic: 'Project Management',
    title: 'Managing Project Deadlines and Delays',
    titleVi: 'Quản Lý Thời Hạn Dự Án Và Sự Chậm Trễ',
    content: `In the fast-paced world of software outsourcing, missing a project deadline can have serious consequences, including financial penalties, damaged client relationships, and reputational harm. At Sunrise Tech, project managers are trained to proactively identify and communicate potential delays as early as possible rather than waiting until the last moment.

When a team lead suspects that a sprint will not be completed on time, they are required to immediately notify the project manager with a written status update. The update must include the reason for the delay, the expected new completion date, and a recovery plan detailing the steps the team will take to get back on schedule. Common recovery strategies include adding resources, working overtime, reducing the scope of the current sprint, or reprioritizing tasks.

Recently, the team working on a logistics platform for a US client encountered unexpected technical challenges when integrating with the client's legacy API system. The integration was estimated to take three days but ultimately required two additional weeks. The project manager scheduled a call with the client to explain the situation transparently, presenting a detailed timeline with revised milestones. The client appreciated the proactive communication and agreed to the revised deadline without any penalty clauses being invoked, largely because the project manager had provided early warning and a clear recovery plan.`,
    translation: `Trong thế giới outsource phần mềm nhịp độ nhanh, bỏ lỡ thời hạn dự án có thể có hậu quả nghiêm trọng, bao gồm phạt tài chính, tổn hại mối quan hệ khách hàng và ảnh hưởng danh tiếng. Tại Sunrise Tech, các quản lý dự án được đào tạo để chủ động xác định và thông báo về các sự chậm trễ tiềm ẩn càng sớm càng tốt thay vì chờ đến phút cuối.

Khi trưởng nhóm nghi ngờ rằng một sprint sẽ không hoàn thành đúng hạn, họ phải thông báo ngay cho quản lý dự án bằng bản cập nhật trạng thái bằng văn bản. Bản cập nhật phải bao gồm lý do chậm trễ, ngày hoàn thành mới dự kiến và kế hoạch phục hồi chi tiết các bước nhóm sẽ thực hiện để đưa tiến độ trở lại đúng hướng. Các chiến lược phục hồi phổ biến bao gồm bổ sung nguồn lực, làm thêm giờ, giảm phạm vi sprint hiện tại hoặc ưu tiên lại nhiệm vụ.

Gần đây, nhóm làm việc trên một nền tảng logistics cho khách hàng Mỹ gặp phải những thách thức kỹ thuật không lường trước khi tích hợp với hệ thống API cũ của khách hàng. Việc tích hợp được ước tính mất ba ngày nhưng cuối cùng cần thêm hai tuần. Quản lý dự án đã lên lịch gọi điện với khách hàng để giải thích tình huống một cách minh bạch, trình bày một lịch trình chi tiết với các mốc được sửa đổi. Khách hàng đánh giá cao sự giao tiếp chủ động và đồng ý với thời hạn sửa đổi mà không kích hoạt bất kỳ điều khoản phạt nào, chủ yếu vì quản lý dự án đã cảnh báo sớm và có kế hoạch phục hồi rõ ràng.`,
    vocabulary: [
      { word: 'deadline', meaning: 'thời hạn' },
      { word: 'reputational harm', meaning: 'tổn hại danh tiếng' },
      { word: 'proactively', meaning: 'chủ động' },
      { word: 'recovery plan', meaning: 'kế hoạch phục hồi' },
      { word: 'reprioritizing', meaning: 'ưu tiên lại' },
      { word: 'legacy API', meaning: 'hệ thống API cũ' },
      { word: 'integration', meaning: 'tích hợp' },
      { word: 'penalty clauses', meaning: 'điều khoản phạt' },
      { word: 'invoking', meaning: 'kích hoạt / áp dụng' },
      { word: 'transparently', meaning: 'một cách minh bạch' },
    ],
    questions: [
      {
        id: 'r013q1',
        question: 'What must a team lead\'s written status update include when a delay is anticipated?',
        options: [
          'Only the reason for the delay',
          'The reason, new completion date, and recovery plan',
          'A request for more resources',
          'An apology to the client',
        ],
        correctAnswer: 1,
        explanation: '"The update must include the reason for the delay, the expected new completion date, and a recovery plan."',
      },
      {
        id: 'r013q2',
        question: 'How long did the legacy API integration actually take?',
        options: [
          '3 days as estimated',
          'One week',
          'Three days plus two additional weeks',
          'One month',
        ],
        correctAnswer: 2,
        explanation: '"The integration was estimated to take three days but ultimately required two additional weeks."',
      },
      {
        id: 'r013q3',
        question: 'Why did the US client agree to the revised deadline without invoking penalty clauses?',
        options: [
          'The client had no choice',
          'The delay was very short',
          'The project manager provided early warning and a clear recovery plan',
          'The client forgot about the penalty clauses',
        ],
        correctAnswer: 2,
        explanation: '"largely because the project manager had provided early warning and a clear recovery plan."',
      },
      {
        id: 'r013q4',
        question: 'Which of the following is NOT mentioned as a common recovery strategy?',
        options: [
          'Adding resources',
          'Working overtime',
          'Cancelling the project',
          'Reducing the scope of the current sprint',
        ],
        correctAnswer: 2,
        explanation: 'The passage lists adding resources, working overtime, reducing scope, and reprioritizing tasks — but NOT cancelling the project.',
      },
    ],
  },

  {
    id: 'r014',
    level: 'beginner',
    topic: 'Office Life',
    title: 'A Day in the Life of a Software Developer',
    titleVi: 'Một Ngày Trong Cuộc Sống Của Lập Trình Viên',
    content: `Tuan is a software developer at an IT outsourcing company in Hanoi. He starts work at 8:30 AM every day. First, he checks his email and reads any messages from his team on Slack. Then he joins the daily standup meeting at 9:00 AM.

After the standup, Tuan works on his assigned tasks. Today, he is fixing a bug in the payment module. He spends most of his morning writing code and testing it. At 12:00 PM, he takes a lunch break with his colleagues in the company cafeteria.

In the afternoon, Tuan has a one-on-one meeting with his team leader to discuss his progress. At 3:00 PM, the team has a short meeting to review the designs for the new feature they will build next sprint. Tuan finishes work at 5:30 PM. Before he leaves, he updates the status of his tasks on the Jira board so that everyone can see his progress.`,
    translation: `Tuấn là một lập trình viên phần mềm tại một công ty outsource IT ở Hà Nội. Anh ấy bắt đầu làm việc lúc 8:30 sáng mỗi ngày. Đầu tiên, anh kiểm tra email và đọc các tin nhắn từ nhóm trên Slack. Sau đó anh tham gia cuộc họp standup hàng ngày lúc 9:00 sáng.

Sau standup, Tuấn làm việc với các nhiệm vụ được giao. Hôm nay, anh đang sửa lỗi trong module thanh toán. Anh dành phần lớn buổi sáng để viết code và kiểm tra nó. Lúc 12:00 trưa, anh nghỉ ăn trưa với đồng nghiệp tại căng tin công ty.

Vào buổi chiều, Tuấn có cuộc gặp một-một với trưởng nhóm để thảo luận về tiến độ của mình. Lúc 3:00 chiều, nhóm có cuộc họp ngắn để xem xét các thiết kế cho tính năng mới họ sẽ xây dựng trong sprint tiếp theo. Tuấn kết thúc công việc lúc 5:30 chiều. Trước khi rời đi, anh cập nhật trạng thái các nhiệm vụ trên bảng Jira để mọi người có thể thấy tiến độ của anh.`,
    vocabulary: [
      { word: 'Slack', meaning: 'ứng dụng nhắn tin nhóm phổ biến' },
      { word: 'bug', meaning: 'lỗi phần mềm' },
      { word: 'payment module', meaning: 'module (phần) thanh toán' },
      { word: 'cafeteria', meaning: 'căng tin' },
      { word: 'one-on-one meeting', meaning: 'cuộc họp một-một (với cấp trên)' },
      { word: 'Jira', meaning: 'công cụ quản lý dự án / theo dõi công việc' },
      { word: 'assigned tasks', meaning: 'nhiệm vụ được giao' },
      { word: 'team leader', meaning: 'trưởng nhóm' },
    ],
    questions: [
      {
        id: 'r014q1',
        question: 'What is Tuan working on today?',
        options: [
          'Building a new feature',
          'Fixing a bug in the payment module',
          'Writing documentation',
          'Reviewing a design',
        ],
        correctAnswer: 1,
        explanation: '"Today, he is fixing a bug in the payment module."',
      },
      {
        id: 'r014q2',
        question: 'What does Tuan do before leaving work?',
        options: [
          'Sends an email to his manager',
          'Cleans his desk',
          'Updates his task status on the Jira board',
          'Calls the client',
        ],
        correctAnswer: 2,
        explanation: '"Before he leaves, he updates the status of his tasks on the Jira board."',
      },
      {
        id: 'r014q3',
        question: 'What time does Tuan\'s standup meeting start?',
        options: ['8:30 AM', '9:00 AM', '10:00 AM', '12:00 PM'],
        correctAnswer: 1,
        explanation: '"he joins the daily standup meeting at 9:00 AM."',
      },
      {
        id: 'r014q4',
        question: 'Where does Tuan have lunch?',
        options: [
          'At a restaurant nearby',
          'At his desk',
          'At home',
          'In the company cafeteria',
        ],
        correctAnswer: 3,
        explanation: '"he takes a lunch break with his colleagues in the company cafeteria."',
      },
    ],
  },

  {
    id: 'r015',
    level: 'advanced',
    topic: 'Technology & Innovation',
    title: 'Adopting AI Tools to Boost Developer Productivity',
    titleVi: 'Áp Dụng Công Cụ AI Để Tăng Năng Suất Lập Trình Viên',
    content: `The rapid advancement of artificial intelligence has fundamentally altered the software development landscape, and forward-thinking outsourcing companies are leveraging AI-powered tools to gain a competitive edge. At FutureByte Solutions, the engineering leadership team conducted a comprehensive evaluation of AI coding assistants over a three-month pilot program before rolling out these tools company-wide. The evaluation revealed a 32% reduction in time spent on boilerplate code generation and a 25% decrease in the number of defects introduced during the initial coding phase.

The adoption process, however, was not without its challenges. Senior developers were generally enthusiastic about AI tools, recognizing their potential to automate repetitive tasks and allow engineers to focus on higher-order problem solving. Junior developers, on the other hand, expressed concerns that over-reliance on AI-generated code could impede their foundational learning and diminish their ability to understand the underlying logic of the systems they were building. To address this, the company's engineering manager introduced guidelines stipulating that junior developers should use AI tools primarily for code explanation and learning purposes rather than direct code generation during their first six months.

Beyond individual productivity gains, the company explored how AI could transform its quality assurance processes. By integrating AI-powered testing tools into the continuous integration/continuous deployment (CI/CD) pipeline, FutureByte reduced regression testing time by 40%, enabling faster release cycles and improved responsiveness to client requests. The company's CTO acknowledged that while AI would not replace skilled engineers in the foreseeable future, it would fundamentally redefine the role of software developers from implementers of code to architects of intelligent solutions.`,
    translation: `Sự tiến bộ nhanh chóng của trí tuệ nhân tạo đã thay đổi cơ bản bối cảnh phát triển phần mềm, và các công ty outsource có tầm nhìn xa đang tận dụng các công cụ hỗ trợ AI để có lợi thế cạnh tranh. Tại FutureByte Solutions, nhóm lãnh đạo kỹ thuật đã tiến hành đánh giá toàn diện về các trợ lý lập trình AI trong chương trình thí điểm ba tháng trước khi triển khai các công cụ này cho toàn công ty. Việc đánh giá cho thấy giảm 32% thời gian dành cho việc tạo mã lặp đi lặp lại và giảm 25% số lỗi được đưa vào trong giai đoạn lập trình ban đầu.

Tuy nhiên, quá trình áp dụng không phải là không có thách thức. Các nhà phát triển cấp cao thường nhiệt tình với các công cụ AI, nhận ra tiềm năng tự động hóa các nhiệm vụ lặp đi lặp lại và cho phép các kỹ sư tập trung vào giải quyết vấn đề cấp cao hơn. Mặt khác, các nhà phát triển cấp thấp bày tỏ lo ngại rằng sự phụ thuộc quá mức vào code do AI tạo ra có thể cản trở việc học nền tảng và làm giảm khả năng hiểu logic cơ bản của các hệ thống họ đang xây dựng. Để giải quyết vấn đề này, quản lý kỹ thuật của công ty đã đưa ra các hướng dẫn quy định rằng các nhà phát triển cấp thấp nên sử dụng các công cụ AI chủ yếu cho mục đích giải thích và học code thay vì tạo code trực tiếp trong sáu tháng đầu.

Ngoài việc tăng năng suất cá nhân, công ty đã khám phá cách AI có thể biến đổi quy trình đảm bảo chất lượng của mình. Bằng cách tích hợp các công cụ kiểm thử hỗ trợ AI vào pipeline CI/CD, FutureByte giảm thời gian kiểm thử hồi quy 40%, cho phép chu kỳ phát hành nhanh hơn và đáp ứng tốt hơn với các yêu cầu của khách hàng. CTO của công ty thừa nhận rằng mặc dù AI sẽ không thay thế các kỹ sư có tay nghề trong tương lai gần, nhưng nó sẽ định nghĩa lại cơ bản vai trò của các nhà phát triển phần mềm từ người thực hiện code thành kiến trúc sư của các giải pháp thông minh.`,
    vocabulary: [
      { word: 'AI coding assistant', meaning: 'trợ lý lập trình AI' },
      { word: 'boilerplate code', meaning: 'code mẫu lặp đi lặp lại' },
      { word: 'pilot program', meaning: 'chương trình thí điểm' },
      { word: 'over-reliance', meaning: 'sự phụ thuộc quá mức' },
      { word: 'foundational learning', meaning: 'học nền tảng' },
      { word: 'CI/CD pipeline', meaning: 'quy trình tích hợp/triển khai liên tục' },
      { word: 'regression testing', meaning: 'kiểm thử hồi quy' },
      { word: 'release cycles', meaning: 'chu kỳ phát hành' },
      { word: 'competitive edge', meaning: 'lợi thế cạnh tranh' },
      { word: 'higher-order problem solving', meaning: 'giải quyết vấn đề cấp cao hơn' },
    ],
    questions: [
      {
        id: 'r015q1',
        question: 'What did FutureByte\'s pilot program of AI tools reveal about boilerplate code generation?',
        options: [
          'It increased by 32%',
          'It was reduced by 32%',
          'It was eliminated entirely',
          'It took 25% more time',
        ],
        correctAnswer: 1,
        explanation: '"a 32% reduction in time spent on boilerplate code generation."',
      },
      {
        id: 'r015q2',
        question: 'What concern did junior developers have about AI tools?',
        options: [
          'AI tools were too difficult to learn',
          'AI tools would replace them',
          'Over-reliance on AI could impede their foundational learning',
          'AI tools were too expensive',
        ],
        correctAnswer: 2,
        explanation: '"over-reliance on AI-generated code could impede their foundational learning and diminish their ability to understand the underlying logic."',
      },
      {
        id: 'r015q3',
        question: 'How should junior developers use AI tools in their first six months, according to the guidelines?',
        options: [
          'For direct code generation only',
          'They should not use AI tools at all',
          'Primarily for code explanation and learning',
          'Only for testing purposes',
        ],
        correctAnswer: 2,
        explanation: '"junior developers should use AI tools primarily for code explanation and learning purposes rather than direct code generation during their first six months."',
      },
      {
        id: 'r015q4',
        question: 'By how much was regression testing time reduced after integrating AI testing tools?',
        options: ['25%', '32%', '40%', '50%'],
        correctAnswer: 2,
        explanation: '"FutureByte reduced regression testing time by 40%."',
      },
    ],
  },

  {
    id: 'r016',
    level: 'intermediate',
    topic: 'Budget & Finance',
    title: 'Presenting a Project Budget Proposal',
    titleVi: 'Trình Bày Đề Xuất Ngân Sách Dự Án',
    content: `Preparing a project budget proposal is a critical responsibility for project managers at outsourcing companies. An accurate budget helps the company price its services competitively while ensuring profitability. At SmartDev Corp, project managers work closely with the finance team to prepare detailed budget proposals for each new client engagement.

A typical budget proposal includes several key components: personnel costs, which account for the largest portion at approximately 65% of the total budget; infrastructure and software licensing costs; quality assurance and testing costs; project management overhead; and a contingency reserve of 10-15% to cover unexpected expenses. When presenting the budget to clients, project managers must justify each line item and explain the value the client will receive in return.

During a recent budget review meeting, the project manager for a new e-commerce platform project explained that the total project cost would be $85,000 over six months. The client questioned the high QA allocation, which represented 20% of the budget. The project manager explained that for a payment-processing application, thorough testing was essential to prevent costly bugs in production and protect the client's reputation. The client was persuaded and approved the budget without further negotiation.`,
    translation: `Chuẩn bị đề xuất ngân sách dự án là trách nhiệm quan trọng của các quản lý dự án tại các công ty outsource. Ngân sách chính xác giúp công ty định giá dịch vụ cạnh tranh trong khi đảm bảo lợi nhuận. Tại SmartDev Corp, các quản lý dự án làm việc chặt chẽ với nhóm tài chính để chuẩn bị các đề xuất ngân sách chi tiết cho mỗi hợp đồng khách hàng mới.

Một đề xuất ngân sách điển hình bao gồm một số thành phần chính: chi phí nhân sự, chiếm phần lớn nhất khoảng 65% tổng ngân sách; chi phí cơ sở hạ tầng và cấp phép phần mềm; chi phí đảm bảo chất lượng và kiểm thử; chi phí chung quản lý dự án; và dự phòng 10-15% để trang trải các chi phí không lường trước. Khi trình bày ngân sách cho khách hàng, các quản lý dự án phải biện minh từng hạng mục và giải thích giá trị khách hàng sẽ nhận được.

Trong một cuộc họp xem xét ngân sách gần đây, quản lý dự án cho một dự án nền tảng thương mại điện tử mới giải thích rằng tổng chi phí dự án sẽ là 85.000 đô la trong sáu tháng. Khách hàng đặt câu hỏi về khoản phân bổ QA cao, đại diện 20% ngân sách. Quản lý dự án giải thích rằng đối với ứng dụng xử lý thanh toán, kiểm thử kỹ lưỡng là cần thiết để ngăn ngừa các lỗi tốn kém trong môi trường sản xuất và bảo vệ danh tiếng của khách hàng. Khách hàng bị thuyết phục và phê duyệt ngân sách mà không cần đàm phán thêm.`,
    vocabulary: [
      { word: 'budget proposal', meaning: 'đề xuất ngân sách' },
      { word: 'profitability', meaning: 'lợi nhuận / khả năng sinh lời' },
      { word: 'personnel costs', meaning: 'chi phí nhân sự' },
      { word: 'software licensing', meaning: 'cấp phép phần mềm' },
      { word: 'contingency reserve', meaning: 'dự phòng (ngân sách)' },
      { word: 'line item', meaning: 'hạng mục (trong ngân sách)' },
      { word: 'QA allocation', meaning: 'khoản phân bổ cho QA' },
      { word: 'production', meaning: 'môi trường sản xuất (live system)' },
      { word: 'overhead', meaning: 'chi phí chung / gián tiếp' },
      { word: 'engagement', meaning: 'hợp đồng / dự án với khách hàng' },
    ],
    questions: [
      {
        id: 'r016q1',
        question: 'What is the largest cost component in a typical budget proposal at SmartDev Corp?',
        options: [
          'Infrastructure costs',
          'Software licensing costs',
          'Personnel costs (approximately 65%)',
          'Quality assurance costs',
        ],
        correctAnswer: 2,
        explanation: '"personnel costs, which account for the largest portion at approximately 65% of the total budget."',
      },
      {
        id: 'r016q2',
        question: 'What percentage does the contingency reserve typically represent?',
        options: ['5-8%', '10-15%', '20-25%', '30%'],
        correctAnswer: 1,
        explanation: '"a contingency reserve of 10-15% to cover unexpected expenses."',
      },
      {
        id: 'r016q3',
        question: 'What was the total cost of the e-commerce platform project?',
        options: ['$50,000', '$70,000', '$85,000', '$100,000'],
        correctAnswer: 2,
        explanation: '"the total project cost would be $85,000 over six months."',
      },
      {
        id: 'r016q4',
        question: 'Why did the project manager justify the high QA allocation for the payment app?',
        options: [
          'Because QA engineers earn more than developers',
          'To prevent costly production bugs and protect the client\'s reputation',
          'Because the client requested extensive testing',
          'Because it was a legal requirement',
        ],
        correctAnswer: 1,
        explanation: '"thorough testing was essential to prevent costly bugs in production and protect the client\'s reputation."',
      },
    ],
  },

  // ===================== BEGINNER (thêm) =====================
  {
    id: 'r017',
    level: 'beginner',
    topic: 'Job Interview',
    title: 'A Job Interview at an IT Outsourcing Company',
    titleVi: 'Phỏng Vấn Xin Việc Tại Công Ty Outsource IT',
    content: `Minh is applying for a junior developer position at CodeBridge, an IT outsourcing company. He has a job interview today at 2:00 PM. He arrives fifteen minutes early and checks in at the reception desk. The receptionist asks him to wait in the lobby and offers him a glass of water.

The interview is with Ms. Lan from the HR department and Mr. Cuong, the team leader. Ms. Lan asks Minh about his education, work experience, and why he wants to join CodeBridge. Mr. Cuong asks technical questions about programming languages and problem-solving skills. Minh answers confidently and shows examples of his previous projects on his laptop.

At the end of the interview, Ms. Lan explains the job benefits: competitive salary, health insurance, thirteen months of salary per year, and five days of annual leave in addition to public holidays. She also mentions that the company provides free lunch and a shuttle bus service. Minh thanks them for their time and leaves feeling very positive about the interview.`,
    translation: `Minh đang ứng tuyển vào vị trí lập trình viên mới ra trường tại CodeBridge, một công ty outsource IT. Hôm nay anh có buổi phỏng vấn lúc 2:00 chiều. Anh đến sớm mười lăm phút và làm thủ tục check-in tại quầy lễ tân. Lễ tân yêu cầu anh chờ ở sảnh và mời anh một ly nước.

Buổi phỏng vấn có sự tham gia của cô Lan từ phòng nhân sự và anh Cường, trưởng nhóm. Cô Lan hỏi Minh về học vấn, kinh nghiệm làm việc và lý do anh muốn gia nhập CodeBridge. Anh Cường hỏi các câu hỏi kỹ thuật về ngôn ngữ lập trình và kỹ năng giải quyết vấn đề. Minh trả lời tự tin và trình bày các ví dụ về dự án trước đây của mình trên laptop.

Cuối buổi phỏng vấn, cô Lan giải thích các phúc lợi của công việc: lương cạnh tranh, bảo hiểm sức khỏe, mười ba tháng lương mỗi năm, và năm ngày nghỉ phép hàng năm ngoài các ngày lễ. Cô cũng đề cập công ty cung cấp bữa trưa miễn phí và xe đưa đón. Minh cảm ơn họ vì thời gian và ra về cảm thấy rất lạc quan về buổi phỏng vấn.`,
    vocabulary: [
      { word: 'job interview', meaning: 'buổi phỏng vấn xin việc' },
      { word: 'receptionist', meaning: 'lễ tân' },
      { word: 'lobby', meaning: 'sảnh chờ' },
      { word: 'work experience', meaning: 'kinh nghiệm làm việc' },
      { word: 'health insurance', meaning: 'bảo hiểm sức khỏe' },
      { word: 'annual leave', meaning: 'nghỉ phép hàng năm' },
      { word: 'shuttle bus', meaning: 'xe đưa đón' },
      { word: 'confidently', meaning: 'tự tin' },
    ],
    questions: [
      {
        id: 'r017q1',
        question: 'How early did Minh arrive for his interview?',
        options: ['5 minutes early', '10 minutes early', '15 minutes early', '30 minutes early'],
        correctAnswer: 2,
        explanation: '"He arrives fifteen minutes early."',
      },
      {
        id: 'r017q2',
        question: 'Who conducted the technical part of the interview?',
        options: ['Ms. Lan from HR', 'Mr. Cuong the team leader', 'The CEO', 'Another developer'],
        correctAnswer: 1,
        explanation: '"Mr. Cuong asks technical questions about programming languages and problem-solving skills."',
      },
      {
        id: 'r017q3',
        question: 'How many months of salary does the company offer per year?',
        options: ['12 months', '13 months', '14 months', '15 months'],
        correctAnswer: 1,
        explanation: '"thirteen months of salary per year."',
      },
      {
        id: 'r017q4',
        question: 'Which benefit is NOT mentioned in the passage?',
        options: ['Health insurance', 'Free lunch', 'Shuttle bus service', 'Free gym membership'],
        correctAnswer: 3,
        explanation: 'The passage mentions health insurance, free lunch, and shuttle bus — but NOT a gym membership.',
      },
    ],
  },

  {
    id: 'r018',
    level: 'beginner',
    topic: 'Office Policies',
    title: 'Requesting Office Equipment',
    titleVi: 'Yêu Cầu Thiết Bị Văn Phòng',
    content: `At SoftLink Vietnam, employees can request new office equipment through the company's internal system. The process is simple. First, the employee submits a request form online, choosing the type of equipment they need, such as a monitor, keyboard, headset, or standing desk. They also write a short reason for the request.

The request is then sent to the employee's direct manager for approval. If the manager approves, the request goes to the IT and Admin department. The Admin team checks if the equipment is available in the storage room. If it is available, they deliver it to the employee's desk within two business days. If it is not available, they order it from the supplier.

Last week, Duc from the mobile development team submitted a request for an external monitor. He explained that working on a small laptop screen was causing eye strain and reducing his productivity. His manager approved the request immediately. The Admin team found a monitor in storage and delivered it the next day. Duc was very happy because the bigger screen made his work much easier.`,
    translation: `Tại SoftLink Vietnam, nhân viên có thể yêu cầu thiết bị văn phòng mới thông qua hệ thống nội bộ của công ty. Quy trình rất đơn giản. Đầu tiên, nhân viên gửi mẫu yêu cầu trực tuyến, chọn loại thiết bị họ cần, chẳng hạn như màn hình, bàn phím, tai nghe hoặc bàn đứng. Họ cũng viết một lý do ngắn gọn cho yêu cầu.

Yêu cầu sau đó được gửi đến quản lý trực tiếp của nhân viên để phê duyệt. Nếu quản lý phê duyệt, yêu cầu sẽ đến phòng IT và Hành chính. Nhóm Hành chính kiểm tra xem thiết bị có sẵn trong kho không. Nếu có sẵn, họ giao đến bàn làm việc của nhân viên trong vòng hai ngày làm việc. Nếu không có sẵn, họ đặt hàng từ nhà cung cấp.

Tuần trước, Đức từ nhóm phát triển di động đã gửi yêu cầu xin màn hình ngoài. Anh giải thích rằng làm việc trên màn hình laptop nhỏ đang gây mỏi mắt và giảm năng suất. Quản lý của anh đã phê duyệt yêu cầu ngay lập tức. Nhóm Hành chính tìm thấy một màn hình trong kho và giao vào ngày hôm sau. Đức rất vui vì màn hình lớn hơn giúp công việc của anh dễ dàng hơn nhiều.`,
    vocabulary: [
      { word: 'office equipment', meaning: 'thiết bị văn phòng' },
      { word: 'request form', meaning: 'mẫu yêu cầu' },
      { word: 'approval', meaning: 'sự phê duyệt' },
      { word: 'storage room', meaning: 'kho (phòng lưu trữ)' },
      { word: 'supplier', meaning: 'nhà cung cấp' },
      { word: 'external monitor', meaning: 'màn hình ngoài' },
      { word: 'eye strain', meaning: 'mỏi mắt' },
      { word: 'productivity', meaning: 'năng suất' },
    ],
    questions: [
      {
        id: 'r018q1',
        question: 'What is the first step to request office equipment at SoftLink Vietnam?',
        options: [
          'Call the Admin team directly',
          'Ask the manager in person',
          'Submit an online request form',
          'Buy the equipment yourself and ask for reimbursement',
        ],
        correctAnswer: 2,
        explanation: '"the employee submits a request form online."',
      },
      {
        id: 'r018q2',
        question: 'How long does delivery take if the equipment is in stock?',
        options: ['Same day', 'Next day', 'Within two business days', 'Within one week'],
        correctAnswer: 2,
        explanation: '"they deliver it to the employee\'s desk within two business days."',
      },
      {
        id: 'r018q3',
        question: 'Why did Duc request a monitor?',
        options: [
          'His old monitor was broken',
          'A small laptop screen caused eye strain and reduced productivity',
          'He wanted a larger screen for video calls',
          'His manager told him to request one',
        ],
        correctAnswer: 1,
        explanation: '"working on a small laptop screen was causing eye strain and reducing his productivity."',
      },
      {
        id: 'r018q4',
        question: 'When did Duc receive his monitor?',
        options: ['The same day', 'The next day', 'After two business days', 'After one week'],
        correctAnswer: 1,
        explanation: '"The Admin team found a monitor in storage and delivered it the next day."',
      },
    ],
  },

  {
    id: 'r019',
    level: 'beginner',
    topic: 'Leave & Absence',
    title: 'Applying for Annual Leave',
    titleVi: 'Xin Nghỉ Phép Năm',
    content: `At BrightCode, employees receive 12 days of paid annual leave per year. To take annual leave, an employee must submit a leave request at least three days in advance. The request is made through the HR system on the company's intranet. The employee selects the start date, the end date, and the type of leave.

After submitting the request, the employee's manager receives a notification and must approve or reject it within one business day. The manager considers whether the team has enough people to cover the work during that period. If the timing is not good for the team, the manager may ask the employee to choose different dates.

Phuong wants to take five days off next month to travel with her family. She logs in to the HR system and submits her leave request. Her manager, Mr. Toan, approves it the same afternoon. The HR system automatically sends Phuong a confirmation email. She also sets an out-of-office reply on her work email so that clients know she is on leave and who to contact in her absence.`,
    translation: `Tại BrightCode, nhân viên nhận được 12 ngày nghỉ phép có lương mỗi năm. Để nghỉ phép, nhân viên phải nộp đơn xin nghỉ ít nhất ba ngày trước. Yêu cầu được thực hiện qua hệ thống HR trên mạng nội bộ của công ty. Nhân viên chọn ngày bắt đầu, ngày kết thúc và loại nghỉ phép.

Sau khi gửi yêu cầu, quản lý của nhân viên nhận được thông báo và phải phê duyệt hoặc từ chối trong vòng một ngày làm việc. Quản lý xem xét liệu nhóm có đủ người để đảm nhận công việc trong thời gian đó không. Nếu thời điểm không phù hợp với nhóm, quản lý có thể yêu cầu nhân viên chọn ngày khác.

Phượng muốn nghỉ năm ngày vào tháng tới để đi du lịch với gia đình. Cô đăng nhập vào hệ thống HR và gửi yêu cầu nghỉ phép. Quản lý của cô, ông Toàn, phê duyệt vào chiều cùng ngày. Hệ thống HR tự động gửi cho Phượng email xác nhận. Cô cũng cài đặt trả lời tự động vắng mặt trên email công việc để khách hàng biết cô đang nghỉ phép và người cần liên hệ khi cô vắng mặt.`,
    vocabulary: [
      { word: 'annual leave', meaning: 'nghỉ phép năm' },
      { word: 'paid leave', meaning: 'nghỉ phép có lương' },
      { word: 'leave request', meaning: 'đơn xin nghỉ phép' },
      { word: 'intranet', meaning: 'mạng nội bộ công ty' },
      { word: 'approve / reject', meaning: 'phê duyệt / từ chối' },
      { word: 'out-of-office reply', meaning: 'trả lời tự động khi vắng mặt' },
      { word: 'in advance', meaning: 'trước (một khoảng thời gian)' },
      { word: 'confirmation email', meaning: 'email xác nhận' },
    ],
    questions: [
      {
        id: 'r019q1',
        question: 'How many days in advance must employees submit a leave request at BrightCode?',
        options: ['At least 1 day', 'At least 2 days', 'At least 3 days', 'At least 5 days'],
        correctAnswer: 2,
        explanation: '"an employee must submit a leave request at least three days in advance."',
      },
      {
        id: 'r019q2',
        question: 'How many paid annual leave days do BrightCode employees receive per year?',
        options: ['10 days', '12 days', '14 days', '15 days'],
        correctAnswer: 1,
        explanation: '"employees receive 12 days of paid annual leave per year."',
      },
      {
        id: 'r019q3',
        question: 'Why did Phuong set an out-of-office reply?',
        options: [
          'It is required by company policy',
          'So clients know she is on leave and who to contact',
          'To stop receiving emails while on vacation',
          'Her manager asked her to',
        ],
        correctAnswer: 1,
        explanation: '"so that clients know she is on leave and who to contact in her absence."',
      },
      {
        id: 'r019q4',
        question: 'How long does the manager have to respond to a leave request?',
        options: ['Same day', 'Within one business day', 'Within two business days', 'Within one week'],
        correctAnswer: 1,
        explanation: '"must approve or reject it within one business day."',
      },
    ],
  },

  {
    id: 'r020',
    level: 'beginner',
    topic: 'Company Culture',
    title: 'Company Values and Work Culture',
    titleVi: 'Giá Trị Công Ty Và Văn Hóa Làm Việc',
    content: `TechVision is a software outsourcing company with around 300 employees. The company has four core values: Quality, Teamwork, Innovation, and Integrity. These values are displayed on the walls of every office and are talked about in every company meeting. New employees learn about these values during their first week.

The work culture at TechVision is friendly and open. Employees can talk directly to any manager, including the CEO, without going through many levels of approval. The company has an open-door policy, which means managers always welcome questions and suggestions. Every month, there is a town hall meeting where the leadership team shares news and employees can ask questions freely.

TechVision also cares about work-life balance. The company discourages overtime work unless it is truly necessary. Managers are trained to plan work properly so that their teams do not need to work late. The company believes that happy and rested employees do better work and stay with the company longer.`,
    translation: `TechVision là một công ty outsource phần mềm với khoảng 300 nhân viên. Công ty có bốn giá trị cốt lõi: Chất lượng, Làm việc nhóm, Đổi mới và Chính trực. Những giá trị này được trưng bày trên tường của mọi văn phòng và được nhắc đến trong mọi cuộc họp công ty. Nhân viên mới tìm hiểu về những giá trị này trong tuần đầu tiên của họ.

Văn hóa làm việc tại TechVision thân thiện và cởi mở. Nhân viên có thể nói chuyện trực tiếp với bất kỳ quản lý nào, kể cả CEO, mà không cần đi qua nhiều cấp phê duyệt. Công ty có chính sách cánh cửa mở, có nghĩa là các quản lý luôn chào đón câu hỏi và đề xuất. Mỗi tháng có một cuộc họp toàn thể nơi nhóm lãnh đạo chia sẻ tin tức và nhân viên có thể đặt câu hỏi tự do.

TechVision cũng quan tâm đến cân bằng công việc và cuộc sống. Công ty không khuyến khích làm thêm giờ trừ khi thực sự cần thiết. Các quản lý được đào tạo để lên kế hoạch công việc đúng cách để nhóm của họ không cần làm việc muộn. Công ty tin rằng nhân viên hạnh phúc và nghỉ ngơi đầy đủ sẽ làm việc tốt hơn và gắn bó với công ty lâu hơn.`,
    vocabulary: [
      { word: 'core values', meaning: 'giá trị cốt lõi' },
      { word: 'integrity', meaning: 'chính trực' },
      { word: 'open-door policy', meaning: 'chính sách cánh cửa mở' },
      { word: 'work-life balance', meaning: 'cân bằng công việc và cuộc sống' },
      { word: 'overtime', meaning: 'làm thêm giờ' },
      { word: 'town hall meeting', meaning: 'cuộc họp toàn thể công ty' },
      { word: 'leadership team', meaning: 'nhóm lãnh đạo' },
      { word: 'innovation', meaning: 'đổi mới / sáng tạo' },
    ],
    questions: [
      {
        id: 'r020q1',
        question: 'How many core values does TechVision have?',
        options: ['Two', 'Three', 'Four', 'Five'],
        correctAnswer: 2,
        explanation: '"The company has four core values: Quality, Teamwork, Innovation, and Integrity."',
      },
      {
        id: 'r020q2',
        question: 'What does TechVision\'s open-door policy mean?',
        options: [
          'The office doors are always open',
          'Managers always welcome questions and suggestions',
          'Employees can work from home anytime',
          'Clients can visit the office without an appointment',
        ],
        correctAnswer: 1,
        explanation: '"managers always welcome questions and suggestions."',
      },
      {
        id: 'r020q3',
        question: 'How often is the town hall meeting held?',
        options: ['Every week', 'Every month', 'Every quarter', 'Every year'],
        correctAnswer: 1,
        explanation: '"Every month, there is a town hall meeting."',
      },
      {
        id: 'r020q4',
        question: 'What is TechVision\'s approach to overtime?',
        options: [
          'Overtime is encouraged to finish projects faster',
          'Overtime is required every Friday',
          'Overtime is discouraged unless truly necessary',
          'There is no overtime policy',
        ],
        correctAnswer: 2,
        explanation: '"The company discourages overtime work unless it is truly necessary."',
      },
    ],
  },

  // ===================== INTERMEDIATE (thêm) =====================
  {
    id: 'r021',
    level: 'intermediate',
    topic: 'DevOps & Deployment',
    title: 'The Software Release and Deployment Process',
    titleVi: 'Quy Trình Phát Hành Và Triển Khai Phần Mềm',
    content: `Deploying software to production is one of the most critical and risk-prone activities in software development. At BlueWave Technologies, the deployment process follows a strict pipeline to ensure stability and minimize downtime. Every release must pass through three environments in sequence: development, staging, and production.

Once a feature is developed and passes all unit tests, it is deployed to the staging environment, which is an exact replica of the production server. The QA team then conducts thorough testing in staging, including regression testing, performance testing, and user acceptance testing (UAT). Only after the QA team gives the green light can the deployment proceed to production.

All production deployments at BlueWave are scheduled during off-peak hours, typically between 11:00 PM and 2:00 AM on weekdays, to minimize impact on end users. Before every deployment, the DevOps team creates a full backup and prepares a rollback plan in case anything goes wrong. If a critical issue is discovered after deployment, the on-call engineer can trigger the rollback procedure within minutes, restoring the system to its previous state. This disciplined approach has helped BlueWave achieve an uptime of 99.9% for all client systems over the past two years.`,
    translation: `Triển khai phần mềm lên môi trường production là một trong những hoạt động quan trọng nhất và nhiều rủi ro nhất trong phát triển phần mềm. Tại BlueWave Technologies, quy trình triển khai tuân theo một pipeline nghiêm ngặt để đảm bảo tính ổn định và giảm thiểu thời gian ngừng hoạt động. Mọi bản phát hành phải đi qua ba môi trường theo thứ tự: phát triển, staging và production.

Khi một tính năng được phát triển và vượt qua tất cả các bài kiểm tra đơn vị, nó được triển khai lên môi trường staging, là bản sao chính xác của máy chủ production. Nhóm QA sau đó tiến hành kiểm tra kỹ lưỡng trong staging, bao gồm kiểm tra hồi quy, kiểm tra hiệu suất và kiểm tra chấp nhận người dùng (UAT). Chỉ sau khi nhóm QA đưa ra tín hiệu xanh, việc triển khai mới có thể tiến hành lên production.

Tất cả các triển khai production tại BlueWave được lên lịch trong giờ thấp điểm, thường từ 11:00 tối đến 2:00 sáng các ngày trong tuần, để giảm thiểu tác động đến người dùng cuối. Trước mỗi lần triển khai, nhóm DevOps tạo bản sao lưu đầy đủ và chuẩn bị kế hoạch rollback phòng khi có sự cố. Nếu phát hiện sự cố nghiêm trọng sau khi triển khai, kỹ sư trực có thể kích hoạt quy trình rollback trong vài phút, khôi phục hệ thống về trạng thái trước đó. Cách tiếp cận có kỷ luật này đã giúp BlueWave đạt được uptime 99,9% cho tất cả các hệ thống khách hàng trong hai năm qua.`,
    vocabulary: [
      { word: 'deployment', meaning: 'triển khai (phần mềm)' },
      { word: 'staging environment', meaning: 'môi trường thử nghiệm trước production' },
      { word: 'production', meaning: 'môi trường thật (người dùng đang dùng)' },
      { word: 'regression testing', meaning: 'kiểm tra hồi quy' },
      { word: 'user acceptance testing (UAT)', meaning: 'kiểm tra chấp nhận người dùng' },
      { word: 'rollback', meaning: 'khôi phục về phiên bản trước' },
      { word: 'off-peak hours', meaning: 'giờ thấp điểm' },
      { word: 'uptime', meaning: 'thời gian hệ thống hoạt động liên tục' },
      { word: 'on-call engineer', meaning: 'kỹ sư trực sự cố' },
      { word: 'backup', meaning: 'bản sao lưu' },
    ],
    questions: [
      {
        id: 'r021q1',
        question: 'How many environments must a release pass through before reaching production?',
        options: ['One', 'Two', 'Three', 'Four'],
        correctAnswer: 2,
        explanation: '"Every release must pass through three environments in sequence: development, staging, and production."',
      },
      {
        id: 'r021q2',
        question: 'What is the staging environment?',
        options: [
          'A test environment with fake data',
          'An exact replica of the production server',
          'The development environment',
          'A backup server',
        ],
        correctAnswer: 1,
        explanation: '"the staging environment, which is an exact replica of the production server."',
      },
      {
        id: 'r021q3',
        question: 'When does BlueWave schedule production deployments?',
        options: [
          'During business hours on weekdays',
          'On weekends only',
          'Between 11 PM and 2 AM on weekdays',
          'Whenever the code is ready',
        ],
        correctAnswer: 2,
        explanation: '"scheduled during off-peak hours, typically between 11:00 PM and 2:00 AM on weekdays."',
      },
      {
        id: 'r021q4',
        question: 'What uptime has BlueWave achieved over the past two years?',
        options: ['98%', '99%', '99.5%', '99.9%'],
        correctAnswer: 3,
        explanation: '"BlueWave achieve an uptime of 99.9% for all client systems over the past two years."',
      },
    ],
  },

  {
    id: 'r022',
    level: 'intermediate',
    topic: 'Cross-Cultural Communication',
    title: 'Working with Overseas Clients: Cultural Differences',
    titleVi: 'Làm Việc Với Khách Hàng Nước Ngoài: Sự Khác Biệt Văn Hóa',
    content: `Working with clients from different countries is a daily reality for employees at software outsourcing companies in Vietnam. Understanding cultural differences is essential for building strong working relationships and avoiding misunderstandings. Different cultures have different communication styles, decision-making processes, and expectations about work.

For example, Japanese clients typically value precision, formality, and extensive documentation. They tend to make decisions slowly and carefully, often requiring approval from multiple levels of management. Vietnamese developers working with Japanese clients should be patient, provide detailed written reports, and never express disagreement directly. Any concerns should be raised politely and indirectly. American and Australian clients, on the other hand, generally prefer direct communication, quick decisions, and regular informal updates. They appreciate developers who proactively suggest improvements and speak up when they see a problem.

European clients, particularly from Germany and the Netherlands, tend to value punctuality, structured processes, and straightforward feedback. Being late to a meeting or missing a deadline without prior notice is considered very unprofessional. At EastWest Digital, the company runs a quarterly cross-cultural training program for all client-facing employees to help them adapt their communication style to each client's cultural context. This investment has noticeably improved client satisfaction scores across all regions.`,
    translation: `Làm việc với khách hàng từ các quốc gia khác nhau là thực tế hàng ngày đối với nhân viên tại các công ty outsource phần mềm ở Việt Nam. Hiểu sự khác biệt văn hóa là điều cần thiết để xây dựng mối quan hệ làm việc bền chặt và tránh hiểu lầm. Các nền văn hóa khác nhau có phong cách giao tiếp, quy trình ra quyết định và kỳ vọng về công việc khác nhau.

Ví dụ, khách hàng Nhật Bản thường đánh giá cao sự chính xác, trang trọng và tài liệu đầy đủ. Họ có xu hướng ra quyết định chậm và cẩn thận, thường yêu cầu phê duyệt từ nhiều cấp quản lý. Các nhà phát triển Việt Nam làm việc với khách hàng Nhật Bản nên kiên nhẫn, cung cấp báo cáo bằng văn bản chi tiết và không bao giờ bày tỏ sự không đồng ý một cách trực tiếp. Bất kỳ lo ngại nào cũng nên được nêu ra một cách lịch sự và gián tiếp. Khách hàng Mỹ và Úc, mặt khác, thường thích giao tiếp trực tiếp, ra quyết định nhanh và cập nhật không chính thức thường xuyên. Họ đánh giá cao các nhà phát triển chủ động đề xuất cải tiến và lên tiếng khi nhìn thấy vấn đề.

Khách hàng châu Âu, đặc biệt từ Đức và Hà Lan, có xu hướng đánh giá cao sự đúng giờ, quy trình có cấu trúc và phản hồi thẳng thắn. Đến trễ một cuộc họp hoặc bỏ lỡ thời hạn mà không thông báo trước được coi là rất không chuyên nghiệp. Tại EastWest Digital, công ty tổ chức chương trình đào tạo liên văn hóa hàng quý cho tất cả nhân viên tiếp xúc với khách hàng để giúp họ điều chỉnh phong cách giao tiếp theo bối cảnh văn hóa của từng khách hàng. Sự đầu tư này đã cải thiện đáng kể điểm hài lòng của khách hàng trên tất cả các khu vực.`,
    vocabulary: [
      { word: 'cross-cultural', meaning: 'liên văn hóa / đa văn hóa' },
      { word: 'precision', meaning: 'sự chính xác' },
      { word: 'formality', meaning: 'tính trang trọng' },
      { word: 'proactively', meaning: 'chủ động' },
      { word: 'punctuality', meaning: 'sự đúng giờ' },
      { word: 'straightforward', meaning: 'thẳng thắn / rõ ràng' },
      { word: 'client-facing', meaning: 'tiếp xúc trực tiếp với khách hàng' },
      { word: 'misunderstanding', meaning: 'sự hiểu lầm' },
    ],
    questions: [
      {
        id: 'r022q1',
        question: 'What communication style do Japanese clients typically prefer?',
        options: [
          'Direct and informal',
          'Quick decisions and regular updates',
          'Formal, precise, and indirect',
          'Casual and flexible',
        ],
        correctAnswer: 2,
        explanation: '"Japanese clients typically value precision, formality...Vietnamese developers should...never express disagreement directly."',
      },
      {
        id: 'r022q2',
        question: 'What do American and Australian clients appreciate in developers?',
        options: [
          'Extensive documentation and slow decisions',
          'Proactive suggestions and speaking up about problems',
          'Formal reports and indirect feedback',
          'Waiting for instructions before acting',
        ],
        correctAnswer: 1,
        explanation: '"They appreciate developers who proactively suggest improvements and speak up when they see a problem."',
      },
      {
        id: 'r022q3',
        question: 'How often does EastWest Digital run its cross-cultural training program?',
        options: ['Monthly', 'Quarterly', 'Twice a year', 'Annually'],
        correctAnswer: 1,
        explanation: '"the company runs a quarterly cross-cultural training program."',
      },
      {
        id: 'r022q4',
        question: 'What is considered very unprofessional when working with German or Dutch clients?',
        options: [
          'Asking too many questions',
          'Providing detailed reports',
          'Being late or missing a deadline without prior notice',
          'Giving direct feedback',
        ],
        correctAnswer: 2,
        explanation: '"Being late to a meeting or missing a deadline without prior notice is considered very unprofessional."',
      },
    ],
  },

  {
    id: 'r023',
    level: 'intermediate',
    topic: 'Agile / Scrum',
    title: 'The Sprint Retrospective: Learning from Each Iteration',
    titleVi: 'Sprint Retrospective: Học Hỏi Từ Mỗi Vòng Lặp',
    content: `At the end of every two-week sprint, the development team at PivotSoft holds a sprint retrospective meeting. Unlike the sprint review, which focuses on demonstrating completed work to stakeholders, the retrospective is an internal team meeting focused entirely on improving the team's working process. It typically lasts sixty to ninety minutes and is facilitated by the scrum master.

The retrospective follows a structured format with three core questions: What went well? What did not go well? What can we improve? Team members write their thoughts on sticky notes or a virtual whiteboard tool, and then the group discusses each item openly. The scrum master ensures that the conversation remains constructive and that no individual is blamed for problems. The goal is to identify systemic issues and process improvements, not to criticize individuals.

During a recent retrospective, the team agreed that communication with the client had been inconsistent during the sprint. Several team members felt they were receiving conflicting requirements from different client contacts. As an improvement action, the team decided to establish a single point of contact on the client side for all technical questions. The scrum master added this action item to the team's process backlog and assigned Hung, the project manager, to follow up with the client. By acting on retrospective findings consistently, PivotSoft's teams have continuously improved their sprint velocity and client satisfaction over time.`,
    translation: `Vào cuối mỗi sprint hai tuần, nhóm phát triển tại PivotSoft tổ chức cuộc họp sprint retrospective. Không giống như sprint review tập trung vào việc trình bày công việc đã hoàn thành cho các bên liên quan, retrospective là cuộc họp nội bộ của nhóm tập trung hoàn toàn vào cải thiện quy trình làm việc của nhóm. Nó thường kéo dài sáu mươi đến chín mươi phút và do scrum master điều hành.

Retrospective tuân theo định dạng có cấu trúc với ba câu hỏi cốt lõi: Điều gì diễn ra tốt? Điều gì không diễn ra tốt? Chúng ta có thể cải thiện điều gì? Các thành viên viết suy nghĩ của họ trên giấy nhớ hoặc công cụ bảng trắng ảo, và sau đó nhóm thảo luận từng mục một cách cởi mở. Scrum master đảm bảo cuộc trò chuyện vẫn mang tính xây dựng và không ai bị đổ lỗi cho các vấn đề. Mục tiêu là xác định các vấn đề hệ thống và cải tiến quy trình, không phải phê bình cá nhân.

Trong một retrospective gần đây, nhóm đồng ý rằng giao tiếp với khách hàng đã không nhất quán trong sprint. Một số thành viên cảm thấy họ nhận được các yêu cầu mâu thuẫn từ các đầu mối khác nhau của khách hàng. Là hành động cải tiến, nhóm quyết định thiết lập một đầu mối duy nhất ở phía khách hàng cho tất cả các câu hỏi kỹ thuật. Scrum master thêm mục hành động này vào process backlog của nhóm và giao cho Hùng, quản lý dự án, theo dõi với khách hàng. Bằng cách hành động nhất quán dựa trên kết quả retrospective, các nhóm của PivotSoft đã liên tục cải thiện sprint velocity và sự hài lòng của khách hàng theo thời gian.`,
    vocabulary: [
      { word: 'sprint retrospective', meaning: 'cuộc họp tổng kết sprint' },
      { word: 'sprint review', meaning: 'cuộc họp trình bày kết quả sprint' },
      { word: 'facilitated', meaning: 'được điều hành / điều phối' },
      { word: 'sticky notes', meaning: 'giấy nhớ' },
      { word: 'constructive', meaning: 'mang tính xây dựng' },
      { word: 'systemic issues', meaning: 'vấn đề mang tính hệ thống' },
      { word: 'single point of contact', meaning: 'đầu mối duy nhất' },
      { word: 'sprint velocity', meaning: 'tốc độ hoàn thành công việc trong sprint' },
    ],
    questions: [
      {
        id: 'r023q1',
        question: 'What is the main purpose of a sprint retrospective?',
        options: [
          'To show completed work to the client',
          'To plan the next sprint',
          'To improve the team\'s working process',
          'To report progress to management',
        ],
        correctAnswer: 2,
        explanation: '"the retrospective is an internal team meeting focused entirely on improving the team\'s working process."',
      },
      {
        id: 'r023q2',
        question: 'How long does a retrospective typically last?',
        options: ['15-30 minutes', '30-45 minutes', '60-90 minutes', '2-3 hours'],
        correctAnswer: 2,
        explanation: '"It typically lasts sixty to ninety minutes."',
      },
      {
        id: 'r023q3',
        question: 'What problem did the team identify in the recent retrospective?',
        options: [
          'The sprint was too long',
          'Communication with the client was inconsistent',
          'The team had too many meetings',
          'The code quality was low',
        ],
        correctAnswer: 1,
        explanation: '"the team agreed that communication with the client had been inconsistent during the sprint."',
      },
      {
        id: 'r023q4',
        question: 'What improvement action did the team decide on?',
        options: [
          'Reduce the number of client meetings',
          'Hire a new project manager',
          'Establish a single point of contact on the client side',
          'Use a new project management tool',
        ],
        correctAnswer: 2,
        explanation: '"the team decided to establish a single point of contact on the client side for all technical questions."',
      },
    ],
  },

  {
    id: 'r024',
    level: 'intermediate',
    topic: 'Business Travel',
    title: 'Preparing for an Overseas Client Visit',
    titleVi: 'Chuẩn Bị Cho Chuyến Thăm Khách Hàng Nước Ngoài',
    content: `Being invited to visit a client's office overseas is a significant opportunity for a project team. It shows that the client values the relationship and wants to strengthen collaboration. At HorizonSoft, project manager Linh and the lead developer Bao were invited to visit their client's headquarters in Singapore for three days to present the project's progress and plan the next development phase.

Before the trip, Linh had to complete several administrative tasks. She submitted a business travel request to the finance department, including estimated costs for flights, accommodation, and daily allowances. She also coordinated with the HR team to ensure Bao's and her travel documents were in order. For the client meetings, Linh prepared a detailed presentation covering the work completed to date, key milestones for the next six months, and a risk register. Bao prepared a live product demonstration with test scenarios approved by the QA team.

During the three-day visit, the team had productive meetings with the client's product owners, business analysts, and IT leadership. The client expressed satisfaction with the progress and provided valuable feedback on the upcoming features. Both parties also used the opportunity to discuss a potential contract extension for an additional year. The face-to-face meetings built a level of trust that was difficult to achieve through video conferences alone. Linh wrote a detailed trip report upon returning to share the outcomes and agreed action items with the broader team.`,
    translation: `Được mời đến thăm văn phòng của khách hàng ở nước ngoài là một cơ hội quan trọng cho nhóm dự án. Điều đó cho thấy khách hàng đánh giá cao mối quan hệ và muốn tăng cường hợp tác. Tại HorizonSoft, quản lý dự án Linh và trưởng nhóm phát triển Bảo được mời đến thăm trụ sở của khách hàng tại Singapore trong ba ngày để trình bày tiến độ dự án và lên kế hoạch giai đoạn phát triển tiếp theo.

Trước chuyến đi, Linh phải hoàn thành một số nhiệm vụ hành chính. Cô gửi yêu cầu đi công tác đến phòng tài chính, bao gồm chi phí ước tính cho vé máy bay, chỗ ở và phụ cấp hàng ngày. Cô cũng phối hợp với nhóm HR để đảm bảo giấy tờ đi lại của Bảo và cô được sắp xếp đúng. Cho các cuộc họp với khách hàng, Linh chuẩn bị một bài thuyết trình chi tiết bao gồm công việc đã hoàn thành đến nay, các mốc chính cho sáu tháng tới và sổ đăng ký rủi ro. Bảo chuẩn bị một buổi demo sản phẩm trực tiếp với các kịch bản thử nghiệm được nhóm QA phê duyệt.

Trong chuyến thăm ba ngày, nhóm đã có các cuộc họp hiệu quả với chủ sản phẩm, chuyên viên phân tích nghiệp vụ và lãnh đạo IT của khách hàng. Khách hàng bày tỏ sự hài lòng về tiến độ và cung cấp phản hồi có giá trị về các tính năng sắp tới. Cả hai bên cũng tận dụng cơ hội thảo luận về việc gia hạn hợp đồng thêm một năm. Các cuộc gặp trực tiếp đã xây dựng mức độ tin tưởng khó đạt được chỉ qua hội nghị video. Linh viết một báo cáo chuyến đi chi tiết khi trở về để chia sẻ kết quả và các mục hành động đã thống nhất với nhóm rộng hơn.`,
    vocabulary: [
      { word: 'business travel request', meaning: 'yêu cầu đi công tác' },
      { word: 'daily allowance', meaning: 'phụ cấp hàng ngày' },
      { word: 'travel documents', meaning: 'giấy tờ đi lại' },
      { word: 'risk register', meaning: 'sổ đăng ký rủi ro' },
      { word: 'product demonstration', meaning: 'buổi demo sản phẩm' },
      { word: 'business analyst', meaning: 'chuyên viên phân tích nghiệp vụ' },
      { word: 'contract extension', meaning: 'gia hạn hợp đồng' },
      { word: 'face-to-face meetings', meaning: 'cuộc gặp trực tiếp' },
    ],
    questions: [
      {
        id: 'r024q1',
        question: 'Where was the client\'s headquarters located?',
        options: ['Japan', 'Singapore', 'Australia', 'Germany'],
        correctAnswer: 1,
        explanation: '"invited to visit their client\'s headquarters in Singapore."',
      },
      {
        id: 'r024q2',
        question: 'What did Bao prepare for the client visit?',
        options: [
          'A financial report',
          'A live product demonstration with QA-approved test scenarios',
          'A new contract draft',
          'A risk assessment report',
        ],
        correctAnswer: 1,
        explanation: '"Bao prepared a live product demonstration with test scenarios approved by the QA team."',
      },
      {
        id: 'r024q3',
        question: 'What additional opportunity arose during the visit?',
        options: [
          'Hiring new team members',
          'Discussing a potential contract extension for one more year',
          'Opening a new office in Singapore',
          'Switching to a different technology stack',
        ],
        correctAnswer: 1,
        explanation: '"Both parties also used the opportunity to discuss a potential contract extension for an additional year."',
      },
      {
        id: 'r024q4',
        question: 'What did Linh do after returning from the trip?',
        options: [
          'She took a week off',
          'She wrote a detailed trip report to share with the team',
          'She immediately started planning the next trip',
          'She submitted a contract renewal form',
        ],
        correctAnswer: 1,
        explanation: '"Linh wrote a detailed trip report upon returning to share the outcomes and agreed action items."',
      },
    ],
  },

  {
    id: 'r025',
    level: 'intermediate',
    topic: 'Knowledge Management',
    title: 'Building a Team Knowledge Base',
    titleVi: 'Xây Dựng Kho Kiến Thức Cho Nhóm',
    content: `One of the biggest challenges in software outsourcing is managing knowledge effectively, especially when team members join or leave a project. Without proper documentation, valuable knowledge about the system architecture, business logic, and client preferences exists only in the heads of individual developers. When those developers resign or move to other projects, the team is left struggling to understand the codebase.

To address this challenge, DigitalBridge implemented a team knowledge base using Confluence, a popular wiki platform. Every project at DigitalBridge now has a dedicated Confluence space containing technical documentation, meeting minutes, onboarding guides, API documentation, and frequently asked questions. Developers are required to update the knowledge base whenever they implement a significant feature, fix a major bug, or make a key architectural decision. The documentation is reviewed as part of the sprint review process.

The results have been significant. When a new developer joins the e-commerce project at DigitalBridge, they can now become productive within one week instead of the previous three to four weeks. The reduced onboarding time has saved the company approximately 40 hours of mentoring per new team member. Moreover, when client questions arise that require digging into historical decisions, the project manager can now find the answer in the knowledge base within minutes rather than spending hours interviewing team members.`,
    translation: `Một trong những thách thức lớn nhất trong outsource phần mềm là quản lý kiến thức hiệu quả, đặc biệt khi các thành viên nhóm tham gia hoặc rời bỏ dự án. Nếu không có tài liệu đúng đắn, kiến thức quý giá về kiến trúc hệ thống, logic nghiệp vụ và sở thích của khách hàng chỉ tồn tại trong đầu của các nhà phát triển cá nhân. Khi những nhà phát triển đó nghỉ việc hoặc chuyển sang các dự án khác, nhóm sẽ gặp khó khăn để hiểu codebase.

Để giải quyết thách thức này, DigitalBridge triển khai kho kiến thức nhóm bằng Confluence, một nền tảng wiki phổ biến. Mỗi dự án tại DigitalBridge hiện có một không gian Confluence riêng chứa tài liệu kỹ thuật, biên bản cuộc họp, hướng dẫn onboarding, tài liệu API và các câu hỏi thường gặp. Các nhà phát triển được yêu cầu cập nhật kho kiến thức bất cứ khi nào họ triển khai một tính năng quan trọng, sửa một lỗi lớn hoặc đưa ra quyết định kiến trúc quan trọng. Tài liệu được xem xét như một phần của quy trình sprint review.

Kết quả rất đáng kể. Khi một nhà phát triển mới tham gia dự án thương mại điện tử tại DigitalBridge, họ có thể làm việc hiệu quả trong vòng một tuần thay vì ba đến bốn tuần trước đây. Thời gian onboarding giảm đã giúp công ty tiết kiệm khoảng 40 giờ hướng dẫn cho mỗi thành viên nhóm mới. Hơn nữa, khi các câu hỏi của khách hàng đòi hỏi phải tìm hiểu các quyết định lịch sử, quản lý dự án hiện có thể tìm thấy câu trả lời trong kho kiến thức trong vài phút thay vì dành hàng giờ phỏng vấn các thành viên nhóm.`,
    vocabulary: [
      { word: 'knowledge base', meaning: 'kho kiến thức' },
      { word: 'documentation', meaning: 'tài liệu hóa' },
      { word: 'system architecture', meaning: 'kiến trúc hệ thống' },
      { word: 'business logic', meaning: 'logic nghiệp vụ' },
      { word: 'Confluence', meaning: 'công cụ wiki phổ biến của Atlassian' },
      { word: 'meeting minutes', meaning: 'biên bản cuộc họp' },
      { word: 'onboarding guide', meaning: 'hướng dẫn hòa nhập' },
      { word: 'architectural decision', meaning: 'quyết định kiến trúc' },
    ],
    questions: [
      {
        id: 'r025q1',
        question: 'What problem does a lack of documentation cause when developers leave?',
        options: [
          'The project gets cancelled',
          'The team struggles to understand the codebase',
          'The client is not informed',
          'The company loses money directly',
        ],
        correctAnswer: 1,
        explanation: '"the team is left struggling to understand the codebase."',
      },
      {
        id: 'r025q2',
        question: 'What platform does DigitalBridge use for its knowledge base?',
        options: ['Notion', 'GitHub Wiki', 'Confluence', 'Google Docs'],
        correctAnswer: 2,
        explanation: '"DigitalBridge implemented a team knowledge base using Confluence."',
      },
      {
        id: 'r025q3',
        question: 'How quickly can a new developer become productive after the knowledge base was implemented?',
        options: ['Within one day', 'Within one week', 'Within two weeks', 'Within one month'],
        correctAnswer: 1,
        explanation: '"they can now become productive within one week instead of the previous three to four weeks."',
      },
      {
        id: 'r025q4',
        question: 'How many mentoring hours does the knowledge base save per new team member?',
        options: ['About 20 hours', 'About 30 hours', 'About 40 hours', 'About 60 hours'],
        correctAnswer: 2,
        explanation: '"saved the company approximately 40 hours of mentoring per new team member."',
      },
    ],
  },

  {
    id: 'r026',
    level: 'intermediate',
    topic: 'Salary & Compensation',
    title: 'Salary Negotiation Tips for IT Professionals',
    titleVi: 'Mẹo Đàm Phán Lương Cho Chuyên Gia IT',
    content: `Negotiating a salary is a skill that many IT professionals in Vietnam find challenging, particularly those who are early in their careers. However, being able to negotiate effectively can make a significant difference to your long-term financial wellbeing. Understanding the market rate for your role and experience level is the first and most important step in any salary negotiation.

Before a negotiation, research the average salary for your position in your city using platforms such as ITviec, TopDev, or Glassdoor. Consider your years of experience, the technologies you specialize in, and your track record of successful projects. At outsourcing companies, developers with specialized skills in high-demand technologies such as cloud computing, machine learning, or mobile development typically command higher salaries than those with more general skills.

During the negotiation itself, state your expected salary with confidence and justify it with specific evidence: your achievements, the value you bring to the company, and comparable market data. Avoid giving a single number — instead, offer a range where your target is at the lower end. If the company cannot meet your salary expectation, consider negotiating for other benefits such as more annual leave, a signing bonus, remote work flexibility, or a faster performance review cycle. Remember that compensation is not only about base salary but the total package.`,
    translation: `Đàm phán lương là kỹ năng mà nhiều chuyên gia IT tại Việt Nam thấy khó khăn, đặc biệt là những người đang ở giai đoạn đầu sự nghiệp. Tuy nhiên, khả năng đàm phán hiệu quả có thể tạo ra sự khác biệt đáng kể cho tình trạng tài chính lâu dài của bạn. Hiểu mức lương thị trường cho vai trò và cấp độ kinh nghiệm của bạn là bước đầu tiên và quan trọng nhất trong bất kỳ cuộc đàm phán lương nào.

Trước cuộc đàm phán, hãy nghiên cứu mức lương trung bình cho vị trí của bạn tại thành phố của bạn bằng các nền tảng như ITviec, TopDev hoặc Glassdoor. Xem xét số năm kinh nghiệm, các công nghệ bạn chuyên về và thành tích dự án thành công của bạn. Tại các công ty outsource, các nhà phát triển có kỹ năng chuyên biệt trong các công nghệ có nhu cầu cao như điện toán đám mây, học máy hoặc phát triển di động thường nhận được mức lương cao hơn những người có kỹ năng tổng quát hơn.

Trong quá trình đàm phán, hãy nêu mức lương mong đợi với sự tự tin và biện minh bằng bằng chứng cụ thể: thành tích của bạn, giá trị bạn mang lại cho công ty và dữ liệu thị trường tương đương. Tránh đưa ra một con số duy nhất — thay vào đó, hãy đưa ra một khoảng mà mục tiêu của bạn ở cuối thấp hơn. Nếu công ty không thể đáp ứng kỳ vọng lương của bạn, hãy xem xét đàm phán các lợi ích khác như nhiều ngày nghỉ phép hơn, tiền thưởng ký hợp đồng, linh hoạt làm việc từ xa hoặc chu kỳ đánh giá hiệu suất nhanh hơn. Hãy nhớ rằng thù lao không chỉ là lương cơ bản mà là tổng gói.`,
    vocabulary: [
      { word: 'salary negotiation', meaning: 'đàm phán lương' },
      { word: 'market rate', meaning: 'mức lương thị trường' },
      { word: 'track record', meaning: 'thành tích / lịch sử' },
      { word: 'command higher salaries', meaning: 'nhận được mức lương cao hơn' },
      { word: 'signing bonus', meaning: 'tiền thưởng ký hợp đồng' },
      { word: 'remote work flexibility', meaning: 'linh hoạt làm việc từ xa' },
      { word: 'performance review cycle', meaning: 'chu kỳ đánh giá hiệu suất' },
      { word: 'total package', meaning: 'tổng gói đãi ngộ' },
    ],
    questions: [
      {
        id: 'r026q1',
        question: 'What is the most important first step in salary negotiation?',
        options: [
          'Asking colleagues about their salaries',
          'Understanding the market rate for your role',
          'Writing a resignation letter',
          'Waiting for the annual review',
        ],
        correctAnswer: 1,
        explanation: '"Understanding the market rate for your role and experience level is the first and most important step."',
      },
      {
        id: 'r026q2',
        question: 'Which developers typically earn higher salaries at outsourcing companies?',
        options: [
          'Those who have been at the company longest',
          'Those with the best academic qualifications',
          'Those with specialized skills in high-demand technologies',
          'Those who work the most overtime',
        ],
        correctAnswer: 2,
        explanation: '"developers with specialized skills in high-demand technologies...typically command higher salaries."',
      },
      {
        id: 'r026q3',
        question: 'What is the recommended strategy when stating an expected salary?',
        options: [
          'Give a single precise number',
          'Refuse to give a number first',
          'Offer a range with your target at the lower end',
          'Always ask for 50% more than your current salary',
        ],
        correctAnswer: 2,
        explanation: '"offer a range where your target is at the lower end."',
      },
      {
        id: 'r026q4',
        question: 'If a company cannot meet your salary expectation, what is suggested?',
        options: [
          'Immediately reject the offer',
          'Accept whatever they offer',
          'Negotiate for other benefits like extra leave or remote flexibility',
          'Ask to speak with the CEO',
        ],
        correctAnswer: 2,
        explanation: '"consider negotiating for other benefits such as more annual leave, a signing bonus, remote work flexibility."',
      },
    ],
  },

  // ===================== ADVANCED (thêm) =====================
  {
    id: 'r027',
    level: 'advanced',
    topic: 'Data Security',
    title: 'Data Security and Compliance in Software Outsourcing',
    titleVi: 'Bảo Mật Dữ Liệu Và Tuân Thủ Trong Outsource Phần Mềm',
    content: `Data security has become one of the most critical concerns for companies that outsource software development, particularly as global data protection regulations have become increasingly stringent. Clients entrust outsourcing vendors with access to sensitive data, proprietary systems, and confidential business information. A single security breach can result in regulatory penalties, reputational damage, and the loss of the client relationship entirely.

At SecureCore Technologies, data security is governed by a comprehensive Information Security Management System (ISMS) that is aligned with the ISO 27001 standard. Every employee undergoes mandatory security awareness training upon joining the company and annually thereafter. Access to client systems follows the principle of least privilege, meaning employees are granted only the minimum level of access required to perform their specific job functions. All access rights are reviewed quarterly and revoked immediately upon an employee's departure.

For clients in the European Union, SecureCore must also comply with the General Data Protection Regulation (GDPR). This requires the company to sign a Data Processing Agreement (DPA) with each EU-based client, clearly defining how personal data is collected, stored, processed, and deleted. Developers are prohibited from storing personal data on local machines and must use approved, encrypted cloud storage solutions. Regular penetration testing and vulnerability assessments are conducted by a third-party security firm to proactively identify weaknesses before they can be exploited. SecureCore's CISO leads a security incident response team that can be activated within thirty minutes in the event of a suspected breach.`,
    translation: `Bảo mật dữ liệu đã trở thành một trong những mối quan tâm quan trọng nhất đối với các công ty outsource phát triển phần mềm, đặc biệt khi các quy định bảo vệ dữ liệu toàn cầu ngày càng trở nên nghiêm ngặt hơn. Khách hàng tin tưởng các nhà cung cấp outsource với quyền truy cập vào dữ liệu nhạy cảm, các hệ thống độc quyền và thông tin kinh doanh bí mật. Một vụ vi phạm bảo mật duy nhất có thể dẫn đến hình phạt quy định, tổn hại danh tiếng và mất toàn bộ mối quan hệ khách hàng.

Tại SecureCore Technologies, bảo mật dữ liệu được quản lý bởi Hệ thống Quản lý An toàn Thông tin (ISMS) toàn diện được căn chỉnh theo tiêu chuẩn ISO 27001. Mỗi nhân viên trải qua đào tạo nhận thức bảo mật bắt buộc khi gia nhập công ty và hàng năm sau đó. Quyền truy cập vào các hệ thống của khách hàng tuân theo nguyên tắc đặc quyền tối thiểu, có nghĩa là nhân viên chỉ được cấp mức tối thiểu cần thiết để thực hiện các chức năng công việc cụ thể của họ. Tất cả quyền truy cập được xem xét hàng quý và bị thu hồi ngay lập tức khi nhân viên rời đi.

Đối với khách hàng ở Liên minh Châu Âu, SecureCore cũng phải tuân thủ Quy định Bảo vệ Dữ liệu Chung (GDPR). Điều này yêu cầu công ty ký Thỏa thuận Xử lý Dữ liệu (DPA) với mỗi khách hàng có trụ sở tại EU, xác định rõ ràng cách dữ liệu cá nhân được thu thập, lưu trữ, xử lý và xóa. Các nhà phát triển bị cấm lưu trữ dữ liệu cá nhân trên máy tính cục bộ và phải sử dụng các giải pháp lưu trữ đám mây được mã hóa và phê duyệt. Kiểm tra xâm nhập thường xuyên và đánh giá lỗ hổng được thực hiện bởi công ty bảo mật bên thứ ba để chủ động xác định điểm yếu trước khi chúng có thể bị khai thác. CISO của SecureCore dẫn dắt nhóm phản ứng sự cố bảo mật có thể được kích hoạt trong vòng ba mươi phút trong trường hợp nghi ngờ vi phạm.`,
    vocabulary: [
      { word: 'data breach', meaning: 'vi phạm dữ liệu / rò rỉ dữ liệu' },
      { word: 'ISMS', meaning: 'Hệ thống Quản lý An toàn Thông tin' },
      { word: 'ISO 27001', meaning: 'tiêu chuẩn quản lý bảo mật thông tin quốc tế' },
      { word: 'principle of least privilege', meaning: 'nguyên tắc đặc quyền tối thiểu' },
      { word: 'GDPR', meaning: 'Quy định Bảo vệ Dữ liệu Chung của EU' },
      { word: 'Data Processing Agreement (DPA)', meaning: 'Thỏa thuận Xử lý Dữ liệu' },
      { word: 'penetration testing', meaning: 'kiểm tra xâm nhập (pentest)' },
      { word: 'vulnerability assessment', meaning: 'đánh giá lỗ hổng bảo mật' },
      { word: 'CISO', meaning: 'Giám đốc An toàn Thông tin' },
      { word: 'incident response', meaning: 'phản ứng sự cố' },
    ],
    questions: [
      {
        id: 'r027q1',
        question: 'What international standard does SecureCore\'s ISMS align with?',
        options: ['ISO 9001', 'ISO 27001', 'ISO 14001', 'PCI DSS'],
        correctAnswer: 1,
        explanation: '"aligned with the ISO 27001 standard."',
      },
      {
        id: 'r027q2',
        question: 'What does the principle of least privilege mean?',
        options: [
          'Only senior employees get system access',
          'Access rights are never revoked',
          'Employees get only the minimum access needed for their job',
          'All developers have full access to all systems',
        ],
        correctAnswer: 2,
        explanation: '"employees are granted only the minimum level of access required to perform their specific job functions."',
      },
      {
        id: 'r027q3',
        question: 'What must SecureCore sign with each EU-based client?',
        options: [
          'A Non-Disclosure Agreement (NDA)',
          'A Service Level Agreement (SLA)',
          'A Data Processing Agreement (DPA)',
          'A Master Service Agreement (MSA)',
        ],
        correctAnswer: 2,
        explanation: '"the company to sign a Data Processing Agreement (DPA) with each EU-based client."',
      },
      {
        id: 'r027q4',
        question: 'How quickly can SecureCore\'s security incident response team be activated?',
        options: ['Within 5 minutes', 'Within 15 minutes', 'Within 30 minutes', 'Within 1 hour'],
        correctAnswer: 2,
        explanation: '"can be activated within thirty minutes in the event of a suspected breach."',
      },
    ],
  },

  {
    id: 'r028',
    level: 'advanced',
    topic: 'Talent Management',
    title: 'Building and Retaining a High-Performance Engineering Team',
    titleVi: 'Xây Dựng Và Giữ Chân Đội Ngũ Kỹ Sư Hiệu Suất Cao',
    content: `In the competitive landscape of IT outsourcing in Vietnam, attracting and retaining skilled software engineers has become one of the most pressing strategic challenges for company leadership. With major technology companies and well-funded startups aggressively recruiting from the same talent pool, outsourcing companies must develop compelling employee value propositions that go beyond competitive salaries.

StrongBuild Technology has developed a multi-layered talent retention strategy built on four pillars: career development, meaningful work, recognition, and community. On the career development front, the company offers a clearly defined technical career ladder with five levels — from junior developer to principal engineer — each with transparent promotion criteria. Employees are allocated four hours per week of dedicated learning time, and the company sponsors certifications in cloud platforms, project management, and security. High-potential employees are identified annually through a talent review process and given accelerated development opportunities, including mentorship from senior engineers and leadership training.

The "meaningful work" pillar addresses a key dissatisfier for experienced engineers: being assigned to repetitive, low-complexity work. StrongBuild deliberately rotates senior developers across different client projects every 12-18 months to maintain engagement and broaden their technical exposure. The company also maintains a 10% allocation of each senior engineer's time for internal innovation projects, allowing them to experiment with emerging technologies outside of client deliverables. This policy has led to the development of two internal tools that are now used across all client projects and have become a competitive differentiator in new business pitches. StrongBuild's voluntary attrition rate stands at 12%, significantly below the industry average of 22% for outsourcing companies in Vietnam.`,
    translation: `Trong bối cảnh cạnh tranh của outsource IT tại Việt Nam, thu hút và giữ chân các kỹ sư phần mềm có tay nghề đã trở thành một trong những thách thức chiến lược cấp bách nhất đối với lãnh đạo công ty. Với các công ty công nghệ lớn và các startup được tài trợ tốt đang tích cực tuyển dụng từ cùng một nguồn nhân tài, các công ty outsource phải phát triển các đề xuất giá trị nhân viên hấp dẫn vượt ra ngoài mức lương cạnh tranh.

StrongBuild Technology đã phát triển chiến lược giữ chân nhân tài đa tầng được xây dựng trên bốn trụ cột: phát triển sự nghiệp, công việc có ý nghĩa, ghi nhận và cộng đồng. Về phát triển sự nghiệp, công ty cung cấp thang sự nghiệp kỹ thuật được xác định rõ ràng với năm cấp độ — từ nhà phát triển mới đến kỹ sư chính — mỗi cấp với tiêu chí thăng chức minh bạch. Nhân viên được phân bổ bốn giờ mỗi tuần thời gian học tập riêng, và công ty tài trợ các chứng chỉ về nền tảng đám mây, quản lý dự án và bảo mật. Nhân viên tiềm năng cao được xác định hàng năm thông qua quy trình đánh giá nhân tài và được trao cơ hội phát triển nhanh hơn, bao gồm cố vấn từ các kỹ sư cấp cao và đào tạo lãnh đạo.

Trụ cột "công việc có ý nghĩa" giải quyết một yếu tố gây bất mãn chính cho các kỹ sư có kinh nghiệm: được giao công việc lặp đi lặp lại, độ phức tạp thấp. StrongBuild cố ý luân chuyển các nhà phát triển cấp cao qua các dự án khách hàng khác nhau mỗi 12-18 tháng để duy trì sự gắn kết và mở rộng kinh nghiệm kỹ thuật của họ. Công ty cũng duy trì phân bổ 10% thời gian của mỗi kỹ sư cấp cao cho các dự án đổi mới nội bộ, cho phép họ thử nghiệm với các công nghệ mới nổi ngoài các sản phẩm bàn giao cho khách hàng. Chính sách này đã dẫn đến việc phát triển hai công cụ nội bộ hiện đang được sử dụng trên tất cả các dự án khách hàng và đã trở thành yếu tố khác biệt cạnh tranh trong các buổi thuyết trình kinh doanh mới. Tỷ lệ nghỉ việc tự nguyện của StrongBuild ở mức 12%, thấp hơn đáng kể so với mức trung bình ngành là 22% cho các công ty outsource tại Việt Nam.`,
    vocabulary: [
      { word: 'employee value proposition', meaning: 'đề xuất giá trị cho nhân viên' },
      { word: 'talent retention strategy', meaning: 'chiến lược giữ chân nhân tài' },
      { word: 'career ladder', meaning: 'thang bậc sự nghiệp' },
      { word: 'high-potential employees', meaning: 'nhân viên tiềm năng cao' },
      { word: 'talent review', meaning: 'đánh giá tài năng (quy trình nội bộ)' },
      { word: 'voluntary attrition rate', meaning: 'tỷ lệ nghỉ việc tự nguyện' },
      { word: 'competitive differentiator', meaning: 'yếu tố khác biệt cạnh tranh' },
      { word: 'emerging technologies', meaning: 'các công nghệ mới nổi' },
      { word: 'principal engineer', meaning: 'kỹ sư chính (cấp cao nhất)' },
      { word: 'engagement', meaning: 'sự gắn kết (với công việc)' },
    ],
    questions: [
      {
        id: 'r028q1',
        question: 'How many pillars does StrongBuild\'s talent retention strategy have?',
        options: ['Two', 'Three', 'Four', 'Five'],
        correctAnswer: 2,
        explanation: '"built on four pillars: career development, meaningful work, recognition, and community."',
      },
      {
        id: 'r028q2',
        question: 'How many hours per week are employees given for dedicated learning?',
        options: ['Two hours', 'Four hours', 'Six hours', 'Eight hours'],
        correctAnswer: 1,
        explanation: '"Employees are allocated four hours per week of dedicated learning time."',
      },
      {
        id: 'r028q3',
        question: 'How often does StrongBuild rotate senior developers across client projects?',
        options: ['Every 6 months', 'Every 12-18 months', 'Every 2 years', 'Only when they request it'],
        correctAnswer: 1,
        explanation: '"rotates senior developers across different client projects every 12-18 months."',
      },
      {
        id: 'r028q4',
        question: 'How does StrongBuild\'s attrition rate compare to the industry average?',
        options: [
          'It is higher at 12% vs industry 10%',
          'It is the same as the industry average',
          'It is lower at 12% vs industry 22%',
          'The passage does not mention the industry average',
        ],
        correctAnswer: 2,
        explanation: '"StrongBuild\'s voluntary attrition rate stands at 12%, significantly below the industry average of 22%."',
      },
    ],
  },

  {
    id: 'r029',
    level: 'advanced',
    topic: 'Business Transformation',
    title: 'From Outsourcing Vendor to Product Company',
    titleVi: 'Từ Nhà Cung Cấp Outsource Đến Công Ty Sản Phẩm',
    content: `Many successful software outsourcing companies in Vietnam have begun exploring the transition from a service-based model to a product-based model. While outsourcing provides relatively predictable revenue and immediate cash flow, it also carries inherent limitations: revenue is capped by billable hours, the company's growth is linearly tied to headcount, and the business remains perpetually dependent on client decisions. Building proprietary software products, by contrast, offers the potential for scalable, recurring revenue and greater long-term enterprise value.

NovaBridge Software made this strategic pivot over a three-year transformation journey. The company's leadership recognized that over eight years of outsourcing had accumulated deep domain expertise in the logistics sector. They decided to leverage this knowledge to develop a SaaS platform for last-mile delivery management, targeting small and medium-sized logistics companies in Southeast Asia. The transition required significant organizational changes: the company had to build dedicated product management and UX research functions, shift the engineering culture from "building what the client asks" to "discovering what users need," and establish a sales and marketing capability that did not previously exist.

The financial journey was challenging. Product development required an 18-month investment period before the first paying customer was acquired. The company maintained its outsourcing business during this period to fund product development, though this created tension as the best engineers were coveted by both the product team and client-facing delivery teams. Three years after launch, the SaaS platform has 47 enterprise subscribers generating recurring annual revenue of $2.3 million, representing 35% of the company's total revenue. The leadership team projects that the product revenue share will surpass outsourcing revenue within the next three years, fundamentally transforming NovaBridge's business model and valuation.`,
    translation: `Nhiều công ty outsource phần mềm thành công tại Việt Nam đã bắt đầu khám phá quá trình chuyển đổi từ mô hình dịch vụ sang mô hình sản phẩm. Trong khi outsourcing mang lại doanh thu tương đối có thể dự đoán và dòng tiền ngay lập tức, nó cũng mang những hạn chế vốn có: doanh thu bị giới hạn bởi số giờ tính phí, tăng trưởng của công ty gắn liền tuyến tính với số lượng nhân sự, và doanh nghiệp vẫn phụ thuộc vĩnh viễn vào các quyết định của khách hàng. Xây dựng các sản phẩm phần mềm độc quyền, ngược lại, mang lại tiềm năng doanh thu có thể mở rộng, định kỳ và giá trị doanh nghiệp dài hạn lớn hơn.

NovaBridge Software đã thực hiện bước ngoặt chiến lược này qua hành trình chuyển đổi ba năm. Ban lãnh đạo công ty nhận ra rằng tám năm outsourcing đã tích lũy kiến thức chuyên sâu trong lĩnh vực logistics. Họ quyết định tận dụng kiến thức này để phát triển nền tảng SaaS cho quản lý giao hàng chặng cuối, nhắm đến các công ty logistics vừa và nhỏ ở Đông Nam Á. Quá trình chuyển đổi đòi hỏi những thay đổi tổ chức đáng kể: công ty phải xây dựng các chức năng quản lý sản phẩm và nghiên cứu UX chuyên dụng, chuyển đổi văn hóa kỹ thuật từ "xây dựng những gì khách hàng yêu cầu" sang "khám phá những gì người dùng cần" và thiết lập năng lực bán hàng và marketing vốn không tồn tại trước đây.

Hành trình tài chính rất thách thức. Phát triển sản phẩm yêu cầu giai đoạn đầu tư 18 tháng trước khi có khách hàng trả tiền đầu tiên. Công ty duy trì kinh doanh outsourcing trong giai đoạn này để tài trợ cho việc phát triển sản phẩm, mặc dù điều này tạo ra căng thẳng vì các kỹ sư giỏi nhất đều được cả nhóm sản phẩm và nhóm bàn giao cho khách hàng tranh giành. Ba năm sau khi ra mắt, nền tảng SaaS có 47 khách hàng doanh nghiệp tạo ra doanh thu hàng năm định kỳ là 2,3 triệu đô la, chiếm 35% tổng doanh thu của công ty. Nhóm lãnh đạo dự báo rằng tỷ trọng doanh thu sản phẩm sẽ vượt doanh thu outsourcing trong ba năm tới, chuyển đổi cơ bản mô hình kinh doanh và định giá của NovaBridge.`,
    vocabulary: [
      { word: 'service-based model', meaning: 'mô hình dựa trên dịch vụ' },
      { word: 'product-based model', meaning: 'mô hình dựa trên sản phẩm' },
      { word: 'billable hours', meaning: 'số giờ tính phí' },
      { word: 'SaaS platform', meaning: 'nền tảng phần mềm dưới dạng dịch vụ' },
      { word: 'last-mile delivery', meaning: 'giao hàng chặng cuối' },
      { word: 'recurring revenue', meaning: 'doanh thu định kỳ' },
      { word: 'domain expertise', meaning: 'kiến thức chuyên sâu về lĩnh vực' },
      { word: 'UX research', meaning: 'nghiên cứu trải nghiệm người dùng' },
      { word: 'enterprise subscribers', meaning: 'khách hàng doanh nghiệp đăng ký' },
      { word: 'valuation', meaning: 'định giá công ty' },
    ],
    questions: [
      {
        id: 'r029q1',
        question: 'What is one inherent limitation of the outsourcing business model mentioned in the passage?',
        options: [
          'It is too difficult to find clients',
          'Revenue is capped by billable hours and tied to headcount',
          'Outsourcing companies cannot use modern technology',
          'Clients always request low-quality work',
        ],
        correctAnswer: 1,
        explanation: '"revenue is capped by billable hours, the company\'s growth is linearly tied to headcount."',
      },
      {
        id: 'r029q2',
        question: 'What sector did NovaBridge choose for its SaaS product?',
        options: ['Healthcare', 'Education', 'Logistics (last-mile delivery)', 'Banking'],
        correctAnswer: 2,
        explanation: '"develop a SaaS platform for last-mile delivery management."',
      },
      {
        id: 'r029q3',
        question: 'How long did NovaBridge invest before getting its first paying customer?',
        options: ['6 months', '12 months', '18 months', '24 months'],
        correctAnswer: 2,
        explanation: '"Product development required an 18-month investment period before the first paying customer was acquired."',
      },
      {
        id: 'r029q4',
        question: 'What percentage of NovaBridge\'s total revenue does the SaaS product represent three years after launch?',
        options: ['15%', '25%', '35%', '50%'],
        correctAnswer: 2,
        explanation: '"representing 35% of the company\'s total revenue."',
      },
    ],
  },

  // ===================== BEGINNER (thêm lần 3) =====================
  {
    id: 'r030',
    level: 'beginner',
    topic: 'Office Communication',
    title: 'Writing Meeting Minutes',
    titleVi: 'Viết Biên Bản Cuộc Họp',
    content: `Meeting minutes are a written record of what was discussed and decided in a meeting. At most IT companies, one team member is responsible for writing the minutes during the meeting. This person is called the note-taker or secretary for the meeting. The minutes are shared with all participants after the meeting ends.

Good meeting minutes include: the date, time, and location of the meeting; the names of people who attended; a list of topics discussed; the decisions made; and the action items — meaning the tasks that were assigned, who is responsible for each task, and the deadline.

After the weekly project meeting, Trang sent the meeting minutes to all participants by email. The minutes showed that three action items were agreed upon: Nam would finish the login page by Friday, Duc would send the API documentation to the client by Wednesday, and Trang herself would schedule the next meeting with the client for the following week. Action items help everyone remember their tasks and prevent misunderstandings about who is doing what.`,
    translation: `Biên bản cuộc họp là hồ sơ bằng văn bản về những gì đã được thảo luận và quyết định trong cuộc họp. Tại hầu hết các công ty IT, một thành viên nhóm chịu trách nhiệm viết biên bản trong cuộc họp. Người này được gọi là người ghi chú hoặc thư ký cho cuộc họp. Biên bản được chia sẻ với tất cả người tham dự sau khi cuộc họp kết thúc.

Biên bản cuộc họp tốt bao gồm: ngày, giờ và địa điểm cuộc họp; tên những người tham dự; danh sách các chủ đề đã thảo luận; các quyết định được đưa ra; và các mục hành động — nghĩa là các nhiệm vụ được giao, ai chịu trách nhiệm cho mỗi nhiệm vụ và thời hạn.

Sau cuộc họp dự án hàng tuần, Trang đã gửi biên bản cuộc họp cho tất cả người tham dự qua email. Biên bản cho thấy ba mục hành động đã được thống nhất: Nam sẽ hoàn thành trang đăng nhập vào thứ Sáu, Đức sẽ gửi tài liệu API cho khách hàng vào thứ Tư, và bản thân Trang sẽ lên lịch cuộc họp tiếp theo với khách hàng vào tuần sau. Các mục hành động giúp mọi người nhớ nhiệm vụ của mình và ngăn ngừa hiểu lầm về việc ai đang làm gì.`,
    vocabulary: [
      { word: 'meeting minutes', meaning: 'biên bản cuộc họp' },
      { word: 'note-taker', meaning: 'người ghi chú' },
      { word: 'participants', meaning: 'người tham dự' },
      { word: 'action items', meaning: 'mục hành động / việc cần làm' },
      { word: 'deadline', meaning: 'thời hạn' },
      { word: 'assigned', meaning: 'được giao (nhiệm vụ)' },
      { word: 'prevent misunderstandings', meaning: 'ngăn ngừa hiểu lầm' },
      { word: 'API documentation', meaning: 'tài liệu API' },
    ],
    questions: [
      {
        id: 'r030q1',
        question: 'What are meeting minutes?',
        options: [
          'A timer for meetings',
          'A written record of what was discussed and decided',
          'An agenda sent before the meeting',
          'A list of attendees only',
        ],
        correctAnswer: 1,
        explanation: '"Meeting minutes are a written record of what was discussed and decided in a meeting."',
      },
      {
        id: 'r030q2',
        question: 'What must action items include?',
        options: [
          'Only the task name',
          'The task, who is responsible, and the deadline',
          'The budget for each task',
          'A rating of how important each task is',
        ],
        correctAnswer: 1,
        explanation: '"the tasks that were assigned, who is responsible for each task, and the deadline."',
      },
      {
        id: 'r030q3',
        question: 'What was Duc\'s action item?',
        options: [
          'Finish the login page by Friday',
          'Schedule the next client meeting',
          'Send the API documentation to the client by Wednesday',
          'Write the meeting minutes',
        ],
        correctAnswer: 2,
        explanation: '"Duc would send the API documentation to the client by Wednesday."',
      },
      {
        id: 'r030q4',
        question: 'Why are action items important?',
        options: [
          'They replace the need for meetings',
          'They help everyone remember their tasks and prevent misunderstandings',
          'They are required by the client',
          'They save time in the next meeting',
        ],
        correctAnswer: 1,
        explanation: '"Action items help everyone remember their tasks and prevent misunderstandings about who is doing what."',
      },
    ],
  },

  {
    id: 'r031',
    level: 'beginner',
    topic: 'Self Introduction',
    title: 'Introducing Yourself in a New Team',
    titleVi: 'Tự Giới Thiệu Bản Thân Trong Nhóm Mới',
    content: `When you join a new project team at an outsourcing company, making a good first impression is very important. On your first day with the team, you will usually be asked to introduce yourself. A good self-introduction is short, clear, and friendly. It should include your name, your role, a little about your background, and something personal that makes you memorable.

Here is an example: "Hi everyone, my name is Khoa. I'm a full-stack developer and I'll be joining your team as the backend lead. I have four years of experience working with Node.js and PostgreSQL. Before this project, I worked on a fintech application for a US client. Outside of work, I enjoy hiking and playing chess. I'm excited to be part of the team and I look forward to working with all of you."

When meeting international team members or clients for the first time, remember to speak clearly and not too fast. It is also polite to ask the other person about themselves after your introduction. Showing genuine interest in your colleagues helps build trust and a positive team atmosphere from the very beginning.`,
    translation: `Khi bạn tham gia một nhóm dự án mới tại công ty outsource, tạo ấn tượng tốt ban đầu rất quan trọng. Vào ngày đầu tiên với nhóm, bạn thường được yêu cầu tự giới thiệu. Lời giới thiệu bản thân tốt ngắn gọn, rõ ràng và thân thiện. Nó nên bao gồm tên, vai trò, một chút về nền tảng của bạn và điều gì đó cá nhân làm cho bạn đáng nhớ.

Đây là một ví dụ: "Xin chào mọi người, tên tôi là Khoa. Tôi là lập trình viên full-stack và tôi sẽ tham gia nhóm của các bạn với vai trò trưởng nhóm backend. Tôi có bốn năm kinh nghiệm làm việc với Node.js và PostgreSQL. Trước dự án này, tôi đã làm việc trên một ứng dụng fintech cho khách hàng Mỹ. Ngoài công việc, tôi thích đi bộ đường dài và chơi cờ. Tôi rất vui được trở thành thành viên của nhóm và mong muốn được làm việc cùng tất cả các bạn."

Khi gặp các thành viên nhóm hoặc khách hàng quốc tế lần đầu tiên, hãy nhớ nói rõ ràng và không quá nhanh. Cũng lịch sự khi hỏi người kia về bản thân họ sau khi giới thiệu. Thể hiện sự quan tâm chân thành đến đồng nghiệp của bạn giúp xây dựng sự tin tưởng và bầu không khí nhóm tích cực ngay từ đầu.`,
    vocabulary: [
      { word: 'first impression', meaning: 'ấn tượng đầu tiên' },
      { word: 'self-introduction', meaning: 'tự giới thiệu bản thân' },
      { word: 'background', meaning: 'nền tảng / kinh nghiệm' },
      { word: 'memorable', meaning: 'đáng nhớ' },
      { word: 'full-stack developer', meaning: 'lập trình viên full-stack' },
      { word: 'fintech', meaning: 'công nghệ tài chính' },
      { word: 'genuine interest', meaning: 'sự quan tâm chân thành' },
      { word: 'atmosphere', meaning: 'bầu không khí' },
    ],
    questions: [
      {
        id: 'r031q1',
        question: 'What should a good self-introduction include?',
        options: [
          'Your full resume and work history',
          'Your name, role, background, and something personal',
          'Only your name and job title',
          'Your salary expectations',
        ],
        correctAnswer: 1,
        explanation: '"It should include your name, your role, a little about your background, and something personal."',
      },
      {
        id: 'r031q2',
        question: 'What technologies does Khoa have experience with?',
        options: [
          'Python and MySQL',
          'React and MongoDB',
          'Node.js and PostgreSQL',
          'Java and Oracle',
        ],
        correctAnswer: 2,
        explanation: '"I have four years of experience working with Node.js and PostgreSQL."',
      },
      {
        id: 'r031q3',
        question: 'What should you do after your self-introduction to international team members?',
        options: [
          'Start talking about the project immediately',
          'Hand out your business card',
          'Ask the other person about themselves',
          'Send a follow-up email',
        ],
        correctAnswer: 2,
        explanation: '"It is also polite to ask the other person about themselves after your introduction."',
      },
      {
        id: 'r031q4',
        question: 'What type of project did Khoa work on before joining the new team?',
        options: [
          'An e-commerce platform',
          'A healthcare system',
          'A fintech application for a US client',
          'A logistics app for a Japanese client',
        ],
        correctAnswer: 2,
        explanation: '"Before this project, I worked on a fintech application for a US client."',
      },
    ],
  },

  {
    id: 'r032',
    level: 'beginner',
    topic: 'Workplace Communication',
    title: 'Using Communication Tools at Work',
    titleVi: 'Sử Dụng Công Cụ Giao Tiếp Tại Nơi Làm Việc',
    content: `Modern software companies use many digital tools to communicate and manage work. At most IT outsourcing companies in Vietnam, the three most common tools are Slack, Zoom, and Jira. Each tool has a different purpose, and knowing how to use them correctly is important for every employee.

Slack is a messaging application. Employees use it to send quick messages to individuals or to groups. Each project has its own Slack channel where team members can post updates, share files, and ask questions. It is important to write messages clearly and professionally, even in informal channels. Slack also connects with other tools, so it can send automatic notifications when a pull request is created or when a build fails.

Zoom is used for video meetings. Employees have online meetings with clients, managers, and teammates using Zoom. When joining a Zoom call, always mute your microphone when you are not speaking to avoid background noise. Jira is a project management tool. It is used to create, assign, and track tasks called "tickets." Each ticket has a title, description, priority level, and status. The status changes from "To Do" to "In Progress" to "Done" as the work is completed. Keeping your Jira tickets updated is important so that everyone on the team can see the current state of the project.`,
    translation: `Các công ty phần mềm hiện đại sử dụng nhiều công cụ kỹ thuật số để giao tiếp và quản lý công việc. Tại hầu hết các công ty outsource IT ở Việt Nam, ba công cụ phổ biến nhất là Slack, Zoom và Jira. Mỗi công cụ có mục đích khác nhau, và biết cách sử dụng chúng đúng cách rất quan trọng với mọi nhân viên.

Slack là một ứng dụng nhắn tin. Nhân viên sử dụng nó để gửi tin nhắn nhanh cho cá nhân hoặc cho nhóm. Mỗi dự án có kênh Slack riêng nơi các thành viên nhóm có thể đăng cập nhật, chia sẻ tệp và đặt câu hỏi. Điều quan trọng là viết tin nhắn rõ ràng và chuyên nghiệp, ngay cả trong các kênh không chính thức. Slack cũng kết nối với các công cụ khác, vì vậy nó có thể gửi thông báo tự động khi một pull request được tạo hoặc khi build thất bại.

Zoom được sử dụng cho các cuộc họp video. Nhân viên có các cuộc họp trực tuyến với khách hàng, quản lý và đồng đội bằng Zoom. Khi tham gia cuộc gọi Zoom, luôn tắt tiếng microphone khi bạn không nói chuyện để tránh tiếng ồn nền. Jira là công cụ quản lý dự án. Nó được sử dụng để tạo, giao và theo dõi các nhiệm vụ được gọi là "ticket". Mỗi ticket có tiêu đề, mô tả, mức độ ưu tiên và trạng thái. Trạng thái thay đổi từ "Cần làm" sang "Đang làm" sang "Xong" khi công việc hoàn thành. Cập nhật ticket Jira của bạn rất quan trọng để mọi người trong nhóm có thể thấy trạng thái hiện tại của dự án.`,
    vocabulary: [
      { word: 'Slack channel', meaning: 'kênh nhắn tin trên Slack' },
      { word: 'pull request', meaning: 'yêu cầu hợp nhất code' },
      { word: 'background noise', meaning: 'tiếng ồn nền' },
      { word: 'ticket', meaning: 'nhiệm vụ/phiếu công việc trên Jira' },
      { word: 'priority level', meaning: 'mức độ ưu tiên' },
      { word: 'mute', meaning: 'tắt tiếng' },
      { word: 'notification', meaning: 'thông báo' },
      { word: 'status', meaning: 'trạng thái' },
    ],
    questions: [
      {
        id: 'r032q1',
        question: 'What is Slack primarily used for?',
        options: ['Video meetings', 'Sending quick messages to individuals or groups', 'Managing tasks and tickets', 'Writing code'],
        correctAnswer: 1,
        explanation: '"Slack is a messaging application. Employees use it to send quick messages to individuals or to groups."',
      },
      {
        id: 'r032q2',
        question: 'What should you do when not speaking during a Zoom call?',
        options: ['Turn off your camera', 'Mute your microphone', 'Close the application', 'Type in the chat instead'],
        correctAnswer: 1,
        explanation: '"always mute your microphone when you are not speaking to avoid background noise."',
      },
      {
        id: 'r032q3',
        question: 'What does a Jira ticket\'s status change to when work is complete?',
        options: ['Closed', 'Resolved', 'Done', 'Finished'],
        correctAnswer: 2,
        explanation: '"The status changes from \'To Do\' to \'In Progress\' to \'Done\'."',
      },
      {
        id: 'r032q4',
        question: 'What automatic notification can Slack send?',
        options: [
          'When an employee is late',
          'When a pull request is created or a build fails',
          'When a client sends an email',
          'When a meeting is about to start',
        ],
        correctAnswer: 1,
        explanation: '"it can send automatic notifications when a pull request is created or when a build fails."',
      },
    ],
  },

  {
    id: 'r033',
    level: 'beginner',
    topic: 'Project Management',
    title: 'Understanding Project Milestones',
    titleVi: 'Hiểu Về Các Mốc Dự Án',
    content: `A project milestone is an important checkpoint in a project's timeline. It marks the completion of a significant phase or deliverable. Milestones help the project manager and the client track progress and ensure the project is moving in the right direction. They are different from regular tasks because they represent a goal, not a single piece of work.

For example, a software project might have these milestones: completing the design phase, finishing the first version of the backend, launching the beta version for testing, and delivering the final product. Each milestone has a specific due date. When a milestone is reached, the team usually has a short review meeting with the client to demonstrate what has been completed and get feedback.

At LogicSoft, missing a milestone without warning is a serious issue. The project manager must send a milestone status report every two weeks. If the team sees that they might miss a deadline, they must raise the issue in the next team meeting immediately. Early communication about delays allows the team and the client to adjust plans before the situation becomes critical. Clients always prefer honest updates over sudden surprises.`,
    translation: `Mốc dự án là một điểm kiểm tra quan trọng trong tiến trình của dự án. Nó đánh dấu việc hoàn thành một giai đoạn hoặc sản phẩm bàn giao quan trọng. Các mốc giúp người quản lý dự án và khách hàng theo dõi tiến độ và đảm bảo dự án đang đi đúng hướng. Chúng khác với các nhiệm vụ thông thường vì chúng đại diện cho một mục tiêu, không phải một đơn vị công việc duy nhất.

Ví dụ, một dự án phần mềm có thể có các mốc sau: hoàn thành giai đoạn thiết kế, hoàn thành phiên bản đầu tiên của backend, ra mắt phiên bản beta để kiểm thử và bàn giao sản phẩm cuối cùng. Mỗi mốc có ngày đến hạn cụ thể. Khi đạt được một mốc, nhóm thường có cuộc họp đánh giá ngắn với khách hàng để trình bày những gì đã hoàn thành và nhận phản hồi.

Tại LogicSoft, bỏ lỡ một mốc mà không có cảnh báo là một vấn đề nghiêm trọng. Quản lý dự án phải gửi báo cáo trạng thái mốc mỗi hai tuần. Nếu nhóm thấy rằng họ có thể bỏ lỡ thời hạn, họ phải nêu vấn đề trong cuộc họp nhóm tiếp theo ngay lập tức. Giao tiếp sớm về sự chậm trễ cho phép nhóm và khách hàng điều chỉnh kế hoạch trước khi tình huống trở nên nghiêm trọng. Khách hàng luôn thích cập nhật trung thực hơn là những bất ngờ đột ngột.`,
    vocabulary: [
      { word: 'milestone', meaning: 'mốc quan trọng trong dự án' },
      { word: 'checkpoint', meaning: 'điểm kiểm tra' },
      { word: 'phase', meaning: 'giai đoạn' },
      { word: 'beta version', meaning: 'phiên bản thử nghiệm' },
      { word: 'due date', meaning: 'ngày đến hạn' },
      { word: 'status report', meaning: 'báo cáo trạng thái' },
      { word: 'raise the issue', meaning: 'nêu vấn đề' },
      { word: 'critical', meaning: 'nghiêm trọng / quan trọng' },
    ],
    questions: [
      {
        id: 'r033q1',
        question: 'What is a project milestone?',
        options: [
          'A daily task assigned to a developer',
          'An important checkpoint marking completion of a significant phase',
          'A weekly team meeting',
          'A client requirement document',
        ],
        correctAnswer: 1,
        explanation: '"A project milestone is an important checkpoint in a project\'s timeline. It marks the completion of a significant phase or deliverable."',
      },
      {
        id: 'r033q2',
        question: 'What happens when a milestone is reached at LogicSoft?',
        options: [
          'The team takes a day off',
          'The project is considered complete',
          'A short review meeting is held with the client',
          'A new contract is signed',
        ],
        correctAnswer: 2,
        explanation: '"the team usually has a short review meeting with the client to demonstrate what has been completed and get feedback."',
      },
      {
        id: 'r033q3',
        question: 'How often must the project manager send a milestone status report?',
        options: ['Every week', 'Every two weeks', 'Every month', 'Only when milestones are missed'],
        correctAnswer: 1,
        explanation: '"The project manager must send a milestone status report every two weeks."',
      },
      {
        id: 'r033q4',
        question: 'What do clients prefer regarding project delays?',
        options: [
          'No communication until the problem is solved',
          'Honest early updates rather than sudden surprises',
          'Updates only after the milestone is missed',
          'A financial compensation instead of communication',
        ],
        correctAnswer: 1,
        explanation: '"Clients always prefer honest updates over sudden surprises."',
      },
    ],
  },

  // ===================== INTERMEDIATE (thêm lần 3) =====================
  {
    id: 'r034',
    level: 'intermediate',
    topic: 'QA & Testing',
    title: 'The Role of QA Engineers in Outsourcing Projects',
    titleVi: 'Vai Trò Của Kỹ Sư QA Trong Các Dự Án Outsource',
    content: `Quality Assurance (QA) engineers play a vital role in ensuring that software delivered to clients meets the required standards of functionality, performance, and reliability. At many outsourcing companies, QA is treated not merely as a final checkpoint before release, but as an integral activity woven throughout the entire development lifecycle — an approach known as "shift-left testing."

At PrecisionBuild, QA engineers are involved from the requirements analysis phase. They review user stories and acceptance criteria to identify ambiguities and potential edge cases before a single line of code is written. This early involvement prevents costly rework later in the development cycle. During development, QA engineers write automated test scripts that run continuously through the CI/CD pipeline, catching regressions immediately as new code is committed. By the time a feature reaches the manual testing phase, the majority of basic defects have already been eliminated.

When QA engineers find a bug, they document it in a bug tracking system with a detailed description, the steps to reproduce it, the expected behavior, the actual behavior, and a severity rating. Critical bugs that break core functionality are escalated immediately to the development team for hotfix resolution. Lower-severity cosmetic issues are logged and prioritized for the next sprint. The QA team at PrecisionBuild produces a weekly test summary report for each project, which is shared with both the internal leadership team and the client. This transparency has consistently been cited by clients as one of the reasons they renew their contracts with the company.`,
    translation: `Kỹ sư Đảm bảo Chất lượng (QA) đóng vai trò quan trọng trong việc đảm bảo phần mềm bàn giao cho khách hàng đáp ứng các tiêu chuẩn cần thiết về chức năng, hiệu suất và độ tin cậy. Tại nhiều công ty outsource, QA không chỉ được coi là điểm kiểm tra cuối cùng trước khi phát hành, mà là một hoạt động không thể thiếu được tích hợp xuyên suốt toàn bộ vòng đời phát triển — một cách tiếp cận được gọi là "kiểm thử dịch chuyển trái".

Tại PrecisionBuild, các kỹ sư QA tham gia từ giai đoạn phân tích yêu cầu. Họ xem xét các user story và tiêu chí chấp nhận để xác định sự mơ hồ và các trường hợp cạnh tiềm ẩn trước khi một dòng code được viết. Sự tham gia sớm này ngăn ngừa việc làm lại tốn kém sau này trong chu kỳ phát triển. Trong quá trình phát triển, các kỹ sư QA viết các script kiểm thử tự động chạy liên tục qua pipeline CI/CD, phát hiện các lỗi hồi quy ngay lập tức khi code mới được commit. Khi một tính năng đến giai đoạn kiểm thử thủ công, phần lớn các lỗi cơ bản đã được loại bỏ.

Khi kỹ sư QA tìm thấy lỗi, họ ghi lại trong hệ thống theo dõi lỗi với mô tả chi tiết, các bước tái hiện, hành vi mong đợi, hành vi thực tế và đánh giá mức độ nghiêm trọng. Các lỗi nghiêm trọng làm hỏng chức năng cốt lõi được leo thang ngay lập tức đến nhóm phát triển để giải quyết hotfix. Các vấn đề giao diện mức độ thấp hơn được ghi lại và ưu tiên cho sprint tiếp theo. Nhóm QA tại PrecisionBuild tạo báo cáo tóm tắt kiểm thử hàng tuần cho mỗi dự án, được chia sẻ với cả nhóm lãnh đạo nội bộ và khách hàng. Sự minh bạch này đã liên tục được khách hàng trích dẫn là một trong những lý do họ gia hạn hợp đồng với công ty.`,
    vocabulary: [
      { word: 'shift-left testing', meaning: 'kiểm thử từ sớm trong vòng đời phát triển' },
      { word: 'acceptance criteria', meaning: 'tiêu chí chấp nhận' },
      { word: 'edge cases', meaning: 'các trường hợp đặc biệt/ngoại lệ' },
      { word: 'automated test scripts', meaning: 'script kiểm thử tự động' },
      { word: 'regression', meaning: 'lỗi hồi quy (lỗi cũ quay lại)' },
      { word: 'bug tracking system', meaning: 'hệ thống theo dõi lỗi' },
      { word: 'severity rating', meaning: 'đánh giá mức độ nghiêm trọng' },
      { word: 'hotfix', meaning: 'vá lỗi khẩn cấp' },
      { word: 'steps to reproduce', meaning: 'các bước để tái hiện lỗi' },
      { word: 'cosmetic issues', meaning: 'vấn đề giao diện nhỏ' },
    ],
    questions: [
      {
        id: 'r034q1',
        question: 'What does "shift-left testing" mean?',
        options: [
          'Testing only after the project is complete',
          'Moving QA to a different department',
          'Involving testing throughout the entire development lifecycle',
          'Reducing the number of test cases',
        ],
        correctAnswer: 2,
        explanation: '"an integral activity woven throughout the entire development lifecycle — an approach known as \'shift-left testing.\'"',
      },
      {
        id: 'r034q2',
        question: 'When does QA get involved in projects at PrecisionBuild?',
        options: [
          'Only at the end before release',
          'During the testing phase only',
          'From the requirements analysis phase',
          'After the first sprint is complete',
        ],
        correctAnswer: 2,
        explanation: '"QA engineers are involved from the requirements analysis phase."',
      },
      {
        id: 'r034q3',
        question: 'What happens to critical bugs found by QA?',
        options: [
          'They are logged for the next sprint',
          'They are escalated immediately for hotfix resolution',
          'They are reported to the client directly',
          'They are ignored if the deadline is close',
        ],
        correctAnswer: 1,
        explanation: '"Critical bugs that break core functionality are escalated immediately to the development team for hotfix resolution."',
      },
      {
        id: 'r034q4',
        question: 'Why do clients renew contracts with PrecisionBuild?',
        options: [
          'Because PrecisionBuild has the lowest prices',
          'Because the team works overtime to fix bugs',
          'Because of the transparency provided by weekly test reports',
          'Because they are required to by contract',
        ],
        correctAnswer: 2,
        explanation: '"This transparency has consistently been cited by clients as one of the reasons they renew their contracts."',
      },
    ],
  },

  {
    id: 'r035',
    level: 'intermediate',
    topic: 'Project Handover',
    title: 'The Project Handover Process',
    titleVi: 'Quy Trình Bàn Giao Dự Án',
    content: `A project handover occurs when responsibility for a software system is transferred from one team to another. This can happen when a project ends, when a vendor is replaced, or when a client decides to take over maintenance internally. A poorly executed handover can lead to system instability, loss of critical knowledge, and damaged client relationships. Therefore, outsourcing companies invest significant effort in making handovers as smooth as possible.

At TransferTech Solutions, the handover process begins at least six weeks before the official transition date. The outgoing team prepares a comprehensive handover package that includes: the system architecture documentation, a database schema and data dictionary, deployment procedures and environment configurations, a list of all third-party integrations and their credentials, known issues and technical debt, and runbooks for common operational tasks. A runbook is a step-by-step guide that tells an operator exactly what to do in specific situations, such as restarting a service or responding to a specific alert.

The incoming team spends the first two weeks reviewing the documentation and asking clarifying questions. In weeks three and four, the teams work in parallel — the incoming team shadows the outgoing team during all operations, code reviews, and incident responses. By weeks five and six, the incoming team takes the lead while the outgoing team is available for support. The final day of the transition includes a formal sign-off meeting where the incoming team confirms they have received all materials and have sufficient knowledge to operate the system independently. TransferTech maintains a 30-day post-handover support window during which the outgoing team can be contacted for urgent questions.`,
    translation: `Bàn giao dự án xảy ra khi trách nhiệm về một hệ thống phần mềm được chuyển từ nhóm này sang nhóm khác. Điều này có thể xảy ra khi dự án kết thúc, khi nhà cung cấp được thay thế, hoặc khi khách hàng quyết định tự đảm nhận bảo trì nội bộ. Việc bàn giao thực hiện kém có thể dẫn đến bất ổn hệ thống, mất kiến thức quan trọng và tổn hại mối quan hệ khách hàng. Do đó, các công ty outsource đầu tư đáng kể để thực hiện bàn giao suôn sẻ nhất có thể.

Tại TransferTech Solutions, quy trình bàn giao bắt đầu ít nhất sáu tuần trước ngày chuyển giao chính thức. Nhóm bàn giao chuẩn bị gói bàn giao toàn diện bao gồm: tài liệu kiến trúc hệ thống, sơ đồ cơ sở dữ liệu và từ điển dữ liệu, quy trình triển khai và cấu hình môi trường, danh sách tất cả các tích hợp bên thứ ba và thông tin đăng nhập của chúng, các vấn đề đã biết và nợ kỹ thuật, và runbook cho các nhiệm vụ vận hành phổ biến. Runbook là hướng dẫn từng bước cho người vận hành biết chính xác phải làm gì trong các tình huống cụ thể, chẳng hạn như khởi động lại dịch vụ hoặc phản ứng với một cảnh báo cụ thể.

Nhóm tiếp nhận dành hai tuần đầu để xem xét tài liệu và đặt câu hỏi làm rõ. Trong tuần ba và bốn, hai nhóm làm việc song song — nhóm tiếp nhận quan sát nhóm bàn giao trong tất cả các hoạt động, review code và phản ứng sự cố. Đến tuần năm và sáu, nhóm tiếp nhận dẫn đầu trong khi nhóm bàn giao sẵn sàng hỗ trợ. Ngày cuối cùng của quá trình chuyển tiếp bao gồm cuộc họp ký kết chính thức nơi nhóm tiếp nhận xác nhận họ đã nhận được tất cả tài liệu và có đủ kiến thức để vận hành hệ thống độc lập. TransferTech duy trì cửa sổ hỗ trợ sau bàn giao 30 ngày trong đó nhóm bàn giao có thể được liên hệ cho các câu hỏi khẩn cấp.`,
    vocabulary: [
      { word: 'project handover', meaning: 'bàn giao dự án' },
      { word: 'outgoing team', meaning: 'nhóm bàn giao (rời đi)' },
      { word: 'incoming team', meaning: 'nhóm tiếp nhận' },
      { word: 'database schema', meaning: 'sơ đồ cơ sở dữ liệu' },
      { word: 'technical debt', meaning: 'nợ kỹ thuật' },
      { word: 'runbook', meaning: 'sổ tay vận hành hệ thống' },
      { word: 'third-party integrations', meaning: 'các tích hợp bên thứ ba' },
      { word: 'sign-off meeting', meaning: 'cuộc họp ký kết/nghiệm thu' },
      { word: 'shadows', meaning: 'quan sát và học theo (kèm cặp)' },
      { word: 'post-handover support', meaning: 'hỗ trợ sau bàn giao' },
    ],
    questions: [
      {
        id: 'r035q1',
        question: 'How far in advance does TransferTech begin the handover process?',
        options: ['Two weeks', 'Four weeks', 'Six weeks', 'Three months'],
        correctAnswer: 2,
        explanation: '"the handover process begins at least six weeks before the official transition date."',
      },
      {
        id: 'r035q2',
        question: 'What is a runbook?',
        options: [
          'A schedule of running activities',
          'A step-by-step guide for operators in specific situations',
          'A report on system performance',
          'A list of all software bugs',
        ],
        correctAnswer: 1,
        explanation: '"A runbook is a step-by-step guide that tells an operator exactly what to do in specific situations."',
      },
      {
        id: 'r035q3',
        question: 'What do the two teams do in weeks three and four?',
        options: [
          'The outgoing team leaves and the incoming team works alone',
          'Both teams work in parallel with the incoming team shadowing the outgoing team',
          'They have daily status calls only',
          'The incoming team reviews documentation only',
        ],
        correctAnswer: 1,
        explanation: '"the teams work in parallel — the incoming team shadows the outgoing team during all operations."',
      },
      {
        id: 'r035q4',
        question: 'How long is TransferTech\'s post-handover support window?',
        options: ['7 days', '14 days', '30 days', '60 days'],
        correctAnswer: 2,
        explanation: '"TransferTech maintains a 30-day post-handover support window."',
      },
    ],
  },

  {
    id: 'r036',
    level: 'intermediate',
    topic: 'Technical Interview',
    title: 'Preparing for a Technical Interview at an IT Company',
    titleVi: 'Chuẩn Bị Cho Phỏng Vấn Kỹ Thuật Tại Công Ty IT',
    content: `Landing a job at a reputable software outsourcing company typically requires passing a multi-stage interview process that includes both technical and behavioral components. Understanding what to expect and how to prepare can significantly improve a candidate's success rate. The technical interview is designed to assess a candidate's problem-solving ability, knowledge of programming concepts, and their approach to real-world engineering challenges.

Most IT companies in Vietnam conduct technical interviews in two or three rounds. The first round is often a coding challenge on a platform such as HackerRank or LeetCode, where candidates solve algorithmic problems within a time limit. Common topics include data structures, sorting algorithms, recursion, and dynamic programming. Candidates are advised to practice consistently for at least four to six weeks before applying, focusing on medium-difficulty problems that test both correctness and efficiency.

The second round is typically a live coding session or a system design discussion. In a system design interview, the interviewer presents a high-level scenario — for example, "Design a URL shortening service" or "How would you build a real-time chat system?" — and expects the candidate to think aloud, ask clarifying questions, and propose a scalable architecture. Interviewers are not only evaluating the final answer but also the candidate's communication skills, their ability to handle ambiguity, and how they respond to hints and feedback. The final behavioral round assesses cultural fit and asks questions such as "Describe a time when you disagreed with a technical decision made by your team. How did you handle it?"`,
    translation: `Để có được việc làm tại một công ty outsource phần mềm uy tín thường đòi hỏi vượt qua quy trình phỏng vấn nhiều giai đoạn bao gồm cả thành phần kỹ thuật và hành vi. Hiểu những gì cần mong đợi và cách chuẩn bị có thể cải thiện đáng kể tỷ lệ thành công của ứng viên. Phỏng vấn kỹ thuật được thiết kế để đánh giá khả năng giải quyết vấn đề, kiến thức về các khái niệm lập trình và cách tiếp cận thách thức kỹ thuật trong thực tế của ứng viên.

Hầu hết các công ty IT tại Việt Nam tiến hành phỏng vấn kỹ thuật trong hai hoặc ba vòng. Vòng đầu tiên thường là thử thách code trên nền tảng như HackerRank hoặc LeetCode, nơi ứng viên giải các bài toán thuật toán trong giới hạn thời gian. Các chủ đề phổ biến bao gồm cấu trúc dữ liệu, thuật toán sắp xếp, đệ quy và quy hoạch động. Ứng viên được khuyên thực hành đều đặn ít nhất bốn đến sáu tuần trước khi ứng tuyển, tập trung vào các bài toán độ khó vừa kiểm tra cả tính đúng đắn và hiệu quả.

Vòng hai thường là phiên code trực tiếp hoặc thảo luận thiết kế hệ thống. Trong phỏng vấn thiết kế hệ thống, người phỏng vấn đưa ra một kịch bản cấp cao — ví dụ, "Thiết kế dịch vụ rút ngắn URL" hoặc "Bạn sẽ xây dựng hệ thống chat thời gian thực như thế nào?" — và mong đợi ứng viên suy nghĩ to, đặt câu hỏi làm rõ và đề xuất kiến trúc có thể mở rộng. Người phỏng vấn không chỉ đánh giá câu trả lời cuối cùng mà còn kỹ năng giao tiếp, khả năng xử lý sự mơ hồ và cách ứng viên phản ứng với gợi ý và phản hồi. Vòng hành vi cuối cùng đánh giá sự phù hợp văn hóa và đặt các câu hỏi như "Mô tả một lần khi bạn không đồng ý với quyết định kỹ thuật của nhóm. Bạn đã xử lý như thế nào?"`,
    vocabulary: [
      { word: 'multi-stage interview', meaning: 'phỏng vấn nhiều vòng' },
      { word: 'behavioral interview', meaning: 'phỏng vấn hành vi' },
      { word: 'algorithmic problems', meaning: 'bài toán thuật toán' },
      { word: 'data structures', meaning: 'cấu trúc dữ liệu' },
      { word: 'dynamic programming', meaning: 'quy hoạch động' },
      { word: 'system design interview', meaning: 'phỏng vấn thiết kế hệ thống' },
      { word: 'scalable architecture', meaning: 'kiến trúc có thể mở rộng' },
      { word: 'think aloud', meaning: 'suy nghĩ to (nói ra quá trình suy nghĩ)' },
      { word: 'cultural fit', meaning: 'sự phù hợp với văn hóa công ty' },
      { word: 'ambiguity', meaning: 'sự mơ hồ' },
    ],
    questions: [
      {
        id: 'r036q1',
        question: 'What is the purpose of the technical interview?',
        options: [
          'To check a candidate\'s educational background',
          'To assess problem-solving ability, programming knowledge, and engineering approach',
          'To negotiate salary',
          'To introduce the company culture',
        ],
        correctAnswer: 1,
        explanation: '"The technical interview is designed to assess a candidate\'s problem-solving ability, knowledge of programming concepts, and their approach to real-world engineering challenges."',
      },
      {
        id: 'r036q2',
        question: 'How long should candidates practice before applying, according to the passage?',
        options: ['One week', 'Two to three weeks', 'Four to six weeks', 'Three months'],
        correctAnswer: 2,
        explanation: '"practice consistently for at least four to six weeks before applying."',
      },
      {
        id: 'r036q3',
        question: 'In a system design interview, what does the interviewer evaluate besides the final answer?',
        options: [
          'The candidate\'s typing speed',
          'The candidate\'s university grades',
          'Communication skills, handling ambiguity, and response to feedback',
          'The candidate\'s previous salary',
        ],
        correctAnswer: 2,
        explanation: '"Interviewers are not only evaluating the final answer but also the candidate\'s communication skills, their ability to handle ambiguity, and how they respond to hints and feedback."',
      },
      {
        id: 'r036q4',
        question: 'What does the final behavioral round assess?',
        options: ['Technical skills', 'Cultural fit', 'Salary expectations', 'Language proficiency'],
        correctAnswer: 1,
        explanation: '"The final behavioral round assesses cultural fit."',
      },
    ],
  },

  {
    id: 'r037',
    level: 'intermediate',
    topic: 'Mentoring',
    title: 'Mentoring Junior Developers: Best Practices',
    titleVi: 'Hướng Dẫn Lập Trình Viên Mới: Các Thực Hành Tốt Nhất',
    content: `Mentoring junior developers is one of the most valuable contributions a senior engineer can make to their team and organization. In the outsourcing industry, where clients expect high-quality output from every team member, investing in the growth of junior staff directly translates into better project outcomes and higher team resilience. A strong mentoring culture also significantly reduces employee turnover, as junior developers who receive meaningful guidance are more likely to stay with the company.

Effective mentoring is not about giving answers but about asking the right questions that guide the mentee to find solutions independently. When a junior developer encounters a problem, a good mentor will first ask: "What have you already tried? What does the error message tell you? Where in the documentation would you look?" This approach builds the junior developer's problem-solving confidence and critical thinking skills over time, rather than creating dependency on the mentor.

At CodeNation, senior developers are formally assigned mentees at the start of each quarter. The mentoring relationship involves weekly one-on-one sessions of 30 to 45 minutes, a shared learning goal for the quarter, and monthly progress reviews. Mentors are also encouraged to include their mentees in code reviews, architecture discussions, and client-facing meetings where appropriate, providing exposure to real-world engineering decisions. The company tracks mentoring effectiveness through quarterly surveys, measuring both the mentee's skill progression and job satisfaction. Senior developers who demonstrate outstanding mentoring performance receive additional recognition during performance reviews.`,
    translation: `Hướng dẫn các lập trình viên mới là một trong những đóng góp quý giá nhất mà một kỹ sư cấp cao có thể thực hiện cho nhóm và tổ chức của họ. Trong ngành outsource, nơi khách hàng mong đợi đầu ra chất lượng cao từ mọi thành viên nhóm, đầu tư vào sự phát triển của nhân viên mới trực tiếp chuyển thành kết quả dự án tốt hơn và khả năng phục hồi nhóm cao hơn. Văn hóa hướng dẫn mạnh mẽ cũng làm giảm đáng kể tỷ lệ nghỉ việc, vì các lập trình viên mới nhận được hướng dẫn có ý nghĩa có nhiều khả năng ở lại công ty hơn.

Hướng dẫn hiệu quả không phải là đưa ra câu trả lời mà là đặt đúng câu hỏi dẫn dắt người được hướng dẫn tự tìm ra giải pháp. Khi một lập trình viên mới gặp vấn đề, người hướng dẫn tốt sẽ trước tiên hỏi: "Bạn đã thử gì rồi? Thông báo lỗi nói gì với bạn? Bạn sẽ tìm trong phần nào của tài liệu?" Cách tiếp cận này xây dựng sự tự tin giải quyết vấn đề và kỹ năng tư duy phản biện của lập trình viên mới theo thời gian, thay vì tạo ra sự phụ thuộc vào người hướng dẫn.

Tại CodeNation, các nhà phát triển cấp cao được giao chính thức người được hướng dẫn vào đầu mỗi quý. Mối quan hệ hướng dẫn bao gồm các phiên một-một hàng tuần từ 30 đến 45 phút, một mục tiêu học tập chung cho quý, và đánh giá tiến độ hàng tháng. Người hướng dẫn cũng được khuyến khích đưa người được hướng dẫn vào các buổi review code, thảo luận kiến trúc và các cuộc họp với khách hàng khi phù hợp, cung cấp kinh nghiệm với các quyết định kỹ thuật thực tế. Công ty theo dõi hiệu quả hướng dẫn thông qua khảo sát hàng quý, đo lường cả tiến bộ kỹ năng và sự hài lòng trong công việc của người được hướng dẫn. Các nhà phát triển cấp cao thể hiện hiệu suất hướng dẫn xuất sắc nhận được ghi nhận thêm trong các đánh giá hiệu suất.`,
    vocabulary: [
      { word: 'mentoring', meaning: 'kèm cặp / hướng dẫn' },
      { word: 'mentee', meaning: 'người được kèm cặp' },
      { word: 'team resilience', meaning: 'khả năng phục hồi của nhóm' },
      { word: 'employee turnover', meaning: 'tỷ lệ nhân viên nghỉ việc' },
      { word: 'critical thinking', meaning: 'tư duy phản biện' },
      { word: 'problem-solving confidence', meaning: 'sự tự tin giải quyết vấn đề' },
      { word: 'learning goal', meaning: 'mục tiêu học tập' },
      { word: 'skill progression', meaning: 'tiến bộ kỹ năng' },
      { word: 'dependency', meaning: 'sự phụ thuộc' },
      { word: 'job satisfaction', meaning: 'sự hài lòng trong công việc' },
    ],
    questions: [
      {
        id: 'r037q1',
        question: 'According to the passage, what is effective mentoring NOT about?',
        options: [
          'Asking the right guiding questions',
          'Building the mentee\'s independence',
          'Giving answers directly to save time',
          'Including mentees in code reviews',
        ],
        correctAnswer: 2,
        explanation: '"Effective mentoring is not about giving answers but about asking the right questions that guide the mentee to find solutions independently."',
      },
      {
        id: 'r037q2',
        question: 'How often do CodeNation mentor-mentee pairs have one-on-one sessions?',
        options: ['Daily', 'Weekly', 'Monthly', 'Quarterly'],
        correctAnswer: 1,
        explanation: '"weekly one-on-one sessions of 30 to 45 minutes."',
      },
      {
        id: 'r037q3',
        question: 'What does CodeNation track through quarterly surveys?',
        options: [
          'Project revenue and client satisfaction',
          'The mentee\'s skill progression and job satisfaction',
          'The number of bugs fixed by junior developers',
          'Time spent on mentoring activities',
        ],
        correctAnswer: 1,
        explanation: '"measuring both the mentee\'s skill progression and job satisfaction."',
      },
      {
        id: 'r037q4',
        question: 'Why does strong mentoring culture reduce employee turnover?',
        options: [
          'Because it leads to higher salaries',
          'Because junior developers who receive guidance are more likely to stay',
          'Because it gives junior developers more vacation time',
          'Because it satisfies a legal requirement',
        ],
        correctAnswer: 1,
        explanation: '"junior developers who receive meaningful guidance are more likely to stay with the company."',
      },
    ],
  },

  {
    id: 'r038',
    level: 'intermediate',
    topic: 'Client Relations',
    title: 'Managing a Difficult Client Relationship',
    titleVi: 'Quản Lý Mối Quan Hệ Khách Hàng Khó Khăn',
    content: `Not all client relationships are straightforward. In the outsourcing industry, project managers sometimes find themselves working with clients who have unrealistic expectations, poor communication habits, or a tendency to micromanage the development team. Handling these situations professionally is a critical skill that separates experienced project managers from beginners.

The first step when a client relationship becomes difficult is to understand the root cause. Clients who are aggressive or overly demanding are often acting out of fear — fear that the project will fail, that they are losing control, or that they are not getting value for their money. By addressing these underlying concerns with transparency and empathy, a project manager can often de-escalate tension and restore trust. For example, if a client is demanding daily status updates, the project manager might proactively schedule brief daily check-in calls and share a simple dashboard showing real-time project metrics. This gives the client the visibility they crave without overwhelming the development team.

At ClearPath Technology, the account management team conducts a quarterly relationship health check for every active client. The health check reviews five dimensions: communication quality, delivery consistency, client satisfaction score, commercial health, and escalation frequency. Any client account that scores below the acceptable threshold on two or more dimensions is escalated to the senior leadership team for a relationship recovery plan. This proactive approach has allowed ClearPath to turn around three potentially lost accounts in the past year through targeted interventions before the situations became irreparable.`,
    translation: `Không phải tất cả mối quan hệ khách hàng đều suôn sẻ. Trong ngành outsource, các quản lý dự án đôi khi thấy mình làm việc với những khách hàng có kỳ vọng không thực tế, thói quen giao tiếp kém, hoặc xu hướng quản lý vi mô nhóm phát triển. Xử lý những tình huống này một cách chuyên nghiệp là kỹ năng quan trọng phân biệt các quản lý dự án có kinh nghiệm với người mới.

Bước đầu tiên khi mối quan hệ khách hàng trở nên khó khăn là hiểu nguyên nhân gốc rễ. Các khách hàng hung hăng hoặc đòi hỏi quá mức thường đang hành động vì sợ hãi — sợ dự án thất bại, sợ mất kiểm soát hoặc sợ không nhận được giá trị xứng đáng với tiền của họ. Bằng cách giải quyết những lo ngại cơ bản này với sự minh bạch và đồng cảm, quản lý dự án thường có thể giảm leo thang căng thẳng và khôi phục lòng tin. Ví dụ, nếu khách hàng yêu cầu cập nhật trạng thái hàng ngày, quản lý dự án có thể chủ động lên lịch các cuộc gọi check-in ngắn hàng ngày và chia sẻ bảng điều khiển đơn giản hiển thị số liệu dự án theo thời gian thực. Điều này cung cấp cho khách hàng sự hiển thị họ mong muốn mà không làm quá tải nhóm phát triển.

Tại ClearPath Technology, nhóm quản lý tài khoản tiến hành kiểm tra sức khỏe mối quan hệ hàng quý cho mỗi khách hàng đang hoạt động. Kiểm tra sức khỏe xem xét năm chiều: chất lượng giao tiếp, tính nhất quán bàn giao, điểm hài lòng của khách hàng, sức khỏe thương mại và tần suất leo thang. Bất kỳ tài khoản khách hàng nào có điểm dưới ngưỡng chấp nhận được ở hai hoặc nhiều chiều đều được leo thang đến nhóm lãnh đạo cấp cao để có kế hoạch phục hồi mối quan hệ. Cách tiếp cận chủ động này đã cho phép ClearPath cứu vãn ba tài khoản có thể bị mất trong năm qua thông qua các can thiệp có mục tiêu trước khi tình huống trở nên không thể cứu vãn.`,
    vocabulary: [
      { word: 'micromanage', meaning: 'quản lý vi mô (kiểm soát quá mức chi tiết)' },
      { word: 'root cause', meaning: 'nguyên nhân gốc rễ' },
      { word: 'de-escalate', meaning: 'giảm leo thang (căng thẳng)' },
      { word: 'empathy', meaning: 'sự đồng cảm' },
      { word: 'real-time metrics', meaning: 'số liệu theo thời gian thực' },
      { word: 'account management', meaning: 'quản lý tài khoản khách hàng' },
      { word: 'relationship health check', meaning: 'kiểm tra sức khỏe mối quan hệ' },
      { word: 'escalation frequency', meaning: 'tần suất leo thang vấn đề' },
      { word: 'threshold', meaning: 'ngưỡng' },
      { word: 'irreparable', meaning: 'không thể sửa chữa được' },
    ],
    questions: [
      {
        id: 'r038q1',
        question: 'According to the passage, what is often the root cause of aggressive client behavior?',
        options: [
          'Poor project management by the vendor',
          'Language barriers',
          'Fear — of failure, losing control, or not getting value',
          'Cultural differences',
        ],
        correctAnswer: 2,
        explanation: '"clients who are aggressive or overly demanding are often acting out of fear."',
      },
      {
        id: 'r038q2',
        question: 'How does the passage suggest handling a client who demands daily status updates?',
        options: [
          'Refuse and explain it disrupts the team',
          'Proactively schedule brief daily check-in calls and share a real-time dashboard',
          'Only update them when a milestone is reached',
          'Have a senior manager take over the communication',
        ],
        correctAnswer: 1,
        explanation: '"the project manager might proactively schedule brief daily check-in calls and share a simple dashboard showing real-time project metrics."',
      },
      {
        id: 'r038q3',
        question: 'How many dimensions does ClearPath\'s relationship health check review?',
        options: ['Three', 'Four', 'Five', 'Six'],
        correctAnswer: 2,
        explanation: '"The health check reviews five dimensions."',
      },
      {
        id: 'r038q4',
        question: 'How many accounts did ClearPath save from being lost in the past year?',
        options: ['One', 'Two', 'Three', 'Five'],
        correctAnswer: 2,
        explanation: '"ClearPath to turn around three potentially lost accounts in the past year."',
      },
    ],
  },

  // ===================== ADVANCED (thêm lần 3) =====================
  {
    id: 'r039',
    level: 'advanced',
    topic: 'Engineering Leadership',
    title: 'The Role of the CTO in a Growing Outsourcing Company',
    titleVi: 'Vai Trò Của CTO Trong Công Ty Outsource Đang Tăng Trưởng',
    content: `As an outsourcing company scales from a small team of twenty developers to an organization of two hundred or more, the role of the Chief Technology Officer (CTO) undergoes a fundamental transformation. In the early stages, the CTO is typically a hands-on technical expert who writes code, reviews pull requests, and makes most architectural decisions personally. However, as the organization grows, the CTO must evolve into a strategic leader whose primary responsibility is enabling the entire engineering organization to operate effectively — not doing the engineering themselves.

This transition is notoriously difficult. Many technically brilliant CTOs struggle with delegation and find it psychologically challenging to step back from hands-on technical work that gave them their early successes. The effective resolution of this tension requires the CTO to develop a new identity as a multiplier: someone who creates the conditions in which many other engineers can do their best work. This involves defining engineering standards and architectural principles, building robust hiring and career development processes, fostering a culture of technical excellence and psychological safety, and aligning engineering strategy with business objectives.

At the portfolio level, the CTO of an outsourcing company must also manage the tension between standardization and customization. Clients have diverse technical requirements, and while accommodating every client's preferred technology stack generates higher client satisfaction in the short term, it creates an unsustainable diversity of systems and expertise that is difficult to maintain and scale. The most effective outsourcing CTOs establish a "golden path" — a set of preferred, well-supported technology choices that cover the majority of client needs — while maintaining the flexibility to deviate when a client's requirements genuinely justify it. This balance between standardization and flexibility is one of the defining challenges of technical leadership in the outsourcing context.`,
    translation: `Khi một công ty outsource mở rộng từ một nhóm nhỏ gồm hai mươi nhà phát triển đến một tổ chức gồm hai trăm người trở lên, vai trò của Giám đốc Công nghệ (CTO) trải qua một sự chuyển đổi cơ bản. Trong giai đoạn đầu, CTO thường là chuyên gia kỹ thuật thực hành viết code, review pull request và đưa ra hầu hết các quyết định kiến trúc cá nhân. Tuy nhiên, khi tổ chức phát triển, CTO phải tiến hóa thành một nhà lãnh đạo chiến lược có trách nhiệm chính là giúp toàn bộ tổ chức kỹ thuật hoạt động hiệu quả — không tự mình làm kỹ thuật.

Quá trình chuyển đổi này nổi tiếng là khó khăn. Nhiều CTO xuất sắc về kỹ thuật đấu tranh với việc ủy quyền và thấy khó khăn về mặt tâm lý khi rút lui khỏi công việc kỹ thuật thực hành đã mang lại thành công ban đầu cho họ. Việc giải quyết hiệu quả căng thẳng này đòi hỏi CTO phát triển một bản sắc mới như một bộ nhân: người tạo ra các điều kiện mà nhiều kỹ sư khác có thể làm tốt nhất công việc của họ. Điều này bao gồm xác định các tiêu chuẩn kỹ thuật và nguyên tắc kiến trúc, xây dựng các quy trình tuyển dụng và phát triển sự nghiệp vững chắc, nuôi dưỡng văn hóa xuất sắc kỹ thuật và an toàn tâm lý, và căn chỉnh chiến lược kỹ thuật với mục tiêu kinh doanh.

Ở cấp độ danh mục, CTO của một công ty outsource cũng phải quản lý sự căng thẳng giữa tiêu chuẩn hóa và tùy chỉnh. Khách hàng có yêu cầu kỹ thuật đa dạng, và trong khi đáp ứng công nghệ ưa thích của mỗi khách hàng tạo ra sự hài lòng khách hàng cao hơn trong ngắn hạn, nó tạo ra sự đa dạng không bền vững của các hệ thống và chuyên môn khó duy trì và mở rộng. Các CTO outsource hiệu quả nhất thiết lập một "con đường vàng" — một tập hợp các lựa chọn công nghệ ưa thích, được hỗ trợ tốt đáp ứng phần lớn nhu cầu của khách hàng — trong khi duy trì tính linh hoạt để sai lệch khi yêu cầu của khách hàng thực sự biện hộ cho điều đó. Sự cân bằng giữa tiêu chuẩn hóa và linh hoạt này là một trong những thách thức xác định lãnh đạo kỹ thuật trong bối cảnh outsourcing.`,
    vocabulary: [
      { word: 'Chief Technology Officer (CTO)', meaning: 'Giám đốc Công nghệ' },
      { word: 'hands-on', meaning: 'thực hành trực tiếp' },
      { word: 'delegation', meaning: 'ủy quyền' },
      { word: 'multiplier', meaning: 'bộ nhân (người tạo điều kiện cho người khác)' },
      { word: 'psychological safety', meaning: 'an toàn tâm lý' },
      { word: 'standardization', meaning: 'tiêu chuẩn hóa' },
      { word: 'golden path', meaning: 'con đường vàng (stack công nghệ chuẩn)' },
      { word: 'portfolio', meaning: 'danh mục (dự án/khách hàng)' },
      { word: 'aligning', meaning: 'căn chỉnh / phối hợp' },
      { word: 'deviate', meaning: 'sai lệch / ngoại lệ' },
    ],
    questions: [
      {
        id: 'r039q1',
        question: 'How does the CTO\'s role change as the company grows?',
        options: [
          'They write more code as the team gets bigger',
          'They shift from hands-on technical work to strategic leadership',
          'They focus entirely on sales and client acquisition',
          'Their role stays essentially the same',
        ],
        correctAnswer: 1,
        explanation: '"the CTO must evolve into a strategic leader whose primary responsibility is enabling the entire engineering organization to operate effectively."',
      },
      {
        id: 'r039q2',
        question: 'What is a "multiplier" as described in the passage?',
        options: [
          'A developer who writes code faster than others',
          'A CTO who works multiple jobs simultaneously',
          'Someone who creates conditions for many other engineers to do their best work',
          'A manager who oversees multiple projects',
        ],
        correctAnswer: 2,
        explanation: '"someone who creates the conditions in which many other engineers can do their best work."',
      },
      {
        id: 'r039q3',
        question: 'What is the "golden path" concept?',
        options: [
          'A career advancement route for senior developers',
          'A preferred set of well-supported technology choices covering most client needs',
          'A project that always runs successfully',
          'A client onboarding process',
        ],
        correctAnswer: 1,
        explanation: '"a set of preferred, well-supported technology choices that cover the majority of client needs."',
      },
      {
        id: 'r039q4',
        question: 'What is one risk of accommodating every client\'s preferred technology stack?',
        options: [
          'Clients become too dependent on the vendor',
          'It creates an unsustainable diversity of systems and expertise',
          'Developers lose their skills',
          'The company becomes too profitable',
        ],
        correctAnswer: 1,
        explanation: '"it creates an unsustainable diversity of systems and expertise that is difficult to maintain and scale."',
      },
    ],
  },

  {
    id: 'r040',
    level: 'advanced',
    topic: 'Digital Transformation',
    title: 'Outsourcing as a Driver of Digital Transformation',
    titleVi: 'Outsourcing Như Một Động Lực Của Chuyển Đổi Số',
    content: `Digital transformation — the process by which organizations integrate digital technology into all areas of their business — has become a top priority for enterprises across industries. For many companies, particularly those in traditional sectors such as manufacturing, retail, and financial services, building a world-class internal software engineering capability is neither feasible nor strategically desirable. This is where technology outsourcing partners play an increasingly strategic role, moving beyond mere code production to become genuine transformation advisors.

The most sophisticated outsourcing engagements today are structured as strategic partnerships rather than vendor-client transactional relationships. In these arrangements, the outsourcing company does not simply execute on a pre-defined specification but actively participates in discovery, research, and problem framing. At InnovatePath Consulting, the company's digital transformation practice works alongside clients' leadership teams to conduct technology audits, benchmark current capabilities against industry peers, identify automation opportunities using process mining tools, and design future-state enterprise architectures. This advisory layer significantly increases the contract value and, more importantly, creates a deeply integrated relationship that is highly resistant to competitive displacement.

However, this elevated positioning also carries greater responsibility. When an outsourcing company influences a client's strategic technology decisions, it must exercise rigorous objectivity and prioritize the client's long-term interests over its own commercial interests. Recommending a particular technology platform because it generates a more lucrative ongoing support contract, rather than because it genuinely best serves the client, would be a breach of the trust-based partnership model. The most enduring outsourcing relationships are built on a foundation of honest counsel, even when that counsel sometimes leads to recommendations that are commercially suboptimal for the vendor in the short term.`,
    translation: `Chuyển đổi số — quá trình mà các tổ chức tích hợp công nghệ kỹ thuật số vào tất cả các lĩnh vực kinh doanh của họ — đã trở thành ưu tiên hàng đầu cho các doanh nghiệp trong các ngành. Đối với nhiều công ty, đặc biệt là những công ty trong các lĩnh vực truyền thống như sản xuất, bán lẻ và dịch vụ tài chính, xây dựng năng lực kỹ thuật phần mềm nội bộ đẳng cấp thế giới không khả thi cũng không mong muốn về mặt chiến lược. Đây là nơi các đối tác outsource công nghệ đóng vai trò ngày càng chiến lược, vượt ra ngoài việc chỉ sản xuất code để trở thành các cố vấn chuyển đổi thực sự.

Các hợp đồng outsource tinh tế nhất ngày nay được cơ cấu như các quan hệ đối tác chiến lược thay vì các mối quan hệ giao dịch nhà cung cấp-khách hàng. Trong những sắp xếp này, công ty outsource không chỉ đơn giản thực thi một đặc tả được xác định trước mà tích cực tham gia vào khám phá, nghiên cứu và định hình vấn đề. Tại InnovatePath Consulting, thực hành chuyển đổi số của công ty làm việc cùng với các nhóm lãnh đạo của khách hàng để tiến hành kiểm toán công nghệ, đánh giá chuẩn năng lực hiện tại so với các đồng nghiệp trong ngành, xác định cơ hội tự động hóa bằng công cụ khai thác quy trình và thiết kế kiến trúc doanh nghiệp trạng thái tương lai. Lớp tư vấn này tăng đáng kể giá trị hợp đồng và quan trọng hơn, tạo ra mối quan hệ tích hợp sâu sắc rất kháng lại sự thay thế cạnh tranh.

Tuy nhiên, vị thế nâng cao này cũng mang trách nhiệm lớn hơn. Khi một công ty outsource ảnh hưởng đến các quyết định công nghệ chiến lược của khách hàng, nó phải thực hiện tính khách quan nghiêm ngặt và ưu tiên lợi ích dài hạn của khách hàng hơn lợi ích thương mại của chính mình. Đề xuất một nền tảng công nghệ cụ thể vì nó tạo ra hợp đồng hỗ trợ liên tục sinh lời hơn, thay vì vì nó thực sự phục vụ khách hàng tốt nhất, sẽ là vi phạm mô hình quan hệ đối tác dựa trên lòng tin. Các mối quan hệ outsource lâu dài nhất được xây dựng trên nền tảng của lời khuyên trung thực, ngay cả khi lời khuyên đó đôi khi dẫn đến các khuyến nghị tối ưu về mặt thương mại cho nhà cung cấp trong ngắn hạn.`,
    vocabulary: [
      { word: 'digital transformation', meaning: 'chuyển đổi số' },
      { word: 'technology audit', meaning: 'kiểm toán công nghệ' },
      { word: 'process mining', meaning: 'khai thác quy trình' },
      { word: 'future-state architecture', meaning: 'kiến trúc trạng thái tương lai' },
      { word: 'competitive displacement', meaning: 'sự thay thế cạnh tranh' },
      { word: 'problem framing', meaning: 'định hình vấn đề' },
      { word: 'commercially suboptimal', meaning: 'không tối ưu về mặt thương mại' },
      { word: 'honest counsel', meaning: 'lời khuyên trung thực' },
      { word: 'rigorous objectivity', meaning: 'tính khách quan nghiêm ngặt' },
      { word: 'benchmark', meaning: 'đánh giá chuẩn / so sánh chuẩn' },
    ],
    questions: [
      {
        id: 'r040q1',
        question: 'How are the most sophisticated outsourcing engagements structured today?',
        options: [
          'As simple vendor-client transactional relationships',
          'As strategic partnerships where the vendor actively participates in discovery',
          'As one-time project contracts with no long-term commitment',
          'As staff augmentation arrangements only',
        ],
        correctAnswer: 1,
        explanation: '"The most sophisticated outsourcing engagements today are structured as strategic partnerships...the outsourcing company...actively participates in discovery, research, and problem framing."',
      },
      {
        id: 'r040q2',
        question: 'What does InnovatePath\'s digital transformation practice do for clients?',
        options: [
          'Only writes code based on client specifications',
          'Conducts technology audits, benchmarks capabilities, and designs future architectures',
          'Manages the client\'s HR and recruitment',
          'Provides only cybersecurity services',
        ],
        correctAnswer: 1,
        explanation: '"conduct technology audits, benchmark current capabilities...identify automation opportunities...and design future-state enterprise architectures."',
      },
      {
        id: 'r040q3',
        question: 'According to the passage, what would be a breach of the trust-based partnership model?',
        options: [
          'Recommending open-source technology',
          'Recommending technology that best serves the client',
          'Recommending technology for more lucrative support contracts rather than client benefit',
          'Providing honest advice about project risks',
        ],
        correctAnswer: 2,
        explanation: '"Recommending a particular technology platform because it generates a more lucrative ongoing support contract, rather than because it genuinely best serves the client, would be a breach of the trust-based partnership model."',
      },
      {
        id: 'r040q4',
        question: 'What are the most enduring outsourcing relationships built on?',
        options: [
          'The lowest price',
          'The largest team size',
          'Honest counsel, even when it is commercially suboptimal for the vendor',
          'The use of the latest technology trends',
        ],
        correctAnswer: 2,
        explanation: '"The most enduring outsourcing relationships are built on a foundation of honest counsel, even when that counsel sometimes leads to recommendations that are commercially suboptimal for the vendor."',
      },
    ],
  },
];

export const getPassagesByLevel = (level: string) =>
  READING_PASSAGES.filter((p) => p.level === level);

export const getPassageById = (id: string) =>
  READING_PASSAGES.find((p) => p.id === id);
