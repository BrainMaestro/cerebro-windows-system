const commands = {
  'Open Trash': 'start shell:recyclebinfolder',
  'Empty Trash': {
    command: 'rd /s /q %SYSTEMDRIVE%\\$recycle.bin',
    admin: true,
  },
  Sleep: {
    command: 'powercfg -hibernate off \
    && start /min "" rundll32.exe powrprof.dll,SetSuspendState Standby \
    && ping -n 3 127.0.0.1  &&  powercfg -hibernate on',
    admin: true,
  },
  Lock: 'rundll32.exe user32.dll,LockWorkStation',
  Hibernate: 'rundll32.exe powrprof.dll,SetSuspendState',
  Restart: 'shutdown.exe -r -t 00',
  Shutdown: 'shutdown.exe -s -t 00',
  Volume: 'sndvol.exe -f',
};

export default commands;
