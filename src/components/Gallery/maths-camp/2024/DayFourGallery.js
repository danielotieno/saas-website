import React from "react";
import GalleryCard from "../../GalleryCard";
import DV1 from "../../../../assets/images/events/maths-camp/2024/day-four/9.jpeg";
import DV2 from "../../../../assets/images/events/maths-camp/2024/day-four/3.jpeg";
import DV3 from "../../../../assets/images/events/maths-camp/2024/day-four/4.jpeg";
import DV4 from "../../../../assets/images/events/maths-camp/2024/day-four/5.jpeg";
import DV5 from "../../../../assets/images/events/maths-camp/2024/day-four/6.jpeg";
import DV6 from "../../../../assets/images/events/maths-camp/2024/day-four/7.jpeg";
import DV7 from "../../../../assets/images/events/maths-camp/2024/day-four/8.jpeg";
import DV8 from "../../../../assets/images/events/maths-camp/2024/day-four/2.jpeg";
import DV9 from "../../../../assets/images/events/maths-camp/2024/day-four/1.jpeg";

const DayFourGallery = () => {
  return (
    <section className="gallery-page pt-120 pb-120">
      <div className="container">
        <div className="gallery-3-col">
          <GalleryCard image={DV1} />
          <GalleryCard image={DV2} />
          <GalleryCard image={DV3} />
          <GalleryCard image={DV4} />
          <GalleryCard image={DV5} />
          <GalleryCard image={DV6} />
          <GalleryCard image={DV7} />
          <GalleryCard image={DV8} />
          <GalleryCard image={DV9} />
        </div>
      </div>
    </section>
  );
};

export default DayFourGallery;
