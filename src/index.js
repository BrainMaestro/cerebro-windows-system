import { search, shellCommand } from 'cerebro-tools';
import commands from './commands';
import icon from './icon.png';
import store from 'store';
import { getDelay, addDelayedCommand, removeDelayedCommand } from './delay';

export function fn({ display, term, action }) {
  const [delay, suffix, match] = getDelay(term);
  const filteredCommands = search(Object.keys(commands), term.replace(match, ''));
  const delayed = store.get('delayed');

  const results = filteredCommands.map(title => {
    const command = commands[title];
    const subtitle = command.indexOf('nircmd') != -1 ? 'Needs nircmd.exe in your PATH' : '';
    title += suffix;
    const onSelect = () => {
      addDelayedCommand(title);
      setTimeout(() => {
        shellCommand(command);
        removeDelayedCommand(title);
      }, delay);
    };

    return {
      icon,
      title,
      subtitle,
      onSelect,
    }
  });

  display(results);
}
