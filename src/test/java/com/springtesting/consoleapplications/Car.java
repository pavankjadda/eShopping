package com.springtesting.consoleapplications;

public class Car
{
    private static Car carObject=null;

    public String make;

    public String model;

    private Car()
    {
        this.make="BMW";
        this.model="Q5";
    }

    public static Car getInstance()
    {
        if(carObject == null)
            return new Car();
        return carObject;
    }
}
