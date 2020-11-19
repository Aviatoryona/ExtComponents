/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('ExtComponents.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        // Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        var me = this;
        var record = getItemSelected();
        if (record) {
            console.log(record.fieldXtype);
        }
    },

    getItemSelected: function () {
        var me = this;
        var data = me.getView().getSelectionModel().getSelection();
        if (data) {
            return data[0];
        }
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
