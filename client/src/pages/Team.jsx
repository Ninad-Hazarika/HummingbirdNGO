import { useEffect, useState } from "react";
import api from "../services/api";
import MemberCard from "../components/MemberCard";

function Team() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await api.get("/members");

        setMembers(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div>
      <h1>Team Members</h1>

      {members.map((member) => (
          <MemberCard
            key={member._id}
            member={member}
          />
      ))}
    </div>
  );
}

export default Team;
