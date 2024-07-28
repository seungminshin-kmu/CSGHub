export const application_spaces = {
  title: "Application Space",
  placeholder: "Application Space Name",
  name: "ApplicationSpace Name",
  nickname: "ApplicationSpace Nickname",
  namespaceName: "Namespace/Name",
  desc: "Application Space intro",
  stoppedDesc: "This Space has been paused by its owner.",
  sleepingDesc: "This Space has entered sleeping state due to no operation for a long time.",
  buildDesc: "This Space is in building, please wait a while",
  errorDesc: "This Space is in Error, please check the logs",
  restart: "Restart",
  wakeup: "Wakeup",
  restartSpace: "Restart the Space",
  stop: "Stop",
  stopSpace: "Stop the Space",
  toggleStatusSuccess: 'Updated, please wait Space status change',
  gradioGuide: {
    notice: 'Get started with your grario app space!',
    noticeDesc: 'The space is created successfully! Space operation requires program files. Please refer to the following case to create the app.py file.',
    cloneTitle: 'Clone Application Space',
    createTitle: 'Create Gradio app.py file',
    submitTitle: 'Submit and Push',
    successNotes: 'After successful submission, the application will be deployed and run on the current page.',
    dependencyNotesTitle: 'About Dependencies',
    dependencyNotes1: 'You can specify Python dependencies by adding a requirements.txt file at the repository root.',
    dependencyNotes2: 'If necessary, you can also add a packages.txt file in the root directory of the repository to specify Debian dependencies.',
    dependencyNotes3: 'The Gradio package is preinstalled and its version is set in the sdk_version field of the README.md file.',
    docNotesTitle: 'About Docs',
    docNotes1: 'Click here to view the full documentation for gradio Spaces',
    useToken: 'Use my token'
  },
  streamlitGuide: {
    notice: 'Get started with your streamlit app space!',
    createTitle: 'Create Streamlit app.py file',
    dependencyNotes3: 'The Streamlit package is preinstalled and its version is set in the sdk_version field of the README.md file.',
    docNotes1: 'Click here to view the full documentation for streamlit Spaces',
  },
  errorPage: {
    log: 'Logs',
    build: 'Build',
    container: 'Container',
    errorAlert: 'Application Space deploy failed',
    errorAlertDesc: 'The code failed to run, check the log',
    showErrorLogs: 'Check error logs',
    startFailed: 'Space failed to start',
    startSuccess: 'Space started'
  },
  new: {
    title: 'Create a new space',
    subTitle1: 'Space is a Git repository that hosts machine learning demo application code',
    subTitle2: 'You can use different SDKs to build app spaces',
    owner: 'Owner',
    name: 'Name',
    spaceEnName: 'Space Name',
    namePlaceholder: '2-70 alphanumeric strings _.-, _.- cannot appear side by side',
    nickname: 'Nickname',
    nicknamePlaceholder: 'Please enter nickname',
    description: 'Space Description',
    descriptionPlaceholder: 'Please enter description',
    coverImage: 'Cover Image',
    coverImageDesc1: 'Click to upload, or drag the file here',
    coverImageDesc2: 'Support PNG, JPG format, aspect ratio 5:2, smaller than 2M',
    sdk: 'Select App Space SDK',
    sdkDesc: 'You can use Gradio, Streamlit as your space. In the future, Static, Docker, etc. will be opened to host applications',
    cloudResource: 'Cloud Resource',
    cloudResourceDesc1: 'You can switch to different space cloud resources at any time in space settings.',
    cloudResourceDesc2: 'After switching to paid resources, you will be charged based on the length of use.',
    public: 'Public',
    publicDesc: 'Anyone on the internet can see this model. Only you (personal model) or members of your organization can commit.',
    private: 'Private',
    privateDesc: 'Only you (personal model) or members of your organization can see and commit to this model.',
    notes: 'Once your space is created, you can upload your files using the web interface or git.',
    create: 'Create',
    createSuccess: "Application Space created successfully",
    tip: "This parameter applies to the application space path and cannot be changed after it is created",
    failedFetchResources: "Failed to fetch resources",
    license: "License",
    createFail: "Application Space creation failed",
    spaceEnName: "Application Space Name"
  },
  edit: {
    cloudResource: 'Cloud Resource',
    cloudResourceDesc: 'Switch to different cloud resources. When you switch to a paid resource, you will be charged based on how long you use it.',
    currentCloudResource: 'Current Cloud Resource',
    runningStatus: 'Running Status',
    runningStatusDesc: 'Switch running or stop application space',
    tips: "Will be displayed on the application spaces index page, optional",
    tips2: "An introduction about the ApplicationSpace, optional",
    changeVisibility: "Change Space visibility",
    statusText: "The current Space is now",
    status: "Status",
    visibility: "ApplicationSpace visibility",
    del: "Delete ApplicationSpace",
    delTips: "This action",
    delTips2: "can be undone and will permanently delete",
    delTips3: "the application space repository and all its files.",
    privateVis: "Only creator or members of your organization can see",
    publicVis: "Anyone can see this application space",
    confirmDel: "I understand, delete this application space",
    privateInfo:
      ", only the creator or organization admin can make submissions",
    publicInfo: ", visible to anyone on the internet.",
    needName: "Please provide name first",
    needDesc: "Please provide description first",
    replaceCoverImage: "Replace the cover image"
  },
  download: "Download Space",
  downloadSpace: "Download space data",
  app: 'App',
  status: {
    noAppfile: 'Uninitialized',
    building: 'Building',
    deploying: 'Deploying',
    startup: 'Startup',
    running: 'Running',
    sleeping: 'Sleeping',
    stopped: 'Stopped',
    buildingFailed: 'Building Failed',
    deployFailed: 'Deploy Failed',
    runtimeError: 'Runtime Error'
  }
}