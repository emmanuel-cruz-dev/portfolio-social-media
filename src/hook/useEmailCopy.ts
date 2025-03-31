import { useState } from "react";

const useEmailCopy = () => {
  const email = "emmanuelgerr@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Restablece el estado después de 2 segundos
      })
      .catch((err) => {
        console.error("Error al copiar el email: ", err);
      });
  };

  return { copied, copyEmailToClipboard };
};

export default useEmailCopy;
