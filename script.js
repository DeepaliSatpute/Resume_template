document.getElementById("add-experience").addEventListener("click", () => {
  const experienceSection = document.getElementById("experience-section");
  const newExperience = document.createElement("div");
  newExperience.className = "experience-item";
  newExperience.innerHTML = `
                <h4 contenteditable="true" class="editable">Position Title</h4>
                <p contenteditable="true" class="editable">Company Name | Date</p>
                <p contenteditable="true" class="editable">• Responsibilities and achievements...</p>
            `;
  experienceSection.appendChild(newExperience);
});

document.getElementById("add-education").addEventListener("click", () => {
  const educationSection = document.getElementById("education-section");
  const newEducation = document.createElement("div");
  newEducation.className = "education-item";
  newEducation.innerHTML = `
                <h4 contenteditable="true" class="editable">Degree Name</h4>
                <p contenteditable="true" class="editable">Institution | Year</p>
                <p contenteditable="true" class="editable">• Achievements and activities...</p>
            `;
  educationSection.appendChild(newEducation);
});

document.getElementById("add-skill").addEventListener("click", () => {
  const skillsContainer = document.getElementById("skills-container");
  const newSkill = document.createElement("span");
  newSkill.className = "skill-tag";
  newSkill.contentEditable = true;
  newSkill.textContent = "New Skill";
  skillsContainer.appendChild(newSkill);
});

document.getElementById("download-btn").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF("p", "pt", "a4");

  const resumeElement = document.getElementById("resume");

  html2canvas(resumeElement, { scale: 2, useCORS: true }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const imgWidth = 595.28; // A4 width in points
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("resume.pdf");
  });
});
