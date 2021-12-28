import { Config } from '@jest/types';
export declare type OverridableJestConfig = Pick<
  Config.ProjectConfig,
  | 'rootDir'
  | 'globals'
  | 'setupFilesAfterEnv'
  | 'testMatch'
  | 'testEnvironment'
  | 'testURL'
  | 'transform'
  | 'transformIgnorePatterns'
  | 'moduleFileExtensions'
  | 'moduleDirectories'
  | 'roots'
  | 'modulePaths'
  | 'resetMocks'
> &
  Pick<Config.GlobalConfig, 'coverageDirectory' | 'collectCoverageFrom' | 'coveragePathIgnorePatterns' | 'reporters'>;
//# sourceMappingURL=jest.config.d.ts.map
