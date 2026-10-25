/* Portafolio Fernando Andrade — estructura compartida por TODAS las páginas:
   menú, pie de página con redes, botón flotante de WhatsApp,
   barra de progreso, cortina de transición y cursor. */
(function () {
  const PAGINAS = [
    ["index.html", "Inicio"],
    ["sobre-mi.html", "Sobre mí"],
    ["servicios.html", "Servicios"],
    ["proyectos.html", "Proyectos"],
    ["habilidades.html", "Habilidades"],
    ["hoja-de-vida.html", "Hoja de vida"]
  ];

  const ICONOS = {
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15.1V8.9L15.6 12z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1a23 23 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V22z"/></svg>',
    flickr: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="6.5" cy="12" r="4.5"/><circle cx="17.5" cy="12" r="4.5" opacity=".55"/></svg>',
    correo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    telefono: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    ubicacion: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>'
  };
  window.ICONOS = ICONOS;

  /* Página actual (proyecto.html cuenta como Proyectos) */
  let actual = location.pathname.split("/").pop() || "index.html";
  if (actual === "proyecto.html") actual = "proyectos.html";
  if (!actual.endsWith(".html")) actual = "index.html";

  /* ---------- Encabezado ---------- */
  const header = document.getElementById("site-header");
  if (header) {
    header.outerHTML = `
    <header class="header">
      <div class="contenedor header__in">
        <a href="index.html" class="marca" aria-label="Fernando Andrade, inicio">
          <img src="assets/img/brand/logo-blanco.png" alt="Logotipo andrade" width="120" height="120">
        </a>
        <button class="menu-btn" aria-label="Abrir menú" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button>
        <nav class="nav" id="nav" aria-label="Principal">
          ${PAGINAS.map(([href, txt]) => `<a href="${href}"${href === actual ? ' class="activo" aria-current="page"' : ""}>${txt}</a>`).join("")}
          <a href="contacto.html" class="btn btn--primario${actual === "contacto.html" ? " activo" : ""}"${actual === "contacto.html" ? ' aria-current="page"' : ""}>Contacto</a>
        </nav>
      </div>
      <div class="progreso" aria-hidden="true"></div>
    </header>`;
  }

  /* ---------- Pie de página con todas las redes ---------- */
  const footer = document.getElementById("site-footer");
  if (footer) {
    const redes = SITIO.redes.map(r => `
      <a class="red red--${r.red}" href="${r.url}" target="_blank" rel="noopener" aria-label="${r.nombre}">
        ${ICONOS[r.red]}<span>${r.nombre}</span>
      </a>`).join("");
    footer.outerHTML = `
    <footer class="footer">
      <div class="footer__cta">
        <div class="contenedor footer__cta-in">
          <p class="footer__grande">¿Tienes un proyecto en mente? <a href="contacto.html" class="pincel">Hablemos.</a></p>
          <a class="btn btn--primario" href="${SITIO.whatsapp}" target="_blank" rel="noopener">${ICONOS.whatsapp} Escríbeme por WhatsApp</a>
        </div>
      </div>
      <div class="contenedor footer__grid">
        <div class="footer__marca">
          <img src="assets/img/brand/logo-blanco.png" alt="andrade" width="120" height="120">
          <p>Productor multimedia. Videos cortos, coberturas en tiempo real y contenido con IA para fintechs y startups digitales.</p>
        </div>
        <div>
          <h2 class="footer__titulo">Navegación</h2>
          <ul class="footer__lista">
            ${PAGINAS.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join("")}
            <li><a href="contacto.html">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h2 class="footer__titulo">Contacto</h2>
          <ul class="footer__lista footer__lista--icono">
            <li><a href="mailto:${SITIO.correo}">${ICONOS.correo}${SITIO.correo}</a></li>
            <li><a href="${SITIO.whatsapp}" target="_blank" rel="noopener">${ICONOS.whatsapp}WhatsApp ${SITIO.telefono}</a></li>
            <li><a href="tel:+50372143269">${ICONOS.telefono}${SITIO.telefono}</a></li>
            <li><span>${ICONOS.ubicacion}San Salvador, El Salvador</span></li>
          </ul>
        </div>
        <div>
          <h2 class="footer__titulo">Redes</h2>
          <div class="redes">${redes}</div>
        </div>
      </div>
      <div class="contenedor footer__base">
        <span>© ${new Date().getFullYear()} Fernando Andrade · Todos los derechos reservados</span>
        <a href="#" class="arriba">Volver arriba ↑</a>
      </div>
    </footer>
    <a class="wa-flotante" href="${SITIO.whatsapp}" target="_blank" rel="noopener" aria-label="Escríbeme por WhatsApp">${ICONOS.whatsapp}</a>`;
  }

  /* ---------- Cursor personalizado (lo activa anim.js) ---------- */
  document.body.insertAdjacentHTML("beforeend",
    `<div class="cursor" aria-hidden="true"><span class="cursor__punto"></span><span class="cursor__aro"><b>Ver</b></span></div>`);

  /* ---------- Menú móvil ---------- */
  const btn = document.querySelector(".menu-btn");
  const nav = document.getElementById("nav");
  if (btn && nav) {
    btn.addEventListener("click", () => {
      const abierto = nav.classList.toggle("abierto");
      btn.setAttribute("aria-expanded", abierto);
      btn.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
      document.body.classList.toggle("menu-abierto", abierto);
    });
  }

  /* Volver arriba */
  document.addEventListener("click", e => {
    if (e.target.closest(".arriba")) { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }
  });

  /* Barra de progreso de lectura */
  const barra = document.querySelector(".progreso");
  if (barra) {
    const upd = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      barra.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    };
    addEventListener("scroll", upd, { passive: true }); upd();
  }
})();
