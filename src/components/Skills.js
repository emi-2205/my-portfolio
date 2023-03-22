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
          <div className="col-12" style={{ zIndex: '99999' }}>
            <div className="event-card event-card-begin skill-bx wow zoomIn">
              <div className="row">
                <div className="col-lg-6" style={{ paddingRight: '0px' }}>
                  <h1 className="event-item" style={{ color: 'white' }}><a target="blank" className="event-item" href="https://www.polito.it" style={{ color: 'white' }}>PoliTo</a></h1>
                  <h2 className="event-item">2022-Present</h2>
                </div>
                <div className="col-lg-6 event-item" style={{ padding: '0px' }}>
                  <p style={{ color: 'white', marginTop: '30px', padding: '0px' }} className="p-event">
                    A Master's Degree course in computer engineering, specifically in data analytics and artificial intelligence fields. <br></br>
                    Developed projects:
                    <ul>
                      <li><a href="https://github.com/emi-2205/my-portfolio.git" style={{ color: 'white', fontStyle: 'italic' }}>My portfolio website</a></li>
                      <li><a href="https://github.com/MollinoDev/BalillaTournamentLaravelWebApp.git" style={{ color: 'white', fontStyle: 'italic' }}>Goal Counter Web Site</a></li>
                      <li><a href="https://github.com/emi-2205/KrunkerExtension.git" style={{ color: 'white', fontStyle: 'italic' }}>Google Chrome extension</a></li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div className="event-card wow zoomIn">
              <div className="row">
                <div className="col-lg-6" style={{ paddingRight: '0px' }}>
                  <h1 className="event-item" style={{ color: 'white' }}><a target="blank" className="event-item" href="https://www.univpm.it/Entra/" style={{ color: 'white' }}>Univpm</a></h1>
                  <h2 className="event-item">2019-2022</h2>
                </div>
                <div className="col-lg-6 event-item" style={{ padding: '0px' }}>
                  <p style={{ color: 'white', marginTop: '30px', padding: '0px' }} className="p-event">
                    A Bachelor's Degree course in computer and automation engineering. <br></br>
                    Developed projects:
                    <ul style={{ color: 'white' }}>
                      <li><a href="https://github.com/CupraTribeDev/cupra-tribe.git" style={{ color: 'white', fontStyle: 'italic' }}>Web application for Cupra</a></li>
                      <li>Website for landlords and tenants</li>
                      <li><a href="https://github.com/Paolo-Beci/Database-fabbrica-di-stampi" style={{ color: 'white', fontStyle: 'italic' }}>Database for a mold factory</a></li>
                      <li><a href="https://github.com/Paolo-Beci/Progetto-Ingegneria-del-software-2021" style={{ color: 'white', fontStyle: 'italic' }}>Management software for a shoe store</a></li>
                      <li><a href="https://github.com/Paolo-Beci/Progetto-OOP" style={{ color: 'white', fontStyle: 'italic' }}>Springboot application for web domains analysis</a></li>
                    </ul>
                    Achieved certifications:
                    <ul style={{ color: 'white' }}>
                      <li>IELTS certification by  <a href="https://www.britishcouncil.it" style={{ color: 'white', fontStyle: 'italic' }}>British Council</a> - B2 Level</li>
                    </ul>
                    Experiences:
                    <ul style={{ color: 'white' }}>
                      <li><a href="https://clab.univpm.it/it" style={{ color: 'white', fontStyle: 'italic' }}>Contamination lab</a> edition #8</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div className="event-card event-card-end wow zoomIn">
              <div className="row">
                <div className="col-lg-6" style={{ paddingRight: '0px' }}>
                  <h1 className="event-item" style={{ color: 'white' }}><a target="blank" className="event-item" href="https://www.istitutomontani.edu.it/web/" style={{ color: 'white' }}>Montani</a></h1>
                  <h2 className="event-item">2015-2019</h2>
                </div>
                <div className="col-lg-6 event-item" style={{ padding: '0px' }}>
                  <p style={{ color: 'white', marginTop: '30px', padding: '0px' }} className="p-event">
                    High school diploma from ITIS in electrical and automatic systems. <br></br>
                    Developed projects:
                    <ul>
                      <li>Old Roofs Control</li>
                    </ul>
                    Achieved certifications:
                    <ul style={{ color: 'white' }}>
                      <li><a href="https://www.comau.com/it/competencies/consultancy-education/robotics-license/" style={{ color: 'white', fontStyle: 'italic' }}>Comau</a> certification for use and programming of industrial robots</li>
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
