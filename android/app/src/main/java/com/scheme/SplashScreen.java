package com.scheme;

import android.content.Intent;
import android.os.Bundle;
import com.facebook.react.ReactActivity;

public class SplashScreen extends ReactActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.splash_screen);

        Thread myThread = new Thread(){
            @Override
            public void run() {
                try {
                    sleep(3000);
                    Intent startMainScreen = new Intent(getApplicationContext(), MainActivity.class);
                    startActivity(startMainScreen);
                    finish();
                } catch(InterruptedException e) {
                    e.printStackTrace();
                }

            }
        };
        myThread.start();
    }
}
