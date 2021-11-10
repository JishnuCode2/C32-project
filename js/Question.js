class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("Enter the correct answer no.")


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement("h3");

    this.answer1 = createElement("h4");
    this.answer2 = createElement("h4");
    this.answer3 = createElement("h4");
    this.answer4 = createElement("h4");

    this.message = createElement("h2")

  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
     

    //Create html() and position() for each question, input and answers.
    this.question.position(100,50);
    this.question.html('Q. What is the product of 77 and 21?')
    this.answer1.position(150,80);
    this.answer1.html('1. 444')
    this.answer2.position(150,100);
    this.answer2.html('2. 1617');
    this.answer3.position(150,120);
    this.answer3.html('3. 1177');
    this.answer4.position(150,140);
    this.answer4.html('4. 2127')


    this.input1.position(150, 330);
    this.button.position(340, 360);
    this.input2.position(350,330);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.input1.hide();
      this.button.hide();
      this.input2.hide();
      this.message.position(100,330);
      var message = `
      Thank you, ${this.input1.value()}
      Your answer has been submitted...`;
      this.message.html(message)
    })


  }
}
