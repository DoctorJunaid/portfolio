
function showSideBar(){
    const sidebar=document.querySelector(".sidebar");
    sidebar.style.display="flex"
};
        function hideSideBar(){
            const sidebar=document.querySelector(".sidebar");
            sidebar.style.display="none"
        }  ;

        // Setup and start animation!
        var typed = new Typed('#text-change', {
            strings: ["Web Developer.", "Graphic Designer.", "Web Designer.", "Video Editor."],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1000,
            loop: true
        });
        gsap.from("header",{
            y:-100,
            ease:"ease.inOut",
            duration:2,

        });
        gsap.from(".intro1",{
            y:-300,
            ease:"ease.in",
            duration:2,
        });
        gsap.from(".intro2",{
            x:-300,
            ease:"ease.in",
            duration:2,
        });

        gsap.from("#pro-img", {
            scale: 0,
            duration: 2,
        });
        gsap.to("#pro-img", {
          y: -10,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        });
        gsap.fromTo("#pro-img", {
            scale: 0,
            transformOrigin: "center center"
        }, {
            scale: 1,
            duration: 2,
            ease: "power2.out"
        });
        
    //-----------------------------------------------------------------------//
    // Initialize animations on page load
    document.addEventListener("DOMContentLoaded", () => {
      const elements = document.querySelectorAll("#contact-us, .heading-contact, #heading-contact1, .form-container, .contact-info, #contact-p, .contact-form");

      // Observer callback to handle animations
      const animateOnScroll = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate in when visible
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out"
            });
          } else {
            // Reset animation when leaving view
            gsap.to(entry.target, {
              opacity: 0,
              y: 50,
              duration: 0.5,
              ease: "power2.in"
            });
          }
        });
      };

      // IntersectionObserver options
      const observerOptions = {
        root: null, // Observe relative to the viewport
        rootMargin: "0px", // No margin
        threshold: 0.5, // Trigger when 50% of the element is visible
      };

      // Create observer
      const observer = new IntersectionObserver(animateOnScroll, observerOptions);

      // Observe each element
      elements.forEach(el => {
        gsap.set(el, { opacity: 0, y: 50 }); // Set initial state
        observer.observe(el);
      });
    });

    //-----------------------------------------------------
    var typed2 = new Typed('#text-change2', {
        strings: ["Front-End Developer","Web Developer.","Graphic Designer.", "Web Designer.", "Video Editor."],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    });

    //---------------------------------------------------------------
    document.addEventListener("DOMContentLoaded", () => {
        const sidebar = document.querySelector(".sidebar");
        const sidebarLinks = document.querySelectorAll(".sidebar a");
    
        // Function to close the sidebar
        function closeSidebar() {
            sidebar.style.display = "none";
        }
    
        // Attach click event to each link in the sidebar
        sidebarLinks.forEach(link => {
            link.addEventListener("click", closeSidebar);
        });
    
        // Optional: Close sidebar when clicking outside of it
        document.addEventListener("click", (event) => {
            if (!sidebar.contains(event.target) && !event.target.closest(".menu-button")) {
                closeSidebar();
            }
        });
    });
    // ----------------------------------------animation contact page triger------------
    document.addEventListener("DOMContentLoaded", () => {
        const elements = document.querySelectorAll(" .container-services, .services-heading, .services-list")
  
        // Observer callback to handle animations
        const animateOnScroll = (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Animate in when visible
              gsap.to(entry.target, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"
              });
            } else {
              // Reset animation when leaving view
              gsap.to(entry.target, {
                opacity: 0,
                y: 100,
                duration: 0.5,
                ease: "power2.in"
              });
            }
          });
        };
  
        // IntersectionObserver options
        const observerOptions = {
          root: null, // Observe relative to the viewport
          rootMargin: "0px", // No margin
          threshold: 0.5, // Trigger when 50% of the element is visible
        };
  
        // Create observer
        const observer = new IntersectionObserver(animateOnScroll, observerOptions);
  
        // Observe each element
        elements.forEach(el => {
          gsap.set(el, { opacity: 0, y: 50 }); // Set initial state
          observer.observe(el);
        });
      });
      //--------------------------------------------------------------------------
      document.addEventListener("DOMContentLoaded", () => {
        const elements = document.querySelectorAll("#about h1, #about .about-text, #about #about-line, #about #about-intro");
  
        // Observer callback to handle animations
        const animateOnScroll = (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Animate in when visible
              gsap.to(entry.target, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"
              });
            } else {
              // Reset animation when leaving view
              gsap.to(entry.target, {
                opacity: 0,
                y: 200,
                duration: 0.5,
                ease: "power2.in"
              });
            }
          });
        };
  
        // IntersectionObserver options
        const observerOptions = {
          root: null, // Observe relative to the viewport
          rootMargin: "0px", // No margin
          threshold: 0.5, // Trigger when 50% of the element is visible
        };
  
        // Create observer
        const observer = new IntersectionObserver(animateOnScroll, observerOptions);
  
        // Observe each element
        elements.forEach(el => {
          gsap.set(el, { opacity: 0, y: 50 }); // Set initial state
          observer.observe(el);
        });
      });
//   ---------------------------------------------------------------
  
    
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".projects-heading, .projects-list");

  // Observer callback to handle animations
  const animateOnScroll = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate in when visible
        gsap.to(entry.target, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out"
        });
      } else {
        // Reset animation when leaving view
        gsap.to(entry.target, {
          opacity: 0,
          y: 50,
          duration: 0.5,
          ease: "power2.in"
        });
      }
    });
  };

  // IntersectionObserver options
  const observerOptions = {
    root: null, // Observe relative to the viewport
    rootMargin: "0px", // No margin
    threshold: 0.5, // Trigger when 50% of the element is visible
  };

  // Create observer
  const observer = new IntersectionObserver(animateOnScroll, observerOptions);

  // Observe each element
  elements.forEach(el => {
    gsap.set(el, { opacity: 0, y: 50 }); // Set initial state
    observer.observe(el);
  });
})
//-------------------------------
