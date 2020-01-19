const updateContent = () => {
  const glitchedContent = document.getElementById("iframe-content");

  const glitchedUrl =
    "https://glitched.news/article?url=" + window.location.href;
  glitchedContent.setAttribute("src", glitchedUrl);
};
updateContent();
// const button = document.getElementById('button-get-info');
// button.addEventListener('click', updateContent);
