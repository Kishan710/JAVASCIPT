//  Q - 1
function totalSpent(total) {
    return total
}
let totalExpance = [200, 150, 100, 350, 50]
let total = 0
let totalExpance2 = totalExpance.map((num)=>{
    total += num
})
console.log("the total expance of family over week = ", total)


// Q-2
function findHighTemp(temp) {
    return Math.max(...temp)
}
let temp = [32, 35, 30, 31, 33, 36, 34]

let tempHigh = findHighTemp(temp);
for(let i=0;i<temp.length;i++){
    if(temp [i+1] > temp [i]){
      tempHigh = temp[i+1]
    }
 }
console.log("The highest temperature over 7 day is", tempHigh)


//  Q - 3
function findLowScore(score) {
    return Math.min(...score)
}
let score = [56, 72, 48, 90, 65]
let lowScore = findLowScore(score);
console.log("The lowest score student got", lowScore)


// Q - 4
function monthlySalary(totalSalary) {
    return totalSalary
}
let salaryOfEmployee = [45000, 55000, 30000, 70000, 60000]
let totalSalary = 0

let monthlySalary1 = salaryOfEmployee.map((num) => {
    totalSalary += num
})

let i = salaryOfEmployee.length
let salary = totalSalary / i
console.log("The Average salary of 5 employee", salary)


// Q-5
function reversedArr() {
    return reversedArr
}
let arr = ["John", "Aman", "Rita", "Raj"];
let reversedArr1 = []

for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr1[reversedArr1.length] = arr[i];
}
console.log("Rverse guest list", reversedArr1);



// Q -6
function seatAvailable(available) {
    return available
}
let seatNo = [3, 5, 7, 9, 12]
let seat = 14
let available = seatNo.includes(seat)

console.log("The seat available in theater than true otherwise false : ", available)


// Q -7
function toDoList(remove) {
    return remove
}
let toDoList1 = ["Buy groceries", "Clean room", "Study"]
let removeList = "Buy groceries"
console.log("Before update", toDoList1)
let remove = toDoList1.shift(removeList)

console.log("After upadeted to do List", toDoList1)

// Q8

let phone = [9876543210, 9123456789, 9876543210, 9000000000]
function removeDuplicate(arr) {
    return arr
}
for (let i = 0; i < phone.length; i++) {
    for (let j = i + 1; j < phone.length; j++) {
          if (phone[i] === phone[j]) {
                phone.splice(j, 1)
                j--
          }
    }
}
console.log("After remove duplicate number from company list", phone)

// Q9 

let array2 = [200, 400, 100, 700, 500]
let secondLargest = []
array2.sort((a, b) => b - a)

secondLargest = array2[1]

console.log("The second largest sale amount is", secondLargest)

// Q - 10

let product = ["Shoes", "T-shirt", "Hat"]
let lastProduct = product.map((productLast) => {
    productLast = product[product.length - 1]
    return productLast
})

console.log("The last product sold is", lastProduct[0])


// Q11

let shoppingCart = []
function checkEmpty(shoppingCart) {

    if (shoppingCart.length == 0) {
          console.log("Shopping cart is empty")
    }
    else {
          console.log("Shopping cart is not empty")
    }
    return shoppingCart.length
}
console.log(checkEmpty(shoppingCart))



// Q12

let bookInventory = ["Book A", "Book B", "Book A", "Book C", "Book A"]
let bookA = "Book A"
let count = 0

for (let i = 0; i < bookInventory.length; i++) {
    if (bookInventory[i] == bookA) {
          count++
    }
}
console.log("the Book A Appers in its inventory = ", count)

// Q13

let class1 = ["Rahul", "Neha"]
let class2 = ["Aman", "Priya"]
let classMerge = class1.concat(class2)

console.log("The merged list of student from both classes = ", classMerge)



// Q14

let movies = ["Hobbit", "Inception", "Avatar", "Titanic"]
let movie = "Avatar"
let position = movies.indexOf(movie)

console.log("The position of Avatar in the list = ", position)


// Q15

let prices = [1000, 2000, 1500, 2500,]
let num1 = 0.9
let prices1 = prices.map((num) => num * num1)

console.log("The new prices after applying discount = ", prices1)


// Q16

let scores = [10, 50, 30, 20]
let scores1 = []

for (let i = 0; i < scores.length; i++) {
    let max = scores[i]
    let maxIndex = i
    for (let j = i + 1; j < scores.length; j++) {
          if (scores[j] > max) {
                max = scores[j]
                maxIndex = j
          }
    }
    scores1[i] = scores[maxIndex]
    scores[maxIndex] = scores[i]
}

console.log("The sorted scores in descending order = ", scores1)



// Q17

let attendees = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
let groups = attendees.slice(0,2)
let groupe1 = attendees.slice(2,6)
let groupe2 = attendees.slice(6,10)

console.log("the first group is : ",groups)
console.log("the second group is :",groupe1)
console.log("the third group is :",groupe2)



// Q18

let cars = ["Car1", "Car2", "Car3", "Car4"]
let lastCar = cars.pop()

cars.unshift("Car4")
console.log("the new line of cars is : ", cars)


// Q19

let formValues = ["", 0, "A", "", null, "", "B", undefined]
let values = [0,null,undefined]

let newValue = formValues.filter((value)=>{
    for(let i=0;i<formValues.length;i++){
          if(formValues[i]==values[0]){
                return value
          }
    }
})

console.log("the valid values from the form are : ",newValue)