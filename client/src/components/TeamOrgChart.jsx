import React from "react";
import "./TeamOrgChart.css";

const branches = [
  { role: "Elder Volunteers", name: "Mayukh Das", detail: "Head of department" },
  { role: "Guwahati Branch", name: "Nilotpal Mazumdar", detail: "With Pranay Nath" },
  { role: "Barpeta Branch", name: "Jitisha Sannyashi", detail: "Sub-Head: Riya Bayan" },
  { role: "Technical Mgmt", name: "Partha Pratim Biswas", detail: "Head of department" },
];

const departments = [
  { role: "Research & Program", name: "Pranjyoti Saha", detail: "Sub-Head: Taavishi Agarwal" },
  { role: "Financial Team", name: "Parisiya Brahma", detail: "Sub-Head: Snigdha Sahu" },
  { role: "Social Media", name: "Neelav Kashyap", detail: "Sub-Head: Uddipta Nath" },
  { role: "Volunteer Team", name: "Dewan Miraj Alom", detail: "Sub-Head: Nitish Das" },
  { role: "Pet Care Team", name: "Bulbul Hussain", detail: "Sub-Head: Jishu Das" },
];

const colleges = [
  { role: "RGU", name: "Bulbul Hussain", detail: "With Hritupan Das" },
  { role: "Pragjyotish College", name: "Kaustav Moni Nath", detail: "Deepjyoti Das, Pinkal Chetry" },
  { role: "GCC", name: "Pranay Nath", detail: "With Nilotpal Mazumdar" },
  { role: "KC Das Commerce", name: "Subungsar Boro", detail: "College Coordinator" },
  { role: "Assam Eng. Institute", name: "Dhrubaark Das", detail: "College Coordinator" },
];

function Card({ role, name, detail, variant, single, delay }) {
  return (
    <div
      className={`oc-card oc-${variant} ${single ? "oc-single" : ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <p className="oc-role">{role}</p>
      <p className="oc-name">{name}</p>
      {detail && <div className="oc-detail">{detail}</div>}
    </div>
  );
}

export default function TeamOrgChart() {
  return (
    <section className="oc-wrap">
      <h2 className="oc-header-title">Organizational Structure</h2>
      <p className="oc-header-subtitle">
        Hover over any department to explore leadership details & active branches.
      </p>

      <div className="oc-legend">
        <span><span className="oc-dot" style={{ background: "#091e2a" }}></span>Leadership</span>
        <span><span className="oc-dot" style={{ background: "#10b981" }}></span>Branches</span>
        <span><span className="oc-dot" style={{ background: "#0284c7" }}></span>Departments</span>
        <span><span className="oc-dot" style={{ background: "#7c3aed" }}></span>Colleges</span>
      </div>

      <div className="oc-center">
        <Card role="Founder" name="Jyotisman Das" detail="Wings That Never Rest" variant="lead" single delay={0} />
      </div>

      <div className="oc-row" style={{ justifyContent: "center", paddingTop: 28 }}>
        <Card role="Coordinator" name="Hritupan Das" detail="Operations Coordinator" variant="lead" single delay={0.05} />
      </div>

      <div className="oc-row">
        {branches.map((b, i) => (
          <Card key={b.role} {...b} variant="branch" delay={0.05 * i} />
        ))}
      </div>

      <div className="oc-divider"><span>Departmental Management Team</span></div>

      <div className="oc-row">
        {departments.map((d, i) => (
          <Card key={d.role} {...d} variant="dept" delay={0.05 * i} />
        ))}
      </div>

      <div className="oc-divider"><span>College Coordinators</span></div>

      <div className="oc-row">
        {colleges.map((c, i) => (
          <Card key={c.role} {...c} variant="college" delay={0.05 * i} />
        ))}
      </div>
    </section>
  );
}
