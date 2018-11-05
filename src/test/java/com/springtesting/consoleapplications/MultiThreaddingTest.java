package com.springtesting.consoleapplications;

public class MultiThreaddingTest
{
    public static void main(String[] args)
    {
        int cores = Runtime.getRuntime().availableProcessors();
        System.out.println("Cores=> "+cores);

        for(int i=0;i<1000000;i++)
        {
            FileReadUtil fileReadUtil=new FileReadUtil();
            fileReadUtil.setName("Thread-"+i);
            fileReadUtil.start();
        }


    }
}
