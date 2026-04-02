import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    name?: string;
    phone?: string;
    message?: string;
    company?: string;
  };

  const name = body.name?.trim();
  const phone = body.phone?.trim();
  const message = body.message?.trim();
  const honeypot = body.company?.trim();

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !phone || !message) {
    return NextResponse.json(
      { error: "Completa nombre, teléfono y mensaje." },
      { status: 400 }
    );
  }

  const endpoint = process.env.FORMSPREE_ENDPOINT;

  if (!endpoint) {
    return NextResponse.json(
      {
        error:
          "Falta la variable FORMSPREE_ENDPOINT. Configúrala para activar el formulario."
      },
      { status: 500 }
    );
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name,
      phone,
      message,
      source: "jc-bikerstore-web"
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "No se pudo enviar la consulta. Intenta de nuevo." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
