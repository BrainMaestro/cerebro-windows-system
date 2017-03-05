import store from 'store';

const second = 1e3;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

const timeMap = {
  s: [second, 'second'],
  m: [minute, 'minute'],
  h: [hour, 'hour'],
  d: [day, 'day'],
};

export function getDelay(term) {
  const matches = term.match(/([0-9]+)([smhd]?)/);
  if (! matches) return [0, ''];

  const delay = parseInt(matches[1]);
  const key = matches[2] || 's';
  const [multiplier, type] = timeMap[key];
  let suffix = ` in ${delay} ${type}`;
  suffix += delay > 1 ? 's' : '';

  return [delay * multiplier, suffix, matches[0]];
}

export function addDelayedCommand(title) {
  const delayed = store.get('delayed') || {};

  delayed[title] = title in delayed ? delayed[title] + 1: 1;
  store.set('delayed', delayed);
}

export function removeDelayedCommand(title) {
  const delayed = store.get('delayed');

  if (delayed[title] > 1) {
    delayed[title]--;
  } else {
    delete delayed[title];
  }

  store.set('delayed', delayed);
}
