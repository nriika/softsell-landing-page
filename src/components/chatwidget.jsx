import React, { useState } from 'react';
import logo from '../assets/logoss.png'; // Make sure path is correct

const exampleQuestions = [
  'How do I sell my license?',
  'What types of licenses are accepted?',
  'How long does payment take?',
];

const mockReplies = {
  'how do i sell my license': 'You can sell your license by filling out the contact form. We will get back to you shortly.',
  'what types of licenses are accepted': 'We accept antivirus, design, development tools, and other popular software licenses.',
  'how long does payment take': 'Payment is typically processed within 1–2 business days after verification.',
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleQuestionClick = (question) => {
    const newMessages = [...messages, { role: 'user', content: question }];
    setMessages(newMessages);
    setLoading(true);

    setTimeout(() => {
      const lower = question.toLowerCase();
      const reply = Object.keys(mockReplies).find(q => lower.includes(q))
        ? mockReplies[Object.keys(mockReplies).find(q => lower.includes(q))]
        : "I'm sorry, I don't understand the question. Please try asking something else.";

      setMessages([...newMessages, { role: 'assistant', content: reply }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-2">
        {!open && (
          <div className="bg-white text-blue-600 text-xs px-3 py-1 rounded shadow-md animate-fade-in">
            Ask us anything!
          </div>
        )}
        <button
          onClick={() => setOpen(!open)}
          className="bg-black p-3 rounded-full shadow-xl hover:bg-white transition transform hover:scale-110 animate-bounce-slow"
        >
          <img src={logo} alt="Chat Logo" className="h-8 w-8" />
        </button>
      </div>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-24 right-4 w-80 bg-white border shadow-xl rounded-lg p-4 text-sm z-50 animate-fade-in">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-blue-600">Ask SoftSell</h3>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-red-400 text-lg">&times;</button>
          </div>

          <div className="h-40 overflow-y-auto mb-3 border border-gray-100 p-2 rounded bg-gray-50">
            {messages.length === 0 && (
              <p className="text-gray-500 italic text-sm text-center">Select a question below to get started</p>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`mb-1 ${msg.role === 'user' ? 'text-right' : 'text-left text-gray-600'}`}>
                <p><strong>{msg.role === 'user' ? 'You' : 'Bot'}:</strong> {msg.content}</p>
              </div>
            ))}
          </div>

          {/* Suggested Questions */}
          <div className="grid gap-2 mb-2">
            {exampleQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleQuestionClick(q)}
                className="w-full text-left px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded transition text-sm"
                disabled={loading}
              >
                {q}
              </button>
            ))}
          </div>

          <p className="text-xs text-gray-400 text-center">Click a question to get an instant reply</p>
        </div>
      )}
    </>
  );
}

