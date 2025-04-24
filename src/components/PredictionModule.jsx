import React, { useRef, useState } from "react";
import { Camera, Upload, X, AlertTriangle } from "lucide-react";
import Webcam from "react-webcam";

function PredictionModule() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usingCamera, setUsingCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const webcamRef = useRef(null);
  const API_URL = "https://agrimitra-g58j.onrender.com";

  const openModal = () => {
    setIsModalOpen(true);
    setUsingCamera(false);
    setCapturedImage(null);
    setPredictionResult(null);
    setError(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setUsingCamera(false);
    setCapturedImage(null);
  };

  const startCamera = () => {
    setUsingCamera(true);
    setCapturedImage(null);
    setPredictionResult(null);
    setError(null);
  };

  const captureImage = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
      setUsingCamera(false);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Please upload a valid image file.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setCapturedImage(e.target.result);
          setUsingCamera(false);
          setError(null);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePredict = async () => {
    if (!capturedImage) return;

    setIsLoading(true);
    setPredictionResult(null);
    setError(null);

    try {
      const blob = await fetch(capturedImage).then((res) => res.blob());
      const formData = new FormData();
      formData.append("file", blob, "plant-image.jpg");

      const response = await fetch(`${API_URL}/predict`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      const disease = data.prediction;
      setPredictionResult({
        disease: disease,
        confidence: data.confidence,
        description: getDiseaseDescription(disease),
        treatment: getDiseaseTreatment(disease),
      });
    } catch (err) {
      setError(err.message || "Prediction failed. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const getDiseaseDescription = (disease) => {
    if (!disease) return "No Information available.";
    const descriptions = {
      Strawberry___Leaf_scorch:
        "Strawberry Leaf Scorch is a fungal disease that causes yellowing, browning, and scorching of the leaf margins, leading to early leaf drop",
      Tomato___Bacterial_spot:
        "Bacterial infection causing small, dark spots with yellow halos.",
      "Corn_(maize)_healthy": "Your corn plant appears healthy.",
      "Grape__Leaf_blight(Isariopsis_Leaf_Spot)":"Grape Leaf Blight, caused by Isariopsis clavispora, is a fungal disease affecting grapevine leaves. It produces dark brown or black angular spots that enlarge under humid conditions, leading to yellowing and premature leaf drop, which reduces photosynthesis and fruit yield.",
    };
    return (
      descriptions[disease] ||
      `This seems like a case of ${disease.replace("___", " ")}.`
    );
  };

  const getDiseaseTreatment = (disease) => {
    if (!disease) return "No information available.";
    const treatments = {
      Strawberry___Leaf_scorch: "Apply fungicides like copper-based products and remove infected leaves to reduce disease spread.",
      Tomato___Bacterial_spot:
        "Use copper-based bactericides. Avoid overhead watering.",
      "Corn_(maize)_healthy": "Keep up good growing practices.",
      "Grape__Leaf_blight(Isariopsis_Leaf_Spot)":
        "Apply recommended fungicides like mancozeb or chlorothalonil, ensure good air circulation through pruning, and remove infected leaves to prevent spread.",
    };
    return (
      treatments[disease] ||
      "Consult your local agriculture extension for treatment."
    );
  };

  const retryCapture = () => {
    setCapturedImage(null);
    setPredictionResult(null);
    setError(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Plant Disease Detection
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Upload a plant image or take a photo to identify diseases and get
          treatment suggestions.
        </p>
      </div>

      <div className="card text-center p-8 mb-6">
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-full bg-primary-100 p-4 mb-4">
            <Camera className="h-8 w-8 text-primary-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Diagnose Your Plant
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg">
            Upload a clear photo of the affected area to analyze the disease.
          </p>
          <button
            onClick={openModal}
            className="btn-primary text-lg px-8 py-3 shadow-md transition-transform hover:scale-105"
          >
            Start Diagnosis
          </button>
        </div>
      </div>

      <div className="card p-6 bg-primary-50 border border-primary-100">
        <h3 className="text-xl font-semibold text-primary-800 mb-4">
          How It Works
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center text-center p-3">
            <Camera className="h-5 w-5 mb-2 text-primary-600" />
            <h4 className="font-medium">Take a Photo</h4>
            <p className="text-sm text-gray-600">
              Capture the affected part of the plant clearly.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-3">
            <Upload className="h-5 w-5 mb-2 text-primary-600" />
            <h4 className="font-medium">Upload Image</h4>
            <p className="text-sm text-gray-600">
              Upload from your device for analysis.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-3">
            <AlertTriangle className="h-5 w-5 mb-2 text-primary-600" />
            <h4 className="font-medium">Get Results</h4>
            <p className="text-sm text-gray-600">
              Receive the diagnosis and treatment tips.
            </p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={closeModal}
            ></div>

            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-3xl z-10 p-6">
              <div className="flex justify-between items-center border-b pb-3 mb-4">
                <h3 className="text-xl font-semibold">
                  {predictionResult
                    ? "Diagnosis Result"
                    : "Plant Disease Detection"}
                </h3>
                <button onClick={closeModal}>
                  <X className="h-6 w-6 text-gray-400 hover:text-gray-600" />
                </button>
              </div>

              {!capturedImage && !usingCamera && !predictionResult && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={startCamera}
                    className="btn-primary flex items-center gap-2 py-2 px-4"
                  >
                    <Camera className="h-5 w-5" />
                    Take Live Photo
                  </button>

                  <label className="btn-outline flex items-center gap-2 py-2 px-4 cursor-pointer">
                    <Upload className="h-5 w-5" />
                    Upload from Storage
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                  </label>
                </div>
              )}

              {usingCamera && (
                <div className="flex flex-col items-center">
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={{ facingMode: "environment" }}
                    className="w-full max-w-md mb-4 border rounded"
                  />
                  <div className="flex gap-3">
                    <button
                      className="btn-outline"
                      onClick={() => setUsingCamera(false)}
                    >
                      Cancel
                    </button>
                    <button className="btn-primary" onClick={captureImage}>
                      Capture
                    </button>
                  </div>
                </div>
              )}

              {capturedImage && !predictionResult && (
                <div className="text-center">
                  <img
                    src={capturedImage}
                    alt="Captured"
                    className="mx-auto max-h-64 border rounded mb-4"
                  />
                  {error && <p className="text-red-600 mb-2">{error}</p>}
                  <div className="flex justify-center gap-4">
                    <button className="btn-outline" onClick={retryCapture}>
                      Retry
                    </button>
                    <button className="btn-primary" onClick={handlePredict}>
                      {isLoading ? "Analyzing..." : "Predict"}
                    </button>
                  </div>
                </div>
              )}

              {predictionResult && (
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3">
                    <img
                      src={capturedImage}
                      alt="Analyzed plant"
                      className="w-full rounded-lg border border-gray-300"
                    />
                  </div>

                  <div className="w-full md:w-2/3">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-primary-800 mb-1">
                        Diagnosis
                      </h4>
                      <p className="text-2xl font-bold text-red-600 mb-2">
                        {predictionResult.disease}
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                        <div
                          className="bg-primary-600 h-2.5 rounded-full"
                          style={{ width: `${predictionResult.confidence}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-500">
                        Confidence: {predictionResult.confidence}%
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-primary-800 mb-1">
                        Description
                      </h4>
                      <p className="text-gray-700">
                        {predictionResult.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-primary-800 mb-1">
                        Treatment
                      </h4>
                      <p className="text-gray-700">
                        {predictionResult.treatment}
                      </p>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={retryCapture}
                        className="btn-outline mr-3"
                      >
                        Analyze Another Plant
                      </button>
                      <button onClick={closeModal} className="btn-primary">
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PredictionModule;
