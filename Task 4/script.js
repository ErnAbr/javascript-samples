/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
const output = document.querySelector("#output");

const carData = async () => {
  const response = await fetch("./cars.json");
  const cars = await response.json();
  return cars;
};

const printCars = async () => {
  const cars = await carData();

  cars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.className = "card-style";
    const carBrand = document.createElement("h2");
    const cardList = document.createElement("ul");

    carBrand.textContent = car.brand;
    carCard.append(carBrand, cardList);
    output.append(carCard);

    car.models.forEach((model) => {
      console.log(model);
      const carListItem = document.createElement("li");
      carListItem.textContent = model;
      cardList.append(carListItem);
    });
  });
};

printCars();
