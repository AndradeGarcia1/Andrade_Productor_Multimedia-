/* Portafolio Fernando Andrade — plantilla de caso de estudio */
(function () {
  const id = new URLSearchParams(location.search).get("id");
  const i = PROYECTOS.findIndex(p => p.id === id);
  const raiz = document.getElementById("caso");
  if (i < 0) { location.replace("proyectos.html"); return; }

  const p = PROYECTOS[i];
  const docs = (typeof DOCUMENTOS !== "undefined" && DOCUMENTOS[p.id]) || [];
  const ant = PROYECTOS[(i - 1 + PROYECTOS.length) % PROYECTOS.length];
  const sig = PROYECTOS[(i + 1) % PROYECTOS.length];
  const esAfin = p.categoria === "afin";
  const pag = (d, n) => `assets/docs/paginas/${d.carpeta}/${String(n).padStart(2, "0")}.jpg`;

  document.title = `${p.titulo} · Fernando Andrade`;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", p.resumen);

  /* ---------- Videos ---------- */
  const yt = (vid, titulo, vertical) => `
    <figure class="video">
      <div class="video__frame">
        <button type="button" data-yt="${vid}" aria-label="Reproducir: ${titulo}">
          <img src="https://i.ytimg.com/vi/${vid}/${vertical ? "oar2" : "hqdefault"}.jpg" alt="" loading="lazy">
        </button>
      </div>
      <figcaption>${titulo}</figcaption>
    </figure>`;
  let videosHTML = "";
  if (p.videos) {
    const vertical = p.videos.tipo === "vertical";
    videosHTML = `<div class="videos ${vertical ? "" : "videos--h"}" data-stagger>` +
      p.videos.ids.map((v, k) => yt(v, (p.videos.titulos && p.videos.titulos[k]) || `Pieza ${k + 1}`, vertical)).join("") + `</div>`;
  }

  /* ---------- Galería ---------- */
  const galeriaHTML = (p.galeria && p.galeria.length) ? `
    <div class="galeria ${p.galeriaAncha ? "galeria--ancha" : ""}" data-stagger>
      ${p.galeria.map((g, k) => `<figure data-k="${k}"><img src="${g.src}" alt="${g.alt}" loading="lazy"><figcaption>${g.alt}</figcaption></figure>`).join("")}
    </div>` : "";

  const enlacesHTML = (p.enlaces || []).map(e => `<a class="btn btn--secundario" href="${e.url}" target="_blank" rel="noopener">${e.texto} ↗</a>`).join("");

  /* ---------- Material completo (documentos) ---------- */
  const docsHTML = docs.length ? `
    <p>Aquí puedes revisar todo lo trabajado, página por página${docs.some(d => d.pdf) ? ", o descargar el PDF original" : ""}.</p>
    <div class="docs" data-stagger>
      ${docs.map((d, k) => `
        <article class="doc">
          <button type="button" class="doc__portada" data-doc="${k}" aria-label="Ver documento completo: ${d.titulo}">
            <img src="${pag(d, 1)}" alt="" loading="lazy">
            <span class="doc__paginas">${d.paginas} ${d.paginas === 1 ? "página" : "páginas"}</span>
          </button>
          <div class="doc__info">
            <h3>${d.titulo}</h3>
            <div class="doc__acciones">
              <button type="button" class="btn btn--primario" data-doc="${k}">Ver completo</button>
              ${d.pdf ? `<a class="btn btn--secundario" href="assets/docs/${d.pdf}" download>Descargar PDF</a>` : `<span class="doc__nota">Solo visor en línea (archivo original muy pesado)</span>`}
            </div>
          </div>
        </article>`).join("")}
    </div>` : "";

  const bloques = [
    ["contexto", "Contexto", `<p>${p.contexto}</p>`],
    ["reto", "Reto u objetivo", `<p>${p.reto}</p>`],
    ["rol", "Mi rol", `<ul>${p.rol.map(r => `<li>${r}</li>`).join("")}</ul>`],
    ["proceso", "Proceso", `<ol class="pasos" data-stagger>${p.proceso.map(([t, d]) => `<li><b>${t}.</b> ${d}</li>`).join("")}</ol>`],
    ["resultado", "Resultado", `<p>${p.resultado}</p>${p.cita ? `<p class="cita">${p.cita}</p>` : ""}${videosHTML}${galeriaHTML}${enlacesHTML ? `<div class="enlaces-caso">${enlacesHTML}</div>` : ""}`],
    ["herramientas", "Herramientas utilizadas", `<ul class="herramientas" data-stagger>${p.herramientas.map(h => `<li>${h}</li>`).join("")}</ul>`]
  ];
  if (docsHTML) bloques.push(["material", "Material completo", docsHTML]);

  raiz.innerHTML = `
    <section class="caso-hero" data-hero>
      <div class="glow glow--1"></div>
      <div class="contenedor">
        <a class="volver" href="proyectos.html" data-hero-item>← Volver a proyectos</a>
        <div class="badges" data-hero-item>
          <span class="badge ${esAfin ? "badge--afin" : ""}">${esAfin ? "Área afín" : "Especialidad"}</span>
          <span class="badge badge--linea">${p.area}</span>
        </div>
        <h1>${p.titulo}</h1>
        <p class="bajada" data-hero-item>${p.resumen}</p>
        ${p.especulativo ? `<p class="aviso" data-hero-item><b>Aclaración:</b> este es un proyecto académico desarrollado por iniciativa propia o como trabajo de clase. ${p.cliente} no lo encargó ni lo aprobó.</p>` : ""}
      </div>
    </section>

    <div class="contenedor">
      <div class="caso-portada hero__visual"><img src="${p.portada}" alt="Imagen principal del proyecto ${p.titulo}"></div>
      <div class="ficha" data-stagger>
        <div><small>Cliente / marca</small><b>${p.cliente}</b></div>
        <div><small>Categoría</small><b>${esAfin ? "Área afín" : "Especialidad"}</b></div>
        <div><small>Tipo</small><b>${p.tipo}</b></div>
        <div><small>Fecha</small><b>${p.fecha}</b></div>
      </div>

      <div class="caso-cuerpo">
        <nav class="caso-indice" aria-label="Secciones del caso">
          ${bloques.map(([bid, t]) => `<a href="#${bid}">${t}</a>`).join("")}
        </nav>
        <div>
          ${bloques.map(([bid, t, html], k) => `
            <section class="bloque" id="${bid}">
              <h2 data-reveal><span class="num">${String(k + 1).padStart(2, "0")}</span>${t}</h2>
              ${html}
            </section>`).join("")}
        </div>
      </div>

      <nav class="nav-casos" aria-label="Otros proyectos">
        <a href="proyecto.html?id=${ant.id}"><small>← Anterior</small>${ant.titulo}</a>
        <a class="sig" href="proyecto.html?id=${sig.id}"><small>Siguiente →</small>${sig.titulo}</a>
      </nav>
    </div>`;

  /* Índice lateral: resaltar la sección visible */
  const links = [...raiz.querySelectorAll(".caso-indice a")];
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) links.forEach(l => l.classList.toggle("activo", l.getAttribute("href") === "#" + e.target.id));
    }), { rootMargin: "-40% 0px -55% 0px" });
    raiz.querySelectorAll(".bloque").forEach(b => io.observe(b));
  }

  /* Los videos se reproducen solos (en silencio, en bucle) cuando llegan a la pantalla;
     también al hacer clic en la miniatura si el navegador no soporta la detección. */
  const reproducir = b => {
    if (!b.isConnected) return;
    const id = b.dataset.yt;
    const f = document.createElement("iframe");
    f.src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&playsinline=1&rel=0&modestbranding=1`;
    f.title = b.getAttribute("aria-label");
    f.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    f.allowFullscreen = true;
    b.replaceWith(f);
  };
  const botonesYt = [...raiz.querySelectorAll("[data-yt]")];
  if ("IntersectionObserver" in window) {
    const ioVideo = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { ioVideo.unobserve(e.target); reproducir(e.target); }
    }), { rootMargin: "200px 0px" });
    botonesYt.forEach(b => ioVideo.observe(b));
  }
  raiz.addEventListener("click", e => {
    const b = e.target.closest("[data-yt]");
    if (b) reproducir(b);
  });

  /* ---------- Visor de imágenes de la galería ---------- */
  const visor = document.getElementById("visor");
  const vImg = visor.querySelector("img");
  const vTxt = visor.querySelector("p");
  let actual = 0;
  const mostrar = k => {
    actual = (k + p.galeria.length) % p.galeria.length;
    vImg.src = p.galeria[actual].src; vImg.alt = p.galeria[actual].alt; vTxt.textContent = p.galeria[actual].alt;
  };
  const cerrarVisor = () => visor.classList.remove("abierto");
  raiz.addEventListener("click", e => {
    const fig = e.target.closest(".galeria figure");
    if (!fig) return;
    mostrar(+fig.dataset.k); visor.classList.add("abierto"); visor.querySelector(".cerrar").focus();
  });
  visor.querySelector(".cerrar").onclick = cerrarVisor;
  visor.querySelector(".ant").onclick = () => mostrar(actual - 1);
  visor.querySelector(".sig").onclick = () => mostrar(actual + 1);
  visor.addEventListener("click", e => { if (e.target === visor) cerrarVisor(); });

  /* ---------- Lector de documentos (todas las páginas) ---------- */
  const lector = document.getElementById("lector");
  const lPags = document.getElementById("lector-paginas");
  const lPdf = document.getElementById("lector-pdf");
  let origen = null;
  function abrirDoc(k) {
    const d = docs[k];
    document.getElementById("lector-titulo").textContent = d.titulo;
    lPdf.hidden = !d.pdf;
    if (d.pdf) lPdf.href = `assets/docs/${d.pdf}`;
    lPags.innerHTML = Array.from({ length: d.paginas }, (_, n) =>
      `<figure><img src="${pag(d, n + 1)}" alt="${d.titulo}, página ${n + 1} de ${d.paginas}" loading="lazy"><figcaption>${n + 1} / ${d.paginas}</figcaption></figure>`).join("");
    lector.hidden = false; lPags.scrollTop = 0;
    document.body.classList.add("sin-scroll");
    origen = document.activeElement;
    lector.querySelector(".lector__cerrar").focus();
    if (window.gsap && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.fromTo(lector, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo(lPags.children, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power3.out" });
    }
  }
  function cerrarDoc() {
    lector.hidden = true; document.body.classList.remove("sin-scroll");
    if (origen) origen.focus();
  }
  raiz.addEventListener("click", e => {
    const b = e.target.closest("[data-doc]");
    if (b) abrirDoc(+b.dataset.doc);
  });
  lector.querySelector(".lector__cerrar").onclick = cerrarDoc;

  document.addEventListener("keydown", e => {
    if (!lector.hidden && e.key === "Escape") return cerrarDoc();
    if (!visor.classList.contains("abierto")) return;
    if (e.key === "Escape") cerrarVisor();
    if (e.key === "ArrowLeft") mostrar(actual - 1);
    if (e.key === "ArrowRight") mostrar(actual + 1);
  });
})();
