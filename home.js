
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === "welcomeText" || entry.target.id === "researchText") {
                    entry.target.classList.add("animate-up");
                } else if (entry.target.classList.contains("left")) {
                    entry.target.classList.add("animate-left");
                } else if (entry.target.classList.contains("right")) {
                    entry.target.classList.add("animate-right");
                }

                entry.target.classList.remove("hidden");
                observer.unobserve(entry.target); // Animation only once
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.hidden').forEach(el => {
        observer.observe(el);
    });

