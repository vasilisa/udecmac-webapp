var quizQuestions = [

/*
  Custom-Based questions for COVID-19 study
  by VS March 2020
  Time point 1 
*/

{
  question: "When reading the statements below, please think of an average day BEFORE the COVID-19 pandemic (e.g. November 2019) and indicate your answer based on it.",

  answers: [
          {
            type: "Continue",
            content: "Continue"
          }
          ],
      qtype: "button",
      questionId: 0,
      surveytag: 'covidbsl',
      title: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question:"How often did you wash your hands when arriving at work/school/university?",

      answers: [{
         type: "covid-1",
        content: "1 - Never"},

        {type: "covid-2",
        content: "2"},

        {type: "covid-3",
        content: "3 - Sometimes"},

        {type: "covid-4",
        content: "4"},

        {type: "covid-5",
        content: "5 - Always"},
      ],
      qtype: 'quiz',
      questionId: 1,
      surveytag: 'covidbsl',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question:"How often did you wash your hands when arriving at home?",

      answers: [{
         type: "covid-1",
        content: "1 - Never"},

        {type: "covid-2",
        content: "2"},

        {type: "covid-3",
        content: "3 - Sometimes"},

        {type: "covid-4",
        content: "4"},

        {type: "covid-5",
        content: "5 - Always"},
      ],
      qtype: 'quiz',
      questionId: 2,
      surveytag: 'covidbsl',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

   {
      question:"How often did you wash your hands before preparing food?",

      answers: [{
         type: "covid-1",
        content: "1 - Never"},

        {type: "covid-2",
        content: "2"},

        {type: "covid-3",
        content: "3 - Sometimes"},

        {type: "covid-4",
        content: "4"},

        {type: "covid-5",
        content: "5 - Always"},
      ],
      qtype: 'quiz',
      questionId: 3,
      surveytag: 'covidbsl',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


 {
      question:"When washing your hands did you make sure you cleaned the entire surface of your hands?",

      answers: [{
         type: "covid-1",
        content: "1 - Never"},

        {type: "covid-2",
        content: "2"},

        {type: "covid-3",
        content: "3 - Sometimes"},

        {type: "covid-4",
        content: "4"},

        {type: "covid-5",
        content: "5 - Always"},
      ],
      qtype: 'quiz',
      questionId: 4,
      surveytag: 'covidbsl',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

{
      question:"When washing your hands how often did you wash them for at least 20 seconds?",

      answers: [{
         type: "covid-1",
        content: "1 - Never"},

        {type: "covid-2",
        content: "2"},

        {type: "covid-3",
        content: "3 - Sometimes"},

        {type: "covid-4",
        content: "4"},

        {type: "covid-5",
        content: "5 - Always"},
      ],
      qtype: 'quiz',
      questionId: 5,
      surveytag: 'covidbsl',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },
  {
        question:"Did your washing behaviour (e.g. washing your hands, showering) limit you in your daily life?",

        answers: [{
           type: "covid-1",
          content: "No"},

          {type: "covid-2",
          content: "Yes"},

        ],
        qtype: 'checkbox',
        questionId: 6,
        surveytag: 'covidbsl',
        title: '',
        constraint: [
         {min: ""},
         {max: ""}
        ]
    },

  {
      question:"How often did you notice touching or wanting to touch your face (unrelated to putting cream or make-up on)?",

      answers: [{
         type: "covid-1",
        content: "1 - Never"},

        {type: "covid-2",
        content: "2"},

        {type: "covid-3",
        content: "3 - Sometimes"},

        {type: "covid-4",
        content: "4"},

        {type: "covid-5",
        content: "5 - A lot"},
      ],
      qtype: 'quiz',
      questionId: 7,
      surveytag: 'covidbsl',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question:"Did you ever constrain yourself from touching your face?",

      answers: [{
         type: "covid-1",
        content: "1 - Never"},

        {type: "covid-2",
        content: "2"},

        {type: "covid-3",
        content: "3 - Sometimes"},

        {type: "covid-4",
        content: "4"},

        {type: "covid-5",
        content: "5 - A lot"},
      ],
      qtype: 'quiz',
      questionId: 8,
      surveytag: 'covidbsl',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question:"How often did you listen, read or watch the news?",

      answers: [{
         type: "covid-1",
        content: "1 - Never"},

        {type: "covid-2",
        content: "2"},

        {type: "covid-3",
        content: "3 - Sometimes"},

        {type: "covid-4",
        content: "4"},

        {type: "covid-5",
        content: "5 - A lot"},
      ],
      qtype: 'quiz',
      questionId: 9,
      surveytag: 'covidbsl',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

{
      question:"On average, how much time (in MINUTES) did you spend on social media (e.g. Facebook, Instagram, Twitter, Snapchat)? (You might want to use the screen time on your phone as an estimate if available)",

      answers: [{
        type: "covid",
        content: " "
      }],
      qtype: 'report',
      questionId: 10,
      surveytag: 'covidbsl',
      title: '',
      constraint: [
       {min: "-1"},
       {max: "1000000"}
      ]
  },

]
  export default quizQuestions;
