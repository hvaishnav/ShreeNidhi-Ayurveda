/* =========================================================
   Shreenidhi Ayurved – Main Script | Author: Himanshu
   ========================================================= */

const PHONE_PRIMARY = "918962414401"; // used for Call / WhatsApp links

/* ---------- Icons (stroke SVG paths) ---------- */
const ICONS = {
  pulse:   '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  stetho:  '<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/>',
  heart:   '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  wheat:   '<path d="M2 22 16 8"/><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94ZM7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94ZM11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"/>',
  baby:    '<circle cx="12" cy="12" r="10"/><path d="M9 12h.01M15 12h.01M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/>',
  brain:   '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M12 5v13"/>',
  thermo:  '<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>',
  moon:    '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  scissors:'<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>',
  eye:     '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  apple:   '<path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/>',
  phone:   '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
};
const svg = (name) => `<svg class="ic" viewBox="0 0 24 24">${ICONS[name]}</svg>`;

/* ---------- Data ---------- */
const SERVICES = [
  { icon: "pulse",    title: "Joint & Bone Disorders",  hi: "वात रोग",                desc: "Arthritis, Spondylitis, Paralysis, Sciatica" },
  { icon: "stetho",   title: "Digestive Issues",        hi: "पेट रोग",                desc: "Acidity, Gas, Constipation, Loss of Appetite" },
  { icon: "heart",    title: "Liver, Kidney & Urinary", hi: "लिवर, किडनी, मूत्र विकार", desc: "Complete organ care through Ayurveda" },
  { icon: "wheat",    title: "Skin Disorders",          hi: "त्वचा रोग",              desc: "Psoriasis, Eczema, Itching, Acne" },
  { icon: "baby",     title: "Women's Health",          hi: "स्त्री रोग",              desc: "PCOD, Infertility, Leucorrhea" },
  { icon: "brain",    title: "Migraine & Thyroid",      hi: "माइग्रेन, थायरॉइड",       desc: "BP, Sugar, Hormonal imbalances" },
  { icon: "thermo",   title: "Fever & Infections",      hi: "टायफाइड, सर्दी-खाँसी",    desc: "Typhoid, Cold, Cough, Fever" },
  { icon: "moon",     title: "Mental Health",           hi: "नींद न आना, डिप्रेशन",     desc: "Insomnia, Depression, Stress relief" },
  { icon: "scissors", title: "Hair Disorders",          hi: "केश विकार",              desc: "Hair fall, Premature greying, Dandruff" },
  { icon: "eye",      title: "Eye Care",                hi: "नेत्र चिकित्सा",           desc: "Netra Tarpan for vision clarity" },
  { icon: "apple",    title: "Diet & Lifestyle",        hi: "आहार विहार",             desc: "Personalized diet and lifestyle correction" },
  { icon: "wheat",    title: "Beauty Therapy",          hi: "सौंदर्य चिकित्सा",         desc: "Ayurvedic beauty and skin rejuvenation" },
];

const THERAPIES = [
  { name: "Shirodhara",      hi: "शिरोधारा",     desc: "Warm herbal oil stream on forehead for deep relaxation" },
  { name: "Nasya",           hi: "नस्य",         desc: "Nasal therapy for sinusitis and headaches" },
  { name: "Netra Tarpan",    hi: "नेत्र तर्पण",    desc: "Nourishing eye therapy for vision clarity" },
  { name: "Karna Puran",     hi: "कर्ण पूरण",     desc: "Ear therapy with warm herbal oils" },
  { name: "Agnikarma",       hi: "अग्निकर्म",     desc: "Thermal therapy for joint and nerve pain" },
  { name: "Virechana",       hi: "विरेचन",       desc: "Detox purgation for pitta imbalances" },
  { name: "Abhyanga",        hi: "अभ्यंग",       desc: "Full body warm oil massage therapy" },
  { name: "Swedan",          hi: "स्वेदन",       desc: "Herbal steam therapy for toxin elimination" },
  { name: "Kati Basti",      hi: "कटि बस्ती",     desc: "Lower back pain relief therapy" },
  { name: "Janu Basti",      hi: "जानु बस्ती",    desc: "Knee joint strengthening therapy" },
  { name: "Greeva Basti",    hi: "ग्रीवा बस्ती",   desc: "Neck pain and cervical spondylosis relief" },
  { name: "Udvartana",       hi: "उद्वर्तन",      desc: "Herbal powder massage for weight and skin" },
  { name: "Mukhalepam",      hi: "मुखलेपन",      desc: "Ayurvedic facial rejuvenation therapy" },
  { name: "Patra Pind Swed", hi: "पत्र पिंड स्वेद", desc: "Bolus fomentation with herbal leaves" },
];

const PRODUCTS = [
  {
    img: "images/product-suvarnaprashan.jpeg",
    alt: "Suvarnaprashan – Ayurvedic gold immunity drops for children",
    name: "Suvarnaprashan", hi: "सुवर्णप्राशन",
    desc: "Ayurvedic gold immunity drops for children (0-16 years). Boosts immunity, enhances strength, memory, digestion, and concentration.",
    tags: ["Boosts Immunity", "Enhances Strength", "Boosts Memory", "Improves Concentration"],
  },
  {
    img: "images/product-arogyaprash.jpeg",
    alt: "Arogyaprash – handmade Ayurvedic health elixir",
    name: "Arogyaprash", hi: "आरोग्यप्राश",
    desc: "Your health elixir - purely handmade with 0% preservatives, no refined sugar. Made with desi khand and pure herbs.",
    tags: ["100% Handmade", "No Preservatives", "Pure Herbs", "No Refined Sugar"],
  },
  {
    img: "images/product-suwarnaprashan-drops.jpeg",
    alt: "Suwarnaprashan Drops – 24K gold bhasma enriched immunity drops",
    name: "Suwarnaprashan Drops", hi: "सुवर्णप्राशन ड्रॉप्स",
    desc: "Premium 24K Gold Bhasma enriched Ayurvedic immunity drops. Sharper intellect, stronger immunity, 100% pure and handmade.",
    tags: ["24K Gold Bhasma", "Sharper Intellect", "Stronger Immunity", "100% Pure"],
  },
];

const TESTIMONIALS = [
  { text: "I suffered from chronic back pain for years. After Panchkarma therapy at Shreenidhi Ayurved, I feel completely rejuvenated. Dr. Mayank's pulse diagnosis was remarkably accurate.", name: "Rajesh Verma", city: "Durg" },
  { text: "My daughter's immunity improved significantly after starting Suvarnaprashan. She hardly falls sick now. Truly grateful to Dr. Nidhi for her guidance and care.", name: "Sunita Sharma", city: "Bhilai" },
  { text: "The Shirodhara therapy was a life-changing experience for my anxiety and insomnia. The entire team is very professional and the clinic has such a calming atmosphere.", name: "Priya Patel", city: "Raipur" },
  { text: "Best Ayurvedic clinic in the region. Dr. Sahu treated my chronic skin condition that allopathy couldn't solve. Highly recommend their Panchkarma treatments.", name: "Amit Soni", city: "Durg" },
];

const FAQS = [
  { q: "What is Panchkarma and who should take it?",
    a: "Panchkarma is Ayurveda's classical five-fold detoxification and rejuvenation therapy. It removes deep-rooted toxins (ama), balances Vata, Pitta and Kapha, and restores natural health. It is helpful for people with chronic diseases, stress, joint pain, skin problems, digestive issues, or anyone who wants seasonal detox and preventive care. Our doctors assess your prakriti before recommending a plan." },
  { q: "What is Suvarnaprashan and at what age can children take it?",
    a: "Suvarnaprashan is an ancient Ayurvedic immunisation in which purified gold (Swarna Bhasma) is given with herbal ghee and honey. It can be given to children from birth up to 16 years of age. It helps build immunity, memory, digestion, strength and concentration. It is traditionally given on Pushya Nakshatra days — contact us for the next date." },
  { q: "Are Ayurvedic treatments safe? Do they have side effects?",
    a: "Yes. When prescribed by a qualified B.A.M.S. physician and prepared with pure ingredients, Ayurvedic medicines are safe and natural. All our treatments are personalised after proper diagnosis, and we use authentic herbal formulations, so side effects are very rare." },
  { q: "How long does a Panchkarma treatment course take?",
    a: "Duration depends on your condition and the therapy chosen. Single therapies like Shirodhara or Abhyanga take 45–90 minutes per session. A complete Panchkarma course usually runs from 7 to 21 days. Your doctor will suggest the right plan after consultation." },
  { q: "Do I need to follow a special diet during treatment?",
    a: "Yes, a light and easily digestible diet (pathya) is recommended during treatment to get the best results. Our doctors will give you a personalised diet and lifestyle chart based on your body type and condition." },
  { q: "What are the clinic timings and how can I book an appointment?",
    a: "We are open Monday to Sunday — Morning: 10:00 AM to 2:00 PM and Evening: 4:00 PM to 9:00 PM. You can call us at +91 89624-14401, message us on WhatsApp, or fill the appointment form on this page." },
];

/* ---------- Render helpers ---------- */
function renderServices() {
  document.getElementById("servicesGrid").innerHTML = SERVICES.map((s, i) => `
    <article class="service-card reveal" style="transition-delay:${(i % 4) * 0.08}s">
      <span class="s-ic">${svg(s.icon)}</span>
      <h3>${s.title}</h3>
      <span class="hindi">${s.hi}</span>
      <p class="desc">${s.desc}</p>
    </article>`).join("");
}

function renderTherapies() {
  document.getElementById("therapyList").innerHTML = THERAPIES.map((t) => `
    <div class="therapy">
      <span class="bullet"></span>
      <div>
        <h4>${t.name}</h4>
        <span class="hindi">${t.hi}</span>
        <p>${t.desc}</p>
      </div>
    </div>`).join("");
}

function renderProducts() {
  document.getElementById("productsGrid").innerHTML = PRODUCTS.map((p, i) => {
    return `
    <article class="product-card reveal" style="transition-delay:${i * 0.1}s">
      <div class="p-img"><img src="${p.img}" alt="${p.alt}" loading="lazy" /></div>
      <div class="p-body">
        <h3>${p.name}</h3>
        <span class="hindi">${p.hi}</span>
        <p class="desc">${p.desc}</p>
        <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        <a href="tel:+${PHONE_PRIMARY}" class="btn btn-primary btn-block">${svg("phone")} Order Now</a>
      </div>
    </article>`;
  }).join("");
}

function renderTestimonials() {
  document.getElementById("testiGrid").innerHTML = TESTIMONIALS.map((t, i) => `
    <article class="testi-card reveal" style="transition-delay:${(i % 2) * 0.1}s">
      <span class="quote-mark">&rdquo;</span>
      <p>${t.text}</p>
      <div class="testi-foot">
        <div><strong>${t.name}</strong><small>${t.city}</small></div>
        <span class="stars" aria-label="5 out of 5 stars">★★★★★</span>
      </div>
    </article>`).join("");
}

function renderFaqs() {
  const list = document.getElementById("faqList");
  list.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item">
      <button class="faq-q" aria-expanded="false" aria-controls="faq-${i}">
        <span>${f.q}</span>${svg("chevron")}
      </button>
      <div class="faq-a" id="faq-${i}" role="region"><p>${f.a}</p></div>
    </div>`).join("");

  list.addEventListener("click", (e) => {
    const btn = e.target.closest(".faq-q");
    if (!btn) return;
    const item = btn.parentElement;
    const isOpen = item.classList.contains("open");
    // close all (accordion behaviour)
    list.querySelectorAll(".faq-item.open").forEach((el) => {
      el.classList.remove("open");
      el.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      el.querySelector(".faq-a").style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
      const ans = item.querySelector(".faq-a");
      ans.style.maxHeight = ans.scrollHeight + "px";
    }
  });
}

/* ---------- Missing image placeholders ---------- */
function markMissing(img) {
  const holder = img.parentElement;
  if (!holder) return;
  holder.classList.add("img-missing");
  holder.setAttribute("data-alt", img.alt || "Image");
}
function setupImageFallbacks() {
  document.querySelectorAll("img").forEach((img) => {
    if (img.complete && img.naturalWidth === 0) markMissing(img);
    img.addEventListener("error", () => markMissing(img), { once: true });
    img.addEventListener("load", () => img.parentElement && img.parentElement.classList.remove("img-missing"));
  });
}

/* ---------- Header: sticky shadow, mobile menu, active link ---------- */
function setupNav() {
  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("menuToggle");
  const links = [...document.querySelectorAll(".nav-link")];

  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));

  // Active link based on visible section
  const sectionIds = ["home", "about", "services", "panchakarma", "doctors", "products", "contact"];
  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
  const setActive = () => {
    const pos = window.scrollY + 140;
    let current = "home";
    sections.forEach((s) => { if (s.offsetTop <= pos) current = s.id; });
    // sections after products (gallery, testimonials, faq) still highlight Products until Contact
    links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + current));
  };
  setActive();
  window.addEventListener("scroll", setActive, { passive: true });
}

/* ---------- Scroll reveal ---------- */
function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("visible")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach((el) => io.observe(el));
}

/* ---------- Open / Closed status (IST) ---------- */
function setupOpenStatus() {
  const dot = document.getElementById("openDot");
  const text = document.getElementById("openText");
  const update = () => {
    // current time in India
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const mins = now.getHours() * 60 + now.getMinutes();
    const open = (mins >= 600 && mins < 840) || (mins >= 960 && mins < 1260); // 10–14, 16–21
    dot.classList.toggle("closed", !open);
    text.textContent = open ? "Open Now" : "Open Today";
    if (!open) {
      text.textContent = mins >= 840 && mins < 960 ? "Opens at 4 PM" : mins >= 1260 ? "Opens Tomorrow 10 AM" : "Opens at 10 AM";
    }
  };
  update();
  setInterval(update, 60000);
}

/* ---------- Gallery lightbox ---------- */
function setupLightbox() {
  const box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><img alt="" />';
  document.body.appendChild(box);
  const img = box.querySelector("img");
  const close = () => box.classList.remove("open");

  document.querySelectorAll(".gallery-item").forEach((fig) => {
    fig.addEventListener("click", () => {
      const src = fig.querySelector("img");
      if (fig.classList.contains("img-missing")) return;
      img.src = src.src; img.alt = src.alt;
      box.classList.add("open");
    });
  });
  box.addEventListener("click", (e) => { if (e.target !== img) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

/* ---------- Appointment form ---------- */
function setupForm() {
  const form = document.getElementById("appointmentForm");
  const success = document.getElementById("formSuccess");

  const setErr = (input, msg) => {
    const field = input.closest(".field");
    field.classList.toggle("invalid", !!msg);
    field.querySelector(".err").textContent = msg || "";
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    let ok = true;

    if (name.length < 2) { setErr(form.name, "Please enter your full name."); ok = false; } else setErr(form.name);
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) { setErr(form.phone, "Please enter a valid 10-digit phone number."); ok = false; } else setErr(form.phone);
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErr(form.email, "Please enter a valid email."); ok = false; } else setErr(form.email);
    if (!ok) return;

    // Sends the enquiry to the clinic via WhatsApp (no server needed).
    const text =
      `*New Appointment Enquiry*%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Phone: ${encodeURIComponent(phone)}%0A` +
      (email ? `Email: ${encodeURIComponent(email)}%0A` : "") +
      (message ? `Condition: ${encodeURIComponent(message)}` : "");
    window.open(`https://wa.me/${PHONE_PRIMARY}?text=${text}`, "_blank", "noopener");

    success.hidden = false;
    form.reset();
    setTimeout(() => (success.hidden = true), 8000);
  });
}

/* ---------- Ambient music ---------- */
function setupMusic() {
  const btn = document.getElementById("musicBtn");
  const tip = document.getElementById("musicTip");
  const audio = document.getElementById("ambientAudio");
  let playing = false;
  let useSynth = false;
  let ctx, master, nodes = [];

  // Soft generated drone (used if audio/ambient.mp3 is not available)
  function startSynth() {
    ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === "suspended") ctx.resume();
    master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass"; filter.frequency.value = 900;
    filter.connect(master);
    [130.81, 196.0, 261.63, 329.63].forEach((f, i) => { // C3 G3 C4 E4
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      o.type = i % 2 ? "sine" : "triangle";
      o.frequency.value = f;
      g.gain.value = 0.05;
      lfo.frequency.value = 0.08 + i * 0.03;
      lfoGain.gain.value = 0.03;
      lfo.connect(lfoGain).connect(g.gain);
      o.connect(g).connect(filter);
      o.start(); lfo.start();
      nodes.push(o, lfo);
    });
    master.gain.linearRampToValueAtTime(0.6, ctx.currentTime + 2.5);
  }
  function stopSynth() {
    if (!ctx || !master) return;
    const m = master, n = nodes;
    m.gain.cancelScheduledValues(ctx.currentTime);
    m.gain.setValueAtTime(m.gain.value, ctx.currentTime);
    m.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.8);
    setTimeout(() => { n.forEach((x) => { try { x.stop(); } catch (_) {} }); m.disconnect(); }, 900);
    nodes = [];
  }

  async function play() {
    if (!useSynth) {
      try { audio.volume = 0.4; await audio.play(); return; }
      catch (_) { useSynth = true; }
    }
    startSynth();
  }
  function pause() { useSynth ? stopSynth() : audio.pause(); }

  btn.addEventListener("click", async () => {
    playing = !playing;
    btn.classList.toggle("playing", playing);
    btn.setAttribute("aria-pressed", String(playing));
    btn.setAttribute("aria-label", playing ? "Pause ambient music" : "Play soft ambient music");
    tip.classList.add("hide");
    playing ? await play() : pause();
  });

  // Hide the hint after a while
  setTimeout(() => tip.classList.add("hide"), 9000);
}

/* ---------- Misc ---------- */
function setupMisc() {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("toTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderTherapies();
  renderProducts();
  renderTestimonials();
  renderFaqs();
  setupImageFallbacks();
  setupNav();
  setupReveal();
  setupOpenStatus();
  setupLightbox();
  setupForm();
  setupMusic();
  setupMisc();
});
