function factorial(n){
    if(n<=1)
    {
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}

document.write("Factorial of 5 = " +factorial(5));