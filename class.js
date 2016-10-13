function Student(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.courses = [];
}

function Course(name, dept, credit, time, days) {
  this.name = name;
  this.students = [];
  this.dept = dept;
  this.credit = credit;
  this.time = time;
  this.days = days;
}

Course.prototype.conflictsWith = function (otherCourse) {
  if (this.time === otherCourse.time && this.days.join("") === otherCourse.days.join('')) {
    return true;
  }
  return false;
};

Student.prototype.name = function () {
  this.fname + " " + this.lname;
}

Student.prototype.hasConflict = function (otherCourse) {
  let i = 0
  while (i <= this.courses.length) {
    if (this.courses[i].conflictsWith(otherCourse)) {
      return true
    }
    i++
  }
  return false
};

Student.prototype.enroll = function(course) {
  if (!this.courses.includes(course) && !this.hasConflict(course)) {
    this.courses.push(course);
    course.students.push(this);
  }
}

Student.prototype.courseLoad = function () {
  let courseLoad = {};
  this.courses.forEach(course => {
    if (courseLoad[course.dept]) {
      courseLoad[course.dept] += course.credit;
    } else {
      courseLoad[course.dept] = course.credit;
    }
  })
  return courseLoad;
};

Course.prototype.addStudent = function(student) {
  student.enroll(this);
}
