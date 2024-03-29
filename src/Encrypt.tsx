import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { MAX_DISPLACEMENT, isValid, encrypt as modulo } from "./lib/modulo";
import { Clipboard } from "./Clipboard";

export function EncryptView() {
  const [raw, setRaw] = useState("");
  const [mod, setMod] = useState(15);
  const [encrypted, setEncrypted] = useState<string | undefined>(undefined);

  const encrypt = () => {
    const encrypted = modulo(raw, mod);
    setEncrypted(encrypted);
    console.log({ encrypted });
  };

  return (
    <form
      className="flex flex-col gap-y-2"
      onSubmit={(e) => {
        e.preventDefault();
        encrypt();
      }}
    >
      <TextField
        label="Texto a encriptar"
        error={!isValid(raw)}
        value={raw}
        onChange={(t) => setRaw(t.currentTarget.value)}
      ></TextField>
      <TextField
        label="Modulo de encripción"
        value={mod}
        error={mod < 0 || mod >= MAX_DISPLACEMENT}
        helperText={`El numero debe ser entre 0 y ${MAX_DISPLACEMENT}`}
        type="number"
        onChange={(t) => setMod(Number(t.currentTarget.value))}
      ></TextField>
      {encrypted && <Clipboard>{encrypted}</Clipboard>}
      <Button
        type="submit"
        disabled={!isValid(raw) || mod < 0 || mod >= MAX_DISPLACEMENT}
        onClick={encrypt}
      >
        Calcular
      </Button>
    </form>
  );
}
