import "../css/Home.css";
import "../App.css";
import { Link } from 'react-router-dom';
import SocialCard from "../components/SocialCard";
import TeamCard from "../components/TeamCard";
import GalleryCard from "../components/GalleryCard";
import PhotoGallery from "../components/PhotoGallery";

import Footer from '../components/Footer';
import About from '../components/About';
import AdvisorCard from '../components/AdvisorCard';
import WhatWeDo from '../components/Whatwedo';
import Navbar from '../components/Navbar';
import Reviews from "../components/Reviews";

import { Fragment } from 'react';
import ScrollToTop from '../components/Scrolltotop';
import { Content, Heading } from '../css/ScrolltotopStyles';
import Loader from '../components/Loader';


function Home() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />

      <section>
        <About />
      </section>

      {/* {Gallery Section} */}
      <section id="gallery-section" className="gallery-item">
        <div className="container">
          <div className="gallery-title text-center">
            <h2>Gallery</h2>
            <br />
          </div>

          <div className="row photo-section">
            {/* <GalleryCard
               image="./public/images/" /> */}
            {PhotoGallery.slice(0, 3).map((photo) => {
              return <GalleryCard key={photo.id} image={photo.image} />;
            })}
            
            <div className="d-flex justify-content-center">
              <Link to="/gallery">
                <button type="button" className="gallery-button" >See more...</button>
              </Link>

            </div>


          </div>
        </div>
      </section>
      {/* {End of gallery section} */}

      {/* Advisor Section  */}
      <section id="advisor" className="advisor">
        <div className="container">
          <div className="section-title text-center">
            <h2>Our Advisors</h2>
          </div>

          <div className="row">
            <AdvisorCard
              name="Anupam Sen"
              linkedin="https://www.linkedin.com/in/anupam-sen-a16b7013/?originalSubdomain=in"
              img="images/team-1.png" />

            <AdvisorCard
              name="Tamal Pal"
              linkedin="https://www.linkedin.com/in/tamal-kumar-pal-46095112/"
              img="images/team-2.png" />

            <AdvisorCard
              name="S.K. Shahi"
              linkedin="https://www.linkedin.com/in/s-k-shahi-2ba7b31b3/"
              img="images/team-5.png" />

            <AdvisorCard
              name="Uday Chatterjee"
              linkedin="https://www.linkedin.com/in/uday-chatterjee-838b764/"
              img="images/team-6.png" />

          </div>
        </div>
      </section>
      {/* {End of Advisor section} */}

      <section>
        <Reviews />
      </section>

      {/* Social Cards  Section */}
      <section id="social-item" className="social-item">
        <div className="container dcol">
          <div className="section-title">
            <h2>Want to know more about us?</h2>
          </div>
     <div className="socialcardsalign">
            <div className="row">
            <SocialCard
              socialIcon="instagram"
              text="Team's daily lives. Photos, jokes and the office atmosphere!"
            />

            <SocialCard
              socialIcon="facebook"
              text="Stories, tips, popular, add-ons, and other important info."
            />
            </div>
            <div className="row">
             <SocialCard
              socialIcon="twitter"
              text="Here we share Tech and Development insights."
            />

            <SocialCard
              socialIcon="linkedin"
              text="Tech and Development insights."
            />
             
            <div className="row">
            <div className="section-title">
            <h4 className="iframestyle">Rabvik Innovations on Facebook</h4>
          </div>
          </div>
          <div className="row">
            <iframe src="https://www.facebook.com/plugins/page.php?href=http%3A%2F%2Ffacebook.com%2F307451343272424%2F&tabs=timeline%2C%20events%2C%20messages&width=700&height=740&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="700" height="740" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
        </iframe>            
            </div>
</div>

</div>


        </div>
      </section>
      {/* End Social Cards Section  */}

      <section>
        <Footer />
      </section>
    </div>
  );
}
export default Home;
