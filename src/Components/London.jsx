import React , {useState} from 'react';
import Classes from "../Styles/SingaPore.module.css";
import BookingForm from './BookingForm/BookingForm';
import Footer from './Footer';
import {Link} from 'react-router-dom'

const LondonTripPage = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = () => setIsFormOpen(true);
    const closeForm = () => setIsFormOpen(false);
  
  return (<>
    <div className={Classes.container}>
      <main>
        <header>
          <h1 className={Classes.heading}>Welcome to Your <span>London Adventure!</span></h1>
        </header>
        <section className={Classes.maincontent}>
          <div className={Classes.tripdetails}>
            <h2 className={Classes.subheading}>Plan Your Trip to <span>London</span></h2>
            <p className={Classes.description}>Discover the beauty and excitement of London!</p>
            {/* <button className={Classes.button}>Book Now</button> */}
          </div>
          <div className={Classes.imagegallery}>
            {/* Add images of Singapore attractions */}
            <img src="https://images.pexels.com/photos/9394657/pexels-photo-9394657.jpeg?auto=compress&cs=tinysrgb&w=600" alt="London Image 1" />
            <img src="https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=600" alt="London Image 2" />
            <img src="https://images.pexels.com/photos/11434425/pexels-photo-11434425.jpeg?auto=compress&cs=tinysrgb&w=600" alt="London Image 3" />
          </div>
          <h1>More Information</h1>
      <ul className="trip-info">
      <li><strong>Info:</strong> London, the capital of England and the United Kingdom</li>
      <li><strong>Cost:</strong> $38,800</li>
      <li><strong>Duration:</strong> Approx 3 night 2 day trip</li>
      <li><strong>Distance:</strong> 7,480 KM</li>
    </ul>
          <div style={{display: 'flex', justifyContent: 'space-between  '}}>
          <Link to="/"><button className={Classes.button} >Back</button></Link>
          <button onClick={openForm} className={Classes.button} >Book Now</button>
          <BookingForm isOpen={isFormOpen} onClose={closeForm} />
          </div>
        </section>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default LondonTripPage;
