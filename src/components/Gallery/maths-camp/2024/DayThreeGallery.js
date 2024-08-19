import React from "react";
import GalleryCard from "../../GalleryCard";
import DV1 from "../../../../assets/images/events/maths-camp/2024/day-three/p9.jpeg";
import DV2 from "../../../../assets/images/events/maths-camp/2024/day-three/p3.jpeg";
import DV3 from "../../../../assets/images/events/maths-camp/2024/day-three/p4.jpeg";
import DV4 from "../../../../assets/images/events/maths-camp/2024/day-three/p5.jpeg";
import DV5 from "../../../../assets/images/events/maths-camp/2024/day-three/p6.jpeg";
import DV6 from "../../../../assets/images/events/maths-camp/2024/day-three/p7.jpeg";
import DV7 from "../../../../assets/images/events/maths-camp/2024/day-three/p8.jpeg";
import DV8 from "../../../../assets/images/events/maths-camp/2024/day-three/p2.jpeg";
import DV9 from "../../../../assets/images/events/maths-camp/2024/day-three/p1.jpeg";

const DayThreeGallery = () => {
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

export default DayThreeGallery;
