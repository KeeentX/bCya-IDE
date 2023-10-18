# BCYA Project Setup

**Prerequisites** <br><br>
Install the latest release of [Nodejs](https://nodejs.org/en/download) <br>
Install rustup-init for [Rust](https://www.rust-lang.org/tools/install) to setup compiler and Visual C++ Prerequisites
 1. For Visual C++ Prerequisites (If not yet installed on your system), choose 1 in the rustup prompt, do not close the prompt window.
 2. Wait for the Visual Studio initialization.
 3. In the Visual Studio installation, check the following:
	 - MSVC latest, in the time of this writing it is MSVC v143
	 - Windows 10/11 SDK
 4. Click install
 5. After installation, go back to rustup-init window and choose:
	 - 1.) Proceed with installation.

That's it!
## Project Setup
 1. Clone this repository.
 2. In the project root, run `npm install` and wait for the setup to finish installing dependencies.
 3. run `npm run tauri dev` and also wait for the setup to finish installing rust dependencies

> If installation is successful, a window GUI will pop up and you can start developing now.

Note: Don't forget to create your own branch and do a pull request.
