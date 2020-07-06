var quizQuestions = [

/*
  Custom-Based questions for COVID-19 study
  by VS March 2020
*/

{ 
    question: "Thank you for participating in our research. If you have comments or suggestions relating to this study, please feel free to include them below.",

    answers: [
        { 
          type: "answer-na",
          content: "Not applicable"}
        ],

      qtype:'free-report', 
      questionId: 1,
      surveytag: 'feedback',
      title: 'Feedback', 
      constraint: [
       {min: ""},
       {max: "1000000"}
      ]
  },

] 

export default quizQuestions;

