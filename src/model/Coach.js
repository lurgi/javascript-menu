class Coach {
  #name;

  constructor(name) {
    this.#nameValid(name);
    this.#name = name;
  }

  #nameValid(name) {
    // TODO 2~4자 확인
  }
}

export default Coach;
