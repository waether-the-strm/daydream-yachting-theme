'use strict';

const ddyPopup = document.querySelector('#ddy-newsletter-popup');

if (ddyPopup) {

    const openBtn = document.getElementById('open');
    const closeBtn = document.getElementById('close');
    const newsContainer = document.getElementById('news');
    const disablePopupCheckbox = document.querySelector('#disablePopup')
    
    const isPopupEnabledLSKey = 'isPopupEnabled';
    
    const isFirstVisit = !localStorage[isPopupEnabledLSKey]
    
    const isPopupEnabled = isFirstVisit || JSON.parse(localStorage[isPopupEnabledLSKey])
    
    disablePopupCheckbox.checked = !isPopupEnabled;
    
    if (isPopupEnabled) {
        setTimeout(showPopup, 5000);
    }
    
    openBtn.addEventListener('click', showPopup);
    closeBtn.addEventListener('click', hidePopup);
    disablePopupCheckbox.addEventListener('click', toggleAutoPopup);
    
    function showPopup() {
      newsContainer.classList.add('show');
      openBtn.classList.add('hidden');
    }
    
    function hidePopup() {
      newsContainer.classList.remove('show');
      openBtn.classList.remove('hidden');
    }
    
    function toggleAutoPopup() {
        localStorage.setItem(isPopupEnabledLSKey, !disablePopupCheckbox.checked)
    }    
}
