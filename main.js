class ThemeSwitcher {
  constructor() {
    this.theme = 'LIGHT'
    this.switch = document.getElementById('switch')
    this.switch.addEventListener('click', this.toggleTheme.bind(this))
    this.addCardHoverEffect()
  }

  addCardHoverEffect() {
    
    getCards().forEach(card => {
      card.addEventListener('mouseover', onMouseOver.bind(this, card))
      card.addEventListener('mouseout', onMouseOut.bind(this, card))
    })

    function getCards() {
      return Array.from(
        document.querySelectorAll('.followers-list li a, .engagement-list li a')
      )
    }

    function onMouseOver(card) {
      this.theme === 'LIGHT'
        ? this.toggleClass(card, 'bg-light-card', 'bg-light-card-hover')
        : this.toggleClass(card, 'bg-dark-card', 'bg-dark-card-hover')
    }

    function onMouseOut(card) {
      this.theme === 'LIGHT'
        ? this.toggleClass(card, 'bg-light-card-hover', 'bg-light-card')
        : this.toggleClass(card, 'bg-dark-card-hover', 'bg-dark-card')
    }
  }

  toggleTheme(event) {
    event.preventDefault()
    this.toggleSwitchBackground()
    this.toggleSwitchBtnBackground()
    if (this.theme === 'LIGHT') {
      this.changeToDarkFont()
      this.changeToDarkBackground()
    } else {
      this.changeToLightFont()
      this.changeToLightBackground()
    }

    this.theme = this.theme === 'LIGHT' ? 'DARK' : 'LIGHT'
    this.addCardHoverEffect()
  }

  toggleClass(element, oldClassName, newClassName) {
    removeOldClass()
    addNewClass()

    function removeOldClass() {
      element.classList.remove(oldClassName)
    }
    function addNewClass() {
      element.classList.add(newClassName)
    }
  }

  toggleSwitchBackground() {
    this.theme === 'LIGHT'
      ? this.toggleClass(this.switch, 'bg-light-switch', 'bg-dark-switch')
      : this.toggleClass(this.switch, 'bg-dark-switch', 'bg-light-switch')
  }

  toggleSwitchBtnBackground() {
    this.theme === 'LIGHT'
      ? this.toggleClass(
          this.switch.firstElementChild,
          'switch-light-mode',
          'switch-dark-mode'
        )
      : this.toggleClass(
          this.switch.firstElementChild,
          'switch-dark-mode',
          'switch-light-mode'
        )
  }

  getPrimaryTexts() {
    return this.theme === 'LIGHT'
      ? Array.from(document.querySelectorAll('.text-primary-light'))
      : Array.from(document.querySelectorAll('.text-primary-dark'))
  }

  getSecondaryTexts() {
    return this.theme === 'LIGHT'
      ? Array.from(document.querySelectorAll('.text-secondary-light'))
      : Array.from(document.querySelectorAll('.text-secondary-dark'))
  }

  changeToDarkFont() {
    this.getPrimaryTexts().forEach(text => {
      this.toggleClass(text, 'text-primary-light', 'text-primary-dark')
    })

    this.getSecondaryTexts().forEach(text => {
      if (text.classList.contains('overview-today-text')) {
        this.toggleClass(text, 'text-secondary-light', 'text-primary-dark')
        return
      }
      this.toggleClass(text, 'text-secondary-light', 'text-secondary-dark')
    })
  }

  changeToDarkBackground() {
    this.toggleClass(
      document.querySelector('body'),
      'bg-light-body',
      'bg-dark-body'
    )
    this.toggleClass(
      document.querySelector('header'),
      'bg-light-header',
      'bg-dark-header'
    )
    Array.from(document.querySelectorAll('.bg-light-card')).forEach(element => {
      this.toggleClass(element, 'bg-light-card', 'bg-dark-card')
    })
  }

  changeToLightFont() {
    this.getPrimaryTexts().forEach(text => {
      if (text.classList.contains('overview-today-text')) {
        this.toggleClass(text, 'text-primary-dark', 'text-secondary-light')
        return
      }
      this.toggleClass(text, 'text-primary-dark', 'text-primary-light')
    })
    this.getSecondaryTexts().forEach(text => {
      this.toggleClass(text, 'text-secondary-dark', 'text-secondary-light')
    })
  }

  changeToLightBackground() {
    this.toggleClass(
      document.querySelector('body'),
      'bg-dark-body',
      'bg-light-body'
    )
    this.toggleClass(
      document.querySelector('header'),
      'bg-dark-header',
      'bg-light-header'
    )
    Array.from(document.querySelectorAll('.bg-dark-card')).forEach(element => {
      this.toggleClass(element, 'bg-dark-card', 'bg-light-card')
    })
  }
}

const themeSwitcher = new ThemeSwitcher()
