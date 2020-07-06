var quizQuestions = [

/*
  Custom-Based questions for COVID-19 study: PERSONAL IMPACT
  by VS March 2020
  AT TIME POINT 1
  adapted by AL June 2020
  AT TIME POINT 2
*/


  {
      question:"Have you had COVID-19 (coronavirus)?",


      answers: [{
         type: "covid-1",
        content: "Yes diagnosed and recovered"},

        {type: "covid-2",
        content: "Yes diagnosed and still ill"},

        {type: "covid-3",
        content: "Not formally diagnosed but suspected and recovered"},

        {type: "covid-4",
        content: "Not formally diagnosed bust suspected and still ill"},

        {type: "covid-5",
        content: "No"},
      ],
      qtype: 'quiz',
      questionId: 1,
      surveytag: 'covidpersimp',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question:"Did someone in your close circle (e.g. family, partner, close friend) have COVID-19 (coronavirus)?",


      answers: [{
         type: "covid-1",
        content: "Yes diagnosed and recovered"},

        {type: "covid-2",
        content: "Yes diagnosed and still ill"},

        {type: "covid-3",
        content: "Not formally diagnosed but suspected and recovered"},

        {type: "covid-4",
        content: "Not formally diagnosed bust suspected and still ill"},

        {type: "covid-5",
        content: "No"},
      ],
      qtype: 'quiz',
      questionId: 2,
      surveytag: 'covidpersimp',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question:"Have you experienced any of the following as a consequence of the COVID-19 (coronavirus) pandemic? (tick any that apply)",


      answers: [{
         type: "covid-1",
        content: "Lost your job/ been unable to do paid work"},

        {type: "covid-2",
        content: "Your spouse/partner lost their job or was unable to do paid work"},

        {type: "covid-3",
        content: "Unable to pay bills"},

        {type: "covid-4",
        content: "Evicted/lost accommodation"},

        {type: "covid-5",
        content: "Unable to access essential goods (e.g. food, medication)"},

        {type: "covid-6",
        content: "Somebody close to you is in hospital with COVID-19"},

        {type: "covid-7",
        content: "You lost somebody close to you to COVID-19"},

        {type: "covid-8",
        content: "None of the above"},

      ],
      qtype: 'checkbox', // multiple answers are allowed
      questionId: 3,
      surveytag: 'covidpersimp',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

{
      question:"Has your living situation changed because of COVID-19 (e.g. moved in with your partner, parents, friend)?",

      answers: [{
         type: "covid-1",
        content: "No"},

        {type: "covid-2",
        content: "Yes"},
      ],
      qtype: 'quiz',
      questionId: 4,
      surveytag: 'covidpersimp',
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
      questionId: 5,
      surveytag: 'covidpersimp',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },
  {
      question:"Are you currently volunteering or fulfilling any of the government’s identified ‘key worker’ roles? (tick any that apply)",

      answers: [{
         type: "covid-1",
        content: "Health, social care or relevant related support worker"},

        {type: "covid-2",
        content: "Teacher or childcare worker still travelling in to work"},

        {type: "covid-3",
        content: "Transport worker still travelling in to work"},

        {type: "covid-4",
        content: "Food chain worker (e.g. production, sale, delivery)"},

        {type: "covid-5",
        content: "Key public service worker (e.g. justice staff, religious staff, public service journalist or mortuary worker)"},

        {type: "covid-6",
        content: "Local or national government worker delivering essential public services"},

         {type: "covid-7",
        content: "Utility worker (e.g. energy sewerage, postal services)"},

         {type: "covid-8",
        content: "Public safety or national security worker"},

        {type: "covid-9",
        content: "Worker involved in medicines or protective equipment production or distribution"},

        {type: "covid-10",
        content: "Volunteer working outside the home"},

        {type: "covid-11",
        content: "None of the above"},

      ],
      qtype: 'checkbox', 
      questionId: 6,
      surveytag: 'covidpersimp',
      title: '',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

]

export default quizQuestions;
