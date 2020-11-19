Ext.define('ExtComponents.view.textfields.Spinner', {
    extend: 'Ext.window.Window',

    xtype: 'extcomponents-spinner',

    shadow: true,
    frame: true,
    width: 400,
    title: 'Spinner Field',
    modal: true,
    autoshow: true,
    closable:true,
  

    items: [
        {
            xtype: 'fieldset',
            title: 'Spinner Field',
            items: [
                {
                    xtype: 'spinnerfield',
                    label: 'Spinner Field',
                    allowBlank: false,
                    cycle: true,
                    minValue: 0,
                    maxValue: 1000,
                    stepValue: 10,
                    name: 'fieldName',
                    required: true,
                    errorMessage: 'Please enter a value'
                }
            ],
            buttons: [
                {
                    text: 'close',
                    handler: function () {
                        this.getView().destroy()
                    }
                }
            ]
        }
    ]
});