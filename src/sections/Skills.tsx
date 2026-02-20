//import { skills } from "../data/skills";
import LogoLoop, { type LogoItem } from "../components/LogoLoop";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiAngular,
  SiDotnet,
  SiFigma,
  SiArm,
  SiArmkeil,
  SiDocker,
  SiRabbitmq,
  SiGithubcopilot,
  SiGithub,
  SiGooglegemini,
  SiAutocad,
  SiBootstrap,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiNpm,
  SiAltiumdesigner,
  SiLabview,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbSql } from "react-icons/tb";
import { TfiMicrosoftAlt, TfiWordpress } from "react-icons/tfi";

const techLogos: LogoItem[] = [
  { node: <SiDotnet />, title: "Dotnet" },
  { node: <TbSql />, title: "Sql" },
  { node: <SiTypescript />, title: "Typescript" },
  { node: <SiAngular />, title: "Angular" },
  { node: <SiReact />, title: "React" },
  { node: <SiTailwindcss />, title: "Tailwindcss" },
  { node: <SiRabbitmq />, title: "Rabbitmq" },
  { node: <SiGithub />, title: "Github" },
  { node: <SiGithubcopilot />, title: "Githubcopilot" },
  { node: <SiGooglegemini />, title: "Googlegemini" },
  { node: <SiBootstrap />, title: "Bootstrap" },
  { node: <SiDocker />, title: "Docker" },
  { node: <TfiWordpress />, title: "Wordpress" },

  //! Exa
  { node: <VscVscode />, title: "Vscode" },
  { node: <SiNpm />, title: "Npm" },
  { node: <SiHtml5 />, title: "Html5" },
  { node: <SiCplusplus />, title: "Cplusplus" },
  { node: <SiPython />, title: "Python" },
  { node: <SiFigma />, title: "Figma" },

  //! Electronic
  { node: <SiAltiumdesigner />, title: "Altiumdesigner" },
  { node: <SiLabview />, title: "Labview" },
  { node: <SiArm />, title: "Arm" },
  { node: <SiArmkeil />, title: "Armkeil" },

  //! Etc
  { node: <TfiMicrosoftAlt />, title: "Microsoft" },
  { node: <SiAutocad />, title: "Autocad" },
];

const SkillsComponent: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div
        style={{ height: "200px", position: "relative", overflow: "hidden" }}
      >
        <LogoLoop
          logos={techLogos}
          speed={90}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={10}
          scaleOnHover
          fadeOut
          fadeOutColor="var(--app-bg)"
          ariaLabel="Skills"
        />
      </div>
    </>
  );
};

export default SkillsComponent;
