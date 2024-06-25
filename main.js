let interval = undefined; // Variable to store the interval ID for the countdown timer
let min = 0; // Variable to store the minutes
let sec = 0; // Variable to store the seconds
let questionNumber = 0; // Variable to store the current question number
let count = 0; // Variable to keep track of the number of questions asked
let op = ['+', '-', '*', '/', '%']; // Array of possible operators

let qNum1 = 0; // Variable to store the first number in the question
let qNum2 = 0; // Variable to store the second number in the question
let selectedOp = ''; // Variable to store the selected operator for the question

let minElement = document.getElementById('min'); // Reference to the HTML element displaying minutes
let secElement = document.getElementById('sec'); // Reference to the HTML element displaying seconds

let countElement = document.getElementById('count'); // Reference to the HTML element displaying the count of questions

let num1Element = document.getElementById('num1'); // Reference to the HTML element displaying the first number
let num2Element = document.getElementById('num2'); // Reference to the HTML element displaying the second number
let opElement = document.getElementById('op'); // Reference to the HTML element displaying the operator

let answerElement = document.getElementById('answer'); // Reference to the input element for the user's answer
let table = document.getElementById('result_table_body'); // Reference to the HTML table body for displaying results

let result = []; // Array to store the results of each question

// Function to populate the results table
const setTableData = () => {
    result.forEach(item => {
        let row = document.createElement('tr'); // Create a new table row

        for (let key in item) {
            if (item.hasOwnProperty(key)) { // Check if the item has the property
                let cell = document.createElement('td'); // Create a new table cell
                cell.textContent = item[key]; // Set the cell's text content to the value of the property
                row.appendChild(cell); // Append the cell to the row
            }
        }

        table.appendChild(row); // Append the row to the table body
    });
}

// Function to calculate and store the user's answer
const setAnswer = () => {
    let correctAnswer = 0; // Variable to store the correct answer
    let userAnswer = parseInt(answerElement.value); // Get the user's answer and convert it to an integer
    switch (selectedOp) { // Determine the correct answer based on the selected operator
        case '+': correctAnswer = qNum1 + qNum2; break;
        case '-': correctAnswer = qNum1 - qNum2; break;
        case '/': correctAnswer = qNum1 / qNum2; break;
        case '*': correctAnswer = qNum1 * qNum2; break;
        case '%': correctAnswer = qNum1 % qNum2; break;
    }

    result.push({
        'number1': qNum1,
        'number2': qNum2,
        'correctAnswer': correctAnswer,
        'userAnswer': userAnswer,
        'operator': selectedOp,
        'time': minElement.innerHTML + ':' + secElement.innerHTML,
        'isCorrect': correctAnswer === userAnswer
    }); // Store the question details and user's result in the result array

    answerElement.value = 0; // Reset the answer input field

    if (count == 5) { // If 5 questions have been asked
        count = 0; // Reset the count

        setTableData(); // Populate the results table

        reset(); // Reset the timer
    }

    manageQuestion(); // Generate the next question
}

// Function to increment the count of questions
const setCount = () => {
    count++;
    countElement.innerHTML = count; // Update the count element with the new count
}

// Function to generate a new question
const manageQuestion = () => {
    setCount(); // Increment the count

    qNum1 = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100 for the first number
    qNum2 = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100 for the second number
    selectedOp = op[Math.floor(Math.random() * 5)]; // Randomly select an operator from the op array

    num1Element.innerHTML = qNum1; // Display the first number
    num2Element.innerHTML = qNum2; // Display the second number
    opElement.innerHTML = selectedOp; // Display the selected operator
}

// Function to reset the timer and display
const reset = () => {
    if (interval) {
        clearInterval(interval); // Clear the interval if it exists
    }

    minElement.innerHTML = '00'; // Reset the minutes display
    secElement.innerHTML = '00'; // Reset the seconds display
}

// Function to start the countdown timer
const countdown = () => {
    manageQuestion(); // Generate the first question

    if (interval) {
        clearInterval(interval); // Clear the interval if it exists
    }

    interval = setInterval(() => {
        sec++; // Increment the seconds

        if (sec < 10) {
            secElement.innerHTML = '0' + sec; // Add a leading zero if seconds are less than 10
        } else {
            secElement.innerHTML = sec; // Display the seconds
        }

        if (sec === 59) { // If seconds reach 59
            min++; // Increment the minutes
            minElement.innerHTML = min; // Display the minutes
            sec = 0; // Reset the seconds
        }
    }, 1000); // Set the interval to run every 1000 milliseconds (1 second)
}

// Function to start the quiz
const start = () => {
    result = []; // Reset the results array
    countdown(); // Start the countdown timer
}
