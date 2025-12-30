export function cleanRut(input) {
  return (input || "").trim().replace(/\./g, "").toLowerCase();
}

export function validateRut(rut) {
  rut = cleanRut(rut);
  const parts = rut.split("-");
  if (parts.length !== 2) return false;

  const body = parts[0];
  const dv = parts[1];

  if (!/^\d+$/.test(body)) return false;
  if (!/^[0-9k]$/.test(dv)) return false;

  let sum = 0;
  let mul = 2;
  for (let i = body.length - 1; i >= 0; i--) {
    sum += parseInt(body[i], 10) * mul;
    mul = mul === 7 ? 2 : mul + 1;
  }

  const mod = 11 - (sum % 11);
  const dvCalc = mod === 11 ? "0" : mod === 10 ? "k" : String(mod);

  return dv === dvCalc;
}