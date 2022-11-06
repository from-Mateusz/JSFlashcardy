import ConfiguredApplication from "./configuration/ApplicationConfigurator";

const application = ConfiguredApplication();

application.listen(process.env.SERVER_PORT, () => { console.log("Welcome to Flashcard middleware app")});

