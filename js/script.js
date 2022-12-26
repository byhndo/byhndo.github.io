const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = e => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about" ?
  card.classList.add("is-active") :
  card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach(s => s.classList.remove("is-active"));
  buttons.forEach(b => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach(btn => {
  btn.addEventListener("click", handleButtonClick);
});

const text= "Bayu Handono";

let letters = text.split("");

let textLength = letters.length -1;

letters.forEach((item,index)=>{

    const target = document.querySelector(".card-fullname");

    let element = document.createElement("span");

    element.classList.add("textswipe");

    element.id = `i${index}`;

    element.innerText = item;

    target.appendChild(element);

});

function animate(){

    let textList = document.querySelectorAll(".textswipe");

    textList.forEach((element,index)=>{

        setTimeout(()=>{

            let id = element.getAttribute('id');

            document.getElementById(id)?.classList.toggle('opaque');

            resetAnimation(index);

        },(index + (textLength/2))*10*(100/textLength))

    })

}

function resetAnimation(index){

    if(index ==textLength){

        animate();

    }

}

animate();
