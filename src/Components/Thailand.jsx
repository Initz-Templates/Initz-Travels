import React, {useState} from 'react';
import Classes from "../Styles/SingaPore.module.css";
import BookingForm from './BookingForm/BookingForm';
import Footer from './Footer';
import {Link} from 'react-router-dom'

const ThailandTripPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (<>
    <div className={Classes.container}>
      <main>
        <header>
          <h1 className={Classes.heading}>Welcome to Your <span>Thailand Adventure!</span></h1>
        </header>
        <section className={Classes.maincontent}>
          <div className={Classes.tripdetails}>
            <h2 className={Classes.subheading}>Plan Your Trip to <span>Thailand</span></h2>
            <p className={Classes.description}>Discover the beauty and excitement of Thailand!</p>
            {/* <button className={Classes.button}>Book Now</button> */}
          </div>
          <div className={Classes.imagegallery}>
            {/* Add images of Singapore attractions */}
            <img src="https://images.pexels.com/photos/415708/pexels-photo-415708.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Thailand Image 1" />
            <img src="https://images.pexels.com/photos/358229/pexels-photo-358229.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Thailand Image 2" />
            <img src="https://images.pexels.com/photos/1929611/pexels-photo-1929611.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Thailand Image 3" />
          </div>
          <h1>More Information</h1>
      <ul className="trip-info">
      <li><strong>Info:</strong> Thailand is a Southeast Asia country, known for beaches and islands.</li>
      <li><strong>Cost:</strong> $54,200</li>
      <li><strong>Duration:</strong> Approx 2 night trip</li>
      <li><strong>Distance:</strong> 4,182 KM</li>
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

export default ThailandTripPage;
