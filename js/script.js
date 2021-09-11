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
listItems.forEach(item => item.addEventListener("click", showContent));


function showContent(e){ 
    const listItem = document.querySelector(`#${this.id}-content`);
    if(listItem.style.display == "block") {
       listItem.style.display = "none";
    } else {
    console.log(this.id);
    removeItem();
    listItem.style.display = "block";
    }
};

function removeItem() {
    listContentItems.forEach(item => {
    item.style.display = "none";
    // item.classList.remove('show');
    })
};

function changeIcon() {
    const icon = getElementById("icon-plus");
    icon.classList.remove("remove");
}