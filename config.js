export default {
  s3: {
    REGION: "us-west-2",
    BUCKET: "ufessor-api-dev-mode-attachmentsbucket-nzscjgh4co4t"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://yqhdvzup2i.execute-api.us-west-2.amazonaws.com/dev-mode"
  },
  teacherCognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_6lHU90tfC",
    APP_CLIENT_ID: "2gtfvsnjbletd8a8dc8nn72ma6",
    IDENTITY_POOL_ID: "YOUR_IDENTITY_POOL_ID"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_kdlHstlQV",
    APP_CLIENT_ID: "2rljogepnr3mursfmamb8sqf6m",
    IDENTITY_POOL_ID: "us-west-2:45edbbf7-b672-4b26-98ac-f2cb02e4e697",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  agoraSettings: {
    RESOLUTION_ARR: {
      "120p_1": [160, 120, 15, 65],
      "360p_4": [640, 360, 30, 600],
      "480p_4": [640, 480, 30, 750],
      "720p_3": [1280, 720, 30, 1710]
    },
    APP_ID: "93646be6dcd549888183fddf010dfc3e",
    token: null,
    SHARE_ID: 1,
    socket: "wss://d08ee2y5hi.execute-api.us-west-2.amazonaws.com/dev-mode",
  }
};