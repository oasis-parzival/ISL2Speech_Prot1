import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Volume2, Camera, Play, Pause, ArrowLeftRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import useWebSocket from 'react-use-websocket';

const Translator = () => {
    const { t } = useLanguage();
    const [isCapturing, setIsCapturing] = useState(false);
    const [detectedSign, setDetectedSign] = useState<string>("Ready to begin");
    const [confidence, setConfidence] = useState<number>(0);
    const [transcript, setTranscript] = useState<string[]>([]);
    const [isListening, setIsListening] = useState(false);
    const [mode, setMode] = useState<'isl-to-text' | 'text-to-isl'>('isl-to-text');

    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const requestRef = useRef<number | null>(null);

    // WebSocket Setup
    const { sendMessage, lastJsonMessage } = useWebSocket('ws://localhost:8000/ws/predict', {
        shouldReconnect: () => true,
        reconnectAttempts: 10,
        reconnectInterval: 3000,
        share: true
    });

    // Handle WebSocket Responses
    useEffect(() => {
        if (lastJsonMessage) {
            const data = lastJsonMessage as any;

            // Update Prediction
            if (data.prediction) {
                setDetectedSign(data.prediction);
                setConfidence(data.confidence);
            }
        }
    }, [lastJsonMessage]);

    const speakHandler = (text: string) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = "en-IN";
            window.speechSynthesis.speak(utterance);
        }
    };

    const toggleListening = () => {
        setIsListening(!isListening);
        if (!isListening) {
            setTimeout(() => {
                setTranscript(prev => [...prev, "How are you today?"]);
                setIsListening(false);
            }, 2200);
        }
    };

    const captureFrame = useCallback(() => {
        if (!videoRef.current || !canvasRef.current || !isCapturing) return;

        const video = videoRef.current;
        const canvas = canvasRef.current;

        if (video.readyState === video.HAVE_ENOUGH_DATA) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                const base64 = canvas.toDataURL('image/jpeg', 0.8);
                sendMessage(base64);
            }
        }

        if (isCapturing) {
            requestRef.current = requestAnimationFrame(captureFrame);
        }
    }, [isCapturing, sendMessage]);

    // Start/Stop Logic
    useEffect(() => {
        if (isCapturing) {
            requestRef.current = requestAnimationFrame(captureFrame);
        } else {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        }
    }, [isCapturing, captureFrame]);

    // Cleanup video on unmount
    useEffect(() => {
        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
                tracks.forEach(track => track.stop());
            }
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    const startSession = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
            setIsCapturing(true);
            setDetectedSign("Ready");
        } catch (err) {
            console.error("Error accessing camera:", err);
            setDetectedSign("Camera Error");
        }
    };

    const stopSession = () => {
        setIsCapturing(false);
        setDetectedSign(t.translatorPage.sessionPaused);
        setConfidence(0);

        if (videoRef.current && videoRef.current.srcObject) {
            const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
            tracks.forEach(track => track.stop());
            videoRef.current.srcObject = null;
        }
    };

    return (
        <div className="min-h-screen bg-graphite-950 text-white pt-24">
            {/* Header */}
            <header className="border-b border-graphite-800 bg-graphite-950">
                <div className="container mx-auto px-6 py-5 flex items-center justify-between max-w-[1600px]">
                    <div>
                        <h1 className="text-lg font-semibold tracking-tight">{t.translatorPage.title}</h1>
                        <p className="text-sm text-grey-500 mt-0.5">{t.translatorPage.subtitle}</p>
                    </div>

                    <button
                        onClick={() => setMode(mode === 'isl-to-text' ? 'text-to-isl' : 'isl-to-text')}
                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-graphite-900 hover:bg-graphite-800 transition-colors border border-graphite-800 text-sm font-medium"
                    >
                        <span className="text-grey-300">
                            {mode === 'isl-to-text' ? t.translatorPage.modeISL : t.translatorPage.modeText}
                        </span>
                        <ArrowLeftRight className="w-4 h-4 text-grey-500" />
                    </button>
                </div>
            </header>

            <div className="container mx-auto px-6 py-8 max-w-[1600px]">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Camera Feed - Left Column (2/3 width) */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="relative bg-black rounded-2xl overflow-hidden border border-graphite-800 aspect-video">
                            {/* Video Area */}
                            <div className="w-full h-full bg-gradient-to-br from-graphite-900 to-graphite-950 flex items-center justify-center relative overflow-hidden">

                                {/* Actual Video Element */}
                                <video
                                    ref={videoRef}
                                    autoPlay
                                    playsInline
                                    muted
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isCapturing ? 'opacity-100' : 'opacity-0'}`}
                                    style={{ transform: 'scaleX(-1)' }} // Mirror locally for user comfort
                                />
                                <canvas ref={canvasRef} className="hidden" />

                                {/* Subtle Grid - Very Low Opacity */}
                                {isCapturing && (
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
                                )}

                                {!isCapturing ? (
                                    <div className="text-center space-y-4 px-4 z-10">
                                        <div className="w-16 h-16 rounded-full bg-graphite-800 flex items-center justify-center mx-auto border border-graphite-700">
                                            <Camera className="w-7 h-7 text-grey-600" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <p className="text-base font-medium text-grey-400 mb-1">{t.translatorPage.cameraReady}</p>
                                            <p className="text-sm text-grey-600">{t.translatorPage.pressStart}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        {/* Status Badge - Minimal */}
                                        <div className="absolute top-5 left-5 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/5 z-20">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                            <span className="text-xs font-medium text-grey-300 tracking-wide uppercase">{t.translatorPage.translating}</span>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Control Button - Bottom Center */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
                                <button
                                    onClick={isCapturing ? stopSession : startSession}
                                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-xl ${isCapturing
                                        ? 'bg-red-600 hover:bg-red-700'
                                        : 'bg-green-600 hover:bg-green-700'
                                        }`}
                                >
                                    {isCapturing ? (
                                        <Pause className="w-6 h-6 text-white" strokeWidth={2.5} fill="white" />
                                    ) : (
                                        <Play className="w-6 h-6 text-white ml-0.5" strokeWidth={2.5} fill="white" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* System Status - Minimal, Informative */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { label: t.translatorPage.stats.fps, value: isCapturing ? '30 fps' : '—' },
                                { label: t.translatorPage.stats.latency, value: isCapturing ? '~95 ms' : '—' },
                                { label: t.translatorPage.stats.confidence, value: isCapturing && confidence > 0 ? `${(confidence * 100).toFixed(0)}%` : '—' }
                            ].map((stat, i) => (
                                <div key={i} className="bg-graphite-900 rounded-xl px-4 py-3 border border-graphite-800">
                                    <p className="text-xs text-grey-600 uppercase tracking-wider mb-1">{stat.label}</p>
                                    <p className="text-base font-mono font-medium text-grey-300">{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Sidebar - Output & Log */}
                    <div className="space-y-6">

                        {/* Translation Output */}
                        <div className="bg-graphite-900 rounded-2xl border border-graphite-800 p-6">
                            <div className="flex items-center justify-between mb-5">
                                <h2 className="text-sm font-medium text-grey-500 uppercase tracking-wider">{t.translatorPage.translation}</h2>
                                {confidence > 0 && (
                                    <motion.div
                                        className="px-2.5 py-1 rounded-md bg-graphite-800 border border-graphite-700"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        <span className="text-xs font-medium text-grey-400 font-mono">
                                            {(confidence * 100).toFixed(0)}%
                                        </span>
                                    </motion.div>
                                )}
                            </div>

                            <div className="min-h-[140px] flex flex-col items-center justify-center text-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={detectedSign}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-full"
                                    >
                                        <h3 className="text-3xl font-semibold text-white mb-4 leading-tight">
                                            {detectedSign}
                                        </h3>
                                        {isCapturing && detectedSign !== "Initializing camera..." && detectedSign !== "Position hands in frame" && confidence > 0 && (
                                            <button
                                                onClick={() => speakHandler(detectedSign)}
                                                className="p-2.5 rounded-lg bg-graphite-800 hover:bg-graphite-700 text-grey-400 hover:text-grey-300 transition-colors border border-graphite-700"
                                                aria-label="Speak translation"
                                            >
                                                <Volume2 className="w-5 h-5" strokeWidth={2} />
                                            </button>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Conversation Timeline */}
                        <div className="bg-graphite-900 rounded-2xl border border-graphite-800 p-6 min-h-[320px] flex flex-col">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-sm font-medium text-grey-500 uppercase tracking-wider">{t.translatorPage.conversation}</h2>
                                <button
                                    onClick={toggleListening}
                                    className={`p-2 rounded-lg transition-colors border ${isListening
                                        ? 'bg-red-900/20 border-red-800 text-red-400'
                                        : 'bg-graphite-800 border-graphite-700 text-grey-400 hover:text-grey-300 hover:bg-graphite-700'
                                        }`}
                                    aria-label={isListening ? 'Stop listening' : 'Start listening'}
                                >
                                    <Mic className="w-4 h-4" strokeWidth={2} />
                                </button>
                            </div>

                            <div className="flex-1 space-y-3 overflow-y-auto">
                                {transcript.length === 0 && !isListening ? (
                                    <div className="text-center py-12">
                                        <p className="text-sm text-grey-600">{t.translatorPage.noActivity}</p>
                                        <p className="text-xs text-grey-700 mt-1">{t.translatorPage.historyTip}</p>
                                    </div>
                                ) : (
                                    <>
                                        {transcript.map((text, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="flex items-start gap-3 py-2 border-l-2 border-graphite-800 pl-3"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-grey-600 mt-2 flex-shrink-0" />
                                                <p className="text-sm text-grey-300 leading-relaxed">{text}</p>
                                            </motion.div>
                                        ))}
                                    </>
                                )}

                                {isListening && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex items-start gap-3 py-2 border-l-2 border-grey-700 pl-3"
                                    >
                                        <div className="flex gap-0.5 mt-2">
                                            {[0, 1, 2].map(i => (
                                                <motion.div
                                                    key={i}
                                                    className="w-1 h-1 rounded-full bg-grey-500"
                                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                                    transition={{ duration: 1.2, delay: i * 0.15, repeat: Infinity }}
                                                />
                                            ))}
                                        </div>
                                        <p className="text-sm text-grey-500">{t.translatorPage.listening}</p>
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        {/* Guidance Note */}
                        <div className="bg-graphite-900 rounded-xl border border-graphite-800 p-4">
                            <p className="text-xs text-grey-600 leading-relaxed">
                                <span className="font-medium text-grey-500">{t.translatorPage.tipLabel}</span> {t.translatorPage.tipText}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Translator;