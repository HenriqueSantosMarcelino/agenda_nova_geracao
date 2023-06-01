function handleResize() {
    var elements = document.querySelectorAll(".RESPONSIVIDADE");
  
    if (window.innerWidth < 960) {
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }
    } else {
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
      }
    }
  }
  
  window.addEventListener('resize', handleResize);
  handleResize();