
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display ='flex';
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display ='none';
}

document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        hideSidebar();
    });   
});

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

const testimonials = document.querySelectorAll('.testimonial-box');
  let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((testi, i) => {
      testi.style.display = i === index ? 'block' : 'none';
    });
  }
  document.getElementById('prevArrow').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    showTestimonial(currentIndex);
  });

  document.getElementById('nextArrow').addEventListener('click', () => {
    currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    showTestimonial(currentIndex);
  });

  showTestimonial(currentIndex);

