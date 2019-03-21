# Get Number of Working days based on week days if 5, 6 or 7 days per week
Get Number of Working days based on week days if 5, 6 or 7 days per week


## Notes
* This plugin works on both server and client side.
* This plugin is based on (https://github.com/PradepB/get_no_of_workingdays).
* All contributions are welcome.
* **Thanks to the contributors for making this plugin better!!**


## Usage
````javascript

var { workingDays }= require('get_no_of_workingdays');

````


## Configuration

### Use localization to configure holidays

````javascript
var { workingDays }= require('get_no_of_workingdays');

var no_of_working_days_per_week = 5 //change days 5, 6 or 7 based on workingdays per week

var getnewDate = new Date()
    
    //(or)
var getnewDate = new Date("2019-04-25") //or some javascript date formats

var vmonth = getnewDate.getMonth()
var vyear = getnewDate.getFullYear()
var vDate=getnewDate.getDate()

var no_of_Working_days_perMonth=workingDays(vyear, vmonth, vDate,no_of_working_days_per_week)

//Output
var getnewDate = new Date()
var no_of_working_days_per_week = 5
console.log(no_of_Working_days_perMonth)
output: 21

//or

//Output
var getnewDate = new Date()
var no_of_working_days_per_week = 6
console.log(no_of_Working_days_perMonth)
output: 26

````
## Installation

````
// For Node.js
$ npm install get_no_of_workingdays

// ...or install and save in package.json
$ npm install --save get_no_of_workingdays

// For bower
$ bower install get_no_of_workingdays
````


## Testing

````
npm test
````
