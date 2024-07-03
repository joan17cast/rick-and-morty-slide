import { CharacterModel } from "@/domain/character.domain";
import Slider from "react-slick";

interface ImageSliderProps {
  listOfImages: CharacterModel[];
}

function ImageSlider({ listOfImages }: ImageSliderProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="w-full overflow-hidden px-10">
      <Slider {...settings}>
        {listOfImages.map((character) => (
          <div
            key={character.id}
            className="relative flex w-full flex-row items-center justify-center p-5"
          >
            <img
              src={character.image}
              alt={character.name}
              className="w-full rounded-md"
            />
            <div className="absolute bottom-8 left-0 w-full px-10">
              <div className="rounded-md bg-white py-2 shadow-md">
                <h3 className="text-center text-xs font-bold sm:text-base">
                  {character.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
