pub enum ErrorMessages {
    WindowToggleFailed,
    WindowRaiseFailed,
    WindowHideFailed,
    WindowAcquisitionFailed,
    MonitorAcquisitionFailed,
}

impl std::ops::Deref for ErrorMessages {
    type Target = str;

    fn deref(&self) -> &Self::Target {
        match self {
            ErrorMessages::WindowToggleFailed => "Failed to toggle window",
            ErrorMessages::WindowRaiseFailed => "Failed to raise window",
            ErrorMessages::WindowHideFailed => "Failed to hide window",
            ErrorMessages::WindowAcquisitionFailed => "Failed to acquire window",
            ErrorMessages::MonitorAcquisitionFailed => "Failed to acquire monitor",
        }
    }
}
