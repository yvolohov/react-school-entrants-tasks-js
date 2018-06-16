class Emitter {

  /**
   * Создает экземпляр класса Emitter.
   * @memberof Emitter
   */
  constructor() {
    this.events = {};
  }

  /**
   * связывает обработчик с событием
   *
   * @param {String} event - событие
   * @param {Function} handler - обработчик
   * @memberof Emitter
   */
  on(event, handler) {
    if (event in this.events) {
      this.events[event].push(handler);
    }
    else {
      this.events[event] = [handler];
    }
  }

  /**
   * Генерирует событие -- вызывает все обработчики, связанные с событием и
   *                       передает им аргумент data
   *
   * @param {String} event
   * @param {*} data
   * @memberof Emitter
   */
  emit(event, data) {
    if (!(event in this.events)) {
      return;
    }

    let handlers = this.events[event];

    for (let idx = 0; idx < handlers.length; idx++) {
      let currentHandler = handlers[idx];
      currentHandler(data);
    }
  }
}

export default Emitter;
