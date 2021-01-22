function pageJump(name) {
  document.title = "TSIMS | " + name;
  if (name == "活动记录") {
    let scr = document.createElement("script");
    scr.src = chrome.runtime.getURL("better_cas_add_record_info.js");
    document.getElementsByClassName("page-container")[0].appendChild(scr);
  }
}

$(document).ready(function() {
  for (let tab of document.getElementsByClassName("dropdown")) {
    if (tab.id != "menu_trascript2") {
      if (tab.hasAttribute("style")) {
        tab.removeAttribute("style");
        tab.children[0].setAttribute("style", "color: lightgray;");
        for (let item of tab.children[1].children) {
          item.removeAttribute("style");
          item.children[0].setAttribute("style", "color: lightgray;");
        }
      }
      if (tab.children.length > 1)
        for (let item of tab.children[1].children) {
          item.onclick = function(event) {
            pageJump(event.path[1].children[0].innerText)
          };
          if (item.hasAttribute("style")) {
            item.removeAttribute("style");
            item.children[0].setAttribute("style", "color: lightgray;");
          }
        }
      else
        tab.onclick = function(event) {
          pageJump(event.path[1].children[0].innerText)
        };
    }
  }
})
