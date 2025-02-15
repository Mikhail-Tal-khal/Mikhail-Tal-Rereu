"use client";
import { useState } from "react";
import { Github, Linkedin, Twitter, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SiPaypal, SiPayoneer } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";

interface FooterSectionProps {
  className?: string;
}

export default function FooterSection({ className }: FooterSectionProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const paymentMethods = [
    {
      name: "M-Pesa",
      icon: <FaMobileAlt className="w-8 h-8 text-green-600" />,
      handler: () => handleMpesaPayment(),
    },
    {
      name: "PayPal",
      icon: <SiPaypal className="w-8 h-8 text-blue-600" />,
      handler: () => handlePaypalPayment(),
    },
    {
      name: "Payoneer",
      icon: <SiPayoneer className="w-8 h-8 text-blue-400" />,
      handler: () => handlePayoneerPayment(),
    },
  ];

  const handleMpesaPayment = () => {
    console.log("Initiating M-Pesa payment...");
    setShowPaymentModal(false);
  };

  const handlePaypalPayment = () => {
    console.log("Redirecting to PayPal...");
    setShowPaymentModal(false);
  };

  const handlePayoneerPayment = () => {
    console.log("Redirecting to Payoneer...");
    setShowPaymentModal(false);
  };

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

        {/* Payment Modal */}
        {showPaymentModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md relative">
              <button
                onClick={() => setShowPaymentModal(false)}
                className="absolute top-4 right-4 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-black dark:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-xl font-bold mb-6 text-black dark:text-white">
                Choose Payment Method
              </h3>

              <div className="grid gap-4">
                {paymentMethods.map((method) => (
                  <button
                    key={method.name}
                    onClick={method.handler}
                    className="flex items-center gap-4 p-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors w-full text-left"
                  >
                    {method.icon}
                    <span className="font-medium text-black dark:text-white">
                      {method.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}
