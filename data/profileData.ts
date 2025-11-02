import { ProfileData } from '../types';

export const profileData: ProfileData = {
  name: 'Ting Lin',
  title: 'PhD Student in Computer Engineering',
  bio: 'I build **intelligent systems** that understand and generate *human language*.',
  about: `Driven by a passion for the intersection of language, data, and computation, I am currently pursuing my PhD at the **University of Tech**. My research focuses on developing more efficient and interpretable NLP models.

When I'm not in the lab, I enjoy:
- Hiking
- Photography
- Exploring the latest advancements in open-source technology.`,
  contact: {
    email: 'ting_lin@sjtu.edu.cn',
    github: 'https://github.com/TtitiO',
    linkedin: 'https://linkedin.com/in/tinglin',
    twitter: 'https://twitter.com/tinglin',
  },
  education: [
    {
      degree: 'Ph.D. in Computer Engineering',
      institution: 'Shanghai Jiao Tong University',
      period: '2025 - Present',
      description: `Focusing on Natural Language Processing and Deep Learning models for semantic understanding.
- Researching **interpretability methods** for large-scale language models.
- Teaching assistant for *Introduction to AI*.`,
    },
    {
      degree: 'B.S. in Electrical and Computer Engineering',
      institution: 'Shanghai Jiao Tong University',
      period: '2021 - 2025',
      description: 'Completed a senior project on building a real-time collaborative code editor.',
    },
  ],
  publications: [
    {
      title: 'Attention is Really All You Need: A Distilled Perspective',
      authors: ['Alex Doe', 'Jane Smith', 'John Johnson'],
      journal: 'Conference on Neural Information Processing Systems (NeurIPS)',
      year: 2023,
      link: '#',
      description: 'A comprehensive analysis and distillation of the **Transformer architecture**, proposing a simplified model with comparable performance and significantly fewer parameters.',
    },
    {
      title: 'Cross-Lingual Word Embeddings for Endangered Languages',
      authors: ['Alex Doe', 'Maria Garcia'],
      journal: 'Journal of Computational Linguistics',
      year: 2021,
      link: '#',
      description: 'This paper presents a novel method for generating word embeddings for languages with scarce data by leveraging resources from high-resource languages.',
    },
  ],
  experiences: [
    {
      role: 'Research Intern',
      company: 'Innovate AI Corp',
      period: 'Summer 2022',
      description: `- Developed and implemented a novel algorithm for sentiment analysis on short-text data, improving accuracy by **15%** over the existing baseline.
- Contributed to a team project on *multimodal emotion recognition*.`,
      link: '#',
      tags: ['Python', 'PyTorch', 'NLP', 'Scikit-learn'],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Data Solutions Inc.',
      period: 'Summer 2019',
      description: 'Designed and built a data processing pipeline using Apache Spark to handle over 1TB of data daily. Created dashboards and visualizations in Tableau to present key metrics to stakeholders.',
      link: '#',
      tags: ['Python', 'Apache Spark', 'SQL', 'Tableau'],
    },
  ],
  blogs: [
    {
      title: 'The Unreasonable Effectiveness of Large Language Models',
      date: '2024-05-15',
      description: `
Large Language Models (LLMs) have taken the world by storm. But what makes them so effective?

### Core Architecture
At their heart, most modern LLMs are based on the **Transformer architecture**. This allows them to process entire sequences of text at once, capturing long-range dependencies.

### Key Components
- **Attention Mechanisms:** The secret sauce that lets the model weigh the importance of different words in the input.
- **Vast Datasets:** Trained on a significant portion of the public internet.
- **Scalability:** Performance generally improves with more data and larger model sizes.

This combination has led to surprising emergent abilities.
`,
      link: '#',
      tags: ['LLM', 'AI', 'NLP', 'Deep Learning'],
    },
    {
      title: 'Getting Started with PyTorch for NLP',
      date: '2024-04-22',
      description: `
Ready to build your first NLP model? PyTorch is a fantastic library to get started. Here's a quick guide.

### 1. Installation
First, you'll need to install PyTorch. Visit the official [PyTorch website](https://pytorch.org/) for instructions tailored to your system.

### 2. Basic Tensor Operations
Get familiar with the basic building block: the tensor.
\`\`\`
import torch
x = torch.rand(5, 3)
print(x)
\`\`\`

### 3. Building a Model
You'll typically create a class that inherits from \`nn.Module\` to define your neural network architecture. It's simpler than it sounds!
`,
      link: '#',
      tags: ['PyTorch', 'Python', 'Tutorial'],
    },
     {
      title: 'Ethical Considerations in AI',
      date: '2024-03-10',
      description: `
As AI systems become more integrated into society, it's crucial to consider their ethical implications.

### The Problem of Bias
- **Data Bias:** Models trained on biased data will perpetuate and even amplify those biases. For example, a hiring model trained on historical data might discriminate against women.
- **Algorithmic Bias:** The design of the algorithm itself can introduce bias.

### Moving Forward
- **Fairness Audits:** Regularly testing models for fairness across different demographics.
- **Transparency:** Making models more interpretable so we can understand their decision-making process.

Building ethical AI is a responsibility for all of us in the field.
`,
      link: '#',
      tags: ['AI Ethics', 'Bias', 'Society'],
    },
  ],
  gallery: [
    { src: 'https://picsum.photos/seed/gallery1/100/100', alt: 'A random landscape from picsum photos' },
    { src: 'https://picsum.photos/seed/gallery2/100/100', alt: 'A random abstract photo from picsum photos' },
    { src: 'https://picsum.photos/seed/gallery3/100/100', alt: 'A random city scape from picsum photos' },
    { src: 'https://picsum.photos/seed/gallery4/100/100', alt: 'A random animal photo from picsum photos' },
    { src: 'https://picsum.photos/seed/gallery5/100/100', alt: 'A random technology photo from picsum photos' },
    { src: 'https://picsum.photos/seed/gallery6/100/100', alt: 'A random nature photo from picsum photos' },
    { src: 'https://picsum.photos/seed/gallery7/100/100', alt: 'A random architecture photo from picsum photos' },
    { src: 'https://picsum.photos/seed/gallery8/100/100', alt: 'A random food photo from picsum photos' },
    { src: 'https://picsum.photos/seed/gallery9/100/100', alt: 'A random sports photo from picsum photos' },
    { src: 'https://picsum.photos/seed/gallery10/100/100', alt: 'A random fashion photo from picsum photos' },
    { src: 'https://picsum.photos/seed/gallery11/100/100', alt: 'A random business photo from picsum photos' },
    { src: 'https://picsum.photos/seed/gallery12/100/100', alt: 'A random people photo from picsum photos' },
    { src: 'https://picsum.photos/seed/gallery13/100/100', alt: 'A random health photo from picsum photos' },
    { src: 'https://picsum.photos/seed/gallery14/100/100', alt: 'A random music photo from picsum photos' },
    { src: 'https://picsum.photos/seed/gallery15/100/100', alt: 'A random travel photo from picsum photos' },
    { src: 'https://picsum.photos/seed/gallery16/100/100', alt: 'A random science photo from picsum photos' },
    { src: 'https://picsum.photos/seed/gallery17/100/100', alt: 'A random education photo from picsum photos' },
    { src: 'https://picsum.photos/seed/gallery18/100/100', alt: 'A random computer photo from picsum photos' },
    { src: 'https://picsum.photos/seed/gallery19/100/100', alt: 'A random industry photo from picsum photos' },
    { src: 'https://picsum.photos/seed/gallery20/100/100', alt: 'A random background photo from picsum photos' },
    { src: 'https://picsum.photos/seed/gallery21/100/100', alt: 'A random places photo from picsum photos' },
    { src: 'https://picsum.photos/seed/gallery22/100/100', alt: 'A random transportation photo from picsum photos' },
    { src: 'https://picsum.photos/seed/gallery23/100/100', alt: 'A random animals photo from picsum photos' },
    { src: 'https://picsum.photos/seed/gallery24/100/100', alt: 'A random feelings photo from picsum photos' },
  ],
};
