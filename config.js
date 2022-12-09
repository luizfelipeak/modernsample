// ------------ Navbar functions ------------
    // ------------ Navbar variables ------------
        const navButton = document.getElementById("nav-btn");
        const modalNav = document.getElementById("modal-nav");
        const closeModal = document.getElementById("close-modal");
        let isOpened;
    // ------------------------------------------

    navButton.addEventListener("click", () => {
        navButton.setAttribute("aria-expanded", "true");
        modalNav.setAttribute("data-state", "opened");
    });

    closeModal.addEventListener("click", () => {
        navButton.setAttribute("aria-expanded", "false");
        modalNav.setAttribute("data-state", "closed");
    });
// ------------------------------------------

// ------------ Intersection Observer ------------
    const mainContent = document.getElementById("main-content");
    const mainContentOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -70px 0px"
    };
    const mainContentObserver = new IntersectionObserver((entries, mainContentObserver) => {
        entries.forEach(entry => {
            if(entry.isIntersecting)
                mainContent.classList.add("show");
        });
    }, mainContentOptions);

    mainContentObserver.observe(mainContent);

    const section2 = document.getElementsByClassName("section-2")[0];
    const section2Options = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -70px 0px"
    };
    const section2Observer = new IntersectionObserver((entries, section2Observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting)
                section2.classList.add("show");
        });
    }, section2Options);

    section2Observer.observe(section2);
// -----------------------------------------------