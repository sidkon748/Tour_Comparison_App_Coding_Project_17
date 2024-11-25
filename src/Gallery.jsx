import { useState, useEffect } from 'react';

const Gallery = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchTours = async () => {
        try {
          const response = await fetch('https://course-api.com/react-tours-project');
          if (!response.ok) {
            throw new Error('Failed to fetch tours');
          }
          const data = await response.json();
          setTours(data);
        } catch (err) {
          setError(err.message);
        }
      };
  
      fetchTours();
    }, []); 
  
    const toggleDescription = (id) => {
      setTours((prevTours) =>
        prevTours.map((tour) =>
          tour.id === id ? { ...tour, showMore: !tour.showMore } : tour
        )
      );
    };
  
    // if (loading) {
    //   return <div>Loading...</div>;
    // }
  
    // if (error) {
    //   return <div>Error: {error}</div>;
    // }
  
    return (
      <div className="gallery">
        {tours.length === 0 ? (
          <h2>No Tours Available</h2>
        ) : (
          tours.map((tour) => (
            <div key={tour.id} className="tour-card">
              <img src={tour.image} alt={tour.name} />


              <p>
                {tour.showMore ? tour.description : `${tour.description.substring(0, 100)}...`}
                <button onClick={() => toggleDescription(tour.id)}>
                  {tour.showMore ? 'Show Less' : 'Read More'}
                </button>
              </p>
            </div>
          ))
        )}
      </div>
    );
  };
  
export default Gallery;
