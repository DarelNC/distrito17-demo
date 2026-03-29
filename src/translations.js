function changeLanguage(lang) {
  // Guardamos la preferencia (opcional para la demo)
  localStorage.setItem('selectedLang', lang);

  // Buscamos todos los elementos con el atributo data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key === 'waUrl') {
      el.setAttribute('href', translations[lang][key]);
    } else {
      el.innerText = translations[lang][key];
    }
  });

  document.querySelectorAll('.btn-es').forEach(el => {
    el.classList.toggle('lang-selected', lang === 'es');
  });
  document.querySelectorAll('.btn-en').forEach(el => {
    el.classList.toggle('lang-selected', lang === 'en');
  });
}
document.addEventListener('DOMContentLoaded', () => {
  // 1. Miramos si hay algo en localStorage. 
  // 2. Si no, ponemos 'es' por defecto.
  const savedLang = localStorage.getItem('selectedLang') || 'es';
  changeLanguage(savedLang);
});

window.changeLanguage = changeLanguage


const translations = {
  es: {
    heroTitle: "Construye tu futuro en el corazón de Villaverde",
    heroSub: "Asesores Inmobiliarios en Villaverde con más de 10 años de experiencia a tu servicio.",
    ctaCall: "Agenda una llamada",
    waUrl: "https://wa.me/34617378073?text=Hola,%20estoy%20interesado%20en%20una%20valoración%20de%20mi%20vivienda.",
    services: "Servicios",
    address: "Avenida Orovilla 54, Madrid, 28041",
    schedule: "Lunes a viernes: de 9:30 a 14:00 y de 16:30 a 20:00",
    aboutTitle: "Tu futuro es nuestra prioridad",
    aboutP1: "Entendemos que una casa es mucho más que cuatro paredes; es el escenario donde se construye tu vida. En Distrito 17, combinamos una década de experiencia inmobiliaria con un conocimiento profundo de Villaverde para ofrecerte un servicio donde la transparencia y la cercanía son los cimientos de cada operación.",
    aboutP2: "Nuestro equipo de asesores no solo gestiona activos, gestiona sueños y proyectos de futuro. Nos encargamos de cada detalle del proceso para que tú solo tengas que preocuparte de dar el siguiente paso, garantizando soluciones personalizadas que transforman la complejidad del mercado en una experiencia segura y gratificante.",

    // Services
    whatWeOffer: "Nuestros Servicios",
    service1: "Valoración Gratuita",
    service2: "Asesoramiento Personalizado",
    service3: "Gestión de Alquileres",
    service4: "Tramitación de Herencias",
    service5: "Financiación 100%",
    service6: "Certificados Energéticos",
    service7: "Gestión de VPO",
    more: "+ Más",

    // reviews
    testimonialsTitle: "Escucha a nuestros clientes",
    testimonialsHeading: "Creemos que las experiencias de nuestros clientes dicen mucho sobre la calidad de nuestros servicios. Esto es lo que algunos de ellos tienen que decir:",
    ctaHeading: "¿Pensando en vender o alquilar tu propiedad?",
    ctaSubheading: "Déjanos tus datos y un asesor experto en Villaverde te realizará una valoración gratuita y sin compromiso.",
  
    // Footer
    footerDesc: "Tu inmobiliaria de confianza en el corazón de Villaverde.",
    footerPhone: "+34 617 378 073",
    footerMail: "se.71otirtsid@aloh",
    legal: "Aviso Legal",
    privacy: "Política de Privacidad",
    cookies: "Cookies",
    copyright: "Distrito 17 | Asesores inmobiliarios",
    copyright2: "© 2026 Todos los derechos reservados.",
    
    // 404
    errorTitle: "Página no encontrada",
    errorSub: "Parece que la dirección que buscas ya no está disponible o se ha movido. No te preocupes, te ayudamos a encontrar el camino de vuelta.",
    errorCTA: "Volver al inicio",

    // Services page
    servicesHeroTitle: "Tu tranquilidad empieza con una buena gestión.",
    servicesHeroSub: "Un equipo de expertos a tu lado para valorar tu vivienda, asesorarte con la financiación y gestionar cada documento legal. Tu propiedad está en buenas manos.",
    statsCol1: "años de experiencia",
    statsCol2: "familias asesoradas",
    statsCol3: "recomendaciones",
    sec3Title: "¿Listo para dar el siguiente paso?",
    sec3Sub: "Podemos ayudarte.",
    sec3CtaTitle: "¿Quieres saber cuánto vale tu vivienda hoy mismo?",
    sec3CtaBtn: "Solicitar valoración gratuita",


    // services + desc
    service_1_label: "Asesoramiento personalizado",
    service_1_desc: "Te acompañamos de principio a fin, resolviendo tus dudas y protegiendo tus intereses en cada paso.",

    service_2_label: "Valoraciones gratuitas",
    service_2_desc: "Conoce el valor real de tu vivienda en el mercado actual de Villaverde con un informe detallado y sin compromiso.",

    service_3_label: "Certificados energéticos",
    service_3_desc: "Gestionamos la etiqueta de eficiencia energética de tu inmueble, un trámite obligatorio para vender o alquilar.",

    service_4_label: "Tramitación de herencias",
    service_4_desc: "Resolvemos la parte más compleja: herencias, adjudicaciones y registros, para que la venta sea posible y fluida.",

    service_5_label: "Financiación 100%",
    service_5_desc: "Ayudamos a los compradores a conseguir la mejor hipoteca, facilitando que tu vivienda se venda mucho más rápido.",

    service_6_label: "Gestión de alquileres",
    service_6_desc: "Buscamos al inquilino ideal y gestionamos el contrato para que tu inversión sea rentable y libre de estrés.",

    service_7_label: "Viviendas VPO",
    service_7_desc: "Expertos en la gestión técnica y legal de Viviendas de Protección Oficial: descalificaciones, precios máximos y permisos.",

    service_8_label: "Servicio post-venta",
    service_8_desc: "No nos vamos tras la firma. Te ayudamos con las plusvalías, suministros y cualquier trámite pendiente.",


    ///////////////////////////////////////////
    // reviewssss
    review_1_text: '"Buscábamos una gestión rápida y sin complicaciones, y Mario superó nuestras expectativas. Transparencia total en los honorarios y una comunicación constante que te da mucha tranquilidad. Muy recomendables en la zona."',
    review_1_author: '— Elena R.',
    review_2_text: '"Impecable gestión en la venta de nuestra casa. Era nuestra primera vez en estos trámites y ellos lo hicieron todo muy fácil desde el minuto cero. Los volvería a elegir."',
    review_2_author: '— Miriam S.',
    review_3_text: '"Cercanos, profesionales y se encargan de todos los trámites legales. Nos solucionaron aspectos de la venta que ni siquiera eran su competencia. Muy recomendables."',
    review_3_author: '— Juan F.',
    review_4_text: '"Nuestra elección por Distrito 17 ha sido un acierto. Goyo ha sido atento, resolutivo y nos ha acompañado con honestidad en todo el proceso. ¡Un 10 como profesional!"',
    review_4_author: '— Sergio P.',
  },
  en: {
    heroTitle: "Build your future in the heart of Villaverde",
    heroSub: "Real estate advisors in Villaverde with over 10 years of experience at your service.",
    ctaCall: "Schedule a call",
    waUrl: "https://wa.me/34617378073?text=Hello,%20I%20am%20interested%20in%20a%20property%20valuation.",
    services: "Services",
    address: "54 Orovilla Ave, Madrid, 28041",
    schedule: "Monday to Friday: 9:30 AM – 2:00 PM & 4:30 PM – 8:00 PM",
    aboutTitle: "Your future is our priority",
    aboutP1: "We understand that a home is much more than four walls; it is the stage where your life is built. At Distrito 17, we combine a decade of real estate expertise with a deep-rooted knowledge of Villaverde to offer a service where transparency and proximity are the foundation of every transaction.",
    aboutP2: "Our team of advisors doesn't just manage assets; we manage dreams and future projects. We handle every detail of the process so you can focus on your next step, ensuring personalized solutions that turn market complexity into a secure and rewarding experience.",
  
    // Services
    whatWeOffer: "What We Offer",
    service1: "Free Property Valuation",
    service2: "Personalized Advisory",
    service3: "Rental Management",
    service4: "Inheritance Processing",
    service5: "100% Financing",
    service6: "Energy Certificates",
    service7: "Social Housing (VPO) Mgmt",
    more: "+ More",

    // reviews
    testimonialsTitle: "Hear From Our Clients",
    testimonialsHeading: "We believe that our clients' experiences speak volumes about the quality of our services. Here's what some of them have to say:",
    ctaHeading: "Thinking about selling or renting your property?",
    ctaSubheading: "Leave us your details and an expert advisor in Villaverde will provide a free, no-obligation valuation.",
  
    // Footer
    footerDesc: "Your trusted real estate agency in the heart of Villaverde.",
    footerPhone: "+34 617 378 073",
    footerMail: "se.71otirtsid@aloh",
    legal: "Legal Notice",
    privacy: "Privacy Policy",
    cookies: "Cookies",
    copyright: "Distrito 17 | Real estate advisors",
    copyright2: "© 2026 All rights reserved.",

    // 404
    errorTitle: "Page Not Found",
    errorSub: "It seems the address you are looking for is no longer available or has moved. Don't worry, let us help you find your way back.",
    errorCTA: "Back to Home",

    // Services page
    servicesHeroTitle: "Peace of mind starts with professional management.",
    servicesHeroSub: "A team of experts by your side to value your home, advise on financing, and manage every legal document. Your property is in good hands.",
    statsCol1: "years of experience",
    statsCol2: "families advised",
    statsCol3: "recommendations",
    sec3Title: "Ready to take the next step?",
    sec3Sub: "We can help.",
    sec3CtaTitle: "Want to know how much your home is worth today?",
    sec3CtaBtn: "Request free valuation",


    // services + desc
    service_1_label: "Personalized Guidance",
    service_1_desc: "Personal guidance from start to finish, answering your questions and protecting your interests at every step.",

    service_2_label: "Free Valuations",
    service_2_desc: "Discover the real market value of your home in Villaverde with a detailed report and no obligation.",

    service_3_label: "Energy Certificates",
    service_3_desc: "We handle your property's energy efficiency certificate, a mandatory requirement for selling or renting.",

    service_4_label: "Inheritance Management",
    service_4_desc: "We solve the most complex part: inheritances, awards, and registrations, making the sale possible and smooth.",

    service_5_label: "100% Financing",
    service_5_desc: "We help buyers secure the best mortgage, making it much easier and faster to sell your home.",

    service_6_label: "Rental Management",
    service_6_desc: "We find the ideal tenant and manage the contract so your investment is profitable and stress-free.",

    service_7_label: "Social Housing (VPO)",
    service_7_desc: "Experts in the technical and legal management of Social Housing (VPO): disqualifications, price caps, and permits.",

    service_8_label: "After-Sales Service",
    service_8_desc: "We don’t leave after the signing. We help with capital gains taxes, utilities, and any pending paperwork.",
    

    ///////////////////////////////////////////
    // reviewssss
    review_1_text: '"We were looking for a fast, hassle-free process, and Mario exceeded our expectations. Total transparency regarding fees and constant communication that gives you great peace of mind. Highly recommended in the area."',
    review_1_author: '— Elena R.',
    review_2_text: '"Flawless management in selling our home. It was our first time dealing with these procedures, and they made everything so easy from day one."',
    review_2_author: "— Miriam S.",
    review_3_text: '"Professional, approachable, and they handle all legal paperwork. They even solved issues that weren\'t their responsibility. Highly recommended."',
    review_3_author: "— Juan F.",
    review_4_text: '"Choosing Distrito 17 was a great decision. Goyo was helpful, efficient, and guided us with honesty throughout the entire process. A true professional!"',
    review_4_author: "— Sergio P.",
  }
};

// data-i18n="ctaCall"
