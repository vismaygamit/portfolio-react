import React, { useEffect, useState } from 'react';
import './pricing.css';
import axios from "axios";

const Pricing = () => {
    let [country, setCountry] = useState("");
    let pricesbyCountry = [];

    // if (country != "India") {
        pricesbyCountry = ["$1199", "$3199", "$4199"]
    // } else {
    //     pricesbyCountry = ["28000 INR", "38000 INR", "50000 INR"]
    // }

    let prices = [
        {
            package_name: "Standard Plan", description:"Small businesses, personal websites, or portfolios looking for a basic online presence.", price: pricesbyCountry[0], features: [
                { feature: "Basic Logo", isAvailable: true },
                { feature: "Upto 4 pages", isAvailable: true },
                { feature: "Basic SEO", isAvailable: true },
                { feature: "Content upload", isAvailable: true },
                { feature: "Stock images", isAvailable: true },
                { feature: "Premium Theme", isAvailable: true },
                { feature: "2 revision", isAvailable: true },
                { feature: "2 consultation calls", isAvailable: true },

                { feature: "Copywriting", isAvailable: false },
                { feature: "Sales funnel", isAvailable: false },
                { feature: "Analytics setup", isAvailable: false },
                { feature: "3 months free maintenance", isAvailable: false },
                { feature: "Duration: 2-4 weeks", isAvailable: true },
                // { feature: "Facebook/Whatsapp Chat Plugin", isAvailable: true },
                // { feature: "Call to Action (Phone & Email)", isAvailable: true },
                // { feature: "Google Map", isAvailable: true },
                // { feature: "Testimonials", isAvailable: true },
                // { feature: "Social Media Icon", isAvailable: true },
                // { feature: "Social Media Feed (Post)", isAvailable: false },
                // { feature: "Google Analytics", isAvailable: false },
                // { feature: "Google Search Console", isAvailable: false },
                // { feature: "Admin Access", isAvailable: true },
            ]
        },
        {
            package_name: "Pro Plan", description:"Businesses needing a full-featured online store.", price: pricesbyCountry[2], features: [
                { feature: "Digital Products", isAvailable: true },
                { feature: "Premium Logo", isAvailable: true },
                { feature: "Custom Design", isAvailable: true },
                { feature: "Brand front and colors", isAvailable: true },
                { feature: "Conversion Copywriting", isAvailable: true },
                // { feature: "Wireframes Design", isAvailable: true },
                { feature: "Advance SEO", isAvailable: true },
                { feature: "Sales funnel", isAvailable: true },
                { feature: "User jorney map", isAvailable: true },
                { feature: "Upto 10 pages", isAvailable: true },
                { feature: "6 revisions", isAvailable: true },
                { feature: "Training & support", isAvailable: true },
                { feature: "Analytics setup", isAvailable: true },
                { feature: "Personalised strategy & advice", isAvailable: true },
                { feature: "4 months free maintenance", isAvailable: true },
                { feature: "Duration: 6-8 weeks", isAvailable: true },
            ]
        },
        {
            package_name: "Premium Plan", description:"Small to medium-sized businesses needing more interactive and dynamic websites.",price: pricesbyCountry[1], features: [
                { feature: "Upto 8 pages", isAvailable: true },
                { feature: "Premium Logo", isAvailable: true },
                { feature: "Brand font and colors", isAvailable: true },
                { feature: "Basic SEO", isAvailable: true },
                { feature: "Custom design", isAvailable: true },
                // { feature: "Wireframes Design", isAvailable: true },
                { feature: "Analytics setup", isAvailable: true },
                { feature: "3 revisions", isAvailable: true },
                { feature: "4 consultation calls", isAvailable: true },
                { feature: "2 month free maintenance", isAvailable: true },
                { feature: "Training & support", isAvailable: true },
                { feature: "Copywriting", isAvailable: false },
                { feature: "Sales funnel", isAvailable: false },
                { feature: "3 months free maintenance", isAvailable: false },
                { feature: "Duration: 4-6 weeks", isAvailable: true },
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
        <section id="package" className="package-mf sect-pt4 route mb-2">
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
                                    <h2 className="h1 font-weight-bold"><span style={{fontSize:"15px"}}>Starts at</span>{item.price}</h2>
                                    <h6 className="h6 font-weight-bold"><span className="text-small font-weight-normal ml-2">{item.description}</span></h6>
                                    <div className="custom-separator my-4 mx-auto bg-primary"></div>
                                    <ul className="list-unstyled my-5 text-small text-left">
                                        {item.features.map((itemName, i) => {
                                            return (
                                                <li className="mb-3" key={i}>
                                                    <i className={itemName.isAvailable ? "bi bi-check-circle-fill mr-2 text-primary" : "bi bi-x-circle-fill mr-2 text-danger"}></i> {itemName.feature}</li>)
                                        })}
                                    </ul>
                                    {/* <a href="#" className="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a> */}
                                </div>
                            </div>
                        )
                    })}
                    {/* <div className="title-box-2 mx-auto">
                        <h5 className="title-left">Not sure which Web Design Package to choose?</h5>
                        <p>Send your requirements <a href="#contact">here</a> for the quotation.</p>
                    </div> */}

                </div>
                <div className="row text-center align-items-end mt-5">
                    <div className="col-sm-12">
                            <p className="w-title">
                                <h4>Not sure which Web Design Package to choose?</h4>
                                <p>
                                <button type="button" className="btn btn-primary text-white" style={{marginRight:"7px"}}><a href="https://calendly.com/vismaygamit/quick-call-for-requirement-understanding" target='_blank'  className='text-white text-decoration-none'>Book a call</a></button>
                                    for the consultation.</p>
                                {/* <h4>Unfortunately, can't show all projects due to Non-Disclosure Agreement (NDA)</h4> */}
                            </p>
                        {/* <div className="title-box">
                            <h3 className="title-left">Portfolio</h3>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;
