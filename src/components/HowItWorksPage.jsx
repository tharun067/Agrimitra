import React from 'react';
import { Camera, Upload, AlertTriangle, Leaf, Activity, Users } from 'lucide-react';

function HowItWorksPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">How Agrimitra Works</h1>
      
            {/* Process Steps */}
            <div className="card mb-8">
                <h2 className="text-xl font-semibold mb-6">Disease Detection Process</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="rounded-full bg-primary-100 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <Camera className="h-8 w-8 text-primary-600" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">1. Capture Image</h3>
                        <p className="text-gray-600">
                            Take a clear photo of the affected plant part using your camera or upload an existing image.
                        </p>
                    </div>
          
                    <div className="text-center">
                        <div className="rounded-full bg-primary-100 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <Upload className="h-8 w-8 text-primary-600" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">2. AI Analysis</h3>
                        <p className="text-gray-600">
                            Our advanced AI model analyzes the image to identify signs of disease with high accuracy.
                        </p>
                    </div>
          
                    <div className="text-center">
                        <div className="rounded-full bg-primary-100 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <AlertTriangle className="h-8 w-8 text-primary-600" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">3. Get Results</h3>
                        <p className="text-gray-600">
                            Receive detailed diagnosis and treatment recommendations from agricultural experts.
                        </p>
                    </div>
                </div>
            </div>
      
            {/* Key Features */}
            <div className="card mb-8">
                <h2 className="text-xl font-semibold mb-6">Key Features</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-primary-50 rounded-lg">
                        <div className="rounded-full bg-white p-2 w-10 h-10 flex items-center justify-center mb-3">
                            <Leaf className="h-5 w-5 text-primary-600" />
                        </div>
                        <h3 className="font-semibold mb-2">Early Detection</h3>
                        <p className="text-sm text-gray-600">
                            Identify diseases before they spread and damage your entire crop.
                        </p>
                    </div>
          
                    <div className="p-4 bg-primary-50 rounded-lg">
                        <div className="rounded-full bg-white p-2 w-10 h-10 flex items-center justify-center mb-3">
                            <Activity className="h-5 w-5 text-primary-600" />
                        </div>
                        <h3 className="font-semibold mb-2">Real-time Analysis</h3>
                        <p className="text-sm text-gray-600">
                            Get instant results powered by our advanced AI technology.
                        </p>
                    </div>
          
                    <div className="p-4 bg-primary-50 rounded-lg">
                        <div className="rounded-full bg-white p-2 w-10 h-10 flex items-center justify-center mb-3">
                            <Users className="h-5 w-5 text-primary-600" />
                        </div>
                        <h3 className="font-semibold mb-2">Expert Guidance</h3>
                        <p className="text-sm text-gray-600">
                            Receive treatment recommendations from agricultural experts.
                        </p>
                    </div>
                </div>
            </div>
      
            {/* Technology Section */}
            <div className="card mb-8">
                <h2 className="text-xl font-semibold mb-6">Our Technology</h2>
                <div className="space-y-4">
                    <p className="text-gray-700">
                        Agrimitra uses state-of-the-art machine learning models trained on thousands of plant disease images. Our system can:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Detect over 50 different plant diseases across 20+ crop species</li>
                        <li>Provide diagnosis with over 90% accuracy</li>
                        <li>Generate customized treatment recommendations</li>
                        <li>Work with various image qualities and lighting conditions</li>
                    </ul>
                </div>
            </div>
      
            {/* Best Practices */}
            <div className="card">
                <h2 className="text-xl font-semibold mb-6">Best Practices for Disease Detection</h2>
                <div className="space-y-4">
                    <div className="p-4 bg-primary-50 rounded-lg">
                        <h3 className="font-semibold mb-2">Taking Good Photos</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Ensure good lighting conditions</li>
                            <li>Focus on the affected area</li>
                            <li>Include both healthy and diseased parts for comparison</li>
                            <li>Take multiple angles if needed</li>
                        </ul>
                    </div>
          
                    <div className="p-4 bg-primary-50 rounded-lg">
                        <h3 className="font-semibold mb-2">When to Check for Diseases</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Regular weekly inspections</li>
                            <li>After rainfall or high humidity periods</li>
                            <li>When noticing any unusual plant symptoms</li>
                            <li>During critical growth stages</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowItWorksPage