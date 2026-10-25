/* Portafolio Fernando Andrade — animaciones (GSAP + ScrollTrigger)
   Todo el contenido es visible sin JavaScript; las animaciones solo
   se agregan encima. Se desactivan con "reducir movimiento". */
(function () {
  const html = document.documentElement;
  const cortina = document.querySelector(".cortina");
  const reducir = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const conCortina = html.classList.contains("con-cortina");
  const esIntro = html.classList.contains("intro");

  const quitarCortina = () => { html.classList.remove("con-cortina", "intro"); if (cortina) cortina.style.transform = ""; };

  if (!window.gsap || reducir) {
    quitarCortina();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  html.classList.add("anim-on");

  /* ---------- Dividir títulos en palabras ---------- */
  function dividir(el) {
    if (el.dataset.dividido) return el.querySelectorAll(".w-in");
    const nodos = [...el.childNodes];
    el.innerHTML = "";
    nodos.forEach(n => {
      if (n.nodeType === 3) {
        n.textContent.split(/(\s+)/).forEach(parte => {
          if (!parte) return;
          if (/^\s+$/.test(parte)) { el.appendChild(document.createTextNode(" ")); return; }
          const w = document.createElement("span"); w.className = "w";
          w.innerHTML = `<span class="w-in">${parte}</span>`;
          el.appendChild(w);
        });
      } else {
        const w = document.createElement("span"); w.className = "w";
        const inner = document.createElement("span"); inner.className = "w-in";
        inner.appendChild(n); w.appendChild(inner); el.appendChild(w);
      }
    });
    el.dataset.dividido = "1";
    el.setAttribute("aria-label", el.textContent.replace(/\s+/g, " ").trim());
    return el.querySelectorAll(".w-in");
  }

  const trazar = raiz => raiz.querySelectorAll(".pincel").forEach((p, i) => setTimeout(() => p.classList.add("trazado"), 250 + i * 150));

  /* ---------- Entrada de la página (hero) ---------- */
  function entradaHero() {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    const h1 = document.querySelector("[data-hero] h1");
    if (h1) tl.from(dividir(h1), { yPercent: 115, rotate: 4, duration: 1.1, stagger: 0.08 }, 0)
              .add(() => trazar(h1), 0.5);
    tl.from("[data-hero] [data-hero-item]", { y: 30, opacity: 0, duration: 0.9, stagger: 0.09 }, 0.25)
      .from("[data-hero] .video-marco, [data-hero] .hero__visual", { y: 50, scale: 0.94, opacity: 0, duration: 1.2 }, 0.35)
      .from("[data-hero] .chip", { y: 14, opacity: 0, duration: 0.6, stagger: 0.05, ease: "back.out(2)" }, 0.7);
    return tl;
  }

  /* ---------- Cortina: salida al entrar a la página ---------- */
  if (conCortina && cortina) {
    const logo = cortina.querySelector("img");
    const tl = gsap.timeline({ onComplete: quitarCortina });
    gsap.set(cortina, { yPercent: 0 });
    if (esIntro) {
      tl.fromTo(logo, { scale: 0.4, opacity: 0, rotate: -12 }, { scale: 1, opacity: 1, rotate: 0, duration: 0.8, ease: "back.out(1.8)" })
        .to(logo, { y: -8, duration: 0.25, yoyo: true, repeat: 1, ease: "sine.inOut" })
        .to(cortina, { "--trazo": 1, duration: 0.5, ease: "power2.inOut" }, "-=0.2");
    } else {
      tl.fromTo(logo, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.3 });
    }
    tl.to(logo, { opacity: 0, y: -20, duration: 0.25 })
      .to(cortina, { yPercent: -100, duration: 0.75, ease: "power4.inOut" }, "-=0.1")
      .add(entradaHero(), "-=0.45");
  } else {
    entradaHero();
  }

  /* ---------- Cortina: al salir hacia otra página del sitio ---------- */
  document.addEventListener("click", e => {
    const a = e.target.closest("a[href]");
    if (!a || !cortina) return;
    const href = a.getAttribute("href");
    if (a.target === "_blank" || a.hasAttribute("download") || e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || /^https?:/.test(href)) return;
    if (!/\.html(\?|#|$)/.test(href)) return;
    e.preventDefault();
    try { sessionStorage.setItem("transicion", "1"); } catch (_) {}
    const logo = cortina.querySelector("img");
    gsap.timeline({ onComplete: () => { location.href = href; } })
      .fromTo(cortina, { yPercent: 100 }, { yPercent: 0, duration: 0.55, ease: "power4.inOut" })
      .fromTo(logo, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.25 }, "-=0.15");
  });
  /* Al volver con el botón "atrás" del navegador */
  addEventListener("pageshow", e => { if (e.persisted && cortina) gsap.set(cortina, { yPercent: 100 }); });

  /* ---------- Títulos de sección: revelado por palabras ---------- */
  gsap.utils.toArray("[data-split]").forEach(el => {
    const ws = dividir(el);
    gsap.from(ws, {
      yPercent: 110, duration: 0.9, ease: "expo.out", stagger: 0.05,
      scrollTrigger: { trigger: el, start: "top 88%", once: true, onEnter: () => trazar(el) }
    });
  });

  /* Trazos de pincel fuera de títulos */
  gsap.utils.toArray(".pincel").forEach(p => {
    if (p.closest("[data-split], [data-hero] h1")) return;
    ScrollTrigger.create({ trigger: p, start: "top 90%", once: true, onEnter: () => p.classList.add("trazado") });
  });

  /* ---------- Revelado de bloques ---------- */
  gsap.utils.toArray("[data-reveal]").forEach(el => {
    const dir = el.dataset.reveal;
    gsap.from(el, {
      x: dir === "izq" ? -60 : dir === "der" ? 60 : 0,
      y: dir === "izq" || dir === "der" ? 0 : 40,
      opacity: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%", once: true }
    });
  });

  /* ---------- Grupos en cascada ---------- */
  function cascada(elementos) {
    if (!elementos.length) return;
    gsap.set(elementos, { opacity: 0 });
    ScrollTrigger.batch(elementos, {
      start: "top 92%", once: true,
      onEnter: lote => gsap.fromTo(lote,
        { y: 40, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.4)", stagger: 0.08, overwrite: true })
    });
  }
  cascada(gsap.utils.toArray("[data-stagger] > *"));
  /* Se vuelve a llamar cuando el filtro de proyectos dibuja tarjetas nuevas */
  window.animarTarjetas = () => {
    const nuevas = [...document.querySelectorAll(".card:not([data-animada])")];
    nuevas.forEach(c => { c.dataset.animada = "1"; });
    cascada(nuevas);
    ScrollTrigger.refresh();
  };
  animarTarjetas();

  /* ---------- Contadores ---------- */
  gsap.utils.toArray("[data-count]").forEach(el => {
    const fin = +el.dataset.count; const o = { v: 0 };
    gsap.to(o, { v: fin, duration: 1.6, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 90%", once: true },
      onUpdate: () => { el.textContent = Math.round(o.v) + (el.dataset.suffix || ""); } });
  });

  /* ---------- Parallax suave en imágenes y destellos ---------- */
  gsap.utils.toArray("[data-parallax]").forEach(el => {
    gsap.to(el, { yPercent: +(el.dataset.parallax || -10), ease: "none", scrollTrigger: { trigger: el, scrub: 0.6 } });
  });

  /* ---------- Línea de tiempo del CV que se dibuja ---------- */
  gsap.utils.toArray(".linea").forEach(l => {
    gsap.fromTo(l, { "--avance": 0 }, { "--avance": 1, ease: "none", scrollTrigger: { trigger: l, start: "top 80%", end: "bottom 60%", scrub: 0.5 } });
  });

  /* ---------- Cursor personalizado y botones magnéticos (solo mouse) ---------- */
  if (matchMedia("(pointer: fine)").matches) {
    const cur = document.querySelector(".cursor");
    if (cur) {
      html.classList.add("cursor-on");
      const p = cur.querySelector(".cursor__punto"), r = cur.querySelector(".cursor__aro");
      const px = gsap.quickTo(p, "x", { duration: 0.08 }), py = gsap.quickTo(p, "y", { duration: 0.08 });
      const rx = gsap.quickTo(r, "x", { duration: 0.45, ease: "power3" }), ry = gsap.quickTo(r, "y", { duration: 0.45, ease: "power3" });
      addEventListener("pointermove", e => { px(e.clientX); py(e.clientY); rx(e.clientX); ry(e.clientY); cur.classList.add("visible"); }, { passive: true });
      document.addEventListener("pointerleave", () => cur.classList.remove("visible"));
      document.addEventListener("pointerover", e => {
        cur.classList.toggle("cursor--ver", !!e.target.closest(".card, .galeria figure, .doc__portada"));
        cur.classList.toggle("cursor--link", !!e.target.closest("a, button, [role=button], input, textarea, label"));
      });
    }
    document.querySelectorAll(".btn, .red, .wa-flotante, .filtro").forEach(el => {
      const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "elastic.out(1, 0.4)" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "elastic.out(1, 0.4)" });
      el.addEventListener("pointermove", e => {
        const b = el.getBoundingClientRect();
        xTo((e.clientX - b.left - b.width / 2) * 0.25); yTo((e.clientY - b.top - b.height / 2) * 0.35);
      });
      el.addEventListener("pointerleave", () => { xTo(0); yTo(0); });
    });
    /* Los destellos azules siguen al mouse en el inicio */
    const glows = document.querySelectorAll("[data-hero] .glow");
    if (glows.length) addEventListener("pointermove", e => {
      const dx = (e.clientX / innerWidth - 0.5), dy = (e.clientY / innerHeight - 0.5);
      glows.forEach((g, i) => gsap.to(g, { x: dx * (i ? -60 : 80), y: dy * (i ? -40 : 60), duration: 1.2, ease: "power2.out" }));
    }, { passive: true });
  }

  addEventListener("load", () => ScrollTrigger.refresh());
})();
