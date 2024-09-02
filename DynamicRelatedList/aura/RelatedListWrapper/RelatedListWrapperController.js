({
  onRender: function (component) {
    var titleName = component.get("v.pageReference").state.c__title;
    var iconName = component.get("v.pageReference").state.c__iconName;
    var label = titleName ? titleName : "Related List";
    var icon = iconName ? iconName : "standard:related_list";
    var workspaceAPI = component.find("workspace");
    workspaceAPI.getEnclosingTabId().then(function (tabId) {
      workspaceAPI.setTabLabel({
        tabId: tabId,
        label: label
      });
      workspaceAPI.setTabIcon({
        tabId: tabId,
        icon: icon
      });
    });
  }
});
