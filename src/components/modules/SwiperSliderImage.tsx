"use client";

import React, { useState, useRef, forwardRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import { useLanguage } from "@/context/LanguageContext";
import { GeorgiaSpinner } from "@/components/modules/LoaderSpinner";

interface Slider {
  id: number;
  src: string;
  title: {
    en: string;
    ka: string;
  };
  description: {
    en: string;
    ka: string;
  };
  createdAt: string;
  updatedAt: string;
}

interface ThumbnailProps {
  src: string;
  index: number;
  activeIndex: number;
  isPaused: boolean;
  onClick: (index: number, pause: boolean) => void;
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  src,
  index,
  activeIndex,
  isPaused,
  onClick,
}) => {
  console.log(`🖼️ Thumbnail ${index}:`, src);

  return (
    <div
      className={`relative w-14 h-10 sm:w-16 sm:h-12 md:w-20 md:h-14 lg:w-28 lg:h-16 cursor-pointer transition-all flex items-center justify-center ${
        activeIndex === index ? "opacity-100" : "opacity-80 hover:opacity-100"
      }`}
      onClick={() => onClick(index, activeIndex === index ? !isPaused : false)}
    >
      {activeIndex === index && (
        <div
          className="absolute w-4 h-4 sm:w-5 sm:h-5 rounded-full border-[2px] z-20 border-white flex items-center justify-center"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className={`w-1 h-1 sm:w-2 sm:h-2 bg-white ${
              isPaused ? "rotate-90" : ""
            }`}
            style={{
              ...(isPaused && {
                top: "50%",
                left: "50%",
                transform: "translate(-2%, -11%)",
                clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
              }),
            }}
          />
        </div>
      )}
      <Image
        src={src}
        alt={`Thumbnail ${index + 1}`}
        fill
        className="object-cover rounded-md"
      />
    </div>
  );
};

const SwiperSliderImage = forwardRef(() => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [sliders, setSliders] = useState<Slider[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const swiperRef = useRef<SwiperRef>(null);
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    console.log("🚀 Starting fetch...");

    const fetchSliders = async () => {
      try {
        console.log("📡 Fetching from API...");
        const response = await fetch(
          "https://nest-travel-api.vercel.app/api/v1/sliders"
        );

        console.log("📊 Response status:", response.status);
        console.log("📊 Response ok:", response.ok);

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data: Slider[] = await response.json();
        console.log("✅ API Data received:", data);
        console.log("📦 Total sliders:", data.length);

        if (data.length > 0) {
          console.log("🖼️ First slider:", {
            id: data[0].id,
            src: data[0].src,
            title: data[0].title,
            description: data[0].description,
          });
        }

        setTimeout(() => {
          console.log("⏱️ Setting sliders after timeout");
          setSliders(data);
          setLoading(false);
        }, 900);
      } catch (err: unknown) {
        console.error("❌ Fetch error:", err);
        const errorMessage =
          err instanceof Error ? err.message : "ჩატვირთვა ვერ მოხერხდა";
        console.error("❌ Error message:", errorMessage);
        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchSliders();
  }, []);

  console.log("🔄 Component render state:", {
    loading,
    error,
    slidersCount: sliders.length,
    currentLanguage,
  });

  if (loading) {
    console.log("⏳ Showing loading state");
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-gray-700">
          <GeorgiaSpinner />
        </div>
      </div>
    );
  }

  if (error) {
    console.log("❌ Showing error state:", error);
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  if (sliders.length === 0) {
    console.log("⚠️ No sliders found");
    return (
      <div className="text-center mt-10 text-gray-500">
        მონაცემები არ მოიძებნა.
      </div>
    );
  }

  console.log("✨ Rendering sliders:", sliders.length);

  const handleThumbnailClick = (index: number, pause: boolean) => {
    console.log("👆 Thumbnail clicked:", { index, pause });
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
      setActiveIndex(index);
      setIsPaused(pause);
      if (pause) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
    }
  };

  const translations = {
    ka: {
      planTrip: "დაგეგმე მოგზაურობა",
      learnMore: "გაიგე მეტი",
    },
    en: {
      planTrip: "Plan Your Trip",
      learnMore: "Learn More",
    },
  };

  return (
    <div className="relative w-full h-screen">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={(swiper) => {
          console.log("🎠 Slide changed to:", swiper.activeIndex);
          setActiveIndex(swiper.activeIndex);
          if (isPaused) {
            setIsPaused(false);
            swiper.autoplay.start();
          }
        }}
        className="w-full h-full"
      >
        {sliders.map((item, index) => {
          console.log(`🎬 Rendering slide ${index}:`, {
            id: item.id,
            src: item.src,
            title: item.title[currentLanguage as "ka" | "en"],
          });

          return (
            <SwiperSlide key={item.id || index}>
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  onLoad={() =>
                    console.log(`✅ Image ${index} loaded:`, item.src)
                  }
                  onError={(e) =>
                    console.error(
                      `❌ Image ${index} failed to load:`,
                      item.src,
                      e
                    )
                  }
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-8 md:px-8 lg:px-11 container mx-auto z-50 text-white">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:pr-4 font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                    <div className="space-y-1 sm:space-y-2">
                      {(item.title[currentLanguage as "ka" | "en"] || "")
                        .split("\n\n")
                        .map((paragraph, idx) => (
                          <p key={idx}>{paragraph.trim()}</p>
                        ))}
                    </div>
                  </div>
                  <p className="text-sm pr-1.5 sm:text-base sm:pr-5 md:text-lg lg:text-lg mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl text-gray-300">
                    {item.description[currentLanguage as "ka" | "en"] || ""}
                  </p>
                  <div className="flex flex-row gap-3 sm:gap-4">
                    <button
                      className="bg-red-500 flex items-center gap-2 text-white px-4 sm:px-5 md:px-6 lg:px-6 py-1.5 sm:py-2 rounded hover:bg-red-600 cursor-pointer text-sm sm:text-base md:text-lg lg:text-lg"
                      onClick={() => router.push("/popular-tours")}
                    >
                      {translations[currentLanguage].planTrip}{" "}
                      <ArrowRight size={18} className="hidden sm:flex" />
                    </button>
                    <button
                      className="bg-gray-800 flex items-center gap-2 text-white px-4 sm:px-5 md:px-6 lg:px-6 py-1.5 sm:py-2 rounded hover:bg-gray-600 cursor-pointer text-sm sm:text-base md:text-lg lg:text-lg"
                      onClick={() => router.push("/why-georgia")}
                    >
                      {translations[currentLanguage].learnMore}{" "}
                      <ArrowRight size={18} className="hidden sm:flex" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="absolute container mx-auto flex items-end justify-end bottom-10 sm:bottom-10 md:bottom-10 lg:bottom-20 px-5 sm:pr-5 md:pr-5 lg:pr-0 z-10 gap-2 sm:gap-2 md:gap-3 lg:gap-3 select-none">
        {sliders.map((item, index) => (
          <Thumbnail
            key={item.id || index}
            src={item.src}
            index={index}
            activeIndex={activeIndex}
            isPaused={isPaused}
            onClick={handleThumbnailClick}
          />
        ))}
      </div>
    </div>
  );
});

SwiperSliderImage.displayName = "SwiperSliderImage";

export default SwiperSliderImage;
