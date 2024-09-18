document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');
  const studentNameElem = document.getElementById('student-name');
  const enrolledCoursesElem = document.getElementById('enrolled-courses');
  const courseListElem = document.getElementById('course-list');
  const logoutBtn = document.getElementById('logout-btn');

  // Sample courses
  const courses = [
    { id: 1, title: "Introduction to Computer Science" },
    { id: 2, title: "Calculus I" },
    { id: 3, title: "History of Art" },
  ];

  // Check if a student is logged in
  const student = JSON.parse(localStorage.getItem('student'));
  if (student) {
    if (studentNameElem) {
      studentNameElem.textContent = student.name;
    }
    if (enrolledCoursesElem) {
      const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
      enrolledCoursesElem.innerHTML = enrolledCourses.map(course => `<li>${course.title}</li>`).join('');
    }
  }

  // Handle login
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Simulate student login
      if (email === 'student@college.com' && password === 'password') {
        const student = { name: 'John Doe', email: 'student@college.com' };
        localStorage.setItem('student', JSON.stringify(student));
        window.location.href = 'dashboard.html';
      } else {
        document.getElementById('login-error').textContent = 'Invalid email or password';
      }
    });
  }

  // Handle course listing and enrollment
  if (courseListElem) {
    courseListElem.innerHTML = courses.map(course => `
      <li>
        ${course.title}
        <button onclick="enrollCourse(${course.id})">Enroll</button>
      </li>
    `).join('');
  }

  // Enroll in a course
  window.enrollCourse = function (courseId) {
    const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    const course = courses.find(c => c.id === courseId);
    enrolledCourses.push(course);
    localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
    alert(`You have enrolled in ${course.title}`);
    window.location.href = 'dashboard.html';
  };

  // Handle logout
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function () {
      localStorage.removeItem('student');
      localStorage.removeItem('enrolledCourses');
      window.location.href = 'index.html';
    });
  }
});
