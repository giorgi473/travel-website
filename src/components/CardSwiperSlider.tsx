"use client";

import type React from "react";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion, type Variants } from "framer-motion";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { Skeleton } from "@/components/ui/skeleton";

interface Destination {
  id: number;
  title: {
    en: string;
    ka: string;
  };
  src: string;
  modalSrc: string;
  description: {
    en: string;
    ka: string;
  };
  region: {
    en: string;
    ka: string;
  };
  city: {
    en: string;
    ka: string;
  };
}

export default function CardSwiperSlider() {
  const [heartAnimations, setHeartAnimations] = useState<
    Record<number, boolean>
  >({});
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { addSight, removeSight, isSightInCart } = useCart();
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://nest-travel-api.vercel.app/api/v1/slider/destination"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch destinations");
        }

        const data = await response.json();
        setDestinations(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching destinations:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const handleHeartClick = (
    destination: Destination,
    event: React.MouseEvent
  ) => {
    event.preventDefault();
    event.stopPropagation();

    const sight = {
      id: destination.id,
      title: destination.title[currentLanguage],
      description: destination.description[currentLanguage],
      src: destination.src,
    };

    const isInCart = isSightInCart(sight.id);

    if (isInCart) {
      removeSight(sight.id);
    } else {
      addSight(sight);
    }

    setHeartAnimations((prev) => ({ ...prev, [destination.id]: true }));
    setTimeout(() => {
      setHeartAnimations((prev) => ({ ...prev, [destination.id]: false }));
    }, 1000);
  };

  const scatterHeartVariants: Variants = {
    initial: { opacity: 0, scale: 0, x: 0, y: 0 },
    animate: (i: number) => ({
      opacity: [0, 1, 0],
      scale: [0, Math.random() * 0.5 + 0.3, 0],
      x: Math.cos((i * Math.PI * 2) / 10) * (20 + Math.random() * 20),
      y: Math.sin((i * Math.PI * 2) / 10) * (20 + Math.random() * 20),
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: Math.random() * 0.2,
      },
    }),
  };

  if (loading) {
    return (
      <>
        <div className="container mx-auto pr-4 pl-5 sm:pr-5 sm:pl-8 md:pr-5 md:pl-8 lg:pr-7 lg:pl-10">
          <div className="mb-14">
            <Skeleton className="h-8 w-[280px] mb-2 sm:h-9 sm:w-[350px] md:h-10 md:w-[420px] lg:h-12 lg:w-[520px]" />
            <Skeleton className="h-8 w-[240px] mb-2 sm:h-9 sm:w-[300px] md:h-10 md:w-[360px] lg:h-12 lg:w-[450px]" />
            <Skeleton className="h-8 w-[200px] sm:h-9 sm:w-[250px] md:h-10 md:w-[300px] lg:h-12 lg:w-[380px]" />
          </div>
          <div className="flex items-center justify-between mb-5">
            <Skeleton className="h-5 w-[200px] sm:h-6 sm:w-[250px] md:h-7 md:w-[300px] lg:h-7 lg:w-[350px]" />
            <div className="flex gap-2">
              <Skeleton className="h-5 w-5 rounded-sm sm:h-6 sm:w-6" />
              <Skeleton className="h-5 w-5 rounded-sm sm:h-6 sm:w-6" />
            </div>
          </div>
        </div>
        <div className="pl-2 sm:pl-2 sm:pr-0 md:pl-2 md:pr-0 lg:pl-2 lg:pr-0">
          <div className="flex gap-2.5 sm:gap-5 md:gap-5 lg:gap-5 overflow-hidden">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-[calc(40%-5px)] sm:w-[calc(40%-5px)] md:w-[calc(40%-5px)] lg:w-[calc(22%-2px)]"
              >
                <div className="relative">
                  <Skeleton className="w-full h-52 sm:h-52 md:h-96 rounded-t-lg" />
                  <div className="absolute top-2 right-2 sm:top-5 sm:right-5">
                    <Skeleton className="h-4 w-4 sm:h-5 sm:w-5 rounded-full" />
                  </div>
                  <div className="absolute bottom-1 sm:bottom-2 left-2 sm:left-2 right-2 sm:right-4 space-y-1 sm:space-y-2">
                    <Skeleton className="h-3 w-3/4 sm:h-4 md:h-5 bg-white/30" />
                    <Skeleton className="h-2 w-full sm:h-3 bg-white/20" />
                    <Skeleton className="h-2 w-5/6 sm:h-3 bg-white/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto pr-4 pl-5 sm:pr-5 sm:pl-8 md:pr-5 md:pl-8 lg:pr-7 lg:pl-10">
        <div className="flex items-center justify-center py-20">
          <div className="text-lg text-red-500">
            {currentLanguage === "en" ? `Error: ${error}` : `შეცდომა: ${error}`}
          </div>
        </div>
      </div>
    );
  }

  if (destinations.length === 0) {
    return (
      <div className="container mx-auto pr-4 pl-5 sm:pr-5 sm:pl-8 md:pr-5 md:pl-8 lg:pr-7 lg:pl-10">
        <div className="flex items-center justify-center py-20">
          <div className="text-lg">
            {currentLanguage === "en"
              ? "No destinations found"
              : "სანახაობები არ მოიძებნა"}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto pr-4 pl-5 sm:pr-5 sm:pl-8 md:pr-5 md:pl-8 lg:pr-7 lg:pl-10">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#3b3b3b] mb-14">
          {currentLanguage === "en" ? (
            <>
              Sea, mountains, resorts <br />
              and culture in <strong>one place.</strong> <br /> We’ve got you
              covered.
            </>
          ) : (
            <>
              ეს <strong>საქართველოა,</strong> <br />
              ქვეყანა, რომელიც <br />
              დაუვიწყარ სანახაობებს <br />
              გთავაზობს!
            </>
          )}
        </h3>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <h3 className="text-sm sm:text-lg md:text-xl font-semibold">
              {currentLanguage === "en"
                ? "Discover Popular Attractions"
                : "აღმოაჩინე პოპულარული სანახაობები"}
            </h3>
          </div>
          <div className="flex gap-2">
            <button className="custom-prev-button cursor-pointer bg-gray-100 p-0.5 rounded-sm">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="custom-prev-button cursor-pointer bg-gray-100 p-0.5 rounded-sm">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="pl-2 sm:pl-2 sm:pr-0 md:pl-2 md:pr-0 lg:pl-2 lg:pr-0">
        <Swiper
          modules={[Navigation]}
          spaceBetween={6}
          slidesPerView={2.5}
          breakpoints={{
            480: { slidesPerView: 2.8, spaceBetween: 12 },
            640: { slidesPerView: 2.8, spaceBetween: 12 },
            768: { slidesPerView: 2.8, spaceBetween: 12 },
            1024: { slidesPerView: 4.4, spaceBetween: 12 },
          }}
          navigation={{
            prevEl: ".custom-next-button",
            nextEl: ".custom-prev-button",
          }}
          className="w-full"
        >
          {destinations.map((destination) => {
            const isInCart = isSightInCart(destination.id);

            return (
              <SwiperSlide key={destination.id}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                  <Link
                    href={`/card/${encodeURIComponent(
                      destination.title[currentLanguage]
                    )}`}
                  >
                    <div className="cursor-pointer select-none">
                      <div className="relative w-full h-52 sm:h-52 md:h-96 group">
                        <div className="relative w-full h-full overflow-hidden">
                          <Image
                            src={destination.src || "/placeholder.svg"}
                            alt={destination.title[currentLanguage]}
                            fill
                            className="object-cover group-hover:scale-110 transition-all duration-300 ease-in-out z-0"
                            quality={75}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        </div>
                        <div className="p-2 sm:p-4 absolute bottom-1 sm:bottom-2 text-white z-20">
                          <h4 className="text-[10px] sm:text-sm md:text-lg font-semibold mb-0.5 sm:mb-2">
                            {destination.title[currentLanguage]}
                          </h4>
                          <div className="text-[9px] sm:text-sm line-clamp-2">
                            {destination.description[currentLanguage]}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="absolute top-2 right-2 sm:top-5 sm:right-5 z-30">
                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => handleHeartClick(destination, e)}
                        className="cursor-pointer"
                      >
                        <Heart
                          size={16}
                          className={`sm:w-5 sm:h-5 transition-all duration-200 ease-in-out ${
                            isInCart
                              ? "text-red-500 fill-red-500"
                              : "text-white hover:text-red-500"
                          }`}
                        />
                      </motion.div>

                      {heartAnimations[destination.id] && (
                        <div className="absolute top-0 left-0 pointer-events-none">
                          {Array.from({ length: 10 }, (_, i) => (
                            <motion.div
                              key={i}
                              custom={i}
                              variants={scatterHeartVariants}
                              initial="initial"
                              animate="animate"
                              className="absolute top-2 left-2"
                            >
                              <Heart
                                size={12}
                                className="text-white fill-white"
                              />
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
