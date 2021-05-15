1. Install Chrome Extensions:
- [Get cookies.txt](https://chrome.google.com/webstore/detail/get-cookiestxt/bgaddhkoddajcdgocldbbfleckgcbcid)
- [WebScrapBook](https://chrome.google.com/webstore/detail/webscrapbook/oegnpmiddfljlloiklpkeelagaeejfai)
- [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

2. Create the download script:
* Log in to [Learning Oreilly](https://learning.oreilly.com) and use the `Get Cookies.txt Extension`  to download the current cookie with all the browser and login information.
* Use `WebScrapBook Extension`, menu entry `Batch capture selected links` to create a list of websites to download and copy them to the download script `dl.sh`. Do not forget to download the `index.html` page. Only directory needed not the `index.html` file itself.
* Run the download script: `$bash dl.sh`
* When loading the `index.html` file from the local storage system you can remove some useless DOM elements from the webpage by right-clicking and selecting the Tampermonkey entry.

3. Tampermonkey
* Tampermonkey is in the repository for reference and can be loaded into the extension. `Tampermonkey` -> `Dashboard` -> Click `+` to create the script.
* In the Tampermonkey advanced settings you have to enable local file access: `Settings` -> `Security` -> `Allow scripts to allow local files` -> `All local files` -> Press `Save` button.
