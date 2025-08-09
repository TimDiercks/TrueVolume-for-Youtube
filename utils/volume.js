// Decible range and conversion factor
const minDb = -60;
const maxDb = 0;
const amplitudeDbFactor = 20;
const sliderToMediaVolumeFactor = 100;

const computeGainFromVolume = (volume) => {
  if (volume == 0) {
    return 0;
  }
  const db = minDb + (maxDb - minDb) * (volume / sliderToMediaVolumeFactor);
  return Math.pow(10, db / amplitudeDbFactor);
};

const computeVolumeFromGain = (gain) => {
  if (gain == 0) {
    return 0;
  }
  const db = Math.log10(gain) * amplitudeDbFactor;
  return (sliderToMediaVolumeFactor * (db - minDb)) / (maxDb - minDb);
};
