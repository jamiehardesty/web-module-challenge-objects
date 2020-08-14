///////////////Menu Items (MVP)///////////////////

const latte = {name: "Cafe Latte", price: 4, category: "Drinks"};
const burger = {name: "Burger", price: 18, category: "Lunch"};
const breakfastBurrito = {name: "Breakfast Burrito", price: 16, category:"Breakfast"};

/* Task 1a: write a function to return more menu items with the same format as the items above. */

function createMenuItem(name, price, category){
    // array.push({name, price, category})
    return{name, price, category};
}

/* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */
console.log(createMenuItem('parfait', 5, 'Snacks'));
console.log(createMenuItem('croissant', 3, 'Breakfast'));
console.log(createMenuItem('risotto', 12, 'Dinner'));


/* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to your burger object that automatically calculates price given a string as a parameter. 

Your method should accept: 

(1) A string (teacher, student, or public)

and should return a number. 

For example, burger.discount("teacher") would return 13.5 and burger.discount("public") would return 16.2*/

const burgerT2 = {
  discount: function(pass){
    if(pass === "teacher" || pass === "student"){ 
      return 13.5;
    }
    else{// public
      return 16.2
    }
  }
};

console.log(burgerT2.discount("teacher"));//13.5
console.log(burgerT2.discount("public"));//16.2


///////////////Reviews (MVP)///////////////////

const reviews = [{name: "Daniela", rating: 5, feedback:"Beautiful atmosphere and wonderful vegan options!"},
    {name: "Jack", rating: 3, feedback:"A little too hipster for my taste, but the burger was decent, if overpriced"},
    {name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." },
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."},
    {name:"Reyna", rating: 3.5, feedback: ""},
]

/* Task 3: Console.log just Julius' feedback */
console.log(reviews[5].feedback);

/* Task 4: Add a new rating with your (fictitious) opinions of the restaurant in the same format as the reviews above. */
function addOpinions(name, rating, feedback){
  // array.push({name, rating, feedback});
  return {name, rating, feedback};
}

console.log(addOpinions('Dwarf',3,'These taste like they were not made in cast iron. It is ok if you are into that sorta thing'));
console.log(addOpinions('Elf',2,'Human food is always inferior to our standards of cuisine'));
console.log(addOpinions('Orc',5,'MORE FOOD NOW. GET AFTER REVIEW. WE SHALL SEE.'));

/* Task 5: Add the following feedback to Reyna's rating - "this place is chill with really cool people, great for getting work done on weekdays" */

function addFeedback(array, index, feedback){
  array[index].feedback = feedback;
  return array;
}
console.log(addFeedback(reviews, 7, 'this place is chill with really cool people, great for getting work done on weekdays'));

/*  Task 6: Write a function to return a review based on the index of the review in the array.

 Your function should take two arguments:

(1) an array which holds all of the reviews
(2) a number which is the desired index in the array.

and should return a string in the format `{name} gave the restaurant a {rating}, and their feedback was: {feedback}`
 * 
 * For example, if getReviewByIndex is invoked with reviews and the number 0
 * it will return `Daniela gave the restaurant a 5 star review and their feedback was: Beautiful atmosphere and wonderful vegan options!`
*/
function getReviewByIndex(array, index) {
    return array[index];
  }
  console.log(getReviewByIndex(reviews, 0));
  

/* Task 7: Write a function to get information about the most recent review called `getLastReview`

getLastReview should accept:
  (1) an array of objects 
  
and should return a string in the format `name} gave the restaurant a {rating}, and their feedback was: {feedback}`

For example, if getLastReview is invoked passing the reviews array it will return `Reyna gave the restaurant a 3.5 star review and their feedback was: "this place is chill with really cool people, great for getting work done on weekdays"`.
*/
function getLastReview(array) {
    return array.slice(-1)[0];
  } 
  console.log(getLastReview(reviews));


///////////////🍔☕️🍽 STRETCH🍔☕️🍽////////////////////

/** STRETCH 1: Write a function called `getReviewByRating` that returns an array containing all reviews in a certain range. Your function should accept: 

  (1) An array of objects
  (2) A rating

  and should return an array of objects. 

  For example, invoking getReviewByRating(reviews, 4) would return [{name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."}]
*/

// const getReviewRate2 = [];
// for(let i = 0; i < reviews.length; i++){
//   if(reviews[i].rating === 4 || reviews[i].rating === 4.5){
//     getReviewRate2.push(reviews[i]);
//   }
// }
// console.log(getReviewRate2); //line 131
// // the above works but conversion below doesn't

const getReviewRate = []; // this NEEDS to be outside to be defined - otherwise I think the {}s block it 
function getRateFinal(array, stars){
  for(let i = 0; i < array.length; i++){
    if(array[i].rating === stars || array[i].rating === stars + 0.5){
      getReviewRate.push(array[i]);
    }
  }
  return getReviewRate;
}
getRateFinal(reviews, 4);
console.log(getReviewRate);

/*
// console.log(getReviewRate);
// console.log(reviews:rating());
function getReviewByRating(array, key) {
if(array.key === 4){
return key[i];
}else{
console.log("No ratings with a value of " + key + " have been found.");
}
}
// arrayRating = [];
// for(let i = 0; i < array.length; i++){
// if(array[i].includes(rating)){
// arrayRating.push(array[i]);
// console.log(array[i]);
//   }
// }
// return arrayRating;
// }
console.log(getReviewByRating(reviews, 4));
*/
  
/** STRETCH 2: Write a function called 'getLongestReview' that returns an array containing all reviews longer than 15 words. 
  
Your function should accept: 

  (1) An array of objects

and should return an array of objects. 

  For example, invoking getLongReviews(reviews) would return [
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." }]
*/

const rfs3 = reviews[3].feedback.split(" "); // want
const rfs4 = reviews[4].feedback.split(" "); // want 
const rfs5 = reviews[5].feedback.split(" "); // want 
const rfs7 = reviews[7].feedback.split(" "); // want
console.log("This returns whether or not the above is written correctly for passing in later: " + Boolean(rfs3.length >= 15));
// ^^^ what I want v. what I get: undefined

// arr[i].feedback.split // matches index; 7
// arr[i].feedback.split("") // counts letters; 49

const getLongArrays = [];
// function getLongReviews(arr, minWordCount) {
  function getLongReviews(arr) {
  for(let i = 0; i < arr.length; i++){
    if(arr[i].feedback.length >= 15){
      getLongArrays = push.arr[i];
      // return arr[i]; // returns nothing!
    }
  }
  // return arr[i]; // returns nothing!
}
// getLongReviews(reviews); // returns nothing!
console.log(getLongReviews(reviews));

/** STRETCH 2: Write a function called 'getLongestReview' that returns an array containing all reviews longer than 15 words. 
  
Your function should accept: 
  (1) An array of objects
and should return an array of objects. 
  For example, invoking getLongReviews(reviews) would return [
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." }]
*/
function getLongReviews(/* code here */) {
  /* code here */
}


/* STRETCH 3:  This challenge is not related to the data above! 
Write a function called carMarker 
Your function should accept:
(1) a single odometer argument (a number) 
and return an object.
The returned object should have the following characteristics:
   it has an `odometer` property that contains the argument passed in.
   it has a `drive` method that takes a distance as its argument, and
       (1) causes the odometer in the object to be increased by the distance,
       (2) returns the updated value of the `odometer`.
*/


function carMaker(/* code here */) {
  /* code here */
  
}