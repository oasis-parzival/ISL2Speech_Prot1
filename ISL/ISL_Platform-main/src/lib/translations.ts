export type Language = 'EN' | 'HI' | 'MR' | 'GU';

export const translations = {
    EN: {
        nav: {
            features: "Features",
            howItWorks: "How it Works",
            about: "About",
            translator: "Translator",
            login: "Log in",
            getStarted: "Get Started"
        },
        hero: {
            title: "Real-time ISL",
            subtitle: "Translation",
            description: "Enabling inclusive communication without human interpreters directly in your browser.",
            tryNow: "Start Translating",
            watchDemo: "How it works"
        },
        accessibility: {
            badge: "Accessibility First",
            title: "Built for everyone,\neverywhere.",
            desc: "Designed with inclusivity at its core, ensuring everyone can communicate effortlessly.",
            features: [
                "WCAG-friendly High Contrast UI",
                "Full Keyboard Navigation Support",
                "Zero Downloads - Browser Based",
                "Works on Low-End Devices"
            ],
            assistantTitle: "SignBridge Assistant",
            assistantDesc: "Get help in your own language",
            chatHello: "Hello! How can I help you?",
            chatHelp: "Sign translation help please.",
            compliance: "Compliant with WCAG 2.1 AA standards"
        },
        howItWorks: {
            title: "How It Works",
            desc: "A real-time communication pipeline built for instant, inclusive interaction.",
            steps: [
                {
                    title: "Show Gesture",
                    desc: "Your camera tracks hand and face movements in real time using visual landmarks."
                },
                {
                    title: "AI Translates",
                    desc: "Gestures are instantly interpreted and converted into accurate text."
                },
                {
                    title: "Speak & Read",
                    desc: "Automatic text-to-speech and speech-to-text enable two-way communication."
                }
            ],
            privacy: "Runs entirely in the browser with low latency."
        },
        liveDemo: {
            badge: "Try It Now",
            title: "Experience It Live",
            desc: "No installation. No setup. Just open and start communicating instantly.",
            steps: [
                "Show sign",
                "Hear translation",
                "Speak back"
            ],
            windowTitle: "SignBridge Translator",
            live: "Live",
            ctaTitle: "Start Translating Now",
            ctaDesc: "Works right in your browser • No downloads needed",
            ctaButton: "Open Translator",
            detection: "Example Detection",
            stats: {
                fps: "FPS",
                latency: "Latency"
            },
            benefits: [
                { title: "Instant", desc: "Start in seconds" },
                { title: "Browser-based", desc: "No downloads" },
                { title: "Real-time", desc: "Live translation" }
            ]
        },
        features: {
            title: "Core Features",
            desc: "Powerful tools for seamless communication",
            list: [
                { title: "Video → Text", text: "Instantly convert ISL gestures into readable text output for seamless understanding." },
                { title: "Text → Speech", text: "Type your message and have it spoken aloud, bridging the gap for non-signers." },
                { title: "Speech → Text", text: "Receive spoken responses as visual text, ensuring you never miss a word of conversation." },
                { title: "Multilingual", text: "Communication across India with support for English, Hindi, Marathi, and Gujarati." }
            ],
            footer: "All features work offline • No data sent to servers"
        },
        targetAudience: {
            title: "Who Benefits",
            desc: "Built for real communication needs across communities.",
            audiences: [
                { label: "Deaf & Hard of Hearing", stat: "5%", context: "of global population" },
                { label: "Educational Institutions", stat: "1.5M+", context: "students in India" },
                { label: "Public Services", stat: "Critical", context: "for accessibility" },
                { label: "Inclusive Workplaces", stat: "Growing", context: "demand nationwide" }
            ],
            useCases: [
                { title: "Healthcare", desc: "Doctor-patient communication without interpreters" },
                { title: "Emergency Services", desc: "Critical situations require immediate understanding" },
                { title: "Customer Service", desc: "Banks, retail, and public counters made accessible" }
            ]
        },
        statsRoadmap: {
            performance: {
                title: "System Performance",
                fps: "Real-time recognition",
                latency: "Response latency"
            },
            roadmap: {
                title: "Development Roadmap",
                steps: [
                    { title: "Practice Mode", desc: "Interactive ISL learning modules" },
                    { title: "Admin Dashboard", desc: "Usage monitoring and analytics" },
                    { title: "Mobile App", desc: "Native iOS and Android support" }
                ],
                planned: "Planned for Q1 2026"
            }
        },
        translatorPage: {
            title: "SignBridge Translator",
            subtitle: "Real-time Indian Sign Language",
            modeISL: "ISL to Text",
            modeText: "Text to ISL",
            cameraReady: "Camera ready",
            pressStart: "Press start to begin translating",
            translating: "Translating",
            sessionPaused: "Session paused",
            stats: {
                fps: "Frame rate",
                latency: "Response time",
                confidence: "Confidence"
            },
            translation: "Translation",
            conversation: "Conversation",
            noActivity: "No activity yet",
            historyTip: "Translation history will appear here",
            listening: "Listening...",
            tipLabel: "Tip:",
            tipText: "Keep hands clearly visible within the detection area for accurate recognition."
        },
        about: {
            title: "Communication is a",
            titleHighlight: "Fundamental Right",
            subtitle: "SignBridge isn't just a translator; it's a digital infrastructure built to dismantle the language barrier between the Deaf community and the rest of the world.",
            gap: {
                title: "The Gap",
                desc: "Over 63 million people in India have significant hearing loss, yet accessible communication remains rare in public spaces."
            },
            technology: {
                title: "The Technology",
                desc: "We use browser-based TensorFlow models to detect 486 distinct hand landmarks in real-time without sending data to any server."
            },
            goal: {
                title: "The Goal",
                desc: "To normalize ISL usage in daily interactions—from ordering coffee to attending medical appointments independently."
            },
            stats: {
                landmarks: "Landmarks Tracked",
                latency: "Latency (ms)",
                dialects: "Local Dialects",
                privacy: "Privacy Score"
            },
            cta: {
                title: "Ready to break the silence?",
                button: "Start Translating Now"
            }
        },
        footer: {
            copyright: "© 2024 SignBridge. Built with ❤️ for India."
        },
        callToAction: {
            title: "Ready to break the silence?",
            desc: "No signup required. Works directly in your browser. Experience the future of inclusive communication today.",
            start: "Start Translating Now",
            learn: "Learn How It Works"
        }
    },
    HI: {
        nav: {
            features: "सुविधाएँ",
            howItWorks: "कार्य विधि",
            about: "परिचय",
            translator: "अनुवादक",
            login: "लॉग इन",
            getStarted: "शुरू करें"
        },
        hero: {
            title: "रीयल-टाइम आई.एस.एल.",
            subtitle: "अनुवाद",
            description: "बिना किसी मानवीय दुभाषिए के सीधे अपने ब्राउज़र में समावेशी संचार को सक्षम बनाना।",
            tryNow: "अनुवाद शुरू करें",
            watchDemo: "यह कैसे काम करता है"
        },
        accessibility: {
            badge: "सुलभता पहले",
            title: "सभी के लिए,\nहर जगह।",
            desc: "समावेशिता को ध्यान में रखकर बनाया गया, यह सुनिश्चित करता है कि हर कोई आसानी से संवाद कर सके।",
            features: [
                "WCAG-अनुकूल हाई कंट्रास्ट UI",
                "पूर्ण कीबोर्ड नेविगेशन समर्थन",
                "कोई डाउनलोड नहीं - ब्राउज़र आधारित",
                "कमजोर डिवाइसेज पर भी काम करता है"
            ],
            assistantTitle: "साइनब्रिज सहायक",
            assistantDesc: "अपनी भाषा में सहायता प्राप्त करें",
            chatHello: "नमस्ते! मैं आपकी कैसे मदद कर सकता हूँ?",
            chatHelp: "कृपया संकेत अनुवाद में मदद करें।",
            compliance: "WCAG 2.1 AA मानकों का अनुपालन"
        },
        howItWorks: {
            title: "यह कैसे काम करता है",
            desc: "त्वरित और समावेशी बातचीत के लिए बनाया गया एक रीयल-टाइम संचार माध्यम।",
            steps: [
                {
                    title: "संकेत दिखाएं",
                    desc: "आपका कैमरा विजुअल लैंडमार्क का उपयोग करके रीयल-टाइम में हाथ और चेहरे की गतिविधियों को ट्रैक करता है।"
                },
                {
                    title: "एआई अनुवाद",
                    desc: "इशारों को तुरंत समझा जाता है और सटीक टेक्स्ट में बदला जाता है।"
                },
                {
                    title: "बोलें और पढ़ें",
                    desc: "स्वचालित टेक्स्ट-टू-स्पीच और स्पीच-टू-टेक्स्ट दो-तरफा संचार को सक्षम बनाते हैं।"
                }
            ],
            privacy: "पूरी तरह से ब्राउज़र में चलता है, बिना किसी देरी के।"
        },
        liveDemo: {
            badge: "अभी आज़माएं",
            title: "लाइव अनुभव करें",
            desc: "कोई इंस्टॉलेशन नहीं। कोई सेटअप नहीं। बस खोलें और तुरंत बातचीत शुरू करें।",
            steps: [
                "संकेत दिखाएं",
                "अनुवाद सुनें",
                "वापस बोलें"
            ],
            windowTitle: "साइनब्रिज अनुवादक",
            live: "लाइव",
            ctaTitle: "अभी अनुवाद शुरू करें",
            ctaDesc: "सीधे आपके ब्राउज़र में काम करता है • डाउनलोड की आवश्यकता नहीं",
            ctaButton: "अनुवादक खोलें",
            detection: "उदाहरण पहचान",
            stats: {
                fps: "FPS",
                latency: "लेटेंसी"
            },
            benefits: [
                { title: "तुरंत", desc: "सेकंड में शुरू करें" },
                { title: "ब्राउज़र-आधारित", desc: "कोई डाउनलोड नहीं" },
                { title: "रीयल-टाइम", desc: "लाइव अनुवाद" }
            ]
        },
        features: {
            title: "मुख्य विशेषताएँ",
            desc: "निर्बाध संचार के लिए शक्तिशाली उपकरण",
            list: [
                { title: "वीडियो → टेक्स्ट", text: "सहज समझ के लिए आई.एस.एल. इशारों को तुरंत पठनीय टेक्स्ट में बदलें।" },
                { title: "टेक्स्ट → वाणी", text: "अपना संदेश टाइप करें और उसे जोर से बुलवाएं, गैर-संकेतकों के साथ दूरी मिटाएं।" },
                { title: "वाणी → टेक्स्ट", text: "बोले गए जवाबों को दृश्य टेक्स्ट के रूप में प्राप्त करें, सुनिश्चित करें कि आप बातचीत का एक भी शब्द न चूकें।" },
                { title: "बहुभाषी", text: "अंग्रेजी, हिंदी, मराठी और गुजराती के समर्थन के साथ पूरे भारत में संचार।" }
            ],
            footer: "सभी सुविधाएँ ऑफ़लाइन काम करती हैं • सर्वर पर कोई डेटा नहीं भेजा जाता"
        },
        targetAudience: {
            title: "किन्हें लाभ होगा",
            desc: "समुदायों के बीच वास्तविक संचार आवश्यकताओं के लिए बनाया गया।",
            audiences: [
                { label: "बधिर और कम सुनने वाले", stat: "5%", context: "वैश्विक आबादी का" },
                { label: "शैक्षिक संस्थान", stat: "1.5M+", context: "भारत में छात्र" },
                { label: "जन सेवाएँ", stat: "महत्वपूर्ण", context: "सुलभता के लिए" },
                { label: "समावेशी कार्यस्थल", stat: "बढ़ती", context: "देशव्यापी मांग" }
            ],
            useCases: [
                { title: "स्वास्थ्य सेवा", desc: "बिना दुभाषिए के डॉक्टर-मरीज संचार" },
                { title: "आपातकालीन सेवाएँ", desc: "गंभीर स्थितियों में तत्काल समझ आवश्यक" },
                { title: "ग्राहक सेवा", desc: "बैंक, खुदरा और सार्वजनिक काउंटर सुलभ बनाए गए" }
            ]
        },
        statsRoadmap: {
            performance: {
                title: "सिस्टम प्रदर्शन",
                fps: "रीयल-टाइम पहचान",
                latency: "प्रतिक्रिया समय"
            },
            roadmap: {
                title: "विकास रोडमैप",
                steps: [
                    { title: "अभ्यास मोड", desc: "इंटरएक्टिव आई.एस.एल. शिक्षण मॉड्यूल" },
                    { title: "एडमिन डैशबोर्ड", desc: "उपयोग निगरानी और एनालिटिक्स" },
                    { title: "मोबाइल ऐप", desc: "नेटिव आईओएस और एंड्रॉइड सपोर्ट" }
                ],
                planned: "Q1 2026 के लिए योजनाबद्ध"
            }
        },
        translatorPage: {
            title: "साइनब्रिज अनुवादक",
            subtitle: "रीयल-टाइम भारतीय सांकेतिक भाषा",
            modeISL: "आई.एस.एल. से टेक्स्ट",
            modeText: "टेक्स्ट से आई.एस.एल.",
            cameraReady: "कैमरा तैयार है",
            pressStart: "अनुवाद शुरू करने के लिए स्टार्ट दबाएं",
            translating: "अनुवाद जारी है",
            sessionPaused: "सत्र रोका गया",
            stats: {
                fps: "फ्रेम दर",
                latency: "प्रतिक्रिया समय",
                confidence: "आत्मविश्वास"
            },
            translation: "अनुवाद",
            conversation: "बातचीत",
            noActivity: "अभी कोई गतिविधि नहीं",
            historyTip: "अनुवाद इतिहास यहाँ दिखाई देगा",
            listening: "सुन रहा हूँ...",
            tipLabel: "सुझाव:",
            tipText: "सटीक पहचान के लिए हाथों को डिटेक्शन क्षेत्र में स्पष्ट रूप से रखें।"
        },
        about: {
            title: "संचार एक",
            titleHighlight: "मौलिक अधिकार है",
            subtitle: "साइनब्रिज केवल एक अनुवादक नहीं है; यह एक डिजिटल बुनियादी ढांचा है जिसे बधिर समुदाय और शेष दुनिया के बीच भाषा की बाधा को खत्म करने के लिए बनाया गया है।",
            gap: {
                title: "अंतराल",
                desc: "भारत में 63 मिलियन से अधिक लोगों को सुनने में महत्वपूर्ण कमी है, फिर भी सार्वजनिक स्थानों पर सुलभ संचार दुर्लभ है।"
            },
            technology: {
                title: "तकनीक",
                desc: "हम किसी भी सर्वर पर डेटा भेजे बिना रीयल-टाइम में 486 विशिष्ट हाथ के लैंडमार्क का पता लगाने के लिए ब्राउज़र-आधारित टेंसरफ्लो मॉडल का उपयोग करते हैं।"
            },
            goal: {
                title: "लक्ष्य",
                desc: "दैनिक बातचीत में आई.एस.एल. के उपयोग को सामान्य बनाना—कॉफी ऑर्डर करने से लेकर स्वतंत्र रूप से मेडिकल अपॉइंटमेंट में शामिल होने तक।"
            },
            stats: {
                landmarks: "लैंडमार्क ट्रैक किए गए",
                latency: "लेटेंसी (ms)",
                dialects: "स्थानीय बोलियाँ",
                privacy: "गोपनीयता स्कोर"
            },
            cta: {
                title: "खामोशी तोड़ने के लिए तैयार हैं?",
                button: "अभी अनुवाद शुरू करें"
            }
        },
        footer: {
            copyright: "© 2024 साइनब्रिज। भारत के लिए ❤️ के साथ बनाया गया।"
        },
        callToAction: {
            title: "खामोशी तोड़ने के लिए तैयार हैं?",
            desc: "साइनअप की कोई आवश्यकता नहीं। सीधे आपके ब्राउज़र में काम करता है। समावेशी संचार के भविष्य का आज ही अनुभव करें।",
            start: "अभी अनुवाद शुरू करें",
            learn: "जानें यह कैसे काम करता है"
        }
    },
    MR: {
        nav: {
            features: "वैशिष्ट्ये",
            howItWorks: "कसे काम करते",
            about: "आमच्याबद्दल",
            translator: "अनुवादक",
            login: "लॉग इन",
            getStarted: "सुरू करा"
        },
        hero: {
            title: "रिअल-टाइम ISL",
            subtitle: "भाषांतर",
            description: "कोणत्याही मानवी दुभाष्याशिवाय थेट तुमच्या ब्राउझरमध्ये सर्वसमावेशक संवाद सक्षम करणे.",
            tryNow: "भाषांतर सुरू करा",
            watchDemo: "हे कसे कार्य करते"
        },
        accessibility: {
            badge: "सुलभता प्रथम",
            title: "सर्वांसाठी,\nसर्वत्र.",
            desc: "सर्वसमावेशकता लक्षात घेऊन रचना केली आहे, जेणेकरून प्रत्येकजण सहजपणे संवाद साधू शकेल.",
            features: [
                "WCAG-अनुकूल हाय कॉन्ट्रास्ट UI",
                "पूर्ण कीबोर्ड नेव्हिगेशन सपोर्ट",
                "कोणतेही डाउनलोड नाही - ब्राउझर आधारित",
                "कमी क्षमतेच्या उपकरणांवरही चालते"
            ],
            assistantTitle: "साइनब्रिज सहाय्यक",
            assistantDesc: "तुमच्या स्वतःच्या भाषेत मदत मिळवा",
            chatHello: "नमस्कार! मी तुम्हाला कशी मदत करू शकतो?",
            chatHelp: "कृपया सांकेतिक भाषांतरासाठी मदत करा.",
            compliance: "WCAG 2.1 AA मानकांचे पालन"
        },
        howItWorks: {
            title: "हे कसे कार्य करते",
            desc: "त्वरित आणि सर्वसमावेशक संवादासाठी तयार केलेली एक रिअल-टाइम पाइपलाइन.",
            steps: [
                {
                    title: "हावभाव दाखवा",
                    desc: "तुमचा कॅमेरा व्हिज्युअल लँडमार्क्स वापरून रिअल-टाइममध्ये हाताच्या आणि चेहऱ्याच्या हालचाली ट्रॅक करतो."
                },
                {
                    title: "AI भाषांतर",
                    desc: "हावभावांचा त्वरित अर्थ लावला जातो आणि अचूक मजकुरात रूपांतरित केले जाते."
                },
                {
                    title: "बोला आणि वाचा",
                    desc: "स्वयंचलित टेक्स्ट-टू-स्पीच आणि स्पीच-टू-टेक्स्ट दुहेरी संवाद सक्षम करतात."
                }
            ],
            privacy: "कमी विलंबासह पूर्णपणे ब्राउझरमध्ये चालते."
        },
        liveDemo: {
            badge: "आत्ताच वापरून पहा",
            title: "थेट अनुभव घ्या",
            desc: "कोणतेही इन्स्टॉलेशन नाही. कोणतेही सेटअप नाही. फक्त उघडा आणि त्वरित संवाद सुरू करा.",
            steps: [
                "संकेत दाखवा",
                "भाषांतर ऐका",
                "परत बोला"
            ],
            windowTitle: "साइनब्रिज अनुवादक",
            live: "लाइव्ह",
            ctaTitle: "भाषांतर सुरू करा",
            ctaDesc: "थेट तुमच्या ब्राउझरमध्ये काम करते • डाउनलोडची आवश्यकता नाही",
            ctaButton: "अनुवादक उघडा",
            detection: "उदाहरण ओळख",
            stats: {
                fps: "FPS",
                latency: "विलंब"
            },
            benefits: [
                { title: "त्वरित", desc: "काही सेकंदात सुरू करा" },
                { title: "ब्राउझर-आधारित", desc: "कोणतेही डाउनलोड नाही" },
                { title: "रिअल-टाइम", desc: "थेट भाषांतर" }
            ]
        },
        features: {
            title: "मुख्य वैशिष्ट्ये",
            desc: "अखंड संवादासाठी शक्तिशाली साधने",
            list: [
                { title: "व्हिडिओ → मजकूर", text: "सहज आकलनासाठी ISL हावभावांचे त्वरित वाचनीय मजकुरात रूपांतर करा." },
                { title: "मजकूर → वाणी", text: "तुमचा संदेश टाईप करा आणि तो मोठ्याने बोलून दाखवा, ज्यामुळे संवाद सोपा होईल." },
                { title: "वाणी → मजकूर", text: "बोललेली उत्तरे दृश्य मजकूर म्हणून प्राप्त करा, जेणेकरून संभाषणातील एकही शब्द सुटणार नाही." },
                { title: "बहुभाषिक", text: "इंग्रजी, हिंदी, मराठी आणि गुजराती समर्थनासह संपुर्ण भारतात संवाद." }
            ],
            footer: "सर्व वैशिष्ट्ये ऑफलाइन काम करतात • सर्व्हरवर कोणताही डेटा पाठविला जात नाही"
        },
        targetAudience: {
            title: "कोणाला फायदा होईल",
            desc: "समुदायांमधील वास्तविक संवादाच्या गरजा पूर्ण करण्यासाठी तयार केलेले.",
            audiences: [
                { label: "बधिर आणि कमी ऐकू येणारे", stat: "5%", context: "जागतिक लोकसंख्येच्या" },
                { label: "शैक्षणिक संस्था", stat: "1.5M+", context: "भारतातील विद्यार्थी" },
                { label: "सार्वजनिक सेवा", stat: "अत्यावश्यक", context: "सुलभतेसाठी" },
                { label: "समावेशक कार्यस्थळे", stat: "वाढती", context: "देशव्यापी मागणी" }
            ],
            useCases: [
                { title: "आरोग्य सेवा", desc: "दुभाष्याशिवाय डॉक्टर-मरीज संवाद" },
                { title: "आपत्कालीन सेवा", desc: "गंभीर परिस्थितीत त्वरित समज आवश्यक" },
                { title: "ग्राहक सेवा", desc: "बँका, किरकोळ आणि सार्वजनिक काउंटर सुलभ केले" }
            ]
        },
        statsRoadmap: {
            performance: {
                title: "सिस्टम कार्यक्षमता",
                fps: "रिअल-टाइम ओळख",
                latency: "प्रतिसाद वेळ"
            },
            roadmap: {
                title: "विकास आराखडा",
                steps: [
                    { title: "सराव मोड", desc: "इंटरएक्टिव्ह ISL शिक्षण मॉड्यूल्स" },
                    { title: "अडमिन डॅशबोर्ड", desc: "वापर निरीक्षण आणि विश्लेषण" },
                    { title: "मोबाईल ॲप", desc: "नेटिव्ह iOS आणि Android सपोर्ट" }
                ],
                planned: "Q1 2026 साठी नियोजित"
            }
        },
        translatorPage: {
            title: "साइनब्रिज अनुवादक",
            subtitle: "रिअल-टाइम भारतीय सांकेतिक भाषा",
            modeISL: "ISL ते मजकूर",
            modeText: "मजकूर ते ISL",
            cameraReady: "कॅमेरा तयार आहे",
            pressStart: "भाषांतर सुरू करण्यासाठी स्टार्ट दाबा",
            translating: "भाषांतर सुरू आहे",
            sessionPaused: "सत्र थांबवले",
            stats: {
                fps: "फ्रेम दर",
                latency: "प्रतिसाद वेळ",
                confidence: "आत्मविश्वास"
            },
            translation: "भाषांतर",
            conversation: "संभाषण",
            noActivity: "अद्याप कोणतीही क्रिया नाही",
            historyTip: "भाषांतर इतिहास येथे दिसेल",
            listening: "ऐकत आहे...",
            tipLabel: "टीप:",
            tipText: "अचूक ओळखीसाठी हात शोध क्षेत्रात स्पष्टपणे ठेवा."
        },
        about: {
            title: "संवाद हा एक",
            titleHighlight: "मूलभूत अधिकार आहे",
            subtitle: "साइनब्रिज हे केवळ अनुवादक नाही; हे बधिर समुदाय आणि उर्वरित जग यांच्यातील भाषेचा अडथळा दूर करण्यासाठी तयार केलेले डिजिटल इन्फ्रास्ट्रक्चर आहे.",
            gap: {
                title: "दरी",
                desc: "भारतात 63 दशलक्षाहून अधिक लोकांना ऐकण्यात लक्षणीय कमतरता आहे, तरीही सार्वजनिक ठिकाणी सुलभ संवाद दुर्मिळ आहे."
            },
            technology: {
                title: "तंत्रज्ञान",
                desc: "आम्ही कोणत्याही सर्व्हरवर डेटा न पाठवता रिअल-टाइममध्ये 486 विशिष्ट हातांच्या खुणा शोधण्यासाठी ब्राउझर-आधारित टेन्सरफ्लो मॉडेल वापरतो."
            },
            goal: {
                title: "ध्येय",
                desc: "दैनंदिन संवादात ISL चा वापर सामान्य करणे—कॉफी ऑर्डर करण्यापासून ते स्वतंत्रपणे वैद्यकीय भेटीला जाण्यापर्यंत."
            },
            stats: {
                landmarks: "लँडमार्क ट्रॅक केले",
                latency: "विलंब (ms)",
                dialects: "स्थानिक बोली",
                privacy: "गोपनीयता स्कोअर"
            },
            cta: {
                title: "आवाज उठवण्यासाठी तयार आहात?",
                button: "आत्ताच भाषांतर सुरू करा"
            }
        },
        footer: {
            copyright: "© 2024 साइनब्रिज. भारतासाठी ❤️ सह तयार केले."
        },
        callToAction: {
            title: "आवाज उठवण्यासाठी तयार आहात?",
            desc: "साइनअपची आवश्यकता नाही. थेट तुमच्या ब्राउझरमध्ये काम करते. समावेशक संवादाच्या भविष्याचा आजच अनुभव घ्या.",
            start: "आत्ताच भाषांतर सुरू करा",
            learn: "हे कसे कार्य करते ते शिका"
        }
    },
    GU: {
        nav: {
            features: "વિશેષતાઓ",
            howItWorks: "કામગીરી",
            about: "અમારા વિશે",
            translator: "અનુવાદક",
            login: "લૉગ ઇન",
            getStarted: "શરૂ કરો"
        },
        hero: {
            title: "રિયલ-ટાઇમ ISL",
            subtitle: "અનુવાદ",
            description: "કોઈપણ માનવ દુભાષિયા વિના સીધા તમારા બ્રાઉઝરમાં સર્વસમાવેશક વાતચીત કરવાની ક્ષમતા.",
            tryNow: "અનુવાદ શરૂ કરો",
            watchDemo: "તે કેવી રીતે કામ કરે છે"
        },
        accessibility: {
            badge: "accessibility પ્રથમ",
            title: "સૌ માટે,\nબધે જ.",
            desc: "સમાવેશકતાને ધ્યાનમાં રાખીને બનાવેલ, ખાતરી કરે છે કે દરેક વ્યક્તિ સરળતાથી વાતચીત કરી શકે.",
            features: [
                "WCAG-ફ્રેન્ડલી હાઈ કોન્ટ્રાસ્ટ UI",
                "સંપૂર્ણ કીબોર્ડ નેવિગેશન સપોર્ટ",
                "કોઈ ડાઉનલોડ નથી - બ્રાઉઝર આધારિત",
                "ઓછી ક્ષમતા વાળા ઉપકરણો પર પણ ચાલે છે"
            ],
            assistantTitle: "સાઇનબ્રિજ સહાયક",
            assistantDesc: "તમારી પોતાની ભાષામાં મદદ મેળવો",
            chatHello: "નમસ્તે! હું તમને કેવી રીતે મદદ કરી શકું?",
            chatHelp: "કૃપા કરીને સંકેત અનુવાદમાં મદદ કરો.",
            compliance: "WCAG 2.1 AA માપદંડોનું પાલન"
        },
        howItWorks: {
            title: "તે કેવી રીતે કામ કરે છે",
            desc: "ત્વરિત અને સર્વસમાવેશક વાતચીત માટે બનાવેલ રિયલ-ટાઇમ કમ્યુનિકેશન પાઇપલાઇન.",
            steps: [
                {
                    title: "સંકેત બતાવો",
                    desc: "તમારો કેમેરો વિઝ્યુઅલ લેન્ડમાર્ક્સનો ઉપયોગ કરીને રિયલ-टाइमમાં હાથ અને ચહેરાની હલનચલન ટ્રેક કરે છે."
                },
                {
                    title: "AI અનુવાદ",
                    desc: "ઈશારાઓનું તરત જ અર્થઘટન કરવામાં આવે છે અને સચોટ ટેક્સ્ટમાં રૂપાંતરિત કરવામાં આવે છે."
                },
                {
                    title: "બોલો અને વાંચો",
                    desc: "ઓટોમેટિક ટેક્સ્ટ-ટુ-સ્પીચ અને સ્પીચ-ટુ-ટેક્સ્ટ દ્વિ-માર્ગી વાતચીત સક્ષમ કરે છે."
                }
            ],
            privacy: "ઓછી લેટન્સી સાથે સંપૂર્ણપણે બ્રાઉઝરમાં ચાલે છે."
        },
        liveDemo: {
            badge: "હવે અજમાવી જુઓ",
            title: "લાઇવ અનુભવ કરો",
            desc: "કોઈ ઇન્સ્ટોલેશન નથી. કોઈ સેટઅપ નથી. બસ ખોલો અને તરત જ વાતચીત શરૂ કરો.",
            steps: [
                "સંકેત બતાવો",
                "અનુવાદ સાંભળો",
                "પાછા બોલો"
            ],
            windowTitle: "સાઇનબ્રિજ અનુવાદક",
            live: "લાઇવ",
            ctaTitle: "બ્રાઉઝરમાં અનુવાદ શરૂ કરો",
            ctaDesc: "સીધા તમારા બ્રાઉઝરમાં કામ કરે છે • ડાઉનલોડની જરૂર નથી",
            ctaButton: "અનુવાદક ખોલો",
            detection: "ઉદાહરણ ઓળખ",
            stats: {
                fps: "FPS",
                latency: "લેટન્સી"
            },
            benefits: [
                { title: "ત્વરિત", desc: "સેકન્ડોમાં શરૂ કરો" },
                { title: "બ્રાઉઝર-આધારિત", desc: "કોઈ ડાઉનલોડ નથી" },
                { title: "રિયલ-ટાઇમ", desc: "લાઇવ અનુવાદ" }
            ]
        },
        features: {
            title: "મુખ્ય વિશેષતાઓ",
            desc: "એકીકૃત સંચાર માટે શક્તિશાળી સાધનો",
            list: [
                { title: "વિડિઓ → ટેક્સ્ટ", text: "સરળ સમજણ માટે ISL સંકેતોને તરત જ વાંચી શકાય તેવા ટેક્સ્ટમાં ફેરવો." },
                { title: "ટેક્સ્ટ → વાણી", text: "તમારો સંદેશ લખો અને તેને મોટેથી બોલાવો, જેથી વાતચીત સરળ બને." },
                { title: "વાણી → ટેક્સ્ટ", text: "બોલાયેલા જવાબોને દ્રશ્ય ટેક્સ્ટ તરીકે મેળવો, જેથી વાતચીતનો એક પણ શબ્દ ચૂકી ન જવાય." },
                { title: "બહુભાષી", text: "અંગ્રેજી, હિન્દી, મરાઠી અને ગુજરાતી સમર્થન સાથે સમગ્ર ભારતમાં સંચાર." }
            ],
            footer: "બધી સુવિધાઓ ઑફલાઇન કામ કરે છે • સર્વર પર કોઈ ડેટા મોકલવામાં આવતો નથી"
        },
        targetAudience: {
            title: "કોને લાભ થશે",
            desc: "સમુદાયો વચ્ચે વાસ્તવિક સંચાર જરૂરિયાતો માટે બનાવેલ.",
            audiences: [
                { label: "બધિર અને ઓછું સાંભળનાર", stat: "5%", context: "વૈશ્વિક વસ્તીના" },
                { label: "શૈક્ષણિક સંસ્થાઓ", stat: "1.5M+", context: "ભારતમાં વિદ્યાર્થીઓ" },
                { label: "જાહેર સેવાઓ", stat: "મહત્વપૂર્ણ", context: "સુલભતા માટે" },
                { label: "સમાવેશક કાર્યસ્થળો", stat: "વધતી", context: "દેશવ્યાપી માંગ" }
            ],
            useCases: [
                { title: "આરોગ્ય સંભાળ", desc: "દુભાષિયા વિના ડૉક્ટર-દર્દી વાતચીત" },
                { title: "કટોકટી સેવાઓ", desc: "ગંભીર પરિસ્થિતિઓમાં તાત્કાલિક સમજ જરૂરી" },
                { title: "ગ્રાહક સેવા", desc: "બેંકો, રિટેલ અને જાહેર કાઉન્ટર્સ સુલભ બનાવ્યા" }
            ]
        },
        statsRoadmap: {
            performance: {
                title: "સિસ્ટમ પ્રદર્શન",
                fps: "રિયલ-ટાઇમ ઓળખ",
                latency: "પ્રતિભાવ સમય"
            },
            roadmap: {
                title: "વિકાસ રોડમેપ",
                steps: [
                    { title: "પ્રેક્ટિસ મોડ", desc: "ઇન્ટરેક્ટિવ ISL શિક્ષણ મોડ્યુલો" },
                    { title: "એડમિન ડેશબોર્ડ", desc: "ઉપયોગ મોનીટરીંગ અને એનાલિટિક્સ" },
                    { title: "મોબાઇલ એપ", desc: "નેટિવ iOS અને Android સપોર્ટ" }
                ],
                planned: "Q1 2026 માટે આયોજિત"
            }
        },
        translatorPage: {
            title: "સાઇનબ્રિજ અનુવાદક",
            subtitle: "રિયલ-ટાઇમ ભારતીય સાંકેતિક ભાષા",
            modeISL: "ISL થી ટેક્સ્ટ",
            modeText: "ટેક્સ્ટ થી ISL",
            cameraReady: "કેમેરા તૈયાર છે",
            pressStart: "અનુવાદ શરૂ કરવા માટે સ્ટાર્ટ દબાવો",
            translating: "અનુવાદ ચાલુ છે",
            sessionPaused: "સત્ર થોભાવ્યું",
            stats: {
                fps: "ફ્રેમ રેટ",
                latency: "પ્રતિભાવ સમય",
                confidence: "આત્મવિશ્વાસ"
            },
            translation: "અનુવાદ",
            conversation: "વાતચીત",
            noActivity: "હજી કોઈ પ્રવૃત્તિ નથી",
            historyTip: "અનુવાદ ઇતિહાસ અહીં દેખાશે",
            listening: "સાંભળી રહ્યું છે...",
            tipLabel: "ટિપ:",
            tipText: "સચોટ ઓળખ માટે હાથને ડિટેક્શન એરિયામાં સ્પષ્ટ રીતે રાખો."
        },
        about: {
            title: "સંચાર એ",
            titleHighlight: "મૂળભૂત અધિકાર છે",
            subtitle: "સાઇનબ્રિજ માત્ર એક અનુવાદક નથી; તે બધિર સમુદાય અને બાકીના વિશ્વ વચ્ચેની ભાષાના અવરોધને દૂર કરવા માટે બનાવવામાં આવેલ ડિજિટલ ઇન્ફ્રાસ્ટ્રક્ચર છે.",
            gap: {
                title: "અંતર",
                desc: "ભારતમાં 63 મિલિયનથી વધુ લોકોને સાંભળવાની નોંધપાત્ર ખામી છે, છતાં જાહેર સ્થળોએ સુલભ સંચાર દુર્લભ છે."
            },
            technology: {
                title: "ટેકનોલોજી",
                desc: "અમે કોઈપણ સર્વર પર ડેટા મોકલ્યા વિના રિયલ-ટાઇમમાં 486 અલગ હાથના લેન્ડમાર્ક્સને શોધવા માટે બ્રાઉઝર-આધારિત ટેન્સરફ્લો મોડલ્સનો ઉપયોગ કરીએ છીએ."
            },
            goal: {
                title: "લક્ષ્ય",
                desc: "દૈનિક ક્રિયાપ્રતિક્રિયાઓમાં ISL ના ઉપયોગને સામાન્ય બનાવવું—કોફી ઓર્ડર કરવાથી માંડીને સ્વતંત્ર રીતે મેડિકલ એપોઇન્ટમેન્ટમાં હાજરી આપવા સુધી."
            },
            stats: {
                landmarks: "લેન્ડમાર્ક્સ ટ્રેક કર્યા",
                latency: "લેટન્સી (ms)",
                dialects: "સ્થાનિક બોલીઓ",
                privacy: "ગોપનીયતા સ્કોર"
            },
            cta: {
                title: "મૌન તોડવા માટે તૈયાર છો?",
                button: "હવે અનુવાદ શરૂ કરો"
            }
        },
        footer: {
            copyright: "© 2024 સાઇનબ્રિજ. ભારત માટે ❤️ સાથે બનાવેલ."
        },
        callToAction: {
            title: "મૌન તોડવા માટે તૈયાર છો?",
            desc: "કોઈ સાઇનઅપની જરૂર નથી. સીધા તમારા બ્રાઉઝરમાં કામ કરે છે. આજે જ સર્વસમાવેશક સંચારના ભવિષ્યનો અનુભવ કરો.",
            start: "હવે અનુવાદ શરૂ કરો",
            learn: "જાણો તે કેવી રીતે કાર્ય કરે છે"
        }
    }
};
