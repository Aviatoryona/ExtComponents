Ext.define('ExtComponents.view.textfields.TextAreaField', {
    extend: 'Ext.window.Window',

    xtype: 'extcomponents-textareafield',

    shadow: true,
    frame: true,
    width: 400,
    title: 'TextArea Field',
    modal: true,
    autoshow: true,

    items: [
        {
            xtype: 'fieldset',
            title: 'TextArea Field',
            items: [
                {
                    xtype: 'textareafield',
                    label: 'TextArea Field',
                    allowBlank: false,
                    name: 'fieldName',
                    placeholder: 'Message...',
                    id: 'fieldId',
                    required: true,
                    maxRows: 8,
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