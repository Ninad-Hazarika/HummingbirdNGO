import TeamOrgChart from "../components/TeamOrgChart";
import styles from  "./College_units.module.css";
import { useNavigate } from "react-router-dom";

function CollegeUnits() {
  const navigate = useNavigate();

  const chief = [
    {
      id: 1,
      name: "Nilotpal Mazumdar",
      role: "Wing C Director",
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
    
  ];

  const directors = [
    {
      id: 1,
      region: "Pragjyotish College",
      officer: "Nitopal Mazumdar",
      officerRole: "Officer",
      officerImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      astOfficer: "Pranay",
      astOfficerRole: "Assistant Officer",
      astOfficerImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      role: "Tech Cell",
      regionImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      path: "/team/regional_circles/guwahati",
    },
    {
      id: 2,
      region: "Royal Global University",
      officer: "Jitisha Sannyashi",
      officerRole: "Officer",
      officerImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      astOfficer: "Riya",
      astOfficerRole: "Assistant Officer",
      astOfficerImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      role: "Program & Research wing",
      regionImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      path: "/team/regional_circles/barpeta",
    },
    {
      id: 3,
      region: "Gauhati Commerce College",
      officer: "Vacant",
      officerRole: "Officer",
      officerImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      astOfficer: "Vacant",
      astOfficerRole: "Assistant Officer",
      astOfficerImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      regionImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      path: "/team/regional_circles/barpeta_road",
    },
    {
      id: 4,
      region: "K.C. Das Commerce College",
      officer: "Vacant",
      officerRole: "Officer",
      officerImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      astOfficer: "Vacant",
      astOfficerRole: "Assistant Officer",
      astOfficerImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      regionImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      path: "/team/regional_circles/barpeta_road",
    },
    {
      id: 5,
      region: "Asssam Engineering Institute",
      officer: "Vacant",
      officerRole: "Officer",
      officerImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      astOfficer: "Vacant",
      astOfficerRole: "Assistant Officer",
      astOfficerImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      regionImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      path: "/team/regional_circles/barpeta_road",
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Hero Header */}
        <div className={styles.teamHero}>
          <h1 className={styles.teamTitle}>
            Driven by <span className={styles.highlightBlueItalic}>the Best.</span>
          </h1>
          <p className={styles.teamDesc}>
            Meet the minds and hearts fueling global change. From field strategists to
            visionary architects, our collective power is rooted in radical empathy and
            technical precision.
          </p>
        </div>

        <div className={styles.chiefGrid}>
          {chief.map((member) => (
            <div key={member.id} className={styles.chiefCard} onClick={()=> navigate(member.path || "/")}>
              <div>
              <div className={styles.chiefAvatarRingWrapper} onClick={()=> navigate(member.path || "/")}>
                  <img src={member.image} alt={member.name} />
              </div>
              <p className={styles.chiefRole}>{member.role}</p>
              <p className={styles.chiefQuote}>{member.quote}</p>
              <div className={styles.chiefKeep}>
                  <h3 className={styles.chiefName}>{member.name}</h3>
                  <p className={styles.chiefAge}>Age: {member.age}</p>
                  <p className={styles.chiefServingSince}>Serving Since: {member.serving_since}</p>
                  <div className={styles.chiefQualifications}>
                          <h4>Qualifications:</h4>
                          <div className={styles.qualificationList}>
                              {member.qualifications.map((qualification, index) => (
                                  <li key={index}>{qualification.qual} ({qualification.year})</li>
                              ))}
                          </div>
                  </div>
                  <div className={styles.chiefAchievements}>
                          <h4>Achievements:</h4>
                          <div className={styles.achievementList}>
                              {member.achievements.map((achievement, index) => (
                                  <li key={index}>{achievement.title} ({achievement.year})</li>
                              ))}
                          </div>
                  </div>
                  <p className={styles.chiefBio1}>Bio:</p>
                  <p className={styles.chiefBio}>{member.bio}</p>
              </div>
                  
              </div>
              <div className={styles.chiefSocials}>
                <span>🌐</span>
                <span>✉️</span>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Visionaries */}
        <div className={styles.visionariesGrid}>
          {directors.map((member) => (
            <div key={member.id} className={styles.visionaryCard} onClick={()=> navigate(member.path || "/")}>
              <div>
                <div className={styles.avatarRingWrapper} onClick={()=> navigate(member.path || "/")}>
                  <img src={member.regionImage} alt={member.region} />
                </div>
                <h3 className={styles.visName}>{member.region}</h3>
              </div>
              <div className={styles.visSocials}>
              </div>
              <div className={styles.visKeep1}>
                <div className={styles.RingWrapper1}>
                  <img src={member.officerImage} alt={member.officer} />
                </div>
                <h3 className={styles.Name1}>{member.officer}</h3>
                <p className={styles.Role1}>{member.officerRole}</p>
              </div>
              <div className={styles.visKeep2}>
                <div className={styles.RingWrapper2}>
                  <img src={member.astOfficerImage} alt={member.astOfficer} />
                </div>
                <h3 className={styles.Name2}>{member.astOfficer}</h3>
                <p className={styles.Role2}>{member.astOfficerRole}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CollegeUnits;
