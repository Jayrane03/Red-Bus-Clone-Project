
  window.onscroll = function() {myFunction()};
  
  var navlist = document.getElementById("heades");
  var sticky = navlist.offsetTop;
  
  /* Function to stick the nav bar */
  function myFunction() {
    if(window.pageYOffset >= sticky) {
      navlist.classList.add("sticky")
    }
    else {
      navlist.classList.remove("sticky");
    }
  }


  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId)
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
      })
    }
  
  
  }
  showMenu('nav-toogle', 'nav-menu')
  