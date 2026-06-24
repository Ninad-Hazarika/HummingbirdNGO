function MemberCard({ member }) {
  return (
    <div>
      <h3>{member.name}</h3>
      <p>{member.role}</p>

      {member.bio && (
        <p>{member.bio}</p>
      )}
    </div>
  );
}

export default MemberCard;
