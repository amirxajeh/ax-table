import { IAXTableState as IConfig } from "../@types/State";

export class Config {

  static options: IConfig = {
    search: {}
  }

  static setSearch(key: string, value = '') {
    Config.options.search[key] = value
    return Config
  }
}
