export interface PopularTours {
  id: number;
  title: { ka: string; en: string };
  image: string;
  mapLink?: string;
  description: { ka: string; en: string };
}

export interface Card {
  id: number;
  title: { ka: string; en: string };
  description: { ka: string; en: string };
  image: string;
  duration: { ka: string; en: string };
  activities: { ka: string; en: string };
  currency: { ka: string; en: string };
  popularTours: PopularTours[];
}

export const cardSliderImages: Card[] = [
  {
    id: 1,
    title: {
      ka: "ერთდღიანი ტური ქუთ9840აისში",
      en: "One-Day Tour in Kutaisi",
    },
    description: {
      ka: "ამ ერთდღიანი ტურის ფარგლებში, უდიდესი ისტორიული და კულტურული მნიშვნელობის ხუროთმოძღვრების ძეგლს - გეთალის მონასტერს იხილავ, იმერეთის სიმწვანეში ჩაფლულ ბუნებას დაათვალიერებ და უნიკალური გამოცდილების მისაღებად, მოწამეთას სამონასტრო კომპექსსაც ესტუმრები.",
      en: "During this one-day tour, you’ll visit the Gelati Monastery, a monument of immense historical and cultural significance, explore the lush nature of Imereti, and visit the Motsameta Monastery Complex for a unique experience.",
    },
    image:
      "https://res.cloudinary.com/duzp7oet3/image/upload/v1762019455/travel-sliders/xq7mcn7q2ton5o5rew4c.web",
    duration: { ka: "30 კმ", en: "30 km" },
    activities: { ka: "12 სანახაობა", en: "12 attractions" },
    currency: { ka: "30 კმ", en: "30 km" },
    popularTours: [
      {
        id: 2,
        title: { ka: "ნიკორწმინდის საკათედრო ტაძარი", en: "" },
        image:
          "https://res.cloudinary.com/duzp7oet3/image/upload/v1762019455/travel-sliders/xq7mcn7q2ton5o5rew4c.webp",
        description: {
          ka: "მდიდრული ჩუქურთმებით ნაქსოვი არშიები, მრავალფეროვანი სიუჟეტის მქონე ფრესკები, ცადაწვდენილი, მაღალყელიანი გუმბათი - ეს ეროვნული ხუროთმოძღვრების შედევრად აღიარებული ნიკორწმინდის ტაძარია. ",
          en: "",
        },
      },
      {
        id: 3,
        title: { ka: "ნიკორწმინდის საკათედრო ტაძარი", en: "" },
        image:
          "https://res.cloudinary.com/duzp7oet3/image/upload/v1762019455/travel-sliders/xq7mcn7q2ton5o5rew4c.webp",
        description: {
          ka: "მდიდრული ჩუქურთმებით ნაქსოვი არშიები, მრავალფეროვანი სიუჟეტის მქონე ფრესკები, ცადაწვდენილი, მაღალყელიანი გუმბათი - ეს ეროვნული ხუროთმოძღვრების შედევრად აღიარებული ნიკორწმინდის ტაძარია. ",
          en: "",
        },
        mapLink:
          "https://www.google.com/maps/place/%E1%83%A8%E1%83%9D%E1%83%95%E1%83%98/@42.6964687,43.6615499,15z/data=!4m6!3m5!1s0x405b1b14ba365385:0x739cb6a576738019!8m2!3d42.7037467!4d43.6764821!16s%2Fm%2F02qlflt?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D",
      },
    ],
  },
  {
    id: 2,
    title: { ka: "კანიონების ერთდღიანი ტური", en: "One-Day Canyon Tour" },
    description: {
      ka: "აღმოაჩინე დასავლეთ საქართველოს გეოგრაფიური და ბიოლოგიური მრავალფეროვნება, მოიარე ულამაზესი ოკაცესა და მარტვილის კანიონი და იხილე ძირძველი კულტურის მშვენიერი დანატოვარი - მარტვილის მონასტერი. ტურის ფარგლებში ასევე შეხვდები სახლინოს რეზიდენციას და საუკეთესო შთაბეჭდილებებით აივსები.",
      en: "Discover the geographical and biological diversity of Western Georgia, explore the stunning Okatse and Martvili Canyons, and see the beautiful legacy of ancient culture at the Martvili Monastery. During the tour, you’ll also visit the Salkhino Residence and leave with the best impressions.",
    },
    image:
      "https://res.cloudinary.com/duzp7oet3/image/upload/v1762019455/travel-sliders/xq7mcn7q2ton5o5rew4c.web",
    duration: { ka: "8-12 სთ", en: "8-12 hours" },
    activities: {
      ka: "18 სანახაობა 3 აქტივობა",
      en: "18 attractions, 3 activities",
    },
    currency: { ka: "100 კმ", en: "100 km" },
    popularTours: [
      {
        id: 2,
        title: { ka: "ნიკორწმინდის საკათედრო ტაძარი", en: "" },
        image:
          "https://res.cloudinary.com/duzp7oet3/image/upload/v1762019455/travel-sliders/xq7mcn7q2ton5o5rew4c.webp",
        description: {
          ka: "მდიდრული ჩუქურთმებით ნაქსოვი არშიები, მრავალფეროვანი სიუჟეტის მქონე ფრესკები, ცადაწვდენილი, მაღალყელიანი გუმბათი - ეს ეროვნული ხუროთმოძღვრების შედევრად აღიარებული ნიკორწმინდის ტაძარია. ",
          en: "",
        },
      },
      {
        id: 3,
        title: { ka: "ნიკორწმინდის საკათედრო ტაძარი", en: "" },
        image:
          "https://res.cloudinary.com/duzp7oet3/image/upload/v1762019455/travel-sliders/xq7mcn7q2ton5o5rew4c.webp",
        description: {
          ka: "მდიდრული ჩუქურთმებით ნაქსოვი არშიები, მრავალფეროვანი სიუჟეტის მქონე ფრესკები, ცადაწვდენილი, მაღალყელიანი გუმბათი - ეს ეროვნული ხუროთმოძღვრების შედევრად აღიარებული ნიკორწმინდის ტაძარია. ",
          en: "",
        },
      },
      {
        id: 4,
        title: { ka: "ნიკორწმინდის საკათედრო ტაძარი", en: "" },
        image:
          "https://res.cloudinary.com/duzp7oet3/image/upload/v1762019455/travel-sliders/xq7mcn7q2ton5o5rew4c.webp",
        description: {
          ka: "მდიდრული ჩუქურთმებით ნაქსოვი არშიები, მრავალფეროვანი სიუჟეტის მქონე ფრესკები, ცადაწვდენილი, მაღალყელიანი გუმბათი - ეს ეროვნული ხუროთმოძღვრების შედევრად აღიარებული ნიკორწმინდის ტაძარია. ",
          en: "",
        },
      },
    ],
  },
];

// -- 1. მომხმარებელს მივცეთ ყველა უფლება public სქემაზე
// GRANT ALL PRIVILEGES ON SCHEMA public TO "georgia-travel";
// GRANT CREATE ON SCHEMA public TO "georgia-travel";
// GRANT USAGE ON SCHEMA public TO "georgia-travel";

// -- 2. მომხმარებელი გავხადოთ owner
// ALTER SCHEMA public OWNER TO "georgia-travel";

// -- 3. მივცეთ უფლებები მონაცემთა ბაზაზე
// GRANT ALL PRIVILEGES ON DATABASE "georgia-travel" TO "georgia-travel";

// -- 4. უკვე არსებული ცხრილებისთვის (თუ არსებობს)
// GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO "georgia-travel";
// GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO "georgia-travel";

// -- 5. მომავალი ობიექტებისთვის
// ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO "georgia-travel";
// ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO "georgia-travel";

// -- შედეგის შემოწმება
// SELECT
//     schemaname,
//     schemaowner
// FROM pg_catalog.pg_namespace
// WHERE schemaname = 'public';
