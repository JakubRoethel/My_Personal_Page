const txtTyping=["I am Jakub Roethel"," I am Frontend Developer"],spnText=document.querySelector(".my-info-title"),spnCursor=document.querySelector(".cursor");let activeLetter=-10,activeText=0;const addLetter=()=>{if(activeLetter>=0&&(spnText.textContent+=txtTyping[activeText][activeLetter]),activeLetter++,activeLetter===txtTyping[activeText].length){if(activeText++,activeText===txtTyping)return;return setTimeout((()=>{activeLetter=0,addLetter()}),2e3)}setTimeout(addLetter,200)};addLetter();const cursorAnimation=()=>{spnCursor.classList.toggle("active")};setInterval(cursorAnimation,400);