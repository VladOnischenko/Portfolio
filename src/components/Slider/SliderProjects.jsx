import React, {useContext, useState} from 'react';
import './Slider.scss';
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
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
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
                    <Button className="slider__button custom-button" href={slide.url} target="_blank">Website link</Button>
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