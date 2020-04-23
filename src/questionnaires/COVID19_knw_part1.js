var quizQuestions = [

/*
  Custom-Based questions for COVID-19 study
  by VS March 2020
*/

{
  question: "Please answer the following questions to the best of your knowledge.",

  answers: [
          {
              type: "Continue",
              content: "Continue"
          }
          ],
      qtype: "button", 
      questionId: 0,
      surveytag: 'covidknw',
      title: '', 
      constraint: [
        {min: ""},
        {max: ""}
      ]
},

{
      question:"How would you rate your knowledge level on the novel COVID-19 (coronavirus)?",
      answers: [{
         type: "covid-1",
        content: "1 - Very poor knowledge"},

        {type: "covid-2",
        content: "2"},

        {type: "covid-3",
        content: "3"},

        {type: "covid-4",
        content: "4"},

        {type: "covid-5",
        content: "5 - Very good knowledge"},
      ],
      qtype: 'quiz',
      questionId: 1,
      surveytag: 'covidknw',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question:"How would you rate your knowledge level on how to prevent spread of the COVID-19 (coronavirus)?",

      answers: [{
         type: "covid-1",
        content: "1 - Very poor knowledge"},

        {type: "covid-2",
        content: "2"},

        {type: "covid-3",
        content: "3"},

        {type: "covid-4",
        content: "4"},

        {type: "covid-5",
        content: "5 - Very good knowledge"},
      ],
      qtype: 'quiz',
      questionId: 2,
      surveytag: 'covidknw',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question:"Which groups are at risk of severe illness related to COVID-19 (coronavirus)? (tick any that apply)",

      answers: [{
         type: "covid-1",
        content: "People aged 70 and older"},

        {type: "covid-2",
        content: "Infants"},

        {type: "covid-3",
        content: "Small children aged 1-5"},

        {type: "covid-4",
        content: "People younger than 70 with weakened immune systems"},

        {type: "covid-5",
        content: "There is no high risk group"},

        {type: "covid-6",
        content: "People who have asthma"},

        {type: "covid-7",
        content: "People who have serious chronic diabetes"},

        {type: "covid-8",
        content: "People who have serious lung disease"},

        {type: "covid-9",
        content: "Pregnant women"},

        {type: "covid-10",
        content: "None of the above"},

        {type: "covid-11",
        content: "Not sure"},

      ],
      qtype: 'checkbox', // multiple answers are allowed
      questionId: 3,
      surveytag: 'covidknw',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question:"Does everybody who gets COVID-19 (coronavirus) show symptoms?",

      answers: [{
         type: "covid-1",
        content: "Yes"},

        {type: "covid-2",
        content: "No"},

        {type: "covid-3",
        content: "Not sure"},

      ],
      qtype: 'quiz',
      questionId: 4,
      surveytag: 'covidknw',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question:"What can be symptoms of COVID-19 (coronavirus)? (tick any that apply)",

      answers: [{
         type: "covid-1",
        content: "Fever"},

        {type: "covid-2",
        content: "Cough"},

        {type: "covid-3",
        content: "Shortness of breath"},

        {type: "covid-4",
        content: "Sore throat"},

        {type: "covid-5",
        content: "Runny or stuffy nose"},

        {type: "covid-6",
        content: "Muscles or body aches"},

        {type: "covid-7",
        content: "Headaches"},

        {type: "covid-8",
        content: "Fatigue (tiredness)"},

        {type: "covid-9",
        content: "Diarrhea"},

        {type: "covid-10",
        content: "Not sure"},

      ],
      qtype: 'checkbox', // multiple answers are allowed
      questionId: 5,
      surveytag: 'covidknw',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


  {
      question:"How can you protect yourself from COVID-19 (coronavirus)? (tick any that apply)",


      answers: [{
         type: "covid-1",
        content: "Wash hands"},

        {type: "covid-2",
        content: "Disinfect hands"},

        {type: "covid-3",
        content: "Keep social distance"},

        {type: "covid-4",
        content: "Spray or fumigate my home"},

        {type: "covid-5",
        content: "Put screens on windows or doors"},

        {type: "covid-6",
        content: "Drink hot drinks"},

        {type: "covid-7",
        content: "Wear a face mask"},

        {type: "covid-8",
        content: "Wear gloves"},

        {type: "covid-9",
        content: "Install an antivirus scanner on your computer"},

        {type: "covid-10",
        content: "Not sure"},

      ],
      qtype: 'checkbox', // multiple answers are allowed
      questionId: 6,
      surveytag: 'covidknw',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question:"How long does it take from when you are infected until you have symptoms (incubation period)?",

      answers: [{
         type: "covid-1",
        content: "Up to 3 days"},

        {type: "covid-2",
        content: "Up to 7 days"},

        {type: "covid-3",
        content: "Up to 14 days"},

        {type: "covid-4",
        content: "Not sure"},

      ],
      qtype: 'quiz',
      questionId: 7,
      surveytag: 'covidknw',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

]

export default quizQuestions; 
