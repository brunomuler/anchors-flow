require("normalize.css/normalize.css");
require("./styles/index.scss");

document.addEventListener("DOMContentLoaded", () => {
  //   const pluginsTriggerElement = document.getElementById("plugins-trigger");
  //   const pluginsElement = document.getElementById("plugins");

  //   const pluginsVisibleClass = "splash-overview-plugins__list--visible";

  //   pluginsTriggerElement.onclick = () => {
  //     pluginsElement.classList.toggle(pluginsVisibleClass);
  //   };

  //Add click event to the select list component for testing purposes
  let $selectListItems = document.getElementsByClassName("select-list__item");

  for (let i = 0; $selectListItems[i]; i++) {
    $selectListItems[i].onclick = () => {
      $selectListItems[i].classList.toggle("is-selected");
    };
  }
});
