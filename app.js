"use strict";
let userInputs = [];
let numberOfQuestions = 29;

let questions = [
  " Year",
  " Person's Name",
  " Computer Model",
  " Famous Place",
  " Relationship Title",
  " Type of Bug",
  " Computer Part",
  " Profession",
  " Type of Book",
  " Verb (Past-tense)",
  "nother Very (Past-tense)",
  "n Adjective",
  " Pronoun",
  " Noun",
  " Verb",
  " Date (long-form ie January 1, 2000)",
  " Number",
  " Noun",
  " Famous Museum",
  " City, State",
  "n Adjective",
  " Physics Law",
  " Person's Name",
  " Number",
  " Type of Document",
  " Bad Thing",
  "n Old Machine",
  " Tool for Hunting",
  " Verb (infinitive-tense)"  
  ];
let questionsCounter = 0;

for (let i = numberOfQuestions; i >= 0; i--) {
  // console.log(i);
  const userInputs[i] = prompt(`Please Enter A${questions[i]}:`)
  questionsCounter++;
  // console.log(questionsCounter)
}


// let originalStory = `<h2>In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]} at ${userInputs[3]}. It was at this time that ${userInputs[4]} discovered a ${userInputs[5]} had gotten trapped in one of the ${userInputs[6]} and was causing an error. The ${userInputs[7]} removed the ${userInputs[5]} and taped it in their ${userInputs[8]}, identifying it as the "first actual case of bug being ${userInputs[9]}."</h2>  <h2>Word got out that the team had "${userInputs[10]}" the ${userInputs[2]}, hence leading to the phrase’s use in computing and ${userInputs[11]} culture. ${userInputs[1]} readily admitted that ${userInputs[12]} was not there when the incident occurred, but that didn’t stop it from becoming one of ${userInputs[1]}'s favorite ${userInputs[13]}s. ${userInputs[1]} ${userInputs[14]} of natural causes on January 1, ${userInputs[15]}, at the age of ${userInputs[16]}. For those interested, the offending ${userInputs[5]}'s ${userInputs[17]}, along with the original ${userInputs[8]}, can be seen at the ${userInputs[18]} in ${userInputs[19]}.</h2><h2>And while this is the "${userInputs[20]}" use case of finding a ${userInputs[2]} ${userInputs[5]}, the original use of the word dates further back in ${userInputs[21]} to ${userInputs[22]}, who in an ${userInputs[23]} ${userInputs[24]} used the term "${userInputs[5]}" to refer to a technological ${userInputs[25]}. While he worked on the quadruplex ${userInputs[26]}, he said it needed a "${userInputs[5]} ${userInputs[27]} to ${userInputs[28]} properly."</h2>`;
// console.log(originalStory);
