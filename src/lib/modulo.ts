export function calcularModulo(cadena: string, modulo: number): string {
  if (!/[a-zA-Z]+/.test(cadena)) {
    throw new Error("Solo se permiten cadenas de letras sin espacios");
  }
  return cadena
    .split("")
    .map((letra) =>
      String.fromCharCode(
        validCharCodeDisplacement(letra.charCodeAt(0), modulo)
      )
    )
    .join("");
}

function validCharCodeDisplacement(charCode: number, modulo: number): number {
  if (modulo < 0 || modulo > 25) {
    throw new Error("Modulo invalido");
  }
  const newCode = charCode + modulo;
  if (charCode > 64 && charCode < 91) {
    if (newCode > 90) {
      return newCode - 90 + 65;
    }
    return newCode;
  }
  if (newCode > 122) {
    return newCode - 122 + 96;
  }
  return newCode;
}
