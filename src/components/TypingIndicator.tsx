import { motion } from 'framer-motion';

export const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-2 p-4 max-w-[100px] 
                    rounded-xl typing-bubble">
      {[0, 1, 2].map((dot) => (
        <motion.div
          key={dot}
          className="w-3 h-3 bg-white rounded-full"
          animate={{
            y: ["0%", "-50%", "0%"],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: dot * 0.2,
          }}
        />
      ))}
    </div>
  );
};