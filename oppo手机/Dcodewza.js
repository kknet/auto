importClass(android.content.Context);
importClass(android.provider.Settings);
try {
    var enabledServices = Settings.Secure.getString(context.getContentResolver(), Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES);
    log('当前已启用的辅助服务\n', enabledServices);
    // var Services = enabledServices + ":org.autojs.autojs/com.stardust.autojs.core.accessibility.AccessibilityService:com.yyunkong.y/com.stardust.autojs.core.accessibility.AccessibilityService";
    var Services = enabledServices + ":com.yyunkong.y/com.stardust.autojs.core.accessibility.AccessibilityService:com.yyunkong.parent/com.stardust.autojs.core.accessibility.AccessibilityService";
    Settings.Secure.putString(context.getContentResolver(), Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES, Services);
    Settings.Secure.putString(context.getContentResolver(), Settings.Secure.ACCESSIBILITY_ENABLED, '1');
    toastLog("成功开启AutoJS的辅助服务");
} catch (error) {
    toastLog("\n请确保已给予 WRITE_SECURE_SETTINGS 权限");
}

// adb连接
// adb shell pm grant org.autojs.autojs android.permission.WRITE_SECURE_SETTINGS