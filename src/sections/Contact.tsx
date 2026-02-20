import { SiGmail as Mail } from "react-icons/si";
import { info } from "../data/info";
import { SocialIcon } from "react-social-icons";

const ContactComponent: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold md:text-4xl">
        Get In <span className="text-emerald-400">Touch</span>
      </h2>

      <p className="mt-6 text-second md:text-lg">
        Interested in collaborating? Feel free to reach out via email or socials
        below.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {/* Email Button */}
        <a
          href={"mailto:" + info.email}
          className="primary text-sm font-medium"
        >
          <Mail className="h-4 w-4" />
          <span>Email Me</span>
        </a>

        {/* Social buttons */}
        {info.social?.map((x, i) => (
          <SocialIcon
            key={i}
            url={x}
            bgColor="transparent"
            fgColor="var(--app-fg)"
            className="secondary"
          />
        ))}
      </div>

      <p className="mt-10">
        <small className="mt-6 text-second">
          Want this page for your own portfolio? Feel free to use it! Get the
          source code for free [
          <a
            className="clr text-green-600 px-2 py-0"
            href="https://github.com/leoadrianx/leo-portfolio"
          >
            here
          </a>
          ].
        </small>
      </p>
    </>
  );
};

export default ContactComponent;
