export const brand = {
  name: "JC BikerStore",
  city: "Santo Domingo, República Dominicana",
  phoneDisplay: "849-701-2127",
  phoneE164: "18497012127",
  whatsappUrl: "https://wa.me/18497012127",
  instagramUrl: "https://www.instagram.com/jc_bikerstore_rd/",
  mapsUrl:
    "https://www.google.com/maps/place/Jc+bikerstore+RD/@18.4418947,-69.9411025,17z",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=JC+BikerStore+RD,+Santo+Domingo&z=17&output=embed",
  scheduleLabel:
    "Lunes a Sábado: 10:00 AM a 7:00 PM · Domingos: Cerrado",
  formspreeDocs: "https://formspree.io/"
} as const;

export const brandTokens = {
  color: {
    orange: "#E85C0D",
    ember: "#FF8E4D",
    black: "#1A1A1A",
    coal: "#0B0B0B",
    steel: "#292929",
    smoke: "#B7B7B7",
    white: "#FFFFFF"
  },
  radius: {
    xl: "1.25rem",
    xxl: "2rem"
  },
  shadow: {
    glow: "0 20px 60px rgba(232, 92, 13, 0.24)",
    panel: "0 20px 50px rgba(0, 0, 0, 0.35)"
  }
} as const;

export function buildWhatsAppUrl(message: string) {
  return `${brand.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
