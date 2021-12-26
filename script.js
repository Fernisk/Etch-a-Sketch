// logic 
const sketch = () => {
    const body = document.querySelector("body");
    //create first layer
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    body.appendChild(containerDiv);
    //create containers for firstRow, secondRow, thirdRow, fourthRow
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

    // select rows
    const selectFirstRow = document.querySelector(".firstRow");
    const selectSecondRow = document.querySelector(".secondRow");
    const selectThirdRow = document.querySelector(".thirdRow");
    const selectFourthRow = document.querySelector(".fourthRow");
    //function to create cube

        //create a div
        //add class of cube
        //append to parent container
        
        const cube = (n, row) => {
        //for loop to create n number of cubes
        //inside parent container    
        for (let i = 0; i < n ; i++) {
            let cube = document.createElement("div");
            cube.classList.add("cube");
            row.appendChild(cube);
        }
        }

       cube(16,selectFirstRow); 
       cube(16,selectSecondRow); 
       cube(16,selectThirdRow); 
       cube(16,selectFourthRow); 
    //create second layer 4x4

    //create third layer 16x16
}
sketch();