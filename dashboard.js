const content = document.getElementById("content");

// AUTH CHECK
auth.onAuthStateChanged(user => {
  if (!user) window.location.href = "index.html";
});

// LOGOUT
function logout() {
  auth.signOut().then(() => {
    window.location.href = "index.html";
  });
}

// STUDENTS MODULE
function loadStudents() {
  content.innerHTML = `
    <h3>Students</h3>
    <input id="sname" placeholder="Student Name">
    <button onclick="addStudent()">Add Student</button>
    <div id="studentList"></div>
  `;

  db.collection("students").onSnapshot(snapshot => {
    let html = "";
    snapshot.forEach(doc => {
      html += `<div class="card">${doc.data().name}</div>`;
    });
    document.getElementById("studentList").innerHTML = html;
  });
}

function addStudent() {
  const name = document.getElementById("sname").value;
  db.collection("students").add({ name });
}

// ATTENDANCE
function loadAttendance() {
  content.innerHTML = `<h3>Attendance System (Coming + Extendable)</h3>`;
}

// GRADES
function loadGrades() {
  content.innerHTML = `<h3>Grades System (Extendable)</h3>`;
}

// ANNOUNCEMENTS
function loadAnnouncements() {
  content.innerHTML = `<h3>Announcements</h3>`;
}