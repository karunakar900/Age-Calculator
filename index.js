function Age() {
    var date1 = document.getElementById("date").value;
    var Month1 = document.getElementById("month").value;
    var year1 = document.getElementById("year").value;

    var Date = new Date();
    var date2 = Date.GetDate();
    var Month2 = 1 + Date.GetMonth();
    var year2 = Date.GetFullYear();
    var Month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (date1 > date2) {
        date2 = date2 + Month[Month2 - 1];
        Month2 = Month2 - 1;
    }

    if (Month1 > Month2) {
        Month2 = Month2 + 12;
        year2 = year2 - 1;
    }
    var date = date2 - date1;
    var month = Month2 - Month1;
    var year = year2 - year1;

    document.getElementById("Age").innerHTML = "your Age is " + year + "Years" + month + "Months" + date + "Days";

}
