/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive = () => {
    const budgetValue = this.budget > 100000000 ? true : false;
    return budgetValue;
  };
}

const newMovie = new Movie("Terminator", "Schwarzenegger", 6400000);
console.log(newMovie.title);
console.log(newMovie.director);
console.log(newMovie.budget);
console.log(newMovie.wasExpensive());
