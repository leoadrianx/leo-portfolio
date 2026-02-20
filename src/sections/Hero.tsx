import avatar from "../assets/avatar.jpg";
import { Multiline } from "../components/extensions/text.extension";
import { info } from "../data/info";
import { resume } from "../data/resume";

const Hero: React.FC = () => {
  return (
    <>
      <div className="rounded-3xl border p-8 shadow-2xl backdrop-blur-md border-app-fg/10 bg-app-fg/5">
        <div className="flex items-center gap-6">
          <img
            alt={info.name + "'s avatar"}
            className="h-20 w-20 rounded-2xl object-cover ring-1 ring-app-fg/10"
            src={avatar}
          />
          <div>
            <div className="text-sm uppercase tracking-widest opacity-60">
              Hello, I'm
            </div>
            <div className="text-2xl font-bold">{info.name}</div>
            <div className="mt-1 bg-linear-to-r from-indigo-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-lg font-semibold text-transparent">
              {info.headline}
            </div>
          </div>
        </div>
        <div className="mt-6 space-y-4 text-base leading-relaxed opacity-70 md:text-lg text-justify">
          <Multiline useSplit={true} text={resume.hero} />
        </div>
      </div>
    </>
  );
};

export default Hero;
