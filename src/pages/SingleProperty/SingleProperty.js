import React, { useCallback, useEffect, useRef, useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { Link, useNavigate, useParams } from "react-router-dom";
import FilterSearch from "../../components/FilterSearch/FilterSearch";
import "./SingleProperty.css";
import data from "../../data";
import HouseBox from "../../components/HouseBox/HouseBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

function SingleProperty() {
  const [house, setHouse] = useState({});
  const [relatedHouse, setRelatedHouse] = useState({});
  const [consultantHouse, setConsultantHouse] = useState({});
  const sliderRef = useRef();
  const { houseName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let mainHouse = data.houses.find((house) => house.name === houseName);
    if (mainHouse) {
      let mainConsultant = data.consultants.find(
        (consultant) => consultant.id === mainHouse.consultantID
      );
      setRelatedHouse(
        data.houses.find(
          (house) =>
            house.cityID === mainHouse.cityID && house.name !== houseName
        )
      );

      setConsultantHouse(mainConsultant);
      setHouse(mainHouse);
    } else {
      navigate("/404");
    }
  }, [houseName]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const prevSlider = useCallback(() => {
    sliderRef.current.swiper.slidePrev();
  }, []);

  const nextSlider = useCallback(() => {
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <HeroSection text={houseName} />
      <div className="container-fluid justify-content-center d-flex">
        <FilterSearch />
      </div>
      <div className="details-house">
        <div className="container">
          <div className="row">
            <div className="col-12 text-house">
              <div className="name-house">
                <h2>{houseName}</h2>
                <p>
                  <span>
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  {house.address}
                </p>
              </div>
              <div className="price-house">
                <p>For {house.isSale ? "Sale" : "Rent"}</p>
                <span>$ {house.price && house.price.toLocaleString()}</span>
              </div>
            </div>
            <div className="col-12 images-house">
              <div className="btn-slider button-prev">
                <div className="button-prev" onClick={prevSlider}>
                  <i className="fa-solid fa-chevron-left icon"></i>
                </div>
              </div>
              <div className="btn-slider">
                <div className="button-next" onClick={nextSlider}>
                  <i className="fa-solid fa-chevron-right icon"></i>
                </div>
              </div>
              <Swiper
                slidesPerView={1}
                loop
                ref={sliderRef}
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: ["-20%", 0, -1],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
                modules={[EffectCreative]}
              >
                <SwiperSlide>
                  <img
                    src={house.cover}
                    alt={house.name}
                    className="img-house"
                  />
                </SwiperSlide>
                {house.images &&
                  house.images.map((img) => (
                    <SwiperSlide key={img}>
                      <img src={img} alt={house.name} className="img-house" />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
            <div className="row more-details-house">
              <div className="col-lg-8 col-12" data-aos="fade-up">
                <div className="body-details">
                  <div className="info-top">
                    <div className="row py-3 text-center">
                      <div className="col-3">
                        <span>Parking</span>
                        <div className="count">
                          <i className="icon fa-solid fa-warehouse"></i>{" "}
                          {house.parking}
                        </div>
                      </div>
                      <div className="col-3">
                        <span>Bathroom</span>
                        <div className="count">
                          <i className="fa-solid fa-bath icon"></i>{" "}
                          {house.bathroom}
                        </div>
                      </div>
                      <div className="col-3">
                        <span>Bedroom</span>
                        <div className="count">
                          <i className="icon fa-solid fa-bed"></i>{" "}
                          {house.bedroom}
                        </div>
                      </div>
                      <div className="col-3">
                        <span>Meterage</span>
                        <div className="count">
                          <i className="fa-solid fa-house-chimney icon"></i>{" "}
                          {house.meterage} sqft
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="description-house">
                    <h4>Description</h4>
                    <p>{house.desc}</p>
                  </div>
                  <div className="options-house">
                    <h4>Property features</h4>

                    <div className="table-options  row">
                      {house.options &&
                        house.options.map((option, index) => (
                          <div className="col-md-4 col-sm-6" key={option.id}>
                            <p>
                              {option.isValid ? (
                                <span className="check">
                                  <i className="fa-solid fa-check"></i>
                                </span>
                              ) : (
                                <span className="xmark">
                                  <i className="fa-solid fa-xmark"></i>
                                </span>
                              )}
                              {option.title}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="consultant-details" data-aos="fade-up">
                  <div className="profile">
                    <img
                      src={consultantHouse && consultantHouse.profile}
                      alt={consultantHouse && consultantHouse.name}
                      className="profile-img"
                    />
                    <div className="info-consultant">
                      <p>{consultantHouse && consultantHouse.job}</p>
                      <h5>{consultantHouse && consultantHouse.name}</h5>
                      <table className="details-table">
                        <tbody>
                          <tr>
                            <td>
                              Phone :{" "}
                              <span>
                                {consultantHouse && consultantHouse.phone}
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Email :{" "}
                              <span>
                                {consultantHouse && consultantHouse.email}
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Fax :{" "}
                              <span>
                                {consultantHouse && consultantHouse.fax}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <Link
                        to={
                          consultantHouse
                            ? `/sales-consultant/${consultantHouse.name}`
                            : "/"
                        }
                        className="btn btn-primary"
                      >
                        View all properties
                      </Link>
                    </div>
                  </div>
                </div>
                {relatedHouse ? (
                  <div className="row">
                    <HouseBox isRelated={true} {...relatedHouse} />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProperty;
