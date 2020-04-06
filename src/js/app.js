import DATA from './data';
import Row from './components/row';
import Component from './components/component';

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

  start() {
    this.createApp();
  }
}
