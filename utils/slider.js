const volumeSlider = document.querySelector("input.ytp-input-slider");

const setSliderValue = (value) => {
  volumeSlider.style = `--yt-slider-shape-gradient-percent: ${value}%;`;
  volumeSlider.value = value;
};

const syncVolumeSlider = () => {
  const videoGain = videoNode.volume;
  const volume = computeVolumeFromGain(videoGain);
  setSpeakerRipples(volume);
  setSliderValue(volume);
};


