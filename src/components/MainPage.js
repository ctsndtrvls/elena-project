import React from 'react';


export default function MainPage() {
    return <div>
        <div className="container">
            <img className="main-pic" src={"./img/profile-photo.jpg"} alt="main-pic" />
        <h2>Hi, my name is Elena 👋</h2>
        <p><span className="sign">{'>'}</span> I’m a junior <span className="bg">frontend</span> developer</p>
        <p><span className="sign">{'>'}</span> I study <span className="bg">media informatics</span> at Technical University of Berlin 💻</p>
        <p><span className="sign">{'>'}</span> I know <span className="bg">HTML/CSS/JavaScript /React/Tailwind</span></p>
        <p><span className="sign">{'>'}</span> I'm also familiar with <span className="bg">C and Python</span></p>
        <p><span className="sign">{'>'}</span> Übrigens spreche ich fließend <span className="bg">Deutsch</span></p>
        <p><span className="sign">{'>'}</span> Check out my projects:</p>
        </div>


            <div className="container-projects">
                <div className="project">
                    <a href="https://weather.pervova.dev/">
                        <img src={"./img/project-pic-map.svg"} alt="project-weather" className="project-img" />
                    </a>
                    <p><a href="https://weather.pervova.dev/"> Guess the weather</a></p>
                    <div className="project-decr">App gives you a location <br />
                    You guess the weather</div>
                    <div className="git-link">
                    <img src={"./img/git.svg"} alt="project-weather" height="30px" width="30px" /> 
                    <a href="https://github.com/ctsndtrvls/guess-temp">https://github.com/ctsndt...</a>
                    </div>
                </div>
                <div className="project">
                <a href="https://fragments.pervova.dev/">
                    <img src={"./img/fragments-screen.png"} alt="project-weather" className="project-img" />
                </a>
                    <p><a href="https://fragments.pervova.dev/">Science fragments</a></p>
                    <div className="project-decr">This is a place where I collect <br />
                    all the new science stuff I learn</div>
                    <div className="git-link">
                    <img src={"./img/git.svg"} alt="project-weather" height="30px" width="30px" /> 
                    <a href="https://github.com/ctsndtrvls/science-fr">https://github.com/ctsndt...</a>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="recommendation">
                    <p><span className="sign">{'>'}</span> Recommendation from my mentor:</p>
                    <p className="line">I watched Elena grow her capacity in web development over the past months and my observation is that she’s an extremely fast learner. She’s also very persistent and never gives up, when faced with some difficulty. I’m confident, that she’ll pick up any tech needed for her new job really fast and will be a great and ever-growing asset to any company lucky enough to hire her. </p>
                    <p>Ivan</p>
                    </div>
                    <div className="end">
                    <p><span className="sign">{'>'}</span> Thanks for your attention! 🙌</p>
                </div>
            </div>
        </div>
}
