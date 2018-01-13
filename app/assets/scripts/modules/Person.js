class Person {
constructor(fullName, favColor) {
  this.name = fullName;
  this.favoriteColor = favColor;
}

greet() {
    console.log("Hello There, my name is " + this.name + " and my favorite Color is " + this.favoriteColor + "!");
  }
}

export default Person;
