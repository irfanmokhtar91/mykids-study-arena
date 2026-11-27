/**
 * Darjah 6 Bahasa Inggeris variant question pool (KSSR Semakan 2017, Academy Stars Year 6, Units 1-10).
 * Every item carries unit, skill, difficulty (L/M/H), 4 unique options,
 * verified correctIndex, concise explanation, and textbook page ref.
 */
(function (global) {
  const App = (global.App = global.App || {});
  App.Pools = App.Pools || {};
  App.Pools.d6 = App.Pools.d6 || {};

  const items = [
  {
    "id": "d6_bi_u1_s1_01",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "Aina _______ her homework when the electricity went off in her house in Kuantan.",
    "options": [
      "was doing",
      "did",
      "is doing",
      "does"
    ],
    "correctIndex": 0,
    "explanation": "Use the past continuous ('was doing') for the longer action in progress when the shorter past simple action ('went off') happened.",
    "ref": "Unit 1, p. 11"
  },
  {
    "id": "d6_bi_u1_s1_02",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "The pupils at Sekolah Kebangsaan Taman Melati were rehearsing for the school concert when the fire alarm _______.",
    "options": [
      "was ringing",
      "rings",
      "rang",
      "ring"
    ],
    "correctIndex": 2,
    "explanation": "After 'when' in an interrupted past sentence, use the past simple ('rang') for the sudden event.",
    "ref": "Unit 1, p. 11"
  },
  {
    "id": "d6_bi_u1_s1_03",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "Amir's father _______ laksa in the kitchen when the lights suddenly went out.",
    "options": [
      "cooks",
      "was cooking",
      "cooked",
      "were cooking"
    ],
    "correctIndex": 1,
    "explanation": "The subject 'Amir's father' is singular, so we use 'was cooking' for the ongoing past action.",
    "ref": "Unit 1, p. 11"
  },
  {
    "id": "d6_bi_u1_s1_04",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "Mei Ling was walking to the bus stop in Penang _______ it started to rain heavily.",
    "options": [
      "while",
      "because",
      "when",
      "during"
    ],
    "correctIndex": 2,
    "explanation": "We use 'when' before a short past simple action ('it started to rain') that interrupts an ongoing action.",
    "ref": "Unit 1, p. 12"
  },
  {
    "id": "d6_bi_u1_s1_05",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "L",
    "q": "The fire engine arrived at the school _______ the students were waiting in the field.",
    "options": [
      "when",
      "so",
      "after",
      "while"
    ],
    "correctIndex": 3,
    "explanation": "We use 'while' before a past continuous clause ('the students were waiting') to show the longer background action.",
    "ref": "Unit 1, p. 12"
  },
  {
    "id": "d6_bi_u1_s1_06",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "M",
    "q": "What _______ Kavita doing when the power cut hit Johor Bahru?",
    "options": [
      "was",
      "were",
      "did",
      "is"
    ],
    "correctIndex": 0,
    "explanation": "Past continuous questions with a singular subject ('Kavita') use 'was' + subject + '-ing' verb.",
    "ref": "Unit 1, p. 12"
  },
  {
    "id": "d6_bi_u1_s1_07",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "M",
    "q": "Danish _______ his bicycle along the road when a monkey jumped out from a tree.",
    "options": [
      "wasn't watching",
      "didn't watch",
      "weren't watching",
      "isn't watching"
    ],
    "correctIndex": 0,
    "explanation": "Negative past continuous for a singular subject ('Danish') is 'wasn't' + '-ing' verb.",
    "ref": "Unit 1, p. 11"
  },
  {
    "id": "d6_bi_u1_s1_08",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "M",
    "q": "Choose the correct sentence.",
    "options": [
      "While I walked home in Melaka, I was seeing an ambulance.",
      "I was walking home in Melaka while I saw an ambulance.",
      "I was walking home in Melaka when I saw an ambulance.",
      "I walked home in Melaka when I was seeing an ambulance."
    ],
    "correctIndex": 2,
    "explanation": "'Past continuous + when + past simple' is the correct pattern for an ongoing action ('was walking') interrupted by a short event ('saw').",
    "ref": "Unit 1, p. 12"
  },
  {
    "id": "d6_bi_u1_s1_09",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "H",
    "q": "Which sentence uses BOTH 'while' and the verb tenses correctly?",
    "options": [
      "The lifeguard spotted the swimmer while he was looking through his binoculars.",
      "The lifeguard was spotting the swimmer while he looked through his binoculars.",
      "While the lifeguard spotted the swimmer, he was looking through his binoculars.",
      "The lifeguard spotted the swimmer when he was looking through his binoculars."
    ],
    "correctIndex": 0,
    "explanation": "The pattern 'past simple + while + past continuous' puts the short action ('spotted') in past simple and the ongoing action ('was looking') after 'while'.",
    "ref": "Unit 1, p. 12"
  },
  {
    "id": "d6_bi_u1_s1_10",
    "unit": "u1",
    "skill": "u1_s1",
    "diff": "H",
    "q": "Read the sentence and find the mistake: 'Farah and Siti was doing a science experiment when the fire drill started.' Which correction makes it accurate?",
    "options": [
      "Change 'was doing' to 'were doing'.",
      "Change 'when' to 'while'.",
      "Change 'started' to 'was starting'.",
      "Change 'experiment' to 'experiments'."
    ],
    "correctIndex": 0,
    "explanation": "The subject 'Farah and Siti' is plural, so it requires 'were doing' instead of 'was doing'.",
    "ref": "Unit 1, p. 11–12"
  },
  {
    "id": "d6_bi_u1_s2_01",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "After the road _______ in Ipoh, someone called 999 for an ambulance.",
    "options": [
      "accident",
      "experiment",
      "rehearsal",
      "heating"
    ],
    "correctIndex": 0,
    "explanation": "An 'accident' is something bad that happens and often hurts someone, requiring an ambulance.",
    "ref": "Unit 1, p. 134"
  },
  {
    "id": "d6_bi_u1_s2_02",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "Before getting onto the boat to Pulau Redang, every passenger put on a _______ to stay safe in the water.",
    "options": [
      "fire engine",
      "life jacket",
      "cooker",
      "torch"
    ],
    "correctIndex": 1,
    "explanation": "A 'life jacket' is worn to help you float if you fall into the water.",
    "ref": "Unit 1, p. 134"
  },
  {
    "id": "d6_bi_u1_s2_03",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "During a _______ at school, pupils practise leaving the classrooms quickly and lining up at the assembly point.",
    "options": [
      "power cut",
      "concert",
      "fire drill",
      "science experiment"
    ],
    "correctIndex": 2,
    "explanation": "A 'fire drill' is an activity to practise leaving a building quickly in case there is a real fire.",
    "ref": "Unit 1, p. 12, 134"
  },
  {
    "id": "d6_bi_u1_s2_04",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "Zaki tripped over a bag in front of the whole assembly. He felt very _______.",
    "options": [
      "embarrassing",
      "embarrassed",
      "terrifying",
      "frightening"
    ],
    "correctIndex": 1,
    "explanation": "Use '-ed' adjectives ('embarrassed') to describe how a person feels.",
    "ref": "Unit 1, p. 15"
  },
  {
    "id": "d6_bi_u1_s2_05",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "L",
    "q": "Black _______ was rising from the car engine, so the driver stopped by the side of the highway.",
    "options": [
      "smoke",
      "electricity",
      "power",
      "whisper"
    ],
    "correctIndex": 0,
    "explanation": "'Smoke' is a cloud of gases that rises from something that is burning.",
    "ref": "Unit 1, p. 134"
  },
  {
    "id": "d6_bi_u1_s2_06",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "M",
    "q": "The thunder during the storm in Kuching was _______, and my little sister was _______.",
    "options": [
      "frightened / frightening",
      "frightening / frightened",
      "terrified / terrifying",
      "worried / worrying"
    ],
    "correctIndex": 1,
    "explanation": "Use '-ing' ('frightening') for the thing that causes the feeling (the thunder) and '-ed' ('frightened') for how the person feels.",
    "ref": "Unit 1, p. 15"
  },
  {
    "id": "d6_bi_u1_s2_07",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "M",
    "q": "Which sentence uses the word 'cook' or 'cooker' correctly?",
    "options": [
      "Our electric cooker stopped working during the power cut.",
      "My mother bought a new cook for the kitchen.",
      "We couldn't cooker nasi lemak without electricity.",
      "The cooker is a person who writes newspaper articles."
    ],
    "correctIndex": 0,
    "explanation": "'Cooker' is the noun for the machine used to cook food, whereas 'cook' (verb) means to prepare food.",
    "ref": "Unit 1, p. 10, 134"
  },
  {
    "id": "d6_bi_u1_s2_08",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "M",
    "q": "A fishing boat had engine trouble near Kota Kinabalu, so the coastguard sent a fast _______ to help the crew.",
    "options": [
      "ambulance",
      "rescue boat",
      "fire engine",
      "life jacket"
    ],
    "correctIndex": 1,
    "explanation": "A 'rescue boat' is a fast boat sent out from shore to help another boat or ship in difficulty.",
    "ref": "Unit 1, p. 13, 134"
  },
  {
    "id": "d6_bi_u1_s2_09",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "H",
    "q": "In which sentence is the underlined word used as a NOUN rather than a verb? 'I heard a loud (1) scream, so I (2) ran outside and (3) shouted for help before the (4) ambulance arrived.'",
    "options": [
      "scream",
      "ran",
      "shouted",
      "arrived"
    ],
    "correctIndex": 0,
    "explanation": "After 'a loud', 'scream' names a sound (a noun). 'Ran', 'shouted', and 'arrived' are all action verbs.",
    "ref": "Unit 1, p. 10"
  },
  {
    "id": "d6_bi_u1_s2_10",
    "unit": "u1",
    "skill": "u1_s2",
    "diff": "H",
    "q": "Read the pair of sentences: '1. It was an _______ experience when the lift stopped. 2. Everyone felt _______ when the lights came back on.' Which pair of words fits best?",
    "options": [
      "embarrassed / exciting",
      "alarming / relieved",
      "worried / surprising",
      "terrifying / exciting"
    ],
    "correctIndex": 1,
    "explanation": "'Alarming' (-ing) describes the scary experience that caused the feeling, and 'relieved' (-ed) describes how the people felt once the danger passed.",
    "ref": "Unit 1, p. 15"
  },
  {
    "id": "d6_bi_u1_s3_01",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "L",
    "q": "Read this newspaper excerpt:\n\"PENANG POST — STORM CUTS POWER IN GEORGE TOWN. Heavy rain and strong winds hit Penang last night. Over 50,000 homes had no electricity for three hours.\"\nWhat is the headline of this newspaper article?",
    "options": [
      "PENANG POST",
      "STORM CUTS POWER IN GEORGE TOWN",
      "Heavy rain and strong winds hit Penang last night.",
      "Over 50,000 homes had no electricity for three hours."
    ],
    "correctIndex": 1,
    "explanation": "The headline is the short, bold title of the news story ('STORM CUTS POWER IN GEORGE TOWN').",
    "ref": "Unit 1, p. 8–9"
  },
  {
    "id": "d6_bi_u1_s3_02",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "L",
    "q": "Read this newspaper excerpt:\n\"A fallen tree blocked Jalan Tun Razak yesterday evening. 'I was driving home when the tree crashed onto the road,' said Encik Hafiz, a taxi driver. Firefighters cleared the road within an hour.\"\nWho said the quoted words in the article?",
    "options": [
      "A firefighter",
      "A newspaper reporter",
      "Encik Hafiz",
      "A police officer"
    ],
    "correctIndex": 2,
    "explanation": "The words inside quotation marks are followed by 'said Encik Hafiz, a taxi driver'.",
    "ref": "Unit 1, p. 9–10"
  },
  {
    "id": "d6_bi_u1_s3_03",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "L",
    "q": "Read this newspaper excerpt:\n\"Students at SK Seri Putra practised a fire drill at 9 a.m. today. 'Everyone walked calmly to the field,' explained Puan Nora, the headmistress. The drill finished in four minutes.\"\nHow can a reader recognise direct speech in this excerpt?",
    "options": [
      "It is written in all capital letters.",
      "It is inside quotation marks.",
      "It is always at the very end of the article.",
      "It has a photo caption underneath it."
    ],
    "correctIndex": 1,
    "explanation": "Direct speech shows the exact words someone said and is placed inside quotation marks ('...').",
    "ref": "Unit 1, p. 14"
  },
  {
    "id": "d6_bi_u1_s3_04",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "L",
    "q": "Read this newspaper excerpt:\n\"FLASH FLOOD CLOSES VILLAGE ROAD. By Nurul Huda. Rising river water covered Kampung Baru after two hours of rain. Boats helped residents reach higher ground.\"\nWhat does 'By Nurul Huda' tell the reader?",
    "options": [
      "The name of the town",
      "The name of the reporter who wrote the article",
      "The caption for a photograph",
      "The main quote from a witness"
    ],
    "correctIndex": 1,
    "explanation": "'By [Name]' is the byline, which tells us who wrote the newspaper article.",
    "ref": "Unit 1, p. 9"
  },
  {
    "id": "d6_bi_u1_s3_05",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "L",
    "q": "Read this newspaper excerpt:\n\"Photo shows firefighters checking the school kitchen after smoke was spotted at noon. No one was hurt during the incident. Lessons continued as normal after lunch.\"\nWhere would you find the first sentence under a newspaper photograph?",
    "options": [
      "In the caption",
      "In the headline",
      "In the subheading",
      "In the conclusion"
    ],
    "correctIndex": 0,
    "explanation": "A caption is the short text placed next to or under a photograph to explain what it shows.",
    "ref": "Unit 1, p. 8–9"
  },
  {
    "id": "d6_bi_u1_s3_06",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "M",
    "q": "Read this newspaper excerpt:\n\"A ferry stopped near Langkawi yesterday when its engine failed. 'I was a bit worried at first, but the crew kept us safe,' said 11-year-old Chong Wei. A rescue boat towed the ferry back to the jetty.\"\nWhy did the reporter include Chong Wei's quote?",
    "options": [
      "To list the ferry's ticket prices",
      "To show how a passenger felt during the emergency",
      "To explain how boat engines are built",
      "To replace the headline of the article"
    ],
    "correctIndex": 1,
    "explanation": "Reporters use direct speech to show how people felt and to make the story clear and exciting.",
    "ref": "Unit 1, p. 14"
  },
  {
    "id": "d6_bi_u1_s3_07",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "M",
    "q": "Read this newspaper excerpt:\n\"RESCUE TEAM SAVES HIKER ON MOUNT KINABALU. Rescue workers carried an injured climber down the trail after he slipped on wet rocks. 'He broke his ankle, so we moved very carefully,' said team leader Encik Roslan.\"\nWhich part of a newspaper article gives the background of who, where, and what happened first?",
    "options": [
      "The caption",
      "The introduction",
      "The direct speech",
      "The conclusion"
    ],
    "correctIndex": 1,
    "explanation": "A newspaper article is organised into an introduction (who, where, what happened), main body (details and feelings), and conclusion (how it ended).",
    "ref": "Unit 1, p. 14–15"
  },
  {
    "id": "d6_bi_u1_s3_08",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "M",
    "q": "Read this newspaper excerpt:\n\"Traffic lights stopped working along Jalan Ampang at 8 a.m. today. 'Drivers had to be very patient,' said Constable Bala. Police officers directed traffic until power returned at 10 a.m.\"\nHow long were the traffic lights without power?",
    "options": [
      "One hour",
      "Two hours",
      "Eight hours",
      "Ten hours"
    ],
    "correctIndex": 1,
    "explanation": "Power went out at 8 a.m. and returned at 10 a.m., which is two hours.",
    "ref": "Unit 1, p. 9–10"
  },
  {
    "id": "d6_bi_u1_s3_09",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "H",
    "q": "Read this newspaper excerpt:\n\"POWER CUT HITS KOTA BHARU MARKET. Shopkeepers lit candles when the lights went out at 6 p.m. 'We couldn't use our electric scales, so we closed early,' explained Madam Lim. Electricity returned safely at 9 p.m.\"\nWhich sentence is the BEST subheading to add right below the headline?",
    "options": [
      "CANDLES ON SALE IN TOWN",
      "SHOPKEEPERS CLOSE EARLY AS DARKNESS FALLS",
      "MADAM LIM BUYS ELECTRIC SCALES",
      "KOTA BHARU OPENS NEW MARKET"
    ],
    "correctIndex": 1,
    "explanation": "A subheading summarises the key details of the story right under the headline—here, shopkeepers closing early because of the darkness.",
    "ref": "Unit 1, p. 8–9"
  },
  {
    "id": "d6_bi_u1_s3_10",
    "unit": "u1",
    "skill": "u1_s3",
    "diff": "H",
    "q": "Read this newspaper excerpt:\n\"A squirrel chewed through a cable in Seremban, cutting power to 2,000 houses. 'We are very sorry for the inconvenience,' said a power company spokesperson. Engineers repaired the cable before midnight.\"\nWhich statement is NOT supported by the excerpt?",
    "options": [
      "An animal caused the power cut.",
      "Two thousand houses lost electricity.",
      "The power company apologised for the problem.",
      "Engineers took three days to fix the cable."
    ],
    "correctIndex": 3,
    "explanation": "The excerpt states engineers repaired the cable before midnight, not that it took three days.",
    "ref": "Unit 1, p. 9–10"
  },
  {
    "id": "d6_bi_u2_s1_01",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "Fifty years ago, Aina's grandfather _______ in a small wooden house near Melaka.",
    "options": [
      "use to live",
      "used to live",
      "used to lived",
      "uses to live"
    ],
    "correctIndex": 1,
    "explanation": "In affirmative sentences about past habits or states, use 'used to' + base verb ('used to live').",
    "ref": "Unit 2, p. 25"
  },
  {
    "id": "d6_bi_u2_s1_02",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "In the past, people in the village _______ electricity, so they lit oil lamps at night.",
    "options": [
      "didn't used to have",
      "didn't use to have",
      "not used to have",
      "don't use to have"
    ],
    "correctIndex": 1,
    "explanation": "In negative sentences with 'didn't', drop the '-d' and write 'didn't use to' + base verb.",
    "ref": "Unit 2, p. 25"
  },
  {
    "id": "d6_bi_u2_s1_03",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "_______ your grandmother use to walk to school in Ipoh?",
    "options": [
      "Was",
      "Does",
      "Did",
      "Were"
    ],
    "correctIndex": 2,
    "explanation": "Yes/no questions with 'use to' start with 'Did' + subject + 'use to' + base verb.",
    "ref": "Unit 2, p. 26"
  },
  {
    "id": "d6_bi_u2_s1_04",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "When Amir was four years old, he used to _______ with toy cars every afternoon.",
    "options": [
      "played",
      "playing",
      "plays",
      "play"
    ],
    "correctIndex": 3,
    "explanation": "'Used to' is always followed by the base form of the verb ('play').",
    "ref": "Unit 2, p. 25"
  },
  {
    "id": "d6_bi_u2_s1_05",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "L",
    "q": "A: Did you use to have a computer when you were young, Grandpa?\nB: No, _______.",
    "options": [
      "I didn't",
      "I wasn't",
      "I don't",
      "I hadn't"
    ],
    "correctIndex": 0,
    "explanation": "Questions starting with 'Did you use to...?' are answered with 'Yes, I did.' or 'No, I didn't.'",
    "ref": "Unit 2, p. 26"
  },
  {
    "id": "d6_bi_u2_s1_06",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "M",
    "q": "Where _______ your parents use to go for holidays before you were born?",
    "options": [
      "did",
      "were",
      "used",
      "do"
    ],
    "correctIndex": 0,
    "explanation": "Wh- questions about past habits follow the pattern: Wh- word + 'did' + subject + 'use to' + base verb.",
    "ref": "Unit 2, p. 26"
  },
  {
    "id": "d6_bi_u2_s1_07",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "M",
    "q": "There weren't any calculators in that old school, so the pupils _______ maths problems in their heads.",
    "options": [
      "used to do",
      "didn't use to do",
      "use to did",
      "were used to doing"
    ],
    "correctIndex": 0,
    "explanation": "Without calculators, pupils regularly solved maths in their heads, so affirmative 'used to do' fits the meaning.",
    "ref": "Unit 2, p. 26"
  },
  {
    "id": "d6_bi_u2_s1_08",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "M",
    "q": "Choose the grammatically CORRECT sentence.",
    "options": [
      "Did Encik Azman used to work in an office in Kuching?",
      "Encik Azman didn't used to work in an office in Kuching.",
      "Did Encik Azman use to work in an office in Kuching?",
      "Encik Azman use to work in an office in Kuching."
    ],
    "correctIndex": 2,
    "explanation": "After 'Did' in a question, we use 'use to' (without '-d') + base verb.",
    "ref": "Unit 2, p. 26"
  },
  {
    "id": "d6_bi_u2_s1_09",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "H",
    "q": "Which sentence CANNOT use 'used to' because it describes a single event rather than a past habit or state?",
    "options": [
      "Mei Ling used to live in Penang when she was a baby.",
      "Yesterday, Mei Ling used to buy a new watch at the mall.",
      "Mei Ling didn't use to like spicy food, but now she loves it.",
      "Mei Ling used to walk two kilometres to school every morning."
    ],
    "correctIndex": 1,
    "explanation": "'Used to' describes repeated past habits or long-term past states, not a single completed action yesterday.",
    "ref": "Unit 2, p. 25"
  },
  {
    "id": "d6_bi_u2_s1_10",
    "unit": "u2",
    "skill": "u2_s1",
    "diff": "H",
    "q": "Put the words in order to form a correct question: 'chores / what / use / you / did / do / to / ?'",
    "options": [
      "What chores did you use to do?",
      "What did chores you use to do?",
      "What chores you did use to do?",
      "What chores used you to do?"
    ],
    "correctIndex": 0,
    "explanation": "The correct question word order is 'What chores' + 'did' + 'you' + 'use to' + 'do?'.",
    "ref": "Unit 2, p. 26"
  },
  {
    "id": "d6_bi_u2_s2_01",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "Before electricity arrived in the kampung, families used an _______ to see at night.",
    "options": [
      "oil lamp",
      "ink",
      "office",
      "calculator"
    ],
    "correctIndex": 0,
    "explanation": "An 'oil lamp' is a light that works by burning oil.",
    "ref": "Unit 2, p. 27, 135"
  },
  {
    "id": "d6_bi_u2_s2_02",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "A _______ showed our class around the Melaka museum and told us stories about life 300 years ago.",
    "options": [
      "soldier",
      "servant",
      "guide",
      "sailor"
    ],
    "correctIndex": 2,
    "explanation": "A 'guide' is a person who shows people round places of interest and gives information.",
    "ref": "Unit 2, p. 135"
  },
  {
    "id": "d6_bi_u2_s2_03",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "The weather at the top of Cameron Highlands early in the morning was _______, so we wore thick jackets.",
    "options": [
      "freezing",
      "communicating",
      "burying",
      "digging"
    ],
    "correctIndex": 0,
    "explanation": "'Freezing' means very, very cold.",
    "ref": "Unit 2, p. 22, 135"
  },
  {
    "id": "d6_bi_u2_s2_04",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "Make a person noun from the verb 'teach': Puan Salmah is a wonderful _______ at our school.",
    "options": [
      "teachor",
      "teacher",
      "teaching",
      "teaches"
    ],
    "correctIndex": 1,
    "explanation": "We add '-er' to 'teach' to form the person noun 'teacher'.",
    "ref": "Unit 2, p. 24"
  },
  {
    "id": "d6_bi_u2_s2_05",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "L",
    "q": "Make a person noun from the verb 'act': Danish wants to be a famous _______ in Malaysian films.",
    "options": [
      "acter",
      "action",
      "actor",
      "active"
    ],
    "correctIndex": 2,
    "explanation": "We add '-or' to 'act' to form the person noun 'actor'.",
    "ref": "Unit 2, p. 24"
  },
  {
    "id": "d6_bi_u2_s2_06",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "M",
    "q": "In the past, people worried that a fire might _______ their wooden houses, so they _______ their valuable possessions in the garden.",
    "options": [
      "burn down / buried",
      "build / vacuumed",
      "communicate / dug",
      "paint / froze"
    ],
    "correctIndex": 0,
    "explanation": "'Burn down' means to destroy with fire, and 'bury (buried)' means to put something in the ground and cover it.",
    "ref": "Unit 2, p. 23, 135"
  },
  {
    "id": "d6_bi_u2_s2_07",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "M",
    "q": "Which group of verbs ALL form person nouns by adding '-or' (not '-er')?",
    "options": [
      "act, invent, visit, direct",
      "paint, build, teach, sail",
      "act, build, visit, teach",
      "invent, paint, direct, build"
    ],
    "correctIndex": 0,
    "explanation": "'Actor', 'inventor', 'visitor', and 'director' all take '-or', while 'painter', 'builder', and 'teacher' take '-er'.",
    "ref": "Unit 2, p. 24"
  },
  {
    "id": "d6_bi_u2_s2_08",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "M",
    "q": "A wealthy artist painted a _______ of the Sultan's family so future generations would know what they looked like.",
    "options": [
      "carpet",
      "cottage",
      "portrait",
      "calculator"
    ],
    "correctIndex": 2,
    "explanation": "A 'portrait' is a picture or painting of a person.",
    "ref": "Unit 2, p. 23, 135"
  },
  {
    "id": "d6_bi_u2_s2_09",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "H",
    "q": "Read this story about 300 years ago: 'It was dark in the cottage, so Ahmad lit a candle. He picked up his pen and ink to write a letter, and then he checked his calculator.' Which item does NOT belong to 300 years ago?",
    "options": [
      "a cottage",
      "a candle",
      "pen and ink",
      "a calculator"
    ],
    "correctIndex": 3,
    "explanation": "People 300 years ago lived in cottages and used candles, pens, and ink, but they did not have electronic calculators.",
    "ref": "Unit 2, p. 26, 31"
  },
  {
    "id": "d6_bi_u2_s2_10",
    "unit": "u2",
    "skill": "u2_s2",
    "diff": "H",
    "q": "Complete the sentence with the correct noun form: 'The _______ (sail) guided his ship safely across the sea, while the _______ (build) repaired the wooden jetty.'",
    "options": [
      "sailer / builder",
      "sailor / builder",
      "sailor / buildor",
      "sailing / building"
    ],
    "correctIndex": 1,
    "explanation": "'Sail' takes '-or' ('sailor'), while 'build' takes '-er' ('builder').",
    "ref": "Unit 2, p. 24"
  },
  {
    "id": "d6_bi_u2_s3_01",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "L",
    "q": "Read this diary excerpt:\n\"Saturday, 14th March. What a day!! My little brother spilled Milo all over my science project! Arrgh! I had to start again from the beginning.\"\nWhat did the writer put at the very start of the diary entry?",
    "options": [
      "A headline",
      "The day and date",
      "A photo caption",
      "A list of rules"
    ],
    "correctIndex": 1,
    "explanation": "Diary entries normally begin with the day and date ('Saturday, 14th March').",
    "ref": "Unit 2, p. 22, 28"
  },
  {
    "id": "d6_bi_u2_s3_02",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "L",
    "q": "Read this diary excerpt:\n\"Sunday, 3rd May. We went to the Penang Butterfly Farm today. A huge butterfly landed right on Amir's nose! Ha! Ha! Ha! It was awesome!\"\nWhich word in the excerpt is a sound or noise used in informal diary writing?",
    "options": [
      "Butterfly",
      "Amir's",
      "Ha! Ha! Ha!",
      "Penang"
    ],
    "correctIndex": 2,
    "explanation": "'Ha! Ha! Ha!' represents the sound of laughing, which is a common informal feature in diaries.",
    "ref": "Unit 2, p. 28–29"
  },
  {
    "id": "d6_bi_u2_s3_03",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "L",
    "q": "Read this diary excerpt:\n\"Tuesday, 19th August. Mum cooked spicy curry for dinner, and I forgot my water bottle at school. Yuck! I HATE spicy food without water!\"\nWhy did the writer write 'HATE' in block capital letters?",
    "options": [
      "Because it is the name of a place",
      "To show a very strong feeling",
      "Because it is a formal newspaper headline",
      "To show that someone is whispering"
    ],
    "correctIndex": 1,
    "explanation": "Block capital letters are used in informal diaries to emphasise strong feelings.",
    "ref": "Unit 2, p. 28–29"
  },
  {
    "id": "d6_bi_u2_s3_04",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "L",
    "q": "Read this diary excerpt:\n\"Friday, 2nd October. Today we visited the Sarawak Cultural Village. Tomorrow I can sleep late because it's the weekend!!\"\nAre personal diaries usually formal or informal?",
    "options": [
      "Formal",
      "Informal",
      "Scientific",
      "Official"
    ],
    "correctIndex": 1,
    "explanation": "Personal diaries are informal and use exclamation marks, casual words, and personal feelings.",
    "ref": "Unit 2, p. 28"
  },
  {
    "id": "d6_bi_u2_s3_05",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "L",
    "q": "Read this diary excerpt:\n\"Wednesday, 11th November. I couldn't read the whiteboard clearly in class, so Dad took me to buy glasses this afternoon. Now everything looks so sharp!\"\nWhy did the writer buy glasses?",
    "options": [
      "Because their old glasses broke",
      "Because they couldn't see the whiteboard clearly",
      "Because Dad wanted a new pair",
      "Because it was a school uniform rule"
    ],
    "correctIndex": 1,
    "explanation": "The excerpt states directly that the writer couldn't read the whiteboard clearly in class.",
    "ref": "Unit 2, p. 23–24"
  },
  {
    "id": "d6_bi_u2_s3_06",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "M",
    "q": "Read this diary excerpt:\n\"Monday, 6th July. Cikgu Rani gave us three pages of maths homework today. She used to be my favourite teacher, too! Arrgh!\"\nWhat can we infer about how the writer feels towards Cikgu Rani today?",
    "options": [
      "The writer is annoyed about getting so much homework.",
      "The writer is excited to do extra maths.",
      "The writer wants to become a maths teacher.",
      "The writer is grateful for the three pages."
    ],
    "correctIndex": 0,
    "explanation": "Saying 'She used to be my favourite teacher' and 'Arrgh!' implies the writer is annoyed about the heavy homework.",
    "ref": "Unit 2, p. 24, 28"
  },
  {
    "id": "d6_bi_u2_s3_07",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "M",
    "q": "Read this diary excerpt:\n\"Thursday, 20th August. The power went out during the thunderstorm, so we couldn't use the computer. Dad lit two candles and we played congkak until midnight.\"\nWhich statement is TRUE based on the excerpt?",
    "options": [
      "The family played computer games until midnight.",
      "The storm happened in the morning.",
      "They used candles because there was no electricity.",
      "Dad went to sleep early because it was dark."
    ],
    "correctIndex": 2,
    "explanation": "Since the power went out, they had no electricity for the computer and lit candles for light.",
    "ref": "Unit 2, p. 22, 24"
  },
  {
    "id": "d6_bi_u2_s3_08",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "M",
    "q": "Read this diary excerpt:\n\"Sunday, 12th April. I woke up early and couldn't see the clock in the dark. Then I heard the roosters crowing outside, so I knew it was nearly 6 a.m.\"\nHow did the writer know the approximate time?",
    "options": [
      "By checking a watch with a light",
      "By listening to the roosters outside",
      "By asking a servant",
      "By looking at a phone"
    ],
    "correctIndex": 1,
    "explanation": "The writer couldn't see the clock in the dark, so hearing the roosters crowing gave the clue that it was nearly 6 a.m.",
    "ref": "Unit 2, p. 22, 24"
  },
  {
    "id": "d6_bi_u2_s3_09",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "H",
    "q": "Read this diary excerpt:\n\"Friday, 8th May. My cousin Farah is getting her portrait painted tomorrow. She has to sit completely still for two hours, and she's only six! I hope she doesn't look grumpy in the painting.\"\nWhy is the writer worried about the portrait?",
    "options": [
      "Farah might get tired of sitting still and look unhappy.",
      "The artist doesn't know how to paint children.",
      "Farah lost her favourite necklace.",
      "The paint will take two days to dry."
    ],
    "correctIndex": 0,
    "explanation": "Because Farah is only six and must sit completely still for two hours, the writer worries she will get uncomfortable and look grumpy.",
    "ref": "Unit 2, p. 23–24"
  },
  {
    "id": "d6_bi_u2_s3_10",
    "unit": "u2",
    "skill": "u2_s3",
    "diff": "H",
    "q": "Read this diary excerpt:\n\"Saturday, 18th July. We went to the National Museum in Kuala Lumpur! The old oil lamps were cool, and I loved the traditional costumes. Best trip EVER!!\"\nWhich THREE informal diary features appear in this excerpt?",
    "options": [
      "Exclamation marks, block capital letters, and informal words ('cool')",
      "Quotation marks, a byline, and a headline",
      "Sound words, formal greetings, and a caption",
      "Block capital letters, past continuous, and a subheading"
    ],
    "correctIndex": 0,
    "explanation": "The excerpt uses exclamation marks ('!', '!!'), block capitals ('EVER'), and informal vocabulary ('cool').",
    "ref": "Unit 2, p. 28–29"
  },
  {
    "id": "d6_bi_u3_s1_01",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Choose the correct sentence to talk about a life experience.",
    "options": [
      "Aina has never visited Kuching.",
      "Aina hasn't never visited Kuching.",
      "Aina have never visited Kuching.",
      "Aina is never visited Kuching."
    ],
    "correctIndex": 0,
    "explanation": "With a singular subject ('Aina'), we use 'has never' + past participle ('visited'). We never use 'hasn't' together with 'never'.",
    "ref": "Unit 3, p. 37"
  },
  {
    "id": "d6_bi_u3_s1_02",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Complete the question: '______ you ever climbed Mount Kinabalu?'",
    "options": [
      "Has",
      "Have",
      "Did",
      "Are"
    ],
    "correctIndex": 1,
    "explanation": "Present perfect questions with 'you' and 'ever' begin with 'Have' followed by the past participle ('climbed').",
    "ref": "Unit 3, p. 38"
  },
  {
    "id": "d6_bi_u3_s1_03",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Amir: 'Have you ever been camping in Taman Negara?'\nDanish: 'No, ______.'",
    "options": [
      "I didn't",
      "I hasn't",
      "I haven't",
      "I don't"
    ],
    "correctIndex": 2,
    "explanation": "A negative short answer to a 'Have you ...?' question is 'No, I haven't.'",
    "ref": "Unit 3, p. 38"
  },
  {
    "id": "d6_bi_u3_s1_04",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Complete the sentence: 'Mei Ling and Kavita ______ tried kayaking on the river.'",
    "options": [
      "has",
      "are",
      "was",
      "have"
    ],
    "correctIndex": 3,
    "explanation": "'Mei Ling and Kavita' is a plural subject, so it takes 'have' + past participle ('tried').",
    "ref": "Unit 3, p. 37"
  },
  {
    "id": "d6_bi_u3_s1_05",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "L",
    "q": "Which word correctly completes the question: 'Has your brother ______ slept in a sleeping bag?'",
    "options": [
      "never",
      "ever",
      "already",
      "yesterday"
    ],
    "correctIndex": 1,
    "explanation": "We use 'ever' in present perfect questions to ask about any time up to now.",
    "ref": "Unit 3, p. 38"
  },
  {
    "id": "d6_bi_u3_s1_06",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "M",
    "q": "Choose the correct sentence using the prompts: (he / never / fly / in a hot-air balloon)",
    "options": [
      "He's never flown in a hot-air balloon.",
      "He's never flew in a hot-air balloon.",
      "He hasn't never flown in a hot-air balloon.",
      "He's ever flown in a hot-air balloon."
    ],
    "correctIndex": 0,
    "explanation": "'He's' ('He has') + 'never' + the past participle 'flown' forms a correct negative experience sentence.",
    "ref": "Unit 3, p. 37"
  },
  {
    "id": "d6_bi_u3_s1_07",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "M",
    "q": "Read the dialogue and choose the best reply.\nSiti: 'Has your sister ever acted in a school play?'\nFarah: '______'",
    "options": [
      "Yes, she have.",
      "Yes, she did.",
      "Yes, she has.",
      "No, she haven't."
    ],
    "correctIndex": 2,
    "explanation": "When the question starts with 'Has your sister ...?', the short answer uses 'has' or 'hasn't' ('Yes, she has.').",
    "ref": "Unit 3, p. 38"
  },
  {
    "id": "d6_bi_u3_s1_08",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "M",
    "q": "Which sentence has a GRAMMAR mistake?",
    "options": [
      "We've travelled to Langkawi by ferry.",
      "My cousins have never seen a hornbill in the wild.",
      "Have you ever swam in the sea?",
      "Haziq has written a blog about his camping trip."
    ],
    "correctIndex": 2,
    "explanation": "After 'Have you ever', we need the past participle 'swum', not the past simple 'swam'.",
    "ref": "Unit 3, pp. 36–37"
  },
  {
    "id": "d6_bi_u3_s1_09",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "H",
    "q": "Complete the sentence so it is both grammatically correct and meaningful:\n'I've been to Penang three times, ______ I've ______ taken the funicular train up Penang Hill.'",
    "options": [
      "and / ever",
      "but / never",
      "but / ever",
      "so / never"
    ],
    "correctIndex": 1,
    "explanation": "'But' shows contrast between visiting Penang and not having an experience there, and 'never' expresses a negative experience in an affirmative verb form ('I've never taken').",
    "ref": "Unit 3, p. 37"
  },
  {
    "id": "d6_bi_u3_s1_10",
    "unit": "u3",
    "skill": "u3_s1",
    "diff": "H",
    "q": "Aina wants to ask her new classmate if he knows how to pitch a tent from past experience. Which question is completely correct?",
    "options": [
      "Have you ever put up a tent?",
      "Did you ever put up a tent before?",
      "Have you never putted up a tent?",
      "Has you ever put up a tent?"
    ],
    "correctIndex": 0,
    "explanation": "'Have you ever put up a tent?' uses the correct auxiliary 'Have' with 'you', 'ever' for experience, and the irregular past participle 'put'.",
    "ref": "Unit 3, p. 38"
  },
  {
    "id": "d6_bi_u3_s2_01",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "Which item do you carry on your back when you go hiking or camping?",
    "options": [
      "A paddle",
      "A rucksack",
      "A flame",
      "A compass"
    ],
    "correctIndex": 1,
    "explanation": "A rucksack is a large bag carried on the back, often used for camping or climbing.",
    "ref": "Unit 3, p. 136"
  },
  {
    "id": "d6_bi_u3_s2_02",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "During our jungle walk in Taman Negara, we used a ______ to find the right direction.",
    "options": [
      "sleeping bag",
      "paddle",
      "compass",
      "mosquito"
    ],
    "correctIndex": 2,
    "explanation": "A compass is an instrument that helps you find directions.",
    "ref": "Unit 3, p. 136"
  },
  {
    "id": "d6_bi_u3_s2_03",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "What is the past participle of the verb 'see'?",
    "options": [
      "saw",
      "seed",
      "seeing",
      "seen"
    ],
    "correctIndex": 3,
    "explanation": "The irregular verb 'see' has the past simple 'saw' and the past participle 'seen'.",
    "ref": "Unit 3, p. 36"
  },
  {
    "id": "d6_bi_u3_s2_04",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "If you go kayaking on a river, you need a ______ with two blades to move the boat through the water.",
    "options": [
      "paddle",
      "rucksack",
      "tent",
      "view"
    ],
    "correctIndex": 0,
    "explanation": "A paddle is a long pole used to move a small boat like a kayak through water.",
    "ref": "Unit 3, pp. 35, 136"
  },
  {
    "id": "d6_bi_u3_s2_05",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "L",
    "q": "From the top of Bukit Bendera, the ______ of George Town and the sea was breathtaking.",
    "options": [
      "instructor",
      "view",
      "explorer",
      "first aid"
    ],
    "correctIndex": 1,
    "explanation": "'View' means everything that you can see from a particular place.",
    "ref": "Unit 3, p. 136"
  },
  {
    "id": "d6_bi_u3_s2_06",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "M",
    "q": "Choose the pair where BOTH words are irregular past participles that differ from their past simple forms.",
    "options": [
      "slept / met",
      "climbed / visited",
      "written / flown",
      "heard / had"
    ],
    "correctIndex": 2,
    "explanation": "'Write -> wrote -> written' and 'fly -> flew -> flown' both have past participles different from their past simple forms. The other pairs have identical past simple and past participle forms (or are regular).",
    "ref": "Unit 3, p. 36"
  },
  {
    "id": "d6_bi_u3_s2_07",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "M",
    "q": "Before we could sleep at the campsite, our ______ showed us how to ______ the tent safely.",
    "options": [
      "instructor / put up",
      "explorer / bite",
      "coach / paddle",
      "wildlife / camp"
    ],
    "correctIndex": 0,
    "explanation": "An instructor teaches a skill, and 'put up (a tent)' means to make a tent ready to use.",
    "ref": "Unit 3, pp. 38, 136"
  },
  {
    "id": "d6_bi_u3_s2_08",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "M",
    "q": "Complete the sentence with the correct past participle:\n'Kavita has ______ in the clear water near Pulau Redang.'",
    "options": [
      "swim",
      "swam",
      "swimmed",
      "swum"
    ],
    "correctIndex": 3,
    "explanation": "The verb 'swim' is irregular: past simple 'swam', past participle 'swum'.",
    "ref": "Unit 3, p. 36"
  },
  {
    "id": "d6_bi_u3_s2_09",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "H",
    "q": "During the school camp, a boy scraped his knee. Which skill from the camp handbook helped the team leader treat him?",
    "options": [
      "First aid",
      "Kayaking",
      "Scenery",
      "Coaching"
    ],
    "correctIndex": 0,
    "explanation": "'First aid' is simple medical help given to a person who is sick or hurt.",
    "ref": "Unit 3, pp. 42, 136"
  },
  {
    "id": "d6_bi_u3_s2_10",
    "unit": "u3",
    "skill": "u3_s2",
    "diff": "H",
    "q": "Read the sentence and choose the best replacement for the underlined words:\n'While camping near the river, we saw many wild animals living in the area, and a small flying insect bit my arm.'",
    "options": [
      "landscape / flame",
      "wildlife / mosquito",
      "scenery / paddle",
      "explorer / sleeping bag"
    ],
    "correctIndex": 1,
    "explanation": "'Wildlife' refers to wild animals living in a particular area, and a 'mosquito' is a small flying insect that bites people.",
    "ref": "Unit 3, p. 136"
  },
  {
    "id": "d6_bi_u3_s3_01",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "L",
    "q": "Read Aina's blog excerpt:\n'14th March: Today I went kayaking with my cousin Amir in Langkawi. Our instructor taught us how to hold the paddle for an hour before we went onto the water. The mangroves were amazing!'\nWho taught Aina how to hold the paddle?",
    "options": [
      "Her cousin Amir",
      "Her instructor",
      "Her father",
      "A fisherman"
    ],
    "correctIndex": 1,
    "explanation": "The blog states that 'Our instructor taught us how to hold the paddle for an hour'.",
    "ref": "Unit 3, pp. 34–35"
  },
  {
    "id": "d6_bi_u3_s3_02",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "L",
    "q": "Read Danish's blog excerpt:\n'22nd June: Yesterday we hiked up Mount Kinabalu in Sabah. The mountain is 4,095 metres high! It was freezing at the top, but watching the sunrise was the best moment of my life.'\nWhich statement from the blog is a FACT?",
    "options": [
      "Watching the sunrise was the best moment of my life.",
      "Mount Kinabalu is the most exciting mountain in Malaysia.",
      "Mount Kinabalu is 4,095 metres high.",
      "Hiking up the mountain is fun for everyone."
    ],
    "correctIndex": 2,
    "explanation": "The height of Mount Kinabalu (4,095 metres) can be measured and proven, so it is a fact. The other statements express personal feelings or opinions.",
    "ref": "Unit 3, p. 36"
  },
  {
    "id": "d6_bi_u3_s3_03",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "L",
    "q": "Read Mei Ling's story excerpt:\n'Mei Ling and her friends heard a loud splash near the riverbank. When they shone their torches into the water, they saw a monitor lizard swimming away. They laughed with relief because they had thought it was a crocodile!'\nWhy did Mei Ling and her friends laugh with relief?",
    "options": [
      "They found a lost paddle in the river.",
      "They realised the animal was a monitor lizard, not a crocodile.",
      "They caught a huge fish for dinner.",
      "Their instructor told them a funny joke."
    ],
    "correctIndex": 1,
    "explanation": "They felt relieved because they had thought it was a crocodile, but it turned out to be a monitor lizard.",
    "ref": "Unit 3, pp. 44–45"
  },
  {
    "id": "d6_bi_u3_s3_04",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "L",
    "q": "Read Kavita's blog excerpt:\n'5th August: Welcome back to my adventure blog! Last weekend, my family camped at Taman Negara, and I slept in a sleeping bag for the first time. Have you ever woken up to the sound of monkeys in the trees?'\nWhich feature of a blog can you see in Kavita's post?",
    "options": [
      "It uses formal business language.",
      "It is private so nobody else can read it.",
      "It includes a date and speaks directly to readers.",
      "It has no personal feelings or experiences."
    ],
    "correctIndex": 2,
    "explanation": "Blogs are written in date order and use a friendly, personal style ('Welcome back', 'Have you ever...') to connect with readers.",
    "ref": "Unit 3, pp. 40–41"
  },
  {
    "id": "d6_bi_u3_s3_05",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "L",
    "q": "Read the story excerpt:\n'Amir packed two bottles of water, a torch, and a map into his rucksack. Halfway up Bukit Broga, dark clouds covered the sky and it started to rain heavily. Amir quickly put on his raincoat and followed the trail back down.'\nWhat made Amir decide to walk back down the hill?",
    "options": [
      "He forgot to bring his water bottles.",
      "He lost his map on the trail.",
      "The weather turned rainy and dark.",
      "He reached the top and saw the sunset."
    ],
    "correctIndex": 2,
    "explanation": "Dark clouds covered the sky and it started to rain heavily, so Amir walked back down.",
    "ref": "Unit 3, pp. 44–46"
  },
  {
    "id": "d6_bi_u3_s3_06",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "M",
    "q": "Read the blog excerpt:\n'10th September: I've never ridden in a hot-air balloon before, so I was nervous at the Putrajaya festival. I expected the ride to be silent in the sky, but the flame was surprisingly loud and warm! Even so, seeing the lakes from above was unforgettable.'\nWhat surprised the writer about the hot-air balloon?",
    "options": [
      "The lakes in Putrajaya looked very small.",
      "The balloon could not fly very high.",
      "The flame made a loud noise and felt warm.",
      "There were too many people in the basket."
    ],
    "correctIndex": 2,
    "explanation": "The writer expected the ride to be silent, but was surprised that the flame was 'loud and warm'.",
    "ref": "Unit 3, p. 35"
  },
  {
    "id": "d6_bi_u3_s3_07",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "M",
    "q": "Read the story excerpt:\n'While walking along a quiet beach in Terengganu, Nadia and Hafiz noticed two men digging near a turtle nest sign at midnight. There was no phone signal on the sand, so they ran up the path to the main road. From there, Nadia called the wildlife rangers.'\nWhy did Nadia and Hafiz run to the main road?",
    "options": [
      "They wanted to buy food at a stall.",
      "They needed a phone signal to call the rangers.",
      "They were looking for their lost rucksack.",
      "They wanted to catch a bus home."
    ],
    "correctIndex": 1,
    "explanation": "There was no phone signal on the beach, so they ran to the main road to get a signal and call the wildlife rangers.",
    "ref": "Unit 3, pp. 45–46"
  },
  {
    "id": "d6_bi_u3_s3_08",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "M",
    "q": "Read the blog excerpt:\n'3rd November: Our Sekolah Kebangsaan scout troop visited Sarawak for three days. We walked across a 40-metre canopy bridge in the rainforest. It was terrifying at first, yet I felt proud when I reached the other side!'\nWhich sentence below is an OPINION from the text?",
    "options": [
      "The scout troop visited Sarawak for three days.",
      "They walked across a canopy bridge in the rainforest.",
      "The canopy bridge was 40 metres long.",
      "Walking across the bridge was terrifying at first."
    ],
    "correctIndex": 3,
    "explanation": "Describing the bridge as 'terrifying' is a personal feeling/opinion, whereas the length (40 metres), duration (three days), and location (Sarawak) are facts.",
    "ref": "Unit 3, p. 36"
  },
  {
    "id": "d6_bi_u3_s3_09",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "H",
    "q": "Read the story excerpt:\n'Danish tried to light the camp stove, but the damp wood would not catch fire. Just then, his older sister Aina arrived with dry twigs she had collected under a rock shelter. Ten minutes later, warm soup was bubbling in the pot.'\nWhat can we infer about Aina from this excerpt?",
    "options": [
      "She forgot to bring any food for dinner.",
      "She thought ahead and knew where to find dry wood.",
      "She did not want Danish to cook the soup.",
      "She had never been camping before."
    ],
    "correctIndex": 1,
    "explanation": "Finding dry twigs under a rock shelter when the other wood was damp shows Aina was observant and prepared.",
    "ref": "Unit 3, pp. 38, 45"
  },
  {
    "id": "d6_bi_u3_s3_10",
    "unit": "u3",
    "skill": "u3_s3",
    "diff": "H",
    "q": "Read the blog excerpt:\n'19th December: Before today, I'd never seen wild orangutans, so visiting Semenggoh Wildlife Centre near Kuching was a dream come true. We waited quietly on the wooden platform for 45 minutes until a mother and baby swung down from the tall trees. Stay tuned for next week's post about Bako National Park!'\nWhy does the writer include the last sentence?",
    "options": [
      "To give a warning about wild animals in Kuching.",
      "To list the facts about Bako National Park.",
      "To encourage readers to return and read the next blog post.",
      "To explain how long the bus ride took."
    ],
    "correctIndex": 2,
    "explanation": "A friendly closing line like 'Stay tuned for next week's post...' invites readers to come back to the blog again.",
    "ref": "Unit 3, p. 41"
  },
  {
    "id": "d6_bi_u4_s1_01",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "L",
    "q": "Complete the question: 'How ______ has Encik Razak been a pilot?'",
    "options": [
      "many",
      "often",
      "long",
      "far"
    ],
    "correctIndex": 2,
    "explanation": "We use 'How long ...?' with the present perfect to ask about the duration of a state or action.",
    "ref": "Unit 4, p. 51"
  },
  {
    "id": "d6_bi_u4_s1_02",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "L",
    "q": "Choose the correct word: 'Puan Salma has taught at Sekolah Kebangsaan Sentul ______ ten years.'",
    "options": [
      "since",
      "for",
      "from",
      "ago"
    ],
    "correctIndex": 1,
    "explanation": "We use 'for' with a period of time ('ten years').",
    "ref": "Unit 4, p. 51"
  },
  {
    "id": "d6_bi_u4_s1_03",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "L",
    "q": "Choose the correct word: 'Dr. Lim has worked as a wildlife vet in Sabah ______ 2018.'",
    "options": [
      "for",
      "during",
      "since",
      "until"
    ],
    "correctIndex": 2,
    "explanation": "We use 'since' with an exact point in time in the past ('2018').",
    "ref": "Unit 4, p. 51"
  },
  {
    "id": "d6_bi_u4_s1_04",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "L",
    "q": "Which time expression goes with 'since'?",
    "options": [
      "three weeks",
      "a long time",
      "two hours",
      "last Tuesday"
    ],
    "correctIndex": 3,
    "explanation": "'Last Tuesday' is an exact starting point in the past, so it takes 'since'. The others are periods of time that take 'for'.",
    "ref": "Unit 4, p. 51"
  },
  {
    "id": "d6_bi_u4_s1_05",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "L",
    "q": "Complete the answer:\nAmir: 'How long have you known Danish?'\nHafiz: 'I've known him ______ I was seven.'",
    "options": [
      "for",
      "since",
      "when",
      "after"
    ],
    "correctIndex": 1,
    "explanation": "'I was seven' marks a specific point in the past, so we use 'since'.",
    "ref": "Unit 4, p. 51"
  },
  {
    "id": "d6_bi_u4_s1_06",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "M",
    "q": "Choose the correct question using the prompts: (Mei Ling / have / her bicycle)",
    "options": [
      "How long has Mei Ling had her bicycle?",
      "How long have Mei Ling had her bicycle?",
      "How long did Mei Ling has her bicycle?",
      "How long is Mei Ling having her bicycle?"
    ],
    "correctIndex": 0,
    "explanation": "For a singular subject ('Mei Ling'), the present perfect question is 'How long has Mei Ling had ...?'.",
    "ref": "Unit 4, p. 51"
  },
  {
    "id": "d6_bi_u4_s1_07",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "M",
    "q": "Which sentence is INCORRECT?",
    "options": [
      "The gardeners have worked in the park since eight o'clock.",
      "Siti has lived in Ipoh for six years.",
      "Encik Farid has been a paramedic since five years.",
      "I've studied English since Year 1."
    ],
    "correctIndex": 2,
    "explanation": "'Five years' is a period of time, so it must be 'for five years', not 'since five years'.",
    "ref": "Unit 4, p. 51"
  },
  {
    "id": "d6_bi_u4_s1_08",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "M",
    "q": "Complete the sentence: 'Nurul ______ a gardener at the botanical garden ______ she left university.'",
    "options": [
      "was / for",
      "has been / since",
      "is / since",
      "have been / for"
    ],
    "correctIndex": 1,
    "explanation": "We use present perfect ('has been') for an action/state continuing up to now, and 'since' before the past event 'she left university'.",
    "ref": "Unit 4, pp. 49, 51"
  },
  {
    "id": "d6_bi_u4_s1_09",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "H",
    "q": "Today is 2026. Cikgu Nadia started working at Sekolah Kebangsaan Taman Melawati in 2020. Which sentence says the SAME thing?",
    "options": [
      "Cikgu Nadia has worked at the school for 2020.",
      "Cikgu Nadia has worked at the school since six years.",
      "Cikgu Nadia has worked at the school for six years.",
      "Cikgu Nadia worked at the school since 2020."
    ],
    "correctIndex": 2,
    "explanation": "From 2020 to 2026 is a duration of six years, so 'has worked ... for six years' is accurate.",
    "ref": "Unit 4, p. 51"
  },
  {
    "id": "d6_bi_u4_s1_10",
    "unit": "u4",
    "skill": "u4_s1",
    "diff": "H",
    "q": "Read the interview note:\n'Name: Officer Kamal | Job: Police officer | Started: 2019 | Current status: Still working'\nWhich question and answer pair matches the note?",
    "options": [
      "How long has Kamal been a police officer? Since 2019.",
      "How long did Kamal be a police officer? For 2019.",
      "How long has Kamal been a police officer? For 2019.",
      "How long is Kamal a police officer? Since 2019."
    ],
    "correctIndex": 0,
    "explanation": "The question uses 'How long has ... been ...?' and the starting year 2019 takes 'Since'.",
    "ref": "Unit 4, pp. 49, 51"
  },
  {
    "id": "d6_bi_u4_s2_01",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "L",
    "q": "Complete the sentence: 'I've ______ had lunch in the school canteen, so I'm not hungry.'",
    "options": [
      "yet",
      "already",
      "ever",
      "since"
    ],
    "correctIndex": 1,
    "explanation": "We use 'already' in affirmative present perfect sentences to show something has happened sooner than expected.",
    "ref": "Unit 4, p. 52"
  },
  {
    "id": "d6_bi_u4_s2_02",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "L",
    "q": "Complete the question: 'Have you met the new head teacher ______?'",
    "options": [
      "already",
      "never",
      "yet",
      "for"
    ],
    "correctIndex": 2,
    "explanation": "We use 'yet' at the end of present perfect questions to ask if something has happened up to now.",
    "ref": "Unit 4, p. 52"
  },
  {
    "id": "d6_bi_u4_s2_03",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "L",
    "q": "Complete the negative sentence: 'Amir hasn't been to the school gym ______.'",
    "options": [
      "already",
      "ever",
      "yet",
      "just"
    ],
    "correctIndex": 2,
    "explanation": "We use 'yet' at the end of negative present perfect sentences to say something has not happened so far.",
    "ref": "Unit 4, p. 52"
  },
  {
    "id": "d6_bi_u4_s2_04",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "L",
    "q": "Look at Mei Ling's to-do list: [✓] Find the library.\nWhich sentence is correct?",
    "options": [
      "She's already found the library.",
      "She hasn't found the library yet.",
      "She's found the library yet.",
      "She already hasn't found the library."
    ],
    "correctIndex": 0,
    "explanation": "Since the task is ticked as done, we use the affirmative form with 'already': 'She's already found the library.'",
    "ref": "Unit 4, p. 52"
  },
  {
    "id": "d6_bi_u4_s2_05",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "L",
    "q": "Look at Danish's to-do list: [✗] Meet the school nurse.\nWhich sentence is correct?",
    "options": [
      "He's already met the school nurse.",
      "He hasn't met the school nurse already.",
      "He hasn't met the school nurse yet.",
      "He's met the school nurse yet."
    ],
    "correctIndex": 2,
    "explanation": "Since the task is not done yet, we use the negative form with 'yet' at the end.",
    "ref": "Unit 4, p. 52"
  },
  {
    "id": "d6_bi_u4_s2_06",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "M",
    "q": "Choose the sentence with the CORRECT word order.",
    "options": [
      "The teacher has given already me a locker.",
      "The teacher has already given me a locker.",
      "Already the teacher has given me a locker.",
      "The teacher hasn't yet given me a locker."
    ],
    "correctIndex": 1,
    "explanation": "'Already' goes between 'has/have' and the past participle ('has already given'). 'Yet' goes at the end of a negative sentence.",
    "ref": "Unit 4, p. 52"
  },
  {
    "id": "d6_bi_u4_s2_07",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "M",
    "q": "Read the dialogue and choose the best response.\nKavita: 'Would you like me to show you the cloakroom?'\nAina: 'No, thanks! ______'",
    "options": [
      "I haven't seen it yet.",
      "I've already seen it.",
      "I've seen it yet.",
      "Has your teacher shown you yet?"
    ],
    "correctIndex": 1,
    "explanation": "Saying 'No, thanks!' means Aina does not need to be shown because she has already seen the cloakroom.",
    "ref": "Unit 4, p. 52"
  },
  {
    "id": "d6_bi_u4_s2_08",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "M",
    "q": "Which sentence uses 'already' or 'yet' INCORRECTLY?",
    "options": [
      "Have you cleaned the carpet yet?",
      "We've already made the beds.",
      "I haven't finished my homework already.",
      "She hasn't visited the computer room yet."
    ],
    "correctIndex": 2,
    "explanation": "In negative sentences, we use 'yet' instead of 'already' ('I haven't finished my homework yet.').",
    "ref": "Unit 4, pp. 52, 56"
  },
  {
    "id": "d6_bi_u4_s2_09",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "H",
    "q": "Complete the dialogue:\nMum: 'Have you ______ the washing ______?'\nHaziq: 'I'm sorry, Mum. I ______.'",
    "options": [
      "done / yet / haven't finished yet",
      "do / already / haven't finished already",
      "did / yet / have already finished",
      "done / already / haven't finished yet"
    ],
    "correctIndex": 0,
    "explanation": "The question uses 'Have you' + past participle ('done') + 'yet', and the apology uses 'haven't finished yet'.",
    "ref": "Unit 4, pp. 52, 56"
  },
  {
    "id": "d6_bi_u4_s2_10",
    "unit": "u4",
    "skill": "u4_s2",
    "diff": "H",
    "q": "Today's checklist for Farah:\n1. Pack school bag [✓]\n2. Eat breakfast [✓]\n3. Put on school shoes [✗]\nWhich sentence accurately describes Farah's morning?",
    "options": [
      "Farah has already packed her bag and eaten breakfast, but she hasn't put on her shoes yet.",
      "Farah hasn't packed her bag yet, but she has already put on her shoes.",
      "Farah has already put on her shoes, and she hasn't eaten breakfast yet.",
      "Farah has packed her bag yet, so she is ready to leave."
    ],
    "correctIndex": 0,
    "explanation": "Items 1 and 2 are complete ('already'), while item 3 is incomplete ('hasn't ... yet').",
    "ref": "Unit 4, pp. 52, 58"
  },
  {
    "id": "d6_bi_u4_s3_01",
    "unit": "u4",
    "skill": "u4_s3",
    "diff": "L",
    "q": "Which person makes sick animals better as a job?",
    "options": [
      "A gardener",
      "A pilot",
      "A vet",
      "A paramedic"
    ],
    "correctIndex": 2,
    "explanation": "A vet is someone who makes sick animals better as a job.",
    "ref": "Unit 4, pp. 49, 137"
  },
  {
    "id": "d6_bi_u4_s3_02",
    "unit": "u4",
    "skill": "u4_s3",
    "diff": "L",
    "q": "At school, pupils keep their books and sports bags safely inside a small cupboard called a ______.",
    "options": [
      "canteen",
      "locker",
      "factory",
      "spoon"
    ],
    "correctIndex": 1,
    "explanation": "A locker is a small cupboard that you can lock to keep personal things safe.",
    "ref": "Unit 4, pp. 52, 137"
  },
  {
    "id": "d6_bi_u4_s3_03",
    "unit": "u4",
    "skill": "u4_s3",
    "diff": "L",
    "q": "Choose the correct verb: 'Every afternoon after school, Aina has to ______ her homework.'",
    "options": [
      "make",
      "do",
      "create",
      "build"
    ],
    "correctIndex": 1,
    "explanation": "We use 'do' with 'homework' ('do your homework').",
    "ref": "Unit 4, p. 55"
  },
  {
    "id": "d6_bi_u4_s3_04",
    "unit": "u4",
    "skill": "u4_s3",
    "diff": "L",
    "q": "Choose the correct verb: 'On Saturday morning, Amir and his dad are going to ______ a chocolate cake.'",
    "options": [
      "do",
      "make",
      "work",
      "wash"
    ],
    "correctIndex": 1,
    "explanation": "We use 'make' when we create or prepare food like a cake ('make a cake').",
    "ref": "Unit 4, pp. 55, 59"
  },
  {
    "id": "d6_bi_u4_s3_05",
    "unit": "u4",
    "skill": "u4_s3",
    "diff": "L",
    "q": "Which word means 'making someone feel important or useful'?",
    "options": [
      "Rewarding",
      "Polite",
      "Clever",
      "Safe"
    ],
    "correctIndex": 0,
    "explanation": "'Rewarding' describes a job or activity that makes you feel happy, important, or useful because you help others.",
    "ref": "Unit 4, pp. 48, 137"
  },
  {
    "id": "d6_bi_u4_s3_06",
    "unit": "u4",
    "skill": "u4_s3",
    "diff": "M",
    "q": "Choose the correct pair of verbs:\n'First, we need to ______ a shopping list, and then we'll go to the market to ______ the shopping.'",
    "options": [
      "do / make",
      "make / make",
      "make / do",
      "do / do"
    ],
    "correctIndex": 2,
    "explanation": "We 'make a shopping list' (create something) and 'do the shopping' (a chore/task).",
    "ref": "Unit 4, pp. 55, 59"
  },
  {
    "id": "d6_bi_u4_s3_07",
    "unit": "u4",
    "skill": "u4_s3",
    "diff": "M",
    "q": "Complete the sentence with the best adjective:\n'Being a search and rescue pilot is ______ because it is difficult, but also very interesting.'",
    "options": [
      "polite",
      "challenging",
      "energetic",
      "delicious"
    ],
    "correctIndex": 1,
    "explanation": "'Challenging' means difficult in a way that is interesting and enjoyable.",
    "ref": "Unit 4, pp. 49, 137"
  },
  {
    "id": "d6_bi_u4_s3_08",
    "unit": "u4",
    "skill": "u4_s3",
    "diff": "M",
    "q": "Which group contains ONLY phrases that use 'make'?",
    "options": [
      "a poster, a model, a noise",
      "the cleaning, the washing, the gardening",
      "a decision, an experiment, the cooking",
      "breakfast, your homework, a cake"
    ],
    "correctIndex": 0,
    "explanation": "We say 'make a poster', 'make a model', and 'make a noise'. The other options include 'do' phrases such as 'do the cleaning', 'do an experiment', and 'do your homework'.",
    "ref": "Unit 4, p. 55"
  },
  {
    "id": "d6_bi_u4_s3_09",
    "unit": "u4",
    "skill": "u4_s3",
    "diff": "H",
    "q": "Read the description of a job at an ice cream factory:\n'Nadia tests new ______ like pandan and mango. She uses a gold ______ so the metal does not change the taste.'\nChoose the best words to fill the blanks.",
    "options": [
      "batteries / locker",
      "flavours / spoon",
      "gardens / cloakroom",
      "experiments / canteen"
    ],
    "correctIndex": 1,
    "explanation": "'Flavour' is the taste of food or drink, and a 'spoon' is used for tasting ice cream.",
    "ref": "Unit 4, pp. 53, 137"
  },
  {
    "id": "d6_bi_u4_s3_10",
    "unit": "u4",
    "skill": "u4_s3",
    "diff": "H",
    "q": "Read Mei Ling's weekend plan:\n'In the morning I'll ______ the beds and ______ a poster for Science Week. After lunch I'll ______ the gardening with my grandfather.'\nChoose the correct verbs in order.",
    "options": [
      "do / make / do",
      "make / do / make",
      "make / make / do",
      "do / do / make"
    ],
    "correctIndex": 2,
    "explanation": "We 'make the beds', 'make a poster' (creating something), and 'do the gardening' (a chore/job).",
    "ref": "Unit 4, pp. 55–56, 59"
  },
  {
    "id": "d6_bi_u5_s1_01",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "L",
    "q": "The LRT in Kuala Lumpur is ___ fast ___ a taxi during peak hours.",
    "options": [
      "just as / as",
      "just as / than",
      "more / as",
      "as / more"
    ],
    "correctIndex": 0,
    "explanation": "We use 'just as + adjective + as' to show that two things are equal, so 'just as fast as' is correct.",
    "ref": "Unit 5, p. 63"
  },
  {
    "id": "d6_bi_u5_s1_02",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "L",
    "q": "Taking the public bus to Melaka is ___ expensive ___ taking a private car.",
    "options": [
      "not as / than",
      "not as / as",
      "no as / as",
      "not / as"
    ],
    "correctIndex": 1,
    "explanation": "To show that something has less of a quality than another thing, we use 'not as + adjective + as'.",
    "ref": "Unit 5, p. 63"
  },
  {
    "id": "d6_bi_u5_s1_03",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "L",
    "q": "Amir says cycling on a busy road ___ safe ___ cycling on a park path.",
    "options": [
      "aren't as / as",
      "isn't as / than",
      "isn't as / as",
      "not is / as"
    ],
    "correctIndex": 2,
    "explanation": "'Cycling on a busy road' is a singular gerund subject, so it takes 'isn't as safe as'.",
    "ref": "Unit 5, p. 63"
  },
  {
    "id": "d6_bi_u5_s1_04",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "L",
    "q": "Aina thinks badminton is just as ___ as football.",
    "options": [
      "more exciting",
      "excitinger",
      "most exciting",
      "exciting"
    ],
    "correctIndex": 3,
    "explanation": "Inside 'just as ... as', always use the base form of the adjective ('exciting'), not a comparative or superlative form.",
    "ref": "Unit 5, p. 63"
  },
  {
    "id": "d6_bi_u5_s1_05",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "L",
    "q": "These new electric buses ___ as noisy as the old diesel buses.",
    "options": [
      "aren't",
      "isn't",
      "don't",
      "not"
    ],
    "correctIndex": 0,
    "explanation": "'These new electric buses' is plural, so we use 'aren't' before 'as noisy as'.",
    "ref": "Unit 5, p. 63"
  },
  {
    "id": "d6_bi_u5_s1_06",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "M",
    "q": "The ferry to Penang takes 20 minutes and the bridge drive also takes 20 minutes. The ferry is ___ the car.",
    "options": [
      "not as fast as",
      "just as fast as",
      "faster as",
      "just as slow than"
    ],
    "correctIndex": 1,
    "explanation": "Since both journeys take the exact same time (20 minutes), they are equal in speed: 'just as fast as'.",
    "ref": "Unit 5, p. 63"
  },
  {
    "id": "d6_bi_u5_s1_07",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "M",
    "q": "Mei Ling's old bicycle is RM250, while her sister's new mountain bike is RM900. Mei Ling's bicycle ___ her sister's bike.",
    "options": [
      "is just as expensive as",
      "isn't as cheap as",
      "isn't as expensive as",
      "aren't as expensive as"
    ],
    "correctIndex": 2,
    "explanation": "RM250 is less than RM900, and 'bicycle' is singular, so 'isn't as expensive as' is accurate.",
    "ref": "Unit 5, p. 63"
  },
  {
    "id": "d6_bi_u5_s1_08",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "M",
    "q": "Choose the correct sentence comparing trains and motorbikes.",
    "options": [
      "Trains are just as comfortable than motorbikes.",
      "Motorbikes aren't as comfortabler as trains.",
      "Motorbikes isn't as comfortable as trains.",
      "Motorbikes aren't as comfortable as trains."
    ],
    "correctIndex": 3,
    "explanation": "Plural 'motorbikes' takes 'aren't', and 'comfortable' stays in its base form inside 'as ... as'.",
    "ref": "Unit 5, p. 63"
  },
  {
    "id": "d6_bi_u5_s1_09",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "H",
    "q": "Danish says: 'Reading a storybook is more interesting than watching TV.' Which sentence means the same thing?",
    "options": [
      "Watching TV isn't as interesting as reading a storybook.",
      "Reading a storybook isn't as interesting as watching TV.",
      "Watching TV is just as interesting as reading a storybook.",
      "Reading a storybook is as boring as watching TV."
    ],
    "correctIndex": 0,
    "explanation": "If reading is more interesting than watching TV, then watching TV has less interest, so it 'isn't as interesting as' reading.",
    "ref": "Unit 5, p. 63"
  },
  {
    "id": "d6_bi_u5_s1_10",
    "unit": "u5",
    "skill": "u5_s1",
    "diff": "H",
    "q": "Which sentence contains a grammar mistake?",
    "options": [
      "Cycling to school isn't as tiring as walking.",
      "The night train is just as quieter as the morning train.",
      "Kavita runs just as fast as her brother.",
      "Skateboards aren't as expensive as motorbikes."
    ],
    "correctIndex": 1,
    "explanation": "In 'just as ... as', the adjective must be in its base form ('quiet'), not the comparative form ('quieter').",
    "ref": "Unit 5, p. 63"
  },
  {
    "id": "d6_bi_u5_s2_01",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "L",
    "q": "I don't want to walk to the mall at noon. It is ___ hot outside.",
    "options": [
      "enough",
      "too",
      "not enough",
      "as"
    ],
    "correctIndex": 1,
    "explanation": "We use 'too + adjective' ('too hot') to say that something is more than we would like.",
    "ref": "Unit 5, p. 64"
  },
  {
    "id": "d6_bi_u5_s2_02",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "L",
    "q": "The LRT train at 8 a.m. is ___ crowded. Everyone has to stand!",
    "options": [
      "too",
      "enough",
      "not enough",
      "just as"
    ],
    "correctIndex": 0,
    "explanation": "'Too crowded' shows that there are more people on the train than is comfortable.",
    "ref": "Unit 5, p. 64"
  },
  {
    "id": "d6_bi_u5_s2_03",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "L",
    "q": "Amir wants to join the 10 km cycle race, but he says he isn't ___.",
    "options": [
      "enough fit",
      "too fit",
      "fit enough",
      "fitting enough"
    ],
    "correctIndex": 2,
    "explanation": "In 'not + adjective + enough', 'enough' always comes after the adjective ('fit enough').",
    "ref": "Unit 5, p. 64"
  },
  {
    "id": "d6_bi_u5_s2_04",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "L",
    "q": "This old ferry isn't ___ to reach Langkawi in 30 minutes.",
    "options": [
      "enough fast",
      "too fast",
      "faster enough",
      "fast enough"
    ],
    "correctIndex": 3,
    "explanation": "'Isn't fast enough' means the ferry has less speed than needed for a 30-minute trip.",
    "ref": "Unit 5, p. 64"
  },
  {
    "id": "d6_bi_u5_s2_05",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "L",
    "q": "RM80 for a short taxi ride to the airport is ___ expensive for students.",
    "options": [
      "too",
      "enough",
      "not",
      "very enough"
    ],
    "correctIndex": 0,
    "explanation": "'Too expensive' expresses that the price is higher than what students can afford.",
    "ref": "Unit 5, p. 64"
  },
  {
    "id": "d6_bi_u5_s2_06",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "M",
    "q": "Kavita cannot reach the top shelf in the library because she isn't ___.",
    "options": [
      "too tall",
      "tall enough",
      "enough tall",
      "short enough"
    ],
    "correctIndex": 1,
    "explanation": "'She isn't tall enough' means she needs more height to reach the top shelf.",
    "ref": "Unit 5, p. 64"
  },
  {
    "id": "d6_bi_u5_s2_07",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "M",
    "q": "The local bus stops at every street, so it is ___ slow. It isn't ___ to get us to school on time.",
    "options": [
      "enough / fast too",
      "too / enough fast",
      "too / fast enough",
      "not / too fast"
    ],
    "correctIndex": 2,
    "explanation": "Use 'too slow' for excess slowness and 'isn't fast enough' for insufficient speed.",
    "ref": "Unit 5, p. 64"
  },
  {
    "id": "d6_bi_u5_s2_08",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "M",
    "q": "Aina's suitcase weighs 28 kg, and the airline limit is 20 kg. Her suitcase is ___ to carry on the plane.",
    "options": [
      "light enough",
      "not heavy enough",
      "enough heavy",
      "too heavy"
    ],
    "correctIndex": 3,
    "explanation": "28 kg is over the 20 kg limit, so the suitcase is 'too heavy'.",
    "ref": "Unit 5, p. 64"
  },
  {
    "id": "d6_bi_u5_s2_09",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "H",
    "q": "Which sentence has the same meaning as: 'The bicycle lane in town is too narrow for two cyclists'?",
    "options": [
      "The bicycle lane isn't wide enough for two cyclists.",
      "The bicycle lane is wide enough for two cyclists.",
      "The bicycle lane isn't narrow enough for two cyclists.",
      "The bicycle lane is too wide for two cyclists."
    ],
    "correctIndex": 0,
    "explanation": "'Too narrow' means the same as 'not wide enough' because 'narrow' and 'wide' are opposites.",
    "ref": "Unit 5, p. 64"
  },
  {
    "id": "d6_bi_u5_s2_10",
    "unit": "u5",
    "skill": "u5_s2",
    "diff": "H",
    "q": "Read the four sentences. Which one is grammatically correct?",
    "options": [
      "The river water isn't enough clean to swim in.",
      "The river water is too polluted for swimming.",
      "The river water is enough polluted to swim in.",
      "The river water isn't too clean enough to swim in."
    ],
    "correctIndex": 1,
    "explanation": "'Too polluted' is correctly formed; 'enough' must follow the adjective ('clean enough'), and 'too' and 'enough' cannot be combined like 'too clean enough'.",
    "ref": "Unit 5, p. 64"
  },
  {
    "id": "d6_bi_u5_s3_01",
    "unit": "u5",
    "skill": "u5_s3",
    "diff": "L",
    "q": "Always wear a helmet and knee pads when skateboarding. They are important ___.",
    "options": [
      "travel cards",
      "safety equipment",
      "skyscrapers",
      "ticket offices"
    ],
    "correctIndex": 1,
    "explanation": "Special clothes or objects like helmets and knee pads that keep you safe during an activity are called 'safety equipment'.",
    "ref": "Unit 5, pp. 65, 138"
  },
  {
    "id": "d6_bi_u5_s3_02",
    "unit": "u5",
    "skill": "u5_s3",
    "diff": "L",
    "q": "You must ___ with your feet to make a bicycle move forwards.",
    "options": [
      "pedal",
      "hug",
      "lift",
      "protect"
    ],
    "correctIndex": 0,
    "explanation": "To 'pedal' means to push the pedals of a bicycle to make it move.",
    "ref": "Unit 5, pp. 60, 80"
  },
  {
    "id": "d6_bi_u5_s3_03",
    "unit": "u5",
    "skill": "u5_s3",
    "diff": "L",
    "q": "Adding the suffix '-less' to 'care' makes 'careless'. What does 'careless' mean?",
    "options": [
      "full of care",
      "ready to care",
      "without care",
      "caring too much"
    ],
    "correctIndex": 2,
    "explanation": "The suffix '-less' means 'without', so 'careless' means without care or not paying attention.",
    "ref": "Unit 5, p. 62"
  },
  {
    "id": "d6_bi_u5_s3_04",
    "unit": "u5",
    "skill": "u5_s3",
    "diff": "L",
    "q": "The Petronas Twin Towers in Kuala Lumpur are famous ___, which are very tall modern buildings.",
    "options": [
      "workshops",
      "ferries",
      "cycle paths",
      "skyscrapers"
    ],
    "correctIndex": 3,
    "explanation": "A 'skyscraper' is a very tall, modern building in a city.",
    "ref": "Unit 5, pp. 60, 138"
  },
  {
    "id": "d6_bi_u5_s3_05",
    "unit": "u5",
    "skill": "u5_s3",
    "diff": "L",
    "q": "Mei Ling painted a bright, ___ mural with red, yellow, and blue flowers.",
    "options": [
      "colourful",
      "colourless",
      "tasteless",
      "homeless"
    ],
    "correctIndex": 0,
    "explanation": "The suffix '-ful' means 'full of', so 'colourful' means full of bright colours.",
    "ref": "Unit 5, p. 62"
  },
  {
    "id": "d6_bi_u5_s3_06",
    "unit": "u5",
    "skill": "u5_s3",
    "diff": "M",
    "q": "Danish is going to Penang for a weekend trip and will come back on Sunday. He should buy a ___ at the ferry terminal.",
    "options": [
      "single ticket",
      "return ticket",
      "cycle path",
      "virtual ticket"
    ],
    "correctIndex": 1,
    "explanation": "A 'return ticket' is for travelling to a place and coming back again.",
    "ref": "Unit 5, pp. 68, 138"
  },
  {
    "id": "d6_bi_u5_s3_07",
    "unit": "u5",
    "skill": "u5_s3",
    "diff": "M",
    "q": "Because there are too many factories and cars, the air in the city centre is ___.",
    "options": [
      "fit",
      "popular",
      "polluted",
      "old-fashioned"
    ],
    "correctIndex": 2,
    "explanation": "'Polluted' describes air or water that has become dirty and harmful.",
    "ref": "Unit 5, pp. 61, 138"
  },
  {
    "id": "d6_bi_u5_s3_08",
    "unit": "u5",
    "skill": "u5_s3",
    "diff": "M",
    "q": "The firefighter ran into the smoky building to save the kitten. She was completely ___.",
    "options": [
      "fearful",
      "careless",
      "powerful",
      "fearless"
    ],
    "correctIndex": 3,
    "explanation": "'Fearless' means without fear (brave), which fits someone rescuing a kitten from a smoky building.",
    "ref": "Unit 5, pp. 62, 81"
  },
  {
    "id": "d6_bi_u5_s3_09",
    "unit": "u5",
    "skill": "u5_s3",
    "diff": "H",
    "q": "Aina rides the MRT to school every weekday. Buying a monthly ___ gives her a ___ compared to buying a ticket every morning.",
    "options": [
      "travel card / discount",
      "single ticket / workshop",
      "ticket office / ferry",
      "discount / return ticket"
    ],
    "correctIndex": 0,
    "explanation": "A 'travel card' is used for many journeys over time and usually gives a 'discount' (lower price) compared to daily tickets.",
    "ref": "Unit 5, pp. 64, 68, 138"
  },
  {
    "id": "d6_bi_u5_s3_10",
    "unit": "u5",
    "skill": "u5_s3",
    "diff": "H",
    "q": "Amir forgot to add salt or spices to his soup, so it tasted bland. He also forgot to turn off the stove! His soup was ___ and he was ___.",
    "options": [
      "tasteful / careful",
      "tasteless / careless",
      "powerful / fearless",
      "tasteless / careful"
    ],
    "correctIndex": 1,
    "explanation": "'Tasteless' means without flavour, and 'careless' means without care (forgetting to turn off the stove).",
    "ref": "Unit 5, pp. 62, 81"
  },
  {
    "id": "d6_bi_u6_s1_01",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "L",
    "q": "Batik cotton ___ in Kelantan and Terengganu.",
    "options": [
      "is made",
      "are made",
      "is make",
      "makes"
    ],
    "correctIndex": 0,
    "explanation": "'Batik cotton' is singular/uncountable, so the present simple passive uses 'is + past participle' ('is made').",
    "ref": "Unit 6, p. 73"
  },
  {
    "id": "d6_bi_u6_s1_02",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "L",
    "q": "Millions of plastic bottles ___ every day around the world.",
    "options": [
      "is thrown away",
      "are thrown away",
      "are throw away",
      "thrown away"
    ],
    "correctIndex": 1,
    "explanation": "'Millions of plastic bottles' is plural, so we use 'are' + past participle ('are thrown away').",
    "ref": "Unit 6, p. 73"
  },
  {
    "id": "d6_bi_u6_s1_03",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "L",
    "q": "First, the ripe rubber latex ___ from the trees early in the morning.",
    "options": [
      "collects",
      "are collected",
      "is collected",
      "is collecting"
    ],
    "correctIndex": 2,
    "explanation": "'Latex' is an uncountable noun, so it takes 'is collected' in the present simple passive.",
    "ref": "Unit 6, p. 73"
  },
  {
    "id": "d6_bi_u6_s1_04",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "L",
    "q": "These pewter souvenirs ___ in Kuala Lumpur and sent to airport shops.",
    "options": [
      "is sold",
      "are sell",
      "sold",
      "are sold"
    ],
    "correctIndex": 3,
    "explanation": "'Souvenirs' is plural and 'sold' is the past participle of 'sell', so 'are sold' is correct.",
    "ref": "Unit 6, p. 73"
  },
  {
    "id": "d6_bi_u6_s1_05",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "L",
    "q": "Dark blue dye ___ to colour the yarn before the denim is woven.",
    "options": [
      "is used",
      "are used",
      "is using",
      "use"
    ],
    "correctIndex": 0,
    "explanation": "'Dark blue dye' is singular/uncountable and receives the action, so 'is used' is correct.",
    "ref": "Unit 6, pp. 70, 73"
  },
  {
    "id": "d6_bi_u6_s1_06",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "M",
    "q": "After the cotton ___ in the fields, it ___ to a factory by lorry.",
    "options": [
      "is harvest / is take",
      "is harvested / is taken",
      "are harvested / are taken",
      "harvested / taken"
    ],
    "correctIndex": 1,
    "explanation": "Both verbs describe passive steps on uncountable 'cotton': 'is harvested' and 'is taken'.",
    "ref": "Unit 6, pp. 70, 73"
  },
  {
    "id": "d6_bi_u6_s1_07",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "M",
    "q": "Normal T-shirts ___ with stones; only stonewashed jeans go through that step.",
    "options": [
      "isn't washed",
      "don't washed",
      "aren't washed",
      "not are washed"
    ],
    "correctIndex": 2,
    "explanation": "'Normal T-shirts' is plural, so the negative present simple passive is 'aren't washed'.",
    "ref": "Unit 6, p. 73"
  },
  {
    "id": "d6_bi_u6_s1_08",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "M",
    "q": "Which sentence is written in the present simple passive voice?",
    "options": [
      "Workers pack the pineapples into boxes.",
      "The factory produces 500 bags a day.",
      "Mei Ling wears her cotton jacket to school.",
      "The pineapples are packed into boxes."
    ],
    "correctIndex": 3,
    "explanation": "'The pineapples are packed into boxes' uses 'are + past participle' where the subject receives the action.",
    "ref": "Unit 6, p. 73"
  },
  {
    "id": "d6_bi_u6_s1_09",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "H",
    "q": "How would you rewrite 'Farmers grow tea leaves in the Cameron Highlands' in the passive voice?",
    "options": [
      "Tea leaves are grown in the Cameron Highlands.",
      "Tea leaves is grown in the Cameron Highlands.",
      "Tea leaves are grow in the Cameron Highlands.",
      "Farmers are grown tea leaves in the Cameron Highlands."
    ],
    "correctIndex": 0,
    "explanation": "The object 'tea leaves' becomes the plural subject, followed by 'are' + past participle 'grown'.",
    "ref": "Unit 6, p. 73"
  },
  {
    "id": "d6_bi_u6_s1_10",
    "unit": "u6",
    "skill": "u6_s1",
    "diff": "H",
    "q": "In the process of making noodles, which sentence has an error in passive grammar?",
    "options": [
      "First, wheat is grown on farms.",
      "Next, water is add to the flour to make dough.",
      "After that, the dough is pressed into flat sheets.",
      "Finally, the noodles are packed and sent to shops."
    ],
    "correctIndex": 1,
    "explanation": "In 'water is add', the past participle 'added' is required after 'is', not the base verb 'add'.",
    "ref": "Unit 6, pp. 73, 76"
  },
  {
    "id": "d6_bi_u6_s2_01",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "L",
    "q": "This traditional kompang drum is ___ wood and goat leather.",
    "options": [
      "made of",
      "used for",
      "made for",
      "used of"
    ],
    "correctIndex": 0,
    "explanation": "We use 'made of' to name the materials something is constructed from.",
    "ref": "Unit 6, p. 74"
  },
  {
    "id": "d6_bi_u6_s2_02",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "L",
    "q": "A small kitchen knife is used for ___ herbs and garlic.",
    "options": [
      "cut",
      "cutting",
      "cuts",
      "to cut"
    ],
    "correctIndex": 1,
    "explanation": "After the preposition 'for' in 'used for', we use the -ing form of the verb ('cutting').",
    "ref": "Unit 6, p. 74"
  },
  {
    "id": "d6_bi_u6_s2_03",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "L",
    "q": "Amir asks: '___ is this bottle made of?' Kavita answers: 'It's made of glass.'",
    "options": [
      "Who",
      "Where",
      "What",
      "How many"
    ],
    "correctIndex": 2,
    "explanation": "To ask about the material of an object, we say 'What is it made of?'.",
    "ref": "Unit 6, p. 74"
  },
  {
    "id": "d6_bi_u6_s2_04",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "L",
    "q": "A watering can is made of plastic. What is it ___?",
    "options": [
      "made of",
      "used of",
      "using for",
      "used for"
    ],
    "correctIndex": 3,
    "explanation": "To ask about the purpose of an object, we ask 'What is it used for?'.",
    "ref": "Unit 6, pp. 74, 80"
  },
  {
    "id": "d6_bi_u6_s2_05",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "L",
    "q": "My school shoes are strong and last a long time because they are made of ___.",
    "options": [
      "leather",
      "herb",
      "glass",
      "paper"
    ],
    "correctIndex": 0,
    "explanation": "Leather is a strong material made from animal skin that is often used for shoes and bags.",
    "ref": "Unit 6, pp. 74, 139"
  },
  {
    "id": "d6_bi_u6_s2_06",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "M",
    "q": "This small silver tin ___ metal, and it is ___ keeping coins in.",
    "options": [
      "is used for / made of",
      "is made of / used for",
      "made of / used for",
      "is made of / used to"
    ],
    "correctIndex": 1,
    "explanation": "Use 'is made of' before the material ('metal') and 'used for' before the -ing purpose ('keeping coins in').",
    "ref": "Unit 6, pp. 74, 80"
  },
  {
    "id": "d6_bi_u6_s2_07",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "M",
    "q": "Aina has a bright torch-pen. You can use it for ___ in the dark during a power cut.",
    "options": [
      "write",
      "to write",
      "writing",
      "wrote"
    ],
    "correctIndex": 2,
    "explanation": "After 'use it for', the verb must be in the -ing form ('writing').",
    "ref": "Unit 6, pp. 74, 78"
  },
  {
    "id": "d6_bi_u6_s2_08",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "M",
    "q": "Look at the riddle: 'It's made of glass and metal. It's used for checking the weather.' What is it?",
    "options": [
      "a wooden drum",
      "a bottle opener",
      "a denim jacket",
      "a thermometer"
    ],
    "correctIndex": 3,
    "explanation": "A thermometer is made of glass and metal and is used for checking temperature and weather.",
    "ref": "Unit 6, p. 74"
  },
  {
    "id": "d6_bi_u6_s2_09",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "H",
    "q": "Which description of a Malaysian pewter mug is completely correct?",
    "options": [
      "It's made of metal and it's used for drinking cold water.",
      "It's made of metal and it's used for drink cold water.",
      "It made of metal and used for drinking cold water.",
      "It's used of metal and it's made for drinking cold water."
    ],
    "correctIndex": 0,
    "explanation": "Both clauses need 'is' ('It's'), 'made of' takes the material ('metal'), and 'used for' takes the -ing verb ('drinking').",
    "ref": "Unit 6, pp. 74, 80"
  },
  {
    "id": "d6_bi_u6_s2_10",
    "unit": "u6",
    "skill": "u6_s2",
    "diff": "H",
    "q": "Danish wants to describe a wooden jewellery box to his friend. Which sentence has a mistake?",
    "options": [
      "It's made of wood from local trees.",
      "It's used for keep rings and necklaces safe.",
      "It's designed by an artist in Sarawak.",
      "It's sold in craft shops around Malaysia."
    ],
    "correctIndex": 1,
    "explanation": "'It's used for keep' is incorrect; 'used for' must be followed by the -ing form ('keeping').",
    "ref": "Unit 6, pp. 74, 80"
  },
  {
    "id": "d6_bi_u6_s3_01",
    "unit": "u6",
    "skill": "u6_s3",
    "diff": "L",
    "q": "Jeans are made of ___, which is a strong blue cotton material.",
    "options": [
      "denim",
      "leather",
      "metal",
      "glass"
    ],
    "correctIndex": 0,
    "explanation": "Denim is the strong, usually blue cotton material used to make jeans.",
    "ref": "Unit 6, pp. 70, 139"
  },
  {
    "id": "d6_bi_u6_s3_02",
    "unit": "u6",
    "skill": "u6_s3",
    "diff": "L",
    "q": "Last night, Amir watched a TV ___ about how orangutans live in Sabah.",
    "options": [
      "advert",
      "documentary",
      "yarn",
      "herb"
    ],
    "correctIndex": 1,
    "explanation": "A 'documentary' is a TV programme that gives real information about people, animals, places, or things.",
    "ref": "Unit 6, pp. 75, 139"
  },
  {
    "id": "d6_bi_u6_s3_03",
    "unit": "u6",
    "skill": "u6_s3",
    "diff": "L",
    "q": "Change the verb 'invent' into a noun using the suffix -tion or -sion.",
    "options": [
      "invension",
      "inventation",
      "invention",
      "invenion"
    ],
    "correctIndex": 2,
    "explanation": "Because 'invent' already ends in 't', we add '-ion' to form the noun 'invention'.",
    "ref": "Unit 6, p. 72"
  },
  {
    "id": "d6_bi_u6_s3_04",
    "unit": "u6",
    "skill": "u6_s3",
    "diff": "L",
    "q": "Change the verb 'decide' into a noun.",
    "options": [
      "decidetion",
      "decidion",
      "decidation",
      "decision"
    ],
    "correctIndex": 3,
    "explanation": "'Decide' changes its ending from '-de' to '-sion' to form the noun 'decision'.",
    "ref": "Unit 6, p. 72"
  },
  {
    "id": "d6_bi_u6_s3_05",
    "unit": "u6",
    "skill": "u6_s3",
    "diff": "L",
    "q": "Before spinning cotton into ___, farmers must ___ the ripe cotton from the plants.",
    "options": [
      "yarn / harvest",
      "dye / throw away",
      "wood / harvest",
      "jeans / dye"
    ],
    "correctIndex": 0,
    "explanation": "Farmers 'harvest' (collect) cotton from the field, and factories spin it into long thin 'yarn'.",
    "ref": "Unit 6, pp. 70, 139"
  },
  {
    "id": "d6_bi_u6_s3_06",
    "unit": "u6",
    "skill": "u6_s3",
    "diff": "M",
    "q": "You need a good ___ to become a doctor or an engineer. (educate)",
    "options": [
      "educatesion",
      "education",
      "educateion",
      "educasion"
    ],
    "correctIndex": 1,
    "explanation": "Drop the final '-e' from 'educate' and add '-ion' / '-tion' to make 'education'.",
    "ref": "Unit 6, pp. 72, 81"
  },
  {
    "id": "d6_bi_u6_s3_07",
    "unit": "u6",
    "skill": "u6_s3",
    "diff": "M",
    "q": "Mei Ling made a colourful tote bag from her old jeans. Her aunt loved this clever ___! (create)",
    "options": [
      "creasion",
      "createion",
      "creation",
      "createtion"
    ],
    "correctIndex": 2,
    "explanation": "Drop the final '-e' from 'create' and add '-ion' to form 'creation'.",
    "ref": "Unit 6, pp. 71, 72, 81"
  },
  {
    "id": "d6_bi_u6_s3_08",
    "unit": "u6",
    "skill": "u6_s3",
    "diff": "M",
    "q": "Instead of ___ your old school bag, you can donate it to someone who needs it.",
    "options": [
      "harvesting",
      "dyeing",
      "persuading",
      "throwing away"
    ],
    "correctIndex": 3,
    "explanation": "'Throw away' means to put something in the bin because you do not want it anymore.",
    "ref": "Unit 6, pp. 70, 139"
  },
  {
    "id": "d6_bi_u6_s3_09",
    "unit": "u6",
    "skill": "u6_s3",
    "diff": "H",
    "q": "Which pair of verb-to-noun transformations is spelled correctly for BOTH words?",
    "options": [
      "divide -> division; direct -> direction",
      "explode -> explotion; persuade -> persuadion",
      "prevent -> prevension; divide -> dividion",
      "direct -> directtion; explode -> explosion"
    ],
    "correctIndex": 0,
    "explanation": "'Divide' becomes 'division' and 'direct' becomes 'direction'. ('Explode' -> 'explosion', 'persuade' -> 'persuasion', 'prevent' -> 'prevention'.)",
    "ref": "Unit 6, p. 72"
  },
  {
    "id": "d6_bi_u6_s3_10",
    "unit": "u6",
    "skill": "u6_s3",
    "diff": "H",
    "q": "Read this line from a radio advert: 'Buy BestWear cotton shirts — only RM18 each, and they are the softest shirts in Malaysia!' Which part is a FACT?",
    "options": [
      "They are the softest shirts in Malaysia.",
      "They cost RM18 each.",
      "You should buy them today.",
      "Everyone loves BestWear shirts."
    ],
    "correctIndex": 1,
    "explanation": "The price (RM18 each) is a checkable fact, whereas 'softest in Malaysia' and 'everyone loves' are opinions.",
    "ref": "Unit 6, pp. 75, 78"
  },
  {
    "id": "d6_bi_u7_s1_01",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "L",
    "q": "In the year 2050, I think robots ___ play traditional kompang music on stage.",
    "options": [
      "are going",
      "will",
      "going to",
      "will to"
    ],
    "correctIndex": 1,
    "explanation": "Use 'will' + base verb to make a general prediction or opinion about the distant future.",
    "ref": "Unit 7, p. 85"
  },
  {
    "id": "d6_bi_u7_s1_02",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "L",
    "q": "Aina has already bought her music book. She ___ learn the violin next month.",
    "options": [
      "is going to",
      "will to",
      "going to",
      "are going to"
    ],
    "correctIndex": 0,
    "explanation": "Use 'is going to' for a prior plan or intention, matching the singular subject 'She'.",
    "ref": "Unit 7, p. 85"
  },
  {
    "id": "d6_bi_u7_s1_03",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "L",
    "q": "Look at those dark clouds over Kuala Lumpur! It ___ rain before our outdoor concert.",
    "options": [
      "will",
      "is going to",
      "going to",
      "won't"
    ],
    "correctIndex": 1,
    "explanation": "Use 'is going to' when making a prediction based on clear evidence you can see right now (dark clouds).",
    "ref": "Unit 7, p. 85"
  },
  {
    "id": "d6_bi_u7_s1_04",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "L",
    "q": "Amir thinks traditional folk songs ___ disappear because young people still enjoy them.",
    "options": [
      "won't",
      "aren't going",
      "will to not",
      "not will"
    ],
    "correctIndex": 0,
    "explanation": "'Won't' (will not) is the negative form used for a general future prediction.",
    "ref": "Unit 7, p. 85"
  },
  {
    "id": "d6_bi_u7_s1_05",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "L",
    "q": "Mei Ling and Kavita ___ practise their duet together after school today. They planned it yesterday.",
    "options": [
      "will going to",
      "is going to",
      "are going to",
      "will to"
    ],
    "correctIndex": 2,
    "explanation": "Use 'are going to' for a plural subject ('Mei Ling and Kavita') talking about a plan made earlier.",
    "ref": "Unit 7, p. 85"
  },
  {
    "id": "d6_bi_u7_s1_06",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "M",
    "q": "Listen! The school choir is standing on the stage and the piano has started. The show ___ begin!",
    "options": [
      "is going to",
      "will",
      "are going to",
      "won't"
    ],
    "correctIndex": 0,
    "explanation": "We can see and hear the choir and piano right now, so we use 'is going to' for an immediate prediction.",
    "ref": "Unit 7, p. 85"
  },
  {
    "id": "d6_bi_u7_s1_07",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "M",
    "q": "Danish: 'Why are you carrying your guitar to school?' Hafiz: 'I ___ play a song for Teacher's Day.'",
    "options": [
      "will",
      "am going to",
      "going to",
      "will be"
    ],
    "correctIndex": 1,
    "explanation": "Hafiz already has a plan (he brought his guitar), so 'am going to' is the best choice for intentions.",
    "ref": "Unit 7, p. 85"
  },
  {
    "id": "d6_bi_u7_s1_08",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "M",
    "q": "Which sentence uses 'will' correctly for a future prediction?",
    "options": [
      "I think my brother will becomes a famous drummer one day.",
      "She will to sing at the Penang music festival next year.",
      "People will listen to more Malaysian folk music in the future.",
      "They are will perform on television tonight."
    ],
    "correctIndex": 2,
    "explanation": "'Will' is followed directly by the base verb ('listen') without 'to', '-s', or 'are'.",
    "ref": "Unit 7, p. 85"
  },
  {
    "id": "d6_bi_u7_s1_09",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "H",
    "q": "Choose the best pair to complete the dialogue:\nSiti: 'Look! Danish is walking too fast with that stack of drums. He ___ drop them!'\nNurul: 'Oh no! Don't worry, I think he ___ catch them in time.'",
    "options": [
      "will / is going to",
      "is going to / will",
      "is going to / is going to",
      "will / won't"
    ],
    "correctIndex": 1,
    "explanation": "The first blank is a prediction from what Siti sees right now ('is going to'), while the second is Nurul's personal opinion ('I think he will').",
    "ref": "Unit 7, p. 85 & p. 106"
  },
  {
    "id": "d6_bi_u7_s1_10",
    "unit": "u7",
    "skill": "u7_s1",
    "diff": "H",
    "q": "Which sentence expresses a personal intention rather than a general prediction?",
    "options": [
      "In the future, computers will write most pop songs.",
      "One day, our school orchestra will be famous across Malaysia.",
      "I'm going to record a new video of my kompang group this Saturday.",
      "Tickets for the national concert will probably cost a lot next year."
    ],
    "correctIndex": 2,
    "explanation": "'I'm going to record...' describes a definite personal plan or intention for this Saturday.",
    "ref": "Unit 7, p. 85"
  },
  {
    "id": "d6_bi_u7_s2_01",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "L",
    "q": "According to the school calendar, the cultural concert ___ at 7.30 p.m. on Friday.",
    "options": [
      "start",
      "starts",
      "starting",
      "is start"
    ],
    "correctIndex": 1,
    "explanation": "We use the Present Simple ('starts') for scheduled future events on a timetable or calendar.",
    "ref": "Unit 7, p. 86"
  },
  {
    "id": "d6_bi_u7_s2_02",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "L",
    "q": "The school bus to the Melaka concert hall ___ at 8.00 a.m. tomorrow.",
    "options": [
      "leave",
      "leaving",
      "leaves",
      "is leave"
    ],
    "correctIndex": 2,
    "explanation": "For a singular scheduled subject ('The school bus'), the Present Simple verb takes '-s': 'leaves'.",
    "ref": "Unit 7, p. 86"
  },
  {
    "id": "d6_bi_u7_s2_03",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "L",
    "q": "What time ___ the orchestra rehearsal finish this afternoon?",
    "options": [
      "do",
      "does",
      "is",
      "are"
    ],
    "correctIndex": 1,
    "explanation": "Present Simple questions with a singular subject ('the orchestra rehearsal') use 'does' + base verb.",
    "ref": "Unit 7, p. 86"
  },
  {
    "id": "d6_bi_u7_s2_04",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "L",
    "q": "Our train to Ipoh ___ at the station at 11.15 a.m. on Saturday.",
    "options": [
      "arrives",
      "arrive",
      "arriving",
      "to arrive"
    ],
    "correctIndex": 0,
    "explanation": "Timetabled transport arrivals use Present Simple; 'Our train' is singular, so we use 'arrives'.",
    "ref": "Unit 7, p. 86"
  },
  {
    "id": "d6_bi_u7_s2_05",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "L",
    "q": "The music competition ends late, so we ___ back in Kuching at midnight.",
    "options": [
      "gets",
      "getting",
      "get",
      "is get"
    ],
    "correctIndex": 2,
    "explanation": "With the plural subject 'we', the Present Simple form for a scheduled itinerary is 'get'.",
    "ref": "Unit 7, p. 86"
  },
  {
    "id": "d6_bi_u7_s2_06",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "M",
    "q": "Choose the grammatically correct question about tomorrow's music festival timetable.",
    "options": [
      "What time does the gates opens?",
      "What time do the gates open?",
      "What time does the gates open?",
      "What time the gates open?"
    ],
    "correctIndex": 1,
    "explanation": "'The gates' is plural, so the Present Simple question uses 'do' + base verb 'open'.",
    "ref": "Unit 7, p. 86"
  },
  {
    "id": "d6_bi_u7_s2_07",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "M",
    "q": "Kavita: 'When ___ your choir practice start?' Aina: 'It ___ at 2.30 p.m., right after lunch.'",
    "options": [
      "do / start",
      "does / starts",
      "does / start",
      "is / starts"
    ],
    "correctIndex": 1,
    "explanation": "The question uses 'does' with singular 'your choir practice', and the answer uses 'starts' for 'It'.",
    "ref": "Unit 7, p. 86 & p. 106"
  },
  {
    "id": "d6_bi_u7_s2_08",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "M",
    "q": "Read the itinerary:\n09:00 – Bus departs\n10:30 – Musicians arrive\n14:00 – Sound check finishes\nWhich statement matches the schedule?",
    "options": [
      "The musicians arrives at 10.30.",
      "The sound check finish at 2.00 p.m.",
      "The bus departs at 9.00 a.m.",
      "The bus depart at 10.30 a.m."
    ],
    "correctIndex": 2,
    "explanation": "'The bus departs at 9.00 a.m.' uses the correct singular Present Simple verb and matches the 09:00 entry.",
    "ref": "Unit 7, p. 86"
  },
  {
    "id": "d6_bi_u7_s2_09",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "H",
    "q": "Which sentence correctly uses the Present Simple for a fixed future schedule?",
    "options": [
      "The Battle of the Bands show begins at 8 p.m. this Saturday.",
      "Amir begins to write a new rap song whenever he feels bored.",
      "My little sister always sings pop songs in the morning.",
      "The hall usually opens at 7 a.m. on weekdays."
    ],
    "correctIndex": 0,
    "explanation": "'...begins at 8 p.m. this Saturday' refers to a specific scheduled future event, whereas the other options describe habits or routines.",
    "ref": "Unit 7, p. 86 & p. 106"
  },
  {
    "id": "d6_bi_u7_s2_10",
    "unit": "u7",
    "skill": "u7_s2",
    "diff": "H",
    "q": "Complete the dialogue:\nDanish: '___ the hall open before the rehearsal finishes?'\nMei Ling: 'No, the doors ___ until 6.00 p.m.'",
    "options": [
      "Does / doesn't open",
      "Do / don't open",
      "Does / don't open",
      "Is / aren't open"
    ],
    "correctIndex": 2,
    "explanation": "'The hall' is singular ('Does ... open?'), while 'the doors' is plural ('don't open'). Both use Present Simple for scheduled future events.",
    "ref": "Unit 7, p. 86"
  },
  {
    "id": "d6_bi_u7_s3_01",
    "unit": "u7",
    "skill": "u7_s3",
    "diff": "L",
    "q": "The new Hari Raya song has a very ___ tune—I can't stop humming it all day!",
    "options": [
      "impolite",
      "catchy",
      "dishonest",
      "midnight"
    ],
    "correctIndex": 1,
    "explanation": "'Catchy' describes a song or tune that you like immediately and is easy to remember.",
    "ref": "Unit 7, p. 87 & p. 140"
  },
  {
    "id": "d6_bi_u7_s3_02",
    "unit": "u7",
    "skill": "u7_s3",
    "diff": "L",
    "q": "Wei Ming plays the violin in a large ___ with forty other classical musicians.",
    "options": [
      "orchestra",
      "calendar",
      "accordion",
      "chorus"
    ],
    "correctIndex": 0,
    "explanation": "An 'orchestra' is a large group of musicians who play many different instruments together.",
    "ref": "Unit 7, p. 86 & p. 140"
  },
  {
    "id": "d6_bi_u7_s3_03",
    "unit": "u7",
    "skill": "u7_s3",
    "diff": "L",
    "q": "Which prefix makes the word 'polite' mean the opposite?",
    "options": [
      "dis-",
      "un-",
      "im-",
      "re-"
    ],
    "correctIndex": 2,
    "explanation": "We add the prefix 'im-' before words beginning with 'p' or 'm', giving 'impolite'.",
    "ref": "Unit 7, p. 84 & p. 107"
  },
  {
    "id": "d6_bi_u7_s3_04",
    "unit": "u7",
    "skill": "u7_s3",
    "diff": "L",
    "q": "It is ___ to copy someone else's song and say you wrote it yourself.",
    "options": [
      "imhonest",
      "dishonest",
      "unhonest",
      "inhonest"
    ],
    "correctIndex": 1,
    "explanation": "The negative form of 'honest' uses the prefix 'dis-' to form 'dishonest'.",
    "ref": "Unit 7, p. 84 & p. 107"
  },
  {
    "id": "d6_bi_u7_s3_05",
    "unit": "u7",
    "skill": "u7_s3",
    "diff": "L",
    "q": "Before the big school concert, the dancers had one final ___ to practise their steps.",
    "options": [
      "rehearsal",
      "rhythm",
      "rap",
      "tour"
    ],
    "correctIndex": 0,
    "explanation": "A 'rehearsal' is a practice session for a play or concert before performing it for an audience.",
    "ref": "Unit 7, p. 86 & p. 140"
  },
  {
    "id": "d6_bi_u7_s3_06",
    "unit": "u7",
    "skill": "u7_s3",
    "diff": "M",
    "q": "Aina's band posted short clips on social media to ___ their charity concert in Johor Bahru.",
    "options": [
      "perform",
      "promote",
      "disagree",
      "remind"
    ],
    "correctIndex": 1,
    "explanation": "'Promote' means to give publicity to an event or product so that more people hear about it and attend.",
    "ref": "Unit 7, p. 82 & p. 140"
  },
  {
    "id": "d6_bi_u7_s3_07",
    "unit": "u7",
    "skill": "u7_s3",
    "diff": "M",
    "q": "In a song, which part is repeated several times and gives the main idea of the song?",
    "options": [
      "the verse",
      "the chorus",
      "the script",
      "the calendar"
    ],
    "correctIndex": 1,
    "explanation": "The 'chorus' is the section of a song that is repeated several times and highlights the main idea.",
    "ref": "Unit 7, p. 89"
  },
  {
    "id": "d6_bi_u7_s3_08",
    "unit": "u7",
    "skill": "u7_s3",
    "diff": "M",
    "q": "Which pair of words BOTH correctly take the prefix 'im-'?",
    "options": [
      "possible / agree",
      "mature / perfect",
      "appear / polite",
      "honest / respect"
    ],
    "correctIndex": 1,
    "explanation": "Both 'mature' (immature) and 'perfect' (imperfect) begin with 'm' or 'p' and take 'im-'.",
    "ref": "Unit 7, p. 84 & p. 107"
  },
  {
    "id": "d6_bi_u7_s3_09",
    "unit": "u7",
    "skill": "u7_s3",
    "diff": "H",
    "q": "When Kavita heard the cheerful ___ of the traditional joget dance, it ___ her of her grandparents' village in Melaka.",
    "options": [
      "rhythm / reminded",
      "rehearsal / promoted",
      "chorus / disagreed",
      "optimistic / toured"
    ],
    "correctIndex": 0,
    "explanation": "'Rhythm' is the repeated pattern of sounds in music, and 'reminded (someone) of' means it made her think of a memory.",
    "ref": "Unit 7, p. 87 & p. 140"
  },
  {
    "id": "d6_bi_u7_s3_10",
    "unit": "u7",
    "skill": "u7_s3",
    "diff": "H",
    "q": "Choose the sentence where the negative prefix is used INCORRECTLY.",
    "options": [
      "It is impossible to learn twenty new songs in one hour.",
      "I disagree with Amir—traditional music is very exciting.",
      "The magician made the flute disappear from the stage.",
      "Talking loudly during a classical concert is dispolite."
    ],
    "correctIndex": 3,
    "explanation": "'Polite' starts with 'p', so its negative form is 'impolite', not 'dispolite'.",
    "ref": "Unit 7, p. 84 & p. 107"
  },
  {
    "id": "d6_bi_u8_s1_01",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "L",
    "q": "If Hafiz ___ early, we will read the folk tale together before class.",
    "options": [
      "arrives",
      "will arrive",
      "arrived",
      "arriving"
    ],
    "correctIndex": 0,
    "explanation": "In a First Conditional sentence, the if-clause uses the Present Simple ('arrives'), never 'will'.",
    "ref": "Unit 8, p. 99"
  },
  {
    "id": "d6_bi_u8_s1_02",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "L",
    "q": "If it rains heavily in Penang this evening, we ___ stay at home and watch a story film.",
    "options": [
      "are",
      "will",
      "do",
      "have"
    ],
    "correctIndex": 1,
    "explanation": "The main result clause in the First Conditional uses 'will' + base verb ('will stay').",
    "ref": "Unit 8, p. 99"
  },
  {
    "id": "d6_bi_u8_s1_03",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "L",
    "q": "Siti won't finish her book report if she ___ turn off her tablet.",
    "options": [
      "won't",
      "isn't",
      "doesn't",
      "didn't"
    ],
    "correctIndex": 2,
    "explanation": "The negative Present Simple in the if-clause for 'she' is 'doesn't' + base verb.",
    "ref": "Unit 8, p. 99"
  },
  {
    "id": "d6_bi_u8_s1_04",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "L",
    "q": "If you tell lies to your friends, they ___ trust you next time.",
    "options": [
      "won't",
      "don't",
      "aren't",
      "not will"
    ],
    "correctIndex": 0,
    "explanation": "'Won't' (will not) expresses the likely negative future result in the main clause.",
    "ref": "Unit 8, p. 99"
  },
  {
    "id": "d6_bi_u8_s1_05",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "L",
    "q": "If Amir ___ enough pocket money, he will buy the Sang Kancil storybook.",
    "options": [
      "have",
      "will have",
      "has",
      "having"
    ],
    "correctIndex": 2,
    "explanation": "Use Present Simple 'has' with the singular subject 'Amir' inside the if-clause.",
    "ref": "Unit 8, p. 99"
  },
  {
    "id": "d6_bi_u8_s1_06",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "M",
    "q": "Which sentence has the correct punctuation for a First Conditional sentence?",
    "options": [
      "We'll visit the library, if we finish early.",
      "If we finish early we'll visit the library.",
      "If we finish early, we'll visit the library.",
      "We'll, visit the library if we finish early."
    ],
    "correctIndex": 2,
    "explanation": "Put a comma after the if-clause when it comes first; do not use a comma when the if-clause comes second.",
    "ref": "Unit 8, p. 99"
  },
  {
    "id": "d6_bi_u8_s1_07",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "M",
    "q": "Complete the sentence:\nIf Mei Ling ___ the teacher for help, she ___ understand the moral of the story.",
    "options": [
      "asks / will",
      "will ask / will",
      "asks / does",
      "ask / will"
    ],
    "correctIndex": 0,
    "explanation": "The if-clause needs Present Simple ('asks') and the main clause needs 'will'.",
    "ref": "Unit 8, p. 99"
  },
  {
    "id": "d6_bi_u8_s1_08",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "M",
    "q": "Nurul will be late for the storytelling competition if she ___ the bus.",
    "options": [
      "will miss",
      "miss",
      "misses",
      "is missing"
    ],
    "correctIndex": 2,
    "explanation": "In the if-clause at the end of the sentence, singular 'she' takes the Present Simple 'misses'.",
    "ref": "Unit 8, p. 99"
  },
  {
    "id": "d6_bi_u8_s1_09",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "H",
    "q": "Which First Conditional sentence is completely correct in grammar and punctuation?",
    "options": [
      "If the king won't forgive the artist, the artist will leave the palace.",
      "The hero will rescue the villagers if he finds the hidden key.",
      "If you will practise every day, you'll paint a magnificent swan.",
      "She gets very tired tomorrow, if she stays up past midnight."
    ],
    "correctIndex": 1,
    "explanation": "'The hero will rescue...' has 'will' + base verb in the main clause, Present Simple ('finds') in the if-clause, and no comma when the if-clause is second.",
    "ref": "Unit 8, p. 99"
  },
  {
    "id": "d6_bi_u8_s1_10",
    "unit": "u8",
    "skill": "u8_s1",
    "diff": "H",
    "q": "Rewrite the idea using the First Conditional: (not rest now / feel ill tomorrow)\nWhich sentence is correct?",
    "options": [
      "If you don't rest now, you'll feel ill tomorrow.",
      "If you won't rest now, you feel ill tomorrow.",
      "You'll feel ill tomorrow, if you don't rest now.",
      "If you aren't rest now, you'll feel ill tomorrow."
    ],
    "correctIndex": 0,
    "explanation": "'If you don't rest now, you'll feel ill tomorrow.' correctly uses Present Simple negative ('don't rest'), a comma after the if-clause, and 'you'll feel' in the main clause.",
    "ref": "Unit 8, p. 99"
  },
  {
    "id": "d6_bi_u8_s2_01",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "L",
    "q": "In the adventure story, the sailor is lost at sea, so a passing ship ___ rescue him.",
    "options": [
      "might",
      "might to",
      "mights",
      "to might"
    ],
    "correctIndex": 0,
    "explanation": "Modal verbs like 'might' are followed directly by the base verb without 'to' or '-s'.",
    "ref": "Unit 8, p. 100"
  },
  {
    "id": "d6_bi_u8_s2_02",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "L",
    "q": "Aina isn't sure how the mystery ends. The detective ___ find a secret clue behind the door.",
    "options": [
      "may to",
      "could",
      "coulds",
      "is may"
    ],
    "correctIndex": 1,
    "explanation": "'Could' is a modal verb used to speculate about a possible event in the story.",
    "ref": "Unit 8, p. 100"
  },
  {
    "id": "d6_bi_u8_s2_03",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "L",
    "q": "The waves are very strong, so they ___ carry the small wooden boat to the beach.",
    "options": [
      "may not",
      "not may",
      "don't may",
      "mayn't to"
    ],
    "correctIndex": 0,
    "explanation": "The negative form of 'may' for speculation is 'may not' + base verb.",
    "ref": "Unit 8, p. 100"
  },
  {
    "id": "d6_bi_u8_s2_04",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "L",
    "q": "Danish says the hero is tied up with a thick rope, so he ___ escape on his own.",
    "options": [
      "might not",
      "doesn't might",
      "not might",
      "might no"
    ],
    "correctIndex": 0,
    "explanation": "'Might not' is used to say that something possibly won't happen.",
    "ref": "Unit 8, p. 100"
  },
  {
    "id": "d6_bi_u8_s2_05",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "L",
    "q": "Look at those grey clouds over Sabah. We ___ see Mount Kinabalu clearly today.",
    "options": [
      "might not",
      "coulds not",
      "may to not",
      "not could"
    ],
    "correctIndex": 0,
    "explanation": "'Might not' correctly expresses uncertainty about a future possibility.",
    "ref": "Unit 8, p. 100"
  },
  {
    "id": "d6_bi_u8_s2_06",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "M",
    "q": "Kavita: 'Who is knocking at the palace gate?' Wei Ming: 'It ___ be the royal messenger, but I'm not certain.'",
    "options": [
      "may",
      "will",
      "is",
      "does"
    ],
    "correctIndex": 0,
    "explanation": "Because Wei Ming says 'I'm not certain', 'may' is the right modal for speculation.",
    "ref": "Unit 8, p. 100"
  },
  {
    "id": "d6_bi_u8_s2_07",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "M",
    "q": "Which sentence correctly uses a modal of speculation?",
    "options": [
      "Someone might calls the emergency services soon.",
      "The helicopter may not see the lost hiker in the jungle.",
      "They could to arrive before midnight.",
      "She mights not know where the treasure is hidden."
    ],
    "correctIndex": 1,
    "explanation": "'May not see' uses the modal + not + base verb without adding '-s' or 'to'.",
    "ref": "Unit 8, p. 100"
  },
  {
    "id": "d6_bi_u8_s2_08",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "M",
    "q": "Read the story clue: 'Farah dropped her torch in the dark cave.' What is the best speculation?",
    "options": [
      "She could find a sharp stone to cut the rope.",
      "She might not see the exit path easily.",
      "She may to call her friends on the radio.",
      "She doesn't might be afraid of the dark."
    ],
    "correctIndex": 1,
    "explanation": "Without a torch in a dark cave, 'She might not see the exit path easily' is logical and grammatically correct.",
    "ref": "Unit 8, p. 100"
  },
  {
    "id": "d6_bi_u8_s2_09",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "H",
    "q": "Which negative form is NOT used in Unit 8 to speculate about a possible future event ('maybe not')?",
    "options": [
      "may not",
      "might not",
      "couldn't",
      "Both may not and might not"
    ],
    "correctIndex": 2,
    "explanation": "In Unit 8, affirmative speculation uses may, might, or could, while negative speculation ('maybe not') uses 'may not' or 'might not' (not 'couldn't').",
    "ref": "Unit 8, p. 100"
  },
  {
    "id": "d6_bi_u8_s2_10",
    "unit": "u8",
    "skill": "u8_s2",
    "diff": "H",
    "q": "Hafiz: 'The villain has locked the door, so the hero ___ get out.'\nSiti: 'Wait! His loyal bird ___ bring him the spare key!'",
    "options": [
      "might not / could",
      "could / might not",
      "may / may not",
      "might to / may"
    ],
    "correctIndex": 0,
    "explanation": "Hafiz expresses a negative possibility ('might not get out'), and Siti offers a positive possibility ('could bring').",
    "ref": "Unit 8, p. 100"
  },
  {
    "id": "d6_bi_u8_s3_01",
    "unit": "u8",
    "skill": "u8_s3",
    "diff": "L",
    "q": "The ruler in the old folk tale was ___ when he saw the servant drop the golden bowl.",
    "options": [
      "furious",
      "astonished",
      "cheerful",
      "powerful"
    ],
    "correctIndex": 0,
    "explanation": "'Furious' means very, very angry, which fits the ruler's reaction to a broken bowl.",
    "ref": "Unit 8, p. 96 & p. 141"
  },
  {
    "id": "d6_bi_u8_s3_02",
    "unit": "u8",
    "skill": "u8_s3",
    "diff": "L",
    "q": "The ___ of the story 'The Boy Who Cried Wolf' is that you should always tell the truth.",
    "options": [
      "palace",
      "moral",
      "emperor",
      "rope"
    ],
    "correctIndex": 1,
    "explanation": "A 'moral' is the lesson or message that a story teaches you.",
    "ref": "Unit 8, p. 101, p. 104 & p. 141"
  },
  {
    "id": "d6_bi_u8_s3_03",
    "unit": "u8",
    "skill": "u8_s3",
    "diff": "L",
    "q": "Which word is a synonym for 'surprised'?",
    "options": [
      "furious",
      "powerful",
      "astonished",
      "terrible"
    ],
    "correctIndex": 2,
    "explanation": "'Astonished' means very, very surprised, making it a synonym for 'surprised'.",
    "ref": "Unit 8, p. 103, p. 107 & p. 141"
  },
  {
    "id": "d6_bi_u8_s3_04",
    "unit": "u8",
    "skill": "u8_s3",
    "diff": "L",
    "q": "The brave villagers worked together to ___ the lost child from the flooded river.",
    "options": [
      "escape",
      "rescue",
      "collect",
      "forgive"
    ],
    "correctIndex": 1,
    "explanation": "'Rescue' means to save someone from a dangerous situation.",
    "ref": "Unit 8, p. 100 & p. 141"
  },
  {
    "id": "d6_bi_u8_s3_05",
    "unit": "u8",
    "skill": "u8_s3",
    "diff": "L",
    "q": "Which phrase means the same as 'take place'?",
    "options": [
      "run away",
      "go back",
      "happen",
      "play a trick"
    ],
    "correctIndex": 2,
    "explanation": "'Take place' means to happen (for example, 'The story takes place in a village').",
    "ref": "Unit 8, p. 104, p. 107 & p. 141"
  },
  {
    "id": "d6_bi_u8_s3_06",
    "unit": "u8",
    "skill": "u8_s3",
    "diff": "M",
    "q": "Although Amir broke his sister's favourite pen by accident, she decided to ___ him after he said sorry.",
    "options": [
      "forgive",
      "hurt",
      "own",
      "collect"
    ],
    "correctIndex": 0,
    "explanation": "'Forgive' means to stop feeling angry with someone for doing something wrong.",
    "ref": "Unit 8, p. 97 & p. 141"
  },
  {
    "id": "d6_bi_u8_s3_07",
    "unit": "u8",
    "skill": "u8_s3",
    "diff": "M",
    "q": "In the story, the clever mousedeer managed to ___ from the hungry crocodile by jumping across the logs.",
    "options": [
      "escape",
      "take place",
      "tell lies",
      "tie up"
    ],
    "correctIndex": 0,
    "explanation": "'Escape' means to get away from danger or a place where you are trapped; its synonym is 'run away'.",
    "ref": "Unit 8, p. 100, p. 107 & p. 141"
  },
  {
    "id": "d6_bi_u8_s3_08",
    "unit": "u8",
    "skill": "u8_s3",
    "diff": "M",
    "q": "Which pair of words are NOT synonyms?",
    "options": [
      "powerful / strong",
      "furious / angry",
      "terrible / fantastic",
      "go back / return"
    ],
    "correctIndex": 2,
    "explanation": "'Terrible' means very bad, whereas 'fantastic' means wonderful—they are opposites, not synonyms.",
    "ref": "Unit 8, p. 103 & p. 107"
  },
  {
    "id": "d6_bi_u8_s3_09",
    "unit": "u8",
    "skill": "u8_s3",
    "diff": "H",
    "q": "Read this short opening: 'Aina looked at the old map in her hand. She felt nervous as she stepped into the dark forest.'\nWhat point of view is this story written in, and why?",
    "options": [
      "First person, because it uses 'she' and 'her'.",
      "Third person, because the narrator is an observer using 'she' and 'her'.",
      "First person, because we know how Aina feels.",
      "Third person, because the story takes place in a forest."
    ],
    "correctIndex": 1,
    "explanation": "A third-person narrator acts as an observer of the characters and uses pronouns like 'he', 'she', 'it', or 'they'.",
    "ref": "Unit 8, p. 98"
  },
  {
    "id": "d6_bi_u8_s3_10",
    "unit": "u8",
    "skill": "u8_s3",
    "diff": "H",
    "q": "Mei Ling wrote: 'The ___ emperor lived in a grand ___, and when he heard the ___ news, he quickly forgave his loyal painter.'\nChoose the best words to complete the sentence.",
    "options": [
      "powerful / palace / fantastic",
      "bad temper / rope / furious",
      "astonished / swan / terrible",
      "in trouble / moral / dishonest"
    ],
    "correctIndex": 0,
    "explanation": "A 'powerful' emperor lives in a 'palace', and 'fantastic' news would make him happy enough to forgive someone.",
    "ref": "Unit 8, p. 96, p. 103 & p. 141"
  },
  {
    "id": "d6_bi_u9_s1_01",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "L",
    "q": "Aina said, 'Nasi lemak is delicious.' -> Aina said that nasi lemak ___ delicious.",
    "options": [
      "is",
      "was",
      "are",
      "were"
    ],
    "correctIndex": 1,
    "explanation": "In reported speech, the present simple verb 'is' shifts back to the past simple 'was' after 'said'.",
    "ref": "Unit 9, p. 111"
  },
  {
    "id": "d6_bi_u9_s1_02",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "L",
    "q": "Amir said, 'I like reading comics in the library.' -> Amir said he ___ reading comics in the library.",
    "options": [
      "liked",
      "likes",
      "liking",
      "like"
    ],
    "correctIndex": 0,
    "explanation": "When reporting a statement with 'said', the present simple verb 'like' changes to the past simple 'liked'.",
    "ref": "Unit 9, p. 111"
  },
  {
    "id": "d6_bi_u9_s1_03",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "L",
    "q": "Mei Ling said, 'I am making a poster for Science.' -> Mei Ling said she ___ a poster for Science.",
    "options": [
      "is making",
      "were making",
      "was making",
      "makes"
    ],
    "correctIndex": 2,
    "explanation": "Present continuous 'am making' shifts back to past continuous 'was making' for the singular subject 'she'.",
    "ref": "Unit 9, p. 111"
  },
  {
    "id": "d6_bi_u9_s1_04",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "L",
    "q": "The pupils said, 'We are ready for the school trip to Melaka.' -> The pupils said they ___ ready for the school trip to Melaka.",
    "options": [
      "are",
      "was",
      "been",
      "were"
    ],
    "correctIndex": 3,
    "explanation": "In reported speech, 'are' shifts back to 'were' to match the plural subject 'they'.",
    "ref": "Unit 9, p. 111"
  },
  {
    "id": "d6_bi_u9_s1_05",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "L",
    "q": "Cikgu Farid said, 'This snack has too much sugar.' -> Cikgu Farid said that the snack ___ too much sugar.",
    "options": [
      "have",
      "had",
      "has",
      "having"
    ],
    "correctIndex": 1,
    "explanation": "The present simple verb 'has' changes to its past simple form 'had' in reported speech.",
    "ref": "Unit 9, p. 111"
  },
  {
    "id": "d6_bi_u9_s1_06",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "M",
    "q": "Kavita said, 'I don't drink fizzy drinks after dinner.' -> Kavita said she ___ fizzy drinks after dinner.",
    "options": [
      "doesn't drink",
      "wasn't drinking",
      "didn't drink",
      "don't drink"
    ],
    "correctIndex": 2,
    "explanation": "A negative present simple verb ('don't drink') shifts back to the past simple negative ('didn't drink') in reported speech.",
    "ref": "Unit 9, p. 111"
  },
  {
    "id": "d6_bi_u9_s1_07",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "M",
    "q": "Danish and Hafiz said, 'We are practising for the badminton match.' -> They said ___ for the badminton match.",
    "options": [
      "they were practising",
      "we were practising",
      "they are practising",
      "he was practising"
    ],
    "correctIndex": 0,
    "explanation": "The pronoun 'we' changes to 'they', and 'are practising' shifts back to 'were practising'.",
    "ref": "Unit 9, p. 111"
  },
  {
    "id": "d6_bi_u9_s1_08",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "M",
    "q": "Puan Salma said, 'My daughter wants to study in Penang.' -> Puan Salma said ___ to study in Penang.",
    "options": [
      "my daughter wanted",
      "her daughter wants",
      "she wanted",
      "her daughter wanted"
    ],
    "correctIndex": 3,
    "explanation": "'My' changes to 'her' to refer to Puan Salma, and 'wants' shifts back to 'wanted'.",
    "ref": "Unit 9, p. 111"
  },
  {
    "id": "d6_bi_u9_s1_09",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "H",
    "q": "Which sentence correctly reports: Nurul said, 'I am helping my brother with his homework now'?",
    "options": [
      "Nurul said she is helping her brother with his homework.",
      "Nurul said she was helping her brother with his homework.",
      "Nurul said she was helping my brother with his homework.",
      "Nurul said I was helping her brother with his homework."
    ],
    "correctIndex": 1,
    "explanation": "Both pronouns ('I' -> 'she', 'my' -> 'her') and the verb ('am helping' -> 'was helping') must change correctly.",
    "ref": "Unit 9, p. 111"
  },
  {
    "id": "d6_bi_u9_s1_10",
    "unit": "u9",
    "skill": "u9_s1",
    "diff": "H",
    "q": "Doctor Wong told Amir, 'You need to eat more fruit.' How should Amir report this to his mother?",
    "options": [
      "Doctor Wong told me that I needed to eat more fruit.",
      "Doctor Wong told me that you needed to eat more fruit.",
      "Doctor Wong told me that he needs to eat more fruit.",
      "Doctor Wong told me that I need to eat more fruit."
    ],
    "correctIndex": 0,
    "explanation": "Since Doctor Wong spoke to Amir, 'you' becomes 'I' when Amir reports it, and 'need' shifts back to 'needed'.",
    "ref": "Unit 9, pp. 109, 111"
  },
  {
    "id": "d6_bi_u9_s2_01",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "L",
    "q": "Aina cannot find her library card ___ in the classroom.",
    "options": [
      "somewhere",
      "nowhere",
      "anywhere",
      "anyone"
    ],
    "correctIndex": 2,
    "explanation": "We use 'anywhere' for a place in negative sentences ('cannot find').",
    "ref": "Unit 9, p. 112"
  },
  {
    "id": "d6_bi_u9_s2_02",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "L",
    "q": "Listen! ___ is knocking on the staffroom door.",
    "options": [
      "Someone",
      "Anyone",
      "Something",
      "No one"
    ],
    "correctIndex": 0,
    "explanation": "'Someone' is used for a person in an affirmative statement.",
    "ref": "Unit 9, p. 112"
  },
  {
    "id": "d6_bi_u9_s2_03",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "L",
    "q": "Is there ___ in the school canteen who can help carry these boxes?",
    "options": [
      "someone",
      "no one",
      "anything",
      "anyone"
    ],
    "correctIndex": 3,
    "explanation": "In a question asking about a person, we normally use 'anyone'.",
    "ref": "Unit 9, p. 112"
  },
  {
    "id": "d6_bi_u9_s2_04",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "L",
    "q": "The pencil case is completely empty. There is ___ inside it.",
    "options": [
      "anything",
      "nothing",
      "something",
      "nowhere"
    ],
    "correctIndex": 1,
    "explanation": "'Nothing' is used in an affirmative verb structure ('There is...') to give a negative meaning.",
    "ref": "Unit 9, p. 112"
  },
  {
    "id": "d6_bi_u9_s2_05",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "L",
    "q": "Don't worry about your water bottle. It must be ___ in the school hall.",
    "options": [
      "anywhere",
      "nowhere",
      "somewhere",
      "something"
    ],
    "correctIndex": 2,
    "explanation": "'Somewhere' is used for a place in an affirmative statement.",
    "ref": "Unit 9, p. 112"
  },
  {
    "id": "d6_bi_u9_s2_06",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "M",
    "q": "Danish checked the field and the hall, so there was ___ else left to look for his watch.",
    "options": [
      "nowhere",
      "anywhere",
      "somewhere",
      "no one"
    ],
    "correctIndex": 0,
    "explanation": "'Nowhere' means 'no place' and fits an affirmative verb ('there was') with a negative meaning.",
    "ref": "Unit 9, p. 112"
  },
  {
    "id": "d6_bi_u9_s2_07",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "M",
    "q": "Mei Ling didn't tell ___ about the surprise party for Cikgu Lee.",
    "options": [
      "no one",
      "someone",
      "anything",
      "anyone"
    ],
    "correctIndex": 3,
    "explanation": "Because 'didn't' is already negative, we use 'anyone' (not 'no one') to avoid a double negative.",
    "ref": "Unit 9, p. 112"
  },
  {
    "id": "d6_bi_u9_s2_08",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "M",
    "q": "Amir wants to buy ___ healthy for his little sister's snack at the market in Kota Kinabalu.",
    "options": [
      "anything",
      "something",
      "nothing",
      "somewhere"
    ],
    "correctIndex": 1,
    "explanation": "'Something' refers to an unspecified thing in an affirmative statement.",
    "ref": "Unit 9, p. 112"
  },
  {
    "id": "d6_bi_u9_s2_09",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "H",
    "q": "Which sentence is grammatically correct?",
    "options": [
      "We didn't see nothing strange near the gate.",
      "We saw anything strange near the gate.",
      "No one knew where the missing tablet was.",
      "Anyone didn't know where the missing tablet was."
    ],
    "correctIndex": 2,
    "explanation": "'No one knew...' correctly uses 'no one' with a positive verb, whereas 'didn't see nothing' is a double negative and 'Anyone didn't...' is unnatural.",
    "ref": "Unit 9, p. 112"
  },
  {
    "id": "d6_bi_u9_s2_10",
    "unit": "u9",
    "skill": "u9_s2",
    "diff": "H",
    "q": "Read the dialogue: 'Did ___ find my umbrella?' 'No, ___ has seen it yet.'",
    "options": [
      "anyone / no one",
      "someone / anyone",
      "anyone / anyone",
      "no one / someone"
    ],
    "correctIndex": 0,
    "explanation": "The question uses 'anyone', and the negative reply with a positive verb ('has seen') requires 'no one'.",
    "ref": "Unit 9, p. 112"
  },
  {
    "id": "d6_bi_u9_s3_01",
    "unit": "u9",
    "skill": "u9_s3",
    "diff": "L",
    "q": "At the supermarket in Johor Bahru, the cashier scans the ___ on a bottle of juice to check its price.",
    "options": [
      "teaspoon",
      "barcode",
      "debate",
      "diet"
    ],
    "correctIndex": 1,
    "explanation": "A barcode is the label with lines that gives a computer information about a product.",
    "ref": "Unit 9, p. 108; Glossary, p. 142"
  },
  {
    "id": "d6_bi_u9_s3_02",
    "unit": "u9",
    "skill": "u9_s3",
    "diff": "L",
    "q": "Kavita downloaded a new ___ on her father's smartphone to track how much water she drinks.",
    "options": [
      "app",
      "snack",
      "exam",
      "media"
    ],
    "correctIndex": 0,
    "explanation": "An app is a computer program downloaded onto a smartphone.",
    "ref": "Unit 9, pp. 108-109; Glossary, p. 142"
  },
  {
    "id": "d6_bi_u9_s3_03",
    "unit": "u9",
    "skill": "u9_s3",
    "diff": "L",
    "q": "Please turn down the radio so Amir can ___ on his Maths revision.",
    "options": [
      "blame",
      "disagree",
      "concentrate",
      "lose"
    ],
    "correctIndex": 2,
    "explanation": "'Concentrate' means to give all your attention to what you are doing.",
    "ref": "Unit 9, p. 113; Glossary, p. 142"
  },
  {
    "id": "d6_bi_u9_s3_04",
    "unit": "u9",
    "skill": "u9_s3",
    "diff": "L",
    "q": "Which phrase is best for introducing your own view at the start of a paragraph in an opinion essay?",
    "options": [
      "On my opinion,",
      "For my opinion,",
      "At my opinion,",
      "In my opinion,"
    ],
    "correctIndex": 3,
    "explanation": "The standard expression for giving a personal view is 'In my opinion,'.",
    "ref": "Unit 9, pp. 114-116"
  },
  {
    "id": "d6_bi_u9_s3_05",
    "unit": "u9",
    "skill": "u9_s3",
    "diff": "L",
    "q": "In a class debate at Sekolah Kebangsaan Taman Melati, the team that supports the motion is ___ the motion.",
    "options": [
      "for",
      "against",
      "unfair",
      "between"
    ],
    "correctIndex": 0,
    "explanation": "'For' means agreeing with or supporting an idea or motion, while 'against' means opposing it.",
    "ref": "Unit 9, p. 116; Glossary, p. 142"
  },
  {
    "id": "d6_bi_u9_s3_06",
    "unit": "u9",
    "skill": "u9_s3",
    "diff": "M",
    "q": "Which group of words belongs to the same word family as 'advertise'?",
    "options": [
      "advert, advertiser",
      "advice, advise",
      "agree, agreement",
      "product, producer"
    ],
    "correctIndex": 0,
    "explanation": "'Advert' (noun), 'advertiser' (person), and 'advertise' (verb) are related words in the same word group.",
    "ref": "Unit 9, p. 110"
  },
  {
    "id": "d6_bi_u9_s3_07",
    "unit": "u9",
    "skill": "u9_s3",
    "diff": "M",
    "q": "If you want to politely disagree with a classmate's point during a debate before giving your own idea, what can you say?",
    "options": [
      "You are totally wrong about that.",
      "I see what you mean, but...",
      "First of all, listen to me.",
      "That is not a good choice."
    ],
    "correctIndex": 1,
    "explanation": "'I see what you mean, but...' politely acknowledges the other speaker's point before introducing a contrasting view.",
    "ref": "Unit 9, p. 116"
  },
  {
    "id": "d6_bi_u9_s3_08",
    "unit": "u9",
    "skill": "u9_s3",
    "diff": "M",
    "q": "Many factories ___ snacks with extra salt, so shoppers should read the ___ label carefully.",
    "options": [
      "product / produce",
      "producer / product",
      "produce / product",
      "produce / producer"
    ],
    "correctIndex": 2,
    "explanation": "'Produce' is the verb ('factories produce') and 'product' is the noun for the item sold ('product label').",
    "ref": "Unit 9, pp. 108, 110"
  },
  {
    "id": "d6_bi_u9_s3_09",
    "unit": "u9",
    "skill": "u9_s3",
    "diff": "H",
    "q": "Aina is writing a four-paragraph opinion essay about school uniforms. What should she put in the first paragraph (Introduction)?",
    "options": [
      "A summary of both arguments without giving her view",
      "Only her second supporting reason and an example",
      "An explanation of the topic and her main opinion",
      "A list of debate rules for two opposing teams"
    ],
    "correctIndex": 2,
    "explanation": "In an opinion essay, the introduction explains the topic and clearly states the writer's opinion.",
    "ref": "Unit 9, p. 115"
  },
  {
    "id": "d6_bi_u9_s3_10",
    "unit": "u9",
    "skill": "u9_s3",
    "diff": "H",
    "q": "Why do writers put a topic sentence at the start of each main body paragraph in an opinion essay?",
    "options": [
      "To introduce the main idea of the paragraph so the argument is clear",
      "To replace the conclusion so the essay can be shorter",
      "To list all the vocabulary words used in the textbook",
      "To ask the reader questions without giving any reasons"
    ],
    "correctIndex": 0,
    "explanation": "A topic sentence introduces the main idea of a paragraph, giving the essay structure and making arguments clearer.",
    "ref": "Unit 9, p. 114"
  },
  {
    "id": "d6_bi_u10_s1_01",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "L",
    "q": "We are late for the school assembly, ___?",
    "options": [
      "are we",
      "aren't we",
      "isn't it",
      "don't we"
    ],
    "correctIndex": 1,
    "explanation": "The statement 'We are...' is positive with 'to be', so the question tag is negative: 'aren't we?'.",
    "ref": "Unit 10, p. 125"
  },
  {
    "id": "d6_bi_u10_s1_02",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "L",
    "q": "Amir can swim across the pool, ___?",
    "options": [
      "can't he",
      "can he",
      "isn't he",
      "doesn't he"
    ],
    "correctIndex": 0,
    "explanation": "For a positive statement with 'can' and subject 'Amir', the tag uses 'can't' + 'he'.",
    "ref": "Unit 10, p. 125"
  },
  {
    "id": "d6_bi_u10_s1_03",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "L",
    "q": "You don't live near the Penang Bridge, ___?",
    "options": [
      "aren't you",
      "don't you",
      "are you",
      "do you"
    ],
    "correctIndex": 3,
    "explanation": "A negative present simple statement ('don't live') takes a positive tag with the same auxiliary: 'do you?'.",
    "ref": "Unit 10, p. 125"
  },
  {
    "id": "d6_bi_u10_s1_04",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "L",
    "q": "That museum in Kuching isn't open on Mondays, ___?",
    "options": [
      "isn't it",
      "does it",
      "is it",
      "was it"
    ],
    "correctIndex": 2,
    "explanation": "The negative statement uses 'isn't', so the question tag is positive: 'is it?'.",
    "ref": "Unit 10, p. 125"
  },
  {
    "id": "d6_bi_u10_s1_05",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "L",
    "q": "You play badminton every Friday evening, ___?",
    "options": [
      "don't you",
      "aren't you",
      "do you",
      "can't you"
    ],
    "correctIndex": 0,
    "explanation": "A positive present simple statement ('play') without 'to be' or 'can' takes 'don't you?'.",
    "ref": "Unit 10, p. 125"
  },
  {
    "id": "d6_bi_u10_s1_06",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "M",
    "q": "Mei Ling speaks three languages fluently, ___?",
    "options": [
      "isn't she",
      "don't she",
      "doesn't she",
      "does she"
    ],
    "correctIndex": 2,
    "explanation": "For a third-person singular present simple verb ('speaks'), the negative tag uses 'doesn't' + 'she'.",
    "ref": "Unit 10, p. 125"
  },
  {
    "id": "d6_bi_u10_s1_07",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "M",
    "q": "The suspects can't leave the police station yet, ___?",
    "options": [
      "can't they",
      "can they",
      "are they",
      "do they"
    ],
    "correctIndex": 1,
    "explanation": "The statement has 'can't' and plural subject 'The suspects', so the positive tag is 'can they?'.",
    "ref": "Unit 10, p. 125"
  },
  {
    "id": "d6_bi_u10_s1_08",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "M",
    "q": "Collecting old stamps is Danish's favourite hobby, ___?",
    "options": [
      "aren't they",
      "doesn't it",
      "is it",
      "isn't it"
    ],
    "correctIndex": 3,
    "explanation": "The subject 'Collecting old stamps' is singular ('it') and the verb is 'is', so the tag is 'isn't it?'.",
    "ref": "Unit 10, pp. 123, 125"
  },
  {
    "id": "d6_bi_u10_s1_09",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "H",
    "q": "Which sentence has the correct question tag?",
    "options": [
      "Your sister doesn't like spicy food, does she?",
      "Your sister doesn't like spicy food, isn't she?",
      "Your sister likes spicy food, isn't she?",
      "Your sister likes spicy food, don't she?"
    ],
    "correctIndex": 0,
    "explanation": "'Your sister doesn't like...' is a negative present simple statement with a singular subject, so it takes 'does she?'.",
    "ref": "Unit 10, p. 125"
  },
  {
    "id": "d6_bi_u10_s1_10",
    "unit": "u10",
    "skill": "u10_s1",
    "diff": "H",
    "q": "Read the dialogue: 'The museum tickets aren't expensive, ___?' 'No, they're free for students, ___?'",
    "options": [
      "is it / isn't it",
      "are they / aren't they",
      "aren't they / are they",
      "are they / don't they"
    ],
    "correctIndex": 1,
    "explanation": "Both clauses use 'they' ('tickets') with 'to be': negative 'aren't' takes 'are they?', and positive 'are' takes 'aren't they?'.",
    "ref": "Unit 10, p. 125; Review 5, p. 132"
  },
  {
    "id": "d6_bi_u10_s2_01",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "L",
    "q": "It is a strict rule: pupils ___ use mobile phones inside the museum.",
    "options": [
      "mustn't",
      "don't have to",
      "should",
      "might"
    ],
    "correctIndex": 0,
    "explanation": "'Mustn't' expresses prohibition — something that is not allowed.",
    "ref": "Unit 10, p. 126"
  },
  {
    "id": "d6_bi_u10_s2_02",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "L",
    "q": "Lunch is provided at the camp, so you ___ bring your own sandwiches.",
    "options": [
      "mustn't",
      "have to",
      "don't have to",
      "can't"
    ],
    "correctIndex": 2,
    "explanation": "'Don't have to' means something is not necessary, though you are allowed to do it if you want.",
    "ref": "Unit 10, p. 126"
  },
  {
    "id": "d6_bi_u10_s2_03",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "L",
    "q": "The sky looks dark over Ipoh. Take an umbrella because it ___ rain later.",
    "options": [
      "must",
      "might",
      "have to",
      "shouldn't"
    ],
    "correctIndex": 1,
    "explanation": "'Might' is used to talk about possibility in the future.",
    "ref": "Unit 10, p. 126"
  },
  {
    "id": "d6_bi_u10_s2_04",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "L",
    "q": "You ___ leave your expensive watch on the bench because someone could take it.",
    "options": [
      "shouldn't",
      "must",
      "should",
      "may"
    ],
    "correctIndex": 0,
    "explanation": "'Shouldn't' gives advice warning someone not to do something unwise.",
    "ref": "Unit 10, p. 126"
  },
  {
    "id": "d6_bi_u10_s2_05",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "L",
    "q": "All Year 6 pupils ___ arrive at the school gate before 7:30 a.m. for the bus to Melaka.",
    "options": [
      "might",
      "may",
      "don't have to",
      "must"
    ],
    "correctIndex": 3,
    "explanation": "'Must' expresses strong obligation when something is very important or required.",
    "ref": "Unit 10, p. 126"
  },
  {
    "id": "d6_bi_u10_s2_06",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "M",
    "q": "For Sports Day, you ___ wear your school uniform, but you ___ look neat and wear your house T-shirt.",
    "options": [
      "mustn't / shouldn't",
      "don't have to / must",
      "have to / might",
      "can't / don't have to"
    ],
    "correctIndex": 1,
    "explanation": "'Don't have to' shows the uniform is not required, while 'must' shows the house T-shirt rule is compulsory.",
    "ref": "Unit 10, p. 126"
  },
  {
    "id": "d6_bi_u10_s2_07",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "M",
    "q": "The room is very air-conditioned, so Aina ___ bring a cardigan just in case.",
    "options": [
      "mustn't",
      "can't",
      "should",
      "don't have to"
    ],
    "correctIndex": 2,
    "explanation": "'Should' is used to give helpful advice.",
    "ref": "Unit 10, p. 126"
  },
  {
    "id": "d6_bi_u10_s2_08",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "M",
    "q": "Which sentence means 'It is not necessary for Amir to pay for the ticket'?",
    "options": [
      "Amir mustn't pay for the ticket.",
      "Amir can't pay for the ticket.",
      "Amir shouldn't pay for the ticket.",
      "Amir doesn't have to pay for the ticket."
    ],
    "correctIndex": 3,
    "explanation": "'Doesn't have to' expresses no obligation (not necessary), unlike 'mustn't' or 'can't' (prohibition).",
    "ref": "Unit 10, p. 126"
  },
  {
    "id": "d6_bi_u10_s2_09",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "H",
    "q": "Choose the sentence that uses a modal verb correctly.",
    "options": [
      "Visitors mustn't touch the old paintings in the gallery.",
      "Visitors must to buy a ticket at the entrance.",
      "Visitors don't must carry large bags inside.",
      "Visitors shoulding bring a bottle of water."
    ],
    "correctIndex": 0,
    "explanation": "Modal verbs like 'mustn't' are followed directly by the base verb without 'to', '-ing', or 'don't'.",
    "ref": "Unit 10, p. 126"
  },
  {
    "id": "d6_bi_u10_s2_10",
    "unit": "u10",
    "skill": "u10_s2",
    "diff": "H",
    "q": "Cikgu Zainal says: 'You ___ explore the gallery in pairs, but you ___ behave politely at all times.'",
    "options": [
      "mustn't / may",
      "can / must",
      "shouldn't / don't have to",
      "might / can't"
    ],
    "correctIndex": 1,
    "explanation": "'Can' gives permission to explore in pairs, and 'must' states the obligation to behave politely.",
    "ref": "Unit 10, p. 126"
  },
  {
    "id": "d6_bi_u10_s3_01",
    "unit": "u10",
    "skill": "u10_s3",
    "diff": "L",
    "q": "The muddy footprint outside the window was an important ___ that helped the police catch the thief.",
    "options": [
      "hobby",
      "clue",
      "cafeteria",
      "surface"
    ],
    "correctIndex": 1,
    "explanation": "A clue is something that helps you solve a crime or mystery.",
    "ref": "Unit 10, p. 130; Glossary, p. 143"
  },
  {
    "id": "d6_bi_u10_s3_02",
    "unit": "u10",
    "skill": "u10_s3",
    "diff": "L",
    "q": "Inspector Rahim interviewed four ___ who were inside the building at the time of the robbery.",
    "options": [
      "suspects",
      "statements",
      "crimes",
      "cultures"
    ],
    "correctIndex": 0,
    "explanation": "A suspect is a person whom the police think may be guilty of a crime.",
    "ref": "Unit 10, pp. 122-123; Glossary, p. 143"
  },
  {
    "id": "d6_bi_u10_s3_03",
    "unit": "u10",
    "skill": "u10_s3",
    "diff": "L",
    "q": "Which verb can take the suffix '-ment' to form a correct noun?",
    "options": [
      "solve",
      "believe",
      "pay",
      "research"
    ],
    "correctIndex": 2,
    "explanation": "'Pay' + '-ment' forms the noun 'payment'. The other verbs do not take '-ment'.",
    "ref": "Unit 10, p. 124; Review 5, p. 133"
  },
  {
    "id": "d6_bi_u10_s3_04",
    "unit": "u10",
    "skill": "u10_s3",
    "diff": "L",
    "q": "The gold keris in the museum display is very ___, so it is kept inside a locked glass case.",
    "options": [
      "smart",
      "unfair",
      "sweet",
      "valuable"
    ],
    "correctIndex": 3,
    "explanation": "'Valuable' means worth a lot of money or very important.",
    "ref": "Unit 10, pp. 122-123; Glossary, p. 143"
  },
  {
    "id": "d6_bi_u10_s3_05",
    "unit": "u10",
    "skill": "u10_s3",
    "diff": "L",
    "q": "May I ___ your ruler for five minutes? I promise to give it back before the bell rings.",
    "options": [
      "borrow",
      "prove",
      "remove",
      "lie"
    ],
    "correctIndex": 0,
    "explanation": "'Borrow' means to receive and use something belonging to someone else and return it later.",
    "ref": "Unit 10, pp. 122-123; Glossary, p. 143"
  },
  {
    "id": "d6_bi_u10_s3_06",
    "unit": "u10",
    "skill": "u10_s3",
    "diff": "M",
    "q": "The shopkeeper made an ___ with the supplier to deliver fresh fruit every Tuesday morning.",
    "options": [
      "excitement",
      "equipment",
      "arrangement",
      "statement"
    ],
    "correctIndex": 2,
    "explanation": "'Arrangement' (from 'arrange' + '-ment') means a plan you make with someone.",
    "ref": "Unit 10, p. 124; Review 5, p. 133"
  },
  {
    "id": "d6_bi_u10_s3_07",
    "unit": "u10",
    "skill": "u10_s3",
    "diff": "M",
    "q": "Last night, someone tried to ___ the jewellery shop in Seremban by forcing open the back door.",
    "options": [
      "break into",
      "flow through",
      "concentrate on",
      "agree with"
    ],
    "correctIndex": 0,
    "explanation": "'Break into' means to enter a building by force, usually to steal something.",
    "ref": "Unit 10, p. 130; Glossary, p. 143"
  },
  {
    "id": "d6_bi_u10_s3_08",
    "unit": "u10",
    "skill": "u10_s3",
    "diff": "M",
    "q": "Mei Ling couldn't ___ that she had paid for the notebook because she had thrown away the receipt.",
    "options": [
      "behave",
      "solve",
      "lie",
      "prove"
    ],
    "correctIndex": 3,
    "explanation": "'Prove' means to show with evidence that something is true.",
    "ref": "Unit 10, p. 123; Glossary, p. 143"
  },
  {
    "id": "d6_bi_u10_s3_09",
    "unit": "u10",
    "skill": "u10_s3",
    "diff": "H",
    "q": "Which pair of verbs BOTH form valid English nouns when you add the suffix '-ment'?",
    "options": [
      "equip and excite",
      "perform and agree",
      "solve and state",
      "believe and arrange"
    ],
    "correctIndex": 0,
    "explanation": "'Equip' -> 'equipment' and 'excite' -> 'excitement' are both valid '-ment' nouns, whereas 'perform', 'solve', and 'believe' do not take '-ment'.",
    "ref": "Unit 10, p. 124; Review 5, p. 133"
  },
  {
    "id": "d6_bi_u10_s3_10",
    "unit": "u10",
    "skill": "u10_s3",
    "diff": "H",
    "q": "In the play script, Inspector Siti wrote down each witness's ___ and used the receipt to ___ the case. Which pair of words fits best?",
    "options": [
      "crime / borrow",
      "statement / solve",
      "robbery / lie",
      "suspect / remove"
    ],
    "correctIndex": 1,
    "explanation": "A 'statement' is an official account written down by a police officer, and 'solve' means to find the answer to a crime or mystery.",
    "ref": "Unit 10, p. 123; Glossary, p. 143"
  }
];

  App.Pools.d6.bi = items;
})(typeof window !== "undefined" ? window : globalThis);
