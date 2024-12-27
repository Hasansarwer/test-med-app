import './Navbar.css';

const Navbar = () => {
    const handleClick = () => {
        const navLinks = document.querySelector('.nav__links');
        const links = document.querySelectorAll('.nav__links li');
        navLinks.classList.toggle('active');
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    };
    return (
        <div>
            <nav>
                <div className="nav__logo">
                    <a href="/">
                        StayHealthy 
                         
                        <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    version="1.1"
    style={{
      width: '1em',
      height: '1em',
      verticalAlign: 'middle',
      fill: 'currentColor',
      overflow: 'hidden',
    }}
  >
    <title>Doctor With Stethoscope SVG icon</title>
    <path
      d="M655.8 324.7c7.4-2 14.9-1.8 17.1 6.2 2.9 10.2 2.2 19.6-0.9 28.4-2.8 8.1-14.5 15.5-20.7 22.4-2.9 3.2-9.3 4.5-13.3 3.9-7.2 18.8-16 37.4-26.7 54.4-24.8 39.1-58.6 67.5-99.3 67.5-40.7 0-74.5-28.4-99.3-67.5-10.8-17-19.6-35.6-26.7-54.4-4 0.6-10.4-0.7-13.3-3.9-6.2-6.9-17.9-14.3-20.8-22.4-3.1-8.8-3.7-18.2-0.9-28.4 1.8-6.5 7-7.9 12.7-7.1-5.7-24.9-10.8-55.6-5.4-80.6 7.8-36 19.1-45.7 39.5-53.6 20.5-36.9 58.3-61 110-61s100.9 15.9 131.6 77.1c2 1.6 4.2 3 6.4 4.4 27.4 16.3 16.3 87.2 10 114.6z m-51-99.1c-36 32.1-92.9 38.8-140.2 20.7 16.7 8.2 38.1 13.6 61.1 14.6 9.2 0.4 18.2 0 26.7-1 8.6-1 16.6-2.8 23.8-5.1 4.7-1.5 9.7 1.1 11.2 5.7 1.5 4.7-1.1 9.7-5.8 11.2-8.4 2.7-17.5 4.7-27.2 5.8-9.2 1.1-19.1 1.5-29.4 1.1-29.2-1.2-56.1-9-76-20.5-13.2-7.7-23.4-17.1-29.6-27.6-13.3 13.2-20.2 29.2-24.4 44.3-0.3 3.6-0.4 7.2-0.4 10.8 0 43.7 15.9 105.2 39.3 141.9 20.7 32.4 47.6 56 78.2 56s57.5-23.6 78.2-56c32.3-50.7 54.5-149.6 14.5-201.9zM262 600.3c15.2-30.5 51-39.9 93.3-51.3-22.5 63.8-15.8 146.7 8.2 206.9-19.2 19.8-5.2 53.3 22.8 53.3 17.5 0 31.6-14.1 31.6-31.5 0-18.3-15.7-32.8-34.1-31.4-23.1-59.1-29.1-144.5-1.3-204.6 11-3 30.9-11 39.5-14.3 9.4 33.4 29.8 99.4 59.3 144.5l13.4-78.6-7.7-18.6 24.8-20.7 24.8 20.7-7.7 18.5 13.4 78.5c29.1-45.4 51.5-114.2 59.8-144.5 11.3 4.4 32.8 12.1 48 16.1 5.7 22.1 3.9 46.5-1.7 70.7-30.7-1.9-59.2 16.2-69.6 51.4-14.1 47.7-61.5 122.5 1.4 136.5 14.5 3.2 19.4-18.6 4.9-21.9-14.2-3.2-15.8-14.6-12.4-29.5 4.9-21.6 20.5-54.3 27.7-78.8 17.2-58.1 97.5-40 88.1 19.7-4 25.5-4.1 61.7-8.9 83-3.4 14.9-9.7 24.6-23.9 21.4-14.5-3.2-19.4 18.6-4.9 21.9 63 14.1 52.3-74 60.1-122.8 5.7-36-11.9-64.3-40.3-75.9 5.4-23.6 7.4-47.2 4-69.2 39.9 11.1 73.5 21.6 87.7 50.2 31.2 62.6 38.6 210.6 46.9 296.1H215.5c8.4-89.7 13.9-230.6 46.5-295.8z"
      fill="#2875A4"
    />
  </svg>
                    </a>
                    <span>.</span>
                </div>
                <div className="nav__icon" onClick={handleClick}>
                    {/* <i className="fa fa-times fa fa-bars"></i> */}
                </div>

                <ul className="nav__links active">
                    <li className="link">
                        <a href="../Landing_Page/LandingPage.html">Home</a>
                    </li>
                    <li className="link">
                        <a href="#">Appointments</a>
                    </li>
                    <li className="link">
                        <a href="../Sign_Up//Sign_Up.html">
                            <button className="btn1">Sign Up</button>
                        </a>
                    </li>
                    <li className="link">
                        <a href="../Login/Login.html">
                            <button className="btn1">Login</button>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;