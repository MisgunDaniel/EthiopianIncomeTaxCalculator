var btn = document.getElementById("cal");

//income tax calculator 
btn.onclick = function() 
{
    var salary = document.getElementById("salary").value;

    var tax_rate;

    var deduction;

    if(salary == 0 || salary <= 600){
        tax_rate = 0;
        deduction = 0;
    }else if(salary == 601 || salary <= 1650){
        tax_rate = (10 * salary)/100;
        deduction = 60;
    }else if(salary == 1651 || salary <= 3200){
        tax_rate = (15 * salary)/100;
        deduction = 142.50;
    }else if(salary == 3201 || salary <= 5250){
        tax_rate = (20 * salary)/100;
        deduction = 302.50;
    }else if(salary == 5251 || salary <= 7800){
        tax_rate = (25 * salary)/100;
        deduction = 565;
    }else if(salary == 7801 || salary <= 10900){
        tax_rate = (30 * salary)/100;
        deduction = 955;
    }else if(salary > 10900){
        tax_rate = (35 * salary)/100;
        deduction = 1500;
    }

    var income_tax = tax_rate - deduction; 

    var pension = Math.round(salary * 0.07);

    var net_income = salary - (income_tax + pension);

    document.getElementById("gross_salary").innerHTML = "Gross Salary: "+salary + " ETB";
    document.getElementById("net_salary").innerHTML = "Net Salary: "+net_income + " ETB";
    document.getElementById("income_tax").innerHTML = "Income Tax: "+income_tax + " ETB";
    document.getElementById("pension").innerHTML = "Pension: "+pension + " ETB";
}





