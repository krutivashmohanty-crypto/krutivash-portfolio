function SectionHeading({ number, eyebrow, title, accent }) {
  return (
    <div className="section-heading">
      {number && <span className="section-number">{number}</span>}

      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>
          {title} <span>{accent}</span>
        </h2>
      </div>
    </div>
  );
}

export default SectionHeading;