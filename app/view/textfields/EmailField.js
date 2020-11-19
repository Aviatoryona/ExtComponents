Ext.define('ExtComponents.view.textfields.EmailField', {
    extend: 'Ext.window.Window',
    
    xtype : 'extcomponents-emailfield', 
    
    
    shadow: true,
    frame: true,
    width: 400,
    title: 'Email Field',
    modal: true,
    autoshow: true,

    items: [
        {
            xtype: 'fieldset',
            title: 'Email Field',
            items: [
                {
                    xtype: 'emailfield',
                    label: 'Email Field',
                    allowBlank: false,
                    name: 'fieldName',
                    placeholder: 'Enter value here...',
                    id: 'fieldId',
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