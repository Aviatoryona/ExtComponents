/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ExtComponents.Application',

    name: 'ExtComponents',

    requires: [
        // This will automatically load all classes in the ExtComponents namespace
        // so that application classes do not need to require each other.
        'ExtComponents.*'
    ],

    // The name of the initial view to create.
    mainView: 'ExtComponents.view.main.Main'
});
