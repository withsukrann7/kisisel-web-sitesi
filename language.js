// Bilinçli ve bağlama uygun Türkçe/İngilizce site metinleri.
const SITE_EN_TEXT = {
  'Menüyü aç': 'Open menu',
  'Ana menü': 'Main navigation',
  'Hakkımda': 'About', 'Deneyim': 'Experience', 'Projeler': 'Projects', 'Oyunlar': 'Games',
  'Yetkinlikler': 'Skills', 'İletişim': 'Contact',
  'İSTANBUL, TÜRKİYE': 'ISTANBUL, TÜRKİYE', 'YAZILIM & YAPAY ZEKÂ': 'SOFTWARE & ARTIFICIAL INTELLIGENCE',
  'Merhaba, ben': 'Hello, I’m',
  'Fikirleri çalışan ürünlere dönüştüren bir': 'I’m a',
  'bilgisayar mühendisi adayıyım.': 'computer engineering student who turns ideas into working products.',
  'Yapay zekâ, görüntü işleme ve web teknolojileriyle anlamlı çözümler üretiyorum.': 'I build meaningful solutions with AI, computer vision, and web technologies.',
  'Projelerimi keşfet ': 'Explore my projects ', 'Birlikte çalışalım ': 'Let’s work together ',
  ' yıl öğrenme ve üretme': ' years of learning and building', 'Merakla, kodla, birlikte.': 'Curious by nature. Building through code.',
  'Kodluyor, öğreniyor, üretiyor': 'Coding, learning, creating', 'geleceği keşfet': 'exploring what’s next',
  'AŞAĞI KAYDIR': 'SCROLL TO EXPLORE',
  '01 / HAKKIMDA': '01 / ABOUT', 'Teknolojiye merak,': 'Curiosity about technology,', 'üretmeye cesaret.': 'the courage to build.',
  'Bilgisayar mühendisliği eğitimim boyunca yazılım geliştirme, yapay zekâ ve bilgisayarlı görü alanlarında projeler üretiyorum. Bir fikri araştırıp çalışan bir ürüne dönüştürmek, benim için en heyecan verici öğrenme biçimi.': 'Throughout my computer engineering studies, I have built projects in software development, artificial intelligence, and computer vision. Exploring an idea and turning it into a working product is one of the most rewarding ways I learn.',
  'Takım içinde paylaşarak öğrenmeye, yeni teknolojileri denemeye ve gerçek problemlere sade çözümler geliştirmeye inanıyorum.': 'I believe in learning through collaboration, exploring new technologies, and creating straightforward solutions to real-world problems.',
  'Problem çözme': 'Problem-solving', 'Takım çalışması': 'Teamwork', 'Sürekli öğrenme': 'Continuous learning',
  'yıl üniversite deneyimi': 'years at university', 'öğrenme ve üretme projesi': 'projects built while learning', 'merak edilen yeni şey': 'new things to explore',
  '02 / DENEYİM': '02 / EXPERIENCE', 'Öğrenirken': 'Learning while', 'katkı sağlıyorum.': 'making a contribution.', 'STAJ': 'INTERN',
  'Kurumsal SOC operasyonları için şüpheli e-posta ve tehdit kayıtlarını analiz edip sınıflandıran yapay zekâ destekli bir triyaj ajanının geliştirilmesine katkı sağladım.': 'Contributed to an AI-assisted triage agent that analyzes and classifies suspicious emails and threat records for enterprise SOC operations.',
  'Python ile veri bilimi ve veri analizi çalışmalarında görev aldım. NumPy ve Pandas kullanarak verileri düzenleme, temizleme, dönüştürme ve analiz için hazırlama süreçlerine katkı sundum; veri odaklı problemlere yönelik analizler gerçekleştirdim.': 'Worked on data science and analytics tasks in Python. Used NumPy and Pandas to organize, clean, transform, and prepare data for analysis, and explored data-driven problems through analysis.',
  'Social Media Team Member': 'Social Media Team Member',
  'Kadın kongreleri ve sosyal farkındalık etkinliklerinde gönüllü oldum; sosyal medya içerikleri ve etkinlik organizasyonuna destek verdim.': 'Volunteered at women’s conferences and social awareness events, supporting social media content and event coordination.',
  'Software Team Lead': 'Software Team Lead',
  'Android Studio ile 70’ten fazla kişiye mobil uygulama geliştirme eğitimleri verdim. Yazılım ekibine liderlik ederek projelerin planlanmasına ve ilerletilmesine katkı sağladım; kod incelemeleri ve mentorlukla ekip arkadaşlarımın gelişimini destekledim.': 'Delivered Android Studio training in mobile app development to more than 70 participants. Led the software team, planned and advanced team projects, and supported teammates through code reviews and mentorship.',
  'Software Team Member': 'Software Team Member',
  'Teknofest İHA projesinde Python ve OpenCV kullanarak görüntü işleme ve hedef tespit çalışmalarına katkı sağladım.': 'Contributed to image processing and target detection for a Teknofest UAV project using Python and OpenCV.',
  '03 / SEÇİLİ İŞLER': '03 / SELECTED WORK', 'Fikirden ': 'From idea to ', 'ürüne.': 'product.',
  'Full Stack Web Uygulaması': 'Full-stack web application',
  "React ve TypeScript ile geliştirilen, REST API üzerinden Node.js backend'ine bağlanan canlı web uygulaması. Özel alan adında yayında.": 'A live web application built with React and TypeScript, connected to a Node.js backend through a REST API. Deployed on a custom domain.',
  'Full Stack Web Projesi': 'Full-stack web project',
  'Next.js ve TypeScript ile geliştirilen; servis ve müşteri bilgilerini gösteren, mobil uyumlu web deneyimi.': 'A responsive web experience built with Next.js and TypeScript to present service and customer information.',
  '03 / MEZUNİYET PROJESİ': '03 / GRADUATION PROJECT', 'AI Destekli Yüz Tanıma': 'AI-Powered Face Recognition',
  'Devam ediyor · Güvenlik sistemi': 'In progress · Security system',
  'PyQt5 masaüstü arayüzü, kamera ve yapay zekâ modülleriyle gerçek zamanlı kimlik doğrulama sistemi geliştiriyorum.': 'Developing a real-time identity verification system with a PyQt5 desktop interface, camera, and AI modules.',
  '04 / TAKIM PROJESİ': '04 / TEAM PROJECT', 'İSTANBUL\'UN HİKÂYESİ': 'THE STORY OF ISTANBUL',
  'Tarihî ve kültürel web platformu': 'Historical and cultural web platform',
  'İstanbul\'un tarihî ve kültürel noktalarını tanıtan ekip projesinde Node.js ve PostgreSQL ile backend geliştirmesine katkıda bulundum.': 'Contributed to backend development with Node.js and PostgreSQL for a team project showcasing Istanbul’s historical and cultural landmarks.',
  '04 / KISA BİR MOLA': '04 / A QUICK BREAK', 'Kaktüslerden kaç, rekorunu kır.': 'Dodge the cacti. Beat your high score.', 'Başlamak için zıpla!': 'Jump to get started!',
  'SKOR': 'SCORE', 'EN İYİ': 'BEST', 'Hazır mısın?': 'Ready?',
  'Başlamak için boşluk tuşuna bas veya düğmeye dokun.': 'Press Space or tap the button to start.',
  'Zıpla': 'Jump', 'Oyunu başlat': 'Start game', 'Mobilde ekrana dokun': 'Tap the screen on mobile',
  '05 / EĞİTİM': '05 / EDUCATION', 'Temel sağlam,': 'A strong foundation,', 'ufuk açık.': 'with room to grow.',
  'LİSANS · BİLGİSAYAR MÜHENDİSLİĞİ': 'BSc · COMPUTER ENGINEERING', 'Zonguldak': 'Zonguldak',
  '2023 — Devam ediyor': '2023 — In progress', 'Önceki eğitim: İnönü Üniversitesi': 'Previous studies: İnönü University',
  '06 / ARAÇ ÇANTAM': '06 / TOOLKIT', 'Öğrendiğim ve': 'What I learn and', 'kullandığım.': 'put into practice.',
  'Programlama & Framework': 'Programming & Frameworks', 'Yapay Zekâ & Görüntü': 'AI & Computer Vision', 'Veri & Araçlar': 'Data & Tools',
  'Log Analizi': 'Log analysis', 'Otomasyon': 'Automation', 'Görüntü İşleme': 'Image processing',
  'YENİ FIRSATLARA AÇIĞIM': 'OPEN TO NEW OPPORTUNITIES', 'Bir fikrin mi var?': 'Have an idea?',
  'Birlikte hayata geçirelim.': 'Let’s bring it to life.',
  'Bana bir mesaj bırak; bilgilerin Gmail’de yeni bir taslak olarak açılır.': 'Leave me a message and a draft will open in Gmail for you to review and send.',
  'DOĞRUDAN E-POSTA': 'EMAIL ME DIRECTLY', 'Adın': 'Your name', 'E-posta adresin': 'Your email address', 'Mesajın': 'Your message',
  'Adın Soyadın': 'Full name', 'ornek@email.com': 'you@example.com',
  'Kısaca nasıl yardımcı olabileceğimi yaz...': 'Tell me briefly how I can help...', 'Gmail taslağı aç ': 'Open Gmail draft ',
  'Gmail’de taslağı kontrol edip Gönder’e bas.': 'Review the draft in Gmail, then press Send.',
  'Merakla tasarlandı, özenle kodlandı.': 'Designed with curiosity, built with care.',
  'Şükran Yılmaz ana sayfa': 'Şükran Yılmaz — home',
  'Şükran’ın site asistanı': 'Ask Şükran — site assistant', 'Şükran\'a sor': 'Ask Şükran', 'Site asistanı': 'Portfolio assistant',
  'Şükran hakkındaki site bilgileriyle yanıtlar': 'Answers using information from this portfolio',
  'Örnek sorular': 'Suggested questions', 'Asistana soru yaz': 'Ask the assistant a question', 'Bir soru yaz...': 'Type a question...',
  'Soruyu gönder': 'Send question', 'Yanıtlar bu sitede paylaşılan bilgilerle sınırlıdır.': 'Answers are limited to information shared on this site.',
  'Teknolojiler': 'Technologies',
};

const ATTR_TRANSLATIONS = [
  ['.menu-toggle', 'aria-label', 'Menüyü aç', 'Open menu'],
  ['.nav-links', 'aria-label', 'Ana menü', 'Main navigation'],
  ['.wordmark[href="#home"]', 'aria-label', 'Şükran Yılmaz ana sayfa', 'Şükran Yılmaz — home'],
  ['.photo-crop img', 'alt', 'Şükran Yılmaz\'ın portre fotoğrafı', 'Portrait of Şükran Yılmaz'],
  ['#dino-canvas', 'aria-label', 'Dino T-Rex oyunu. Zıplamak için boşluk, yukarı ok veya ekrana dokunun.', 'Dino T-Rex game. Press Space, the Up Arrow, or tap the screen to jump.'],
  ['.language-switch', 'aria-label', 'Site dili', 'Site language'],
  ['.site-assistant', 'aria-label', 'Şükran’ın site asistanı', 'Ask Şükran — portfolio assistant'],
  ['.assistant-close', 'aria-label', 'Sohbeti kapat', 'Close chat'],
  ['#assistant-form label', 'textContent', 'Asistana soru yaz', 'Ask the assistant a question'],
  ['#assistant-input', 'placeholder', 'Bir soru yaz...', 'Type a question...'],
  ['#assistant-form button', 'aria-label', 'Soruyu gönder', 'Send question'],
  ['.assistant-prompts', 'aria-label', 'Örnek sorular', 'Suggested questions'],
  ['#contact-name', 'placeholder', 'Adın Soyadın', 'Full name'],
  ['#contact-sender', 'placeholder', 'ornek@email.com', 'you@example.com'],
  ['#contact-message', 'placeholder', 'Kısaca nasıl yardımcı olabileceğimi yaz...', 'Tell me briefly how I can help...'],
];

const originalText = new WeakMap();
const originalAttributes = new WeakMap();
const languageButtons = document.querySelectorAll('[data-language]');
let currentLanguage = 'tr';

function allTextNodes() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return node.parentElement?.closest('script,style,noscript') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    },
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}

function applyLanguage(language) {
  currentLanguage = language === 'en' ? 'en' : 'tr';
  document.documentElement.lang = currentLanguage;

  for (const node of allTextNodes()) {
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const source = originalText.get(node);
    const trimmed = source.trim();
    if (currentLanguage === 'en' && SITE_EN_TEXT[trimmed]) {
      const start = source.indexOf(trimmed);
      node.nodeValue = `${source.slice(0, start)}${SITE_EN_TEXT[trimmed]}${source.slice(start + trimmed.length)}`;
    } else {
      node.nodeValue = source;
    }
  }

  for (const [selector, attribute, tr, en] of ATTR_TRANSLATIONS) {
    const element = document.querySelector(selector);
    if (!element) continue;
    if (attribute === 'textContent') {
      // The screen-reader-only label contains only text, so this replacement is safe.
      element.textContent = currentLanguage === 'en' ? en : tr;
    } else {
      if (!originalAttributes.has(element)) originalAttributes.set(element, new Map());
      const attributes = originalAttributes.get(element);
      if (!attributes.has(attribute)) attributes.set(attribute, element.getAttribute(attribute));
      element.setAttribute(attribute, currentLanguage === 'en' ? en : tr);
    }
  }

  document.title = currentLanguage === 'en' ? 'Şükran Yılmaz — Software & AI' : 'Şükran Yılmaz — Yazılım & Yapay Zekâ';
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = currentLanguage === 'en'
    ? 'Şükran Yılmaz — computer engineering student, software developer, and AI enthusiast.'
    : 'Şükran Yılmaz — bilgisayar mühendisi adayı, yazılım geliştirici ve yapay zekâ meraklısı.';

  document.querySelectorAll('.assistant-prompts [data-question]').forEach((button) => {
    const englishQuestion = button.dataset.questionEn;
    if (englishQuestion) button.dataset.question = currentLanguage === 'en' ? englishQuestion : button.dataset.questionTr;
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.language === currentLanguage;
    button.setAttribute('aria-pressed', String(active));
  });

  try { localStorage.setItem('sukran-site-language', currentLanguage); } catch (_) { /* Language still works for this visit. */ }
  window.dispatchEvent(new CustomEvent('site-language-change', { detail: { language: currentLanguage } }));
}

languageButtons.forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.language)));

let savedLanguage = 'tr';
try { savedLanguage = localStorage.getItem('sukran-site-language') || 'tr'; } catch (_) { /* Default to Turkish. */ }
applyLanguage(savedLanguage);
