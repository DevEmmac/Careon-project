const dropdownBtn = document.querySelectorAll('.dropdown-btn');
dropdownBtn.forEach(button => {
    button.addEventListener('click', () => {
      const dropdown = button.parentElement;
      dropdown.classList.toggle('open');
     
      dropdownBtn.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
  
//   const items = document.querySelectorAll('.menu-item');
// items.forEach(item => {
//   item.addEventListener('click', () => {
//     // Remove active class from all
//     items.forEach(btn => btn.classList.remove('active'));
//     // Add active class to clicked one
//     item.classList.add('active');
//   });
// });