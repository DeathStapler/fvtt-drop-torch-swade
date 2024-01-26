export default class Settings {
  static get playerTorches() {
    return game.settings.get("torch", "playerTorches");
  }

  static register() {
    game.settings.register("lightupmytoken", "playerTorches", {
      name: game.i18n.localize("torch.playerTorches.name"),
      hint: game.i18n.localize("torch.playerTorches.hint"),
      scope: "world",
      config: true,
      default: true,
      type: Boolean,
    });
  }
}
