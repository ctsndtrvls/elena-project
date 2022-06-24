import React from 'react';


export default function MainPage() {
    return <div>
        <div className="container">
    <img src={"./img/main-pics.png"} alt="main-pic" />
        <h2>Hi, my name is Elena 👋</h2>
        <p><span className="sign">{'>'}</span> I’m a junior <span className="bg">frontend</span> developer</p>
        <p><span className="sign">{'>'}</span> I know <span className="bg">React/Next.js/Tailwind</span></p>
        <p><span className="sign">{'>'}</span> I <span className="bg">fled</span> Russia after the war started </p>
        <p><span className="sign">{'>'}</span> I want <span className="bg">Germany</span> to become my new home 🏠</p>
        <p><span className="sign">{'>'}</span> Außerdem spreche ich fließend <span className="bg">Deutsch</span></p>
        <p><span className="sign">{'>'}</span> I really want to work with <span className="bg">IONE!</span></p>
        <p><span className="sign">{'>'}</span> I think IONE should hire me because I’m highly <span className="bg">motivated</span> and I learn really fast 💨</p>
            <div className="container-projects">
                <p><span className="sign">{'>'}</span> Check out my projects:</p>
                <img src={"./img/screen-1.svg"} alt="project-weather" className="project-img" />
                <p><a href="#"> Guess the weather</a></p>
                <div className="project-decr">App gives you a location <br />
                You guess the weather</div>
                <div className="git-link">
                    <p><img className="icon" src={"./img/git.svg"} alt="project-weather" /> 
                    <a href="https://github.com/ctsndtrvls/">https://github.com/ctsndtrvls/</a></p>
                </div>
            </div>  
            <div className="container-projects">
                <img src={"./img/screen-1.svg"} alt="project-weather" className="project-img" />
                <p><a href="#"> Guess the weather</a></p>
                <div className="project-decr">App gives you a location <br />
                You guess the weather</div>
                <p><img className="icon" src={"./img/git.svg"} alt="project-weather" />
                <a href="https://github.com/ctsndtrvls/">https://github.com/ctsndtrvls/</a></p>
            </div>  
            <div className="recommendation">
              <p><span className="sign">{'>'}</span> Recommendation from my mentor:</p>
              <p className="line">Elena is great bla bla write more text lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <p>Ivan</p>
            </div>
            <p className="end"><span className="sign">{'>'}</span> Thanks for your attention! 🙌</p>
        </div>
        </div>
}