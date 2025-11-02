"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Layers2, Map } from "lucide-react";
import { GeorgiaSpinner } from "@/components/modules/LoaderSpinner";
import { useLanguage } from "@/context/LanguageContext"; // Adjust path as needed
import { images, SlideImage } from "@/lib/data";
import { DestinationCard } from "@/components/DestinationCard";

interface PageProps {
  params: Promise<{ regionText: string }>;
}

interface Tour {
  id: number;
  title: { en: string; ka: string };
  image: string;
  description: { en: string; ka: string };
  duration: { en: string; ka: string };
  activities: { en: string; ka: string };
  currency: { en: string; ka: string };
  popularTours: Array<{
    id: number;
    title: { en: string; ka: string };
    image: string;
    mapLink: string;
    description: { en: string; ka: string };
  }>;
  createdAt: string;
  updatedAt: string;
}

function RegionPage({ params }: PageProps) {
  const { currentLanguage } = useLanguage();
  const [regionText, setRegionText] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(true);
  const [tours, setTours] = React.useState<Tour[]>([]);
  const [toursLoading, setToursLoading] = React.useState<boolean>(true);
  const [randomTours, setRandomTours] = React.useState<Tour[]>([]);

  React.useEffect(() => {
    params.then((resolvedParams) => {
      setRegionText(resolvedParams.regionText);
      setTimeout(() => {
        setLoading(false);
      }, 1500); // 1.5 წამი ლოუდინგზე
    });
  }, [params]);

  // Fetch tours from API
  React.useEffect(() => {
    const fetchTours = async () => {
      try {
        setToursLoading(true);
        const response = await fetch(
          "https://nest-travel-api.vercel.app/api/v1/tours"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch tours");
        }
        const data: Tour[] = await response.json();
        setTours(data);
      } catch (error) {
        console.error("Error fetching tours:", error);
        // Optionally set empty array or handle error state
        setTours([]);
      } finally {
        setToursLoading(false);
      }
    };

    fetchTours();
  }, []);

  // Select 2 random tours after fetching
  React.useEffect(() => {
    if (tours.length > 0 && !toursLoading) {
      // Shuffle tours and take first 2
      const shuffled = [...tours].sort(() => 0.5 - Math.random());
      setRandomTours(shuffled.slice(0, 2));
    }
  }, [tours, toursLoading]);

  const translations = {
    popularTours: {
      ka: "პოპულარული ტურები",
      en: "Popular Tours",
    },
  };

  // Try to find region by current language first, then by any language
  const region = images.find((r: SlideImage) => {
    const decodedRegionText = decodeURIComponent(regionText);
    return (
      r.translations[currentLanguage] === decodedRegionText ||
      r.translations.ka === decodedRegionText ||
      r.translations.en === decodedRegionText ||
      r.region === decodedRegionText
    );
  });

  if (loading) {
    return (
      <div className="container mx-auto p-4 flex items-center justify-center min-h-screen">
        <span className="text-lg text-gray-600">
          <GeorgiaSpinner />
        </span>
      </div>
    );
  }

  if (!regionText || !region) {
    return (
      <div className="container mx-auto p-4">
        {currentLanguage === "ka" ? "რეგიონი არ მოიძებნა" : "Region not found"}
      </div>
    );
  }

  const targetWord =
    currentLanguage === "ka"
      ? "მთელ საქართველოში"
      : "throughout all of Georgia";
  const url = "/";

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden space-y-20 mb-16">
        <Image
          src={region.modalSrc}
          alt={region.alt}
          fill
          quality={100}
          className="object-cover"
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="absolute inset-0 flex items-center bg-black/40 justify-start select-none">
          <div className="text-white container mx-auto px-5 sm:px-8 md:px-8 lg:px-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 md:mb-10">
              {region.translations[currentLanguage]}
            </h1>
            <div className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 md:mb-8 w-[100%] sm:w-[95%] md:w-[90%] lg:w-[75%]">
              {region.description[currentLanguage]}
            </div>
            <div className="text-gray-200">
              <div className="text-base sm:text-lg md:text-lg text-white mb-2">
                {currentLanguage === "ka"
                  ? "რა დრო სჭირდება მგზავრობას:"
                  : "Travel time:"}
              </div>
              <div className="flex gap-4 sm:gap-8 md:gap-16">
                {region.citiesTimes.slice(0, 3).map((cityTime, index) => (
                  <div key={index} className="mx-2">
                    <h4 className="text-sm sm:text-md md:text-md font-semibold mb-1 sm:mb-2 md:mb-2 text-gray-200">
                      {cityTime.name[currentLanguage]}
                    </h4>
                    <div className="flex gap-1 sm:gap-2 md:gap-2">
                      {cityTime.times.map((time, timeIndex) => (
                        <span
                          key={timeIndex}
                          className="text-sm sm:text-md md:text-md font-semibold text-white"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[90%] sm:max-w-[80%] md:max-w-2xl lg:max-w-3xl mx-auto w-full">
        <div className="mb-10 sm:mb-16 md:mb-20">
          {region.descriptionTexts.map((item, index) => {
            const parts = item.desc[currentLanguage].split(targetWord);
            return (
              <div key={index}>
                <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4">
                  {item.header[currentLanguage]}
                </h1>
                {item.img && (
                  <Image
                    src={item.img}
                    alt="images"
                    width={500}
                    height={500}
                    className="w-full h-auto rounded-lg object-contain mb-5"
                  />
                )}
                <p className="text-sm sm:text-md md:text-md mb-2 sm:mb-3 md:mb-5 whitespace-pre-line">
                  {parts.map((part, partIndex) => (
                    <span key={partIndex}>
                      {part}
                      {partIndex < parts.length - 1 && (
                        <Link
                          href={url}
                          rel="noopener noreferrer"
                          className="text-red-500 hover:text-gray-700"
                        >
                          {targetWord}
                        </Link>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px]">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-red-500 rounded-full p-2">
                <Map className="text-white" />
              </div>
              <p className="text-xs sm:text-sm md:text-sm text-gray-600">
                {currentLanguage === "ka" ? "სანახაობა" : "Sightseeing"}
              </p>
              {region.range.map((item, index) => (
                <p key={index} className="text-xs sm:text-sm md:text-sm">
                  {item.min}
                </p>
              ))}
            </div>
            <div className="w-20 sm:w-0 sm:h-16 md:h-20 border-t-2 sm:border-t-0 sm:border-l-2 border-gray-300" />
            <div className="flex flex-col items-center gap-2">
              <div className="bg-red-500 rounded-full p-2">
                <Layers2 className="text-white" />
              </div>
              <p className="text-xs sm:text-sm md:text-sm text-gray-600">
                {currentLanguage === "ka" ? "აქტივობა" : "Activity"}
              </p>
              {region.range.map((item, index) => (
                <p key={index} className="text-xs sm:text-sm md:text-sm">
                  {item.max}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="container mx-auto px-5 sm:pl-8 sm:pr-7 md:pl-8 md:pr-7 lg:pl-11 lg:pr-10 py-8">
        <h1 className="mb-5 text-md sm:text-lg font-bold">
          {translations.popularTours[currentLanguage]}
        </h1>
        {toursLoading ? (
          <div className="flex justify-center items-center py-8">
            <GeorgiaSpinner />
          </div>
        ) : randomTours.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            {currentLanguage === "ka" ? "ტურები არ მოიძებნა" : "No tours found"}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {randomTours.map((tour) => (
              <DestinationCard
                key={tour.id}
                id={tour.id}
                title={tour.title}
                description={tour.description}
                image={tour.image}
                duration={tour.duration}
                activities={tour.activities}
                currency={tour.currency}
                currentLanguage={currentLanguage}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default RegionPage;
