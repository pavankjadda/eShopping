package com.springtesting.consoleapplications;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;

public class FileReadUtil   extends Thread
{
    public void run()
    {
        try
        {
            System.out.println("Thread "+Thread.currentThread().getName()+" is Running");
            for (int i=779;i>0;i--)
            {
                File file=new File("/home/cuckoo/.cuckoo/storage/analyses/"+i+"/reports/report.json");
                FileInputStream fileInputStream=new FileInputStream(file);
                while (fileInputStream.read() != -1)
                {
                    System.out.println("read()=> "+fileInputStream.read());
                }
            }

        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
    }
}
