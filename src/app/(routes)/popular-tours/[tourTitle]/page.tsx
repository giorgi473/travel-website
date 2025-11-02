"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowRight, Heart } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import Blogs from "@/components/modules/Blogs";
import { Map } from "@/components/Map";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import { GeorgiaSpinner } from "@/components/modules/LoaderSpinner";
import { createSlug } from "@/lib/utils";

interface Props {
  params: Promise<{ tourTitle: string }>;
}

interface PopularTour {
  id: number;
  title: { ka: string; en: string };
  image: string;
  mapLink: string;
  description: { ka: string; en: string };
}

interface Tour {
  id: number;
  title: { ka: string; en: string };
  image: string;
  description: { ka: string; en: string };
  duration: { ka: string; en: string };
  activities: { ka: string; en: string };
  currency: { ka: string; en: string };
  popularTours: PopularTour[];
  createdAt: string;
  updatedAt: string;
}

export default function TourPage({ params }: Props) {
  const { tourTitle } = use(params);
  const id = parseInt(tourTitle.split("-").pop() || "0", 10);
  const { currentLanguage } = useLanguage();
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);

  // Cart hooks
  const { removeTour, isTourInCart } = useCart();
  const isInCart = tour ? isTourInCart(tour.id) : false;

  // Translation object for static text
  const translations = {
    ka: {
      back: "დაბრუნება",
      tours: "ტურები საქართველოში",
      time: "დრო",
      distance: "მანძილი",
      difficulty: "სირთულე",
      addToCart: "მარშრუტებში დამატება",
      removeFromCart: "მარშრუტიდან ამოღება",
      learnMore: "გაიგე მეტი",
    },
    en: {
      back: "Back",
      tours: "Tours in Georgia",
      time: "Time",
      distance: "Distance",
      difficulty: "Difficulty",
      addToCart: "Add to Cart",
      removeFromCart: "Remove from Cart",
      learnMore: "Learn More",
    },
  };

  const t = translations[currentLanguage];

  useEffect(() => {
    const fetchTour = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://nest-travel-api.vercel.app/api/v1/tours"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch tours");
        }
        const data: Tour[] = await response.json();
        const foundTour = data.find((t) => t.id === id);
        setTour(foundTour || null);
      } catch (error) {
        console.error("Error fetching tour:", error);
        setTour(null);
      } finally {
        setLoading(false);
      }
    };

    if (id && id > 0) {
      fetchTour();
    } else {
      setLoading(false);
      setTour(null);
    }
  }, [id]);

  const handleButtonClick = () => {
    if (tour) {
      if (isInCart) {
        removeTour(tour.id);
      } else {
        // addTour(tour);
      }
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-4 flex items-center justify-center min-h-screen">
        <GeorgiaSpinner />
      </div>
    );
  }

  if (!tour) {
    notFound();
  }

  return (
    <>
      <div>
        <HeroSection
          image={tour.image}
          title={tour.title}
          description={tour.description}
          overlay="bg-black/40"
          button={{ ka: t.back, en: t.back }}
          href="/popular-tours"
          tours={{ ka: t.tours, en: t.tours }}
          className="h-[410px] mb-10"
        />
      </div>
      <div className="container mx-auto px-5 sm:px-8 md:px-8 lg:px-10 py-10">
        <div>
          <div>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 mb-[120px]">
              <div className="flex-1 flex flex-col justify-between gap-10">
                <h1 className="text-xl lg:text-4xl font-bold">
                  {tour.title[currentLanguage]}
                </h1>
                <p className="text-gray-600 text-md">
                  {tour.description[currentLanguage]}
                </p>
                <div className="flex flex-row gap-16">
                  <div>
                    <p className="text-sm text-gray-600">{t.time}</p>
                    <span className="text-lg text-black font-bold">
                      {tour.duration[currentLanguage]}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{t.distance}</p>
                    <span className="text-lg text-black font-bold">
                      {tour.currency[currentLanguage]}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{t.difficulty}</p>
                    <span className="text-lg text-black font-bold">
                      {tour.activities[currentLanguage]}
                    </span>
                  </div>
                </div>
                <button
                  className="flex items-center gap-4 cursor-pointer group"
                  onClick={handleButtonClick}
                >
                  <div
                    className={`border w-fit p-3 rounded-full ${
                      isInCart ? "bg-red-500" : "border-red-500"
                    } group-hover:bg-red-500 group-hover:text-white transition-all duration-200 ease-in-out`}
                  >
                    <Heart
                      size={20}
                      className={`${
                        isInCart ? "text-white" : "text-red-500"
                      } group-hover:text-white transition-all duration-200 ease-in-out`}
                    />
                  </div>
                  <div
                    className={`text-md font-bold ${
                      isInCart ? "text-red-500 px-1" : "text-red-500"
                    } group-hover:px-1 transition-all duration-200 ease-in-out`}
                  >
                    {isInCart ? t.removeFromCart : t.addToCart}
                  </div>
                </button>
              </div>
              <div className="flex-1">
                <Image
                  src={tour.image}
                  alt={tour.title[currentLanguage]}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            {/* Sub-Tours Section */}
            {tour.popularTours && tour.popularTours.length > 0 && (
              <div className="mt-10">
                <div className="flex flex-col gap-20">
                  {tour.popularTours.map((subTour, index) => (
                    <div
                      key={subTour.id}
                      className={`flex flex-col lg:flex-row gap-32 ${
                        index % 2 === 1 ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="lg:w-1/2">
                        <Image
                          src={
                            subTour.image || "/popular-tours/default-tour.webp"
                          }
                          alt={subTour.title?.[currentLanguage] || "Tour Image"}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="lg:w-1/2 flex flex-col justify-center gap-10">
                        <div className="flex items-start gap-3 select-none">
                          <div className="flex items-center gap-4 group">
                            <div className="w-fit px-4 py-[8px] rounded-full bg-red-500 text-white transition-all duration-200 ease-in-out">
                              {index}
                            </div>
                          </div>
                          <h3 className="text-xl lg:text-4xl font-semibold -mt-1">
                            {subTour.title[currentLanguage]}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-md">
                          {subTour.description[currentLanguage]}
                        </p>
                        <div>
                          <a
                            href={`/popular-tours/${createSlug(
                              subTour.title[currentLanguage]
                            )}-${subTour.id}`}
                            className="text-red-500 flex items-center gap-2 font-bold text-sm cursor-pointer border border-red-500 rounded-lg px-4 py-4 hover:bg-red-500 hover:text-white transition-all duration-200 ease-in-out"
                          >
                            {t.learnMore} <ArrowRight size={15} />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <section className="my-5 px-5 lg:px-0">
        <Map />
      </section>
      <section>
        <Blogs />
      </section>
    </>
  );
}
