"use client";

import { MessageSquare } from "lucide-react";
import { useState, FormEvent, useRef } from "react";
import { useChat } from "ai/react";

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [isUploading, setIsUploading] = useState(false);

  const handleMessageSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
  };

  const [uploadStatus, setUploadStatus] = useState<{
    message: string;
    type: "info" | "success" | "error";
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // Check if it's a PDF
    if (file.type !== "application/pdf") {
      setUploadStatus({
        message: "Please upload a PDF file",
        type: "error",
      });
      return;
    }
    try {
      setIsUploading(true);
      setUploadStatus({
        message: `Uploading ${file.name}...`,
        type: "info",
      });
      const formData = new FormData();
      formData.append("pdf", file);
      const response = await fetch("/api/upload-pdf", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Upload failed");
      }
      const data = await response.json();
      setUploadStatus({
        message: `${file.name} uploaded successfully. You can now ask questions about this document.`,
        type: "success",
      });

      // handleSystemMessage(`PDF "${file.name}" has been processed and is ready for questions.`);
    } catch (error) {
      setUploadStatus({
        message: error instanceof Error ? error.message : "Upload failed",
        type: "error",
      });
    } finally {
      setIsUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat bubble button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        aria-label="Chat with AI"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {showTooltip && !isOpen && (
        <div className="absolute bottom-16 right-0 bg-popover text-popover-foreground px-3 py-1.5 rounded shadow-md text-sm whitespace-nowrap">
          Chat with AI
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
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
            {uploadStatus && (
              <div
                className={`mb-2 p-2 rounded ${
                  uploadStatus.type === "success"
                    ? "bg-green-100"
                    : uploadStatus.type === "error"
                    ? "bg-red-100"
                    : "bg-blue-100"
                }`}
              >
                {uploadStatus.message}
              </div>
            )}
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
              // color="black"
            />
            <button
              type="button"
              onClick={handleUploadClick}
              disabled={isUploading}
              className="ml-2 p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
              title="Upload PDF"
            >
              {isUploading ? "..." : "📎"}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf"
              onChange={handleFileUpload}
              className="hidden"
            />
            <button type="submit" className="hidden">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
