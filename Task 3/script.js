/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const showUsersButton = document.querySelector("#btn");
const output = document.querySelector("#output");
const message = document.querySelector("#message");

const getUsers = async () => {
  const response = await fetch(ENDPOINT);
  const users = await response.json();
  return users;
};

showUsersButton.addEventListener("click", () => {
  getUsers().then((users) => {
    message.textContent = "";
    users.forEach((user) => {
      const card = document.createElement("div");
      const image = document.createElement("img");
      const login = document.createElement("p");
      card.className = "card-style";
      output.className = "output-style";
      image.src = user.avatar_url;
      login.textContent = user.login;

      card.append(image, login);
      output.append(card);
    });
  });
});
