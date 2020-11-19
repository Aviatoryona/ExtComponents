Ext.define('ExtComponents.view.textfields.CheckBox', {
    extend: 'Ext.window.Window',

    // Uncomment to give this component an xtype 
    xtype: 'extcomponents-checkbox',


    shadow: true,
    frame: true,
    width: 400,
    title: 'CheckBox Field',
    modal: true,
    autoshow: true,

    items: [
        {
            xtype: 'fieldset',
            title: 'CheckBox Field',
            items: [
                {
                    xtype: 'checkboxfield',
                    label: 'Option A',
                    checked: true,
                    name: 'fieldName',
                    id: 'fieldId',
                    value: 'Option A'
                },
                {
                    xtype: 'checkboxfield',
                    label: 'Option B',
                    checked: false,
                    value: 'Option B'
                },
                {
                    xtype: 'checkboxfield',
                    label: 'Option C',
                    checked: true,
                    value: 'Option C'
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