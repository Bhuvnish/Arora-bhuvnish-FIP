(function(){
	"use strict";	
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};

	

	button.addEventListener("click", hamburgerMenu, false);		
})();




let member = document.querySelectorAll('.team'),
    lightBox = document.querySelector('#lightbox');

function loadHeroData() {
    lightBox.querySelector('.name').textContent = team[this.dataset.member].name;
    lightBox.querySelector("h3").textContent = team[this.dataset.member].headline;
    lightBox.querySelector('p').textContent = team[this.dataset.member].bio;
}

member.forEach(hero => hero.addEventListener('click', loadHeroData));

let team = {
    embassdor : {
        name: "HENERY",
        headline: "EMBASSDOR",
        bio: "Hy my name is henery, i build relationships with potential clients, business partners, and customers. Attend events, conferences,  seminars and promote the company.:",
        
        
    },

    CEO : {
        name: "Emma",
        headline: "CEO",
        bio: " HELLO My name is emma i am the CEO of zima . Itake care of growth, assessing potential risks, and developing plans to achieve the company's long-term goals.:",
    },

   vice : {
        name: "Jonathan",
        headline: "manager",
        bio: "hi my name is Jonathan i usually planning, organize, coordinate, and controle the work of a team or department within an organization. ::",
        
    },

   
    
}