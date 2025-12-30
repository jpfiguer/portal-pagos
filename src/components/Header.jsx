import logo from "../assets/logo-smrecover.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
          {/* MOBILE: logo + whatsapp icon */}
          <div className="flex items-center justify-between sm:hidden">
            <img src={logo} alt="S&M Recover" className="h-10 w-auto" />

            <a
              href="https://wa.me/56900000000"
              target="_blank"
              rel="noreferrer"
              aria-label="Contáctanos por WhatsApp"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-green-500 bg-green-50 text-green-700 hover:bg-green-100 transition"
            >
              {/* WhatsApp icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M20.52 3.48A11.82 11.82 0 0012.05 0C5.42 0 .05 5.37.05 12c0 2.12.55 4.2 1.6 6.03L0 24l6.16-1.62A11.9 11.9 0 0012.05 24C18.68 24 24.05 18.63 24.05 12a11.82 11.82 0 00-3.53-8.52zM12.05 21.9c-1.98 0-3.92-.53-5.61-1.54l-.4-.24-3.66.96.98-3.57-.26-.41a9.83 9.83 0 01-1.5-5.22c0-5.44 4.42-9.87 9.87-9.87 2.64 0 5.12 1.03 6.99 2.9a9.8 9.8 0 012.88 6.97c0 5.45-4.43 9.87-9.87 9.87zm5.41-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.41-1.5-.89-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.19-.24-.58-.49-.5-.66-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.11 3.22 5.12 4.51.72.31 1.29.5 1.73.64.73.23 1.4.2 1.93.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
              </svg>
            </a>
          </div>

          {/* MOBILE: centered title below */}
          <div className="mt-2 text-center sm:hidden">
            <h1 className="text-xl font-semibold tracking-tight text-symBlue">
              Portal de <span className="font-bold">Normalización</span>
            </h1>
            <div className="mx-auto mt-1 h-1 w-10 rounded-full bg-symBlue" />
            <p className="mt-1 text-sm font-medium text-symOrange">
              Consulta tus ofertas y continúa al pago
            </p>
          </div>

          {/* DESKTOP/TABLET: 3 columns */}
          <div className="hidden sm:grid grid-cols-3 items-center">
            {/* Left: logo */}
            <div className="flex items-center">
              <img src={logo} alt="S&M Recover" className="h-12 w-auto" />
            </div>

            {/* Center: title */}
            <div className="text-center relative [animation:fadeIn_0.4s_ease-out]">
              <h1 className="text-2xl font-semibold tracking-tight text-symBlue">
                Portal de <span className="font-bold">Normalización</span>
              </h1>
              <div className="mx-auto mt-1 h-1 w-12 rounded-full bg-symBlue" />
              <p className="mt-1 text-sm font-medium text-symOrange">
                Consulta tus ofertas y continúa al pago
              </p>
            </div>

            {/* Right: WhatsApp */}
            <div className="flex justify-end">
              <a
                href="https://wa.me/56900000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-green-500 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 hover:bg-green-100 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M20.52 3.48A11.82 11.82 0 0012.05 0C5.42 0 .05 5.37.05 12c0 2.12.55 4.2 1.6 6.03L0 24l6.16-1.62A11.9 11.9 0 0012.05 24C18.68 24 24.05 18.63 24.05 12a11.82 11.82 0 00-3.53-8.52zM12.05 21.9c-1.98 0-3.92-.53-5.61-1.54l-.4-.24-3.66.96.98-3.57-.26-.41a9.83 9.83 0 01-1.5-5.22c0-5.44 4.42-9.87 9.87-9.87 2.64 0 5.12 1.03 6.99 2.9a9.8 9.8 0 012.88 6.97c0 5.45-4.43 9.87-9.87 9.87zm5.41-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.41-1.5-.89-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.19-.24-.58-.49-.5-.66-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.11 3.22 5.12 4.51.72.31 1.29.5 1.73.64.73.23 1.4.2 1.93.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                </svg>
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}