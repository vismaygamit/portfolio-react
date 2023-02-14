import React, { useEffect, useState } from 'react';
import './pricing.css';
import axios from "axios";

const Pricing = () => {
    let [country, setCountry] = useState("");
    let pricesbyCountry = [];

    if (country != "India") {
        pricesbyCountry = ["$700", "$900", "$1200"]
    } else {
        pricesbyCountry = ["28000 INR", "38000 INR", "50000 INR"]
    }

    let prices = [
        {
            package_name: "Standard Plan", price: pricesbyCountry[0], features: [
                { feature: "Upto 6 pages", isAvailable: true },
                { feature: "1 Logo", isAvailable: true },
                { feature: "Responsive", isAvailable: true },
                { feature: "Gallery", isAvailable: true },
                { feature: "Inquiry Form", isAvailable: true },
                { feature: "Custom Home Page", isAvailable: true },
                { feature: "SEO Friedndly Website", isAvailable: true },
                { feature: "Facebook/Whatsapp Chat Plugin", isAvailable: true },
                { feature: "Call to Action (Phone & Email)", isAvailable: true },
                { feature: "Google Map", isAvailable: true },
                { feature: "Testimonials", isAvailable: true },
                { feature: "Social Media Icon", isAvailable: true },
                { feature: "Social Media Feed (Post)", isAvailable: false },
                { feature: "Google Analytics", isAvailable: false },
                { feature: "Google Search Console", isAvailable: false },
                { feature: "Admin Access", isAvailable: true },
            ]
        },
        {
            package_name: "Premium Plan", price: pricesbyCountry[1], features: [
                { feature: "Upto 12 pages", isAvailable: true },
                { feature: "1 Logo", isAvailable: true },
                { feature: "Responsive", isAvailable: true },
                { feature: "Gallery", isAvailable: true },
                { feature: "Inquiry Form", isAvailable: true },
                { feature: "Custom Home Page", isAvailable: true },
                { feature: "SEO Friedndly Website", isAvailable: true },
                { feature: "Facebook/Whatsapp Chat Plugin", isAvailable: true },
                { feature: "Call to Action (Phone & Email)", isAvailable: true },
                { feature: "Google Map", isAvailable: true },
                { feature: "Testimonials", isAvailable: true },
                { feature: "Social Media Icon", isAvailable: true },
                { feature: "Social Media Feed (Post)", isAvailable: true },
                { feature: "Google Analytics", isAvailable: false },
                { feature: "Google Search Console", isAvailable: false },
                { feature: "Admin Access", isAvailable: true },
            ]
        },
        {
            package_name: "Pro Plan", price: pricesbyCountry[2], features: [
                { feature: "Upto 18 pages", isAvailable: true },
                { feature: "1 Logo", isAvailable: true },
                { feature: "Responsive", isAvailable: true },
                { feature: "Gallery", isAvailable: true },
                { feature: "Inquiry Form", isAvailable: true },
                { feature: "Custom Home Page", isAvailable: true },
                { feature: "SEO Friedndly Website", isAvailable: true },
                { feature: "Facebook/Whatsapp Chat Plugin", isAvailable: true },
                { feature: "Call to Action (Phone & Email)", isAvailable: true },
                { feature: "Google Map", isAvailable: true },
                { feature: "Testimonials", isAvailable: true },
                { feature: "Social Media Icon", isAvailable: true },
                { feature: "Social Media Feed (Post)", isAvailable: true },
                { feature: "Google Analytics", isAvailable: true },
                { feature: "Google Search Console", isAvailable: true },
                { feature: "Admin Access", isAvailable: true },
            ]
        },
    ];


    const getGeoInfo = () => {
        axios
            .get("https://ipapi.co/json/")
            .then((response) => {
                setCountry(response.data.country_name)
                // let data = response.data.country_name;
                // console.log(data);
                // setState({
                //   ...state,
                //   ip: data.ip,
                //   countryName: data.country_name,
                //   countryCode: data.country_calling_code,
                //   city: data.city,
                //   timezone: data.timezone
                // });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getGeoInfo();
        console.log(country);
    }, []);

    return (
        <section id="package" className="package-mf sect-pt4 route mb-5">
            <div className="container">
                <div className="row">
                    <div className="title-box-2 mx-auto">
                        <h5 className="title-left">Website Development Packages</h5>
                    </div>
                </div>
                <div className="row text-center align-items-end">
                    {prices.map((item, index) => {
                        return (
                            <div className="col-lg-4 mb-5 mb-lg-0" key={index}>
                                <div className="bg-white p-5 rounded-lg shadow" key={index} >
                                    <h1 className="h4 text-uppercase font-weight-bold mb-4">{item.package_name}</h1>
                                    <h2 className="h1 font-weight-bold">{item.price}</h2>
                                    {/* <h2 className="h1 font-weight-bold">${item.price}<span className="text-small font-weight-normal ml-2">/ month</span></h2> */}
                                    <div className="custom-separator my-4 mx-auto bg-primary"></div>
                                    <ul className="list-unstyled my-5 text-small text-left">
                                        {item.features.map((itemName, i) => {
                                            return (
                                                <li className="mb-3" key={i}>
                                                    <i className={itemName.isAvailable ? "fa fa-check mr-2 text-primary" : "fa fa-times mr-2 text-danger"}></i> {itemName.feature}</li>)
                                        })}
                                    </ul>
                                    {/* <a href="#" className="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a> */}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Pricing;
