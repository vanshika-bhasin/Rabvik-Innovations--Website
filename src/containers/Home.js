import "../css/Home.css";
import "../App.css";
import { Link } from 'react-router-dom';
import SocialCard from "../components/SocialCard";
import TeamCard from "../components/TeamCard";
import GalleryCard from "../components/GalleryCard";
import PhotoGallery from "../components/PhotoGallery";
import Hero from '../components/Hero';

import About from '../components/About';
import AdvisorCard from '../components/AdvisorCard';
import WhatWeDo from '../components/Whatwedo';
import Navbar from '../components/Navbar';
import Reviews from "../components/Reviews";
import Footer from '../components/Footer';

import { Fragment } from 'react';
import ScrollToTop from '../components/Scrolltotop';
import { Content, Heading } from '../css/ScrolltotopStyles';
import Loader from '../components/Loader';

function Home() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <br/><br/>

<section>
<Hero/>
</section>


<section>
  <WhatWeDo/>
  </section>

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
            <h2 style={{color:"white"}}>Our Advisors</h2>
          </div>

          <div className="row">
            <AdvisorCard
              name="Anupam Sen"
              designation="Chartered Accountant, Ex-PWC, Ex-IBM"
              linkedin="https://www.linkedin.com/in/anupam-sen-a16b7013/?originalSubdomain=in"
              img="images/team-1.png" />

            <AdvisorCard
              name="Tamal Pal"
              designation="Corporate Strategy ,M&A ,New Business Incubation ,Industry 4.0 transformation ,Cement"
              linkedin="https://www.linkedin.com/in/tamal-kumar-pal-46095112/"
              img="images/team-2.jfif" />

            <AdvisorCard
              name="S.K. Shahi"
              designation="Director at Centre for Social Responsibility & Leadership"
              linkedin="https://www.linkedin.com/in/s-k-shahi-2ba7b31b3/"
              img="images/team-5.jfif" />

            <AdvisorCard
              name="Uday Chatterjee"
              designation="Angel Investor"
              linkedin="https://www.linkedin.com/in/uday-chatterjee-838b764/"
              img="images/team-6.jfif" />

          </div>
        </div>
      </section>
      {/* {End of Advisor section} */}

      <section>
        <Reviews />
      </section>

      {/* Social Cards  Section */}
      <section id="social-item" className="social-item">
        <div className="container">
          <div className="section-title text-center">
            <h2>Want to know more about us?</h2>
          </div>
     <div className="socialcardsalign dcol">
                <div className="column fbcolumn">

<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frabvikinnovations&tabs=timeline&width=560&height=650&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="560" height="650" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>           
</div>  
            <div className="column socialcolumn">
            <SocialCard
              socialIcon="instagram"
              text="Team's daily lives. Photos, jokes and the office atmosphere!"
            />

            <SocialCard
              socialIcon="facebook"
              text="Stories, tips, popular, add-ons, and other important info."
            />
           

            <SocialCard
              socialIcon="twitter"
              text="Here we share Tech and Development insights."
            />

            <SocialCard
              socialIcon="linkedin"
              text="Tech and Development insights."
            />
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
