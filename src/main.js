import Light from "./classes/Light.js";

Hooks.on("ready", () => {
  Hooks.on("renderTokenHUD", (app, html, data) => {
    Light.addTorchButton(app, html, data);
  });

  Settings.register();

});

Hooks.on("getSceneControlButtons", (controls) => {
  const drawings = controls.find(b => b.name === "drawings");
  const tiles = controls.find(b => b.name === "tiles");
  const newButton = {
    name: "dtaligntool", 
    title: game.i18n.localize("dtalign.name"),
    icon: "fa fa-objects-align-left", 
    visible: true, 
    onClick: () => TDAlignTool.main(),
    button: true  
  };
  drawings.tools.push(newButton);
  tiles.tools.push(newButton);
});

