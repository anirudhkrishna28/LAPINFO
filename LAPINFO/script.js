// Define the questions array
const questions = [
    {
        question: "What is your laptop screensize?",
        answerOptions: [13, 15, 17]
    },
    {
        question: "What is your laptop processor?",
        answerOptions: ['Intel','AMD']
    },

    {
        question: "What is your laptop purpose?",
        answerOptions: ['editing','gaming','coding']
    },
    {
        question: "What is your laptop level of purpose?",
        answerOptions: ['basic','medium','hardcore']
    },
    {
        question: "how much ram(GB) do you need ?",
        answerOptions: ['4','8','16','32']
    },
    {
      question: "what is the screen resulotion ?",
      answerOptions: ['HD','FHD','2K','4K']
  },

  {
    question: "what is the OS required ?",
    answerOptions: ['windows','macos','linux']
},
{
  question: "what is the weight of laptop ?",
  answerOptions: ['1kg','1.3kg','1.5kg','2kg']
},
{
  question: "Upgradability ?",
  answerOptions: [true,false]
},
    {
      question: "find your laptop/s below",
      answerOptions: []
  },
];

// Define the current question index
let currentQuestionIndex = 0;

// Define the answer array
const answers = [];
const answerValues = [];
let processor;
let screenSize;
let purpose;
let ram;
let screenresolution;
let os;
let weight;
let Upgradability;

// Define the question and answer elements
const questionDiv = document.getElementById("question");
const answersDiv = document.getElementById("answers");

// Define the next button element and add an event listener to it
const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", function() {
    // Get the selected answer for the current question
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const answer = selectedAnswer ? selectedAnswer.value : null;
    answers[currentQuestionIndex] = answer;
    answerValues[currentQuestionIndex] = answer;

    // Clear the answer input field
    answersDiv.innerHTML = "";

    // If there are more questions, display the next one
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        const currentQuestion = questions[currentQuestionIndex];
        const answersHtml = generateAnswersHtml(currentQuestion.answerOptions);
        questionDiv.textContent = currentQuestion.question;
        answersDiv.innerHTML = answersHtml;
    } else {
        // Otherwise, display the results
        resultsDiv.innerHTML = "";
        for (let i = 0; i < answers.length; i++) {
            const answerDiv = document.createElement("div");
            const question = questions[i].question;
            const answer = answers[i] || "No answer provided";
            answerDiv.innerHTML = `<strong>${question}</strong><br>${answer}`;
            resultsDiv.appendChild(answerDiv);
        }

        // Hide the answer input field and next button
        answersDiv.style.display = "none";
        nextButton.style.display = "none";


    }

     processor = answers[1];
 screenSize  = parseFloat(answers[0]);
 purpose = answers[2];
 ram = answers[3];
 screenresolution = answers[4];
 os = answers[5];
 weight = answers[6];
 Upgradability = answers[7];
});


// Call the nextButton click event handler once on page load to display the first question
const currentQuestion = questions[currentQuestionIndex];

const answersHtml = generateAnswersHtml(currentQuestion.answerOptions);
questionDiv.textContent = currentQuestion.question;
answersDiv.innerHTML = answersHtml;

// Define the results element
const resultsDiv = document.getElementById("results");

// let processor = 'AMD';
// let screenSize = 15;

// Define a function to generate the HTML for the answer options for the current question
function generateAnswersHtml(answerOptions) {
    let html = "";
    // console.log(answerOptions)
    // processor = answerOptions[1];
    // screenSize = answerOptions[0];
    for (let i = 0; i < answerOptions.length; i++) {
        console.log(answerOptions[i]);
        html += `<label><input type="radio" name="answer" value="${answerOptions[i]}">${answerOptions[i]}</label><br>`;
    }
    return html;
}

// console.log(answers);
// console.log(answers[1]);
// let processor = answers[1];
// let screenSize  = parseFloat(answers[0]);

const resultsContainer = document.getElementById('results');
const laptopForm = document.getElementById('laptop-form');
laptopForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // const budgetLow = parseFloat(document.getElementById('budget-low').value);
    // const budgetHigh = parseFloat(document.getElementById('budget-high').value);

    const budgetLow = 1;
    const budgetHigh = 2000;
    // const processor = document.querySelector('input[name="processor"]:checked').value;
    // const screenSize = parseInt(document.querySelector('input[name="screen-size"]:checked').value);

    // let processor = answerOptions[1];
    // let screenSize = parseInt(answerOptions[0]);

  console.log(screenSize);
  console.log(processor);
    // Here you would typically make a request to a server to get laptop recommendations based on the user's choices
    // For this example, we'll just display some example data
    const laptops = [
      { name: 'Acer Aspire 5', price: 999, processor: 'Intel', screen: 13, image: 'https://laptopmedia.com/wp-content/uploads/2020/10/1-25-e1603348191559-680x471.jpg', url: 'laptops-specs/acer.html',purpose:'editing',ram :['16','32'],os:['windows'],weight:'1kg',Upgradability:true },
      { name: 'Lenovo IdeaPad 5', price: 749, processor: 'AMD', screen: 15, image: 'https://laptopmedia.com/wp-content/uploads/2023/04/51DDeZFyjEL._AC_SL1007_-680x345.jpg', url: 'laptops-specs/thinkpad.html', purpose:'gaming',ram:['8','16',true],os:['windows','linux',true],weight:'1.3kg',Upgradability:true},
      { name: 'Lenovo ThinkPad P1 Gen 3<', price: 749, processor: 'AMD', screen: 15, image: 'https://laptopmedia.com/wp-content/uploads/2023/03/81dzfAmvQ9L._AC_SL1500_-2-680x554.jpg', url: 'laptops-specs/lenovo.html',purpose:'gaming',ram :['8','32',true],os:['windows','linux',true],weight:'1.3kg',Upgradability:true },
      { name: 'Lenovo IdeaPad 52', price: 749, processor: 'AMD', screen: 15, image: 'https://i1.wp.com/www.apu.graphics/wp-content/uploads/2021/03/IMG_20210306_090419-scaled.jpg?ssl=1', url: 'laptops-specs/hp1.html',purpose:'coding',ram :['8','16','32',true],os:['linux',true],weight:'1.3kg',Upgradability:true },
      { name: 'LLenovo ThinkPad P1 Gen 3<', price: 839, processor: 'AMD', screen: 15, image: 'https://i1.wp.com/www.apu.graphics/wp-content/uploads/2021/03/IMG_20210306_090419-scaled.jpg?ssl=1', url: 'laptops-specs/hp.html',purpose:'coding',ram :['16','32',true],os:['windows','linux',true],weight:'1.3kg',Upgradability:true },
      { name: 'HP Pavilion Gaming', price: 1299, processor: 'Intel', screen: 17, image: 'https://laptopmedia.com/wp-content/uploads/2023/04/51DDeZFyjEL._AC_SL1007_-680x345.jpg', url: 'laptops-specs/thinkpad.html',purpose:'coding',ram :['16',true],os:['windows'],weight:'2kg',Upgradability:true },
      { name: 'Apple MacBook Air', price: 999, processor: 'Apple M1', screen: 13, image: 'https://laptopmedia.com/wp-content/uploads/2023/04/51n8TWcDc5L._AC_SL1000_-680x442.jpg', url: 'laptops-specs/hp.html',purpose:'editing',ram :['8','16',true],os:['windows',true],weight:'1.3kg',Upgradability:false },
      { name: 'Asus ROG Zephyrus', price: 1899, processor: 'AMD Ryzen 9', screen: 15.6, image:'https://laptopmedia.com/wp-content/uploads/2023/04/51n8TWcDc5L._AC_SL1000_-680x442.jpg',url: 'laptops-specs/acer.html',purpose:'editing',ram :['16','32',true],os:['windows','linux'],weight:'2kg',Upgradability:true }
    ];
  
    const filteredLaptops = laptops.filter(laptop => {
      return laptop.price >= budgetLow && laptop.price <= budgetHigh && laptop.processor === processor && laptop.screen === screenSize && purpose == laptop.purpose;
    });
  
    // Display the results
    if (filteredLaptops.length > 0) {
      resultsContainer.innerHTML = '';
      filteredLaptops.forEach(laptop => {
        const laptopElement = document.createElement('div');
        laptopElement.classList.add('laptop');
        laptopElement.innerHTML = `
        <style>
        /* Style for the laptop card */
        .laptop-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          background-color: #fff;
          width: 300px;
          margin-bottom: 20px;
          text-align: center;
        }

        .laptop-card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          background-color: #fff;
          width: 300px;
          margin-bottom: 20px;
        }
      
        /* Style for the laptop name */
        .laptop-card h3 {
          font-size: 24px;
          margin-top: 0;
          margin-bottom: 10px;
          color: #333;
        }
      
        /* Style for the laptop image */
        .laptop-card img {
          width: 200;
          height: 200;
          margin-bottom: 10px;
        }
      
        /* Style for the laptop price */
        .laptop-card p {
          font-size: 18px;
          margin-top: 0;
          margin-bottom: 5px;
          color: #666;
        }
      
        /* Style for the laptop link */
        .laptop-card a {
          text-decoration: none;
        }
      
        /* Style for the laptop link on hover */
        .laptop-card a:hover {
          text-decoration: underline;
        }
      </style>
      
      <div class="laptop-card">
        <a href="${laptop.url}" target="_blank">
          <h3>${laptop.name}</h3>
          <img src="${laptop.image}" alt="${laptop.name}">
          <p>Price: $${laptop.price}</p>
          <p>Processor: ${laptop.processor}</p>
          <p>Screen size: ${laptop.screen} inches</p>
        </a>
      </div>
      
        `;
        resultsContainer.appendChild(laptopElement);
      });
    } else {
      resultsContainer.innerHTML = '<p>No laptops match your criteria.</p>';
    }
  });



  // </style>
  // <a href="${laptop.url}" target="_blank">
  //   <h3>${laptop.name}</h3>
  //   <img src="${laptop.image}" alt="${laptop.name}">
  //   <p>Price: $${laptop.price}</p>
  //   <p>Processor: ${laptop.processor}</p>
  //   <p>Screen size: ${laptop.screen} inches</p>
  // </a>