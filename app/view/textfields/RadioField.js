Ext.define('ExtComponents.view.textfields.RadioField', {
    extend: 'Ext.window.Window',

    xtype: 'extcomponents-radiofield',

    shadow: true,
    frame: true,
    width: 400,
    title: 'Radio Field',
    modal: true,
    autoshow: true,

    items: [
        {
            xtype: 'fieldset',
            title: 'Radio Field',
            items: [
                {
                    defaults: {
                        xtype: 'radiofield',
                    },
                    items: [
                        {

                            label: 'Option A',
                            checked: true,
                            name: 'fieldName',
                            id: 'fieldId',
                            value: 'Option A'
                        },
                        {
                            xtype: 'radiofield',
                            label: 'Option B',
                            checked: false,
                            value: 'Option B'
                        },
                        {
                            label: 'Option C',
                            checked: true,
                            value: 'Option C'
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