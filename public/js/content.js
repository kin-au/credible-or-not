const updateContent = event => {
  event.preventDefault();

  const url = document.getElementById("input-url").value;
  const glitchedContent = document.getElementById("iframe-content");

  const glitchedUrl = "https://glitched.news/article?url=" + url;
  glitchedContent.setAttribute("src", glitchedUrl);
};

const button = document.getElementById("button-get-info");
button.addEventListener("click", updateContent);
