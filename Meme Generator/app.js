

  document.addEventListener("DOMContentLoaded", function() {
    let memeForm = document.getElementById("info");
    let newMemes = document.getElementById("newDiv");
  
    memeForm.addEventListener("submit", function(event) {
      event.preventDefault();

      let memeContainer = document.createElement('div');
      memeContainer.style.position = "relative"
      memeContainer.style.display = 'flex';
      memeContainer.style.flexDirection = 'column';
      memeContainer.style.alignItems = 'center';
      memeContainer.style.justifyContent = 'center';

      let memeWrapper = document.createElement('div');
      memeWrapper.style.position = 'relative'; 
  
      let removeButton = document.createElement("button");
      removeButton.innerText = "UGLY!";
  
      let addMeme = document.createElement("img");
      addMeme.src = document.getElementById('image-URL').value;
      addMeme.style.width = '500px';
      addMeme.style.height = '500px';

      let memeText = document.createElement('span');
      memeText.innerText = document.getElementById('topText').value;
      memeText.style.position = 'absolute';
      memeText.style.top = '20%';
      memeText.style.left = '50%';
      memeText.style.transform = 'translate(-50%, -50%)';
      memeText.style.textAlign = 'center';
      memeText.style.color = 'white';
      memeText.style.fontSize = '4em';
      
      
      let bottomText = document.createElement('span');
      bottomText.innerText = document.getElementById('bottomText').value;
      bottomText.style.position = 'absolute';
      bottomText.style.textAlign = 'center';
      bottomText.style.bottom = '10px';
      bottomText.style.left = '50%';
      bottomText.style.transform = 'translate(-50%,0)';
      bottomText.style.width = '100%';
      bottomText.style.color = 'white';
      bottomText.style.fontSize = '4em';


      memeWrapper.appendChild(addMeme);
      memeWrapper.appendChild(memeText);
      memeWrapper.appendChild(bottomText);

      memeContainer.appendChild(memeWrapper);
      memeContainer.appendChild(removeButton);

      newMemes.appendChild(memeContainer);
  
      memeForm.reset();
    });
  
    newMemes.addEventListener("click", function(event) {
      const targetTagToLowerCase = event.target.tagName.toLowerCase();
      if (targetTagToLowerCase === "button") {
        event.target.parentNode.remove();
      }
    });
  });
  

