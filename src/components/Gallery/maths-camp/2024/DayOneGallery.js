import React from "react";
import GalleryCard from "../../GalleryCard";
import DV1 from "../../../../assets/images/events/donor-visit/maths-camp/2024/day-one/P1.jpeg";
import DV2 from "../../../../assets/images/events/donor-visit/maths-camp/2024/day-one/P2.jpeg";
import DV3 from "../../../../assets/images/events/donor-visit/maths-camp/2024/day-one/P3.jpeg";
import DV4 from "../../../../assets/images/events/donor-visit/maths-camp/2024/day-one/P4.jpeg";
import DV5 from "../../../../assets/images/events/donor-visit/maths-camp/2024/day-one/P5.jpeg";

const DayOneGallery = () => {
  return (
    <section className="gallery-page pt-120 pb-120">
      <div className="container">
        <div className="gallery-3-col">
          <GalleryCard image={DV1} />
          <GalleryCard image={DV2} />
          <GalleryCard image={DV3} />
          <GalleryCard image={DV4} />
          <GalleryCard image={DV5} />
        </div>
      </div>
    </section>
  );
};

export default DayOneGallery;
