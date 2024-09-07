document.addEventListener('DOMContentLoaded', function () {
    const resumeForm = document.getElementById('resumeForm');
    const resumeDiv = document.getElementById('resume');

    if (resumeForm && resumeDiv) {
        resumeForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Capture Form Data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const linkedin = document.getElementById('linkedin').value;
            const github = document.getElementById('github').value;
            const university = document.getElementById('university').value;
            const highSchool = document.getElementById('highSchool').value;
            const workExperience = document.getElementById('workExperience').value;
            const skills = document.getElementById('skills').value.split(',');

            // Generate Resume Content
            const resumeHTML = `
                <section id="personal-info" class="section">
                    <h2>Personal Information</h2>
                    <div class="profile">
                        <div class="info">
                            <h1>${name}</h1>
                            <p>Email: ${email}</p>
                            <p>Phone: ${phone}</p>
                            <p>LinkedIn: ${linkedin}</p>
                            <p>GitHub: ${github}</p>
                        </div>
                    </div>
                </section>

                <section id="education" class="section">
                    <h2>Education</h2>
                    <ul>
                        <li><strong>University:</strong> ${university}</li>
                        <li><strong>High School:</strong> ${highSchool}</li>
                    </ul>
                </section>

                <section id="work-experience" class="section">
                    <h2>Work Experience</h2>
                    <p>${workExperience || 'No experience provided'}</p>
                </section>

                <section id="skills" class="section">
                    <h2>Skills</h2>
                    <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
                </section>
            `;

            // Display Resume
            resumeDiv.innerHTML = resumeHTML;
            resumeDiv.style.display = 'block';
        });
    }
});

