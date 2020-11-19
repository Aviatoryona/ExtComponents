Ext.define('ExtComponents.view.textfields.ContainerField', {
    extend: 'Ext.window.Window',

    xtype: 'extcomponents-containerfield',

    shadow: true,
    frame: true,
    width: 400,
    title: 'Container Field',
    modal: true,
    autoshow: true,

    items: [
        {
            xtype: 'fieldset',
            title: 'Container Field',
            items: [
                {
                    xtype: 'containerfield',
                    name: 'containerName',
                    items: [
                        {
                            xtype: 'combobox',
                            label: 'Select Country',
                            name: 'fieldName',
                            id: 'fieldId',
                            required: true,
                            queryMode: 'local',
                            displayField: 'name',
                            errorMessage: 'Please enter a value',
                            store: [
                                { name: 'Kenya', id: 1 },
                                { name: 'Uganda', id: 1 },
                                { name: 'Tanzania', id: 1 },
                                { name: 'Somalia', id: 1 },
                                { name: 'Congo', id: 1 },
                                { name: 'Sudan', id: 1 },
                                { name: 'Ethiopia', id: 1 },
                            ],
                            flex: 1
                        },
                        {
                            margin: '0 10',
                            name: 'City',
                            placeholder: 'City',
                            flex: 1
                        },
                        {
                            flex: 1,
                            name: 'County',
                            placeholder: 'County'
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