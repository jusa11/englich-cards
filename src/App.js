import ShowWord from './UI/ShowWord.js';
import HandlingUserSelection from './UI/HandlingUserSelection.js';
import Stats from './UI/Stats.js';

class App {
  init() {
    const showWord = new ShowWord();
    const handlingUserSelection = new HandlingUserSelection();
    const stats = new Stats();

    window.addEventListener('load', () => {
      showWord.displayWord();
      handlingUserSelection.userSelect(showWord);
      stats.displayStats();
    });
  }
}

export default App;
