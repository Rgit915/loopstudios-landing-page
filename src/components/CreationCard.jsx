export default function CreationCard({ title, mobile, desktop, alt }) {
  return (
    <div className="card group">
      <picture>
        <source media="(min-width: 768px)" srcSet={desktop} />
        <img src={mobile} alt={alt} />
      </picture>
      <h3>{title}</h3>
    </div>
  );
}
