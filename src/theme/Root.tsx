import React from 'react';
import Chatbot from '../components/chatbot/chat';

// This component wraps the entire Docusaurus app
// It ensures the Chatbot is persistent across all pages
export default function Root({ children }) {
    return (
        <>
            {children}
            <Chatbot />
        </>
    );
}
