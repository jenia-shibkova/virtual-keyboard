export default class Component {
  constructor() {
  }
  
  createElement() {
    const template = this.getTemplate();
    const newElement = document.createElement('template');
    newElement.innerHTML = template;
    return newElement.content.children[0];
  };
}
