let x;
// Create the necessary button and input elements using JS
choice.appendChild(
  Object.assign(document.createElement('input'), {
    id: 'numberOfGrids',
    placeholder: 'Enter the no.of rows',
    type: 'number',
  })
);
choice.appendChild(
  Object.assign(document.createElement('button'), {
    id: 'gridbutton',
    value: 0,
    textContent: 'Click here to generate the grid',
  })
);
choice.appendChild(
  Object.assign(document.createElement('button'), {
    id: 'hide_button',
    textContent: 'Refresh',
  })
);
let css = document.querySelector(':root');

function gridCreate(e) {
  // get the value of x from the input the user has given. This number is the number of grids we generate in x & y axis
  x = gridValue.value;
  switch (true) {
    case x > 75:
      alert(
        'Please enter a Smaller number. This is too much for the system to handle'
      );
      return;
    case x <= 0:
      alert('Please enter a number greater than zero');
      return;
  }

  let box;
  // loop over the number of grids the user wants and create separate hor & ver divs to host the grid pattern
  for (let i = 0; i < x; i++) {
    box = document.createElement('div');
    box.className = 'box1';
    const root = document.documentElement;
    const currentWidth =
      getComputedStyle(root).getPropertyValue('--width-container');
    box.style.width = currentWidth / x;
    console.log('creating vertical div ie; a column');
    main_container.appendChild(box);
    for (let j = 0; j < x; j++) {
      const box2 = document.createElement('div');
      box2.className = 'box2';
      box2.dataset.value = 0;
      const currentdim =
        getComputedStyle(root).getPropertyValue('--height-container');
      box2.style.height = currentdim / x;
      box2.style.maxWidth = currentdim / x;
      console.log('creating horizontal div');
      box.appendChild(box2);
    }
  }

  let element = document.getElementsByClassName('box1');
  if (element !== null) {
    document.getElementById('gridbutton').id = 'hidden_button';
    document.getElementById('numberOfGrids').id = 'hidden_button';
    document.getElementById('hide_button').id = 'refresh_button';
  }
  const gridBox = document.querySelectorAll('.box2');
  gridBox.forEach((gridb) => {
    gridb.addEventListener('mouseover', () => {
      // console.log('changing colour');
      gridb.className = 'box2_change';
    });
  });
  gridBox.forEach((gridb) => {
    gridb.addEventListener('mouseout', () => {
      // console.log('changing to normal');
      gridb.className = 'box2';
    });
  });
}

function refreshPage() {
  console.log('refreshing');
  location.reload();
}

const element2 = document.getElementsByClassName('box2');
if (element2 !== null) {
  console.log('box2 is present');
  let cnt = parseInt(box2.dataset.value);
  cnt++;
  box2.dataset.value = cnt;
  console.log(box2.dataset.value);
}
// box2.addEventListener('mouseover', count);
// function count() {
//   {
//   }
// }

const gridCreateButton = document.querySelector('#gridbutton');
const refreshbutton = document.querySelector('#hide_button');
const gridValue = document.querySelector('#numberOfGrids');

gridCreateButton.addEventListener('click', gridCreate);
// gridCreateButton.addEventListener('mouseover', count);
gridValue.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    console.log('Enter key was pressed!');
    gridCreateButton.click(); // Perform your desired action here when the Enter key is pressed.
  }
});
refreshbutton.addEventListener('click', refreshPage);
// gridCreateButton.addEventListener('c', count);
