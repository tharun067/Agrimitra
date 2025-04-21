import React, { useEffect, useState } from 'react'

function useHistory() {
    const [history, setHistory] = useState([]);
    useEffect(() => {
        const mockHistory = [
            {
              id: '1',
              plantName: 'Tomato',
              diseaseName: 'Early Blight',
              severity: 'Medium',
              date: '2025-03-15',
              imageUrl: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              recommendation:
                'Remove infected leaves and apply copper-based fungicide. Ensure proper spacing between plants for air circulation.',
            },
            {
              id: '2',
              plantName: 'Rice',
              diseaseName: 'Bacterial Leaf Blight',
              severity: 'High',
              date: '2025-03-10',
              imageUrl: 'https://images.pexels.com/photos/7556638/pexels-photo-7556638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              recommendation:
                'Use disease-resistant varieties and apply streptomycin sulfate. Drain fields to reduce humidity.',
            },
            {
              id: '3',
              plantName: 'Apple Tree',
              diseaseName: 'Apple Scab',
              severity: 'Low',
              date: '2025-03-05',
              imageUrl: 'https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              recommendation:
                'Apply fungicide during the growing season. Clean up fallen leaves to prevent overwintering of the fungus.',
            },
          ];
      
          setHistory(mockHistory);
    },[])
    return {
      history
  }}

export default useHistory
