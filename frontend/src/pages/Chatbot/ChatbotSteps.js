// ChatbotSteps.js
import React from 'react';

const ChatbotSteps = [
  {
    id: '1',
    message: 'Hello! I am your programming-related chatbot. How can I assist you today?',
    trigger: 'userInput',
  },
  {
    id: 'userInput',
    user: true,
    trigger: 'programmingAnswer',
    validator: (value) => {
      if (!value || value.trim() === '') {
        return 'Please enter a valid programming-related question.';
      }
      return true;
    },
    userBegin: true,
  },
  {
    id: 'programmingAnswer',
    message: ({ previousValue }) => {
        // const userInput = (typeof previousValue == '' ? previousValue.trim() : '').toLowerCase();
        const userInput = previousValue.toLowerCase();
           console.log(userInput)
        if (!userInput) {
          return 'I didn\'t catch that. Could you please ask a programming-related question?';
        }

            
      const programmingQuestions = [
        { keyword: 'variable', answer: 'A variable is a container for storing data values. It can be changed during the execution of a program. On the other hand, a constant is a value that cannot be altered during program execution.' },
        { keyword: 'data types', answer: 'In programming, a data type is an attribute of data that tells the compiler or interpreter how the programmer intends to use the data. Common data types include integers, floats, strings, and booleans.' },
        { keyword: 'compilation', answer: 'Compilation is the process of converting the source code into machine code before the program is run. Interpretation involves directly executing the source code line by line.' },
        { keyword: 'arrays', answer: 'An array is a data structure that stores a collection of elements. To declare an array, specify the type of elements it will hold and the array name. Access elements using their index.' },
        { keyword: 'loops', answer: 'Loops are used to execute a set of instructions repeatedly until a certain condition is met. They help in reducing redundancy and making the code more efficient.' },
        { keyword: 'if statements', answer: 'An if statement is used for conditional execution. It allows a program to make decisions based on whether a certain condition is true or false.' },
        { keyword: 'functions', answer: 'Functions are reusable blocks of code that perform a specific task. To define a function, specify its name, parameters, and return type. To call a function, use its name followed by parentheses.' },
        { keyword: 'scope', answer: 'Scope refers to the region of a program where a variable can be accessed. Local scope means a variable is accessible only within a certain part of the code, while global scope means it can be accessed throughout the entire program.' },
        { keyword: 'comments', answer: 'Comments are used to explain code and make it more readable. They are ignored by the compiler or interpreter. Comments should be used to provide context, clarify complex sections, or describe the purpose of the code.' },
        { keyword: 'while loop', answer: 'Both while and for loops are used for repetitive tasks. The key difference is in their syntax and use cases. While loops are more flexible and are used when the number of iterations is not known beforehand.' },
        { keyword: 'pointer', answer: 'A pointer is a variable that stores the memory address of another variable. It allows for dynamic memory allocation and manipulation.' },
        { keyword: 'recursion', answer: 'Recursion is a programming technique where a function calls itself. It is often used to solve problems that can be broken down into smaller, similar sub-problems.' },
        { keyword: '== vs ===', answer: 'In some programming languages, == is used for equality check with type coercion, while === is used for strict equality check without type coercion.' },
        { keyword: 'exceptions', answer: 'Handling exceptions in code is crucial for managing errors. It involves using try-catch blocks to handle unexpected situations and prevent program crashes.' },
        { keyword: 'OOP concepts', answer: 'Object-Oriented Programming (OOP) concepts like inheritance and encapsulation are fundamental principles that promote code organization, reusability, and modularity.' },
        { keyword: 'stack vs queue', answer: 'A stack is a Last In, First Out (LIFO) data structure, while a queue is a First In, First Out (FIFO) data structure.' },
        { keyword: 'Big O notation', answer: 'Big O notation is used to analyze the efficiency of algorithms. It describes the upper bound of an algorithm\'s time or space complexity.' },
        { keyword: 'linked list', answer: 'A linked list is a data structure where elements are linked using pointers. It differs from an array in terms of memory allocation and flexibility.' },
        { keyword: 'memory management', answer: 'Memory management in programming involves allocating and deallocating memory to optimize resource usage and prevent memory leaks.' },
        { keyword: 'hash table', answer: 'A hash table is a data structure that stores key-value pairs. It uses a hash function to map keys to specific indices, allowing for efficient data retrieval.' },
      ];

      const matchedQuestion = programmingQuestions.find(
        ({ keyword }) => userInput.toLowerCase().includes(keyword.toLowerCase())
      );

      const response = matchedQuestion
        ? `${matchedQuestion.answer}`
        : 'I\'m sorry, I may not have information on that topic.';
        console.log(response)
      return (
        <div>
          <p>{response}</p>
          <p>If you have more questions, feel free to ask!</p>
        </div>
      );
    },
    trigger: 'userInput',
  },
];

export default ChatbotSteps
