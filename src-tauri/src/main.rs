// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::{process::{Command, Output, Stdio}, os::windows::process::CommandExt};
const CREATE_NO_WINDOW: u32 = 0x08000000;

fn main() {
tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![spawn_terminal])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[derive(Debug, serde::Serialize)]
struct CommandResult {
    stdout: String,
    current_dir: String,
    stderr: String,
}

#[tauri::command]
fn spawn_terminal(command: String) -> Result<CommandResult, String> {
    let output = Command::new("cmd")
    .arg("/C")
    .arg(command)
    .creation_flags(CREATE_NO_WINDOW)
    .output()
    .map_err(|e| format!("Failed to execute command: {}", e));

    //Get current directory of the Terminal

    let (stdout, stderr) = match output {
        Ok(output) => (
            String::from_utf8(output.stdout).unwrap(),
            String::from_utf8(output.stderr).unwrap(),
        ),
        Err(e) => ("".to_string(), e),
    };

    let current_dir = std::env::current_dir().map_err(|e| format!("Failed to get current directory: {}", e))?;

    print!("Current Dir is {}", current_dir.display());
    
    Ok(CommandResult {
        stdout,
        current_dir: current_dir.display().to_string(),
        stderr,
    })
}