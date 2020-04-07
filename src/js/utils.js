const createElement = (template) => {
  const newElement = document.createElement('template');
  newElement.innerHTML = template;
  return newElement.content.children[0];
};

const switcher = (state, keysA, keysB) => {
  if (state) {
    keysA.forEach((key) => {
      if (key.classList.contains('off')) {
        key.classList.remove('off');
      }
    });
    keysB.forEach((key) => {
      if (!key.classList.contains('off')) {
        key.classList.add('off');
      }
    });
  } else {
    keysA.forEach((key) => {
      if (!key.classList.contains('off')) {
        key.classList.add('off');
      }
    });
    keysB.forEach((key) => {
      if (key.classList.contains('off')) {
        key.classList.remove('off');
      }
    });
  }
};  

const UTILS = {
  switcher,
};

export default UTILS;
