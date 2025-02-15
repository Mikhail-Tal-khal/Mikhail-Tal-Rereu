
"use client";
import { X } from "lucide-react";
import { FaMobileAlt } from "react-icons/fa";
import { SiPaypal, SiPayoneer } from "react-icons/si";

interface PaymentMethod {
  name: string;
  icon: JSX.Element;
  handler: () => void;
}

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  paymentMethods: PaymentMethod[];
}

export const PaymentModal = ({ isOpen, onClose, paymentMethods }: PaymentModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
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
  );
};