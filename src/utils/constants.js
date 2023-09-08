exports.APIKEY = 'f4857e551ef54fa09259419eae2b2eb1';
exports.TOGGLE_MODES = {
  LIGHT: 'light',
  DARK: 'dark'
};
exports.TOGGLE_MODE_MAP = {
  [this.TOGGLE_MODES.LIGHT]: this.TOGGLE_MODES.DARK,
  [this.TOGGLE_MODES.DARK]: this.TOGGLE_MODES.LIGHT
}
exports.TOGGLE_MODE_NAVBAR_BG_COLOR_MAP = {
  [this.TOGGLE_MODES.LIGHT]: 'black',
  [this.TOGGLE_MODES.DARK]: 'black'
}
exports.TOGGLE_MODE_NAVBAR_COLOR_MAP = {
  [this.TOGGLE_MODES.LIGHT]: 'white',
  [this.TOGGLE_MODES.DARK]: 'white'
}
exports.TOGGLE_MODE_BG_COLOR_MAP = {
  [this.TOGGLE_MODES.LIGHT]: '#fff',
  [this.TOGGLE_MODES.DARK]: 'black'
}
exports.TOGGLE_MODE_COLOR_MAP = {
  [this.TOGGLE_MODES.LIGHT]: 'black',
  [this.TOGGLE_MODES.DARK]: '#fff'
}