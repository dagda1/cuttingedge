import type { ExternalPluginEntry, OxlintConfig } from 'oxlint';

declare const config: OxlintConfig & {
  plugins: NonNullable<OxlintConfig['plugins']>;
  jsPlugins: ExternalPluginEntry[];
  ignorePatterns: string[];
  rules: NonNullable<OxlintConfig['rules']>;
  overrides: NonNullable<OxlintConfig['overrides']>;
};

export default config;
