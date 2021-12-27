// logic 
const sketch = () => {
    const body = document.querySelector("body");
    //create first layer
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    body.appendChild(containerDiv);

    const firstRow = document.createElement("div");
    firstRow.classList.add("firstRow");
    containerDiv.appendChild(firstRow);
    const secondRow = document.createElement("div");
    secondRow.classList.add("secondRow");
    containerDiv.appendChild(secondRow);
    const thirdRow = document.createElement("div");
    thirdRow.classList.add("thirdRow");
    containerDiv.appendChild(thirdRow);
    const fourthRow = document.createElement("div");
    fourthRow.classList.add("fourthRow");
    containerDiv.appendChild(fourthRow);
    
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
       const createRow = (n, column) => {
            //loop to create n number of rows, with 4 boxes
            //create div
            //add class of row
            //append to parentContainer
        for (let i = 0; i < n; i++){
           const row = document.createElement("div");
           row.classList.add("row"); 
           createBox(1, row);
           column.appendChild(row)
        }
       }
       createRow(4, firstRow);
       createRow(4, secondRow);
       createRow(4, thirdRow);
       createRow(4, fourthRow);

    //create second layer 4x4

    //create third layer 16x16
}
sketch();