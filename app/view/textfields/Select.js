Ext.define('ExtComponents.view.textfields.Select', {
    extend: 'Ext.window.Window',

    // Uncomment to give this component an xtype 
    xtype: 'extcomponents-select',


    shadow: true,
    frame: true,
    width: 400,
    title: 'Select Field',
    modal: true,
    autoshow: true,
    closable:true,
  

    items: [
        {
            xtype: 'fieldset',
            title: 'Select Field',
            items: [
                {
                    xtype: 'selectfield',
                    label: 'Select Field',
                    allowBlank: false,
                    name: 'fieldName',
                    placeholder: 'Enter value here...',
                    required: true,
                    errorMessage: 'Please enter a value',
                    options: [
                        { text: 'Kenya', value: 1 },
                        { text: 'Uganda', value: 2 },
                        { text: 'Tanzania', value: 3 },
                        { text: 'Somalia', value: 4 },
                        { text: 'Congo', value: 5 },
                        { text: 'Sudan', value: 6 },
                        { text: 'Ethiopia', value: 7 },
                    ]
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