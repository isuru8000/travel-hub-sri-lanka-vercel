
import { Destination } from './types.ts';
import { ABOUT_DATA } from './about_destinations.tsx';

const BASE_DESTINATIONS: Destination[] = [
  // --- ANCIENT (10) ---
  { 
    id: "sigiriya", name: { EN: "Sigiriya", SI: "සීගිරිය" }, category: "ancient", 
    image: "https://i.pinimg.com/1200x/3a/e7/48/3ae7487f4e95b92ce2d3c10c5b1038e0.jpg", 
    gallery: ["https://i.pinimg.com/1200x/93/07/66/93076630d999bdecdb46b99f342db55d.jpg", "https://i.pinimg.com/736x/dc/b5/cf/dcb5cf4c9b507d3a57a8b4f466984ace.jpg"], 
    history: { EN: "A 5th-century rock fortress and palace complex.", SI: "5 වන සියවසේ බලකොටුවක් සහ මාලිගා සංකීර්ණයකි." }, 
    shortStory: { EN: "The Lion Rock.", SI: "සීගිරිය." }, bestTime: { EN: "Dec - Apr", SI: "දෙසැ - අප්‍රේ" }, tips: [{ EN: "Go early.", SI: "වේලාසනින් යන්න." }], hiddenEchoes: { EN: "Mirror wall.", SI: "කැටපත් පවුර." }, location: "Matale", coordinates: { x: 52, y: 38 }
  },
  { 
    id: "kandy-temp", name: { EN: "Temple of the Tooth", SI: "ශ්‍රී දළදා මාළිගාව" }, category: "ancient", 
    image: "https://i.pinimg.com/1200x/b6/4b/ca/b64bcaaf16fc3356cee1b56c84ebfd8f.jpg", 
    gallery: ["https://i.pinimg.com/1200x/9d/21/2e/9d212e3794b123394712f2065098d5c.jpg", "https://i.pinimg.com/1200x/2a/63/1d/2a631d3d6664c0c84bf78db4a758a2a9.jpg"], 
    history: { EN: "The last royal capital's sacred relic house.", SI: "දන්ත ධාතූන් වහන්සේ වැඩසිටින පූජනීය ස්ථානය." }, 
    shortStory: { EN: "Sacred Relic.", SI: "පූජනීය ධාතු." }, bestTime: { EN: "Year round", SI: "වසර පුරා" }, tips: [{ EN: "Dress in white.", SI: "සුදු ඇඳුම් අඳින්න." }], hiddenEchoes: { EN: "Royal palace ruins.", SI: "මාලිගා නටබුන්." }, location: "Kandy", coordinates: { x: 58.5, y: 50.2 }
  },
  { 
    id: "polonnaruwa", name: { EN: "Polonnaruwa Vatadage", SI: "පොළොන්නරුව වටදාගෙය" }, category: "ancient", 
    image: "https://i.pinimg.com/736x/d8/2c/a4/d82ca4a76a9775793c4d1fd4d24ff6e4.jpg", 
    gallery: ["https://i.pinimg.com/1200x/6e/8c/8e/6e8c8e2f8e1a8e1a.jpg", "https://i.pinimg.com/1200x/5c/58/05/5c580556184566f7f7f90958133535f2.jpg"], 
    history: { EN: "Medieval capital known for stone carvings.", SI: "මධ්‍යතන යුගයේ අගනුවරයි." }, 
    shortStory: { EN: "Medieval Splendor.", SI: "මධ්‍යතන අභිමානය." }, bestTime: { EN: "Jan - Mar", SI: "ජන - මාර්" }, tips: [{ EN: "Cycle the ruins.", SI: "පාපැදියෙන් යන්න." }], hiddenEchoes: { EN: "Gal Vihara.", SI: "ගල් විහාරය." }, location: "Polonnaruwa", coordinates: { x: 62.5, y: 30.2 }
  },
  { 
    id: "dambulla", name: { EN: "Dambulla Cave Temple", SI: "දඹුලු රන් විහාරය" }, category: "ancient", 
    image: "https://i.pinimg.com/1200x/ca/96/d8/ca96d8e009f8ad50128891ce45b59c9d.jpg", 
    gallery: ["https://i.pinimg.com/736x/87/b1/7f/87b17fb4f6d602cf2606fdf482e41c2b.jpg", "https://i.pinimg.com/1200x/5a/b9/51/5ab951459b8a2d35710d4264e4ce1503.jpg"], 
    history: { EN: "Largest rock temple complex in Lanka.", SI: "ලොකුම ලෙන් විහාර සංකීර්ණය." }, 
    shortStory: { EN: "Golden Grotto.", SI: "රන් ලෙන්." }, bestTime: { EN: "Year round", SI: "වසර පුරා" }, tips: [{ EN: "Climb at dusk.", SI: "සවස් කාලයේ යන්න." }], hiddenEchoes: { EN: "Ancient murals.", SI: "පැරණි බිතුසිතුවම්." }, location: "Dambulla", coordinates: { x: 52.5, y: 41.2 }
  },
  { 
    id: "ruwanwelisaya", name: { EN: "Ruwanwelisaya", SI: "රුවන්වැලිසෑය" }, category: "ancient", 
    image: "https://i.pinimg.com/736x/27/e6/9c/27e69c87e1fab4749b49dfc42f765171.jpg", 
    gallery: ["https://i.pinimg.com/736x/a6/ae/4f/a6ae4fd861554769766daae2f0e621d2.jpg", "https://i.pinimg.com/1200x/40/85/a5/4085a5c8f3800838222fd5868dbaf9dd.jpg"], 
    history: { EN: "Iconic stupa built by King Dutugemunu.", SI: "දුටුගැමුණු රජු කළ මහා සෑය." }, 
    shortStory: { EN: "Great Stupa.", SI: "මහා සෑය." }, bestTime: { EN: "Full moon days", SI: "පොහොය දින" }, tips: [{ EN: "Remove shoes.", SI: "පාවහන් ඉවත් කරන්න." }], hiddenEchoes: { EN: "Elephant wall.", SI: "ඇත් පවුර." }, location: "Anuradhapura", coordinates: { x: 50.2, y: 19.8 }
  },
  { 
    id: "abhayagiri", name: { EN: "Abhayagiri Vihara", SI: "අභයගිරි විහාරය" }, category: "ancient", 
    image: "https://i.pinimg.com/736x/79/fe/c8/79fec8ab620ae1cc7a884b4d7f068daf.jpg", 
    gallery: ["https://i.pinimg.com/1200x/0c/d6/36/0cd6364b766c233d0d9f25252fb16d4d.jpg", "https://i.pinimg.com/1200x/2a/63/1d/2a631d3d6664c0c84bf78db4a758a2a9.jpg"], 
    history: { EN: "A major monastery site in Anuradhapura.", SI: "අනුරාධපුරයේ ප්‍රධාන ආරාම සංකීර්ණයකි." }, 
    shortStory: { EN: "Scholarly Hub.", SI: "අධ්‍යාපනික මධ්‍යස්ථානය." }, bestTime: { EN: "Sep - Mar", SI: "සැප් - මාර්" }, tips: [{ EN: "See Twin Ponds.", SI: "කුට්ටම් පොකුණ බලන්න." }], hiddenEchoes: { EN: "Samadhi Buddha.", SI: "සමාධි බුදු පිළිමය." }, location: "Anuradhapura", coordinates: { x: 50.1, y: 17.5 }
  },
  { 
    id: "mihintale", name: { EN: "Mihintale", SI: "මිහින්තලේ" }, category: "ancient", 
    image: "https://i.pinimg.com/736x/d0/d7/53/d0d75337511525edd5b08c6ddd5a5daf.jpg", 
    gallery: ["https://i.pinimg.com/1200x/ce/b7/d6/ceb7d6e0eba3935d85da2d37f1ee8875.jpg", "https://i.pinimg.com/1200x/41/40/73/4140733c7c83c7c83c7c83.jpg"], 
    history: { EN: "The cradle of Buddhism in Sri Lanka.", SI: "ලංකාවේ බුදුදහම ස්ථාපිත වූ ස්ථානය." }, 
    shortStory: { EN: "Cradle of Faith.", SI: "ඇදහිල්ලේ තොටිල්ල." }, bestTime: { EN: "June", SI: "ජූනි" }, tips: [{ EN: "Sunset is best.", SI: "හිරු බැසීම මනරම්ය." }], hiddenEchoes: { EN: "Ancient hospital.", SI: "පැරණි රෝහල." }, location: "Anuradhapura", coordinates: { x: 54.2, y: 18.2 }
  },
  { 
    id: "jaffna-fort", name: { EN: "Jaffna Fort", SI: "යාපනය බලකොටුව" }, category: "ancient", 
    image: "https://i.pinimg.com/736x/5a/b6/84/5ab6845bde96dacaf328db90f0b2124b.jpg", 
    gallery: ["https://i.pinimg.com/1200x/c1/98/9c/c1989cb28206977268d8768d8768d876.jpg", "https://i.pinimg.com/1200x/5c/58/05/5c580556184566f7f7f90958133535f2.jpg"], 
    history: { EN: "Portuguese and Dutch era fortress.", SI: "පෘතුගීසි සහ ලන්දේසි යුගයේ බලකොටුවකි." }, 
    shortStory: { EN: "Northern Bastion.", SI: "උතුරේ බලකොටුව." }, bestTime: { EN: "Jan - Sep", SI: "ජන - සැප්" }, tips: [{ EN: "Walk the walls.", SI: "පවුර දිගේ ඇවිදින්න." }], hiddenEchoes: { EN: "Queen's House.", SI: "රැජිනගේ නිවස." }, location: "Jaffna", coordinates: { x: 38.5, y: 5.2 }
  },
  { 
    id: "galle-fort", name: { EN: "Galle Fort", SI: "ගාල්ල කොටුව" }, category: "ancient", 
    image: "https://i.pinimg.com/1200x/09/4c/77/094c771bcf9d20988d5cb0bd21e91487.jpg", 
    gallery: ["https://i.pinimg.com/736x/fc/73/a0/fc73a0bd21708eeaa3baf5872482bf25.jpg"], 
    history: { EN: "A living UNESCO heritage city.", SI: "සජීවී යුනෙස්කෝ උරුම නගරයකි." }, 
    shortStory: { EN: "European Echoes.", SI: "යුරෝපීය උරුමය." }, bestTime: { EN: "Nov - Apr", SI: "නොවැ - අප්‍රේ" }, tips: [{ EN: "Lighthouse view.", SI: "ප්‍රදීපාගාර දර්ශනය." }], hiddenEchoes: { EN: "Dutch church.", SI: "ලන්දේසි පල්ලිය." }, location: "Galle", coordinates: { x: 42.5, y: 92.5 }
  },
  { 
    id: "yapahuwa", name: { EN: "Yapahuwa", SI: "යාපහුව" }, category: "ancient", 
    image: "https://i.pinimg.com/1200x/51/44/83/514483127413f72f273478c3.jpg", 
    gallery: ["https://i.pinimg.com/1200x/31/5d/4c/315d4cf48f86f3792032e367468112c8.jpg"], 
    history: { EN: "Rock fortress known for its steep stairs.", SI: "දැඩි පඩිපෙළ සහිත බලකොටුවකි." }, 
    shortStory: { EN: "Lion Stairway.", SI: "සිංහ පඩිපෙළ." }, bestTime: { EN: "Dry season", SI: "වියළි කාලය" }, tips: [{ EN: "Steep climb.", SI: "දැඩි තරණයකි." }], hiddenEchoes: { EN: "Sacred Tooth site.", SI: "ධාතූන් වහන්සේ වැඩසිටි තැන." }, location: "Kurunegala", coordinates: { x: 45.5, y: 40.2 }
  },

  // --- BEACHES (10) ---
  { 
    id: "mirissa", name: { EN: "Mirissa", SI: "මිරිස්ස" }, category: "beach", 
    image: "https://i.pinimg.com/1200x/82/d4/3b/82d43b37cb5cb64da328399d13f05b17.jpg", 
    gallery: ["https://i.pinimg.com/1200x/7c/db/39/7cdb39c88ab9b4684492930755128968.jpg"], 
    history: { EN: "Iconic southern bay for surfing.", SI: "රළ පැදීමට සුදුසු දකුණු වෙරළ තීරය." }, 
    shortStory: { EN: "Whale Watching.", SI: "තල්මසුන් නැරඹීම." }, bestTime: { EN: "Nov - Apr", SI: "නොවැ - අප්‍රේ" }, tips: [{ EN: "Coconut Tree Hill.", SI: "කොස් ගස් කන්ද." }], hiddenEchoes: { EN: "Secret beach.", SI: "රහස් වෙරළ." }, location: "Matara", coordinates: { x: 48, y: 96 }
  },
  { 
    id: "nilaveli", name: { EN: "Nilaveli", SI: "නිලාවේලි" }, category: "beach", 
    image: "https://i.pinimg.com/1200x/70/e8/70/70e8707049ddc10b8e15963b08bcfbf7.jpg", 
    gallery: ["https://i.pinimg.com/1200x/6e/8c/8e/6e8c8e2f8e1a8e1a.jpg"], 
    history: { EN: "White sands and crystal waters.", SI: "සුදු වැලි සහිත නිල්වන් වෙරළ." }, 
    shortStory: { EN: "Azure East.", SI: "නැගෙනහිර නිල් දියවර." }, bestTime: { EN: "May - Sep", SI: "මැයි - සැප්" }, tips: [{ EN: "Snorkel Pigeon Island.", SI: "පරෙවි දූපතේ කිමිදෙන්න." }], hiddenEchoes: { EN: "Quiet mornings.", SI: "නිස්කලංක උදෑසන." }, location: "Trincomalee", coordinates: { x: 78.5, y: 25.2 }
  },
  { 
    id: "unawatuna", name: { EN: "Unawatuna", SI: "උණවටුන" }, category: "beach", 
    image: "https://i.pinimg.com/1200x/09/4c/77/094c771bcf9d20988d5cb0bd21e91487.jpg", 
    gallery: ["https://i.pinimg.com/1200x/fc/73/a0/fc73a0bd21708eeaa3baf5872482bf25.jpg"], 
    history: { EN: "Semicircular bay with vibrant reefs.", SI: "කොරල් පර සහිත අලංකාර වෙරළ." }, 
    shortStory: { EN: "Turquoise Bliss.", SI: "නිල්වන් අසිරිය." }, bestTime: { EN: "Nov - Apr", SI: "නොවැ - අප්‍රේ" }, tips: [{ EN: "Jungle Beach trek.", SI: "ජංගල් බීච් ගමන." }], hiddenEchoes: { EN: "Peace Pagoda.", SI: "සාම චෛත්‍යය." }, location: "Galle", coordinates: { x: 44.5, y: 94.8 }
  },
  { 
    id: "bentota", name: { EN: "Bentota", SI: "බෙන්තොට" }, category: "beach", 
    image: "https://i.pinimg.com/1200x/54/49/21/54492160391185f0962b1.jpg", 
    gallery: ["https://i.pinimg.com/1200x/82/d4/3b/82d43b37cb5cb64da328399d13f05b17.jpg"], 
    history: { EN: "Golden sands and river safaris.", SI: "රන්වන් වෙරළ සහ ගංගා සෆාරි." }, 
    shortStory: { EN: "Water Sports.", SI: "ජල ක්‍රීඩා." }, bestTime: { EN: "Nov - Apr", SI: "නොවැ - අප්‍රේ" }, tips: [{ EN: "Madu River boat trip.", SI: "මාදු ගඟේ ගමන." }], hiddenEchoes: { EN: "Brief Garden.", SI: "බ්‍රීෆ් ගාර්ඩ්න්." }, location: "Galle", coordinates: { x: 30.5, y: 88.2 }
  },
  { 
    id: "hikkaduwa", name: { EN: "Hikkaduwa", SI: "හික්කඩුව" }, category: "beach", 
    image: "https://i.pinimg.com/1200x/7c/db/39/7cdb39c88ab9b4684492930755128968.jpg", 
    gallery: ["https://i.pinimg.com/1200x/fc/73/a0/fc73a0bd21708eeaa3baf5872482bf25.jpg"], 
    history: { EN: "Pioneer surf and coral sanctuary.", SI: "කොරල් පර සහ රළ පැදීම." }, 
    shortStory: { EN: "Coral Vibes.", SI: "කොරල් අසිරිය." }, bestTime: { EN: "Nov - Apr", SI: "නොවැ - අප්‍රේ" }, tips: [{ EN: "Turtle hatcheries.", SI: "කැස්බෑ මධ්‍යස්ථාන." }], hiddenEchoes: { EN: "Nightlife.", SI: "රාත්‍රී විනෝදය." }, location: "Galle", coordinates: { x: 38.5, y: 91.2 }
  },
  { 
    id: "arugam-bay", name: { EN: "Arugam Bay", SI: "ආරුගම්බේ" }, category: "beach", 
    image: "https://i.pinimg.com/1200x/82/d4/3b/82d43b37cb5cb64da328399d13f05b17.jpg", 
    gallery: ["https://i.pinimg.com/1200x/7c/db/39/7cdb39c88ab9b4684492930755128968.jpg"], 
    history: { EN: "World-class surfing point.", SI: "ලොව සුප්‍රසිද්ධ රළ පැදීමේ ස්ථානය." }, 
    shortStory: { EN: "Surfer's Pulse.", SI: "රළ පදින්නන්ගේ හදගැස්ම." }, bestTime: { EN: "May - Sep", SI: "මැයි - සැප්" }, tips: [{ EN: "Elephant Rock.", SI: "එලිපන්ට් රොක්." }], hiddenEchoes: { EN: "Pottuvil lagoon.", SI: "පොතුවිල් කලපුව." }, location: "Ampara", coordinates: { x: 88.5, y: 85.2 }
  },
  { 
    id: "negombo", name: { EN: "Negombo", SI: "මීගමුව" }, category: "beach", 
    image: "https://i.pinimg.com/1200x/e2/6e/5b/e26e5b8051acb50b34af9b5732c4b015.jpg", 
    gallery: ["https://i.pinimg.com/1200x/54/49/21/54492160391185f0962b1.jpg"], 
    history: { EN: "Fisherman's town near the airport.", SI: "ගුවන්තොටුපල අසල ධීවර නගරය." }, 
    shortStory: { EN: "Canal City.", SI: "ඇල මාර්ග සහිත නගරය." }, bestTime: { EN: "Dec - Apr", SI: "දෙසැ - අප්‍රේ" }, tips: [{ EN: "Fish market visit.", SI: "මාළු වෙළඳපොල බලන්න." }], hiddenEchoes: { EN: "Dutch Canal.", SI: "ලන්දේසි ඇළ." }, location: "Gampaha", coordinates: { x: 28, y: 65 }
  },
  { 
    id: "pasikudah", name: { EN: "Pasikudah", SI: "පාසිකුඩා" }, category: "beach", 
    image: "https://i.pinimg.com/1200x/4e/29/29/4e2929ee8842aac82e8cbb66db6dc9b9.jpg", 
    gallery: ["https://i.pinimg.com/1200x/70/e8/70/70e8707049ddc10b8e15963b08bcfbf7.jpg"], 
    history: { EN: "Shallow bay with calm waters.", SI: "නිස්කලංක නොගැඹුරු මුහුද." }, 
    shortStory: { EN: "Shallow Bay.", SI: "නොගැඹුරු බොක්ක." }, bestTime: { EN: "May - Sep", SI: "මැයි - සැප්" }, tips: [{ EN: "Great for swimming.", SI: "පිහිනීමට කදිමයි." }], hiddenEchoes: { EN: "Coral gardening.", SI: "කොරල් වගාව." }, location: "Batticaloa", coordinates: { x: 85, y: 45 }
  },
  { 
    id: "trincomalee-bay", name: { EN: "Dutch Bay", SI: "ලන්දේසි බොක්ක" }, category: "beach", 
    image: "https://i.pinimg.com/1200x/78/2b/02/782b02e9aa7d2d17e86a633ad4758200.jpg", 
    gallery: ["https://i.pinimg.com/1200x/09/4c/77/094c771bcf9d20988d5cb0bd21e91487.jpg"], 
    history: { EN: "Historic natural harbour views.", SI: "ඓතිහාසික ස්වභාවික වරාය." }, 
    shortStory: { EN: "Harbour Gem.", SI: "වරාය අසල අසිරිය." }, bestTime: { EN: "May - Sep", SI: "මැයි - සැප්" }, tips: [{ EN: "Visit Koneswaram.", SI: "කෝනේශ්වරම් බලන්න." }], hiddenEchoes: { EN: "Fort Frederick.", SI: "ප්‍රෙඩ්රික් බලකොටුව." }, location: "Trincomalee", coordinates: { x: 76, y: 22 }
  },
  { 
    id: "tangalle", name: { EN: "Tangalle", SI: "තංගල්ල" }, category: "beach", 
    image: "https://i.pinimg.com/1200x/fc/73/a0/fc73a0bd21708eeaa3baf5872482bf25.jpg", 
    gallery: ["https://i.pinimg.com/1200x/78/2b/02/782b02e9aa7d2d17e86a633ad4758200.jpg"], 
    history: { EN: "Quiet, romantic southern getaway.", SI: "දකුණු වෙරළේ නිස්කලංක තැනක්." }, 
    shortStory: { EN: "Silent Sands.", SI: "නිහඬ වැලි තලාව." }, bestTime: { EN: "Dec - Mar", SI: "දෙසැ - මාර්" }, tips: [{ EN: "Turtle watching.", SI: "කැස්බෑවුන් බලන්න." }], hiddenEchoes: { EN: "Mulkirigala rock.", SI: "මුල්කිරිගල පර්වතය." }, location: "Hambantota", coordinates: { x: 62, y: 98 }
  },

  // --- WILDLIFE (10) ---
  { 
    id: "yala", name: { EN: "Yala", SI: "යාල" }, category: "wildlife", 
    image: "https://i.pinimg.com/1200x/1f/61/a5/1f61a5f00d68b86b64e2dd496ba70d33.jpg", 
    gallery: ["https://i.pinimg.com/1200x/6e/89/3c/6e893cc10e527092921a2d48006e8b4e.jpg"], 
    history: { EN: "Famous for high leopard density.", SI: "වැඩිම දිවියන් ප්‍රමාණයක් සිටින වනෝද්‍යානය." }, 
    shortStory: { EN: "Leopard Land.", SI: "දිවියන්ගේ අඩවිය." }, bestTime: { EN: "Feb - Jun", SI: "පෙබ - ජූනි" }, tips: [{ EN: "Book full day.", SI: "දවසම වෙන් කරන්න." }], hiddenEchoes: { EN: "Sithulpawwa temple.", SI: "සිතුල්පව්ව විහාරය." }, location: "Hambantota", coordinates: { x: 80.5, y: 85.5 }
  },
  { 
    id: "udawalawe", name: { EN: "Udawalawe", SI: "උඩවලව" }, category: "wildlife", 
    image: "https://i.pinimg.com/1200x/6e/89/3c/6e893cc10e527092921a2d48006e8b4e.jpg", 
    gallery: ["https://i.pinimg.com/1200x/28/95/94/28959415856159f64b3a6f98073698b8.jpg"], 
    history: { EN: "Home to hundreds of wild elephants.", SI: "වන අලින්ගේ ප්‍රධාන නිවහන." }, 
    shortStory: { EN: "Elephant Haven.", SI: "අලි පාරාදීසය." }, bestTime: { EN: "Oct - Jan", SI: "ඔක් - ජන" }, tips: [{ EN: "Elephant Transit Home.", SI: "ඇත් අතුරු සෙවණ." }], hiddenEchoes: { EN: "Reservoir views.", SI: "ජලාශ දර්ශන." }, location: "Ratnapura", coordinates: { x: 58.2, y: 88.5 }
  },
  { 
    id: "wilpattu", name: { EN: "Wilpattu", SI: "විල්පත්තු" }, category: "wildlife", 
    image: "https://i.pinimg.com/1200x/a1/b2/c3/a1b2c3d4e5f6g7h8i9j0.jpg", 
    gallery: ["https://i.pinimg.com/1200x/1f/61/a5/1f61a5f00d68b86b64e2dd496ba70d33.jpg"], 
    history: { EN: "Oldest and largest national park.", SI: "පැරණිතම සහ විශාලතම වනෝද්‍යානය." }, 
    shortStory: { EN: "Land of Lakes.", SI: "විල්ලු පිරි දේශය." }, bestTime: { EN: "Feb - Oct", SI: "පෙබ - ඔක්" }, tips: [{ EN: "Spot bears.", SI: "වලසුන් බලන්න." }], hiddenEchoes: { EN: "Kudiramalai point.", SI: "කුදිරමලෙයි තුඩුව." }, location: "Anuradhapura", coordinates: { x: 38.2, y: 28.5 }
  },
  { 
    id: "minneriya", name: { EN: "Minneriya", SI: "මින්නේරිය" }, category: "wildlife", 
    image: "https://i.pinimg.com/1200x/28/95/94/28959415856159f64b3a6f98073698b8.jpg", 
    gallery: ["https://i.pinimg.com/1200x/6e/89/3c/6e893cc10e527092921a2d48006e8b4e.jpg"], 
    history: { EN: "Famous for 'The Gathering' of elephants.", SI: "අලි රංචු එක්වන මහා රංචුව." }, 
    shortStory: { EN: "The Gathering.", SI: "අලි රංචුව." }, bestTime: { EN: "Aug - Oct", SI: "අගෝ - ඔක්" }, tips: [{ EN: "Afternoon safari.", SI: "සවස් කාලයේ සෆාරිය." }], hiddenEchoes: { EN: "Minneriya tank.", SI: "මින්නේරිය වැව." }, location: "Polonnaruwa", coordinates: { x: 65.5, y: 34.2 }
  },
  { 
    id: "kumana", name: { EN: "Kumana", SI: "කුමන" }, category: "wildlife", 
    image: "https://i.pinimg.com/1200x/44/d5/78/44d578cb5b3d6f8e558f3e07eb45a5a5.jpg", 
    gallery: ["https://i.pinimg.com/1200x/a1/b2/c3/a1b2c3d4e5f6g7h8i9j0.jpg"], 
    history: { EN: "Sri Lanka's premier bird sanctuary.", SI: "ප්‍රධානතම පක්ෂි අභයභූමිය." }, 
    shortStory: { EN: "Avian Paradise.", SI: "පක්ෂි පාරාදීසය." }, bestTime: { EN: "Apr - Jul", SI: "අප්‍රේ - ජූලි" }, tips: [{ EN: "Bring binoculars.", SI: "දුරදක්න රැගෙන යන්න." }], hiddenEchoes: { EN: "Mangroves.", SI: "කඩොලාන." }, location: "Ampara", coordinates: { x: 88.5, y: 88.5 }
  },
  { 
    id: "bundala", name: { EN: "Bundala", SI: "බුන්දල" }, category: "wildlife", 
    image: "https://i.pinimg.com/1200x/1f/61/a5/1f61a5f00d68b86b64e2dd496ba70d33.jpg", 
    gallery: ["https://i.pinimg.com/1200x/44/d5/78/44d578cb5b3d6f8e558f3e07eb45a5a5.jpg"], 
    history: { EN: "Important wetland for flamingos.", SI: "සියක්කාරයින් සිටින වැදගත් තෙත්බිමක්." }, 
    shortStory: { EN: "Flamingo Flats.", SI: "සියක්කාර විල්ලුව." }, bestTime: { EN: "Dec - Mar", SI: "දෙසැ - මාර්" }, tips: [{ EN: "Migරටරි season.", SI: "සංක්‍රමණික කාලය." }], hiddenEchoes: { EN: "Salt pans.", SI: "ලුණු ලේවායන්." }, location: "Hambantota", coordinates: { x: 74, y: 92 }
  },
  { 
    id: "sinharaja", name: { EN: "Sinharaja Forest", SI: "සිංහරාජය" }, category: "wildlife", 
    image: "https://i.pinimg.com/1200x/28/95/94/28959415856159f64b3a6f98073698b8.jpg", 
    gallery: ["https://i.pinimg.com/1200x/1f/61/a5/1f61a5f00d68b86b64e2dd496ba70d33.jpg"], 
    history: { EN: "UNESCO rainforest with endemic species.", SI: "යුනෙස්කෝ වැසි වනාන්තරය." }, 
    shortStory: { EN: "Virgin Rainforest.", SI: "කන්‍යා වනාන්තරය." }, bestTime: { EN: "Jan - Mar", SI: "ජන - මාර්" }, tips: [{ EN: "Leech protection.", SI: "කූඩැල්ලන්ගෙන් ප්‍රවේශම් වන්න." }], hiddenEchoes: { EN: "Rare birds.", SI: "දුර්ලභ පක්ෂීන්." }, location: "Ratnapura", coordinates: { x: 42, y: 85 }
  },
  { 
    id: "wasgamuwa", name: { EN: "Wasgamuwa", SI: "වස්ගමුව" }, category: "wildlife", 
    image: "https://i.pinimg.com/1200x/6e/89/3c/6e893cc10e527092921a2d48006e8b4e.jpg", 
    gallery: ["https://i.pinimg.com/1200x/a1/b2/c3/a1b2c3d4e5f6g7h8i9j0.jpg"], 
    history: { EN: "Park for bears and elephants.", SI: "වලසුන් සහ අලින් සඳහා ප්‍රසිද්ධයි." }, 
    shortStory: { EN: "Bear Country.", SI: "වලසුන්ගේ දේශය." }, bestTime: { EN: "Feb - May", SI: "පෙබ - මැයි" }, tips: [{ EN: "Rugged terrain.", SI: "දුෂ්කර මාවත්." }], hiddenEchoes: { EN: "Buduruwagala ruins.", SI: "බුදුරුවගල නටබුන්." }, location: "Matale", coordinates: { x: 62, y: 48 }
  },
  { 
    id: "pigeon-island", name: { EN: "Pigeon Island", SI: "පරෙවි දූපත" }, category: "wildlife", 
    image: "https://i.pinimg.com/1200x/70/e8/70/70e8707049ddc10b8e15963b08bcfbf7.jpg", 
    gallery: ["https://i.pinimg.com/1200x/6e/8c/8e/6e8c8e2f8e1a8e1a.jpg"], 
    history: { EN: "Marine national park for reef sharks.", SI: "සාගර ජීවීන් සහිත ජාතික උද්‍යානය." }, 
    shortStory: { EN: "Shark Snorkel.", SI: "මෝරුන් සමඟ කිමිදීම." }, bestTime: { EN: "May - Sep", SI: "මැයි - සැප්" }, tips: [{ EN: "Go early morning.", SI: "උදෑසනම යන්න." }], hiddenEchoes: { EN: "Soft corals.", SI: "මෘදු කොරල්." }, location: "Trincomalee", coordinates: { x: 79, y: 24 }
  },
  { 
    id: "horton-plains-wild", name: { EN: "Horton Plains", SI: "හෝර්ටන් තැන්න" }, category: "wildlife", 
    image: "https://i.pinimg.com/1200x/1f/61/a5/1f61a5f00d68b86b64e2dd496ba70d33.jpg", 
    gallery: ["https://i.pinimg.com/1200x/28/95/94/28959415856159f64b3a6f98073698b8.jpg"], 
    history: { EN: "Highland plateau with unique Sambar deer.", SI: "සමිබර් මුවන්ට ප්‍රසිද්ධ සානුවකි." }, 
    shortStory: { EN: "Highland Fauna.", SI: "කඳුකර ජීවීන්." }, bestTime: { EN: "Jan - Mar", SI: "ජන - මාර්" }, tips: [{ EN: "Silent trek.", SI: "නිහඬ ගමනක්." }], hiddenEchoes: { EN: "Bear monkey.", SI: "වලස් රිළවා." }, location: "Nuwara Eliya", coordinates: { x: 55, y: 72 }
  },

  // --- HILLS (10) ---
  { 
    id: "ella", name: { EN: "Ella", SI: "ඇල්ල" }, category: "mountains", 
    image: "https://i.pinimg.com/1200x/2a/db/ca/2adbcad028de103fd2b5215aeda8546c.jpg", 
    gallery: ["https://i.pinimg.com/1200x/df/76/85/df76856a94e824c965e6484e55447600.jpg"], 
    history: { EN: "Scenic mountain village with gap views.", SI: "ඇල්ල කපොල්ල සහිත සුන්දර ගම්මානය." }, 
    shortStory: { EN: "Ella Gap.", SI: "ඇල්ල කපොල්ල." }, bestTime: { EN: "Jan - Mar", SI: "ජන - මාර්" }, tips: [{ EN: "Hike Little Adams.", SI: "පුංචි ශ්‍රී පාදය නගින්න." }], hiddenEchoes: { EN: "Ravana falls.", SI: "රාවණා ඇල්ල." }, location: "Badulla", coordinates: { x: 64, y: 74 }
  },
  { 
    id: "nuwara-eliya", name: { EN: "Nuwara Eliya", SI: "නුවරඑළිය" }, category: "mountains", 
    image: "https://i.pinimg.com/1200x/47/cc/a0/47cca06e7d0433c00f458f87621f939b.jpg", 
    gallery: ["https://i.pinimg.com/1200x/62/37/94/62379479c467c8446304bb00e16f9955.jpg"], 
    history: { EN: "Known as Little England.", SI: "පුංචි එංගලන්තය." }, 
    shortStory: { EN: "Emerald Highland.", SI: "හරිත කඳුකරය." }, bestTime: { EN: "April", SI: "අප්‍රේල්" }, tips: [{ EN: "Tea factory tour.", SI: "තේ කර්මාන්තශාලා බලන්න." }], hiddenEchoes: { EN: "Lake Gregory.", SI: "ග්‍රෙගරි වැව." }, location: "Nuwara Eliya", coordinates: { x: 58.8, y: 65.2 }
  },
  { 
    id: "haputale", name: { EN: "Haputale", SI: "හපුතලේ" }, category: "mountains", 
    image: "https://i.pinimg.com/1200x/17/a0/96/17a09604e86af9165b342d699ef24c0a.jpg", 
    gallery: ["https://i.pinimg.com/1200x/df/76/85/df76856a94e824c965e6484e55447600.jpg"], 
    history: { EN: "Town on the southern edge of hills.", SI: "කඳුකරයේ දකුණු කෙළවරේ නගරයකි." }, 
    shortStory: { EN: "Lipton's Seat.", SI: "ලිප්ටන් සීට්." }, bestTime: { EN: "Jan - Mar", SI: "ජන - මාර්" }, tips: [{ EN: "Early sunrise.", SI: "පාන්දර හිරු උදාව." }], hiddenEchoes: { EN: "Adisham Bungalow.", SI: "අඩිෂම් බංගලාව." }, location: "Badulla", coordinates: { x: 62.8, y: 78.2 }
  },
  { 
    id: "adams-peak", name: { EN: "Adam's Peak", SI: "ශ්‍රී පාදය" }, category: "mountains", 
    image: "https://i.pinimg.com/1200x/2a/db/ca/2adbcad028de103fd2b5215aeda8546c.jpg", 
    gallery: ["https://i.pinimg.com/1200x/17/a0/96/17a09604e86af9165b342d699ef24c0a.jpg"], 
    history: { EN: "Sacred mountain with a footprint.", SI: "සිරිපා සලකුණ සහිත පූජනීය කන්ද." }, 
    shortStory: { EN: "Sacred Stairway.", SI: "පූජනීය මාවත." }, bestTime: { EN: "Dec - May", SI: "දෙසැ - මැයි" }, tips: [{ EN: "Climb at night.", SI: "රාත්‍රියේ නගින්න." }], hiddenEchoes: { EN: "Triangular shadow.", SI: "ත්‍රිකෝණාකාර සෙවනැල්ල." }, location: "Ratnapura", coordinates: { x: 52, y: 75 }
  },
  { 
    id: "badulla-demodara", name: { EN: "Demodara", SI: "දෙමෝදර" }, category: "mountains", 
    image: "https://i.pinimg.com/1200x/df/76/85/df76856a94e824c965e6484e55447600.jpg", 
    gallery: ["https://i.pinimg.com/1200x/47/cc/a0/47cca06e7d0433c00f458f87621f939b.jpg"], 
    history: { EN: "Engineering marvel of the railway.", SI: "දුම්රිය මගෙහි ඉංජිනේරු විස්මයකි." }, 
    shortStory: { EN: "Loop Tunnel.", SI: "දුම්රිය වටය." }, bestTime: { EN: "Jan - Mar", SI: "ජන - මාර්" }, tips: [{ EN: "Wait for the train.", SI: "දුම්රිය එනතුරු ඉන්න." }], hiddenEchoes: { EN: "Demodara loop.", SI: "දෙමෝදර ලූපය." }, location: "Badulla", coordinates: { x: 68, y: 74 }
  },
  { 
    id: "hanthana", name: { EN: "Hanthana Hills", SI: "හන්තාන කඳුපන්තිය" }, category: "mountains", 
    image: "https://i.pinimg.com/1200x/17/a0/96/17a09604e86af9165b342d699ef24c0a.jpg", 
    gallery: ["https://i.pinimg.com/1200x/df/76/85/df76856a94e824c965e6484e55447600.jpg"], 
    history: { EN: "Popular trekking range near Kandy.", SI: "මහනුවර අසල ජනප්‍රිය කඳුපන්තියකි." }, 
    shortStory: { EN: "Student Peak.", SI: "ශිෂ්‍ය කඳු මුදුන." }, bestTime: { EN: "Dry season", SI: "වියළි කාලය" }, tips: [{ EN: "Tea museum nearby.", SI: "තේ කෞතුකාගාරය අසලයි." }], hiddenEchoes: { EN: "University views.", SI: "සරසවි දර්ශන." }, location: "Kandy", coordinates: { x: 57, y: 53 }
  },
  { 
    id: "hatton", name: { EN: "Hatton", SI: "හැටන්" }, category: "mountains", 
    image: "https://i.pinimg.com/1200x/df/76/85/df76856a94e824c965e6484e55447600.jpg", 
    gallery: ["https://i.pinimg.com/1200x/47/cc/a0/47cca06e7d0433c00f458f87621f939b.jpg"], 
    history: { EN: "Gateway to Adam's Peak.", SI: "ශ්‍රී පාදස්ථානයේ ද්වාරයයි." }, 
    shortStory: { EN: "Tea Heartland.", SI: "තේ කලාපය." }, bestTime: { EN: "Dec - Mar", SI: "දෙසැ - මාර්" }, tips: [{ EN: "Castlereagh lake.", SI: "කාසල්රී වැව." }], hiddenEchoes: { EN: "Colonial bungalows.", SI: "යටත් විජිත බංගලා." }, location: "Hatton", coordinates: { x: 54, y: 68 }
  },
  { 
    id: "bandarawela", name: { EN: "Bandarawela", SI: "බණ්ඩාරවෙල" }, category: "mountains", 
    image: "https://i.pinimg.com/1200x/47/cc/a0/47cca06e7d0433c00f458f87621f939b.jpg", 
    gallery: ["https://i.pinimg.com/1200x/62/37/94/62379479c467c8446304bb00e16f9955.jpg"], 
    history: { EN: "Town with a perfect mild climate.", SI: "හිතකර දේශගුණයක් සහිත නගරයකි." }, 
    shortStory: { EN: "Mellow Heights.", SI: "සන්සුන් කඳුකරය." }, bestTime: { EN: "Jan - Apr", SI: "ජන - අප්‍රේ" }, tips: [{ EN: "Ancient temples.", SI: "පැරණි විහාර." }], hiddenEchoes: { EN: "Railway views.", SI: "දුම්රිය දර්ශන." }, location: "Badulla", coordinates: { x: 63, y: 77 }
  },
  { 
    id: "pidurutalagala", name: { EN: "Pidurutalagala", SI: "පිදුරුතලාගල" }, category: "mountains", 
    image: "https://i.pinimg.com/1200x/17/a0/96/17a09604e86af9165b342d699ef24c0a.jpg", 
    gallery: ["https://i.pinimg.com/1200x/df/76/85/df76856a94e824c965e6484e55447600.jpg"], 
    history: { EN: "Highest point in Sri Lanka.", SI: "ශ්‍රී ලංකාවේ උසම ස්ථානය." }, 
    shortStory: { EN: "The Apex.", SI: "මුදුන." }, bestTime: { EN: "Year round", SI: "වසර පුරා" }, tips: [{ EN: "Passes required.", SI: "අවසර පත්‍ර අවශ්‍යයි." }], hiddenEchoes: { EN: "Cloud forest.", SI: "වලාකුළු වනාන්තරය." }, location: "Nuwara Eliya", coordinates: { x: 60, y: 64 }
  },
  { 
    id: "deniyaya", name: { EN: "Deniyaya", SI: "දෙණියාය" }, category: "mountains", 
    image: "https://i.pinimg.com/1200x/2a/db/ca/2adbcad028de103fd2b5215aeda8546c.jpg", 
    gallery: ["https://i.pinimg.com/1200x/df/76/85/df76856a94e824c965e6484e55447600.jpg"], 
    history: { EN: "Southern entrance to Sinharaja.", SI: "සිංහරාජයේ දකුණු ද්වාරය." }, 
    shortStory: { EN: "Green Slopes.", SI: "හරිත බෑවුම්." }, bestTime: { EN: "Jan - Mar", SI: "ජන - මාර්" }, tips: [{ EN: "Stay in eco-lodges.", SI: "පරිසර හිතකාමී තැන්වල නවතින්න." }], hiddenEchoes: { EN: "Patna view point.", SI: "පැට්නා දර්ශන පථය." }, location: "Matara", coordinates: { x: 45, y: 88 }
  },

  // --- WATERFALLS (10) ---
  { 
    id: "diyaluma", name: { EN: "Diyaluma Falls", SI: "දියලුම දියඇල්ල" }, category: "waterfalls", 
    image: "https://i.pinimg.com/1200x/51/44/83/514483127413f72f273478c3.jpg", 
    gallery: ["https://i.pinimg.com/1200x/31/5d/4c/315d4cf48f86f3792032e367468112c8.jpg"], 
    history: { EN: "Second highest fall in Lanka.", SI: "ලංකාවේ දෙවන උසම දියඇල්ල." }, 
    shortStory: { EN: "Vertical River.", SI: "කඳු මුදුනේ ගංගාව." }, bestTime: { EN: "Jan - Aug", SI: "ජන - අගෝ" }, tips: [{ EN: "Pools at top.", SI: "ඉහළ තටාකවල නාන්න." }], hiddenEchoes: { EN: "Upper Diyaluma.", SI: "ඉහළ දියලුම." }, location: "Badulla", coordinates: { x: 68.5, y: 82.2 }
  },
  { 
    id: "dunhinda", name: { EN: "Dunhinda Falls", SI: "දුන්හිඳ දියඇල්ල" }, category: "waterfalls", 
    image: "https://i.pinimg.com/1200x/b1/c2/d3/b1c2d3e4f5g6h7i8j9k0.jpg", 
    gallery: ["https://i.pinimg.com/1200x/51/44/83/514483127413f72f273478c3.jpg"], 
    history: { EN: "Named for its smoky mist.", SI: "මීදුම් දුමාරයට ප්‍රසිද්ධයි." }, 
    shortStory: { EN: "Smoky Cascade.", SI: "දුමාරයෙන් පිරි දියවර." }, bestTime: { EN: "Jun - Jul", SI: "ජූනි - ජූලි" }, tips: [{ EN: "Walk the path.", SI: "මාවත දිගේ ඇවිදින්න." }], hiddenEchoes: { EN: "Monkeys on trail.", SI: "මාවතේ සිටින රිළවුන්." }, location: "Badulla", coordinates: { x: 68.2, y: 72.2 }
  },
  { 
    id: "bambarakanda", name: { EN: "Bambarakanda Falls", SI: "බඹර කන්ද" }, category: "waterfalls", 
    image: "https://i.pinimg.com/1200x/51/44/83/514483127413f72f273478c3.jpg", 
    gallery: ["https://i.pinimg.com/1200x/31/5d/4c/315d4cf48f86f3792032e367468112c8.jpg"], 
    history: { EN: "Highest waterfall in Sri Lanka.", SI: "ශ්‍රී ලංකාවේ උසම දියඇල්ල." }, 
    shortStory: { EN: "Giant Cascade.", SI: "මහා දියඇල්ල." }, bestTime: { EN: "Mar - May", SI: "මාර් - මැයි" }, tips: [{ EN: "Pine forest trail.", SI: "පයින් වනාන්තර මාවත." }], hiddenEchoes: { EN: "Lanka Ella.", SI: "ලංකා ඇල්ල." }, location: "Badulla", coordinates: { x: 61.5, y: 81.2 }
  },
  { 
    id: "laxapana", name: { EN: "Laxapana Falls", SI: "ලක්ෂපාන" }, category: "waterfalls", 
    image: "https://i.pinimg.com/1200x/ce/b7/d6/ceb7d6e0eba3935d85da2d37f1ee8875.jpg", 
    gallery: ["https://i.pinimg.com/1200x/b1/c2/d3/b1c2d3e4f5g6h7i8j9k0.jpg"], 
    history: { EN: "Legendary spot of Buddha's robe.", SI: "බුදුහිමි සිවුර මැසූ තැන." }, 
    shortStory: { EN: "Saffron Veil.", SI: "බුදුදහම බැඳුණු දියවර." }, bestTime: { EN: "Sep - Nov", SI: "සැප් - නොවැ" }, tips: [{ EN: "Powerful flow.", SI: "ප්‍රබල දිය පහරකි." }], hiddenEchoes: { EN: "Power plant nearby.", SI: "ජල විදුලි බලාගාරය." }, location: "Nuwara Eliya", coordinates: { x: 56.5, y: 68.2 }
  },
  { 
    id: "bakers-falls", name: { EN: "Baker's Falls", SI: "බේකර්ස් ඇල්ල" }, category: "waterfalls", 
    image: "https://i.pinimg.com/1200x/31/5d/4c/315d4cf48f86f3792032e367468112c8.jpg", 
    gallery: ["https://i.pinimg.com/1200x/51/44/83/514483127413f72f273478c3.jpg"], 
    history: { EN: "Located inside Horton Plains.", SI: "හෝර්ටන් තැන්න තුළ පිහිටා ඇත." }, 
    shortStory: { EN: "Fern Haven.", SI: "පර්ණාංග පාරාදීසය." }, bestTime: { EN: "Jan - Mar", SI: "ජන - මාර්" }, tips: [{ EN: "Cold water.", SI: "අධික සීතල ජලය." }], hiddenEchoes: { EN: "World's End.", SI: "ලෝකාන්තය." }, location: "Nuwara Eliya", coordinates: { x: 55.5, y: 72.8 }
  },
  { 
    id: "ravana-falls", name: { EN: "Ravana Falls", SI: "රාවණා ඇල්ල" }, category: "waterfalls", 
    image: "https://i.pinimg.com/1200x/51/44/83/514483127413f72f273478c3.jpg", 
    gallery: ["https://i.pinimg.com/1200x/31/5d/4c/315d4cf48f86f3792032e367468112c8.jpg"], 
    history: { EN: "Linked to the epic Ramayana.", SI: "රාමායනය හා බැඳුණු දියඇල්ල." }, 
    shortStory: { EN: "Epic Flow.", SI: "පුරාවෘත්ත දියවර." }, bestTime: { EN: "Dry season", SI: "වියළි කාලය" }, tips: [{ EN: "Roadside view.", SI: "පාර අයිනේ පිහිටා ඇත." }], hiddenEchoes: { EN: "Ravana caves.", SI: "රාවණා ගුහා." }, location: "Badulla", coordinates: { x: 64.5, y: 74.5 }
  },
  { 
    id: "st-clairs", name: { EN: "St. Clair's Falls", SI: "සෙන්ට් ක්ලෙයාර්" }, category: "waterfalls", 
    image: "https://i.pinimg.com/1200x/ce/b7/d6/ceb7d6e0eba3935d85da2d37f1ee8875.jpg", 
    gallery: ["https://i.pinimg.com/1200x/51/44/83/514483127413f72f273478c3.jpg"], 
    history: { EN: "Little Niagara of Sri Lanka.", SI: "ශ්‍රී ලංකාවේ නයගරා ඇල්ල." }, 
    shortStory: { EN: "Tea Valley Fall.", SI: "තේ මිටියාවතේ ඇල්ල." }, bestTime: { EN: "Nov - Jan", SI: "නොවැ - ජන" }, tips: [{ EN: "Great view from road.", SI: "පාරේ සිට හොඳින් පෙනේ." }], hiddenEchoes: { EN: "Kotmale Oya.", SI: "කොත්මලේ ඔය." }, location: "Nuwara Eliya", coordinates: { x: 53.5, y: 69.2 }
  },
  { 
    id: "devon-falls", name: { EN: "Devon Falls", SI: "ඩෙවොන් ඇල්ල" }, category: "waterfalls", 
    image: "https://i.pinimg.com/1200x/ce/b7/d6/ceb7d6e0eba3935d85da2d37f1ee8875.jpg", 
    gallery: ["https://i.pinimg.com/1200x/31/5d/4c/315d4cf48f86f3792032e367468112c8.jpg"], 
    history: { EN: "Named after an English planter.", SI: "එංගලන්ත වැවිලිකරුවෙකුගේ නමින්." }, 
    shortStory: { EN: "Planter's View.", SI: "වැවිලිකරුවාගේ දර්ශනය." }, bestTime: { EN: "Jan - Apr", SI: "ජන - අප්‍රේ" }, tips: [{ EN: "Devon tea centre.", SI: "ඩෙවොන් තේ මධ්‍යස්ථානය." }], hiddenEchoes: { EN: "Misty heights.", SI: "මීදුම් මුදුන්." }, location: "Nuwara Eliya", coordinates: { x: 54, y: 69.5 }
  },
  { 
    id: "aberdeen-falls", name: { EN: "Aberdeen Falls", SI: "ඇබර්ඩීන් ඇල්ල" }, category: "waterfalls", 
    image: "https://i.pinimg.com/1200x/b1/c2/d3/b1c2d3e4f5g6h7i8j9k0.jpg", 
    gallery: ["https://i.pinimg.com/1200x/51/44/83/514483127413f72f273478c3.jpg"], 
    history: { EN: "Split into two distinct cascades.", SI: "කොටස් දෙකකට වෙන්වූ ඇල්ලකි." }, 
    shortStory: { EN: "Twin Cascade.", SI: "නිවුන් දියඇල්ල." }, bestTime: { EN: "Sep - Dec", SI: "සැප් - දෙසැ" }, tips: [{ EN: "Moderate hike.", SI: "තරමක් වෙහෙසකර ගමනක්." }], hiddenEchoes: { EN: "Natural pools.", SI: "ස්වභාවික තටාක." }, location: "Nuwara Eliya", coordinates: { x: 55, y: 67 }
  },
  { 
    id: "bopath-ella", name: { EN: "Bopath Ella", SI: "බෝපත් ඇල්ල" }, category: "waterfalls", 
    image: "https://i.pinimg.com/1200x/ce/b7/d6/ceb7d6e0eba3935d85da2d37f1ee8875.jpg", 
    gallery: ["https://i.pinimg.com/1200x/51/44/83/514483127413f72f273478c3.jpg"], 
    history: { EN: "Shaped like a sacred Bo-leaf.", SI: "බෝ පතක හැඩය ගනී." }, 
    shortStory: { EN: "Sacred Shape.", SI: "පූජනීය හැඩය." }, bestTime: { EN: "Jan - Mar", SI: "ජන - මාර්" }, tips: [{ EN: "Busy on weekends.", SI: "සති අන්තයේ පිරිස වැඩියි." }], hiddenEchoes: { EN: "Kuru Ganga.", SI: "කුරු ගඟ." }, location: "Ratnapura", coordinates: { x: 48, y: 83 }
  },

  // --- CAMPING (10) ---
  { 
    id: "knuckles", name: { EN: "Knuckles Range", SI: "නකල්ස්" }, category: "camping", 
    image: "https://i.pinimg.com/1200x/3c/e7/1d/3ce71da2719ec9d9722d7cecc2599902.jpg", 
    gallery: ["https://i.pinimg.com/1200x/44/3d/11/443d119fd96076ec9c9d6f493f36930a.jpg"], 
    history: { EN: "UNESCO cloud forest and peak range.", SI: "යුනෙස්කෝ වලාකුළු වනාන්තරය." }, 
    shortStory: { EN: "Primal Wilderness.", SI: "වනගත නිහඬතාවය." }, bestTime: { EN: "Jun - Sep", SI: "ජූනි - සැප්" }, tips: [{ EN: "Hire a guide.", SI: "මඟ පෙන්වන්නෙකු ගන්න." }], hiddenEchoes: { EN: "Meemure village.", SI: "මීමුරේ ගම්මානය." }, location: "Kandy", coordinates: { x: 60.5, y: 48.2 }
  },
  { 
    id: "belihuloya", name: { EN: "Belihuloya", SI: "බෙලිහුල්ඔය" }, category: "camping", 
    image: "https://i.pinimg.com/1200x/3c/e7/1d/3ce71da2719ec9d9722d7cecc2599902.jpg", 
    gallery: ["https://i.pinimg.com/1200x/12/1c/34/121c341013b15a2464832daffe0e6887.jpg"], 
    history: { EN: "Perfect transition zone for camping.", SI: "කඳවුරු බැඳීමට ඉතා සුදුසුයි." }, 
    shortStory: { EN: "River and Ridge.", SI: "ගංගා සහ කඳුවැටි." }, bestTime: { EN: "Jun - Sep", SI: "ජූනි - සැප්" }, tips: [{ EN: "Cold river bath.", SI: "ගංගාවේ සීතල නෑම." }], hiddenEchoes: { EN: "Pahanthudawa falls.", SI: "පහන්තුඩාව ඇල්ල." }, location: "Ratnapura", coordinates: { x: 55.5, y: 84.2 }
  },
  { 
    id: "riverston", name: { EN: "Riverston", SI: "රිවර්ස්ටන්" }, category: "camping", 
    image: "https://i.pinimg.com/1200x/12/1c/34/121c341013b15a2464832daffe0e6887.jpg", 
    gallery: ["https://i.pinimg.com/1200x/9e/5d/d9/9e5dd96b4581dcd01c7cbd904e429ac8.jpg"], 
    history: { EN: "Windy peak with mini Worlds End.", SI: "කුඩා ලෝකාන්තයක් සහිත සුළං කන්ද." }, 
    shortStory: { EN: "Mist Peak.", SI: "මීදුම් කන්ද." }, bestTime: { EN: "Jan - Mar", SI: "ජන - මාර්" }, tips: [{ EN: "Very windy.", SI: "අධික සුළං පවතී." }], hiddenEchoes: { EN: "The Gap.", SI: "කපොල්ල." }, location: "Matale", coordinates: { x: 58, y: 46 }
  },
  { 
    id: "meemure", name: { EN: "Meemure", SI: "මීමුරේ" }, category: "camping", 
    image: "https://i.pinimg.com/1200x/3c/e7/1d/3ce71da2719ec9d9722d7cecc2599902.jpg", 
    gallery: ["https://i.pinimg.com/1200x/42/94/35/42943576f46ac5797b3d2d8a1403f3f6.jpg"], 
    history: { EN: "Most isolated village in Lanka.", SI: "හුදකලාම ගම්මානයකි." }, 
    shortStory: { EN: "Isolation Peak.", SI: "හුදකලා අසිරිය." }, bestTime: { EN: "Jun - Sep", SI: "ජූනි - සැප්" }, tips: [{ EN: "No signal.", SI: "දුරකථන සංඥා නැත." }], hiddenEchoes: { EN: "Lakegala mountain.", SI: "ලකේගල කන්ද." }, location: "Matale", coordinates: { x: 62, y: 49 }
  },
  { 
    id: "kitulgala", name: { EN: "Kitulgala", SI: "කිතුල්ගල" }, category: "camping", 
    image: "https://i.pinimg.com/1200x/9e/5d/d9/9e5dd96b4581dcd01c7cbd904e429ac8.jpg", 
    gallery: ["https://i.pinimg.com/1200x/44/3d/11/443d119fd96076ec9c9d6f493f36930a.jpg"], 
    history: { EN: "Adventure hub for rafting.", SI: "වික්‍රමාන්විත ජල ක්‍රීඩා මධ්‍යස්ථානය." }, 
    shortStory: { EN: "Rapid River.", SI: "වේගවත් දියවර." }, bestTime: { EN: "Jan - Apr", SI: "ජන - අප්‍රේ" }, tips: [{ EN: "White water rafting.", SI: "රැෆ්ටින් කරන්න." }], hiddenEchoes: { EN: "Belilena caves.", SI: "බෙලිලෙන ගුහා." }, location: "Kegalle", coordinates: { x: 48, y: 70 }
  },
  { 
    id: "ohiya-camping", name: { EN: "Ohiya", SI: "ඔහිය" }, category: "camping", 
    image: "https://i.pinimg.com/1200x/12/1c/34/121c341013b15a2464832daffe0e6887.jpg", 
    gallery: ["https://i.pinimg.com/1200x/3c/e7/1d/3ce71da2719ec9d9722d7cecc2599902.jpg"], 
    history: { EN: "Highland camp near rail tracks.", SI: "දුම්රිය මග අසල කඳුකර කඳවුරු." }, 
    shortStory: { EN: "Rail Ridge.", SI: "දුම්රිය කඳුවැටිය." }, bestTime: { EN: "Jan - Mar", SI: "ජන - මාර්" }, tips: [{ EN: "Cold nights.", SI: "සීතල රාත්‍රීන්." }], hiddenEchoes: { EN: "Udaweriya estate.", SI: "උඩවේරිය තේ වත්ත." }, location: "Badulla", coordinates: { x: 59, y: 76 }
  },
  { 
    id: "gal-oya", name: { EN: "Gal Oya", SI: "ගල් ඔය" }, category: "camping", 
    image: "https://i.pinimg.com/1200x/42/94/35/42943576f46ac5797b3d2d8a1403f3f6.jpg", 
    gallery: ["https://i.pinimg.com/1200x/9e/5d/d9/9e5dd96b4581dcd01c7cbd904e429ac8.jpg"], 
    history: { EN: "Safari camping near water.", SI: "ජලාශය අසල වනගත කඳවුරු." }, 
    shortStory: { EN: "Swim Safari.", SI: "පිහිනන අලි බලන්න." }, bestTime: { EN: "May - Sep", SI: "මැයි - සැප්" }, tips: [{ EN: "Boat safari.", SI: "බෝට්ටු සෆාරිය." }], hiddenEchoes: { EN: "Aadi Palli.", SI: "ආදි පල්ලි." }, location: "Ampara", coordinates: { x: 80, y: 65 }
  },
  { 
    id: "madulsima", name: { EN: "Madulsima", SI: "මඩුල්සීම" }, category: "camping", 
    image: "https://i.pinimg.com/1200x/12/1c/34/121c341013b15a2464832daffe0e6887.jpg", 
    gallery: ["https://i.pinimg.com/1200x/42/94/35/42943576f46ac5797b3d2d8a1403f3f6.jpg"], 
    history: { EN: "Famous for the Mini Worlds End.", SI: "පුංචි ලෝකාන්තයට ප්‍රසිද්ධයි." }, 
    shortStory: { EN: "Edge Camp.", SI: "කෙළවරේ කඳවුර." }, bestTime: { EN: "Jan - Mar", SI: "ජන - මාර්" }, tips: [{ EN: "Cliff edge safety.", SI: "පවුර කෙළවරේ පරෙස්සම් වන්න." }], hiddenEchoes: { EN: "Pitamaruwa gap.", SI: "පිටමාරුව කපොල්ල." }, location: "Badulla", coordinates: { x: 72, y: 72 }
  },
  { 
    id: "namunukula", name: { EN: "Namunukula", SI: "නමුණුකුල" }, category: "camping", 
    image: "https://i.pinimg.com/1200x/3c/e7/1d/3ce71da2719ec9d9722d7cecc2599902.jpg", 
    gallery: ["https://i.pinimg.com/1200x/9e/5d/d9/9e5dd96b4581dcd01c7cbd904e429ac8.jpg"], 
    history: { EN: "Highest peak in the Uva province.", SI: "ඌව පළාතේ උසම කන්ද." }, 
    shortStory: { EN: "Uva Peak.", SI: "ඌව කඳු මුදුන." }, bestTime: { EN: "Jan - Mar", SI: "ජන - මාර්" }, tips: [{ EN: "Cloudy summit.", SI: "වලාකුළු පිරි මුදුන." }], hiddenEchoes: { EN: "Waterfall views.", SI: "දියඇලි දර්ශන." }, location: "Badulla", coordinates: { x: 70, y: 78 }
  },
  { 
    id: "kalupahana", name: { EN: "Kalupahana", SI: "කළුපහණ" }, category: "camping", 
    image: "https://i.pinimg.com/1200x/12/1c/34/121c341013b15a2464832daffe0e6887.jpg", 
    gallery: ["https://i.pinimg.com/1200x/42/94/35/42943576f46ac5797b3d2d8a1403f3f6.jpg"], 
    history: { EN: "Entrance to high cascades.", SI: "දියඇලිවලට පිවිසෙන මගයි." }, 
    shortStory: { EN: "Cascade Base.", SI: "දියඇලි පාමුල." }, bestTime: { EN: "Mar - May", SI: "මාර් - මැයි" }, tips: [{ EN: "Sturdy boots.", SI: "හොඳ පාවහන් පළඳින්න." }], hiddenEchoes: { EN: "Devil's Staircase.", SI: "යක්ෂයාගේ පඩිපෙළ." }, location: "Badulla", coordinates: { x: 61, y: 80 }
  }
];

export const DESTINATIONS_DATA: Destination[] = BASE_DESTINATIONS.map(dest => ({
  ...dest,
  detailedAbout: ABOUT_DATA[dest.id] || { EN: "", SI: "" }
}));
