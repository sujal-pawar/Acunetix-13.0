import React, { useEffect, useCallback } from 'react';
import jesterImg from '../assets/jester-logo.svg';
import './Chatbot.css';

const BOTPRESS_CONFIG = {
  botId: 'c4456a62-788d-4d14-92cc-fd64a5ec8ea5',
  clientId: '66fb1013-2168-44ff-8ed7-2b7466c4f09a',
  hideWidget: true,
  configuration: {
    version: 'v2',
    website: {},
    email: {},
    phone: {},
    termsOfService: {},
    privacyPolicy: {},
    color: '#6bc298',
    variant: 'soft',
    headerVariant: 'solid',
    themeMode: 'dark',
    fontFamily: 'ABeeZee',
    radius: 4,
    feedbackEnabled: false,
    footer: '[⚡ by Botpress](https://botpress.com/?from=webchat)',
    additionalStylesheetUrl:
      'https://files.bpcontent.cloud/2026/03/02/18/20260302181655-406ZTFR6.css',
    soundEnabled: false,
    proactiveMessageEnabled: false,
    proactiveBubbleMessage: 'Hi! 👋 Need help?',
    proactiveBubbleTriggerType: 'afterDelay',
    proactiveBubbleDelayTime: 10,
    conversationHistory: false,
  },
};

const BotpressChat = () => {
  useEffect(() => {
    // Prevent duplicate script injection (React strict mode)
    if (document.querySelector('script[src*="cdn.botpress.cloud/webchat"]')) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v3.6/inject.js';
    document.body.appendChild(script);

    script.onload = () => {
      window.botpress.init(BOTPRESS_CONFIG);
    };
  }, []);

  const handleOpen = useCallback(() => {
    const bp = window.botpress;
    if (!bp) return;

    const isOpen = document.body.classList.toggle('bp-chat-open');
    if (isOpen) {
      if (typeof bp.open === 'function') bp.open();
    } else {
      if (typeof bp.close === 'function') bp.close();
    }
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-9999 group">
      <div className="absolute -inset-2 bg-[#00ffc8] rounded-full blur opacity-20 group-hover:opacity-60 animate-pulse transition duration-1000 group-hover:duration-200" />

      <button
        onClick={handleOpen}
        className="relative flex items-center justify-center w-16 h-16 bg-black border-2 border-[#00ffc8] rounded-full shadow-[0_0_15px_rgba(0,255,200,0.4)] transform transition-transform group-hover:scale-110 active:scale-95 overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center p-1">
          <img
            src={jesterImg}
            alt="Jester Protocol AI"
            className="w-full h-full object-contain rounded-full border border-[#00ffc8]/50 animate-[spin_8s_linear_infinite]"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#00ffc8] rounded-full shadow-[0_0_10px_#00ffc8]" />
        </div>
      </button>
    </div>
  );
};

export default BotpressChat;