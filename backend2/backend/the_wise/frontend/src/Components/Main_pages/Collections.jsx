
import './Collections.css'
import sort_icon from '../../assets/images/sort.png'
import image1 from '../../assets/images/bg1.jpg';
import image2 from '../../assets/images/bg2.jpg';
import image3 from '../../assets/images/bg3.jpg';
import image6 from '../../assets/images/bg6.jpg';
import image7 from '../../assets/images/bg7.jpg';
import image8 from '../../assets/images/bg8.jpg';

export const Collections = () => {
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
    
  return (
    <>
    <div className="Collections">
    <div className="header">
        <h2>Collections</h2>
        <div className="sort_icon">
        <img src={sort_icon} alt="" />
        </div>
    </div>

    <div className="heading">
        <h3>Inspiration</h3>
      </div>
      <div className="scroll-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <section className="featured-section">
          <div className="featured-box" style={{ backgroundImage: `url(${image1})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image2})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image7})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image6})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image8})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image1})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image2})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image3})` }}>
          </div>
        </section>
        <button className="scroll-button right" onClick={scrollRight}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

     <div className="heading">
        <h3>Motivation</h3>
      </div>
      <div className="scroll-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <section className="featured-section">
          <div className="featured-box" style={{ backgroundImage: `url(${image1})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image2})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image7})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image6})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image8})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image1})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image2})` }}>
          </div>
          <div className="featured-box" style={{ backgroundImage: `url(${image3})` }}>
          </div>
        </section>
        <button className="scroll-button right" onClick={scrollRight}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

    </div>
    </>
  )
}
