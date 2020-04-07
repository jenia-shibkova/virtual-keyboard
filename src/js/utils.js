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

const saveState = (state) => {
  if (Object.keys(localStorage).includes('lang-en')) {
    localStorage.clear();
    localStorage.setItem('lang-en', state);
  }
  localStorage.setItem('lang-en', state);
};

const UTILS = {
  switcher,
  saveState
};

export default UTILS;
