package com.reactnativetwitterclone;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {
  @Override
  protected String getMainComponentName() {
    return "ReactNativeTwitterClone";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this, R.style.SplashScreen);
    super.onCreate(savedInstanceState);
  }
}
