import React from "react";
import ReactDOM from "react-dom/client";

/**
 * ReactElement(Object) => HTML(BROWSER UNDERSTANDS)
 * 
 * **/
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://dcassetcdn.com/design_img/2183979/550819/550819_11742653_2183979_4cdbe29a_image.jpg" alt="food-app-logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">    
            <Header />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);