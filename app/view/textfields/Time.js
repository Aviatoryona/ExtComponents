Ext.define('ExtComponents.view.textfields.Time', {
    extend: 'Ext.window.Window',
    
    xtype : 'extcomponents-time', 
    
    shadow: true,
    frame: true,
    width: 400,
    title: 'Time Field',
    modal: true,
    autoshow: true,
    closable:true,
  

    items: [
        {
            xtype: 'fieldset',
            title: 'Time Field',
            items: [
                {
                    xtype: 'timefield',
                    label: 'Time Field',
                    allowBlank: false,
                    name: 'fieldName',
                    placeholder: 'Enter value here...',
                    required: true,
                    value:'01:00 PM',
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