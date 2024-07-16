
module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: "dfrgbaljd",
          api_key: "856154538851738",
          api_secret: "-xWbSyl1CfQzJjz-esocu1i-2nQ",
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });