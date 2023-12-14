import Coach from './model/Coach';
import { randomFood, randomPickCategory } from './utils';
import InputView from './view/InputView';

class App {
  #coachs = [];

  async play() {
    await this.handleCoach();
    await this.handleDontEatFood();
    // 각 코치별로 메뉴를 할당한다
    this.handleEatFood();
    // 메뉴 추천 결과를 출력한다.
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
    this.#coachs.forEach(async (coach) => {
      const FOODS = await InputView.readDontEat(coach.getName());
      coach.setDontEat(FOODS);
    });
  }

  handleEatFood() {
    // TODO 코치에 음식 할당.
    this.#coachs.forEach((coach) => {
      const CATEGORY = randomPickCategory();
      this.loofRandomFood(coach, CATEGORY);
    });
  }

  loofRandomFood(coach, category) {
    let isContinue = true;
    while (isContinue) {
      const MENU = randomFood(category);
      const OK = coach.setEatFood(MENU, category);
      isContinue = !OK;
    }
  }
}

export default App;
