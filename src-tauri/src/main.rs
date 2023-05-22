#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]



#[tauri::command]
fn read_messages() -> Result<(), ()>{
  Ok(())
}


fn main() {

  tauri::Builder::default()
  .invoke_handler(tauri::generate_handler![read_messages])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
