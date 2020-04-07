import DATA from './data';
import Row from './components/row';
import Component from './components/component';
import UTILS from './utils';
import CONSTANTS from './constants';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      en: true,
      uppercase: false,
      result: '',
      pressed: new Set(),
      arr: []
    };
    this.template = `<div class="wrapper">
                      <textarea id="result" class="textarea" rows="5" cols="60"></textarea>
                      <div class="keyboard"></div>
                    </div>`;
  }

  getTemplate() {
    return this.template;
  }

  createApp() {
    const app = this.createElement(this.getTemplate());
    const appTemplate = document.createDocumentFragment();
    appTemplate.appendChild(app);
    const keyboard = appTemplate.querySelector('.keyboard');

    DATA.forEach((el) => {
      const row = new Row(el);
      keyboard.appendChild(row.createRow());
    });

    document.body.appendChild(appTemplate);
  }

  onClick({ target }) {
    const capsLockButton = document.querySelector('.CapsLock');
    const downKeys = document.querySelectorAll('.down');
    const upKeys = document.querySelectorAll('.up');

    const textarea = document.getElementById('result');

    const currentValue = textarea.value;
    const startCursorValue = textarea.selectionStart;
    const endCursorValue = textarea.selectionEnd;

    if (target.classList.contains('CapsLock')) {
      if (this.state.uppercase) { // switch capsLock state
        this.state.uppercase = false;
      } else this.state.uppercase = true;

      UTILS.switcher(this.state.uppercase, upKeys, downKeys);

      if (capsLockButton.classList.contains('key--active')) {
        capsLockButton.classList.remove('key--active');
      } else {
        capsLockButton.classList.add('key--active');
      }
    }

    if (target.classList.contains('down') || target.classList.contains('up')) {
      const char = target.innerText;
      let className = target.classList[0];
      textarea.focus();

      if (CONSTANTS.NOT_FOR_PRINT_BUTTONS.includes(className)) {
        return;
      }

      switch (className) {
        case 'Space':
          textarea.value = `${currentValue} `;
          this.state.result = textarea.value;
          break;
        case 'Backspace':
          if (startCursorValue !== this.state.result.length) {
            const subStr = currentValue.substr(startCursorValue - 1, 1);
            textarea.value = `${currentValue.replace(subStr, '')}`;
            this.state.result = textarea.value;
            textarea.setSelectionRange(startCursorValue - 1, startCursorValue - 1);
          }
          if (startCursorValue === this.state.result.length) {
            textarea.value = currentValue.replace(/.$/, '');
            this.state.result = textarea.value;
          }
          if (startCursorValue !== endCursorValue) {
            const subStr = currentValue.slice(startCursorValue, endCursorValue);
            textarea.value = `${currentValue.replace(subStr, '')}`;
            this.state.result = textarea.value;
            textarea.setSelectionRange(startCursorValue, startCursorValue);
          }
          break;
        case 'Enter':
          textarea.value = `${currentValue}\r\n`;
          this.state.result = textarea.value;
          break;
        case 'Tab':
          textarea.value = `${currentValue}  `;
          this.state.result = textarea.value;
          break;
        case 'Delete':
          if (startCursorValue === endCursorValue) {
            const subStr = currentValue.substr(startCursorValue, 1);
            textarea.value = `${currentValue.replace(subStr, '')}`;
            this.state.result = textarea.value;
            textarea.setSelectionRange(startCursorValue, startCursorValue);
          } else {
            const subStr = currentValue.slice(startCursorValue, endCursorValue);
            textarea.value = `${currentValue.replace(subStr, '')}`;
            this.state.result = textarea.value;
            textarea.setSelectionRange(startCursorValue, startCursorValue);
          }
          break;
        case 'ArrowLeft':
          if (startCursorValue === 1) {
            textarea.setSelectionRange(0, 0);
          }
          if (startCursorValue > 1) {
            textarea.setSelectionRange(startCursorValue - 1, startCursorValue - 1);
          }
          break;
        case 'ArrowRight':
          if (startCursorValue === this.state.result.length) {
            textarea.value = `${currentValue} `;
            this.state.result = textarea.value;
            textarea.setSelectionRange(startCursorValue + 1, startCursorValue + 1);
          }
          textarea.setSelectionRange(startCursorValue + 1, startCursorValue + 1);
          break;
        case 'notForPrint':
          textarea.value = `${currentValue}`;
          this.state.result = textarea.value;
          break;

        default:
          // ability to insert a character in the middle of a line
          if (this.state.result.length !== startCursorValue) {
            const subStrStart = currentValue.slice(0, startCursorValue);
            const subStrEnd = currentValue.slice(startCursorValue);
            textarea.value = `${subStrStart}${char}${subStrEnd}`;
            this.state.result = textarea.value;
            textarea.setSelectionRange(startCursorValue + 1, startCursorValue + 1);
          } else {
            textarea.value = currentValue + char;
            this.state.result = textarea.value;
          }
      }
    }
  }

  onMouseDown({ target }) {
    const element = document.querySelector(`.${target.classList[0]}`);
    const downKeys = document.querySelectorAll('.down');
    const upKeys = document.querySelectorAll('.up');
    const capsLockButton = document.querySelector('.CapsLock');

    if (!element) { // if null
      return;
    }

    if (element.classList.contains('ShiftLeft') || element.classList.contains('ShiftRight')) {
      if (capsLockButton.classList.contains('key--active')) {
        UTILS.switcher(this.state.uppercase = false, upKeys, downKeys);
      } else {
        UTILS.switcher(this.state.uppercase = true, upKeys, downKeys);
      }
    }

    if (element.classList.contains('key') && !element.classList.contains('CapsLock')) {
      element.classList.add('key--active');
    }
  }

  onMouseUp({ target }) {
    const element = document.querySelector(`.${target.classList[0]}`);
    const capsLockButton = document.querySelector('.CapsLock');
    const downKeys = document.querySelectorAll('.down');
    const upKeys = document.querySelectorAll('.up');

    if (!element) {
      return;
    }

    if (element.classList.contains('ShiftLeft') || element.classList.contains('ShiftRight')) {
      if (capsLockButton.classList.contains('key--active')) {
        UTILS.switcher(this.state.uppercase = true, upKeys, downKeys);
      } else {
        UTILS.switcher(this.state.uppercase = false, upKeys, downKeys);
      }
    }

    if (element.classList.contains('key') && !element.classList.contains('CapsLock') && element.classList.contains('key--active')) {
      element.classList.remove('key--active');
    }
  }

  onKeyDown(event) {
    const key = event.code;
    const { keyCode } = event;
    const textarea = document.getElementById('result');
    const currentValue = textarea.value;
    const startCursorValue = textarea.selectionStart;
    const ctrlButton = document.querySelector('.ControlLeft');
    const keyboard = document.querySelector('.keyboard');
    const capsLockButton = document.querySelector('.CapsLock');
    const enKeys = document.querySelectorAll('.en');
    const ruKeys = document.querySelectorAll('.ru');
    const downKeys = document.querySelectorAll('.down');
    const upKeys = document.querySelectorAll('.up');

    if (!CONSTANTS.NOT_FOR_PRESS_BUTTONS.includes(key)) {
      this.state.pressed.add(key);
    } else {
      return;
    }

    if (event.key === 'AltGraph') {
      ctrlButton.classList.remove('key--active');
    }

    const element = keyboard.querySelector(`.${key}`);
    textarea.focus();

    if (!element.classList.contains('CapsLock')) {
      if (keyCode === CONSTANTS.KEY_CODES.ALT && !this.state.pressed.has('ControlLeft')) {
        event.preventDefault();
        element.classList.add('key--active');
      } else {
        element.classList.add('key--active');
      }
    }

    // switch state
    if (this.state.pressed.has('ShiftLeft') && this.state.pressed.has('AltLeft')) {
      if (this.state.en) { // switch lang state
        this.state.en = false;
      } else {
        this.state.en = true;
      }

      UTILS.saveState(this.state.en);
      UTILS.switcher(this.state.en, enKeys, ruKeys);
    }

    if (keyCode === CONSTANTS.KEY_CODES.SHIFT && this.state.pressed.size === 1) {
      if (this.state.uppercase) {
        this.state.uppercase = false; // switch shift state
      } else {
        this.state.uppercase = true;
      }

      UTILS.switcher(this.state.uppercase, upKeys, downKeys);
    }

    if (keyCode === CONSTANTS.KEY_CODES.CAPS_LOCK) {
      if (this.state.uppercase) { // switch capsLock state
        this.state.uppercase = false;
      } else {
        this.state.uppercase = true;
      }

      UTILS.switcher(this.state.uppercase, upKeys, downKeys);

      if (capsLockButton.classList.contains('key--active')) {
        capsLockButton.classList.remove('key--active');
      } else {
        capsLockButton.classList.add('key--active');
      }
    }

    if (keyCode === CONSTANTS.KEY_CODES.TAB) {
      event.preventDefault();
      textarea.value = `${currentValue}  `;
      this.state.result = textarea.value;
    }

    if (keyCode === CONSTANTS.KEY_CODES.ARROW_LEFT) {
      if (startCursorValue === 1) {
        textarea.setSelectionRange(0, 0);
      }
      if (startCursorValue > 1) {
        textarea.setSelectionRange(startCursorValue - 1, startCursorValue - 1);
      }
    }

    if (keyCode === CONSTANTS.KEY_CODES.ARROW_RIGHT) {
      if (startCursorValue === this.state.result.length) {
        textarea.value = `${currentValue} `;
        this.state.result = textarea.value;
        textarea.setSelectionRange(startCursorValue + 1, startCursorValue + 1);
      }
      textarea.setSelectionRange(startCursorValue + 1, startCursorValue + 1);
    }

    if (keyCode === CONSTANTS.KEY_CODES.ARROW_UP) {
      event.preventDefault();
      textarea.value = `${currentValue}▲`;
      this.state.result = textarea.value;
    }

    if (keyCode === CONSTANTS.KEY_CODES.ARROW_DOWN) {
      textarea.value = `${currentValue}▼`;
      this.state.result = textarea.value;
    }

    this.state.result = textarea.value;
  }

  onKeyUp(event) {
    const key = event.code;
    const { keyCode } = event;
    const element = document.querySelector(`.${key}`);
    const capsLockButton = document.querySelector('.CapsLock');
    const downKeys = document.querySelectorAll('.down');
    const upKeys = document.querySelectorAll('.up');
    const textarea = document.getElementById('result');

    if (this.state.pressed.size === 0) {
      return;
    }

    if (!element) { // if null
      return;
    }

    if (element.classList.contains('key--active') && !element.classList.contains('CapsLock')) {
      element.classList.remove('key--active');
    }

    if (keyCode === CONSTANTS.KEY_CODES.SHIFT) { // switch shift state
      if (capsLockButton.classList.contains('key--active')) {
        this.state.uppercase = true;
        UTILS.switcher(this.state.uppercase, upKeys, downKeys);
      } else {
        this.state.uppercase = false;
        UTILS.switcher(this.state.uppercase, upKeys, downKeys);
      }
    }

    this.state.result = textarea.value;
    this.state.pressed.delete(event.code);
    textarea.focus();
  }

  static onMouseLeave() {
    const onMouseLeaveHandler = (event) => {
      const { target } = event;
      if (!target.classList.contains('key')) return;

      if (!target.classList.contains('CapsLock') && target.classList.contains('key--active')) {
        target.classList.remove('key--active');
      }
    };

    const keyButton = document.querySelectorAll('.key');
    keyButton.forEach((button) => {
      button.addEventListener('mouseleave', onMouseLeaveHandler);
    });
  }

  localStorageInit() {
    const saveLangValue = localStorage.getItem('lang-en');
    const enKeys = document.querySelectorAll('.en');
    const ruKeys = document.querySelectorAll('.ru');

    if (saveLangValue === 'true') { // switch lang state
      this.state.en = true;
    } else this.state.en = false;

    UTILS.switcher(this.state.en, enKeys, ruKeys);
  }


  start() {
    this.createApp();

    document.addEventListener('click', this.onClick.bind(this));
    document.addEventListener('mousedown', this.onMouseDown.bind(this));
    document.addEventListener('mouseup', this.onMouseUp.bind(this));
    document.addEventListener('keydown', this.onKeyDown.bind(this));
    document.addEventListener('keyup', this.onKeyUp.bind(this));
    App.onMouseLeave();

    // init localStorage data
    window.addEventListener('load', this.localStorageInit.bind(this), false);
  }
}
