# JC BikerStore

Sitio oficial de `JC BikerStore`, una tienda de motocicletas, accesorios, repuestos y equipos para riders ubicada en Santo Domingo, República Dominicana.

## Stack

- Next.js App Router
- Tailwind CSS
- TypeScript
- Formspree vía `app/api/contact`
- Google Analytics 4 opcional por variable de entorno

## Estructura

- `app/`: rutas y API route del formulario
- `components/`: piezas reutilizables del sitio
- `lib/brand.ts`: tokens de marca, enlaces y helpers
- `lib/site.ts`: contenido de navegación, servicios, productos y copy
- `design-system/jc-bikerstore/MASTER.md`: fuente de verdad visual persistida desde `ui-ux-pro-max`

## Variables de entorno

Crear `.env.local` con:

```bash
FORMSPREE_ENDPOINT=https://formspree.io/f/TU_FORM_ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

`FORMSPREE_ENDPOINT` es necesaria para activar el formulario de contacto.

## Desarrollo

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Deploy

### Vercel

1. Importa el repositorio o carpeta.
2. Define `FORMSPREE_ENDPOINT` y opcionalmente `NEXT_PUBLIC_GA_ID`.
3. Deploy. Next.js se detecta automáticamente.

### Netlify

1. Crea un nuevo sitio desde Git.
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Define las mismas variables de entorno.

## Notas

- Todos los CTAs principales apuntan a WhatsApp.
- El catálogo filtra por categoría y cada producto genera un mensaje predefinido.
- El mapa de Google está embebido en la página de contacto.
- Las imágenes fuente quedaron en PNG dentro de `public/images/`, pero `next/image` las optimiza en runtime hacia formatos modernos en producción.
