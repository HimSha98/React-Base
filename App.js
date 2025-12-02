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
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSm7jHfvHAZCAuvLki42P4-nHtPpzF-HMeGg&s"
          alt="food-app-logo"
          className="logo"
        />
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
};

const resList = [
  {
    "info": {
      "id": "78973",
      "name": "Pizza Hut",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/4a85a758-8c72-4abf-9219-87df3fcce005_78973.JPG",
      "locality": "Vasant Vihar",
      "areaName": "Vasant Vihar",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4.1,
      "parentId": "721",
      "avgRatingString": "4.1",
      "totalRatingsString": "7.7K+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 4.3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-12-03 04:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.5",
          "ratingCount": "1.1K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-712821b5-0543-4523-947f-080dd6022ad2"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/pizza-hut-vasant-vihar-rest78973",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "900538",
      "name": "Olio - The Wood Fired Pizzeria",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/24/9faedfcd-d36e-47f8-8327-7ee2efaf299f_900538.JPG",
      "locality": "Race Course",
      "areaName": "Subhash Road",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Fast Food",
        "Snacks",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 4.2,
      "parentId": "11633",
      "avgRatingString": "4.2",
      "totalRatingsString": "1.6K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 2.2,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-12-03 05:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "android/static-assets/icons/big_rx.png",
            "description": "bolt!"
          },
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "android/static-assets/icons/big_rx.png"
                }
              },
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹119"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.5",
          "ratingCount": "37"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-712821b5-0543-4523-947f-080dd6022ad2"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/olio-the-wood-fired-pizzeria-race-course-subhash-road-rest900538",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "69500",
      "name": "Rajdhani Chicken Point",
      "cloudinaryImageId": "jkkhgvwcjvpfheq8ftbv",
      "locality": "Race Course",
      "areaName": "Gandhi Road",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Mughlai"
      ],
      "avgRating": 4.2,
      "parentId": "13692",
      "avgRatingString": "4.2",
      "totalRatingsString": "28K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-12-02 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "android/static-assets/icons/big_rx.png",
            "description": "bolt!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "android/static-assets/icons/big_rx.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.6",
          "ratingCount": "336"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-712821b5-0543-4523-947f-080dd6022ad2"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/rajdhani-chicken-point-race-course-gandhi-road-rest69500",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "69447",
      "name": "Gaylord Express",
      "cloudinaryImageId": "uj68ybtfwbydewraxzhm",
      "locality": "Paltan Bazar",
      "areaName": "Paltan Bazaar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Bakery",
        "Chinese",
        "Beverages"
      ],
      "avgRating": 3.9,
      "parentId": "13696",
      "avgRatingString": "3.9",
      "totalRatingsString": "79K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-12-09 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/_Legendary%20Restaurants.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.2",
          "ratingCount": "2.2K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-712821b5-0543-4523-947f-080dd6022ad2"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/gaylord-express-paltan-bazar-paltan-bazaar-rest69447",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "371422",
      "name": "Handi Punjab Ki",
      "cloudinaryImageId": "vozwrqdkvfcfutehx4ld",
      "locality": "Rajpur Road",
      "areaName": "Hathibarkala Salwala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "North Indian",
        "Snacks",
        "Chinese"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "93115",
      "avgRatingString": "4.4",
      "totalRatingsString": "31K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-12-02 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹89"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-712821b5-0543-4523-947f-080dd6022ad2"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/handi-punjab-ki-rajpur-road-hathibarkala-salwala-rest371422",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "657142",
      "name": "Punjabi Angithi (Delhi Wale)",
      "cloudinaryImageId": "0a59d45ca92d85e5f63f5bc79f3dbb33",
      "locality": "Rajpur Road",
      "areaName": "Hathibarkala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Tandoor"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "471145",
      "avgRatingString": "4.4",
      "totalRatingsString": "29K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 4.3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "4.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-12-03 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-712821b5-0543-4523-947f-080dd6022ad2"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/punjabi-angithi-delhi-wale-rajpur-road-hathibarkala-rest657142",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "74852",
      "name": "Doon Tripple Nine ( Ballupur)",
      "cloudinaryImageId": "p84jrjty8ktstt80fqgh",
      "locality": "Kaulagarh Road",
      "areaName": "Krishna Nagar",
      "costForTwo": "₹380 for two",
      "cuisines": [
        "Tandoor",
        "Snacks",
        "Chinese"
      ],
      "avgRating": 4.3,
      "parentId": "74095",
      "avgRatingString": "4.3",
      "totalRatingsString": "8.3K+",
      "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "10-15 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-12-02 23:25:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "android/static-assets/icons/big_rx.png",
            "description": "bolt!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "android/static-assets/icons/big_rx.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-712821b5-0543-4523-947f-080dd6022ad2"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/doon-tripple-nine-ballupur-kaulagarh-road-krishna-nagar-rest74852",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "69769",
      "name": "Aman Vegetarian",
      "cloudinaryImageId": "ygczg6efdbjietl1req7",
      "locality": "Paltan Bazar",
      "areaName": "Paltan Bazaar",
      "costForTwo": "₹260 for two",
      "cuisines": [
        "North Indian",
        "Thalis",
        "Chinese"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "13687",
      "avgRatingString": "4.3",
      "totalRatingsString": "17K+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 2.6,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "2.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-12-02 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "android/static-assets/icons/big_rx.png",
            "description": "bolt!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "android/static-assets/icons/big_rx.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.9",
          "ratingCount": "372"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-712821b5-0543-4523-947f-080dd6022ad2"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/aman-vegetarian-paltan-bazar-paltan-bazaar-rest69769",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "69510",
      "name": "South Indian Vibes Restaurant",
      "cloudinaryImageId": "iitg28uovfawig7e2bjk",
      "locality": "Rajpur Road",
      "areaName": "Rajpur Road",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "South Indian",
        "Beverages"
      ],
      "avgRating": 4.7,
      "parentId": "15792",
      "avgRatingString": "4.7",
      "totalRatingsString": "4.3K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-12-02 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "android/static-assets/icons/big_rx.png",
            "description": "bolt!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "android/static-assets/icons/big_rx.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.7",
          "ratingCount": "1.5K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-712821b5-0543-4523-947f-080dd6022ad2"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/south-indian-vibes-restaurant-rajpur-road-rest69510",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "69392",
      "name": "Aangan Restaurant & Bar",
      "cloudinaryImageId": "lce61flh8zpi5uu7vwwu",
      "locality": "Karanpur",
      "areaName": "Ashtley Hall",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Chinese",
        "Continental"
      ],
      "avgRating": 4.4,
      "parentId": "15804",
      "avgRatingString": "4.4",
      "totalRatingsString": "11K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-12-02 23:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹300 OFF",
        "subHeader": "ABOVE ₹1199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.0",
          "ratingCount": "1.3K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-712821b5-0543-4523-947f-080dd6022ad2"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/aangan-restaurant-and-bar-karanpur-ashtley-hall-rest69392",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "78057",
      "name": "Chilli'Z Restro",
      "cloudinaryImageId": "gkeymduioynruheoqhlq",
      "locality": "Dharampur",
      "areaName": "Dharampur",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Indian",
        "Chinese",
        "Mughlai"
      ],
      "avgRating": 4.2,
      "parentId": "13645",
      "avgRatingString": "4.2",
      "totalRatingsString": "34K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 3.7,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "3.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-12-03 00:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹39"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.0",
          "ratingCount": "2.7K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-712821b5-0543-4523-947f-080dd6022ad2"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/chilliz-restro-dharampur-rest78057",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "591307",
      "name": "Dum Safar Biryani",
      "cloudinaryImageId": "a4preov961rvx1mzsrf7",
      "locality": "Rajpur Road",
      "areaName": "Chaudhari Plaza",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "Kebabs",
        "North Indian",
        "Barbecue"
      ],
      "avgRating": 4.3,
      "parentId": "351013",
      "avgRatingString": "4.3",
      "totalRatingsString": "1.0K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 3.9,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "3.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-12-02 23:30:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-712821b5-0543-4523-947f-080dd6022ad2"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/dum-safar-biryani-rajpur-road-chaudhari-plaza-rest591307",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "94236",
      "name": "Doon Tripple Nine Patelnagar",
      "cloudinaryImageId": "3fc6b31d7bfb08dfc0e6d0ac8df6bc65",
      "locality": "Saharanpur Road",
      "areaName": "Kaonli",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "rolls",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "598519",
      "avgRatingString": "4.3",
      "totalRatingsString": "6.5K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-12-02 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Dal%20Makhani.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Dal%20Makhani.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹199"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-712821b5-0543-4523-947f-080dd6022ad2"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/doon-tripple-nine-patelnagar-saharanpur-road-kaonli-rest94236",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "209248",
      "name": "Tapri - The Teafe",
      "cloudinaryImageId": "b6a6d5f32a06ab3f5c6eed98cf014236",
      "locality": "Rajpur Road",
      "areaName": "Hathibarkala Salwala",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Chinese",
        "Beverages",
        "Continental",
        "Italian",
        "Desserts"
      ],
      "avgRating": 4.5,
      "parentId": "201145",
      "avgRatingString": "4.5",
      "totalRatingsString": "4.2K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-12-03 03:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹89"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-712821b5-0543-4523-947f-080dd6022ad2"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/tapri-the-teafe-rajpur-road-hathibarkala-salwala-rest209248",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "73011",
      "name": "KFC",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/493e3ed2-7438-4bc7-b4fc-37844f252182_73011.JPG",
      "locality": "Prem Nagar",
      "areaName": "Prem Nagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
      ],
      "avgRating": 4.2,
      "parentId": "547",
      "avgRatingString": "4.2",
      "totalRatingsString": "11K+",
      "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-12-03 05:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "android/static-assets/icons/big_rx.png",
            "description": "bolt!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "android/static-assets/icons/big_rx.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹69"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.2",
          "ratingCount": "5.7K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-712821b5-0543-4523-947f-080dd6022ad2"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/dehradun/kfc-prem-nagar-rest73011",
      "type": "WEBLINK"
    }
  },
]

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="res-card">
      <img
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData?.info?.cloudinaryImageId}
        alt="res-logo"
        className="res-logo"
      />
      <div>
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating} Stars</h5>
        <h5>{costForTwo}</h5>
        <h5>{deliveryTime} minutes</h5>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {/* Restaurant Card Container */}
        {
          resList.map(( restaurant ) => <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />)
        }
        {/* <RestaurantCard resData={resList[0]} /> */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
