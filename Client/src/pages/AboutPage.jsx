import Header from "../components/Header";
import Service from "../components/Service";
import About from "../components/About";
import Team from "../components/Team";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const AboutPage = () => {
  return (
    <div>
      <Header/>
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <h1 className="display-3 text-white animated slideInDown">About Us</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
       </div>
      <Service />
      <About />
      <Team />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default AboutPage;