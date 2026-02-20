import { info } from "../data/info";

const FooterComponent: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative z-10 py-8 w-full border-t backdrop-blur-sm text-center text-sm
     border-app-bg/10 bg-app-fg/5 text-app-fg/60"
    >
      <p>
        &copy; {currentYear} {info.name}. All rights reserved.
      </p>
    </footer>
  );
};

export default FooterComponent;
