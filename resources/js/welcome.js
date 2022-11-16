import JoinUsManager from "./join-us";

window.onload = () => {
    const joinUsManager = new JoinUsManager();
    
    document.body.addEventListener("scroll", (ev) => {
        revealContent();
        handleTopNavReadability();
    });
    
    activatePreviewFlashcardsButton();
};

const revealContent = () => {
    const nextContainers = [ ...document.querySelectorAll(".container-n") ];
    const reveal = document.body.scrollTop > document.body.clientHeight * .25; // reveal container's content on 25% scroll alongside container
    if(reveal) {
        const nextContainerToReveal = nextContainers[ Math.ceil(document.body.scrollTop / document.body.clientHeight) - 1 ];
        
        if(!nextContainerToReveal) return; 
        
        const sections = nextContainerToReveal.querySelectorAll("section");
        for(let section of sections) {
            if(section.classList.contains("hidden-but-revealed") && !section.classList.contains("reveal-content")) {
                const shouldBeRevealed = (document.body.scrollTop + document.body.clientHeight) > section.offsetTop * 1.1;
                if(shouldBeRevealed) {
                    section.classList.add("reveal-content");
                }
            }
        }
    } 
};

const handleTopNavReadability = () => {
    const makeMoreReadable = document.body.scrollTop > 0;
    if(makeMoreReadable) {
        makeTopNavMoreReadable();
    }
    else {
        setDefaultTopNavReadability();
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
    const stop = element.getBoundingClientRect().height;
    document.body.scrollTo({
        top: stop,
        behavior: "smooth"
    });
}

const makeTopNavMoreReadable = () => {
    document.getElementById("top-nav").classList.add("better-visible")
}

const setDefaultTopNavReadability = () => {
    document.getElementById("top-nav").classList.remove("better-visible")
}