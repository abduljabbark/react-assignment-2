import React from "react";
import { Carousel } from "react-bootstrap";

const PropertyCarousel = () => {
  const properties = [
    {
      title: "Vacation Homes",
      date: "Jan 31-Feb 1, 2 adults",
      availability: "8 available",
      image: "url-to-vacation-home-image",
    },
    {
      title: "Guest Houses",
      date: "Jan 31-Feb 1, 2 adults",
      availability: "26 available",
      image: "url-to-guest-house-image",
    },
    {
      title: "Hostels",
      date: "Jan 31-Feb 1, 2 adults",
      availability: "1 available",
      image: "url-to-hostel-image",
    },
    {
      title: "Homestays",
      date: "Jan 31-Feb 1, 2 adults",
      availability: "8 available",
      image: "url-to-homestay-image",
    },
    {
      title: "Homestays",
      date: "Jan 31-Feb 1, 2 adults",
      availability: "8 available",
      image: "url-to-homestay-image",
    },
    {
      title: "Homestays",
      date: "Jan 31-Feb 1, 2 adults",
      availability: "8 available",
      image: "url-to-homestay-image",
    },
    {
      title: "Homestays",
      date: "Jan 31-Feb 1, 2 adults",
      availability: "8 available",
      image: "url-to-homestay-image",
    },
    {
      title: "Homestays",
      date: "Jan 31-Feb 1, 2 adults",
      availability: "8 available",
      image: "url-to-homestay-image",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Browse by property type in Rawalpindi</h2>
      <Carousel indicators={false} controls={true} interval={null}>
        {properties.map((property, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              {properties.map((property, index) => (
                <div className="card mx-2" style={{ width: "18rem" }} key={index}>
                  <img
                    src={property.image}
                    className="card-img-top"
                    alt={property.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{property.title}</h5>
                    <p className="card-text">{property.date}</p>
                    <p className="text-muted">{property.availability}</p>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default PropertyCarousel;
