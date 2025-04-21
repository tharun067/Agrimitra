import React from 'react'
import useHistory from '../hooks/useHistory'
import { Clock, Leaf, AlertCircle, Calendar } from 'lucide-react';

function HistoryPage() {
    const {history} = useHistory()
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Diagnosis History</h1>
        <div className="flex items-center">
          <Calendar className="w-5 h-5 text-gray-500 mr-2" />
          <span className="text-sm text-gray-500">Past 30 days</span>
        </div>
      </div>
      
      {history.length === 0 ? (
        <div className="card text-center py-16">
          <div className="flex justify-center mb-4">
            <Clock className="h-16 w-16 text-gray-300" />
          </div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">No history yet</h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Your plant diagnosis history will appear here once you've analyzed some plants.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {history.map((item) => (
            <div key={item.id} className="card hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/4">
                  <img 
                    src={item.imageUrl} 
                    alt={item.plantName} 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                
                <div className="w-full md:w-3/4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{item.plantName}</h3>
                      <div className="flex items-center">
                        <AlertCircle 
                          className={`w-4 h-4 mr-1 ${
                            item.severity === 'High' 
                              ? 'text-red-500' 
                              : item.severity === 'Medium'
                              ? 'text-orange-500'
                              : 'text-yellow-500'
                          }`} 
                        />
                        <span 
                          className={`text-sm ${
                            item.severity === 'High' 
                              ? 'text-red-500' 
                              : item.severity === 'Medium'
                              ? 'text-orange-500'
                              : 'text-yellow-500'
                          }`}
                        >
                          {item.diseaseName} - {item.severity} Severity
                        </span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-3 line-clamp-2">{item.recommendation}</p>
                  
                  <div className="flex justify-end">
                    <button className="btn-outline text-sm">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default HistoryPage
