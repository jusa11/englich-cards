import GetWord from '../Words/GetWord.js';
import Stats from './Stats.js';
import HandlingUserSelection from './HandlingUserSelection.js';

class ShowWord {
  constructor() {
    this.textWord = document.querySelector('.word');
    this._currentWord = null;
  }

  displayWord() {
    const stats = new Stats();
    stats.displayStats();

    this._currentWord = GetWord.getRandomWord();

    if (this._currentWord) {
      this.textWord.textContent = this._currentWord.eng;
      this.textWord.setAttribute('data-lang', 'eng');
    } else {
      this.textWord.textContent = 'Вы выучили все слова';
      return null;
    }
  }

  translateWord() {
    if (this.textWord.getAttribute('data-lang') === 'eng') {
      this.textWord.textContent = this._currentWord.rus;
      this.textWord.setAttribute('data-lang', 'rus');
    } else {
      this.textWord.textContent = this._currentWord.eng;
      this.textWord.setAttribute('data-lang', 'eng');
    }
  }
}

export default ShowWord;
