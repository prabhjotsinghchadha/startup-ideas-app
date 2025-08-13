export class AppConfig {
  public static readonly isEmulatorMode = process.env['NEXT_PUBLIC_IS_EMULATOR_MODE'] === '1';
  public static readonly isProductionEnv =
    !AppConfig.isEmulatorMode && process.env['NEXT_PUBLIC_FIREBASE_ENV'] === 'PROD';
  public static readonly showFaucetButton = process.env['NEXT_PUBLIC_SHOW_FAUCET_BUTTON'] === '1';
}
