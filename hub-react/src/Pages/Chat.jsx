import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const res = await fetch("/api/openai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    setReply(data.reply);
  };

  return (
    <div>
      <h1>AI Chat</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      ></textarea>

      <button onClick={sendMessage}>Send</button>

      {reply && <p><b>AI:</b> {reply}</p>}
    </div>
  );
}
