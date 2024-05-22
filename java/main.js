function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById("myDropdown").classList.toggle("show");
  }

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content 
function Functions() {
    
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.drop0btn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
*/
// src="https://code.jquery.com/jquery-3.5.1.slim.min.js";
// src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js";
// src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";


document.addEventListener('DOMContentLoaded', (event) => {
  let val = 1;

  const counterValue = document.getElementById('val');
  const btnIncrease = document.getElementById('inc');
  const btnDecrease = document.getElementById('dec');

  btnIncrease.addEventListener('click', () => {
      val++;
      updateCounterValue();
  });

  btnDecrease.addEventListener('click', () => {
      val--;
      updateCounterValue();
  });

  function updateCounterValue() {
      counterValue.textContent = val;
  }
});