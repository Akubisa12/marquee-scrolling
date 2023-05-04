const root = document.documentElement;
const marqueeElementDisplayed = getComputedStyle(root).getPropertyValue("--marquee-element-displayed");

const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements",marqueeContent.children.length);

for(let i=0;i<marqueeElementDisplayed;i++){
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}