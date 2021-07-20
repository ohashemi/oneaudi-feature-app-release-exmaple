const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const envPath = path.join(__dirname, '..', 'env.env');
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = require(packageJsonPath);

// Get the app name without prefixes (e.g.: '@volkswagen-onehub')
let appName = packageJson.name.split('/').slice(-1)[0];
let appVersion = packageJson.version;

const envTemplate =
  `STAGE=""\nAPP_NAME="${appName}"\nAPP_VERSION="${appVersion}"\nAWS_ACCOUNT_ID=""\n` +
  'AWS_ACCESS_KEY_ID=""\nAWS_SECRET_ACCESS_KEY=""\nAPI_BASE_DIRECTORY="./dist/api"\n' +
  'APP_BASE_DIRECTORY="./dist/app"\nCDK_DEFAULT_REGION=""\nCDK_DEFAULT_ACCOUNT=""\n';

const checkForEnvironmentVariables = async () => {
  try {
    console.log(chalk.blue('Checking for env.env file...'));
    if (fs.existsSync(envPath)) {
      console.log(chalk.green('Using existing env.env file.'));
      console.log(
        chalk.yellow('Please make sure that the environment variables are set appropriately') +
          chalk.redBright(' before') +
          chalk.yellow(' using "localLambda:sam"!')
      );
      console.log(
        chalk.yellow('For more help, please consult the ') +
          chalk.cyan('README') +
          chalk.yellow('.')
      );
      console.log(chalk.blue('λ---------------------------------λ'));
      console.log(chalk.blue('| Starting local lambda functions |'));
      console.log(chalk.blue('λ---------------------------------λ'));
      // The following commands will be executed (see "yarn localLambda:sam" command in package.json):
      // 1: yarn build
      // 2: export $(grep -v '^#' ./env.env | xargs)
      // 3: rimraf ./cdk.out
      // 4: cdk synth --no-staging
      // 5: sam local start-api -t cdk.out/xxx.template.json
    } else {
      console.log(chalk.yellow('No env.env file found, creating a new one...'));
      await fs.writeFileSync(envPath, envTemplate);
      console.log(chalk.green('Created env.env file successfully!'));
      console.log(
        chalk.red('Exiting script: ') +
          chalk.yellow('please set the environment variables') +
          chalk.redBright(' before') +
          chalk.yellow(' using "localLambda:sam"!')
      );
      console.log(
        chalk.yellow('For more help, please consult the ') +
          chalk.cyan('README') +
          chalk.yellow('.')
      );
      process.exitCode = 1;
    }
  } catch (error) {
    console.log(chalk.red('Error while checking for/creating env.env file.'));
    console.log(error);
  }
};

checkForEnvironmentVariables();
