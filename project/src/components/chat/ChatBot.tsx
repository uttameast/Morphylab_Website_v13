import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface Message {
  type: 'bot' | 'user';
  content: string;
}

interface UserInfo {
  name: string;
  email: string;
  phone: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState<'name' | 'email' | 'phone' | 'query'>('name');
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', email: '', phone: '' });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          type: 'bot',
          content: 'Hello! I am your AI assistant. I can help you learn more about our data archival solutions. First, could you please tell me your name?'
        }
      ]);
    }
  }, [isOpen]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^[\d\s\(\)\-\+]+$/.test(phone);
  };

  const getQueryResponse = (query: string): string => {
    const q = query.toLowerCase();
    
    if (q.includes('security') || q.includes('secure')) {
      return 'Our solutions offer enterprise-grade security with end-to-end encryption, advanced access controls, and compliance with major security standards including HIPAA and GDPR.';
    }
    
    if (q.includes('price') || q.includes('cost')) {
      return 'Our pricing is customized based on your specific needs and data volume. I can have our sales team prepare a detailed quote for you. Would you like that?';
    }
    
    if (q.includes('backup') || q.includes('recovery')) {
      return 'We provide comprehensive backup and disaster recovery solutions with rapid recovery capabilities, geo-redundant storage options, and 24/7 support to ensure business continuity.';
    }
    
    if (q.includes('cloud') || q.includes('storage')) {
      return 'Our cloud-based archival solutions offer scalable storage with advanced security features, global accessibility, and seamless integration with existing systems.';
    }
    
    if (q.includes('ai') || q.includes('analytics')) {
      return 'Our AI-powered analytics provide intelligent insights from your archived data, including pattern recognition, anomaly detection, and predictive analytics capabilities.';
    }
    
    if (q.includes('compliance') || q.includes('regulatory')) {
      return 'We ensure compliance with major regulatory standards including HIPAA, GDPR, and SOC 2. Our solutions include audit trails, access controls, and comprehensive compliance reporting.';
    }
    
    return 'I understand you\'re interested in learning more about that. Would you like me to have our team contact you with detailed information about our solutions?';
  };

  const handleUserInput = async () => {
    if (!currentInput.trim()) return;

    const userMessage: Message = { type: 'user', content: currentInput };
    setMessages(prev => [...prev, userMessage]);
    setCurrentInput('');
    setIsLoading(true);

    let botResponse: Message = { type: 'bot', content: '' };

    switch (currentStep) {
      case 'name':
        setUserInfo(prev => ({ ...prev, name: currentInput }));
        botResponse.content = `Nice to meet you, ${currentInput}! Could you please share your email address?`;
        setCurrentStep('email');
        break;

      case 'email':
        if (validateEmail(currentInput)) {
          setUserInfo(prev => ({ ...prev, email: currentInput }));
          botResponse.content = 'Great! And your phone number, please?';
          setCurrentStep('phone');
        } else {
          botResponse.content = 'That does not look like a valid email address. Could you please try again?';
        }
        break;

      case 'phone':
        if (validatePhone(currentInput)) {
          setUserInfo(prev => ({ ...prev, phone: currentInput }));
          botResponse.content = 'Thank you! How can I help you today? Feel free to ask about our data archival solutions, security features, or any other services.';
          setCurrentStep('query');
          
          try {
            await emailjs.send(
              import.meta.env.VITE_EMAILJS_SERVICE_ID,
              import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
              {
                to_email: 'info@morphylab.com',
                from_name: userInfo.name,
                from_email: userInfo.email,
                phone_number: currentInput,
                message: 'New chatbot interaction'
              },
              import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
          } catch (error) {
            console.error('Failed to send email:', error);
          }
        } else {
          botResponse.content = 'That does not look like a valid phone number. Could you please try again?';
        }
        break;

      case 'query':
        botResponse.content = getQueryResponse(currentInput);
        break;
    }

    setTimeout(() => {
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleUserInput();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 h-[32rem] bg-white rounded-lg shadow-xl flex flex-col">
          <div className="bg-purple-600 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">MorphyLab Assistant</h3>
            <p className="text-sm text-purple-100">Ask me anything about our services</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <Loader2 className="h-5 w-5 animate-spin text-purple-600" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-md focus:outline-none focus:border-purple-600"
              />
              <button
                onClick={handleUserInput}
                disabled={isLoading || !currentInput.trim()}
                className="bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition-colors disabled:opacity-50"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}