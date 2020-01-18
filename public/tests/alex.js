const updateUrl = event => {
  event.preventDefault();
  const url = document.getElementById("urlField").value;

  const glitchedContent = document.getElementById("glitchedContent");

  const newUrl = "https://glitched.news/article?url=" + url;
  console.log({ newUrl });
  glitchedContent.setAttribute("src", newUrl);
};

const button = document.querySelector("button");
button.addEventListener("click", updateUrl);
