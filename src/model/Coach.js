const ERORR_MESSAGES = {
  nameValid: '[ERROR] 이름은 2~4자만 가능합니다.',
  foodValid: '[ERROR] 못 먹는 음식은 최대 2개만 가능합니다.',
};

class Coach {
  #name;

  #dontEatfoods;

  constructor(name) {
    this.#nameValid(name);
    this.#name = name;
  }

  getName() {
    return this.#name;
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
}

export default Coach;
