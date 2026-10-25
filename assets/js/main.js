/* Portafolio Fernando Andrade — contenido dinámico de las páginas */
(function () {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---------- Video de presentación (Inicio) ---------- */
  const caja = $("#video-presentacion");
  if (caja && SITIO.videoPresentacionYouTube) {
    /* Se reproduce solo. Los navegadores únicamente permiten la reproducción
       automática en silencio, así que se ofrece un botón para activar el sonido. */
    const id = SITIO.videoPresentacionYouTube;
    caja.innerHTML = `<iframe id="yt-presentacion" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&playsinline=1&rel=0&modestbranding=1&enablejsapi=1"
      title="Video de presentación de Fernando Andrade"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>
      <button type="button" class="sonido" id="btn-sonido" aria-pressed="false">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>
        <span>Activar sonido</span>
      </button>`;
    const iframe = $("#yt-presentacion"), btn = $("#btn-sonido");
    const orden = (func, args = []) => iframe.contentWindow.postMessage(JSON.stringify({ event: "command", func, args }), "*");
    btn.addEventListener("click", () => {
      const conSonido = btn.getAttribute("aria-pressed") === "true";
      if (conSonido) { orden("mute"); }
      else { orden("unMute"); orden("setVolume", [100]); orden("playVideo"); }
      btn.setAttribute("aria-pressed", String(!conSonido));
      btn.querySelector("span").textContent = conSonido ? "Activar sonido" : "Silenciar";
    });
  }

  /* ---------- Tarjetas de proyectos ---------- */
  const tarjeta = p => `
    <a class="card" href="proyecto.html?id=${p.id}">
      <div class="card__img">
        <img src="${p.portada}" alt="" loading="lazy">
        <span class="card__badge ${p.categoria === "afin" ? "card__badge--afin" : ""}">${p.categoria === "afin" ? "Área afín" : "Especialidad"}</span>
      </div>
      <div class="card__body">
        <span class="card__cliente">${p.cliente}</span>
        <h3>${p.titulo}</h3>
        <p>${p.resumen}</p>
        <span class="card__tipo">${p.tipo} · ${p.fecha}</span>
        <span class="card__ver">Ver caso de estudio</span>
      </div>
    </a>`;

  /* Destacados en Inicio */
  const destacados = $("#destacados");
  if (destacados) {
    destacados.innerHTML = ["nequi", "dulce-pesadilla", "buddy-assist"]
      .map(id => tarjeta(PROYECTOS.find(p => p.id === id))).join("");
  }

  /* Lista completa con filtro (Proyectos) */
  const lista = $("#lista-proyectos");
  const grupos = {
    especialidad: { titulo: "Proyectos de especialidad", sub: "Producción multimedia para marcas reales" },
    afin: { titulo: "Áreas afines", sub: "Fotografía, producción audiovisual, diseño, marketing y comunicación" }
  };
  function pintar(filtro) {
    const cats = filtro === "todos" ? ["especialidad", "afin"] : [filtro];
    lista.innerHTML = cats.map(c => `
      <h2 class="grupo-titulo">${grupos[c].titulo} <small>${grupos[c].sub}</small></h2>
      <div class="grid-proyectos">${PROYECTOS.filter(p => p.categoria === c).map(tarjeta).join("")}</div>`).join("");
    if (window.animarTarjetas) animarTarjetas();
  }
  if (lista) {
    $$("[data-n]").forEach(el => {
      const k = el.dataset.n;
      el.textContent = k === "todos" ? PROYECTOS.length : PROYECTOS.filter(p => p.categoria === k).length;
    });
    $$(".filtro").forEach(b => b.addEventListener("click", () => {
      $$(".filtro").forEach(x => x.setAttribute("aria-pressed", x === b));
      pintar(b.dataset.filtro);
    }));
    pintar("todos");
  }

  /* ---------- Formulario de contacto: arma un correo ---------- */
  const form = $("#form-contacto");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const d = new FormData(form);
      const asunto = `Portafolio · ${d.get("motivo")} · ${d.get("nombre")}`;
      const cuerpo = `${d.get("mensaje")}\n\n${d.get("nombre")}${d.get("empresa") ? " · " + d.get("empresa") : ""}`;
      location.href = `mailto:${SITIO.correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
      $("#form-ok").hidden = false;
    });
  }
})();
