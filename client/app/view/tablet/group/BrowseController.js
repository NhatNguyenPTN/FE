Ext.define('App.view.tablet.group.BrowseController', {
    extend: 'App.view.group.BrowseController',
    alias: 'controller.tablet-groupbrowse',

    onCreate: function() {
        // The creation form can be accessed either by clicking the "create" button (dialog)
        // or via the #organization/create url (page) - default config matches the "page"
        // view. Note that this dialog will be destroyed on close.
        console.log('show form create');
        Ext.create({
            
            xtype: 'organizationcreate',
            record: Ext.create('App.model.Group'),
            centered: true,
            floated: true,
            modal: true,
            ui: 'dialog',
            toolbar: {
                docked: 'bottom'
            }
        }).show();
     
    }
});
