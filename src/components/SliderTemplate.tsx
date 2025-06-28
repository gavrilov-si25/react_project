import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export interface SliderTemplateProps {
  images: { src: string; alt: string; className?: string }[];
  autoplayDelay?: number;
  loop?: boolean;
  spaceBetween?: number;
  className?: string;
}

const SliderTemplateComponent = ({
  images,
  autoplayDelay,
  loop,
  spaceBetween,
  className,
}: SliderTemplateProps): React.ReactElement => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      loop={loop}
      spaceBetween={spaceBetween}
      autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
      className={className}
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <img src={img.src} alt={img.alt} className={img.className} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const SliderTemplate = memo(SliderTemplateComponent);
