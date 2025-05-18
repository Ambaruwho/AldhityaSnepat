const projects = [
  {
    title: "Website Sederhana",
    description: "Website pertama saya menggunakan HTML dan CSS."
  },
  {
    title: "Desain Poster Digital",
    description: "Membuat poster untuk kegiatan sekolah dengan Canva."
  },
  {
    title: "Edit Video Ekstrakurikuler",
    description: "Mengedit video promosi ekskul menggunakan CapCut."
  }
];

const projectList = document.getElementById("projectList");

projects.forEach(project => {
  const div = document.createElement("div");
  div.className = "project-item";
  div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
  projectList.appendChild(div);
});
