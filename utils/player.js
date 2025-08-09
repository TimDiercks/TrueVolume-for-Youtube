const videoNode = document.querySelector("video");

const playerVolumeLocalStorageKey = "yt-player-volume";

const playerVolumeExpiration = 30 * 24 * 60 * 60 * 1000; // 30 days in unix

const updateVolume = (gain) => {
  // update the videoNodes volume
  videoNode.volume = gain;

  // Update the localstore to match current volume
  const now = Date.now();
  const expirationDate = now + playerVolumeExpiration;
  const data = {
      volume: Math.round(gain * 100),
      muted: false,
    }
  const playerVolumeEntry = {
    data: JSON.stringify(data),
    creation: now,
  };
  window.localStorage.setItem(
    playerVolumeLocalStorageKey,
    JSON.stringify({...playerVolumeEntry, expiration: expirationDate})
  );
  window.sessionStorage.setItem(
    playerVolumeLocalStorageKey,
    JSON.stringify(playerVolumeEntry)
  );
};
