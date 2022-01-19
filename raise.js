
var btn2 = document.getElementById("calculate");

//salary increase calculator
btn2.onclick = function() 
{
    var old_salary = document.getElementById("old_salary").value;

    old_salary = parseInt(old_salary);
    
    var raise = document.getElementById("raise").value;

    //var New_Salary = (old_salary * (raise/100)) + old_salary;

    var New_Salary = (old_salary*(raise/100))+old_salary; 

    var tax_rate;

    var deduction;

    if(New_Salary == 0 || New_Salary <= 600){
        tax_rate = 0;
        deduction = 0;
    }else if(New_Salary == 601 || New_Salary <= 1650){
        tax_rate = (10 * New_Salary)/100;
        deduction = 60;
    }else if(New_Salary == 1651 || New_Salary <= 3200){
        tax_rate = (15 * New_Salary)/100;
        deduction = 142.50;
    }else if(New_Salary == 3201 || New_Salary <= 5250){
        tax_rate = (20 * New_Salary)/100;
        deduction = 302.50;
    }else if(New_Salary == 5251 || New_Salary <= 7800){
        tax_rate = (25 * New_Salary)/100;
        deduction = 565;
    }else if(New_Salary == 7801 || New_Salary <= 10900){
        tax_rate = (30 * New_Salary)/100;
        deduction = 955;
    }else if(New_Salary > 10900){
        tax_rate = (35 * New_Salary)/100;
        deduction = 1500;
    }

    var income_tax = tax_rate - deduction; 

    var pension = Math.round(New_Salary * 0.07);

    var net_income = New_Salary - (income_tax + pension);

    document.getElementById("old").innerHTML = "Old Salary: "+old_salary + " ETB";
    document.getElementById("increase").innerHTML = "Raise: "+raise + " %";
    document.getElementById("new_salary").innerHTML = "New Salary: "+New_Salary + " ETB";
    document.getElementById("net_salary").innerHTML = "Net Salary: "+net_income + " ETB";
    document.getElementById("income_tax").innerHTML = "Income Tax: "+income_tax + " ETB";
    document.getElementById("pension").innerHTML = "Pension: "+pension + " ETB";

    console.log(New_Salary);
    console.log(raise);
}