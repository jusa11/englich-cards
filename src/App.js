import ShowWord from './UI/ShowWord.js';
import HandlingUserSelection from './UI/HandlingUserSelection.js';

class App {
  init() {
    const showWord = new ShowWord();
    const handlingUserSelection = new HandlingUserSelection();

    window.addEventListener('load', () => {
      showWord.displayWord();
      handlingUserSelection.userSelect(showWord);
    });
  }
}

export default App;
