const listItems = document.querySelectorAll(".li-li");
const listContentItems = document.querySelectorAll(".list-content");
const icons = document.querySelectorAll(".icon");
listItems.forEach(item => item.addEventListener("click", showContent));

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

