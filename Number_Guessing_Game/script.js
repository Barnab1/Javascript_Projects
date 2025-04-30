//Number Guessing Game by computers

const computerGuessGame ={

    welcome: function(){
      console.log('Welcome friend to Number Guessing Game by computer');
    },
  
    main: function(){
      this.welcome();
  
  const firstComputerNumber = this.getFirstComputerNumber();
  console.log(`Master Computer choice : ${firstComputerNumber}`);
  
  const secondComputerNumber = this.getSecondComputerNumber();
  console.log(`Player Computer choice: ${secondComputerNumber}`);
  
    firstComputerNumber == secondComputerNumber ? console.log('Second computer win') : console.log('Second computer loses');
    },
    
    treatInput: function(limit){
      try{
        limit = parseInt(limit);
      }catch{
        alert('Give an integer number only');
        return;
      }
      return limit;
    
    },
  
    getFirstComputerNumber:function(){
       return Math.floor(Math.random() * this.treatInput(100))
    },
    getSecondComputerNumber:function(){
       return Math.floor(Math.random() * this.treatInput(100))
    }
  
  }
   
  computerGuessGame.main()