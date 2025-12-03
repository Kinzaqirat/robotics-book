import React from 'react';
import ChatbotWrapper from '../components/ChatWrapper';

// This component wraps the entire Docusaurus app
// It ensures the Chatbot is persistent across all pages
export default function Root({ children }) {
    return (
        <>
            {children}
            <ChatbotWrapper />
        </>
    );
}
