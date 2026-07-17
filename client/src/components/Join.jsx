import styles from "./Join.module.css"
import { useState } from "react"

export default function JoinButton () {
    const [open, setOpen] = useState(false);

    return(
        <>
            
            <div className={`${styles.joinCollective} `}>
                <h2 className={styles.jcTitle}>Join the Collective</h2>
                <div className={`styles.Content ${open ? styles.expanded : ""}`}>
                    <div className={`${styles.buttonWrapper} ${open ? styles.hide : ""}`}>
                        <p className={styles.jcDesc}>
                            We're always looking for brilliant minds to join our mission. Our deployment
                            rate is currently at peak capacity.
                        </p>
                        <button className={`${styles.btnCareers} ${open ? styles.hide : ""}`} onClick={()=> setOpen(!open)}>VIEW CAREER OPENINGS</button>
                    </div>
                </div>
            <div className={`${styles.joinForm} ${open ? styles.show : ""}`}>
               <input type="text" id="Name" placeholder="Name" className={styles.name}/>
               <input type="number" id="Number" placeholder="Phone Number" className={styles.number}/>
               <input type="text" id="email" placeholder="Email" className={styles.email}/>

               <span className={styles.branchTitle}>Branch</span>
               <label className={styles.RND}>
                    <input type="radio" name="Branch" value="RND" className={styles.inp}/>
                    <div className={styles.text}>Program Management</div>
               </label>
               <label className={styles.Tech}>
                    <input type="radio" name="Branch" value="Tech" className={styles.inp}/>
                    <div className={styles.text}>Tech</div>
               </label>
               <label className={styles.PR}>
                    <input type="radio" name="Branch" value="PR" className={styles.inp}/>
                    <div className={styles.text}>Media and PR</div>
               </label>
               <label className={styles.Volunteer}>
                    <input type="radio" name="Branch" value="Volunteer" className={styles.inp}/>
                    <div className={styles.text}>Volunteer</div>
               </label>

               <span className={styles.RegionTitle}>Region</span>
               <label className={styles.Guwahati}>
                    <input type="radio" name="Region" value="RND" className={styles.inp}/>
                    <div className={styles.text}>Guwahati</div>
               </label>
               <label className={styles.Barpeta}>
                    <input type="radio" name="Region" value="Tech" className={styles.inp}/>
                    <div className={styles.text}>Barpeta</div>
               </label>
               <label className={styles.BarpetaRoad}>
                    <input type="radio" name="Region" value="PR" className={styles.inp}/>
                    <div className={styles.text}>Barpeta Road</div>
               </label>

               <button className={styles.submitBtn} onClick={() => setOpen(!open)}>Submit</button>
            </div>
        </div>
        </>
    )
} 