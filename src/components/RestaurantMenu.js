import { useEffect } from 'react';

const RestaurantMenu = () => {

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.5291969&lng=77.673656&restaurantId=1005073&catalog_qa=undefined&submitAction=ENTER");

        const jsonData = await data.json();

        console.log("JSON DATA:", jsonData);
        console.log("Status:", data.status);
console.log("OK:", data.ok);

// const text = await data.text();
// console.log("RAW RESPONSE:", text);
 
    };

    return (
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
}

export default RestaurantMenu;