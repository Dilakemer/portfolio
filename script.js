document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor Glow Effect
    const cursorGlow = document.querySelector('.cursor-glow');

    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });

    // Navbar Scroll Glass Effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Typing Effect for Role
    const roleElement = document.querySelector('.role .highlight');
    if (roleElement) {
        // Simple entry animation logic could be added here
        // For now, CSS animations or static text works fine
    }

    // Slider Functionality
    document.querySelectorAll('.slider-container').forEach(slider => {
        const wrapper = slider.querySelector('.slider-wrapper');
        const slides = slider.querySelectorAll('.slide');
        const prevBtn = slider.querySelector('.prev');
        const nextBtn = slider.querySelector('.next');
        let currentSlide = 0;

        function updateSlider() {
            wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
                updateSlider();
            });

            nextBtn.addEventListener('click', () => {
                currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
                updateSlider();
            });
        }
    });

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation classes to sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Modal Functionality
    const projectData = {
        'code-alchemist': {
            title: 'Code Alchemist',
            images: [
                'projeler/code_alchemist.png',
                'projeler/code_alchemist2.png',
                'projeler/code_alchemist3.png',
                'projeler/code_alchemist4.png',
                'projeler/code_alchemist5.png'
            ],
            content: `
                <p>Code Alchemist, yazılım geliştirme süreçlerini yapay zeka ile güçlendiren kapsamlı bir asistan platformudur. Geliştiricilerin kod yazma hızını artırmak ve tekrarlayan görevleri otomatize etmek için tasarlanmıştır.</p>
                <h4>Öne Çıkan Özellikler:</h4>
                <ul>
                    <li><strong>Akıllı Kod Tamamlama:</strong> Bağlamı anlayarak kod önerileri sunar.</li>
                    <li><strong>Proje Yönetimi:</strong> Görev takibi ve süreç optimizasyonu sağlar.</li>
                    <li><strong>Hata Ayıklama:</strong> Kod hatalarını analiz eder ve çözüm önerir.</li>
                </ul>
                <h4>Teknolojiler:</h4>
                <p>Python (Backend), React (Frontend), LLM Modelleri (OpenAI/Gemini/Claude), FastAPI.</p>
            `
        },
        'smart-doc-rag': {
            title: 'Smart Doc RAG',
            images: [
                'projeler/rag.png',
                'projeler/rag2.png',
                'projeler/rag3.png',
                'projeler/rag4.png'
            ],
            content: `
                <p>Büyük doküman setleri (PDF, DOCX vb.) üzerinde doğal dil ile soru sormayı sağlayan gelişmiş bir RAG (Retrieval-Augmented Generation) sistemidir. Kullanıcı, dokümanları yükler ve sistem ilgili içeriği bularak mantıklı cevaplar üretir.</p>
                <h4>Öne Çıkan Özellikler:</h4>
                <ul>
                    <li><strong>Semantik Arama:</strong> Kelime bazlı değil, anlam bazlı arama yapar.</li>
                    <li><strong>Vektör Veritabanı:</strong> Hızlı erişim için ChromaDB kullanır.</li>
                    <li><strong>Doküman Analizi:</strong> Karmaşık tabloları ve metinleri işleyebilir.</li>
                </ul>
                <h4>Teknolojiler:</h4>
                <p>Python, LangChain, OpenAI API, ChromaDB, Streamlit (UI).</p>
            `
        },
        'nlp-sql': {
            title: 'NLP to SQL Chatbot',
            images: [
                'projeler/nlp.png',
                'projeler/nlp2.png',
                'projeler/nlp3.png'
            ],
            content: `
                <p>Teknik bilgisi olmayan kullanıcıların veritabanlarından veri çekebilmesini sağlayan bir chatbot. Kullanıcı doğal dil ile sorusunu yazar (örn: "Geçen ay en çok satan ürün hangisi?") ve sistem bunu otomatik olarak SQL sorgusuna çevirir.</p>
                <h4>Öne Çıkan Özellikler:</h4>
                <ul>
                    <li><strong>Text-to-SQL:</strong> Doğal dili anında SQL sorgusuna dönüştürme.</li>
                    <li><strong>Güvenli Sorgulama:</strong> Sadece okuma yetkisi ile güvenli veri erişimi.</li>
                    <li><strong>Şema Analizi:</strong> Veritabanı yapısını otomatik analiz eder.</li>
                </ul>
                <h4>Teknolojiler:</h4>
                <p>Python, OpenAI GPT-4, PostgreSQL, Flask.</p>
            `
        }
    };

    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-modal');

    let modalSliderInterval;

    document.querySelectorAll('.project-details-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.getAttribute('data-id');
            const data = projectData[projectId];

            if (data) {
                modalTitle.textContent = data.title;

                // Construct Modal Content with Slider
                let sliderHTML = '';
                if (data.images && data.images.length > 0) {
                    sliderHTML = `<div class="modal-slider">`;
                    data.images.forEach((img, index) => {
                        sliderHTML += `<img src="${img}" class="modal-slide ${index === 0 ? 'active' : ''}">`;
                    });
                    sliderHTML += `</div>`;
                }

                modalBody.innerHTML = sliderHTML + data.content;
                modal.style.display = 'flex';
                setTimeout(() => modal.classList.add('show'), 10);

                // Start Auto Slider for Modal
                if (data.images && data.images.length > 1) {
                    const slides = modalBody.querySelectorAll('.modal-slide');
                    let currentSlide = 0;

                    if (modalSliderInterval) clearInterval(modalSliderInterval);

                    modalSliderInterval = setInterval(() => {
                        slides[currentSlide].classList.remove('active');
                        currentSlide = (currentSlide + 1) % slides.length;
                        slides[currentSlide].classList.add('active');
                    }, 3000); // 3 seconds per slide
                }
            }
        });
    });

    // Close Modal Functions
    const closeModal = () => {
        modal.classList.remove('show');
        if (modalSliderInterval) clearInterval(modalSliderInterval); // Stop slider
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});
