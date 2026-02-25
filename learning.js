// ═══════════════════════════════════════
// LEARNING PLATFORM — JavaScript
// FreeCodeCamp-Inspired, Arabic RTL
// ═══════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {

    // ── 1. Typing Effect ──
    const typingSkills = [
        "HTML & CSS",
        "JavaScript",
        "Python",
        "React.js",
        "Node.js",
        "REST APIs",
        "Git & GitHub",
        "Data Science",
        "Machine Learning",
    ];

    const typingEl = document.getElementById("lp-typing-text");
    let skillIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 1800;

    function typeSkill() {
        if (!typingEl) return;
        const currentSkill = typingSkills[skillIndex];

        if (!isDeleting) {
            typingEl.textContent = currentSkill.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentSkill.length) {
                isDeleting = true;
                setTimeout(typeSkill, pauseTime);
                return;
            }
            setTimeout(typeSkill, typeSpeed);
        } else {
            typingEl.textContent = currentSkill.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                skillIndex = (skillIndex + 1) % typingSkills.length;
            }
            setTimeout(typeSkill, deleteSpeed);
        }
    }

    setTimeout(typeSkill, 600);

    // ── 2. Scroll Fade-In Observer ──
    const fadeObserverOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("lp-visible");

                // Animate progress bars inside this element
                const progressBars = entry.target.querySelectorAll(
                    ".lp-progress-fill, .lp-dash-path-fill"
                );
                progressBars.forEach((bar) => {
                    const targetWidth = bar.getAttribute("data-width");
                    if (targetWidth) {
                        setTimeout(() => {
                            bar.style.width = targetWidth;
                        }, 300);
                    }
                });

                observer.unobserve(entry.target);
            }
        });
    }, fadeObserverOptions);

    // Also observe individual progress bars that might be outside lp-fade elements
    const standaloneProgressBars = document.querySelectorAll(
        ".lp-progress-fill[data-width], .lp-dash-path-fill[data-width]"
    );

    const progressObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const targetWidth = entry.target.getAttribute("data-width");
                if (targetWidth) {
                    setTimeout(() => {
                        entry.target.style.width = targetWidth;
                    }, 400);
                }
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: "0px", threshold: 0.1 });

    const fadeEls = document.querySelectorAll(".lp-fade");
    fadeEls.forEach((el) => fadeObserver.observe(el));

    standaloneProgressBars.forEach((bar) => progressObserver.observe(bar));

    // ── 3. Circular Progress Animation ──
    const circleEl = document.getElementById("lp-main-circle");
    const circlePctEl = document.getElementById("lp-circle-pct");
    const totalProgress = 27; // overall % complete (simulated)

    function animateCircle() {
        if (!circleEl || !circlePctEl) return;
        const circumference = 2 * Math.PI * 60; // radius = 60
        const offset = circumference - (totalProgress / 100) * circumference;
        circleEl.style.strokeDashoffset = offset;

        // Animate the percentage text
        let current = 0;
        const increment = totalProgress / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= totalProgress) {
                current = totalProgress;
                clearInterval(timer);
            }
            circlePctEl.textContent = Math.round(current) + "%";
        }, 30);
    }

    // Trigger circle animation when dashboard is visible
    const dashSection = document.getElementById("dashboard");
    if (dashSection) {
        const dashObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateCircle();
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );
        dashObserver.observe(dashSection);
    }

    // ── 4. Counter Animation (Hero Stats) ──
    const counters = document.querySelectorAll(".lp-stat-number[data-count]");
    const counterObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute("data-count"), 10);
                    const duration = 1500;
                    const startTime = performance.now();

                    function updateCounter(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        el.textContent = Math.round(target * eased) + "+";
                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        }
                    }
                    requestAnimationFrame(updateCounter);
                    observer.unobserve(el);
                }
            });
        },
        { threshold: 0.5 }
    );
    counters.forEach((c) => counterObserver.observe(c));

    // ── 5. Smooth Scroll for Internal Links ──
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // ── 6. Navbar Scroll Effect ──
    const nav = document.querySelector(".lp-nav");
    if (nav) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                nav.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
                nav.style.borderBottomColor = "rgba(49, 196, 141, 0.15)";
            } else {
                nav.style.boxShadow = "none";
                nav.style.borderBottomColor = "rgba(255, 255, 255, 0.08)";
            }
        });
    }
});
