const tabs = document.querySelectorAll(".sec4__Name-item");
const tabsParent = document.querySelector(".sec4__Name-List");
const tabsContent = document.querySelectorAll(".sec4__Cards");
function hideTabContent() {
  tabsContent.forEach((item) => {
    item.classList.remove("DeActiveContent");
    item.classList.add("ActiveContent");
  });

  tabs.forEach((item, i) => {
    item.classList.add("DeActive-Text");
    item.classList.remove("Active-Text");
  });
}

function showTabContent(i = 0) {
  tabsContent.forEach((item) => {
    item.classList.remove("ActiveContent");
    item.classList.add("DeActiveContent");
  });

  tabs[i].classList.add("Active-Text");
  tabs[i].classList.remove("DeActive-Text");
  tabsContent[i].classList.add("ActiveContent");
  tabsContent[i].classList.remove("DeActiveContent");
}

hideTabContent();
showTabContent();

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    hideTabContent();
    showTabContent(index);
  });
});
