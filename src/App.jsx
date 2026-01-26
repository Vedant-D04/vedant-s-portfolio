import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const [expandedProject, setExpandedProject] = useState(null);

    const journeyMilestones = [
        {
            icon: "🎓",
            year: "2022",
            title: "Started B.Tech in Computer Science",
            org: "NMIMS University",
            description: "Began my journey into the world of computer science with a focus on AI and systems.",
            type: "education",
            current: true
        },
        {
            icon: "🤖",
            year: "2023",
            title: "Discovered AI & Machine Learning",
            org: "Research Interest",
            description: "Deep-dived into neural networks, computer vision, and natural language processing.",
            type: "discovery"
        },
        {
            icon: "🦾",
            year: "2023",
            title: "Embodied Intelligence & Robotics",
            org: "ROS2 & Multi-Agent Systems",
            description: "Explored the intersection of AI and physical systems through gesture-controlled robots.",
            type: "discovery"
        },
        {
            icon: "⚛️",
            year: "2024",
            title: "Quantum Computing Exploration",
            org: "IBM Qiskit",
            description: "Built quantum random number generators and explored quantum cryptography.",
            type: "discovery"
        },
        {
            icon: "🎬",
            year: "2024",
            title: "CineMind - AI Filmmaking Platform",
            org: "Featured Project",
            description: "Created Ray AI virtual director with real-time computer vision analysis.",
            type: "project"
        },
        {
            icon: "💼",
            year: "2025",
            title: "ML Engineer at S.T.R.In.G Labs",
            org: "Professional Experience",
            description: "Built ML-powered price prediction for coffee bean markets with 2.2% MAPE.",
            type: "work"
        },
        {
            icon: "📱",
            year: "2025",
            title: "MaxFluence - AI Influencer Toolkit",
            org: "Featured Project",
            description: "End-to-end AI toolkit for content creation, analytics, and brand identity.",
            type: "project"
        }
    ];

    const techStack = [
        {
            category: "Languages",
            icon: "💻",
            skills: ["Python", "C++", "Rust", "JavaScript", "TypeScript", "SQL", "MATLAB"]
        },
        {
            category: "Full Stack Development",
            icon: "🌐",
            skills: ["React", "Next.js", "Node.js", "Express", "HTML5", "CSS3", "Tailwind CSS", "Vite", "REST APIs", "MongoDB"]
        },
        {
            category: "AI / Machine Learning",
            icon: "🧠",
            skills: ["PyTorch", "TensorFlow", "JAX", "HuggingFace", "LangChain", "Captum"]
        },
        {
            category: "Robotics & Embodied Intelligence",
            icon: "🦾",
            skills: ["ROS2", "TurtleSim", "MediaPipe", "OpenCV", "Multi-Agent Systems"]
        },
        {
            category: "3D & Game Development",
            icon: "🎮",
            skills: ["Blender", "Unity", "Unreal Engine"]
        },
        {
            category: "Quantum Computing",
            icon: "⚛️",
            skills: ["IBM Qiskit", "QRNG", "Quantum Cryptography"]
        },
        {
            category: "Cloud & DevOps",
            icon: "☁️",
            skills: ["Git", "Docker", "Azure", "Vercel", "AWS", "CI/CD", "Streamlit"]
        }
    ];

    const projects = [
        {
            id: "maxfluence",
            title: "MaxFluence",
            subtitle: "AI-Powered Influencer Toolkit",
            icon: "📱",
            gradient: "linear-gradient(135deg, #f472b6, #9333ea)",
            tech: ["Python", "GPT", "DALL·E", "Meta Graph API"],
            summary: "End-to-end AI toolkit streamlining the influencer journey from content creation to brand collaborations.",
            features: [
                "GPT-powered content ideation, captions, hashtags, and video scripts",
                "Instagram analytics via Meta Graph API with growth predictions",
                "Conversational insights bot for actionable content planning",
                "Brand kit generator with DALL·E for visual mockups and color palettes",
                "AI-curated brand matchmaking and pitch deck generation"
            ],
            github: "https://github.com/Vedant-D04/MaxFluence"
        },
        {
            id: "cinemind",
            title: "CineMind",
            subtitle: "AI Cinematic Assistant",
            icon: "🎬",
            gradient: "linear-gradient(135deg, #06b6d4, #7c3aed)",
            tech: ["Next.js", "TensorFlow.js", "Azure OpenAI", "Framer Motion"],
            summary: "Real-time filmmaking platform bridging creative vision and technical execution with Ray AI.",
            features: [
                "Ray AI - Virtual director inspired by Satyajit Ray and Wes Anderson",
                "Real-time framing analysis (Rule of Thirds, Headroom, Looking Room)",
                "Color palette analysis with mood-based suggestions",
                "YOLOv5/Coco-SSD scene awareness for clean frame detection",
                "Emotion tracking for performance-to-mood matching"
            ],
            github: "https://github.com/Vedant-D04/CineMind"
        },
        {
            id: "captum-tool",
            title: "Model Interpretability Tool",
            subtitle: "Captum + Streamlit Visualization",
            icon: "🔍",
            gradient: "linear-gradient(135deg, #22c55e, #06b6d4)",
            tech: ["Streamlit", "Captum", "PyTorch", "TensorFlow"],
            summary: "Web app for visualizing deep learning model predictions using advanced interpretability methods.",
            features: [
                "GradCAM heatmaps showing prediction-influencing regions",
                "Occlusion sensitivity analysis for confidence contribution",
                "Integrated Gradients for pixel-level attribution",
                "Support for both PyTorch (.pth) and TensorFlow (.h5) models",
                "Interactive web interface for real-time model analysis"
            ],
            github: "https://github.com/Vedant-D04/UI-for-Captum-features"
        },
        {
            id: "ros2-robots",
            title: "Gesture-Controlled Multi-Robot",
            subtitle: "ROS2 & TurtleSim Coordination",
            icon: "🤖",
            gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
            tech: ["ROS2 Jazzy", "TurtleSim", "MediaPipe", "OpenCV"],
            summary: "Multi-robot coordination system for automated room cleaning using hand gesture recognition.",
            features: [
                "MediaPipe hand tracking with real-time gesture recognition",
                "Open palm starts cleaning, closed fist stops movement",
                "Dynamic task distribution across multiple cleaning robots",
                "Collision avoidance with ROS2 inter-robot communication",
                "Five robots: three cleaners, two dirt spots that disappear when cleaned"
            ],
            github: "https://github.com/Vedant-D04/Multi-Robot-Coordination-using-ROS2-and-Turtlesim"
        },
        {
            id: "quantum-password",
            title: "Quantum Password Generator",
            subtitle: "Qiskit-Based QRNG Security",
            icon: "⚛️",
            gradient: "linear-gradient(135deg, #7c3aed, #db2777)",
            tech: ["IBM Qiskit", "Python", "Quantum Computing"],
            summary: "Cryptographically secure passwords via Quantum Random Number Generation (QRNG).",
            features: [
                "True randomness from quantum mechanical properties",
                "100-qubit entropy analysis (0.9974 entropy score)",
                "Protection against future quantum computing attacks",
                "Comparison with PRNG showing quantum advantages",
                "Cryptography applications for enhanced security"
            ],
            github: "https://github.com/Vedant-D04/Quantum-Password-Generator"
        },
        {
            id: "diabetes-website",
            title: "Diabetes Help Website",
            subtitle: "ML-Powered Health Platform",
            icon: "🏥",
            gradient: "linear-gradient(135deg, #14b8a6, #3b82f6)",
            tech: ["Python", "Logistic Regression", "Deep Learning", "GPT-2"],
            summary: "Web platform for diabetes detection, retinopathy screening, and AI-powered health guidance.",
            features: [
                "Diabetes detection using Logistic Regression on health data",
                "Diabetic retinopathy detection from retinal images",
                "GPT-2 Medium powered FAQ chatbot for real-time answers",
                "User-friendly interface for health data input",
                "Educational resources about diabetes management"
            ],
            github: "https://github.com/Vedant-D04/Diabetes-help-website"
        }
    ];

    const experience = [
        {
            role: "ML Engineer",
            company: "S.T.R.In.G Labs",
            period: "July 2025 – Nov 2025",
            icon: "💼",
            description: "Developed coffee bean (Robusta) price prediction system enabling client hedging strategies through data collection, cleaning and preprocessing into time series format using Azure Time-Gen. Fine-tuned the model with optimized parameters achieving strong MAPE (2.2%) performance to support client risk management and hedging decisions.",
            tech: ["Azure Time-Gen", "Python", "Time Series", "ML"]
        }
    ];

    const publications = [
        {
            title: "Efficient Facial Emotion Recognition Using Residual Squeeze-and-Excitation and Enhanced Inception Networks",
            year: "2025",
            icon: "📄",
            description: "Paper accepted for presentation at the 9th International Conference on Computational Intelligence in Data Science (ICCID), proposing a parameter-efficient CNN for facial emotion recognition achieving 93.31% accuracy on FER2013 dataset.",
            type: "conference"
        },
        {
            title: "Voice-Signal based Prediction of Parkinson's Disease with Machine Learning Models",
            year: "2025",
            icon: "🔬",
            description: "Co-authored a research paper on voice-signal based Parkinson's disease prediction using machine learning models (Random Forest, SVM, KNN, XGBoost, Decision Tree, Naïve Bayes) with SMOTE-based hyperparameter optimization, achieving 96.6% accuracy on UCI ML Repository voice recordings from 31 individuals.",
            type: "paper"
        },
        {
            title: "Enhancing XAI Accessibility",
            year: "2025",
            icon: "📚",
            publisher: "CRC Press Publications",
            description: "Co-authored a book chapter showcasing a Streamlit-based tool using Captum to demonstrate deep learning explainability via techniques like Integrated Gradients, Occlusion, Grad-CAM, LIME, and SHAP.",
            type: "book"
        }
    ];

    const researchExperience = [
        {
            title: "Student Research Group - Reliance Jio Collaboration",
            icon: "🔬",
            description: "Co-led a team working on projects focused on secure communication systems and quantum-enhanced computation.",
            highlights: [
                "Extensive research on 5G technology and Quantum Random Number Generation (QRNG) to enhance next-generation secure communication systems.",
                "Literature review on optimizing the integration of quantum and communication technologies for scalable secure communication infrastructure.",
                "Development of a QRNG-based password manager prototype leveraging IBM Qiskit for quantum entropy generation to study its applicability in cybersecurity.",
                "Exploratory studies applying IBM Qiskit-based QRNG to replace classical pseudo-random noise in Stable Diffusion, evaluating its impact on image quality, sample diversity, and susceptibility to mode collapse."
            ]
        }
    ];

    const mediumBlogs = [
        {
            title: "The Physical Turing Test: NVIDIA's Vision for Embodied AI",
            date: "Jul 18, 2025",
            description: "Exploring NVIDIA's groundbreaking approach to testing AI through physical embodiment and real-world interaction.",
            tags: ["AI", "NVIDIA", "Robotics"],
            link: "https://medium.com/@vedant050626"
        },
        {
            title: "My First Drone Competition Experience: From Beginner to Podium Finish",
            date: "Mar 7, 2025",
            description: "A personal journey through my first drone competition, sharing lessons learned and the thrill of achievement.",
            tags: ["Drones", "Competition", "Experience"],
            link: "https://medium.com/@vedant050626"
        },
        {
            title: "Understanding Retrieval-Augmented Generation (RAG) with an easy example",
            date: "Feb 26, 2025",
            description: "Breaking down RAG architecture with practical examples to help you understand this powerful AI technique.",
            tags: ["RAG", "LLM", "AI"],
            link: "https://medium.com/@vedant050626"
        },
        {
            title: "Ever Wondered What Your Deep Learning Model Sees? Let's Find Out!",
            date: "Feb 21, 2025",
            description: "Diving into model interpretability and visualization techniques to understand neural network predictions.",
            tags: ["Deep Learning", "XAI", "Visualization"],
            link: "https://medium.com/@vedant050626"
        },
        {
            title: "Are Vision Transformers Failing in the Real World?",
            date: "Feb 16, 2025",
            description: "Analyzing the practical challenges and limitations of Vision Transformers in production environments.",
            tags: ["ViT", "Computer Vision", "Research"],
            link: "https://medium.com/@vedant050626"
        },
        {
            title: "Quantum Random Number Based Password Generation",
            date: "Feb 13, 2025",
            description: "Exploring quantum computing applications in cryptography through QRNG-based secure password generation.",
            tags: ["Quantum", "Cryptography", "Qiskit"],
            link: "https://medium.com/@vedant050626"
        },
        {
            title: "Understanding Different Types of Convolutional Neural Networks and Their Use Cases",
            date: "Feb 2025",
            description: "A comprehensive guide to CNN architectures and their real-world applications in computer vision.",
            tags: ["CNN", "Deep Learning", "Tutorial"],
            link: "https://medium.com/@vedant050626"
        }
    ];

    return (
        <div className="app" ref={containerRef}>
            {/* Animated Background */}
            <motion.div className="background-layer" style={{ y: backgroundY }}>
                <div className="star-field">
                    {[...Array(80)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="star"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                width: `${Math.random() * 2 + 1}px`,
                                height: `${Math.random() * 2 + 1}px`,
                            }}
                            animate={{
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>
                <div className="gradient-orb orb-1" />
                <div className="gradient-orb orb-2" />
            </motion.div>

            {/* Hero Section with Photo */}
            <section className="hero-section">
                <div className="hero-container">
                    {/* Photo Side */}
                    <motion.div
                        className="hero-photo-wrapper"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="photo-frame">
                            <img src="/vedant-photo.jpg" alt="Vedant Desai" className="hero-photo" />
                            <div className="photo-border"></div>
                        </div>
                    </motion.div>

                    {/* Info Side */}
                    <div className="hero-info">
                        <motion.div
                            className="availability-badge"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <span className="pulse-dot"></span>
                            Available for opportunities
                        </motion.div>

                        <motion.h1
                            className="hero-name"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            Vedant Desai
                        </motion.h1>

                        <motion.div
                            className="hero-title"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            <span className="title-text">ML Engineer</span>
                            <span className="title-divider">·</span>
                            <span className="title-text">AI Researcher</span>
                        </motion.div>

                        <motion.p
                            className="hero-bio"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                        >
                            Exploring the frontiers of <span className="accent">Artificial Intelligence</span>,
                            <span className="accent"> Robotics & Embodied Intelligence</span>,
                            <span className="accent"> Quantum Computing</span>, and
                            <span className="accent"> 3D Development</span>.
                            Building intelligent systems at NMIMS University, Mumbai.
                        </motion.p>

                        <motion.div
                            className="hero-location"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.4 }}
                        >
                            📍 Mumbai, India
                        </motion.div>

                        <motion.div
                            className="hero-cta"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.6 }}
                        >
                            <a href="#contact" className="btn-primary">Get in Touch</a>
                            <a href="#journey" className="btn-secondary">My Journey</a>
                        </motion.div>

                        <motion.div
                            className="hero-nav-links"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.7 }}
                        >
                            <a href="#projects" className="nav-link">
                                <span className="nav-icon">🚀</span>
                                Projects
                            </a>
                            <a href="#skills" className="nav-link">
                                <span className="nav-icon">🔬</span>
                                Research
                            </a>
                            <a href="#journey" className="nav-link">
                                <span className="nav-icon">💼</span>
                                Experience
                            </a>
                        </motion.div>

                        <motion.div
                            className="hero-socials"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.8 }}
                        >
                            <a href="https://github.com/Vedant-D04" target="_blank" rel="noopener noreferrer" className="social-btn">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/desaivedant" target="_blank" rel="noopener noreferrer" className="social-btn">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href="mailto:vedant050626@gmail.com" className="social-btn">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </a>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    className="scroll-hint"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 8, 0] }}
                    transition={{
                        opacity: { delay: 2.5 },
                        y: { duration: 1.5, repeat: Infinity }
                    }}
                >
                    <span>Scroll to explore</span>
                    <div className="scroll-line"></div>
                </motion.div>
            </section>

            {/* About Section */}
            <section className="section about-section" id="about">
                <div className="section-container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">About</span>
                        <h2 className="section-title">The Mission</h2>
                    </motion.div>

                    <div className="about-content">
                        <motion.div
                            className="about-text"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <p className="lead-text">
                                I build intelligent systems at the intersection of
                                <span className="accent"> AI</span>,
                                <span className="accent"> robotics & embodied intelligence</span>,
                                <span className="accent"> quantum computing</span>, and
                                <span className="accent"> immersive 3D experiences</span>.
                            </p>
                            <p className="body-text">
                                Currently pursuing B.Tech in Computer Science at NMIMS University,
                                I'm passionate about creating technology that doesn't just work—it thinks,
                                learns, and evolves. My research focuses on explainable AI, multi-agent systems,
                                computational optimization, and bridging the gap between digital intelligence and physical systems.
                            </p>
                        </motion.div>

                        <motion.div
                            className="stats-row"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            {[
                                { value: "3.68", label: "GPA" },
                                { value: "10+", label: "Projects" },
                                { value: "3", label: "Publications" },
                                { value: "2022", label: "Started" },
                            ].map((stat) => (
                                <motion.div
                                    key={stat.label}
                                    className="stat-item"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <span className="stat-value">{stat.value}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Journey Timeline Section */}
            <section className="section journey-section" id="journey">
                <div className="section-container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Timeline</span>
                        <h2 className="section-title">The Journey</h2>
                    </motion.div>

                    <div className="visual-timeline">
                        <div className="timeline-line" />
                        {journeyMilestones.map((item, i) => (
                            <motion.div
                                key={i}
                                className={`timeline-node ${item.type} ${item.current ? 'current' : ''}`}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="node-connector">
                                    <motion.div
                                        className="node-dot"
                                        whileHover={{ scale: 1.3 }}
                                        animate={item.current ? { boxShadow: ['0 0 0 0 rgba(124, 58, 237, 0.4)', '0 0 0 15px rgba(124, 58, 237, 0)', '0 0 0 0 rgba(124, 58, 237, 0.4)'] } : {}}
                                        transition={item.current ? { duration: 2, repeat: Infinity } : {}}
                                    >
                                        <span className="node-icon">{item.icon}</span>
                                    </motion.div>
                                </div>
                                <motion.div
                                    className="node-content"
                                    whileHover={{ scale: 1.02, x: i % 2 === 0 ? 5 : -5 }}
                                >
                                    <span className="node-year">{item.year}</span>
                                    <h3 className="node-title">{item.title}</h3>
                                    <span className="node-org">{item.org}</span>
                                    <p className="node-desc">{item.description}</p>
                                    <span className={`node-type-badge ${item.type}`}>
                                        {item.type === 'education' && '🎓 Education'}
                                        {item.type === 'discovery' && '🔬 Discovery'}
                                        {item.type === 'project' && '💡 Project'}
                                        {item.type === 'work' && '💼 Work'}
                                    </span>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section - Open Sky with Floating Clouds */}
            <section className="section skills-section" id="skills">
                <div className="section-container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Expertise</span>
                        <h2 className="section-title">Tech Stack</h2>
                    </motion.div>

                    <div className="tech-sky">
                        {techStack.map((group, i) => (
                            <motion.div
                                key={group.category}
                                className="tech-category"
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="category-label">
                                    <span className="category-icon">{group.icon}</span>
                                    <h3 className="category-name">{group.category}</h3>
                                </div>
                                <div className="cloud-region">
                                    {group.skills.map((skill, j) => (
                                        <motion.span
                                            key={skill}
                                            className="floating-skill"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 + j * 0.08, type: "spring", stiffness: 200 }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="section experience-section" id="experience">
                <div className="section-container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Career</span>
                        <h2 className="section-title">Experience</h2>
                    </motion.div>

                    <div className="experience-cards">
                        {experience.map((exp, i) => (
                            <motion.div
                                key={i}
                                className="experience-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                            >
                                <div className="exp-header">
                                    <span className="exp-icon">{exp.icon}</span>
                                    <div className="exp-titles">
                                        <h3 className="exp-role">{exp.role}</h3>
                                        <span className="exp-company">{exp.company}</span>
                                    </div>
                                    <span className="exp-period">{exp.period}</span>
                                </div>
                                <p className="exp-description">{exp.description}</p>
                                <div className="exp-tech">
                                    {exp.tech.map((tech) => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Publications Section */}
            <section className="section publications-section" id="publications">
                <div className="section-container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Research</span>
                        <h2 className="section-title">Publications & Research</h2>
                    </motion.div>

                    <div className="publications-grid">
                        {publications.map((pub, i) => (
                            <motion.div
                                key={i}
                                className={`publication-card ${pub.type}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="pub-header">
                                    <span className="pub-icon">{pub.icon}</span>
                                    <span className="pub-year">{pub.year}</span>
                                </div>
                                <h3 className="pub-title">{pub.title}</h3>
                                {pub.publisher && <span className="pub-publisher">{pub.publisher}</span>}
                                <p className="pub-description">{pub.description}</p>
                                <span className={`pub-type-badge ${pub.type}`}>
                                    {pub.type === 'conference' && '🎤 Conference'}
                                    {pub.type === 'paper' && '📝 Research Paper'}
                                    {pub.type === 'book' && '📖 Book Chapter'}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Research Experience */}
                    <motion.div
                        className="research-experience-block"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="research-header">
                            <span className="research-icon">🔬</span>
                            <h3 className="research-title">Research Experience</h3>
                        </div>
                        {researchExperience.map((research, i) => (
                            <div key={i} className="research-item">
                                <h4 className="research-subtitle">{research.title}</h4>
                                <p className="research-desc">{research.description}</p>
                                <ul className="research-highlights">
                                    {research.highlights.map((highlight, j) => (
                                        <motion.li
                                            key={j}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: j * 0.1 }}
                                        >
                                            {highlight}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="section projects-section" id="projects">
                <div className="section-container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Portfolio</span>
                        <h2 className="section-title">Featured Projects</h2>
                    </motion.div>

                    <div className="projects-grid">
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                className={`project-card ${expandedProject === project.id ? 'expanded' : ''}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                                layout
                            >
                                <div className="project-header">
                                    <span className="project-icon">{project.icon}</span>
                                    <div className="project-titles">
                                        <h3 className="project-name">{project.title}</h3>
                                        <span className="project-subtitle">{project.subtitle}</span>
                                    </div>
                                </div>
                                <div className="project-body">
                                    <p className="project-summary">{project.summary}</p>
                                    <div className="project-tech">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>

                                    <AnimatePresence>
                                        {expandedProject === project.id && (
                                            <motion.div
                                                className="project-details"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <h4>Key Features</h4>
                                                <ul className="feature-list">
                                                    {project.features.map((feature, j) => (
                                                        <motion.li
                                                            key={j}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: j * 0.05 }}
                                                        >
                                                            {feature}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="github-link"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                                    </svg>
                                                    View on GitHub
                                                </a>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <span className="expand-hint">
                                        {expandedProject === project.id ? 'Click to collapse' : 'Click to expand'}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Medium Blog Section */}
            <section className="section blog-section" id="blog">
                <div className="section-container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Writing</span>
                        <h2 className="section-title">Medium Blog</h2>
                    </motion.div>

                    <motion.p
                        className="blog-intro"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        I write about AI, machine learning, and my tech journey. Check out my latest articles.
                    </motion.p>

                    <div className="blog-grid">
                        {mediumBlogs.map((blog, i) => (
                            <motion.a
                                key={i}
                                href={blog.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="blog-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                            >
                                <div className="blog-card-header">
                                    <span className="blog-icon">📝</span>
                                    <span className="blog-date">{blog.date}</span>
                                </div>
                                <h3 className="blog-title">{blog.title}</h3>
                                <p className="blog-description">{blog.description}</p>
                                <div className="blog-tags">
                                    {blog.tags.map((tag) => (
                                        <span key={tag} className="blog-tag">{tag}</span>
                                    ))}
                                </div>
                                <span className="blog-read-more">
                                    Read on Medium →
                                </span>
                            </motion.a>
                        ))}
                    </div>

                    <motion.a
                        href="https://medium.com/@vedant050626"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-all-btn"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                        </svg>
                        View All on Medium
                    </motion.a>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section contact-section" id="contact">
                <div className="section-container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Contact</span>
                        <h2 className="section-title">Get in Touch</h2>
                    </motion.div>

                    <motion.p
                        className="contact-intro"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Interested in collaborating? Let's connect.
                    </motion.p>

                    <div className="contact-cards">
                        {[
                            { icon: "✉️", label: "Email", value: "vedant050626@gmail.com", href: "mailto:vedant050626@gmail.com" },
                            { icon: "📱", label: "Phone", value: "+91 88281 93785", href: "tel:+918828193785" },
                            { icon: "💻", label: "GitHub", value: "Vedant-D04", href: "https://github.com/Vedant-D04" },
                            { icon: "💼", label: "LinkedIn", value: "desaivedant", href: "https://www.linkedin.com/in/desaivedant" },
                        ].map((item, i) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                target={item.label === "Email" || item.label === "Phone" ? "_self" : "_blank"}
                                rel="noopener noreferrer"
                                className="contact-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <span className="contact-icon">{item.icon}</span>
                                <span className="contact-label">{item.label}</span>
                                <span className="contact-value">{item.value}</span>
                            </motion.a>
                        ))}
                    </div>

                    <footer className="footer">
                        <p>Built with React & Framer Motion</p>
                        <p>© 2026 Vedant Desai</p>
                    </footer>
                </div>
            </section>
        </div>
    );
}

export default App;
