(function (root, factory) {
  const out = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = out;
  } else {
    const App = (root.App = root.App || {});
    App.Data = App.Data || {};
    App.Data.mockObjective = App.Data.mockObjective || {};
    App.Data.mockObjective.t2_bi = { SETS: out.SETS };
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const SETS = [
  {
    "id": "set-1",
    "part": "1",
    "status": "verified",
    "passage": "",
    "items": [
      {
        "chapterId": "reading",
        "q": "Where should borrowers leave books today?",
        "options": [
          "At the office",
          "At the library door",
          "In their classroom"
        ],
        "correctIndex": 0,
        "explanation": "The text says: Return your library books at the office while the library floor dries.",
        "passage": "Return your library books at the office while the library floor dries."
      },
      {
        "chapterId": "reading",
        "q": "When should drummers arrive?",
        "options": [
          "4.00 pm",
          "3.45 pm",
          "4.15 pm"
        ],
        "correctIndex": 1,
        "explanation": "The text says: Band practice starts at four. Drummers should arrive fifteen minutes earlier to set up.",
        "passage": "Band practice starts at four. Drummers should arrive fifteen minutes earlier to set up."
      },
      {
        "chapterId": "reading",
        "q": "When can visitors take this bus to the museum?",
        "options": [
          "Every day",
          "On Saturday",
          "On Sunday"
        ],
        "correctIndex": 2,
        "explanation": "The text says: The blue bus stops at the museum only on Sundays.",
        "passage": "The blue bus stops at the museum only on Sundays."
      },
      {
        "chapterId": "reading",
        "q": "What should pupils bring?",
        "options": [
          "A jar",
          "A brush",
          "Paint"
        ],
        "correctIndex": 0,
        "explanation": "The text says: Please bring an empty jar. We will supply paint and brushes.",
        "passage": "Please bring an empty jar. We will supply paint and brushes."
      },
      {
        "chapterId": "reading",
        "q": "Why collect early?",
        "options": [
          "The price rises later",
          "There will be fewer people waiting",
          "The shop closes at noon"
        ],
        "correctIndex": 1,
        "explanation": "The text says: Your order is ready. Collect it before noon to avoid the afternoon queue.",
        "passage": "Your order is ready. Collect it before noon to avoid the afternoon queue."
      },
      {
        "chapterId": "reading",
        "q": "Who has the bottle now?",
        "options": [
          "The goalkeeper",
          "The writer",
          "Coach Lim"
        ],
        "correctIndex": 2,
        "explanation": "The text says: I found your bottle beside the goal. I have left it with Coach Lim.",
        "passage": "I found your bottle beside the goal. I have left it with Coach Lim."
      },
      {
        "chapterId": "reading",
        "q": "How should walkers reach the picnic area?",
        "options": [
          "Follow the yellow arrows",
          "Walk beside the pond",
          "Wait for a guide"
        ],
        "correctIndex": 0,
        "explanation": "The text says: The path beside the pond is closed. Follow the yellow arrows to the picnic area.",
        "passage": "The path beside the pond is closed. Follow the yellow arrows to the picnic area."
      },
      {
        "chapterId": "reading",
        "q": "What must an eleven-year-old show for a free ticket?",
        "options": [
          "A receipt",
          "A document showing age",
          "A school timetable"
        ],
        "correctIndex": 1,
        "explanation": "The text says: Tickets are free for children under twelve. Bring proof of age.",
        "passage": "Tickets are free for children under twelve. Bring proof of age."
      }
    ]
  },
  {
    "id": "set-2",
    "part": "2",
    "status": "verified",
    "passage": "Yesterday our class (1 go) to a farm. We (2 was) early. The farmer asked us to (3 washed) our boots. She showed (4 we) the pens. Two (5 goat) were resting. One kid was (6 drink) milk. Before lunch, I (7 carry) a bucket. We thanked the farmer for (8 teach) us.",
    "items": [
      {
        "chapterId": "error_editing",
        "q": "Correct the word in brackets at (1).",
        "inputType": "word",
        "answer": "went",
        "explanation": "Yesterday places the visit in the past, so go becomes went."
      },
      {
        "chapterId": "error_editing",
        "q": "Correct the word in brackets at (2).",
        "inputType": "word",
        "answer": "were",
        "explanation": "We takes the plural past form were."
      },
      {
        "chapterId": "error_editing",
        "q": "Correct the word in brackets at (3).",
        "inputType": "word",
        "answer": "wash",
        "explanation": "Use the base verb wash after to."
      },
      {
        "chapterId": "error_editing",
        "q": "Correct the word in brackets at (4).",
        "inputType": "word",
        "answer": "us",
        "explanation": "Showed needs the object pronoun us."
      },
      {
        "chapterId": "error_editing",
        "q": "Correct the word in brackets at (5).",
        "inputType": "word",
        "answer": "goats",
        "explanation": "Two requires the plural goats."
      },
      {
        "chapterId": "error_editing",
        "q": "Correct the word in brackets at (6).",
        "inputType": "word",
        "answer": "drinking",
        "explanation": "Was needs the -ing form drinking for an action in progress."
      },
      {
        "chapterId": "error_editing",
        "q": "Correct the word in brackets at (7).",
        "inputType": "word",
        "answer": "carried",
        "explanation": "The visit happened yesterday, so carry becomes carried."
      },
      {
        "chapterId": "error_editing",
        "q": "Correct the word in brackets at (8).",
        "inputType": "word",
        "answer": "teaching",
        "explanation": "After the preposition for, use teaching."
      }
    ]
  },
  {
    "id": "set-3",
    "part": "3",
    "status": "verified",
    "passage": "The Repair Club will hold its first workshop on Friday in the studio. Anita will lead the session. Pupils will repair umbrellas using spare wire. Each pupil should bring scissors. Book a place with Karim by Wednesday. The workshop lasts ninety minutes.",
    "items": [
      {
        "chapterId": "reading",
        "q": "Copy one word from the notice. Workshop day",
        "inputType": "word",
        "answer": "Friday",
        "explanation": "The Repair Club will hold its first workshop on Friday in the studio."
      },
      {
        "chapterId": "reading",
        "q": "Copy one word from the notice. Venue",
        "inputType": "word",
        "answer": "studio",
        "explanation": "The Repair Club will hold its first workshop on Friday in the studio."
      },
      {
        "chapterId": "reading",
        "q": "Copy one word from the notice. Instructor",
        "inputType": "word",
        "answer": "Anita",
        "explanation": "Anita will lead the session."
      },
      {
        "chapterId": "reading",
        "q": "Copy one word from the notice. Objects to repair",
        "inputType": "word",
        "answer": "umbrellas",
        "explanation": "Pupils will repair umbrellas using spare wire."
      },
      {
        "chapterId": "reading",
        "q": "Copy one word from the notice. Spare material",
        "inputType": "word",
        "answer": "wire",
        "explanation": "Pupils will repair umbrellas using spare wire."
      },
      {
        "chapterId": "reading",
        "q": "Copy one word from the notice. Tool to bring",
        "inputType": "word",
        "answer": "scissors",
        "explanation": "Each pupil should bring scissors."
      },
      {
        "chapterId": "reading",
        "q": "Copy one word from the notice. Booking contact",
        "inputType": "word",
        "answer": "Karim",
        "explanation": "Book a place with Karim by Wednesday."
      },
      {
        "chapterId": "reading",
        "q": "Copy one word from the notice. Booking deadline",
        "inputType": "word",
        "answer": "Wednesday",
        "explanation": "Book a place with Karim by Wednesday."
      }
    ]
  },
  {
    "id": "set-5",
    "part": "5",
    "status": "verified",
    "passage": "Our class wanted a quiet reading corner. [1] The librarian offered us a small shelf. [2] Once it was clean, we carried it upstairs. [3] Next we collected books. [4] We wanted borrowers to return them easily. [5] By Friday the corner was ready. [6] Their smiles showed that the work had been worthwhile.",
    "items": [
      {
        "chapterId": "reading",
        "q": "Which sentence belongs in gap 1?",
        "options": [
          "First we asked for somewhere to put the books.",
          "It was dusty, so we wiped it down.",
          "We placed it beside the classroom window.",
          "Soon the shelf held twenty donated titles.",
          "We therefore put a returns box beside the shelf.",
          "Our first visitors sat down to read.",
          "The kitchen served rice at noon.",
          "The match ended in a draw."
        ],
        "correctIndex": 0,
        "explanation": "Asking for storage explains why the librarian offers a shelf."
      },
      {
        "chapterId": "reading",
        "q": "Which sentence belongs in gap 2?",
        "options": [
          "First we asked for somewhere to put the books.",
          "It was dusty, so we wiped it down.",
          "We placed it beside the classroom window.",
          "Soon the shelf held twenty donated titles.",
          "We therefore put a returns box beside the shelf.",
          "Our first visitors sat down to read.",
          "The kitchen served rice at noon.",
          "The match ended in a draw."
        ],
        "correctIndex": 1,
        "explanation": "Removing dust explains why the shelf is clean in the next sentence."
      },
      {
        "chapterId": "reading",
        "q": "Which sentence belongs in gap 3?",
        "options": [
          "First we asked for somewhere to put the books.",
          "It was dusty, so we wiped it down.",
          "We placed it beside the classroom window.",
          "Soon the shelf held twenty donated titles.",
          "We therefore put a returns box beside the shelf.",
          "Our first visitors sat down to read.",
          "The kitchen served rice at noon.",
          "The match ended in a draw."
        ],
        "correctIndex": 2,
        "explanation": "Placing the shelf by the window follows carrying it upstairs."
      },
      {
        "chapterId": "reading",
        "q": "Which sentence belongs in gap 4?",
        "options": [
          "First we asked for somewhere to put the books.",
          "It was dusty, so we wiped it down.",
          "We placed it beside the classroom window.",
          "Soon the shelf held twenty donated titles.",
          "We therefore put a returns box beside the shelf.",
          "Our first visitors sat down to read.",
          "The kitchen served rice at noon.",
          "The match ended in a draw."
        ],
        "correctIndex": 3,
        "explanation": "Donated titles are the result of collecting books."
      },
      {
        "chapterId": "reading",
        "q": "Which sentence belongs in gap 5?",
        "options": [
          "First we asked for somewhere to put the books.",
          "It was dusty, so we wiped it down.",
          "We placed it beside the classroom window.",
          "Soon the shelf held twenty donated titles.",
          "We therefore put a returns box beside the shelf.",
          "Our first visitors sat down to read.",
          "The kitchen served rice at noon.",
          "The match ended in a draw."
        ],
        "correctIndex": 4,
        "explanation": "A returns box gives borrowers a place to leave books."
      },
      {
        "chapterId": "reading",
        "q": "Which sentence belongs in gap 6?",
        "options": [
          "First we asked for somewhere to put the books.",
          "It was dusty, so we wiped it down.",
          "We placed it beside the classroom window.",
          "Soon the shelf held twenty donated titles.",
          "We therefore put a returns box beside the shelf.",
          "Our first visitors sat down to read.",
          "The kitchen served rice at noon.",
          "The match ended in a draw."
        ],
        "correctIndex": 5,
        "explanation": "Visitors supply the antecedent of their in the final sentence."
      }
    ]
  }
];
  return { SETS };
});
