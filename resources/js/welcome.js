import JoinUsManager from "./join-us";

window.onload = () => {
    const joinUsManager = new JoinUsManager();
    
    document.body.addEventListener("scroll", (ev) => {
        revealContent();
        handleHeaderReadability();
    });
    
    activatePreviewFlashcardsButton();
};

const revealContent = () => {
    const nextContainers = [ document.getElementById("container-2") ];
    const reveal = document.body.scrollTop > document.body.clientHeight * .25; // let's reveal content at 25% of the vh 
    if(reveal) {
        const nextContainerToReveal = nextContainers[ Math.ceil(document.body.scrollTop / document.body.clientHeight) - 1 ];
        
        if(!nextContainerToReveal) return; 
        
        const sections = nextContainerToReveal.querySelectorAll("section");
        for(let section of sections) {
            if(!section.classList.contains("reveal-content")) {
                const shouldBeRevealed = (document.body.scrollTop % document.body.clientHeight) >= section.getBoundingClientRect().height;
                if(shouldBeRevealed) {
                    section.classList.add("reveal-content");
                }
            }
        }
    } 
};

const handleHeaderReadability = () => {
    const makeMoreReadable = document.body.scrollTop > 0;
    if(makeMoreReadable) {
        makeHeaderMoreReadable();
    }
    else {
        setDefaultHeaderReadability();
    }
}

const activatePreviewFlashcardsButton = () => {
    const btn = document.getElementById("preview-flashcards-btn");
    if(!btn) return;
    
    const link = btn.querySelector("a");
    const linkTarget = link.href.split("#").pop();
    const targetElement = document.getElementById(linkTarget);

    link.addEventListener("click", (ev) => {
        ev.preventDefault();
    });

    btn.addEventListener("click", (ev) => {
        jumpTo(targetElement);
    })
};

const jumpTo = (element) => {
    if(!element) return;
    const stop = element.getBoundingClientRect().height * .5; // Stop to scroll at the half of the element should be enought to reveal content
    document.body.scrollTo({
        top: stop,
        behavior: "smooth"
    });
}

const makeHeaderMoreReadable = () => {
    document.querySelector("header").classList.add("better-visible")
}

const setDefaultHeaderReadability = () => {
    document.querySelector("header").classList.remove("better-visible")
}