
import { currencyMask } from "Helpers/index";
import React, { InputHTMLAttributes, useCallback } from "react";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: "currency";
  prefix?: string;
}

const CurrencyInput = ({ mask, prefix, ...props }: InputProps) => {
  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === "currency") {
        currencyMask(e);
      }
    },
    [mask]
  );

  return (
    <div className="input-group prefix">
      <span className="prefix-span">R$</span>
      <input {...props} onKeyUp={handleKeyUp} />
    </div>
  );
};

export default CurrencyInput
