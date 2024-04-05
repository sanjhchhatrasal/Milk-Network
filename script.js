function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotive()


function blink(){
    const headings = document.querySelectorAll('#animated-h1 h1');

let index = 0;
/* let delayBetweenHeadings = 1500; */ // Initial delay before the first heading appears (4 seconds)

function animateHeading() {
    if (index >= headings.length) {
        index = 0; // Reset index to 0 to repeat the animation sequence
    }

    headings[index].style.opacity = 1; // Set opacity to 1 before animation
    setTimeout(() => {
        headings[index].style.opacity = 0; // Set opacity to 0 after specified delay
        index++;
        animateHeading(); // Call the function recursively for the next heading
    }, 1500);
}

animateHeading(); // Start the animation sequence
}
blink()

function currentTimePageFive(){
    function updateTime() {
        // Get the current time
        var currentTime = new Date();
        
        // Get the hours, minutes, and seconds
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
    
         // Add leading zeros if hours or minutes are single digits
         hours = (hours < 10 ? "0" : "") + hours;
         minutes = (minutes < 10 ? "0" : "") + minutes;
        
        // Format the time (e.g., "12:34:56")
        var formattedTime = hours + ":" + minutes ;
        
        // Update the content of the <span> with the formatted time
        document.getElementById("currentTime").textContent = formattedTime;
    }
    
    // Call updateTime() initially to display the current time immediately
    updateTime();
    
    // Update the time every second (1000 milliseconds = 1 second)
    setInterval(updateTime, 1000);
}
currentTimePageFive()


function navBar(){
    var tl= gsap.timeline({
        scrollTrigger: {
            scroller: "#main",
            trigger: "#navbar",
            start: "50% 0%",
            end: "+=500",
       //      markers: true,
            scrub:1,
        }
    })
    tl.to("#navbar h6",{
        y:"-500%",
    })
    .to("#navbar",{
        backgroundColor : "#fff"
    })
    .to("#navbar h6",{
        y:"0%"
    },"A")
    .to("#navbar h1",{
        opacity: 1
    },"A")

}
navBar()

function pageOne(){
    var tl1= gsap.timeline({
        scrollTrigger: {
            scroller: "#main",
            trigger: "#page1",
            start: "10% 10%",
            end: "+=500",
         //    markers: true,
             pin: true,
            scrub:1,
        }
    })
    tl1.to("#video",{
        height: "100%",
        width: "100%",
    })
}

pageOne()

function pageThree(){
    var tl2= gsap.timeline({
        scrollTrigger: {
            scroller: "#main",
            trigger: "#page3",
            start: "-8% 10%",
            end: "+=500",
         //    markers: true,
            scrub:1,
        }
    })

    tl2.to(".horizontal-card #right #image1",{
        clipPath:"polygon(0 0, 99% 0, 99% 100%, 0 100%)",
        width: "95%",
    })
    .to(".horizontal-card #right #image2",{
        clipPath:"polygon(0 0, 99% 0, 99% 100%, 0 100%)",
        width: "95%",
        
    })
    .to(".horizontal-card #right #image3",{
        clipPath:"polygon(0 0, 99% 0, 99% 100%, 0 100%)",
        width: "95%",
        })
}
pageThree()