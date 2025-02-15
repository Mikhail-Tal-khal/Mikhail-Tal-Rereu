// components/FooterSection.tsx
"use client";
import { useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { PaymentModal } from "./PaymentModal";
import { paymentMethods } from "./PaymentMethods";

interface FooterSectionProps {
  className?: string;
}

export default function FooterSection({ className }: FooterSectionProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handlePayment = (methodName: string) => {
    console.log(`Initiating ${methodName} payment...`);
    setShowPaymentModal(false);
  };

  const methodsWithHandlers = paymentMethods.map(method => ({
    ...method,
    handler: () => handlePayment(method.name)
  }));

  return (
    <footer className={cn("py-6 bg-blue-900", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <p className="mb-4 text-lg font-semibold">
          Get connected with me on social networks!
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
          <div className="flex gap-6">
            <a
              href="https://github.com/Mikhail-Tal-khal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 hover:text-gray-300 transition-colors" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-gray-300 transition-colors" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 hover:text-gray-300 transition-colors" />
            </a>
          </div>

          <button
            onClick={() => setShowPaymentModal(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-lg hover:scale-105 transition-transform"
          >
            <span className="font-medium">Buy Me Coffee</span>
          </button>
        </div>

        <p className="text-sm">© 2025 Mikhal-Tal Rereu. All rights reserved.</p>

        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          paymentMethods={methodsWithHandlers}
        />
      </div>
    </footer>
  );
}