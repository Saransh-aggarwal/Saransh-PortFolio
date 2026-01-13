export interface Project {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    category: 'ai-ml' | 'web-dev' | 'data-science' | 'devops';
    categoryLabel: string;
    techStack: string[];
    thumbnail: string;
    demoVideo?: string;
    githubUrl: string;
    liveUrl?: string;
    featured: boolean;
    date: string;
}

export const projects: Project[] = [
    {
        id: '1',
        slug: 'conversational-winery-agent',
        title: 'Conversational Winery Agent',
        shortDescription: 'A smart conversational agent designed for a fictional Napa Valley winery that acts as a digital concierge.',
        fullDescription: `A smart conversational agent designed for a fictional Napa Valley winery, "Golden Vine Winery." This agent acts as a digital concierge, capable of answering detailed questions about the business, performing real-time web searches, and providing practical updates like the weather.

The project is built with a modern, tool-based architecture using LangGraph, ensuring it is accurate, fast, and flexible. It demonstrates advanced concepts in agentic AI development including tool calling, state management, and conversational flow design.`,
        category: 'ai-ml',
        categoryLabel: 'AI/ML',
        techStack: ['LangGraph', 'Python', 'LLM', 'RAG'],
        thumbnail: '/images/project-agent.png',
        demoVideo: 'https://www.youtube.com/watch?v=UUvDzDP3rwE',
        githubUrl: 'https://github.com/Saransh-aggarwal/conversational-agent',
        featured: true,
        date: '2024',
    },
    {
        id: '2',
        slug: 'virtual-patient-simulator',
        title: 'Virtual Patient Simulator',
        shortDescription: 'An AI-powered, persona-driven chat simulator for medical training, designed to run efficiently on local machines.',
        fullDescription: `An AI-powered, persona-driven chat simulator for medical training, designed to run efficiently on local machines.

The application is built using a fine-tuned Gemma model (quantized for lightweight performance) and a simple web interface powered by Gradio. This simulator enables medical students and professionals to practice patient interactions in a realistic, safe environment.

Key features include persona-based responses, medical scenario simulation, and efficient local inference through model quantization.`,
        category: 'ai-ml',
        categoryLabel: 'AI/ML',
        techStack: ['Gemma', 'Gradio', 'Fine-tuning', 'Python'],
        thumbnail: '/images/project-patient.png',
        demoVideo: 'https://www.youtube.com/watch?v=0juHAYVcbt8',
        githubUrl: 'https://github.com/Saransh-aggarwal/virtual-patient-simulator',
        featured: true,
        date: '2024',
    },
    {
        id: '3',
        slug: 'smart-shopping-assistant',
        title: 'Smart Shopping Assistant API',
        shortDescription: 'A real-time product information pipeline built with Django and Django REST Framework.',
        fullDescription: `This project is a real-time product information pipeline built with Django and Django REST Framework. It provides a simple API that fetches product data from Google Shopping, optimized for speed using caching with Redis and asynchronous requests.

The architecture demonstrates best practices in building performant REST APIs including response caching, async I/O operations, and clean API design. Perfect for e-commerce integrations and price comparison applications.`,
        category: 'web-dev',
        categoryLabel: 'Web Dev',
        techStack: ['Django', 'DRF', 'Redis', 'Python'],
        thumbnail: '/images/project-shopping.png',
        demoVideo: 'https://www.youtube.com/watch?v=2ZNr-iZ_NDE',
        githubUrl: 'https://github.com/Saransh-aggarwal/smart-shopping-assistant-api',
        featured: false,
        date: '2024',
    },
    {
        id: '4',
        slug: 'customer-churn-prediction',
        title: 'Customer Churn Prediction',
        shortDescription: 'A machine learning project to predict customer churn using Python, Scikit-Learn, and Power BI.',
        fullDescription: `A machine learning project to predict customer churn using Python, Scikit-Learn, and Power BI.

This project is an end-to-end data science analysis aimed at predicting customer churn for a fictional telecom company. Customer churn is a critical metric for subscription-based businesses, and by identifying customers who are likely to leave, the company can proactively implement targeted retention strategies to reduce revenue loss and improve customer loyalty.

The project includes comprehensive EDA, feature engineering, model training with multiple algorithms, and interactive visualization dashboards in Power BI.`,
        category: 'data-science',
        categoryLabel: 'Data Science',
        techStack: ['Python', 'Scikit-Learn', 'Power BI', 'Pandas'],
        thumbnail: '/images/project-churn.png',
        githubUrl: 'https://github.com/Saransh-aggarwal/Customer-Churn-Prediction',
        featured: true,
        date: '2024',
    },
    {
        id: '5',
        slug: 'data-cleaning-assistant',
        title: 'Data Cleaning Assistant',
        shortDescription: 'An interactive web application to make data cleaning faster, more intuitive, and reproducible.',
        fullDescription: `An interactive web application designed to make the data cleaning process faster, more intuitive, and reproducible. Built with a Flask backend and a dynamic, real-time UI.

This tool empowers data analysts to perform common data cleaning tasks, visualize their changes, and generate the corresponding Python code automatically. Features include:

• Real-time data preview
• One-click common operations (null handling, type conversion, duplicates)
• Automatic Python code generation for reproducibility
• Interactive visualization of data transformations`,
        category: 'web-dev',
        categoryLabel: 'Web Dev',
        techStack: ['Flask', 'Python', 'JavaScript', 'Pandas'],
        thumbnail: '/images/project-cleaning.png',
        githubUrl: 'https://github.com/Saransh-aggarwal',
        featured: false,
        date: '2024',
    },
    {
        id: '6',
        slug: 'aws-cicd-pipeline',
        title: 'AWS CI/CD Pipeline',
        shortDescription: 'A complete, end-to-end CI/CD pipeline for a containerized Python Flask application on AWS.',
        fullDescription: `This project demonstrates a complete, end-to-end CI/CD (Continuous Integration/Continuous Deployment) pipeline for a containerized Python Flask web application.

The pipeline automates the process from a git push in GitHub to a live, updated deployment on AWS ECS with Fargate. Key components include:

• GitHub Actions for CI/CD orchestration
• Docker containerization
• AWS ECR for container registry
• AWS ECS with Fargate for serverless container deployment
• Infrastructure as Code principles`,
        category: 'devops',
        categoryLabel: 'DevOps',
        techStack: ['AWS ECS', 'Fargate', 'GitHub Actions', 'Docker', 'Flask'],
        thumbnail: '/images/project-cicd.png',
        githubUrl: 'https://github.com/Saransh-aggarwal/aws-flask-app',
        featured: false,
        date: '2024',
    },
];

export const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-ml', label: 'AI/ML' },
    { id: 'web-dev', label: 'Web Dev' },
    { id: 'data-science', label: 'Data Science' },
    { id: 'devops', label: 'DevOps' },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
    return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: string): Project[] {
    if (category === 'all') return projects;
    return projects.filter((p) => p.category === category);
}
