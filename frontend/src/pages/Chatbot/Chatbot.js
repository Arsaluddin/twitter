// ChatbotComponent.js
import React from 'react';
import ChatBot from 'react-simple-chatbot';
import ChatbotSteps from './ChatbotSteps';

const Chatbot = () => {

  const chatbotStyle = {
    width: '800px',
    height: '500px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
  };

  return (
    <div>
      <ChatBot
        style={chatbotStyle}
        steps={ChatbotSteps}
      />
    </div>
  );
};

export default Chatbot;
