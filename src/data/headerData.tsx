import GeorgianMap from "@/components/GeorgianMap";

export interface NavItemDetail {
  title: string;
  titleEn?: string;
  image?: string;
  images?: string[];
  items: {
    text: string;
    textEn?: string;
    href: string;
    image?: string;
    renderComponent?: () => React.ReactNode;
  }[];
}

export interface NavItem {
  id: string;
  name?: string;
  nameEn?: string;
  natureName?: string;
  natureNameEn?: string;
  href: string;
  details: NavItemDetail[];
}

export const navItems: NavItem[] = [
  {
    id: "why-georgia",
    name: "რატომ საქართველო",
    nameEn: "Why Georgia",
    href: "/why-georgia",
    details: [
      {
        title: "ქართული კულტურის მიმოხილვა",
        titleEn: "Overview of Georgian Culture",
        items: [
          {
            text: "უნიკალური ქართული ფოლკლორი",
            textEn: "Unique Georgian Folklore",
            href: "/why-georgia/georgian-folklore",
          },
          {
            text: "მსოფლიო მნიშვნელობის მემკვიდრეობა",
            textEn: "World Heritage Sites",
            href: "/why-georgia/heritage-world-importance",
          },
          {
            text: "უნიკალური ქართული ანბანი",
            textEn: "Unique Georgian Alphabet",
            href: "/why-georgia/unique-georgian-alphabet",
          },
          {
            text: "შავი ზღვის სანაპიროები",
            textEn: "Black Sea Coast",
            href: "/why-georgia/black-sea-coast",
          },
          {
            text: "საქართველოს ისტორია",
            textEn: "History of Georgia",
            href: "/why-georgia/history-of-georgia",
          },
          {
            text: "ტურიზმის სტატისტიკა საქართველოში",
            textEn: "Tourism Statistics in Georgia",
            href: "/why-georgia/tourism-statistics-in-georgia",
          },
        ],
      },
      {
        title: "ქართული ხელოვნება",
        titleEn: "Georgian Arts",
        items: [
          {
            text: "ქართული კულტურა",
            textEn: "Georgian Culture",
            href: "/why-georgia/georgian-culture",
          },
          {
            text: "ქართული ლიტერატურა",
            textEn: "Georgian Literature",
            href: "/why-georgia/georgian-literature",
          },
          {
            text: "ქართული ცეკვა",
            textEn: "Georgian Dance",
            href: "/why-georgia/georgian-dance",
          },
          {
            text: "უგემრიელესი ქართული სამზარეულო",
            textEn: "Delicious Georgian Cuisine",
            href: "/why-georgia/delicious-georgian-cuisine",
          },
          {
            text: "საქართველოს ბუნება",
            textEn: "Nature of Georgia",
            href: "/why-georgia/nature-of-georgia",
          },
          {
            text: "საქართველოს მთავარი ქალაქები",
            textEn: "Georgia's Major Cities",
            href: "/why-georgia/georgias-major-cities",
          },
        ],
      },
      {
        title: "საქართველოს უნიკალურობა",
        titleEn: "Uniqueness of Georgia",
        items: [
          {
            text: "საქართველო როგორც ღვინის აკვანი",
            textEn: "Georgia as the Cradle of Wine",
            href: "/why-georgia/georgia-as-the-cradle-of-wine",
          },
          {
            text: "პირველი ევროპული ცივილიზაცია",
            textEn: "First European Civilization",
            href: "/why-georgia/first-european-civilization",
          },
          {
            text: "თავგადასავლები საქართველოში",
            textEn: "Adventures in Georgia",
            href: "/why-georgia/adventures-in-georgia",
          },
          {
            text: "ევროპის ყველაზე მაღალი დასახლებული პუნქტი",
            textEn: "Europe's Highest Inhabited Settlement",
            href: "/why-georgia/high-altitude-settlement",
          },
          {
            text: "სეზონურობა საქართველოში",
            textEn: "Seasonality in Georgia",
            href: "/why-georgia/seasonality-in-georgia",
          },
          {
            text: "საქართველოს გეოგრაფია",
            textEn: "Geography of Georgia",
            href: "/why-georgia/geography-of-georgia",
          },
        ],
      },
      {
        title: "აღმოაჩინე საქართველო",
        titleEn: "Discover Georgia",
        image: "/flags/why-georgia-nature.webp",
        items: [{ text: "", href: "/why-georgia" }],
      },
    ],
  },
  {
    id: "places",
    name: "ადგილები",
    nameEn: "Destinations",
    href: "/places",
    details: [
      {
        title: "ტოპ რეგიონები",
        titleEn: "Top Regions",
        items: [
          { text: "კახეთი", textEn: "Kakheti", href: "/region/კახეთი" },
          { text: "იმერეთი", textEn: "Imereti", href: "/region/იმერეთი" },
          { text: "აჭარა", textEn: "Adjara", href: "/region/აჭარა" },
          {
            text: "მცხეთა-მთიანეთი",
            textEn: "Mtskheta-Mtianeti",
            href: "/region/მცხეთა-მთიანეთი",
          },
          { text: "რაჭა", textEn: "Racha", href: "/region/რაჭა" },
          {
            text: "შიდა ქართლი",
            textEn: "Shida Kartli",
            href: "/region/შიდა%20ქართლი",
          },
          {
            text: "სამეგრელო-ზემო სვანეთი",
            textEn: "Samegrelo-Zemo Svaneti",
            href: "/region/სამეგრელო-ზემო%20სვანეთი",
          },
        ],
      },
      {
        title: "ტოპ ქალაქები",
        titleEn: "Top Cities",
        items: [
          { text: "ქუთაისი", textEn: "Kutaisi", href: "/places/kutaisi" },
          { text: "ბათუმი", textEn: "Batumi", href: "/places/batumi" },
          { text: "თბილისი", textEn: "Tbilisi", href: "/places/tbilisi" },
          {
            text: "სტეფანწმინდა",
            textEn: "Stepantsminda",
            href: "/places/stepanwminda",
          },
          { text: "მესტია", textEn: "Mestia", href: "/places/mestia" },
          { text: "მცხეთა", textEn: "Mtskheta", href: "/places/mcxeta" },
          { text: "ბორჯომი", textEn: "Borjomi", href: "/places/borjomi" },
        ],
      },
      {
        title: "რეგიონები",
        titleEn: "Regions",
        items: [
          {
            text: "",
            textEn: "",
            href: "",
            renderComponent: () => <GeorgianMap activeRegion={""} />,
          },
        ],
      },
    ],
  },
  {
    id: "sights",
    name: "სანახაობები",
    nameEn: "Things To Do",
    href: "/sights",
    details: [
      {
        title: "ტოპ კატეგორიები",
        titleEn: "Top Categories",
        items: [
          {
            text: "ხელოვნება და კულტურა",
            textEn: "Art and Culture",
            href: "/sights/arts-culture",
          },
          {
            text: "კულტურული ძეგლები",
            textEn: "Cultural Monuments",
            href: "/sights/cultural-monuments",
          },
          {
            text: "სამზარეულო და ღვინო",
            textEn: "Cuisine and Wine",
            href: "/sights/food-wine",
          },
          {
            text: "გამაჯანსაღებელი პროცედურები",
            textEn: "Wellness Activities",
            href: "/sights/health-and-wellness",
          },
          {
            text: "საოჯახო სანახაობები",
            textEn: "Family Attractions",
            href: "/sights/david-gareji",
          },
          {
            text: "დასვენება ქალაქში",
            textEn: "City Leisure",
            href: "/sights/city-breaks",
          },
        ],
      },
      {
        title: "ტოპ სანახაობები",
        titleEn: "Top Sights",
        items: [
          {
            text: "გერგეთის სამება",
            textEn: "Gergeti Trinity",
            href: "/sights/bagrati",
          },
          {
            text: "ილია ჭავჭავაძის სახლ-მუზეუმი",
            textEn: "Ilia Chavchavadze House-Museum",
            href: "/sights/samtskhe",
          },
          {
            text: "ხერთვისის ციხე",
            textEn: "Khertvisi Fortress",
            href: "/sights/paravani",
          },
          {
            text: "საქართველოს ეროვნული მუზეუმი",
            textEn: "National Museum of Georgia",
            href: "/sights/chkhorotsku",
          },
        ],
      },
      {
        title: "თვის სანახაობები",
        titleEn: "Sights of the Month",
        items: [
          {
            text: "",
            textEn: "",
            href: "/card/Svetitskhoveli",
            image: "/flags/svetitskhoveli-cathedral-gnta.webp",
          },
          {
            text: "",
            textEn: "",
            href: "/dsdsdsdsd",
            image: "/flags/alaverdi-gnta.webp",
          },
        ],
      },
    ],
  },
  {
    id: "nature-adventures",
    natureName: "ბუნება და თავგადასავლები",
    natureNameEn: "Nature and Adventures",
    href: "/nature-adventures",
    details: [
      {
        title: "ტოპ კატეგორიები",
        titleEn: "Top Categories",
        items: [
          {
            text: "ზამთრის თავგადასავლები",
            textEn: "Winter Adventures",
            href: "/nature-adventures/winter-adventures",
          },
          {
            text: "ბუნების ძეგლები",
            textEn: "Natural Wonders",
            href: "/nature-adventures/natural-wonders",
          },
          {
            text: "საზაფხულო აქტივობები",
            textEn: "Summer Adventures",
            href: "/nature-adventures/summer-adventures",
          },
          { text: "მთები", textEn: "Mountains", href: "/nature/kinchkha" },
          { text: "ტბები", textEn: "Lakes", href: "/nature/dedoflis-tsqaro" },
          {
            text: "ბუნების ძეგლები",
            textEn: "Natural Monuments",
            href: "/nature/khadi",
          },
        ],
      },
      {
        title: "ტოპ სანახაობები",
        titleEn: "Top Attractions",
        items: [
          {
            text: "ოკაცეს კანიონი",
            textEn: "Okatse Canyon",
            href: "card/Martvili%20Canyon",
          },
          {
            text: "აბუდელაურის ტბები",
            textEn: "Abudelauri Lakes",
            href: "/card/Abudelauri%20Colored%20Lakes",
          },
          {
            text: "სათაფლიის მღვიმე და ნაკრძალი",
            textEn: "Sataplia Cave",
            href: "/card/Sataplia%20Cave",
          },
          {
            text: "გოგნის წმ. გიორგის ეკლესია",
            textEn: "St. George's Church in Gogni",
            href: "/card/St.%20George's%20Church%20in%20Gogni",
          },
          {
            text: "ვარძია",
            textEn: "Vardzia",
            href: "/card/Vardzia",
          },
          {
            text: "ხვამლის მთა",
            textEn: "Khvamli Mountain",
            href: "/card/Khvamli%20Mountain",
          },
        ],
      },
      {
        title: "თვის სანახაობები",
        titleEn: "Attractions of the Month",
        items: [
          {
            text: "",
            textEn: "",
            href: "/sdsd",
            image: "/flags/wikiloc-banner.jpg",
          },
          {
            text: "",
            textEn: "",
            href: "/dsdsdsdsd",
            image: "/flags/dashbash-canyon-natural-monument-gnta-m.webp",
          },
        ],
      },
    ],
  },
  {
    id: "useful-information",
    name: "სასარგებლო ინფორმაცია",
    nameEn: "Useful Information",
    href: "/info",
    details: [
      {
        title: "ძირითადი ინფორმაცია",
        titleEn: "Basic Information",
        items: [
          {
            text: "საქართველოში ვიზიტი",
            textEn: "Visiting Georgia",
            href: "/info",
          },
          {
            text: "ადგილობრივი ტრანსპორტი",
            textEn: "Local Transport",
            href: "/info/local-transport",
          },
          {
            text: "რეგიონალური ტრანსპორტი",
            textEn: "Regional Transport",
            href: "/info/regional-transport",
          },
          {
            text: "ადგილობრივი ტრანსპორტის გაქირავება",
            textEn: "Local Vehicle Rental",
            href: "/info/local-vehicle-rental",
          },
          {
            text: "ამინდი და ადგილობრივი კლიმატი",
            textEn: "Weather and Local Climate",
            href: "/info/weather-local-climate",
          },
          {
            text: "ხშირად დასმული კითხვები",
            textEn: "Frequently Asked Questions",
            href: "/info/frequently-asked-questions",
          },
        ],
      },
      {
        title: "საჭირო ინფორმაცია საქართველოზე",
        titleEn: "Essential Information about Georgia",
        items: [
          {
            text: "შიდა ფრენები",
            textEn: "Domestic Flights",
            href: "/info/Domestic%20Flights",
          },
          {
            text: "საინფორმაციო",
            textEn: "Information",
            href: "/info/Information",
          },
          {
            text: "მგზავრობის დრო და მანძილი",
            textEn: "Travel Time and Distance",
            href: "/info/Travel%20Time%20and%20Distance",
          },
          {
            text: "საბაჟო",
            textEn: "Customs",
            href: "/info/Customs",
          },
        ],
      },
      {
        title: "პოპულარული სტატიები",
        titleEn: "Popular Articles",
        items: [
          {
            text: "",
            textEn: "",
            href: "/sdsd",
            image: "/flags/why-georgia-georgia-travel-mosses-gnta-m.webp",
          },
          {
            text: "",
            textEn: "",
            href: "/dsdsdsdsd",
            image: "/flags/4.webp",
          },
        ],
      },
    ],
  },
];
