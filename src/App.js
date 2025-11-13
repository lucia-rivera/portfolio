import './index.css';
import { useState, useEffect } from 'react';
import travelPhoto from './assets/images/travel2.jpg';
import bcPublicService from './assets/images/bc-public-service.jpg';
import italyEnergy from './assets/images/italy_we_are_energy.jpg';
import volleyball from './assets/images/volleyball.jpg';
import cvPDF from './assets/documents/curriculum-vitae-lucia-rivera.pdf';

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'education', 'experience', 'projects', 'extracurriculars', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }

            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeSidebar = () => setSidebarOpen(false);

    const handleDownloadResume = (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = cvPDF;
        link.download = 'Curriculum Vitae - Lucia Rivera.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const navLinks = [
        { id: 'home', label: 'HOME' },
        { id: 'about', label: 'ABOUT ME' },
        { id: 'education', label: 'EDUCATION' },
        { id: 'experience', label: 'EXPERIENCE' },
        { id: 'projects', label: 'PROJECTS' },
        { id: 'extracurriculars', label: 'EXTRACURRICULARS' },
        { id: 'contact', label: 'CONTACT' }
    ];

    return (
        <>
            {/* ========== HEADER & NAVIGATION ========== */}
            <header>
                <a href="#home" className="logo">LR</a>
                
                <nav className="desktop-nav">
                    {navLinks.map(({ id, label }) => (
                        <a key={id} href={`#${id}`} className={activeSection === id ? 'active' : ''}>
                            {label}
                        </a>
                    ))}
                </nav>

                <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <i className="fas fa-bars"></i>
                </button>
            </header>

            <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={closeSidebar}>
                    <i className="fas fa-times"></i>
                </button>
                {navLinks.map(({ id, label }) => (
                    <a key={id} href={`#${id}`} className={activeSection === id ? 'active' : ''} onClick={closeSidebar}>
                        {label}
                    </a>
                ))}
            </nav>

            {sidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}

            {/* ========== HOME SECTION ========== */}
            <section className="home" id="home">
                <div className="home-container">
                    <div className="home-content">
                        <h1>Hi, I'm <span> Lucia Rivera</span></h1>
                        <h3 className="typing-text">I'm a <span></span></h3>
                        <a href="#about" className="btn">Discover More</a>
                    </div>
                    <div className="home-img">
                        <img src={travelPhoto} alt="Lucia's Photo" />
                    </div>
                </div>
            </section>

            {/* ========== ABOUT ME SECTION ========== */}
            <section className="intro" id="about">
                <div className="intro-container">
                    <div className="intro-left">
                        <div className="intro-item">
                            <span className="intro-label">NAME:</span>
                            <span className="intro-value">Lucia Rivera</span>
                        </div>
                        <div className="intro-item">
                            <span className="intro-label">PRONOUNS:</span>
                            <span className="intro-value">She/Her</span>
                        </div>
                        <div className="intro-item">
                            <span className="intro-label">SCHOOL:</span>
                            <span className="intro-value">University of Victoria</span>
                        </div>
                        <div className="intro-item">
                            <span className="intro-label">HOMETOWN:</span>
                            <span className="intro-value"> Lima PE -&gt; Victoria BC</span>
                        </div>
                        <div className="intro-item">
                            <span className="intro-label">LANGUAGES:</span>
                            <span className="intro-value">Spanish, English, Italian</span>
                        </div>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/luciariverabe/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/lucia-rivera" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className="intro-right">
                        <p>I'm a 4th year student at UVic, pursuing a BSc in Computer Science with a Business minor. I have experience in Java, SQL, Python, C++, HTML, CSS, Javascript, React, and Typescript. I thrive on organization and efficiency, using tools like Asana, Notion, and Google Calendar to manage projects and stay on track. When I'm not in classes, I'm often doing research or AI software development.</p>
                        <p>I love the sea, having always lived in coastal cities like Lima and Victoria. I'm passionate about embracing new challenges and stepping outside my comfort zone, from public speaking to exploring the outdoors. I believe every experience, even failure, is a valuable learning opportunity. In my free time, I also enjoy painting, playing piano, and traveling!</p>
                        <a href="#" className="btn" onClick={handleDownloadResume}>Download Resume</a>
                    </div>
                </div>
            </section>

            {/* ========== EDUCATION SECTION ========== */}
            <section id="education" className="education section-gray">
                <h1 className="section-title">Education</h1>
                <div className="education-container">
                    <div className="education-entry">
                        <div className="education-header">
                            <i className="fas fa-university education-icon"></i>
                            <div className="education-info">
                                <h2><a href="https://www.uvic.ca" target="_blank" rel="noopener noreferrer">University of Victoria</a></h2>
                                <p className="education-sub-header">
                                    SEP 2022 – PRESENT  |  VICTORIA, BC, CANADA
                                    <span className="flag-icon flag-icon-ca"></span>
                                </p>
                            </div>
                        </div>
                        <div className="education-details">
                            <p><strong>Major:</strong> Computer Science | <strong>Minor:</strong> Business</p>
                            <p><strong>Relevant Coursework:</strong> Data Structures and Algorithms, Software Development Methods, Operating Systems, Introduction to Artificial Intelligence.</p>
                        </div>
                    </div>
                    <div className="education-entry">
                        <div className="education-header">
                            <i className="fas fa-university education-icon"></i>
                            <div className="education-info">
                                <h2><a href="https://unmsm.edu.pe" target="_blank" rel="noopener noreferrer">Universidad Nacional Mayor de San Marcos</a></h2>
                                <p className="education-sub-header">
                                    OCT 2020 – DEC 2021  |  LIMA, PERU
                                    <span className="flag-icon flag-icon-pe"></span>
                                </p>
                            </div>
                        </div>
                        <div className="education-details">
                            <p><strong>Major:</strong> Systems Engineering</p>
                            <p><strong>Relevant Coursework:</strong> Physics, Chemistry, Business Process.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== EXPERIENCE SECTION ========== */}
            <section id="experience" className="experience section-white">
                <h1 className="section-title">My Experience</h1>
                <div className="timeline">
                    <div className="timeline-item" id="exp1">
                        <a href="#exp1" className="timeline-marker"></a>
                        <div className="timeline-content">
                            <h2><a href="https://www.uvic.ca/engineering/" target="_blank" rel="noopener noreferrer">University of Victoria, Faculty of Engineering & Computer Science</a></h2>
                            <p className="timeline-sub-header">Teaching Assistant – CSC 105 | Sep 2025 – present</p>
                            <ul>
                                <li>Lead lab tutorials for non-CS students, providing hands-on guidance in programming concepts and problem-solving using Python.</li>
                                <li>Assisted in the creation and delivery of course materials, including coding exercises.</li>
                                <li>Provided technical support during office hours, troubleshooting coding issues, debugging, and guiding students through practical exercises.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item" id="exp2">
                        <a href="#exp2" className="timeline-marker"></a>
                        <div className="timeline-content">
                            <h2><a href="https://www.uvic.ca/studentlife/" target="_blank" rel="noopener noreferrer">University of Victoria, Office of the Student Life</a></h2>
                            <p className="timeline-sub-header">Student Life Assistant – Orientation | May 2025 – present</p>
                            <ul>
                                <li>Co-supervise a team of 6-12 student staff, leading training, delegating tasks, and managing schedules to ensure seamless execution of orientation programs.</li>
                                <li>Design and implement inclusive orientation programs for new students.</li>
                                <li>Assist in the event planning and logistics for large-scale student events.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item" id="exp3">
                        <a href="#exp3" className="timeline-marker"></a>
                        <div className="timeline-content">
                            <h2><a href="https://www.uvic.ca/science/" target="_blank" rel="noopener noreferrer">University of Victoria, Faculty of Science</a></h2>
                            <p className="timeline-sub-header">Speakers Bureau Coordinator | May 2025 – Aug 2025</p>
                            <ul>
                                <li>Lead the full project management for the UVic Science Speakers Bureau, overseeing the design and launch of the website using CMS tools like WordPress and Cascade.</li>
                                <li>Manage the creation of an easily searchable database, coordinating with faculty and graduate students to solicit and input talk details.</li>
                                <li>Develop and execute the project timeline, ensuring timely completion of all phases.</li>
                                <li>Ensure all web content and marketing materials meet quality standards, troubleshooting issues and providing solutions throughout the project lifecycle.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item" id="exp4">
                        <a href="#exp4" className="timeline-marker"></a>
                        <div className="timeline-content">
                            <h2><a href="https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services" target="_blank" rel="noopener noreferrer">Ministry of Citizens' Services, BC Public Service</a></h2>
                            <p className="timeline-sub-header">Security Co-op Technical Analyst | May 2024 – Dec 2024</p>
                            <ul>
                                <li>Developed an AI-powered information search application with React and Node.js, enhancing user interaction with dynamic interfaces. Led the design and implementation of a web-based user interface in React, ensuring alignment with best UX practices.</li>
                                <li>Created the application for better data analysis and collection, using Cloud Security Schedule as a reference in the prompts, improving the accuracy and efficiency of data retrieval.</li>
                                <li>Worked closely with product stakeholders to ensure high-quality user experience.</li>
                                <li>Led cross-functional collaboration to design and deploy scalable solutions.</li>
                                <li>Managed projects using Agile methodologies and delivered monthly security presentations.</li>
                                <li>Developed and performed STRA (Security Threat and Risk Assessment) on accessibility software, identifying potential risks and implementing mitigation strategies.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item" id="exp5">
                        <a href="#exp5" className="timeline-marker"></a>
                        <div className="timeline-content">
                            <h2><a href="https://www.uvic.ca/residence/" target="_blank" rel="noopener noreferrer">University of Victoria, Residence Services</a></h2>
                            <p className="timeline-sub-header">Residence Education Community Leader | Aug 2023 – Apr 2025</p>
                            <ul>
                                <li>Lead community-building efforts in the Global Citizenship LLC, organizing events and fostering cultural exchange among +40 international students.</li>
                                <li>Guided students in exploring core values, promoting engaged citizenship, and facilitating a smooth transition into university life, contributing to holistic student development.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item" id="exp6">
                        <a href="#exp6" className="timeline-marker"></a>
                        <div className="timeline-content">
                            <h2><a href="https://www.uvic.ca/accessible-learning/" target="_blank" rel="noopener noreferrer">University of Victoria, Centre for Accessible Learning</a></h2>
                            <p className="timeline-sub-header">Information Systems and Operations Assistant | Nov 2022 – Apr 2024</p>
                            <ul>
                                <li>Engineered operational advancements at the UVic Learning Assistance Program, specializing in refining processes through adept workflow design and automation strategies.</li>
                                <li>Designed and implemented an automated workflow system, reducing processing time.</li>
                                <li>Developed a predictive analytics model using R and Python.</li>
                                <li>Managed and optimized MS Access database to maintain accurate records.</li>
                                <li>Led user testing sessions to ensure system accessibility and seamless user experience.</li>
                                <li>Created a step-by-step process guide for new staff members, reducing onboarding time.</li>
                                <li>Worked with the university's IT department to integrate new software solutions into existing systems while ensuring data security.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item" id="exp7">
                        <a href="#exp7" className="timeline-marker"></a>
                        <div className="timeline-content">
                            <h2><a href="https://uvss.ca/" target="_blank" rel="noopener noreferrer">University of Victoria Student Society</a></h2>
                            <p className="timeline-sub-header">Deputy Electoral Officer | Feb 2024 – Mar 2024</p>
                            <ul>
                                <li>Supported electoral staff in coordinating logistics for events and campus partners.</li>
                                <li>Ensured alignment with cultural sensitivities and inclusivity principles.</li>
                                <li>Assisted in the design and publication of website content and posts.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== PROJECTS SECTION ========== */}
            <section id="projects" className="projects section-gray">
                <h1 className="section-title">Projects</h1>
                <div className="projects-container">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="project-card">
                        <i className="fas fa-globe-americas project-icon"></i>
                        <h2>Personal Website</h2>
                        <p>This personal portfolio website, designed to showcase my skills and experience in a clean, interactive, and responsive format.</p>
                        <div className="project-tags">
                            <span>React</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>
                    </a>
                    <a href="https://www.uvic.ca/science/donors/outreach/science-speakers-bureau/index.php" target="_blank" rel="noopener noreferrer" className="project-card">
                        <i className="fas fa-bullhorn project-icon"></i>
                        <h2>Speakers Bureau</h2>
                        <p>A website for the UVic Science Speakers Bureau, featuring a searchable database of talks from faculty and graduate students.</p>
                        <div className="project-tags">
                            <span>WordPress</span>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="project-card">
                        <i className="fas fa-map-signs project-icon"></i>
                        <h2>Bridging Roots</h2>
                        <p>An interactive platform with games, including a map-based game, designed to aid in the teaching of indigenous languages.</p>
                        <div className="project-tags">
                            <span>React</span>
                            <span>Node.js</span>
                        </div>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="project-card">
                        <i className="fas fa-calculator project-icon"></i>
                        <h2>BMI Calculator</h2>
                        <p>A simple and intuitive Body Mass Index (BMI) calculator built with a focus on user-friendly design and clear results.</p>
                        <div className="project-tags">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>
                    </a>
                    <a href="https://github.com/lucia-rivera/custom-shell-implementation-in-C" target="_blank" rel="noopener noreferrer" className="project-card">
                        <i className="fas fa-terminal project-icon"></i>
                        <h2>Power Shell Implementation</h2>
                        <p>A custom implementation of a Power Shell-like command-line interface, built from scratch in C to handle core shell functionalities.</p>
                        <div className="project-tags">
                            <span>C</span>
                        </div>
                    </a>
                </div>
            </section>

            {/* ========== EXTRACURRICULARS SECTION ========== */}
            <section id="extracurriculars" className="extracurriculars section-white">
                <h1 className="section-title">Extracurriculars</h1>
                <div className="extracurriculars-container">
                    <div className="extracurricular-item">
                        <div className="extracurricular-img">
                            <img src={bcPublicService} alt="Leadership and Community Involvement" />
                        </div>
                        <div className="extracurricular-text">
                            <h3>Leadership & Community</h3>
                            <ul>
                                <li><strong>President, UVic Latinos Community:</strong> Organize cultural and tech events to support and engage students.</li>
                                <li><strong>Global Community Council Advisor:</strong> Develop and execute campus-wide initiatives that enhance student involvement.</li>
                                <li><strong>Coordinator, UVic Women in STEM Club:</strong> Support event execution, budgeting, and community-building efforts.</li>
                                <li><strong>Co-op Students Council Advisor:</strong> Led a team to organize events and mentorship for co-op students.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="extracurricular-item reverse">
                        <div className="extracurricular-img">
                            <img src={italyEnergy} alt="We're Energy Competition in Italy" />
                        </div>
                        <div className="extracurricular-text">
                            <h3>Innovation & Achievement</h3>
                            <p>Two-time winner of the "We're Energy" innovation contest, an international competition focused on sustainable energy solutions. This incredible experience provided me with the opportunity to travel to Italy, collaborate with a global community of innovators, and present my projects to industry leaders.</p>
                        </div>
                    </div>
                    <div className="extracurricular-item">
                        <div className="extracurricular-img">
                            <img src={volleyball} alt="Volleyball and Vikes Nation" />
                        </div>
                        <div className="extracurricular-text">
                            <h3>Athletics & School Spirit</h3>
                            <ul>
                                <li><strong>Volleyball Player & Team Captain:</strong> Led my team through competitive seasons, fostering teamwork, strategy, and resilience.</li>
                                <li><strong>Vikes Nation Ambassador:</strong> Actively promoted Vikes Nation spirit across campus and at various Vikes events, engaging with the student community to foster school spirit.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== CONTACT SECTION ========== */}
            <section id="contact" className="contact">
                <h1 className="section-title">Get In Touch</h1>
                <div className="contact-container">
                    <p className="contact-description">
                        I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!
                    </p>
                    <a href="mailto:luciarivera@uvic.ca?subject=Contact%20-%20Lucia%20Rivera&body=Hi%20Lucia," className="btn">Send a Message</a>
                </div>
            </section>

            {/* ========== FOOTER ========== */}
            <footer>
                <div className="footer-content">
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/luciariverabe/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/lucia-rivera" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                    </div>
                    <p>&copy; {new Date().getFullYear()} Lucia Rivera. All rights reserved.</p>
                </div>
            </footer>

            {showScrollTop && (
                <a href="#home" className="scroll-to-top">
                    <i className="fas fa-arrow-up"></i>
                </a>
            )}
        </>
    );
}

export default App;
