import GetWord from '../Words/GetWord.js';
import Stats from './Stats.js';
import HandlingUserSelection from './HandlingUserSelection.js';

class ShowWord {
  constructor() {
    this.textWord = document.querySelector('.word');
  }

  static currentWord() {
    return GetWord.getRandomWord();
  }

  displayWord() {
    const stats = new Stats();
    stats.displayStats();

    if (!ShowWord.currentWord()) {
      const handlingUserSelection = new HandlingUserSelection();
      handlingUserSelection.buttons.remove();
      this.textWord.textContent = 'Вы выучили все слова';
      return;
    }

    return (this.textWord.textContent = ShowWord.currentWord().eng);
  }

  static translateWord() {}
}

export default ShowWord;
