## yiqian 一堑

**base on Cordova**

### proj log

----

#### how to use cordova-hot-code-push-plugin

1. init hcp

    use command `cordova-hcp init` to add file cordova-hcp.json into proj.

    * Project name - your current project name. Required.

    * iOS app identifier - applications id on the App Store. Used to redirect user to the applications page on the store.

    * Android app identifier - applications package name by which we reference app on the Google Play.

    * Update method - when to perform the update. Supports three keys:

        * start - install updates when application is launched;

        * resume - install update when application is resumed (moved from background to foreground state) or launched; used by default;

        * now - install update as soon as it is loaded from the server.

    As a result, content of the `cordova-hcp.json` file will be:

    ```json
    {
        "name": "一堑",
        "android_identifier": "io.cordova.yiqian",
        "update": "now",
        "autogenerated": true,
        "min_native_interface": 1,
        "content_url": "http://192.168.1.104:8979/www"
    }
    ```

2. build hcp config

    to generated `chcp.json` and `chcp.manifest` files in the www folder, run `cordova-hcp build [www_directory]`. then the project is ready for deployment.

3. deployment

    3.1 to run hcp server

    run `cordova-hcp server [www_directory]`. then get console like this:

    ```bash
    Running server
    Checking:  /Cordova/TestProject/www
    local_url http://localhost:31284
    Build 2015.09.07-10.12.25 created in /Cordova/TestProject/www
    cordova-hcp local server available at: http://localhost:31284
    cordova-hcp public server available at: https://19d5cfa2.ngrok.com
    ```

    finnally in `config.xml` file, replace `DES_URL` into cordova-hcp public server url.

    ```xml
    <chcp>
        <config-file url="DES_URL/chcp.json" />
    </chcp>
    ```

    3.2 to build cordova app

    run `cordova build`.