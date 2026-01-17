# SignBridge - Real-Time ISL Translator

SignBridge is a modern, browser-based application designed to bridge the communication gap between the Deaf community and the rest of the world. It provides real-time translation between Indian Sign Language (ISL) gestures and text/speech using advanced AI models directly in the browser.

![SignBridge Interface](./screenshot.png) <!-- You can add a screenshot later if you wish -->

## 🌟 Key Features

*   **Real-time Gesture Recognition**: Uses TensorFlow.js to track hand and face landmarks directly in the browser.
*   **Two-Way Communication**:
    *   **ISL to Text**: Translates sign language gestures into readable text.
    *   **Text to ISL**: Converts typed text into synthesized speech.
    *   **Speech to Text**: Captures spoken language and displays it as text.
*   **Multilingual Support**: Full UI translation for **English, Hindi, Marathi, and Gujarati**.
*   **Privacy Focused**: All processing happens locally in the browser; no video data is sent to servers.
*   **AI Assistant**: Built-in chatbot powered by Groq for assistance.

## 🛠️ Tech Stack

*   **Frontend**: React, TypeScript, Vite
*   **Styling**: Tailwind CSS, Framer Motion
*   **AI/ML**: TensorFlow.js (Hand/Face detection), Groq SDK (Chatbot)
*   **Icons**: Lucide React
*   **Routing**: React Router DOM

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

*   [Node.js](https://nodejs.org/) (Version 16 or higher recommended)
*   npm (comes with Node.js) or yarn

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd ISL_Frontend
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables**:
    Create a file named `.env` in the root directory. You need to add your Groq API key for the chatbot functionality to work.

    ```env
    VITE_GROQ_API_KEY=your_groq_api_key_here
    ```
    > **Note**: You can get a free API key from [Groq Console](https://console.groq.com/).

### Running the Application

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal).

## 📁 Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── home/        # Landing page sections (Hero, HowItWorks, etc.)
│   ├── ui/          # Generic UI elements (Buttons, Inputs)
│   ├── ChatDock.tsx # AI Assistant component
│   └── Navbar.tsx   # Main navigation
├── context/         # React Context (LanguageContext)
├── lib/             # Utilities and helper functions
│   ├── translations.ts # Internationalization strings
│   └── utils.ts     # Helper functions
├── pages/           # Main page views
│   ├── Home.tsx     # Landing Page
│   ├── Translator.tsx # Main Translation Interface
│   ├── About.tsx    # About Us Page
│   └── Login.tsx    # Login Page
├── App.tsx          # Main App component & Routes
└── main.tsx         # Entry point
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
