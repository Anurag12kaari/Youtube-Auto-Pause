chrome.tabs.onActivated.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs[0].url.includes("youtube.com")) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
          const video = document.querySelector("video");
          if (video && !video.paused) {
            video.pause();
            console.log("Video paused because the tab is not active.");
          }
        },
      });
    }
  });
});
