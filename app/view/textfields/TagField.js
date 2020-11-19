Ext.define('ExtComponents.view.textfields.TagField', {
    extend: 'Ext.window.Window',

    xtype: 'extcomponents-tagfield',

    shadow: true,
    frame: true,
    width: 400,
    title: 'Tag Field',
    modal: true,
    autoshow: true,
    closable:true,
  

    items: [
        {
            xtype: 'fieldset',
            title: 'Tag Field',
            items: [
                {
                    xtype: 'tagfield',
                    allowBlank: false,
                    name: 'fieldName',
                    fieldLabel: 'Select countries',
                    placeholder: 'Type here...',
                    required: true,
                    displayField: 'show',
                    valueField: 'id',
                    queryMode: 'local',
                    filterPickList: true,
                    store: [
                        {
                            fields: [
                                'name', 'id'
                            ],
                            data: [
                                { name: 'Kenya', id: 1 },
                                { name: 'Uganda', id: 2 },
                                { name: 'Tanzania', id: 3 },
                                { name: 'Somalia', id: 4 },
                                { name: 'Congo', id: 5 },
                                { name: 'Sudan', id: 6 },
                                { name: 'Ethiopia', id: 7 },
                            ]
                        }
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