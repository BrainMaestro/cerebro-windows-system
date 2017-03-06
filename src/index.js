import React from 'react';
import { search, shellCommand } from 'cerebro-tools';
import commands from './commands';
import icon from './icon.png';
import store from 'store';
import { getDelay, addDelayedCommand, removeDelayedCommand } from './delay';
import Preview from './preview';

export function fn({ display, term, action }) {
  const [delay, suffix, match] = getDelay(term);
  const filteredCommands = search(Object.keys(commands), term.replace(match, ''));
  const delayed = store.get('delayed') || {};
  if (Object.keys(delayed).length) {
    display({
      icon,
      title: 'Delayed commands',
      getPreview: () => <Preview delayed={delayed} />
    })
  }

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
