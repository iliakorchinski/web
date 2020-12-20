class Student {
    constructor(name, producer, strength, count, id) {
        this.name = name;
        this.producer = producer;
        this.strength = strength;
        this.count = count;
        this.id = id;
    }
}

var studentApp = angular.module("studentApp", []);

studentApp.controller("studentController", function($scope, $http) {
    $scope.studentArray = [];
    $scope.id = 0;
    $scope.avgCnt = 0;

    $http({
        method: "GET",
        url: "http://localhost:3000"
    }).then(function successCallback(res) {
        for (var i = 0; i < res.data.length; i++) {
            $scope.studentArray.push(new Student(res.data[i].name, res.data[i].producer, res.data[i].strength, res.data[i].count, $scope.id));
            $scope.avgCnt += parseInt(res.data[i].count);
            $scope.id++;
        }
        $scope.avgCnt /= res.data.length;
    });

    $scope.addstudent = function(student) {
        $scope.avgCnt *= $scope.studentArray.length;
        $scope.studentArray.push(new Student(student.name, student.producer, student.strength, student.count, $scope.id));
        $scope.id++;
        $scope.avgCnt += parseInt(student.count);
        $scope.avgCnt /= $scope.studentArray.length;
        $scope.student = {
            "name": "",
            "producer": "",
            "strength": "",
            "count": ""
        };
    };

    $scope.deletestudent = function(student) {
        $scope.avgCnt *= $scope.studentArray.length;
        $scope.avgCnt -= student.count;
        $scope.studentArray.splice($scope.studentArray.indexOf(student), 1);
        $scope.avgCnt /= $scope.studentArray.length;
    };
});