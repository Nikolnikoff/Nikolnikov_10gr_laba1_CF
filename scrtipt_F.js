document.addEventListener('DOMContentLoaded', () => {
let btn = document.querySelector('.del'),
    input = document.querySelectorAll('input'),
    a =  Array.from(input);

btn.addEventListener('click', (event) => {
  event.preventDefault;
    for (let i = 0; i < a.length; i++) {
      if (a[i].checked) {
        let DeleteTr = a[i].closest('tr');
        DeleteTr.parentElement.removeChild(DeleteTr);
      }
    }
  })
});


