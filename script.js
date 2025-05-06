function downloadVideo() {
  const url = document.getElementById("urlInput").value;
  const message = document.getElementById("message");

  if (!url) {
    message.innerText = "Please paste a video URL.";
    return;
  }

  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const newUrl = "https://ssyoutube.com/watch?v=" + url.split("v=")[1];
    window.open(newUrl, "_blank");
    message.innerText = "Opening download page...";
  } else if (url.includes("facebook.com")) {
    window.open("https://fdown.net", "_blank");
    message.innerText = "Redirecting to Facebook downloader...";
  } else if (url.includes("instagram.com")) {
    window.open("https://igram.io", "_blank");
    message.innerText = "Redirecting to Instagram downloader...";
  } else {
    message.innerText = "Unsupported URL. Please try YouTube, Facebook, or Instagram.";
  }
}
