let fileElement = document.getElementById('pProductImage');
let chosenImage = document.getElementById('chosen-image');
let fileName = document.getElementById('pProductImage');

fileElement.onchange = () => {
  let reader = new FileReader();
  reader.readAsDataURL(fileElement.files[0]);
  reader.onload = () => {
    chosenImage.setAttribute('src', reader.result);
  };

  fileName.textContent = fileElement.files[0].name;
};
