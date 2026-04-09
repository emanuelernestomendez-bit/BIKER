import {
  HandMetal as HandMetalIcon,
  HardHat,
  MessageCircle,
  Radio,
  ShieldCheck,
  UserRound,
  Wrench
} from "lucide-react";

import { brand, buildWhatsAppUrl } from "@/lib/brand";

export const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/contacto", label: "Contacto" },
  { href: "/nosotros", label: "Nosotros" }
];

export const homeGateway = [
  {
    title: "Servicios",
    description: "Todo lo que resolvemos para tu moto.",
    href: "/servicios",
    image: "/images/catalogo-ig-2026/jcbikerstore_producto_08_rodillera-scoyco-negra.png",
    icon: ShieldCheck
  },
  {
    title: "Catálogo",
    description: "Explora productos reales del inventario actual.",
    href: "/catalogo",
    image: "/images/catalogo-ig-2026/jcbikerstore_producto_01_cascos-mt.png",
    icon: HardHat
  },
  {
    title: "Contacto",
    description: "Ubicación, horarios y formulario directo.",
    href: "/contacto",
    image: "/images/about-store.png",
    icon: MessageCircle
  },
  {
    title: "Quiénes Somos",
    description: "Historia, misión y esencia de la tienda.",
    href: "/nosotros",
    image: "/images/hero-rider.png",
    icon: UserRound
  }
];

export const products = [
  {
    name: "Casco MT Full Face",
    category: "Cascos",
    description: "Acabado negro mate con acentos naranjas y presencia deportiva.",
    serviceDescription:
      "Casco MT full-face para riders que quieren protección, presencia y look deportivo en calle.",
    image: "/images/catalogo-ig-2026/jcbikerstore_producto_01_cascos-mt.png",
    availability: "Disponible",
    price: "RD$8,800",
    accent: "MT",
    icon: HardHat,
    cta: buildWhatsAppUrl(
      "Hola JC BikerStore, quiero consultar el casco MT Full Face."
    )
  },
  {
    name: "Pasa Montaña con Filtro",
    category: "Protección",
    description: "Balaclava negra con filtro integrado para uso diario rider.",
    serviceDescription:
      "Protección ligera para rodar con más comodidad, filtro frontal y ajuste limpio al rostro.",
    image: "/images/catalogo-ig-2026/jcbikerstore_producto_02_pasa-montana.png",
    availability: "Disponible",
    price: "RD$400",
    accent: "Filtro integrado",
    icon: ShieldCheck,
    cta: buildWhatsAppUrl(
      "Hola JC BikerStore, quiero consultar el pasa montaña con filtro."
    )
  },
  {
    name: "Estribos Universal Negro",
    category: "Repuestos",
    description: "Par en metal negro con look técnico y grip marcado.",
    serviceDescription:
      "Estribos universales negros con presencia agresiva y apoyo firme para uso diario.",
    image: "/images/catalogo-ig-2026/jcbikerstore_producto_03_estribos-universal-negro.png",
    availability: "Disponible",
    price: "RD$1,050",
    accent: "Par universal",
    icon: Wrench,
    cta: buildWhatsAppUrl(
      "Hola JC BikerStore, quiero consultar los estribos universal negro."
    )
  },
  {
    name: "Piernera Impermeable Negra",
    category: "Accesorios",
    description: "Bolso de pierna impermeable para setup urbano y funcional.",
    serviceDescription:
      "Piernera impermeable negra para llevar lo esencial con seguridad y acceso rápido.",
    image: "/images/catalogo-ig-2026/jcbikerstore_producto_04_piernera-impermeable-negra.png",
    availability: "Disponible",
    price: "RD$1,350",
    accent: "Impermeable",
    icon: HandMetalIcon,
    cta: buildWhatsAppUrl(
      "Hola JC BikerStore, quiero consultar la piernera impermeable negra."
    )
  },
  {
    name: "Direccionales Universal",
    category: "Direccionales",
    description: "Par de direccionales universales con lente ámbar y cuerpo negro.",
    serviceDescription:
      "Direccionales universales en varios modelos para resolver iluminación y presencia visual.",
    image: "/images/catalogo-ig-2026/jcbikerstore_producto_05_direccionales-universal.png",
    availability: "Disponible",
    price: "RD$750 - RD$900",
    accent: "Varios modelos",
    icon: Radio,
    cta: buildWhatsAppUrl(
      "Hola JC BikerStore, quiero consultar las direccionales universal."
    )
  },
  {
    name: "Base para Teléfono / GPS",
    category: "Soportes",
    description: "Base negra para manillar con look robusto y limpio.",
    serviceDescription:
      "Base para teléfono o GPS con agarre firme para trayectos urbanos y uso diario.",
    image: "/images/catalogo-ig-2026/jcbikerstore_producto_06_base-telefono-gps.png",
    availability: "Disponible",
    price: "RD$650",
    accent: "Holder base",
    icon: Radio,
    cta: buildWhatsAppUrl(
      "Hola JC BikerStore, quiero consultar la base para teléfono o GPS."
    )
  },
  {
    name: "Protector de Goma Palanca de Cambio",
    category: "Repuestos",
    description: "Protector compacto de goma con textura marcada y look técnico.",
    serviceDescription:
      "Protector de goma para palanca de cambio, pequeño pero útil para cuidar el calzado y mejorar el tacto.",
    image: "/images/catalogo-ig-2026/jcbikerstore_producto_07_protector-goma-palanca-cambio.png",
    availability: "Disponible",
    price: "RD$350",
    accent: "Detalle esencial",
    icon: Wrench,
    cta: buildWhatsAppUrl(
      "Hola JC BikerStore, quiero consultar el protector de goma para palanca de cambio."
    )
  },
  {
    name: "Rodillera Scoyco Negra",
    category: "Protección",
    description: "Protección articulada negra con presencia premium y ajuste firme.",
    serviceDescription:
      "Rodillera Scoyco negra con carcasa articulada y perfil premium para riders que priorizan protección.",
    image: "/images/catalogo-ig-2026/jcbikerstore_producto_08_rodillera-scoyco-negra.png",
    availability: "Disponible",
    price: "RD$3,500",
    accent: "Scoyco",
    icon: ShieldCheck,
    cta: buildWhatsAppUrl(
      "Hola JC BikerStore, quiero consultar la rodillera Scoyco negra."
    )
  },
  {
    name: "Mofletas",
    category: "Repuestos",
    description: "Par de cubiertas negras para mofler con acabado limpio y agresivo.",
    serviceDescription:
      "Mofletas en negro con presencia fuerte para mejorar el look del escape y cerrar el setup.",
    image: "/images/catalogo-ig-2026/jcbikerstore_producto_09_mofletas.png",
    availability: "Disponible",
    price: "RD$3,800",
    accent: "Par disponible",
    icon: Wrench,
    cta: buildWhatsAppUrl(
      "Hola JC BikerStore, quiero consultar las mofletas."
    )
  },
  {
    name: "Protectores de Puños con Luces",
    category: "Direccionales",
    description: "Guardas con luz direccional integrada en versiones blanca y roja.",
    serviceDescription:
      "Protectores de puños con luces direccionales integradas, disponibles en blanco y rojo.",
    image: "/images/catalogo-ig-2026/jcbikerstore_producto_10_protectores-punos-luces-direccionales.png",
    availability: "Disponible",
    price: "RD$1,500",
    accent: "Blanco / rojo",
    icon: Radio,
    cta: buildWhatsAppUrl(
      "Hola JC BikerStore, quiero consultar los protectores de puños con luces direccionales."
    )
  },
  {
    name: "Soporte de Teléfono / GPS",
    category: "Soportes",
    description: "Holder completo con cradle visible para rutas y entregas.",
    serviceDescription:
      "Soporte completo para teléfono o GPS con agarre visible y opción de envío disponible.",
    image: "/images/catalogo-ig-2026/jcbikerstore_producto_11_soporte-telefono-gps-envios.png",
    availability: "Disponible con envíos",
    price: "RD$650",
    accent: "Con envíos",
    icon: Radio,
    cta: buildWhatsAppUrl(
      "Hola JC BikerStore, quiero consultar el soporte de teléfono o GPS con envío."
    )
  }
];

export const services = products.map((product) => ({
  title: product.name,
  description: product.serviceDescription,
  price: product.price,
  availability: product.availability,
  icon: product.icon,
  cta: product.cta
}));

export const productCategories = [
  "Todos",
  "Cascos",
  "Protección",
  "Repuestos",
  "Direccionales",
  "Soportes",
  "Accesorios"
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
  "La tienda reúne cascos, accesorios, repuestos y protección en un mismo punto.",
  "Cada consulta busca una recomendación útil, realista y alineada al uso del cliente."
];

export const aboutGallery = [
  {
    title: "Local",
    description: "Ambiente de tienda y selección visual de producto.",
    image: "/images/about-store.png"
  },
  {
    title: "Comunidad",
    description: "La energía rider que inspira la marca.",
    image: "/images/hero-rider.png"
  }
];

export const contactHighlights = [
  {
    title: "Teléfono",
    value: brand.phoneDisplay,
    href: `tel:${brand.phoneE164}`
  },
  {
    title: "WhatsApp",
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
    title: "Dirección",
    value: brand.city,
    href: brand.mapsUrl
  }
];

export const seoKeywords = [
  "JC BikerStore",
  "tienda de motos en Santo Domingo",
  "cascos MT RD",
  "accesorios para motos República Dominicana",
  "repuestos para motos Santo Domingo",
  "equipos para riders RD"
];

export const footerLinks = [
  { label: "Instagram", href: brand.instagramUrl },
  { label: "Google Maps", href: brand.mapsUrl },
  {
    label: "WhatsApp",
    href: buildWhatsAppUrl("Hola JC BikerStore, quiero recibir asistencia directa.")
  }
];

export const contactFormDefaults = {
  name: "",
  phone: "",
  message: ""
};

export const catalogIntro = {
  eyebrow: "Nuestros productos",
  title: "Inventario real organizado para consulta rápida.",
  description:
    "Filtra por categoría y abre WhatsApp con el producto exacto para confirmar disponibilidad."
};
