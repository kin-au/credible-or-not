let filledDiv;
const updateContent = () => {
  const iframe = document.createElement("iframe");
  document.body.parentNode.insertBefore(iframe, document.body);

  const glitchedUrl =
    "https://glitched.news/article?url=" +
    window.location.href +
    "#article-sentiment";

  iframe.setAttribute("src", glitchedUrl);
};
updateContent().addEventListener("load", () => console.log(filledDiv));
