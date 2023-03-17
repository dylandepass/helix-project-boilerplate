module.exports = {
  ci: {
    collect: {
        startServerCommand: 'npx @adobe/helix-cli up --pages-url https://main--helix-project-boilerplate--adobe.hlx.page',
        url: ['http://localhost:3000']
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', {minScore: 0.9}],
      }
    },
  },
};