import React from "react";

const Frontend = () => {
  return (
    <div className="skillsContent">
      <h3 className="skillsTitle">Frontend developer</h3>
      <div className="skillsBox">
        <div className="skillsGroup">
          <div className="skillsData">
            <img
              src="https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn"
              alt="html"
            />
            <h3 className="skillsName">HTML</h3>
          </div>
          <div className="skillsData">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
              alt="css"
            />
            <h3 className="skillsName">CSS</h3>
          </div>
        </div>
        <div className="skillsGroup">
          <div className="skillsData">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
              alt="Javascript"
            />
            <h3 className="skillsName">Javascript</h3>
          </div>
          <div className="skillsData">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              alt="react"
            />
            <h3 className="skillsName">React</h3>
          </div>
          <div className="skillsData">
            <img
              src="data:image/png;base64,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"
              alt="Tailwind"
            />
            <h3 className="skillsName">Tailwind</h3>{" "}
          </div>
          <div className="skillsData">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMd7eiGMX9FwRLC0uJTDewSjw_7_WvCF4ABLdwztLrCnPEXrqW0gG-pH8eT-fYPLlghjY&usqp=CAU"
              alt="sass"
            />
            <h3 className="skillsName">Sass</h3>{" "}
          </div>
          <div className="skillsData">
            <img
              src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              alt="git"
            />
            <h3 className="skillsName">Git</h3>{" "}
          </div>
          <div className="skillsData">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Linux_logo.jpg"
              alt="linux"
            />
            <h3 className="skillsName">Linux</h3>{" "}
          </div>
          <div className="skillsData">
            <img
              src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png"
              alt="docker"
            />
            <h3 className="skillsName">Docker</h3>{" "}
          </div>
          <div className="skillsData">
            <img
              src="data:image/png;base64,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"
              alt="bash"
            />
            <h3 className="skillsName">Shell scripting</h3>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
