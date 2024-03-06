// Read the state from storage and set the initial visibility
chrome.storage.sync.get("hideRecommendations", function (data) {
  const hideRecommendations = data.hideRecommendations || false;
  document.querySelectorAll("#secondary").forEach(function (element) {
    element.style.display = hideRecommendations ? "none" : "block";
  });
});

// Listen for messages from the extension popup
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "toggleRecommendations") {
    let hideRecommendations = false;
    document.querySelectorAll("#secondary").forEach(function (element) {
      element.style.display =
        element.style.display === "none" ? "block" : "none";
      hideRecommendations =
        hideRecommendations || element.style.display === "none";
    });
    document.querySelectorAll("#contents").forEach(function (element) {
      element.style.display =
        element.style.display === "none" ? "block" : "none";
    });

    // Save the hide/show state to storage
    chrome.storage.sync.set({ hideRecommendations });
  }
});

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   if (message.action === "toggleRecommendations") {
//     let secondaryFeed = document.querySelector("#secondary");
//     let mainFeed = document.querySelector("#contents");
//     let hideRecommendations = false;
//     secondaryFeed.style.display =
//       secondaryFeed.style.display === "none" ? "block" : "none";
//     mainFeed.style.display =
//       mainFeed.style.display === "none" ? "block" : "none";
//     if (mainFeed.style.display === "none") {
//       hideRecommendations = !hideRecommendations;
//     }
//   }
// });
