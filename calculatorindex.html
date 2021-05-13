$(document).ready(function () {

//when Calculate button is clicked, takes inputs and calculates savings, generates charts
$("#buttonCalculate").click(function (click) {
        console.log("Calc button clicked");
        event.preventDefault();
        

    
    //Get input values   
        var inputName = document.getElementById("inputName");
        var inputCurrentAge = document.getElementById("inputCurrentAge");
        var inputRetirementAge = document.getElementById("inputRetirementAge");
        var inputDeathAge = document.getElementById("inputDeathAge");
        var inputSavingsInitial = document.getElementById("inputSavingsInitial");
        var inputReturnOnInvestmentBeforeRetirement
            = document.getElementById("inputReturnOnInvestmentBeforeRetirement");
        var inputSavingsNewPerPeriod
            = document.getElementById("inputSavingsNewPerPeriod");
        var inputReturnOnInvestmentAfterRetirement
            = document.getElementById("inputReturnOnInvestmentAfterRetirement");
        var inputRetirementIncomePerPeriod
            = document.getElementById("inputRetirementIncomePerPeriod");
        var date = Date();
        console.log(date);
        
        var userName = String(inputName.value);
        var currentAge = parseFloat(inputCurrentAge.value);
        var retirementAge = parseFloat(inputRetirementAge.value);
        var deathAge = parseFloat(inputDeathAge.value);    
        var savingsInitial = 
            parseFloat(inputSavingsInitial.value);
        var returnOnInvestmentBeforeRetirement = 
            parseFloat(inputReturnOnInvestmentBeforeRetirement.value);
        var savingsNewPerPeriod = 
            parseFloat(inputSavingsNewPerPeriod.value);
        var returnOnInvestmentAfterRetirement = 
            parseFloat(inputReturnOnInvestmentAfterRetirement.value);
        var retirementIncomePerPeriod = 
            parseFloat(inputRetirementIncomePerPeriod.value);
    
    // Calculate length of years
        var yearsToRetirement = retirementAge - currentAge;
        console.log(yearsToRetirement);

        var yearsToDeath = deathAge - retirementAge;
        console.log(yearsToDeath);

    // calculate savings at retirement
        var retirementSavings = Math.trunc((savingsInitial + (savingsNewPerPeriod/returnOnInvestmentBeforeRetirement))*Math.pow((1+returnOnInvestmentBeforeRetirement),yearsToRetirement)-(savingsNewPerPeriod/returnOnInvestmentBeforeRetirement));
        console.log("retirement savings", retirementSavings)
    
    // calculate savings needed at retirement
        var savingsNeeded = Math.trunc(retirementIncomePerPeriod*(1-(Math.pow((1+(returnOnInvestmentAfterRetirement)),-yearsToDeath))))/(returnOnInvestmentAfterRetirement)
        console.log("savings needed", savingsNeeded);
    
    //calculate whether you have surplus or gap
        var differenceInSavings = retirementSavings - savingsNeeded;
        console.log("difference in savings", differenceInSavings);

    // return savings and savings needed to dom   
        inputSavingsAtRetirement.value = retirementSavings.toLocaleString();
        inputSavingsRequired.value = savingsNeeded.toLocaleString();
        inputSavingsDifference.value = differenceInSavings.toLocaleString();

        // $(".retirement-results").append("You'll have " + $(retirementSavings) " when you retire in " + $(yearsToRetirement)". You'll need " + $(savingsNeeded) + " to live as you'd like over the " + $(deathYears) + " you expect for retirement.");

        // ($retirementResults);

    //create chart
        // Load the Visualization API and the corechart package.
        google.charts.load('current', {packages: ['corechart']});
        // Set a callback to run when the Google Visualization API is loaded.
        google.charts.setOnLoadCallback(drawChart);
        // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
        function drawChart() {
            // Define the chart to be drawn.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Element');
            data.addColumn('number', 'number');
            data.addRows([
                ['Retirement Savings', retirementSavings],
                ['Savings Required', savingsNeeded],
            ]);
            var options = {'title':'Retirement Savings',
            'width':1000,
            'height':300};
            
        
        // Instantiate and draw the chart.
        var chart = new google.visualization.BarChart(document.getElementById('barChart'));
            chart.draw(data, options);
            }
          
//When Save button is clicked, saves results and adds to saved profiles board 
    $("#buttonSave").click(function (click) { 
        // event.preventDefault();
        console.log("Save button clicked")
    
    //FIREBASE database 
    //Get firebase db reference
        var database = firebase.database();
        // var profileAppRef = profileAppDB.ref("server/saving-data/fireblog");
        // console.log("database", database);
    
    // create a section for messages data in your db
        var databaseReference = database.ref('profiles');

    // use the set method to save data to the database
        databaseReference.push({
            currentAge : currentAge,
            retirementAge : retirementAge,
            deathAge : deathAge,
            savingsInitial : savingsInitial,
            returnOnInvestmentBeforeRetirement : returnOnInvestmentBeforeRetirement,
            savingsNewPerPeriod : savingsNewPerPeriod,
            returnOnInvestmentAfterRetirement : returnOnInvestmentAfterRetirement,
            retirementIncomePerPeriod : retirementIncomePerPeriod,
            retirementSavings : retirementSavings,
            savingsNeeded : savingsNeeded,
            name : userName,
            date : date,
        }); 

    })
});



//display saved profiles on site
    //grab li from dom
    const $savedProfileList = $('.saved-profiles');

    // use reference to app database to listen for changes in messages data

    firebase.database().ref('profiles').on('value',(snap)=>{
        console.log(snap.val());
        const allProfiles = snap.val();
        const profiles = [];

        for (let prof in allProfiles) {
            // get method is supposed to represent HTTP GET method
            let name = allProfiles[prof].name;
            let currentAge = allProfiles[prof].currentAge;
            let retirementAge = allProfiles[prof].retirementAge;
            let deathAge = allProfiles[prof].deathAge;
            let savingsInitial = allProfiles[prof].savingsInitial;
            let returnOnInvestmentBeforeRetirement = allProfiles[prof].returnOnInvestmentBeforeRetirement;
            let savingsNewPerPeriod = allProfiles[prof].savingsNewPerPeriod;
            let returnOnInvestmentAfterRetirement = allProfiles[prof].returnOnInvestmentAfterRetirement;
            let retirementIncomePerPeriod = allProfiles[prof].retirementIncomePerPeriod;
            let retirementSavings = allProfiles[prof].retirementSavings;
            let savingsNeeded = allProfiles[prof].savingsNeeded;
            let date = allProfiles[prof].date;
        
            // create message element
            let $profileListElement = $('<li></li>');

            // add id as data attribute so we can refer to later for updating
            $profileListElement.attr('data-id', prof);

            // add user name to li
            $profileListElement.html(name);
            // $profileListElement.html(date);

            // create delete element
            let $deleteElement = $('<i class="fa fa-trash pull-right delete"></i>');
  
            $deleteElement.on('click', function (e) {
                let id = $(e.target.parentNode).data('id');
                deleteProfile(id);
            });
            // add delete element
            $profileListElement.append($deleteElement);
            
            // create load profile element
            let $loadElement = $('</br><button id="load-button">Load Profile</button>');

            $loadElement.on('click', function (e) {
                let id = $(e.target.parentNode).data('id');
                loadProfile(id);
            });

            // add load element
            $profileListElement.append($loadElement);

            // push element to array of profiles
            profiles.push($profileListElement);
        }
        // remove lis to avoid dupes
        $savedProfileList.empty();
        for (let i in profiles) {
        $savedProfileList.append(profiles[i]);
        }
    });

    //function to delete selected profile data
    function deleteProfile(id) {
        // find message whose objectId is equal to the id we're searching with
        var databaseReference = firebase.database().ref('profiles' + id);
      
        databaseReference.remove();
      }

    //function to selected load profile data
    function loadProfile(id) {
        var databaseReference = firebase.database().ref('profiles' + id);
        firebase.database().ref('profiles').on('value',(snap)=>{
            console.log(snap.val());
            const allProfiles = snap.val();
            for (let prof in allProfiles) {
            let name = allProfiles[prof].name;
            let currentAge = allProfiles[prof].currentAge;
            let retirementAge = allProfiles[prof].retirementAge;
            let deathAge = allProfiles[prof].deathAge;
            let savingsInitial = allProfiles[prof].savingsInitial;
            let returnOnInvestmentBeforeRetirement = allProfiles[prof].returnOnInvestmentBeforeRetirement;
            let savingsNewPerPeriod = allProfiles[prof].savingsNewPerPeriod;
            let returnOnInvestmentAfterRetirement = allProfiles[prof].returnOnInvestmentAfterRetirement;
            let retirementIncomePerPeriod = allProfiles[prof].retirementIncomePerPeriod;
            let retirementSavings = allProfiles[prof].retirementSavings;
            let savingsNeeded = allProfiles[prof].savingsNeeded;
            let date = allProfiles[prof].date;
        //probably need to reload here
        
        //push to input boxes
        inputName.value = name.toLocaleString();
        inputCurrentAge.value = currentAge.toLocaleString();
        inputRetirementAge.value = retirementAge.toLocaleString();
        inputDeathAge.value = deathAge.toLocaleString();
        inputSavingsInitial.value = savingsInitial.toLocaleString();
        inputReturnOnInvestmentBeforeRetirement.value
            = returnOnInvestmentBeforeRetirement.toLocaleString();
        inputSavingsNewPerPeriod.value
            = savingsNewPerPeriod.toLocaleString();
        inputReturnOnInvestmentAfterRetirement.value
            = returnOnInvestmentAfterRetirement.toLocaleString();
        inputRetirementIncomePerPeriod.value
            = retirementIncomePerPeriod.toLocaleString();
        inputSavingsRequired.value = savingsNeeded.toLocaleString();
            }
        });
    
    }



});
