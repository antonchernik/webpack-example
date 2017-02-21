Webpack example
---
Adding external tool in Phpstorm:
---
File - Settings - Tools - External Tools - + 

Set the name: 

    Webpack dev server

Tool settings:

    Program: C:\Users\[userName]\AppData\Roaming\npm\webpack-dev-server.cmd
	Parameters: --content-base [destinationFolder] 
	 Example: --content-base dist
	Working directory: $ProjectFileDir$

---
Adding keymap:
---
File - Settings - Keymap - External Tools - External Tools - Webpack dev server - Add shortcut -> Press "ALT + D"


