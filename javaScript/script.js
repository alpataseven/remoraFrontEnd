function imgSlider(anything) {
    document.querySelector('.neta1').src = anything;
}

TweenMax.from('.navbar',1, {
    delay: 1,
    x: -40,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.to(".stripe", 2.4, {
    delay: 0,
    width: "100%",
    ease: Expo.easeInOut
})

TweenMax.from(".robot", 1, {
    delay: 1.4,
    opacity: 0,
    y: -1000,
    ease: Circ.easeInOut
})

TweenMax.from(".header", 2, {
    delay: 1.4,
    x: -600,
    ease: Circ.easeInOut
})

TweenMax.from(".text h2", 1.1, {
    delay: 3.3,
    opacity: 0,
    y: 40,
    ease: Circ.easeInOut
})

TweenMax.from(".text", 1.1, {
    delay: 1.4,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
})

TweenMax.from(".small-robot", 1, {
    delay: 4.5,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
})

TweenMax.from(".btn", 1, {
    opacity: 0,
    delay: 1.6,
    y: 20,
    ease: Expo.easeInOut
})


function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


const openVideoBtn = document.getElementById('openVideoBtn');
        const closeVideoBtn = document.getElementById('closeVideoBtn');
        const overlay = document.getElementById('overlay');
        const videoContainer = document.getElementById('videoContainer');
        const youtubeVideo = document.getElementById('youtubeVideo');

        openVideoBtn.addEventListener('click', () => {
            youtubeVideo.src = "https://www.youtube.com/embed/jDPzI9HORjY?si=51_Lxd_u4bM-3CWr";
            overlay.style.display = 'block';
            videoContainer.style.display = 'block';
        });

        closeVideoBtn.addEventListener('click', () => {
            youtubeVideo.src = "";
            overlay.style.display = 'none';
            videoContainer.style.display = 'none';
        });

        overlay.addEventListener('click', () => {
            youtubeVideo.src = "";
            overlay.style.display = 'none';
            videoContainer.style.display = 'none';
        });

function toggleAnswer(element) {
    var answer = element.nextElementSibling;
    var icon = element.querySelector('.toggle-icon');
    
    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.style.opacity = 0;
        icon.textContent = "+";
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.opacity = 1;
        icon.textContent = "-";
    }
}



