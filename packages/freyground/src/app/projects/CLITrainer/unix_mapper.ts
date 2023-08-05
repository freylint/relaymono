/**
 * @description A class that maps unix commands to their respective training module
 */
class UnixCommandHandler {
  public mapCommand(cmd: UnixCommands): CommandMapResult {
    switch (cmd) {
      // Filesystem commands
      case UnixCommands.cd ||
        UnixCommands.ls ||
        UnixCommands.pwd ||
        UnixCommands.mv ||
        UnixCommands.cp ||
        UnixCommands.rm:
        return this.mapFS(cmd);
      // Utility commands
      case UnixCommands.grep || UnixCommands.nano:
        return this.mapUtil(cmd);
      // Account and ownership commands
      case UnixCommands.su ||
        UnixCommands.sudo ||
        UnixCommands.chmod ||
        UnixCommands.chown:
        return this.mapAcct(cmd);
      // Administration commands
      case UnixCommands.shutdown ||
        UnixCommands.passwd ||
        UnixCommands.ps ||
        UnixCommands.dd ||
        UnixCommands.kill:
        return this.mapAdmin(cmd);
      // Networking commands
      case UnixCommands.iwconfig || UnixCommands.ifconfig:
        return this.mapNet(cmd);
      // Package management commands
      case UnixCommands["apt-get"]:
        return this.mapPkg(cmd);
      // Failure case if a command is not implemented
      default:
        return commandNotFound(cmd);
    }
  }

  mapFS(cmd: UnixCommands): CommandMapResult {
    return "";
  }

  mapUtil(cmd: UnixCommands): CommandMapResult {
    return "";
  }

  mapAcct(cmd: UnixCommands): CommandMapResult {
    return "";
  }

  mapAdmin(cmd: UnixCommands): CommandMapResult {
    return "";
  }

  mapNet(cmd: UnixCommands): CommandMapResult {
    return "";
  }

  mapPkg(cmd: UnixCommands): CommandMapResult {
    return "";
  }
}
