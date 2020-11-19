/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('ExtComponents.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        // Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
      var record = this.getItemSelected();
        if (record) {
        
            var x_type=record.fieldXtype;
            console.log('Xtype:  '+ x_type);
            Ext.widget(x_type).show();
            // Ext.create({
            //     xtype:x_type
            // });
        }
    },

    getItemSelected: function () {
        var me = this;
        var row = me.getView().getSelection();
        if (row) {
            // console.log(row.data);
            return row.data;
        }
        
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
