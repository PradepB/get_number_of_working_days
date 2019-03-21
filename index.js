
// exports.workingDays = workingDays
function workingDays(year, month, DateofMonth, no_of_working_days_per_week) {
    /////get number of sundays
    ////month 0 to 11
    var day, counter, date;
    day = 1;
    counter = 0;
    date = new Date(year, month, day);
    while (date.getMonth() === month) {
        if (date.getDay() === 0) { // Sun=0, Mon=1, Tue=2, etc.
            counter += 1;
        }
        day += 1;
        date = new Date(year, month, day);
    }
    // return counter;

    var vday, vcounter, vdate;
    vday = 1;
    vcounter = 0;
    vdate = new Date(year, month, vday);
    while (vdate.getMonth() === month) {
        if (vdate.getDay() === 0) { // Sun=0, Mon=1, Tue=2, etc.
            vcounter += 1;
        }
        vday += 1;
        vdate = new Date(year, month, vday);
    }
    // return counter;



    ////get number of working days based on number of working days per week if 5, 6 or 7
    var noofworkingdays_five = 0
    noofworkingdays_five = vcounter + counter
    var numberof_Sunday = 0
    var no_of_Working_days = 0
    if (no_of_working_days_per_week == 6) {
        numberof_Sunday = counter
        Total_Days_of_month = daysInThisMonth()
        no_of_Working_days = Total_Days_of_month - numberof_Sunday
    } else if (no_of_working_days_per_week == 7) {
        Total_Days_of_month = daysInThisMonth()
        no_of_Working_days = Total_Days_of_month
    } else if (no_of_working_days_per_week == 5) {

        Total_Days_of_month = daysInThisMonth()
        no_of_Working_days = Total_Days_of_month - noofworkingdays_five
    }



    //////get number of days in current month
    function daysInThisMonth() {
        var now = new Date(year + "-" + (month + 1) + "-" + DateofMonth);
        
        return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    }

    return no_of_Working_days

}
exports.workingDays = workingDays
