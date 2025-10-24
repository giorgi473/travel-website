"use server";

// Type definition for API response
export interface Destination {
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
  additionalDescription: {
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
  name: {
    en: string;
    ka: string;
  };
  address: string;
  phone: string;
  website: string;
  workingHours: {
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
    Saturday: string;
    Sunday: string;
  };
  anotherSection: {
    image: string | string[];
    name1?: { en: string; ka: string };
    name2?: { en: string; ka: string };
    name3?: { en: string; ka: string };
    name4?: { en: string; ka: string };
    name5?: { en: string; ka: string };
    description?: { en: string; ka: string };
    description2?: { en: string; ka: string };
    description3?: { en: string; ka: string };
    description4?: { en: string; ka: string };
    description5?: { en: string; ka: string };
  };
  slideCard: Array<{
    id: number;
    title: { en: string; ka: string };
    src: string;
    modalSrc: string;
    additionalDescription: { en: string; ka: string };
    text?: { en: string; ka: string };
    region: { en: string; ka: string };
    city: { en: string; ka: string };
    name: { en: string; ka: string };
    address: string;
    phone: string;
    website: string;
    workingHours: {
      Monday: string;
      Tuesday: string;
      Wednesday: string;
      Thursday: string;
      Friday: string;
      Saturday: string;
      Sunday: string;
    };
    destinationId: number;
  }>;
  blogs: Array<{
    id: number;
    img: string;
    title: { en: string; ka: string };
    blogText: { en: string; ka: string };
    desc: { en: string; ka: string };
    destinationId: number;
  }>;
}

export async function getDestinations(): Promise<Destination[]> {
  try {
    const response = await fetch(
      "https://nest-travel-api.vercel.app/api/v1/slider/destination",
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch destinations");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching destinations:", error);
    throw error;
  }
}

export async function getDestinationByTitle(
  title: string
): Promise<Destination | null> {
  try {
    const destinations = await getDestinations();
    const decodedTitle = decodeURIComponent(title);

    const foundDestination = destinations.find(
      (item) => item.title.ka === decodedTitle || item.title.en === decodedTitle
    );

    return foundDestination || null;
  } catch (error) {
    console.error("Error fetching destination by title:", error);
    throw error;
  }
}
