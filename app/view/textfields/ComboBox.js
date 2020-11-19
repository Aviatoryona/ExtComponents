Ext.define('ExtComponents.view.textfields.ComboBox', {
    extend: 'Ext.window.Window',

    // Uncomment to give this component an xtype 
    xtype: 'extcomponents-combobox',

    shadow: true,
    frame: true,
    width: 400,
    title: 'ComboxBox Field',
    modal: true,
    autoshow: true,
    closable:true,
  

    items: [
        {
            xtype: 'fieldset',
            title: 'ComboxBox Field',
            items: [
                {
                    xtype: 'combobox',
                    label: 'Select Country',
                    name: 'fieldName',
                    required: true,
                    queryMode: 'local',
                    displayField: 'name',
                    errorMessage: 'Please enter a value',
                    store: [
                        {name:'Kenya', id:1},
                        {name:'Uganda', id:2},
                        {name:'Tanzania', id:3},
                        {name:'Somalia', id:4},
                        {name:'Congo', id:5},
                        {name:'Sudan', id:6},
                        {name:'Ethiopia', id:7},
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