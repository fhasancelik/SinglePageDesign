
const getElement = (selector) => {
    const element = document.querySelector(selector)
    if(element) return element
    throw Error('Class name check name ${selector} ')
  }
  const links = getElement('.menu-bar')
  const navBtnDOM = getElement('.mini-button')
  
  navBtnDOM.addEventListener('click',
  () => {
    links.classList.toggle('show-menu-links')
  }
    
  )
 