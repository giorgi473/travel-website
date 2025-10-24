import React, { Suspense } from "react";
import SwiperSliderImage from "@/components/modules/SwiperSliderImage";
import CardSwiperSlider from "@/components/CardSwiperSlider";

function page() {
  return (
    <div className="space-y-24">
      <Suspense fallback="sdsdsd">
        <section>
          <SwiperSliderImage />
        </section>
      </Suspense>

      <section>
        <CardSwiperSlider />
      </section>

      <section>sdsdsd</section>
    </div>
  );
}

export default page;
