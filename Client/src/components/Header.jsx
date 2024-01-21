import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { exitLgout } from '../redux/apiCalls';
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //lấy thong tin user 
    const currentUser = useSelector(state => state.user.currentUser)
    useEffect(() => {
      // Kiểm tra trạng thái đăng nhập khi component được tạo
      // if (localStorage.getItem('persist:root')) {
      //     setIsLoggedIn(true);
      // }
      if (currentUser != null) {
        setIsLoggedIn(true);
      }
    }, [currentUser]);

    const handleLogout = () => {
        // Xử lý đăng xuất
        // localStorage.removeItem('persist:root');
        exitLgout(dispatch);
        setIsLoggedIn(false);
        //Khi logout thì phải chuyển hướng về trang chủ nha Vinh
        navigate('/');
    };
    // Dưới đây khi click vào nút login thì mới chuyển hướng sang trang login nè 
    const handleLogin = () => {
        // Xử lý đăng nhập
        // Sau khi đăng nhập thành công, cập nhật state
        // setIsLoggedIn(true);
        navigate("/login");
    };

    return (
      // Navbar Start
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a
          href="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="m-0 text-primary">
            <i className="fa fa-book me-3"></i>eLEARNING
          </h2>
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/" className="nav-item nav-link active">
              Home
            </a>
            <a href="/about" className="nav-item nav-link">
              About
            </a>
            <a href="/courses" className="nav-item nav-link">
              Courses
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu fade-down m-0">
                <a href="/team" className="dropdown-item">
                  Our Team
                </a>
                <a href="/testimonial" className="dropdown-item">
                  Testimonial
                </a>
                <a href="/404" className="dropdown-item">
                  404 Page
                </a>
              </div>
            </div>
            <a href="/contact" className="nav-item nav-link">
              Contact
            </a>
          </div>
          {!isLoggedIn && (
            <a
              href="/login"
              className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
              onClick={handleLogin}
            >
              Log in
            </a>
          )}
          {isLoggedIn && (
            <a
              href=""
              className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
              onClick={handleLogout}
            >
              Log out
            </a>
          )}
        </div>
      </nav>
      // Navbar End
    );
};

export default Header;