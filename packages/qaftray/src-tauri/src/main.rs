#![doc = include_str!("../../README.md")]
#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use error::ErrMsg;
use tauri::{CustomMenuItem, SystemTray, SystemTrayEvent, SystemTrayMenu};
use window::{get_taskbar_pos, toggle_win};
mod error;
mod window;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let tray_menu = SystemTrayMenu::new().add_item(quit);
    let system_tray = SystemTray::new().with_menu(tray_menu);

    tauri::Builder::default()
        .system_tray(system_tray)
        .on_page_load(|win, _| {
            // Position the window on startup
            win.set_position(get_taskbar_pos(
                &win,
                &win.current_monitor()
                    .expect(&ErrMsg::MonitorAcquisition)
                    .expect(&ErrMsg::MonitorAcquisition),
            ))
            .unwrap();
        })
        .on_system_tray_event(|app, event| match event {
            // Fires when the tray icon is left clicked.
            SystemTrayEvent::LeftClick { .. } => {
                // TODO(frey) State management for toggle
                toggle_win(app).expect(&ErrMsg::WindowToggle);
            }
            // Fires when the tray icon is double clicked.
            SystemTrayEvent::DoubleClick { .. } => {
                // TODO(Frey) automatically ring the active phone
            }
            SystemTrayEvent::MenuItemClick { id, .. } => {
                match id.as_str() {
                    // Quit the app
                    "quit" => {
                        app.exit(0);
                    }
                    _nyi => {
                        // Do nothing
                        todo!("Menu item {_nyi:?} not implemented");
                    }
                }
            }
            _ => {
                // Do nothing
            }
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");

    Ok(())
}
