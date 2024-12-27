// Auto Pause Logic
(function () {
  let inactivityTime = 10; // Time in seconds before pausing due to inactivity
  let lastActivityTime = Date.now();

  // Detect user activity
  const resetInactivityTimer = () => {
      lastActivityTime = Date.now();
  };

  // Check for inactivity and pause video
  const checkInactivity = () => {
      const video = document.querySelector("video");
      if (!video) return;

      const currentTime = Date.now();
      const elapsed = (currentTime - lastActivityTime) / 1000;

      if (elapsed >= inactivityTime && !video.paused) {
          video.pause();
          console.log("Video paused due to inactivity.");
      }
  };

  // Event Listeners for user activity
  document.addEventListener("mousemove", resetInactivityTimer);
  document.addEventListener("keypress", resetInactivityTimer);
  document.addEventListener("click", resetInactivityTimer);

  // Check inactivity every second
  setInterval(checkInactivity, 1000);
})();
