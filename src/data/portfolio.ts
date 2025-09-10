export const personalInfo = {
  name: "Mahesh Ganneboina",
  title: "Generative AI Engineer",
  location: "Clermont, FL",
  phone: "+1 (813) 360-7716",
  email: "Maheshganneboina3777@gmail.com",
  linkedin: "https://www.linkedin.com/in/mahesh-gannebo/",
  tagline: "Building Scalable Web Apps with Modern Tech",
  rotatingKeywords: ["React", "AI/ML", "Cloud", "PyTorch", "RAG"],
  summary: "Generative AI Engineer with 5+ years of experience developing LLM-powered applications, multimodal AI systems, and enterprise-scale data platforms. Specialized in RAG pipelines, agentic AI frameworks, and cloud-native ML solutions that enhance decision-making and enable enterprise AI adoption.",
};

export const stats = [
  { label: "Years Experience", value: "5+", suffix: "" },
  { label: "Projects Completed", value: "100", suffix: "+" },
  { label: "Client Satisfaction", value: "100", suffix: "%" },
  { label: "Technologies Mastered", value: "50", suffix: "+" },
];

export const experience = [
  {
    id: 1,
    company: "Liberty Mutual",
    position: "AI & ML Engineer",
    location: "FL",
    duration: "Aug 2024 - Present",
    description: "Designed RAG pipelines on AWS Kinesis, Snowflake, and Pinecone processing millions of daily iOS events, sustaining 99.9% uptime while powering real-time personalization across global markets.",
    highlights: [
      "Leveraged LangChain, GPT-4, and Hugging Face Transformers to auto-generate telemetry queries, cutting analyst SQL effort by 60%",
      "Embedded PySpark workflows with Bayesian forecasting models, reducing event processing latency by 30%",
      "Streamlined model experimentation by deploying feature stores in Snowflake with dbt and Airflow",
      "Strengthened privacy framework with IAM controls, reducing unauthorized access incidents by 90%"
    ],
    technologies: ["AWS", "Snowflake", "Pinecone", "LangChain", "GPT-4", "PySpark", "Airflow", "dbt"]
  },
  {
    id: 2,
    company: "Cognizant",
    position: "Data Scientist - Machine Learning",
    location: "India",
    duration: "Sep 2018 - Oct 2021",
    description: "Built real-time market intelligence pipelines processing 5TB+ daily trading data, delivering actionable insights for traders within milliseconds.",
    highlights: [
      "Integrated LLM-powered stress testing pipelines using GPT-4 alongside Scikit-learn models, improving forecast accuracy by 18%",
      "Accelerated regulatory reporting by designing compliance-aligned ML workflows on GCP, reducing report generation time by 45%",
      "Re-engineered legacy analytics notebooks in Databricks, reducing execution errors by 25%",
      "Embedded row-level security and Cloud KMS encryption ensuring GDPR, SOX, and FINRA compliance"
    ],
    technologies: ["GCP", "BigQuery", "Databricks", "Kafka", "Spark", "Python", "SQL", "Jenkins"]
  },
  {
    id: 3,
    company: "Cognizant",
    position: "Data Analyst Intern",
    location: "India", 
    duration: "Aug 2017 - Sep 2018",
    description: "Delivered interactive dashboards integrating SQL Server and Azure Synapse datasets, providing real-time KPI visibility and cutting reporting delays by 40%.",
    highlights: [
      "Transitioned on-premise financial systems into Azure Synapse, scaling multi-terabyte datasets and lowering infrastructure costs by 35%",
      "Applied Databricks with Delta Lake to curate streaming data, raising dataset freshness by 30%",
      "Re-engineered SQL Server marts with advanced partitioning, reducing query run times by 35%",
      "Automated ETL-to-analysis pipelines in SSIS with Python-based quality checks"
    ],
    technologies: ["Azure", "SQL Server", "Tableau", "Power BI", "Databricks", "SSIS", "Python", "Docker"]
  }
];

export const projects = [
  {
    id: 1,
    title: "AI-Driven Financial Forecasting Platform",
    description: "Built comprehensive BI dashboards with GPT-4 generated executive summaries, increasing quarterly revenue forecast accuracy by 18%",
    longDescription: "Enterprise-grade financial analytics platform that combines traditional forecasting models with generative AI insights.",
    technologies: ["Power BI", "Snowflake", "GPT-4", "Prophet", "ARIMA", "LangChain", "Airflow"],
    category: "AI/ML",
    featured: true,
    metrics: {
      "Accuracy Improvement": "18%",
      "Workload Reduction": "40%",
      "Processing Speed": "3x faster"
    }
  },
  {
    id: 2,
    title: "Generative AI Customer Insights Assistant",
    description: "LangChain + GPT-4 agent analyzing retail POS data, improving targeted campaign conversion effectiveness by 12%",
    longDescription: "Intelligent retail analytics system that surfaces cross-sell and up-sell patterns using advanced vector databases and LLM reasoning.",
    technologies: ["LangChain", "GPT-4", "Pinecone", "Tableau", "Vector DB", "Embeddings"],
    category: "AI/ML",
    featured: true,
    metrics: {
      "Conversion Rate": "+12%",
      "Retrieval Accuracy": "60% improvement",
      "Campaign Effectiveness": "2x better"
    }
  },
  {
    id: 3,
    title: "Enterprise RAG Analytics Assistant",
    description: "Natural language querying system for Snowflake data, scaling securely to 1,000+ enterprise users across departments",
    longDescription: "Revolutionary data querying interface that enables executives to interact with complex datasets using natural language, eliminating the need for SQL expertise.",
    technologies: ["GPT-4", "LangChain", "FAISS", "Snowflake", "Azure Functions", "Pinecone"],
    category: "Enterprise AI",
    featured: true,
    metrics: {
      "Users Served": "1,000+",
      "Query Speed": "60% faster",
      "Adoption Rate": "95%"
    }
  }
];

export const skills = {
  "AI & Machine Learning": [
    { name: "PyTorch", level: 95, category: "Framework" },
    { name: "TensorFlow", level: 90, category: "Framework" },
    { name: "LangChain", level: 95, category: "LLM Framework" },
    { name: "Hugging Face", level: 90, category: "Platform" },
    { name: "OpenAI APIs", level: 95, category: "API" },
    { name: "Vector Databases", level: 90, category: "Database" },
    { name: "RAG Pipelines", level: 95, category: "Architecture" },
    { name: "Fine-tuning", level: 85, category: "Technique" }
  ],
  "Cloud & Infrastructure": [
    { name: "AWS", level: 90, category: "Platform" },
    { name: "Azure", level: 85, category: "Platform" },
    { name: "GCP", level: 80, category: "Platform" },
    { name: "Docker", level: 85, category: "Container" },
    { name: "Kubernetes", level: 80, category: "Orchestration" },
    { name: "Terraform", level: 85, category: "IaC" },
    { name: "Jenkins", level: 80, category: "CI/CD" },
    { name: "MLflow", level: 85, category: "MLOps" }
  ],
  "Data Engineering": [
    { name: "PySpark", level: 95, category: "Framework" },
    { name: "Kafka", level: 85, category: "Streaming" },
    { name: "Airflow", level: 90, category: "Orchestration" },
    { name: "Snowflake", level: 90, category: "Warehouse" },
    { name: "BigQuery", level: 85, category: "Warehouse" },
    { name: "Databricks", level: 90, category: "Platform" },
    { name: "Delta Lake", level: 85, category: "Storage" },
    { name: "dbt", level: 80, category: "Transform" }
  ],
  "Programming & Tools": [
    { name: "Python", level: 95, category: "Language" },
    { name: "SQL", level: 90, category: "Language" },
    { name: "JavaScript", level: 75, category: "Language" },
    { name: "Git", level: 85, category: "Version Control" },
    { name: "Power BI", level: 85, category: "Visualization" },
    { name: "Tableau", level: 80, category: "Visualization" },
    { name: "Jupyter", level: 90, category: "Development" },
    { name: "VS Code", level: 85, category: "IDE" }
  ]
};

export const certifications = [
  {
    id: 1,
    name: "Generative AI with Large Language Models",
    issuer: "Coursera",
    date: "2024",
    credentialId: "coursera-genai-2024",
    verifyUrl: "https://coursera.org/verify/",
    icon: "🤖"
  },
  {
    id: 2,
    name: "Machine Learning Specialization", 
    issuer: "Coursera",
    date: "2023",
    credentialId: "coursera-ml-2023",
    verifyUrl: "https://coursera.org/verify/",
    icon: "🧠"
  },
  {
    id: 3,
    name: "IBM AI Engineering Professional Certificate",
    issuer: "Coursera",
    date: "2023", 
    credentialId: "ibm-ai-2023",
    verifyUrl: "https://coursera.org/verify/",
    icon: "🔬"
  },
  {
    id: 4,
    name: "AWS Generative AI Essentials",
    issuer: "Coursera",
    date: "2024",
    credentialId: "aws-genai-2024", 
    verifyUrl: "https://coursera.org/verify/",
    icon: "☁️"
  },
  {
    id: 5,
    name: "Databricks Generative AI Fundamentals",
    issuer: "Databricks Academy",
    date: "2024",
    credentialId: "databricks-genai-2024",
    verifyUrl: "https://databricks.com/verify/",
    icon: "📊"
  },
  {
    id: 6,
    name: "Applied Data Science with Python",
    issuer: "Coursera", 
    date: "2022",
    credentialId: "coursera-python-2022",
    verifyUrl: "https://coursera.org/verify/",
    icon: "🐍"
  }
];

export const education = [
  {
    id: 1,
    degree: "Masters in Computer Science & Information Systems",
    school: "Saint Leo University",
    location: "Tampa, FL, USA", 
    year: "2023",
    gpa: "3.8/4.0",
    coursework: ["Advanced AI Systems", "Data Mining", "Cloud Architecture", "Cybersecurity"]
  },
  {
    id: 2,
    degree: "Bachelors in Computer Science",
    school: "Sabarmati University", 
    location: "Ahmedabad, Gujarat, India",
    year: "2018",
    gpa: "3.6/4.0", 
    coursework: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering"]
  }
];