export default function Content() {
    return (
        <main className="grow"> 
            {/* Home Section */}       
            <section id="home">
                <h1>George Zampakikas</h1>
                <p>
                    I’m a junior web developer with a background in professional web development training.
                    I enjoy building clean, responsive interfaces and improving my skills through practice.
                </p>
                <p>
                    I have completed professional training in web development, where I worked with both frontend
                    and backend technologies. My main interest is frontend development, while also having
                    basic experience with backend concepts and databases.
                </p>
            </section>

            <section id="about">
            <h2>About Me</h2>
            <p>
                I have completed professional training in web development, where I worked with both frontend
                and backend technologies. My main interest is frontend development, while also having
                basic experience with backend concepts and databases.
            </p>
            </section>

            {/* Projects Section */}
            <section id="projects">
                
            </section>

            <section id="skills">
                <h2>Skills</h2>
                <ul>
                    <li>HTML5, CSS3, SCSS</li>
                    <li>JavaScript, TypeScript</li>
                    <li>Angular, React, Laravel</li>
                    <li>PHP, SQL / MySQL</li>
                    <li>Tailwind CSS, Responsive Design</li>
                    <li>Git & GitHub</li>
                </ul>
            </section>

            <section id="contact">
                <h2>Contact</h2>
                <p>Email: giorgoszampakikas@gmail.com</p>
                <p>GitHub: github.com/yourname</p>
                <p>LinkedIn: linkedin.com/in/yourname</p>              
            </section>
        </main>
    );
}