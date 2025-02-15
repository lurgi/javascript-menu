import Coach from './model/Coach';
import { randomFood, randomPickCategory } from './utils';
import InputView from './view/InputView';
import OutputView from './view/OutputView';

class App {
  #coachs = [];

  #menuCategorys = [];

  async play() {
    OutputView.printPlayStart();
    await this.handleCoach();
    await this.handleDontEatFood();
    this.handleEatFood();
    this.handleResults();
  }

  async handleCoach() {
    const NAMES = await InputView.readCoachName();
    this.#validName(NAMES);
    NAMES.forEach((name) => {
      const COACH = new Coach(name);
      this.#coachs.push(COACH);
    });
  }

  #validName(names) {
    if (names.length !== new Set(names).size) {
      throw new Error('[ERROR]');
    }
    names.forEach((name) => {
      if (!name) {
        throw new Error('[ERROR]');
      }
    });
  }

  async handleDontEatFood() {
    for (const coach of this.#coachs) {
      const FOODS = await InputView.readDontEat(coach.getName());
      coach.setDontEat(FOODS);
    }
  }

  handleEatFood() {
    while (this.#menuCategorys.length < 5) {
      const CATEGORY = this.#pickNotDuplicateCategory();
      this.#menuCategorys.push(CATEGORY);
    }
    this.#coachs.forEach((coach) => {
      this.loofRandomFood(coach, this.#menuCategorys);
    });
  }

  #pickNotDuplicateCategory() {
    const CATEGORY = randomPickCategory();
    let cnt = 0;
    this.#menuCategorys.forEach((category) => {
      if (CATEGORY === category) cnt += 1;
    });

    if (cnt > 1) {
      return this.#pickNotDuplicateCategory();
    }
    return CATEGORY;
  }

  loofRandomFood(coach, categorys) {
    categorys.forEach((category) => {
      this.#setRandomFood(coach, category);
    });
  }

  #setRandomFood(coach, category) {
    while (true) {
      const MENU = randomFood(category);
      console.log(MENU);
      const OK = coach.setEatFood(MENU);
      if (OK) break;
    }
  }

  handleResults() {
    OutputView.printResultTitle(this.#menuCategorys);
    this.#coachs.forEach((coach) => {
      const NAME = coach.getName();
      const MENUS = coach.getMenu();
      OutputView.printResults(NAME, MENUS);
    });
    OutputView.printResultEnd();
  }
}

export default App;
