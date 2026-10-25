// Site içeriğine dayalı, API gerektirmeyen portfolyo asistanı.
// Yeni bilgi eklemek için KNOWLEDGE dizisindeki entries listesini güncelleyin.
const assistantRoot = document.querySelector('.site-assistant');
const assistantLauncher = document.querySelector('#assistant-launcher');
const assistantClose = document.querySelector('#assistant-close');
const assistantPanel = document.querySelector('#assistant-panel');
const assistantMessages = document.querySelector('#assistant-messages');
const assistantForm = document.querySelector('#assistant-form');
const assistantInput = document.querySelector('#assistant-input');

const KNOWLEDGE = [
  {
    id: 'greeting',
    keywords: ['merhaba', 'selam', 'hello', 'hey', 'nasilsin'],
    answer: 'Merhaba! Ben Şükran’ın portfolyo asistanıyım. Projeleri, deneyimi, eğitim hayatı ve kullandığı teknolojiler hakkında bu sitedeki bilgilere dayanarak yardımcı olabilirim.',
  },
  {
    id: 'about',
    keywords: ['sukran', 'kim', 'hakkinda', 'kendini', 'profil', 'biyografi', 'ne yapiyor', 'amac'],
    answer: 'Şükran Yılmaz, bilgisayar mühendisliği öğrencisi ve yazılım geliştiricidir. Yapay zekâ, bilgisayarlı görü ve web teknolojileriyle projeler geliştiriyor; yeni teknolojileri öğrenip gerçek problemlere sade çözümler üretmeyi seviyor.',
    link: ['#about', 'Hakkımda bölümüne git'],
  },
  {
    id: 'projects',
    keywords: ['proje', 'projeler', 'portfolio', 'portfolyo', 'calisma', 'urun'],
    answer: 'Portfolyoda dört çalışma yer alıyor:\n• Zucar — React ve TypeScript ile web uygulaması.\n• Metallic Garage — Next.js ve TypeScript ile web projesi.\n• AI destekli yüz tanıma — Python, OpenCV ve DeepFace kullanan devam eden mezuniyet projesi.\n• İstanbul Kültür Rotası — Node.js ve PostgreSQL katkısı sunulan ekip projesi.',
    link: ['#projects', 'Projeleri incele'],
  },
  {
    id: 'zucar',
    keywords: ['zucar', 'zucar.app'],
    answer: 'Zucar, React ve TypeScript ile geliştirilmiş; REST API üzerinden Node.js backend’ine bağlanan bir web uygulamasıdır. Sitede özel alan adında yayında olduğu belirtiliyor.',
    link: ['#projects', 'Proje kartına git'],
  },
  {
    id: 'garage',
    keywords: ['metallic', 'garage', 'garaj'],
    answer: 'Metallic Garage; Next.js ve TypeScript ile geliştirilen, servis ve müşteri bilgilerini sunan mobil uyumlu bir web projesidir.',
    link: ['#projects', 'Proje kartına git'],
  },
  {
    id: 'face-ai',
    keywords: ['yuz', 'face', 'mezuniyet', 'deepface', 'opencv', 'kimlik dogrulama'],
    answer: 'AI destekli yüz tanıma, devam eden mezuniyet projesidir. PyQt5 arayüzü, kamera ve yapay zekâ modülleriyle gerçek zamanlı kimlik doğrulama hedefleniyor. Projede Python, OpenCV, DeepFace ve PostgreSQL kullanılıyor.',
    link: ['#projects', 'Proje kartına git'],
  },
  {
    id: 'istanbul',
    keywords: ['istanbul', 'kultur rotasi', 'kulturel', 'node.js', 'postgresql'],
    answer: 'İstanbul Kültür Rotası, şehrin tarihî ve kültürel noktalarını tanıtan bir ekip projesidir. Şükran, Node.js ve PostgreSQL ile backend geliştirmesine katkıda bulunmuştur.',
    link: ['#projects', 'Proje kartına git'],
  },
  {
    id: 'skills',
    keywords: ['yetenek', 'teknoloji', 'dil', 'programlama', 'framework', 'hangi arac', 'hangi teknoloj'],
    answer: 'Sitede öne çıkan araç ve teknolojiler: Python, JavaScript, TypeScript, Kotlin, React, Next.js, Node.js, FastAPI, PyQt5, Pandas, OpenCV, DeepFace, PostgreSQL, Git, GitHub, Android Studio, REST API, Vite, HTML ve CSS.',
    link: ['#skills', 'Yetkinlikleri incele'],
  },
  {
    id: 'experience',
    keywords: ['deneyim', 'staj', 'is', 'tecrube', 'demiroren', 'google developer', 'teknofest', 'women in tech'],
    answer: 'Şükran’ın deneyimleri arasında Demirören Medya’da AI, Data & Software stajı; Women in Tech Community gönüllülüğü; Google Developer Student Club’da yazılım takım liderliği ve Teknofest İHA takımında yazılım takım üyeliği bulunuyor.',
    link: ['#experience', 'Deneyim bölümüne git'],
  },
  {
    id: 'education',
    keywords: ['egitim', 'universite', 'okul', 'bolum', 'bilgisayar muhendisligi', 'mezun'],
    answer: 'Şükran, Bülent Ecevit Üniversitesi’nde Bilgisayar Mühendisliği lisans eğitimine devam ediyor. Daha önce 2022–2023 döneminde İnönü Üniversitesi’nde öğrenim görmüş.',
    link: ['.education', 'Eğitim bölümüne git'],
  },
  {
    id: 'contact',
    keywords: ['iletisim', 'ulas', 'email', 'e posta', 'mail', 'gmail', 'mesaj', 'calisabilir', 'ulasabilirim'],
    answer: 'Şükran’a sukranyilmaz1144@gmail.com adresinden ulaşabilirsin. İletişim formunu doldurursan Gmail’de mesajın hazır bir taslak olarak açılır; göndermeden önce Gmail’de kontrol edip Gönder’e basman gerekir.',
    link: ['#contact', 'İletişim bölümüne git'],
  },
  {
    id: 'location',
    keywords: ['nerede', 'sehir', 'istanbulda', 'konum', 'yasiyor'],
    answer: 'Sitede Şükran’ın konumu İstanbul, Türkiye olarak belirtiliyor.',
    link: ['#home', 'Ana sayfaya git'],
  },
  {
    id: 'game',
    keywords: ['oyun', 'dino', 'trex', 't-rex'],
    answer: 'Sitede JavaScript ve Canvas ile hazırlanmış Dino T-Rex oyunu bulunuyor. Boşluk tuşu, yukarı ok veya mobilde ekrana dokunarak zıplayabilirsin.',
    link: ['#games', 'Oyuna git'],
  },
];

const STOP_WORDS = new Set(['ve', 'ile', 'bir', 'bu', 'ben', 'mi', 'mu', 'mı', 'mü', 'ne', 'nasıl', 'hangi', 'hakkında', 'icin', 'için', 'da', 'de', 'ki', 'the', 'is', 'a']);

function normalize(text) {
  return text.toLocaleLowerCase('tr-TR').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/ı/g, 'i').replace(/[^a-z0-9.+#-]+/g, ' ').trim();
}

function addMessage(text, who, link) {
  const row = document.createElement('div');
  row.className = `assistant-message ${who}`;
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
  addMessage('Merhaba! Ben Şükran’ın site asistanıyım. Projeleri, deneyimi veya kullandığı teknolojileri sorabilirsin.', 'bot');
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
    for (const keyword of entry.keywords) {
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
  typing.innerHTML = '<span class="assistant-avatar" aria-hidden="true">Ş</span><span class="assistant-bubble assistant-typing" aria-label="Yanıt hazırlanıyor"><i></i><i></i><i></i></span>';
  assistantMessages.append(typing);
  assistantMessages.scrollTop = assistantMessages.scrollHeight;
  window.setTimeout(() => {
    typing.remove();
    const match = findAnswer(question);
    if (match) addMessage(match.answer, 'bot', match.link);
    else addMessage('Bu konuda sitede doğrulanmış bir bilgi bulamadım; yanlış yönlendirmek istemem. Şükran’ın projeleri, deneyimi, eğitimi veya iletişim bilgileri hakkında soru sorabilirsin.', 'bot', ['#contact', 'İletişim bölümüne git']);
  }, 320);
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
assistantPanel.inert = true;
