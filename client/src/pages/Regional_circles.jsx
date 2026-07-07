import TeamOrgChart from "../components/TeamOrgChart";
import styles from  "./Regional_circles.module.css";
import { useNavigate } from "react-router-dom";

function RegionalCircles() {
  const navigate = useNavigate();
  const directors = [
    {
      id: 1,
      region: "Guwahati",
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
      region: "Barpeta",
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
      region: "Barpeta Road",
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
    
        {/* Strategic Visionaries */}
        <div className={styles.teamSec}>
          <div className={styles.teamSectionRow}>
            <div>
              <h2 className={styles.teamSecTitle}>Regional Circles</h2>
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
    </div>
  );
}

export default RegionalCircles;
