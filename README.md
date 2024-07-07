## GOLDENDOG LINUX

## GoldenDog Linux Remote Install Script

This script installs the Spotify client on GoldenDog Linux systems.

**Author:** Alexia Michelle <alexia@goldendoglinux.org>

**Instructions:**

1. Save spotify_installer.sh:

```bash
    #!/bin/bash
    ### GoldenDog Linux Remote Install Script
    ### Author: Alexia Michelle <alexia@goldendoglinux.org
    mkfile=$(mktemp)
    sudo echo -e "## GoldenDog Linux - Spotify Repository\ndeb http://repository.spotify.com/ stable non-free" > $mkfile
    sudo mv $mkfile /etc/apt/sources.list.d/spotify.list
    sudo apt update -y && sudo apt install spotify-client -y; clear
    echo "Spotify Client installed. Look for it in the start menu (Paw icon)"
    echo "To remove Spotify, type: sudo gdl remove spotify-client"
```

2. Run the script with root privileges:
```bash
   sudo bash spotify_installer.sh
   ```




