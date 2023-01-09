import { EffectFade } from 'swiper';
import Swiper, { SwiperSlide } from "../../component/swiper";
import sliderData from "../../data/hero-sliders/hero-slider-twenty-eight.json";
import HeroSliderTwentyEightSingle from "../../component/hero-slider/HeroSliderTwentyEightSingle.js";

const params = {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  modules: [EffectFade],
  loop: true,
  speed: 1000,
  navigation: true,
  autoHeight: false
};

const HeroSliderTwentyEight = () => {
  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        {sliderData && (
          <Swiper options={params} >
            {sliderData.map((single, key) => (
              <SwiperSlide key={key}>
                <HeroSliderTwentyEightSingle
                  data={single}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default HeroSliderTwentyEight;
