import { useState } from "react";
import Header from "./components/Header";
import RutForm from "./components/RutForm";
import Dashboard from "./pages/Dashboard";
import SelectDebt from "./pages/SelectDebt";
import PaymentSummary from "./pages/PaymentSummary";
import banner from "./assets/banner.png";
import { mockDebts } from "./data/mockDebts";

export default function App() {
  const [rut, setRut] = useState("");
  const [debts, setDebts] = useState(null);

  // Flow steps
  // 0: landing (no debts loaded)
  // 1: dashboard (lista de ofertas)
  // 2: seleccionar/confirmar deuda
  // 3: resumen + redirección
  const [step, setStep] = useState(1);
  const [selectedDebt, setSelectedDebt] = useState(null);

  const handleRut = (r) => {
    setRut(r);
    setDebts(mockDebts[r] || mockDebts.default || []);
    setSelectedDebt(null);
    setStep(1);
  };

  const reset = () => {
    setRut("");
    setDebts(null);
    setSelectedDebt(null);
    setStep(1);
  };

  const goToSelect = (debt) => {
    setSelectedDebt(debt);
    setStep(2);
  };

  const goToSummary = () => {
    setStep(3);
  };

  const backToDashboard = () => {
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f7f8ff] to-[#f6f7fb]">
      <Header />

      {!debts ? (
        <main className="max-w-6xl mx-auto px-4 py-10">
          {/* Banner full bleed */}
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12">
            <img
              src={banner}
              alt="Banner portal de pagos"
              className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* HERO */}
            <div className="rounded-3xl border bg-white shadow-sm overflow-hidden">
              <div className="p-7">
                <div className="inline-flex items-center gap-2 rounded-full border bg-gray-50 px-3 py-1 text-xs text-gray-600">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Ofertas disponibles para normalización
                </div>

                <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-symBlue">
                  Normaliza tus deudas en un solo lugar
                </h1>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  Visualiza tu <b>deuda total</b>, revisa <b>ofertas con descuento</b> y
                  continúa al pago en un sitio seguro de la entidad correspondiente.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-2xl border bg-white p-4">
                    <p className="text-sm font-semibold text-gray-800">Consolidado</p>
                    <p className="text-xs text-gray-500 mt-1">por acreedor</p>
                  </div>
                  <div className="rounded-2xl border bg-white p-4">
                    <p className="text-sm font-semibold text-gray-800">Ahorro</p>
                    <p className="text-xs text-gray-500 mt-1">estimado por oferta</p>
                  </div>
                  <div className="rounded-2xl border bg-white p-4">
                    <p className="text-sm font-semibold text-gray-800">Redirección</p>
                    <p className="text-xs text-gray-500 mt-1">directa a pago</p>
                  </div>
                </div>

                <div className="mt-7 rounded-3xl bg-gradient-to-r from-[#072746] via-[#0b3c6d] to-[#041a2f] p-6 sm:p-7 text-white shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-9 w-9 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center">
                      <span className="text-base font-bold">i</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold">¿Cómo funciona?</p>
                      <p className="text-sm text-white/95 mt-1">
                        En 4 pasos podrás revisar tus ofertas y continuar al portal de pagos.
                      </p>
                    </div>
                  </div>

                  <ol className="mt-4 text-sm space-y-1 list-decimal list-inside text-white">
                    <li>Ingresas tu RUT</li>
                    <li>Ves tus ofertas por acreedor</li>
                    <li>Seleccionas la deuda a normalizar</li>
                    <li>Presionas “Ir al portal de pagos” (ticnova.cl)</li>
                  </ol>

                  <div className="mt-5 rounded-2xl bg-black/30 px-4 py-3">
                    <p className="text-xs text-white/85">
                      Nota: Este portal es un <b>mockup</b>. La información es referencial.
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-xs text-gray-400">
                  * Mockup: la información mostrada es referencial.
                </p>
              </div>
            </div>

            {/* FORM */}
            <RutForm onSubmit={handleRut} />
          </div>

          <footer className="max-w-6xl mx-auto px-1 pt-10 text-xs text-gray-400">
            © {new Date().getFullYear()} S&M Recover — Mockup Portal de Pagos
          </footer>
        </main>
      ) : step === 1 ? (
        <Dashboard
          rut={rut}
          debts={debts}
          onBack={reset}
          onSelectDebt={goToSelect}
        />
      ) : step === 2 ? (
        <SelectDebt
          debt={selectedDebt}
          onBack={backToDashboard}
          onContinue={goToSummary}
        />
      ) : (
        <PaymentSummary debt={selectedDebt} onBack={backToDashboard} />
      )}
    </div>
  );
}