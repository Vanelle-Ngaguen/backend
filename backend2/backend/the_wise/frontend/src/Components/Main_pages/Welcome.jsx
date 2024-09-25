import './Main.css';
import axios from 'axios';
import logo from '../../assets/images/logo.png';
import image1 from '../../assets/images/bg1.jpg';
import image2 from '../../assets/images/bg2.jpg';
import image3 from '../../assets/images/bg3.jpg';
import image6 from '../../assets/images/bg6.jpg';
import image7 from '../../assets/images/bg7.jpg';
import image8 from '../../assets/images/bg8.jpg';
import authorImage1 from '../../assets/images/ath1.webp';
import authorImage2 from '../../assets/images/auth2.jpg';
import authorImage3 from '../../assets/images/Auth3.jpg';
import authorImage4 from '../../assets/images/Auth4.jpg';
import authorImage5 from '../../assets/images/Auth5.webp';
import authorImage6 from '../../assets/images/Ath6.webp';
import authorImage7 from '../../assets/images/Ath7.jpg';
import authorImage8 from '../../assets/images/toni morrison.webp';
import authorImage9 from '../../assets/images/ralp.webp';
import authorImage10 from '../../assets/images/maya.webp';
import authorImage11 from '../../assets/images/sylvia.webp';
import authorImage12 from '../../assets/images/Ath7.jpg';

import { useEffect, useState } from 'react';

const Welcome = () => {
  const [quotes, setQuotes] = useState([]);
  const [welcomeQuote, setWelcomeQuote] = useState(null);
  const [featuredQuotes, setFeaturedQuotes] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('http://localhost:4005/api/quotes/quotes');
        const shuffledQuotes = response.data.Quotes.sort(() => 0.5 - Math.random()).slice(0, 8);
        setWelcomeQuote(shuffledQuotes[0]);
        setFeaturedQuotes(shuffledQuotes.slice(1, 8));
        setQuotes(shuffledQuotes);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchQuote();

    const fetchAuthors = async () => {
      try {
        const response = await axios.get('http://localhost:4005/api/authors/GetAll');
        //console.log('Authors data:', response.data); // Log the data to inspect it
        const authors= response.data.Authors;
        console.log(authors);

        if (response.data && Array.isArray(response.data.Authors)) {
          //setAuthors(response.data.Authors); // Access the Authors property
          //console.log(response.data.Authors);
        } else {
          console.error('Data is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching author data:', error);
      }
    };

    fetchAuthors();
  }, []);

  const scrollLeft = () => {
    document.querySelector('.featured-section').scrollBy({
      left: -200,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    document.querySelector('.featured-section').scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  };

  const images = [image1, image2, image7, image6, image8, image1, image2, image3];
  const fallbackImages = [authorImage8, authorImage9, authorImage10, authorImage11,authorImage12]
  


  return (
    <div className="home">
      <h2>Welcome to The Wise</h2>
      <h3>Quote of the day</h3>
      <section className="image-background" style={{ backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="background-overlay">
          <div className="quote-container">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error loading quotes: {error.message}</p>
            ) : (
              welcomeQuote && (
                <div className="quote-box">
                <p className="quote-text">
                  {welcomeQuote.description ? welcomeQuote.description : "No quote available"}
                </p>
                <small className="quote-author">
                  {welcomeQuote.name ? `- ${welcomeQuote.name}` : "Unknown"}
                </small>
              </div>
              
              )
            )}
          </div>
        </div>
      </section>

      <div className="heading">
        <h3>For You</h3>

      </div>
      <div className="scroll-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <section className="featured-section">
          {images.map((image, index) => (
            <div className="featured-box" style={{ backgroundImage: `url(${image})` }} key={index}>
              <div className="quote-container">
                {featuredQuotes[index] && (
                <div className="quote-box">
                <p className="featured-quote-text">
                  {featuredQuotes[index].description ? featuredQuotes[index].description : "No quote available"}
                </p>
                <small className="featured-quote-author">
                  {featuredQuotes[index].name ? `- ${featuredQuotes[index].name}` : "Unknown"}
                </small>
              </div>
              
                )}
              </div>
              <div className="feature-buttons">
                <button className="favorite-button"><i className="fas fa-heart"></i></button>
                <button className="download-button"><i className="fas fa-download"></i></button>
                <button className="share-button"><i className="fas fa-share"></i></button>
              </div>
            </div>
          ))}
        </section>
        <button className="scroll-button right" onClick={scrollRight}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div className="heading">
        <h3>Popular Authors</h3>
      </div>
      <div className="scroll-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <section className="featured-section">
          {Array.isArray(authors) && authors.length > 0 ? (
            authors.map((author, index) => {
              console.log('Author:', author); // Log the author data
              return (
                <div
                  className="featured-box"
                  style={{
                    backgroundImage: `url('${authors[4].a_pic}')`
                  }}
                  key={index}
                  // || fallbackImages[index % fallbackImages.length]
                  
                >
                  

                  <div className="author-name-overlay">
                    <p style={{ fontSize: '1.2em', color: 'white', marginTop: 'auto', marginBottom: '10px', textAlign: 'center', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                      {author.name ? author.name : "Unknown Author"}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No authors available</p>
          )}
        </section>
        <button className="scroll-button right" onClick={scrollRight}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div className="authortest">
      {authors.map(author => <img key={author} src={authors.a_pic}/>)}
      </div>

      <div className="heading">
        <h3>Collections</h3>
      </div>
      <div className="scroll-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <section className="featured-section">
          {images.map((image, index) => (
            <div className="featured-box" style={{ backgroundImage: `url(${image})` }} key={index}>
              <div className="feature-buttons">
                <button className="favorite-button"><i className="fas fa-heart"></i></button>
                <button className="share-button"><i className="fas fa-share"></i></button>
              </div>
            </div>
          ))}
        </section>
        <button className="scroll-button right" onClick={scrollRight}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Welcome;
