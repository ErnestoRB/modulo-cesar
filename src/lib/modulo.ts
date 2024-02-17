const abecedary = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "{",
  "|",
  "}",
  "~",
  "ü",
  "é",
  "á",
  "í",
  "ó",
  "ú",
  "ñ",
  "Ñ",
  "Á",
  "É",
  "Í",
  "Ó",
  "Ú",
];

const orderedAbecedary = abecedary
  .map((s) => ({ char: s.charAt(0), code: s.charCodeAt(0) }))
  .sort((e) => e.code);

console.log(orderedAbecedary);

export const MAX_DISPLACEMENT = orderedAbecedary.length; // tamaño del arreglo

export function encrypt(text: string, module: number): string {
  return text.split("").reduce((prev, current) => {
    const index = orderedAbecedary.findIndex((v) => v.char === current);
    const nextChar =
      index + module >= MAX_DISPLACEMENT
        ? index + module - MAX_DISPLACEMENT
        : index + module;
    console.log(nextChar);

    return (prev += orderedAbecedary[nextChar].char);
  }, "");
}

export function decrypt(text: string, module: number): string {
  return text.split("").reduce((prev, current) => {
    const index = orderedAbecedary.findIndex((v) => v.char === current);
    const nextChar =
      index - module < 0 ? index - module + MAX_DISPLACEMENT : index - module;
    console.log(nextChar);

    return (prev += orderedAbecedary[nextChar].char);
  }, "");
}

export function isValid(text: string) {
  const set = new Set(text.split(""));
  for (const value of set) {
    if (!abecedary.includes(value)) {
      return false;
    }
  }
  return true;
}
