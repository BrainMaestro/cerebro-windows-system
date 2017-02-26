import { search, shellCommand } from 'cerebro-tools';
import commands from './commands';

export function fn({ display, term, action }) {
  const numbers = term.match(/[0-9]+/);
  const wait = numbers ? numbers[0] : 0;
  const filteredCommands = search(Object.keys(commands), term.replace(/[0-9]+/g, ''));

  if (filteredCommands.length) {
    filteredCommands.forEach(title => {
      const command = commands[title];
      const cmd = typeof command == 'string' ? command : command.command;
      const onSelect = () => {
        setTimeout(() => shellCommand(cmd), wait * 1000);
      };

      if (wait) {
        title += ` in ${wait} second`;
        title += wait > 1 ? 's' : '';
      }

      display({
        title,
        subtitle: command.subtitle,
        icon: command.icon,
        onSelect,
      });
    })
  }
}
