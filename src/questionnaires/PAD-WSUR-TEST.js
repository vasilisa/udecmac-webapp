/*
  Washington State University Revision for Padua Scale
  by VS March 2020
*/
/*
  Padua Inventory for the LEARNOISE ONLINE PROJECT
  by VS March 2020

var quizQuestions = [

{

  question: "The following statements refer to thoughts and behaviors which may occur to everyone in everyday life. For each statement, choose the reply which best seems to fit you and the degree of disturbance which such thoughts or behaviors may create.",
  answers: [
          {
              type: "Continue",
              content: "Continue"
          }
          ],
      qtype: "button", // to be maybe changed
      questionId: 0,
      surveytag: 'pad',
      title: 'Personal experience', // to be changed
      constraint: [
        {min: ""},
        {max: ""}
      ]
},

{
      question: "I feel my hands are dirty when I touch money",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 1,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },


{
      question: "I think even slight contact with bodily secretions (perspiration, saliva, urine, etc.) may contaminate or somehow harm me",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 2,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I find it difficult to touch an object when I know it has been touched by strangers or by certain people",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 3,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I find it difficult to touch garbage or dirty things",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 4,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I avoid using public toilets because I am afraid of disease and contamination",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 5,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I avoid using public telephones because I am afraid of contagion and disease",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 6,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I wash my hands more often and longer than necessary",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 7,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I sometimes have to wash or clean myself simply because I think I may be dirty or 'contaminated'",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 8,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "If I touch something I think is 'contaminated', I immediately have to wash or clean myself",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 9,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "If an animal touches me, I feel dirty and immediately have to wash myself or change my clothing",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 10,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I feel obliged to follow a particular order in dressing, undressing, and washing myself",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 11,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Before going to sleep, I have to do certain things in a certain order",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 12,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },


  {
      question: "Before going to bed, I have to hang up or fold my clothes in a special way",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 13,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I have to do things several times before I think they are properly done",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 14,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I tend to keep on checking things more often than necessary",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 15,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I check and recheck gas and water taps and light switches after turning them off",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 16,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I return home to check doors, windows, drawers, etc., to make sure they are properly shut",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 17,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I keep on checking forms, documents, checks, etc., in detail to make sure I have filled them in correctly",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 18,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I keep on going back to see that matches, cigarettes, etc., are properly extinguished",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 19,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "When I handle money, I count and recount it several times",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 20,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I check letters carefully many times before posting them",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 21,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Sometimes I am not sure I have done things which in fact I knew I have done",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 22,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },


  {
      question: "When I read, I have the impression I have missed something important and must go back and reread the passage at least two or three times",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 23,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I imagine catastrophic consequences as a result of absent-mindedness or minor errors which I make",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 24,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I think or worry at length about having hurt someone without knowing it", 
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 25,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "When I hear about a disaster, I think it is somehow my fault",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 26,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I sometimes worry at length for no reason that I have hurt myself or have some disease",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 27,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I get upset and worried at the sight of knives, daggers, and other pointed objects",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 28,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "When I hear about a suicide or a crime, I am upset for a long time and find it difficult to stop thinking about it",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 29,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I invent useless worries about germs and disease",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 30,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },
  {
      question: "When I look down from a bridge or a very high window, I feel an impulse to throw myself into space",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 31,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "When I see a train approaching, I sometimes think I could throw myself under its wheels",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 32,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "At certain moments, I am tempted to tear off my clothes in public",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 33,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "While driving, I sometimes feel an impulse to drive the car into someone or something",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 34,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "Seeing weapons excites me and makes me think violent thoughts",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 35,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I sometimes feel the need to break or damage things for no reason",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 36,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },


  {
      question: "I sometimes have an impulse to steal other people's belongings, even if they are of no use to me",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 37,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I sometimes almost irresistibly tempted to steal something from the supermarket",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 38,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

  {
      question: "I sometimes have an impulse to hurt defenseless children or animals",
      answers: [
          {
              type: "pad-1",
              content: "Very much"
          },
          {
              type: "pad-2",
              content: "A lot"
          },
          {
              type: "pad-3",
              content: "Quite a lot"
          },
          {
              type: "pad-4",
              content: "A little"
          },
          {
              type: "pad-5",
              content: "Not at all"
          },
      ],
      questionId: 39,
      surveytag: 'pad',
      title: 'Personal experience',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },

]
*/

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
      qtype: "button", // to be maybe changed
      questionId: 0,
      surveytag: 'covid',
      title: 'Personal experience', // to be changed
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
      surveytag: 'covid',
      title: 'Personal experience',
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
      surveytag: 'covid',
      title: 'Personal experience',
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
        content: "Whole who have serious lung disease"},

        {type: "covid-9",
        content: "Pregnant women"},

        {type: "covid-10",
        content: "None of the above"},

        {type: "covid-11",
        content: "Not sure"},

      ],
      qtype: 'checkbox', // multiple answers are allowed
      questionId: 3,
      surveytag: 'covid',
      title: 'Personal experience',
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
      surveytag: 'covid',
      title: 'Personal experience',
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
      surveytag: 'covid',
      title: 'Personal experience',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


  {
      question:"How can you protect yourself from COVID-19 (coronavirus)? (tick any that apply)",


      answers: [{
         type: "covid-1",
        content: "Washing hands"},

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
      surveytag: 'covid',
      title: 'Personal experience',
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
      surveytag: 'covid',
      title: 'Personal experience',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


  {
  question: "When reading the statements below, please think of an average day BEFORE the COVID-19 pandemic (e.g. December 2019) and indicate your answer based on it.",

  answers: [
          {
              type: "Continue",
              content: "Continue"
          }
          ],
      qtype: "button", // to be maybe changed
      questionId: 8,
      surveytag: 'covid',
      title: 'Personal experience', // to be changed
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
      questionId: 9,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 10,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 11,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 12,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 13,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 14,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 15,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 16,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 17,
      surveytag: 'covid',
      title: 'Personal experience',
      constraint: [
       {min: "0"},
       {max: "1000000"}
      ]
  },

  {
  question: "Now, please think of an average day during the LAST 7 DAYS and indicate your answer based on it.",

  answers: [
          {
              type: "Continue",
              content: "Continue"
          }
          ],
      qtype: "button", // to be maybe changed
      questionId: 18,
      surveytag: 'covid',
      title: 'Personal experience', // to be changed
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
      questionId: 19,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 20,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 21,
      surveytag: 'covid',
      title: 'Personal experience',
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
     questionId: 22,
     surveytag: 'covid',
     title: 'Personal experience',
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
      questionId: 23,
      surveytag: 'covid',
      title: 'Personal experience',
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
        content: "5 - Always"},
      ],
      qtype: 'quiz',
      questionId: 24,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 25,
      surveytag: 'covid',
      title: 'Personal experience',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question:"What is your current isolation status? By ‘self-isolation’ we mean staying at home and avoiding contact to people in- and outside your household. This also means not leaving the house unless it is unavoidable (e.g. no food or medicine delivery possible, medical appointment).",

      answers: [{
         type: "covid-1",
        content: "I am living my life as normal"},

        {type: "covid-2",
        content: "I only go out once a day for one essential activity (e.g. getting groceries, medicine) or exercise"},

        {type: "covid-3",
        content: "I never leave the house"},

        {type: "covid-4",
        content: "I am self-isolating from other people in my household (I am never in the same room with them)"},

      ],
      qtype: 'quiz',
      questionId: 26,
      surveytag: 'covid',
      title: 'Personal experience',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

   {
      question:"When leaving your house, do you stay at least 2 metres (6ft) away from other people?",

      answers: [{
         type: "covid-1",
        content: "Agree"},

        {type: "covid-2",
        content: "Disagree"},
      ],
      qtype: 'quiz',
      questionId: 27,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 28,
      surveytag: 'covid',
      title: 'Personal experience',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


  {
  question: "Now, please think of an average day during the LAST 7 DAYS and indicate your answer based on it.",

  answers: [
          {
              type: "Continue",
              content: "Continue"
          }
          ],
      qtype: "button", // to be maybe changed
      questionId: 29,
      surveytag: 'covid',
      title: 'Personal experience', // to be changed
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
      questionId: 30,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 31,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 32,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 33,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 34,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 35,
      surveytag: 'covid',
      title: 'Personal experience',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
  question: "We are now interested in your GENERAL perception and experiences during the COVID-19 (coronavirus) pandemic.",

  answers: [
          {
              type: "Continue",
              content: "Continue"
          }
          ],
      qtype: "button", // to be maybe changed
      questionId: 36,
      surveytag: 'covid',
      title: 'Personal experience', // to be changed
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
      questionId: 37,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 38,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 39,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 40,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 41,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 42,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 43,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 44,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 45,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 46,
      surveytag: 'covid',
      title: 'Personal experience',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

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
      questionId: 47,
      surveytag: 'covid',
      title: 'Personal experience',
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
      questionId: 48,
      surveytag: 'covid',
      title: 'Personal experience',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question:"Have you experienced any of the following as a consequence of the COVID-19 (coronavirus) pandemic?",


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
      qtype: 'quiz',
      questionId: 49,
      surveytag: 'covid',
      title: 'Personal experience',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },



{
      question:"Do you have caring responsibilities for any of the following? (tick any that apply)",

      answers: [{
         type: "covid-1",
        content: "Elderly relatives or friends"},

        {type: "covid-2",
        content: "People with long-term conditions or disabilities"},

        {type: "covid-3",
        content: "Children or grandchildren"},

        {type: "covid-4",
        content: "None of the above"},

      ],
      qtype: 'checkbox',
      questionId: 50,
      surveytag: 'covid',
      title: 'Personal experience',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


{
      question:"Do you identify as a member of a ‘high risk group’? High risk group: aged 70 or older, people younger than 70 with weakened immune systems and people who have underlying chronic conditions, including heart disease, diabetes, or asthma.",

      answers: [{
         type: "covid-1",
        content: "No"},

        {type: "covid-2",
        content: "Yes"},
      ],
      qtype: 'quiz',
      questionId: 51,
      surveytag: 'covid',
      title: 'Personal experience',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question:"Does someone in your close circle (e.g. family, partner, close friend) or your household identify as a member of a ‘high risk group’?",

      answers: [{
         type: "covid-1",
        content: "No"},

        {type: "covid-2",
        content: "Yes"},
      ],
      qtype: 'quiz',
      questionId: 52,
      surveytag: 'covid',
      title: 'Personal experience',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


  {
      question:"Are you currently fulfilling any of the government’s identified ‘key worker’ roles? (tick any that apply)",

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
        content: "Local of national government worker delivering essential public services"},

         {type: "covid-7",
        content: "Utility worker (e.g. energy sewerage, postal services)"},

         {type: "covid-8",
        content: "Public safety or national security worker"},

        {type: "covid-9",
        content: "Worker involved in medicines or protective equipment production or distribution"},

        {type: "covid-10",
        content: "None of the above"},

      ],
      qtype: 'checkbox',
      questionId: 53,
      surveytag: 'covid',
      title: 'Personal experience',
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },
]

export default quizQuestions;


