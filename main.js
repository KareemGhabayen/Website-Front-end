var Typed = new Typed(".text", {
strings:["Fronted developer" , "Cyber security" ,"Web developer"],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true
});


window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if(window.scrollY > 50) {
    header.style.backgroundColor = 'rgba(23, 23, 23, 1)';  // غير اللون حسب ما تحب
    header.style.boxShadow = '0 4px 10px rgba(0, 238, 255, 0.7)';
  } else {
    header.style.backgroundColor = '#081b29';  // اللون الأصلي
    header.style.boxShadow = 'none';
  }
});


const sections = document.querySelectorAll('section');

function showSectionsOnScroll() {
  const triggerPoint = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerPoint) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', showSectionsOnScroll);

// تفعيل الأنيميشن عند تحميل الصفحة للسكشنات الموجودة مباشرة
showSectionsOnScroll();


// Show or hide the back to top button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// Smooth scroll to top when button clicked
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Toggle navbar on mobile
let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close navbar when a link is clicked (mobile UX)
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});
 

window.addEventListener('scroll', () => {
  const parallaxImg = document.querySelector('.parallax-img');
  const scrollY = window.scrollY;
  if (parallaxImg) {
    parallaxImg.style.transform = `translateY(${scrollY * 0.3}px)`;
  }
});
