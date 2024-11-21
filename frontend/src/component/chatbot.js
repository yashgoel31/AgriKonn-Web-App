import { useState } from "react";
import { IoSend } from "react-icons/io5";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I assist you today?" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (userInput.trim()) {
      const userMessage = { sender: "user", text: userInput };
      setMessages([...messages, userMessage]);
      setUserInput("");

      try {
        setIsLoading(true);
        const botResponse = await getBotResponse(userInput);
        setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
      } catch (error) {
        console.error("Error fetching OpenAI response:", error);
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Sorry, something went wrong. Please try again later." },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const getBotResponse = async (input) => {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
        max_tokens: 100,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("OpenAI API Error:", errorData);
      throw new Error(errorData.error?.message || "Failed to fetch response from OpenAI");
    }

    const data = await res.json();
    return data.choices[0]?.message?.content || "Sorry, I couldn't understand that.";
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbot Icon */}
      <button
        onClick={handleToggle}
        className="bg-blue-600 text-white rounded-full p-4 shadow-lg focus:outline-none"
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-xl rounded-lg flex flex-col">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg text-lg font-bold">
            AgriKonn Assistant
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  msg.sender === "bot"
                    ? "text-left text-gray-700"
                    : "text-right text-blue-600"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && <div className="text-gray-500">Typing...</div>}
          </div>
          <div className="p-4 flex">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-l-lg p-2 focus:outline-none"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type your message..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700"
            >
              <IoSend size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
