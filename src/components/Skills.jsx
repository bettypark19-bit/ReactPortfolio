const certs = [
  {
    id: 1,
    name: '자격증',
    row1: ['운전면허증', '포토샵 1급', '일러스트 1급', 'OPIC IH'],
    row2: [],
  },
  {
    id: 2,
    name: 'Google Project Management: Specialization',
    row1: ['Project Management', 'Risk Management', 'Stakeholder Relations', 'Procurement'],
    row2: ['Project Scope Development', 'Software Project Management', 'Budgeting', 'Process Improvement'],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">Certification / Skills</h2>
      {certs.map((cert) => (
        <div className="cert-block" key={cert.id}>
          <div className="cert-name">{cert.name}</div>
          <div className="skills-row">
            {cert.row1.map((skill) => (
              <span className="skill-pill" key={skill}>{skill}</span>
            ))}
          </div>
          <div className="skills-row">
            {cert.row2.map((skill) => (
              <span className="skill-pill" key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
