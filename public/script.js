const url = "https://randomuser.me/api/";

// const randomUser = document.createElement("div");
// document.body.appendChild(randomUser);
const mainEl = document.getElementById("main");
const container = document.getElementById("container");

async function getData(url) {
	const response = await fetch(url);
	var data = await response.json();
	console.log(data.results[0]);
	const user = data.results[0];
	random(user);
}
getData(url);

function random(results) {
	const randomuser = document.createElement("div");
	randomuser.classList.add("randomuser");
	randomuser.innerHTML = `
    
    <div class="img-container">
    <img src="${results.picture.large}"/>
</div>
   <div id="phone" class="tabcontent">
My Phone number is
	<br />
   <p>${results.phone}<p>
   </div>
   <div id="name" class="tabcontent">
My Name is 	<br />
 <p> ${results.name.first} ${results.name.last}</p>
    </div>
   <div id="dob" class="tabcontent">
My Age  is 	<br />
    <p> ${results.dob.age} yrs</p>
    </div>
   <div id="address" class="tabcontent">
My Address is	<br />
    <p> ${results.location.country}</p>
    </div>
   <div id="email" class="tabcontent">
My Email Address is 	<br />
  <p> ${results.email}</p>
    </div>
	<button class="refresh" type="button" onClick="window.location.reload();"><i class="bi bi-arrow-clockwise"></i>regen</button>

  

    `;

	// const btn = document.querySelector(".refresh");

	// btn.addEventListener("click", () => {
	// 	randomuser.innerHTML = " ";
	// 	getData(url);
	// });
	container.appendChild(randomuser);
	document.getElementById("defaultOpen").onmouseover();
}
function openTab(evt, tabname) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(tabname).style.display = "block";
	evt.currentTarget.className += " active";
}
