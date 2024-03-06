document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#mybtn").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "toggleRecommendations" });
    });
  });
});

// async function cleanSecondary() {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: () => {
//       console.log("Script injected successfully");
//       document.getElementById("secondary").style.backgroundColor = "red";
//       document.querySelector(".ytd-watch-flexy").style.backgroundColor = "red";
//       document.body.style.backgroundColor = "blue";
//       alert("Hey it works");
//     },
//   });
// }
// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelector("#mybtn").addEventListener("click", cleanSecondary);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   // Load the saved flag from storage
//   chrome.storage.sync.get("hideElement", function (data) {
//     if (data.hideElement) {
//       chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         chrome.scripting.executeScript({
//           target: { tabId: tabs[0].id },
//           function: () => {
//             document.getElementById("secondary").style.display = "none";
//           },
//         });
//       });
//     }
//   });

//   document.querySelector("#mybtn").addEventListener("click", function () {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       chrome.scripting.executeScript({
//         target: { tabId: tabs[0].id },
//         function: () => {
//           document.getElementById("secondary").style.display = "none";
//           // Save the flag to storage
//           chrome.storage.sync.set({ hideElement: true });
//         },
//       });
//     });
//   });
// });
