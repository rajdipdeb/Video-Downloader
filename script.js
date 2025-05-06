function downloadVideo() {
  const url = document.getElementById("videoURL").value;
  if (url) {
    const youtubeID = url.split("v=")[1];  // Extract YouTube video ID
    window.open("https://ssyoutube.com/watch?v=" + encodeURIComponent(youtubeID));  // Redirect to download page
  } else {
    alert("Please enter a video URL.");
  }
}
