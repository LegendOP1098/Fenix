import { motion } from 'framer-motion';
import { FaUserMd, FaUser } from 'react-icons/fa';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp: string;
}

export const ChatMessage = ({ message, isBot, timestamp }: ChatMessageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <div className={`flex ${isBot ? 'flex-row' : 'flex-row-reverse'} items-start max-w-[80%] group`}>
        <motion.div 
          className={`flex-shrink-0 ${isBot ? 'mr-3' : 'ml-3'} animate-float`}
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <div className={`w-10 h-10 rounded-xl ${
            isBot 
              ? 'bg-gradient-to-br from-purple-500 via-pink-500 to-red-500' 
              : 'bg-gradient-to-br from-blue-500 via-teal-500 to-green-500'
          } flex items-center justify-center text-white shadow-lg transform transition-all duration-300`}>
            {isBot ? <FaUserMd className="text-xl" /> : <FaUser className="text-xl" />}
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`
            message-bubble rounded-2xl p-4 shadow-lg
            ${isBot 
              ? 'bg-gradient-to-r from-purple-500/90 to-pink-500/90 text-white' 
              : 'bg-gradient-to-r from-blue-500/90 to-teal-500/90 text-white'}
            backdrop-blur-md
          `}
        >
          <p className="text-sm font-medium leading-relaxed">{message}</p>
          <span className="text-xs opacity-75 mt-2 block">{timestamp}</span>
        </motion.div>
      </div>
    </motion.div>
  );
};