const admin = 'Careful, only works as admin';
const nircmd = 'Needs nircmd.exe in your PATH';

const commands = {
  'Open Trash': 'start shell:recyclebinfolder',
  'Empty Trash': {
    command: 'nircmd.exe emptybin',
    subtitle: nircmd,
  },
  Sleep: {
    command: 'nircmd.exe standby',
    subtitle: nircmd,
  },
  Lock: 'rundll32.exe user32.dll,LockWorkStation',
  Hibernate: 'rundll32.exe powrprof.dll,SetSuspendState',
  Restart: 'shutdown.exe -r -t 00',
  Shutdown: 'shutdown.exe -s -t 00',
  Mute: {
    command: 'nircmd.exe mutesysvolume 1',
    subtitle: nircmd,
  },
  Unmute: {
    command: 'nircmd.exe mutesysvolume 0',
    subtitle: nircmd,
  },
  Screensaver: {
    command: 'nircmd.exe screensaver',
    subtitle: nircmd,
  },
  'Display off': 'nircmd.exe monitor off',
};

const MAX_VOLUME = 65535;

for (let percentage = 0; percentage <= 100; percentage += 25) {
  let level = parseInt((percentage / 100) * MAX_VOLUME);
  commands[`Volume ${percentage}%`] = `nircmd.exe setsysvolume ${level}`;
  commands[`Brightness ${percentage}%`] = `nircmd.exe setbrightness ${percentage}`;
}

export default commands;
