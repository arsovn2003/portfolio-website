import { Navbar } from "../shared/Navbar"
import '../styles/About.css'

export const About = () => {
    return (
        <div className="About container-fluid px-5 py-5" id="about">
            <div className="row px-lg-5 px-0">
                <div className="col-12">
                    <div className="title text-lg-start text-center">
                        <h1 className="fw-bold">&lt;/About&gt;</h1>
                        <div className="line-div d-flex justify-content-lg-start justify-content-center">
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="about-content">
                        <div className="col-lg-6 col-12 pe-lg-5 pe-0 mt-5">
                            <h3>🚀 Passionate Programmer at Makpetrol</h3>

                            <p className="text-muted">As a dedicated and skilled programmer at Makpetrol, I bring a wealth of expertise to the table, specializing in cutting-edge technologies that drive innovation and efficiency. My primary focus lies in the realms of C#, Blazor apps, and SQL databases, while also boasting a comprehensive skill set as a front-end programmer.</p>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
                <div className="col-12 mt-lg-0 mt-5">
                    <div className="about-content d-flex flex-row-reverse">
                        <div className="col-12 col-lg-6 ps-lg-5 ps-0">
                            <h3>💡 Technical Proficiency:</h3>

                            <p className="text-muted">C# Development: Proficient in leveraging the power of C# to build robust and scalable applications, I thrive on the challenges of creating elegant solutions that meet the unique needs of Makpetrol.

                                Blazor Apps: As a Blazor enthusiast, I am adept at developing interactive and dynamic web applications, harnessing the full potential of Blazor to create seamless user experiences.

                                SQL Databases: With a keen understanding of database architecture and optimization, I excel in designing and managing SQL databases, ensuring data integrity and accessibility for Makpetrol's mission-critical systems.</p>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
                <div className="col-12 mt-lg-0 mt-5">
                    <div className="about-content">
                        <div className="col-12 col-lg-6 pe-lg-5 pe-0">
                            <h3>🌐 Front-End Expertise:</h3>

                            <p className="text-muted">HTML, CSS, JavaScript: Proficient in the trifecta of web development, I utilize HTML for structure, CSS for styling, and JavaScript for interactive and dynamic content, ensuring a cohesive and engaging user experience.

                                Bootstrap, Ajax, jQuery: Well-versed in popular front-end frameworks and libraries, I leverage Bootstrap for responsive design, utilize Ajax for asynchronous communication, and harness the power of jQuery for streamlined DOM manipulation.

                                React, Next.js: Adept at building modern and scalable user interfaces, I bring proficiency in React and Next.js, allowing me to develop dynamic and performant web applications for Makpetrol's diverse needs.</p>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
                <div className="col-12 mt-lg-0 mt-5">
                    <div className="about-content d-flex flex-row-reverse">
                        <div className="col-12 col-lg-6 ps-lg-5 ps-0">
                            <h3>🤝 Collaborative Team Player:</h3>

                            <p className="text-muted">A firm believer in the power of collaboration, I actively contribute to a positive team dynamic at Makpetrol. I understand the importance of effective communication and teamwork in achieving shared goals.

                                At Makpetrol, I am not just a programmer; I am a dedicated innovator, continuously striving to elevate the technological landscape and contribute to the success of the team.

                                Let's code the future together!</p>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}