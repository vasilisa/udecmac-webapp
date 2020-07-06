var quizQuestions = [

/*
  Custom-Based questions for COVID-19 study: PROTECTIVE BEHAVIOR
  by VS March 2020
  Time point 1 and TIME POINT 2
*/


  {
  question: "Now, please think of an average day during the LAST 7 DAYS and indicate your answer based on it.",

  answers: [
          {
              type: "Continue",
              content: "Continue"
          }
          ],
      qtype: "button", // to be maybe changed
      questionId: 0,
      surveytag: 'covidprotbeh',
      title: '', // to be changed
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question:"How often do you wash your hands when arriving at work/school/university?",

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

        {type: "covid-2",
        content: "6 - Not applicable"},
      ],
      qtype: 'quiz',
      questionId: 1,
      surveytag: 'covidprotbeh',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

{
      question:"How often do you wash your hands when arriving at home?",

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
      surveytag: 'covidprotbeh',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

   {
      question:"How often do you wash your hands before preparing food?",

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
      surveytag: 'covidprotbeh',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


  {
     question:"When washing your hands do you make sure to clean the entire surface of your hands?",

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
     surveytag: 'covidprotbeh',
     title: '',
     constraint: [
      {min: ""},
      {max: ""}
     ]
 },


{
      question:"When washing your hands how often do you wash them for at least 20 seconds?",

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
      surveytag: 'covidprotbeh',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question:"How often do you notice touching or wanting to touch your face (unrelated to putting cream or make-up on)?",

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
      questionId: 6,
      surveytag: 'covidprotbeh',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question:"For this question please select ‘always’ to demonstrate your attention.",

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
      questionId: 7,
      surveytag: 'covidprotbeh',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question:"Do you ever constrain yourself from touching your face?",

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
      surveytag: 'covidprotbeh',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },
  {
        question:"Do you make sure to cough and sneeze into your elbow?",

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
        questionId: 9,
        surveytag: 'covidprotbeh',
        title: '',
        constraint: [
         {min: ""},
         {max: ""}
        ]
    },

  {
      question:"What is your current isolation status?",

      answers: [{
        type: "covid-1",
        content: "I am living my life as normal"},

        {type: "covid-2",
        content: "I only go out for essential activities (e.g. getting groceries or medicine, for one exercise a day)"},

        {type: "covid-3",
        content: "I never leave the house"},

        {type: "covid-4",
        content: "I am self-isolating from other people in my household (I am never in the same room with them)"},

      ],
      qtype: 'quiz',
      questionId: 10,
      surveytag: 'covidprotbeh',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },
   {
      question:"When leaving your house, do you stay at least 2 metres (6ft) away from other people?",

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
      questionId: 11,
      surveytag: 'covidprotbeh',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },
  {
      question:"Do you avoid events and locations where social distancing is not possible?",

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
      questionId: 12,
      surveytag: 'covidprotbeh',
      title: '',
      constraint: [
         {min: ""},
         {max: ""}
      ]
  },
  {
      question:"Do you wear a face mask when social distancing is not possible (e.g. public transport, supermarkets, restaurants)?",

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
      questionId: 13,
      surveytag: 'covidprotbeh',
      title: '',
      constraint: [
      {min: ""},
      {max: ""}
      ]
  },
  {
      question:"Do you avoid physical contact (e.g. shaking hands, hugging) with people outside of your household?",

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
      questionId: 14,
      surveytag: 'covidprotbeh',
      title: '',
      constraint: [
      {min: ""},
      {max: ""}
      ]
  },
  {
      question:"Do you avoid non-essential travel (e.g. vacation, unnecessary work trips)? ",

      answers: [{
        type: "covid-1",
        content: "1 - Not at all"},

        {type: "covid-2",
        content: "2"},

        {type: "covid-3",
        content: "3 - Partially"},

        {type: "covid-4",
        content: "4"},

        {type: "covid-5",
        content: "5 - Very much so"},
              ],
      qtype: 'quiz',
      questionId: 15,
      surveytag: 'covidprotbeh',
      title: '',
      constraint: [
      {min: ""},
      {max: ""}
      ]
  },
  {
      question:"Do you avoid public transportation where possible? ",

      answers: [{
        type: "covid-1",
        content: "1 - Not at all"},

        {type: "covid-2",
        content: "2"},

        {type: "covid-3",
        content: "3 - Partially"},

        {type: "covid-4",
        content: "4"},

        {type: "covid-5",
        content: "5 - Very much so"},
          ],
      qtype: 'quiz',
      questionId: 16,
      surveytag: 'covidprotbeh',
      title: '',
      constraint: [
      {min: ""},
      {max: ""}
      ]
  },
  {
      question:"Overall, do you follow the recommendations from authorities to prevent spread of COVID-19 (coronavirus)?",

      answers: [{
         type: "covid-1",
        content: "1 - Not at all"},

        {type: "covid-2",
        content: "2"},

        {type: "covid-3",
        content: "3 - Partially"},

        {type: "covid-4",
        content: "4"},

        {type: "covid-5",
        content: "5 - Very much so"},
      ],
      qtype: 'quiz',
      questionId: 17,
      surveytag: 'covidprotbeh',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  }

]

export default quizQuestions;
