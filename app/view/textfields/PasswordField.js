Ext.define('ExtComponents.view.textfields.PasswordField', {
    extend: 'Ext.window.Window',
    
    xtype : 'extcomponents-passwordfield', 
    
    shadow: true,
    frame: true,
    width: 400,
    title: 'Password Field',
    modal: true,
    autoshow: true,
    closable:true,
  

    items: [
        {
            xtype: 'fieldset',
            title: 'Password Field',
            items: [
                {
                    xtype: 'passwordfield',
                    label: 'Password Field',
                    allowBlank: false,
                    name: 'fieldName',
                    placeholder: 'Enter value here...',
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