import { FeatureAppStage } from '@volkswagen-onehub/oneaudi-os-infrastructure';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      STAGE: FeatureAppStage;
      APP_NAME: string;
      APP_VERSION?: string;
      AWS_ACCOUNT_ID: string;
      API_BASE_DIRECTORY?: string;
      APP_BASE_DIRECTORY?: string;
    }
  }
}

export default {
  stage: process.env.STAGE,
  appName: process.env.APP_NAME,
  appVersion: process.env.APP_VERSION,
  awsAccountId: process.env.AWS_ACCOUNT_ID,
  apiBaseDirectory: process.env.API_BASE_DIRECTORY,
  appBaseDirectory: process.env.APP_BASE_DIRECTORY,
};
