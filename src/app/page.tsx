import React from "react";
import SwiperSliderImage from "@/components/modules/SwiperSliderImage";
import CardSwiperSlider from "@/components/CardSwiperSlider";

function page() {
  return (
    <div className="space-y-20">
      <section>
        <SwiperSliderImage />
      </section>
      <section>
        <CardSwiperSlider />
      </section>

      <section>sdsdsd</section>
    </div>
  );
}

export default page;
