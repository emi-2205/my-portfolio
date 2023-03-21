import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="event-card event-card-begin wow zoomIn">
              <div className="row">
                <div className="col-6" style={{ paddingRight: '0px' }}>
                  <h1 className="event-item" style={{ color: 'white' }}><a target="blank" className="event-item" href="https://www.polito.it" style={{ color: 'white' }}>PoliTo</a></h1>
                  <h2 className="event-item">2022-Present</h2>
                </div>
                <div className="col-6 event-item" style={{ padding: '0px' }}>
                  <p style={{ color: 'white', marginTop: '30px', padding: '0px' }} className="p-event">
                    A Master's Degree in computer engineering, specifically in data analytics and artificial intelligence fields.
                    Projects built:
                    <ul>
                      <li>item 1</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div className="event-card wow zoomIn">
              <div className="row">
                <div className="col-6" style={{ paddingRight: '0px' }}>
                  <h1 className="event-item" style={{ color: 'white' }}><a target="blank" className="event-item" href="https://www.univpm.it/Entra/" style={{ color: 'white' }}>Univpm</a></h1>
                  <h2 className="event-item">2019-2022</h2>
                </div>
                <div className="col-6 event-item" style={{ padding: '0px' }}>
                  <p style={{ color: 'white', marginTop: '30px', padding: '0px' }} className="p-event">
                    A Master's Degree in computer engineering, specifically in data analytics and artificial intelligence fields.
                    Projects built:
                    <ul style={{color: 'white'}}>
                      <li>Web appulcation for Cupra Italia</li>
                      <li>Website for landlords and tenants</li>
                      <li>Database per fabbrica di stampi</li>
                      <li>Software Gestionale per negozio di calzature</li>
                      <li>Applicazione Springboot per l'analisi dei domini</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div className="event-card event-card-end wow zoomIn">
              <div className="row">
                <div className="col-6" style={{ paddingRight: '0px' }}>
                  <h1 className="event-item" style={{ color: 'white' }}><a target="blank" className="event-item" href="https://www.istitutomontani.edu.it/web/" style={{ color: 'white' }}>Montani</a></h1>
                  <h2 className="event-item">2015-2019</h2>
                </div>
                <div className="col-6 event-item" style={{ padding: '0px' }}>
                  <p style={{ color: 'white', marginTop: '30px', padding: '0px' }} className="p-event">
                    A Master's Degree in computer engineering, specifically in data analytics and artificial intelligence fields.
                    Projects built:
                    <ul>
                      <li>Old Roofs Control</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
    // <section className="skill" id="skills">
    //     <div className="container">
    //         <div className="row">
    //             <div className="col-12">
    //                 <div className="skill-bx wow zoomIn">
    //                     <h2>Skills</h2>
    //                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
    //                     <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
    //                         <div className="item">
    //                             <img src={meter3} alt="Image" />
    //                             <h5>Web Development</h5>
    //                         </div>
    //                         <div className="item">
    //                             <img src={meter1} alt="Image" />
    //                             <h5>Software Engineering</h5>
    //                         </div>
    //                         <div className="item">
    //                             <img src={meter2} alt="Image" />
    //                             <h5>Project Management</h5>
    //                         </div>
    //                         <div className="item">
    //                             <img src={meter3} alt="Image" />
    //                             <h5>Database solutions</h5>
    //                         </div>
    //                         <div className="item">
    //                             <img src={meter2} alt="Image" />
    //                             <h5>System Configuration</h5>
    //                         </div>
    //                         <div className="item">
    //                             <img src={meter1} alt="Image" />
    //                             <h5>Continuous Improving</h5>
    //                         </div>
    //                     </Carousel>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    // </section>
  )
}
