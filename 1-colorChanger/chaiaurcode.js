// In this problem we have to add an EventListener to each color blocks

const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    //e.target -> Returns the object to which event is dispatched (its target).
    if (e.target.id === 'grey') {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      document.body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      document.body.style.backgroundColor = e.target.id;
    }
  });
});
