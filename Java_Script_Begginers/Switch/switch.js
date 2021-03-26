var vowel=prompt("Enter Vowel :");

document.write("<br><br>Vowles")
switch(vowel)
{

        case "a":
        document.write("<br>Vowel is "+vowel);
        break;

        case "e":
        document.write("Vowel is "+vowel);
        break;

        case "i":
        document.write("Vowel is "+vowel);
        break;

        case "o":
        document.write("Vowel is "+vowel);
        break;

        case "u":
        document.write("Vowel is "+vowel);
        break;
        
        default:
            document.write(vowel + "is not a vowel");
}



var day=prompt("Enter Day :");

document.write("<br><br>Week Days")
switch(day)
{

        case "Monday":
        document.write("<br>"+day+" is work day");
        break;

        case "Tuesday":
        document.write("<br>"+day+" is work day");
        break;

        case "Wednesday":
        document.write("<br>"+day+" is work day");
        break;

        case "Thursday":
        document.write("<br>"+day+" is work day");
        break;

        case "Friday":
        document.write("<br>"+day+" is work day");
        break;

        case "Saturday":
        case "Sunday" :
        document.write("<br>"+day+" is work day");
        break;

        default:
            document.write("Enter correct word");
}


