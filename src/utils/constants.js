exports.APIKEY = 'f4857e551ef54fa09259419eae2b2eb1';
exports.TOGGLE_MODES = {
  LIGHT: 'light',
  DARK: 'dark'
};
exports.TOGGLE_MODE_MAP = {
  [this.TOGGLE_MODES.LIGHT]: this.TOGGLE_MODES.DARK,
  [this.TOGGLE_MODES.DARK]: this.TOGGLE_MODES.LIGHT
}
exports.TOGGLE_MODE_BG_COLOR_MAP = {
  [this.TOGGLE_MODES.LIGHT]: '#fff',
  [this.TOGGLE_MODES.DARK]: '#343a40'
}
exports.TOGGLE_MODE_COLOR_MAP = {
  [this.TOGGLE_MODES.LIGHT]: '#343a40',
  [this.TOGGLE_MODES.DARK]: '#fff'
}