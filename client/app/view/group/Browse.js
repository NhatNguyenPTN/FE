Ext.define('App.view.group.Browse', {
    extend: 'App.view.widgets.Browse',

    fields: {
        manager: {
            property: 'manager_id'
        }
    },

    controller: 'groupbrowse',
    viewModel: {
        type: 'organizationbrowse'
    },

    cls: 'organizationbrowse',
    bind: {
        store: '{organizations}'
    }
});
