const lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy"
});

const fileInput = document.querySelector('#photo');
const fileResult = document.querySelector('#file-result');
const fileSubmit = document.querySelector('#form-submit');

if (fileInput) {
  fileInput.addEventListener("change", function () {
    if (fileInput.files.length > 0) {
      const fileSize = fileInput.files.item(0).size;
      const fileMb = fileSize / 1024 ** 2;
      if (fileMb >= 1) {
        fileResult.innerHTML = "Please select a file less than 1MB.";
        fileSubmit.disabled = true;
      } else {
        fileResult.innerHTML = "Success, your file is " + fileMb.toFixed(1) + "MB.";
        fileSubmit.disabled = false;
      }
    }
  });
}
