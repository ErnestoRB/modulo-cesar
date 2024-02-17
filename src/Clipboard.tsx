import { Snackbar } from "@mui/material";
import React from "react";

export function Clipboard({ children }: { children: string }) {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={message}
      />
      <div
        onClick={() => {
          if (window.navigator.clipboard) {
            setMessage("Pegado al portapapeles!");
            window.navigator.clipboard.writeText(children);
          } else {
            setMessage("Tu navegador no soporta pegar al clipboard");
          }
          setOpen(true);
        }}
        className="relative border border-stone-300 rounded p-2"
      >
        <span className="absolute top-0 left-2 -translate-y-1/2 text-stone-500 text-xs select-none text-wrap">
          Resultado
        </span>
        <p className="overflow-break">{children}</p>
      </div>
    </>
  );
}
