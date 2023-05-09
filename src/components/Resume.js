import React from 'react';

const Resume = () => {
    return (
        <section id="resume">
            <div className="container d-flex justify-content-center">
                <div className="row justify-content-center">
                    <p style={{ fontWeight: 'bold' }}>I have gained many new proficiencies in this full-stack web development bootcamp; some of these include:</p>
                    <div className="col-sm-6 py-4">
                        <div className="resume-skills">
                            <h4>Front-End Proficiencies:</h4>
                            <ul>
                                <li>HTML</li>
                                <li>CSS/Bootstrap</li>
                                <li>JavaScript/jQuery</li>
                                <li>Web APIs</li>
                                <li>Server-Side APIs</li>
                                <li>Node.js</li>
                                <li>React</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-6 py-4">
                        <div className="resume-skills">
                            <h4>Back-End Proficiencies:</h4>
                            <ul>
                                <li>MYSQL</li>
                                <li>NoSQL</li>
                                <li>MongoDB</li>
                                <li>Model View Controller</li>
                                <li>Progressive Web Applications</li>
                                <li>Express.js</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 py-4 text-center">
                <p style={{ fontWeight: 'bold' }}>To view my full resume, you may download a PDF version of it here:</p>
                <div className="resume-download">
                    <button className="btn btn-primary" onClick={() => window.open('https://docs.google.com/document/d/1yxA9qVmSJgEmagA7gLxqo0evx_PmFHFq/export?format=pdf', '_blank')}>
                        Download Resume
                    </button>
                </div>
            </div>

        </section>
    );
};

export default Resume;
