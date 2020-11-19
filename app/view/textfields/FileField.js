Ext.define('ExtComponents.view.textfields.FileField', {
    extend: 'Ext.window.Window',
    
    xtype : 'extcomponents-filefield', 
        
    shadow: true,
    frame: true,
    width: 400,
    title: 'File Field',
    modal: true,
    autoshow: true,
    closable:true,
  

    items: [
        {
            xtype: 'fieldset',
            title: 'File Field',
            items: [
                {
                    xtype: 'filefield',
                    label: 'File Field',
                    allowBlank: false,
                    name: 'fieldName',
                    placeholder: 'Enter URL here...',
                    required: true,
                    accept:'image',
                    errorMessage: 'Please URL a value'
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