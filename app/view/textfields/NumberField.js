Ext.define('ExtComponents.view.textfields.NumberField', {
    extend: 'Ext.window.Window',
    
    xtype : 'extcomponents-numberfield', 
    
    
    shadow: true,
    frame: true,
    width: 400,
    title: 'Number Field',
    modal: true,
    autoshow: true,
    closable:true,
  

    items: [
        {
            xtype: 'fieldset',
            title: 'Number Field',
            items: [
                {
                    xtype: 'numberfield',
                    label: 'Number Field',
                    allowBlank: false,
                    name: 'fieldName',
                    placeholder: 'Enter value here...',
                    required: true,
                    minValue:0,
                    value:65,
                    maxValue:120,
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