
import { Destination } from './types.ts';

export const DESTINATIONS_DATA: Destination[] = [
  { 
    id: "sigiriya", 
    name: { EN: "Sigiriya Lion Rock", SI: "සීගිරිය සිංහගිරිය" }, 
    category: "ancient", 
    image: "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1920&q=80", 
    gallery: [
      "https://images.unsplash.com/photo-1620054604245-566083771259?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501534159995-5b8c9ad9479b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602364481046-a5c6c3629932?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=1200&q=80"
    ], 
    videoUrl: "https://www.youtube.com/shorts/j4ln2UNOnZk", 
    history: { 
      EN: "Sigiriya, or 'Lion Rock,' is a staggering 200-meter-high ancient fortress and palace complex. Built in the 5th century by King Kasyapa, it is a masterclass in ancient urban planning, hydraulics, and art. The King chose this location as a strategic defense point against his brother Moggallana. The rock itself is a volcanic plug of an extinct volcano.\n\nTop 5 Things to See:\n1. The Water Gardens: Among the world's oldest landscaped gardens with gravity-fed fountains that still work during monsoons.\n2. The Mirror Wall: Ancient graffiti poems etched by visitors over 1,000 years ago.\n3. The Frescoes: Vibrant paintings of 'celestial maidens' surviving 1,500 years.\n4. The Lion’s Paws: Massive stone paws guarding the halfway point of the climb.\n5. The Sky Palace: Ruins of the upper palace with 360-degree jungle views.", 
      SI: "සීගිරිය, හෙවත් 'සිංහගිරිය', මීටර් 200ක් උසැති අතිවිශාල පැරණි බලකොටුවක් සහ මාලිගා සංකීර්ණයකි. 5 වන සියවසේදී කාශ්‍යප රජු විසින් ඉදිකරන ලද මෙය පැරණි නාගරික සැලසුම්කරණය, ජල විද්‍යාව සහ කලාව පිළිබඳ විශිෂ්ටතම නිදසුනකි. කාශ්‍යප රජු සිය සොහොයුරු මුගලන්ගෙන් ආරක්ෂා වීම සඳහා මෙම ස්ථානය තෝරා ගත්තේය." 
    }, 
    shortStory: { EN: "The 8th Wonder of the World.", SI: "ලොව අටවන පුදුමය." }, 
    bestTime: { EN: "December to April (Recommended climb at 6:30 AM)", SI: "දෙසැම්බර් සිට අප්‍රේල් දක්වා (උදෑසන 6:30 ට නැගීම වඩාත් සුදුසුයි)" }, 
    tips: [
      { EN: "Visit the Museum first for historical context before the climb.", SI: "නැගීමට පෙර ඓතිහාසික පසුබිම දැනගැනීම සඳහා කෞතුකාගාරය මුලින්ම නරඹන්න." },
      { EN: "Stay quiet near the Lion's Paws to avoid disturbing hornet nests.", SI: "බඹරුන් ඇවිස්සීම වැළැක්වීමට සිංහ පාදය අසලදී නිශ්ශබ්ද වන්න." },
      { EN: "Carry 1.5L of water and a hat; the summit has no shade.", SI: "වතුර ලීටර් 1.5ක් සහ තොප්පියක් රැගෙන යන්න; මුදුනේ සෙවන නොමැත." }
    ], 
    hiddenEchoes: { EN: "The Pidurangala rock nearby offers the most stunning sunset view facing Sigiriya.", SI: "අසල ඇති පින්දූරංගල පර්වතය සීගිරිය දෙසට මුහුණ ලා ඇති දර්ශනීයම හිරු බැස යන දසුන ලබා දෙයි." },
    location: "Matale", 
    coordinates: { x: 52, y: 38 } 
  },
  { 
    id: "ella", 
    name: { EN: "Ella Nine Arch Bridge", SI: "ආරුක්කු නවය පාලම" }, 
    category: "mountains", 
    image: "https://images.unsplash.com/photo-1578519050142-afb511e518de?auto=format&fit=crop&w=1920&q=80", 
    gallery: [
      "https://images.unsplash.com/photo-1578519050142-afb511e518de?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501534159995-5b8c9ad9479b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1620054604245-566083771259?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514483127413-f72f273478c3?auto=format&fit=crop&w=1200&q=80"
    ], 
    videoUrl: "https://www.youtube.com/shorts/3D-Y6V9G8iA", 
    history: { 
      EN: "The Nine Arch Bridge in Ella is one of the most iconic landmarks in Sri Lanka. Also known as the 'Bridge in the Sky,' it was built during the British colonial period in 1921. Legend says that the construction was halted due to the lack of steel during World War I, and local builders completed it using only bricks, rocks, and cement. It stands 80 feet high and is surrounded by lush green tea plantations.", 
      SI: "ඇල්ලේ පිහිටි ආරුක්කු නවය පාලම ශ්‍රී ලංකාවේ වඩාත් ප්‍රචලිත ස්ථානයකි. 'අහස් පාලම' ලෙසද හැඳින්වෙන මෙය 1921 දී බ්‍රිතාන්‍ය පාලන සමයේදී ඉදිකරන ලදී. පළමු ලොව යුද්ධය නිසා වානේ හිඟ වීම හේතුවෙන් දේශීය ඉංජිනේරුවන් මෙය ගඩොල් සහ කළුගල් පමණක් භාවිතා කරමින් නිම කළ බව ජනප්‍රවාදයේ පැවසේ." 
    }, 
    shortStory: { EN: "The Bridge in the Sky.", SI: "අහස පාලම." }, 
    bestTime: { EN: "January to May", SI: "ජනවාරි සිට මැයි දක්වා" }, 
    tips: [
      { EN: "Check the train schedule locally to time your visit when a train passes.", SI: "දුම්රියක් ගමන් කරන වේලාව කලින් දැනගෙන යෑමෙන් හොඳ දර්ශනයක් ලබාගත හැකිය." },
      { EN: "Walk through the jungle path from the main road for a more scenic trek.", SI: "ප්‍රධාන පාරේ සිට වනාන්තරය මැදින් වැටී ඇති මාවතේ ඇවිදීම වඩාත් සුන්දරය." }
    ], 
    hiddenEchoes: { EN: "The Demodara loop nearby is an engineering marvel where the railway line loops around a mountain.", SI: "අසල ඇති දෙමෝදර දුම්රිය වටරවුම කන්දක් වටා කැරකී යන ඉංජිනේරු විස්මිතයකි." },
    location: "Badulla", 
    coordinates: { x: 62, y: 72 } 
  },
  { 
    id: "galle-fort", 
    name: { EN: "Galle Dutch Fort", SI: "ගාල්ල ලන්දේසි කොටුව" }, 
    category: "ancient", 
    image: "https://images.unsplash.com/photo-1654561773591-57b9413c45c0?auto=format&fit=crop&w=1200&q=80", 
    gallery: [
      "https://images.unsplash.com/photo-1654561773591-57b9413c45c0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514483127413-f72f273478c3?auto=format&fit=crop&w=1200&q=80"
    ], 
    videoUrl: "https://www.youtube.com/shorts/5e_S5V5mRsc",
    history: { 
      EN: "Built first in 1588 by the Portuguese, then extensively fortified by the Dutch in the 17th century. The Galle Fort is a living heritage site with streets filled with colonial villas, museums, and chic boutiques overlooking the southern sea. It is a UNESCO World Heritage site and represents a unique interaction of European architecture and South Asian traditions.", 
      SI: "1588 දී පෘතුගීසීන් විසින් ප්‍රථමයෙන් ගොඩනගන ලද මෙය පසුව ලන්දේසීන් විසින් ශක්තිමත් කරන ලදී. ගාල්ල කොටුව අදටත් මිනිසුන් ජීවත් වන උරුමයක් වන අතර එහි පැරණි වීදි, කෞතුකාගාර සහ වෙරළ දර්ශනය ඉතා අලංකාරය." 
    }, 
    shortStory: { EN: "Where History Meets the Tide.", SI: "ඉතිහාසය සහ මුහුදු රළ හමුවන තැන." }, 
    bestTime: { EN: "December to April", SI: "දෙසැම්බර් සිට අප්‍රේල් දක්වා" }, 
    tips: [
      { EN: "Walk along the ramparts during sunset for breathtaking views.", SI: "හිරු බැස යන වේලාවේදී පවුර දිගේ ඇවිද යාම ඉතා අලංකාර අත්දැකීමකි." },
      { EN: "Visit the Dutch Reformed Church and the Old Lighthouse.", SI: "ලන්දේසි පල්ලිය සහ පැරණි ප්‍රදීපාගාරය නැරඹීමට අමතක නොකරන්න." }
    ], 
    hiddenEchoes: { EN: "The underground drainage system built by the Dutch still effectively prevents flooding in the fort.", SI: "ලන්දේසීන් නිමවූ භූගත කාණු පද්ධතිය අදටත් ඉතා හොඳින් ක්‍රියාත්මක වේ." },
    location: "Galle", 
    coordinates: { x: 40, y: 95 } 
  },
  { 
    id: "yapahuwa", 
    name: { EN: "Yapahuwa Rock Fortress", SI: "යාපහුව බලකොටුව" }, 
    category: "ancient", 
    image: "https://images.pexels.com/photos/32548024/pexels-photo-32548024.jpeg", 
    gallery: [
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=1200&q=80"
    ], 
    history: { 
      EN: "Yapahuwa was the 13th-century capital of Sri Lanka, built by King Buvanekabahu I to safeguard the Sacred Tooth Relic. It is world-renowned for its magnificent stone staircase, adorned with intricate carvings of lions, dancers, and musicians, rivaling the splendor of Sigiriya.", 
      SI: "13 වන සියවසේදී පළමුවන බුවනෙකබාහු රජු විසින් දළදා වහන්සේ ආරක්ෂා කිරීම සඳහා යාපහුව අගනුවර ලෙස තෝරා ගන්නා ලදී. මෙහි ඇති අලංකාර ශෛලමය පියගැටපෙළ සහ එහි ඇති සිංහ රූප, නර්තන ශිල්පීන්ගේ කැටයම් ලොව පුරා ප්‍රසිද්ධියට පත්ව ඇත්තේ සීගිරියේ අසිරිය සිහිපත් කරමිනි." 
    }, 
    shortStory: { EN: "The Stairway to Ancient Majesty.", SI: "අභිමානවත් අතීතයකට පියගැටපෙළ." }, 
    bestTime: { EN: "January to September", SI: "ජනවාරි සිට සැප්තැම්බර් දක්වා" }, 
    tips: [
      { EN: "The climb is steep; wear shoes with good grip.", SI: "පියගැටපෙළ ඉතා බෑවුම් සහිත බැවින් ලිස්සන්නේ නැති සපත්තු පළඳින්න්න." },
      { EN: "Don't miss the small museum at the base of the rock.", SI: "පර්වතය පාමුල ඇති කුඩා කෞතුකාගාරය නැරඹීමට අමතක නොකරන්න." }
    ], 
    hiddenEchoes: { EN: "The ornate stone lion carving here is one of the most accurate ancient sculptures in Asia.", SI: "මෙහි ඇති කැටයම් කරන ලද සිංහ රූපය ආසියාවේ ඇති නිවැරදිම පැරණි කැටයම්වලින් එකකි." },
    location: "Kurunegala", 
    coordinates: { x: 45, y: 40 } 
  },
  { 
    id: "anuradhapura", 
    name: { EN: "Anuradhapura Sacred City", SI: "අනුරාධපුර පූජනීය නගරය" }, 
    category: "ancient", 
    image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80", 
    gallery: [
      "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1656339952847-a360aee9273b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514483127413-f72f273478c3?auto=format&fit=crop&w=1200&q=80"
    ], 
    history: { 
      EN: "The first capital of Sri Lanka, established in the 4th century BC. It was a major center of Theravada Buddhism for centuries. The city is famous for its massive dagobas (stupas) like Ruwanwelisaya and Jetavanaramaya, which were once the largest structures in the world alongside the pyramids of Giza.", 
      SI: "ක්‍රි.පූ. 4 වන සියවසේදී පිහිටුවන ලද ශ්‍රී ලංකාවේ ප්‍රථම අගනුවරයි. සියවස් ගණනාවක් පුරා ථෙරවාදී බුදුදහමේ ප්‍රධාන මධ්‍යස්ථානයක් ලෙස මෙය පැවතුණි. රුවන්වැලිසෑය සහ ජේතවනාරාමය වැනි දැවැන්ත ස්තූපයන් සඳහා මෙය ලොව පුරා ප්‍රසිද්ධියක් උසුලයි." 
    }, 
    shortStory: { EN: "The Eternal Cradle of Faith.", SI: "ශ්‍රද්ධාවේ සදාකාලික තක්සලාව." }, 
    bestTime: { EN: "January to September", SI: "ජනවාරි සිට සැප්තැම්බර් දක්වා" }, 
    tips: [
      { EN: "Hire a bicycle to explore the vast ruins complex comfortably.", SI: "විශාල නටබුන් සංකීර්ණය ගවේෂණය කිරීමට බයිසිකලයක් කුලියට ගන්න." },
      { EN: "Visit the Sri Maha Bodhi, the oldest human-planted tree in the world.", SI: "ලොව පැරණිතම වගා කළ ශාකය වන ජය ශ්‍රී මහා බෝධීන් වහන්සේ වන්දනා කරන්න." }
    ], 
    hiddenEchoes: { EN: "The Star Gate (Sakwala Chakraya) engraving is a mysterious map found near the Tissa Wewa.", SI: "තිස්ස වැව අසල ඇති 'සක්වල චක්‍රය' තවමත් විසඳා නොමැති අභිරහස් සිතියමකි." },
    location: "Anuradhapura", 
    coordinates: { x: 50, y: 25 } 
  },
  { 
    id: "trincomalee", 
    name: { EN: "Trincomalee Whales", SI: "ත්‍රිකුණාමලය තල්මසුන්" }, 
    category: "beach", 
    image: "https://i.pinimg.com/1200x/ec/7d/64/ec7d6417e38e4425213e707b92d32d1b.jpg", 
    gallery: [
      "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501534159995-5b8c9ad9479b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80"
    ], 
    history: { EN: "Home to one of the world's finest natural harbors, Trincomalee is a coastal gem known for whale watching and the sacred Koneswaram temple.", SI: "ලොව විශිෂ්ටතම ස්වභාවික වරායකට හිමිකම් කියන ත්‍රිකුණාමලය, තල්මසුන් නැරඹීම සඳහා ප්‍රසිද්ධය." }, 
    shortStory: { EN: "The Deep Blue Horizon.", SI: "ගැඹුරු නිල් ක්ෂිතිජය." }, 
    bestTime: { EN: "May to September", SI: "මැයි සිට සැප්තැම්බර් දක්වා" }, 
    tips: [{ EN: "Take an early morning boat for whale sightings.", SI: "තල්මසුන් නැරඹීම සඳහා උදෑසනම බෝට්ටුවකට නැගෙන්න." }], 
    hiddenEchoes: { EN: "Pigeon Island nearby offers world-class snorkeling.", SI: "අසල ඇති පරෙවි දූපතේ කොරල් පර නැරඹීම ඉතා අගනේය." },
    location: "Trincomalee", 
    coordinates: { x: 75, y: 28 } 
  },
  { 
    id: "yala", 
    name: { EN: "Yala Leopard Zone", SI: "යාල දිවියන්ගේ අඩවිය" }, 
    category: "wildlife", 
    image: "https://images.unsplash.com/photo-1621847473222-d85c022cbf07?w=1600&auto=format&fit=crop&q=80", 
    gallery: [
      "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1621847473222-d85c022cbf07?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
    ], 
    history: { EN: "Yala National Park is the most famous wildlife sanctuary in Sri Lanka, boasting the highest leopard density in the world. It spans a vast area along the coast and inland, comprising semi-arid scrub forest and coastal wetlands.", SI: "ශ්‍රී ලංකාවේ ප්‍රමුඛතම වනෝද්‍යානය වන යාල, දිවියන් නැරඹීම සඳහා ලොව සුප්‍රසිද්ධය." }, 
    shortStory: { EN: "Where the Leopard Rules.", SI: "දිවියන් රජකරන අඩවිය." }, 
    bestTime: { EN: "February to June", SI: "පෙබරවාරි සිට ජූනි දක්වා" }, 
    tips: [{ EN: "Book a 4x4 safari with an experienced guide.", SI: "පළපුරුදු මඟපෙන්වන්නෙකු සමඟ සෆාරි ගමනක් යන්න." }], 
    hiddenEchoes: { EN: "Sithulpawwa Rock Temple inside the park is an ancient marvel.", SI: "උද්‍යානය තුළ පිහිටි සිතුල්පව්ව විහාරය පැරණි සිද්ධස්ථානයකි." },
    location: "Hambantota", 
    coordinates: { x: 78, y: 88 } 
  },
  { 
    id: "kandy-temple", 
    name: { EN: "Temple of the Tooth", SI: "ශ්‍රී දළදා මාළිගාව" }, 
    category: "ancient", 
    image: "https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?auto=format&fit=crop&w=1200&q=80", 
    gallery: [
      "https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80"
    ], 
    history: { EN: "The Sri Dalada Maligawa houses the sacred tooth relic of the Buddha, making it the holiest site in Sri Lanka. It was the last royal palace of the Kandyan Kingdom.", SI: "බුදුරජාණන් වහන්සේගේ ශ්‍රී දන්ත ධාතූන් වහන්සේ තැන්පත් කර ඇති මෙම ස්ථානය ලංකාවේ පූජනීයම ස්ථානයයි." }, 
    shortStory: { EN: "The Heart of Kandy.", SI: "මහනුවර පුරවරයේ හදවත." }, 
    bestTime: { EN: "August (Perahera season)", SI: "අගෝස්තු (පෙරහැර කාලය)" }, 
    tips: [{ EN: "Wear white or modest clothing to show respect.", SI: "ගෞරවය පිණිස සුදු හෝ චාම් ඇඳුමින් සැරසෙන්න." }], 
    hiddenEchoes: { EN: "The world museum of Buddhism is located right behind the temple.", SI: "පන්සලට පිටුපසින් ලොව බෞද්ධ කෞතුකාගාරය පිහිටා ඇත." },
    location: "Kandy", 
    coordinates: { x: 55, y: 55 } 
  },
  { 
    id: "adams-peak", 
    name: { EN: "Adam's Peak (Sri Pada)", SI: "ශ්‍රී පාදය" }, 
    category: "mountains", 
    image: "https://images.unsplash.com/photo-1653151106766-52f14da3bb68?w=1600&auto=format&fit=crop&q=80", 
    gallery: [
      "https://images.unsplash.com/photo-1653151106766-52f14da3bb68?w=1200&auto=format&fit=crop&q=80",
      "https://cdn.pixabay.com/photo/2023/07/04/10/30/mountains-8105952_1280.jpg",
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80"
    ], 
    history: { EN: "A sacred mountain revered by Buddhists, Hindus, Muslims, and Christians alike for the footprint at the summit. For centuries, pilgrims have made the arduous trek to the peak for sunrise.", SI: "මුදුනේ ඇති ශ්‍රී පාද ලාංඡනය නිසා ආගම් කිහිපයකම ගෞරවයට පාත්‍ර වූ පූජනීය කන්දකි." }, 
    shortStory: { EN: "The Stairway to Heaven.", SI: "අහසට නැගෙන පියගැටපෙළ." }, 
    bestTime: { EN: "December to May", SI: "දෙසැම්බර් සිට මැයි දක්වා" }, 
    tips: [{ EN: "Start your climb at midnight to catch the sunrise.", SI: "හිරු උදාව නැරඹීමට මධ්‍යම රාත්‍රියේ නැගීම අරඹන්න." }], 
    hiddenEchoes: { EN: "The shadow of the peak at sunrise creates a perfect triangle.", SI: "හිරු උදාවේදී කන්දේ සෙවනැල්ල පැහැදිලි ත්‍රිකෝණයක හැඩය ගනී." },
    location: "Ratnapura", 
    coordinates: { x: 48, y: 68 } 
  },
  { 
    id: "mirissa", 
    name: { EN: "Mirissa Blue Waves", SI: "මිරිස්ස වෙරළ" }, 
    category: "beach", 
    image: "https://images.unsplash.com/photo-1621951289270-b942dc5f4320?w=1600&auto=format&fit=crop&q=80", 
    gallery: [
      "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1621951289270-b942dc5f4320?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80"
    ], 
    history: { EN: "Mirissa is famous for its breathtaking sunsets and as a primary spot for Blue Whale watching. The crescent-shaped beach is lined with cozy cafes and swaying palms.", SI: "මනරම් හිරු බැස යන දසුන් සහ තල්මසුන් නැරඹීම සඳහා මිරිස්ස ප්‍රසිද්ධය." }, 
    shortStory: { EN: "Surfer's Paradise.", SI: "සර්ෆර්ස් පාරාදීසය." }, 
    bestTime: { EN: "November to April", SI: "නොවැම්බර් සිට අප්‍රේල් දක්වා" }, 
    tips: [{ EN: "Climb Coconut Tree Hill for the best views.", SI: "හොඳම දර්ශන සඳහා කොකනට් ට්‍රී හිල් වෙත යන්න." }], 
    hiddenEchoes: { EN: "Secret Beach is a hidden cove away from the crowds.", SI: "සික්‍රට් බීච් යනු සෙනග නැති රහසිගත වෙරළ තීරයකි." },
    location: "Matara", 
    coordinates: { x: 45, y: 95 } 
  },
  { 
    id: "polonnaruwa", 
    name: { EN: "Polonnaruwa Kingdom", SI: "පොළොන්නරුව රාජධානිය" }, 
    category: "ancient", 
    image: "https://images.unsplash.com/photo-1656339952847-a360aee9273b?auto=format&fit=crop&w=1200&q=80", 
    gallery: [
      "https://images.unsplash.com/photo-1656339952847-a360aee9273b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80"
    ], 
    history: { EN: "The second most ancient of Sri Lanka's kingdoms, known for its irrigation systems and the Gal Vihara Buddhas. It flourished in the 11th and 12th centuries.", SI: "ලංකාවේ දෙවන පැරණිම රාජධානියයි, මෙහි ඇති වාරි පද්ධති සහ බුදු පිළිම සුවිශේෂී වේ." }, 
    shortStory: { EN: "Stone Echoes of the Past.", SI: "අතීතයේ ගල් ප්‍රතිරාවය." }, 
    bestTime: { EN: "May to September", SI: "මැයි සිට සැප්තැම්බර් දක්වා" }, 
    tips: [{ EN: "Renting a bike is the best way to explore the ruins.", SI: "නටබුන් නැරඹීමට බයිසිකලයක් කුලියට ගැනීම වඩාත් සුදුසුයි." }], 
    hiddenEchoes: { EN: "The Royal Bathing pool still features ancient plumbing.", SI: "කුමාර පොකුණේ තවමත් පැරණි ජල නල පද්ධතිය දැකිය හැකිය." },
    location: "Polonnaruwa", 
    coordinates: { x: 65, y: 35 } 
  },
  { 
    id: "udawalawe", 
    name: { EN: "Udawalawe Elephants", SI: "උඩවලව අලි රංචු" }, 
    category: "wildlife", 
    image: "https://images.unsplash.com/photo-1674556275189-e78fd6223e6d?auto=format&fit=crop&w=1600&q=80", 
    gallery: [
      "https://images.unsplash.com/photo-1674556275189-e78fd6223e6d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
    ], 
    history: { EN: "Known as the best place in the country to see wild elephants year-round in their natural habitat. It was created to provide a sanctuary for wild animals displaced by the construction of the reservoir.", SI: "වසරේ ඕනෑම කාලයක වල් අලි නැරඹීමට ලංකාවේ ඇති හොඳම ස්ථානය මෙයයි." }, 
    shortStory: { EN: "The Gentle Giants.", SI: "දැවැන්තයින්ගේ නිවහන." }, 
    bestTime: { EN: "June to September", SI: "ජූනි සිට සැප්තැම්බර් දක්වා" }, 
    tips: [{ EN: "Visit the Elephant Transit Home nearby at feeding time.", SI: "අලි පැටවුන්ට කිරි දෙන වේලාවට අසල ඇති අලි අනාථගාරයට යන්න." }], 
    hiddenEchoes: { EN: "The sunset over the reservoir is magical.", SI: "ජලාශය අසලින් හිරු බැස යන දර්ශනය මනරම් ය." },
    location: "Ratnapura", 
    coordinates: { x: 60, y: 82 } 
  },
  { 
    id: "hikkaduwa", 
    name: { EN: "Hikkaduwa Corals", SI: "හික්කඩුව කොරල්පර" }, 
    category: "beach", 
    image: "https://images.unsplash.com/photo-1682368593766-1f788256c116?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGlra2FkdXdhfGVufDB8fDB8fHww", 
    gallery: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
      "https://plus.unsplash.com/premium_photo-1661841439995-1706237c83dc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29yYWwlMjByZWVmfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1682368593766-1f788256c116?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGlra2FkdXdhfGVufDB8fDB8fHww"
    ], 
    history: { EN: "The first marine sanctuary in Sri Lanka, famous for its coral reefs and vibrant surfing scene. It became a popular tourist destination in the 1970s.", SI: "ලංකාවේ ප්‍රථම මුහුදු උද්‍යානයයි, කොරල් සහ සර්ෆින් සඳහා ප්‍රසිද්ධය." }, 
    shortStory: { EN: "The Underwater Forest.", SI: "මුහුදු පතුලේ වනාන්තරය." }, 
    bestTime: { EN: "November to March", SI: "නොවැම්බර් සිට මාර්තු දක්වා" }, 
    tips: [{ EN: "Take a glass-bottom boat if you don't want to dive.", SI: "මුහුදේ යට බැලීමට වීදුරු පතුලක් සහිත බෝට්ටුවක යන්න." }], 
    hiddenEchoes: { EN: "Sea turtles often come to the shore to be fed.", SI: "මුහුදු කැස්බෑවුන් නිතරම වෙරළට පැමිණෙති." },
    location: "Galle", 
    coordinates: { x: 35, y: 92 } 
  },
  { 
    id: "nallur", 
    name: { EN: "Nallur Kandaswamy", SI: "නල්ලූර් කෝවිල" }, 
    category: "ancient", 
    image: "https://upload.wikimedia.org/wikipedia/commons/6/61/Nallur_Kandasamy_front_entrance.jpg", 
    gallery: [
      "https://images.unsplash.com/photo-1578503117502-3162799f9392?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1200&q=80"
    ], 
    history: { EN: "The most significant Hindu temple in Jaffna, representing northern cultural identity. The current structure dates back to the 18th century.", SI: "උතුරේ සංස්කෘතිය විදහා දක්වන යාපනයේ ප්‍රධානතම හින්දු කෝවිල මෙයයි." }, 
    shortStory: { EN: "The Golden Gateway.", SI: "රන්වන් ද්වාරය." }, 
    bestTime: { EN: "August (Festival season)", SI: "අගෝස්තු (උත්සව සමය)" }, 
    tips: [{ EN: "Men must remove their shirts before entering.", SI: "ඇතුළු වීමට පෙර පිරිමි පුද්ගලයින් උඩුකය වැස්ම ඉවත් කළ යුතුය." }], 
    hiddenEchoes: { EN: "The sacred pool inside is believed to have healing properties.", SI: "ඇතුළත ඇති පූජනීය පොකුණට සුව කිරීමේ ගුණ ඇති බව විශ්වාස කෙරේ." },
    location: "Jaffna", 
    coordinates: { x: 50, y: 10 } 
  },
  { 
    id: "horton-plains", 
    name: { EN: "World's End", SI: "ලෝකාන්තය" }, 
    category: "mountains", 
    image: "https://images.unsplash.com/photo-1671432751719-d1a032c1a369?auto=format&fit=crop&w=1200&q=80", 
    gallery: [
      "https://images.unsplash.com/photo-1671432751719-d1a032c1a369?auto=format&fit=crop&w=1200&q=80",
      "https://cdn.pixabay.com/photo/2023/07/04/10/30/mountains-8105952_1280.jpg",
      "https://images.unsplash.com/photo-1578519050142-afb511e518de?auto=format&fit=crop&w=1200&q=80"
    ], 
    history: { EN: "Horton Plains is a high-altitude plateau featuring 'World's End', a drop of 880 meters. It is a key biodiversity hotspot.", SI: "මීටර් 880 ක බෑවුමක් සහිත ලෝකාන්තය පිහිටි හොර්ටන් තැන්න මනරම් සානුවකි." }, 
    shortStory: { EN: "The Edge of the World.", SI: "ලෝකයේ කෙළවර." }, 
    bestTime: { EN: "January to March", SI: "ජනවාරි සිට මාර්තු දක්වා" }, 
    tips: [{ EN: "Reach the viewpoint before 9 AM to avoid the mist.", SI: "මීදුම එන්න කලින් උදෑසන 9 ට පෙර එහි යන්න." }], 
    hiddenEchoes: { EN: "The rare Samba deer are often spotted here.", SI: "දුර්ලභ ගෝනුන් මෙහි නිතර දැගත හැකිය." },
    location: "Nuwara Eliya", 
    coordinates: { x: 58, y: 70 } 
  },
  {
    id: "dambulla",
    name: { EN: "Dambulla Cave Temple", SI: "දඹුල්ල රන් විහාරය" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1625232810815-5460f7823f6c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1625232810815-5460f7823f6c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1656497107500-a2bc32cbe7d4?auto=format&fit=crop&w=1200&q=80"
    ],
    history: {
      EN: "The Dambulla Royal Cave Temple is the largest and best-preserved cave temple complex in Sri Lanka. Dating back to the 1st century BC, it features five main caves with over 150 statues of Buddha, kings, and deities, along with stunning murals covering 2,100 square meters.",
      SI: "ක්‍රි.පූ. 1 වන සියවස දක්වා දිවයන දඹුල්ල රජමහා විහාරය ශ්‍රී ලංකාවේ විශාලතම සහ හොඳින්ම සංරක්ෂණය කර ඇති ලෙන් විහාර සංකීර්ණයයි. මෙහි ප්‍රධාන ලෙන් පහක් ඇති අතර බුදු පිළිම, රජවරුන්ගේ සහ දෙවිවරුන්ගේ පිළිම 150කට වඩා වැඩි ප්‍රමාණයක් මෙහි අන්තර්ගත වේ."
    },
    shortStory: { EN: "The Golden Gallery of Faith.", SI: "භක්තියේ රන්වන් ගැලරිය." },
    bestTime: { EN: "Year-round", SI: "වසරේ ඕනෑම කාලයක" },
    tips: [{ EN: "The climb to the caves is brief but steep; monkeys frequent the path.", SI: "ලෙන් වෙත නැගීම කෙටි වුවත් බෑවුම් සහිතය; මඟ දෙපස වඳුරන් බහුලව සිටිති." }],
    hiddenEchoes: { EN: "Water drips constantly from the ceiling of the second cave, even in droughts, and is considered sacred.", SI: "දෙවන ලෙනෙහි වහලයෙන් නිරන්තරයෙන් ජලය බිංදු වැටෙන අතර එය පූජනීය ජලය ලෙස සැලකේ." },
    location: "Matale",
    coordinates: { x: 52, y: 42 }
  },
  {
    id: "mihintale",
    name: { EN: "Mihintale Peak", SI: "මිහින්තලය" },
    category: "ancient",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1691219236582-ce53d5cb02cd?auto=format&fit=crop&w=1200&q=80"
    ],
    history: {
      EN: "Considered the birthplace of Buddhism in Sri Lanka, Mihintale is where Monk Mahinda met King Devanampiyatissa in the 3rd century BC. It is a vast complex of ruins, including a hospital, a refectory, and the sacred Ambastala Dagoba.",
      SI: "ශ්‍රී ලංකාවේ බුදුදහමේ උපන් ස්ථානය ලෙස සැලකෙන මිහින්තලයේදී ක්‍රි.පූ. 3 වන සියවසේදී මිහිඳු මහ රහතන් වහන්සේට දේවානම්පියතිස්ස රජතුමා මුණගැසුණි. මෙය රෝහලක්, දාන ශාලාවක් සහ පූජනීය අම්බස්තල දාගැබ ඇතුළු විශාල නටබුන් සංකීර්ණයකි."
    },
    shortStory: { EN: "The Dawn of Dhamma.", SI: "දහම් ආලෝකයේ උදාව." },
    bestTime: { EN: "June (Poson Poya season)", SI: "ජූනි (පොසොන් පොහොය කාලය)" },
    tips: [{ EN: "Climb the Aradhana Gala for a stunning panoramic view of Anuradhapura.", SI: "අනුරාධපුරයේ මනරම් දර්ශනයක් නැරඹීමට ආරාධනා ගල තරණය කරන්න." }],
    hiddenEchoes: { EN: "The ancient hospital at the base is one of the oldest in the world.", SI: "මෙහි පාමුල ඇති පැරණි රෝහල ලොව පැරණිතම රෝහල්වලින් එකකි." },
    location: "Anuradhapura",
    coordinates: { x: 52, y: 24 }
  },
  {
    id: "wilpattu",
    name: { EN: "Wilpattu National Park", SI: "විල්පත්තුව ජාතික වනෝද්‍යානය" },
    category: "wildlife",
    image: "https://i.pinimg.com/1200x/28/95/94/28959415856159f64b3a6f98073698b8.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1621847473222-d85c022cbf07?auto=format&fit=crop&w=1200&q=80"
    ],
    history: {
      EN: "Wilpattu is the largest and oldest national park in Sri Lanka, famous for its unique natural lakes known as 'Willus'. It is a prime habitat for leopards and sloth bears, offering a more secluded safari experience compared to Yala.",
      SI: "ලංකාවේ විශාලතම සහ පැරණිතම ජාතික වනෝද්‍යානය විල්පත්තුවයි. 'විල්ලු' නමින් හැඳින්වෙන ස්වභාවික විල් සඳහා මෙය ප්‍රසිද්ධය. දිවියන් සහ වලසුන් නැරඹීමට මෙය ඉතා සුදුසු වන අතර යාලට වඩා නිස්කලංක අත්දැකීමක් ලබා දෙයි."
    },
    shortStory: { EN: "The Land of the Willus.", SI: "විල්ලු පිරි මනරම් භූමිය." },
    bestTime: { EN: "February to October", SI: "පෙබරවාරි සිට ඔක්තෝබර් දක්වා" },
    tips: [{ EN: "Stay in a campsite inside or near the park to hear the jungle come alive at night.", SI: "රාත්‍රියේ වනයේ හඬ ඇසීමට වනෝද්‍යානය තුළ හෝ ඒ අසල කඳවුරු බැඳ සිටින්න්න." }],
    hiddenEchoes: { EN: "Kudiramalai point is where Prince Vijaya is said to have landed in Sri Lanka in 543 BC.", SI: "ක්‍රි.පූ. 543 දී විජය කුමරු ලංකාවට ගොඩබැස්ස බව කියවෙන කුදිරමලෙයි තුඩුව මෙහි පිහිටා ඇත." },
    location: "Puttalam",
    coordinates: { x: 35, y: 30 }
  },
  {
    id: "sinharaja",
    name: { EN: "Sinharaja Rain Forest", SI: "සිංහරාජ වැසි වනාන්තරය" },
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1703566567802-e1945c83f0cb?w=1200&format=auto&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514483127413-f72f273478c3?auto=format&fit=crop&w=1200&q=80"
    ],
    history: {
      EN: "A UNESCO World Heritage site and a global biodiversity hotspot, Sinharaja is the last viable area of primary tropical rainforest in Sri Lanka. It is home to many endemic species of birds, butterflies, and reptiles.",
      SI: "යුනෙස්කෝ ලෝක උරුමයක් වන සිංහරාජය ශ්‍රී ලංකාවේ අවසාන ප්‍රාථමික නිවර්තන වැසි වනාන්තරයයි. ලංකාවට ආවේණික පක්ෂීන්, සමනලුන් සහ උරගයින් රැසකට මෙය නිවහන වේ."
    },
    shortStory: { EN: "The Kingdom of the Lion.", SI: "සිංහරාජ අඩවිය." },
    bestTime: { EN: "January to March and August to September", SI: "ජනවාරි සිට මාර්තු සහ අගෝස්තු සිට සැප්තැම්බර් දක්වා" },
    tips: [{ EN: "Wear leech socks and carry salt/lime; it's extremely humid and wet.", SI: "කූඩැල්ලන්ගෙන් ආරක්ෂා වීමට විශේෂ මේස් පළඳින්න්න සහ ලුණු/දෙහි රැගෙන යන්න." }],
    hiddenEchoes: { EN: "The 'mixed-species bird flock' phenomenon is a unique social behavior seen only here.", SI: "විවිධ පක්ෂි වර්ග සමූහ වශයෙන් සැරිසැරීමේ චමත්කාරජනක දසුන මෙහිදී දැකගත හැකිය." },
    location: "Ratnapura",
    coordinates: { x: 45, y: 85 }
  },
  {
    id: "arugam-bay",
    name: { EN: "Arugam Bay Surfing", SI: "ආරුක්කුම්බේ වෙරළ" },
    category: "beach",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80"
    ],
    history: {
      EN: "Arugam Bay is a moon-shaped curl of soft sand on the East Coast, ranked as one of the best surfing points in the world. It has a pill-laid, bohemian vibe that attracts travelers seeking soul and surf.",
      SI: "නැගෙනහිර වෙරළ තීරයේ පිහිටි ආරුගම්බේ ලොව හොඳම සර්ෆින් ක්‍රීඩා ස්ථානවලින් එකකි. මෙහි ඇති නිස්කලංක සහ විනෝදකාමී වටපිටාව සංචාරකයින් බෙහෙවින් ආකර්ෂණය කරයි."
    },
    shortStory: { EN: "The Soul of the Surf.", SI: "සර්ෆර්ස් පාරාදීසය." },
    bestTime: { EN: "April to October", SI: "අප්‍රේල් සිට ඔක්තෝබර් දක්වා" },
    tips: [{ EN: "Visit Peanut Farm Beach nearby for a more secluded surf session.", SI: "වඩාත් නිස්කලංක සර්ෆින් අත්දැකීමක් සඳහා අසල ඇති පීනට් ෆාම් වෙරළට යන්න." }],
    hiddenEchoes: { EN: "Wild elephants are often spotted crossing the lagoon at sunset.", SI: "හිරු බැස යන වේලාවේදී වන අලි කලපුව හරහා ගමන් කරන දසුන මෙහිදී දැකගත හැකිය." },
    location: "Ampara",
    coordinates: { x: 82, y: 75 }
  },
  {
    id: "nilaveli",
    name: { EN: "Nilaveli Sands", SI: "නිලාවේලි වෙරළ" },
    category: "beach",
    image: "https://i.pinimg.com/1200x/f6/8f/fc/f68ffcca31ff62a3724838797417a17e.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501534159995-5b8c9ad9479b?auto=format&fit=crop&w=1200&q=80"
    ],
    history: {
      EN: "Nilaveli is known for its pearly white sands and clear blue waters. It is one of the most pristine beaches in the island, historically a major trading hub in ancient times.",
      SI: "මුතු ඇට වැනි සුදු පැහැති වැලි සහ නිල්වන් දියවර නිසා නිලාවේලි ප්‍රසිද්ධය. දිවයිනේ ඇති පිරිසිදුම වෙරළ තීරයන්ගෙන් එකක් වන මෙය අතීතයේ ප්‍රධාන වෙළඳ මධ්‍යස්ථානයක් ලෙස පැවතුණි."
    },
    shortStory: { EN: "White Sands of the East.", SI: "නැගෙනහිර මුතු ඇටය." },
    bestTime: { EN: "May to September", SI: "මැයි සිට සැප්තැම්බර් දක්වා" },
    tips: [{ EN: "Take a boat ride to Pigeon Island early in the morning.", SI: "උදෑසනම පරෙවි දූපතට බෝට්ටු සංචාරයක් යන්න." }],
    hiddenEchoes: { EN: "The shallow water allows you to walk quite far into the ocean during low tide.", SI: "දිය අඩු කාලයේදී මුහුද දෙසට සැළකිය යුතු දුරක් පයින් යා හැකිය." },
    location: "Trincomalee",
    coordinates: { x: 78, y: 24 }
  },
  {
    id: "passikudah",
    name: { EN: "Passikudah Bay", SI: "පාසිකුඩා" },
    category: "beach",
    image: "https://i.pinimg.com/736x/38/df/43/38df4340f8099632dbb679ef2033c16a.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=1200&q=80"
    ],
    history: {
      EN: "Famous for its shallow turquoise bay, Passikudah allows you to walk kilometers into the sea as the water stays waist-deep. It is a world-renowned luxury resort destination.",
      SI: "ගැඹුර අඩු නිල් පැහැති මුහුද නිසා පාසිකුඩා ප්‍රසිද්ධය. මෙහි මුහුදේ කිලෝමීටර් ගණනක් පයින් යාමට හැකි අතර ජලය ඇත්තේ ඉණ මට්ටමට පමණි. මෙය ලොව පුරා ප්‍රසිද්ධ සංචාරක කලාපයකි."
    },
    shortStory: { EN: "The Shallow Bay.", SI: "නිල්වන් පාසිකුඩා." },
    bestTime: { EN: "May to September", SI: "මැයි සිට සැප්තැම්බර් දක්වා" },
    tips: [{ EN: "Ideal for families with children due to the calm and shallow waters.", SI: "නිසල සහ ගැඹුර අඩු මුහුද නිසා කුඩා දරුවන් සිටින පවුල්වලට ඉතා සුදුසුයි." }],
    hiddenEchoes: { EN: "The bay contains a hidden coral reef that is slowly recovering.", SI: "මෙහි පතුලේ සැඟවුණු කොරල් පරයක් ඇති අතර එය ක්‍රමයෙන් වර්ධනය වෙමින් පවතී." },
    location: "Batticaloa",
    coordinates: { x: 80, y: 45 }
  },
  {
    id: "knuckles",
    name: { EN: "Knuckles Range", SI: "නකල්ස් කඳු පන්තිය" },
    category: "mountains",
    image: "https://i.pinimg.com/736x/4f/88/a1/4f88a1a7b418114e84be8ac52ffba325.jpg",
    gallery: [
      "https://cdn.pixabay.com/photo/2020/02/10/08/33/mountain-4835694_1280.jpg",
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
      "https://t4.ftcdn.net/jpg/11/87/44/55/240_F_1187445511_vnMLU204smAuT1Tk6ZT2Se4XRP9JMvy0.jpg"
    ],
    history: {
      EN: "The Knuckles Mountain Range is named for its resemblance to a clenched fist. It is a UNESCO World Heritage site and a climatic microcosm, containing almost all of Sri Lanka's major ecosystem types.",
      SI: "නකල්ස් කඳු පන්තිය මිට මොලවන ලද අතක ඇඟිලි පුරුක් වැනි හැඩයකින් යුක්ත නිසා එම නම ලැබී ඇත. මෙය යුනෙස්කෝ ලෝක උරුමයක් වන අතර ලංකාවේ පවතින බොහෝ පරිසර පද්ධති මෙහිදී දැකගත හැකිය."
    },
    shortStory: { EN: "The Misty Peaks.", SI: "මීදුමෙන් වැසුණු නකල්ස්." },
    bestTime: { EN: "June to September", SI: "ජූනි සිට සැප්තැම්බර් දක්වා" },
    tips: [{ EN: "Hire a local guide; the mist can make navigation extremely difficult.", SI: "පළපුරුදු මඟපෙන්වන්නෙකු කැටුව යන්න; අධික මීදුම නිසා පාර සොයා ගැනීම අපහසු විය හැකිය." }],
    hiddenEchoes: { EN: "The village of Meemure inside the range remains one of the most isolated villages in the country.", SI: "මෙම කඳු පන්තිය මැද පිහිටි මීමුරේ ගම්මානය අදටත් ලංකාවේ ඇති හුදෙකලාම ගම්මානයකි." },
    location: "Kandy",
    coordinates: { x: 60, y: 50 }
  },
  {
    id: "pidurangala",
    name: { EN: "Pidurangala Rock", SI: "පින්දූරංගල පර්වතය" },
    category: "mountains",
    image: "https://images.unsplash.com/photo-1602364481046-a5c6c3629932?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1602364481046-a5c6c3629932?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=1200&q=80"
    ],
    history: {
      EN: "Pidurangala was an ancient Buddhist monastery established in the 5th century. It is located directly opposite Sigiriya Rock, offering the most iconic view of the Lion Rock fortress.",
      SI: "පින්දූරංගල යනු 5 වන සියවසේදී ආරම්භ කරන ලද පැරණි බෞද්ධ ආරණ්‍යයකි. මෙය සීගිරිය පර්වතයට සෘජුවම මුහුණ ලා පිහිටා ඇති අතර සීගිරිය නැරඹීමට ඇති හොඳම ස්ථානය මෙයයි."
    },
    shortStory: { EN: "The Sunlit Peak.", SI: "සීගිරිය පෙනෙන පින්දූරංගල." },
    bestTime: { EN: "December to April", SI: "දෙසැම්බර් සිට අප්‍රේල් දක්වා" },
    tips: [{ EN: "The final stretch requires a bit of rock scrambling; not for the faint-hearted.", SI: "අවසාන කොටසේදී ගල් පර්වත මතුපිටින් යාමට සිදුවන බැවින් ප්‍රවේශම් වන්න." }],
    hiddenEchoes: { EN: "A massive reclining Buddha statue carved into the rock face is hidden halfway up the climb.", SI: "නැග යන අතරමගදී පර්වතයේ නෙළන ලද අතිවිශාල සැතපෙන බුදු පිළිමයක් මෙහි සැඟව ඇත." },
    location: "Matale",
    coordinates: { x: 54, y: 37 }
  },
  {
    id: "kitulgala",
    name: { EN: "Kitulgala Adventure", SI: "කිතුල්ගල" },
    category: "wildlife",
    image: "https://images.unsplash.com/photo-1620054604245-566083771259?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1620054604245-566083771259?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80"
    ],
    history: {
      EN: "Kitulgala is the adventure capital of Sri Lanka, famous for white-water rafting on the Kelani River. It was also the primary filming location for the Academy Award-winning film 'The Bridge on the River Kwai'.",
      SI: "ලංකාවේ වික්‍රමාන්විත ක්‍රීඩා සඳහා වූ ප්‍රධානතම ස්ථානය කිතුල්ගලයි. කැලණි ගඟේ 'වයිට් වෝටර් රාෆ්ටින්' සඳහා මෙය ඉතා ප්‍රසිද්ධය. සුප්‍රසිද්ධ 'The Bridge on the River Kwai' චිත්‍රපටය රූගත කරන ලද්දේද මෙහිය."
    },
    shortStory: { EN: "The Roaring River.", SI: "කැලණි ගඟේ වික්‍රමය." },
    bestTime: { EN: "January to March", SI: "ජනවාරි සිට මාර්තු දක්වා" },
    tips: [{ EN: "Combine rafting with canyoning and waterfall abseiling for a full adventure day.", SI: "එක් දිනකදී රාෆ්ටින්, කැනියොනින් සහ දිය ඇලි තරණය යන සියල්ල අත්හදා බලන්න." }],
    hiddenEchoes: { EN: "The Belilena cave nearby contains evidence of prehistoric 'Balangoda Man' dating back 32,000 years.", SI: "අසල ඇති බෙලිලෙන ලෙනෙහි වසර 32,000 ක් පැරණි බලංගොඩ මානවයාගේ සාක්ෂි හමුවී ඇත." },
    location: "Kegalle",
    coordinates: { x: 42, y: 65 }
  }
];
