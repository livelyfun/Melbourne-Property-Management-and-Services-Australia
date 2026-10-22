import "./PageHeader.css";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "light",
}: PageHeaderProps) {
  return (
    <header className={`page-header page-header--${tone} page-header--${align}`}>
      <div className="container page-header__inner">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="page-header__title">{title}</h1>
        {subtitle ? <p className="page-header__subtitle">{subtitle}</p> : null}
      </div>
    </header>
  );
}
