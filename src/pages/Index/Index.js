import React, { useCallback, useEffect, useRef, useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import FilterSearch from "../../components/FilterSearch/FilterSearch";
import HouseBox from "../../components/HouseBox/HouseBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "./Index.css";
import "swiper/css";
import HouseCart from "../../components/HouseCart/HouseCart";
import data from "../../data";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import regexPatterns from "../../regex";

function Index() {
  const [lastHouse, setLastHouse] = useState([]);
  const [randomHouses, setRandomHouses] = useState([]);
  const sliderRef = useRef(null);
  const emailNewsletterRef = useRef(null);
  const swal = withReactContent(Swal);

  useEffect(() => {
    setLastHouse(data.houses.slice(data.houses.length - 3));

    let randomHouses = data.houses.sort(() => Math.random() - 0.5);
    setRandomHouses(randomHouses.slice(0, 4));
    AOS.init();
    AOS.refresh();
  }, []);

  const prevSlider = useCallback(() => {
    sliderRef.current.swiper.slidePrev();
  }, []);

  const nextSlider = useCallback(() => {
    sliderRef.current.swiper.slideNext();
  }, []);

  const addToNewsletter = (e) => {
    e.preventDefault();

    let emailIsValid = regexPatterns.email.test(
      emailNewsletterRef.current.value
    );

    if (emailIsValid) {
      swal.fire({
        title: "You have successfully subscribed to our newsletter",
        icon: "success",
        confirmButtonColor: "#176B87",
      });

      emailNewsletterRef.current.value = "";
    } else {
      swal.fire({
        title: "Please enter a valid email",
        icon: "error",
        confirmButtonColor: "#176B87",
      });
    }
  };

  return (
    <>
      <HeroSection title="D-REC" text="Buy, Sell, Rent" />
      <div className="container-fluid d-flex justify-content-center">
        <FilterSearch />
      </div>
      <div className="container my-5">
        <div className="row">
          {lastHouse.map((house) => (
            <HouseBox key={house.id} {...house} />
          ))}
        </div>
      </div>
      <section
        className="popular-room set-bg"
        style={{ backgroundImage: "url(/images/bg-2.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
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
              <Swiper slidesPerView={1} loop ref={sliderRef}>
                {randomHouses.map((house) => (
                  <SwiperSlide key={house.id}>
                    <HouseCart {...house} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="news-latter-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="icon-news-latter">
                <i className="fa-solid fa-envelope-open-text"></i>
              </div>
              <h4>
                To receive the latest property discounts Join our newsletter
              </h4>
              <form onSubmit={addToNewsletter}>
                <input
                  type="text"
                  placeholder="Enter the Email"
                  ref={emailNewsletterRef}
                />
                <button className="btn">Subscribe!</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h2>Why D-REC?</h2>
              <p className="title">Because the best choose us</p>
              <p className="text">
                And that our real estate consultant has more than 15 years of
                experience in buying and selling villas and land in coastal
                areas and can offer you, dear customers, the best options to
                experience a profitable and safe transaction, in front of a
                number of See our advantages
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <div className="options">
                <ul>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>
                    Having exclusive settlements with 24-hour security
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>
                    Selling land in the free zone and providing construction and
                    use services
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>
                    Implementation of residential, service and tourism projects{" "}
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>
                    Implementation of residential and tourist complex projects
                    and hotels{" "}
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>
                    Receiving representation from domestic and foreign
                    institutions{" "}
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>
                    Investing and buying and selling real estate
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
