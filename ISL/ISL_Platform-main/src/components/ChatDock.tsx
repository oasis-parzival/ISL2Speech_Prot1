import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Languages, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot' | 'system';
    timestamp: Date;
}

const LANGUAGES = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'Hindi' },
    { code: 'mr', name: 'Marathi' },
    { code: 'gu', name: 'Gujarati' },
];

const INITIAL_MESSAGES: Record<string, string> = {
    en: "Hello! I'm your ISL assistant. How can I help you today?",
    hi: "नमस्ते! मैं आपका ISL सहायक हूं। मैं आपकी कैसे मदद कर सकता हूं?",
    mr: "नमस्कार! मी तुमचा ISL सहाय्यक आहे. मी तुम्हाला कशी मदत करू शकतो?",
    gu: "नमस्ते! मैं तमारो ISL सहायक छु. हु तमारी शु मदद करी शकु?",
};



const ChatDock = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [selectedLang, setSelectedLang] = useState('en');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const [isTyping, setIsTyping] = useState(false);

    // Initialize welcome message
    useEffect(() => {
        if (messages.length === 0) {
            setMessages([{
                id: 'init',
                text: INITIAL_MESSAGES[selectedLang],
                sender: 'bot',
                timestamp: new Date()
            }]);
        }
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, isTyping]);

    const handleSendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const userText = inputValue;
        const newUserMsg: Message = {
            id: Date.now().toString(),
            text: userText,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newUserMsg]);
        setInputValue("");
        setIsTyping(true);

        // Prepare context for the AI
        const systemPrompt = `You are SignBridge Assistant, a helpful AI for a web platform that translates Indian Sign Language (ISL) to text/speech and vice versa using AI.
        
        Platform Features:
        - Real-time ISL to Text using camera
        - Text to ISL speech synthesis
        - Multi-language support (English, Hindi, Marathi, Gujarati)
        - Accessibility focused design
        
        Your role:
        - Help users understand how to use the specific features.
        - Explain how ISL translation works (computer vision identifying landmarks).
        - Be friendly, encouraging, and concise.
        - IF asked about languages, confirm we support EN, HI, MR, GU.
        - Current user language is: ${LANGUAGES.find(l => l.code === selectedLang)?.name}. Respond in this language if possible, or English.
        `;

        const apiMessages = [
            { role: 'system', content: systemPrompt },
            ...messages.filter(m => m.sender !== 'system').map(m => ({
                role: m.sender === 'user' ? 'user' : 'assistant',
                content: m.text
            })),
            { role: 'user', content: userText }
        ];

        try {
            // Dynamic import to avoid issues if file doesn't exist yet in some environments, though we just created it.
            const { chatWithGroq } = await import('../lib/api');

            const responseText = await chatWithGroq(apiMessages as any);

            const newBotMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: responseText,
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, newBotMsg]);
        } catch (error) {
            const errorMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: "I'm having trouble connecting. Please check your internet or API configuration.",
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsTyping(false);
        }
    };

    const changeLanguage = (langCode: string) => {
        setSelectedLang(langCode);
        setMessages(prev => [...prev, {
            id: Date.now().toString(),
            text: `Language changed to ${LANGUAGES.find(l => l.code === langCode)?.name}`,
            sender: 'system',
            timestamp: new Date()
        } as Message]);

        // Add welcome message in new language
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                text: INITIAL_MESSAGES[langCode],
                sender: 'bot',
                timestamp: new Date()
            }]);
        }, 500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: 20, scale: 0.95, filter: 'blur(10px)' }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
                        className="mb-4 w-[380px] bg-graphite-950/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col ring-1 ring-white/5"
                        style={{ maxHeight: '650px', height: '70vh' }}
                    >
                        {/* Header with Grain and Gradient */}
                        <div className="relative p-5 bg-gradient-to-b from-white/5 to-transparent border-b border-white/5 flex items-center justify-between z-10">
                            <div className="flex items-center gap-3.5">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-silver-400 to-silver-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-silver-500/20">
                                        AI
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-graphite-950 rounded-full flex items-center justify-center border border-white/10">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white text-base tracking-tight">SignBridge Assistant</h3>
                                    <p className="text-xs text-grey-400 flex items-center gap-1.5 font-medium">
                                        Online &bull; Ready to help
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1">
                                {/* Language Selector */}
                                <div className="relative group">
                                    <button className="p-2 hover:bg-white/10 rounded-xl text-grey-400 hover:text-white transition-all">
                                        <Languages size={18} strokeWidth={1.5} />
                                    </button>
                                    <div className="absolute right-0 top-full mt-2 w-36 bg-graphite-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl p-1.5 hidden group-hover:block z-50 origin-top-right animate-in fade-in zoom-in-95 duration-150">
                                        {LANGUAGES.map(lang => (
                                            <button
                                                key={lang.code}
                                                onClick={() => changeLanguage(lang.code)}
                                                className={cn(
                                                    "w-full text-left px-3 py-2.5 rounded-lg text-xs font-medium transition-all group/lang flex items-center justify-between",
                                                    selectedLang === lang.code
                                                        ? "bg-silver-500/10 text-silver-400"
                                                        : "text-grey-400 hover:bg-white/5 hover:text-white"
                                                )}
                                            >
                                                {lang.name}
                                                {selectedLang === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-silver-400 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/10 rounded-xl text-grey-400 hover:text-white transition-all"
                                >
                                    <X size={18} strokeWidth={1.5} />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area - Graphite background */}
                        <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className={cn(
                                        "flex flex-col max-w-[85%]",
                                        msg.sender === 'user' ? "self-end items-end" : "self-start items-start",
                                        msg.sender === 'system' ? "self-center items-center w-full !max-w-full" : ""
                                    )}
                                >
                                    {msg.sender === 'system' ? (
                                        <span className="text-[10px] font-medium text-grey-500 bg-white/5 px-3 py-1 rounded-full border border-white/5 tracking-wide uppercase">{msg.text}</span>
                                    ) : (
                                        <>
                                            <div
                                                className={cn(
                                                    "px-5 py-3.5 shadow-sm text-[13.5px] leading-relaxed relative group",
                                                    msg.sender === 'user'
                                                        ? "bg-gradient-to-br from-silver-500 to-silver-600 text-white rounded-[20px] rounded-tr-sm shadow-silver-500/10 shadow-lg"
                                                        : "bg-white/5 backdrop-blur-md text-grey-100 border border-white/5 rounded-[20px] rounded-tl-sm shadow-lg hover:bg-white/10 transition-colors"
                                                )}
                                            >
                                                {msg.text}
                                            </div>
                                            <span className="text-[10px] text-grey-600 mt-1.5 px-1 font-medium select-none opacity-0 group-hover:opacity-100 transition-opacity">
                                                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </>
                                    )}
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex bg-white/5 self-start rounded-[20px] rounded-tl-sm border border-white/5 px-5 py-4"
                                >
                                    <div className="flex gap-1.5">
                                        {[0, 1, 2].map((dot) => (
                                            <motion.div
                                                key={dot}
                                                className="w-1.5 h-1.5 bg-grey-400 rounded-full"
                                                animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 1, repeat: Infinity, delay: dot * 0.2 }}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-graphite-950/50 backdrop-blur-md border-t border-white/5">
                            <form onSubmit={handleSendMessage} className="relative flex items-center gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask anything about ISL..."
                                    className="flex-1 bg-white/5 text-white placeholder:text-grey-600 text-sm px-4 py-3.5 rounded-2xl border border-white/5 focus:outline-none focus:border-silver-500/50 focus:bg-white/10 focus:ring-1 focus:ring-silver-500/20 transition-all font-medium"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="absolute right-2 p-2 bg-gradient-to-tr from-silver-500 to-silver-400 hover:from-silver-400 hover:to-silver-300 disabled:opacity-0 disabled:scale-75 text-white rounded-xl transition-all shadow-lg shadow-silver-500/20"
                                >
                                    <Send size={16} strokeWidth={2.5} className="ml-0.5" />
                                </button>
                            </form>
                            <p className="text-[10px] text-center text-grey-700 mt-3 font-medium tracking-wide">
                                Powered by AI &bull; May produce inaccuracies
                            </p>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                layout
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "pointer-events-auto h-16 w-16 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-xl border border-white/10",
                    isOpen
                        ? "bg-graphite-900/80 text-grey-400 hover:text-white shadow-xl"
                        : "bg-gradient-to-br from-silver-500 to-silver-700 text-white shadow-[0_0_40px_-5px_rgba(255,255,255,0.15)] ring-4 ring-silver-500/10"
                )}
            >
                {isOpen ? (
                    <ChevronDown size={32} strokeWidth={1.5} />
                ) : (
                    <MessageCircle size={30} strokeWidth={1.5} fill="currentColor" className="text-white/20" />
                )}
                {!isOpen && (
                    <MessageCircle size={30} strokeWidth={1.5} className="absolute text-white" />
                )}
            </motion.button>
        </div>
    );
};

export default ChatDock;
