// Site içeriğine dayalı, API gerektirmeyen portfolyo asistanı.
// Yeni bilgi eklemek için KNOWLEDGE dizisindeki entries listesini güncelleyin.
const assistantRoot = document.querySelector('.site-assistant');
const assistantLauncher = document.querySelector('#assistant-launcher');
const assistantClose = document.querySelector('#assistant-close');
const assistantPanel = document.querySelector('#assistant-panel');
const assistantMessages = document.querySelector('#assistant-messages');
const assistantForm = document.querySelector('#assistant-form');
const assistantInput = document.querySelector('#assistant-input');
const assistantLanguage = () => document.documentElement.lang === 'en' ? 'en' : 'tr';

const KNOWLEDGE = [
  {
    id: 'greeting',
    keywords: ['merhaba', 'selam', 'hello', 'hey', 'nasilsin'],
    answer: 'Merhaba! Ben Şükran’ın portfolyo asistanıyım. Projeleri, deneyimi, eğitim hayatı ve kullandığı teknolojiler hakkında bu sitedeki bilgilere dayanarak yardımcı olabilirim.',
    answerEn: 'Hello! I’m Şükran’s portfolio assistant. I can answer questions about her projects, experience, education, and technologies using information shared on this site.',
  },
  {
    id: 'about',
    keywords: ['sukran', 'kim', 'hakkinda', 'kendini', 'profil', 'biyografi', 'ne yapiyor', 'amac'],
    answer: 'Şükran Yılmaz, bilgisayar mühendisliği öğrencisi ve yazılım geliştiricidir. Yapay zekâ, bilgisayarlı görü ve web teknolojileriyle projeler geliştiriyor; yeni teknolojileri öğrenip gerçek problemlere sade çözümler üretmeyi seviyor.',
    link: ['#about', 'Hakkımda bölümüne git'],
    keywordsEn: ['who is', 'about', 'tell me about', 'profile', 'what does she do', 'sukran'],
    answerEn: 'Şükran Yılmaz is a computer engineering student and software developer. She builds projects in artificial intelligence, computer vision, and web technologies, and enjoys learning new tools to solve real-world problems with thoughtful, practical solutions.',
    linkEn: ['#about', 'Go to About'],
  },
  {
    id: 'projects',
    keywords: ['proje', 'projeler', 'portfolio', 'portfolyo', 'calisma', 'urun'],
    answer: 'Portfolyoda dört çalışma yer alıyor:\n• Zucar — React ve TypeScript ile web uygulaması.\n• Metallic Garage — Next.js ve TypeScript ile web projesi.\n• AI destekli yüz tanıma — Python, OpenCV ve DeepFace kullanan devam eden mezuniyet projesi.\n• İstanbul Kültür Rotası — Node.js ve PostgreSQL katkısı sunulan ekip projesi.',
    link: ['#projects', 'Projeleri incele'],
    keywordsEn: ['project', 'projects', 'portfolio', 'work', 'built', 'created'],
    answerEn: 'There are four featured projects:\n• Zucar — a web application built with React and TypeScript.\n• Metallic Garage — a web project built with Next.js and TypeScript.\n• AI-Powered Face Recognition — an ongoing graduation project using Python, OpenCV, and DeepFace.\n• Istanbul Cultural Route — a team project with contributions to the backend using Node.js and PostgreSQL.',
    linkEn: ['#projects', 'Explore the projects'],
  },
  {
    id: 'zucar',
    keywords: ['zucar', 'zucar.app'],
    answer: 'Zucar, React ve TypeScript ile geliştirilmiş; REST API üzerinden Node.js backend’ine bağlanan bir web uygulamasıdır. Sitede özel alan adında yayında olduğu belirtiliyor.',
    link: ['#projects', 'Proje kartına git'],
    keywordsEn: ['zucar', 'zucar.app'],
    answerEn: 'Zucar is a web application built with React and TypeScript, connected to a Node.js backend through a REST API. The portfolio notes that it is live on its own domain.',
    linkEn: ['#projects', 'View the project'],
  },
  {
    id: 'garage',
    keywords: ['metallic', 'garage', 'garaj'],
    answer: 'Metallic Garage; Next.js ve TypeScript ile geliştirilen, servis ve müşteri bilgilerini sunan mobil uyumlu bir web projesidir.',
    link: ['#projects', 'Proje kartına git'],
    keywordsEn: ['metallic', 'garage'],
    answerEn: 'Metallic Garage is a responsive web project built with Next.js and TypeScript to present service and customer information.',
    linkEn: ['#projects', 'View the project'],
  },
  {
    id: 'face-ai',
    keywords: ['yuz', 'face', 'mezuniyet', 'deepface', 'opencv', 'kimlik dogrulama'],
    answer: 'AI destekli yüz tanıma, devam eden mezuniyet projesidir. PyQt5 arayüzü, kamera ve yapay zekâ modülleriyle gerçek zamanlı kimlik doğrulama hedefleniyor. Projede Python, OpenCV, DeepFace ve PostgreSQL kullanılıyor.',
    link: ['#projects', 'Proje kartına git'],
    keywordsEn: ['face recognition', 'graduation', 'deepface', 'opencv', 'identity verification'],
    answerEn: 'AI-Powered Face Recognition is an ongoing graduation project. It aims to provide real-time identity verification using a PyQt5 desktop interface, a camera, and AI modules. The project uses Python, OpenCV, DeepFace, and PostgreSQL.',
    linkEn: ['#projects', 'View the project'],
  },
  {
    id: 'istanbul',
    keywords: ['istanbul', 'kultur rotasi', 'kulturel', 'node.js', 'postgresql'],
    answer: 'İstanbul Kültür Rotası, şehrin tarihî ve kültürel noktalarını tanıtan bir ekip projesidir. Şükran, Node.js ve PostgreSQL ile backend geliştirmesine katkıda bulunmuştur.',
    link: ['#projects', 'Proje kartına git'],
    keywordsEn: ['istanbul', 'cultural route', 'cultural', 'historical landmarks'],
    answerEn: 'Istanbul Cultural Route is a team project introducing the city’s historical and cultural landmarks. Şükran contributed to backend development using Node.js and PostgreSQL.',
    linkEn: ['#projects', 'View the project'],
  },
  {
    id: 'skills',
    keywords: ['yetenek', 'teknoloji', 'dil', 'programlama', 'framework', 'hangi arac', 'hangi teknoloj'],
    answer: 'Sitede öne çıkan araç ve teknolojiler: Python, JavaScript, TypeScript, Kotlin, React, Next.js, Node.js, FastAPI, PyQt5, Pandas, OpenCV, DeepFace, PostgreSQL, Git, GitHub, Android Studio, REST API, Vite, HTML ve CSS.',
    link: ['#skills', 'Yetkinlikleri incele'],
    keywordsEn: ['skills', 'technologies', 'technology', 'programming', 'framework', 'tools', 'languages'],
    answerEn: 'Technologies featured on this site include Python, JavaScript, TypeScript, Kotlin, React, Next.js, Node.js, FastAPI, PyQt5, Pandas, OpenCV, DeepFace, PostgreSQL, Git, GitHub, Android Studio, REST APIs, Vite, HTML, and CSS.',
    linkEn: ['#skills', 'Explore the skills'],
  },
  {
    id: 'experience',
    keywords: ['deneyim', 'staj', 'is', 'tecrube', 'demiroren', 'google developer', 'teknofest', 'women in tech'],
    answer: 'Şükran’ın deneyimleri arasında Demirören Medya’da tamamladığı AI, Data & Software stajı; KOBİZON PDM’de, Zonguldak Teknopark’ta yaptığı Python ve veri bilimi stajı; Women in Tech Community gönüllülüğü; Google Developer Student Club’da yazılım takım liderliği ve Teknofest İHA takımında yazılım takım üyeliği bulunuyor. Google Developer Student Club’da Android Studio ile 70’ten fazla kişiye mobil uygulama geliştirme eğitimi verdi, projelerin ilerletilmesine liderlik etti ve ekip arkadaşlarına mentorluk yaptı.',
    link: ['#experience', 'Deneyim bölümüne git'],
    keywordsEn: ['experience', 'internship', 'intern', 'demiroren', 'kobizon', 'google developer', 'teknofest', 'women in tech', 'team lead'],
    answerEn: 'Şükran’s experience includes a completed AI, Data & Software internship at Demirören Medya; a Python and data science internship at KOBİZON PDM in Zonguldak Technopark; volunteering with Women in Tech Community; serving as Software Team Lead at Google Developer Student Club; and contributing to the Teknofest UAV team. At Google Developer Student Club, she trained more than 70 people in Android Studio and mobile app development, led project progress, and mentored teammates.',
    linkEn: ['#experience', 'Explore her experience'],
  },
  {
    id: 'education',
    keywords: ['egitim', 'universite', 'okul', 'bolum', 'bilgisayar muhendisligi', 'mezun'],
    answer: 'Şükran, Bülent Ecevit Üniversitesi’nde Bilgisayar Mühendisliği lisans eğitimine devam ediyor. Daha önce 2022–2023 döneminde İnönü Üniversitesi’nde öğrenim görmüş.',
    link: ['.education', 'Eğitim bölümüne git'],
    keywordsEn: ['education', 'university', 'school', 'degree', 'computer engineering', 'graduate'],
    answerEn: 'Şükran is pursuing a bachelor’s degree in Computer Engineering at Bülent Ecevit University. She previously studied at İnönü University from 2022 to 2023.',
    linkEn: ['#education', 'Explore her education'],
  },
  {
    id: 'contact',
    keywords: ['iletisim', 'ulas', 'email', 'e posta', 'mail', 'gmail', 'mesaj', 'calisabilir', 'ulasabilirim'],
    answer: 'Şükran’a sukranyilmaz1144@gmail.com adresinden ulaşabilirsin. İletişim formunu doldurursan Gmail’de mesajın hazır bir taslak olarak açılır; göndermeden önce Gmail’de kontrol edip Gönder’e basman gerekir.',
    link: ['#contact', 'İletişim bölümüne git'],
    keywordsEn: ['contact', 'reach', 'email', 'mail', 'message', 'work together'],
    answerEn: 'You can reach Şükran at sukranyilmaz1144@gmail.com. The contact form opens a pre-filled draft in Gmail; review it there and press Send to deliver your message.',
    linkEn: ['#contact', 'Go to Contact'],
  },
  {
    id: 'location',
    keywords: ['nerede', 'sehir', 'istanbulda', 'konum', 'yasiyor'],
    answer: 'Sitede Şükran’ın konumu İstanbul, Türkiye olarak belirtiliyor.',
    link: ['#home', 'Ana sayfaya git'],
    keywordsEn: ['where', 'city', 'location', 'based', 'live'],
    answerEn: 'The portfolio lists Şükran’s location as Istanbul, Türkiye.',
    linkEn: ['#home', 'Go to the homepage'],
  },
  {
    id: 'game',
    keywords: ['oyun', 'dino', 'trex', 't-rex'],
    answer: 'Sitede JavaScript ve Canvas ile hazırlanmış Dino T-Rex oyunu bulunuyor. Boşluk tuşu, yukarı ok veya mobilde ekrana dokunarak zıplayabilirsin.',
    link: ['#games', 'Oyuna git'],
    keywordsEn: ['game', 'dino', 'trex', 't-rex'],
    answerEn: 'The site features a Dino T-Rex game built with JavaScript and Canvas. Jump with the Space bar, the Up Arrow, or a tap on mobile.',
    linkEn: ['#games', 'Play the game'],
  },
];

const STOP_WORDS = new Set(['ve', 'ile', 'bir', 'bu', 'ben', 'mi', 'mu', 'mı', 'mü', 'ne', 'nasıl', 'hangi', 'hakkında', 'icin', 'için', 'da', 'de', 'ki', 'the', 'is', 'a']);

function normalize(text) {
  return text.toLocaleLowerCase('tr-TR').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/ı/g, 'i').replace(/[^a-z0-9.+#-]+/g, ' ').trim();
}

function addMessage(text, who, link, entryId = '') {
  const row = document.createElement('div');
  row.className = `assistant-message ${who}`;
  if (entryId) row.dataset.entryId = entryId;
  if (who === 'bot') {
    const avatar = document.createElement('span');
    avatar.className = 'assistant-avatar';
    avatar.setAttribute('aria-hidden', 'true');
    avatar.textContent = 'Ş';
    row.append(avatar);
  }
  const bubble = document.createElement('div');
  bubble.className = 'assistant-bubble';
  bubble.textContent = text;
  if (link && who === 'bot') {
    const anchor = document.createElement('a');
    anchor.className = 'assistant-link';
    anchor.href = link[0];
    anchor.textContent = `${link[1]} ↗`;
    anchor.addEventListener('click', closeAssistant);
    bubble.append(document.createElement('br'), anchor);
  }
  row.append(bubble);
  assistantMessages.append(row);
  assistantMessages.scrollTop = assistantMessages.scrollHeight;
  return row;
}

function makeWelcome() {
  if (assistantMessages.childElementCount) return;
  const english = assistantLanguage() === 'en';
  addMessage(
    english
      ? 'Hello! I’m Şükran’s portfolio assistant. Ask me about her projects, experience, or technologies.'
      : 'Merhaba! Ben Şükran’ın site asistanıyım. Projeleri, deneyimi veya kullandığı teknolojileri sorabilirsin.',
    'bot', null, 'welcome',
  );
}

function openAssistant() {
  assistantRoot.classList.add('is-open');
  assistantLauncher.setAttribute('aria-expanded', 'true');
  assistantPanel.setAttribute('aria-hidden', 'false');
  assistantPanel.inert = false;
  makeWelcome();
  window.setTimeout(() => assistantInput.focus(), 120);
}

function closeAssistant() {
  assistantRoot.classList.remove('is-open');
  assistantLauncher.setAttribute('aria-expanded', 'false');
  assistantPanel.setAttribute('aria-hidden', 'true');
  assistantPanel.inert = true;
  assistantLauncher.focus();
}

function findAnswer(question) {
  const normalized = normalize(question);
  const tokens = normalized.split(/\s+/).filter((token) => token.length > 1 && !STOP_WORDS.has(token));
  if (!tokens.length) return null;

  const ranked = KNOWLEDGE.map((entry) => {
    let score = 0;
    const keywords = assistantLanguage() === 'en' ? [...entry.keywords, ...(entry.keywordsEn || [])] : entry.keywords;
    for (const keyword of keywords) {
      const key = normalize(keyword);
      if (normalized.includes(key)) score += key.includes(' ') ? 5 : 3;
      else if (tokens.some((token) => key.includes(token) || token.includes(key))) score += 1;
    }
    return { entry, score };
  }).sort((a, b) => b.score - a.score);

  if (!ranked[0] || ranked[0].score === 0) return null;
  if (ranked[0].entry.id === 'greeting') return ranked[0].entry;
  // A very weak partial match is safer to decline than to invent an answer.
  if (ranked[0].score < 2) return null;
  return ranked[0].entry;
}

function replyTo(question) {
  addMessage(question, 'user');
  const typing = document.createElement('div');
  typing.className = 'assistant-message bot';
  const typingLabel = assistantLanguage() === 'en' ? 'Preparing a reply' : 'Yanıt hazırlanıyor';
  typing.innerHTML = `<span class="assistant-avatar" aria-hidden="true">Ş</span><span class="assistant-bubble assistant-typing" aria-label="${typingLabel}"><i></i><i></i><i></i></span>`;
  assistantMessages.append(typing);
  assistantMessages.scrollTop = assistantMessages.scrollHeight;
  window.setTimeout(() => {
    typing.remove();
    const match = findAnswer(question);
    if (match) {
      const english = assistantLanguage() === 'en';
      addMessage(english ? (match.answerEn || match.answer) : match.answer, 'bot', english ? (match.linkEn || match.link) : match.link, match.id);
    } else {
      const english = assistantLanguage() === 'en';
      addMessage(
        english
          ? 'I couldn’t find verified information about that on this site, and I don’t want to guess. You can ask about Şükran’s projects, experience, education, or contact details.'
          : 'Bu konuda sitede doğrulanmış bir bilgi bulamadım; yanlış yönlendirmek istemem. Şükran’ın projeleri, deneyimi, eğitimi veya iletişim bilgileri hakkında soru sorabilirsin.',
        'bot', english ? ['#contact', 'Go to Contact'] : ['#contact', 'İletişim bölümüne git'], 'fallback',
      );
    }
  }, 320);
}

function localizeAssistantHistory(language) {
  for (const row of assistantMessages.querySelectorAll('.assistant-message.bot[data-entry-id]')) {
    const id = row.dataset.entryId;
    const bubble = row.querySelector('.assistant-bubble');
    if (!bubble) continue;
    if (id === 'welcome') {
      bubble.textContent = language === 'en'
        ? 'Hello! I’m Şükran’s portfolio assistant. Ask me about her projects, experience, or technologies.'
        : 'Merhaba! Ben Şükran’ın site asistanıyım. Projeleri, deneyimi veya kullandığı teknolojileri sorabilirsin.';
      continue;
    }
    if (id === 'fallback') {
      bubble.textContent = language === 'en'
        ? 'I couldn’t find verified information about that on this site, and I don’t want to guess. You can ask about Şükran’s projects, experience, education, or contact details.'
        : 'Bu konuda sitede doğrulanmış bir bilgi bulamadım; yanlış yönlendirmek istemem. Şükran’ın projeleri, deneyimi, eğitimi veya iletişim bilgileri hakkında soru sorabilirsin.';
      const link = document.createElement('a');
      link.className = 'assistant-link';
      link.href = '#contact';
      link.textContent = `${language === 'en' ? 'Go to Contact' : 'İletişim bölümüne git'} ↗`;
      link.addEventListener('click', closeAssistant);
      bubble.append(document.createElement('br'), link);
      continue;
    }
    const entry = KNOWLEDGE.find((item) => item.id === id);
    if (!entry) continue;
    const link = language === 'en' ? (entry.linkEn || entry.link) : entry.link;
    bubble.textContent = language === 'en' ? (entry.answerEn || entry.answer) : entry.answer;
    if (link) {
      const anchor = document.createElement('a');
      anchor.className = 'assistant-link';
      anchor.href = link[0];
      anchor.textContent = `${link[1]} ↗`;
      anchor.addEventListener('click', closeAssistant);
      bubble.append(document.createElement('br'), anchor);
    }
  }
}

assistantLauncher.addEventListener('click', openAssistant);
assistantClose.addEventListener('click', closeAssistant);
assistantForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const question = assistantInput.value.trim();
  if (!question) return;
  assistantInput.value = '';
  replyTo(question);
});
document.querySelectorAll('.assistant-prompts [data-question]').forEach((button) => {
  button.addEventListener('click', () => replyTo(button.dataset.question));
});
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && assistantRoot.classList.contains('is-open')) closeAssistant();
});
window.addEventListener('site-language-change', (event) => localizeAssistantHistory(event.detail.language));
assistantPanel.inert = true;
