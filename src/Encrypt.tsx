import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { calcularModulo } from "./lib/modulo";

export function EncryptView() {
  const [raw, setRaw] = useState("");
  const [mod, setMod] = useState(15);
  const [encrypted, setEncrypted] = useState<string | undefined>(undefined);

  const encrypt = () => {
    setEncrypted(calcularModulo(raw, mod));
  };

  return (
    <div className="bg-white p-4 rounded-md">
      <form
        className="flex flex-col gap-y-2"
        onSubmit={(e) => {
          e.preventDefault();
          encrypt();
        }}
      >
        <TextField
          label="Texto a encriptar"
          error={!/^[a-zA-Z]+$/.test(raw)}
          value={raw}
          onChange={(t) => setRaw(t.currentTarget.value)}
        ></TextField>
        <TextField
          label="Modulo de encripción"
          value={mod}
          error={mod < 0 || mod > 25}
          helperText={"El numero debe ser entre 0 y 25"}
          type="number"
          onChange={(t) => setMod(Number(t.currentTarget.value))}
        ></TextField>
        {encrypted && <p>Texto encriptado: {encrypted}</p>}
        <Button
          type="submit"
          disabled={!/^[a-zA-Z]+$/.test(raw)}
          onClick={encrypt}
        >
          Calcular
        </Button>
      </form>
    </div>
  );
}
