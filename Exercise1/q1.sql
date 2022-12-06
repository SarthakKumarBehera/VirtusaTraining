CREATE TABLE Subject(
       id VARCHAR(10) PRIMARY KEY,
	  rollno INT,
	  subname VARCHAR(20),
	  marks INT
);

CREATE TABLE Student(
     id VARCHAR(10),
	rollno INT,
	sname VARCHAR(20),
	address VARCHAR(50),
	FOREIGN KEY(id) REFERENCES Subject(id)
);

INSERT INTO Subject VALUES('A1', 23, 'Maths', 60);
INSERT INTO Subject VALUES('A2', 24, 'Physics', 70);
INSERT INTO Subject VALUES('A3', 25, 'Chemistry', 50);
INSERT INTO Subject VALUES('A4', 26, 'Biology', 80);
INSERT INTO Subject VALUES('A5', 27, 'History', 90);

INSERT INTO Student VALUES('A3', 25, 'Rosh', 'sbp');
INSERT INTO Student VALUES('A4', 26, 'Aman', 'jsg');
INSERT INTO Student VALUES('A2', 24, 'Avash', 'jsr');
INSERT INTO Student VALUES('A1', 23, 'Rohan', 'bbsr');

SELECT subname, COUNT(id) AS 'Total Students' FROM Subject
GROUP BY subname;

SELECT SUM(marks) AS TotMarks FROM Subject, Student
WHERE Subject.id = Student.id
AND sname = 'Rosh';
