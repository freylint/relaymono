//! Module for the common command line command to question mapping

/**
 * @description The resulting type of a command mapping.
 */
type CommandMapResult = string;

type CLICommands = Win32Commands | UnixCommands;

function commandNotFound(cmd: CLICommands): CommandMapResult {
  console.error(`Command ${cmd} not found`);
  return "Internal Trainer Error: ${cmd} not found";
}

/**
 * @description A list of commands that are available on Unix
 */
enum UnixCommands {
  // Filesystem
  "cd",
  "ls",
  "pwd",
  "mv",
  "cp",
  "rm",
  // Utility
  "grep",
  "nano",
  // Accounts and ownership
  "su",
  "sudo",
  "chmod",
  "chown",
  // Administration
  "shutdown",
  "passwd",
  "ps",
  "dd",
  "kill",
  // Networking
  "iwconfig",
  "ifconfig",
  // Package Management
  "apt-get",
}

/**
 * @description A list of commands that are available on Windows
 */
enum Win32Commands {
  // Filesystem
  "dir",
  "cd",
  "chdir",
  "copy",
  "xcopy",
  "robocopy",
  // Networking
  "ipconfig",
  "ping",
  "tracert",
  "netstat",
  "nslookup",
  // Administration
  "shutdown",
  "sfc",
  "chkdsk",
  "diskpart",
  "taskkill",
  "format",
  // GPO tools
  "gpupdate",
  "gpresult",
  // Imaging
  "dism",
  // Network Storage
  "net",
}
