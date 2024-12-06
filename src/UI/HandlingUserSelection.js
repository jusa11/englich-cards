import GetWord from '../Words/GetWord.js';
import ShowWord from './ShowWord.js';

class HandlingUserSelection {
  constructor() {
    this.buttons = document.querySelector('.buttons');
    this.knowBtn = document.querySelector('.know');
    this.dontKnow = document.querySelector('.dont-know');
    this.word = document.querySelector('.word');
  }
  userSelect(showWord) {
    this.knowBtn.addEventListener('click', () => {
      const currentWord = showWord._currentWord;

      GetWord.addKnownWord(currentWord);
      showWord.displayWord();
      // Если все слова выучены
      if (!GetWord.getRandomWord()) {
        this.showRestart(showWord);
      }
    });

    this.dontKnow.addEventListener('click', () => {
      return showWord.displayWord();
    });

    // показать перевод
    this.word.addEventListener('click', () => {
      console.log(showWord);
      showWord.translateWord(showWord._currentWord);
    });
  }

  showRestart(showWord) {
    this.knowBtn.classList.add('btn-hidden');
    this.dontKnow.classList.add('btn-hidden');
    GetWord.reset();

    const restartBtn = document.createElement('button');
    restartBtn.classList.add('restart-btn');
    restartBtn.textContent = 'Начать заново';
    this.buttons.appendChild(restartBtn);

    restartBtn.addEventListener('click', () => {
      this.restartApp(showWord, restartBtn);
    });
  }

  restartApp(showWord, restartBtn) {
    GetWord.reset();
    restartBtn.remove();

    // Показываем кнопки "Знаю" и "Не знаю"
    this.knowBtn.classList.remove('btn-hidden');
    this.dontKnow.classList.remove('btn-hidden');

    showWord.displayWord();
  }
}

export default HandlingUserSelection;
