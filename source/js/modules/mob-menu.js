import {FocusLock} from '../utils/focus-lock.js';
import {ScrollLock} from '../utils/scroll-lock.js';

const focusLock = new FocusLock();
const scrollLock = new ScrollLock();

const navMainToggle = document.querySelector('.header__menu-toggle');
const navMainBurger = document.querySelector('.header__menu-toggle-burger');
const navMainMenu = document.querySelector('.header-wrapper');
const header = document.querySelector('.header');
const navLinks = header.querySelectorAll('.header__link');

const onMenuEscKeydown = (evt) => {
  const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

  if (isEscKey) {
    evt.preventDefault();
    closeMenu();
  }
};

const onClickOutsideMenu = (evt) => {
  const target = evt.target;
  if (!target.closest('.header-wrapper')) {
    closeMenu();
  }
};

const closeMenu = () => {
  navMainBurger.classList.remove('header__menu-toggle-burger--close');
  navMainMenu.classList.add('header-wrapper--close');
  header.classList.add('header--close');
  navMainMenu.classList.remove('header-wrapper--open');
  header.classList.remove('header--open');
  focusLock.unlock();
  scrollLock.enableScrolling();
  document.removeEventListener('keydown', onMenuEscKeydown);
  document.removeEventListener('click', onClickOutsideMenu);
};

const openMenu = () => {
  navMainBurger.classList.add('header__menu-toggle-burger--close');
  navMainMenu.classList.remove('header-wrapper--close');
  header.classList.remove('header--close');
  navMainMenu.classList.add('header-wrapper--open');
  header.classList.add('header--open');
  focusLock.lock('.header');
  scrollLock.disableScrolling();
  document.addEventListener('keydown', onMenuEscKeydown);
  document.addEventListener('click', onClickOutsideMenu);
};


export const mobileMenu = () => {
  if (navMainMenu) {
    navMainToggle.classList.add('header__menu-toggle--JS-menu');
    navMainMenu.classList.add('header-wrapper--close');
    header.classList.add('header--close');

    navMainToggle.addEventListener('click', function () {
      if (navMainBurger.classList.contains('header__menu-toggle-burger--close')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMainBurger.classList.contains('header__menu-toggle-burger--close')) {
          closeMenu();
        }
      });
    });
  }
};
