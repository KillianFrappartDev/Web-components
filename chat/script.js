//CHAT
// ---> Variables
const submitBtn = document.querySelector(".toggler");
const chat = document.querySelector(".chat");
const chatBox = document.querySelector(".chat__messages");
const chatBtn = document.querySelector(".chat__input-btn");
const chatClose = document.querySelector(".chat-close");
const userInput = document.querySelector(".chat__input");
let userName;
let isBotactive = false;

// ---> Event Listeners
submitBtn.addEventListener("click", botInit);

chatBtn.addEventListener("click", () => {
  if (userInput.value.trim()) {
    const userMsg = userInput.value;
    const newMsg = document.createElement("div");
    newMsg.classList.add("chat__user-text");
    newMsg.innerHTML = userMsg;
    chatBox.appendChild(newMsg);
    userInput.value = "";
    setTimeout(() => {
      getJoke();
    }, 1000);
  }
});

chatClose.addEventListener("click", botClear);

// ---> Functions
function botInit() {
  if (isBotactive === false) {
    isBotactive = true;
    chat.classList.add("visible-chat");

    const welcomeMsg = document.createElement("div");
    welcomeMsg.classList.add("chat__robot-text");
    welcomeMsg.innerHTML = "Your message has been successfully sent ! ✔";
    setTimeout(() => {
      chatBox.appendChild(welcomeMsg);
    }, 500);

    const secondMsg = document.createElement("div");
    secondMsg.classList.add("chat__robot-text");
    secondMsg.innerHTML =
      "I'm a dummy robot, I can only tell jokes... Do you want to laugh ? ";
    setTimeout(() => {
      chatBox.appendChild(secondMsg);
    }, 1500);
  } else {
    alert("Inputs can not be empty, please type something first");
  }
}

function botClear() {
  chat.classList.remove("visible-chat");
  chatBox.innerHTML = "";
  isBotactive = false;
}

function getJoke() {
  const newJoke = document.createElement("div");
  newJoke.classList.add("chat__robot-text");

  fetch("https://joke3.p.rapidapi.com/v1/joke", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "joke3.p.rapidapi.com",
      "x-rapidapi-key": "86969e7dbdmsh8049a39fd70f765p1acae1jsn02f9c7197efc",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((jokeObj) => {
      newJoke.innerHTML = jokeObj.content;
      chatBox.appendChild(newJoke);
    })
    .catch((err) => {
      newJoke.innerHTML = "Something went wrong, try again...";
      chatBox.appendChild(newJoke);
    });
}
