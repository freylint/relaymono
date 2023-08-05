#![doc = include_str!("../../README.md")]

use error::ErrorMessages;
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
            // Hide the window on startup
            win.hide().expect(&ErrorMessages::WindowHideFailed);
            // Position the window on startup
            win.set_position(get_taskbar_pos(
                &win,
                &win.current_monitor()
                    .expect(&ErrorMessages::MonitorAcquisitionFailed)
                    .expect(&ErrorMessages::MonitorAcquisitionFailed),
            ));
        })
        .on_system_tray_event(|app, event| match event {
            // Fires when the tray icon is left clicked.
            SystemTrayEvent::LeftClick { .. } => {
                // TODO(frey) State management for toggle
                toggle_win(app).expect(&ErrorMessages::WindowToggleFailed);
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
