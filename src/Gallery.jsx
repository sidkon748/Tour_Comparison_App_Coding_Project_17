// Task 2
// Gallery.jsx (Tour List Component)

// imports from react
import { useState, useEffect } from 'react';

const Gallery = () => {
    // useState for tours, loading, and error components of Gallery function
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    // useEffect fetches API data and updates the App based on the data
    useEffect(() => {
      const fetchTours = async () => {
        try {
          const response = await fetch('https://course-api.com/react-tours-project');
          if (!response.ok) {
            throw new Error('Failed to fetch tours');
          }
          const data = await response.json();
          setTours(data);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
  
      fetchTours();
    }, []); 
  
    // removeTour filters out tours by ID
    const removeTour = (id) => {
      setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
    };
  
    const toggleDescription = (id) => {
      setTours((prevTours) =>
        prevTours.map((tour) =>
          tour.id === id ? { ...tour, showMore: !tour.showMore } : tour
        )
      );
    };
  
    // if statements for loading and error, displaying loading message or error message respectively 
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return (
      <div className="gallery">
        {tours.length === 0 ? (
          <h2>No Tours Available</h2>
        ) : (
          tours.map((tour) => (
            <div key={tour.id} className="tour-card">
              <img src={tour.image} alt={tour.name} />
              <h2>{tour.name}</h2>
              <p>{tour.price}</p>
  
              <p>
                {tour.showMore ? tour.description : `${tour.description.substring(0, 100)}...`}
                <button onClick={() => toggleDescription(tour.id)}>
                  {tour.showMore ? 'Show Less' : 'Read More'}
                </button>
              </p>
  
              <button onClick={() => removeTour(tour.id)} className="remove-btn">
                Not Interested
              </button>
            </div>
          ))
        )}
      </div>
    );
  };
  
export default Gallery;
