import { title, version, settings } from '../../config';
import { HEADER_THEME, LOCALE } from '../actions/actionTypes';

const titleApp = (state = title) => state;

const versionApp = (state = version) => state;

const headerTheme = (state = settings.header, action) => {
  switch (action.type) {
    case HEADER_THEME:
      return action.theme;
    default:
      return state;
  }
};

const locale = (state = settings.locale, action) => {
  switch (action.type) {
    case LOCALE:
      return action.locale;
    default:
      return state;
  }
};

const setting = {
  titleApp,
  versionApp,
  headerTheme,
  locale,
};

export default setting;
