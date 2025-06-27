
import { Award, ExternalLink, Calendar } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "AI - ML Intern Certificate",
      issuer: "NASSCOM",
      date: "2024",
      description: "Completed AI/ML internship program focusing on machine learning algorithms and data science applications.",
      skills: ["Machine Learning", "Python", "Data Science", "TensorFlow"],
      link: "https://drive.google.com/file/d/1qoHdhg8dpdnX-MqhiZVt7MRQi7jC1b4H/view?usp=sharing"
    },
    {
      title: "FEWD & AI - ML Intern Certificate",
      issuer: "IBM",
      date: "2024",
      description: "Advanced machine learning certification covering deep learning and Web Development.",
      skills: ["Deep Learning", "Web Development", "AI Models", "IBM Watson Studio"],
      link: "https://drive.google.com/file/d/1yeed2COmFQnhaYDibDywXEB7mhfm14en/view?usp=sharing"
    },
    {
      title: "Summer Intern Certificate",
      issuer: "NETCAMP",
      date: "2023",
      description: "Web development internship focusing on Web Development and Android Development.",
      skills: ["Web Development", "Android Development", "Networking"],
      link: ""
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "CISCO",
      date: "2024",
      description: "Comprehensive cybersecurity fundamentals and best practices certification.",
      skills: ["Cybersecurity", "Network Security", "Risk Management"],
      link: "https://www.credly.com/badges/ce9ab9b7-0d73-42e9-8556-b6462e30bb61"
    },
    {
      title: "Introduction to Data Science",
      issuer: "CISCO",
      date: "2024",
      description: "Data science fundamentals including statistical analysis and data visualization.",
      skills: ["Data Science", "Statistics", "Data Analysis"],
      link: "https://www.credly.com/badges/c3c5e80a-1016-4ad2-8adc-016d5e6f376c"
    },
    {
      title: "Develop GenAi Apps with Gemini and Streamlit Skill Badge",
      issuer: "GOOGLE",
      date: "2024",
      description: "Develop GenAI Apps with Gemini and Streamlit Skill Badge",
      skills: ["Gemini AI", "Streamlit", "Search Applications"],
      link: "https://www.credly.com/badges/fb984048-68ee-434e-a106-91b170214b0b"
    },
    {
      title:"Prompt Design in Vertex AI Skill Badge",
      issuer: "GOOGLE",
      date: "2024",
      description: "Prompt Design in Vertex AI Skill Badge",
      skills: ["Prompt Design", "Vertex AI", "GenAI"],
      link: "https://www.credly.com/badges/f2a3f6dd-315f-4025-a09b-4112fc353a6c"
    },
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM",
      date: "2024",
      description: "Core AI concepts and practical applications in real-world scenarios.",
      skills: ["Artificial Intelligence", "ML Algorithms", "AI Ethics"],
      link: "https://www.credly.com/badges/35b66397-ab61-40ee-92b8-9f5ca04ba996"
    },
    {
      title: "Getting Started with Artificial Intelligence",
      issuer: "IBM",
      date: "2024",
      description: "Introduction to AI technologies and their practical implementations.",
      skills: ["AI Basics", "Machine Learning", "Data Processing"],
      link: "https://www.credly.com/badges/95351bab-3a63-422f-9820-4cbd62c2e744"
    },
    {
      title: "Web Development Fundamentals",
      issuer: "IBM",
      date: "2024",
      description: "Comprehensive web development training covering modern frameworks and best practices.",
      skills: ["HTML/CSS", "JavaScript", "React", "Web APIs"],
      link: "https://www.credly.com/badges/4c49c1f0-ed0f-4a70-b1c6-447dda82303a"
    },
    {
      title: "Working in a Digital World: Professional Skills",
      issuer: "IBM",
      date: "2024",
      description: "Professional development focusing on digital workplace skills and collaboration.",
      skills: ["Digital Skills", "Professional Development", "Team Collaboration"],
      link: "https://www.credly.com/badges/7c8ffa29-6653-4151-ab85-106fd17dd96b"
    }
  ];

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certificates & <span className="text-blue-400">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Professional certifications and achievements showcasing continuous learning and expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 group border border-slate-700/50 hover:border-blue-400/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8" />
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {cert.date}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {cert.title}
              </h3>
              
              <p className="text-blue-400 font-medium mb-3 text-sm">
                {cert.issuer}
              </p>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full border border-blue-400/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <a
                href={cert.link}
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
