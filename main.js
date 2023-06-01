// toogle-menu button
let toogleMunu = document.querySelector(".header .overlay .container .nav-bar .toggle-menu") ;
let headerMenu = document.querySelector(".header .overlay .container .nav-bar .links .link") ;
let header = document.querySelector(".header") ;
let images = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"] ;
let span = document.querySelector(".header .overlay .introduction-text h2 span") ;
let ourSkills = document.querySelector(".our-skills") ;
let skills = document.querySelectorAll(".our-skills .container .skills-box .skill .skill-prog span ") ;
let linksScroll = document.querySelectorAll(".header .overlay .container .nav-bar .links .link li")
let bullet = document.querySelector(".bullets")
let bullets = document.querySelectorAll(".bullets .bullet") ;
let listColor = document.querySelectorAll(".setting-box .colors .color li") ;
let listBgChange = document.querySelectorAll(".background .chose span ") ;
let listOfSHow = document.querySelectorAll(".show-bullets .chose span") ;
let resetButton = document.querySelector(".reset") ;
let settingBox = document.querySelector(".setting-box")
let boxButton = document.querySelector(".setting-box .button")
///***toogle-menu button***///
toogleMunu.onclick = function() {
    headerMenu.classList.toggle("open") ;
}

///*** change background header */
if (!localStorage.getItem("resolve")) {
    change() ;
} else if (localStorage.getItem("resolve") === "yes") {
    // remove active
    listBgChange.forEach( li => {
        li.classList.remove("active")
    }) ;
    // add active to active element
    document.querySelector(`[data-req = "${localStorage.getItem("resolve")}"]`).classList.add("active") ;
    change() ;
}
else if (localStorage.getItem("resolve") === "no") {
    // remove active
    listBgChange.forEach( li => {
        li.classList.remove("active")
    }) ;
    // add active to active element
    document.querySelector(`[data-req = "${localStorage.getItem("resolve")}"]`).classList.add("active") ;
    StopBg() ;
    listBgChange.forEach( li => {
        li.addEventListener("click" , ()=> {
            if(li.dataset.req === "yes") {
                // remove active
    listBgChange.forEach( li => {
        li.classList.remove("active")
    }) ;
    // add active to active element
    li.classList.add("active") ;
                change() ;
            }
        })
    })
    
}

////////////
function change() {
    
    let i = 0 ;
    let count = setInterval(() => {
        if (i === 5) {
            i = 0 ;
        }
        header.style.backgroundImage = `url("../imgs/${images[i]}")` ;
        i = i+1 ;
        listBgChange.forEach((li) => {
            li.onclick = () => {
                // remove active
            listBgChange.forEach( li => {
                li.classList.remove("active")
            }) ;
        // add active to active element
        li.classList.add("active") ;
        if (li.dataset.req === "no") {
                StopBg(count) ;
                localStorage.setItem("resolve" , "no") ;
            }
            else {
                change() ;
                localStorage.setItem("resolve" , "yes") ;
            }
        }
        })
        
            
    }, 2000)
} ;
function StopBg(count) {
    clearInterval(count)
}
 /////

 window.onscroll = function() {
    if (window.scrollY > ourSkills.offsetTop -100 ) {
        skills.forEach((skill)=> {
            skill.style.width = skill.dataset.progress ;
            skill.style.transition = "2s"
        })
    }
 }
 ///////
 linksScroll.forEach((link) => {
    link.onclick = () => {
        window.scrollTo(0,document.querySelector(link.dataset.scroll).offsetTop)
    }
 });
 ////////
 bullets.forEach((bullet) => {
    bullet.onclick = () => {
        window.scrollTo(0,document.querySelector(bullet.dataset.scroll).offsetTop)
    }
 });
///// change main color ;
if (window.localStorage.getItem("color")) {
    listColor.forEach( (col)=> {
        col.classList.remove("active") ;
    }) ;
    document.querySelector(`[data-color ="${localStorage.getItem("color")}"]`).classList.add("active");
    document.documentElement.style.setProperty("--main-color", localStorage.getItem("color")) ;
}
listColor.forEach((li) => {
    li.onclick = ()=> {
        changeColor(li) ;
    } 
}) ;
function changeColor(li,e) {
    listColor.forEach((col) => {
        col.classList.remove("active") ;
    }) ;
    li.classList.add("active") ;
    document.documentElement.style.setProperty("--main-color" , li.dataset.color) ;
    window.localStorage.setItem("color",li.dataset.color) ;
}
/// active or desactive show bullet
if (localStorage.getItem("show")) {
    listOfSHow.forEach(li => {
        li.classList.remove("active")
    }) ;
    document.querySelector(`[data-show="${localStorage.getItem("show")}"]`).classList.add("active") ;
    if (localStorage.getItem("show") === "no"){
        bullet.classList.add("fermer")
    }
}
///////
listOfSHow.forEach(li => {
    li.addEventListener("click" , ()=> {
        listOfSHow.forEach(li => {
            li.classList.remove("active") ;
        })
        li.classList.add("active") ;
        if(li.dataset.show === "yes") {
            bullet.classList.remove("fermer")
            localStorage.setItem("show", "yes")
        }
        else if (li.dataset.show === "no") {
            bullet.classList.add("fermer")
            localStorage.setItem("show", "no")
        }
    })
}) ;

////// reset button
resetButton.onclick = () => {
    localStorage.clear() ;
    window.location.reload() ;
}
///////
boxButton.onclick = () => {
    boxButton.classList.toggle("open")
    settingBox.classList.toggle("open")
}


/*mouse */
const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}
