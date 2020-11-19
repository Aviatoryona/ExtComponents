Ext.define('ExtComponents.view.textfields.DateField', {
    extend: 'Ext.window.Window',
    
    xtype : 'extcomponents-datefield', 
    
    shadow: true,
    frame: true,
    width: 400,
    title: 'Date Field',
    modal: true,
    autoshow: true,

    items: [
        {
            xtype: 'fieldset',
            title: 'Date Field',
            items: [
                {
                    xtype: 'datefield',
                    label: 'Text Field',
                    allowBlank: false,
                    name: 'fieldName',
                    placeholder: 'Enter value here...',
                    id: 'fieldId',
                    required: true,
                    minDate: new Date(1985,01,01),
                    maxDate: new Date(),
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