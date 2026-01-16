import type { NavigationLinks } from "../data/modal";

export default function Header() {
    // Navigation Links
    const navLinks: NavigationLinks[] = [
        {id: 1, name: "Home", sectionId:"#home"},
        {id: 2, name: "Projects", sectionId:"#projects"},
        {id: 3, name: "Skills", sectionId:"#skills"},
        {id: 4, name: "Contact", sectionId:"#contact"}
    ];

    return (
        // Left Section
        <header className="flex justify-between items-center p-5 bg-slate-950">
            <div className="font-kablammo text-emerald-400 select-none text-center">
                <a href="#">
                    <h1>George Zampakikas</h1>
                    <h3>Junior Web Developer</h3>                    
                </a>

            </div>

            {/* Right Section */}
            <nav>
                <ul className="flex items-center gap-5  font-dyna-puff text-2xl text-amber-50">
                    
                    {/* Apply same styles on navigation links */}
                    {navLinks.map((link: NavigationLinks) => (
                        <li key={link.id} className="hover:text-emerald-400 delay-75">
                            <a href={link.sectionId}>{link.name}</a>
                        </li>
                    ))}
    
                </ul>
            </nav>
        </header>
    );
}