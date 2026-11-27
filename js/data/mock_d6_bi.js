/**
 * Full mock exam bank: Darjah 6 UASA Bahasa Inggeris (KSSR Semakan 2017 / CEFR A2, Parts 1-7).
 * Format follows official KPM UASA specifications. Verified 27/Nov/2026: Gate 1 (scripts/verify-structured-d6.mjs) + Gate 2 blind solve (gemini-4-argon, 0 flags, 100% agreement).
 */
(function (root, factory) {
  const out = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = out;
  } else {
    const App = (root.App = root.App || {});
    App.Data = App.Data || {};
    App.Data.mockObjective = App.Data.mockObjective || {};
    App.Data.mockObjective.d6_bi = { SETS: out.SETS };
    App.Data.structured = App.Data.structured || {};
    App.Data.structured.d6_bi = { ITEMS: out.ITEMS, marksOf: out.marksOf };
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const SETS = [
  {
    "id": "d6bi-P1-set1",
    "part": "1",
    "status": "verified",
    "passage": "",
    "items": [
      {
        "chapterId": "reading_comp",
        "passage": "SCHOOL LIBRARY NOTICE\nAll Year 6 pupils must return their borrowed storybooks before Friday, 16 October. Pupils who return books late will not be allowed to borrow any books during the November school holidays.",
        "q": "What will happen if a Year 6 pupil returns a storybook after 16 October?",
        "options": [
          "They must pay a fine at the office.",
          "They cannot borrow books during the November holidays.",
          "They have to stay back after school on Friday.",
          "They can keep the book until December."
        ],
        "correctIndex": 1,
        "explanation": "The notice states that pupils who return books late will not be allowed to borrow any books during the November school holidays."
      },
      {
        "chapterId": "reported_tags_comp",
        "passage": "WhatsApp Message from Amir to Mei Ling:\n\"Hi Mei Ling! My father is driving us to the Science Centre tomorrow, so you don't have to take the LRT. Please be ready at your house gate by 8.30 a.m.\"",
        "q": "Why does Amir send this message to Mei Ling?",
        "options": [
          "To ask her to buy LRT tickets for tomorrow.",
          "To tell her that the Science Centre is closed.",
          "To let her know his father will give her a lift.",
          "To invite her to meet him at the LRT station."
        ],
        "correctIndex": 2,
        "explanation": "Amir says his father is driving them, so Mei Ling does not have to take the LRT."
      },
      {
        "chapterId": "vocab_idioms",
        "passage": "SWIMMING POOL SAFETY SIGN\n• Shower before entering the pool.\n• No running on the wet tiles.\n• Children under 12 must wear a life jacket in the deep end.",
        "q": "Which rule must an 11-year-old child follow in the deep end?",
        "options": [
          "Run quickly across the wet tiles.",
          "Put on a life jacket.",
          "Swim without taking a shower.",
          "Bring an adult into the shower."
        ],
        "correctIndex": 1,
        "explanation": "An 11-year-old is under 12, so the sign requires them to wear a life jacket in the deep end."
      },
      {
        "chapterId": "conditionals_passive",
        "passage": "ECO-CLUB POSTER\nBring your old plastic bottles and newspapers to the school hall every Wednesday. All collected bottles are sent to a recycling factory to be made into new bags.",
        "q": "What happens to the plastic bottles collected by the Eco-Club?",
        "options": [
          "They are sold to Year 6 pupils in the hall.",
          "They are thrown away every Wednesday.",
          "They are turned into new bags at a factory.",
          "They are used to make school newspapers."
        ],
        "correctIndex": 2,
        "explanation": "The poster explains that all collected bottles are sent to a recycling factory to be made into new bags."
      },
      {
        "chapterId": "tenses",
        "passage": "NOTE ON KITCHEN TABLE\nDear Hakim,\nI have already cooked fried rice for your lunch. Please heat it up before eating. I haven't washed the dishes yet, so could you help me with them?\nLove, Mum",
        "q": "Which task has Mum NOT done yet?",
        "options": [
          "Cooking fried rice.",
          "Writing a note to Hakim.",
          "Washing the dishes.",
          "Preparing Hakim's lunch."
        ],
        "correctIndex": 2,
        "explanation": "Mum writes 'I haven't washed the dishes yet', meaning she still needs Hakim's help with washing the dishes."
      }
    ]
  },
  {
    "id": "d6bi-P1-set2",
    "part": "1",
    "status": "verified",
    "passage": "",
    "items": [
      {
        "chapterId": "reading_comp",
        "passage": "BATU CAVES BUS TIMETABLE\nBus 173 leaves Pasar Seni at 9.00 a.m. and arrives at Batu Caves at 9.45 a.m. On Sundays, the first bus starts one hour later at 10.00 a.m.",
        "q": "When does the first Bus 173 leave Pasar Seni on a Sunday?",
        "options": [
          "9.00 a.m.",
          "9.45 a.m.",
          "10.00 a.m.",
          "10.45 a.m."
        ],
        "correctIndex": 2,
        "explanation": "The timetable states that on Sundays, the first bus starts one hour later at 10.00 a.m."
      },
      {
        "chapterId": "vocab_idioms",
        "passage": "SCHOOL CANTEEN MENU SPECIAL\nChicken Rice: RM5.50 (Free iced syrup!)\nNasi Lemak: RM4.00\nFresh Watermelon Juice: RM2.50\n*Special offer only from 10.00 a.m. to 10.30 a.m.",
        "q": "How much will Siti pay if she buys Chicken Rice and gets the free drink at 10.15 a.m.?",
        "options": [
          "RM4.00",
          "RM5.50",
          "RM6.50",
          "RM8.00"
        ],
        "correctIndex": 1,
        "explanation": "At 10.15 a.m. (during the special offer), Chicken Rice costs RM5.50 and includes free iced syrup."
      },
      {
        "chapterId": "reported_tags_comp",
        "passage": "Text Message from Coach Lim:\n\"Badminton practice is cancelled this afternoon because the hall roof is leaking. We will have extra training this Saturday from 8.00 a.m. to 10.00 a.m. instead.\"",
        "q": "Why is there no badminton practice this afternoon?",
        "options": [
          "Coach Lim is away until Saturday.",
          "Water is leaking from the hall roof.",
          "The players want to train on Saturday.",
          "The badminton hall is being painted."
        ],
        "correctIndex": 1,
        "explanation": "Coach Lim states that practice is cancelled because the hall roof is leaking."
      },
      {
        "chapterId": "parts_of_speech",
        "passage": "MUSEUM SIGN\nPlease speak quietly inside the gallery. Flash photography is not allowed because bright lights can damage the old paintings.",
        "q": "Why must visitors turn off their camera flash in the gallery?",
        "options": [
          "The bright light may harm the old paintings.",
          "Cameras make too much noise inside.",
          "Visitors are not allowed to bring phones.",
          "The gallery is too dark for photographs."
        ],
        "correctIndex": 0,
        "explanation": "The sign warns that bright lights from flash photography can damage the old paintings."
      },
      {
        "chapterId": "conditionals_passive",
        "passage": "WEATHER ALERT FOR CAMERON HIGHLANDS\nHeavy rain is expected tonight. If it rains heavily, the morning jungle walk at 7.00 a.m. will be replaced with an indoor tea-making talk.",
        "q": "What will happen if there is heavy rain tonight?",
        "options": [
          "The jungle walk will start at 8.00 a.m.",
          "Pupils will visit the jungle in raincoats.",
          "There will be an indoor talk instead of the walk.",
          "The trip to Cameron Highlands will be cancelled."
        ],
        "correctIndex": 2,
        "explanation": "The alert states that if it rains heavily, the jungle walk will be replaced with an indoor tea-making talk."
      }
    ]
  },
  {
    "id": "d6bi-P2-set1",
    "part": "2",
    "status": "verified",
    "passage": "Last Saturday, Danial and his family visited a traditional kampung house in Melaka. While they (6) ________ around the wooden house, an elderly guide told them interesting stories about life in the past. People (7) ________ use oil lamps at night because there was no electricity then. Danial asked the guide, 'How long (8) ________ you lived in this village?' The guide smiled and replied that he had stayed there (9) ________ 1965. Before leaving, Danial bought a small woven basket made of bamboo as a souvenir for his grandmother.",
    "items": [
      {
        "chapterId": "tenses",
        "passage": "",
        "q": "Choose the best answer for blank (6).",
        "options": [
          "walk",
          "walked",
          "were walking",
          "are walking"
        ],
        "correctIndex": 2,
        "explanation": "Past continuous ('were walking') is used after 'While' for an ongoing background action in the past interrupted by 'told'."
      },
      {
        "chapterId": "tenses",
        "passage": "",
        "q": "Choose the best word for blank (7).",
        "options": [
          "used to",
          "use to",
          "using to",
          "are used"
        ],
        "correctIndex": 0,
        "explanation": "'used to' describes a past habit or situation that is no longer true today."
      },
      {
        "chapterId": "tenses",
        "passage": "",
        "q": "Choose the best word for blank (8).",
        "options": [
          "did",
          "do",
          "has",
          "have"
        ],
        "correctIndex": 3,
        "explanation": "Present perfect with 'How long ...?' and subject 'you' requires 'have' ('How long have you lived...?')."
      },
      {
        "chapterId": "parts_of_speech",
        "passage": "",
        "q": "Choose the best word for blank (9).",
        "options": [
          "for",
          "since",
          "from",
          "during"
        ],
        "correctIndex": 1,
        "explanation": "'since' is used with a specific starting year ('1965') in the present perfect."
      }
    ]
  },
  {
    "id": "d6bi-P2-set2",
    "part": "2",
    "status": "verified",
    "passage": "Have you ever wondered how chocolate is made? First, ripe cocoa pods (6) ________ from cocoa trees on farms. Next, the cocoa beans inside are dried under the hot sun for several days. After that, they are roasted in big machines and crushed into a thick paste. Sugar and milk are added to make it sweet. If a factory (7) ________ good quality beans, the chocolate will taste rich and smooth. Chocolate is popular everywhere, (8) ________ it? My little sister loves dark chocolate, but I think it is (9) ________ bitter for me to enjoy.",
    "items": [
      {
        "chapterId": "conditionals_passive",
        "passage": "",
        "q": "Choose the best answer for blank (6).",
        "options": [
          "pick",
          "picked",
          "is picked",
          "are picked"
        ],
        "correctIndex": 3,
        "explanation": "Plural subject 'cocoa pods' receives the action in the present simple passive, so 'are picked' is correct."
      },
      {
        "chapterId": "conditionals_passive",
        "passage": "",
        "q": "Choose the best word for blank (7).",
        "options": [
          "use",
          "uses",
          "used",
          "will use"
        ],
        "correctIndex": 1,
        "explanation": "In a First Conditional if-clause with singular subject 'a factory', we use present simple 'uses' (never 'will')."
      },
      {
        "chapterId": "reported_tags_comp",
        "passage": "",
        "q": "Choose the best word for blank (8).",
        "options": [
          "is",
          "isn't",
          "does",
          "doesn't"
        ],
        "correctIndex": 1,
        "explanation": "The statement 'Chocolate is popular everywhere' is positive with 'is', so the question tag is negative: 'isn't it?'."
      },
      {
        "chapterId": "parts_of_speech",
        "passage": "",
        "q": "Choose the best word for blank (9).",
        "options": [
          "too",
          "enough",
          "very",
          "as"
        ],
        "correctIndex": 0,
        "explanation": "'too + adjective + for me to...' expresses excess, meaning it is more bitter than I can enjoy."
      }
    ]
  },
  {
    "id": "d6bi-P3-set1",
    "part": "3",
    "status": "verified",
    "passage": "Last month, SK Taman Melati organised a two-day camping trip at Hutan Lipur Sungai Congkak. Forty Year 6 pupils joined the trip, accompanied by four teachers. Everyone arrived at the campsite at 9.00 a.m. on Saturday, feeling excited.\n\nFirst, the pupils learned how to pitch tents in small groups. At first, Farhan's group struggled because the wind was strong, and their tent fell down twice. Fortunately, Cikgu Razak showed them how to hammer the pegs firmly into the ground. After lunch, the pupils went on a jungle trek. Along the way, they saw tall ferns, colourful butterflies, and a clear waterfall.\n\nIn the evening, dark clouds suddenly covered the sky while the pupils were preparing dinner. Heavy rain started pouring down, so the teachers quickly moved everyone into a sheltered hall nearby. Although they could not light a campfire outside, the pupils still had a wonderful time singing songs and playing indoor games together. The next morning, the sun shone brightly again, and everyone packed up and returned home safely.",
    "items": [
      {
        "chapterId": "reading_comp",
        "passage": "",
        "q": "How many people in total went on the camping trip?",
        "options": [
          "40",
          "42",
          "44",
          "46"
        ],
        "correctIndex": 2,
        "explanation": "There were 40 Year 6 pupils and 4 teachers, making 44 people in total."
      },
      {
        "chapterId": "reading_comp",
        "passage": "",
        "q": "Why did Farhan's group have trouble pitching their tent at first?",
        "options": [
          "They forgot to bring the tent pegs.",
          "The wind was blowing strongly.",
          "Cikgu Razak was busy with lunch.",
          "The ground was too wet from the rain."
        ],
        "correctIndex": 1,
        "explanation": "The passage says Farhan's group struggled because the wind was strong and their tent fell down twice."
      },
      {
        "chapterId": "reading_comp",
        "passage": "",
        "q": "What were the pupils doing when it started to rain heavily?",
        "options": [
          "Trekking in the jungle.",
          "Hammering tent pegs.",
          "Preparing dinner.",
          "Singing songs in the hall."
        ],
        "correctIndex": 2,
        "explanation": "The text states that dark clouds covered the sky while the pupils were preparing dinner."
      },
      {
        "chapterId": "reading_comp",
        "passage": "",
        "q": "The word 'sheltered' in paragraph 3 means ________.",
        "options": [
          "protected from rain and wind",
          "far away from the campsite",
          "very dark and frightening",
          "decorated with campfires"
        ],
        "correctIndex": 0,
        "explanation": "The teachers moved everyone into a sheltered hall because of the heavy rain, meaning a covered place protected from the weather."
      },
      {
        "chapterId": "reading_comp",
        "passage": "",
        "q": "What is the best title for this story?",
        "options": [
          "Lost in Sungai Congkak",
          "A Rainy but Fun Camping Trip",
          "How to Cook Dinner Outdoors",
          "The Day the Tents Blew Away"
        ],
        "correctIndex": 1,
        "explanation": "Even though heavy rain stopped the campfire, the pupils still had a wonderful time indoors, making 'A Rainy but Fun Camping Trip' the best title."
      }
    ]
  },
  {
    "id": "d6bi-P3-set2",
    "part": "3",
    "status": "verified",
    "passage": "Have you ever heard of a foley artist? A foley artist is a person who creates everyday sound effects for films, cartoons, and television programmes. When you watch a movie, the sound of footsteps, closing doors, or falling rain is often not recorded during filming. Instead, foley artists make those sounds later in a quiet recording studio.\n\nTo make realistic sounds, foley artists use ordinary objects in creative ways. For example, they might hit two coconut shells together to sound like a horse galloping on a road. They can also crunch dry leaves in a box to copy the sound of someone walking in a forest, or flap a pair of leather gloves to sound like a bird flying past.\n\nA good foley artist must watch the screen carefully so that every sound matches the actors' movements at the exact moment. Although audiences rarely notice their work, foley artists make films feel much more real and exciting. Next time you watch your favourite cartoon, listen closely to the background sounds!",
    "items": [
      {
        "chapterId": "reading_comp",
        "passage": "",
        "q": "What is the main job of a foley artist?",
        "options": [
          "To write the dialogue for cartoons.",
          "To create everyday sound effects in a studio.",
          "To record actors speaking outdoors.",
          "To direct movies and television shows."
        ],
        "correctIndex": 1,
        "explanation": "Paragraph 1 explains that a foley artist creates everyday sound effects for films, cartoons, and TV programmes in a recording studio."
      },
      {
        "chapterId": "reading_comp",
        "passage": "",
        "q": "Which object is used to make the sound of a galloping horse?",
        "options": [
          "Dry leaves in a box",
          "A pair of leather gloves",
          "Two coconut shells",
          "Wooden studio doors"
        ],
        "correctIndex": 2,
        "explanation": "Paragraph 2 states that hitting two coconut shells together sounds like a horse galloping on a road."
      },
      {
        "chapterId": "reading_comp",
        "passage": "",
        "q": "Why must a foley artist watch the screen carefully?",
        "options": [
          "To make sure the sounds match the actors' movements.",
          "To check if the actors remember their lines.",
          "To learn how to fly like a bird.",
          "To keep the recording studio quiet."
        ],
        "correctIndex": 0,
        "explanation": "Paragraph 3 explains that they watch the screen carefully so every sound matches the actors' movements at the exact moment."
      },
      {
        "chapterId": "reading_comp",
        "passage": "",
        "q": "The word 'ordinary' in paragraph 2 is closest in meaning to ________.",
        "options": [
          "expensive",
          "dangerous",
          "common",
          "modern"
        ],
        "correctIndex": 2,
        "explanation": "'Ordinary' objects like coconut shells, dry leaves, and gloves are everyday, common things."
      },
      {
        "chapterId": "reading_comp",
        "passage": "",
        "q": "What does the writer think about foley artists?",
        "options": [
          "Their work is easy and anyone can do it.",
          "Audiences should stop watching cartoons.",
          "They should record sounds outside the studio.",
          "Their work makes films feel more real and exciting."
        ],
        "correctIndex": 3,
        "explanation": "Paragraph 3 says that although audiences rarely notice their work, foley artists make films feel much more real and exciting."
      }
    ]
  },
  {
    "id": "d6bi-P4-set1",
    "part": "4",
    "status": "verified",
    "passage": "Read the three texts about weekend clubs for pupils.\n\nText A — Junior Robotics Club\nMeet every Saturday from 9.00 a.m. to 11.00 a.m. in the Computer Lab. Pupils learn how to build small robots and write simple computer code. All parts and laptops are provided by the school, so you do not need to bring any equipment. Open to Year 5 and Year 6 pupils only.\n\nText B — Green Fingers Gardening Club\nJoin us every Sunday morning from 8.00 a.m. to 9.30 a.m. at the school eco-garden. Members plant vegetables, water herbs, and learn how to make compost from food waste. Please wear old shoes and bring your own gardening gloves and a water bottle. Open to all pupils from Year 4 to Year 6.\n\nText C — Young Reporters Club\nDo you enjoy writing stories and taking photos? Come to the Library on Saturday afternoons from 2.00 p.m. to 4.00 p.m. Members interview teachers, write articles, and design the school's monthly e-newsletter. Bring a notebook and a pen. Open to Year 6 pupils who love English.",
    "items": [
      {
        "chapterId": "reading_comp",
        "passage": "",
        "q": "Which club meets on Sunday morning?",
        "options": [
          "Text A",
          "Text B",
          "Text C"
        ],
        "correctIndex": 1,
        "explanation": "Text B (Green Fingers Gardening Club) meets every Sunday morning from 8.00 a.m. to 9.30 a.m."
      },
      {
        "chapterId": "reading_comp",
        "passage": "",
        "q": "Which club provides all the equipment you need?",
        "options": [
          "Text A",
          "Text B",
          "Text C"
        ],
        "correctIndex": 0,
        "explanation": "Text A states that all parts and laptops are provided by the school, so you do not need to bring any equipment."
      },
      {
        "chapterId": "reading_comp",
        "passage": "",
        "q": "Which club is open ONLY to Year 6 pupils?",
        "options": [
          "Text A",
          "Text B",
          "Text C"
        ],
        "correctIndex": 2,
        "explanation": "Text C (Young Reporters Club) is open to Year 6 pupils only, whereas Text A includes Year 5 and Text B includes Year 4 to Year 6."
      },
      {
        "chapterId": "reading_comp",
        "passage": "",
        "q": "Which club teaches pupils how to turn food waste into compost?",
        "options": [
          "Text A",
          "Text B",
          "Text C"
        ],
        "correctIndex": 1,
        "explanation": "Text B says members learn how to make compost from food waste."
      },
      {
        "chapterId": "reading_comp",
        "passage": "",
        "q": "Which club meets in the school library?",
        "options": [
          "Text A",
          "Text B",
          "Text C"
        ],
        "correctIndex": 2,
        "explanation": "Text C states: 'Come to the Library on Saturday afternoons'."
      },
      {
        "chapterId": "reading_comp",
        "passage": "",
        "q": "Which club teaches pupils how to write computer code?",
        "options": [
          "Text A",
          "Text B",
          "Text C"
        ],
        "correctIndex": 0,
        "explanation": "Text A says pupils learn how to build small robots and write simple computer code."
      }
    ]
  },
  {
    "id": "d6bi-P4-set2",
    "part": "4",
    "status": "verified",
    "passage": "Read the three texts about three pupils' favourite jobs for the future.\n\nText A — Aiman\nWhen I grow up, I want to be a firefighter. It is a dangerous job, but it is very rewarding because I can save people and animals during emergencies. I already exercise every evening to stay strong and fit. Last week, I visited a fire station and sat inside a red fire engine!\n\nText B — Priya\nI hope to become a marine biologist. I have loved the ocean since I was seven years old. Marine biologists study sea creatures like turtles and coral reefs to protect them from water pollution. My uncle works at an aquarium, and he often lends me books about ocean wildlife.\n\nText C — Kevin\nMy dream is to be a pastry chef. I enjoy baking cakes and biscuits with my mother every weekend. Last month, I baked a chocolate cake for my grandfather's birthday, and everyone said it was delicious! When I finish school, I want to open a small bakery in Penang.",
    "items": [
      {
        "chapterId": "reading_comp",
        "passage": "",
        "q": "Who wants to protect sea creatures from pollution?",
        "options": [
          "Text A",
          "Text B",
          "Text C"
        ],
        "correctIndex": 1,
        "explanation": "Text B (Priya) wants to become a marine biologist to study sea creatures and protect them from water pollution."
      },
      {
        "chapterId": "reading_comp",
        "passage": "",
        "q": "Who practises a hobby with a parent every weekend?",
        "options": [
          "Text A",
          "Text B",
          "Text C"
        ],
        "correctIndex": 2,
        "explanation": "Text C (Kevin) enjoys baking cakes and biscuits with his mother every weekend."
      },
      {
        "chapterId": "reading_comp",
        "passage": "",
        "q": "Who exercises regularly to prepare for a future job?",
        "options": [
          "Text A",
          "Text B",
          "Text C"
        ],
        "correctIndex": 0,
        "explanation": "Text A (Aiman) exercises every evening to stay strong and fit for becoming a firefighter."
      },
      {
        "chapterId": "reading_comp",
        "passage": "",
        "q": "Who gets books about their interest from a relative?",
        "options": [
          "Text A",
          "Text B",
          "Text C"
        ],
        "correctIndex": 1,
        "explanation": "Text B (Priya) says her uncle works at an aquarium and often lends her books about ocean wildlife."
      },
      {
        "chapterId": "reading_comp",
        "passage": "",
        "q": "Who plans to start their own shop in Penang one day?",
        "options": [
          "Text A",
          "Text B",
          "Text C"
        ],
        "correctIndex": 2,
        "explanation": "Text C (Kevin) wants to open a small bakery in Penang when he finishes school."
      },
      {
        "chapterId": "reading_comp",
        "passage": "",
        "q": "Who recently visited a workplace related to their dream job?",
        "options": [
          "Text A",
          "Text B",
          "Text C"
        ],
        "correctIndex": 0,
        "explanation": "Text A (Aiman) visited a fire station last week and sat inside a red fire engine."
      }
    ]
  },
  {
    "id": "d6bi-P5-set1",
    "part": "5",
    "status": "verified",
    "passage": "Read the clues and complete the words related to emergencies, travel, and outdoor adventures.",
    "items": [
      {
        "chapterId": "vocab_idioms",
        "inputType": "word",
        "passage": "",
        "q": "A small tool with a needle that always points north, used when hiking in a forest.",
        "clue": "c _ _ _ _ _ _",
        "answer": "compass",
        "accept": [
          "compass"
        ],
        "explanation": "A 'compass' is a navigation tool whose needle points north."
      },
      {
        "chapterId": "vocab_idioms",
        "inputType": "word",
        "passage": "",
        "q": "A large bag with shoulder straps that you carry on your back during a camping trip.",
        "clue": "r _ _ _ _ _ _ _",
        "answer": "rucksack",
        "accept": [
          "rucksack"
        ],
        "explanation": "A 'rucksack' (backpack) is carried on the back during hiking or camping."
      },
      {
        "chapterId": "vocab_idioms",
        "inputType": "word",
        "passage": "",
        "q": "A special vehicle with a siren that takes sick or injured people to the hospital quickly.",
        "clue": "a _ _ _ _ _ _ _ _",
        "answer": "ambulance",
        "accept": [
          "ambulance"
        ],
        "explanation": "An 'ambulance' is an emergency vehicle for transporting patients to hospital."
      },
      {
        "chapterId": "vocab_idioms",
        "inputType": "word",
        "passage": "",
        "q": "A person who is travelling in a bus, train, or car, but is not the driver.",
        "clue": "p _ _ _ _ _ _ _ _",
        "answer": "passenger",
        "accept": [
          "passenger"
        ],
        "explanation": "A 'passenger' travels in a vehicle without driving it."
      },
      {
        "chapterId": "vocab_idioms",
        "inputType": "word",
        "passage": "",
        "q": "A trained swimmer at a beach or swimming pool whose job is to rescue people in danger.",
        "clue": "l _ _ _ _ _ _ _ _",
        "answer": "lifeguard",
        "accept": [
          "lifeguard"
        ],
        "explanation": "A 'lifeguard' watches over swimmers and rescues anyone in danger."
      }
    ]
  },
  {
    "id": "d6bi-P5-set2",
    "part": "5",
    "status": "verified",
    "passage": "Read the clues and complete the words related to jobs, materials, music, and mysteries.",
    "items": [
      {
        "chapterId": "vocab_idioms",
        "inputType": "word",
        "passage": "",
        "q": "A person who thinks of and creates a new machine, tool, or device for the first time.",
        "clue": "i _ _ _ _ _ _ _",
        "answer": "inventor",
        "accept": [
          "inventor"
        ],
        "explanation": "An 'inventor' creates new machines or devices that did not exist before."
      },
      {
        "chapterId": "vocab_idioms",
        "inputType": "word",
        "passage": "",
        "q": "A soft white plant material that is used to make T-shirts, towels, and cool clothes.",
        "clue": "c _ _ _ _ _",
        "answer": "cotton",
        "accept": [
          "cotton"
        ],
        "explanation": "'Cotton' is a natural plant fibre used to make soft clothing and towels."
      },
      {
        "chapterId": "vocab_idioms",
        "inputType": "word",
        "passage": "",
        "q": "A large group of musicians playing violins, flutes, drums, and other instruments together.",
        "clue": "o _ _ _ _ _ _ _ _",
        "answer": "orchestra",
        "accept": [
          "orchestra"
        ],
        "explanation": "An 'orchestra' is a large musical group playing different instruments together."
      },
      {
        "chapterId": "vocab_idioms",
        "inputType": "word",
        "passage": "",
        "q": "A police officer or investigator whose job is to look for clues and solve mysteries.",
        "clue": "d _ _ _ _ _ _ _ _",
        "answer": "detective",
        "accept": [
          "detective"
        ],
        "explanation": "A 'detective' investigates clues to solve crimes or mysteries."
      },
      {
        "chapterId": "vocab_idioms",
        "inputType": "word",
        "passage": "",
        "q": "A book or website that lists words in alphabetical order and explains their meanings.",
        "clue": "d _ _ _ _ _ _ _ _ _",
        "answer": "dictionary",
        "accept": [
          "dictionary"
        ],
        "explanation": "A 'dictionary' gives the spelling and meaning of words in alphabetical order."
      }
    ]
  }
];

  const ITEMS = [
  {
    "id": "d6bi-P6-01",
    "chapterId": "reading_comp",
    "part": "6",
    "level": "sederhana",
    "status": "verified",
    "stem": "Your cousin, Adam, wants to join your school's Saturday cycling trip next week. Write an email to Adam.\n\nIn your email, tell him:\n• what time and where to meet\n• what safety items he must bring\n• why you are excited about the trip\n\nWrite about 30 to 50 words.",
    "parts": [
      {
        "label": "",
        "q": "Write the email to Adam in 30 to 50 words, covering all three bullet points.",
        "marks": 10,
        "steps": [
          {
            "kind": "M",
            "marks": 2,
            "text": "Appropriate email greeting and closing for a cousin (e.g., Hi Adam, ... / See you soon, ...)."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "States clearly what time and where to meet (e.g., 7.30 a.m. at the school gate)."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Mentions suitable safety items to bring (e.g., helmet, water bottle, knee pads)."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Explains why the writer is excited about the cycling trip."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Accurate grammar, spelling, punctuation, and word count within 30–50 words."
          }
        ],
        "answer": "Hi Adam,\n\nI am so glad you can join our Saturday cycling trip! Let's meet at the school gate at 7.30 a.m. Please remember to bring your helmet and a water bottle. I am really excited because we will cycle along the scenic lake path together.\n\nSee you soon,\nHafiz"
      }
    ]
  },
  {
    "id": "d6bi-P6-02",
    "chapterId": "reading_comp",
    "part": "6",
    "level": "sederhana",
    "status": "verified",
    "stem": "You borrowed your classmate Mei Ying's storybook last week, and you have finished reading it. Write a short note to Mei Ying.\n\nIn your note:\n• thank her for lending you the book\n• say what you liked best about the story\n• tell her when you will return the book\n\nWrite about 30 to 50 words.",
    "parts": [
      {
        "label": "",
        "q": "Write the short note to Mei Ying in 30 to 50 words, covering all three bullet points.",
        "marks": 10,
        "steps": [
          {
            "kind": "M",
            "marks": 2,
            "text": "Friendly note greeting and sign-off suitable for a classmate."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Thanks Mei Ying for lending the storybook."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "States one specific thing liked best about the story."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Clearly states when the book will be returned."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Clear sentence structure, correct tenses, punctuation, and 30–50 words."
          }
        ],
        "answer": "Dear Mei Ying,\n\nThank you very much for lending me your adventure storybook. I loved the exciting ending when the children finally solved the mystery! I have finished reading it and will return it to you tomorrow morning before assembly.\n\nYour friend,\nNadia"
      }
    ]
  },
  {
    "id": "d6bi-P6-03",
    "chapterId": "reading_comp",
    "part": "6",
    "level": "sederhana",
    "status": "verified",
    "stem": "Your friend, Daniel, is asking what you and your family are going to do during the school holidays. Write an email to Daniel.\n\nIn your email, tell him:\n• where you are going\n• how you will travel there\n• one activity you plan to do\n\nWrite about 30 to 50 words.",
    "parts": [
      {
        "label": "",
        "q": "Write the email to Daniel in 30 to 50 words, covering all three bullet points.",
        "marks": 10,
        "steps": [
          {
            "kind": "M",
            "marks": 2,
            "text": "Informal email opening and closing addressed to Daniel."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "States the holiday destination clearly."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "States the mode of transport used to travel there."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Describes at least one planned activity using appropriate future forms."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Accurate spelling, grammar ('going to' / 'will'), punctuation, and 30–50 words."
          }
        ],
        "answer": "Hi Daniel,\n\nDuring the school holidays, my family is going to Penang! We will travel there by train from Kuala Lumpur, which takes about four hours. I am going to ride the cable car up Penang Hill and try some famous char kuey teow.\n\nBest wishes,\nSyahmi"
      }
    ]
  },
  {
    "id": "d6bi-P7-01",
    "chapterId": "reading_comp",
    "part": "7",
    "level": "sederhana",
    "status": "verified",
    "stem": "You saw a poster about your school's Annual Recycling Day:\n\nSK BUKIT INDAH — ANNUAL RECYCLING DAY\n• Date: Saturday, 24 October\n• Time: 8.30 a.m. – 12.30 p.m.\n• Venue: School Hall\n• Items to bring: Old newspapers, plastic bottles, aluminium cans\n• Activities: Eco-craft workshop, recycling quiz, prize for the cleanest class\n\nWrite an email to invite your friend, Arif, to join the event with you. Write about 60 to 80 words.",
    "parts": [
      {
        "label": "",
        "q": "Write an email to Arif (60–80 words) using the details from the poster.",
        "marks": 15,
        "steps": [
          {
            "kind": "M",
            "marks": 2,
            "text": "Appropriate email format with greeting, inviting opening, and friendly sign-off."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Includes event name, date, time, and venue accurately (Saturday, 24 October, 8.30 a.m. – 12.30 p.m., School Hall)."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Mentions items to bring (old newspapers, plastic bottles, aluminium cans)."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Describes the activities available (eco-craft workshop, recycling quiz, cleanest class prize)."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Adds a natural personal suggestion or reason to go together."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Coherent paragraphing and smooth linking words (e.g., 'First', 'Besides', 'Also')."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Accurate grammar, prepositions of time/place ('on Saturday', 'at 8.30 a.m.'), and spelling."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Appropriate tone and length (60–80 words)."
          }
        ],
        "answer": "Hi Arif,\n\nWould you like to join our school's Annual Recycling Day with me? It will be held at the School Hall on Saturday, 24 October, from 8.30 a.m. to 12.30 p.m.\n\nWe can bring old newspapers, plastic bottles, and aluminium cans from home. There will be a fun eco-craft workshop and a recycling quiz. Plus, our class might win the prize for the cleanest class!\n\nLet's meet at the gate at 8.15 a.m. Reply soon!\n\nYour friend,\nIrfan"
      }
    ]
  },
  {
    "id": "d6bi-P7-02",
    "chapterId": "reading_comp",
    "part": "7",
    "level": "sederhana",
    "status": "verified",
    "stem": "Your school is organising a Music & Talent Night. Read the event details below:\n\nSK TAMAN JAYA — MUSIC & TALENT NIGHT\n• Date: Friday, 13 November\n• Time: 7.30 p.m. – 9.30 p.m.\n• Place: Dewan Seri Jaya\n• Ticket: RM5 per person (free for pupils performing)\n• Performances: School orchestra, Year 6 choir, traditional Malay dance\n\nWrite an email to your pen pal, Lisa, to tell her about this upcoming event and what you are going to do. Write about 60 to 80 words.",
    "parts": [
      {
        "label": "",
        "q": "Write an email to Lisa (60–80 words) using the event details.",
        "marks": 15,
        "steps": [
          {
            "kind": "M",
            "marks": 2,
            "text": "Appropriate email greeting and closing for a pen pal."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "States the event name, date, time, and venue accurately."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Mentions the ticket price and free entry for performers."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Describes the performances (school orchestra, Year 6 choir, traditional Malay dance)."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Explains what the writer is going to do at the event."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Logical flow and natural connectors linking sentences."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Correct use of future forms ('will', 'going to') and accurate spelling/punctuation."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Appropriate informal tone and word count (60–80 words)."
          }
        ],
        "answer": "Dear Lisa,\n\nHow are you? I am writing to tell you about my school's Music & Talent Night. It is on Friday, 13 November, from 7.30 p.m. to 9.30 p.m. at Dewan Seri Jaya.\n\nTickets cost RM5 each, but performers enter for free. There will be performances by the school orchestra, the Year 6 choir, and a traditional Malay dance group. I am going to sing in the choir, so I am practising every day!\n\nWrite back soon,\nAisyah"
      }
    ]
  },
  {
    "id": "d6bi-P7-03",
    "chapterId": "reading_comp",
    "part": "7",
    "level": "tinggi",
    "status": "verified",
    "stem": "You read a notice about a First Aid Workshop for Year 6 pupils:\n\nJUNIOR FIRST AID WORKSHOP\n• Date: Sunday, 8 November\n• Time: 9.00 a.m. – 1.00 p.m.\n• Venue: School Science Room\n• Fee: RM10 (includes a mini first aid kit & certificate)\n• Trainer: Nurse Farah from Klinik Kesihatan\n• What you will learn: Treating small cuts, bandaging a sprained ankle, calling 999 in emergencies\n\nWrite an email to your cousin, Wei Ming, to encourage him to join the workshop with you. Write about 60 to 80 words.",
    "parts": [
      {
        "label": "",
        "q": "Write an email to Wei Ming (60–80 words) using the workshop details.",
        "marks": 15,
        "steps": [
          {
            "kind": "M",
            "marks": 2,
            "text": "Warm email greeting and closing suitable for a cousin."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Gives the workshop name, date, time, and venue accurately."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Mentions the RM10 fee and what it includes (mini first aid kit and certificate)."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Names the trainer (Nurse Farah) and the practical skills taught."
          },
          {
            "kind": "M",
            "marks": 2,
            "text": "Encourages Wei Ming to join and explains why the skills are useful."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Well-structured paragraphs with effective linking words."
          },
          {
            "kind": "A",
            "marks": 2,
            "text": "Accurate grammar, modal verbs/conditionals, and spelling."
          },
          {
            "kind": "A",
            "marks": 1,
            "text": "Persuasive friendly tone and word count (60–80 words)."
          }
        ],
        "answer": "Hi Wei Ming,\n\nAre you free on Sunday, 8 November? My school is holding a Junior First Aid Workshop in the Science Room from 9.00 a.m. to 1.00 p.m. The fee is RM10, including a mini first aid kit and a certificate!\n\nNurse Farah will teach us to treat small cuts, bandage a sprained ankle, and call 999 in emergencies. We will learn useful skills to help others. Let's join together!\n\nBest,\nEthan"
      }
    ]
  }
];

  const marksOf = (it) => it.parts.reduce((a, p) => a + p.marks, 0);
  return { SETS, ITEMS, marksOf };
});
