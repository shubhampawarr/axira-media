'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9198338119893"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Axira Media on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white hover:scale-110 transition w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
    >
      <MessageCircle size={30} />
    </a>
  );
}