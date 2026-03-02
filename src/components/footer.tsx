export default function Footer() {
    // Current Year
    const currentYear: number = new Date().getFullYear();
    return (
        <footer className="w-full bg-slate-950 text-emerald-400 py-10 text-center text-sm">
            <p>© {currentYear} Georgios Zampakikas. Built with React & Tailwind CSS.</p>
        </footer>
    );
}