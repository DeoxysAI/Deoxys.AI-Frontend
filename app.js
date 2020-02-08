console.log("frontend running");
const baseUrl = "http://localhost:9828"
const RandImgBtn = document.getElementById("RandomIButton");
const ImgBtn = document.getElementById("ImgBtn");
const TextBtn = document.getElementById("TextBtn");


const featureForm = $('#featureForm')

const outputBox = $('#outputBox')

const txtLoader = document.getElementById("txtLoader");

let modification;

function myFunction(selected) {
  modification = selected;
}


// RANDOM_IMAGE API
RandImgBtn.addEventListener("click", (e) => {
  e.preventDefault()

  outputBox.html(`<div class="spinner-grow" role="status"><span class="sr-only">Loading...</span></div>`)
  $.ajax({
    url: `${baseUrl}/random-image`,
    headers: { 'Access-Control-Allow-Origin': `${baseUrl}/random-image` },
    type: "GET",
    crossDomain: true,
    success: function (fileName) {
      if (fileName) {
        outputBox.html(`<img class="card-img-top" src="${baseUrl}/upload/${fileName}">`)
      }

    },
    error: function (xhr, status) {
      alert("error");
    }
  });
})


// TEXT API
TextBtn.addEventListener('click', (e) => {
  e.preventDefault()
  outputBox.html(`<div class="spinner-grow" role="status"><span class="sr-only">Loading...</span></div>`)
  $.ajax({
    url: `${baseUrl}/text/${modification}`,
    headers: { 'Access-Control-Allow-Origin': `${baseUrl}/text/${modification}` },
    type: "GET",
    crossDomain: true,
    success: function (response) {
      outputBox.html(`<p>RANDOMLY generated ${modification} by Deoxys.AI <br>${response}</p>`)
      console.log(response)
    },
    error: function (xhr, status) {
      alert("error");
    }
  });
})


// IMAGE API
ImgBtn.addEventListener('click', (e) => {
  e.preventDefault();

  var fd = new FormData();
  var files = $('#file')[0].files[0];
  fd.append('file', files);

  $.ajax({
    url: `${baseUrl}/image/1`,
    type: 'post',
    data: fd,
    contentType: false,
    processData: false,
    success: function (fileName) {
      if (fileName) {
        outputBox.html(`<img class="card-img-top" src="${baseUrl}/upload/${fileName}">`)
      }

    }
  });
})