import ReadText from "./readtext";
import Sentence from "./sentence";
const PROMOT:string = "Please enter paragraph!";

(async function(){
  while (true) {
    console.log(PROMOT);
    let userInput:string = await ReadText.read();
    let sentence = new Sentence(userInput);
    console.log(sentence.validate())
  }
})()