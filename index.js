

const tablist = document.querySelector('[role="tablist"]')
const tabs = tablist.querySelectorAll('[role="tab"]')
const panels = document.querySelectorAll('[id^="section"]')

const switchTab = (oldTab, newTab) => {
  newTab.focus();
  newTab.removeAttribute('tabindex');

  newTab.setAttribute('aria-selected', 'true');
  oldTab.removeAttribute('aria-selected');
  oldTab.setAttribute('tabindex', '-1');

  const newIndex = Array.prototype.indexOf.call(tabs, newTab);
  const oldIndex = Array.prototype.indexOf.call(tabs, oldTab);

  panels[oldIndex].classList.add('card--hidden')
  panels[newIndex].classList.remove('card--hidden')
}


tabs.forEach((tab, i) => {

  // For user click
  tab.addEventListener('click', (e) => {
    e.preventDefault();

    let currentTab = tablist.querySelector('[aria-selected]');

    if(e.currentTarget !== currentTab) {
      switchTab(currentTab, e.currentTarget);
    }
  })

  // For user keyboard
  tab.addEventListener('keydown', e => {
    let index = Array.prototype.indexOf.call(tabs, e.currentTarget);

    let dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;

    if(dir !== null) {
      e.preventDefault();

      dir === 'down' ? panels[i].focus() : tabs[dir] ? switchTab(e.currentTarget, tabs[dir]) : void 0;
    }
  })

})