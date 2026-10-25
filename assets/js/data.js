/* ==========================================================
   CONFIGURACIÓN DEL SITIO
   ----------------------------------------------------------
   VIDEO DE PRESENTACIÓN: cuando subas tu video a YouTube
   (puede ser "No listado"), copia el ID del enlace y pégalo
   entre las comillas.
   Ejemplo: https://youtu.be/AbC123xyz  ->  "AbC123xyz"
   Mientras esté vacío, la portada muestra un espacio reservado.
   ========================================================== */
const SITIO = {
  videoPresentacionYouTube: "OwE3SpL6ip0",
  correo: "fernandoandradeb39@gmail.com",
  telefono: "+503 7214 3269",
  whatsapp: "https://wa.me/50372143269",
  linkedin: "https://www.linkedin.com/in/fernando-andrade-multimedia",
  /* Redes sociales (aparecen en el pie de TODAS las páginas) */
  redes: [
    { red: "linkedin", nombre: "LinkedIn", url: "https://www.linkedin.com/in/fernando-andrade-multimedia" },
    { red: "whatsapp", nombre: "WhatsApp", url: "https://wa.me/50372143269" },
    { red: "instagram", nombre: "Instagram", url: "https://www.instagram.com/andrfde/" },
    { red: "youtube", nombre: "YouTube", url: "https://www.youtube.com/@firthu23/videos" },
    { red: "facebook", nombre: "Facebook", url: "https://www.facebook.com/gameoverzpor/" },
    { red: "flickr", nombre: "Flickr", url: "https://www.flickr.com/photos/198846253@N06/albums/with/72177720331978459" }
  ]
};

/* ==========================================================
   PROYECTOS (casos de estudio)
   categoria: "especialidad" | "afin"
   ========================================================== */
const PROYECTOS = [
  /* ---------------- ESPECIALIDAD ---------------- */
  {
    id: "nequi",
    categoria: "especialidad",
    area: "Video corto · Coberturas en tiempo real",
    titulo: "Videos cortos y coberturas en tiempo real para Nequi SV",
    cliente: "Nequi SV (Banco Agrícola)",
    tipo: "Encargo real · Experiencia laboral",
    fecha: "Agosto 2025 – julio 2026",
    contextoCorto: "Asistente de Marketing",
    portada: "assets/img/proyectos/nequi/RgoPOcaSVUM.jpg",
    resumen: "Producción y edición de videos verticales y coberturas en vivo de eventos, conciertos y activaciones de marca para la fintech de Banco Agrícola.",
    contexto: "Trabajé como Asistente de Marketing en Nequi SV, la fintech respaldada por Banco Agrícola, dentro del equipo de Mercadeo. Fue mi primera experiencia profesional y el lugar donde definí mi especialidad: el video corto para redes sociales.",
    reto: "Nequi necesitaba mantenerse presente y cercana en redes sociales con contenido actual. Había que mostrar eventos, conciertos y activaciones de marca mientras sucedían, y explicar los beneficios de la app en formatos cortos que una audiencia joven y digital sí consume.",
    rol: [
      "Produje, grabé y edité videos cortos verticales para redes sociales.",
      "Realicé coberturas en tiempo real de eventos, conciertos y activaciones de marca.",
      "Redacté contenido para SMS, notificaciones push, mailings y comunicación interna.",
      "Coordiné material POP e impreso con proveedores para activaciones internas y externas."
    ],
    proceso: [
      ["Planificación", "Revisión del calendario de eventos y campañas junto al equipo de marca, y definición de las tomas clave de cada cobertura."],
      ["Grabación en sitio", "Registro en formato vertical 9:16, priorizando reacciones reales, planos de detalle de la marca y audio limpio."],
      ["Edición ágil", "Montaje rápido con ritmo de redes, subtítulos y la línea gráfica de Nequi."],
      ["Entrega el mismo día", "Piezas listas para historias y reels mientras el evento seguía vigente en la conversación."]
    ],
    resultado: "Una serie de piezas verticales para los canales digitales de Nequi SV, que se pueden ver abajo. Mi desempeño durante la pasantía hizo que la empresa me contratara de forma fija: desde julio de 2026 trabajo como Analista de Operaciones Comerciales.",
    herramientas: ["Adobe Premiere Pro", "Adobe After Effects", "Grabación con smartphone", "Redacción de copys (SMS, push, mailing)"],
    videos: { tipo: "vertical", ids: ["RgoPOcaSVUM", "r6MzMAfIW6g", "9wY40wiagd4", "2C1nujRQMas", "tnhgFyeAt1Y", "TJih8BQi4vQ"] },
    galeria: [
      { src: "assets/img/proyectos/marca/brandboard.jpg", alt: "Fotografías de coberturas en Nequi SV dentro del brandboard personal" }
    ],
    linkedin: "Nequi SV"
  },
  {
    id: "systronics",
    categoria: "especialidad",
    area: "Community management · Diseño para redes",
    titulo: "Gestión de redes y piezas promocionales para Systronics",
    cliente: "Systronics S.A. de C.V.",
    tipo: "Encargo real · Experiencia laboral",
    fecha: "Diciembre 2024 – agosto 2025",
    contextoCorto: "Community Manager y Diseñador",
    portada: "assets/img/proyectos/systronics/pieza-4.jpg",
    resumen: "Redes sociales y diseño de piezas de venta para una empresa salvadoreña de tecnología, seguridad electrónica y car audio.",
    contexto: "Systronics S.A. de C.V. es una empresa salvadoreña que comercializa equipos de seguridad electrónica, cámaras, audio para vehículos y accesorios automotrices. Trabajé con ellos como Community Manager y Diseñador.",
    reto: "La empresa necesitaba comunicar ofertas y productos técnicos (cámaras Wi-Fi, kits de vigilancia, radios con pantalla, bocinas, fotómetros) de forma clara y llamativa, y convertir sus redes sociales en un canal que generara clientes potenciales.",
    rol: [
      "Gestioné las redes sociales de la empresa.",
      "Diseñé las piezas gráficas: promociones, liquidaciones y lanzamientos de producto.",
      "Apoyé la captación de clientes potenciales con publicaciones estratégicas."
    ],
    proceso: [
      ["Selección de oferta", "Definición con el área de ventas del producto, el precio y el beneficio principal a destacar."],
      ["Jerarquía visual", "Titular de impacto, producto protagonista, especificaciones en burbujas, precio visible y llamado a la acción."],
      ["Sistema gráfico", "Plantilla reconocible con el escudo de la marca, colores fuertes y un pie fijo con teléfono y dirección."],
      ["Publicación y seguimiento", "Publicación en redes y atención de los mensajes de personas interesadas."]
    ],
    resultado: "Un sistema de piezas promocionales con línea gráfica constante, que facilitó publicar ofertas con rapidez y dirigir a los interesados directamente al contacto de ventas.",
    herramientas: ["Adobe Photoshop", "Adobe Illustrator", "Redes sociales de la empresa"],
    galeria: [1, 2, 3, 4, 5, 6, 7, 8].map(n => ({ src: `assets/img/proyectos/systronics/pieza-${n}.jpg`, alt: `Pieza promocional Systronics ${n}` })),
    linkedin: "Systronics"
  },
  {
    id: "dulce-pesadilla",
    categoria: "especialidad",
    area: "Contenido con IA · Cortometraje",
    titulo: "Dulce Pesadilla: cortometraje creado con inteligencia artificial",
    cliente: "CuboIA · Agencia Nacional de Inteligencia Artificial",
    tipo: "Programa de formación con certificación · Proyecto en equipo",
    fecha: "2026",
    contextoCorto: "Content Creation Academy",
    portada: "assets/img/proyectos/dulce/poster.jpg",
    resumen: "Cortometraje de 4 minutos producido con IA generativa sobre la desaparición de las abejas y la codicia, como proyecto final del programa Content Creation Academy. Mi rol: edición, prompt engineering y supervisión visual con IA.",
    contexto: "Proyecto final del programa Content Creation Academy de CuboIA, impulsado por la Agencia Nacional de Inteligencia Artificial de El Salvador, firmado como Kinoras Studio. La idea, el guion y el storyboard son de Amy Rodríguez; yo me encargué de llevarlo a la pantalla con IA y de la edición. Al completarlo obtuve el certificado de logro en creación de video con IA, narrativa digital y producción de contenido.",
    reto: "Convertir el guion y el storyboard en un cortometraje de unos cuatro minutos con mensaje ambiental (unos empresarios celebran la desaparición de las abejas y pagan las consecuencias) usando IA generativa, y que los personajes y la estética se mantuvieran iguales de una toma a otra, que es la mayor dificultad del video con IA.",
    rol: [
      "Prompt engineering: escribí las instrucciones para generar cada toma a partir del storyboard.",
      "Supervisión visual con IA: cuidé la continuidad de personajes, vestuario y luz entre tomas.",
      "Edición y composición del cortometraje: montaje, ritmo y formatos digitales."
    ],
    proceso: [
      ["Del storyboard al prompt", "Cada lámina del storyboard de Amy Rodríguez se tradujo en instrucciones de imagen y video, plano por plano."],
      ["Hoja de personajes", "Ricardo, Elena y Marcos con vestuario y rasgos fijos como referencia para que no cambiaran entre tomas."],
      ["Generación con IA", "Imagen y video con Higgsfield AI, Cinema Studio y Nanobanana Pro; voces con ElevenLabs y música con Suno."],
      ["Supervisión visual", "Revisión de cada toma generada y regeneración de las que rompían la continuidad."],
      ["Edición", "Montaje principal en CapCut y edición complementaria y formatos digitales en Premiere Pro."]
    ],
    resultado: "El cortometraje terminado (4:27 min) publicado en YouTube, un storyboard animado y el póster oficial. El programa me otorgó el certificado de la Content Creation Academy.",
    cita: "\"Sin nosotras… no hay vida.\" — La abeja líder",
    herramientas: ["Higgsfield AI", "Cinema Studio", "Nanobanana Pro", "ElevenLabs", "Suno", "CapCut", "Adobe Premiere Pro"],
    videos: { tipo: "horizontal", ids: ["tF2nRqgwBuA", "kvYkS1bvWTc"], titulos: ["Dulce Pesadilla, cortometraje completo", "Storyboard animado"] },
    galeria: [
      { src: "assets/img/proyectos/dulce/poster.jpg", alt: "Póster oficial de Dulce Pesadilla" },
      { src: "assets/img/proyectos/dulce/personajes.jpg", alt: "Hoja de personajes generada con IA" },
      { src: "assets/img/proyectos/dulce/storyboard-1.jpg", alt: "Storyboard: escena del jet privado" },
      { src: "assets/img/proyectos/dulce/storyboard-3.jpg", alt: "Storyboard: el accidente" },
      { src: "assets/img/proyectos/dulce/storyboard-6.jpg", alt: "Storyboard: el altar de miel" },
      { src: "assets/img/proyectos/dulce/storyboard-7.jpg", alt: "Storyboard: el despertar" }
    ],
    linkedin: "Agencia Nacional de Inteligencia Artificial / CuboIA"
  },
  {
    id: "buddy-assist",
    categoria: "especialidad",
    area: "Campaña publicitaria · Contenido para redes",
    titulo: "Buddy Assist: \"Todo para tu mascota, sin complicaciones\"",
    cliente: "Buddy Assist",
    tipo: "Propuesta académica · Proyecto especulativo",
    especulativo: true,
    fecha: "Abril – mayo 2026",
    contextoCorto: "Campañas Publicitarias, UDB",
    portada: "assets/img/proyectos/buddy/mockup-carrusel-1.jpg",
    resumen: "Concepto creativo, plan de medios BTL y OTL, y piezas para redes (carruseles, estáticos, historias y videos para TikTok) para una plataforma de cuidado integral de mascotas.",
    contexto: "Proyecto grupal de seis estudiantes en la asignatura Campañas Publicitarias (grupo 03T) de la Universidad Don Bosco, desarrollado para la marca real Buddy Assist, un servicio que reúne en un solo lugar veterinaria, emergencias, grooming y asesoría para mascotas.",
    reto: "Buddy Assist tenía presencia digital e identidad visual, pero su propuesta de valor no estaba clara para los dueños de mascotas: el público seguía viendo servicios sueltos y no una solución integral. La campaña debía simplificar el mensaje y generar confianza.",
    rol: [
      "Participé en la conceptualización de la campaña: concepto creativo, mensajes clave y tono.",
      "Trabajé en la producción de las piezas del taller: carruseles, estáticos, historias y videos para TikTok.",
      "Apoyé la planificación de medios y el calendario de contenido."
    ],
    proceso: [
      ["Diagnóstico", "Análisis de las preocupaciones del público: el cuidado de una mascota se percibe complejo y disperso."],
      ["Concepto creativo", "\"Todo para tu mascota, sin complicaciones\", con mensajes como \"Un perro todoterreno necesita una gestión todoterreno\"."],
      ["Key visual", "Manny, la mascota de la campaña: un perro sereno al teléfono que resuelve todo desde un solo lugar."],
      ["Plan de medios", "BTL con stands en centros comerciales y parques pet friendly; OTL en Instagram, TikTok y Facebook con influencers."],
      ["Producción", "Carruseles educativos (señales de deshidratación, el antes y después de grooming de Toby), fechas especiales, historias y videos para TikTok."]
    ],
    resultado: "Una campaña completa con concepto, key visual, cronograma de medios de abril a octubre y un sistema de piezas para redes con la línea gráfica de la marca, presentadas en mockups listos para publicar.",
    cita: "\"Un perro todoterreno necesita una gestión todoterreno.\"",
    herramientas: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "Excel (calendario de contenido)"],
    galeria: [
      { src: "assets/img/proyectos/buddy/doc-7.jpg", alt: "Key visual con Manny" },
      { src: "assets/img/proyectos/buddy/doc-9.jpg", alt: "Mockup de valla publicitaria" },
      { src: "assets/img/proyectos/buddy/mockup-carrusel-1.jpg", alt: "Mockup carrusel: señales de deshidratación" },
      { src: "assets/img/proyectos/buddy/carrusel-1.jpg", alt: "Carrusel educativo: ¡Cuidado!" },
      { src: "assets/img/proyectos/buddy/carrusel-2.jpg", alt: "Carrusel educativo: encías secas" },
      { src: "assets/img/proyectos/buddy/mockup-carrusel-2.jpg", alt: "Mockup carrusel: Glow Up de Toby" },
      { src: "assets/img/proyectos/buddy/carrusel-3.jpg", alt: "Carrusel: Glow Up de Toby" },
      { src: "assets/img/proyectos/buddy/carrusel-4.jpg", alt: "Carrusel: agenda su grooming" },
      { src: "assets/img/proyectos/buddy/tiktok-1.jpg", alt: "Video para TikTok: ¿Tiene fiebre?" },
      { src: "assets/img/proyectos/buddy/tiktok-2.jpg", alt: "Video para TikTok: frutas buenas y malas" },
      { src: "assets/img/proyectos/buddy/estatico-1.jpg", alt: "Estático: Día del Trabajador" },
      { src: "assets/img/proyectos/buddy/estatico-2.jpg", alt: "Estático: Día de la Madre" },
      { src: "assets/img/proyectos/buddy/historia-1.jpg", alt: "Historia para Instagram" },
      { src: "assets/img/proyectos/buddy/post-informativo.jpg", alt: "Post informativo: ¿Tu peludo necesita ayuda?" },
      { src: "assets/img/proyectos/buddy/post-promocional.jpg", alt: "Post promocional: servicio de cremación" }
    ],
    linkedin: "Buddy Assist"
  },
  {
    id: "navely",
    categoria: "especialidad",
    area: "Pauta digital · Piezas para el embudo de venta",
    titulo: "Navely: plan de pauta digital y piezas para venta online",
    cliente: "Navely",
    tipo: "Propuesta académica · Proyecto especulativo",
    especulativo: true,
    fecha: "2026",
    contextoCorto: "Gestión de medios sociales (GMS 01T), UDB",
    portada: "assets/img/proyectos/navely/p-5.jpg",
    resumen: "Estrategia de pauta en Meta y piezas para cada fase del embudo (reel, post, carrusel, banner y email) para una marca de joyería y accesorios.",
    contexto: "Proyecto de la asignatura GMS (grupo 01T) de la Universidad Don Bosco, desarrollado para Navely, una marca de joyería y accesorios. La propuesta abarca de agosto a octubre de 2026.",
    reto: "Llevar a las personas desde que conocen la marca hasta la compra y alcanzar 95 ventas digitales en tres meses, con un presupuesto controlado y resultados medibles.",
    rol: [
      "Participé en la planificación de la pauta digital por objetivos: ventas, leads y remarketing.",
      "Colaboré en la creación de las piezas gráficas y sus copys para cada fase del embudo.",
      "Apoyé la definición de KPIs, el presupuesto y el cronograma."
    ],
    proceso: [
      ["Objetivos por campaña", "Campaña de ventas, captación de leads y remarketing, cada una con métricas propias."],
      ["Configuración en Meta", "Campañas Advantage+ con presupuesto, ubicaciones y públicos definidos."],
      ["Piezas por fase", "Reel vertical (descubrir), post \"Tu estilo no se explica. Se ve.\" (considerar), carrusel \"Unite a la comunidad NAVELY\" (convertir), banner \"Lo que se ve, se vive.\" (cerrar) y email post-compra \"Ya es tuya. Ahora vivila.\" (deleitar)."],
      ["Presupuesto y cronograma", "Equipo, colaboradores, producción y pauta, con un calendario de octubre a enero."],
      ["Medición", "Alcance, impresiones, CPM, costo por resultado, reproducciones al 100 % y conversiones."]
    ],
    resultado: "Un plan de pauta listo para ejecutar, con cinco piezas maquetadas en mockups, presupuesto detallado, cronograma y tablero de KPIs para medir el avance hacia la meta de ventas.",
    cita: "\"Tu estilo no se explica. Se ve.\"",
    herramientas: ["Meta Ads Manager (Advantage+)", "Diseño de piezas y mockups", "Planificación de presupuesto y KPIs"],
    galeria: [1, 2, 5, 6, 7, 8, 15].map(n => ({ src: `assets/img/proyectos/navely/p-${n}.jpg`, alt: `Presentación Navely, lámina ${n}` })),
    galeriaAncha: true,
    linkedin: "Navely"
  },
  {
    id: "ecas",
    categoria: "especialidad",
    area: "Producción audiovisual · Anuncio vertical",
    titulo: "ECAS: anuncio publicitario en video vertical",
    cliente: "ECAS",
    tipo: "Proyecto académico · Rol: camarógrafo",
    especulativo: true,
    fecha: "Octubre 2025",
    contextoCorto: "Proyecto grupal, Grupo Teórico 03",
    portada: "assets/img/proyectos/ecas/portada.jpg",
    resumen: "Anuncio de 38 segundos grabado en las instalaciones de la empresa, en formato vertical para redes sociales. Mi rol: camarógrafo.",
    contexto: "Anuncio publicitario realizado en grupo para la empresa ECAS (Grupo Teórico 03). La grabación se hizo en las instalaciones reales de la empresa: bodega, oficinas y operación diaria.",
    reto: "Mostrar en menos de 40 segundos cómo trabaja la empresa por dentro, con un formato vertical pensado para redes sociales y tomas que transmitieran orden y confianza.",
    rol: [
      "Fui el camarógrafo del proyecto.",
      "Definí encuadres y movimientos de cámara en formato vertical.",
      "Grabé las tomas de apoyo de la operación: paquetes, bodega y personal en sus puestos de trabajo."
    ],
    proceso: [
      ["Reconocimiento del lugar", "Recorrido por las instalaciones para ubicar los espacios con mejor luz y más actividad."],
      ["Lista de tomas", "Planos generales del espacio, planos medios del personal y detalles del producto."],
      ["Grabación", "Movimientos suaves y continuos en 9:16 para que el editor tuviera material fluido."],
      ["Entrega", "Material ordenado por escenas para la edición final."]
    ],
    resultado: "Anuncio final de 38 segundos publicado en YouTube Shorts.",
    herramientas: ["Cámara en formato vertical 9:16", "Movimientos de cámara y estabilización", "Planificación de tomas"],
    videos: { tipo: "vertical", ids: ["VU6fCryzBrI"], titulos: ["Anuncio ECAS"] },
    galeria: [],
    linkedin: "ECAS"
  },

  /* ---------------- ÁREAS AFINES ---------------- */
  {
    id: "fotografia",
    categoria: "afin",
    area: "Fotografía",
    titulo: "Fotografía: luz, composición y producto",
    cliente: "Universidad Don Bosco · Asignatura de Fotografía",
    tipo: "Trabajo de clase",
    fecha: "2025",
    contextoCorto: "Teoría y laboratorio de fotografía",
    portada: "assets/img/proyectos/fotografia/foto-2.jpg",
    resumen: "Selección de ejercicios de fotografía: bodegón, comida, producto, light painting, movimiento y retrato en exteriores.",
    contexto: "Trabajos de las guías y retos de la asignatura de Fotografía (teoría y laboratorio) de la Universidad Don Bosco. Algunas fotos están publicadas en mi perfil de Flickr.",
    reto: "Dominar la cámara en modo manual para resolver un problema distinto en cada guía: congelar o barrer el movimiento, controlar la profundidad de campo, corregir el balance de blancos, iluminar un bodegón, fotografiar comida y producto, y dibujar con luz en larga exposición.",
    rol: [
      "Fotógrafo: planteamiento de la toma, iluminación, composición y disparo.",
      "Selección y edición de las mejores tomas de cada ejercicio."
    ],
    proceso: [
      ["Movimiento", "Barrido (paneo) y congelamiento con distintas velocidades de obturación."],
      ["Bodegón e iluminación", "Luz principal lateral sobre fondo oscuro para dar volumen y contraste."],
      ["Comida y producto", "Composición cenital, fondos de color y luz suave para resaltar texturas."],
      ["Light painting", "Exposiciones largas en oscuridad total para escribir y dibujar con luz."],
      ["Objetos y clave baja", "Iluminación puntual para crear atmósfera y dirigir la mirada."]
    ],
    resultado: "Un portafolio fotográfico con técnicas variadas que hoy aplico al grabar video: control de la luz, encuadre y lectura de la escena.",
    herramientas: ["Cámara réflex en modo manual", "Iluminación de estudio", "Adobe Photoshop", "Flickr"],
    galeria: Array.from({ length: 18 }, (_, i) => ({ src: `assets/img/proyectos/fotografia/foto-${i + 1}.jpg`, alt: `Fotografía ${i + 1}` })),
    enlaces: [{ texto: "Ver más en Flickr", url: "https://www.flickr.com/people/198846253@N06/" }]
  },
  {
    id: "saudade",
    categoria: "afin",
    area: "Producción audiovisual · Iluminación",
    titulo: "Saudade: cortometraje (jefe de iluminación)",
    cliente: "Universidad Don Bosco · Escuela de Comunicación",
    tipo: "Trabajo de clase · Proyecto grupal",
    fecha: "2024",
    contextoCorto: "Postproducción de medios",
    portada: "assets/img/proyectos/saudade/p-3.jpg",
    resumen: "Cortometraje de drama romántico de 15 minutos producido por un equipo de 17 personas. Mi rol: jefe de iluminación.",
    contexto: "Cortometraje de la Escuela de Comunicación de la Universidad Don Bosco, realizado por un equipo de 17 estudiantes. Un joven enamorado en secreto de su amiga recibe cartas póstumas de ella tras su muerte y descubre lo que ella sentía.",
    reto: "Iluminar un drama íntimo de 15 minutos en el que la luz tenía que acompañar la emoción: la calidez de los recuerdos frente a la oscuridad del duelo, con equipo y presupuesto de estudiantes.",
    rol: [
      "Fui jefe de iluminación del cortometraje.",
      "Diseñé la propuesta de luz por escena junto a la dirección de fotografía.",
      "Coordiné al asistente de iluminación y el montaje del equipo en cada locación."
    ],
    proceso: [
      ["Lectura del guion", "Identificar el tono emocional de cada escena y cómo debía verse."],
      ["Propuesta de luz", "Luz cálida y suave para los recuerdos, contraste y sombras para el duelo."],
      ["Rodaje", "Montaje y ajuste de luces en exteriores e interiores, cuidando la continuidad entre planos."],
      ["Estreno", "Publicación en YouTube el 11 de octubre con plan de distribución en redes."]
    ],
    resultado: "Cortometraje estrenado en YouTube, con tráiler y video de detrás de cámaras.",
    herramientas: ["Luces LED", "Difusores y rebotadores", "Trabajo en set con dirección de fotografía"],
    videos: { tipo: "horizontal", ids: ["AhCSzwzCDAk", "hAPLbm6JUV8", "aMVR93nEXro"], titulos: ["Saudade", "Tráiler", "Detrás de cámaras"] },
    galeria: [3, 4, 5, 7].map(n => ({ src: `assets/img/proyectos/saudade/p-${n}.jpg`, alt: `Carpeta Saudade, página ${n}` }))
  },
  {
    id: "la-vida-de-fer",
    categoria: "afin",
    area: "Producción audiovisual · Preproducción",
    titulo: "La vida de Fer: carpeta de preproducción de un cortometraje",
    cliente: "Universidad Don Bosco · Preproducción de Medios",
    tipo: "Trabajo de clase · Proyecto grupal",
    fecha: "2024",
    contextoCorto: "Productor y protagonista",
    portada: "assets/img/proyectos/vidafer/ppm-2.jpg",
    resumen: "Preproducción completa de un cortometraje surrealista sobre la doble carga de trabajar y estudiar. Mi rol: productor y actor protagonista.",
    contexto: "Proyecto de la asignatura Preproducción de Medios de la Universidad Don Bosco, con un equipo de seis estudiantes. La historia sigue a Fer, un estudiante que trabaja en un call center y cuya realidad se distorsiona por el estrés.",
    reto: "Planificar un cortometraje de terror psicológico con efectos de maquillaje, varias locaciones y seis personajes, dejando todo listo para filmar en tres días.",
    rol: [
      "Fui el productor del proyecto.",
      "Interpreté al protagonista, Fer.",
      "Coordiné cronograma, locaciones, permisos y presupuesto."
    ],
    proceso: [
      ["Storyline", "Cuatro actos: la doble carga, la distorsión de la realidad, la transformación del profesor y la resolución con ayuda psicológica."],
      ["Guion literario y técnico", "Planos, ángulos, ópticas, sonido y duración de cada toma."],
      ["Desglose y casting", "Vestuario, utilería y equipo por escena, y asignación de personajes."],
      ["Scouting", "Locaciones con horarios, electricidad, control de sonido y permisos."],
      ["Presupuesto y plan de rodaje", "Presupuesto simulado de USD 13,300 para tres días y plan de rodaje del tráiler."]
    ],
    resultado: "Carpeta de producción completa y presentación de preproducción (línea gráfica, personajes, guion literario y técnico) lista para rodaje.",
    herramientas: ["Google Docs y Slides", "Guion técnico", "Planificación de producción"],
    galeria: [
      { src: "assets/img/proyectos/vidafer/ppm-2.jpg", alt: "Línea gráfica" },
      { src: "assets/img/proyectos/vidafer/ppm-3.jpg", alt: "Características de los personajes" },
      { src: "assets/img/proyectos/vidafer/ppm-9.jpg", alt: "Transformación del profesor" },
      { src: "assets/img/proyectos/vidafer/carpeta-1.jpg", alt: "Carpeta de producción" },
      { src: "assets/img/proyectos/vidafer/carpeta-5.jpg", alt: "Storyline" },
      { src: "assets/img/proyectos/vidafer/carpeta-12.jpg", alt: "Equipo técnico" }
    ],
    galeriaAncha: true
  },
  {
    id: "consultoria-udb",
    categoria: "afin",
    area: "Comunicación corporativa · Investigación",
    titulo: "Consultoría de redes sociales para la Universidad Don Bosco",
    cliente: "Universidad Don Bosco",
    tipo: "Trabajo de clase · Proyecto grupal",
    fecha: "Febrero – mayo 2026",
    contextoCorto: "Consultoría en Comunicación",
    portada: "assets/img/proyectos/consultoria/p-7.jpg",
    resumen: "Diagnóstico de las redes sociales institucionales con encuesta a 61 estudiantes y entrevistas a responsables de comunicación, más una propuesta de mejora.",
    contexto: "Proyecto grupal de la asignatura Consultoría en Comunicación (G02T). Analizamos la gestión de las redes sociales de la Universidad Don Bosco y la percepción de los estudiantes.",
    reto: "Había una desconexión entre lo que la universidad publica (sobre todo avisos administrativos) y lo que a los estudiantes les interesa. El objetivo fue identificar al menos tres áreas de mejora.",
    rol: [
      "Participé en el diseño de la investigación y en la aplicación de la encuesta.",
      "Colaboré en las entrevistas a los responsables de comunicación institucional.",
      "Apoyé el análisis de resultados y la propuesta de contenido.",
      "Participé en la producción de los dos videos piloto de la propuesta."
    ],
    proceso: [
      ["Diagnóstico", "Estructura, funciones y estrategia del área de redes sociales."],
      ["Encuesta", "61 estudiantes evaluaron diseño, claridad, tono, interacción y preferencias de contenido."],
      ["Entrevistas", "Con la Dirección de Comunicación Institucional y la Dirección de la Escuela de Comunicaciones."],
      ["Hallazgos", "El 49.2 % de los estudiantes solo lee la información y no interactúa; el 23 % pide más contenido dinámico en video."],
      ["Propuesta", "Reels, videos cortos y storytelling con experiencias estudiantiles y un tono más cercano."],
      ["Videos piloto", "\"Conociendo la UDB\", una guía de edificios y salones para estudiantes nuevos, y \"POV: Eres un estudiante de la UDB\", un día en el campus. Ambos con guion por tiempos y planos."]
    ],
    resultado: "Un informe con diagnóstico, cuadro comparativo entre la situación actual y la propuesta, y recomendaciones concretas de contenido, más dos videos piloto que llevan la propuesta a la práctica. El hallazgo principal confirma la demanda de video corto, que es mi especialidad.",
    herramientas: ["Encuesta en línea", "Entrevistas semiestructuradas", "Análisis de datos", "Guion y grabación de video vertical"],
    videos: { tipo: "vertical", ids: ["sEaSFEuZ9X8", "yuEt3DixHl4"], titulos: ["Conociendo la UDB", "POV: Eres un estudiante de la UDB"] },
    galeria: [1, 7, 15, 16, 18].map(n => ({ src: `assets/img/proyectos/consultoria/p-${n}.jpg`, alt: `Informe de consultoría, página ${n}` }))
  },
  {
    id: "motul",
    categoria: "afin",
    area: "Marketing digital · Estrategia de marca",
    titulo: "Motul: plan de marketing para el sector de carga pesada",
    cliente: "Motul",
    tipo: "Propuesta académica · Proyecto especulativo",
    especulativo: true,
    fecha: "2025",
    contextoCorto: "Plan de marketing",
    portada: "assets/img/proyectos/motul/p-1.jpg",
    resumen: "FODA, estrategia de las 4P, posicionamiento y piezas (spot radial, posts, email y volante) para los lubricantes Motul en carga pesada.",
    contexto: "Trabajo de investigación y estrategia sobre Motul, la marca francesa de lubricantes, enfocado en el mercado de carga pesada de El Salvador.",
    reto: "Aumentar la participación de mercado y el reconocimiento de Motul en carga pesada, un sector exigente donde el precio alto del producto es una barrera.",
    rol: [
      "Participé en el análisis FODA y en la estrategia de las 4P.",
      "Colaboré en la propuesta de piezas: guion de spot radial de 20 s, publicaciones, email marketing y volante."
    ],
    proceso: [
      ["Análisis", "FODA de la marca y comparación con la competencia."],
      ["Estrategia 4P", "Envase ecológico, precios de valor con descuentos por volumen, alianzas de distribución y campañas segmentadas."],
      ["Posicionamiento", "\"Lubricantes de alta calidad europea que optimizan el rendimiento y la vida útil de los vehículos de carga pesada\"."],
      ["Piezas", "Spot radial \"Fuerza que mueve tu negocio\", cupón de 25 %, posts, email con código y volante con QR."]
    ],
    resultado: "Un plan de marketing con estrategia, fidelización de clientes y un paquete de piezas para radio, redes, email y punto de venta.",
    herramientas: ["Análisis FODA y 4P", "Guion radial", "Diseño de piezas digitales"],
    galeria: [3, 7, 10, 14, 15, 20, 21, 22].map(n => ({ src: `assets/img/proyectos/motul/p-${n}.jpg`, alt: `Plan Motul, lámina ${n}` })),
    galeriaAncha: true
  },
  {
    id: "coca-cola",
    categoria: "afin",
    area: "Diseño gráfico · Identidad de marca",
    titulo: "Manual de marca Coca-Cola (ejercicio académico)",
    cliente: "Coca-Cola",
    tipo: "Propuesta académica · Proyecto especulativo",
    especulativo: true,
    fecha: "Universidad Don Bosco",
    contextoCorto: "Diseño e identidad",
    portada: "assets/img/proyectos/cocacola/p-1.jpg",
    resumen: "Análisis y documentación de la identidad de Coca-Cola: logotipo, color, tipografía, retículas, estilo fotográfico, tono y aplicaciones.",
    contexto: "Ejercicio académico de diseño en el que analicé y documenté la identidad visual de Coca-Cola en formato de manual de marca, con aplicaciones propias para redes y merchandising.",
    reto: "Entender por qué una marca global se reconoce al instante y traducir esas reglas a un documento claro: qué se puede hacer, qué no y cómo aplicarlo en piezas nuevas.",
    rol: [
      "Investigué la identidad y la historia de la marca.",
      "Diseñé y maqueté el manual de 31 páginas.",
      "Creé aplicaciones de ejemplo: posts temáticos y artículos promocionales."
    ],
    proceso: [
      ["Investigación", "Historia del logotipo, tipografía Spencerian, paleta y filosofía de la marca."],
      ["Normas", "Versiones del logo, área de seguridad, usos incorrectos, retículas y tono."],
      ["Aplicaciones", "Posts de temporada (\"No te quedes sin coleccionar a los personajes terroríficos\") y merch: hoodie, plato y vaso."]
    ],
    resultado: "Un manual de marca completo que me sirvió de base para construir después mi propio manual de marca personal.",
    herramientas: ["Adobe Illustrator", "Adobe InDesign", "Adobe Photoshop"],
    galeria: [1, 6, 20, 25, 27, 29].map(n => ({ src: `assets/img/proyectos/cocacola/p-${n}.jpg`, alt: `Manual Coca-Cola, página ${n}` })),
    galeriaAncha: true
  },
  {
    id: "marca-andrade",
    categoria: "afin",
    area: "Branding · Identidad visual",
    titulo: "ANDRADE: identidad de marca personal",
    cliente: "Marca personal",
    tipo: "Proyecto personal",
    fecha: "Julio 2026",
    contextoCorto: "Diagnóstico, identidad y manual",
    portada: "assets/img/proyectos/marca/manual-1.jpg",
    resumen: "Diagnóstico FODA, propuesta única de valor, logotipo, paleta, tipografía, manual de marca y tarjeta de presentación con código QR.",
    contexto: "Proyecto personal para construir mi marca como productor multimedia. Este portafolio, mi hoja de vida y mi tarjeta de presentación siguen este sistema.",
    reto: "Pasar de \"estudiante que hace videos\" a una marca profesional clara: a quién ayudo, cómo y por qué elegirme, con una identidad visual que lo comunique.",
    rol: [
      "Hice el diagnóstico FODA y definí mi propuesta única de valor.",
      "Diseñé el logotipo, el sistema visual y el manual de marca.",
      "Apliqué la identidad en la tarjeta de presentación, la hoja de vida y este sitio."
    ],
    proceso: [
      ["Diagnóstico", "FODA personal y definición del segmento: fintechs, agencias y startups digitales."],
      ["Propuesta de valor", "\"Ayudo a fintechs bancarizadas y startups digitales a atraer usuarios mediante contenido multimedia de valor\"."],
      ["Identidad", "Un robot amigable (la IA como aliada creativa) sobre un trazo de pincel (lo humano y artesanal)."],
      ["Sistema", "Azul #0000FF, azul #1591EA, negro y blanco; Poppins y Lora; valores: armonía, tranquilidad y elegancia."],
      ["Aplicaciones", "Manual de 21 páginas, tarjeta de presentación con QR, merchandising y hoja de vida."]
    ],
    resultado: "Una marca personal coherente en todos los puntos de contacto: este portafolio, el CV, la tarjeta y las redes profesionales.",
    herramientas: ["Adobe Illustrator", "Adobe Photoshop"],
    galeria: [
      { src: "assets/img/proyectos/marca/brandboard.jpg", alt: "Brandboard ANDRADE" },
      { src: "assets/img/proyectos/marca/moodboard.jpg", alt: "Moodboard" },
      { src: "assets/img/proyectos/marca/manual-3.jpg", alt: "Versiones del logotipo" },
      { src: "assets/img/proyectos/marca/manual-11.jpg", alt: "Paleta oficial" },
      { src: "assets/img/proyectos/marca/manual-17.jpg", alt: "Tipografía" },
      { src: "assets/img/proyectos/marca/manual-19.jpg", alt: "Merchandising" },
      { src: "assets/img/proyectos/marca/tarjeta-frente.jpg", alt: "Tarjeta de presentación (frente)" },
      { src: "assets/img/proyectos/marca/tarjeta-reverso.jpg", alt: "Tarjeta de presentación (reverso con QR)" }
    ],
    galeriaAncha: true
  }
];

/* ==========================================================
   MATERIAL COMPLETO de cada caso
   carpeta: assets/docs/paginas/<carpeta>/01.jpg, 02.jpg…
   pdf: archivo en assets/docs/ para descargar (null = solo visor,
        porque el PDF original pesa demasiado para la web)
   ========================================================== */
const DOCUMENTOS = {
  "buddy-assist": [
    { titulo: "Fase 4: conceptualización de campaña y selección de medios", carpeta: "buddy", paginas: 18, pdf: "Buddy-Assist-Conceptualizacion-de-campana.pdf" }
  ],
  "navely": [
    { titulo: "Presentación: plan de pauta digital, piezas y presupuesto", carpeta: "navely", paginas: 17, pdf: null }
  ],
  "dulce-pesadilla": [
    { titulo: "Guion literario", carpeta: "dulce-guion", paginas: 3, pdf: "Dulce-Pesadilla-Guion.pdf" },
    { titulo: "Storyboard completo", carpeta: "dulce-storyboard", paginas: 7, pdf: null },
    { titulo: "Certificado Content Creation Academy", carpeta: "cubo-certificado", paginas: 1, pdf: "Certificado-Content-Creation-Academy.pdf" }
  ],
  "consultoria-udb": [
    { titulo: "Informe completo: diagnóstico y resultados de la encuesta", carpeta: "consultoria-informe", paginas: 20, pdf: "Consultoria-Redes-UDB-Informe-Completo.pdf" },
    { titulo: "Propuesta de contenido: guiones y videos", carpeta: "consultoria", paginas: 12, pdf: "Consultoria-Redes-Sociales-UDB.pdf" }
  ],
  "motul": [
    { titulo: "Plan de marketing Motul: carga pesada", carpeta: "motul", paginas: 24, pdf: "Motul-Plan-de-Marketing.pdf" }
  ],
  "coca-cola": [
    { titulo: "Manual de marca Coca-Cola", carpeta: "cocacola", paginas: 31, pdf: "Manual-de-Marca-Coca-Cola.pdf" }
  ],
  "saudade": [
    { titulo: "Carpeta final y edición definitiva", carpeta: "saudade", paginas: 19, pdf: "Saudade-Carpeta-Final.pdf" }
  ],
  "la-vida-de-fer": [
    { titulo: "Carpeta de producción", carpeta: "vidafer-carpeta", paginas: 30, pdf: "La-vida-de-Fer-Carpeta-de-Produccion.pdf" },
    { titulo: "Presentación de preproducción (PPM)", carpeta: "vidafer-ppm", paginas: 14, pdf: null }
  ],
  "marca-andrade": [
    { titulo: "Manual de marca ANDRADE", carpeta: "marca-manual", paginas: 21, pdf: "Manual-de-Marca-ANDRADE.pdf" },
    { titulo: "Diagnóstico y propuesta única de valor", carpeta: "marca-diagnostico", paginas: 3, pdf: "Diagnostico-y-Propuesta-de-Valor.pdf" }
  ]
};
