module.exports = {
  images: {
    domains: ['reactprojectfiles.s3.us-east-2.amazonaws.com'],
  },
};

module.exports = {
  images: {
     remotePatterns: [
      {
         protocol: "https",
        hostname: "reactprojectfiles.s3.us-east-2.amazonaws.com",
        // port: "1337",
      },
    ],
  },
};