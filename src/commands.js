const commands = {
  'Display off': 'nircmd.exe monitor off',
  'Empty Trash': 'nircmd.exe emptybin',
  Hibernate: 'rundll32.exe powrprof.dll,SetSuspendState',
  Lock: 'rundll32.exe user32.dll,LockWorkStation',
  Mute:'nircmd.exe mutesysvolume 1',
  'Open Trash': 'start shell:recyclebinfolder',
  Restart: 'shutdown.exe -r -t 00',
  Screensaver:'nircmd.exe screensaver',
  Shutdown: 'shutdown.exe -s -t 00',
  Sleep:'nircmd.exe standby',
  Unmute:'nircmd.exe mutesysvolume 0',
};

const MAX_VOLUME = 65535;

for (let percentage = 0; percentage <= 100; percentage += 25) {
  let level = parseInt((percentage / 100) * MAX_VOLUME);
  commands[`Volume ${percentage}%`] = `nircmd.exe setsysvolume ${level}`;
  commands[`Brightness ${percentage}%`] = `nircmd.exe setbrightness ${percentage}`;
}

export default commands;
