const path = require('path');


exports.onCreateWebpackConfig = ({actions}) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                // due to broken linking react hooks
                // https://github.com/facebook/react/issues/13991#issuecomment-463486871
                react: path.resolve(path.join(__dirname, './node_modules/react')),
            },
        },
    });
};

// gatsby-node.js


