export default function SummaryCard({ debts }) {
  const total = debts.reduce((a, d) => a + d.original, 0);
  const offer = debts.reduce((a, d) => a + d.offer, 0);
  const savings = total - offer;

  return (
    <div className="bg-white border rounded-2xl p-5 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <p className="text-sm text-gray-500">Deuda total</p>
          <p className="text-xl font-bold text-symBlue">
            ${total.toLocaleString("es-CL")}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Con descuento</p>
          <p className="text-xl font-bold">
            ${offer.toLocaleString("es-CL")}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Ahorro estimado</p>
          <p className="text-xl font-bold text-green-600">
            ${savings.toLocaleString("es-CL")}
          </p>
        </div>
      </div>
    </div>
  );
}