function solve() {
  var inputText = document.querySelector("#input").textContent;
  var outputDiv = document.querySelector("#output");
  var textArrayBySentences = inputText.split(".");
  var paragraph = document.createElement("p");

  for (let i = 0; i < textArrayBySentences.length; i++) {
    const sentence = textArrayBySentences[i];

    if (textArrayBySentences[i].length >= 1) {
      if (paragraph.textContent.split(".").length <= 3){
        paragraph.textContent += sentence + ".";
      } else {
        outputDiv.appendChild(paragraph);
        paragraph = document.createElement("p");
        paragraph.textContent += sentence + ".";
      }

    } else { 
      continue; 
    }
  }

  if (paragraph.textContent.trim !== "") {
    outputDiv.appendChild(paragraph);
  }

}

// In this problem, you should create a functionality which formats the given 
// text into paragraphs.
// When the [Format] button is clicked, you need to format the text inside the 
// paragraph with an id="input". The formatting is done as follows:
// You need to create a new paragraph element which holds no more than 3 sentences 
// from the given input.
// If the given input contains less or 3 sentences, you need to create only 1 
// paragraph, fill it with these sentences and append this paragraph to the div 
// with an id="output". 
// Otherwise, when you have more than 3 sentences in that input paragraph, you 
// need to create enough paragraphs to get all sentences from the input text.
// Just remember to restrict the sentences in each paragraph to 3.
// Example:
// If the input paragraph contains 2 sentences, you need to create only 1 paragraph 
// with these 2 sentences
// If the input paragraph contains 7 sentences, you need to create 3 paragraphs
// - The first paragraph must contain the first 3 sentences
// - The second paragraph must contain the other three sentences of the whole text
// - The third paragraph will contain only the last sentence 
// To find out how many sentences there are in the text, simply split the whole text 
// by '.' Also, every sentence must have at least 1 character.