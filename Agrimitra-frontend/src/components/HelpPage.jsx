import React, { useState } from 'react';
import { ChevronUp, ChevronDown, MessageCircle, Headphones, Mail } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-medium text-gray-900 focus:outline-none"
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-primary-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-primary-600" />
        )}
      </button>
      
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

function HelpPage() {
    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Help & Support</h1>
      
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="card text-center p-6 transition-transform hover:scale-105 duration-300">
                    <div className="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        <MessageCircle className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Chat Support</h3>
                    <p className="text-gray-600 mb-4">
                        Get instant answers to your questions from our support team.
                    </p>
                    <button className="btn-primary w-full">
                        Start Chat
                    </button>
                </div>
        
                <div className="card text-center p-6 transition-transform hover:scale-105 duration-300">
                    <div className="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        <Mail className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                    <p className="text-gray-600 mb-4">
                        Send us your questions and we'll respond within 24 hours.
                    </p>
                    <button className="btn-outline w-full">
                        Email Us
                    </button>
                </div>
            </div>
      
            <div className="card mb-8">
                <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        
                <div className="space-y-2">
                    <FAQItem
                        question="How accurate is the plant disease detection?"
                        answer="Our AI model has been trained on thousands of plant disease images and achieves an accuracy of over 90% for common diseases. The accuracy may vary depending on the quality of the image and the specific plant species."
                    />
          
                    <FAQItem
                        question="What plants and diseases can Agrimitra detect?"
                        answer="Agrimitra can currently detect diseases in over 20 common crop plants including tomato, potato, corn, wheat, rice, and various fruit trees. We can identify more than 50 common plant diseases and are continuously expanding our database."
                    />
          
                    <FAQItem
                        question="How do I take the best photo for accurate diagnosis?"
                        answer="For best results, take a well-lit, clear photo of the affected plant part (leaf, stem, fruit) against a simple background. Ensure the diseased area is clearly visible and fills most of the frame. Avoid shadows or reflections that might obscure symptoms."
                    />
          
                    <FAQItem
                        question="Is my data secure and private?"
                        answer="Yes, we take data privacy seriously. Any photos you upload are used only for disease detection and are not shared with third parties. You can delete your data at any time from the settings page."
                    />
          
                    <FAQItem
                        question="Can I use Agrimitra without an internet connection?"
                        answer="Currently, Agrimitra requires an internet connection to perform disease detection as the AI analysis is performed on our servers. We're working on an offline mode for a future update."
                    />
                </div>
            </div>
      
            <div className="card bg-primary-50 border border-primary-100">
                <div className="flex items-center">
                    <div className="p-4 bg-primary-100 rounded-lg mr-4">
                        <Headphones className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-primary-800 mb-1">Need more help?</h3>
                        <p className="text-primary-700">
                            Our support team is available 24/7 to assist you with any questions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpPage;
