function initSwiper() {
  const sliderEl = document.querySelector(".slider-wrapper");
  if (!sliderEl || typeof Swiper === "undefined") return;

  new Swiper(sliderEl, {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}

function initFormValidation() {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false,
    );
  });
}

function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;
  contactForm.addEventListener("submit", function (event) {
    if (this.checkValidity()) {
      event.preventDefault();
      const btn = this.querySelector("button");
      const originalText = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';

      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check me-2"></i>Sent!';
        btn.classList.replace("Deep-Cyan", "btn-success");
        this.reset();
        this.classList.remove("was-validated");

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.replace("btn-success", "Deep-Cyan");
          btn.disabled = false;
        }, 3000);
      }, 2000);
    }
  });
}


function initAll() {
  initSwiper();
  initFormValidation();
  initContactForm();
};

document.addEventListener("DOMContentLoaded", initAll);
