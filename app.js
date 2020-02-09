console.log("frontend running");
const baseUrl = "http://localhost:9828";
const RandImgBtn = document.getElementById("RandomIButton");
const ImgBtn = document.getElementById("ImgBtn");
const TextBtn = document.getElementById("TextBtn");

const featureForm = $("#featureForm");

const outputBox = $("#outputBox");

const txtLoader = document.getElementById("txtLoader");

document
	.querySelector(".custom-file-input")
	.addEventListener("change", function(e) {
		var fileName = document.getElementById("file").files[0].name;
		var nextSibling = e.target.nextElementSibling;
		nextSibling.innerText = fileName;
	});

let modification;

function myFunction(selected) {
	modification = selected;
}

// TEXT API
TextBtn.addEventListener("click", e => {
	e.preventDefault();
	outputBox.html(`<div class="loader loader--style5 text-center" title="4">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;"
          xml:space="preserve">
          <rect x="0" y="0" width="4" height="10" fill="#333">
            <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0"
              begin="0" dur="0.6s" repeatCount="indefinite" />
          </rect>
          <rect x="10" y="0" width="4" height="10" fill="#333">
            <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0"
              begin="0.2s" dur="0.6s" repeatCount="indefinite" />
          </rect>
          <rect x="20" y="0" width="4" height="10" fill="#333">
            <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0"
              begin="0.4s" dur="0.6s" repeatCount="indefinite" />
          </rect>
        </svg>
      </div>`);
	$.ajax({
		url: `${baseUrl}/text/${modification}`,
		headers: {
			"Access-Control-Allow-Origin": `${baseUrl}/text/${modification}`
		},
		type: "GET",
		crossDomain: true,

		success: function(response) {
			outputBox.html(
				`<p> RANDOMLY generated ${modification} by Deoxys.AI <br> ${response}</p>`
			);
			console.log(response);
		},
		error: function(xhr, status) {
			alert("error");
		}
	});
});

// RANDOM_IMAGE API
RandImgBtn.addEventListener("click", e => {
	e.preventDefault();

	outputBox.html(`<div class="loader loader--style5 text-center" title="4">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;"
          xml:space="preserve">
          <rect x="0" y="0" width="4" height="10" fill="#333">
            <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0"
              begin="0" dur="0.6s" repeatCount="indefinite" />
          </rect>
          <rect x="10" y="0" width="4" height="10" fill="#333">
            <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0"
              begin="0.2s" dur="0.6s" repeatCount="indefinite" />
          </rect>
          <rect x="20" y="0" width="4" height="10" fill="#333">
            <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0"
              begin="0.4s" dur="0.6s" repeatCount="indefinite" />
          </rect>
        </svg>
      </div>`);
	$.ajax({
		url: `${baseUrl}/random-image`,
		headers: { "Access-Control-Allow-Origin": `${baseUrl}/random-image` },
		type: "GET",
		crossDomain: true,

		success: function(fileName) {
			if (fileName) {
				outputBox.html(
					`<img class="card-img-top random-image" src="${baseUrl}/dcgan/resultImg/${fileName}">`
				);
			}
		},
		error: function(xhr, status) {
			alert("error");
		}
	});
});

// IMAGE API
ImgBtn.addEventListener("click", e => {
	e.preventDefault();

	outputBox.html(`<div class="loader loader--style5 text-center" title="4">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;"
          xml:space="preserve">
          <rect x="0" y="0" width="4" height="10" fill="#333">
            <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0"
              begin="0" dur="0.6s" repeatCount="indefinite" />
          </rect>
          <rect x="10" y="0" width="4" height="10" fill="#333">
            <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0"
              begin="0.2s" dur="0.6s" repeatCount="indefinite" />
          </rect>
          <rect x="20" y="0" width="4" height="10" fill="#333">
            <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0"
              begin="0.4s" dur="0.6s" repeatCount="indefinite" />
          </rect>
        </svg>
      </div>`);

	var fd = new FormData();
	var files = $("#file")[0].files[0];
	fd.append("file", files);

	$.ajax({
		url: `${baseUrl}/image`,
		type: "post",
		data: fd,
		contentType: false,
		processData: false,
		success: function(fileName) {
			if (fileName) {
				outputBox.html(
					`<img class="card-img-top" src="${baseUrl}/stargan/resultImg/${fileName}">`
				);
			}
		}
	});
});
