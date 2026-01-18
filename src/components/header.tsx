import type { NavigationLinks } from "../data/interfaces";

export default function Header() {
    // Navigation Links
    const navLinks: NavigationLinks[] = [
        {id: 1, name: "About", sectionId:"#home"},
        {id: 2, name: "Projects", sectionId:"#projects"},
        {id: 3, name: "Skills", sectionId:"#skills"},
        {id: 4, name: "Contact", sectionId:"#contact"}
    ];

    return (
        // Left Section
        <header className="flex justify-between items-center p-5 bg-slate-950">
            <a 
                className="text-emerald-400 semi-bold select-none text-lg text-center"
                href="#home"
            >
                <h1 className="text-5xl font-extrabold tracking-tight text-emerald-600">George Zampakikas</h1>
            </a>

            {/* Right Section */}
            <nav>
                <ul className="flex items-center gap-5  text-2xl text-amber-50">
                    
                    {/* Apply same styles on navigation links */}
                    {navLinks.map((link: NavigationLinks) => (
                        <li key={link.id} className="text-gray-200 hover:text-emerald-400 transition-colors" >
                            <a href={link.sectionId}>{link.name}</a>
                        </li>
                    ))}
    
                </ul>
            </nav>
        </header>
    );
}