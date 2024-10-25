import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

interface ChatInputProps {
  onSend: (message: string) => void;
}

export const ChatInput = ({ onSend }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full px-6 py-4 bg-white/10 text-white placeholder-white/60
                   backdrop-blur-md rounded-xl shadow-lg
                   focus:outline-none focus:ring-2 focus:ring-white/50
                   transition-all duration-300"
        placeholder="Type your health question..."
      />
      <motion.button
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        type="submit"
        className="absolute right-4 top-1/2 -translate-y-1/2
                   w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 
                   rounded-xl flex items-center justify-center text-white 
                   shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        <FaPaperPlane className="text-sm" />
      </motion.button>
    </form>
  );
};