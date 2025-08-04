// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

import Image from "next/image";

const SlideShow = ({ images }: { images: string[] }) => {
  return (
    <Splide
      options={{
        autoplay: "true",
        perPage: 1,
        start: 0,
        rewind: true,
        padding: {left:'3rem',right:'3rem'},
        gap: "1rem",
      }}
      hasTrack={false}
    >
      <SplideTrack>
        {images.map((image, idx) => (
          <SplideSlide key={idx} className="flex items-center">
                <Image
                  src={image}
                  alt="screenshot"
                  width={1000}
                  height={1000}
                  className="w-full rounded-lg h-auto"
                />
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  );
};
export default SlideShow;
