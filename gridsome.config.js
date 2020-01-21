// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: 'rotosleep',
  siteUrl: `https://www.rotosleep.com`,
  host: '0.0.0.0',
  titleTemplate: '%s - DFS',
  siteDescription: 'daily fantasy sports news',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'projects/**/*.md',
        typeName: 'ProjectPost',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'journal/**/*.md',
        typeName: 'JournalPost',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
        }
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ['@gridsome/remark-prismjs']
    }
  }
};
