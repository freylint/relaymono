//! Simulator for learning cross platform command line
"use client";

import { useState } from "react";

const MOTD = `Welcome to the RelayGround CLI Trainer!

This is a CLI simulator designed to help you learn the Unix and Windows command
line requirements for the CompTIA A+ certification exam.

To start execute the "clitrainer" builtin command.
`;


enum ShellPrompts {
  win32 = "PS >",
  unix = "$",
}

export default function CLITrainer() {
  const [textBuffer, setTextBuffer] = useState<string>(MOTD);
  return (
    <>
      <textarea className="w-full font-mono h-96 max-h-30" spellCheck="false">
        {textBuffer}
      </textarea>
    </>
  );
}
