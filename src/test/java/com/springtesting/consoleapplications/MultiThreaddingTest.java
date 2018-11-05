package com.springtesting.consoleapplications;

public class MultiThreaddingTest
{
    public static void main(String[] args)
    {
        int cores = Runtime.getRuntime().availableProcessors();
        System.out.println("Cores=> "+cores);

        try
        {
            for(int i=0;i<1000;i++)
            {
                FileReadUtil fileReadUtil=new FileReadUtil();
                fileReadUtil.setName(""+i);
                fileReadUtil.start();
            }
        }
        finally
        {
            System.out.println("Active Threads=> "+Thread.activeCount());
            Runtime.getRuntime().gc();
        }



    }
}
