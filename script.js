// logic 
const sketch = () => {
    const body = document.querySelector("body");
    
    //create div for box content and title
    const leftPage = document.createElement("div");
    leftPage.classList.add("leftContent");
    body.appendChild(leftPage);
    //create title
    const title = document.createElement("h1");
    title.classList.add("page-title");
    title.textContent = "Etch-a-Sketch"
    leftPage.appendChild(title);   
    //create first layer
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");
    leftPage.appendChild(containerDiv);

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
           createCube(n, outerBox);
            row.appendChild(outerBox);
          }
       }

       //function will create n number of boxes
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
               createBoxContainer(n, gridRow);
               grid.appendChild(gridRow);
           }
       }

       //paint() will make every cube div to change color
       //when it hover over each one  
        
        const paint = () => {
        const currentBox = document.querySelectorAll(".cube");
        
                //variable to hold click boolean
                let click = false;
            currentBox.forEach(box => {
       //function will change the color when click and drag
                box.addEventListener("mousedown", (e) => {
                    click = true;
                    
                });
                box.addEventListener("mouseup", (e) => {
                    if(click){
                        click = false;
                    }
                });
                box.addEventListener("mousemove", (e) => {
                    if (click){
                        box.style.backgroundColor = colorChoice();
                    }
                });
                box.addEventListener("click", (e) => {
                    if(box.style.backgroundColor === "" || box.style.backgroundColor === "white"){
                        box.style.backgroundColor = colorChoice();
                    }else {
                        box.style.backgroundColor = "white";
                    }

                })
            });


        }

       //randomRGB() will help paint() create random colors  
       const randomRGB = () => {
           //randomize r, g, b
           let r = Math.floor(Math.random() * 256);
           let g = Math.floor(Math.random() * 256);
           let b = Math.floor(Math.random() * 256);
           let RGBCOLOR = `rgb(${r},${g},${b})`;
           return RGBCOLOR;
       }
       
       
       

        //creating div for the menu next to the sketchpad
        const menuDiv = document.createElement("div");
        menuDiv.classList.add("menuDiv");
        body.appendChild(menuDiv);
        //reset() will reset the grid by a button and create a new clean one
            //(making sure is the same grid you specified)
        const reset = () => {
                //create button
             const rBtn = document.createElement("button"); 
             rBtn.textContent = "reset";
             rBtn.classList.add("resetButton");
             menuDiv.appendChild(rBtn);
             //look for button
             const resetButton = document.querySelector(".resetButton");
             //when pressed prompt the user (How many squares per side you want)?
             //make sure to convert it to a number
             //limit it to 100 boxes
             //delete the previous grid
             //create new grid with user input
             resetButton.addEventListener("click", () => {
             let resetInput = Number(prompt("How many squares per side?"))
             deleteGrid(containerDiv);
             if (resetInput < 1 || resetInput > 100){
                 alert("error: type a number between 0 and 100");
                 window.location.reload();
                 return
             }
             createGrid(resetInput, containerDiv);
             paint();
             });

            }
            
            //creating upperMenuDiv
            const upperMenuDiv = document.createElement("div");
            upperMenuDiv.classList.add("upperMenuDiv");
            menuDiv.appendChild(upperMenuDiv);
        //randomButton() will create a checkbox for colorChoice()
        const randomButton = () => {
            //create button
            const checkbox = document.createElement("input");
            //assigning the attributes
            checkbox.type = "checkbox";
            checkbox.name = "name";
            checkbox.value = "value";
            checkbox.id = "checkbox";

            //creating label for checkbox
            const label = document.createElement("label");
            //assign attributes for label
            label.htmlFor = "checkbox";
            //create text for label
            const p = document.createElement("p");
            p.classList.add("labelText");
            p.textContent = "Random RGB Colors"
            //append new text to label
            label.appendChild(p);
            //append checkbox to upperMenuDiv
            //apend label to upperMenuDiv
            upperMenuDiv.appendChild(checkbox);
            upperMenuDiv.appendChild(label);
            

        }

        //colorChoice() will determine if checkbox is checked (randomRGB), or unchecked (black only)
        //and will return the color;
        const colorChoice = () => {
            if (document.getElementById('checkbox').checked){
                return randomRGB();
            } else {
                return "black";
            }

        }
       
       //deleteGrid() will help reset() remove all child elements
       //before creating a new grid 
       const deleteGrid = (gridContainer) => {
         while (gridContainer.firstChild){
             gridContainer.removeChild(gridContainer.firstChild);
         }
       }


       createGrid(16, containerDiv)
       randomButton();
       paint();
       reset();

}
sketch();