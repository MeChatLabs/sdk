import { useState } from "react";
import { connectWallet } from "../utils/wallet";
import ChatBox from "../components/ChatBox";
import MessageInput from "../components/MessageInput";

export default function Home() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleConnect = async () => {
    const wallet = await connectWallet();
    if (wallet) setUser(wallet.address);
  };

  const sendMessage = (text) => {
    const newMsg = {
      sender: user,
      text,
    };
    setMessages([...messages, newMsg]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>MeChat</h1>

      {!user ? (
        <button onClick={handleConnect}>Connect Wallet</button>
      ) : (
        <>
          <p>Connected: {user}</p>
          <ChatBox messages={messages} />
          <MessageInput onSend={sendMessage} />
        </>
      )}
    </div>
  );
}
