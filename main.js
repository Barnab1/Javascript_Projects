/**
 * 
 * 
 * Main.js
 * recreate a game from Novice to Ninja in Javascript
 * 
 * 
 */

const quiz =
[
      {
        libelle : "Vrai Nom du Pape", result : "Jorge Bergoglio", syntaxe: "/a-z_- /i{0,20}"
      },
      {
       libelle : "Nombre de station", result : "14", syntaxe: "/0-9 /{0,5}"
      },
      {
        libelle : "Nombre de cuves au Noces de Cana", result : "6", syntaxe: "/0-9 /{0,5}"
      }, 

      {
        libelle : "Nombre des livres de Moîse", result: "4", syntaxe: "/0-9 /{0,2}"
      },

      {
        libelle : "Nombre d'apotres fidèles", result : "11", syntaxe: "/0-9 /{0,2}"
      }
] ;


const view =
{
    score :         document.querySelector('#score strong ') ,
    start :         document.getElementById('start'),
    question :      document.getElementById('question'),
    response:       document.querySelector('#response'),
    answer:         response.answer,
    result:         document.getElementById('result'),
    info:           document.querySelector('#info'),
    timer:          document.querySelector('#timer strong'),

    hide(element)
    {
      element.style.display = "none";
    },

    show(element)
    {
      element.style.display = "block";
    },
/**
 * 
 * @param { the element} target 
 * @param { Its content} content 
 * @param {Atrributes : class or Id :exampe {'class', 'NameofClass'} } attributes 
 */
    render(target,content,attributes)
    {
        for(const key in attributes)
        {
          target.setAttribute(key, attributes[key]);
        }

        target.innerHTML = content;
    },

    /**
     * Reset the form
     */
    resetForm()
    {
      this.answer.value= '';
      this.answer.focus();
    },


    /**
     * 
     * The function that will set up everything when the 
     * game start
     */
    setup()
    {
      this.show(this.response);
      this.show(this.question);
      this.resetForm();
      this.hide(this.start);
      
     
    },
    
    /**
     *
     *Responsible for "blanking" all unnecessary things
     *At the end of the game
     *
     */

     teardown()
     {
      view.hide(view.question);
      view.hide(view.response);
      view.show(view.start);
      this.hide(view.result);
     }


}

const game = 
{
    /**
     *functions
     *
     * start() :start the game after the loading of the browser
     * ask()
     * check()
     * gameOver()
     * 
     */

    start(quiz) 
    {
      this.secondsRemaining = 20;
      this.timer = setInterval(this.countdown,1000);
        this.score = 0;
        this.questions = Array.from(quiz);
        view.setup();
        
        this.ask();
       // this.gameOver();
    } ,

    ask()
    {
      view.hide(view.info);
        if(this.questions.length > 0)
        {
          this.question = this.questions.pop(); 
          view.render(view.question,this.question.libelle,'');
        }else
        {
         view.teardown() ;
         //view.setup();
          //view.render(view.info,'',{'class':'c'});
          game.gameOver();
          
        }
        
        //this.gameOver();

    
    },

    check(event)
    {

      event.preventDefault();


        const result = this.question.result;
        const answer  = view.answer.value;

       // alert(result);
        ///alert(answer);
        if(result === answer)
        {

          //alert(view.result);
           view.render(view.result,'Correct', {'class':'correct'});
            this.score++;
           // alert('Correct');
            view.render(view.score,this.score,'');
            view.resetForm();  
        }
        else
        {
            //alert(`The correct answer is ${result}`);
            view.render(view.result,`Wrong, The correct answer is ${result}`, {'class':'wrong'});
            view.resetForm();
        }
       
        this.ask();
    } ,

    gameOver()
    { 
      //alert('hehe');
        view.render(view.info
          ,`The game is over. You scored ${this.score} 
          point${this.score > 1 && this.score != 1 ? 's': ''}`);
          view.teardown();
          clearInterval(this.timer);
       // alert('hé ha');
    },

    countdown()
    {
      game.secondsRemaining--;
      view.render(view.timer,game.secondsRemaining);
      if(game.secondsRemaining < 0)
      {
        game.gameOver();
      }
    }

}

game.start(quiz);

view.start.addEventListener('click',(event) =>{

  event.preventDefault();
    event.stopPropagation();
     game.start(quiz);
    },false);


    //alert(view.answer);

    
view.response.addEventListener('submit',(event)=> game.check(event),false);
  












/** *
 * 
 * ADVERTISING PURPOSES
*view.start.addEventListener('mouseover',advertising,false);
*/
    





    /**ADVERTISING
     * 
     */

    /*
    function advertising(event) 
    {
        event.preventDefault();
        const url = 'file:///C:/Users/LENOVO/Downloads/The%20NGINX%20Handbook.pdf';
        const popup = window.open(url,undefined,'width=300,height=200,resize=yes');
    }
   */
