import {
  Bike,
  CircleDot,
  HandMetal,
  HardHat,
  MapPinned,
  Radio,
  ShieldCheck,
  Wrench
} from "lucide-react";

import { brand, buildWhatsAppUrl } from "@/lib/brand";

export const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" }
];

export const heroStats = [
  { label: "Ciudad", value: "Santo Domingo, RD" },
  { label: "Horario", value: "L-S / 10AM - 7PM" },
  { label: "Instagram", value: "@jc_bikerstore_rd" }
];

export const serviceCategories = [
  {
    title: "Motos",
    description: "Modelos urbanos y de trabajo listos para rodar.",
    href: "/catalogo?categoria=Motos",
    icon: Bike
  },
  {
    title: "Cascos",
    description: "Protección con ajuste, ventilación y presencia premium.",
    href: "/catalogo?categoria=Cascos",
    icon: HardHat
  },
  {
    title: "Guantes",
    description: "Grip, confort y seguridad para el ritmo diario.",
    href: "/catalogo?categoria=Guantes",
    icon: HandMetal
  },
  {
    title: "Repuestos",
    description: "Piezas clave para mantener tu moto fina y confiable.",
    href: "/catalogo?categoria=Repuestos",
    icon: Wrench
  },
  {
    title: "Accesorios",
    description: "Detalles que suben tu setup y tu comodidad.",
    href: "/catalogo?categoria=Accesorios",
    icon: Radio
  },
  {
    title: "Equipamiento",
    description: "Chaquetas, protección y extras para rider serio.",
    href: "/catalogo?categoria=Ropa",
    icon: ShieldCheck
  }
];

export const services = [
  {
    title: "Venta de motocicletas",
    description:
      "Opciones pensadas para ciudad, trabajo y riders que buscan presencia y rendimiento.",
    details: "Asesoría directa para elegir la moto correcta según tu uso.",
    icon: Bike,
    cta: buildWhatsAppUrl(
      "Hola JC BikerStore, quiero información sobre las motocicletas disponibles."
    )
  },
  {
    title: "Accesorios para rider",
    description:
      "Intercoms, soportes, luces, maleteros y piezas para personalizar tu máquina.",
    details: "Montamos una selección funcional, visual y lista para el día a día.",
    icon: Radio,
    cta: buildWhatsAppUrl(
      "Hola JC BikerStore, quiero consultar accesorios para mi moto."
    )
  },
  {
    title: "Repuestos y mantenimiento básico",
    description:
      "Consumibles y piezas de recambio para mantener la moto confiable en calle.",
    details: "Te ayudamos a ubicar la referencia correcta sin perder tiempo.",
    icon: Wrench,
    cta: buildWhatsAppUrl(
      "Hola JC BikerStore, necesito repuestos para mi moto."
    )
  },
  {
    title: "Equipos de seguridad",
    description:
      "Cascos, guantes, protectores y equipo esencial para rodar con criterio.",
    details: "Protección que se siente bien y luce al nivel de tu moto.",
    icon: ShieldCheck,
    cta: buildWhatsAppUrl(
      "Hola JC BikerStore, quiero cotizar equipos de seguridad."
    )
  }
];

export const products = [
  {
    name: "Casco Torque Street",
    category: "Cascos",
    description: "Diseño agresivo, visor amplio y ventilación urbana.",
    image: "/images/catalog-helmet.png",
    accent: "Protección premium"
  },
  {
    name: "Guantes Grip Control",
    category: "Guantes",
    description: "Refuerzos táctiles y palma firme para uso diario.",
    image: "/images/catalog-gloves.png",
    accent: "Rider diario"
  },
  {
    name: "Kit de transmisión Pro Chain",
    category: "Repuestos",
    description: "Respuesta sólida y desgaste optimizado para uso frecuente.",
    image: "/images/catalog-parts.png",
    accent: "Listo para trabajo"
  },
  {
    name: "Soporte móvil Road Lock",
    category: "Accesorios",
    description: "Fijación firme y lectura rápida de ruta o entregas.",
    image: "/images/catalog-accessories.png",
    accent: "Setup limpio"
  },
  {
    name: "Chaqueta Night Run",
    category: "Ropa",
    description: "Corte técnico, paneles ventilados y actitud de calle.",
    image: "/images/catalog-gear.png",
    accent: "Estilo + seguridad"
  },
  {
    name: "Moto Urban Force 150",
    category: "Motos",
    description: "Ágil para Santo Domingo y lista para la jornada completa.",
    image: "/images/catalog-moto.png",
    accent: "Movilidad inteligente"
  },
  {
    name: "Casco Rapid Visor",
    category: "Cascos",
    description: "Perfil compacto con sello visual deportivo.",
    image: "/images/catalog-helmet.png",
    accent: "Visión amplia"
  },
  {
    name: "Slider Protection Set",
    category: "Accesorios",
    description: "Protección funcional para el uso diario y la ciudad.",
    image: "/images/catalog-accessories.png",
    accent: "Más confianza"
  },
  {
    name: "Guantes Asphalt Mesh",
    category: "Guantes",
    description: "Respirables y precisos para recorridos largos en calor.",
    image: "/images/catalog-gloves.png",
    accent: "Confort en ruta"
  }
];

export const productCategories = [
  "Todos",
  "Motos",
  "Cascos",
  "Guantes",
  "Repuestos",
  "Accesorios",
  "Ropa"
];

export const instagramCards = [
  {
    title: "Nuevos ingresos",
    description: "Revisa drops, combos y lo último que llegó al piso.",
    image: "/images/about-store.png"
  },
  {
    title: "Vida rider",
    description: "La energía de la calle, la comunidad y el equipamiento correcto.",
    image: "/images/hero-rider.png"
  },
  {
    title: "Setup y detalle",
    description: "Accesorios y repuestos con presencia y utilidad real.",
    image: "/images/catalog-accessories.png"
  }
];

export const values = [
  {
    title: "Calidad",
    description: "Seleccionamos piezas y equipos que sí aguantan el ritmo."
  },
  {
    title: "Pasión",
    description: "Entendemos la moto como herramienta, estilo y comunidad."
  },
  {
    title: "Servicio",
    description: "Atención ágil, clara y directa por tienda o WhatsApp."
  },
  {
    title: "Comunidad rider",
    description: "Queremos una tienda que sume a la cultura motera local."
  }
];

export const storyPoints = [
  "Nacimos en Santo Domingo para atender a riders que necesitan resolver rápido y bien.",
  "Nuestra propuesta mezcla motos, accesorios, repuestos y protección en un mismo punto.",
  "Cada consulta busca una recomendación honesta, útil y ajustada al uso real del cliente."
];

export const faqs = [
  {
    question: "¿Puedo consultar disponibilidad por WhatsApp?",
    answer:
      "Sí. Todos los CTAs del sitio te llevan directo a WhatsApp para cotizar y confirmar disponibilidad."
  },
  {
    question: "¿Trabajan con horarios fijos?",
    answer:
      "Sí. Abrimos de lunes a sábado de 10:00 AM a 7:00 PM y domingos permanecemos cerrados."
  },
  {
    question: "¿Dónde están ubicados?",
    answer:
      `Estamos en ${brand.city}. En la página de contacto tienes el mapa embebido y el enlace directo a Google Maps.`
  }
];

export const contactHighlights = [
  {
    title: "WhatsApp directo",
    value: brand.phoneDisplay,
    href: buildWhatsAppUrl(
      "Hola JC BikerStore, quiero hacer una consulta sobre productos y servicios."
    )
  },
  {
    title: "Instagram",
    value: "@jc_bikerstore_rd",
    href: brand.instagramUrl
  },
  {
    title: "Ubicación",
    value: brand.city,
    href: brand.mapsUrl
  }
];

export const seoKeywords = [
  "JC BikerStore",
  "tienda de motos en Santo Domingo",
  "cascos para motoristas RD",
  "accesorios para motos República Dominicana",
  "repuestos para motos Santo Domingo",
  "equipos para riders RD"
];

export const footerLinks = [
  {
    label: "WhatsApp",
    href: buildWhatsAppUrl("Hola JC BikerStore, quiero recibir asistencia directa.")
  },
  { label: "Instagram", href: brand.instagramUrl },
  { label: "Google Maps", href: brand.mapsUrl }
];

export const contactFormDefaults = {
  name: "",
  phone: "",
  message: ""
};

export const catalogIntro = {
  eyebrow: "Catálogo orientado a consulta",
  title: "Productos para rodar, protegerte y mantener tu moto en forma.",
  description:
    "Usa los filtros para explorar categorías y envíanos la referencia por WhatsApp para confirmar precio y disponibilidad."
};

export const homeHighlights = [
  {
    title: "Horario visible",
    copy: "Siempre claro para que no pierdas el viaje.",
    icon: CircleDot
  },
  {
    title: "Atención rápida",
    copy: "Cotiza directo por WhatsApp sin formularios eternos.",
    icon: ShieldCheck
  },
  {
    title: "Ubicación precisa",
    copy: "Santo Domingo, con acceso directo desde Google Maps.",
    icon: MapPinned
  }
];
