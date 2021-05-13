function buttonCalculate_Clicked()
{
    var inputCurrentAge = document.getElementById("inputCurrentAge");
    var inputRetirementAge = document.getElementById("inputRetirementAge");
    var inputDeathAge = document.getElementById("inputDeathAge");
    var inputSavingsInitial = document.getElementById("inputSavingsInitial");
    var inputReturnOnInvestmentPerPeriodBeforeRetirement
        = document.getElementById("inputReturnOnInvestmentPerPeriodBeforeRetirement");
    var inputSavingsNewPerPeriod
        = document.getElementById("inputSavingsNewPerPeriod");
    var inputReturnOnInvestmentPerPeriodAfterRetirement
        = document.getElementById("inputReturnOnInvestmentPerPeriodAfterRetirement");
    var inputRetirementIncomePerPeriod
        = document.getElementById("inputRetirementIncomePerPeriod");
    var inputPeriodsRequired 
        = document.getElementById("inputPeriodsRequired");
    
    var currentAge = parseFloat(inputCurrentAge.value);
    var retirementAge = parseFloat(inputRetirementAge.value);
    var deathAge = parseFloat(inputDeathAge.value);    
    var savingsInitial = 
        parseFloat(inputSavingsInitial.value);
    var returnOnInvestmentPerPeriodBeforeRetirement = 
        parseFloat(inputReturnOnInvestmentPerPeriodBeforeRetirement.value);
    var savingsNewPerPeriod = 
        parseFloat(inputSavingsNewPerPeriod.value);
    var returnOnInvestmentPerPeriodAfterRetirement = 
        parseFloat(inputReturnOnInvestmentPerPeriodAfterRetirement.value);
    var retirementIncomePerPeriod = 
        parseFloat(inputRetirementIncomePerPeriod.value);
    
 
    var yearsToRetirement = retirementAge - currentAge;
    console.log(yearsToRetirement);

    var yearsToDeath = deathAge - retirementAge;
    console.log(yearsToDeath);


    // savings at retirement
    function retirementSavings() {
    var retirementSavings = Math.trunc((savingsInitial + (savingsNewPerPeriod/returnOnInvestmentPerPeriodBeforeRetirement))*Math.pow((1+returnOnInvestmentPerPeriodBeforeRetirement),yearsToRetirement)-(savingsNewPerPeriod/returnOnInvestmentPerPeriodBeforeRetirement));
    console.log("retirement savings", retirementSavings)
    }

    var savingsNeeded = (retirementIncomePerPeriod*(1-(Math.pow((1+(returnOnInvestmentPerPeriodAfterRetirement)),-yearsToDeath))))/(returnOnInvestmentPerPeriodAfterRetirement)
    console.log("savings needed", savingsNeeded);
    
    inputSavingsAtRetirement.value = retirementSavings.toLocaleString();
    inputSavingsRequired.value = savingsNeeded.toLocaleString();

    google.charts.load('current', {packages: ['corechart']});
        google.charts.setOnLoadCallback(drawChart);
    
        function drawChart() {
          // Define the chart to be drawn.
          var data = new google.visualization.DataTable();
          data.addColumn('string', 'Element');
          data.addColumn('number', 'number');
          data.addRows([
            ['Retirement Savings', retirementSavings],
            ['Savings Required', savingsNeeded],
          ]);
    
          // Instantiate and draw the chart.
          var chart = new google.visualization.BarChart(document.getElementById('barChart'));
          chart.draw(data, null);
        }
}
        
    