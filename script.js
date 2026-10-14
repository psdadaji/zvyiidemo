/* =========================================================
   ZVYII SITE SETTINGS — contact details yahin ek jagah badlo,
   poori website me apne aap update ho jayenge.
   ========================================================= */
const SITE = {
  name: 'Zvyii',
  phoneDisplay: '+91 93527 18067',
  phoneTel: '+919352718067',
  whatsapp: '919352718067',      // country code ke saath, bina + ke
  email: 'info@zvyii.com',
  city: 'Jaipur, Rajasthan, India',
  logo: 'images/logo.png',       // apna logo is naam se images folder me rakho
};

/* Images: pehle images/<key>.jpg dhoondhi jati hai. Na mile to keyword-based
   backup photo dikhti hai. [keywords, width, height, seed] */
const IMG = {"hero": ["businessman,laptop,office", 1000, 1200, 10], "influencer": ["content,creator,influencer,brand", 800, 500, 91], "about": ["businesswoman,laptop,work", 900, 1100, 20], "graphic": ["graphic,design,creative", 800, 500, 30], "web": ["website,laptop,developer", 800, 500, 31], "app": ["mobile,app,smartphone", 800, 500, 32], "meta": ["social,media,advertising", 800, 500, 33], "gads": ["analytics,chart,growth", 800, 500, 34], "dm": ["digital,marketing,strategy", 800, 500, 35], "smm": ["social,media,phone", 800, 500, 36], "lead": ["handshake,business,deal", 800, 500, 37], "ecom": ["online,shopping,ecommerce", 800, 500, 38], "wa": ["messaging,phone,chat", 800, 500, 39], "seo": ["seo,search,laptop", 800, 500, 40], "gmb": ["map,location,store", 800, 500, 41], "startup": ["startup,team,office", 800, 500, 42], "legal": ["law,documents,contract", 800, 500, 43], "gifting": ["gift,box,hamper", 800, 500, 44], "uniform": ["tshirt,uniform,team", 800, 500, 45], "stationery": ["notebook,pen,stationery", 800, 500, 46], "events": ["conference,event,stage", 800, 500, 47], "branding": ["branding,logo,design", 800, 500, 48], "ai": ["artificial,intelligence,robot", 800, 500, 49], "software": ["software,coding,programmer", 800, 500, 50], "cloud": ["cloud,server,datacenter", 800, 500, 51], "cyber": ["cybersecurity,lock,security", 800, 500, 52], "hr": ["hr,recruitment,interview", 800, 500, 53], "cxo": ["executive,boardroom,strategy", 800, 500, 54], "trademark": ["trademark,brand,logo", 800, 500, 55], "company": ["company,registration,business", 800, 500, 56], "compliance": ["accounting,paperwork,office", 800, 500, 57], "iso": ["certificate,quality,audit", 800, 500, 58], "license": ["food,license,restaurant", 800, 500, 59], "gst": ["tax,calculator,invoice", 800, 500, 60], "payroll": ["payroll,salary,accounting", 800, 500, 61], "ngo": ["ngo,charity,volunteers", 800, 500, 62], "gem": ["government,tender,procurement", 800, 500, 63], "dispute": ["mediation,justice,gavel", 800, 500, 64], "tax": ["income,tax,documents", 800, 500, 65], "jaipur": ["jaipur,palace", 1600, 700, 80], "why": ["success,teamwork,office", 1600, 700, 81], "process": ["planning,whiteboard,strategy", 1600, 700, 82], "faq": ["question,help,support", 1600, 700, 83], "contact": ["customer,support,office", 1600, 700, 84], "vision": ["city,skyline,business", 1600, 700, 85], "team": ["team,meeting,office", 1600, 700, 86], "p1": ["consultation,meeting,talk", 900, 800, 100], "p2": ["planning,notes,strategy", 900, 800, 101], "p3": ["designer,computer,work", 900, 800, 102], "p4": ["growth,chart,success", 900, 800, 103], "b_ads": ["advertising,marketing,laptop", 1200, 630, 120], "b_site": ["website,design,screen", 1200, 630, 121], "b_local": ["local,shop,map", 1200, 630, 122], "b_reg": ["startup,paperwork,office", 1200, 630, 123]};

const NAV = [
  ['index.html', 'Home'], ['services.html', 'Services'], ['about.html', 'About'],
  ['process.html', 'Process'], ['upcoming.html', 'Upcoming'], ['blog.html', 'Guides'],
  ['tools.html', 'Free Tools'], ['contact.html', 'Contact'],
];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const waLink = (msg) => `https://wa.me/${SITE.whatsapp}` + (msg ? `?text=${encodeURIComponent(msg)}` : '');

function buildChrome() {
  const cur = location.pathname.split('/').pop() || 'index.html';
  const links = NAV.map(([h, t]) => `<a href="${h}" class="${h === cur ? 'on' : ''}">${t}</a>`).join('');
  const h = $('#site-header');
  if (h) {
    h.innerHTML = `<div class="wrap nav">
      <a href="index.html" class="logo" aria-label="Zvyii home"><img src="${SITE.logo}" alt="Zvyii logo" id="logo-img"><span id="logo-txt" hidden><span>Zvyii<small>IT &amp; Digital Solutions</small></span></span></a>
      <nav class="menu" id="menu" aria-label="Main">${links}</nav>
      <div class="nav-cta"><a href="contact.html" class="btn btn-navy btn-sm">Free consultation</a>
      <button class="burger" aria-label="Open menu" aria-expanded="false" id="burger">☰</button></div></div>`;
    const li = $('#logo-img'), lt = $('#logo-txt');
    li.onerror = () => { li.remove(); lt.hidden = false; };
    $('#burger').onclick = (e) => {
      const m = $('#menu'); const o = m.classList.toggle('open');
      e.currentTarget.setAttribute('aria-expanded', o); e.currentTarget.textContent = o ? '✕' : '☰';
    };
  }
  const f = $('#site-footer');
  if (f) {
    f.innerHTML = `<div class="wrap"><div class="f-grid">
      <div><a href="index.html" class="logo" style="font-size:1.8rem"><span>Zvyii<small style="color:#9fb0cc">IT &amp; Digital Solutions</small></span></a>
        <p style="font-size:.9rem;margin-top:14px;max-width:34ch">Websites, apps, digital marketing, lead generation, and business registration &amp; compliance support — under one roof, from Jaipur.</p></div>
      <div><h4>Company</h4>${NAV.slice(0, 5).map(([x, t]) => `<a href="${x}">${t}</a>`).join('')}<a href="faq.html">FAQ</a></div>
      <div><h4>Services</h4><a href="services.html#build">Websites &amp; Apps</a><a href="services.html#market">Ads &amp; Digital Marketing</a><a href="services.html#grow">SEO &amp; Lead Generation</a><a href="upcoming.html#legal">Registration &amp; Compliance</a><a href="upcoming.html">Gifting, Merchandise &amp; Events</a></div>
      <div><h4>Contact</h4><a data-c="tel">📞 ${SITE.phoneDisplay}</a><a data-c="mail">✉ ${SITE.email}</a><a data-c="wa" target="_blank" rel="noopener">💬 WhatsApp us</a><a href="contact.html">📍 ${SITE.city}</a></div>
    </div>
    <p class="f-note">Zvyii provides business registration, filing and documentation support. Zvyii is not a law firm and does not give legal advice; for legal opinions or court matters, consult a qualified advocate. Launch dates for upcoming services are not yet fixed.</p>
    <div class="copy"><span>© 2026 Zvyii. All rights reserved.</span><span><a href="privacy.html">Privacy Policy</a> &nbsp;|&nbsp; <a href="terms.html">Terms &amp; Conditions</a></span></div></div>`;
  }
  if (!document.querySelector('.wa-float')) {
    const wa = document.createElement('a'); wa.className = 'wa-float'; wa.href = waLink('Hello Zvyii, I would like a free consultation.'); wa.target = '_blank'; wa.rel = 'noopener'; wa.setAttribute('aria-label','Chat with Zvyii on WhatsApp'); wa.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 .8A15 15 0 0 0 3.1 23.5L1 31l7.7-2A15.1 15.1 0 1 0 16 .8Zm0 27.4a12.3 12.3 0 0 1-6.3-1.7l-.5-.3-4.6 1.2 1.2-4.5-.3-.5A12.3 12.3 0 1 1 16 28.2Zm6.8-9.2c-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.8.2s-.9 1.2-1.1 1.4-.4.3-.8.1a10 10 0 0 1-3-1.8 11.2 11.2 0 0 1-2.1-2.6c-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7l-1.2-2.8c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.2 3.3 1.4 3.5a13.5 13.5 0 0 0 5.2 4.6c.7.3 1.3.5 1.8.6.7.2 1.4.2 1.9.1.6-.1 2.2-.9 2.5-1.7.3-.8.3-1.5.2-1.7-.1-.2-.3-.3-.7-.5Z"/></svg>';
    document.body.appendChild(wa);
  }
  if (!document.querySelector('.wa-float')) { const wa = document.createElement('a'); wa.className='wa-float'; wa.href=waLink('Hello Zvyii, I would like a free consultation.'); wa.target='_blank'; wa.rel='noopener'; wa.setAttribute('aria-label','Chat with Zvyii on WhatsApp'); wa.innerHTML='<span aria-hidden="true">◉</span>'; document.body.appendChild(wa); }
  if (!$('.sticky')) {
    const s = document.createElement('div'); s.className = 'sticky';
    s.innerHTML = `<a class="c" data-c="tel">📞 Call</a><a class="w" data-c="wa" target="_blank" rel="noopener">💬 WhatsApp</a><a class="f" href="contact.html">Free consultation</a>`;
    document.body.appendChild(s);
  }
}

function bindContact() {
  $$('[data-c]').forEach((el) => {
    const t = el.dataset.c;
    if (t === 'tel') el.href = 'tel:' + SITE.phoneTel;
    if (t === 'mail') el.href = 'mailto:' + SITE.email;
    if (t === 'wa') el.href = waLink(el.dataset.msg || 'Hello Zvyii, I would like a free consultation.');
    if (el.dataset.show === 'text') el.textContent = t === 'tel' ? SITE.phoneDisplay : t === 'mail' ? SITE.email : el.textContent;
  });
  $$('[data-wa]').forEach((el) => { el.href = waLink(el.dataset.wa); el.target = '_blank'; el.rel = 'noopener'; });
}

function loadImages() {
  $$('img[data-img]').forEach((el) => {
    const k = el.dataset.img, d = IMG[k];
    el.loading = 'lazy'; el.decoding = 'async';
    if (!el.alt) el.alt = el.dataset.alt || '';
    let stage = 0;
    el.onerror = () => {
      if (stage === 0 && d) { stage = 1; el.src = `https://loremflickr.com/${d[1]}/${d[2]}/${d[0]}?lock=${d[3]}`; }
      else el.style.display = 'none';
    };
    el.src = `images/${k}.jpg`;
  });
}

function initTabs() {
  $$('[data-tabs]').forEach((box) => {
    const tabs = $$('[role=tab]', box), panels = $$('[role=tabpanel]', box);
    const show = (i) => {
      tabs.forEach((t, j) => t.setAttribute('aria-selected', i === j));
      panels.forEach((p, j) => p.classList.toggle('on', i === j));
    };
    tabs.forEach((t, i) => t.addEventListener('click', () => show(i)));
    show(0);
  });
}

const QUIZ = [
  { q: 'Where is your business today?', svc: 'a clear digital plan', o: ['Just starting out', 'Running, but only offline', 'Online presence exists, results are small', 'Growing and ready to scale'] },
  { q: 'Do you have a professional website?', svc: 'a fast, mobile-friendly website', o: ['No website', 'Old or not mobile-friendly', 'Yes, but it brings few enquiries', 'Yes, and it brings regular enquiries'] },
  { q: 'How do customers find you right now?', svc: 'Google Business Profile & local SEO', o: ['Mostly word of mouth', 'Social media posts', 'Google search or maps sometimes', 'Several channels, steadily'] },
  { q: 'Are you running paid ads?', svc: 'Meta Ads & Google Ads', o: ['Never tried', 'Tried, stopped with no results', 'Running, but cost per lead is high', 'Running and profitable'] },
  { q: 'Can you track where your leads come from?', svc: 'lead tracking & WhatsApp follow-up', o: ['No tracking', 'Rough idea only', 'Some tracking in a sheet or CRM', 'Full tracking and follow-up'] },
];

function initQuiz() {
  const box = $('#quiz'); if (!box) return;
  let i = 0; const score = [];
  const draw = () => {
    if (i >= QUIZ.length) return result();
    const q = QUIZ[i];
    box.innerHTML = `<div class="bar"><i style="width:${(i / QUIZ.length) * 100}%"></i></div>
      <p class="fine" style="margin:0 0 8px">Question ${i + 1} of ${QUIZ.length}</p><h3 class="q">${q.q}</h3>
      <div class="opts">${q.o.map((o, n) => `<button class="opt" data-n="${n}">${o}</button>`).join('')}</div>`;
    $$('.opt', box).forEach((b) => b.onclick = () => { score[i] = +b.dataset.n; i++; draw(); });
  };
  const result = () => {
    const total = score.reduce((a, b) => a + b, 0), pct = Math.round((total / (QUIZ.length * 3)) * 100);
    const level = pct < 35 ? 'Foundation stage' : pct < 70 ? 'Growth stage' : 'Scale-ready';
    const msg = pct < 35 ? 'You have the most room to grow, and the fastest wins. A solid base will change how customers see you.'
      : pct < 70 ? 'You have a base. A few focused fixes can turn it into steady enquiries.'
      : 'Your base is strong. Optimisation and scaling is where the next gains are.';
    const gaps = QUIZ.filter((_, n) => score[n] <= 1).map((q) => q.svc);
    const list = gaps.length ? gaps : ['conversion optimisation & scaling'];
    const summary = `My Business Growth Check result: ${level} (${pct}%). Focus areas: ${list.join(', ')}.`;
    box.innerHTML = `<div class="bar"><i style="width:100%"></i></div><div class="result">
      <p class="fine" style="margin:0">Your result</p><h3>${level} — ${pct}%</h3>
      <div class="meter"><i style="width:${pct}%"></i></div><p>${msg}</p>
      <p style="margin:14px 0 6px;font-weight:700;color:var(--navy)">Best next steps for you:</p>
      <ul class="checks">${list.map((l) => `<li>${l[0].toUpperCase() + l.slice(1)}</li>`).join('')}</ul>
      <div class="row"><a class="btn btn-gold" target="_blank" rel="noopener" href="${waLink(summary + ' I would like a free consultation.')}">Send result &amp; get a free plan</a>
      <button class="btn btn-line" id="redo">Retake</button></div></div>`;
    $('#redo').onclick = () => { i = 0; score.length = 0; draw(); };
  };
  draw();
}

function initCalc() {
  const c = $('#calc'); if (!c) return;
  const inr = (n) => '₹' + Math.round(n).toLocaleString('en-IN');
  const run = () => {
    const b = +$('#c-budget').value || 0, cpl = +$('#c-cpl').value || 1, cv = +$('#c-conv').value || 0, aov = +$('#c-aov').value || 0;
    const leads = b / cpl, cust = leads * cv / 100, rev = cust * aov;
    $('#o-leads').textContent = Math.round(leads).toLocaleString('en-IN');
    $('#o-cust').textContent = (Math.round(cust * 10) / 10).toLocaleString('en-IN');
    $('#o-rev').textContent = inr(rev);
    $('#o-roas').textContent = b ? (rev / b).toFixed(1) + 'x' : '–';
  };
  $$('input', c).forEach((x) => x.addEventListener('input', run)); run();
}

function initForms() {
  $$('form[data-lead]').forEach((f) => f.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(f).entries());
    const lines = ['Hello Zvyii, I would like a free consultation.', d.name && `Name: ${d.name}`, d.phone && `Phone: ${d.phone}`, d.email && `Email: ${d.email}`, d.service && `Interested in: ${d.service}`, d.message && `Details: ${d.message}`].filter(Boolean);
    window.open(waLink(lines.join('\n')), '_blank', 'noopener');
    const m = $('.msg', f); if (m) m.textContent = 'WhatsApp is opening with your details. Press send to reach us.';
  }));
}

function initProgress() {
  const a = $('.article'); if (!a) return;
  const bar = document.createElement('div'); bar.className = 'prog'; document.body.appendChild(bar);
  const upd = () => { const r = a.getBoundingClientRect(), h = a.offsetHeight - innerHeight * .5; bar.style.width = Math.min(100, Math.max(0, (-r.top / h) * 100)) + '%'; };
  addEventListener('scroll', upd, { passive: true }); upd();
}

document.addEventListener('DOMContentLoaded', () => {
  buildChrome(); loadImages(); bindContact(); initTabs(); initQuiz(); initCalc(); initForms(); initProgress();
});
