import GetWord from '../Words/GetWord.js';
import ShowWord from './ShowWord.js';

class HandlingUserSelection {
  constructor() {
    this.buttons = document.querySelector('.buttons');
    this.knowBtn = document.querySelector('.know');
    this.dontKnow = document.querySelector('.dont-know');
  }
  userSelect(showWord) {
    this.knowBtn.addEventListener('click', () => {
      const currentWord = ShowWord.currentWord();
      GetWord.addKnownWord(currentWord);
      return showWord.displayWord();
    });

    this.dontKnow.addEventListener('click', () => {
      return showWord.displayWord();
    });
  }
}

export default HandlingUserSelection;
