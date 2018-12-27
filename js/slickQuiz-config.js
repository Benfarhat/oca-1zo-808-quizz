// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

/*
var questions = [
    [
        'q' => `    class X
        public void printFileContent() {
          /* code goes here * /
          throw new IOException();
        }
      }
      public class Test {
        public static void main(String[] args) {
          X xobj = new X();
          xobj.printFileContent();
        }
      }`,
      "a" => [
        [
          "option" => "Bacon and eggs",
          "correct" => false
        ],
        [
          "option" => "Bacon and eggs",
          "correct" => false
        ],
        [
          "option" => "Bacon and eggs",
          "correct" => false
        ],
        [
          "option" => "Bacon and eggs",
          "correct" => false
        ],
        "select_any" => true,
        "correct" => "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
        "incorrect" => "<p><span>Hmmm.</span> You might want to reconsider your options.</p>"

    ]
];
*/
var quizJSON = {
    "info": {
        "name":    "Exam 808 - Java SE 8 Programmer I <br>WORK IN PROGRESS!!!",
        "main":    "<p>Knowledge is of no value unless you put it into practise. <small>Anton Tchekhov</small></p>",
        "results": "<p>You results</p>",
        "level1":  "Java Ninja",
        "level2":  "Java Warrior",
        "level3":  "Java Hero",
        "level4":  "Java Kid",
        "level5":  "Java Zero..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": `Given the code fragment:<br><pre class="prettyprint linenums">            class X {
                public void printFileContent() {
                    /* code goes here */
                    throw new IOException();
                }
            }
            public class Test {
                public static void main(String[] args) {
                    X xobj = new X();
                    xobj.printFileContent();
                }
            }</pre>
            <p>Which two modifications should you make so that the code compiles successfully? (Choose two).</p>`,
            "a": [
                {
                    "option": `Replace line 8 with:<pre class="prettyprint">public static void main(String[] args) throws Exception {</pre>`,      
                    "correct": true
                },
                {
                    "option": `Replace line 10 with:<pre class="prettyprint">try {
  xobj.printFileContent();
}
catch(Exception e) { }
catch(IOException e) { }</pre>`,      
                    "correct": false
                },
                {
                    "option": `Replace line 2 with:<pre class="prettyprint">public void printFileContent() throws IOException {</pre>`,      
                    "correct": true
                },
                {
                    "option": `At line 11 insert:<pre class="prettyprint">throws new IOEception();</pre>`,      
                    "correct": false
                }
            ],
            "correct": "<p><span>Good answer!</span></p>",
            "incorrect": `<p><span>Wrong answer!</span>
<pre class="prettyprint linenums">import java.io.*;

class X {
  public void printFileContent() throws IOException{
    /* code goes here */
    throw new IOException();
  }
}
public class Test {
  public static void main(String[] args) throws Exception{
    X xobj = new X();
    xobj.printFileContent();
  }
}
</pre></p>`
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the following best represents your preferred breakfast?",
            "a": [
                {"option": "Bacon and eggs",               "correct": false},
                {"option": "Fruit, oatmeal, and yogurt",   "correct": true},
                {"option": "Leftover pizza",               "correct": false},
                {"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Where are you right now? Select ALL that apply.",
            "a": [
                {"option": "Planet Earth",           "correct": true},
                {"option": "Pluto",                  "correct": false},
                {"option": "At a computing device",  "correct": true},
                {"option": "The Milky Way",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
        },
        { // Question 4
            "q": "How many inches of rain does Michigan get on average per year?",
            "a": [
                {"option": "149",    "correct": false},
                {"option": "32",     "correct": true},
                {"option": "3",      "correct": false},
                {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
        { // Question 5
            "q": "Is Earth bigger than a basketball?",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        } // no comma here
    ]
};
