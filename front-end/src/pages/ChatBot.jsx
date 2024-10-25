import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChatMessage } from '../components/ChatMessage';
import { TypingIndicator } from '../components/TypingIndicator';
import { SuggestionChip } from '../components/SuggestionChip';
import { ChatInput } from '../components/ChatInput';


export function ChatBot(){
      const suggestions = [
            "What are common cold symptoms?",
            "How to maintain good mental health?",
            "Daily exercise recommendations",
            "Healthy diet tips"
          ];
        
        
          const [messages, setMessages] = useState([
            { 
              text: "👋 Hello! I'm your healthcare assistant. How can I help you today?", 
              isBot: true, 
              timestamp: new Date().toLocaleTimeString() 
            }
        
          ]);
          const [isTyping, setIsTyping] = useState(false);
          const messagesEndRef = useRef(null);
        
          const handleSend = (message) => {
            const newMessage = {
              text: message,
              isBot: false,
              timestamp: new Date().toLocaleTimeString()
            };
            
            setMessages(prev => [...prev, newMessage]);
            setIsTyping(true);
            
            setTimeout(() => {
              const response = findResponse(message);
              setIsTyping(false);
              setMessages(prev => [...prev, {
                text: response,
                isBot: true,
                timestamp: new Date().toLocaleTimeString()
              }]);
            }, 1500 + Math.random() * 1000);
          };
        
      return (
            <div className=" min-h-screen flex items-center justify-center p-4 w-screen" >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container max-w-4xl h-[800px] glass-morphism rounded-3xl 
                   flex flex-col overflow-hidden relative"
      >
        <div className="p-6 bg-white/10 backdrop-blur-md border-b border-white/20">
          <motion.h1 
            className="text-3xl font-bold text-white mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Healthcare Assistant
          </motion.h1>
          <motion.p 
            className="text-white/80"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Your 24/7 health companion 🏥
          </motion.p>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, idx) => (
            <ChatMessage
              key={idx}
              message={msg.text}
              isBot={msg.isBot}
              timestamp={msg.timestamp}
            />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 flex gap-2 overflow-x-auto bg-white/5">
          {suggestions.map((suggestion, idx) => (
            <SuggestionChip
              key={idx}
              text={suggestion}
              onClick={() => handleSend(suggestion)}
            />
          ))}
        </div>
        <div className="p-4 bg-white/10 backdrop-blur-md">
          <ChatInput onSend={handleSend} />
        </div>
      </motion.div>
    </div> 
      )
}
