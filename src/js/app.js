import DATA from './data';
import Row from './components/row';
import Component from './components/component';
import UTILS from './utils';

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
  }

  getTemplate() {
    return `<div class="wrapper">
              <textarea id="result" class="textarea" rows="5" cols="60"></textarea>
              <div class="keyboard"></div>
            </div>`;
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

    const enKeys = document.querySelectorAll('.en');
    const ruKeys = document.querySelectorAll('.ru');

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
  }

  start() {
    this.createApp();
    const keyboard = document.querySelector('.keyboard');
    
    keyboard.addEventListener('click', this.onClick.bind(this));
  }
}
