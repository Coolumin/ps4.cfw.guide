'''FTP''' (File Transfer Protocol) refers to a process that involves the transfer of files between devices over a network. The process works when one party allows another to send or receive files over the Internet. A exploited PS4 can have full access to the filesystem allowing swapping files, extracting files, sending files, etc.

== List of FTP payloads ==
During its many iterations of jailbreaks with different firmware versions, the PS4 has multiple versions of FTP payloads with different firmware support, port and more. Note that some of these FTP payloads may need a external command (MTRW) to enable full-access to the filesystem!

<table><thead>
  <tr>
    <th>FTP Name</th>
    <th>Supported firmwares</th>
    <th>Port</th>
    <th>Info</th>
  </tr></thead>
<tbody>
  <tr>
    <td>BD-JB FTP</td>
    <td>9.00, 9.03, 9.04</td>
    <td>1337</td>
    <td>Userland only (limited filesystem access). Requires a Blu-Ray burner and disc.</td>
  </tr>
  <tr>
    <td>FTP</td>
    <td>4.05-9.00</td>
    <td>1337</td>
    <td>Can be found on various exploit hosts.</td>
  </tr>
  <tr>
    <td>FTP Server + Debug Settings</td>
    <td>1.76</td>
    <td>1337</td>
    <td>Can be found on PS4 Playground (1.76 only).</td>
  </tr>
  <tr>
    <td>GoldHEN FTP '''(Recommended)'''</td>
    <td>5.05-11.00</td>
    <td>2121</td>
    <td>Bundled in GoldHEN, can be enabled in GoldHEN settings.</td>
  </tr>
  <tr>
    <td>OrbisFTP</td>
    <td>5.05-9.00</td>
    <td>1337</td>
    <td>Discontinued.</td>
  </tr>
  <tr>
    <td>OrbisMan</td>
    <td>4.55, 5.05</td>
    <td>21</td>
    <td>Automatically enabled when launching the homebrew app.</td>
  </tr>
  <tr>
    <td>PS4Xplorer</td>
    <td>5.05-9.00</td>
    <td>21</td>
    <td>When running the homebrew app, press L3 to enable FTP.</td>
  </tr>
</tbody></table>


==FTP Clients==
To connect to the PS4, the user needs a FTP client to communicate with the payloads. Here is a list of what clients you can use:

* FileZilla (Windows, MacOS, Linux) - '''Be wary of bundled in installer!'''
* WinSCP (Windows)
* CyberDuck (Windows, MacOS)
* Primitive FTPD (Android)
* powerFTP (Android)
* Documents by Readdle (iOS, macOS)