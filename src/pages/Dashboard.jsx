import SummaryCard from "../components/SummaryCard";
import DebtCard from "../components/DebtCard";

export default function Dashboard({ rut, debts, onBack, onSelectDebt }) {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <p className="text-xs text-gray-500">RUT</p>
          <p className="text-lg font-semibold text-gray-900">{rut}</p>
        </div>

        <button
          onClick={onBack}
          className="inline-flex items-center justify-center rounded-2xl border bg-white px-4 py-2 font-semibold text-symBlue hover:bg-gray-50 transition w-full sm:w-auto"
        >
          Cambiar RUT
        </button>
      </div>

      <div className="mb-6">
        <SummaryCard debts={debts} />
      </div>

      <div className="grid gap-4">
        {debts.map((d, i) => (
          <DebtCard
            key={i}
            debt={d}
            onSelect={() => onSelectDebt?.(d)}
          />
        ))}
      </div>

      <footer className="pt-10 text-xs text-gray-400">
        © {new Date().getFullYear()} S&M Recover — Mockup Portal de Pagos
      </footer>
    </main>
  );
}