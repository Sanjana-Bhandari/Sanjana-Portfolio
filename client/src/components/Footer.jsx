import SocialLinks from './SocialLinks';
import { siteConfig } from '../config/siteConfig';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-800/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-10 text-center sm:px-8">
        <SocialLinks />
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} {siteConfig.fullName}. Built with the MERN stack.
        </p>
      </div>
    </footer>
  );
}
