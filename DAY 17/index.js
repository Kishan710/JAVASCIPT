//Q1 Factory Function Questions

function product(name, price, category) {
  return {
    name: name,
    price: price,
    category: category,
    displayInfo: function() {
      console.log(`${this.name} is a ${this.category} priced is ${this.price} Rupees.`);
    }
  };
}

const laptop = product('Laptop', 999.99, 'Electronics');
const smartphone = product('smartphone', 898.99, 'Electronics');
const phone = product('phone', 898.99, 'Electronics');


laptop.displayInfo(); 
smartphone.displayInfo();
phone.displayInfo();

//--------------------------------------------------

//Q1 Constructor Function Questions


function Room(roomNumber, type, price, available) {
    this.roomNumber = roomNumber;
    this.type = type;
    this.price = price;
    this.available = available;
  }
  
  
  const room101 = new Room(101, 'Single', 100, true);
  const room102 = new Room(102, 'Double', 150, false);
  const room103 = new Room(103, 'triple', 900, true);
  

  console.log(room101);
  console.log(room102);
  console.log(room102);
  
// Q2

function Course(title, instructor, duration, studentsEnrolled) {
    this.title = title;
    this.instructor = instructor;
    this.duration = duration;
    this.studentsEnrolled = studentsEnrolled;
  }

const course1 = new Course('JavaScript', 'Dhruv', '10 weeks', 15);
const course2 = new Course('React', 'Nimesh', '16 weeks', 20);
const course3 = new Course('NOdeJs', 'Naman', '6 weeks', 10);

console.log(course1);
console.log(course2);
console.log(course2);
