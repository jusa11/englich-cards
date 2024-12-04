import words from '../Words/data/words.js';
import GetWord from '../Words/GetWord.js';

class Stats {
  constructor() {
    this.totalCards = document.querySelector('.total-cards');
    this.knownCards = document.querySelector('.known-cards');
    this.remainingCards = document.querySelector('.remaining-cards');
  }

  displayStats() {
    this.totalCards.textContent = words.length;
    this.knownCards.textContent = GetWord.knownWords.length;
    this.remainingCards.textContent = words.length - GetWord.knownWords.length;
    return;
  }
}

export default Stats;
