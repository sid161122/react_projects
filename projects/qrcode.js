import { useState } from "react";
import QRCode from "react-qr-code";

export default function App() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }
  return (
    <div>
      <h1>QR code </h1>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        name="qr-code"
        placeholder="enter"
      ></input>
      <button
        disabled={input && input.trim() !== "" ? false : true}
        onClick={handleGenerateQrCode}
      >
        Generate
      </button>

      <QRCode id="qr-code-value" size={400} value={qrCode} />
    </div>
  );
}
