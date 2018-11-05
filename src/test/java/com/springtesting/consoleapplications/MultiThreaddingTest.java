package com.springtesting.consoleapplications;

public class MultiThreaddingTest
{
    public static void main(String[] args)
    {
        int cores = Runtime.getRuntime().availableProcessors();








        long totalMemory=Runtime.getRuntime().totalMemory()/(1024*1024);
        long freeMemory=Runtime.getRuntime().freeMemory()/(1024*1024);
        long maxMemory=Runtime.getRuntime().maxMemory()/(1024*1024);
        Runtime.getRuntime().gc();

        System.out.println("Cores=> "+cores);
        System.out.println("totalMemory=> "+totalMemory);
        System.out.println("freeMemory=> "+freeMemory);
        System.out.println("maxMemory=> "+maxMemory);
    }
}
