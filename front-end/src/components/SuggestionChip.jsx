import { motion } from 'framer-motion';


export const SuggestionChip = ({ text, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                 backdrop-blur-md border border-white/30 shadow-lg
                 transition-all duration-300 text-sm text-white font-medium
                 hover:shadow-2xl hover:border-white/50 hover:from-purple-500/30 hover:to-pink-500/30"
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};