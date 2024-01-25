let DEBUG = true;

let debugLog = (...args) => {
  if (DEBUG) {
    console.log(...args);
  }
};

class Light {
  static async addTorchButton(hud, hudHtml, hudData) {
    let actor = game.actors.get(hud.object.document.actorId);
    
    let library = await SourceLibrary.load(
      game.system.id,
      Settings.lightRadii.bright, 
      Settings.lightRadii.dim, 
      Settings.inventoryItemName, 
      Settings.gameLightSources, 
      actor.prototypeToken.light,
    );
    let token = new TorchToken(hud.object.document, library);
    let lightSources = token.ownedLightSources;

    // Don't let the tokens we create for light sources have or use their own
    // light sources recursively.
    if (hud.object.document.name in lightSources)  return;
    if (!game.user.isGM && !Settings.playerTorches) return;
    if (!token.currentLightSource) {
      TokenHUD.addQueryButton(token, hudHtml)
      return;
    }
    /* Manage torch state */
    TokenHUD.addFlameButton(
      token,
      hudHtml,
      Torch.forceSourceOff,
      Torch.toggleLightSource,
      Torch.toggleLightHeld,
      Torch.changeLightSource
    );
  }
}
