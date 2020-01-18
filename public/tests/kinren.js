// ACCESSING THE DOM ELEMENTS 
const headline = document.querySelector("#article-summary > div.border.rounded.pt-3.pl-3.pr-3.mt-1.mb-2 > div");
const datePublished = document.querySelector("#article-summary > div.border.rounded.pt-3.pl-3.pr-3.mt-1.mb-2 > ul:nth-child(2) > li:nth-child(3)");
const citationScore = document.querySelector("#article-summary > div.border.rounded.pt-3.pl-3.pr-3.mt-1.mb-2 > ul:nth-child(4) > li:nth-child(4)");
const negativeIndicator = document.querySelector("#article-trust > div.row.row-eq-height > div:nth-child(1)");
const positiveIndicator = document.querySelector("#article-trust > div.row.row-eq-height > div:nth-child(2)");
const articleChart = document.querySelector("#article-sentiment > div:nth-child(6) > div:nth-child(2) > div > div > div.indicator__piechart.indicator__piechart--gauge > div > svg");
const sentenceChart = document.querySelector("#article-sentiment > div.row.mt-3 > div.col-sm-4");
