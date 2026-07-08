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
    about_address: 'العنوان', about_specialty: 'التخصص',
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
    about_address: 'Address', about_specialty: 'Specialty',
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
  }
};

let currentLang = localStorage.getItem('lang') || 'ar';

// Expose i18n globally for other scripts
window.i18n = i18n;
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
    title: "Hadhramout University",
    badge: "صرح أكاديمي رائد",
    description: "تعد جامعة حضرموت صرحاً أكاديمياً رائعاً في الجمهورية اليمنية، تأسست عام 1993 في مدينة المكلا. تعتبر الجامعة من المؤسسات التعليمية الرائدة التي تلتزم بتقديم برامج بكالوريوس ودراسات عليا معتمدة في تخصصات الهندسة، الحاسوب، والطب. تركز الجامعة على ربط المناهج العلمية باحتياجات سوق العمل والتنمية المستدامة، وهي الجهة التي صقلت خلفيتي العلمية والتقنية.",
    logo: "assets/organization_logos/hadhramout_university_logo_result.webp",
    fullLogo: true,
    officialLink: "https://hu.edu.ye",
    btnText: "زيارة الموقع الرسمي للجامعة",
    mainColor: "#007bff", // Standard Blue
    address: "جامعة حضرموت - Hadhramout University"
  },
  mukalla_model: {
    name: "ثانوية المكلا النموذجية",
    title: "Mukalla Model Secondary School",
    badge: "نخبة الطلاب المتفوقين",
    description: "ثانوية المكلا النموذجية هي صرح تعليمي رائد متخصص في رعاية وتأهيل الطلاب المتفوقين في حضرموت. تأسست بمبادرة نوعية من مجموعة من رجال الأعمال الداعمين للعلم، وفي مقدمتهم الشيخ المهندس عبدالله أحمد بقشان عبر مؤسسة حضرموت للتنمية البشرية. تهدف المدرسة إلى صناعة جيل قيادي متسلح بالعلم والابتكار، وتعتبر من أكثر المدارس تنافسية على مستوى الوطن.",
    logo: "assets/organization_logos/mukalla_model_boys_secondary_logo.png.jpg",
    fullLogo: true,
    officialLink: "https://hadhramout-foundation.org",
    btnText: "زيارة الموقع الرسمي للمؤسسة الراعية",
    mainColor: "#A67B5B", // Light Brown / Cinnamon
    address: "ثانوية المكلا النموذجية - Mukalla Model Secondary School",
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

  // Set Theme Color
  document.documentElement.style.setProperty('--issuer-main-color', issuer.mainColor);

  // Inject Content
  document.getElementById('modal-issuer-name').textContent = issuer.name;
  document.getElementById('modal-badge').textContent = issuer.badge;
  document.getElementById('modal-cert-img').src = certSrc;

  // Update internal button text
  const internalAboutBtn = document.getElementById('btn-show-issuer');
  if (internalAboutBtn) {
    internalAboutBtn.innerHTML = `<i class="fas fa-scroll"></i> ${issuer.name}`;
  }

  const logoImg = document.getElementById('modal-issuer-logo');
  const logoWrapper = logoImg.parentElement;
  logoImg.src = issuer.logo;

  if (issuer.fullLogo) {
    logoWrapper.classList.add('full-width-logo');
  } else {
    logoWrapper.classList.remove('full-width-logo');
  }

  document.getElementById('modal-issuer-title').textContent = issuer.title;
  document.getElementById('modal-issuer-desc').textContent = issuer.description;
  document.getElementById('modal-issuer-address').textContent = issuer.address;

  const officialBtn = document.getElementById('modal-official-link');
  officialBtn.href = issuer.officialLink;
  officialBtn.onclick = (e) => {
    e.preventDefault();
    window.open(issuer.officialLink, '_blank');
  };
  officialBtn.querySelector('span').textContent = issuer.btnText;

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
  if (currentModalNoCert) {
    backBtn.innerHTML = '<i class="fas fa-times"></i> إغلاق النافذة';
  } else {
    backBtn.innerHTML = '<i class="fas fa-arrow-right"></i> العودة للشهادة';
  }

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scroll
}

function closeCertModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = ''; // Restore scroll
}

// Event Listeners for Slider Toggle
document.getElementById('btn-show-issuer').addEventListener('click', () => {
  modalSlider.classList.add('show-issuer');
});

document.getElementById('btn-back-to-cert').addEventListener('click', () => {
  if (currentModalNoCert) {
    closeCertModal();
  } else {
    modalSlider.classList.remove('show-issuer');
  }
});

// Close modal on overlay click
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeCertModal();
});

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
