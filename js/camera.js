function hasGetUserMedia() {
  return !!(navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia);
}

if (hasGetUserMedia()) {
  // Good to go!
  console.log("good to go");
} else {
  console.log("error");
  alert('getUserMedia() is not supported by your browser');
}