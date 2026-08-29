import { motion } from 'framer-motion';
import './App.css';

const FadeIn = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

function App() {
    return (
        <div className="app">
            {/* Hero Section */}
            <section className="section hero-section" id="hero">
                <div className="hero-container">
                    <div className="hero-info">
                        <FadeIn>
                            <h1 className="hero-name">Vedant Desai</h1>
                        </FadeIn>
                        
                        <FadeIn delay={0.1}>
                            <div className="hero-title">
                                ML Engineer · AI Researcher
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="hero-contact">
                                <span>📍 NYC</span>
                                <a href="mailto:vedant050626@gmail.com">vedant050626@gmail.com</a>
                                <span>+91-8828193785</span>
                            </div>
                        </FadeIn>
                        
                        <FadeIn delay={0.3}>
                            <p className="hero-bio">
                                Incoming Master's student at <span className="accent">NYU Courant</span> (Fall 2026). 
                                Final-year Computer Science and Business Systems student at NMIMS University with a strong research foundation in <span className="accent">deep learning</span>, <span className="accent">computer vision</span>, and <span className="accent">NLP</span>, backed by IEEE-published and CRC Press-published work. Experienced in designing and fine-tuning neural network architectures, building production-level AI systems, and translating research methods into applied ML solutions. Seeking a Research Scientist or AI Research role at a Big Tech organization where rigorous methodology and novel system design are valued.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="hero-socials">
                                <a href="https://github.com/Vedant-D04" target="_blank" rel="noopener noreferrer" className="social-btn">
                                    GitHub
                                </a>
                                <span>·</span>
                                <a href="https://scholar.google.com/citations?user=MDzXM3AAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="social-btn">
                                    Google Scholar
                                </a>
                            </div>
                        </FadeIn>
                    </div>
                    
                    <FadeIn delay={0.5}>
                        <div className="hero-photo-wrapper">
                            <div className="photo-frame">
                                <img src="/vedant-photo.jpg" alt="Vedant Desai" className="hero-photo" />
                                <div className="photo-border"></div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Education Section */}
            <section className="section" id="education">
                <FadeIn>
                    <h2 className="section-title">Education</h2>
                </FadeIn>
                <div className="timeline">
                    <FadeIn delay={0.05}>
                        <div className="timeline-item">
                            <span className="timeline-period">Starting Sept 2, 2026</span>
                            <h3 className="timeline-title">Master of Science in Computer Science</h3>
                            <div className="timeline-org">Courant Institute of Mathematical Sciences, New York University (NYU)</div>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <div className="timeline-item">
                            <span className="timeline-period">May 2026</span>
                            <h3 className="timeline-title">Bachelor of Technology in Computer Science and Business Systems</h3>
                            <div className="timeline-org">Mukesh Patel School of Technology and Management, NMIMS University</div>
                            <div className="timeline-desc">
                                <p><strong>GPA:</strong> 3.7/4.0</p>
                                <p><strong>Relevant Coursework:</strong> AI/ML, Computational Statistics, Linear Algebra, Robotics, DBMS, Business Strategy and Communication</p>
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="timeline-item">
                            <span className="timeline-period">2022</span>
                            <h3 className="timeline-title">Higher Secondary Certificate (HSC)</h3>
                            <div className="timeline-org">RR International College</div>
                            <div className="timeline-desc">
                                <p><strong>Percentage:</strong> 81.67%</p>
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <div className="timeline-item">
                            <span className="timeline-period">2020</span>
                            <h3 className="timeline-title">Indian Certificate of Secondary Education (ICSE)</h3>
                            <div className="timeline-org">Thakur International School</div>
                            <div className="timeline-desc">
                                <p><strong>Percentage:</strong> 95.66%</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Experience Section */}
            <section className="section" id="experience">
                <FadeIn>
                    <h2 className="section-title">Experience</h2>
                </FadeIn>
                <div className="timeline">
                    <FadeIn delay={0.1}>
                        <div className="timeline-item">
                            <span className="timeline-period">Jan 2026 – June 2026</span>
                            <h3 className="timeline-title">Tech Risk Assurance - AI Intern</h3>
                            <div className="timeline-org">EY</div>
                            <div className="timeline-desc">
                                <ul>
                                    <li>Develop an AI-driven audit assistant to automate transformation of unstructured evidence into structured, audit-ready outputs for ITGC Change Management engagements.</li>
                                    <li>Design assistive audit workflows using Microsoft Copilot Studio and Power Apps, integrating REST APIs and Azure OpenAI.</li>
                                    <li>Enable intelligent data extraction, automated control validation, risk classification, and end-to-end audit traceability within the audit assistant platform.</li>
                                </ul>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="timeline-item">
                            <span className="timeline-period">Jul 2025 – Nov 2025</span>
                            <h3 className="timeline-title">ML Engineer</h3>
                            <div className="timeline-org">S.T.R.In.G Labs</div>
                            <div className="timeline-desc">
                                <ul>
                                    <li>Built a Robusta coffee bean price prediction system using Azure Time-Gen to support client hedging strategies, covering data collection, cleaning, and preprocessing into time series format.</li>
                                    <li>Fine-tuned the forecasting model with optimized parameters, achieving 2.2% MAPE to support client risk management and hedging decisions.</li>
                                </ul>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="timeline-item">
                            <span className="timeline-period">Ongoing</span>
                            <h3 className="timeline-title">Research Team Co-Lead</h3>
                            <div className="timeline-org">Student Research Group, NMIMS University (in collaboration with Reliance Jio)</div>
                            <div className="timeline-desc">
                                <ul>
                                    <li>Co-led a student research team on projects focused on secure communication systems and quantum-enhanced computation.</li>
                                    <li>Conducted extensive research on 5G technology and Quantum Random Number Generation (QRNG) to enhance next-generation secure communication systems.</li>
                                    <li>Performed a literature review on integrating quantum and communication technologies for scalable secure communication infrastructure.</li>
                                    <li>Developed a QRNG-based password manager prototype using IBM Qiskit for quantum entropy generation to study applicability in cybersecurity.</li>
                                    <li>Conducted exploratory studies applying IBM Qiskit-based QRNG to replace classical pseudo-random noise in Stable Diffusion, evaluating impact on image quality, sample diversity, and susceptibility to mode collapse.</li>
                                </ul>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Projects Section */}
            <section className="section" id="projects">
                <FadeIn>
                    <h2 className="section-title">Projects</h2>
                </FadeIn>
                <div className="grid-container">
                    <FadeIn delay={0.1}>
                        <div className="card project-card">
                            <h3>Cinemind - AI-Based Film Director Assistant</h3>
                            <ul>
                                <li>Built an AI assistant for film scene analysis using YOLOv5, MediaPipe, and a custom PyTorch CNN for facial emotion recognition.</li>
                                <li>Leveraged OpenCV, RAG, and AudioGen to generate context-aware color palettes and sound effects from video scenes.</li>
                            </ul>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="card project-card">
                            <h3>Instagram Content Performance Analyzer</h3>
                            <ul>
                                <li>Built a pipeline using the Meta Graph API, Azure Computer Vision, and Azure OpenAI to analyze Instagram content and generate actionable recommendations for improving engagement and reach.</li>
                            </ul>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <div className="card project-card">
                            <h3>YesterdayLand</h3>
                            <ul>
                                <li>Developed an interactive fantasy world in Unity and Blender featuring modular village houses, terrain, water bodies with controllable boats, skyboxes, dynamic lighting, and ambient audio.</li>
                                <li>Created Blender animations including bird flight and implemented a server-based multiplayer experience allowing players to join and explore the virtual world in real time.</li>
                            </ul>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <div className="card project-card">
                            <h3>Kurukshetra Simulation</h3>
                            <ul>
                                <li>Built an experimental recreation of the Mahabharata battlefield in Unity and Blender featuring palace structures, war zones, terrain, dynamic lighting, environmental effects, and a player controller optimized for low-end hardware.</li>
                            </ul>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.5}>
                        <div className="card project-card">
                            <h3>3D Reconstruction and Asset Generation</h3>
                            <ul>
                                <li>Applied 2D/3D Gaussian Splatting for scene reconstruction and ModDiff AI-assisted 3D asset generation workflows to create realistic 3D environments from image data.</li>
                            </ul>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Publications and Research Section */}
            <section className="section" id="publications">
                <FadeIn>
                    <h2 className="section-title">Publications and Research</h2>
                </FadeIn>
                <div className="publications-list">
                    <FadeIn delay={0.1}>
                        <div className="pub-item">
                            <h3 className="pub-title">Efficient Facial Emotion Recognition Using Residual Squeeze-and-Excitation and Enhanced Inception Networks (2026)</h3>
                            <div className="pub-meta">IEEE-associated 9th International Conference on Computational Intelligence in Data Science (ICCIDS)</div>
                            <p className="pub-desc">Proposed a parameter-efficient CNN achieving 93.31% accuracy on the FER2013 dataset.</p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="pub-item">
                            <h3 className="pub-title">Voice-Signal based Prediction of Parkinson's Disease with Machine Learning Models (2025)</h3>
                            <div className="pub-meta">Co-authored Research Paper</div>
                            <p className="pub-desc">Applied Random Forest, SVM, KNN, XGBoost, Decision Tree, and Naive Bayes with SMOTE-based hyperparameter optimization, achieving 96.6% accuracy on UCI ML Repository voice recordings from 31 individuals.</p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <div className="pub-item">
                            <h3 className="pub-title">Enhancing XAI Accessibility (2025)</h3>
                            <div className="pub-meta">CRC Press Publications (Book Chapter)</div>
                            <p className="pub-desc">Co-authored a book chapter showcasing a Streamlit-based tool using Captum to demonstrate deep learning explainability via Integrated Gradients, Occlusion, Grad-CAM, LIME, and SHAP.</p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Skills Section */}
            <section className="section" id="skills">
                <FadeIn>
                    <h2 className="section-title">Skills</h2>
                </FadeIn>
                <div className="skills-container">
                    <FadeIn delay={0.1}>
                        <div className="skill-category">
                            <h3>AI/ML</h3>
                            <div className="skill-list">
                                {['PyTorch', 'TensorFlow', 'JAX', 'LangChain', 'Hugging Face', 'OpenAI SDK', 'Diffusers', 'ROS2', 'IBM Qiskit'].map(skill => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="skill-category">
                            <h3>Languages</h3>
                            <div className="skill-list">
                                {['Python', 'C++', 'C#', 'C', 'Rust', 'SQL', 'JavaScript', 'HTML', 'CSS'].map(skill => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <div className="skill-category">
                            <h3>Computer Graphics and Simulation</h3>
                            <div className="skill-list">
                                {['Unity', 'Unreal Engine', 'Blender', 'Gaussian Splatting (2D/3D)', '3D Asset Creation', 'Terrain Design', 'Lighting', 'Animation', 'Scene Reconstruction', 'CloudCompare'].map(skill => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <div className="skill-category">
                            <h3>Tools</h3>
                            <div className="skill-list">
                                {['Git', 'FAISS', 'Azure OpenAI', 'Microsoft Copilot Studio', 'Power Apps'].map(skill => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Certifications and Awards */}
            <section className="section" id="certifications">
                <div className="grid-container" style={{ gridTemplateColumns: '1fr 1fr' }}>
                    <FadeIn>
                        <div>
                            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Certifications</h2>
                            <ul className="timeline-desc" style={{ paddingLeft: 0, listStylePosition: 'inside' }}>
                                <li>Mastering Multi-Agent AI: Building Intelligent Collaborative Systems (IUCEE)</li>
                                <li>Machine Learning and Deep Learning Specialization (Coursera/deeplearning.ai)</li>
                            </ul>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div>
                            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Awards & Honors</h2>
                            <ul className="timeline-desc" style={{ paddingLeft: 0, listStylePosition: 'inside' }}>
                                <li>Secured 3rd position at MPSTME Shirpur's Ambiora Drone Competition.</li>
                            </ul>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <footer className="site-footer">
                <div className="footer-content">
                    <div className="footer-links">
                        <a href="https://www.instagram.com/vedant.a.desai/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://www.linkedin.com/in/desaivedant" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="mailto:vad6929@nyu.edu">vad6929@nyu.edu</a>
                        <a href="mailto:vedant050626@gmail.com">vedant050626@gmail.com</a>
                        <a href="tel:+13323215594">+1 332 321 5594</a>
                    </div>
                    <p className="copyright">
                        © {new Date().getFullYear()} Vedant Desai.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default App;
