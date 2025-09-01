import React, { useState } from 'react';
import './Chat.css';

interface Message {
  role: string;
  content: string;
  id?: string;
}

export const Chat: React.FC = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const callGenie = async (messages: Message[]) => {
    console.log('Calling Genie API with messages:', messages);
    
    try {
      const res = await fetch("https://genie-app2.azurewebsites.net/api/http_trigger_chris", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "messages": messages }),
      });

      console.log('Response status:', res.status);
      console.log('Response headers:', res.headers);

      if (!res.ok) {
        const errorText = await res.text();
        console.error('API Error Response:', errorText);
        throw new Error(`Genie call failed: ${res.status} - ${errorText}`);
      }

      const responseData = await res.json();
      console.log('API Response data:', responseData);
      return responseData;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: inputMessage,
      id: Date.now().toString()
    };

    // Add user message to chat
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await callGenie(updatedMessages);
      
      // Extract the message from the API response structure
      let assistantContent = 'No response received';
      
      console.log('Full API response:', response);
      console.log('Response predictions:', response.predictions);
      
      if (response.predictions && response.predictions.messages) {
        // The API returns an array of messages, take the last one
        const messages = response.predictions.messages;
        console.log('Messages array:', messages);
        
        if (Array.isArray(messages) && messages.length > 0) {
          const lastMessage = messages[messages.length - 1];
          console.log('Last message:', lastMessage);
          
          // Handle different message formats
          if (typeof lastMessage === 'string') {
            assistantContent = lastMessage;
          } else if (lastMessage && typeof lastMessage === 'object' && lastMessage.content) {
            assistantContent = lastMessage.content;
          } else {
            assistantContent = JSON.stringify(lastMessage);
          }
        }
      } else if (response.response) {
        assistantContent = typeof response.response === 'string' ? response.response : JSON.stringify(response.response);
      } else if (response.content) {
        assistantContent = typeof response.content === 'string' ? response.content : JSON.stringify(response.content);
      }
      
      console.log('Final assistant content:', assistantContent);
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: assistantContent,
        id: (Date.now() + 1).toString()
      };

      setMessages([...updatedMessages, assistantMessage]);
    } catch (error) {
      console.error('Error calling Genie API:', error);
      
      let errorMessage = 'Sorry, I encountered an error. Please try again.';
      
      if (error instanceof Error) {
        if (error.message.includes('Failed to fetch')) {
          errorMessage = 'Network error: Unable to connect to the server. Please check your internet connection.';
        } else if (error.message.includes('404')) {
          errorMessage = 'API endpoint not found. Please check the URL configuration.';
        } else if (error.message.includes('500')) {
          errorMessage = 'Server error: The API is experiencing issues. Please try again later.';
        } else if (error.message.includes('403')) {
          errorMessage = 'Access denied: The API requires authentication.';
        } else {
          errorMessage = `Error: ${error.message}`;
        }
      }
      
      const errorResponse: Message = {
        role: 'assistant',
        content: errorMessage,
        id: (Date.now() + 1).toString()
      };
      setMessages([...updatedMessages, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h3>Chat with Chris</h3>
        <p>Ask me anything about my work, skills, or projects!</p>
      </div>
      
      <div className="chat-messages">
        {messages.length === 0 && (
          <div className="chat-placeholder">
            <p>👋 Hi! I'm Chris. Feel free to ask me about my experience, projects, or anything else!</p>
          </div>
        )}
        
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`message ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}
          >
            <div className="message-content">
              {message.content}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="message assistant-message">
            <div className="message-content">
              <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="chat-input-container">
        <textarea
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message here..."
          disabled={isLoading}
          rows={1}
        />
        <button 
          onClick={handleSendMessage}
          disabled={isLoading || !inputMessage.trim()}
          className="send-button"
        >
          Send
        </button>
      </div>
    </div>
  );
};
