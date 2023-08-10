const btns = document.querySelectorAll(".child");
console.log(btns);

btns[1].style.display = "none";
btns[2].style.display = "none";

const theboxes = document.querySelector(".the-boxes2");

btns[0].addEventListener("click", () => {
  btns[0].style.display = "none";
  btns[1].style.display = "block";
  theboxes.style.backgroundColor = "#1971c2";
});

const parentOf = document.querySelector(".parentOf-2");

btns[1].addEventListener("click", () => {
  btns[1].style.display = "none";
  btns[2].style.display = "block";
  if (parentOf.classList.contains("hidden")) {
    parentOf.classList.remove("hidden");
    btns[2].style.display = "block";
    btns[3].style.display = "block";
    btns[4].style.display = "block";
  }
});

const classOfIphone = document.querySelector(".classOf-Iphone14");

btns[2].addEventListener("click", () => {
  if (classOfIphone.classList.contains("hidden")) {
    classOfIphone.classList.remove("hidden");
    btns[2].style.display = "none";
    btns[3].style.display = "none";
    btns[4].style.display = "none";
  }
});

const theboxes3 = document.querySelector(".the-boxes3");
const buttonihpneplus = document.querySelector(".button-ihpne14-pluses");

btns[3].addEventListener("click", () => {
  if (buttonihpneplus.classList.contains("hidden")) {
    buttonihpneplus.classList.remove("hidden");
    btns[2].style.display = "none";
    btns[3].style.display = "none";
    btns[4].style.display = "none";
    // theboxes3.style.backgroundColor = "#1971c2"; later
  }
});

// the end of the fist part

// the GB Buttons starts here
const buttoniphone14 = document.querySelectorAll(".button-iphone14");
const buttoniphone14plusinformation = document.querySelectorAll(
  ".button-iphone14-plus-information"
);

const parentofimgbox = document.querySelector(".parent-of-imgbox");
buttoniphone14[0].addEventListener("click", () => {
  buttoniphone14plusinformation[0].classList.remove("hidden");
  buttoniphone14plusinformation[1].classList.remove("hidden");
  buttoniphone14plusinformation[2].classList.remove("hidden");
  buttoniphone14plusinformation[3].classList.remove("hidden");
  parentofimgbox.classList.remove("hidden");
  buttoniphone14[1].style.display = "none";
  buttoniphone14[2].style.display = "none";
  buttoniphone14[0].style.display = "none";
  theboxes3.style.backgroundColor = "#1971c2";
});

buttoniphone14[1].addEventListener("click", () => {
  buttoniphone14[1].style.display = "none";
  buttoniphone14[2].style.display = "none";
  buttoniphone14[0].style.display = "none";
  theboxes3.style.backgroundColor = "#1971c2";
});

buttoniphone14[2].addEventListener("click", () => {
  buttoniphone14[1].style.display = "none";
  buttoniphone14[2].style.display = "none";
  buttoniphone14[0].style.display = "none";
  theboxes3.style.backgroundColor = "#1971c2";
});

// const expandButton = document.querySelectorAll('.button-iphone14-plus-information');
// const list = document.querySelectorAll('.list');

// let isOpen = false;

// expandButton[0].addEventListener('click', function() {
//   isOpen = !isOpen;

//   list[0].classList.toggle('expand');
//   Array.from(list[0].children).forEach((li, index) => {
//     setTimeout(() => {
//       li.style.opacity = isOpen ? '1' : '0';
//     }, index * 100);
//   });
// });

// expandButton[1].addEventListener('click', function() {
//   isOpen = !isOpen;

//   list[1].classList.toggle('expand');
//   Array.from(list[1].children).forEach((li, index) => {
//     setTimeout(() => {
//       li.style.opacity = isOpen ? '1' : '0';
//     }, index * 100);
//   });
// });

 const expandButtons = document.querySelectorAll('.button-iphone14-plus-information');
 const lists = document.querySelectorAll('.list');

expandButtons.forEach((button, index) => {
  let isOpen = false;
  console.log(expandButtons);

  button.addEventListener("click", function () {
    isOpen = !isOpen;

    lists[index].classList.toggle("expand");
    lists[index].style.maxHeight = isOpen
      ? lists[index].scrollHeight + "px"
      : "0";

    Array.from(lists[index].children).forEach((li, liIndex) => {
      li.style.opacity = isOpen ? "1" : "0";
    });
  });
});



//  const topofparent = document.querySelector(".topof-parent");

//  topofparent.addEventListener("click", () => {

//    buttoniphone14plusinformation.classList.toggle("main-nav");

//  })
