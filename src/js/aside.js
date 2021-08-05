const btns = document.querySelectorAll(".btn");

const btnsArray = Array.apply(null, btns);

const aside = document.querySelector(".aside");

const btnBack = document.querySelector(".back-ico");
const linkBack = document.querySelector(".back-link");
const pageMask = document.querySelector("#mask")

//aside content elements//
const title = document.querySelector(".aside-project-title");
const img = document.querySelector(".aside-project-miniature");
const overview = document.querySelector(".overview");
const about = document.querySelector(".about")
const technologies = document.querySelectorAll(".technologies-box li");
const technologiesUl = document.querySelector(".technologies-box");
const liItem2 = document.querySelector(".item2");
const liItem3 = document.querySelector(".item3");
const liItem4 = document.querySelector(".item4");
const liItem5 = document.querySelector(".item5");
const liItem6 = document.querySelector(".item6");
const liItem7 = document.querySelector(".item7");
const linkRepository = document.querySelector(".repository");
const linkLiveVersion = document.querySelector(".live-version");
const repositoryTitle = document.querySelector(".link-title");




console.log(about);

btnBack.addEventListener("click", (e) => {
    aside.style.display = "none";
    document.body.style.overflow = "scroll";
    pageMask.classList.remove("mask");
});

linkBack.addEventListener("click", (e) => {
    aside.style.display = "none";
    document.body.style.overflow = "scroll";
    pageMask.classList.remove("mask");
});
btnsArray[0].addEventListener("click", (e) => {
    aside.style.display = "block";
    document.body.style.overflow = "hidden";
    pageMask.classList.add("mask");
});

btnsArray[1].addEventListener("click", (e) => {
    liItem2.appendChild(aside);
    aside.style.display = "block";
    document.body.style.overflow = "hidden";
    pageMask.classList.add("mask");
    title.innerHTML = "ZetMEble valuation configurator";
    overview.innerHTML = " Test 2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!";
    img.src = "src/img/Zrzut ekranu 2021-07-29 o 21.23.48 (2).jpeg";
    about.innerHTML = "TEST 2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!";
    technologies[0].innerHTML = "React";
    technologies[1].innerHTML = "JavaScript";
    technologies[2].innerHTML = "HTML";

    const newLi1 = document.createElement("li");
    technologiesUl.appendChild(newLi1);
    const textLi1 = document.createTextNode("CSS");
    newLi1.appendChild(textLi1)

    const newLi2 = document.createElement("li");
    technologiesUl.appendChild(newLi2);
    const textLi2 = document.createTextNode("BOOTSTRAP")
    newLi2.appendChild(textLi2)

    linkRepository.href = "https://github.com/JakubRoethel/Zet_Meble_Calculator_APP";
    linkLiveVersion.href = "https://zetmeble-app.web.app/";
});

btnsArray[2].addEventListener("click", (e) => {
    liItem3.appendChild(aside);
    aside.style.display = "block";
    document.body.style.overflow = "hidden";
    pageMask.classList.add("mask");
    title.innerHTML = "Leaving it in the good hands";
    overview.innerHTML = " Test 3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!";
    img.src = "src/img/Zrzut ekranu 2021-07-29 o 21.14.30 (2).jpeg";
    about.innerHTML = "TEST 3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!";
    technologies[0].innerHTML = "React";
    technologies[1].innerHTML = "JavaScript";
    technologies[2].innerHTML = "HTML";

    const newLi1 = document.createElement("li");
    technologiesUl.appendChild(newLi1);
    const textLi1 = document.createTextNode("CSS");
    newLi1.appendChild(textLi1)

    const newLi2 = document.createElement("li");
    technologiesUl.appendChild(newLi2);
    const textLi2 = document.createTextNode("BOOTSTRAP")
    newLi2.appendChild(textLi2)

    const newLi3 = document.createElement("li");
    technologiesUl.appendChild(newLi3);
    const textLi3 = document.createTextNode("FIREBASE");
    newLi3.appendChild(textLi3);

    linkRepository.href = "https://github.com/JakubRoethel/leaving_it_in_the_good_hands";
    linkLiveVersion.href = "";
});

btnsArray[3].addEventListener("click", (e) => {
    liItem4.appendChild(aside);
    aside.style.display = "block";
    document.body.style.overflow = "hidden";
    pageMask.classList.add("mask");
    title.innerHTML = "To Do App";
    overview.innerHTML = " Test 4 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!";
    img.src = "src/img/Zrzut ekranu 2021-08-5 o 15.08.43.png";
    about.innerHTML = "TEST 4 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!";
    technologies[0].innerHTML = "React";
    technologies[1].innerHTML = "JavaScript";
    technologies[2].innerHTML = "HTML";

    const newLi1 = document.createElement("li");
    technologiesUl.appendChild(newLi1);
    const textLi1 = document.createTextNode("CSS");
    newLi1.appendChild(textLi1)

    const newLi2 = document.createElement("li");
    technologiesUl.appendChild(newLi2);
    const textLi2 = document.createTextNode("BOOTSTRAP")
    newLi2.appendChild(textLi2)

    const newLi3 = document.createElement("li");
    technologiesUl.appendChild(newLi3);
    const textLi3 = document.createTextNode("API");
    newLi3.appendChild(textLi3);

    linkRepository.href = "https://github.com/JakubRoethel/To_Do_App";
    linkLiveVersion.href = "";
});

btnsArray[4].addEventListener("click", (e) => {
    liItem5.appendChild(aside);
    aside.style.display = "block";
    document.body.style.overflow = "hidden";
    pageMask.classList.add("mask");
    title.innerHTML = "Belmondo Food Truck Page";
    overview.innerHTML = " Test 5 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!";
    img.src = "src/img/Zrzut ekranu 2021-07-29 o 21.44.39.png";
    about.innerHTML = "TEST 5 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!";
    technologies[0].innerHTML = "Wordpress";
    technologies[1].innerHTML = "HTML";
    technologies[2].innerHTML = "CSS";

    const newLi1 = document.createElement("li");
    technologiesUl.appendChild(newLi1);
    const textLi1 = document.createTextNode("JavaScript");
    newLi1.appendChild(textLi1)

    linkRepository.remove();
    repositoryTitle.remove()
    linkLiveVersion.href = "https://www.belmondo.pl/";
});

btnsArray[5].addEventListener("click", (e) => {
    liItem6.appendChild(aside);
    aside.style.display = "block";
    document.body.style.overflow = "hidden";
    pageMask.classList.add("mask");
    title.innerHTML = "Olga Stępinska Personal Page";
    overview.innerHTML = " Test 6 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!";
    img.src = "src/img/Zrzut ekranu 2021-07-29 o 21.47.04.png";
    about.innerHTML = "TEST 6 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!";
    technologies[0].innerHTML = "Wordpress";
    technologies[1].innerHTML = "HTML";
    technologies[2].innerHTML = "CSS";

    const newLi1 = document.createElement("li");
    technologiesUl.appendChild(newLi1);
    const textLi1 = document.createTextNode("JavaScript");
    newLi1.appendChild(textLi1)

    const newLi2 = document.createElement("li");
    technologiesUl.appendChild(newLi2);
    const textLi2 = document.createTextNode("PHP")
    newLi2.appendChild(textLi2)

    linkRepository.remove();
    repositoryTitle.remove()
    linkLiveVersion.href = "https://olgastepinska.pl/";
});

btnsArray[6].addEventListener("click", (e) => {
    liItem7.appendChild(aside);
    aside.style.display = "block";
    document.body.style.overflow = "hidden";
    pageMask.classList.add("mask");
    title.innerHTML = "My Personal PAge";
    overview.innerHTML = " Test 7 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!";
    img.src = "src/img/Zrzut ekranu 2021-07-29 o 22.01.11.png";
    about.innerHTML = "TEST 7 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam corrupti eos consectetur laudantium atque adipisci, rerum modi, laborum dicta magnam debitis vel similique ullam cumque beatae, provident dolorem dignissimos!";
    technologies[0].innerHTML = "HTML";
    technologies[1].innerHTML = "CSS";
    technologies[2].innerHTML = "SASS";

    const newLi1 = document.createElement("li");
    technologiesUl.appendChild(newLi1);
    const textLi1 = document.createTextNode("JavaScript");
    newLi1.appendChild(textLi1);

    const newLi2 = document.createElement("li");
    technologiesUl.appendChild(newLi2);
    const textLi2 = document.createTextNode("Gulp");
    newLi2.appendChild(textLi2);


    linkRepository.href = "https://github.com/JakubRoethel/My_Personal_Page";
    linkLiveVersion.href = "https://jakubroethel.github.io/My_Personal_Page/";
});

