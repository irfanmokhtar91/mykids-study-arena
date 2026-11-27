/**
 * Generated from js/data/diagnostic_d6_bi.json via scripts/verify-diagnostic-bank.mjs --sync-js.
 * Do not edit manually; update the JSON source and re-run --sync-js.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    const App = (root.App = root.App || {});
    App.DiagnosticBanks = App.DiagnosticBanks || {};
    App.DiagnosticBanks.d6 = App.DiagnosticBanks.d6 || {};
    App.DiagnosticBanks.d6.bi = factory();
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  return {
    "syllabus_nodes": [
      {
        "id": "d6_bi_vocab_01",
        "subject": "bi",
        "grade_level": "d6",
        "chapter_id": "vocab_idioms",
        "topic_name": "BI • Year 6 Themes & Vocabulary",
        "subtopic_name": "Academy Stars Themes, Suffixes (-er/-or) & Word Meanings",
        "prerequisite_node_id": null,
        "expected_time_ms": 30000,
        "bloom_level": "Remember"
      },
      {
        "id": "d6_bi_pos_01",
        "subject": "bi",
        "grade_level": "d6",
        "chapter_id": "parts_of_speech",
        "topic_name": "BI • Parts of Speech",
        "subtopic_name": "Indefinite Pronouns, -ed/-ing Adjectives, Adverbs & Conjunctions",
        "prerequisite_node_id": "d6_bi_vocab_01",
        "expected_time_ms": 35000,
        "bloom_level": "Understand"
      },
      {
        "id": "d6_bi_tense_01",
        "subject": "bi",
        "grade_level": "d6",
        "chapter_id": "tenses",
        "topic_name": "BI • Tenses & Past Habits",
        "subtopic_name": "Past Continuous with Past Simple (when/while) & Used To",
        "prerequisite_node_id": "d6_bi_pos_01",
        "expected_time_ms": 35000,
        "bloom_level": "Apply"
      },
      {
        "id": "d6_bi_tense_02",
        "subject": "bi",
        "grade_level": "d6",
        "chapter_id": "tenses",
        "topic_name": "BI • Present Perfect & Future Forms",
        "subtopic_name": "Present Perfect (ever/never/for/since/already/yet) & Future (will/going to)",
        "prerequisite_node_id": "d6_bi_tense_01",
        "expected_time_ms": 40000,
        "bloom_level": "Apply"
      },
      {
        "id": "d6_bi_cond_01",
        "subject": "bi",
        "grade_level": "d6",
        "chapter_id": "conditionals_passive",
        "topic_name": "BI • Conditionals, Passive Voice & Modals",
        "subtopic_name": "First Conditional, Present/Past Passive & Modals of Deduction",
        "prerequisite_node_id": "d6_bi_tense_02",
        "expected_time_ms": 40000,
        "bloom_level": "Apply"
      },
      {
        "id": "d6_bi_rep_01",
        "subject": "bi",
        "grade_level": "d6",
        "chapter_id": "reported_tags_comp",
        "topic_name": "BI • Reported Speech, Question Tags & Comparisons",
        "subtopic_name": "Question Tags, Comparisons (as...as, too, not enough) & Reported Speech",
        "prerequisite_node_id": "d6_bi_tense_02",
        "expected_time_ms": 40000,
        "bloom_level": "Analyze"
      },
      {
        "id": "d6_bi_punc_01",
        "subject": "bi",
        "grade_level": "d6",
        "chapter_id": "punctuation_error",
        "topic_name": "BI • Punctuation & Error Correction",
        "subtopic_name": "Direct Speech Punctuation, Apostrophes & Common Error Spotting",
        "prerequisite_node_id": "d6_bi_pos_01",
        "expected_time_ms": 35000,
        "bloom_level": "Apply"
      },
      {
        "id": "d6_bi_read_01",
        "subject": "bi",
        "grade_level": "d6",
        "chapter_id": "reading_comp",
        "topic_name": "BI • Reading & Functional Language",
        "subtopic_name": "Notices, Messages & Short Narrative Comprehension (Inference & Purpose)",
        "prerequisite_node_id": "d6_bi_cond_01",
        "expected_time_ms": 45000,
        "bloom_level": "Analyze"
      }
    ],
    "questions": [
      {
        "id": "d6bi_vocab_01_q1",
        "syllabus_node_id": "d6_bi_vocab_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Before boarding the small ferry to Pulau Pangkor, the boatman told every passenger to put on a ________ so they would float safely if they fell into the sea.",
        "options_json": {
          "A": "life jacket",
          "B": "fire engine",
          "C": "sleeping bag",
          "D": "smoke alarm"
        },
        "correct_option": "A",
        "explanation_text": "A 'life jacket' is worn on boats to keep a person floating safely in water. Option B ('fire engine') is an emergency vehicle for putting out fires, option C ('sleeping bag') is camping gear, and option D ('smoke alarm') is a safety device mounted indoors to warn of fire."
      },
      {
        "id": "d6bi_vocab_01_q2",
        "syllabus_node_id": "d6_bi_vocab_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Thomas Edison was a famous ________ who created the practical electric light bulb.",
        "options_json": {
          "A": "inventer",
          "B": "invention",
          "C": "inventor",
          "D": "inventing"
        },
        "correct_option": "C",
        "explanation_text": "To form a person noun from the verb 'invent', we add the suffix '-or' to make 'inventor'. Pupils often misspell it with '-er' (option A), choose the abstract noun 'invention' for the object created (option B), or use the '-ing' form 'inventing' instead of a person noun (option D)."
      },
      {
        "id": "d6bi_vocab_01_q3",
        "syllabus_node_id": "d6_bi_vocab_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Danish always tries to ________ his homework neatly before dinner so that he can read a storybook later.",
        "options_json": {
          "A": "make",
          "B": "do",
          "C": "create",
          "D": "build"
        },
        "correct_option": "B",
        "explanation_text": "We use the collocation 'do homework' because 'do' pairs with routine tasks, chores, and schoolwork. A common mistake is using 'make' (option A), which is used when producing or creating a new object (like 'make a cake' or 'make a poster'); options C and D also refer to creating physical things."
      },
      {
        "id": "d6bi_vocab_01_q4",
        "syllabus_node_id": "d6_bi_vocab_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "It is ________ to interrupt someone while they are speaking during a class presentation.",
        "options_json": {
          "A": "unpolite",
          "B": "dispolite",
          "C": "inpolite",
          "D": "impolite"
        },
        "correct_option": "D",
        "explanation_text": "Adjectives starting with the letter 'p' or 'm' usually take the negative prefix 'im-' to form their opposite, so 'polite' becomes 'impolite'. Options A ('unpolite'), B ('dispolite'), and C ('inpolite') are common prefix errors that are not valid English words."
      },
      {
        "id": "d6bi_vocab_01_q5",
        "syllabus_node_id": "d6_bi_vocab_01",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "After studying all the clues carefully, the detective made an important ________ about who had taken the missing trophy.",
        "options_json": {
          "A": "decision",
          "B": "decidetion",
          "C": "decidement",
          "D": "deciding"
        },
        "correct_option": "A",
        "explanation_text": "Verbs ending in '-de' such as 'decide' drop '-de' and take the suffix '-sion' to form the noun 'decision' ('make a decision'). Pupils frequently overgeneralise '-tion' (option B) or '-ment' (option C) to produce non-words, while option D ('deciding') does not fit as a countable noun after 'an important'."
      },
      {
        "id": "d6bi_pos_01_q1",
        "syllabus_node_id": "d6_bi_pos_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "The loud thunderstorm woke little Amir up, and he felt very ________ until his father switched on the lamp.",
        "options_json": {
          "A": "frightening",
          "B": "frightened",
          "C": "frighten",
          "D": "frightens"
        },
        "correct_option": "B",
        "explanation_text": "Adjectives ending in '-ed' (like 'frightened') describe how a person feels, whereas adjectives ending in '-ing' (option A, 'frightening') describe the thing or event that causes the feeling (the thunderstorm). Options C and D are verb forms rather than adjectives needed after 'felt very'."
      },
      {
        "id": "d6bi_pos_01_q2",
        "syllabus_node_id": "d6_bi_pos_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Has ________ in Year 6 found a blue pencil case near the library stairs?",
        "options_json": {
          "A": "anything",
          "B": "anywhere",
          "C": "nothing",
          "D": "anyone"
        },
        "correct_option": "D",
        "explanation_text": "We use 'anyone' in general questions when referring to a person. Options A ('anything') and C ('nothing') refer to things rather than people, while option B ('anywhere') is an adverb of place that cannot be the subject of the verb 'found'."
      },
      {
        "id": "d6bi_pos_01_q3",
        "syllabus_node_id": "d6_bi_pos_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "The science pupils poured the warm water ________ into the glass beaker so that nothing would spill.",
        "options_json": {
          "A": "carefully",
          "B": "careful",
          "C": "careless",
          "D": "care"
        },
        "correct_option": "A",
        "explanation_text": "An adverb of manner ('carefully') is required to describe how the pupils performed the action 'poured'. Options B ('careful') and C ('careless') are adjectives (and 'careless' also has the opposite meaning), while option D ('care') is a noun or verb."
      },
      {
        "id": "d6bi_pos_01_q4",
        "syllabus_node_id": "d6_bi_pos_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "________ the sky looked dark and cloudy, the scout troop still managed to finish pitching their tents before the rain began.",
        "options_json": {
          "A": "Because",
          "B": "So",
          "C": "Although",
          "D": "Unless"
        },
        "correct_option": "C",
        "explanation_text": "'Although' introduces a contrasting idea between the threatening weather and the troop's success in finishing before the rain. Option A ('Because') incorrectly shows cause and effect, option B ('So') introduces a result and cannot open this subordinate clause, and option D ('Unless') expresses a negative condition."
      },
      {
        "id": "d6bi_pos_01_q5",
        "syllabus_node_id": "d6_bi_pos_01",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "When Kavita opened the old wooden box in her grandfather's storeroom, she did not find ________ inside it.",
        "options_json": {
          "A": "nothing",
          "B": "anything",
          "C": "something",
          "D": "anywhere"
        },
        "correct_option": "B",
        "explanation_text": "In a negative sentence with 'did not', we use 'anything' for things ('did not find anything'). Using 'nothing' (option A) creates an incorrect double negative, 'something' (option C) is used in affirmative sentences, and 'anywhere' (option D) refers to a place instead of an object."
      },
      {
        "id": "d6bi_tense_01_q1",
        "syllabus_node_id": "d6_bi_tense_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Aiman and his sister ________ a wildlife documentary on television when the lights suddenly went out.",
        "options_json": {
          "A": "was watching",
          "B": "are watching",
          "C": "were watching",
          "D": "watch"
        },
        "correct_option": "C",
        "explanation_text": "We use the Past Continuous ('were watching') for the longer background action interrupted by a Past Simple event ('went out'), and the plural subject 'Aiman and his sister' takes 'were'. Option A uses singular 'was', while options B and D use present tenses that clash with 'went out'."
      },
      {
        "id": "d6bi_tense_01_q2",
        "syllabus_node_id": "d6_bi_tense_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Fifty years ago, people in this village ________ oil lamps at night because there was no electricity.",
        "options_json": {
          "A": "used to light",
          "B": "used to lit",
          "C": "used to lighting",
          "D": "use to light"
        },
        "correct_option": "A",
        "explanation_text": "To talk about past habits or routines that no longer happen, we use 'used to' followed by the base form of the verb ('used to light'). Common mistakes include putting the main verb in the past tense (option B) or '-ing' form (option C), or dropping the '-d' in an affirmative sentence (option D)."
      },
      {
        "id": "d6bi_tense_01_q3",
        "syllabus_node_id": "d6_bi_tense_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "________ the firefighters were spraying water onto the burning shed, the paramedics checked the neighbours for smoke inhalation.",
        "options_json": {
          "A": "During",
          "B": "Until",
          "C": "Because",
          "D": "While"
        },
        "correct_option": "D",
        "explanation_text": "The conjunction 'While' is followed by a subject and a Past Continuous verb ('the firefighters were spraying') to show two past actions happening at the same time. Option A ('During') is a preposition that needs a noun phrase rather than a full clause, and options B and C do not match the time relationship."
      },
      {
        "id": "d6bi_tense_01_q4",
        "syllabus_node_id": "d6_bi_tense_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "My grandmother ________ a mobile phone when she was a schoolgirl, so she wrote letters to her friends instead.",
        "options_json": {
          "A": "didn't used to own",
          "B": "didn't use to own",
          "C": "doesn't use to own",
          "D": "didn't use to owned"
        },
        "correct_option": "B",
        "explanation_text": "In negative sentences with 'didn't', we drop the '-d' from 'used' and follow 'use to' with the base verb: 'didn't use to own'. Option A wrongly keeps '-d' after 'didn't', option C uses the present auxiliary 'doesn't' for a past time, and option D wrongly adds '-ed' to the main verb 'own'."
      },
      {
        "id": "d6bi_tense_01_q5",
        "syllabus_node_id": "d6_bi_tense_01",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Choose the sentence that uses the Past Continuous and Past Simple tenses correctly.",
        "options_json": {
          "A": "While Nurul walked to school, she was finding a lost kitten under a bench.",
          "B": "Nurul was walking to school while she found a lost kitten under a bench.",
          "C": "While Nurul was walking to school, she found a lost kitten under a bench.",
          "D": "Nurul were walking to school when she finds a lost kitten under a bench."
        },
        "correct_option": "C",
        "explanation_text": "'While' introduces the ongoing background action in Past Continuous ('was walking'), and the shorter interrupting event uses Past Simple ('found'). Option A swaps the two tenses, option B wrongly puts 'while' before the short Past Simple event instead of 'when', and option D has subject-verb ('Nurul were') and tense ('finds') errors."
      },
      {
        "id": "d6bi_tense_02_q1",
        "syllabus_node_id": "d6_bi_tense_02",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Have you ever ________ a wild hornbill in the rainforest of Sarawak?",
        "options_json": {
          "A": "see",
          "B": "saw",
          "C": "seeing",
          "D": "seen"
        },
        "correct_option": "D",
        "explanation_text": "Present Perfect questions use 'Have/Has + subject + ever + past participle'. The past participle of the irregular verb 'see' is 'seen'. A frequent mistake is choosing the Past Simple form 'saw' (option B), while 'see' (option A) and 'seeing' (option C) cannot follow 'Have ... ever'."
      },
      {
        "id": "d6bi_tense_02_q2",
        "syllabus_node_id": "d6_bi_tense_02",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Encik Razak has worked as a marine biologist at the aquarium ________ 2018.",
        "options_json": {
          "A": "for",
          "B": "since",
          "C": "during",
          "D": "from"
        },
        "correct_option": "B",
        "explanation_text": "In the Present Perfect tense, 'since' is used before a specific starting point in time (such as a year like '2018'). Pupils often confuse it with 'for' (option A), which is used before a length of time (e.g., 'for five years'); options C ('during') and D ('from') do not show ongoing duration up to now."
      },
      {
        "id": "d6bi_tense_02_q3",
        "syllabus_node_id": "d6_bi_tense_02",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "We cannot start the rehearsal now because the drummer hasn't arrived at the school hall ________.",
        "options_json": {
          "A": "already",
          "B": "never",
          "C": "yet",
          "D": "ever"
        },
        "correct_option": "C",
        "explanation_text": "'Yet' is placed at the end of negative Present Perfect sentences and questions to show that an expected action has not happened up to now. Option A ('already') is used in affirmative sentences, while options B ('never') and D ('ever') go before the past participle and do not fit after 'hasn't'."
      },
      {
        "id": "d6bi_tense_02_q4",
        "syllabus_node_id": "d6_bi_tense_02",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Look at those thick black clouds gathering above the football field! It ________ rain very soon.",
        "options_json": {
          "A": "is going to",
          "B": "going to",
          "C": "is going",
          "D": "will to"
        },
        "correct_option": "A",
        "explanation_text": "We use 'am/is/are + going to + base verb' to make a future prediction based on clear present evidence (the dark clouds). Option B omits the required verb 'is', option C leaves out 'to' before 'rain', and option D makes the common mistake of adding 'to' after the modal verb 'will'."
      },
      {
        "id": "d6bi_tense_02_q5",
        "syllabus_node_id": "d6_bi_tense_02",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Which of the following sentences is grammatically correct?",
        "options_json": {
          "A": "Hana hasn't never flown in a hot-air balloon before.",
          "B": "How long are you living in Ipoh since five years?",
          "C": "The pupils have yet finished painting the mural for Teacher's Day.",
          "D": "Farid has never swum in the sea, although he has lived near the coast for six years."
        },
        "correct_option": "D",
        "explanation_text": "Option D correctly pairs 'has never' with the irregular past participle 'swum' (avoiding a double negative) and uses 'for' before the duration 'six years'. Option A has a double negative ('hasn't never'), option B wrongly uses Present Continuous and 'since' with a duration, and option C misuses 'yet' in an affirmative sentence."
      },
      {
        "id": "d6bi_cond_01_q1",
        "syllabus_node_id": "d6_bi_cond_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "If Wei Jian ________ hard for his music exam, he will play the piano piece smoothly on stage.",
        "options_json": {
          "A": "practises",
          "B": "will practise",
          "C": "practised",
          "D": "practising"
        },
        "correct_option": "A",
        "explanation_text": "In the First Conditional ('If + Present Simple, will + base verb'), the if-clause takes the Present Simple tense, so singular 'Wei Jian' requires 'practises'. A very common error is putting 'will' inside the if-clause (option B); options C (Past Simple) and D ('-ing' without auxiliary) do not fit this structure."
      },
      {
        "id": "d6bi_cond_01_q2",
        "syllabus_node_id": "d6_bi_cond_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "In many factories, recycled plastic bottles ________ into soft fibres to make school bags and jackets.",
        "options_json": {
          "A": "is turned",
          "B": "are turning",
          "C": "turned",
          "D": "are turned"
        },
        "correct_option": "D",
        "explanation_text": "Because the plural subject 'recycled plastic bottles' receives the action in a general process, we use the Present Simple Passive: 'are + past participle' ('are turned'). Option A uses singular 'is' with a plural subject, while options B ('are turning') and C ('turned') are active forms."
      },
      {
        "id": "d6bi_cond_01_q3",
        "syllabus_node_id": "d6_bi_cond_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "All the lights in Uncle Sam's house are off and his car is gone. He ________ be at home right now.",
        "options_json": {
          "A": "must",
          "B": "can't",
          "C": "should",
          "D": "doesn't have to"
        },
        "correct_option": "B",
        "explanation_text": "When strong evidence makes us almost certain something is impossible, we use the modal of deduction 'can't' ('He can't be at home'). Option A ('must') expresses certainty that he IS at home, contradicting the clues; option C gives advice, and option D expresses a lack of obligation."
      },
      {
        "id": "d6bi_cond_01_q4",
        "syllabus_node_id": "d6_bi_cond_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "The historic stone bridge in the town centre ________ in 1924 and is still used by pedestrians today.",
        "options_json": {
          "A": "built",
          "B": "is built",
          "C": "was built",
          "D": "were built"
        },
        "correct_option": "C",
        "explanation_text": "The singular subject 'The historic stone bridge' received the action at a finished past time ('in 1924'), so we need the Past Simple Passive: 'was built'. Option A is active voice (a bridge cannot build itself), option B uses Present Simple Passive despite '1924', and option D uses plural 'were'."
      },
      {
        "id": "d6bi_cond_01_q5",
        "syllabus_node_id": "d6_bi_cond_01",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Read the sign at a community museum: \"Admission is free on Sundays. Visitors are not allowed to touch the antique pottery.\" Which sentence matches this sign accurately?",
        "options_json": {
          "A": "You don't have to pay on Sundays, but you mustn't touch the antique pottery.",
          "B": "You mustn't pay on Sundays, and you don't have to touch the antique pottery.",
          "C": "You don't have to touch the antique pottery, so you must to pay on Sundays.",
          "D": "You shouldn't to pay on Sundays, and you can touch the antique pottery."
        },
        "correct_option": "A",
        "explanation_text": "'Don't have to' means something is not necessary (free admission), while 'mustn't' means something is prohibited (not allowed to touch). Option B reverses the two meanings—a very common Year 6 confusion—while options C and D contain both meaning errors and the modal error of adding 'to' ('must to', 'shouldn't to')."
      },
      {
        "id": "d6bi_rep_01_q1",
        "syllabus_node_id": "d6_bi_rep_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Priya is the captain of the school netball team, ________?",
        "options_json": {
          "A": "is she",
          "B": "isn't she",
          "C": "isn't Priya",
          "D": "doesn't she"
        },
        "correct_option": "B",
        "explanation_text": "A positive statement using 'is' takes a negative question tag with 'isn't', and the noun 'Priya' must be replaced by the pronoun 'she' ('isn't she?'). Option A fails to reverse the polarity, option C repeats the name instead of using a pronoun, and option D uses the wrong auxiliary 'doesn't'."
      },
      {
        "id": "d6bi_rep_01_q2",
        "syllabus_node_id": "d6_bi_rep_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "The new electric train is just ________ the express bus, and it produces much less pollution.",
        "options_json": {
          "A": "as fast as",
          "B": "as faster as",
          "C": "as fast than",
          "D": "more fast as"
        },
        "correct_option": "A",
        "explanation_text": "To show that two things are equal, we use '(just) as + base adjective + as' ('as fast as'). Learners often mistakenly use a comparative form inside 'as ... as' (options B and D) or replace the second 'as' with 'than' (option C)."
      },
      {
        "id": "d6bi_rep_01_q3",
        "syllabus_node_id": "d6_bi_rep_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "This wooden bridge is ________ to hold a heavy lorry, so drivers must use the main highway instead.",
        "options_json": {
          "A": "not enough strong",
          "B": "too strong",
          "C": "strong enough",
          "D": "not strong enough"
        },
        "correct_option": "D",
        "explanation_text": "To express insufficiency, 'enough' always comes AFTER the adjective: 'not + adjective + enough' ('not strong enough'). Option A places 'enough' before the adjective, while options B ('too strong') and C ('strong enough') give the opposite meaning and contradict the second clause."
      },
      {
        "id": "d6bi_rep_01_q4",
        "syllabus_node_id": "d6_bi_rep_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Your brothers play badminton at the community hall every Saturday, ________?",
        "options_json": {
          "A": "aren't they",
          "B": "do they",
          "C": "don't they",
          "D": "doesn't he"
        },
        "correct_option": "C",
        "explanation_text": "Because the main verb 'play' is a Present Simple action verb with a plural subject ('Your brothers'), the positive statement requires the negative tag 'don't they?'. Option A mistakenly uses 'to be' ('aren't'), option B fails to make the tag negative, and option D uses a singular auxiliary and pronoun."
      },
      {
        "id": "d6bi_rep_01_q5",
        "syllabus_node_id": "d6_bi_rep_01",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Siti told her teacher, \"I am designing a poster for my recycling project.\" How should this sentence be written in reported speech?",
        "options_json": {
          "A": "Siti told her teacher that she is designing a poster for her recycling project.",
          "B": "Siti told her teacher that she was designing a poster for her recycling project.",
          "C": "Siti told her teacher that I was designing a poster for my recycling project.",
          "D": "Siti told her teacher that she were designing a poster for her recycling project."
        },
        "correct_option": "B",
        "explanation_text": "When reporting a statement after past 'told', Present Continuous ('am designing') shifts back to Past Continuous ('was designing'), and pronouns shift from first person ('I', 'my') to third person ('she', 'her'). Option A forgets the tense backshift, option C forgets to change the pronouns, and option D uses plural 'were' with singular 'she'."
      },
      {
        "id": "d6bi_punc_01_q1",
        "syllabus_node_id": "d6_bi_punc_01",
        "difficulty_1_to_5": 1,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Choose the sentence that uses apostrophes correctly.",
        "options_json": {
          "A": "The puppy wagged it's tail when it heard Hakim's voice.",
          "B": "The puppy wagged its' tail when it heard Hakims voice.",
          "C": "The puppy wagged its tail when it heard Hakim's voice.",
          "D": "The puppy wagged its tail when it heard Hakims' voice."
        },
        "correct_option": "C",
        "explanation_text": "The possessive determiner 'its' never takes an apostrophe (unlike 'it's', which means 'it is'), while singular possession for one person named Hakim requires an apostrophe before the 's' ('Hakim's'). Option A confuses 'it's' with 'its', option B uses the non-word 'its'' and omits the apostrophe in 'Hakims', and option D places the apostrophe after the 's'."
      },
      {
        "id": "d6bi_punc_01_q2",
        "syllabus_node_id": "d6_bi_punc_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Choose the sentence with the correct direct speech punctuation.",
        "options_json": {
          "A": "\"Hold on tightly to the handrail\"! shouted the boat captain.",
          "B": "\"Hold on tightly to the handrail!\" shouted the boat captain.",
          "C": "Hold on tightly to the handrail! \"shouted the boat captain.\"",
          "D": "\"Hold on tightly to the handrail!\" Shouted the boat captain."
        },
        "correct_option": "B",
        "explanation_text": "In direct speech, the exclamation mark belongs inside the closing quotation marks, and the reporting verb 'shouted' starts with a lowercase letter because it continues the same sentence. Option A places the exclamation mark outside the quotes, option C quotes the reporting clause instead of the spoken words, and option D wrongly capitalises 'Shouted'."
      },
      {
        "id": "d6bi_punc_01_q3",
        "syllabus_node_id": "d6_bi_punc_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Which sentence has NO grammatical error?",
        "options_json": {
          "A": "What time does the evening train leave for Melaka?",
          "B": "What time does the evening train leaves for Melaka?",
          "C": "What time do the evening train leave for Melaka?",
          "D": "What time is the evening train leaves for Melaka?"
        },
        "correct_option": "A",
        "explanation_text": "In Present Simple timetable questions with 'does', the main verb must return to its base form ('leave'), giving 'What time does the evening train leave?'. Option B mistakenly adds '-s' to 'leave' after 'does', option C uses plural 'do' for the singular subject 'train', and option D mixes 'is' with 'leaves'."
      },
      {
        "id": "d6bi_punc_01_q4",
        "syllabus_node_id": "d6_bi_punc_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Choose the sentence with the correct punctuation for direct speech.",
        "options_json": {
          "A": "Miss Linda asked, \"have you checked your spelling carefully?\"",
          "B": "Miss Linda asked \"Have you checked your spelling carefully\"?",
          "C": "Miss Linda asked, \"Have you checked your spelling carefully\".",
          "D": "Miss Linda asked, \"Have you checked your spelling carefully?\""
        },
        "correct_option": "D",
        "explanation_text": "When the reporting clause comes first, place a comma after 'asked', start the spoken sentence with a capital letter ('Have'), and put the question mark inside the closing quotation marks. Option A misses the capital 'H', option B omits the comma and puts the question mark outside the quotes, and option C uses a full stop outside the quotes for a question."
      },
      {
        "id": "d6bi_punc_01_q5",
        "syllabus_node_id": "d6_bi_punc_01",
        "difficulty_1_to_5": 4,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Read the sentence below carefully: \"My uncle's pocket compass is made of brass and it is used for find directions during jungle treks.\" Which phrase in the sentence contains a grammatical error?",
        "options_json": {
          "A": "My uncle's pocket compass",
          "B": "is made of brass",
          "C": "used for find directions",
          "D": "during jungle treks"
        },
        "correct_option": "C",
        "explanation_text": "The structure 'used for' must be followed by a verb in the '-ing' form, so 'used for find directions' is wrong and should be 'used for finding directions'. Options A (singular possessive 'uncle's'), B ('is made of' + material), and D ('during' + noun phrase) are all grammatically correct."
      },
      {
        "id": "d6bi_read_01_q1",
        "syllabus_node_id": "d6_bi_read_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Read the notice below and answer the question.\n\nNOTICE: SCHOOL RECYCLING DRIVE\nDate: 15/May/2027 (Saturday)\nTime: 8:00 a.m. - 12:00 p.m.\nVenue: School Car Park\nPlease bring clean plastic bottles, old newspapers, and cardboard boxes. Glass items cannot be accepted for safety reasons. Every pupil who contributes will receive a reusable cloth bag.\n\nWhat must pupils avoid bringing to the recycling drive?",
        "options_json": {
          "A": "Old newspapers",
          "B": "Cardboard boxes",
          "C": "Clean plastic bottles",
          "D": "Glass items"
        },
        "correct_option": "D",
        "explanation_text": "The notice explicitly states that 'Glass items cannot be accepted for safety reasons', so pupils must avoid bringing them. Options A, B, and C are all specifically listed as items pupils are encouraged to bring."
      },
      {
        "id": "d6bi_read_01_q2",
        "syllabus_node_id": "d6_bi_read_01",
        "difficulty_1_to_5": 2,
        "diff": "L",
        "exam_part": "A",
        "prompt_text": "Read the message below and answer the question.\n\n\"Hi Daniel, our choir practice has been moved from the music room to the school hall because the piano tuner is working in the music room today. Please bring your lyric sheet by 3:15 p.m. - Farah\"\n\nWhy did Farah send this message to Daniel?",
        "options_json": {
          "A": "To cancel choir practice for the afternoon",
          "B": "To ask Daniel to repair the school piano",
          "C": "To inform Daniel about a change of venue for choir practice",
          "D": "To borrow Daniel's lyric sheet before school starts"
        },
        "correct_option": "C",
        "explanation_text": "Farah's main purpose is to tell Daniel that choir practice has moved from the music room to the school hall. Practice is still happening (ruling out option A), a piano tuner is fixing the piano rather than Daniel (option B), and Farah only reminds Daniel to bring his own lyric sheet (option D)."
      },
      {
        "id": "d6bi_read_01_q3",
        "syllabus_node_id": "d6_bi_read_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Read the diary entry below and answer the question.\n\nDiary Entry - 22/Jun/2027\nWhat a morning! I dashed into the kitchen at 7:20 a.m. and realised I had left my science workbook on the study desk upstairs. By the time I grabbed it and ran to the front gate, the yellow school bus was already turning the corner. CRASH! My lunchbox flew out of my half-zipped bag onto the driveway. Luckily, Dad had not left for work yet and drove me to school just before the bell rang.\n\nWhat can we infer about the writer that morning?",
        "options_json": {
          "A": "The writer woke up early and waited calmly at the gate.",
          "B": "The writer was in a rush and missed the school bus.",
          "C": "The writer forgot to bring any food from home.",
          "D": "The writer arrived at school after the bell had rung."
        },
        "correct_option": "B",
        "explanation_text": "Clues such as 'dashed', 'ran to the front gate', 'half-zipped bag', and seeing the bus 'already turning the corner' show that the writer was hurrying and missed the bus. Option A contradicts the frantic actions, option C is false because a lunchbox fell out of the bag, and option D contradicts 'just before the bell rang'."
      },
      {
        "id": "d6bi_read_01_q4",
        "syllabus_node_id": "d6_bi_read_01",
        "difficulty_1_to_5": 3,
        "diff": "M",
        "exam_part": "A",
        "prompt_text": "Read the adventure blog excerpt below and answer the question.\n\n\"Yesterday, our scout group hiked four kilometres up Bukit Broga before sunrise. We carried torches and waterproof jackets in our rucksacks. Reaching the grassy hilltop was the most unforgettable experience of my life! From the top, we saw mist covering the palm trees below.\"\n\nWhich statement from the blog excerpt is an OPINION rather than a fact?",
        "options_json": {
          "A": "Reaching the grassy hilltop was the most unforgettable experience of the writer's life.",
          "B": "The scout group hiked four kilometres up Bukit Broga before sunrise.",
          "C": "The scouts carried torches and waterproof jackets in their rucksacks.",
          "D": "The group saw mist covering the palm trees below the hilltop."
        },
        "correct_option": "A",
        "explanation_text": "Calling the hike 'the most unforgettable experience of my life' expresses a personal feeling and judgement, which is an opinion that cannot be proved true for everyone. Options B, C, and D describe observable, verifiable events and items from the trip, so they are facts."
      },
      {
        "id": "d6bi_read_01_q5",
        "syllabus_node_id": "d6_bi_read_01",
        "difficulty_1_to_5": 5,
        "diff": "H",
        "exam_part": "A",
        "prompt_text": "Read the short newspaper report below and answer the question.\n\nHEADLINE: YOUNG CYCLIST HELPS LOST TODDLER\nSUBHEADING: Quick thinking at Taman Tasik prevents a frightening afternoon.\n\nYesterday afternoon, twelve-year-old Hana Lim was cycling along the lake path when she noticed a three-year-old boy crying alone near the jetty. Instead of riding past, Hana stopped, spoke gently to calm him down, and guided him to the park ranger's booth. \"I was worried he might wander too close to the water,\" Hana told reporters. Within ten minutes, the ranger reunited the boy with his relieved parents.\n\nWhy did the reporter include Hana's direct quote in the article?",
        "options_json": {
          "A": "To prove that cycling is banned near the park jetty",
          "B": "To show that the park ranger arrived too late to help",
          "C": "To explain how the toddler had wandered away from home",
          "D": "To show Hana's feelings and explain why she acted quickly"
        },
        "correct_option": "D",
        "explanation_text": "Reporters use direct quotes from witnesses or helpers to show their personal feelings ('I was worried') and explain the reason behind their actions (keeping the boy safe from the water). Options A, B, and C are unsupported or contradicted by the report, since the ranger reunited the family within ten minutes."
      }
    ]
  };
});
