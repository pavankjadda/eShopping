package com.springtesting.consoleapplications;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;

public class FileReadUtil   extends Thread
{
    public void run()
    {
        try
        {
            System.out.println("Thread "+currentThread().getName()+" is Running");
            File file=new File("/home/cuckoo/.cuckoo/storage/analyses/"+currentThread().getName()+"/reports/report.json");
            if(file.isFile())
            {
                BufferedReader bufferedReader=new BufferedReader(new FileReader(file));
                int numberofLines=0;
                while (bufferedReader.readLine()!=null)
                {
                    //System.out.println("Line => "+bufferedReader.readLine());
                    numberofLines++;
                }
                System.out.println("Thread: "+currentThread().getName());
                System.out.println(" Number of Lines in file: "+currentThread().getName()+" are "+numberofLines);
            }
            /*
            for (int i=779;i>0;i--)
            {


                File file=new File("/home/cuckoo/.cuckoo/storage/analyses/"+i+"/reports/report.json");
                if(!file.isFile())
                    continue;
                //System.out.println("Thread: "+currentThread().getName());

                BufferedReader bufferedReader=new BufferedReader(new FileReader(file));
                int numberofLines=0;
                while (bufferedReader.readLine()!=null)
                {
                    //System.out.println("Line => "+bufferedReader.readLine());
                    numberofLines++;
                }
                System.out.println("Thread: "+currentThread().getName());
                System.out.println(" Number of Lines in file: "+i+" are "+numberofLines);

                FileInputStream fileInputStream=new FileInputStream(file);
                while (fileInputStream.read() != -1)
                {
                    System.out.println("read()=> "+(char)fileInputStream.read());
                }
            }*/

        }
        catch (Exception e)
        {
            Runtime.getRuntime().gc();
            e.printStackTrace();
        }
        finally
        {
            System.out.println("Thread "+currentThread().getName()+" exiting");
            Runtime.getRuntime().gc();
        }
    }
}
