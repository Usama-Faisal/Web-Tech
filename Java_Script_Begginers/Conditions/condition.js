var score = prompt("What is your Age");

if (score > 70)
{
    if(score > 90)
    {
    console.log("Grade = A+ ");
    }
    else 
    {
        console.log("Grade = A")
    }
}

else if(score < 70 && score >50)
{
    console.log("Grade = B")
}

else
{
    console.log("Grade = Fail")
}