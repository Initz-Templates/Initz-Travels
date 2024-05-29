import React, {useState} from 'react';
import Classes from "../Styles/SingaPore.module.css";
import BookingForm from './BookingForm/BookingForm';
import Footer from './Footer';
import {Link} from 'react-router-dom'

const SingaporeTripPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (<>
    <div className={Classes.container}>
      <main>
        <header>
          <h1 className={Classes.heading}>Welcome to Your <span>Singapore Adventure!</span></h1>
        </header>
        <section className={Classes.maincontent}>
          <div className={Classes.tripdetails}>
            <h2 className={Classes.subheading}>Plan Your Trip to <span>Singapore</span></h2>
            <p className={Classes.description}>Discover the beauty and excitement of Singapore!</p>
            {/* <button className={Classes.button}>Book Now</button> */}
          </div>
          <div className={Classes.imagegallery}>
            {/* Add images of Singapore attractions */}
            <img src="https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg" alt="Singapore Image 1" />
            <img src="https://images.pexels.com/photos/290597/pexels-photo-290597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Singapore Image 2" />
            <img src="https://images.pexels.com/photos/326787/pexels-photo-326787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Singapore Image 3" />
          </div>

          <h1>More Information</h1>
      <ul className="trip-info">
      <li><strong>Info:</strong> Singapore is an island and city state, the Smallest Country.</li>
      <li><strong>Cost:</strong> $38,800</li>
      <li><strong>Duration:</strong> Approx 2 night trip</li>
      <li><strong>Distance:</strong> 5,961 KM</li>
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

export default SingaporeTripPage;
