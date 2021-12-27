// logic 
const sketch = () => {
    const body = document.querySelector("body");
    //create first layer
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    body.appendChild(containerDiv);
    
    //function to create cube

        //create a div
        //add class of cube
        //append to parent container
       //create container for every 16 = n,  iteration (remember to implement) 
        const createCube = (n, box) => {
        //for loop to create n number of cubes
        //inside parent container    
        for (let i = 0; i < n ; i++) {
            let cube = document.createElement("div");
            cube.classList.add("cube");
            box.appendChild(cube);
        }
        }


       
        //will create n number of boxes
       const createBox = (n, row) => {
           //create box
           //add class of row
           //append to row
           
          //loop n times, creating a 16x16 box 
          for (let i = 0; i < n; i++){
           const outerBox = document.createElement("box");   
           outerBox.classList.add("box")
           createCube(16, outerBox);
            row.appendChild(outerBox);
          }
       }

       //function will create n number of rows, with n number of boxes
       const createBoxContainer = (n, column) => {
            //loop to create n number of rows, with 4 boxes
            //create div
            //add class of boxContainer
            //append to parentContainer
        for (let i = 0; i < n; i++){
           const boxContainer = document.createElement("div");
           boxContainer.classList.add("boxContainer"); 
           createBox(1, boxContainer);
           column.appendChild(boxContainer);
        }
       }
       //function will create the grid
       const createGrid = (n, grid) => {
           //loop - create each row 
           //create div element
           //add class of row
           //append to containerDiv
           for (let i = 0; i < n; i++){
               const gridRow = document.createElement("div");
               gridRow.classList.add("row");
               createBoxContainer(4, gridRow);
               grid.appendChild(gridRow);
           }
       }
    //    createRow(4, firstRow);
    //    createRow(4, secondRow);
    //    createRow(4, thirdRow);
    //    createRow(4, fourthRow);

       createGrid(4, containerDiv);

    //create second layer 4x4

    //create third layer 16x16
}
sketch();