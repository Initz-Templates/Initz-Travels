import React , {useState}from 'react';
import Classes from "../Styles/SingaPore.module.css";
import BookingForm from './BookingForm/BookingForm';
import Footer from './Footer';
import {Link} from 'react-router-dom'

const NewZealandTripPage = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = () => setIsFormOpen(true);
    const closeForm = () => setIsFormOpen(false);
  
  return (<>
    <div className={Classes.container}>
      <main>
        <header>
          <h1 className={Classes.heading}>Welcome to Your <span>New Zealand Adventure!</span></h1>
        </header>
        <section className={Classes.maincontent}>
          <div className={Classes.tripdetails}>
            <h2 className={Classes.subheading}>Plan Your Trip to <span>New Zealand</span></h2>
            <p className={Classes.description}>Discover the beauty and excitement of New Zealand!</p>
            {/* <button className={Classes.button}>Book Now</button> */}
          </div>
          <div className={Classes.imagegallery}>
            {/* Add images of Singapore attractions */}
            <img src="https://images.pexels.com/photos/37650/new-zealand-lake-mountain-landscape-37650.jpeg?auto=compress&cs=tinysrgb&w=600" alt="NewZealand Image 1" />
            <img src="https://images.pexels.com/photos/710263/pexels-photo-710263.jpeg?auto=compress&cs=tinysrgb&w=600" alt="NewZealand Image 2" />
            <img src="https://images.pexels.com/photos/2463951/pexels-photo-2463951.jpeg?auto=compress&cs=tinysrgb&w=600" alt="NewZealand Image 3" />
          </div>

          <h1>More Information</h1>
      <ul className="trip-info">
      <li><strong>Info:</strong> New Zealand is an island country in the southwestern Pacific Ocean.</li>
      <li><strong>Cost:</strong> $24,100</li>
      <li><strong>Duration:</strong> Approx 1 night trip</li>
      <li><strong>Distance:</strong> 11,965 KM</li>
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

export default NewZealandTripPage;
