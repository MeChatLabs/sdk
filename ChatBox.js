export default function ChatBox({ messages }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, height: 300 }}>
      {messages.map((msg, index) => (
        <div key={index}>
          <strong>{msg.sender.slice(0, 6)}:</strong> {msg.text}
        </div>
      ))}
    </div>
  );
}
