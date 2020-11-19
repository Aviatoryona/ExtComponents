Ext.define('ExtComponents.view.textfields.SimpleTextField', {
    extend: 'Ext.window.Window',

    xtype: 'extcomponents-simpletextfield',

    shadow: true,
    frame: true,
    width: 400,
    title: 'Simple Text Field',
    modal: true,
    autoshow: true,

    items: [
        {
            xtype: 'fieldset',
            title: 'Simple Text Field',
            items: [
                {
                    xtype: 'textfield',
                    label: 'Text Field',
                    allowBlank: false,
                    name: 'fieldName',
                    placeholder: 'Enter value here...',
                    id: 'fieldId',
                    required: true,
                    errorMessage: 'Please enter a value'
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-arrow-circle-down',
                    text: 'Click Me',
                    alignSelf:'center',
                    flex:2,
                    handler: function () {
                        alert('You clicked me');
                    }
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