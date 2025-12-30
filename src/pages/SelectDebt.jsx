export default function SelectDebt({ debt, onContinue, onBack }) {
  if (!debt) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-3xl shadow-sm border p-6">
          <h2 className="text-xl font-bold text-symBlue">No hay deuda seleccionada</h2>
          <p className="text-gray-600 mt-2">
            Vuelve al listado y selecciona una deuda para continuar.
          </p>
          <button
            onClick={onBack}
            className="mt-5 rounded-xl border bg-white px-5 py-3 font-semibold text-symBlue hover:bg-gray-50 transition"
          >
            Volver
          </button>
        </div>
      </main>
    );
  }

  const pct = Math.round((1 - debt.offer / debt.original) * 100);

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      {/* Step header */}
      <div className="mb-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-gray-500">Paso 2 de 3</p>
            <h2 className="text-2xl font-extrabold tracking-tight text-symBlue">
              Selecciona la deuda a normalizar
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
          <div className="h-full w-2/3 bg-gradient-to-r from-symOrange to-symBlue" />
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border overflow-hidden">
        <div className="p-6 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-gray-900 truncate">
                  {debt.creditor}
                </h3>
                <span className="text-xs bg-symOrange/10 text-symOrange px-2.5 py-1 rounded-full font-semibold">
                  -{pct}%
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Confirma los montos y continúa al resumen de pago.
              </p>
            </div>

            <div className="text-xs text-gray-500">
              <span className="inline-flex items-center gap-2 rounded-full border bg-gray-50 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-green-500" /> Oferta activa
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-5">
              <p className="text-sm text-gray-500">Deuda original</p>
              <p className="mt-1 text-2xl font-extrabold text-gray-900">
                ${debt.original.toLocaleString("es-CL")}
              </p>
            </div>

            <div className="rounded-2xl bg-green-50 border border-green-200 p-5">
              <p className="text-sm text-green-700">Oferta (monto a pagar)</p>
              <p className="mt-1 text-2xl font-extrabold text-green-800">
                ${debt.offer.toLocaleString("es-CL")}
              </p>
              <p className="mt-2 text-sm text-green-800/80">
                Ahorro: ${(debt.original - debt.offer).toLocaleString("es-CL")}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border bg-gray-50 p-5">
            <p className="text-sm font-semibold text-gray-900">Antes de continuar</p>
            <ul className="mt-2 text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Verás un resumen final antes de ir al portal de pagos.</li>
              <li>Serás redirigido a un sitio externo (ticnova.cl).</li>
              <li>Este flujo es un mockup demostrativo.</li>
            </ul>
          </div>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
            <button
                onClick={onBack}
                className="rounded-2xl border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-800 hover:bg-gray-50 transition"
            >
                Volver al listado
            </button>

            <button
                onClick={onContinue}
                className="rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 transition"
            >
                Continuar
            </button>
            </div>

          <p className="mt-5 text-xs text-gray-400">
            * Mockup: la información mostrada es referencial.
          </p>
        </div>
      </div>
    </main>
  );
}