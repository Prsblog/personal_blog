import  React from 'react';
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
    {
      id: 1,
      image: Image1,
      title: "Cyber security Services",
      description:
        "Network Security Audits. Cybersecurity Training. Incident Response. Compliance Management.",
    },
    {
      id: 2,
      image: Image2,
      title: "Network and System Administration",
      description:
        "Network Design and Implementation. Network Troubleshooting. Cloud Solutions. Linux Server Management.",
    },
    {
      id: 3,
      image: Image3,
      title: "Cloud Computing Services",
      description:
        "Cloud Migration. Cloud Security. DevOps Services.",
    },
  ];
  

const Services = () => {
    return (
        <section className='services container section' id='services'>
            <h2 className='section__titles'>Services</h2>

            <div className='services__container grid'>
                {data.map(({id, image, title, description}) => {
                    return (
                        <div className='services__card' key={id}>
                            <img src={image} alt="" className='services__img' />

                            <h3 className='services__title'>{title}</h3>
                            <p className='services__description'>{description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
export default Services