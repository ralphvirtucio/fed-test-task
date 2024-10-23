

const tablist = document.querySelector('[role="tablist"]')
const tabs = tablist.querySelectorAll('[role="tab"]')
const panels = document.querySelectorAll('[id^="section"]')
const overlay = document.querySelector('.overlay');
const limitedOfferDialog = document.querySelector('.dialog-offer')
const closeBtn = document.querySelector('.btn__close')

let hours = 24
let minutes = 0
let seconds = 0


closeBtn.addEventListener('click', () => {
  overlay.classList.add("hidden")
  limitedOfferDialog.classList.add("hidden")
})


const closeDialog = () => {
 overlay.classList.add("hidden")
 limitedOfferDialog.classList.add("hidden")
}

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

let totalSeconds = 24 * 60 * 60; // 24 hours in seconds

const updateTime = () => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
   // Create arrays of digits
   const hoursArray = String(hours).padStart(2, '0').split('');
   const minutesArray = String(minutes).padStart(2, '0').split('');
   const secondsArray = String(seconds).padStart(2, '0').split('');
 
   // Update the displayed digits
   updateDigits('hours', hoursArray);
   updateDigits('minutes', minutesArray);
   updateDigits('seconds', secondsArray);

    // Decrement the total seconds
  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    clearInterval(timerInterval); // Stop the timer when it reaches zero
    return
  }
}

const updateDigits = (id, timeArray) => {
  const container = document.getElementById(id);
  const digits = container.querySelectorAll('span');

  digits.forEach((digit, index) => {
    if (digit.textContent !== timeArray[index]) {
      container.classList.add('flipping'); // Add flip animation

      setTimeout(() => {
        digit.textContent = timeArray[index]; // Update the digit after the animation
        container.classList.remove('flipping'); // Remove flip animation
      }, 500); // Duration of the flip animatio
    }
  });
}

// Set up the timer when the DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
  // setTimeout(closeDialog, 5000); // Auto close dialog after 5 seconds
  timerInterval = setInterval(updateTime, 1000); // Update the time every second
});n