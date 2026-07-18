// ── i18n Language Switcher ──
const i18n = {
  ar: {
    nav_home: 'الرئيسية', nav_about: 'اللمحة', nav_education: 'المؤهلات',
    nav_experience: 'الخبرات', nav_skills: 'المهارات', nav_courses: 'الدورات',
    nav_edraak: 'منصة إدراك', nav_satar: 'منصة سطر',
    section_about: 'المعلومات الشخصية', section_education: 'المؤهلات العلمية',
    section_experience: 'الخبرات العملية', section_freelance: 'المشاريع المستقلة',
    section_skills: 'المهارات والقدرات', section_courses: 'الدورات و الدبلومات',
    section_edraak: 'منصة إدراك', section_satar: 'منصة سطر',
    section_fcc: 'شهادات و إنجازات FreeCodeCamp', section_coursera: 'شهادات واحترافية Coursera',
    about_name: 'الاسم بالإنجليزية', about_email: 'البريد الإلكتروني',
    about_phone: 'الهاتف', about_birth: 'تاريخ الميلاد',
    about_address: 'العنوان', about_specialty: 'التخصص', about_linkedin: 'لينكد إن',
    cert_show_issuer: 'عرض الجهة المانحة', cert_back: 'العودة للشهادة',
    orbit_title: 'أقسام الدورات و الدبلومات', orbit_sub: 'اختر القسم الذي تود استعراض شهاداته',
    orbit_accounting: 'قسم المحاسبة', orbit_training: 'قسم التطوير',
    orbit_software: 'قسم البرامج', orbit_technical: 'قسم التقنية',
    orbit_languages: 'قسم اللغات', orbit_appreciation: 'التقدير',
    orbit_achievements: 'الإنجازات', orbit_close: 'إغلاق النافذة',
    bubble_home: 'الرئيسية', bubble_about: 'اللمحة', bubble_education: 'المؤهلات',
    bubble_experience: 'الخبرات', bubble_skills: 'المهارات', bubble_courses: 'الدورات',
    bubble_edraak: 'إدراك', bubble_satar: 'سطر',
    btn_update: 'تحديث الصفحة الآن',
    pwa_welcome: 'مرحباً بك في سيرتي الذاتية!',
    pwa_welcome_desc: 'لضمان عرض أحدث البيانات والخبرات والدورات المحدثة، يرجى الضغط على زر التحديث أدناه لتحديث الصفحة.',
    pwa_install_title: 'أهلاً بك في سيرتي الذاتية!',
    pwa_install_desc: 'هل تود إضافة السيرة الذاتية لشاشة الجوال للوصول السريع لخبراتي ودوراتي؟',
    pwa_install_btn: 'تثبيت التطبيق الآن',
    pwa_install_later: 'لاحقاً، شكراً لك',
    chatbot_placeholder: 'اكتب رسالتك هنا...',
    chatbot_welcome: 'مرحباً! أعرفك بنفسي، أنا المساعد الذكي الخاص بالمحاسب عبد العزيز. كيف يمكنني مساعدتك اليوم؟ 😊',
    chatbot_header_name: 'المساعد الذكي - عبدالعزيز',
    chatbot_header_status: 'متاح الآن',
    quick_intro: 'من أنت؟ 👋',
    quick_education: 'المؤهلات العلمية 🎓',
    quick_experience: 'الخبرات العملية 💼',
    quick_system_mgr: 'مساعد مدير النظام ⚙️',
    quick_freelance: 'المشاريع المستقلة 🚀',
    quick_skills: 'المهارات 💪',
    quick_accounting: 'الدورات المحاسبية 📊',
    quick_training: 'دورات التطوير 🌱',
    quick_software: 'دورات البرامج 💻',
    quick_technical: 'الدورات التقنية 🔧',
    quick_languages: 'اللغات 🌍',
    quick_edraak: 'منصة إدراك 📘',
    quick_satar: 'منصة سطر 💜',
    quick_ai: 'خبير الذكاء الاصطناعي 🤖',
    quick_achievements: 'الإنجازات 🏆',
    quick_contact: 'التواصل 📞',
    main_menu_title: 'الازرار الرئيسية',
    cat_cv: 'السيرة الذاتية',
    cat_courses: 'الدورات والشهادات',
    cat_platforms: 'المنصات التعليمية',
    cat_other: 'أخرى',
  },
  en: {
    nav_home: 'Home', nav_about: 'About', nav_education: 'Education',
    nav_experience: 'Experience', nav_skills: 'Skills', nav_courses: 'Courses',
    nav_edraak: 'Edraak', nav_satar: 'Satar',
    section_about: 'Personal Information', section_education: 'Education',
    section_experience: 'Experience', section_freelance: 'Freelance Projects',
    section_skills: 'Skills & Abilities', section_courses: 'Courses & Diplomas',
    section_edraak: 'Edraak Platform', section_satar: 'Satar Platform',
    section_fcc: 'FreeCodeCamp Certifications', section_coursera: 'Coursera Certifications',
  about_name: 'Full Name (EN)', about_email: 'Email',
  about_phone: 'Phone', about_birth: 'Date of Birth',
  about_address: 'Address', about_specialty: 'Specialty', about_linkedin: 'LinkedIn',

    cert_show_issuer: 'View Issuer', cert_back: 'Back to Certificate',
    orbit_title: 'Course Categories', orbit_sub: 'Choose a category to view certificates',
    orbit_accounting: 'Accounting', orbit_training: 'Training',
    orbit_software: 'Software', orbit_technical: 'Technical',
    orbit_languages: 'Languages', orbit_appreciation: 'Appreciation',
    orbit_achievements: 'Achievements', orbit_close: 'Close',
    bubble_home: 'Home', bubble_about: 'About', bubble_education: 'Education',
    bubble_experience: 'Experience', bubble_skills: 'Skills', bubble_courses: 'Courses',
    bubble_edraak: 'Edraak', bubble_satar: 'Satar',
    btn_update: 'Update Page Now',
    pwa_welcome: 'Welcome to My CV!',
    pwa_welcome_desc: 'To ensure the latest data is displayed, please click the update button below to refresh the page.',
    pwa_install_title: 'Welcome to My CV!',
    pwa_install_desc: 'Would you like to install this CV on your home screen for quick access?',
    pwa_install_btn: 'Install Now',
    pwa_install_later: 'Later, Thanks',
    chatbot_placeholder: 'Type your message here...',
    chatbot_welcome: 'Hello! I am the smart assistant for accountant Abdulaziz. How can I help you today? 😊',
    chatbot_header_name: 'Smart Assistant - Abdulaziz',
    chatbot_header_status: 'Online Now',
    quick_intro: 'Who are you? 👋',
    quick_education: 'Education 🎓',
    quick_experience: 'Experience 💼',
    quick_system_mgr: 'System Manager ⚙️',
    quick_freelance: 'Freelance Projects 🚀',
    quick_skills: 'Skills 💪',
    quick_accounting: 'Accounting Courses 📊',
    quick_training: 'Training Courses 🌱',
    quick_software: 'Software Courses 💻',
    quick_technical: 'Technical Courses 🔧',
    quick_languages: 'Languages 🌍',
    quick_edraak: 'Edraak Platform 📘',
    quick_satar: 'Satar Platform 💜',
    quick_ai: 'AI Expert 🤖',
    quick_achievements: 'Achievements 🏆',
    quick_contact: 'Contact 📞',
    main_menu_title: 'Main Menu',
    cat_cv: 'CV & Resume',
    cat_courses: 'Courses & Certificates',
    cat_platforms: 'Learning Platforms',
    cat_other: 'Other',
  }
};

// ── Content Translations (for data-i18n-content elements) ──
const contentData = {
  // ── About ──
  about_address_val: { ar: 'فوه - المتضررين (حي المستقبل)', en: 'Fuwah - Al-Mutadarririn (Future Neighborhood)' },
  about_specialty_val: { ar: 'محاسب', en: 'Accountant' },

  // ── Education ──
  edu_uni_title: { ar: 'بكالوريوس تخصص محاسبة', en: "Bachelor's Degree in Accounting" },
  edu_uni_text: { ar: 'جامعة حضرموت', en: 'Hadhramout University' },
  edu_uni_date: { ar: '2025م - 2026م', en: '2025 - 2026' },
  edu_high_title: { ar: 'شهادة الثانوية العامة', en: 'High School Diploma' },
  edu_high_text: { ar: 'ثانوية المكلا النموذجية للبنين', en: 'Al-Mukalla Model Secondary School for Boys' },
  edu_high_grade: { ar: 'حاصل على تقدير (95.63%)', en: 'Grade: 95.63%' },
  edu_uni_btn: { ar: 'جامعة حضرموت', en: 'Hadhramout University' },
  edu_high_btn: { ar: 'ثانوية المكلا النموذجية', en: 'Al-Mukalla Model Secondary School' },
  edu_mid_title: { ar: 'شهادة المرحلة الإعدادية', en: 'Middle School Certificate' },
  edu_mid_text: { ar: 'مدرسة عثمان بن عفان', en: 'Othman Bin Affan School' },
  edu_mid_grade: { ar: 'المركز الخامس على مستوى المديرية (99.29%)', en: 'Ranked 5th district-wide (99.29%)' },

  // ── Experience 1: Assistant System Admin ──
  exp1_title: { ar: 'مساعد مدير النظام', en: 'Assistant System Administrator' },
  exp1_company: { ar: 'شركة بن دول للتجارة والصناعة والمقاولات المحدودة (المجموعة القابضة)', en: 'Bin Dowal Trading, Industry & Contracting Co. Ltd. (Holding Group)' },
  exp1_date: { ar: 'يونيو 2026 - لمدة وجيزة', en: 'June 2026 - Brief' },
  exp1_b1: { ar: 'إدارة بنية وهيكل النظام: إدارة وإعداد الوحدات الإدارية، والفترات المحاسبية، وبيانات الفروع والشركات التابعة للمجموعة على نظام اونكس برو التابع لشركة (يمن سوفت).', en: 'System Architecture & Hierarchy Management: Structured and configured administrative units, accounting periods, and branch data across the Onyx Pro ERP system (YemenSoft).' },
  exp1_b2: { ar: 'إدارة الصلاحيات وأمن المعلومات: التحكم الكامل في منح وتقييد صلاحيات المستخدمين والمحاسبين، وإدارة الحسابات وكلمات السر لضمان حماية وسرية البيانات المالية الحساسة.', en: 'Access Control & Information Security: Managed user and accountant permissions, user accounts, and password credentials to secure sensitive financial data.' },
  exp1_b3: { ar: 'إدارة النسخ الاحتياطي والأمان: الإشراف على عمليات النسخ الاحتياطي الدوري لقواعد بيانات الفروع والمركز الرئيسي لضمان سلامة البيانات واستمرار العمل دون فقدان للمعلومات.', en: 'Backup & Disaster Recovery Management: Supervised routine backup processes for central and branch databases to ensure data integrity and business continuity.' },
  exp1_b4: { ar: 'الرقابة وتعديل العمليات الحساسة: مراجعة وتعديل فواتير المشتريات والمبيعات والعمليات المالية المعقدة على النظام بعد التحقق الإداري لضمان مطابقتها وصحتها المحاسبية.', en: 'Audit & Sensitive Transactions Adjustment: Reviewed and modified purchase/sales invoices and complex financial entries after administrative verification.' },
  exp1_b5: { ar: 'معالجة الأخطاء التشغيلية للنظام: تقديم الدعم للمستخدمين في حل المشكلات التشغيلية والمحاسبية اليومية ضمن النظام، والرفع بالبلاغات التقنية المعقدة لفريق تقنية المعلومات (IT) أو الشركة المطورة (يمن سوفت) لمتابعة حلها.', en: 'System Troubleshooting & Support: Provided daily operational and accounting tech support to end-users, escalating complex bugs to the IT team or YemenSoft developers.' },
  exp1_b6: { ar: 'التنسيق مع المطور الخارجي: العمل كحلقة وصل تقنية وفنية مع شركة (يمن سوفت) لرفع المشكلات البرمجية العميقة ومتابعة تحديثات النظام وإصلاح العيوب التقنية المعقدة.', en: 'Vendor & Developer Coordination: Acted as the primary technical liaison with YemenSoft to report core software issues and track patch updates.' },

  // ── Experience 2: Cashier & Payables ──
  exp2_title: { ar: 'أمين صندوق مالي وإدارة مستحقات', en: 'Cashier & Payables Administrator' },
  exp2_company: { ar: 'شركة مسلم التجارية', en: 'Moslem Trading Company' },
  exp2_date: { ar: 'من 25/1/2026 إلى الآن', en: 'Jan 25, 2026 – Present' },
  exp2_b1: { ar: 'إدارة دورة المقبوضات والمدفوعات: تنفيذ وإصدار سندات القبض والصرف الرسمية، وضمان التوثيق المحاسبي الفوري لكافة الحركات النقدية داخل النظام.', en: 'Cash Flow & Lifecycle Management: Executed official cash receipts and payment vouchers, ensuring immediate ledger entries into the ERP system.' },
  exp2_b2: { ar: 'ضبط حسابات وسلف الموظفين: إدارة كشوفات الموظفين والعمال، واحتساب المسحوبات الشهرية بدقة، وضمان خصمها من الاستحقاقات النهائية.', en: 'Employee Advances & Payroll Reconciliation: Managed employee ledgers, calculated monthly advances accurately, and reconciled them against final payouts.' },
  exp2_b3: { ar: 'المطابقة والرقابة اليومية: إجراء المطابقة الدورية عبر "كشف الصناديق" لضمان تطابق الرصيد الدفتري مع النقد الفعلي بالخزينة بنسبة 100%.', en: 'Daily Financial Reconciliation: Conducted routine physical cash counts to guarantee a 100% match between book values and actual vault cash.' },
  exp2_b4: { ar: 'إدارة التدفقات الخارجة والبنكية: تولي مسؤولية توريد السيولة النقدية والشيكات إلى الحسابات البنكية ومطابقة إشعارات الإيداع.', en: 'Banking Operations & Outflow Management: Handled cash and check deposits to corporate bank accounts and reconciled deposit slips.' },
  exp2_b5: { ar: 'صرف المصاريف التشغيلية: توثيق وصرف المبالغ المخصصة للمصاريف النثرية وفقاً للاعتمادات المالية المعتمدة.', en: 'Operational Expense Disbursal: Documented and disbursed petty cash funds strictly adhering to approved corporate budgets.' },

  // ── Experience 3: Cashier POS ──
  exp3_title: { ar: 'كاشير - (نقطة بيع)', en: 'Cashier (Point of Sale)' },
  exp3_company: { ar: 'مطعم وبروست العمودي', en: 'Al-Amoudi Restaurant & Broast' },
  exp3_date: { ar: 'من 21/10/2021 إلى 23/1/2026', en: 'Oct 21, 2021 – Jan 23, 2026' },
  exp3_b1: { ar: 'إدارة العمليات المالية (أكثر من 4 سنوات): مسؤول عن معالجة مئات العمليات النقدية والإلكترونية يومياً بدقة عالية، مع الالتزام بإجراء التصفية الختامية للصندوق ومطابقة الإيرادات مع تقارير نظام -POS.', en: 'High-Volume Financial Operations: Successfully processed hundreds of cash and electronic transactions daily with absolute precision, completing end-of-day cash closeouts against POS reports.' },
  exp3_b2: { ar: 'العمل تحت ضغط عالٍ: العمل بكفاءة خلال ساعات الذروة بيئة مزدحمة جداً، لمنع حدوث أي عجز مالي أو أخطاء.', en: 'High-Pressure Environments: Maintained focus and accuracy during peak operational hours, ensuring zero financial discrepancies.' },
  exp3_b3: { ar: 'اللباقة والاحترافية: التميز في التعامل مع شريحة واسعة من العملاء وحل المشكلات المتعلقة بالدفع والاعتراضات بمهنية.', en: 'Customer Relations & Problem Solving: Demonstrated professional tact and exceptional service while managing diverse customer needs and resolving billing disputes.' },

  // ── Freelance Project ──
  frl_title: { ar: 'تصميم وتطوير الموقع التعريفي', en: 'Web Design & Presentation Platform Development' },
  frl_company: { ar: 'شركة حضرموت للمحاسبة والمراجعة', en: 'Hadhramaut Accounting and Auditing Company' },
  frl_date: { ar: 'يونيو 2026', en: 'June 2026' },
  frl_platform_label: { ar: 'المنصة المستخدمة:', en: 'Platform Used:' },
  frl_platform: { ar: 'نظام أودو العالمي (Odoo ERP - Website Builder)', en: 'Odoo ERP - Website Builder' },
  frl_b1: { ar: 'تطوير واجهات الويب الرقمية (Front-End Layout): بناء وتنسيق الواجهة الأمامية للموقع الإلكتروني وهيكلتها باحترافية باستخدام أدوات ومنصات التطوير المرئي في نظام أودو (Odoo CMS).', en: 'Front-End Layout Development: Structured and designed a professional front-end interface using Odoo CMS visual development tools.' },
  frl_b2: { ar: 'تكامل وهيكلة البيانات: تنظيم طريقة عرض الخدمات المحاسبية والباقات السعرية، وضبط تدفق البيانات لضمان معالجتها برمجياً بشكل صحيح في خلفية النظام وبناء تجربة تصفح سلسة.', en: 'Data Architecture & Integration: Organized the presentation flow for accounting services and pricing tiers, ensuring proper back-end data routing.' },
  frl_b3: { ar: 'إعداد المحتوى التعريفي والموثوقية: صياغة واستعراض الهيكل الإداري والسير المهنية لكوادر الشركة وخبراتهم لتعزيز الهوية الرقمية والموثوقية للمكتب أمام العملاء.', en: 'Corporate Identity & Content Strategy: Drafted the corporate hierarchy and biographical profiles for the firm\'s executive team.' },
  frl_b4: { ar: 'تحسين الأداء وتجربة المستخدم (UX/UI): توزيع العناصر المرئية، التبويبات، وقنوات الاتصال المباشرة لضمان سرعة استجابة الموقع وسهولة تصفحه من مختلف الأجهزة.', en: 'UX/UI Optimization: Enhanced responsiveness, navigation menus, and call-to-action communication channels across multiple devices.' },

  // ── Skills ──
  skill_1: { ar: 'تحمل الضغط العالي (العمل في البيئات المزدحمة)', en: 'High-Stress Tolerance & Fast-Paced Operations' },
  skill_2: { ar: 'التواصل الفعال (التعامل المهني مع الجمهور والزملاء)', en: 'Effective Communication & Professional Customer Relations' },
  skill_3: { ar: 'الأمانة والموثوقية (سجل نظيف في التعامل بالأموال)', en: 'Integrity & Reliability (Clean track record handling financial assets)' },
  skill_4: { ar: 'إجادة التعامل مع أنظمة نقاط البيع (POS Systems)', en: 'Proficient with Point of Sale (POS) Systems' },
  skill_5: { ar: 'إدارة النقدية والعهد المالية', en: 'Core Cash Management (Receipts, Vouchers, Cash Flow)' },
  skill_6: { ar: 'المطابقة المالية اليومية', en: 'Daily Financial Reconciliation & Ledger Auditing' },
  skill_7: { ar: 'إصدار سندات القبض والصرف', en: 'Payment & Receipt Voucher Processing' },
  skill_8: { ar: 'إدارة السلف ومستحقات الموظفين', en: 'Employee Advances & Accounts Payable Admin' },
  skill_9: { ar: 'إدارة الإيداعات البنكية والشيكات', en: 'Banking Deposits & Check Reconciliations' },
  skill_10: { ar: 'استخدام نظام onyx pro', en: 'Expert User of Onyx Pro ERP System' },
  skill_11: { ar: 'إعداد التقارير والكشوفات المالية', en: 'Financial Reporting & Record Organization' },
  skill_12: { ar: 'الرقابة المالية وتنظيم السجلات', en: 'Financial Control & Record Organization' },
  skill_ai_title: { ar: 'خبير لأوامر الذكاء الاصطناعي (AI Prompt Expert)', en: 'AI Prompt Engineering Expert' },
  skill_ai_b1: { ar: 'إتقان تقنيات هندسة الأوامر (Prompt Engineering) المتقدمة لرفع دقة مخرجات الذكاء الاصطناعي.', en: 'Advanced Prompt Engineering techniques to boost AI accuracy.' },
  skill_ai_b2: { ar: 'تصميم وتنفيذ استراتيجيات الذكاء الاصطناعي التوليدي (Generative AI) لتحسين كفاءة العمليات.', en: 'Implementing Generative AI strategies to enhance corporate workflows.' },
  skill_ai_b3: { ar: 'استخدام أدوات الـ AI في حل المشكلات المعقدة وأتمتة المهام الروتينية لزيادة الإنتاجية المؤسسية.', en: 'Utilizing AI tools for routine task automation and complex problem-solving.' },
  skill_ai_b4: { ar: 'تطبيق أفضل الممارسات العالمية في التفاعل مع نماذج اللغة الكبيرة (LLMs).', en: 'Adapting global best practices for interacting with Large Language Models (LLMs).' },

  // ── Course Section Titles ──
  courses_accounting_title: { ar: 'قسم الدورات المحاسبية', en: 'Accounting & Financial Systems' },
  courses_training_title: { ar: 'قسم التطوير والتدريب', en: 'Professional Development & Management' },
  courses_software_title: { ar: 'قسم الدورات المتعلقة بالبرامج', en: 'Software & Data Analytics' },
  courses_technical_title: { ar: 'قسم الدورات التقنية والإبداعية', en: 'Technical, Tech-Creative & AI' },
  courses_languages_title: { ar: 'قسم اللغات', en: 'Language Diplomas' },
  courses_appreciation_title: { ar: 'شهادات الشكر والتقدير', en: 'Appreciation Certificates & Awards' },
  courses_achievements_title: { ar: 'الإنجازات والجوائز', en: 'Achievements & Awards' },

  // ── Course Cards: Accounting ──
  ca_1_title: { ar: 'دبلوم المحاسبة والإدارة المالية', en: 'Diploma in Accounting and Financial Management' },
  ca_1_grade: { ar: '(تقدير: ممتاز)', en: '(Grade: Excellent)' },
  ca_1_org: { ar: 'مركز جامعة حضرموت', en: 'Hadhramout University Center' },
  ca_2_title: { ar: 'دبلوم المحاسبة', en: 'Diploma in Accounting' },
  ca_2_org: { ar: 'الاكاديمية الدولية للتدريب والتأهيل', en: 'International Academy for Training and Rehabilitation' },
  ca_3_title: { ar: 'دبلوم النظام المحاسبي المتكامل (يمن سوفت/اونكس برو)', en: 'Integrated Accounting Systems Diploma (YemenSoft / Onyx Pro)' },
  ca_3_org: { ar: 'الاكاديمية الدولية للتدريب والتأهيل (ممتاز)', en: 'International Academy for Training (Excellent)' },
  ca_4_title: { ar: 'دورة النظام المحاسبي اونكس برو', en: 'Onyx Pro ERP Accounting Course' },
  ca_4_org: { ar: 'مركز بحوث حضرموت التابع لجامعة الاحقاف (جيد جداً)', en: 'Hadhramout Research Center - Al-Ahgaaf University (Very Good)' },
  ca_5_title: { ar: 'دورة نظام Odoo العالمي السحابية', en: 'Global Odoo Cloud System Course' },
  ca_5_org: { ar: 'شركة سنود للحلول والاعمال التقنية', en: 'Snood for Technical Solutions and Business' },
  ca_6_title: { ar: 'دورة نظام الميزان للمحاسبة والمستودعات', en: 'Al-Mizan Accounting & Inventory System' },
  ca_6_org: { ar: 'مركز الأفق للكمبيوتر والأنظمة (ممتاز 90%)', en: 'Al-Afaq Computer & Systems Center (Excellent 90%)' },
  ca_7_title: { ar: 'دورة نظام الأمين للمحاسبة والمستودعات', en: 'Al-Ameen Accounting & Inventory System' },
  ca_7_org: { ar: 'شركة الأمين سوفت للحلول الأعمال والأنظمة (جيد جداً)', en: 'Al-Ameen Software for Business Solutions (Very Good)' },

  // ── Course Cards: Training ──
  ct_1_title: { ar: 'برنامج McKinsey Forward', en: 'McKinsey Forward Program' },
  ct_1_org: { ar: 'McKinsey.org', en: 'McKinsey.org' },
  ct_1_desc: { ar: 'برنامج تأهيلي مكثف مقدم من أعرق مؤسسة استشارات إدارية واستراتيجية عالمياً (McKinsey & Company)، يهدف إلى إعداد المهنيين الشباب لقيادة بيئات العمل المستقبلية.', en: 'An intensive leadership accelerator by McKinsey & Company focused on future-of-work skills.' },
  ct_1_badge: { ar: 'عرض الشارة المعتمدة', en: 'View Verified Badge' },
  ct_2_title: { ar: 'إدارة السلامة والصحة المهنية (OSHA Standards)', en: 'Occupational Safety and Health Administration (OSHA Standards)' },
  ct_2_org: { ar: 'مركز نقابة المهندسين حضرموت', en: 'Engineers Syndicate Center, Hadhramaut' },
  ct_2_grade: { ar: 'التقدير: ممتاز (90%)', en: 'Grade: Excellent (90%)' },
  ct_3_title: { ar: 'دبلوم إدارة الأعمال', en: 'Diploma in Business Administration' },
  ct_3_org: { ar: 'الأكاديمية الدولية للتدريب والتأهيل', en: 'International Academy for Training and Rehabilitation' },
  ct_3_grade: { ar: 'التقدير: ممتاز (96.5%)', en: 'Grade: Excellent (96.5%)' },
  ct_4_title: { ar: 'دبلوم التنمية البشرية', en: 'Diploma in Human Development' },
  ct_4_org: { ar: 'مركز جامعة النخبة للتدريب والتنمية', en: 'Al-Nokhbah University Center for Training & Development' },
  ct_4_grade: { ar: 'التقدير: ممتاز', en: 'Grade: Excellent' },
  ct_5_title: { ar: 'دورة ريادة الأعمال', en: 'Entrepreneurship Course' },
  ct_5_org: { ar: 'مركز جامعة النخبة للتدريب والتنمية', en: 'Al-Nokhbah University Center' },
  ct_6_title: { ar: 'دورة الإدارة الاستراتيجية', en: 'Strategic Management Course' },
  ct_6_org: { ar: 'مركز جامعة النخبة للتدريب والتنمية', en: 'Al-Nokhbah University Center' },
  ct_7_title: { ar: 'دورة المراسلات التجارية والتجارة الدولية', en: 'Commercial Correspondence & International Trade' },
  ct_7_org: { ar: 'مركز جامعة النخبة الدولية للتدريب والتنمية', en: 'International Al-Nokhbah University Center' },
  ct_8_title: { ar: 'الذكاء العاطفي والاجتماعي', en: 'Emotional and Social Intelligence' },
  ct_8_org: { ar: 'مركز جامعة حضرموت لتدريب الطلاب', en: 'Hadhramout University Student Training Center' },

  // ── Course Cards: Software ──
  cs_1_title: { ar: 'دبلوم الرخصة الدولية لقيادة الحاسوب ICDL', en: 'International Computer Driving License (ICDL) Diploma' },
  cs_1_org: { ar: 'مركز جامعة النخبة الدولية للتدريب والتنمية', en: 'International Al-Nokhbah University Center' },
  cs_1_grade: { ar: 'التقدير: ممتاز', en: 'Grade: Excellent' },
  cs_2_title: { ar: 'دورة الباوربوينت المتقدم', en: 'Advanced PowerPoint Course' },
  cs_2_org: { ar: 'مركز جامعة النخبة الدولية للتدريب والتنمية', en: 'International Al-Nokhbah University Center' },
  cs_3_title: { ar: 'دبلوم الاكسل المحاسبي المتكامل', en: 'Integrated Accounting Excel Diploma' },
  cs_3_org: { ar: 'الأكاديمية الدولية للتدريب والتأهيل', en: 'International Academy for Training and Rehabilitation' },
  cs_4_title: { ar: 'دورة أساسيات الإكسل', en: 'Excel Fundamentals' },
  cs_4_org: { ar: 'مركز جامعة حضرموت لتدريب الطلاب', en: 'Hadhramout University Student Training Center' },
  cs_5_title: { ar: 'دورة الإكسل المتقدم', en: 'Advanced Excel Course' },
  cs_5_org: { ar: 'مركز جامعة النخبة الدولية للتدريب والتنمية', en: 'International Al-Nokhbah University Center' },
  cs_6_title: { ar: 'دورة الإكسل المحاسبي', en: 'Accounting Excel Course' },
  cs_6_org: { ar: 'مركز جامعة النخبة الدولية للتدريب والتنمية', en: 'International Al-Nokhbah University Center' },
  cs_7_title: { ar: 'أساسيات التحليل الإحصائي (SPSS)', en: 'Fundamentals of Statistical Analysis (SPSS)' },
  cs_7_org: { ar: 'مركز جامعة حضرموت لتدريب الطلاب', en: 'Hadhramout University Student Training Center' },
  cs_8_title: { ar: 'تحليل البيانات وإعداد التقارير (Power BI)', en: 'Data Analysis & Reporting (Power BI)' },
  cs_8_org: { ar: 'مركز جامعة حضرموت لتدريب الطلاب', en: 'Hadhramout University Student Training Center' },

  // ── Course Cards: Technical ──
  ctech_1_title: { ar: 'دبلوم برمجة وتصميم المواقع الإلكترونية', en: 'Web Design & Programming Diploma' },
  ctech_1_org: { ar: 'الأكاديمية الدولية للتدريب والتأهيل', en: 'International Academy for Training' },
  ctech_1_grade: { ar: 'التقدير: ممتاز', en: 'Grade: Excellent' },
  ctech_2_title: { ar: 'دورة أساسيات الشبكات الاحترافية', en: 'Professional Networking Fundamentals' },
  ctech_2_org: { ar: 'مؤسسة سالم للحلول الذكية', en: 'Salem Foundation for Smart Solutions' },
  ctech_2_grade: { ar: 'التقدير: ممتاز', en: 'Grade: Excellent' },
  ctech_3_title: { ar: 'دورة الأمن السيبراني', en: 'Cybersecurity Course' },
  ctech_3_org: { ar: 'مركز جامعة النخبة الدولية للتدريب والتنمية', en: 'International Al-Nokhbah University Center' },
  ctech_4_title: { ar: 'الأمن السيبراني وحماية الهواتف الذكية من الاختراق', en: 'Cybersecurity & Smartphone Penetration Protection' },
  ctech_4_org: { ar: 'المركز العربي الإرشادي ونقابة تكنولوجيا المعلومات والاتصالات اليمنية', en: 'Arab Guidance Center & Yemeni ICT Syndicate' },
  ctech_5_title: { ar: 'دبلوم الجرافيكس', en: 'Graphic Design Diploma' },
  ctech_5_org: { ar: 'مركز بحوث حضرموت التابع لجامعة الاحقاف', en: 'Hadhramout Research Center - Al-Ahgaaf University' },
  ctech_5_grade: { ar: 'التقدير: جيد جداً', en: 'Grade: Very Good' },
  ctech_6_title: { ar: 'دورة مليون خبير لأوامر الذكاء الاصطناعي', en: 'One Million AI Prompters Course' },
  ctech_6_org: { ar: 'مؤسسة دبي للمستقبل', en: 'Dubai Future Foundation' },
  ctech_6_verify: { ar: 'تحقق من الشهادة', en: 'Verify Certificate' },

  // ── Course Cards: Languages ──
  cl_1_title: { ar: 'دبلوم اللغة الانجليزية', en: 'English Language Diploma' },
  cl_1_org: { ar: 'الاكاديمية الدولية للتدريب والتأهيل', en: 'International Academy for Training' },
  cl_1_grade: { ar: 'التقدير: ممتاز', en: 'Grade: Excellent' },
  cl_2_title: { ar: 'دبلوم اللغة الإنجليزية المتقدم', en: 'Advanced English Language Diploma' },
  cl_2_org: { ar: 'مركز جامعة النخبة الدولية للتدريب والتنمية', en: 'International Al-Nokhbah University Center' },
  cl_3_title: { ar: 'دورة اللغة الإنجليزية', en: 'English Language Course' },
  cl_3_org: { ar: 'المعهد الدولي الحديث', en: 'Modern International Institute' },
  cl_3_grade: { ar: 'التقدير: جيد جداً', en: 'Grade: Very Good' },
  cl_4_title: { ar: 'اللغة الإنجليزية (تعلم ذاتي)', en: 'Self-Taught English Proficiency' },
  cl_4_org: { ar: 'منصة Duolingo', en: 'Duolingo Platform' },
  cl_4_date: { ar: 'سبتمبر 2022 - يناير 2026 (3 سنوات متصلة)', en: 'Sep 2022 - Jan 2026 (3-Year Continuous Streak)' },
  cl_4_link: { ar: 'رابط الملف الشخصي', en: 'View Profile' },
  cl_5_title: { ar: 'طالب في برنامج أسس اللغة الإنجليزية كلغة ثانية', en: 'Foundations of English as a Second Language (ESL)' },
  cl_5_org: { ar: 'جامعة الشعب الامريكية', en: 'University of the People (UoPeople)' },

  // ── Course Cards: Appreciation ──
  capp_1_title: { ar: 'شهادة تخرج من ثانوية المكلا النموذجية للبنين', en: 'Graduation Certificate - Mukalla Model Secondary School' },
  capp_2_title: { ar: 'شهادات تقديرية لحضور دورات متعددة', en: 'Certificates of Recognition for Course Attendance' },
  capp_2_org: { ar: 'مسجد الإمام أحمد بن حنبل ومسجد الصديق', en: 'Imam Ahmad Bin Hanbal Mosque & Al-Siddiq Mosque' },
  capp_3_title: { ar: 'شهادة شكر وعرفان', en: 'Certificate of Appreciation' },
  capp_3_desc: { ar: 'لإنجاح برامج الدورة القرآنية "منزلتك عند آخر آية تقرؤها"', en: 'For successful coordination of the Quranic program "Your Status is with the Last Verse You Recite"' },
  capp_3_org: { ar: 'مسجد الإمام أحمد بن حنبل', en: 'Imam Ahmad Bin Hanbal Mosque' },
  capp_3_date: { ar: '27/7 - 15/8/2024', en: 'Jul 27 - Aug 15, 2024' },

  // ── Course Cards: Achievements ──
  caw_1_title: { ar: 'درع حفظ القرآن الكريم', en: 'Holy Quran Memorization Shield' },
  caw_1_org: { ar: 'مسجد الإمام أحمد بن حنبل', en: 'Imam Ahmad Bin Hanbal Mosque' },
  caw_2_title: { ar: 'درع التفوق والنجاح', en: 'Academic Excellence and Success Shield' },
  caw_2_org: { ar: 'مكتب وزارة التربية والتعليم', en: 'Ministry of Education Office' },
  caw_2_desc: { ar: 'الصف التاسع - الخامس مكرر بنسبة 99.29%', en: '9th Grade - 5th Place Regionally with 99.29%' },

  // ── Edraak Section ──
  edr_subtitle: { ar: 'أكبر منصة عربية للمساقات الجماعية مفتوحة المصادر', en: 'The largest Arabic MOOC platform' },
  edr_stat_spec: { ar: 'تخصص كامل', en: 'Specializations' },
  edr_stat_courses: { ar: 'مساقات منجزة', en: 'Courses Completed' },
  edr_stat_partners: { ar: 'شركاء معتمدون', en: 'Certified Partners' },
  edr_stat_hours: { ar: 'ساعة تعلم', en: 'Learning Hours' },
  edr_spec_title: { ar: 'التخصصات المعتمدة', en: 'Certified Specializations' },
  edr_icdl_title: { ar: 'الرخصة الدولية لقيادة الحاسوب', en: 'ICDL Base Specialization' },
  edr_icdl_verified: { ar: 'تخصص معتمد', en: 'Certified Specialization' },
  edr_icdl_click: { ar: 'اضغط لعرض المساقات', en: 'Click to view courses' },
  edr_icdl_count: { ar: '4 مساقات', en: '4 Courses' },
  edr_ei_title: { ar: 'الذكاء العاطفي', en: 'Emotional Intelligence Specialization' },
  edr_ei_count: { ar: '3 مساقات', en: '3 Courses' },
  edr_training_title: { ar: 'الدورات التدريبية', en: 'Training Courses' },
  edr_verify: { ar: 'تحقق', en: 'Verify' },

  // ── HUSA Center Page ──
  husa_title: { ar: 'مركز تدريب الطلاب | جامعة حضرموت', en: 'Student Training Center | Hadhramout University' },
  husa_h1: { ar: 'مركز جامعة حضرموت لتدريب الطلاب', en: 'Hadhramout University Center for Students Training' },
  husa_desc: { ar: 'مركز تدريب الطلاب في <strong>Hadhramout University</strong> هو جهة تدريبية أكاديمية معتمدة تابعة للجامعة، تُعنى بتطوير قدرات الطلاب والخريجين من خلال برامج تدريبية متخصصة وورش عمل تطبيقية. يسهم المركز في ربط الجانب الأكاديمي بالمهارات العملية المطلوبة في سوق العمل، ويقدم شهادات تدريبية معتمدة تعكس اكتساب المشاركين لمهارات مهنية وتقنية تدعم جاهزيتهم المهنية.', en: 'The Student Training Center at <strong>Hadhramout University</strong> is an accredited academic training body affiliated with the university, dedicated to developing the skills of students and graduates through specialized training programs and applied workshops. The center bridges the gap between academic knowledge and practical skills required in the job market, offering accredited training certificates that reflect participants\' acquisition of professional and technical skills.' },
  husa_cta_website: { ar: 'زيارة الموقع الرسمي للجامعة', en: 'Visit University Website' },
  husa_cta_back: { ar: 'العودة للملف الشخصي', en: 'Back to CV' },
  husa_footer: { ar: '&copy; 2026 مركز جامعة حضرموت لتدريب الطلاب. جميع الحقوق محفوظة.', en: '&copy; 2026 Hadhramout University Center for Students Training. All rights reserved.' },
  husa_badge: { ar: 'تفاصيل البرنامج التدريبي', en: 'Training Program Details' },
  husa_course_ei: { ar: 'الذكاء العاطفي والاجتماعي', en: 'Emotional and Social Intelligence' },
  husa_course_ei_desc: { ar: 'تطوير مهارات التفاعل الإيجابي وفهم الذات لتعزيز التواصل.', en: 'Developing positive interaction skills and self-awareness to enhance communication.' },
  husa_course_ei_date: { ar: 'يوليو - أغسطس 2025', en: 'July - August 2025' },
  husa_course_spss: { ar: 'أساسيات التحليل الإحصائي (SPSS)', en: 'Fundamentals of Statistical Analysis (SPSS)' },
  husa_course_spss_desc: { ar: 'إتقان مهارات معالجة البيانات الإحصائية باستخدام أدوات احترافية.', en: 'Master statistical data processing skills using professional tools.' },
  husa_course_spss_date: { ar: 'نوفمبر 2025', en: 'November 2025' },
  husa_course_pbi: { ar: 'تحليل البيانات (Power BI)', en: 'Data Analysis (Power BI)' },
  husa_course_pbi_desc: { ar: 'تحويل البيانات الخام إلى تقارير تفاعلية ذكية لدعم القرار.', en: 'Transform raw data into smart interactive reports to support decision-making.' },
  husa_course_pbi_date: { ar: 'فبراير 2026', en: 'February 2026' },
  husa_course_excel: { ar: 'أساسيات برنامج الإكسل', en: 'Excel Fundamentals' },
  husa_course_excel_desc: { ar: 'اكتساب المهارات الأساسية للتعامل مع الجداول والبيانات الحسابية بفعالية.', en: 'Acquire basic skills for effectively handling spreadsheets and computational data.' },
  husa_course_excel_date: { ar: '28 يونيو - 3 يوليو 2025', en: 'June 28 - July 3, 2025' },

  // ── Satar Section ──
  satar_subtitle: { ar: 'صناع النجاح المعتمدون لمنصة سطر أكاديمية طويق', en: 'Certified Success Partners of Satr Platform - Tuwaiq Academy' },
  satar_learned_title: { ar: 'مجالات التعلم المنجزة في المنصة', en: 'Completed Learning Areas' },
  satar_tracks_title: { ar: 'المسارات', en: 'Tracks' },
  satar_tracks_desc: { ar: 'رحلات تعليمية متكاملة لامتلاك مهارات احترافية.', en: 'Integrated educational journeys to acquire professional skills.' },
  satar_courses_title: { ar: 'الدورات التعليمية', en: 'Courses' },
  satar_courses_desc: { ar: 'برامج مكثفة في مختلف لغات البرمجة والتقنيات.', en: 'Intensive programs in various programming languages and technologies.' },
  satar_completed_title: { ar: 'الدورات التعليمية المنجزة', en: 'Completed Training Courses' },
  satar_completed_desc: { ar: 'شهادات من دورات تدريبية متخصصة في البرمجة والأمن السيبراني.', en: 'Certificates from specialized training courses in programming and cybersecurity.' },
  satar_platform_name: { ar: 'منصة سطر', en: 'Satar Platform' },
  satar_partner_saudi_fed: { ar: 'الاتحاد السعودي للأمن السيبراني والبرمجة والدرونز', en: 'Saudi Federation for Cybersecurity, Programming and Drones' },
  satar_partner_stc: { ar: 'شركة الاتصالات السعودية', en: 'Saudi Telecom Company (STC)' },
  satar_track_cloud: { ar: 'مسار الخبير السحابي (Cloud Expert)', en: 'Cloud Expert Track' },
  satar_track_web: { ar: 'مسار تطوير تطبيقات الويب', en: 'Web Applications Development Track' },
  satar_track_data_ai: { ar: 'مسار علم البيانات والذكاء الاصطناعي', en: 'Data Science & AI Track' },
  satar_course_python: { ar: 'لغة بايثون (Python) - الأساسيات والمتقدم', en: 'Python - Basics to Advanced' },
  satar_course_dsa: { ar: 'هياكل البيانات والخوارزميات', en: 'Data Structures & Algorithms' },
  satar_course_frontend: { ar: 'تطوير الواجهات الأمامية (Frontend)', en: 'Frontend Development' },
  satar_course_cyber: { ar: 'التهديدات والثغرات والهجمات في الأمن السيبراني', en: 'Cybersecurity Threats, Vulnerabilities & Attacks' },
  satar_course_cyber_short: { ar: 'التهديدات والثغرات والهجمات', en: 'Cybersecurity Threats & Attacks' },
  satar_uxui_course: { ar: 'دورة UX/UI', en: 'UX/UI Course' },
  satar_uxui_research: { ar: 'البحث والتخطيط', en: 'UX Research & Planning' },
  satar_uxui_prototyping: { ar: 'تصميم النماذج الأولية', en: 'UI Prototyping' },
  satar_uxui_project: { ar: 'مشروع تطبيقي', en: 'Applied Project' },
  satar_uxui_title: { ar: 'مسار تصميم الواجهات وتجربة المستخدم UX/UI', en: 'UX/UI Design Path' },
  satar_uxui_desc: { ar: 'رحلة تعليمية متكاملة لاحتراف تصميم واجهات المستخدِم وتحسين تجربتهم.', en: 'A comprehensive learning journey to master user interface design and user experience.' },

  // ── FreeCodeCamp Section ──
  fcc_section_title: { ar: 'شهادات و إنجازات FreeCodeCamp', en: 'FreeCodeCamp Certifications & Achievements' },
  fcc_subtitle: { ar: 'المسارات التعليمية المنجزة والشهادات المُكتسبة', en: 'Completed Learning Paths & Earned Certifications' },
  fcc_stat_certs: { ar: 'شهادات', en: 'Certifications' },
  fcc_stat_projects: { ar: 'مشروع منجز', en: 'Projects Completed' },
  fcc_stat_challenges: { ar: 'تحدي برمجي', en: 'Coding Challenges' },
  fcc_stat_hours: { ar: 'ساعة تعلم', en: 'Learning Hours' },
  fcc_cert_title_ar: { ar: 'تصميم مواقع الويب المتجاوبة', en: 'Responsive Web Design' },
  fcc_cert_desc: { ar: 'تعلم أساسيات HTML5 و CSS3 لبناء صفحات ويب حديثة ومتجاوبة مع جميع الأجهزة. يشمل تقنيات Flexbox و CSS Grid والتصميم المتكيف (Responsive Design) بالإضافة إلى معايير إمكانية الوصول (Accessibility) وأفضل ممارسات الويب الحديثة.', en: 'Learn HTML5 and CSS3 fundamentals to build modern, responsive websites. Covers Flexbox, CSS Grid, Responsive Design, Accessibility standards, and modern web best practices.' },
  fcc_badge_complete: { ar: 'مكتمل', en: 'Completed' },
  fcc_locked: { ar: 'قيد الدراسة حاليا', en: 'Currently Studying' },
  fcc_achievements: { ar: 'الأوسمة والإنجازات', en: 'Achievements & Badges' },

  // ── Coursera Section ──
  cour_section_title: { ar: 'شهادات واحترافية Coursera', en: 'Coursera Certifications & Specializations' },
  cour_subtitle: { ar: 'تعلم من أفضل 350+ جامعة وشركة عالمية', en: 'Learn from 350+ top universities and companies worldwide' },
  cour_stat_hours: { ar: 'ساعة مذاكرة', en: 'Study Hours' },
  cour_stat_partners: { ar: 'شركة شريكة', en: 'Partner Companies' },
  cour_stat_specs: { ar: 'تخصصات', en: 'Specializations' },
  cour_stat_certs: { ar: 'احترافية', en: 'Certificates' },
  cour_specs_title: { ar: 'التخصصات (Specializations)', en: 'Specializations' },
  cour_google_title: { ar: 'شهادة جوجل الاحترافية في تحليل البيانات', en: 'Google Data Analytics Professional Certificate' },
  cour_google_desc: { ar: 'برنامج تدريبي مكثف مصمم لإعداد المتخصصين في تحليل البيانات. يركز على الممارسات الواقعية التي تمكّن المحلل من استخراج رؤى قيمة من البيانات المعقدة لدعم اتخاذ القرارات الإستراتيجية في المؤسسات.', en: 'An intensive training program designed to prepare data analytics professionals. Focuses on real-world practices that enable analysts to extract valuable insights from complex data.' },
  cour_courses_title: { ar: 'دورات التخصص', en: 'Specialization Courses' },
  cour_verify_btn: { ar: 'تحقق من الشهادة', en: 'Verify Certificate' },
  cour_ibm_title: { ar: 'أساسيات هندسة البرمجيات التطبيقية من IBM', en: 'Applied Software Engineering Fundamentals - IBM' },
  cour_ibm_desc: { ar: 'تخصص متكامل يغطي دورة حياة تطوير البرمجيات (SDLC)، منهجيات Agile و Scrum، وأساسيات بنية البرامج وتقنياتها المعمارية.', en: 'A comprehensive specialization covering SDLC, Agile & Scrum methodologies, and software architecture fundamentals.' },
  cour_partner_title: { ar: 'تعلم من الأفضل', en: 'Learn from the Best' },

  // ── FCC Badges ──
  fcc_badge_fullstack: { ar: 'مطوّر Full-Stack', en: 'Full-Stack Developer' },
  fcc_badge_streak: { ar: 'سلسلة 365 يوم', en: '365-Day Streak' },
  fcc_badge_challenges: { ar: '+300 تحدي', en: '+300 Challenges' },
  fcc_badge_projects: { ar: '35 مشروع', en: '35 Projects' },
  fcc_badge_certs: { ar: '7 شهادات', en: '7 Certifications' },
  fcc_badge_graduate: { ar: 'خريج FCC', en: 'FCC Graduate' },
  fcc_cert_projects: { ar: '5 مشاريع تطبيقية', en: '5 Applied Projects' },
  fcc_cert_challenges: { ar: '196 تحدي برمجي', en: '196 Coding Challenges' },
  fcc_cert_hours: { ar: '~300 ساعة', en: '~300 Hours' },

  // ── Action Buttons ──
  whatsapp_title: { ar: 'تواصل عبر واتساب', en: 'Contact via WhatsApp' },
  linkedin_title: { ar: 'LinkedIn', en: 'LinkedIn' },

  // ── Coursera sub-cards ──
  cour_gdata_c1_desc: { ar: 'الأسس: البيانات، البيانات، في كل مكان', en: 'Foundations: Data, Data, Everywhere' },
  cour_gdata_c2_desc: { ar: 'طرح الأسئلة لاتخاذ قرارات مبنية على البيانات', en: 'Ask Questions to Make Data-Driven Decisions' },
  cour_ibm_c1_desc: { ar: 'مقدمة في هندسة البرمجيات', en: 'Introduction to Software Engineering' },

  // ── Additional Course Grades ──
  ct_5_grade: { ar: 'التقدير: ممتاز', en: 'Grade: Excellent' },
  ct_6_grade: { ar: 'التقدير: ممتاز', en: 'Grade: Excellent' },
  ct_7_grade: { ar: 'التقدير: ممتاز', en: 'Grade: Excellent' },
  cs_2_grade: { ar: 'التقدير: ممتاز', en: 'Grade: Excellent' },
  cs_5_grade: { ar: 'التقدير: ممتاز', en: 'Grade: Excellent' },
  cs_6_grade: { ar: 'التقدير: ممتاز', en: 'Grade: Excellent' },
  ctech_3_grade: { ar: 'التقدير: ممتاز', en: 'Grade: Excellent' },
  cl_2_grade: { ar: 'التقدير: ممتاز', en: 'Grade: Excellent' },

  // ── Edraak ICDL Course Titles ──
  edr_icdl_ce_title: { ar: 'أساسيات الحاسوب', en: 'Computer Essentials' },
  edr_icdl_oe_title: { ar: 'أساسيات الإنترنت', en: 'Online Essentials' },
  edr_icdl_wp_title: { ar: 'معالجة النصوص (Word)', en: 'Word Processing' },
  edr_icdl_ex_title: { ar: 'الجداول الإلكترونية (Excel)', en: 'Spreadsheets (Excel)' },

  // ── Edraak EI Course Titles ──
  edr_ei_self_title: { ar: 'الذكاء العاطفي و الذات', en: 'Emotional Intelligence and Self' },
  edr_ei_lead_title: { ar: 'الذكاء العاطفي و القيادة', en: 'Emotional Intelligence and Leadership' },
  edr_ei_soc_title: { ar: 'الذكاء العاطفي و المجتمع', en: 'Emotional Intelligence and Society' },

  // ── Edraak Training Cards ──
  edr_train_listen_title: { ar: 'فن الاستماع الفعال', en: 'Effective Listening Skills' },
  edr_train_listen_desc: { ar: 'تطوير مهارات التواصل الشخصي وفهم لغة الجسد وتحليل الرسائل الصوتية.', en: 'Developing interpersonal communication, decoding body language, and auditory communication analysis.' },
  edr_train_creative_title: { ar: 'المهارات الإبداعية في حل المشاكل', en: 'Creative Problem-Solving Skills' },
  edr_train_creative_desc: { ar: 'استخدام التفكير الإبداعي والمنهجي لحل التحديات المعقدة في بيئة الأعمال.', en: 'Deploying systematic and creative framework strategies for complex corporate challenges.' },
  edr_train_net_title: { ar: 'مقدمة في عالم الشبكات', en: 'Introduction to Networking' },
  edr_train_net_desc: { ar: 'فهم أساسيات شبكات الحاسوب، البروتوكولات، وطرق توصيل الأجهزة المختلفة.', en: 'Mastery of computer network basics, infrastructure protocols, and device configurations.' },
};

let currentLang = localStorage.getItem('lang') || 'ar';

// Expose i18n globally for other scripts
window.i18n = i18n;
window.contentData = contentData;
window.currentLang = currentLang;

function switchLanguage(lang) {
  const newLang = lang || (currentLang === 'ar' ? 'en' : 'ar');
  currentLang = newLang;
  window.currentLang = newLang;
  localStorage.setItem('lang', newLang);

  const html = document.documentElement;
  html.lang = newLang;
  html.dir = newLang === 'ar' ? 'rtl' : 'ltr';

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[newLang][key]) {
      el.textContent = i18n[newLang][key];
    }
  });

  // Update data-i18n-tooltip elements
  document.querySelectorAll('[data-i18n-tooltip]').forEach(el => {
    const key = el.getAttribute('data-i18n-tooltip');
    if (i18n[newLang][key]) {
      el.setAttribute('data-tooltip', i18n[newLang][key]);
    }
  });

  // Update lang switcher buttons
  const circleBtn = document.getElementById('lang-circle-btn');
  if (circleBtn) {
    const span = circleBtn.querySelector('span');
    if (span) span.textContent = newLang === 'ar' ? 'EN' : 'AR';
    circleBtn.title = newLang === 'ar' ? 'English' : 'العربية';
    circleBtn.setAttribute('aria-label', newLang === 'ar' ? 'تبديل إلى الإنجليزية' : 'Switch to Arabic');
    // Red for English, blue for Arabic (transparent like floating action buttons)
    const isAr = newLang === 'ar';
    circleBtn.style.setProperty('--btn-bg', isAr ? 'rgba(59,130,246,0.12)' : 'rgba(239,68,68,0.12)');
    circleBtn.style.setProperty('--btn-border', isAr ? 'rgba(59,130,246,0.3)' : 'rgba(239,68,68,0.3)');
    circleBtn.style.setProperty('--btn-color', isAr ? '#60a5fa' : '#f87171');
    circleBtn.style.setProperty('--btn-bg-hover', isAr ? 'rgba(59,130,246,0.25)' : 'rgba(239,68,68,0.25)');
    circleBtn.style.setProperty('--btn-border-hover', isAr ? 'rgba(59,130,246,0.5)' : 'rgba(239,68,68,0.5)');
  }

  // Update chatbot placeholder
  const chatInput = document.querySelector('.chatbot-input');
  if (chatInput) chatInput.placeholder = i18n[newLang].chatbot_placeholder;

  // Update title tag
  const titleEl = document.querySelector('title');
  if (titleEl) {
    titleEl.textContent = newLang === 'ar'
      ? 'عبد العزيز المحافيظ | السيرة الذاتية'
      : 'Abdulaziz Al-Mahafeedh | Resume';
  }

  // Update data-i18n-content elements (preserves child elements like icons)
  document.querySelectorAll('[data-i18n-content]').forEach(el => {
    const key = el.getAttribute('data-i18n-content');
    if (contentData[key] && contentData[key][newLang]) {
      const text = contentData[key][newLang];
      let hasTextNode = false;
      el.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
          node.textContent = text;
          hasTextNode = true;
        }
      });
      if (!hasTextNode) {
        el.textContent = text;
      }
    }
  });

  // Swap certificate slides in Edraak carousels
  document.querySelectorAll('#edraak .cert-carousel-inner').forEach(inner => {
    if (inner.children.length === 2) {
      const firstSlide = inner.children[0];
      const secondSlide = inner.children[1];
      const firstImg = firstSlide.querySelector('img');
      if (firstImg) {
        const src = firstImg.getAttribute('src') || firstImg.src || '';
        const shouldSwap =
          (newLang === 'en' && src.includes('_front')) ||
          (newLang === 'ar' && src.includes('_back'));
        if (shouldSwap) {
          inner.insertBefore(secondSlide, firstSlide);
          secondSlide.classList.add('active');
          firstSlide.classList.remove('active');
          const carousel = inner.closest('.cert-carousel');
          if (carousel) {
            const dots = carousel.querySelectorAll('.carousel-nav .dot');
            if (dots.length >= 2) {
              dots[0].classList.add('active');
              dots[1].classList.remove('active');
            }
          }
        }
      }
    }
  });

  // Update HUSA center description (has inner HTML)
  const husaDesc = document.getElementById('husa-desc');
  if (husaDesc && contentData.husa_desc) {
    husaDesc.innerHTML = contentData.husa_desc[newLang];
  }

  // Update typewriter text
  nameText = newLang === 'ar' ? 'عبد العزيز محمد المحافيظ' : 'Abdulaziz M. Al-Mahafeedh';
  titleText = newLang === 'ar' ? 'محاسب و ملم بالأنظمة المحاسبية' : 'Accountant & ERP Systems Specialist';

  // Restart typewriter if it's done or running
  if (typeof restartTypewriter === 'function') restartTypewriter();

  // Dispatch event for other scripts
  document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: newLang } }));
}

// Typewriter Effect Variables
let nameText = "عبد العزيز محمد المحافيظ";
let titleText = "محاسب و ملم بالأنظمة المحاسبية";
const nameElement = document.getElementById("typewriter-name");
const titleElement = document.getElementById("typewriter-title");

let nameIndex = 0;
let titleIndex = 0;
let typewriterTimer = null;

function typeWriterName() {
  if (nameIndex < nameText.length) {
    nameElement.innerHTML += nameText.charAt(nameIndex);
    nameIndex++;
    typewriterTimer = setTimeout(typeWriterName, 100);
  } else {
    nameElement.style.borderRight = "none";
    typewriterTimer = setTimeout(typeWriterTitle, 300);
  }
}

function typeWriterTitle() {
  if (titleIndex < titleText.length) {
    titleElement.innerHTML += titleText.charAt(titleIndex);
    titleIndex++;
    typewriterTimer = setTimeout(typeWriterTitle, 75);
  } else {
    titleElement.style.borderRight = "none";
  }
}

function restartTypewriter() {
  if (typewriterTimer) {
    clearTimeout(typewriterTimer);
    typewriterTimer = null;
  }
  nameIndex = 0;
  titleIndex = 0;
  nameElement.innerHTML = '';
  titleElement.innerHTML = '';
  nameElement.style.borderRight = '';
  titleElement.style.borderRight = '';
  typeWriterName();
}

// Fade-in Animation on Scroll
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      // If it's a progress bar, animate width
      if (entry.target.classList.contains('skill-box')) {
        const progressBar = entry.target.querySelector('.progress-bar');
        const targetWidth = progressBar.getAttribute('data-width');
        progressBar.style.width = targetWidth;
      }

      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Accordion Functionality
function initAccordions() {
  const accHeaders = document.querySelectorAll(".accordion-header");
  accHeaders.forEach(header => {
    header.addEventListener("click", function () {
      // Toggle active class
      this.classList.toggle("active");

      // Control panel opening/closing
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 40 + "px"; // +40 for padding
      }
    });
  });
}

// Service Worker and PWA Logic moved to consolidated function at the end of file

// Initialization on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  // ── Apply saved language on load ──
  if (currentLang !== 'ar') switchLanguage('en');

  // ── Courses Orbit Overlay Logic ──
  const coursesDockBtn = document.querySelector('.bubble-item[data-section="courses"] a');
  const orbitOverlay = document.getElementById('courses-orbit-overlay');

  if (coursesDockBtn && orbitOverlay) {
    // Open Overlay
    coursesDockBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      orbitOverlay.classList.add('active');
    });

    // Close Overlay Function
    const closeOrbitOverlay = () => {
      orbitOverlay.classList.remove('active');
    };

    // Close on clicking outside the orbit system
    orbitOverlay.addEventListener('click', (e) => {
      if (e.target === orbitOverlay) {
        closeOrbitOverlay();
      }
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && orbitOverlay.classList.contains('active')) {
        closeOrbitOverlay();
      }
    });

    // Handle clicking on a course square category item
    const courseSquares = orbitOverlay.querySelectorAll('.course-square');
    courseSquares.forEach(square => {
      square.addEventListener('click', () => {
        const targetId = square.getAttribute('data-target');
        const targetEl = document.getElementById(targetId);

        // Visual feedback: Highlight clicked square and dim others
        courseSquares.forEach(other => {
          if (other !== square) {
            other.style.opacity = '0.2';
            other.style.transform = 'scale(0.9)';
            other.style.filter = 'blur(4px)';
          } else {
            square.style.transform = 'scale(1.05) translateY(-10px)';
            square.style.borderColor = 'var(--square-clr)';
            square.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5)';
          }
        });

        // Transition to section
        setTimeout(() => {
          closeOrbitOverlay();

          // Reset styles after the overlay closes
          setTimeout(() => {
            courseSquares.forEach(s => {
              s.style.opacity = '';
              s.style.transform = '';
              s.style.filter = '';
              s.style.borderColor = '';
              s.style.boxShadow = '';
            });
          }, 600);

          // Smooth scroll to the requested section
          if (targetEl) {
            const yOffset = -20; // Slight offset for better visibility
            const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 400);
      });
    });
  }

  // Start Typewriter
  setTimeout(typeWriterName, 500);

  // Initialize Observers
  const fadeElements = document.querySelectorAll(".fade-in, .skill-box");
  fadeElements.forEach(el => fadeObserver.observe(el));

  // Initialize Accordions
  initAccordions();

  // Register PWA Service Worker
  // Register PWA Features
  initPWAFeatures();

  // Smooth Scroll for Navbar Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // â”€â”€ FreeCodeCamp Section: Progress Bars â”€â”€
  const fccProgressBars = document.querySelectorAll('.fcc-progress-bar[data-fcc-width]');
  const fccProgressObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-fcc-width');
        if (targetWidth) {
          setTimeout(() => { bar.style.width = targetWidth; }, 400);
        }
        observer.unobserve(bar);
      }
    });
  }, { root: null, rootMargin: '0px', threshold: 0.1 });
  fccProgressBars.forEach(bar => fccProgressObserver.observe(bar));

  // â”€â”€ FreeCodeCamp Section: Stats Counter Animation â”€â”€
  const fccCounters = document.querySelectorAll('.fcc-stat-num[data-fcc-count]');
  const fccCounterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-fcc-count'), 10);
        const duration = 1800;
        const startTime = performance.now();

        function updateFccCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(target * eased) + '+';
          if (progress < 1) {
            requestAnimationFrame(updateFccCounter);
          }
        }
        requestAnimationFrame(updateFccCounter);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });
  fccCounters.forEach(c => fccCounterObserver.observe(c));

  // â”€â”€ Edraak Section: Progress Bars â”€â”€
  const edrProgressBars = document.querySelectorAll('.edr-progress-bar[data-edr-width]');
  const edrProgressObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-edr-width');
        if (targetWidth) {
          setTimeout(() => { bar.style.width = targetWidth; }, 400);
        }
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.1 });
  edrProgressBars.forEach(bar => edrProgressObserver.observe(bar));

  // â”€â”€ Edraak Section: Stats Counter Animation â”€â”€
  const edrCounters = document.querySelectorAll('.edr-stat-num[data-edr-count]');
  const edrCounterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-edr-count'), 10);
        const duration = 1800;
        const startTime = performance.now();

        function updateEdrCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(target * eased) + '+';
          if (progress < 1) {
            requestAnimationFrame(updateEdrCounter);
          }
        }
        requestAnimationFrame(updateEdrCounter);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });
  edrCounters.forEach(c => edrCounterObserver.observe(c));

  // â”€â”€ Coursera Section: Progress Bars â”€â”€
  const courProgressBars = document.querySelectorAll('.cour-progress-bar[data-cour-width]');
  const courProgressObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-cour-width');
        if (targetWidth) {
          setTimeout(() => { bar.style.width = targetWidth; }, 400);
        }
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.1 });
  courProgressBars.forEach(bar => courProgressObserver.observe(bar));

  // â”€â”€ Coursera Section: Stats Counter Animation â”€â”€
  const courCounters = document.querySelectorAll('.cour-stat-num[data-cour-count]');
  const courCounterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-cour-count'), 10);
        const duration = 1800;
        const startTime = performance.now();

        function updateCourCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.round(target * eased);
          el.textContent = (target > 10 ? '+' : '') + currentVal;
          if (progress < 1) {
            requestAnimationFrame(updateCourCounter);
          }
        }
        requestAnimationFrame(updateCourCounter);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });
  courCounters.forEach(c => courCounterObserver.observe(c));

  // â”€â”€ Certificates Carousel: Toggle Logic â”€â”€
  const carousels = document.querySelectorAll('.cert-carousel');
  carousels.forEach(carousel => {
    carousel.addEventListener('click', (e) => {
      // If clicking the link (Luminous), don't trigger slide switch
      if (e.target.closest('.certificate-link')) return;

      const slides = carousel.querySelectorAll('.cert-slide');
      const dots = carousel.querySelectorAll('.dot');
      let activeIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));

      // Toggle index
      slides[activeIndex].classList.remove('active');
      dots[activeIndex].classList.remove('active');

      activeIndex = (activeIndex + 1) % slides.length;

      slides[activeIndex].classList.add('active');
      dots[activeIndex].classList.add('active');
    });
  });

  // â”€â”€ Certificates Gallery: Luminous Lightbox Initialization â”€â”€
  const certificateLinks = document.querySelectorAll('.certificate-link');
  if (certificateLinks.length > 0) {
    certificateLinks.forEach(link => {
      new Luminous(link, {
        caption: (trigger) => {
          return trigger.getAttribute('data-title');
        }
      });
    });
  }


  // ── Floating Dock: Active Section Tracking ──
  const dockItems = document.querySelectorAll('#bubble-dock-container .bubble-item');
  const sections = document.querySelectorAll('section, header');

  const dockObserverOptions = {
    root: null,
    rootMargin: '-40% 0px -40% 0px', // Detect section when it's in the middle of the viewport
    threshold: 0
  };

  const dockObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');

        // Remove active class from all
        dockItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('data-section') === id) {
            item.classList.add('active');
          }
        });
      }
    });
  }, dockObserverOptions);

  sections.forEach(section => {
    if (section.id) dockObserver.observe(section);
  });
});

/* ══════════════════════════════════════════════════════════════════════════════
   Dynamic Certificate Modal Logic
   ══════════════════════════════════════════════════════════════════════════════ */

const certificateIssuers = {
  hadhramout: {
    name: "جامعة حضرموت",
    nameEn: "Hadhramout University",
    titleAr: "جامعة حضرموت",
    title: "Hadhramout University",
    badge: "صرح أكاديمي رائد",
    badgeEn: "Leading Academic Institution",
    description: "تعد جامعة حضرموت صرحاً أكاديمياً رائعاً في الجمهورية اليمنية، تأسست عام 1993 في مدينة المكلا. تعتبر الجامعة من المؤسسات التعليمية الرائدة التي تلتزم بتقديم برامج بكالوريوس ودراسات عليا معتمدة في تخصصات الهندسة، الحاسوب، والطب. تركز الجامعة على ربط المناهج العلمية باحتياجات سوق العمل والتنمية المستدامة، وهي الجهة التي صقلت خلفيتي العلمية والتقنية.",
    descriptionEn: "Hadhramout University is a distinguished academic institution in the Republic of Yemen, established in 1993 in Mukalla. It is a leading educational institution committed to providing accredited bachelor's and postgraduate programs in engineering, computer science, and medicine. The university focuses on bridging academic curricula with labor market needs and sustainable development, and is the institution that refined my scientific and technical background.",
    logo: "assets/organization_logos/hadhramout_university_logo_result.webp",
    fullLogo: true,
    officialLink: "https://hu.edu.ye",
    btnText: "زيارة الموقع الرسمي للجامعة",
    btnTextEn: "Visit University Website",
    mainColor: "#007bff",
    address: "جامعة حضرموت - Hadhramout University",
    addressEn: "Hadhramout University - Mukalla, Yemen"
  },
  mukalla_model: {
    name: "ثانوية المكلا النموذجية",
    nameEn: "Mukalla Model Secondary School",
    titleAr: "ثانوية المكلا النموذجية",
    title: "Mukalla Model Secondary School",
    badge: "نخبة الطلاب المتفوقين",
    badgeEn: "Elite Outstanding Students",
    description: "ثانوية المكلا النموذجية هي صرح تعليمي رائد متخصص في رعاية وتأهيل الطلاب المتفوقين في حضرموت. تأسست بمبادرة نوعية من مجموعة من رجال الأعمال الداعمين للعلم، وفي مقدمتهم الشيخ المهندس عبدالله أحمد بقشان عبر مؤسسة حضرموت للتنمية البشرية. تهدف المدرسة إلى صناعة جيل قيادي متسلح بالعلم والابتكار، وتعتبر من أكثر المدارس تنافسية على مستوى الوطن.",
    descriptionEn: "Mukalla Model Secondary School is a leading educational institution specialized in nurturing outstanding students in Hadhramout. It was established through a quality initiative by a group of education-supporting businessmen, led by Sheikh Engineer Abdullah Ahmed Baqshan through the Hadhramout Foundation for Human Development. The school aims to create a leadership generation armed with knowledge and innovation, and is considered one of the most competitive schools nationwide.",
    logo: "assets/organization_logos/mukalla_model_boys_secondary_logo.png.jpg",
    fullLogo: true,
    officialLink: "https://hadhramout-foundation.org",
    btnText: "زيارة الموقع الرسمي للمؤسسة الراعية",
    btnTextEn: "Visit Sponsor Foundation Website",
    mainColor: "#A67B5B",
    address: "ثانوية المكلا النموذجية - Mukalla Model Secondary School",
    addressEn: "Mukalla Model Secondary School - Mukalla, Yemen",
    social: [
      { icon: "fab fa-facebook", link: "https://www.facebook.com/mmss.mukalla" }
    ]
  },
  google: {
    name: "Google",
    title: "Google Career Certificates",
    badge: "احترافية عالمية",
    description: "برامج تدريبية احترافية مصممة من قبل خبراء جوجل لتزويد المتعلمين بالمهارات المطلوبة في مجالات التكنولوجيا الصاعدة.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    officialLink: "https://grow.google/certificates/",
    btnText: "عرض تفاصيل شهادات جوجل",
    mainColor: "#4285F4", // Google Blue
    address: "Google LLC - Mountain View, CA"
  },
  microsoft: {
    name: "Microsoft",
    title: "Microsoft Certified Professional",
    badge: "خبرات تقنية معتمدة",
    description: "شهادات مايكروسوفت تثبت الكفاءة في استخدام وتطبيق تقنيات الحوسبة السحابية، تطوير البرمجيات، وإدارة البيانات.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    officialLink: "https://learn.microsoft.com/en-us/credentials/",
    btnText: "استكشاف مسارات مايكروسوفت",
    mainColor: "#00a4ef", // Microsoft Blue
    address: "Microsoft Corporation - Redmond, WA"
  }
};

const modalOverlay = document.getElementById('cert-modal');
const modalSlider = document.getElementById('modal-slider');

let currentModalNoCert = false;

function openCertModal(issuerKey, certSrc, certTitle, startAtIssuer = false) {
  currentModalNoCert = startAtIssuer || (!certSrc || certSrc === '');
  const issuer = certificateIssuers[issuerKey];
  if (!issuer) return;
  const lang = window.currentLang || 'ar';
  const isEn = lang === 'en';

  // Set Theme Color
  document.documentElement.style.setProperty('--issuer-main-color', issuer.mainColor);

  // Inject Content
  document.getElementById('modal-issuer-name').textContent = isEn ? (issuer.nameEn || issuer.name) : issuer.name;
  document.getElementById('modal-badge').textContent = isEn ? (issuer.badgeEn || issuer.badge) : issuer.badge;
  document.getElementById('modal-cert-img').src = certSrc;

  // Update internal button text
  const internalAboutBtn = document.getElementById('btn-show-issuer');
  if (internalAboutBtn) {
    const btnName = isEn ? (issuer.nameEn || issuer.name) : issuer.name;
    internalAboutBtn.innerHTML = `<i class="fas fa-scroll"></i> ${btnName}`;
  }

  const logoImg = document.getElementById('modal-issuer-logo');
  const logoWrapper = logoImg.parentElement;
  logoImg.src = issuer.logo;

  if (issuer.fullLogo) {
    logoWrapper.classList.add('full-width-logo');
  } else {
    logoWrapper.classList.remove('full-width-logo');
  }

  document.getElementById('modal-issuer-title').textContent = isEn ? issuer.title : (issuer.titleAr || issuer.name);
  document.getElementById('modal-issuer-desc').textContent = isEn ? (issuer.descriptionEn || issuer.description) : issuer.description;
  document.getElementById('modal-issuer-address').textContent = isEn ? (issuer.addressEn || issuer.address) : issuer.address;

  const officialBtn = document.getElementById('modal-official-link');
  officialBtn.href = issuer.officialLink;
  officialBtn.onclick = (e) => {
    e.preventDefault();
    window.open(issuer.officialLink, '_blank');
  };
  officialBtn.querySelector('span').textContent = isEn ? (issuer.btnTextEn || issuer.btnText) : issuer.btnText;

  // Handle Social Links
  const socialContainer = document.getElementById('modal-social-links');
  socialContainer.innerHTML = '';
  if (issuer.social) {
    issuer.social.forEach(s => {
      const link = document.createElement('a');
      link.href = s.link;
      link.target = "_blank";
      link.innerHTML = `<i class="${s.icon}"></i>`;
      socialContainer.appendChild(link);
    });
  }

  // Handle Visibility Logic (Internal Button)
  if (issuerKey === 'mukalla_model' || issuerKey === 'hadhramout') {
    modalOverlay.classList.add('hide-internal-about');
  } else {
    modalOverlay.classList.remove('hide-internal-about');
  }

  // Set Slide Position
  if (startAtIssuer) {
    // Small delay to ensure the modal is 'active' before sliding
    setTimeout(() => {
      modalSlider.classList.add('show-issuer');
    }, 10);
  } else {
    modalSlider.classList.remove('show-issuer');
  }

  // Show Modal
  const backBtn = document.getElementById('btn-back-to-cert');
  if (backBtn) {
    if (currentModalNoCert) {
      backBtn.innerHTML = '<i class="fas fa-times"></i> ' + (isEn ? 'Close' : 'إغلاق النافذة');
    } else {
      backBtn.innerHTML = '<i class="fas fa-arrow-right"></i> ' + (isEn ? 'Back to Certificate' : 'العودة للشهادة');
    }
  }

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCertModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Event Listeners for Slider Toggle
const btnShowIssuer = document.getElementById('btn-show-issuer');
const btnBackToCert = document.getElementById('btn-back-to-cert');
if (btnShowIssuer) {
  btnShowIssuer.addEventListener('click', () => {
    modalSlider.classList.add('show-issuer');
  });
}
if (btnBackToCert) {
  btnBackToCert.addEventListener('click', () => {
    if (currentModalNoCert) {
      closeCertModal();
    } else {
      modalSlider.classList.remove('show-issuer');
    }
  });
}

// Close modal on overlay click
if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeCertModal();
  });
}

// Update Certificate Link Click Handler
document.addEventListener('click', (e) => {
  const certLink = e.target.closest('.certificate-link');
  if (certLink && certLink.hasAttribute('data-issuer')) {
    e.preventDefault();
    const issuerKey = certLink.getAttribute('data-issuer');
    const certSrc = certLink.getAttribute('href');
    const certTitle = certLink.getAttribute('data-title');
    openCertModal(issuerKey, certSrc, certTitle);
    return;
  }

  // External 'About Issuer' Button Handler
  const externalBtn = e.target.closest('.btn-open-issuer');
  if (externalBtn) {
    e.preventDefault();
    const issuerKey = externalBtn.getAttribute('data-issuer');
    const certSrc = externalBtn.getAttribute('data-src');
    const certTitle = externalBtn.getAttribute('data-title');
    openCertModal(issuerKey, certSrc, certTitle, true); // true = start at issuer slide
  }
});

// Function to Toggle Satar UX/UI Path
function toggleSatarPath() {
  const path = document.getElementById('satar-uxui-path');
  if (!path) return;
  
  if (path.style.display === 'none' || path.style.display === '') {
    path.style.display = 'block';
    // Use a tiny timeout to ensure the browser registers the display change before animating
    setTimeout(() => {
      path.style.opacity = '1';
      path.style.transform = 'translateY(0)';
    }, 50);
    
    // Optional: Scroll into view
    setTimeout(() => {
      path.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 300);
  } else {
    path.style.opacity = '0';
    path.style.transform = 'translateY(20px)';
    // Wait for transition (0.5s) to complete before setting display to none
    setTimeout(() => {
      path.style.display = 'none';
    }, 500);
  }
}

// Function to Toggle Satar Training Courses
function toggleSatarCourses() {
  const path = document.getElementById('satar-courses-path');
  if (!path) return;
  
  if (path.style.display === 'none' || path.style.display === '') {
    path.style.display = 'block';
    setTimeout(() => {
      path.style.opacity = '1';
      path.style.transform = 'translateY(0)';
    }, 50);
    
    setTimeout(() => {
      path.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 300);
  } else {
    path.style.opacity = '0';
    path.style.transform = 'translateY(20px)';
    setTimeout(() => {
      path.style.display = 'none';
    }, 500);
  }
}


/* ══════════════════════════════════════════════════════════════════════════════
   PWA Features & Service Worker Logic
   ══════════════════════════════════════════════════════════════════════════════ */

let deferredPrompt;

function initPWAFeatures() {
  // 1. Service Worker Registration
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js')
        .then(reg => {
          console.log('Service Worker registered');

          // Check for updates
          reg.onupdatefound = () => {
            const installingWorker = reg.installing;
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New update available!
                showUpdateToast();
              }
            };
          };
        })
        .catch(err => console.log('SW registration failed:', err));
    });
  }

  // 2. Custom Install Prompt Logic
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    
    // Show our custom prompt if it's the first visit (or based on your logic)
    // For now, we show it after a short delay
    setTimeout(() => {
      const installPrompt = document.getElementById('pwa-install-prompt');
      if (installPrompt) installPrompt.classList.add('show');
    }, 5000); // Show after 5 seconds of browsing
  });

  // Handle Update Button Click
  const btnUpdateFloat = document.getElementById('pwa-update-floating-btn');
  if (btnUpdateFloat) {
    // Check if dismissed in this session
    if (sessionStorage.getItem('pwa_update_dismissed')) {
      btnUpdateFloat.style.display = 'none';
    }

    btnUpdateFloat.addEventListener('click', () => {
      // 1. Mark as dismissed for this session
      sessionStorage.setItem('pwa_update_dismissed', 'true');
      
      // 2. Force Cache Clearing (The most important part for GitHub Pages)
      if ('caches' in window) {
        caches.keys().then((names) => {
          Promise.all(names.map(name => caches.delete(name)))
            .then(() => {
              console.log('All caches cleared for update');
              
              // 3. Unregister Service Workers (Optional but safer for Hard Refresh)
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then((registrations) => {
                  for (let registration of registrations) {
                    registration.unregister();
                  }
                });
              }

              // 4. Visual feedback & Reload
              btnUpdateFloat.style.opacity = '0';
              btnUpdateFloat.style.transform = 'scale(0.5)';
              const icon = btnUpdateFloat.querySelector('i');
              if (icon) icon.style.transform = 'rotate(360deg)';
              
              setTimeout(() => {
                window.location.reload(true);
              }, 300);
            });
        });
      } else {
        window.location.reload(true);
      }
    });
  }

  // Handle Install Button Click
  const btnInstall = document.getElementById('btn-pwa-install');
  if (btnInstall) {
    btnInstall.addEventListener('click', () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the PWA install');
          }
          deferredPrompt = null;
          hideInstallPrompt();
        });
      }
    });
  }

  // Handle Close Button Click
  const btnClose = document.getElementById('btn-pwa-close');
  if (btnClose) {
    btnClose.addEventListener('click', hideInstallPrompt);
  }

  // 3. Welcome & Update Modal Logic (Shows on every load if not updated yet in this session)
  if (!sessionStorage.getItem('pwa_welcome_updated')) {
    setTimeout(() => {
      const welcomePrompt = document.getElementById('welcome-update-prompt');
      if (welcomePrompt) {
        welcomePrompt.classList.add('show');
      }
    }, 1000); // Show after 1 second
  }

  const btnWelcomeUpdate = document.getElementById('btn-welcome-update');
  if (btnWelcomeUpdate) {
    btnWelcomeUpdate.addEventListener('click', () => {
      // Set updated flag for the session
      sessionStorage.setItem('pwa_welcome_updated', 'true');
      
      // Clear Cache & Reload (Same update logic)
      if ('caches' in window) {
        caches.keys().then((names) => {
          Promise.all(names.map(name => caches.delete(name)))
            .then(() => {
              console.log('All caches cleared for update via welcome modal');
              
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then((registrations) => {
                  for (let registration of registrations) {
                    registration.unregister();
                  }
                });
              }

              // Visual feedback
              btnWelcomeUpdate.style.opacity = '0.5';
              btnWelcomeUpdate.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التحديث...';
              
              setTimeout(() => {
                window.location.reload(true);
              }, 500);
            });
        });
      } else {
        window.location.reload(true);
      }
    });
  }
}

function showUpdateToast() {
  const updateBtn = document.getElementById('pwa-update-floating-btn');
  if (updateBtn) {
    updateBtn.classList.add('pulse-alert');
    updateBtn.title = "تحديث جديد متوفر! اضغط للتحديث";
  }
}

function hideInstallPrompt() {
  const installPrompt = document.getElementById('pwa-install-prompt');
  if (installPrompt) installPrompt.classList.remove('show');
}
