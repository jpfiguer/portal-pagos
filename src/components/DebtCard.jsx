export default function DebtCard({ debt, onSelect }) {
  const pct = Math.round((1 - debt.offer / debt.original) * 100);

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row sm:items-stretch sm:justify-between gap-5">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <h3 className="font-bold text-lg text-gray-900 truncate">
              {debt.creditor}
            </h3>
            <span className="text-xs bg-symOrange/10 text-symOrange px-2.5 py-1 rounded-full font-semibold">
              -{pct}%
            </span>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3 max-w-md">
            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-3">
              <p className="text-xs text-gray-500">Deuda original</p>
              <p className="font-semibold text-gray-900">
                ${debt.original.toLocaleString("es-CL")}
              </p>
            </div>

            <div className="rounded-2xl bg-green-50 border border-green-200 p-3">
              <p className="text-xs text-green-700">Oferta</p>
              <p className="font-semibold text-green-800">
                ${debt.offer.toLocaleString("es-CL")}
              </p>
            </div>
          </div>

          <p className="mt-3 text-xs text-gray-500">
            Selecciona para continuar al resumen antes de ir al portal de pagos.
          </p>
        </div>

        <div className="flex flex-col items-end justify-between self-stretch sm:min-w-[230px]">
          <a
            href="https://ticnova.cl"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-symBlue font-semibold hover:underline"
          >
            Ver ayuda
          </a>

          <button
            onClick={() => onSelect?.()}
            className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-3 text-white font-semibold hover:bg-green-700 transition w-full sm:w-auto"
          >
            Normalizar esta deuda
          </button>
        </div>
      </div>
    </div>
  );
}