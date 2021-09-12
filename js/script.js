// function showElement1() {
//     const targetDiv1 = document.getElementById("hide-content-1");
//   if (targetDiv1.style.display !== "none") {
//     targetDiv1.style.display = "none";
//   } else {
//     targetDiv1.style.display = "block";
//   }
// };

// function showElement2() {
//     const targetDiv2 = document.getElementById("hide-content-2");
//     if (targetDiv2.style.display !== "none") {
//         targetDiv2.style.display = "none";
//     } else {
//         targetDiv2.style.display = "block";
//     }
// };

// function showElement3() {
//     const targetDiv3 = document.getElementById("hide-content-3");
//     if (targetDiv3.style.display !== "none") {
//       targetDiv3.style.display = "none";
//     } else {
//       targetDiv3.style.display = "block";
//     }
// };

// function showElement4() {
//     const targetDiv4 = document.getElementById("hide-content-4");
//     if (targetDiv4.style.display !== "none") {
//       targetDiv4.style.display = "none";
//     } else {
//       targetDiv4.style.display = "block";
//     }
// };

// function showElement5() {
//     const targetDiv5 = document.getElementById("hide-content-5");
//     if (targetDiv5.style.display !== "none") {
//       targetDiv5.style.display = "none";
//     } else {
//       targetDiv5.style.display = "block";
//     }
// };

// function showElement6() {
//     const targetDiv6 = document.getElementById("hide-content-6");
//     if (targetDiv6.style.display !== "none") {
//       targetDiv6.style.display = "none";
//     } else {
//       targetDiv6.style.display = "block";
//     }
// };




const listItems = document.querySelectorAll(".li-li");
const listContentItems = document.querySelectorAll(".list-content");
const icons = document.querySelectorAll(".icon");
listItems.forEach(item => item.addEventListener("click", showContent));

// const icons = document.querySelectorAll(".btn");
// icons.forEach(iTem => iTem.addEventListener("click", changeIcon));



function showContent(e){ 
    const icon = document.querySelector(`#${this.id}-button`);
    const listItem = document.querySelector(`#${this.id}-content`);
    if(listItem.style.display == "block") {  
      listItem.style.display = "none";
      icon.classList.replace("fa-times", "fa-plus");
    // changeIcon();
       
    } else {  
    removeItem();
    icon.classList.replace("fa-plus", "fa-times");
    listItem.style.display = "block";
    }  
};

function removeItem() {
    listContentItems.forEach(item => {
    item.style.display = "none";
    })
    icons.forEach(item => {
        item.classList.replace("fa-times","fa-plus");
    })
};

function changeIcon() {
  const icon = document.querySelector(`#${this.id}-button`);
  console.log(this.id);
    if (icon.classList[1] == "fa-plus") {
        icon.classList.replace("fa-plus", "fa-times");
    }
    else if (icon.classList[1] == "fa-times") {
        icon.classList.replace("fa-times", "fa-plus");
    }    
};

// var something = document.querySelectorAll('.btn-');
// var idk = document.querySelectorAll('.on-click');

// idk.addEventListener('click', changeIcon);

// function changeIcon() {
//     for(var i = 0; i<something.length; i++) {
//         something[i].classList.remove('fa-plus')
//     }

// };

// const icons = document.querySelectorAll(".icon");
// icons.forEach(item => item.addEventListener("click", iconChange));


// function iconChange(e) {
//    const iconic = document.querySelector(`#${this.id}`);
//    if(iconic.classList[1] == "fa-plus"){
//      iconic.classList.replace("fa-plus","fa-times");
//    }

//    else if(iconic.classList[1] == "fa-times"){
//      iconic.classList.replace("fa-times","fa-plus");
//    }
//  };
