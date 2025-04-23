//UDF questions

// Q1

const library = {
    books: [],
    addBooks: function(booksArray) {
        booksArray.forEach(book => {
            if (book.title && book.author) {
                this.books.push({ title: book.title, author: book.author });
            } else {
                console.warn('Invalid book format:', book);
            }
        });
    }
};


library.addBooks([
    { title: "1997", author: "J. K. Rowling" },
    { title: "Harry Potter and the Philosopher's Stone", author: "J. K. Rowling" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
]);

console.log(library.books);

//Q2


let countRed = 0
let countBlue = 0
let countGreen = 0
let frequentColor = {
  colors: ["red", "blue", "red", "green", "blue", "blue"],
  frequentColors: function () {
    for (let i = 0; i < this.colors.length; i++) {
      if (this.colors[i] === "red") {
        countRed++
      }
      else if (this.colors[i] === "blue") {
        countBlue++
      }
      else if (this.colors[i] === "green") {
        countGreen++

      }
    }
  },
  mostFrequentColor: function () {

    if (countRed > countBlue) {
      if (countRed > countGreen) {
        console.log("Red is most frequent color in array")
      }
      else {
        console.log("Green is most frequent color in array")
      }
    }
    else {
      console.log("Blue is most frequent color in array")
    }
  }
}
frequentColor.frequentColors();
frequentColor.mostFrequentColor();

//Q3

const gradebook = {
    students: {},
  
    addGrades: function (studentsArray) {
      studentsArray.forEach(student => {
        const [name, grade] = student;
        this.students[name] = grade;
      });
      return this.students;
    }
  };
  
  
  const studentsArray = [
    ['parth', 70],
    ['parash', 55],
    ['prakash', 62]
  ];

  console.log(gradebook.addGrades(studentsArray));
    
  //Q4

  const productsArray = [
    "Smartphone",
    "Laptop",
    "Smartphone",
    "Laptop",
    "Smartwatch",
    "Smartphone",
    "Smartwatch",
    
  ];
  shoppingCart = {
     items :{},
     addProduct : function (){
      productsArray.forEach((product)=>{
       this.items[product] =(this.items[product] || 0) +1
      })
      return this.items
     }
     
  }

  console.log(shoppingCart.addProduct())
  
  //Q5

  
const letterCounter = {
    object : {},
    string : "Hello World from earth",
    freqencyLetter : function(){
     for(let i=0;i<this.string.length;i++){
       if(this.object[this.string[i]]==undefined){
         this.object[this.string[i]] = 1
       }
       else
       {
         this.object[this.string[i]]++
       }
     }
     return this.object
    }
 }
 
 console.log(letterCounter.freqencyLetter())

 //Q6

const numbers = [1, 3, 4, 6, 3, 4, 5, 3, 4];
const frequency = {};

numbers.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
});
console.log(frequency);

//Q7

const numbers = [1, 3, 4, 6, 3, 4, 5, 3, 4, 8 , 9 , 2 , 4 ,5];
const frequency = {};
let sum = 0;
numbers.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
});
for (let num in frequency) {
    if (frequency[num] >= 2) {
        sum += parseInt(num);
    }
}
console.log("Sum of elements with frequency >= 2:", sum);
