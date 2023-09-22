const dataFurniking = [
  {
    id: 1,
    text: "Name",
    price: 17,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum explicabo vel quidem dolor eligendi mollitia.",
  },
];

const tabsParent = document.querySelector(".sec1__List");
const tabs = document.querySelectorAll(".hero-item");
const tabsContent = document.querySelectorAll(".tabcontent");
let itemHeroText = document.querySelector(".item-nameChange");
let textNameSlide = document.querySelector(".textName-Slide");
function hideTabContent() {
  // tabsContent.forEach((item) => {
  //   item.classList.add("DeActiveHeroItem");
  //   item.classList.remove("ActiveHeroItem");
  // });

  tabs.forEach((item) => {
    item.classList.remove("ActiveHeroItem");
  });
}

function showTabContent(i = 0) {
  // tabsContent[i].classList.add("ActiveHeroItem");
  // tabsContent[i].classList.remove("DeActiveHeroItem");
  tabs[i].classList.add("ActiveHeroItem");
  tabs[i].classList.remove("DeActiveHeroItem");
}

hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
  const target = event.target;
  if (target && target.classList.contains("hero-item")) {
    tabs.forEach((item, idx) => {
      if (target === item) {
        hideTabContent();
        showTabContent(idx);
        itemHeroText.innerHTML = item.textContent.toUpperCase(item);
        textNameSlide.innerHTML = item.textContent;
      }
    });
  }
});
const sec1RightItem3 = document.querySelector(".sec1Right__item3");
const tabsSec1Right = document.querySelector(".Right__items");
// function showTabItem(i=0){
// tabsSec1Right[i]
// }
// showTabItem()
// sec1RightItem3.addEventListener("click", (event) => {
//   const target = event.target;
//   console.log(target);
//   if (target && target.classList.contains("Right__items")) {
//     tabsSec1Right.forEach((item, idx) => {
//       if (target === item) {
//        showTabItem(idx)
//       }
//     });
//   }
// });

sec1RightItem3.addEventListener("click", (event) => {


});
