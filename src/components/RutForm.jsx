import { useState } from "react";
import { cleanRut, validateRut } from "../utils/rut";

export default function RutForm({ onSubmit }) {
  const [rut, setRut] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const r = cleanRut(rut);
    if (!validateRut(r)) {
      setError("RUT inválido. Ej: 12345678-9");
      return;
    }
    setError("");
    onSubmit(r);
  };

  return (
    <div className="
    bg-white
    p-7
    rounded-3xl
    shadow-lg shadow-symBlue/10
    ring-1 ring-gray-200/70
    transition-transform duration-200
    hover:-translate-y-0.5
    hover:shadow-xl
  ">
      <h1 className="text-2xl font-bold text-symBlue">
        Revisa tus ofertas de pago
      </h1>
      <p className="text-gray-600 mt-2">
        Ingresa tu RUT para ver tu deuda total y las ofertas disponibles.
      </p>

      <div className="mt-5">
        <label className="text-sm text-gray-600">RUT</label>
        <input
          className="mt-1 border w-full p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-symOrange"
          placeholder="12345678-9"
          value={rut}
          onChange={(e) => setRut(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </div>

      <button
        onClick={handleSubmit}
        className="bg-symOrange text-white w-full py-3 mt-5 rounded-xl font-semibold hover:opacity-95"
      >
        Ver mis ofertas
      </button>

      <p className="text-xs text-gray-400 mt-4">
        * Mockup: la información mostrada es referencial. Serás redirigido a un
        sitio externo para pagar.
      </p>
    </div>
  );
}