use crate::error::ErrorMessages;
use tauri::Manager;

/// Toggle the visibility of the main window
pub fn toggle_win(app: &tauri::AppHandle) -> Result<(), Box<dyn std::error::Error>> {
    let window = app
        .get_window("main")
        .expect(&ErrorMessages::WindowAcquisitionFailed);
    let monitor = window
        .current_monitor()?
        .expect(&ErrorMessages::MonitorAcquisitionFailed);
    let position = get_taskbar_pos(&window, &monitor);

    // Position window
    window.set_position(position)?;

    // Toggle window
    match window.is_visible() {
        Ok(true) => {
            window.hide().expect(&ErrorMessages::WindowHideFailed);
        }
        Ok(false) => {
            window.show().expect(&ErrorMessages::WindowRaiseFailed);
        }
        Err(e) => {
            panic!("Failed to get window visibility: {}", e);
        }
    }

    Ok(())
}

/// Get the desired positionining of th pop up
pub fn get_taskbar_pos(win: &tauri::Window, mon: &tauri::Monitor) -> tauri::Position {
    let taskbar_height = 80;
    let win = win.inner_size().expect("Failed to get window size");
    let mon = mon.size();

    let pos = (
        (mon.width - win.width) as i32,
        // TODO 80 is a placehodler for the windows taskbar height
        (mon.height - win.height - taskbar_height) as i32,
    );
    tauri::Position::Physical(pos.into())
}
