import * as fs from "fs";
import * as yaml from "js-yaml";

export type Config = {
    readonly env?: {
        readonly account?: string;
        readonly region?: string;
    };
    readonly project: string;
    readonly backend?: string;

    readonly timezone?: string;
    readonly slackWebhookUrl?: string;
}

/**
 * Create config.
 *
 * @param env Environment name
 */
export function createConfig(env?: string): Config {
    return yaml.load(fs.readFileSync(`config${env ? `.${env}` : ""}.yaml`, "utf-8")) as Config;
}
