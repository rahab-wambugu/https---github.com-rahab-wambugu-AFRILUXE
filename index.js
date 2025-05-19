
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='none'
}

function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);
    const minusI =`<i class="fa-solid fa-minus"></i>`;
    const plusI =`<i class="fa-solid fa-plus"></i>`;

if (content.style.maxHeight && content.style.maxHeight !== '0px') {
      content.style.maxHeight = '0';
      icon.innerHTML = plusI;
} else {
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.innerHTML = minusI;
    }
}
