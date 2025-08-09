const observer = new MutationObserver(() => {
  const playerVolumeSessionStoreVolume = JSON.parse(
    JSON.parse(window.sessionStorage.getItem(playerVolumeLocalStorageKey)).data
  ).volume / 100
  setTimeout(() => {
  videoNode.volume = playerVolumeSessionStoreVolume
    syncVolumeSlider();
  }, 1500);
  return;
});

observer.observe(document.querySelector("#movie_player"), {
  childList: true,
});

// Sync the sliders position to the volume of the video
setTimeout(() => {
  syncVolumeSlider();
}, 1500); // This delay is needed since youtube alters the slider with some delay


volumeSlider.addEventListener(
  "input",
  (event) => {
    event.stopImmediatePropagation();
    const sliderTarget = event.target.value;
    const targetGain = computeGainFromVolume(sliderTarget);
    
    setSliderValue(sliderTarget);
    setSpeakerRipples(sliderTarget);
    updateVolume(targetGain);
  },
  { capture: true }
);
