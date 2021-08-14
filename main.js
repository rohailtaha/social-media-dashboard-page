class ThemeSwitcher {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'LIGHT';
    document
      .getElementById('theme-btn')
      .addEventListener('click', this.toggleTheme.bind(this));
    this.applyTheme();
  }

  storeThemeLocally() {
    localStorage.setItem('theme', this.theme);
  }

  toggleTheme() {
    this.theme = this.theme === 'LIGHT' ? 'DARK' : 'LIGHT';
    localStorage.setItem('theme', this.theme);
    this.applyTheme();
  }

  applyTheme(event) {
    if (event) event.preventDefault();
    this.theme === 'LIGHT' ? this.applyLightTheme() : this.applyDarkTheme();
  }

  applyLightTheme() {
    this.toggleClass(
      document.getElementById('theme-provider'),
      'dark-theme',
      'light-theme'
    );
  }

  applyDarkTheme() {
    this.toggleClass(
      document.getElementById('theme-provider'),
      'light-theme',
      'dark-theme'
    );
  }

  toggleClass(element, oldClassName, newClassName) {
    removeOldClass();
    addNewClass();

    function removeOldClass() {
      element.classList.remove(oldClassName);
    }
    function addNewClass() {
      element.classList.add(newClassName);
    }
  }
}
new ThemeSwitcher();
