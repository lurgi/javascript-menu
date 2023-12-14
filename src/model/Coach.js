const ERORR_MESSAGES = {
  nameValid: '[ERROR] 이름은 2~4자만 가능합니다.',
  foodValid: '[ERROR] 못 먹는 음식은 최대 2개만 가능합니다.',
};

class Coach {
  #name;

  #dontEatfoods;

  #eatMenus = [];

  constructor(name) {
    this.#nameValid(name);
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getMenu() {
    return [...this.#eatMenus];
  }

  #nameValid(name) {
    if (name.length < 2 || name.length > 4) {
      throw new Error(ERORR_MESSAGES.nameValid);
    }
  }

  setDontEat(foods) {
    this.#foodValid(foods);
    this.#dontEatfoods = foods;
  }

  #foodValid(foods) {
    if (foods.length > 2) {
      throw new Error(ERORR_MESSAGES.foodValid);
    }
  }

  setEatFood(menu) {
    if (this.#dontEatfoods && this.#dontEatfoods.includes(menu)) return false;
    if (this.#eatMenus.includes(menu)) return false;

    this.#eatMenus.push(menu);
    return true;
  }
}

export default Coach;
