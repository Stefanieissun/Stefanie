
class MacroCommand {
  public commandsList: Array<any> = [];
  add(command: any) {
    this.commandsList.push(command);
  }
  execute() {
    this.commandsList.map(x =>x.execute());
  }
}
var closeDoorCommand = {
  execute: function() {
    console.log("关门");
  }
};
var openPcCommand = {
  execute: function() {
    console.log("开电脑");
  }
};
var openQQCommand = {
  execute: function() {
    console.log("登录 QQ");
  }
};

let v=new MacroCommand();
v.add(closeDoorCommand);
v.add(openQQCommand);
v.add(openPcCommand);

v.execute();