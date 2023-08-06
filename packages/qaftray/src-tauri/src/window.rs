use crate::error::ErrMsg;
use tauri::Manager;

/// Toggle the visibility of the main window
pub fn toggle_win(app: &tauri::AppHandle) -> Result<(), Box<dyn std::error::Error>> {
    let window = app.get_window("main").expect(&ErrMsg::WindowAcquisition);
    let monitor = window
        .current_monitor()?
        .expect(&ErrMsg::MonitorAcquisition);
    let position = get_taskbar_pos(&window, &monitor);

    // Position window
    window.set_position(position)?;

    // Toggle window
    match window.is_visible() {
        Ok(true) => {
            window.hide().expect(&ErrMsg::WindowHide);
        }
        Ok(false) => {
            window.show().expect(&ErrMsg::WindowRaise);
        }
        Err(e) => {
            panic!("Failed to get window visibility: {}", e);
        }
    }

    Ok(())
}

/// Get the desired positionining of th pop up
pub fn get_taskbar_pos(win: &tauri::Window, mon: &tauri::Monitor) -> tauri::Position {
    let taskbar_height = 53;
    let win = win.inner_size().expect("Failed to get window size");
    let mon = mon.size();

    let pos = (
        (mon.width - win.width) as i32,
        // TODO 80 is a placehodler for the windows taskbar height
        (mon.height - win.height - taskbar_height) as i32,
    );
    tauri::Position::Physical(pos.into())
}
