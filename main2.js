var listofjobs = document.querySelector(".listofjobs");
var jobs = [
  {
    company: "Photoshop",
    role: "Senior Frontend Developer",
    posted: "1d ago",
    employment: "full time",
    location: "USA only",
    skill1: "css",
    skill2: "senior",
    skill3: "javascript",
    skill4: "html",
  },
  {
    company: "Manage",
    role: "Fullstack developer",
    posted: "1d ago",
    employment: "part time",
    location: "remote",
    skill1: "node js",
    skill2: "python",
    skill3: "javascript",
    skill4: "react",
  },
  {
    company: "Loop studios",
    role: "Software Engineer",
    posted: "1w ago",
    employment: "full time",
    location: "worldwide",
    skill1: "fullstack",
    skill2: "midweight",
    skill3: "ruby",
    skill4: "os",
  },
  {
    company: "FaceIt",
    role: "Junior Frontend Developer",
    posted: "2w ago",
    employment: "full time",
    location: "USA only",
    skill1: "backend",
    skill2: "junior",
    skill3: "javascript",
    skill4: "ruby",
  },
  {
    company: "Shortly",
    role: "Junior Developer",
    posted: "2w ago",
    employment: "internship",
    location: "wordlwide",
    skill1: "frontend",
    skill2: "junior",
    skill3: "javascript",
    skill4: "sass",
  },
  {
    company: "Eyecam Co.",
    role: "Full Stack Engineer",
    posted: "3w ago",
    employment: "full time",
    location: "India",
    skill1: "midweight",
    skill2: "django",
    skill3: "node js",
    skill4: "python",
  },
];
var searchBar = document.querySelector("#searchBar");

searchBar.addEventListener("keyup", (e) => {
  var searchstring = e.target.value.toLowerCase();
  var fillterjobs = jobs.filter((job) => {
    return (
      job.role.toLowerCase().includes(searchstring) ||
      job.employment.toLowerCase().includes(searchstring)
    );
  });
  displayJobs(fillterjobs);
});

var displayJobs = (jobs) => {
  const htmlstring = jobs
    .map((job) => {
      return `
      <li class="job">
      <div>
        <p>${job.company}</p>
        <h2>${job.role}</h2>
        <ul class="first">
          <li>${job.posted}</li>
          <li>${job.employment}</li>
          <li>${job.location}</li>
        </ul>
      </div>
      <div class="line"></div>
      <ul class="skills">
        <div><li>${job.skill1}</li></div>
        <div><li>${job.skill2}</li></div>
        <div><li>${job.skill3}</li></div>
        <div><li>${job.skill4}</li></div>
      </ul>
    </li>
        `;
    })
    .join("");
  listofjobs.innerHTML = htmlstring;
};
