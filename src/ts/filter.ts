import { IFilter } from './Interface';

export const Flags: IFilter = {
  form: {
    ball: false,
    bell: false,
    snowflake: false,
    cone: false,
    toy: false
  },
  color: {
    white: false,
    yellow: false,
    red: false,
    blue: false,
    green: false
  },
  size: {
    small: false,
    medium: false,
    large: false
  },
  loved: false,
  special: false,
  count: { start: 0, end: 12 },
  year: { start: 1940, end: 2020 }
};
