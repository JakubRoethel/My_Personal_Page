const btns=document.querySelectorAll(".btn"),btnsArray=Array.apply(null,btns),aside=document.querySelector(".aside"),btnBack=document.querySelector(".back-ico"),linkBack=document.querySelector(".back-link"),pageMask=document.querySelector("#mask"),title=document.querySelector(".aside-project-title"),img=document.querySelector(".aside-project-miniature"),overview=document.querySelector(".overview"),about=document.querySelector(".about"),technologies=document.querySelectorAll(".technologies-box li"),technologiesUl=document.querySelector(".technologies-box"),liItem2=document.querySelector(".item2"),liItem3=document.querySelector(".item3"),liItem4=document.querySelector(".item4"),liItem5=document.querySelector(".item5"),liItem6=document.querySelector(".item6"),liItem7=document.querySelector(".item7"),linkRepository=document.querySelector(".repository"),linkLiveVersion=document.querySelector(".live-version"),repositoryTitle=document.querySelector(".link-title");console.log(about),btnBack.addEventListener("click",(e=>{aside.style.display="none",document.body.style.overflow="scroll",pageMask.classList.remove("mask")})),linkBack.addEventListener("click",(e=>{aside.style.display="none",document.body.style.overflow="scroll",pageMask.classList.remove("mask")})),btnsArray[0].addEventListener("click",(e=>{aside.style.display="block",document.body.style.overflow="hidden",pageMask.classList.add("mask")})),btnsArray[1].addEventListener("click",(e=>{liItem2.appendChild(aside),aside.style.display="block",document.body.style.overflow="hidden",pageMask.classList.add("mask"),title.innerHTML="ZetMEble valuation configurator",overview.innerHTML=" Test 2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!",img.src="src/img/Zrzut ekranu 2021-07-29 o 21.23.48 (2).jpeg",about.innerHTML="TEST 2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!",technologies[0].innerHTML="React",technologies[1].innerHTML="JavaScript",technologies[2].innerHTML="HTML";const i=document.createElement("li");technologiesUl.appendChild(i);const t=document.createTextNode("CSS");i.appendChild(t);const o=document.createElement("li");technologiesUl.appendChild(o);const n=document.createTextNode("BOOTSTRAP");o.appendChild(n),linkRepository.href="https://github.com/JakubRoethel/Zet_Meble_Calculator_APP",linkLiveVersion.href="https://zetmeble-app.web.app/"})),btnsArray[2].addEventListener("click",(e=>{liItem3.appendChild(aside),aside.style.display="block",document.body.style.overflow="hidden",pageMask.classList.add("mask"),title.innerHTML="Leaving it in the good hands",overview.innerHTML=" Test 3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!",img.src="src/img/Zrzut ekranu 2021-07-29 o 21.14.30 (2).jpeg",about.innerHTML="TEST 3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!",technologies[0].innerHTML="React",technologies[1].innerHTML="JavaScript",technologies[2].innerHTML="HTML";const i=document.createElement("li");technologiesUl.appendChild(i);const t=document.createTextNode("CSS");i.appendChild(t);const o=document.createElement("li");technologiesUl.appendChild(o);const n=document.createTextNode("BOOTSTRAP");o.appendChild(n);const a=document.createElement("li");technologiesUl.appendChild(a);const s=document.createTextNode("FIREBASE");a.appendChild(s),linkRepository.href="https://github.com/JakubRoethel/leaving_it_in_the_good_hands",linkLiveVersion.href=""})),btnsArray[3].addEventListener("click",(e=>{liItem4.appendChild(aside),aside.style.display="block",document.body.style.overflow="hidden",pageMask.classList.add("mask"),title.innerHTML="To Do App",overview.innerHTML=" Test 4 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!",img.src="src/img/Zrzut ekranu 2021-08-5 o 15.08.43.png",about.innerHTML="TEST 4 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!",technologies[0].innerHTML="React",technologies[1].innerHTML="JavaScript",technologies[2].innerHTML="HTML";const i=document.createElement("li");technologiesUl.appendChild(i);const t=document.createTextNode("CSS");i.appendChild(t);const o=document.createElement("li");technologiesUl.appendChild(o);const n=document.createTextNode("BOOTSTRAP");o.appendChild(n);const a=document.createElement("li");technologiesUl.appendChild(a);const s=document.createTextNode("API");a.appendChild(s),linkRepository.href="https://github.com/JakubRoethel/To_Do_App",linkLiveVersion.href=""})),btnsArray[4].addEventListener("click",(e=>{liItem5.appendChild(aside),aside.style.display="block",document.body.style.overflow="hidden",pageMask.classList.add("mask"),title.innerHTML="Belmondo Food Truck Page",overview.innerHTML=" Test 5 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!",img.src="src/img/Zrzut ekranu 2021-07-29 o 21.44.39.png",about.innerHTML="TEST 5 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!",technologies[0].innerHTML="Wordpress",technologies[1].innerHTML="HTML",technologies[2].innerHTML="CSS";const i=document.createElement("li");technologiesUl.appendChild(i);const t=document.createTextNode("JavaScript");i.appendChild(t),linkRepository.remove(),repositoryTitle.remove(),linkLiveVersion.href="https://www.belmondo.pl/"})),btnsArray[5].addEventListener("click",(e=>{liItem6.appendChild(aside),aside.style.display="block",document.body.style.overflow="hidden",pageMask.classList.add("mask"),title.innerHTML="Olga Stępinska Personal Page",overview.innerHTML=" Test 6 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!",img.src="src/img/Zrzut ekranu 2021-07-29 o 21.47.04.png",about.innerHTML="TEST 6 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!",technologies[0].innerHTML="Wordpress",technologies[1].innerHTML="HTML",technologies[2].innerHTML="CSS";const i=document.createElement("li");technologiesUl.appendChild(i);const t=document.createTextNode("JavaScript");i.appendChild(t);const o=document.createElement("li");technologiesUl.appendChild(o);const n=document.createTextNode("PHP");o.appendChild(n),linkRepository.remove(),repositoryTitle.remove(),linkLiveVersion.href="https://olgastepinska.pl/"})),btnsArray[6].addEventListener("click",(e=>{liItem7.appendChild(aside),aside.style.display="block",document.body.style.overflow="hidden",pageMask.classList.add("mask"),title.innerHTML="My Personal PAge",overview.innerHTML=" Test 7 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!",img.src="src/img/Zrzut ekranu 2021-07-29 o 22.01.11.png",about.innerHTML="TEST 7 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!",technologies[0].innerHTML="HTML",technologies[1].innerHTML="CSS",technologies[2].innerHTML="SASS";const i=document.createElement("li");technologiesUl.appendChild(i);const t=document.createTextNode("JavaScript");i.appendChild(t);const o=document.createElement("li");technologiesUl.appendChild(o);const n=document.createTextNode("Gulp");o.appendChild(n),linkRepository.href="https://github.com/JakubRoethel/My_Personal_Page",linkLiveVersion.href="https://jakubroethel.github.io/My_Personal_Page/"}));