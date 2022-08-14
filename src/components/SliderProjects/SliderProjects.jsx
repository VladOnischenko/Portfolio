import React, {useContext, useState} from 'react';
import './SliderProjects.scss';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import dataSlider from "./dataSlider";
import {Button} from "@mui/material";
import {ThemeProvider} from "../../App";

const SliderProjects = () => {
  const theme = useContext(ThemeProvider)

  const [current, setCurrent] = useState(0);
  const length = dataSlider.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(dataSlider) || dataSlider.length <= 0) {
    return null;
  }

  return (
    <section className={theme ? "slider" : "slider slider-dark"}>
      <FaArrowAltCircleLeft className={theme ? 'left-arrow' : 'left-arrow arrow-dark'} onClick={prevSlide} />
      <FaArrowAltCircleRight className={theme ? 'right-arrow' : 'right-arrow arrow-dark'} onClick={nextSlide} />
      {dataSlider.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}

          >
            {index === current && (
              <div className="slider__container">
                <h4 className="slider__title">{slide.title}</h4>
                <div className="slider__content">
                  <div className="slider__description">
                    <p>{slide.subTitle}</p>
                    <Button className={theme ? "slider__button custom-button" : "slider__button custom-button btn-dark"} href={slide.url} target="_blank">Website link</Button>
                  </div>
                  <div className="slider__box-images">
                    <img src={ `./images/projects/img${index + 1}.png`} alt={`img${index + 1}`}/>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  )
}

export default SliderProjects