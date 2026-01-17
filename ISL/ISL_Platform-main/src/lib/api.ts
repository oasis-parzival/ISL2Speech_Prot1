export const chatWithGroq = async (messages: { role: 'user' | 'system' | 'assistant'; content: string }[]) => {
    const apiKey = import.meta.env.VITE_GROQ_API_KEY;

    if (!apiKey) {
        console.error("Groq API key not found");
        return "I'm having trouble connecting to my brain right now. Please check the API key configuration.";
    }

    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                messages: messages,
                model: 'llama-3.3-70b-versatile',
                temperature: 0.7,
                max_tokens: 1024,
                top_p: 1,
                stream: false,
                stop: null
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'API request failed');
        }

        const data = await response.json();
        return data.choices[0]?.message?.content || "I didn't get a response.";

    } catch (error) {
        console.error("Error calling Groq API:", error);
        return "Sorry, I'm facing technical difficulties connecting to the server.";
    }
};
