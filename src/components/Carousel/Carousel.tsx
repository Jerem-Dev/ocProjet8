import { useState } from "react";

interface CarouselProps {
  imgUrl: string[];
}

export default function Carousel(props: CarouselProps) {
  const [currentImg, setCurrentImg] = useState(0);

  function handleNextImg() {
    if (currentImg === props.imgUrl.length - 1) {
      setCurrentImg(0);
    } else {
      setCurrentImg(currentImg + 1);
    }
  }

  function handlePrevImg() {
    if (currentImg === 0) {
      setCurrentImg(props.imgUrl.length - 1);
    } else {
      setCurrentImg(currentImg - 1);
    }
  }

  if (props.imgUrl.length <= 1) {
    return (
      <div className="carousel">
        <img
          src={props.imgUrl[currentImg]}
          alt="Photo du logement"
          className="carousel__slide"
        />
      </div>
    );
  }

  return (
    <div className="carousel">
      <img
        src="/public/img/Chevron.svg"
        alt="Image précedente"
        className="prev-img"
        onClick={handlePrevImg}
      />
      <img
        src={props.imgUrl[currentImg]}
        alt="Photo du logement"
        className="carousel__slide"
      />
      <img
        src="/public/img/Chevron.svg"
        alt="Image suivante"
        className="next-img"
        onClick={handleNextImg}
      />
      <p className="carousel__current-slide">{`${currentImg + 1}/${
        props.imgUrl.length
      }`}</p>
    </div>
  );
}
