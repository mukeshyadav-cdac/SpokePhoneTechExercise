import * as readline from 'readline';

export default class ReadText {

   static read() : Promise<string> {
    let rl = readline.createInterface({
      input: process.stdin,
    });

    return new Promise(resolve => rl.question('', (userInput:string) => {
        rl.close();
        resolve(userInput);
    }))
   }
}
