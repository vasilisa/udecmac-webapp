var quizQuestions = [

/*
  Custom-Based questions for COVID-19 study - INFOS
  by VS March 2020
  TIME POINT 1
*/


  {
  question: "Now, please think of an average day during the LAST 7 DAYS and indicate your answer based on it.",

  answers: [
          {
              type: "Continue",
              content: "Continue"
          }
          ],
      qtype: "button", 
      questionId: 0,
      surveytag: 'covidinfos',
      title: '',
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question:"How often do you consume TV, radio or newspapers and journals to stay informed about COVID-19 (coronavirus)?",


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
      questionId: 1,
      surveytag: 'covidinfos',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question:"How often do you engage in conversations with family, friends or colleagues about COVID-19 (coronavirus)?",


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
      questionId: 2,
      surveytag: 'covidinfos',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


{
      question:"How often do you use social media (e.g. Facebook, Twitter, Instagram, YouTube, WhatsApp) to gain information about COVID-19 (coronavirus)?",

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
      questionId: 3,
      surveytag: 'covidinfos',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


{
      question:"How often do you visit institutional websites (e.g. WHO, governmental websites) to gain information about COVID-19 (coronavirus)?",

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
      questionId: 4,
      surveytag: 'covidinfos',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question:"Overall, how often do you inform yourself about COVID-19 (coronavirus)?",

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
        content: "5 - Several times a day"},
      ],
      qtype: 'quiz',
      questionId: 5,
      surveytag: 'covidinfos',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


  {
      question:"Have you been intentionally avoiding information related to COVID-19 to avoid thoughts or feelings it might cause?",

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
      surveytag: 'covidinfos',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  ]

  export default quizQuestions;