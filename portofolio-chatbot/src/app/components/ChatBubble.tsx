import React, { useState, FormEvent } from "react";
import { useChat } from "ai/react";

const ChatBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const handleMessageSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <>
      <div
        className={`fixed bottom-4 right-4 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="bg-blue-500 text-white p-2 rounded-t-lg flex justify-between items-center">
          <span>Chat</span>
          <button onClick={() => setIsOpen(false)}>&times;</button>
        </div>
        <div className="flex-1 p-2 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className="mb-2">
              <strong>{message.role}:</strong> {message.content}
            </div>
          ))}
        </div>
        <form
          onSubmit={handleMessageSubmit}
          className="p-2 border-t border-gray-300"
        >
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Type a message..."
          />
          <button type="submit" className="hidden">
            Send
          </button>
        </form>
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg"
      >
        Chat
      </button>
    </>
  );
};

export default ChatBubble;
