var printTeacher = function (firstName, lastName) { return "".concat(firstName.charAt(0), ". ").concat(lastName); };
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        var _this = this;
        this.workOnHomework = function () { return 'Currently working'; };
        this.displayName = function () { return _this.firstName; };
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return StudentClass;
}());
var student = new StudentClass("Sonto", "Mtimde");
console.log(student.displayName());
console.log(student.workOnHomework());
