const diy = document.querySelectorAll('#DIY');
const diyDropDown = document.querySelectorAll('#DIY-dropDown');

const recipe = document.querySelectorAll('#recipes');
const recipeDropDown = document.querySelectorAll('#recipes-dropDown');

const temp = document.querySelectorAll('#temp');
const tempDropDown = document.querySelectorAll('#temp-dropDown')

// diy drop down menu control

for (let i = 0; i < diy.length; i++ ) {
diy[i].addEventListener('click', () => {
    console.log('test');
    diyDropDown[i].style.visibility = 'visible';

})

// closes drop down list when not-target node is clicked
document.addEventListener('click', node => {
    let clickOut = true;

    node.path.forEach(item => {
      if (clickOut === false)
        return;

      if (item.className === 'Diy-drop')
        clickOut = false;
    });

    if (clickOut === true)
    diyDropDown[i].style.visibility = 'hidden';
  });

};

// recipe drop down menu control

for (let i = 0; i < recipe.length; i++ ) {
    recipe[i].addEventListener('click', () => {
        console.log('test');
        recipeDropDown[i].style.visibility = 'visible';
    
    })
    
    // closes drop down list when not-target node is clicked
    document.addEventListener('click', node => {
        let clickOut = true;
    
        node.path.forEach(item => {
          if (clickOut === false)
            return;
    
          if (item.className === 'recipes-drop')
            clickOut = false;
        });
    
        if (clickOut === true)
        recipeDropDown[i].style.visibility = 'hidden';
      });
    
    };

    // diy drop down menu control

for (let i = 0; i < temp.length; i++ ) {
    temp[i].addEventListener('click', () => {
        console.log('test');
        tempDropDown[i].style.visibility = 'visible';
    
    })
    
    // closes drop down list when not-target node is clicked
    document.addEventListener('click', node => {
        let clickOut = true;
    
        node.path.forEach(item => {
          if (clickOut === false)
            return;
    
          if (item.className === 'temp-drop')
            clickOut = false;
        });
    
        if (clickOut === true)
        tempDropDown[i].style.visibility = 'hidden';
      });
    
    };