var quizQuestions = [

/*
  Custom-Based questions for COVID-19 study 
  by VS March 2020
*/

{
  question: "The following questions will ask about thoughts and behaviours that may occur to people in everyday life. Please indicate the answer that seems to fit you the best.", 
  answers: [
          {
              type: "Continue",
              content: "Continue"
          }
          ],
      qtype: "button", // to be maybe changed 
      questionId: 0,
      surveytag: 'ybocs', 
      title: 'Personal experience', // to be changed 
      constraint: [
        {min: ""},
        {max: ""}
      ] 
},

{   
      question:"Do you have trouble making decisions about little things that people might not think twice about (e.g. which clothes to put on in the morning; which brand of cereal to buy)?", 

      answers: [{
         type: "ybocs-1",
        content: "No"},

        {type: "ybocs-2",
        content: "I have some trouble making decisions about minor things"},

        {type: "ybocs-3",
        content: "I have significant trouble making decision that others would not think twice about"}, 

        {type: "ybocs-4",
        content: "I continually weigh pros and cons about nonessentials"}, 

        {type: "ybocs-5",
        content: "I am unable to make any decisions. It is disabling"}, 
        
      ],
      qtype: 'quiz',
      questionId: 1,
      surveytag: 'ybocs',
      title: 'Personal experience', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {   
      question:"Do you feel very responsible for the consequences of your actions? Do you blame yourself for the outcome of events not completely in your control?",

      answers: [{
         type: "ybocs-1",
        content: "No"},

        {type: "ybocs-2",
        content: "I have a slight sense of over-responsibility"},

        {type: "ybocs-3",
        content: "I experience significant sense of over-responsibility for events outside my reasonable control"}, 

        {type: "ybocs-4",
        content: "I am deeply concerned that I am responsible for events clearly outside of my control and I tend to self-blame myself about things out of my control"}, 

        {type: "ybocs-5",
        content: "I feel responsible for events that are far away. (e.g., if an earthquake occurs 3,000 miles away, I blame myself because I didn't perform a certain action)"}, 
      ],

      qtype: 'quiz',
      questionId: 2,
      surveytag: 'ybocs',
      title: 'Personal experience', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {   
      question:"After you complete an activity, do you doubt whether you performed it correctly? Do you doubt whether you did it at all? When carrying out routine activities do you find that you don't trust your senses (i.e., what you see, hear, or touch)?",
      
      answers: [{
         type: "ybocs-1",
        content: "No"},

        {type: "ybocs-2",
        content: "I sometimes question or doubt myself"},

        {type: "ybocs-3",
        content: "I sometimes doubt myself to a degree that makes it difficult to complete actions and it makes me upset. However, I usually manage to deal with it"}, 

        {type: "ybocs-4",
        content: "I doubt my perceptions or memory all the time. I cannot complete actions because I doubt myself"}, 

        {type: "ybocs-5",
        content: "I constantly doubt myself. It is as if my mind doesn’t trust what my eyes see, and I cannot complete actions"}, 
      ],

      qtype: 'quiz',
      questionId: 3,
      surveytag: 'ybocs',
      title: 'Personal experience', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

] 

export default quizQuestions;


