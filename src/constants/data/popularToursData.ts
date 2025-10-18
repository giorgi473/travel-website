export interface Tour {
  id: number;
  title?: { ka: string; en: string };
  description?: { ka: string; en: string };
  image?: string;
}

export interface StunningNatureScene {
  id: number;
  image: string;
  city: { ka: string; en: string };
  sight: { ka: string; en: string };
  activity: { ka: string; en: string };
  title: { ka: string; en: string };
  descriptin: { ka: string; en: string };
  time: { ka: string; en: string };
  distance: { ka: string; en: string };
  difficulty: { ka: string; en: string };
  tours?: Tour[];
}

export const stunningNatureScenes: StunningNatureScene[] = [
  {
    id: 1,
    image: "/popular-tours/saghamo-lake.webp",
    city: { ka: "1 ქალაქი", en: "1 City" },
    sight: { ka: "5 სანახაობა", en: "5 Sights" },
    activity: { ka: "1 აქტივობა", en: "1 Activity" },
    title: { ka: "ტბების ტური ჯავახეთში", en: "Lakes Tour in Javakheti" },
    descriptin: {
      ka: "შენი მოგზაურობა ვულკანურ-ტექტონიკური ტიპის ტბიდან დაიწყება, საქართველოში ქრისტიანობის გამავრცელებელი, წმიდა ნინო კაბადოკიელის სახელობის ფოკის მონასტერში გაგრძელდება, გზად ულამაზესი საღამოს ტბა და სოფელი გორელოვკა შეგხვდება, დასასრულისკენ კი შენ წინ ზღაპრული მადათაფის ტბის არნახული პეიჟაზები გადაიშლება.",
      en: "Your journey begins at a volcanic-tectonic lake, continues to the Poka Monastery named after Saint Nino, the enlightener of Christianity in Georgia, and along the way, you’ll encounter the stunning Saghamo Lake and Gorelovka village. Towards the end, the fairy-tale landscapes of Madatapa Lake will unfold before you.",
    },
    time: { ka: "8-12სთ", en: "8-12h" },
    distance: { ka: "55კმ", en: "55km" },
    difficulty: { ka: "საშუალო", en: "Medium" },
    tours: [
      {
        id: 1,
        title: {
          ka: "საღამოს ტბა - სამცხე-ჯავახეთის ჯადოსნური სანახაობა",
          en: "Saghamo Lake - A Magical Sight of Samtskhe-Javakheti",
        },
        description: {
          ka: "ამ საოცარ სანახაობას სამცხე-ჯავახეთის მხარეში, ნინოწმინდის მუნიციპალიტეტში აღმოაჩენ. გაშლილი სივრცეები, მთები, სიმშვიდე და კამკამა წყალი საუკეთესო გარემოს ქმნის კემპინგისთვის.",
          en: "You’ll discover this stunning sight in the Samtskhe-Javakheti region, in Ninotsminda Municipality. Open spaces, mountains, tranquility, and crystal-clear water create the perfect setting for camping.",
        },
        image: "/popular-tours/saghamo-lake-gnta.webp",
      },
      {
        id: 2,
        title: {
          ka: "ფარავნის ტბა - საუკეთესო ადგილი თევზაობისთვის",
          en: "Paravani Lake - The Best Spot for Fishing",
        },
        description: {
          ka: "ფარავანი წყლის ზედაპირის ფართობით საქართველოს ყველაზე დიდი ტბაა. ის სამცხე-ჯავახეთში, ზღვის დონიდან 2073 მეტრზე მდებარეობს და მთელი ზამთარი გაყინულია. ყინულის საფარის სისქე 50-იდან 70 სანტიმეტრსაც კი აღწევს.",
          en: "Paravani is Georgia’s largest lake by surface area. Located in Samtskhe-Javakheti at 2,073 meters above sea level, it remains frozen throughout the winter, with ice cover reaching 50 to 70 centimeters thick.",
        },
        image: "/popular-tours/paravani-lake-gnta.webp",
      },
      {
        id: 3,
        title: { ka: "მადათაფის ტბა", en: "Madatapa Lake" },
        description: {
          ka: "მადათაფის ლურჯად მოელვარე ტბას სამცხე-ჯავახეთში, ნინოწმინდის მუნიციპალიტეტში იპოვი და ეს ტბა არა მხოლოდ ულამაზესია, არამედ მისი მაგიური გარემო საერთაშორისო მნიშვნელობის ჭარბტენიანი ტერიტორიების სიაშიც არის შეტანილი. ტბა აფრიკა-ევრაზიის სამიგრაციო გზაზეა და აქ წლის თბილ პერიოდში გადამფრენი და მობუდარი ფრინველების სიმრავლე აღინიშნება.",
          en: "You’ll find the shimmering blue Madatapa Lake in Samtskhe-Javakheti, in Ninotsminda Municipality. Not only is this lake stunningly beautiful, but its magical environment is also listed among internationally significant wetlands. It lies on the Africa-Eurasia migration route, hosting numerous migratory and nesting birds during the warm season.",
        },
        image: "/popular-tours/madatapa-lake-gnta.webp",
      },
      {
        id: 4,
        title: { ka: "ფოკას მონასტერი", en: "Poka Monastery" },
        description: {
          ka: "ისტორიულ სამცხე-ჯავახეთში, ფარავნის ტბის ნაპირას, სადაც, გადმოცემის თანახმად, ქართველთა განმანათლებელმა წმიდა ნინომ შეისვენა და ორი ღამე გაათენა, ფოკის წმინდა ნინოს მონასტერია აღმართული.",
          en: "In historic Samtskhe-Javakheti, on the shores of Paravani Lake, where, according to legend, Saint Nino, the enlightener of Georgians, rested and spent two nights, stands the Poka Saint Nino Monastery.",
        },
        image: "/popular-tours/poka-monastery-gnta.webp",
      },
      {
        id: 5,
        title: {
          ka: "სოფელი-მუზეუმი გორელოვკა",
          en: "Gorelovka Village-Museum",
        },
        description: {
          ka: "გორელოვკა ქართული სინამდვილისგან სრულიად განსხვავებული სოფელია - თავისი არქიტექტურით, ყოფა-ცხოვრებითა და მრწამსით. ის სამცხე-ჯავახეთში, ზღვის დონიდან 2065 მეტრზე მდებარეობს და მკაცრი კლიმატური პირობებისა და ხანგრძლივი ზამთრის მიუხედავად, აქაურობას მაინც ყველაზე ფერად სოფელს უწოდებენ.",
          en: "Gorelovka is a village entirely distinct from typical Georgian reality, with its unique architecture, way of life, and beliefs. Located in Samtskhe-Javakheti at 2,065 meters above sea level, despite harsh climatic conditions and long winters, it is still called the most colorful village.",
        },
        image: "/popular-tours/gorelovka-village-doukhobors-museum-gnta.webp",
      },
      {
        id: 6,
        title: {
          ka: "ფრინველებზე დაკვირვება: ჯავახეთის ტბები",
          en: "Birdwatching: Javakheti Lakes",
        },
        description: {
          ka: "ჯავახეთის ვულკანური ზეგანი მცირე კავკასიონის დასაწყისია. საქართველოში ეს ერთადერთი ადგილია, სადაც ბევრი ტბაა. ამ ტბების დიდი ნაწილი - კარწახის, ბუღდაშენის, მადათაფის, ხანჩალის ტბები და სულდის ჭაობი ჯავახეთის დაცული ტერიტორიების ნაწილია და მკაცრი კონტროლის ქვეშ იმყოფებიან.",
          en: "The Javakheti volcanic plateau marks the start of the Lesser Caucasus. It’s the only place in Georgia with numerous lakes. Most of these—Kartsakhi, Bugdasheni, Madatapa, Khanchali lakes, and Sulda Marsh—are part of Javakheti’s protected areas and are under strict control.",
        },
        image: "/popular-tours/javakheti-lakes-gnta.webp",
      },
      {
        id: 7,
        title: { ka: "ნინოწმინდა", en: "Ninotsminda" },
        description: {
          ka: "ნინოწმინდა ლაკლაკების საყვარელი ადგილია. ისინი ქალაქში ყოველწლიურად მოფრინავენ შთამომავლობის გასაზრდელად. აქ ვერ ნახავ ბოძს, სადაც ლაკლაკის ბუდე არაა. ბოძებზე შემოქსოვილი, ერთ მეტრზე დიდი დიამეტრის ბუდეები ძალიან ლამაზი სანახავია.",
          en: "Ninotsminda is a favorite spot for storks, which migrate to the town annually to raise their offspring. You won’t find a pole here without a stork’s nest. The intricately woven nests, over a meter in diameter, are a beautiful sight.",
        },
        image: "/popular-tours/ninotsminda-monastery-gnta.webp",
      },
    ],
  },
  {
    id: 2,
    image: "/popular-tours/martvili-tour.webp",
    city: { ka: "1 ქალაქი", en: "1 City" },
    sight: { ka: "3 სანახაობა", en: "3 Sights" },
    activity: { ka: "1 აქტივობა", en: "1 Activity" },
    title: {
      ka: "ერთდღიანი ტური სამეგრელო-იმერეთში",
      en: "One-Day Tour in Samegrelo-Imereti",
    },
    descriptin: {
      ka: "სამეგრელო თავისი ისტორიული წარსულით საქართველოს ერთ-ერთი ყველაზე საინტერესო მხარეა, რომელიც თავისი მომაჯადოებელი ბუნებითა და ციხესიმაგრეებით, ნამდვილი ოაზისი გეგონება. Შთაბეჭდილებები, რომლებსაც ამ ერთდღიანი ტურის განმავლობაში მიიღებ, მრავალფეროვანი, ამაღელვებელი და დაუვიწყარი იქნება.",
      en: "Samegrelo, with its rich historical past, is one of Georgia’s most fascinating regions, resembling a true oasis with its enchanting nature and fortresses. The impressions you’ll gain during this one-day tour will be diverse, thrilling, and unforgettable.",
    },
    time: { ka: "8-12სთ", en: "8-12h" },
    distance: { ka: "100კმ", en: "100km" },
    difficulty: { ka: "საშუალო", en: "Medium" },
    tours: [
      {
        id: 1,
        title: {
          ka: "დადიანების სალხინოს სასახლე",
          en: "Dadiani Salkhino Palace",
        },
        description: {
          ka: "მარტვილში, სოფელ სალხინოში აშენებული სასახლე წარსულში დადიანების საზაფხულო რეზიდენცია იყო. სასახლისკენ საუკუნოვან ხეებს შორის მიმავალ ქვაფენილზევე იგრძნობ XIX საუკუნის ქართველი არისტოკრატების, საფრანგეთის საიმპერატორო ოჯახთან დანათესავებული თავადი დადიანების მთელ დიდებულებას.",
          en: "Built in the village of Salkhino in Martvili, this palace was once the summer residence of the Dadiani family. As you walk along the stone path lined with ancient trees toward the palace, you’ll feel the grandeur of 19th-century Georgian aristocrats, related to the French imperial family.",
        },
        image: "/popular-tours/salkhino-dadiani-residence-gnta.webp",
      },
      {
        id: 2,
        title: { ka: "მარტვილის კანიონი", en: "Martvili Canyon" },
        description: {
          ka: "სამეგრელოს ერთხელ მაინც თუ ეწვევი, აქ მიღებული გამოცდილება არასოდეს დაგავიწყდება. მარტვილის კანიონი სწორედ სამეგრელოში, მარტვილის მუნიციპალიტეტში მდებარეობს.",
          en: "If you visit Samegrelo at least once, the experience will stay with you forever. Martvili Canyon is located in Samegrelo, in Martvili Municipality.",
        },
        image: "/popular-tours/martvili-canyon-gnta.webp",
      },
      {
        id: 3,
        title: { ka: "ოკაცეს კანიონი", en: "Okatse Canyon" },
        description: {
          ka: "მსოფლიოს ცნობილი კანიონებისგან საქართველოს კანიონებს, უპირველეს ყოვლისა, ფერები განასხვავებს. მწვანედ შეფერილი აქ არა მხოლოდ მდინარეები, არამედ ტბები და მთებიც დაგხვდება.",
          en: "What sets Georgia’s canyons apart from the world’s famous ones is their colors. Here, not only the rivers but also the lakes and mountains are tinged with green.",
        },
        image: "/popular-tours/okatse-canyon-gnta.webp",
      },
      {
        id: 4,
        title: {
          ka: "ზიპლაინი მარტვილის კანიონში",
          en: "Zipline in Martvili Canyon",
        },
        description: {
          ka: "მარტვილის კანიონი მდებარეობს მარტვილის მუნიციპალიტეტში, სოფელ გაჭედილში, ზღვის დონიდან 210 მეტრზე, მდინარე აბაშის ხეობაში. კანიონის სიგრძე 2400 მეტრია, აქ გვხვდება საფეხმავლო ბილიკები ეგზოტიკურ ბუნებაში, ჩანჩქერები, მდინარეები, ტბები და კლდეები. შეგიძლია ნავით გაისეირნო მდინარე აბაშაზე, 300-მეტრიან მონაკვეთზე და ასევე სხვადასხვა გასართობი და ექსტრემალური თავგადასავალი გამოცადო.",
          en: "Martvili Canyon is located in Martvili Municipality, in the village of Gachedili, at 210 meters above sea level in the Abasha River valley. The canyon stretches 2,400 meters, featuring walking trails through exotic nature, waterfalls, rivers, lakes, and cliffs. You can take a boat ride on the Abasha River for a 300-meter stretch and experience various fun and extreme adventures.",
        },
        image: "/popular-tours/martvili-canyon-zipline-in-georgia.webp",
      },
      {
        id: 5,
        title: { ka: "მარტვილი", en: "Martvili" },
        description: {
          ka: "მარტვილი პატარა ქალაქია, რომელიც დასავლეთ საქართველოში, სამეგრელოს რეგიონში მდებარეობს. ეს ადგილი დიდი კულტურის კერაა, რასაც ორი სხვადასხვა ხასიათის ფაქტი მოწმობს: 1)ჭყონდიდის მონასტერში აღიზარდა საქართველოს ყველაზე ცნობილი, რეფორმატორი მეფე დავით აღმაშენებელი; 2) 1873 წელს პირველად აქ დაიდგა შექსპირის პიესა „ვენეციელი ვაჭარი“. ისტორია დუმს იმის შესახებ, სპექტაკლი ინგლისურ ენაზე იყო თუ ქართულად, მაგრამ თავად ეს გაურკვევლობაც კი აჩვენებს, რომ ევროპა მაშინაც არ იყო შორს.",
          en: "Martvili is a small town in western Georgia, in the Samegrelo region. It’s a hub of great culture, evidenced by two distinct facts: 1) Georgia’s most famous reformist king, David the Builder, was raised in the Chkondidi Monastery; 2) In 1873, Shakespeare’s 'The Merchant of Venice' was first performed here. History is silent on whether the play was in English or Georgian, but this ambiguity itself shows that Europe was never far away.",
        },
        image: "/popular-tours/martvili-gnta.webp",
      },
    ],
  },
  {
    id: 3,
    image: "/popular-tours/javakheti-national-park-gnta.webp",
    city: { ka: "1 ქალაქი", en: "1 City" },
    sight: { ka: "3 სანახაობა", en: "3 Sights" },
    activity: { ka: "1 აქტივობა", en: "1 Activity" },
    title: {
      ka: "ერთდღიანი ტური სამცხე-ჯავახეთში",
      en: "One-Day Tour in Samtskhe-Javakheti",
    },
    descriptin: {
      ka: "თუ განტვირთვისთვის იდეალურ მარშრუტს ეძებ პანორამული ხედებით, ანტიკური კულტურის ნაშთებით, ციხე-სიმაგრეებითა და გამორჩეული ტაძრებით, მაშინ სამცხე-ჯავახეთში ერთდღიანი ტური აუცილებლად უნდა დაგეგმო. ტურის განმავლობაში შესაძლებლობა გექნება ესტუმრო ბორჯომს, ვარძიას, ხერთვისსა და ახალციხეს.",
      en: "If you’re looking for an ideal route for relaxation with panoramic views, remnants of ancient culture, fortresses, and unique temples, then you must plan a one-day tour in Samtskhe-Javakheti. During the tour, you’ll have the chance to visit Borjomi, Vardzia, Khertvisi, and Akhaltsikhe.",
    },
    time: { ka: "8-12სთ", en: "8-12h" },
    distance: { ka: "120კმ", en: "120km" },
    difficulty: { ka: "საშუალო", en: "Medium" },
    tours: [
      {
        id: 1,
        title: { ka: "ვარძია", en: "Vardzia" },
        description: {
          ka: "რამდენჯერაც არ უნდა ესტუმრო საქართველოს, ეს ქვეყანა ყოველ ჯერზე თავიდან გაგაოცებს, მოგხიბლავს და დროში მოგზაურობას მოგანდომებს - საუკუნეების წინანდელი განუმეორებელი ძეგლები შენს წინ გადაშლის მთელ ისტორიას და მოგიყვება ამბებს, რომლებსაც სხვაგან ვერსად მოისმენ. სწორედ ერთ-ერთი ასეთი ქმნილებაა ვარძია - შუა საუკუნეების კლდის ხუროთმოძღვრების დიდებული ანსამბლი და ერთ-ერთი ყველაზე პოპულარული ძეგლი საქართველოში.",
          en: "No matter how many times you visit Georgia, this country will surprise and enchant you anew each time, inviting you on a journey through time. Its centuries-old, unique monuments will unfold entire histories and tell stories you won’t hear anywhere else. Vardzia is one such creation—a magnificent ensemble of medieval rock architecture and one of Georgia’s most popular monuments.",
        },
        image: "/popular-tours/vardzia-gnta.webp",
      },
      {
        id: 2,
        title: { ka: "ხერთვისის ციხე", en: "Khertvisi Fortress" },
        description: {
          ka: "საქართველოს ტერიტორიაზე არსებული ნაგებობების უმრავლესობა საუკუნეებს ითვლის, რადგან ეს უძველესი ისტორიისა და კულტურის ქვეყანაა, სადაც ყოველ ქალაქსა თუ სოფელში გამორჩეული არქიტექტურის ძეგლებს შეხვდები. ხერთვისის ციხე-დარბაზი სწორედ ასეთი, ერთ-ერთი უძველესი და კარგად შემონახული ნაგებობაა, რომელიც, ისტორიული წყაროების მიხედვით, სავარაუდოდ, X საუკუნეში უკვე არსებობდა.",
          en: "Most structures in Georgia date back centuries, as this is a country of ancient history and culture where you’ll encounter remarkable architectural monuments in every city and village. Khertvisi Fortress is one such structure—one of the oldest and best-preserved, which, according to historical sources, likely existed as early as the 10th century.",
        },
        image: "/popular-tours/khertvisi-fortress-gnta.webp",
      },
      {
        id: 3,
        title: { ka: "ახალციხის ციხე", en: "Akhaltsikhe Castle" },
        description: {
          ka: "თუ მრავალსაუკუნოვანი ისტორიული ლაბირინთები გაინტერესებს, საქართველოს ერთ-ერთ უძველეს მხარეში - სამცხე-ჯავახეთში, ქალაქ ახალციხის მთავარ ციხესიმაგრეს უნდა ესტუმრო. ის ქალაქის ისტორიულ უბანში - რაბათში, მაღალ მთაზეა გაშენებული და ქალაქის ნებისმიერი წერტილიდან მოჩანს.",
          en: "If you’re fascinated by centuries-old historical labyrinths, you must visit the main fortress of Akhaltsikhe in one of Georgia’s oldest regions, Samtskhe-Javakheti. Located in the city’s historic Rabati district on a high hill, it is visible from any point in the city.",
        },
        image: "/popular-tours/akhaltsikhe-castle-gnta.webp",
      },
      {
        id: 4,
        title: {
          ka: "ფრინველებზე დაკვირვება: ჯავახეთის ტბები",
          en: "Birdwatching: Javakheti Lakes",
        },
        description: {
          ka: "ჯავახეთის ვულკანური ზეგანი მცირე კავკასიონის დასაწყისია. საქართველოში ეს ერთადერთი ადგილია, სადაც ბევრი ტბაა. ამ ტბების დიდი ნაწილი - კარწახის, ბუღდაშენის, მადათაფის, ხანჩალის ტბები და სულდის ჭაობი ჯავახეთის დაცული ტერიტორიების ნაწილია და მკაცრი კონტროლის ქვეშ იმყოფებიან.",
          en: "The Javakheti volcanic plateau marks the start of the Lesser Caucasus. It’s the only place in Georgia with numerous lakes. Most of these—Kartsakhi, Bugdasheni, Madatapa, Khanchali lakes, and Sulda Marsh—are part of Javakheti’s protected areas and are under strict control.",
        },
        image: "/popular-tours/javakheti-lakes-gnta.webp",
      },
      {
        id: 5,
        title: { ka: "ბორჯომი", en: "Borjomi" },
        description: {
          ka: "მინერალურ წყალ „ბორჯომს“ (Borjomi) მსოფლიოს 32 ქვეყანაში შეხვდები და ის საქართველოს ერთგვარი სავიზიტო ბარათია. ქალაქი ბორჯომი კი საქართველოს ერთ-ერთი მნიშვნელოვანი კურორტია, სადაც სამკურნალო წყაროები, წიწვოვანი ტყეები და ჰაერი განსაკუთრებულად მარგებელი თვისებებით ხასიათდება.",
          en: "Borjomi mineral water is found in 32 countries worldwide and serves as a kind of calling card for Georgia. The town of Borjomi is one of Georgia’s key resorts, known for its healing springs, coniferous forests, and exceptionally beneficial air.",
        },
        image: "/popular-tours/borjomi.webp",
      },
    ],
  },
  {
    id: 4,
    image: "/popular-tours/lashkroba-shovi-udziro-tba-glola.webp",
    city: { ka: "2 ქალაქი", en: "2 Cities" },
    sight: { ka: "3 სანახაობა", en: "3 Sights" },
    activity: { ka: "2 აქტივობა", en: "2 Activities" },
    title: { ka: "რაჭის ორდღიანი ტური", en: "Two-Day Tour in Racha" },
    descriptin: {
      ka: "ამ ორდღიან ტურზე, რაჭაში, სხვადასხვა პერიოდის ქართული ხუროთმოძღვრების ნიმუშებს აღმოაჩენ, გამორჩეულ ადგილებს ესტუმრები და ისეთ კლიმატურ-ბალნეოლოგიური კურორტებს მოივლი, როგორიცაა შოვი და უწერა. Რაჭული თავგადასავლის განმავლობაში, ასევე ნახავ შაორის წყალსაცავს, ბარაკონს, ნიკორწმინდას და სხვა.",
      en: "On this two-day tour in Racha, you’ll discover examples of Georgian architecture from various periods, visit unique locations, and explore climatic-balneo resorts like Shovi and Utsera. During your Racha adventure, you’ll also see the Shaori Reservoir, Barakoni, Nikortsminda, and more.",
    },
    time: { ka: "24-30სთ", en: "24-30h" },
    distance: { ka: "75კმ", en: "75km" },
    difficulty: { ka: "საშუალო", en: "Medium" },
    tours: [
      {
        id: 1,
        title: {
          ka: "ნიკორწმინდის საკათედრო ტაძარი",
          en: "Nikortsminda Cathedral",
        },
        description: {
          ka: "მდიდრული ჩუქურთმებით ნაქსოვი არშიები, მრავალფეროვანი სიუჟეტის მქონე ფრესკები, ცადაწვდენილი, მაღალყელიანი გუმბათი - ეს ეროვნული ხუროთმოძღვრების შედევრად აღიარებული ნიკორწმინდის ტაძარია. 2007 წლიდან იუნესკოს მსოფლიო მემკვიდრეობის საცდელ სიაში შეტანილი ამ ძეგლის ნახვა რაჭაში, ამბროლაურის მუნიციპალიტეტის სოფელ ნიკორწმინდაში შეგიძლია.",
          en: "Intricate carvings, diverse frescoes, and a soaring, high-domed structure—this is the Nikortsminda Cathedral, recognized as a masterpiece of national architecture. Included in UNESCO’s tentative World Heritage list since 2007, you can visit this monument in Racha, in the village of Nikortsminda, Ambrolauri Municipality.",
        },
        image: "/popular-tours/nikortsminda-cathedral.webp",
      },
      {
        id: 2,
        title: {
          ka: "ბარაკონის ღვთისმშობლის ეკლესია",
          en: "Barakoni Church of the Virgin Mary",
        },
        description: {
          ka: "რაჭა, მწვანე მთებით გარშემორტყმული სოფელი წესი, მდინარეების - ლუხუნისა და რიონის შესართავი, ხეობაში შეყუჟული სახლები, შემაღლებულზე კი მარადისობის ნიშანივით მდგარი ბარაკონი - ეს ქართული ხუროთმოძღვრების ცოცხალი ძეგლია. როცა მას დაინახავ, აუცილებლად დაფიქრდები, რეალურია თუ არა ის.",
          en: "Racha, the village of Rtsi surrounded by green mountains, the confluence of the Lukhuni and Rioni rivers, houses nestled in the valley, and atop a hill stands Barakoni, a living monument of Georgian architecture. When you see it, you’ll wonder if it’s real.",
        },
        image: "/popular-tours/barakoni-church-of-virgin-mary-gnta.webp",
      },
      {
        id: 3,
        title: { ka: "შაორის ტბა", en: "Shaori Lake" },
        description: {
          ka: "რაჭაში, თოვლით დაფარული მწვერვალების, უღრანი ტყეებისა და ყვავილებით მოჩითული მდელოების გულში ხელოვნური წყალსაცავი მდებარეობს - შაორი, რომელიც გართობისა და დასვენებისთვის ზღაპრულ გარემოს შეგიქმნის.",
          en: "In the heart of Racha, among snow-capped peaks, dense forests, and meadows adorned with flowers, lies the artificial Shaori Reservoir, creating a fairy-tale setting for recreation and relaxation.",
        },
        image: "/popular-tours/shaori-lake-gnta.webp",
      },
      {
        id: 4,
        title: {
          ka: "ჯომარდობა რიონზე: უწერა-ონი",
          en: "Rafting on Rioni: Utsera-Oni",
        },
        description: {
          ka: "მდინარე რიონზე ეს საჯომარდო მარშრუტი ულამაზეს რაჭას გაივლის, რომელიც დასავლეთ საქართველოს ჩრდილო-აღმოსავლეთში, რიონისა და მისი შენაკადების ხეობაშია გაშენებული.",
          en: "This rafting route on the Rioni River passes through the stunning Racha region, located in northeastern western Georgia, in the valley of the Rioni and its tributaries.",
        },
        image: "/popular-tours/rafting-on-rioni-oni-ambrolauri.webp",
      },
      {
        id: 5,
        title: {
          ka: "შოვი-უძირო ტბა-სოფელი გლოლა",
          en: "Shovi-Udziro Lake-Glola Village",
        },
        description: {
          ka: "რაჭაში, ონიდან 30 კმ-ში, ზღვის დონიდან 1600 მეტრ სიმაღლეზე ბალნეოლოგიურ კურორტ შოვიდან ლაშქრობის ერთ-ერთი საუკეთესო მარშრუტი შოვი-უძირო ტბა-სოფელი გლოლა იწყება.",
          en: "In Racha, 30 km from Oni, at 1,600 meters above sea level, one of the best hiking routes starts from the balneological resort of Shovi: Shovi-Udziro Lake-Glola Village.",
        },
        image: "/popular-tours/shovi-udziro-tba-glola-gnta.webp",
      },
      {
        id: 6,
        title: { ka: "ამბროლაური", en: "Ambrolauri" },
        description: {
          ka: "მდინარეების - რიონისა და კრიხულის შესართავთან 550 მეტრ სიმაღლეზე გაშენებული პატარა ქალაქი XVII საუკუნეში იმერეთის მეფეების ერთ-ერთი რეზიდენცია იყო. ეს ამბროლაურია - რაჭა-ლეჩხუმ-ქვემო სვანეთის ადმინისტრაციული ცენტრი, ცივი ზამთრის, მშრალი და ცხელი ზაფხულისა და ულამაზესი ხედების ადგილი.",
          en: "Built at 550 meters above sea level at the confluence of the Rioni and Krikhula rivers, this small town was one of the residences of Imereti’s kings in the 17th century. This is Ambrolauri, the administrative center of Racha-Lechkhumi-Lower Svaneti, a place of cold winters, dry hot summers, and stunning views.",
        },
        image: "/popular-tours/ambrolauri-gnta.webp",
      },
      {
        id: 7,
        title: { ka: "ონი", en: "Oni" },
        description: {
          ka: "თბილისიდან 210 კმ-ში, რაჭაში, მდინარე რიონის მარცხენა ნაპირზე, ღრმა ხეობაში გაშენებულია მყუდრო ქალაქი ონი. ისტორიულ წყაროებში ონი პირველად XV-XVI საუკუნეებშია მოხსენიებული, მაგრამ ქალაქის ტერიტორიაზე ადამიანები ბრინჯაოს ხანიდან ცხოვრობდნენ. საკუთრივ ქალაქი ძვ. წ. II საუკუნეში იბერიის მეფე ფარნაჯომს დაუარსებია. ამას ონში აღმოჩენილი ძვ. წ. VI-III საუკუნეების ბრინჯაოს ხანის ნივთები ადასტურებს.",
          en: "210 km from Tbilisi, in Racha, on the left bank of the Rioni River in a deep valley, lies the cozy town of Oni. Historical sources first mention Oni in the 15th-16th centuries, but people have lived here since the Bronze Age. The town itself was founded in the 2nd century BC by King Parnajom of Iberia, as evidenced by Bronze Age artifacts from the 6th-3rd centuries BC found in Oni.",
        },
        image: "/popular-tours/oni-gnta.webp",
      },
      {
        id: 8,
        title: { ka: "შოვი", en: "Shovi" },
        description: {
          ka: "თუ ივნისიდან ოქტომბრამდე, რამდენიმე დღით მაინც, საქართველოში მოგზაურობას გეგმავ, მაშინ შოვზე აუცილებლად უნდა იცოდე - რაჭის მთების მარგალიტზე, კურორტზე, რომელიც სამკურნალო, მინერალური წყლების, წიწვოვანი ტყეებისა და ჟანგბადით გაჯერებული ჰაერის სამეფოა.",
          en: "If you’re planning to travel to Georgia from June to October, even for just a few days, you must know about Shovi—the pearl of Racha’s mountains, a resort known for its healing mineral waters, coniferous forests, and oxygen-rich air.",
        },
        image: "/popular-tours/shovi-gnta.webp",
      },
    ],
  },
  {
    id: 5,
    image: "/popular-tours/upper-svaneti-gnta.webp",
    city: { ka: "1 ქალაქი", en: "1 City" },
    sight: { ka: "7 სანახაობა", en: "7 Sights" },
    activity: { ka: "0 აქტივობა", en: "0 Activities" },
    title: { ka: "ორდღიანი ტური სვანეთში", en: "Two-Day Tour in Svaneti" },
    descriptin: {
      ka: "თუ დაუვიწყარ თავგადასავალს ეძებ და ლეგენდებით სავსე მხარეებში მოგზაურობაც გიზიდავს, მაშინ სვანეთს უნდა ეწვიო და საქართველოს უმაღლესი მწვერვალი, ულამაზესი ბუნება, ხელუხლებელი ტყეები, კლდეებთან ჰარმონიულად შერწყმული კოშკოვანი სოფლები და მედიდურად აღმართული მთები უნდა მოინახულო.",
      en: "If you’re seeking an unforgettable adventure and are drawn to regions filled with legends, then you must visit Svaneti to explore Georgia’s highest peaks, stunning nature, pristine forests, tower-filled villages harmoniously blended with cliffs, and majestic mountains.",
    },
    time: { ka: "24-30სთ", en: "24-30h" },
    distance: { ka: "55კმ", en: "55km" },
    difficulty: { ka: "რთული", en: "Difficult" },
    tours: [
      {
        id: 1,
        title: {
          ka: "მარგიანის სახლ-მუზეუმი",
          en: "Margiani House-Museum",
        },
        description: {
          ka: "სვანეთში ბევრი რამ არის სანახავი, ხეობებში მოღრიალე მდინარეებით დაწყებული და არისტოკრატულად მდგარი მთებით დამთავრებული, თუმცა გამონაკლისი მაინც არსებობს და ეს სვანური კოშკია. ამ 4-5-სართულიან ნაგებობებს სვანები როგორც საცხოვრებლად, ისე მტრისგან თავდასაცავად იყენებდნენ.",
          en: "There’s much to see in Svaneti, from roaring rivers in the valleys to aristocratic mountains, but an exception stands out—the Svan towers. These 4-5-story structures were used by Svans for both living and defense against enemies.",
        },
        image: "/popular-tours/margiani-defence-tower-and-museum-gnta.webp",
      },
      {
        id: 2,
        title: {
          ka: "სიყვარულის კოშკი სვანეთში",
          en: "Tower of Love in Svaneti",
        },
        description: {
          ka: "მესტიიდან ევროპის ყველაზე მაღალ დასახლებამდე, უშგულამდე მიმავალ გზაზე, მდინარე ენგურში, უზარმაზარ ლოდზე „სიყვარულის კოშკი“ დგას. თუ სურვილი გექნება, მის დასათვალიერებლად გზიდან გადახვევაც არ დაგჭირდება.",
          en: "On the road from Mestia to Ushguli, Europe’s highest settlement, stands the 'Tower of Love' on a massive boulder in the Enguri River. If you wish to see it, you won’t even need to detour.",
        },
        image: "/popular-tours/svan-tower-of-love-gnta.webp",
      },
      {
        id: 3,
        title: {
          ka: "ლამარია - უშგულის ღვთისმშობლის ტაძარი",
          en: "Lamaria - Ushguli Virgin Mary Church",
        },
        description: {
          ka: "უშგული თავისი ისტორიით, კულტურული თავისებურებებით, უნიკალური არქიტექტურითა და ულამაზესი ბუნებით საოცრად მომნუსხველი ადგილია. სწორედ ამ მხარეში, სოფელ ჟიბიანის ჩრდილოეთით, ამაღლებულ ბორცვზე სვანეთის ერთ-ერთი ყველაზე დიდი ღირსშესანიშნაობა - ლამარიას, იგივე უშგულის, ღვთისმშობლის სახელობის ტაძარი დგას. იგი, ისტორიული და არქიტექტურული თვალსაზრისით, ერთ-ერთი გამორჩეული ხუროთმოძღვრული ძეგლია საქართველოში.",
          en: "Ushguli, with its history, cultural uniqueness, distinctive architecture, and stunning nature, is an enchanting place. In this region, north of Zhibiani village, on an elevated hill, stands one of Svaneti’s greatest landmarks—Lamaria, also known as the Ushguli Virgin Mary Church. It is one of Georgia’s most remarkable architectural monuments from both historical and architectural perspectives.",
        },
        image: "/popular-tours/lamaria-gnta.webp",
      },
      {
        id: 4,
        title: { ka: "ლაგურკა", en: "Lagurka" },
        description: {
          ka: "სვანეთი საოცრებების მხარეა, რადგან ის არა მხოლოდ უძველესი კულტურული ნაგებობებითაა გამორჩეული, არამედ აქაური ხუროთმოძღვრების ძეგლები უნიკალურ ისტორიებსა და საიდუმლოებებით შემკულ ლეგენდებს აცოცხლებს. ერთ-ერთი ასეთი გასაოცარი ტაძარია ლაგურკა - წმინდა კვირიკესა და წმინდა ივლიტას სახელობის ეკლესია, რომელიც კალას თემის სოფელ ხეში, მთის წვერზე დგას. მას უამრავი ლეგენდა და ჩვეულება უკავშირდება.",
          en: "Svaneti is a region of wonders, distinguished not only by its ancient cultural structures but also by architectural monuments that bring to life unique stories and legends shrouded in mystery. One such remarkable temple is Lagurka—the Church of Saints Cyricus and Julitta, located in the village of Khe in the Kala community, perched atop a mountain. It is associated with numerous legends and traditions.",
        },
        image:
          "/popular-tours/lagurka-the-kala-church-of-saints-cyricus-and-julitta-gnta.webp",
      },
      {
        id: 5,
        title: {
          ka: "სვანეთის ისტორიისა და ეთნოგრაფიის მუზეუმი",
          en: "Svaneti Museum of History and Ethnography",
        },
        description: {
          ka: "სვანეთი საქართველოს ყველაზე მაღალმთიანი მხარეა და აქ უამრავ საინტერესო თავგადასავალს გადააწყდები. სვანეთში, ისევე, როგორც საქართველოს სხვა მთიან რეგიონებში, ერთმანეთს ერწყმის წარმართული და ქრისტიანული რიტუალები, წეს-ჩვეულებები, რაც ახალ, თვითმყოფად სახეს იღებს და განსაკუთრებით ტურისტებსა და მოგზაურებს იზიდავს. ამ მხარეში რომ იმოგზაურებ, სვანეთის ისტორიისა და ეთნოგრაფიის მუზეუმს აუცილებლად უნდა ესტუმრო, რადგან ეს ადგილი შენ წინ სვანეთის უდიდეს ისტორიას გააცოცხლებს.",
          en: "Svaneti is Georgia’s highest mountainous region, where you’ll encounter countless fascinating adventures. Like other mountainous regions in Georgia, Svaneti blends pagan and Christian rituals and traditions, creating a unique identity that particularly attracts tourists and travelers. When traveling here, you must visit the Svaneti Museum of History and Ethnography, as this place brings Svaneti’s rich history to life.",
        },
        image:
          "/popular-tours/svaneti-museum-of-history-and-ethnography-gnta.webp",
      },
      {
        id: 6,
        title: {
          ka: "უშგულის ეთნოგრაფიული მუზეუმი",
          en: "Ushguli Ethnographic Museum",
        },
        description: {
          ka: "მესტიის მუნიციპალიტეტში, უშგულში, მე-13 საუკუნის სვანური ტიპის ორსართულიანი კირწყლით ნაშენ შენობაში, რომელსაც „მაჩუბ დარბაზს“ უწოდებენ, ძველი სვანეთის ჩვეულება და ტრადიციები ცოცხლდება - აქ ეთნოგრაფიული მუზეუმია განთავსებული.",
          en: "In Mestia Municipality, in Ushguli, a 13th-century Svan-style two-story building made of limestone, called the 'Machub Hall,' houses the Ethnographic Museum, where the customs and traditions of ancient Svaneti come to life.",
        },
        image: "/popular-tours/ushguli-art-museum-gnta.webp",
      },
      {
        id: 7,
        title: {
          ka: "მიხეილ ხერგიანის სახლ-მუზეუმი",
          en: "Mikheil Khergiani House-Museum",
        },
        description: {
          ka: "1969 წელს თურქესტანის ქედის 4960 მეტრ სიმაღლის მწვერვალს მისი სახელი ეწოდა. მისი სახელი უწოდეს 1978 წელს მზის სისტემაში აღმოჩენილ ასტეროიდსაც, ნომრით 3234. ,,ალპინიზმის ლეგენდა, მთის დამპყრობელი, კლდის ვეფხვი“ - ასე მოიხსენიებენ მიხეილ ხერგიანს - ადამიანს, რომელმაც მთელი ცხოვრება მწვერვალების დაპყრობას მიუძღვნა.",
          en: "In 1969, a 4,960-meter peak in the Turkestan Range was named after him. In 1978, an asteroid discovered in the solar system, number 3234, was also named after him. 'The legend of alpinism, conqueror of mountains, tiger of the cliffs'—this is how Mikheil Khergiani is remembered, a man who dedicated his life to conquering peaks.",
        },
        image: "/popular-tours/mikheil-khergiani-house-museum-gnta.webp",
      },
      {
        id: 8,
        title: { ka: "უშგული", en: "Ushguli" },
        description: {
          ka: "როდესაც სვანეთში მოხვდები, საოცარი ხედების ფოტოებზე აღბეჭდვას „ენგურჰესიდან“ დაიწყებ, რომელიც მონუმენტური კაშხალია და მოგზაურებში ერთ-ერთი საკმაოდ პოპულარული ადგილი, თუმცა არ უნდა დაგავიწყდეს უშგულის მონახულებაც. კლდეებს შორის მოქცეული, ზამთარში თეთრ საბურველში გახვეული, ზაფხულში კი მწვანე ველებითა და სვანური კოშკებით შემკული უშგული წარმოუდგენლად ლამაზია.",
          en: "When you arrive in Svaneti, you’ll start capturing stunning views from Enguri Dam, a monumental structure and a popular spot among travelers, but don’t forget to visit Ushguli. Nestled among cliffs, wrapped in a white blanket in winter, and adorned with green fields and Svan towers in summer, Ushguli is unimaginably beautiful.",
        },
        image: "/popular-tours/ushguli-gnta.webp",
      },
      {
        id: 9,
        title: { ka: "მესტია", en: "Mestia" },
        description: {
          ka: "თუ მესტიაში ერთხელ მაინც იმოგზაურებ, აქაური ბუნება და გასაოცარი ლანდშაფტები საოცარი შთაბეჭდილებებით აგავსებს.",
          en: "If you travel to Mestia even once, its nature and stunning landscapes will leave you with unforgettable impressions.",
        },
        image: "/popular-tours/mestia-gnta.webp",
      },
    ],
  },
  {
    id: 6,
    image: "/popular-tours/bolnisi.webp",
    city: { ka: "2 ქალაქი", en: "2 Cities" },
    sight: { ka: "3 სანახაობა", en: "3 Sights" },
    activity: { ka: "0 აქტივობა", en: "0 Activities" },
    title: {
      ka: "ერთდღიანი ტური ბოლნისსა და დმანისში",
      en: "One-Day Tour in Bolnisi and Dmanisi",
    },
    descriptin: {
      ka: "ამ მარტივი, ერთდღიანი მარშრუტით, ბოლნისსა და ისტორიული თავგადასავლებით სავსე დმანისში მიდიხარ, სადაც განსაკუთრებით გამორჩეულ და მრავალფეროვან კულტურულ ძეგლებს იხილავ, ბუნებაში განტვირთვის შესაძლებლობაც გექნება და შენს თვალწინ პირველი ევროპელების ყოფა-ცხოვრების ამსახველი ექსპონატები გადაიშლება.",
      en: "With this simple one-day route, you’ll travel to Bolnisi and the history-rich Dmanisi, where you’ll see particularly remarkable and diverse cultural monuments, have the chance to relax in nature, and witness exhibits depicting the lives of the first Europeans.",
    },
    time: { ka: "6-8სთ", en: "6-8h" },
    distance: { ka: "55კმ", en: "55km" },
    difficulty: { ka: "ადვილი", en: "Easy" },
    tours: [
      {
        id: 1,
        title: { ka: "ბოლნისის სიონი", en: "Bolnisi Sioni" },
        description: {
          ka: "ბოლნისის ღვთისმშობლის მიძინების ტაძარი, იგივე ბოლნისის სიონი, ერთ-ერთი უძველესი და უმნიშვნელოვანესი ძეგლია ძველ ქართულ ხუროთმოძღვრებაში.",
          en: "The Bolnisi Virgin Mary Dormition Church, also known as Bolnisi Sioni, is one of the oldest and most significant monuments in ancient Georgian architecture.",
        },
        image: "/popular-tours/bolnisi-sioni-gnta.webp",
      },
      {
        id: 2,
        title: {
          ka: "დმანისი - პირველი ევრაზიელების სამშობლო",
          en: "Dmanisi - Homeland of the First Eurasians",
        },
        description: {
          ka: "თბილისიდან 85 კილომეტრის დაშორებით მდებარე დმანისი მსოფლიოს ცნობილი არქეოლოგების ყურადღების ცენტრშია. სწორედ აქ აღმოაჩინეს ზეზვა და მზია – პირველი ევრაზიელი ადამიანები, უფრო სწორად - ჰომინინები. ეს აღმოჩენა 1991 წელს გაკეთდა და უკვე 2000 წელს ჟურნალმა Science-მა დმანისელი ადამიანები (Homo georgicus) მსოფლიო მეცნიერებაში მომხდარ 10 ყველაზე მნიშვნელოვან მოვლენას შორის დაასახელა.",
          en: "Located 85 kilometers from Tbilisi, Dmanisi is a focal point for world-renowned archaeologists. Here, Zezva and Mzia—the first Eurasians, or more precisely, hominins—were discovered in 1991. By 2000, the journal Science named the Dmanisi humans (Homo georgicus) among the 10 most significant events in world science.",
        },
        image: "/popular-tours/urban-archaeology-of-dmanisi-gnta.webp",
      },
      {
        id: 3,
        title: {
          ka: "წუღრუღაშენის ეკლესია",
          en: "Tsughrughasheni Church",
        },
        description: {
          ka: "მსუბუქი, ჰაეროვანი, ზეცისკენ ატყორცნილი ფერადი ტაძარი ირგვლივ გამეფებული სიმშვიდით ყოველთვის წარუშლელ შთაბეჭდილებას ახდენს - მიუხედავად იმისა, პირველად უყურებ მას თუ აქ არაერთხელ ხარ ნამყოფი. ეს წუღრუღაშენია - ქვემო ქართლში, მდინარე ბოლნისისწყლის მარჯვენა ნაპირზე, სოფელ ბოლნისთან შემაღლებულზე მდგარი ულამაზესი ქართული ტაძარი.",
          en: "Light, airy, and soaring toward the heavens, this colorful temple, surrounded by serene tranquility, always leaves an indelible impression, whether it’s your first visit or you’ve been here many times. This is Tsughrughasheni—a stunning Georgian church in Kvemo Kartli, on the right bank of the Bolnisisistskali River, near the village of Bolnisi.",
        },
        image: "/popular-tours/tsurughasheni-church-gnta.webp",
      },
      {
        id: 4,
        title: { ka: "ბოლნისი", en: "Bolnisi" },
        description: {
          ka: "ბოლნისი დღეს საქართველოს ერთ-ერთი მნიშვნელოვანი სასოფლო-სამეურნეო რეგიონია. აქ ისეთი ჰავა და ნიადაგია, მოსახლეობას წელიწადში სამი მოსავალი მოჰყავს, მაგრამ ბოლნისში ჩასულს ადგილობრივი მასპინძელი, პირველ რიგში, გერმანულ სახლებს დაგათვალიერებინებს.",
          en: "Today, Bolnisi is one of Georgia’s key agricultural regions. The climate and soil here allow locals to harvest three crops a year, but upon arriving in Bolnisi, your host will first show you the German houses.",
        },
        image: "/popular-tours/bolnisi-gnta.webp",
      },
      {
        id: 5,
        title: { ka: "დმანისი", en: "Dmanisi" },
        description: {
          ka: "დმანისში დროში იმოგზაურებ - აქ 1,8 მილიონი წლის წინათ მცხოვრები ადამიანების, გამყინვარების ეპოქის ხმალკბილა ვეფხვების და, უხსოვარი დროის საცხოვრებელი ქვაბულების გარემოში აღმოჩნდები; მიწაში ოქროს საგანძურია ნაპოვნი, მიწის ზემოთ კი დიდებული არქიტექტურული ძეგლებია შემორჩენილი.",
          en: "In Dmanisi, you’ll travel through time—finding yourself among people who lived 1.8 million years ago, Ice Age saber-toothed tigers, and ancient cave dwellings. Gold treasures have been found in the ground, while magnificent architectural monuments remain above.",
        },
        image: "/popular-tours/urban-archaeology-of-dmanisi-gnta.webp",
      },
    ],
  },
  {
    id: 7,
    image: "/popular-tours/racha-lechkhumi.webp",
    city: { ka: "2 ქალაქი", en: "2 Cities" },
    sight: { ka: "3 სანახაობა", en: "3 Sights" },
    activity: { ka: "0 აქტივობა", en: "0 Activities" },
    title: { ka: "ერთდღიანი ტური რაჭაში", en: "One-Day Tour in Racha" },
    descriptin: {
      ka: "ადგილები, რომლებსაც ამ ტურის განმავლობაში მოინახულებ, თავისი დიდებულებით ნამდვილად გაგაოცებს - სხვადასხვა პერიოდის მნიშვნელოვანი კულტურული ძეგლები, უძველესი ფრესკები, მომნუსხველი ბუნება და კლდეებში ჩუმად ჩამალული ტბები - თუ ხეტიალი გიყვარს, აქაურობა, სულ რაღაც ერთ დღეში, თავს შეგაყვარებს.",
      en: "The places you’ll visit on this tour will truly amaze you with their grandeur—significant cultural monuments from various periods, ancient frescoes, captivating nature, and lakes quietly nestled among cliffs. If you love wandering, this place will steal your heart in just one day.",
    },
    time: { ka: "8-12სთ", en: "8-12h" },
    distance: { ka: "50კმ", en: "50km" },
    difficulty: { ka: "ადვილი", en: "Easy" },
    tours: [
      {
        id: 1,
        title: {
          ka: "ნიკორწმინდის საკათედრო ტაძარი",
          en: "Nikortsminda Cathedral",
        },
        description: {
          ka: "მდიდრული ჩუქურთმებით ნაქსოვი არშიები, მრავ",
          en: "",
        },
        image: "",
      },
    ],
  },
];
