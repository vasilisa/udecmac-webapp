var quizQuestions = [

/*
  Custom-Based questions for COVID-19 study RISK PERCEPTION
  by VS March 2020
  AT EACH TIME POINTS 
*/

  {
  question: "We are now interested in your GENERAL perception and experiences during the COVID-19 (coronavirus) pandemic.",

  answers: [
          {
            type: "Continue",
            content: "Continue"
          }
          ],
      qtype: "button", 
      questionId: 0,
      surveytag: 'covidrisk',
      title: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question:"How likely do you think you are to catch the virus?",

      answers: [{
         type: "covid-1",
        content: "1 - Very unlikely"},

        {type: "covid-2",
        content: "2"},

        {type: "covid-3",
        content: "3 - Neutral"},

        {type: "covid-4",
        content: "4"},

        {type: "covid-5",
        content: "5 - Very likely"},
      ],
      qtype: 'quiz',
      questionId: 1,
      surveytag: 'covidrisk',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

   {
      question:"How badly do you think you will be affected economically if you catch the virus (for example through loss of work)?",

      answers: [{
         type: "covid-1",
        content: "1 - Not badly"},

        {type: "covid-2",
        content: "2"},

        {type: "covid-3",
        content: "3 - Neutral"},

        {type: "covid-4",
        content: "4"},

        {type: "covid-5",
        content: "5 - Very badly"},
      ],
      qtype: 'quiz',
      questionId: 2,
      surveytag: 'covidrisk',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question:"How likely do you think it is that loved ones will become infected?",

      answers: [{
         type: "covid-1",
        content: "1 - Very unlikely"},

        {type: "covid-2",
        content: "2"},

        {type: "covid-3",
        content: "3 - Neutral"},

        {type: "covid-4",
        content: "4"},

        {type: "covid-5",
        content: "5 - Very likely"},
      ],
      qtype: 'quiz',
      questionId: 3,
      surveytag: 'covidrisk',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question:"How likely do you think the average person in your country is to become infected?",

      answers: [{
         type: "covid-1",
        content: "1 - Very unlikely"},

        {type: "covid-2",
        content: "2"},

        {type: "covid-3",
        content: "3 - Neutral"},

        {type: "covid-4",
        content: "4"},

        {type: "covid-5",
        content: "5 - Very likely"},
      ],
      qtype: 'quiz',
      questionId: 4,
      surveytag: 'covidrisk',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question:"If you do contract the virus how likely do you think it is that you will pass it on to someone else?",

      answers: [{
         type: "covid-1",
        content: "1 - Very unlikely"},

        {type: "covid-2",
        content: "2"},

        {type: "covid-3",
        content: "3 - Neutral"},

        {type: "covid-4",
        content: "4"},

        {type: "covid-5",
        content: "5 - Very likely"},
      ],
      qtype: 'quiz',
      questionId: 5,
      surveytag: 'covidrisk',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question:"How badly do you think your health will be affected if you do catch the virus?",

      answers: [{
         type: "covid-1",
        content: "1 - Not badly"},

        {type: "covid-2",
        content: "2"},

        {type: "covid-3",
        content: "3 - Neutral"},

        {type: "covid-4",
        content: "4"},

        {type: "covid-5",
        content: "5 - Very badly"},
      ],
      qtype: 'quiz',
      questionId: 6,
      surveytag: 'covidrisk',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

   {
      question:"How badly do you think you will be affected by the global effects of the virus (for example economic recession, reduced healthcare capacity)?",

      answers: [{
         type: "covid-1",
        content: "1 - Not badly"},

        {type: "covid-2",
        content: "2"},

        {type: "covid-3",
        content: "3 - Neutral"},

        {type: "covid-4",
        content: "4"},

        {type: "covid-5",
        content: "5 - Very badly"},
      ],
      qtype: 'quiz',
      questionId: 7,
      surveytag: 'covidrisk',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


   {
      question:"How likely do you think the average person in your neighbourhood is to become infected?",

      answers: [{
         type: "covid-1",
        content: "1 - Very unlikely"},

        {type: "covid-2",
        content: "2"},

        {type: "covid-3",
        content: "3 - Neutral"},

        {type: "covid-4",
        content: "4"},

        {type: "covid-5",
        content: "5 - Very likely"},
      ],
      qtype: 'quiz',
      questionId: 8,
      surveytag: 'covidrisk',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


  {
      question:"How likely do you think the average person in Europe is to become infected?",

      answers: [{
         type: "covid-1",
        content: "1 - Very unlikely"},

        {type: "covid-2",
        content: "2"},

        {type: "covid-3",
        content: "3 - Neutral"},

        {type: "covid-4",
        content: "4"},

        {type: "covid-5",
        content: "5 - Very likely"},
      ],
      qtype: 'quiz',
      questionId: 9,
      surveytag: 'covidrisk',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

{
      question:"If you do contract the virus and pass it on to someone else, how badly do you think they would be affected?",

      answers: [{
         type: "covid-1",
        content: "1 - Not badly"},

        {type: "covid-2",
        content: "2"},

        {type: "covid-3",
        content: "3 - Neutral"},

        {type: "covid-4",
        content: "4"},

        {type: "covid-5",
        content: "5 - Very badly"},
      ],
      qtype: 'quiz',
      questionId: 10,
      surveytag: 'covidrisk',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question: "How afraid are you of catching the COVID-19 (coronavirus)?",
      answers: [
          {
              type: "covidrisk-1",
              content: "1 - Not afraid at all"
          },
          {
              type: "covidrisk-2",
              content: "2"
          },
          {
              type: "covidrisk-3",
              content: "3 - Moderately afraid"
          },
          {
              type: "covidrisk-4",
              content: "4"
          },
          {
              type: "covidrisk-5",
              content: "5 - Extremely afraid"
          },
      ],
      questionId: 11,
      surveytag: 'covidrisk',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },


{
      question: "How afraid are you to pass the virus on to someone else?",
      answers: [
        {
            type: "covidrisk-1",
            content: "1 - Not afraid at all"
        },
        {
            type: "covidrisk-2",
            content: "2"
        },
        {
            type: "covidrisk-3",
            content: "3 - Moderately afraid"
        },
        {
            type: "covidrisk-4",
            content: "4"
        },
        {
            type: "covidrisk-5",
            content: "5 - Extremely afraid"
        },
    ],
      questionId: 12,
      surveytag: 'covidrisk',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Does following the guidelines relieve your anxiety?",
      answers: [
        {
            type: "covidrisk-1",
            content: "1 - Not at all"
        },
        {
            type: "covidrisk-2",
            content: "2"
        },
        {
            type: "covidrisk-3",
            content: "3 - Partially"
        },
        {
            type: "covidrisk-4",
            content: "4"
        },
        {
            type: "covidrisk-5",
            content: "5 - Very much so"
        },
    ],
      questionId:13,
      surveytag: 'covidrisk',
      title: '',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },


]
export default quizQuestions;
