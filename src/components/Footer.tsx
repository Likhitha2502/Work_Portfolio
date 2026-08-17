import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {profile.name} {"\u2014"} built with React &amp; TypeScript {"\u2014"} {new Date().getFullYear()}
      </div>
    </footer>
  );
}
