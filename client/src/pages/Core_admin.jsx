import TeamOrgChart from "../components/TeamOrgChart";
import styles from  "./Core_admin.module.css";
import { useNavigate } from "react-router-dom";

function CoreAdmin() {
  const navigate = useNavigate();
  const directors = [
    {
      id: 1,
      name: "Partha",
      role: "Tech Cell",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      bio: "With 20 years in international development, Elena crafts our overarching operational framework to ensure scalability and critical growth.",
      path: "/team/tech_cell",
    },
    {
      id: 2,
      name: "Pranjyoti",
      role: "Program & Research wing",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      bio: "A pioneer in blockchain-for-good, Marcus leads our technical division, integrating transparent aid tracking into every project.",
      path: "/team/program_research_wing",
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


        {/* Strategic Visionaries */}
        <div className={styles.teamSec}>
          <div className={styles.teamSectionRow}>
            <div>
              <h2 className={styles.teamSecTitle}>Admins</h2>
              <p className={styles.teamSecSubtitle}>
                Architecting the long-term blueprint for sustainable global impact and
                innovation.
              </p>
            </div>
            <span className={styles.teamSecBadge}>Executive Leadership</span>
          </div>

          <div className={styles.visionariesGrid}>
            {directors.map((member) => (
              <div key={member.id} className={styles.visionaryCard} onClick={()=> navigate(member.path || "/")}>
                <div>
                  <div className={styles.avatarRingWrapper} onClick={()=> navigate(member.path || "/")}>
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h3 className={styles.visName}>{member.name}</h3>
                  <p className={styles.visRole}>{member.role}</p>
                  <p className={styles.visBio}>{member.bio}</p>
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
  );
}

export default CoreAdmin;
