
document.addEventListener('DOMContentLoaded', function() {

// create a new div element in js
const model=document.createElement('div');
// giving a id divto the created 
model.id='main';
// body kulla insert panrathu   // Insert the new div into the body
document.body.appendChild(model);

// Select all elements with the class 'img'
const images=document.querySelectorAll('.img');

images.forEach(image=>{
    image.addEventListener('click', ()=>{
         // Add the 'active' class to the modal
        model.classList.add('active')

        // Create a new img element
        const imgs = document.createElement('img')
        imgs.src=image.src;
        imgs.id='imgs';
        
        // Clear any existing content in the modal
        while(model.firstChild){
            model.removeChild(model.firstChild);
        }
         // Append the new img element to the modal
        model.append(imgs)
})
    })
    
    // Add an event listener to the modal to remove the 'active' class when clicked
    model.addEventListener('click', ()=>{
        model.classList.remove('active');
    })

})

