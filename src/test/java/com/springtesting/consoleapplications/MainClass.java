package com.springtesting.consoleapplications;

public class MainClass
{
    public static void main(String[] args)
    {
        Car carObject=Car.getInstance();
        System.out.println("Car Make =>"+carObject.make);
        System.out.println("Car Model =>"+carObject.model);

    }
}
