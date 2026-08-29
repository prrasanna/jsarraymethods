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

const replaceSkill = (studentId) => {

    const index = students.findIndex((student) => student.studentId == studentId);

    if (index !== -1) {
        students[index].skills.splice(1,2,"Angular","Bootstrap");
        return students[index].skills;
    }
};

console.log(replaceSkill(101));