import Header from "../components/Header";
import Categories from "../components/Categories";
import Courses from "../components/Courses";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const CoursesPage = () => {
  return (
    <div>
      <Header/>
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <h1 className="display-3 text-white animated slideInDown">Courses</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Courses</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
       </div>
      <Categories />
      <Courses />
      <Testimonial />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default CoursesPage;