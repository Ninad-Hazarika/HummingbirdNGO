import styles from "./guwahati.module.css";

import { useNavigate } from "react-router-dom";

export default function Guwahati(){

    const navigate = useNavigate();
  const directors = [
    {
      id: 1,
      name: "Nitopal Mazumdar",
      role: "Circle Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      age: "21",
      quote: "With 20 years in international development, Elena crafts our overarching operational framework to ensure scalability and critical growth.",
      serving_since: "21 july 2022",
      bio: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.",
      achievements:[
        {
            title: "Achievement 1",
            year: "2022",
        },
        {
            title: "Achievement 2",
            year: "2023",
        }
      ],
      qualifications: [
        {
            qual: "Qualification 1",
            year: "2020",
        },
        {
            qual: "Qualification 2",
            year: "2021",
        }
      ] ,
    },
    {
      id: 2,
      name: "who is this",
      role: "Field Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      age: "21",
      quote: "With 20 years in international development, Elena crafts our overarching operational framework to ensure scalability and critical growth.",
      serving_since: " 3 july 2022",
      bio: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.",
      achievements:[
        {
            title: "Achievement 1",
            year: "2022",
        },
        {
            title: "Achievement 2",
            year: "2023",
        }
      ],
      qualifications: [
        {
            qual: "Qualification 1",
            year: "2020",
        },
        {
            qual: "Qualification 2",
            year: "2021",
        }
      ] ,
    },
  ];

    return(
       <div className={styles.pageWrapper}>
             <div className={styles.container}>
               
               <div className={styles.teamSec}>
                 <div className={styles.teamSectionRow}>
                   <div>
                     <h2 className={styles.teamSecTitle}>Guwahati Coordinators</h2>
                     <p className={styles.teamSecSubtitle}>
                       Architecting the long-term blueprint for sustainable global impact and
                       innovation.
                     </p>
                   </div>
                 </div>
       
                 <div className={styles.visionariesGrid}>
                   {directors.map((member) => (
                     <div key={member.id} className={styles.visionaryCard} onClick={()=> navigate(member.path || "/")}>
                       <div>
                        <div className={styles.avatarRingWrapper} onClick={()=> navigate(member.path || "/")}>
                           <img src={member.image} alt={member.name} />
                        </div>
                        <p className={styles.visRole}>{member.role}</p>
                        <p className={styles.visQuote}>{member.quote}</p>
                        <div className={styles.visKeep}>
                            <h3 className={styles.visName}>{member.name}</h3>
                            <p className={styles.visAge}>Age: {member.age}</p>
                            <p className={styles.visServingSince}>Serving Since: {member.serving_since}</p>
                            <div className={styles.visQualifications}>
                                    <h4>Qualifications:</h4>
                                    <div className={styles.qualificationList}>
                                        {member.qualifications.map((qualification, index) => (
                                            <li key={index}>{qualification.qual} ({qualification.year})</li>
                                        ))}
                                    </div>
                            </div>
                            <div className={styles.visAchievements}>
                                    <h4>Achievements:</h4>
                                    <div className={styles.achievementList}>
                                        {member.achievements.map((achievement, index) => (
                                            <li key={index}>{achievement.title} ({achievement.year})</li>
                                        ))}
                                    </div>
                            </div>
                            <p className={styles.visBio1}>Bio:</p>
                            <p className={styles.visBio}>{member.bio}</p>
                        </div>
                            
                       </div>
                       <div className={styles.visSocials}>
                         <span>🌐</span>
                         <span>✉️</span>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
           </div>
    )
}