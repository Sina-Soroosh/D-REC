const data = {
  houses: [
    {
      id: 1,
      name: "Brittany Bay",
      typeID: 1,
      parking: 1,
      bathroom: 2,
      bedroom: 2,
      meterage: 789,
      desc: "This property is managed by Beztak, 2023 recipient of the US Best Managed Companies for the fourth year in a row, sponsored by Deloitte Private and The Wall Street Journal. Call and let us tell you why! Enjoy living the good life at Brittany Bay! Located in Groveport, our spacious one-, two-, and three-bedroom apartments were designed with your unique lifestyle in mind. With features like new kitchen appliances, spacious closets, and scenic views, it's easy to see why our residents love living here!With professional on-site Beztak management and maintenance, Brittany Bay lets you enjoy a convenient lifestyle.",
      consultantID: 1,
      cityID: 1,
      address: "New York - 6663 Frank Ave NW",
      cover:
        "https://photos.zillowstatic.com/fp/d8c34ba8ff6b424b3ac31b5a518e6437-cc_ft_768.webp",
      images: [
        "https://photos.zillowstatic.com/fp/60426f903d10b3f913fdde9b1067868c-cc_ft_384.webp",
        "https://photos.zillowstatic.com/fp/2813e931bbcad9f11d8c386fae3f328a-cc_ft_384.webp",
        "https://photos.zillowstatic.com/fp/cac58d4d74cf0adf738eea06f4549d06-cc_ft_384.webp",
        "https://photos.zillowstatic.com/fp/276476405d61a4fc8acaac5a3bc7f2b9-cc_ft_384.webp",
      ],
      price: 1070,
      isSale: 0,
      options: [
        { id: 1, title: "Parking", isValid: true },
        { id: 2, title: "Elevator", isValid: false },
        { id: 3, title: "CCTV", isValid: false },
        { id: 4, title: "Gym", isValid: false },
        { id: 5, title: "Workshop", isValid: false },
        { id: 6, title: "High speed Internet", isValid: true },
        { id: 7, title: "Remote parking door", isValid: true },
        { id: 8, title: "Burglar alarm", isValid: false },
        { id: 9, title: "Barbecue", isValid: false },
        { id: 10, title: "Swimming pool", isValid: false },
        { id: 11, title: "Conference hall", isValid: false },
        { id: 12, title: "Gazebo", isValid: false },
      ],
    },
    {
      id: 2,
      name: "401 Northwind Pl, Stockbridge, GA 30281",
      typeID: 1,
      parking: 1,
      bathroom: 2,
      bedroom: 3,
      meterage: 1550,
      desc: "A lovely ranch that sits on a corner lot with fenced in back yard, No HOA, 16x16 shop with power, Gazebo on back porch with fan and power. The 2 story foyer opens up to a huge family room with a gas fireplace. Kitchen has tons of cabinets, granite countertops, new stainless steel appliances, new faucet. Eat in kitchen that overlooks the backyard, along with a separate formal dining room. Nicely sized owner's suite with tray ceilings and walk in closet. Split bedroom plan, both bathrooms have been upgraded with beautiful tile flooring, vanities, and fixtures. HVAC replaced 2021. This is not just a house but a home that has been loved and well maintained. Minutes from I-75.",
      consultantID: 1,
      cityID: 2,
      address: "Miami - 27 Rue Notre Dame",
      cover:
        "https://photos.zillowstatic.com/fp/c618e45cca27a0c9457c97da7e2feced-sc_1536_1024.webp",
      images: [
        "https://photos.zillowstatic.com/fp/4b5c10d802e0fa7754a2b0d7d4bd896e-sc_1536_1024.webp",
        "https://photos.zillowstatic.com/fp/5641dd053de53a48bb05f56cb3b7de82-sc_1536_1024.webp",
      ],
      price: 296500,
      isSale: 0,
      options: [
        { id: 1, title: "Parking", isValid: true },
        { id: 2, title: "Elevator", isValid: false },
        { id: 3, title: "CCTV", isValid: true },
        { id: 4, title: "Gym", isValid: false },
        { id: 5, title: "Workshop", isValid: false },
        { id: 6, title: "High speed Internet", isValid: true },
        { id: 7, title: "Remote parking door", isValid: true },
        { id: 8, title: "Burglar alarm", isValid: false },
        { id: 9, title: "Barbecue", isValid: false },
        { id: 10, title: "Swimming pool", isValid: false },
        { id: 11, title: "Conference hall", isValid: false },
        { id: 12, title: "Gazebo", isValid: false },
      ],
    },
    {
      id: 3,
      name: "7229-33 S Yates Blvd",
      typeID: 2,
      parking: 0,
      bathroom: 1,
      bedroom: 2,
      meterage: 515,
      desc: "Come on home to 7229 South Yates Boulevard! This South Shore area 12-unit building includes hardwood floors, eat-in kitchen, heat included! Beautifully located near lakefront! Closely located to the library, a magnet school, bus stops, and Metra station! Call today to schedule a showing!",
      consultantID: 2,
      cityID: 3,
      address: "Chicago - 10 Headdon Gate",
      cover:
        "https://photos.zillowstatic.com/fp/e30ce8a906147c6082567eb38723556d-cc_ft_768.webp",
      images: [
        "https://photos.zillowstatic.com/fp/83e43ebd04406ce931d27bbd6c10179b-cc_ft_384.webp",
        "https://photos.zillowstatic.com/fp/8448b59a73564a842190dd2b2eb870c5-cc_ft_384.webp",
        "https://photos.zillowstatic.com/fp/693fc650059b3b40e03b027f22900596-cc_ft_384.webp",
        "https://photos.zillowstatic.com/fp/5700e15cbfadac5372715b3ad39c6af5-cc_ft_384.webp",
      ],
      price: 830,
      isSale: 0,
      options: [
        { id: 1, title: "Parking", isValid: false },
        { id: 2, title: "Elevator", isValid: true },
        { id: 3, title: "CCTV", isValid: true },
        { id: 4, title: "Gym", isValid: false },
        { id: 5, title: "Workshop", isValid: false },
        { id: 6, title: "High speed Internet", isValid: true },
        { id: 7, title: "Remote parking door", isValid: false },
        { id: 8, title: "Burglar alarm", isValid: false },
        { id: 9, title: "Barbecue", isValid: false },
        { id: 10, title: "Swimming pool", isValid: false },
        { id: 11, title: "Conference hall", isValid: false },
        { id: 12, title: "Gazebo", isValid: false },
      ],
    },
    {
      id: 4,
      name: "2164 Oakdale Estates Ct, Smyrna, GA 30080",
      typeID: 1,
      parking: 2,
      bathroom: 5,
      bedroom: 7,
      meterage: 4686,
      desc: "Welcome to 2164 Oakdale Estates Court! This gorgeous four-sided brick traditional home offers something for everyone! The covered, rocking chair front porch opens to a two-story foyer. Immediately, you’ll notice the gleaming hardwood floors, natural light-filled spaces, and special touches like crown molding and wainscoting. The formal dining room is large enough to seat everyone. You’ll find the dedicated home office across the foyer with glass French doors and a wall of built-in bookshelves. The two-story family room has a marble fireplace and soaring windows overlooking the private back yard. The kitchen features white cabinets, granite counters, tile backsplash, stainless steel appliances, an island, walk-in pantry, and a breakfast nook. A spacious back deck attaches to the kitchen, making it a great space for entertaining. The main floor is rounded out with a bedroom and full bathroom. The oversized primary suite offers tray ceilings, dual vanities, a separate whirlpool tub and step-in shower, plus a massive walk-in closet. The full, finished basement offers two bedrooms, a full bathroom, a family room, and a kitchen. It is another living space all to itself, making it a great in-law suite, teenager’s retreat, or a potential source of income. Enjoy living in this peaceful and quiet, cul-de-sac neighborhood right in the heart of Smyrna. It is located just minutes away from the area’s greatest attractions, such as Smyrna Market Village, Silver Comet Trail, Truist Park and The Battery (home of the Atlanta Braves), plus easy access to the interstate, shopping, restaurants, and local parks and pools.",
      consultantID: 1,
      cityID: 2,
      address: "Miami - 65 Front St W",
      cover:
        "https://photos.zillowstatic.com/fp/ac3416be083dce75234c33b0ab88ab8e-sc_1536_1024.webp",
      images: [
        "https://photos.zillowstatic.com/fp/e97c7e4a07eb0c60311a78cf5f253e41-sc_1536_1024.webp",
        "https://photos.zillowstatic.com/fp/a8c8aacd9943ea2de9b0c8f1da619ad2-sc_1536_1024.webp",
        "https://photos.zillowstatic.com/fp/74e153066ac7b65b43cbb72b05434e65-sc_1536_1024.webp",
      ],
      price: 750000,
      isSale: 1,
      options: [
        { id: 1, title: "Parking", isValid: true },
        { id: 2, title: "Elevator", isValid: false },
        { id: 3, title: "CCTV", isValid: false },
        { id: 4, title: "Gym", isValid: false },
        { id: 5, title: "Workshop", isValid: true },
        { id: 6, title: "High speed Internet", isValid: true },
        { id: 7, title: "Remote parking door", isValid: true },
        { id: 8, title: "Burglar alarm", isValid: false },
        { id: 9, title: "Barbecue", isValid: false },
        { id: 10, title: "Swimming pool", isValid: false },
        { id: 11, title: "Conference hall", isValid: false },
        { id: 12, title: "Gazebo", isValid: false },
      ],
    },
    {
      id: 5,
      name: "Metropolitan Fishers",
      typeID: 1,
      parking: 0,
      bathroom: 2,
      bedroom: 3,
      meterage: 1035,
      desc: "Metropolitan Fishers offers the ultimate in apartment living. Lush landscape is wonderfully accented by a wooded creek. Conveniently located within minutes of major malls and businesses, restaurants, and the sought-after Hamilton Southeastern School District. You'll be met with private entrances and spacious floorplans. Our ambitious list of amenities ensures our residents always have something to do! Complete with resort-style pool and sundeck, 24-Hour fitness center, tennis court, volleyball court, community barbeque, coffee bar, and more! So, what are you waiting for? Make yourself at home, at The Metropolitan at Fishers.",
      consultantID: 2,
      cityID: 7,
      address: "San Francisco - 469 Hwy 6 N",
      cover:
        "https://photos.zillowstatic.com/fp/2c81407753faad1e38df7c6041141bc0-cc_ft_768.webp",
      images: [
        "https://photos.zillowstatic.com/fp/3df1cfda2bb3fb5ec79916cabfa8ec05-cc_ft_384.webp",
        "https://photos.zillowstatic.com/fp/6c8c43061fa57c85fbf8803514238242-cc_ft_384.webp",
        "https://photos.zillowstatic.com/fp/65aa865c9734498481dd3794241e5a98-cc_ft_384.webp",
        "https://photos.zillowstatic.com/fp/6a1bc3562c6d81c322ea6af0e917362d-cc_ft_384.webp",
      ],
      price: 1279,
      isSale: 0,
      options: [
        { id: 1, title: "Parking", isValid: false },
        { id: 2, title: "Elevator", isValid: false },
        { id: 3, title: "CCTV", isValid: true },
        { id: 4, title: "Gym", isValid: false },
        { id: 5, title: "Workshop", isValid: false },
        { id: 6, title: "High speed Internet", isValid: true },
        { id: 7, title: "Remote parking door", isValid: false },
        { id: 8, title: "Burglar alarm", isValid: true },
        { id: 9, title: "Barbecue", isValid: false },
        { id: 10, title: "Swimming pool", isValid: true },
        { id: 11, title: "Conference hall", isValid: false },
        { id: 12, title: "Gazebo", isValid: false },
      ],
    },
    {
      id: 6,
      name: "N1866 Maloney Rd, Kaukauna, WI 54130",
      typeID: 1,
      parking: 0,
      bathroom: 2,
      bedroom: 3,
      meterage: 1760,
      desc: "Charming country home just minutes from town! 3BR/2.5BA 1.5 story h ome on a 1.5 ac lot features original oak & pine floors, large yard w/ garden & 1st floor laundry! Fully-equipped modern kitchen w/ subway tile, concrete-top island, pantry, and stainless-steel appliances. Formal dining & bright casual dining space open to kitchen. Full bath w/tub on main floor. 1st floor laundry w/ shiplap walls includes washer & dryer! Large living room boasts cathedral ceilings w/ 100+yr old exposed barn-beams, stone-faced wood-burning FP, bay window & sliding door w/ shades opening to deck & spacious yard. Upper level contains all bedrooms including primary w/ walk-in closet & dual access full bath w/ shower. Extra-deep 2-stall detached garage. Closing date to be on or before 10/4/2023.",
      consultantID: 1,
      cityID: 2,
      address: "Miami - 141 Pine Valley Blvd",
      cover:
        "https://photos.zillowstatic.com/fp/7b3d1f269efa07c2306e9db644575f02-cc_ft_1536.webp",
      images: [
        "https://photos.zillowstatic.com/fp/d63caaace6e396fb2ae37e2e597774d7-cc_ft_384.webp",
        "https://photos.zillowstatic.com/fp/af6b835b699eb1cf9c2a647608073ee3-cc_ft_384.webp",
        "https://photos.zillowstatic.com/fp/1b57794fadc30df103512afdcd47489b-cc_ft_384.webp",
      ],
      price: 279000,
      isSale: 1,
      options: [
        { id: 1, title: "Parking", isValid: false },
        { id: 2, title: "Elevator", isValid: false },
        { id: 3, title: "CCTV", isValid: false },
        { id: 4, title: "Gym", isValid: false },
        { id: 5, title: "Workshop", isValid: false },
        { id: 6, title: "High speed Internet", isValid: true },
        { id: 7, title: "Remote parking door", isValid: false },
        { id: 8, title: "Burglar alarm", isValid: true },
        { id: 9, title: "Barbecue", isValid: false },
        { id: 10, title: "Swimming pool", isValid: false },
        { id: 11, title: "Conference hall", isValid: false },
        { id: 12, title: "Gazebo", isValid: false },
      ],
    },
    {
      id: 7,
      name: "The National",
      typeID: 2,
      parking: 1,
      bathroom: 1,
      bedroom: 2,
      meterage: 735,
      desc: "Smoking allowed:No",
      consultantID: 1,
      cityID: 5,
      address: "Los Angeles - 1028 Eglinton Ave W",
      cover:
        "https://photos.zillowstatic.com/fp/3855e37957d7ece768883e5e3347526c-cc_ft_768.webp",
      images: [],
      price: 1800,
      isSale: 0,
      options: [
        { id: 1, title: "Parking", isValid: true },
        { id: 2, title: "Elevator", isValid: true },
        { id: 3, title: "CCTV", isValid: true },
        { id: 4, title: "Gym", isValid: false },
        { id: 5, title: "Workshop", isValid: false },
        { id: 6, title: "High speed Internet", isValid: true },
        { id: 7, title: "Remote parking door", isValid: true },
        { id: 8, title: "Burglar alarm", isValid: false },
        { id: 9, title: "Barbecue", isValid: false },
        { id: 10, title: "Swimming pool", isValid: false },
        { id: 11, title: "Conference hall", isValid: false },
        { id: 12, title: "Gazebo", isValid: false },
      ],
    },
    {
      id: 8,
      name: "Heritage Orchard Hill Townhome Rentals",
      typeID: 1,
      parking: 1,
      bathroom: 2,
      bedroom: 4,
      meterage: 1550,
      desc: "Welcome to Heritage Orchard Hill townhome rentals! A luxurious townhome community, each with a private entrance and top-notch amenities. Nestled on 47 meticulously landscaped acres of rolling countryside, this community features world-class contemporary design. Heritage Orchard Hill delivers luxury townhome living. Located in the quiet Bucks County community of Perkasie, PA you'll have access to a variety of local activities and attractions for every resident. Our pet-friendly townhome rentals offer spacious 1-, 2-, and 3-bedroom townhomes ranging from 1,559 to 2,645 square feet of living space. Each floor plan provides unmatched features including gas fireplaces, 9 foot first floor ceilings, stainless steel appliances, granite countertops, patios and porches, along with large finished basements just to name a few. We provide top notch amenities for all residents to enjoy! Take a dip in our 3,300 square foot swimming pool with an adjacent baby pool or workout in our fitness center with a high-tech sound system and televisions. Take a walk with your 'best friend' in our pet park! Whatever your pleasure, it awaits you at Heritage Orchard Hill.",
      consultantID: 2,
      cityID: 6,
      address: "Austin - 7071 Bayers Rd",
      cover:
        "https://photos.zillowstatic.com/fp/ba590dbdfe9a34816317c2b864f146d7-cc_ft_768.webp",
      images: [
        "https://photos.zillowstatic.com/fp/051ec91dacf0fede51d07ce7379491af-cc_ft_384.webp",
        "https://photos.zillowstatic.com/fp/c146f2cd623df4e782466bc1fa7dd8bf-cc_ft_384.webp",
      ],
      price: 2995,
      isSale: 0,
      options: [
        { id: 1, title: "Parking", isValid: true },
        { id: 2, title: "Elevator", isValid: false },
        { id: 3, title: "CCTV", isValid: true },
        { id: 4, title: "Gym", isValid: false },
        { id: 5, title: "Workshop", isValid: true },
        { id: 6, title: "High speed Internet", isValid: true },
        { id: 7, title: "Remote parking door", isValid: true },
        { id: 8, title: "Burglar alarm", isValid: false },
        { id: 9, title: "Barbecue", isValid: true },
        { id: 10, title: "Swimming pool", isValid: true },
        { id: 11, title: "Conference hall", isValid: true },
        { id: 12, title: "Gazebo", isValid: true },
      ],
    },
    {
      id: 9,
      name: "602 Spruce Ct, Oswego, IL 60543",
      typeID: 1,
      parking: 1,
      bathroom: 3,
      bedroom: 4,
      meterage: 2650,
      desc: `Must see this meticulously maintained stone and brick home in Oswego's beautiful Gates Creek. This West-facing, 4 bedroom, 2 and a half bathroom home, has a newer roof, excellent curb appeal and your very own backyard oasis. The first floor boasts a grand 2-story foyer, office, living room, formal dining room, and kitchen that opens to the family room. The kitchen has 42" cherry cabinets with new hardware, quartz countertops, tiled backsplash, stainless steel appliances, and a large eat-in area with doors to the back patio. Upstairs you'll find a beautiful primary bedroom with a walk-in closet and an ensuite bathroom with double vanity and a large soaker tub. The top floor is completed with 3 additional larger bedrooms, a second full bathroom, and a huge storage space just waiting to become a 2nd office or playroom space. The fully finished basement is great for entertaining with space for games, crafts, and relaxing. Did we mention the backyard oasis? Truly one of the home's best features is the outdoors. You'll find a refinished IN-GROUND POOL, new patio, fire pit, sprinkler system, and beautiful landscaping with brand new stones. Feel ready for anything in this home with an installed security system and whole house generator. In the last 12 months owners have had a full house paint, replaced most of the light fixtures, installed 2 new toilets, added new blinds for the entire house, replaced all the kitchen and bathroom faucet hardware, and added gutter guards to the exterior. Nothing for you to do but move in. Be the envy of all your neighbors and schedule your showing today!`,
      consultantID: 1,
      cityID: 4,
      address: "San Diego - 295 Bay St",
      cover:
        "https://photos.zillowstatic.com/fp/3d5c61e8cccddb8d1135e484baf81609-sc_1536_1024.webp",
      images: [
        "https://photos.zillowstatic.com/fp/a7bfd20888da74c811eaa1cca260024b-sc_1536_1024.webp",
        "https://photos.zillowstatic.com/fp/9cfa76cd996640cab5f657f94d7423f6-sc_1536_1024.webp",
      ],
      price: 475000,
      isSale: 1,
      options: [
        { id: 1, title: "Parking", isValid: true },
        { id: 2, title: "Elevator", isValid: false },
        { id: 3, title: "CCTV", isValid: false },
        { id: 4, title: "Gym", isValid: false },
        { id: 5, title: "Workshop", isValid: false },
        { id: 6, title: "High speed Internet", isValid: true },
        { id: 7, title: "Remote parking door", isValid: true },
        { id: 8, title: "Burglar alarm", isValid: false },
        { id: 9, title: "Barbecue", isValid: false },
        { id: 10, title: "Swimming pool", isValid: false },
        { id: 11, title: "Conference hall", isValid: false },
        { id: 12, title: "Gazebo", isValid: false },
      ],
    },
    {
      id: 10,
      name: "4 Queens Way, Lincolnshire, IL 60069",
      typeID: 1,
      parking: 2,
      bathroom: 4,
      bedroom: 4,
      meterage: 2788,
      desc: "NEW ROOF! FRESHLY PAINTED! UPDATED KITCHEN! NEW CARPET! NEW HARDWOOD FLOORING! Welcome to this exquisite all-brick ranch home, ideally situated in the highly sought-after Stevenson School District and District 103. As you step inside, you'll be greeted by the elegance and sophistication that define this remarkable residence. The formal dining room welcomes you and seamlessly flows into the living room, creating an inviting space that's perfect for hosting gatherings and creating cherished memories. The highlight of the living room is the stunning double-sided fireplace, adding warmth and character to both the dining and living areas. The kitchen is a chef's dream, featuring gorgeous quartz counters, a spacious island with seating space, stainless steel appliances, and a pantry closet. This culinary haven is not only functional but also aesthetically pleasing, making meal preparation a joy. The family room is a cozy retreat, featuring another double-sided fireplace and vaulted ceilings. Large windows provide serene rear views of mature trees, and exterior deck access allows you to enjoy the natural beauty of the surroundings. The vaulted ceilings enhance the sense of space and openness, creating an inviting atmosphere. The master bedroom is a true sanctuary, offering ample closet space, exterior deck access for morning coffee or stargazing, and an ensuite bathroom. The ensuite is beautifully appointed with a double vanity, skylight, walk-in closet, and a private shower. The main level is completed by two spacious bedrooms, a full bath, a convenient half bath, and a spacious mudroom that adds practicality to daily life. The basement of this home offers additional living space, including a recreation room with a fireplace, a fourth bedroom, storage options, a laundry room, and extra finished space that can be used according to your preferences and needs. Whether you dream of a home gym, a craft room, or a home theater, this basement provides the flexibility to create your desired space. This home's exterior features a deck that's perfect for outdoor relaxation and entertaining. The mature trees and serene surroundings create a peaceful retreat right in your own backyard. Don't miss the opportunity to make this exceptional residence your own and experience the best of Stevenson School District living. Close to interstate access, park and forest preserve.",
      consultantID: 1,
      cityID: 6,
      address: "Austin - 295 Bay St",
      cover:
        "https://photos.zillowstatic.com/fp/65bad2404cda5b4948291e19191ff4c5-sc_1536_1024.webp",
      images: [
        "https://photos.zillowstatic.com/fp/57725f1307913fd912cc8af0ac78b804-sc_1536_1024.webp",
        "https://photos.zillowstatic.com/fp/caf3e7a8cd6d85a8e5ee01dbb34f89d7-sc_1536_1024.webp",
      ],
      price: 675000,
      isSale: 1,
      options: [
        { id: 1, title: "Parking", isValid: true },
        { id: 2, title: "Elevator", isValid: false },
        { id: 3, title: "CCTV", isValid: true },
        { id: 4, title: "Gym", isValid: false },
        { id: 5, title: "Workshop", isValid: false },
        { id: 6, title: "High speed Internet", isValid: true },
        { id: 7, title: "Remote parking door", isValid: true },
        { id: 8, title: "Burglar alarm", isValid: false },
        { id: 9, title: "Barbecue", isValid: false },
        { id: 10, title: "Swimming pool", isValid: false },
        { id: 11, title: "Conference hall", isValid: false },
        { id: 12, title: "Gazebo", isValid: false },
      ],
    },
  ],
  staffs: [
    {
      id: 1,
      name: "Sina Soroosh",
      job: "Front-end",
      phone: "+1 000-000-000",
      email: "sina@gmail.com",
      profile:
        "https://garzak.ir/garzak_them/Real_Estate_etemad/img/about-img/membr-5.jpg",
    },
    {
      id: 2,
      name: "Shayan Akbarian",
      job: "Front-end",
      phone: "+1 002-010-520",
      email: "shayan@gmail.com",
      profile:
        "https://garzak.ir/garzak_them/Real_Estate_etemad/img/about-img/membr-4.jpg",
    },
    {
      id: 3,
      name: "Aeda Ebarhimi",
      job: "Sales Manager",
      phone: "+1 110-240-010",
      email: "aeda@gmail.com",
      profile:
        "https://garzak.ir/garzak_them/Real_Estate_etemad/img/about-img/membr-1.jpg",
    },
    {
      id: 4,
      name: "mohammad mohammadi",
      job: "CEO",
      phone: "+1 200-001-001",
      email: "mmd@gmail.com",
      profile:
        "https://garzak.ir/garzak_them/Real_Estate_etemad/img/about-img/membr-2.jpg",
    },
  ],
  consultants: [
    {
      id: 1,
      name: "Sina Soroosh",
      phone: "+1 000-000-000",
      email: "sina@gmail.com",
      job: "Sales consultant",
      fax: "+19292070142",
      profile:
        "https://garzak.ir/garzak_them/Real_Estate_etemad/img/single-property/small.png",
    },
    {
      id: 2,
      name: "Ali Mohammadi",
      phone: "+1 100-000-000",
      email: "ali@gmail.com",
      job: "Sales consultant",
      fax: "+18215022172",
      profile:
        "https://m-cdn.phonearena.com/images/articles/368419-image/P1650264.jpg",
    },
  ],
  cities: [
    { id: 1, name: "New York" },
    { id: 2, name: "Miami" },
    { id: 3, name: "Chicago" },
    { id: 4, name: "San Diego" },
    { id: 5, name: "Los Angeles" },
    { id: 6, name: "Austin" },
    { id: 7, name: "San Francisco" },
  ],
  blogs: [
    {
      id: 1,
      title:
        "$15.5m peninsula estate has equestrian arena and kilometres of lake frontage",
      desc: "The rare chance to secure a sprawling 19ha estate, surrounded by 2.5kms of foreshore and an array of native animals and birdlife, is up for grabs for a cool $15.5 million in the Sunshine Coast.",
      creator: "Sina Soroosh",
      createAt: "2023-09-15",
      cover:
        "https://www.realestate.com.au/news-image/w_420,h_240,c_fill,g_auto,fl_progressive/v1694759215/news-lifestyle-content-assets/wp-content/production/Lake-Macdonald-2_863466237d8.jpeg?_i=AA",
      body: `
      <p>Named Barellan, which means ‘meeting of the waters’, the expansive property at 16 Hayward Road, Lake Macdonald, features an original 1900s guest cottage, several paddocks, an equestrian arena and an extensive 553sqm main residence.</p>
      <p>
      <img src="https://www.realestate.com.au/news-image/w_800,h_476/v1694759120/news-lifestyle-content-assets/wp-content/production/Lake-Macdonald-1_863462d2061.webp?_i=AA" />
      </p>
      <p>Selling agent Tom Offermann from Tom Offermann Real Estate Noosa Heads said the residence has attracted phenomenal buyer interest so far, and would best suit a family with equestrian interests, who enjoyed a coastal and country lifestyle.</p>
      <p>“It's at a price range that isn't going to be available to everyone,” he said.</p>
      <p>“But you know I think it will suit the type of person that might buy the hinterland of Byron Bay ... someone that likes the country that likes the more sophisticated lifestyle that the coastal cities afford.”</p>
      <p>
      <img src="https://www.realestate.com.au/news-image/w_800,h_491/v1694759185/news-lifestyle-content-assets/wp-content/production/Lake-Macdonald-3.webp?_i=AA" />
      </p>
      <p>Describing the property as a piece of utopia, Mr Offermann said it was one of just 19 titles in the area to have lake frontage.</p>
      <p>“It's magnificent, it’s so private because it's on a big piece of land and jumps out into Lake McDonald, which is Noosa’s water supply lake,” he said.</p>
      <p>“It has over two kilometres of frontage to that lake, and it's a lake where you can have a boat on there, but only electric boats or sailing boats, and it's stocked with fish.”</p>
      <p>The three bedroom main residence is surrounded by a spacious wraparound veranda, with an interior comprising lofty pressed metal ceilings, French oak flooring, French Provincial-inspired chandeliers, and a wood fireplace.</p>
      `,
    },
    {
      id: 2,
      title: "The state where investors are flocking",
      desc: "The number of investor loans has risen over recent months; however, one state is attracting more investors than others.",
      creator: "Aeda Ebarhimi",
      createAt: "2023-01-05",
      cover:
        "https://www.realestate.com.au/news/wp-content/uploads/2023/09/GettyImages-520145734.jpg",
      body: `
      <p>New lending indicators data from the Australian Bureau of Statistics shows that new investor loan commitments rose by 11.6% in value from February to July 2023 nationally.</p>
      <p>
      <img src="https://www.realestate.com.au/news-image/w_800,h_578/v1694752232/news-lifestyle-content-assets/wp-content/production/New-commitments-for-investor-housing-values-by-state@2x.webp?_i=AA" />
      </p>
      <p>Although most states experienced growth in new investor loans over the same period, Queensland was significantly higher, with its new loan value increasing by 31% since February.</p>
      <p>At almost three times the national level, this growth reflects how popular the state is with buyers looking for investment properties.</p>
      <p>A similar trend is evident when we look at suburb-level investor data.</p>
      <p>
      <img src="https://www.realestate.com.au/news-image/w_800,h_553/v1694752635/news-lifestyle-content-assets/wp-content/production/Suburbs-with-the-most-investor-enquiries.webp?_i=AA" />
      </p>
      <p>Of the suburbs with the most email enquiries from investors during August, half were in Queensland.</p>
      <p>Surfers Paradise and South Port in the Gold Coast region, and Brisbane City were among the top five most enquired suburbs by buyers who intended to invest. Together they received more enquiries than Melbourne, Adelaide, and Sydney combined.</p>
      `,
    },
    {
      id: 3,
      title: "What are the most in-demand suburbs for buyers this spring?",
      desc: "Property market activity has been unseasonably high over the past few months, with higher listings and sales in many capital cities.",
      creator: "Shayan Akbarian",
      createAt: "2023-01-03",
      cover:
        "https://www.realestate.com.au/news-image/w_420,h_240,c_fill,g_auto,fl_progressive/v1694734481/news-lifestyle-content-assets/wp-content/production/St-kilda_863153dc615.jpg?_i=AA",
      body: `
      <p>Buyers were out in force in August with the number of highly engaged buyers per listing up 14.5% across the combined capital cities. In Perth, demand was up by 41%.</p>
      <p>Now that spring is officially here, where will property seekers set their sights?</p>
      <h2>Top suburbs for first-home buyers</h2>
      <p>Based on email enquiries sent to agents on realestate.com.au in August, first-home buyers were most interested in units in the Melbourne CBD, Parramatta in Sydney, and Brisbane City.</p>
      <p>High property prices and the numerous interest rate rises experienced over the previous year have made it more challenging for first-home buyers to afford a property, especially a house.</p>
      <p>Of the top 20 suburbs for first-home buyers, 60% had the highest enquiries for units.</p>
      <p>The closer the suburb is to the centre of a city, the less affordable properties become, forcing first-home buyers to lower their sights on units rather than houses.</p>
      <p>More first-home buyers also enquired about units in South Yarra and St Kilda in Melbourne, and Epping in Sydney.</p>
      <p>However, those buyers looking for an affordable house have had to set their sights further away from the city, in suburbs such as Tarneit and Point Cook in Melbourne and Forest Lake in Brisbane.</p>
      <p>It is telling that there are no Sydney suburbs on the list for the highest house enquiries, as it is the least affordable of all the major cities, and first-home buyers have been priced out of the market.</p>
      <h2>Top suburbs for investors</h2>
      <p>In recent months, investors have been returning to the market, although not at levels seen at the start of 2022, when new lending to investors was at its high.</p>
      `,
    },
    {
      id: 4,
      title: "Benowa’s most expensive property The Lakehouse going to auction",
      desc: "A luxury Gold Coast house that set a suburb record when it changed hands last year is set to go under the hammer with a fresh new marketing campaign kicking off this week.",
      creator: "mohammad mohammadi",
      createAt: "2022-12-29",
      cover:
        "https://www.realestate.com.au/news/wp-content/uploads/2023/09/capi_9ee3b5abcac8eb7c6c4a96eb0cbb7783_79459dd9b0a22b3cfeff08584e7ee325.jpeg",
      body: `
      <p>A luxury Gold Coast house that set a suburb record when it changed hands last year is set to go under the hammer with a fresh new marketing campaign kicking off this week.</p>
      <p>Kollosche Broadbeach agent Sam Guo and Julia Kuo are taking The Lakehouse, in Benowa, to auction on October 7.</p>
      <p>“This property will be sold on or before auction day,” the listing states.</p>
      <p>
      <img src="https://www.realestate.com.au/news-image/w_800,h_450/v1694746725/news-lifestyle-content-assets/wp-content/production/capi_9ee3b5abcac8eb7c6c4a96eb0cbb7783_b820000ec22d7262b1c9cfba4d94f49f_8633614b2e9.webp?_i=AA" />
      </p>
      <p>
      <img src="https://www.realestate.com.au/news-image/w_800,h_450/v1694746700/news-lifestyle-content-assets/wp-content/production/capi_9ee3b5abcac8eb7c6c4a96eb0cbb7783_189ff426a0a96b572a1843d1ef2edda6.webp?_i=AA" />
      </p>
      <p>It marks a shift in agents with the property first hitting the market via expressions of interest with a different agency in June.</p>
      <p>The Lakehouse’s $6.335 million mega deal was the highest price paid for a property in Benowa when it sold in April, 2022.</p>
      <p>It settled in June, 2022.</p>
      `,
    },
    {
      id: 5,
      title:
        "Mortgage wars: how borrowers are getting a home loan discount without refinancing",
      desc: "The cash rate is widely tipped to have reached its peak, but that doesn’t mean it’s all downhill for borrowers.",
      creator: "Sina Soroosh",
      createAt: "2023-12-25",
      cover:
        "https://www.realestate.com.au/news-image/w_420,h_240,c_fill,g_auto,fl_progressive/v1693440587/news-lifestyle-content-assets/wp-content/production/GettyImages-834087898.jpg?_i=AA",
      body: `
      <p>Mortgage Choice data shows lenders have continued to lift rates out of cycle on some fixed- and variable-rate home loan products, despite no move by the Reserve Bank of Australia for three consecutive months.</p>
      <p>But there’s substantial savings to be made for borrowers who get on the front foot, and they may not necessarily need to refinance to reap the benefits, according to Mortgage Choice broker Deslie Taylor. </p>
      <p>“Lenders are heavily focused on retention to keep that business on their books,” Ms Taylor said. “So our focus is every six months in my office we're doing quoting for clients to get their existing lender to offer them a better interest rate.” </p>
      <p>Ms Taylor says depending on factors such as a borrower's loan to value ratio, a variable rate of 5.79% to 5.84% is considered competitive in the current market. </p>
      <h2>Lenders fight to retain customers</h2>
      <p>RBA data shows early signs that the so-called ‘loyalty tax’ has started to unwind, although existing borrowers are still paying more than new borrowers on average.</p>
      <p>
      <img src="https://www.realestate.com.au/news/wp-content/uploads/2023/09/Screen-Shot-2023-09-12-at-3.22.11-pm.png" />
      </p>
      `,
    },
  ],
  propertiesTypes: [
    { id: 1, name: "Villa" },
    { id: 2, name: "Apartment" },
  ],
};

export default data;
