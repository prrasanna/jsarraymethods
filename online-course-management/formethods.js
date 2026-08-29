const students = [
    {
        studentId: 101,
        name: "Arun",
        course: "JavaScript",
        year: 2,
        skills: ["HTML", "CSS", "JavaScript"],
        completedCourses: ["HTML Basics", "CSS Fundamentals"],
        attendance: {
            "2026-08-10": true,
            "2026-08-11": false,
            "2026-08-12": true
        },
        assignments: {
            frontend: ["Portfolio", "Landing Page"],
            backend: ["REST API"]
        },
    },

    {
        studentId: 102,
        name: "Priya",
        course: "Python",
        year: 3,
        skills: ["Python", "SQL", "Django"],
        completedCourses: ["Python Basics", "SQL Fundamentals"],
        attendance: {
            "2026-08-10": true,
            "2026-08-11": true,
            "2026-08-12": false
        },
        assignments: {
            backend: ["REST API", "Database Project"],
            frontend: ["Portfolio"]
        },
    },

    {
        studentId: 103,
        name: "Karthik",
        course: "React",
        year: 2,
        skills: ["HTML", "CSS", "React", "JavaScript"],
        completedCourses: ["HTML Basics", "JavaScript Basics", "React Basics"],
        attendance: {
            "2026-08-10": false,
            "2026-08-11": true,
            "2026-08-12": true
        },
        assignments: {
            frontend: ["Portfolio", "E-commerce", "Dashboard"],
            backend: ["REST API", "Authentication"]
        },
    },
];

const displayStudent = (student) => {

    for (const key in student) {
        if (key != "skills" && key != "completedCourses" && key != "attendance" && key != "assignments") {
            console.log(key, ":", student[key]);
        }
    }

    for (const skill of student.skills) {
        console.log(skill);
    }

    for (const completedCourse of student.completedCourses) {
        console.log(completedCourse);
    }

    for (const date in student.attendance) {
        console.log(date, ":", student.attendance[date]);
    }

    for (const info in student.assignments) {
        console.log(info, ":", student.assignments[info]);
    }
};

for (const student of students) {
    displayStudent(student);
};