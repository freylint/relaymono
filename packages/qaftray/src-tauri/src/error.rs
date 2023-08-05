pub enum ErrMsg {
    WindowToggle,
    WindowRaise,
    WindowHide,
    WindowAcquisition,
    MonitorAcquisition,
}

impl std::ops::Deref for ErrMsg {
    type Target = str;

    fn deref(&self) -> &Self::Target {
        match self {
            ErrMsg::WindowToggle => "Failed to toggle window",
            ErrMsg::WindowRaise => "Failed to raise window",
            ErrMsg::WindowHide => "Failed to hide window",
            ErrMsg::WindowAcquisition => "Failed to acquire window",
            ErrMsg::MonitorAcquisition => "Failed to acquire monitor",
        }
    }
}
