import banner from "../assets/banner.png";

export default function PaymentSummary({ debt, onBack }) {
  if (!debt) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-3xl shadow-sm border p-6">
          <h2 className="text-xl font-bold text-symBlue">No hay información para resumir</h2>
          <p className="text-gray-600 mt-2">
            Vuelve al listado y selecciona una deuda para continuar.
          </p>
          <button
            onClick={onBack}
            className="mt-5 rounded-2xl border bg-white px-5 py-3 font-semibold text-symBlue hover:bg-gray-50 transition"
          >
            Volver
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-8 sm:py-10">
      {/* Step header */}
      <div className="mb-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-gray-500">Paso 3 de 3</p>
            <h2 className="text-2xl font-extrabold tracking-tight text-symBlue">
              Resumen de normalización
            </h2>
          </div>
          <button
            onClick={onBack}
            className="rounded-2xl border bg-white px-4 py-2 font-semibold text-symBlue hover:bg-gray-50 transition"
          >
            Volver
          </button>
        </div>

        <div className="mt-4 h-2 rounded-full bg-gray-200 overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-symOrange to-symBlue" />
        </div>
      </div>

      {/* Banner */}
      <div className="rounded-3xl overflow-hidden border bg-white shadow-sm">
        <img
          src={banner}
          alt="Banner portal de pagos"
          className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover block"
        />
      </div>

      {/* Summary card */}
      <div className="mt-6 bg-white rounded-3xl shadow-sm border p-6 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500">Acreedor</p>
            <p className="text-lg font-bold text-gray-900">{debt.creditor}</p>
          </div>

          <div className="text-xs text-gray-500">
            <span className="inline-flex items-center gap-2 rounded-full border bg-gray-50 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-green-500" /> Listo para pagar
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-gray-50 border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Deuda original</p>
            <p className="mt-1 text-xl font-extrabold text-gray-900">
              ${debt.original.toLocaleString("es-CL")}
            </p>
          </div>

          <div className="rounded-2xl bg-green-50 border border-green-200 p-5">
            <p className="text-sm text-green-700">Monto a pagar</p>
            <p className="mt-1 text-xl font-extrabold text-green-800">
              ${debt.offer.toLocaleString("es-CL")}
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Ahorro</p>
            <p className="mt-1 text-xl font-extrabold text-symBlue">
              ${(debt.original - debt.offer).toLocaleString("es-CL")}
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border bg-gray-50 p-5">
          <p className="text-sm font-semibold text-gray-900">Importante</p>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Al continuar, serás redirigido a un sitio externo (<b>ticnova.cl</b>) para
            completar el pago. Este portal es un mockup demostrativo.
          </p>
        </div>

        <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
          <button
            onClick={onBack}
            className="rounded-2xl border bg-white px-5 py-3 font-semibold text-symBlue hover:bg-gray-50 transition"
          >
            Volver
          </button>

          <a
            href="https://ticnova.cl"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white hover:opacity-95 transition text-center"
          >
            Ir al portal de pagos
          </a>
        </div>

        <p className="mt-5 text-xs text-gray-400">
          * Mockup: la información mostrada es referencial.
        </p>
      </div>
    </main>
  );
}
