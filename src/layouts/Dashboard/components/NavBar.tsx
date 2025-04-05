import Logo from "@assets/Logo.svg";
import Auth from "@assets/icons/auth.svg";
import { useRouter } from "@routes/hooks";
import { usePathname } from "@routes/hooks";
import Ward from "@assets/icons/wardrobe.svg";
import Dossier from "@assets/icons/dossier.svg";
import Design from "@assets/icons/design.svg";

export function NavBar() {
  const router = useRouter();
  const currentPath = usePathname();

  const handleNavigate = (path: string) => {
    router.push(`/${path}`);
  };

  const getNavItemClasses = (path: string) => {
    const isActive = currentPath === path;
    return `${
      isActive ? "bg-grey text-white" : "hover:bg-grey hover:text-white"
    } py-2 px-3 rounded border border-grey flex justify-center items-center font-bold gap-2 font-dancing text-xl hover:cursor-pointer`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-transparent z-10">
      <button
        onClick={() => handleNavigate("")}
        aria-label="Go to homepage"
        className="h-[110px] hover:cursor-pointer transform hover:translate-y-1 transition-transform duration-200 animate-spin"
      >
        <img src={Logo} alt="Main Logo" className="h-full animate-spin" />
      </button>

      <ul
        role="navigation"
        className="hidden lg:flex md:flex space-x-4 bg-gold px-5 py-2 rounded-lg items-center"
      >
        {[
          { label: "Wardrobe", path: "wardrobe", icon: Ward },
          { label: "Dossiers", path: "dossiers", icon: Dossier },
          { label: "Design", path: "design", icon: Design },
        ].map(({ label, path, icon }) => (
          <li key={path}>
            <button
              onClick={() => handleNavigate(path)}
              className={getNavItemClasses(`/${path}`)}
              aria-label={`Go to ${label}`}
            >
              <img src={icon} alt={`${label} icon`} className="h-10" />
              {label}
            </button>
          </li>
        ))}
      </ul>

      <ul className="flex space-x-6 pr-12 items-center">
        <li>
          <button
            onClick={() => handleNavigate("auth")}
            aria-label="Go to authentication"
            className="group"
          >
            <img
              src={Auth}
              alt="Auth icon"
              className="h-10 hover:cursor-pointer transform hover:translate-y-1 transition-transform duration-200"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}
