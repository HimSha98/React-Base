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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSm7jHfvHAZCAuvLki42P4-nHtPpzF-HMeGg&s" alt="food-app-logo" className="logo" />
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

// const cardData = [
//     {
//         id: 1, name: "Chill Point", cuisine: "Pizza, North Indian, Asian", rating: "3.4 stars", time: "45 minutes"
//     },
//     {
//         id: 2, name: "Spice Villa", cuisine: "North Indian, Chinese", rating: "4.2 stars", time: "30 minutes"
//     },
//     {
//         id: 3, name: "Burger House", cuisine: "Burgers, Fast Food", rating: "4.0 stars", time: "25 minutes"
//     },
//     {
//         id: 4, name: "The Curry Bowl", cuisine: "South Indian, Indian", rating: "3.8 stars", time: "35 minutes"
//     },
//     {
//         id: 5, name: "Tandoori Nights", cuisine: "Tandoori, Mughlai", rating: "4.3 stars", time: "40 minutes"
//     },
//     {
//         id: 6, name: "Green Leaf", cuisine: "Healthy, Salads, Juices", rating: "4.5 stars", time: "20 minutes"
//     },
//     {
//         id: 7, name: "Sushi World", cuisine: "Japanese, Asian", rating: "4.1 stars", time: "50 minutes"
//     },
//     {
//         id: 8, name: "Pasta Street", cuisine: "Italian, Continental", rating: "3.9 stars", time: "30 minutes"
//     }
// ]

const RestaurantCard = (props) => {
    const{resName, cuisine, rating, time} = props;
    return (
        <div className="res-card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/4a85a758-8c72-4abf-9219-87df3fcce005_78973.JPG" alt="res-logo" className="res-logo" />
            <div>
                <h3>{resName}</h3>
                <h5>{cuisine}</h5>
                <h5>{rating}</h5>
                <h5>{time}</h5>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                {/* Restaurant Card Container */}
                <RestaurantCard resName="Chill Point" cuisine="Pizza, North Indian, Asian" rating="3.4 Stars" time="45 minutes" />
                <RestaurantCard resName="Spice Villa" cuisine="North Indian, Chinese" rating="4.4 Stars" time="35 minutes" />
                <RestaurantCard resName="The Curry Bowl" cuisine="South Indian, Indian" rating="3.9 Stars" time="25 minutes" />
                <RestaurantCard resName="Green Leaf" cuisine="Healthy, Salads, Juices" rating="4.9 Stars" time="20 minutes" />
                <RestaurantCard resName="Tandoori Night" cuisine="Tandoori, Mughlai" rating="4.5 Stars" time="15 minutes" />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">    
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);