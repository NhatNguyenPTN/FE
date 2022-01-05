Ext.define('App.view.group.BrowseController', {
    extend: 'App.view.widgets.BrowseController',
    alias: 'controller.groupbrowse',

    control: {
        '#': {
            reset: 'refresh'
        }
    },

    refresh: function() {
        console.log('get store manage in browseController');
        var vm = this.getViewModel();
        vm.getStore('managers').reload();
    },

    onCreate: function() {
        
        this.redirectTo('organization/create');
    }
});
