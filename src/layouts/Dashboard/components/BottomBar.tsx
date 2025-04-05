import Ward from "@assets/icons/wardrobe.svg";
import Dossier from "@assets/icons/dossier.svg";
import Design from "@assets/icons/design.svg";
import { useRouter } from "@routes/hooks";
import { usePathname } from "@routes/hooks";
export function BottomBar() {
  const router = useRouter();
  const currentPath = usePathname();

  const handleNavigate = (path: string) => {
    router.push(`/${path}`);
  };
  const getNavItemClasses = (path: string) => {
    const isActive = currentPath === path;
    return `${
      isActive ? "bg-grey text-white" : "hover:bg-grey hover:text-white"
    } hover:bg-grey my-1 py-3 px-5 rounded flex items-center gap-2 font-bold text-xl`;
  };
  return (
    <article className="fixed bottom-2 sm:hidden flex flex-row bg-gold rounded-lg w-auto justify-center left-0 right-0 mx-5">
      <ul className="flex flex-row space-x-6 px-1">
        {[
          { label: "Wardrobe", path: "wardrobe", icon: Ward },
          { label: "Dossiers", path: "dossiers", icon: Dossier },
          { label: "Design", path: "design", icon: Design },
        ].map(({ label, path, icon }) => (
          <li
            key={path}
            onClick={() => handleNavigate(path)}
            className={getNavItemClasses(`/${path}`)}
            aria-label={`Go to ${label}`}
          >
            <img className="h-10" src={icon} alt={`${label} icon`} />
          </li>
        ))}
      </ul>
    </article>
  );
}
