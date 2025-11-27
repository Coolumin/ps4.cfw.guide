const themeConfig = {
  search: 'Search',
  selectLanguageName: "English",
  backToHome: "Take me home",
  contributorsText: "Contributors",
  editLinkText: "Edit this page",
  lastUpdatedText: "Last Updated",
  openInNewWindow: "Open in new window",
  selectLanguageAriaLabel: "Select language",
  toggleDarkMode: "Toggle dark mode",
  toggleSidebar: "Toggle sidebar",
  discordNoticeText: "For support in English, ask for help at [HENkaku on Discord](https://discord.gg/m7MwpKA).",

  nav: [
    {
      text: 'Guides',
      items: [
        { text: 'Using FTP (WIP)', link: '/using-ftp' },
        {
          text: 'Using Cheats & Plugins (WIP)',
          link: 'using-cheats-&-plugins'
        },
          {
          text: 'Factory Reset (WIP)',
          link: '/factory-reset'
        },
      ]
    },
    {
      text: 'Site Info',
      items: [
        { text: 'Donations', link: '/donations' },
        { text: 'Credits', link: '/credits' },
      ]
    },
  ],
    
  sidebar: {
		/*
		 	The `/` path needs to be at the bottom as a catch all! If it is placed anywhere above,
			it will select the first matching one and not parse the rest!
		*/
		[`/`]: [
		{
			text: Guide
				{ text: Get Started, link: `get-started` },
				{ text: Updating your System Software, link: `updating-software` },
				{ text: Using a 5.05/5.07 Exploit Site, link: `5.05-exploit` },
				{ text: Using a 6.72 Exploit Site, link: `6.72-exploit` },
				{ text: Using PSFree-Lapse, link: `using-psfree-lapse` },
				{ text: Installing BD-JB, link: `installing-bd-jb` }
				{ text: Installing GoldHEN, link: `installing-goldhen` },
    ],
  },
};

export default {
  lang: 'en-US',
  label: "English",
  title: 'Vita Hacks Guide',
  description: 'A complete guide to PS Vita (TV) custom firmware, from stock to Ensō.',
  themeConfig: themeConfig
}
