import React, {useState} from 'react';
import Classes from "../Styles/SingaPore.module.css";
import BookingForm from './BookingForm/BookingForm';
import Footer from './Footer';
import {Link} from 'react-router-dom'

const ParisTripPage = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = () => setIsFormOpen(true);
    const closeForm = () => setIsFormOpen(false);
  
  return (<>
    <div className={Classes.container}>
      <main>
        <header>
          <h1 className={Classes.heading}>Welcome to Your <span>Paris Adventure!</span></h1>
        </header>
        <section className={Classes.maincontent}>
          <div className={Classes.tripdetails}>
            <h2 className={Classes.subheading}>Plan Your Trip to <span>Paris</span></h2>
            <p className={Classes.description}>Discover the beauty and excitement of Paris!</p>
            {/* <button className={Classes.button}>Book Now</button> */}
          </div>
          <div className={Classes.imagegallery}>
            {/* Add images of Singapore attractions */}
            <img src="https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Paris Image 1" />
            <img src="https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Paris Image 2" />
            <img src="https://images.pexels.com/photos/24403667/pexels-photo-24403667/free-photo-of-a-statue-of-a-man-and-woman-in-a-cave.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Paris Image 3" />
          </div>

          <h1>More Information</h1>
      <ul className="trip-info">
      <li><strong>Info:</strong> Paris, France's capital, also known as City of Love.</li>
      <li><strong>Cost:</strong> $45,500</li>
      <li><strong>Duration:</strong> Approx 2 night trip</li>
      <li><strong>Distance:</strong> 8,717 KM</li>
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

export default ParisTripPage;
