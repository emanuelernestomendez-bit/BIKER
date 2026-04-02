"use client";

import { FormEvent, useState } from "react";

import { buildWhatsAppUrl } from "@/lib/brand";
import { contactFormDefaults } from "@/lib/site";

type Status =
  | { type: "idle"; message: string }
  | { type: "loading"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function ContactForm() {
  const [formValues, setFormValues] = useState(contactFormDefaults);
  const [status, setStatus] = useState<Status>({
    type: "idle",
    message: "Responde en menos tiempo si agregas una referencia de moto o producto."
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "loading", message: "Enviando consulta..." });

    const payload = new FormData(event.currentTarget);
    const data = {
      name: String(payload.get("name") || "").trim(),
      phone: String(payload.get("phone") || "").trim(),
      message: String(payload.get("message") || "").trim(),
      company: String(payload.get("company") || "").trim()
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar la consulta.");
      }

      setFormValues(contactFormDefaults);
      event.currentTarget.reset();
      setStatus({
        type: "success",
        message: "Consulta enviada. Si prefieres resolver ahora, también puedes escribir por WhatsApp."
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Error al enviar la consulta.";
      setStatus({ type: "error", message });
    }
  }

  return (
    <form
      className="space-y-5 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-panel sm:p-8"
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-xs font-semibold uppercase tracking-[0.24em] text-white/72"
        >
          Nombre
        </label>
        <input
          id="name"
          name="name"
          required
          value={formValues.name}
          onChange={(event) =>
            setFormValues((current) => ({
              ...current,
              name: event.target.value
            }))
          }
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition duration-200 placeholder:text-white/28 focus:border-brand-orange"
          placeholder="Tu nombre"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="text-xs font-semibold uppercase tracking-[0.24em] text-white/72"
        >
          Teléfono
        </label>
        <input
          id="phone"
          name="phone"
          required
          inputMode="tel"
          value={formValues.phone}
          onChange={(event) =>
            setFormValues((current) => ({
              ...current,
              phone: event.target.value
            }))
          }
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition duration-200 placeholder:text-white/28 focus:border-brand-orange"
          placeholder="849-000-0000"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-xs font-semibold uppercase tracking-[0.24em] text-white/72"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formValues.message}
          onChange={(event) =>
            setFormValues((current) => ({
              ...current,
              message: event.target.value
            }))
          }
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition duration-200 placeholder:text-white/28 focus:border-brand-orange"
          placeholder="Cuéntanos qué necesitas: moto, casco, repuesto o accesorio."
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Empresa</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-brand-orange bg-brand-orange px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition duration-200 hover:bg-brand-ember disabled:cursor-wait disabled:opacity-80"
        disabled={status.type === "loading"}
      >
        {status.type === "loading" ? "Enviando..." : "Enviar consulta"}
      </button>

      <p
        className={[
          "text-sm leading-6",
          status.type === "success"
            ? "text-emerald-300"
            : status.type === "error"
              ? "text-red-300"
              : "text-white/58"
        ].join(" ")}
      >
        {status.message}{" "}
        {status.type === "error" ? (
          <a
            href={buildWhatsAppUrl(
              "Hola JC BikerStore, no pude enviar el formulario y quiero asistencia."
            )}
            className="underline underline-offset-4"
          >
            Ir a WhatsApp
          </a>
        ) : null}
      </p>
    </form>
  );
}
