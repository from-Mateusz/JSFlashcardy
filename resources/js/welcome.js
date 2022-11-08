import JoinUsManager from "./join-us";

window.onload = () => {
    const joinUsManager = new JoinUsManager();
    const totalAltitude = document.body.getBoundingClientRect().height;
    document.body.addEventListener("scroll", (ev) => {
        revealContent();
        handleHeaderReadability();
    });
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

const makeHeaderMoreReadable = () => {
    document.querySelector("header").classList.add("better-visible")
}

const setDefaultHeaderReadability = () => {
    document.querySelector("header").classList.remove("better-visible")
}