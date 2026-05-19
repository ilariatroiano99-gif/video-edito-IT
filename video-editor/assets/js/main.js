document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. TRADUZIONI (IT/EN)
    // ==========================================
    const translations = {
        it: {
            nav_about: "CHI SONO",
            nav_projects: "PROGETTI",
            nav_contact: "CONTATTI",
            hero_title: "PORTFOLIO<br>ILARIA<br>TROIANO",
            hero_subtitle: "Designer Multidisciplinare",
            hero_subtitle_light: "Spazi, Identità e Pixel in un unico flusso creativo.",
            pill_visual: "VISUAL THINKING",
            note_visual: "Risolvere problemi complessi attraverso la sintesi visiva e l'essenzialità.",
            pill_spatial: "SPATIAL DESIGN",
            note_spatial: "Far interagire elementi visivi e spaziali per soluzioni su misura.",
            pill_brand: "BRAND IDENTITY",
            note_brand: "Coerenza visiva totale, dal logo al materiale tattile.",
            pill_social: "SOCIAL STRATEGY",
            note_social: "Comunicazione visiva costante e funzionale.",
            about_title: "Chi Sono",
            about_intro: "Mi occupo di interior design, visual identity e digital content con un approccio essenziale focalizzato sulla funzionalità. Credo nella coerenza estetica tra il contenitore (spazio) e il contenuto (brand).",
            edu_date_1: "2021 — 2024",
            edu_title_1: "Master in Design for Innovation",
            edu_desc_1: "<strong>110/110 cum laude.</strong> Product Curriculum presso l'Università Vanvitelli. Ricerca sull'innovazione dei materiali e processi creativi.",
            edu_date_2: "2018 — 2021",
            edu_title_2: "Design e Comunicazione",
            edu_desc_2: "<strong>110/110 cum laude.</strong> Fondamenta del visual design, tipografia e comunicazione strategica presso l'Università Vanvitelli.",
            macro_eyebrow: "Seleziona un'area di interesse",
            macro_1: "01. SPATIAL DESIGN",
            macro_2: "02. VISUAL IDENTITY",
            macro_3: "03. DIGITAL & WEB",
            project_tag_1: "01 — SPATIAL DESIGN",
            project_title_1: "Vinicolo Winery",
            project_desc_1: "Rilievo, Concept 3D, Branding e Social Strategy per una vineria moderna.",
            item_1_1: "Foto reale del locale",
            item_1_2: "Render 3D Concept",
            item_1_3: "Logo & Palette",
            item_1_4: "Tipografia",
            item_1_5: "Social Feed",
            project_tag_2: "02 — VISUAL IDENTITY",
            project_title_2: "Visual Systems",
            project_desc_2: "Identità visive e progetti grafici coordinati.",
            item_2_1: "TOTEMPO: Educational Game",
            item_2_2: "FT LAB: Branding",
            item_2_3: "SMCV IN BICI",
            item_2_4: "SMCV IN BICI: Pack Portachiavi Mockup",
            project_tag_3: "03 — DIGITAL & WEB",
            project_title_3: "Web Design",
            project_desc_3: "Sviluppo interfacce e landing page.",
            item_3_1: "Tanzi Dental Clinic: Website",
            item_3_2: "Visionary Journeys: AI Travel",
            item_3_3: "Essenza: Metallo & Materia",
            item_3_4: "V-STREAM: Beyond Broadcasting",
            footer_eyebrow: "Pronto a dare forma alla tua idea?",
            cta_email: "PARLIAMONE!",
            footer_location: "Santa Maria Capua Vetere, Italia"
        },
        en: {
            nav_about: "ABOUT",
            nav_projects: "PROJECTS",
            nav_contact: "CONTACT",
            hero_title: "PORTFOLIO<br>ILARIA<br>TROIANO",
            hero_subtitle: "Multidisciplinary Designer",
            hero_subtitle_light: "Spaces, Identities and Pixels in a single creative flow.",
            pill_visual: "VISUAL THINKING",
            note_visual: "Solving complex problems through visual synthesis and essentiality.",
            pill_spatial: "SPATIAL DESIGN",
            note_spatial: "Integrating visual and spatial elements for tailored solutions.",
            pill_brand: "BRAND IDENTITY",
            note_brand: "Total visual coherence, from logo to tactile materials.",
            pill_social: "SOCIAL STRATEGY",
            note_social: "Constant and functional visual communication.",
            about_title: "About Me",
            about_intro: "I specialize in interior design, visual identity, and digital content with an essential approach focused on functionality. I believe in aesthetic consistency between the container (space) and the content (brand).",
            edu_date_1: "2021 — 2024",
            edu_title_1: "Master in Design for Innovation",
            edu_desc_1: "<strong>110/110 cum laude.</strong> Product Curriculum at Vanvitelli University. Research on material innovation and creative processes.",
            edu_date_2: "2018 — 2021",
            edu_title_2: "Design and Communication",
            edu_desc_2: "<strong>110/110 cum laude.</strong> Fundamentals of visual design, typography, and strategic communication at Vanvitelli University.",
            macro_eyebrow: "Select an area of interest",
            macro_1: "01. SPATIAL DESIGN",
            macro_2: "02. VISUAL IDENTITY",
            macro_3: "03. DIGITAL & WEB",
            project_tag_1: "01 — SPATIAL DESIGN",
            project_title_1: "Vinicolo Winery",
            project_desc_1: "Survey, 3D Concept, Branding, and Social Strategy for a modern winery.",
            item_1_1: "Venue real photo",
            item_1_2: "3D Render Concept",
            item_1_3: "Logo & Palette",
            item_1_4: "Typography",
            item_1_5: "Social Feed",
            project_tag_2: "02 — VISUAL IDENTITY",
            project_title_2: "Visual Systems",
            project_desc_2: "Visual identities and coordinated graphic projects.",
            item_2_1: "TOTEMPO: Educational Game",
            item_2_2: "FT LAB: Branding",
            item_2_3: "SMCV IN BICI",
            item_2_4: "SMCV IN BICI: Keychain Pack Mockup",
            project_tag_3: "03 — DIGITAL & WEB",
            project_title_3: "Web Design",
            project_desc_3: "Interface and landing page development.",
            item_3_1: "Tanzi Dental Clinic: Website",
            item_3_2: "Visionary Journeys: AI Travel",
            item_3_3: "Essenza: Metallo & Materia",
            item_3_4: "V-STREAM: Beyond Broadcasting",
            footer_eyebrow: "Ready to give shape to your idea?",
            cta_email: "LET'S TALK!",
            footer_location: "Santa Maria Capua Vetere, Italy"
        }
    };

    const setLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        // Aggiorna classi attive bottoni
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Salva preferenza
        localStorage.setItem('preferred_lang', lang);
        document.documentElement.lang = lang;
    };

    // Event Listeners Lingua
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
    });

    // Controllo lingua salvata
    const savedLang = localStorage.getItem('preferred_lang') || 'it';
    setLanguage(savedLang);


    // ==========================================
    // 2. REVEAL ON SCROLL
    // ==========================================
    const revealElements = document.querySelectorAll('[data-reveal]');
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);


    // ==========================================
    // 3. SMOOTH SCROLL
    // ==========================================
    document.querySelectorAll('nav a, .area-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    // ==========================================
    // 4. MOUSE PARALLAX (Desktop only)
    // ==========================================
    const photoWrapper = document.querySelector('.hero-photo-wrapper');
    if (photoWrapper && window.innerWidth > 768) {
        window.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 50;
            const y = (window.innerHeight / 2 - e.pageY) / 50;
            photoWrapper.style.transform = `translate(${x}px, ${y}px)`;
        });
    }


    // ==========================================
    // 5. PILLS INTERACTION (Hover Desktop / Tap Mobile)
    // ==========================================
    const pills = document.querySelectorAll('.bio-pill');
    const isTouchDevice = () => window.matchMedia('(hover: none)').matches;

    pills.forEach((pill, index) => {
        const rotation = (index % 2 === 0) ? -2 : 2;
        pill.style.transform = `rotate(${rotation}deg)`;

        // Desktop Hover
        pill.addEventListener('mouseenter', () => {
            if (!isTouchDevice()) pill.style.transform = `scale(1.1) rotate(0deg)`;
        });
        pill.addEventListener('mouseleave', () => {
            if (!isTouchDevice()) pill.style.transform = `rotate(${rotation}deg)`;
        });

        // Mobile Tap
        pill.addEventListener('click', (e) => {
            if (isTouchDevice()) {
                e.stopPropagation();
                const isOpen = pill.classList.contains('pill-open');
                pills.forEach(p => {
                    p.classList.remove('pill-open');
                    const idx = [...pills].indexOf(p);
                    p.style.transform = `rotate(${(idx % 2 === 0) ? -2 : 2}deg)`;
                });
                if (!isOpen) {
                    pill.classList.add('pill-open');
                    pill.style.transform = `scale(1.1) rotate(0deg)`;
                }
            }
        });
    });

    document.addEventListener('click', () => {
        if (isTouchDevice()) {
            pills.forEach((p, idx) => {
                p.classList.remove('pill-open');
                p.style.transform = `rotate(${(idx % 2 === 0) ? -2 : 2}deg)`;
            });
        }
    });
});
