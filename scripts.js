const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const color = document.querySelector(".color");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBackgroundColor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};

// const redColor = getBackgroundColor(pink);

// color.addEventListener("mouseenter", () => {
//   center.style.background = color;
// });

const colorChanger = (element, color)=>{
     element.addEventListener("mouseenter", () => {
        center.style.display ="block";
        center.style.background = color;
      });

      element.addEventListener("mouseleave",()=>{
        center.style.display = "none";
      });
};

colorChanger(red,getBackgroundColor(red));
colorChanger(cyan,getBackgroundColor(cyan));
colorChanger(orange,getBackgroundColor(orange));
colorChanger(violet,getBackgroundColor(violet));
colorChanger(pink,getBackgroundColor(pink));
