
// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

document.querySelector("#download-btn").addEventListener("click",async function(){
	let videoURL = document.querySelector("#video-url").value;
	if(videoURL.length == 0){
		return;
	}
	document.querySelector(".loader").classList.add("active");
	let res = await axios({
		method:"GET",
		responseType:"json",
		url:"https://fbit.herokuapp.com/download?videoURL="+videoURL
	});
	document.querySelector(".loader").classList.remove("active");
	if(res.data.status == "success"){
		let videoRes = await axios({
			method:"GET",
			responseType:"blob",
			url:res.data.link
		});
		download(new Blob([videoRes.data]), "video.mp4");
	} else {
		alert("Something went wrong, Please try again");
	}
});