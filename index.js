// Your code here
//populates a record from an array given in the test
function createEmployeeRecord(array){
let record 
return record = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
}
}
//converting each nested array into an employee record and making new array
function createEmployeeRecords(array){ 
    return array.map(createEmployeeRecord)
}
//creates the type, date and timeIN and returns employees with new obj
function createTimeInEvent(employee, dateStamp) {
    const obj = {
        type: "TimeIn",
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]

    }
    
  employee.timeInEvents.push(obj)
    return employee
}
//creates the type, date and timeOUT and returns employees with new obj
function createTimeOutEvent(employee, dateStamp){
    const obj = {
        type: "TimeOut",
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]

    }
    
  employee.timeOutEvents.push(obj)
    return employee
}

//calculating worked hours(2h) on exact date
function hoursWorkedOnDate(employee, dateStamp) {
    let timeIn = employee.timeInEvents.find(function(e){
       return e.date === dateStamp
    })
    let timeOut = employee.timeOutEvents.find(function(e){
        return e.date === dateStamp
    })
        return (timeOut.hour - timeIn.hour) / 100
}
//calculating earned wages on given date(27$ per hour) using hours worked
function wagesEarnedOnDate(employee, dateStamp) {
    let earnedMoney = hoursWorkedOnDate(employee, dateStamp)
    return employee.payPerHour * 2
    
}
//
function allWagesFor(employee){
let availableDates = employee
}
