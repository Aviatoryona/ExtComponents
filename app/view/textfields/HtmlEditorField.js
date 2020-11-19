Ext.define('ExtComponents.view.textfields.HtmlEditorField', {
    extend: 'Ext.window.Window',
    
    xtype : 'extcomponents-htmleditorfield', 
     
    shadow: true,
    frame: true,
    width: 400,
    title: 'Html Field',
    modal: true,
    autoshow: true,

    items: [
        {
            xtype: 'fieldset',
            title: 'Html Field',
            items: [
                {
                    xtype: 'htmleditor',
                    allowBlank: false,
                    name: 'fieldName',
                    placeholder: 'Type here...',
                    id: 'fieldId',
                    required: true,
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