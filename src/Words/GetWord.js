import Word from './Word.js';
import MathRandom from '../utils/MathRandom.js';
import words from './data/words.js';

class GetWord {
  static knownWords = [];

  static getRandomWord() {
    const randomWord = words[MathRandom.generateRandomNum(words.length)];
    if (this.knownWords.length === words.length) {
      return null
    }

    return randomWord;
  }

  static addKnownWord(word) {
    this.knownWords.push(word.id);
  }
}

export default GetWord;
