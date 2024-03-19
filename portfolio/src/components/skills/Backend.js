import React from "react";

const Backend = () => {
  return (
    <div className="skillsContent">
      <h3 className="skillsTitle">Backend developer</h3>
      <div className="skillsBox">
        <div className="skillsGroup">
          <div className="skillsData">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"
              alt="node"
            />
            <h3 className="skillsName">Node</h3>
          </div>
          <div className="skillsData">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAC7CAMAAACjH4DlAAABFFBMVEX//////v////11AAB4AABxAAD//Px2AAB8AABuAABqAABoAAB/AAD/+flvAADszMv/7eydYF+ybm3surjqwMHJfn+FAACCHh//9PSDAAD91tbfvr6KAADhtLPcrq7/5eW7hoayeHfz3N22ZmanS0uKNjWfVVSVSEiybWzLoqKEJybvsK5+FRXZs7Py4N96HR2ZPT3TmJdbAACUNDPFk5P72drNm5z2yctNAAB1MTK9gIC/iYvNsK+CLCz7ra6OIiLcioqtVVOJGhqUSkqnNDTNbWyld3fHoqLReXjig4L8xMaXQkGdT07GX120Rka1VVSfNTWhIySRTk2TXFzTv7+WFRZyIyPfnp6lb2+rhIWPKSvPiosY+NUIAAAJC0lEQVR4nO2aDXvaOBLHbUuyZcfGxiXBQMDY1BCoIRBeskc2202y7fZK9pruXa+55vt/j5NkG0xeu7tNyPXm9zwpeCzJmr+k0QhXkgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAyUO77/DyHLd9554PpmK7fJcUet+xrbFPJNLRTljgvl5nDfYvqz/fh2bT0iqz4qt87+xMQ1TXX982P+TNXIOaSsy7H2ecPzB+W411/loQLPgPyMyPz8qjl9qyiKcrdWSibHxiKKnHZQsdSV16q17q1l3eifKJ4vpYoyqSn9UHmpbP3I/Fn5luWkaWnde1FH+oYB6Q9hVaueIvmzphtMDkUPrFIzcOcNJyvhN9h1c1blvVSsadVJigTNhr9sxStNAjeYVVkJrzq1hC9Ondsmh9aqVGIpZRa5yh7Lmp6uelNK6ohnParfd2Af/FDy5rquE4QM12EdOtb1AkFEr4vpEgYFItA7NhvZwd8O5rJ9bOiEFTGOPN6E4jX2dYRIQd8q2tKPBz8w9xRnEuuIVUP6cT8tNdknqaXhcV8HbT1p2miHKp8gVj8yEkNU4rNoA0vGJls/BVv661brJcUo8OoxIS9brTGh+za7HS4QJuNW66RCtLjLrqPCz419A5+IIiTgA602MUVYVNLjUp9ssUniFFk91ujJqY61Jl8vjktSC2EWVm9whjTKag2xhiL+LOmI1TllJWhBQ93NxA8bVX4hUd1SVdVvU+3KLLhT9l1tlPHQksIxxu6U33RmPUwaTA7zo0YmDi9y2KH6TJLVo4IZN31msKZF8uWNyeRw2hi3S7yeVV/gAvPeYrp2hMXjlkC1XI0Goh0/QHjMSkwITjriNY4xqW9EDxvt4rKdfi9XKsj1xFaiHmE9lNgYB15yU6lhehyG0U6FdtO61Zh2HMmOK7iehgNvblR2jKrEPGtnkSU8prgmdfWcJaKo5hPadrJaWC9JtkajLIrYMV4MHtfx2+Fy9NPvartiLvw0iFV10i8RWszUkKQGJdthtIsnalbZ1cq25WI0SssoktqhTA4/ppG/3BrsMu1UxzReRV4b4ZOftnBXSTcQ39DfqmfLYWH0sT56NJ/vwUY7neUmsmeufHUKZDSnqLQq6nTMuBrtoMwtWWqQuOSc0sWyAVkqcTl+1UjOGeuSoncmneQsAa38XcfdZa1i9PY9QkH2bEVxzvBwE7HURjRYXrh8Wqc4BL95Scfe8qYszTX8eUGHq8olZNZsYk7S+xz/nG4duhoKc8+ok53dSm7o2eCb9DdKz3khPj1ky7OOKJrmSswR8u9J2B4LG7Gpnk1rN5nR4tIh9B+v0baVK/vCoO+GqLUyMDn6XUTr4iLpO9tmjPdD3PFy9Xy0u1s593OZRLVHP7yktFNfzitvj17k67zSkb2R2aE3lhmgS8uOspTD/FhB3XzZqUE/XJDtlaGEKvWmFh/myihdZLx6TYO8jNannV16aeXkcCJ8Vuphk0ZBfeDwO4OOefGqseKdhn795s4+jI2MF0kezTThcix7TCofd9CP+bL+TTnMehOVq/x7OpJKn8nxiR6tsnM2Y04ru7iZBIbE5nRwR7XPEcKImMNmzZIG0Y6pb60oUGNzcqQXf0WOlJwcS4Qcb/MWLocleXbz9+OYKaK17UFkvm4X8/zzX9/Oy69GyJFxXQ62WJJ5k0zz/GIRpkSOtcUi8cVySudq7sih8sXydrV8FLFYhDyWX+oGMcLxqyH+YK0OzOm/T35uuUsOmYfSU3QlDlOpHC90Fkqvy8FCaT/XngilY9z2cp74eHfXbC+FZk5We7i4XF9WuK2ZFxe5XSz7EeDpT7X3zA78YYhfWrluzTHbaK8tlj7bqY9y7TltuvV+D+dyLrHR7uyMw2SsRURhG22rlu28zNCilU8Vmq/jhGE+Gj8VQo78zrLsD0HbrsgFsiFK0rDrcjiv6SqPk6SaydKwiVZo8IukJkvDtN9M3EjlkEQaZp6i41W1Ot35haLZqhn1cv/fm8jS1+TYE3IkF0yO5guE3XR/ZOt4hnmSfl0OuYnIKnOxzs1doxrGiUSJtcSuql9oL1kLXA4b49YblBwOZJHe4srP+3SRS+PLePGIXt/J2mIRcigrOawO1hpqusYPY9oLb8oh2ftmnM17dioVRzgX4XkWCfyI4r7aJIhbRFN+h6L+oUH5mY4bZHVBT+0AUTer451jko9ITwOLkbaWyXEj70BNqVrG5Crk+jiNMhUH/GtpGOv0rEDjLq+nhi1iXlT4Af8Mk72Qh2GvNMTkiG2qY4xaiaXGLHO2YLDWTuJDyJL6S89ZYNKyLVHiHGnzTYSO3OxgcuRmhyzkUEuxhiN3NJqfYeHVLbODnc8JxWfBaORGxHA/Y/7zzzTSUG/vajRvx1jf49uM3UHouDgSFuIy9cKOpvWKR6NREGFUHkjqtIdxr3g1OmIl0O/Obb19dOyDg/TQymS4PNjPYofsHRz8h31WL4mhG0aBkLMSm9j8x8FV5drBFs/T1EakI2IwFhOWd3A5JKfZ04lusL+oYYk2naCn64mlK0bevyQFxNrW9TgQYdMPYh2JEvsTT9oIXq2WjgOTI6zV0txRltRabcDd8OzRyXg83CuJHlt2Lbxembk6aLTG43GrMVCVCTJERLTCWWpT0ndr1uAzswyZJU04PHt7wQ0jO/v1yB6dszonozCfwj49uZeS+feTayfKrzteei4uf9XIPse3j4nvudT4jx+prcbMzo1l+AW3bw2C8jX/r70Dfkbq3CbHWu/u66u3v3WcS5i2Mcu3bnmLucz0l/b8a89nJYfg2kt8Jd/fa31dK2o1+RaUUSc08tMKsrymi7JW85l5/23go8oO66hlDzzLG9gtZJLaw9W+V8QY22ybxZ09d6/DTuqF7nOb9k+OM+sQnUOOi9OHi3/fyGw2+LXZ1dXVrB9a32dQ+OMof/k//gDAd032SgIAHgLC6BogBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8f/JfiEXNKSMDMCwAAAAASUVORK5CYII="
              alt="mongoose"
            />
            <h3 className="skillsName">Mongoose</h3>
          </div>
          <div className="skillsData">
            <img
              src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png"
              alt="node"
            />
            <h3 className="skillsName">MYSQL</h3>
          </div>
        </div>
        <div className="skillsGroup">
          <div className="skillsData">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjOqFYIHQ1KXQcuABQi5yBNHnor7IHC2BsYg&usqp=CAU"
              alt="next"
            />
            <h3 className="skillsName">Nextjs</h3>
          </div>
          <div className="skillsData">
            <img
              src="data:image/jpeg;base64,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"
              alt="django"
            />
            <h3 className="skillsName">Django</h3>
          </div>
          <div className="skillsData">
            <img
              src="https://www.vectorlogo.zone/logos/perl/perl-ar21.png"
              alt="perl"
            />
            <h3 className="skillsName">Perl</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;