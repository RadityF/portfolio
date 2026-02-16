"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal, Project } from "./ProjectModal";

const PROJECTS: Project[] = [
    {
        id: "1",
        title: "Dementia Brain MRI Generation using Conditional DCGAN",
        description: "A bioinformatics research project using Conditional Deep Convolutional GANs to generate synthetic brain MRI images across different Alzheimer's dementia stages.",
        longDescription: "Developed as a project for a Bioinformatics class, this work addresses the critical challenge of data scarcity and class imbalance in medical imaging. The system utilizes a Conditional Deep Convolutional GAN (cDCGAN) to synthesize high-quality 128x128 grayscale brain MRI images that correspond to four distinct Alzheimer's dementia severity stages from the OASIS dataset: Non-Dementia, Very Mild, Mild, and Moderate. \n\nThe technical implementation features a Generator that fuses a 100-dimensional noise vector with specific stage-label embeddings to achieve controlled, on-demand image generation. To ensure realism and training stability, the architecture incorporates Batch Normalization, LeakyReLU activations, and Mixed Precision (AMP) training. Beyond pure generation, the model is integrated with the HuggingFace Hub, allowing researchers to easily download weights and run inference scripts for educational and data augmentation purposes. This project highlights my ability to build sophisticated generative models that serve practical research needs in healthcare AI.",
        thumbnail: "/projects/dementia_mri.png",
        technologies: ["Bioinformatics", "Conditional DCGAN", "Computer Vision", "OASIS Dataset", "PyTorch", "HuggingFace Hub"],
        repoUrl: "https://github.com/argamavanesa/dementia-prediction-gan",
        demoUrl: "https://dementia-prediction-gan-model.streamlit.app/",
        screenshots: ["/Dementia Brain MR.jpeg"]
    },
    {
        id: "2",
        title: "Face Recognition Attendance System",
        description: "Touchless, automated attendance system using computer vision with real-time detection and anti-spoofing.",
        longDescription: "In many organizational settings, manual attendance tracking is prone to errors and \"buddy punching.\" This project was developed to modernize this process by leveraging computer vision to create a touchless, automated attendance system.\n\nThe core challenge was balancing real-time detection speed with high accuracy. I implemented a system that doesn't just recognize a face once but manages a continuous video stream, processing frames at 2-second intervals to optimize CPU usage.\n\nTo ensure the system's reliability in a professional environment, I built a custom \"cooldown\" logic that prevents multiple logs from the same person within a short window. This project demonstrates my ability to build a full-stack application where complex AI models are integrated into a functional web backend with persistent database storage.",
        thumbnail: "/projects/face_recognition.png",
        technologies: ["Python (Flask 2.x)", "PostgreSQL", "OpenCV & NumPy", "dlib", "Bootstrap 5 & JS"],
        repoUrl: "https://github.com/RadityF/Face-Recognition-Attendance-System",
        screenshots: ["/face_recog_1.jpeg", "/face_recog_2.jpeg", "/face_recog_3.jpeg", "/face_recog_4.jpeg", "/face_recog_5.jpeg", "/face_recog_6.jpeg", "/face_recog_7.jpeg"]
    },
    {
        id: "3",
        title: "PDF-Based RAG System",
        description: "Retrieval-Augmented Generation system transforming static PDF documents into interactive knowledge bases.",
        longDescription: "Static documents like long PDF reports often contain vast amounts of \"trapped\" information that is difficult to search through. This project utilizes a Retrieval-Augmented Generation (RAG) architecture to transform these static files into interactive knowledge bases.\n\nBy using HuggingFace for local embeddings, the system maintains cost efficiency and data privacy for the initial processing phase. When a user asks a question, the system performs a similarity search within a ChromaDB vector store to find the most relevant context. This context is then fed into Google Gemini Flash, allowing the LLM to generate precise, grounded answers based strictly on the uploaded document. This project showcases my proficiency in modern LLM orchestration and vector database management.",
        thumbnail: "/projects/rag_system.png",
        technologies: ["Google Gemini API", "LangChain", "ChromaDB", "HuggingFace Embeddings", "Streamlit"],
        repoUrl: "https://github.com/RadityF/PDF-Based-Question-Answering-using-Local-Embeddings-and-Google-Gemini-LLM-",
        screenshots: ["/RAG_1.jpeg", "/RAG_2.jpeg"]
    },
    {
        id: "4",
        title: "Cloud Data Security Risk Analysis",
        description: "Cybersecurity anomaly detection using Isolation Forests and Tree SHAP for explainable AI.",
        longDescription: "Security in the cloud is often compromised not by infrastructure failures, but by anomalous user behavior. This project approaches cybersecurity from a mathematical perspective, using the Isolation Forest algorithm to detect high-risk activities.\n\nUnlike traditional rule-based systems, this model learns to \"isolate\" anomalies by identifying data points that require fewer splits to be separated in a tree structure. To solve the \"black box\" problem common in Machine Learning, I integrated Tree SHAP (SHapley Additive exPlanations). This allows the system to not only flag an activity as risky but also explain why—for example, indicating that a high anomaly score was driven specifically by a failed login attempt from an unusual geographic location.\n\nThe model's core scoring is governed by the following formula:\n$$s(x,n)=2^{-\\frac{E(h(x))}{c(n)}}$$",
        thumbnail: "/projects/cloud_security.png",
        technologies: ["Python", "Scikit-learn (Isolation Forest)", "Tree SHAP", "Pandas & NumPy", "Matplotlib"],
        repoUrl: "",
        documentPdfUrl: "/cloud data security risk.pdf"
    },
    {
        id: "5",
        title: "Heart Disease Prediction (ANN)",
        description: "Deep learning model for medical diagnosis with hyperparameter tuning and class balancing.",
        longDescription: "Medical diagnosis requires extreme precision, where the cost of a \"false negative\" can be life-threatening. This project involved building a deep learning model to predict heart disease using clinical data such as cholesterol levels and blood pressure.\n\nI focused heavily on the mathematical preprocessing of the data, using Z-Score normalization and Random OverSampler to ensure the neural network wasn't biased toward the majority class (healthy patients). I utilized Keras Tuner to perform a Random Search across the hyperparameter space, finding the optimal balance of neurons and dropout rates to maximize the F1-Score. This project highlights my ability to apply rigorous statistical methods to complex deep learning architectures.",
        thumbnail: "/projects/heart_disease.png",
        technologies: ["TensorFlow & Keras", "Keras Tuner", "Scikit-learn", "Matplotlib"],
        repoUrl: "https://github.com/username/project",
        documentUrl: "https://docs.google.com/presentation/d/1InAMzGPVyzxo0JhnPUXFbWPRrVNiWSFa-zWKQP9g1iU/edit?usp=sharing",
        documentPdfUrl: "/Heart Deases.pdf"
    },
    {
        id: "6",
        title: "E-Commerce Customer Sentiment Analysis (Tokopedia)",
        description: "NLP pipeline for analyzing public Review on E-commerce using Naive Bayes and custom slang normalization.",
        longDescription: "In the competitive e-commerce landscape, understanding customer feedback is vital for business growth. This project focuses on analyzing public sentiment for a specific store on Tokopedia by transforming raw user reviews into actionable insights. The primary challenge lies in the nature of Indonesian e-commerce reviews, which are heavily saturated with slang, regional dialects, and informal abbreviations.\n\nTo address this, I built a robust NLP pipeline that begins with data labeling—converting numerical ratings (1–5) into binary sentiment categories (Positive and Negative). I developed a specialized preprocessing engine that utilizes a custom normalization dictionary to \"translate\" informal slang into standard Indonesian, followed by the Sastrawi library for precise stemming to reduce words to their base forms.\n\nFor the classification logic, I implemented a Gaussian Naive Bayes model. By pairing this with TF-IDF vectorization, the system can identify which specific keywords (e.g., \"cepat\", \"kecewa\", \"original\") have the most significant impact on the overall sentiment score. This lightweight yet powerful combination ensures high-speed inference, making it an ideal solution for a store owner to monitor customer satisfaction in real-time.",
        thumbnail: "/projects/sentiment_analysis.png",
        technologies: ["Python", "Scikit-learn", "Sastrawi", "NLTK", "Pandas"],
        repoUrl: "https://github.com/RadityF/streamlit_app-Sentiment-Analysis-Tokopedia-Review-",
    },
    {
        id: "7",
        title: "Sales Performance Dashboard",
        description: "Business intelligence dashboard for pharmaceutical sales tracking and KPI visualization.",
        longDescription: "In a retail environment, raw transaction data is meaningless without context. Working within a simulated environment for Kimia Farma, I developed a comprehensive Business Intelligence dashboard to monitor pharmaceutical sales performance across multiple regions.\n\nThe project began with writing complex SQL queries to aggregate millions of rows of data, focusing on key performance indicators (KPIs) like revenue growth and product popularity. The final output was an interactive dashboard in Google Data Studio that allows stakeholders to drill down into specific branches or time periods to identify underperforming sectors. This project demonstrates my ability to translate technical data into actionable business strategy.",
        thumbnail: "/projects/sales_dashboard.png",
        technologies: ["SQLite", "Looker Studio", "Data cleaning", "Data Modeling"],
        repoUrl: "https://github.com/username/project",
        demoUrl: "https://lookerstudio.google.com/reporting/3e283702-f539-4ad6-b5f4-76ac48ba9c35",
        screenshots: ["/dashboard.jpeg"]
    }
];

export const ProjectsGrid = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section className="py-24 px-4 md:px-10 bg-[var(--color-background)]" id="projects">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
                    <span className="w-2 h-8 bg-[var(--color-neon-purple)] rounded-full" />
                    Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            onClick={setSelectedProject}
                        />
                    ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};
