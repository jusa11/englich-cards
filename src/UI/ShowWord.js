import GetWord from '../Words/GetWord.js';


class ShowWord {
  constructor() {
    this.textWord = document.querySelector('.word');
  }

  static currentWord() {
    const word = GetWord.getRandomWord();
    return word;
  }

  displayWord() {

    return (this.textWord.textContent = ShowWord.currentWord().eng);
  }

  static translateWord() {}
}

export default ShowWord;
