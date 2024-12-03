import Word from './Word.js';
import MathRandom from '../utils/MathRandom.js';
import words from './data/words.js';

class GetWord {
  static knownWords = [];
  static accessibleWords = [];

  static getRandomWord() {
    this.accessibleWords = words.filter(
      (word) => !this.knownWords.includes(word.id)
    );

    if (this.accessibleWords.length === 0) {
      console.log('vse');
      return null;
    }
    console.log(this.accessibleWords);

    const randomWord =
      this.accessibleWords[
        MathRandom.generateRandomNum(this.accessibleWords.length)
      ];
    return randomWord;
  }

  static addKnownWord(word) {
    this.knownWords.push(word.id);
  }
}

export default GetWord;
